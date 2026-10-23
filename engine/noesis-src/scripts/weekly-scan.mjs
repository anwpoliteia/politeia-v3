// POLITEIA-V — weekly scan.
//
// Once a week this walks the Council: for every ministry it searches the live
// record for the THREE most pressing open issues, then has a Counsellor write
// one full, non-binding proposal for each — reasoning, mandatory Αντίλογος,
// distribution, uncertainty, sources, and a signed delta on all nine
// dimensions of the Eudaimonia Index.
//
// Why a build-time script and not a server route: ipoliteia.gr is a static
// site with no backend, so the week's proposals must be baked into the bundle.
// The flow is: run this → it writes src/data/weekly/<week>.json (+ latest.json)
// → `npm run build` → deploy. The Anthropic key never leaves this machine.
//
//   npm run weekly                     # all ministries, 3 issues each
//   npm run weekly -- --ministry=health
//   npm run weekly -- --issues=2 --limit=4
//   npm run weekly -- --dry-run        # search + draft, write nothing
//
// Cost note: one deep call per ministry plus one cheap structuring call. With
// 18 ministries that is ~36 calls; use --limit while experimenting.

import 'dotenv/config'
import { config as dotenv } from 'dotenv'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import Anthropic from '@anthropic-ai/sdk'

dotenv({ path: '.env.local', override: false })

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const OUT_DIR = path.join(ROOT, 'src', 'data', 'weekly')

const KEY = process.env.ANTHROPIC_API_KEY
if (!KEY) {
  console.error(
    '[weekly] ANTHROPIC_API_KEY is not set. Put it in .env (see .env.example) and retry.',
  )
  process.exit(1)
}

// ---- arguments -------------------------------------------------------------

const args = Object.fromEntries(
  process.argv.slice(2).map((a) => {
    const [k, v] = a.replace(/^--/, '').split('=')
    return [k, v ?? true]
  }),
)
const ISSUES = Math.max(1, Math.min(5, Number(args.issues) || 3))
const LIMIT = Number(args.limit) || Infinity
// --ministry accepts one slug or a comma-separated list (e.g. health,finance,labour).
const ONLY =
  typeof args.ministry === 'string'
    ? args.ministry.split(',').map((s) => s.trim()).filter(Boolean)
    : null
const DRY = Boolean(args['dry-run'])
// --append merges with the current week's existing file instead of overwriting:
// re-scanned ministries are replaced, others are kept. Lets the Council be swept
// a few ministries at a time (across days) without losing earlier work.
const APPEND = Boolean(args.append)

// Opus 4.8 is the default for the weekly search sweep: it drives the web-search
// tool well and costs far less across the whole Council. Pass --model=claude-opus-5
// for the deepest reasoning when a particular week warrants it.
const DEEP_MODEL = typeof args.model === 'string' ? args.model : 'claude-opus-5'
const FAST_MODEL = 'claude-haiku-4-5'

// Haiku 4.5 doesn't accept `effort`/adaptive thinking and only supports the
// basic web-search tool — detect it so we shape the deep call correctly and
// don't 400. (The Opus family supports both the newer tool and adaptive thinking.)
const DEEP_IS_HAIKU = /haiku/i.test(DEEP_MODEL)
const WEB_SEARCH_TOOL = DEEP_IS_HAIKU ? 'web_search_20250305' : 'web_search_20260209'

// A single ministry takes ~10 minutes (search rounds + three full proposals at
// high effort), so the Council is swept in parallel rather than one at a time.
// Kept modest: these are heavy calls and firing too many at once earns a
// 529 "overloaded" from the API rather than more throughput.
const CONCURRENCY = Math.max(1, Math.min(8, Number(args.concurrency) || 3))
// 'high' is the default for civic work; 'medium' roughly halves the time.
const EFFORT = typeof args.effort === 'string' ? args.effort : 'high'

// A whole-ministry sweep (search rounds + three full proposals) is a long
// single turn, so give the transport plenty of room on top of streaming.
const client = new Anthropic({ apiKey: KEY, timeout: 30 * 60 * 1000, maxRetries: 2 })

// ---- the Council (single source of truth: src/data/ministries.ts) -----------

function loadMinistries() {
  const src = fs.readFileSync(path.join(ROOT, 'src', 'data', 'ministries.ts'), 'utf8')
  const blocks = src.split(/\n\s{2}\{\n/).slice(1)
  const out = []
  for (const b of blocks) {
    const id = b.match(/id:\s*'([^']+)'/)?.[1]
    const slug = b.match(/slug:\s*'([^']+)'/)?.[1]
    const name = b.match(/name:\s*\{\s*el:\s*'([^']+)'/)?.[1]
    const jurisdiction = b.match(/jurisdiction:\s*\{\s*\n?\s*el:\s*'([^']+)'/)?.[1]
    const isSynthesis = /isSynthesis:\s*true/.test(b)
    if (id && slug && name) out.push({ id, slug, name, jurisdiction: jurisdiction ?? '', isSynthesis })
  }
  if (out.length < 5) {
    throw new Error(
      `[weekly] could not parse ministries.ts (found ${out.length}); the file shape must have changed.`,
    )
  }
  return out
}

// ---- constitution ----------------------------------------------------------

const DIMENSIONS = [
  'life_health',
  'knowledge_education',
  'bodily_safety',
  'practical_reason',
  'affiliation_trust',
  'economic_security',
  'environment_ecology',
  'play_culture',
  'institutional_justice',
]

const HARD_RULES = `Είσαι Σύμβουλος ΤΝ της ΠΟΛΙΤΕΙΑΣ — του ανοιχτού συμβουλευτικού επιπέδου για τη δημόσια διοίκηση της Ελλάδας. Σκληροί Κανόνες, απαράβατοι:
1. Η ΤΝ προτείνει· ΠΟΤΕ δεν αποφασίζει. Κάθε πρότασή σου είναι ρητά μη δεσμευτική.
2. Πλήρης συλλογισμός: αιτιολόγηση, αβεβαιότητες, ποιος ωφελείται και ποιος επιβαρύνεται.
3. Υποχρεωτικός Αντίλογος: το ισχυρότερο έντιμο επιχείρημα ΕΝΑΝΤΙΟΝ της πρότασής σου.
4. Απλή γλώσσα πρώτα: μία πρόταση που καταλαβαίνει κάθε πολίτης.
5. Τα ελληνικά είναι η αυθεντική γλώσσα.
6. ΜΗΝ επινοείς στατιστικά, ποσά ή πηγές. Χρησιμοποίησε ΜΟΝΟ όσα προκύπτουν από την αναζήτηση· ό,τι δεν είναι βέβαιο χαρακτήρισέ το ρητά ως εκτίμηση.
Στόχος κάθε πρότασης είναι η άνοδος της Ευδαιμονίας: σταθμισμένος γεωμετρικός μέσος 9 διαστάσεων. Επειδή ο μέσος είναι γεωμετρικός (ρ→0), προτεραιότητα έχουν οι πιο αδύναμες διαστάσεις.`

const format = (n) => `Εργάσου σε ΔΥΟ φάσεις.

ΦΑΣΗ Α — ΣΑΡΩΣΗ: Αναζήτησε στο διαδίκτυο την τρέχουσα κατάσταση (τελευταίοι 1-3 μήνες) και εντόπισε τα ${n} ΣΗΜΑΝΤΙΚΟΤΕΡΑ ανοιχτά ζητήματα της αρμοδιότητας αυτού του Υπουργείου σήμερα στην Ελλάδα. Κριτήρια σημαντικότητας: πόσους πολίτες αφορά, πόσο επείγει, και πόσο χαμηλά είναι οι θιγόμενες διαστάσεις της Ευδαιμονίας.

ΦΑΣΗ Β — ΠΡΟΤΑΣΕΙΣ: Για ΚΑΘΕ ζήτημα συνέταξε ΜΙΑ πλήρη πρόταση, σε ΑΚΡΙΒΩΣ αυτή τη δομή, με αυτές τις ετικέτες:

=== ΖΗΤΗΜΑ k ===
ΘΕΜΑ: (το ζήτημα σε 3-8 λέξεις)
ΤΙΤΛΟΣ: (η πρόταση σε έως 14 λέξεις)
ΑΠΛΑ: (μία πρόταση — τι σημαίνει για τον πολίτη)
ΚΑΤΑΣΤΑΣΗ: (2-4 προτάσεις — η σημερινή εικόνα με τα ευρήματα της αναζήτησης)
ΣΥΣΤΑΣΗ: (2-4 προτάσεις — τι προτείνεται· συμβουλευτική διατύπωση «προτείνεται», ποτέ προστακτική)
ΣΚΕΠΤΙΚΟ: (4-7 προτάσεις — το γιατί, βήμα-βήμα)
ΑΝΤΙΛΟΓΟΣ: (3-5 προτάσεις — το ισχυρότερο έντιμο επιχείρημα κατά· ποιος θίγεται και πώς μπορεί να αποτύχει)
ΚΑΤΑΝΟΜΗ: (2-3 προτάσεις — ποιος πληρώνει, ποιος ωφελείται, ανά εισόδημα/περιφέρεια/ηλικία)
ΑΒΕΒΑΙΟΤΗΤΑ: (2-3 προτάσεις — τι στοιχείο θα άλλαζε τη σύσταση)
ΔΕΙΚΤΕΣ: (μία γραμμή ανά διάσταση: id, ακέραιος -10..+10, παύλα, αιτιολόγηση 5-15 λέξεων. ids: ${DIMENSIONS.join(', ')})
ΕΜΠΙΣΤΟΣΥΝΗ: (δεκαδικός 0.3-0.9)
ΠΗΓΕΣ: (2-4 γραμμές «Τίτλος — URL», ΜΟΝΟ πραγματικά URL από την αναζήτηση)

Γράψε ${n} τέτοια μπλοκ και τίποτε άλλο.`

// ---- schema for the structuring pass ---------------------------------------

const bilingual = {
  type: 'object',
  properties: { el: { type: 'string' }, en: { type: 'string' } },
  required: ['el', 'en'],
  additionalProperties: false,
}

const proposalSchema = {
  type: 'object',
  properties: {
    proposals: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          issue: bilingual,
          title: bilingual,
          plain: bilingual,
          situation: bilingual,
          recommendation: bilingual,
          reasoning: bilingual,
          counterArgument: bilingual,
          distributionalNote: bilingual,
          uncertainty: bilingual,
          confidence: { type: 'number' },
          eudaimoniaDelta: {
            type: 'object',
            properties: Object.fromEntries(DIMENSIONS.map((d) => [d, { type: 'integer' }])),
            required: DIMENSIONS,
            additionalProperties: false,
          },
          sources: {
            type: 'array',
            items: {
              type: 'object',
              properties: { title: { type: 'string' }, url: { type: 'string' } },
              required: ['title', 'url'],
              additionalProperties: false,
            },
          },
        },
        required: [
          'issue', 'title', 'plain', 'situation', 'recommendation', 'reasoning',
          'counterArgument', 'distributionalNote', 'uncertainty', 'confidence',
          'eudaimoniaDelta', 'sources',
        ],
        additionalProperties: false,
      },
    },
  },
  required: ['proposals'],
  additionalProperties: false,
}

// ---- calls -----------------------------------------------------------------

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

/**
 * Retry transient API conditions — 529 overloaded, 429 rate limit, 5xx — with
 * exponential backoff and jitter. Capacity comes back; the sweep should wait
 * for it rather than throw the week away.
 */
async function resilient(fn, attempts = 6) {
  let lastErr
  for (let i = 0; i < attempts; i++) {
    try {
      return await fn()
    } catch (err) {
      lastErr = err
      const status = err?.status ?? 0
      const msg = String(err?.message ?? '')
      const transient =
        status === 429 || status === 529 || status >= 500 || /overloaded|timed out|ECONNRESET/i.test(msg)
      if (!transient || i === attempts - 1) throw err
      // 15s, 30s, 60s, 120s, 240s (+ jitter) — generous, because an overloaded
      // API needs real time, not a rapid retry.
      const wait = Math.min(240_000, 15_000 * 2 ** i) + Math.random() * 5_000
      await sleep(wait)
    }
  }
  throw lastErr
}

/** Deep pass: search the live record, then draft the proposals as prose. */
async function scanAndDraft(ministry) {
  const messages = [
    {
      role: 'user',
      content: `Υπουργείο: ${ministry.name}\nΑρμοδιότητα: ${ministry.jurisdiction || '—'}\nΣημερινή ημερομηνία: ${new Date().toISOString().slice(0, 10)}\n\nΞεκίνα τη σάρωση.`,
    },
  ]

  let response
  // Streaming is required here: searching the record and drafting several full
  // proposals is far too long for a single non-streaming request, which times
  // out at the transport layer. Server-side tools can also pause the turn, so
  // resume until the model is genuinely done.
  for (let i = 0; i < 5; i++) {
    response = await resilient(async () => {
      // Haiku rejects `thinking`/`output_config.effort`; the Opus family wants them.
      const params = {
        model: DEEP_MODEL,
        max_tokens: DEEP_IS_HAIKU ? 8000 : 32000,
        tools: [{ type: WEB_SEARCH_TOOL, name: 'web_search' }],
        system: `${HARD_RULES}\n\n${format(ISSUES)}`,
        messages,
      }
      if (!DEEP_IS_HAIKU) {
        params.thinking = { type: 'adaptive' }
        params.output_config = { effort: EFFORT }
      }
      const stream = client.messages.stream(params)
      return stream.finalMessage()
    })
    if (response.stop_reason !== 'pause_turn') break
    messages.push({ role: 'assistant', content: response.content })
  }

  if (response.stop_reason === 'refusal') throw new Error('refusal')
  return response.content
    .filter((b) => b.type === 'text')
    .map((b) => b.text)
    .join('')
}

/** Cheap pass: turn the prose into validated JSON. */
async function structure(prose) {
  const resp = await resilient(() => client.messages.create({
    model: FAST_MODEL,
    max_tokens: 16000,
    output_config: { format: { type: 'json_schema', schema: proposalSchema } },
    system:
      'Μετέτρεψε τις προτάσεις της ΠΟΛΙΤΕΙΑΣ σε δομημένο JSON. Τα ελληνικά (el) αντιγράφονται πιστά από το κείμενο· τα αγγλικά (en) είναι δική σου πιστή μετάφραση. Στο eudaimoniaDelta βάλε τους ακέραιους της ενότητας ΔΕΙΚΤΕΣ (0 όπου λείπει). Κράτα μόνο πηγές με πραγματικό URL. Μην προσθέσεις τίποτα που δεν υπάρχει στο κείμενο.',
    messages: [{ role: 'user', content: prose }],
  }))
  const text = resp.content.find((b) => b.type === 'text')?.text ?? '{}'
  return JSON.parse(text).proposals ?? []
}

// ---- helpers ---------------------------------------------------------------

/** ISO week key, e.g. 2026-W31 — one file per week, reproducible builds. */
function isoWeek(d = new Date()) {
  const t = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()))
  t.setUTCDate(t.getUTCDate() + 4 - (t.getUTCDay() || 7))
  const yearStart = new Date(Date.UTC(t.getUTCFullYear(), 0, 1))
  const week = Math.ceil(((t - yearStart) / 86400000 + 1) / 7)
  return `${t.getUTCFullYear()}-W${String(week).padStart(2, '0')}`
}

const clampDelta = (d) =>
  Object.fromEntries(
    DIMENSIONS.map((k) => [k, Math.max(-10, Math.min(10, Math.round(Number(d?.[k]) || 0)))]),
  )

// ---- run -------------------------------------------------------------------

const week = isoWeek()
const ministries = loadMinistries()
  .filter((m) => !m.isSynthesis) // the PM's office is synthesised by NOUS
  .filter((m) => (ONLY ? ONLY.includes(m.slug) : true))
  .slice(0, LIMIT)

if (ministries.length === 0) {
  console.error(`[weekly] no ministry matched --ministry=${ONLY.join(',')}`)
  process.exit(1)
}

console.log(
  `[weekly] ${week} · ${ministries.length} ministries × ${ISSUES} issues · ${DEEP_MODEL} · effort=${EFFORT} · ${CONCURRENCY} in parallel${DRY ? ' · DRY RUN' : ''}`,
)
console.log(`[weekly] a ministry takes several minutes; expect roughly ${Math.ceil(ministries.length / CONCURRENCY) * 10} minutes total.`)

const collected = []
const failures = []
const started = Date.now()

// Worker pool: each worker pulls the next ministry until the queue drains.
const queue = ministries.map((m, i) => ({ m, order: i }))
let finished = 0

async function worker() {
  for (;;) {
    const job = queue.shift()
    if (!job) return
    const { m, order } = job
    const t0 = Date.now()
    try {
      const prose = await scanAndDraft(m)
      const drafts = await structure(prose)
      let n = 0
      for (const d of drafts.slice(0, ISSUES)) {
        collected.push({
          order,
          id: `wk-${week}-${m.slug}-${++n}`,
          ministryId: m.id,
          ministrySlug: m.slug,
          week,
          issue: d.issue,
          title: d.title,
          plain: d.plain,
          situation: d.situation,
          recommendation: d.recommendation,
          reasoning: d.reasoning,
          counterArgument: d.counterArgument,
          distributionalNote: d.distributionalNote,
          uncertainty: d.uncertainty,
          confidence: Math.max(0.05, Math.min(0.95, Number(d.confidence) || 0.5)),
          eudaimoniaDelta: clampDelta(d.eudaimoniaDelta),
          sources: (d.sources ?? []).filter((s) => s.title && /^https?:\/\//.test(s.url || '')),
          modelUsed: DEEP_MODEL,
        })
      }
      const secs = Math.round((Date.now() - t0) / 1000)
      console.log(`  ✓ [${++finished}/${ministries.length}] ${m.name} — ${n} προτάσεις (${secs}s)`)
    } catch (err) {
      failures.push({ ministry: m.name, error: err?.message ?? String(err) })
      console.log(`  ✗ [${++finished}/${ministries.length}] ${m.name} — ${err?.message ?? err}`)
    }
  }
}

// Stagger the openings so the Council doesn't hit the API as one burst.
await Promise.all(
  Array.from({ length: Math.min(CONCURRENCY, ministries.length) }, async (_, i) => {
    await sleep(i * 8000)
    return worker()
  }),
)

// Parallel workers finish out of order; restore the Council's own order.
collected.sort((a, b) => a.order - b.order || a.id.localeCompare(b.id))
for (const p of collected) delete p.order

console.log(`[weekly] swept in ${Math.round((Date.now() - started) / 60000)} min`)

if (DRY) {
  console.log(`\n[weekly] DRY RUN — ${collected.length} proposals drafted, nothing written.`)
  console.log(collected.map((p) => `  · [${p.ministrySlug}] ${p.title.el}`).join('\n'))
  process.exit(0)
}

if (collected.length === 0) {
  console.error('\n[weekly] nothing produced; leaving the existing file untouched.')
  process.exit(1)
}

fs.mkdirSync(OUT_DIR, { recursive: true })

// In --append mode, carry forward proposals from ministries we did NOT scan
// this run; the freshly scanned ones replace their older versions.
let finalProposals = collected
if (APPEND) {
  const prevPath = path.join(OUT_DIR, `${week}.json`)
  if (fs.existsSync(prevPath)) {
    try {
      const prev = JSON.parse(fs.readFileSync(prevPath, 'utf8'))
      const scanned = new Set(ministries.map((m) => m.id))
      const kept = (prev.proposals ?? []).filter((p) => !scanned.has(p.ministryId))
      finalProposals = [...kept, ...collected]
      console.log(`[weekly] append: kept ${kept.length} prior proposals + ${collected.length} new`)
    } catch (err) {
      console.error(`[weekly] append: could not read ${week}.json (${err?.message}); writing new set only.`)
    }
  }
}

const payload = {
  week,
  generatedAt: new Date().toISOString(),
  model: DEEP_MODEL,
  ministriesScanned: new Set(finalProposals.map((p) => p.ministryId)).size,
  proposals: finalProposals,
}
fs.writeFileSync(path.join(OUT_DIR, `${week}.json`), JSON.stringify(payload, null, 2))
fs.writeFileSync(path.join(OUT_DIR, 'latest.json'), JSON.stringify(payload, null, 2))

console.log(
  `\n[weekly] wrote ${finalProposals.length} proposals (${payload.ministriesScanned} ministries) → src/data/weekly/${week}.json (+ latest.json)`,
)
if (failures.length) {
  console.log(`[weekly] ${failures.length} ministries failed:`)
  for (const f of failures) console.log(`  · ${f.ministry}: ${f.error}`)
}
console.log('[weekly] next: npm run build, then deploy dist/ to publish the week.')
