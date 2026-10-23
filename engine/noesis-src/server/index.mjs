// POLITEIA-V intelligence server. Holds the Anthropic key SERVER-SIDE (it must
// never reach the client bundle) and exposes the live-reasoning endpoints the
// UI consumes over SSE/JSON. Without ANTHROPIC_API_KEY the server reports
// live:false and the client falls back to its built-in demo simulation — the
// same dormant-until-keys pattern the app already uses for Supabase.
//
// Model routing (per the V architecture):
//   - claude-opus-5   → Counsellor proposals, Αντίλογος, ΝΟΥΣ synthesis,
//                       citizen impact estimates (heavy reasoning, adaptive
//                       thinking, effort-tuned)
//   - claude-haiku-4-5 → structured extraction, citizen companion chat, agora
//                        clustering (fast + cheap)

import 'dotenv/config'
import { config as dotenv } from 'dotenv'
import express from 'express'
import Anthropic from '@anthropic-ai/sdk'
import { registerBasanos } from './basanos.mjs'

dotenv({ path: '.env.local', override: false }) // allow either .env or .env.local

const PORT = process.env.POLITEIA_V_API_PORT || 8785
const KEY = process.env.ANTHROPIC_API_KEY
const LIVE = Boolean(KEY)

const DEEP = 'claude-opus-5'
const FAST = 'claude-haiku-4-5'

const client = LIVE ? new Anthropic({ apiKey: KEY }) : null

const app = express()
// No CORS on purpose: the browser reaches this server only through the Vite
// proxy (same-origin). Direct cross-origin calls from arbitrary websites are
// therefore refused by the browser — nobody can burn the key from a web page.
app.use(express.json({ limit: '2mb' }))

// ---- helpers ---------------------------------------------------------------

function sseOpen(res) {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream; charset=utf-8',
    'Cache-Control': 'no-cache, no-transform',
    Connection: 'keep-alive',
  })
  res.flushHeaders?.()
}

function sse(res, obj) {
  res.write(`data: ${JSON.stringify(obj)}\n\n`)
}

function sseFail(res, message) {
  sse(res, { type: 'error', message })
  sse(res, { type: 'done' })
  res.end()
}

function requireLive(res, asSse) {
  if (LIVE) return true
  if (asSse) {
    sseOpen(res)
    sseFail(res, 'not-live')
  } else {
    res.status(503).json({ error: 'not-live' })
  }
  return false
}

/** Clamp any client-supplied value to a bounded string before prompting. */
const S = (v, n) => String(v ?? '').slice(0, n)

// Wallet guard: in-memory per-minute rate limits, split by model cost.
// heavy = Opus 5 calls (counsellor/antilogos/nous/estimate), light = Haiku.
// ΒΑΣΑΝΟΣ gets its own two buckets because it fires on a playback clock rather
// than on a click: claims is a Haiku call per window of speech, verdict is an
// Opus 5 call with web search. Sharing heavy/light would let one video starve
// the rest of the app — or the reverse.
const buckets = {
  heavy: { n: 0, at: 0 },
  light: { n: 0, at: 0 },
  claims: { n: 0, at: 0 },
  verdict: { n: 0, at: 0 },
}
const LIMITS = { heavy: 6, light: 20, claims: 30, verdict: 12 }
function rateLimit(res, kind) {
  const b = buckets[kind]
  const now = Date.now()
  if (now > b.at) {
    b.n = 0
    b.at = now + 60_000
  }
  if (b.n >= LIMITS[kind]) {
    res.status(429).json({ error: 'rate-limited' })
    return false
  }
  b.n++
  return true
}

/** Stream a deep-model call to the client as SSE deltas; resolve final message. */
async function streamDeep(res, { system, messages, effort = 'high', maxTokens = 20000 }) {
  const stream = client.messages.stream({
    model: DEEP,
    max_tokens: maxTokens,
    thinking: { type: 'adaptive' },
    output_config: { effort },
    system,
    messages,
  })
  // Cost guard: if the citizen closes the tab mid-stream, stop paying for
  // tokens nobody will read.
  res.on('close', () => {
    try {
      stream.abort()
    } catch {
      /* already finished */
    }
  })
  stream.on('text', (t) => sse(res, { type: 'delta', text: t }))
  const final = await stream.finalMessage()
  if (final.stop_reason === 'refusal') {
    throw Object.assign(new Error('refusal'), { refusal: true })
  }
  return final.content
    .filter((b) => b.type === 'text')
    .map((b) => b.text)
    .join('')
}

/** One-shot structured JSON from Haiku (schema-guaranteed). */
async function structured(schema, system, user, maxTokens = 8000) {
  const resp = await client.messages.create({
    model: FAST,
    max_tokens: maxTokens,
    output_config: { format: { type: 'json_schema', schema } },
    system,
    messages: [{ role: 'user', content: user }],
  })
  const text = resp.content.find((b) => b.type === 'text')?.text ?? '{}'
  return JSON.parse(text)
}

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

const bilingual = {
  type: 'object',
  properties: { el: { type: 'string' }, en: { type: 'string' } },
  required: ['el', 'en'],
  additionalProperties: false,
}

const deltaSchema = {
  type: 'object',
  properties: Object.fromEntries(DIMENSIONS.map((d) => [d, { type: 'integer' }])),
  required: DIMENSIONS,
  additionalProperties: false,
}

// ---- constitutions (system prompts) ---------------------------------------

const HARD_RULES = `Είσαι Σύμβουλος ΤΝ της ΠΟΛΙΤΕΙΑΣ — του ανοιχτού συμβουλευτικού επιπέδου για τη δημόσια διοίκηση της Ελλάδας. Σκληροί Κανόνες, απαράβατοι:
1. Η ΤΝ προτείνει· ΠΟΤΕ δεν αποφασίζει. Κάθε πρότασή σου είναι ρητά μη δεσμευτική.
2. Πλήρης συλλογισμός: αιτιολόγηση, αβεβαιότητες, ποιος ωφελείται/ποιος επιβαρύνεται.
3. Υποχρεωτικός Αντίλογος: το ισχυρότερο έντιμο επιχείρημα ΕΝΑΝΤΙΟΝ της πρότασής σου.
4. Απλή γλώσσα πρώτα: μία πρόταση που καταλαβαίνει κάθε πολίτης.
5. Τα ελληνικά είναι η αυθεντική γλώσσα.
6. Μη επινοείς στατιστικά ή πηγές. Αν δεν είσαι βέβαιος για αριθμό, χαρακτήρισέ τον ρητά ως εκτίμηση. Στις πηγές ανέφερε φορείς (π.χ. ΕΛΣΤΑΤ, Eurostat, ΟΟΣΑ) μόνο ως κατεύθυνση ελέγχου, όχι με επινοημένα στοιχεία.
Ο στόχος κάθε πρότασης είναι η άνοδος της Ευδαιμονίας: σταθμισμένος γεωμετρικός μέσος 9 διαστάσεων (ζωή/υγεία, γνώση/παιδεία, σωματική ασφάλεια, πρακτικός λόγος/φωνή, συμμετοχή/εμπιστοσύνη, οικονομική ασφάλεια, περιβάλλον, παιχνίδι/πολιτισμός, θεσμική δικαιοσύνη). Επειδή ο μέσος είναι γεωμετρικός (ρ→0), προτεραιότητα έχουν οι πιο αδύναμες διαστάσεις.`

const COUNSELLOR_FORMAT = `Γράψε την πρόταση στα ελληνικά, σε ΑΚΡΙΒΩΣ αυτή τη δομή με αυτές τις ετικέτες (μία ενότητα ανά ετικέτα, με κενή γραμμή ανάμεσα):
ΤΙΤΛΟΣ: (έως 14 λέξεις)
ΑΠΛΑ: (μία πρόταση — τι σημαίνει για τον πολίτη)
ΚΑΤΑΣΤΑΣΗ: (2-4 προτάσεις — η σημερινή εικόνα, με ρεαλισμό)
ΣΥΣΤΑΣΗ: (2-4 προτάσεις — τι προτείνεται, με συμβουλευτική διατύπωση «προτείνεται», ποτέ προστακτική)
ΣΚΕΠΤΙΚΟ: (4-7 προτάσεις — το γιατί, βήμα-βήμα, με τα κρίσιμα μεγέθη χαρακτηρισμένα ως εκτιμήσεις όπου δεν είναι βέβαια)
ΑΝΤΙΛΟΓΟΣ: (3-5 προτάσεις — το ισχυρότερο έντιμο επιχείρημα κατά· ποιος θίγεται και γιατί μπορεί να αποτύχει)
ΚΑΤΑΝΟΜΗ: (2-3 προτάσεις — ποιος πληρώνει, ποιος ωφελείται, ανά εισόδημα/περιφέρεια/ηλικία)
ΑΒΕΒΑΙΟΤΗΤΑ: (2-3 προτάσεις — τι στοιχείο θα άλλαζε τη σύσταση)
ΔΕΙΚΤΕΣ: (για κάθε μία από τις 9 διαστάσεις: id, πρόσημο και ακέραιο μέγεθος από -10 έως +10, παύλα, αιτιολόγηση 5-15 λέξεων. Μία γραμμή ανά διάσταση, μηδενικές επιτρέπονται. Χρησιμοποίησε τα ids: ${DIMENSIONS.join(', ')})
ΕΜΠΙΣΤΟΣΥΝΗ: (δεκαδικός 0.3-0.9)
ΠΗΓΕΣ: (2-4 γραμμές «Φορέας — τι να ελεγχθεί», χωρίς επινοημένα URL)`

// ---- endpoints -------------------------------------------------------------

app.get('/api/health', (_req, res) => {
  res.json({ live: LIVE, counsellorModel: DEEP, fastModel: FAST })
})

// NOUS 2.0 (the anti-corruption platform on :3000) — server-side reachability
// probe, because in-browser cross-origin probes are unreliable (an iframe's
// error page still fires onLoad, and no-cors fetches lie).
app.get('/api/nous2-health', async (_req, res) => {
  try {
    const r = await fetch('http://127.0.0.1:3000/', {
      signal: AbortSignal.timeout(2500),
    })
    res.json({ up: r.ok })
  } catch {
    res.json({ up: false })
  }
})

// 1 · Real AI Counsellor — generate a full proposal for a ministry, streamed.
app.post('/api/counsellor', async (req, res) => {
  if (!rateLimit(res, 'heavy')) return
  if (!requireLive(res, true)) return
  const { ministryName, jurisdiction, topic, language = 'el' } = req.body ?? {}
  if (!ministryName) return sseFail(res, 'bad-request')
  sseOpen(res)
  try {
    sse(res, { type: 'phase', phase: 'reasoning' })
    const brief = `Υπουργείο: ${S(ministryName, 120)}\nΑρμοδιότητα: ${S(jurisdiction, 300) || '—'}\n${
      topic ? `Θέμα που ζήτησε ο πολίτης: ${S(topic, 300)}` : 'Διάλεξε εσύ το πιο κρίσιμο ανοιχτό ζήτημα της αρμοδιότητας σήμερα (2026).'
    }\n\nΣυνέταξε ΜΙΑ πλήρη πρόταση.`
    const prose = await streamDeep(res, {
      system: `${HARD_RULES}\n\n${COUNSELLOR_FORMAT}`,
      messages: [{ role: 'user', content: brief }],
      effort: 'high',
    })

    sse(res, { type: 'phase', phase: 'structuring' })
    const proposalSchema = {
      type: 'object',
      properties: {
        title: bilingual,
        plain: bilingual,
        situation: bilingual,
        recommendation: bilingual,
        reasoning: bilingual,
        counterArgument: bilingual,
        distributionalNote: bilingual,
        uncertainty: bilingual,
        eudaimoniaDelta: deltaSchema,
        confidence: { type: 'number' },
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
        'title', 'plain', 'situation', 'recommendation', 'reasoning',
        'counterArgument', 'distributionalNote', 'uncertainty',
        'eudaimoniaDelta', 'confidence', 'sources',
      ],
      additionalProperties: false,
    }
    const extracted = await structured(
      proposalSchema,
      'Μετέτρεψε την πρόταση της ΠΟΛΙΤΕΙΑΣ σε δομημένο JSON. Τα ελληνικά (el) αντιγράφονται πιστά από το κείμενο· τα αγγλικά (en) είναι δική σου πιστή μετάφραση. Στο eudaimoniaDelta βάλε τους ακέραιους από την ενότητα ΔΕΙΚΤΕΣ (0 όπου δεν αναφέρεται). Στα sources βάλε url κενό string αν δεν δίνεται. Μη προσθέσεις τίποτα που δεν υπάρχει στο κείμενο.',
      prose,
    )
    sse(res, { type: 'final', data: { proposal: extracted, modelUsed: DEEP } })
    sse(res, { type: 'done' })
    res.end()
  } catch (err) {
    console.error('[counsellor]', err)
    sseFail(res, err?.refusal ? 'refusal' : 'api-error')
  }
})

// 4 · Deep adversarial Αντίλογος on an existing proposal, streamed prose.
app.post('/api/antilogos', async (req, res) => {
  if (!rateLimit(res, 'heavy')) return
  if (!requireLive(res, true)) return
  const { title, recommendation, reasoning, language = 'el' } = req.body ?? {}
  if (!title) return sseFail(res, 'bad-request')
  sseOpen(res)
  try {
    sse(res, { type: 'phase', phase: 'reasoning' })
    await streamDeep(res, {
      system: `${HARD_RULES}\n\nΡόλος σου εδώ: ο θεσμικός Αντίλογος («κόκκινη ομάδα»). Δεν είσαι κυνικός· είσαι ο πιο έντιμος και οξυδερκής αντίπαλος της πρότασης. ${
        language === 'en' ? 'Απάντησε στα αγγλικά.' : 'Απάντησε στα ελληνικά.'
      } Δώσε 4 σύντομες ενότητες με επικεφαλίδες: 1) Το ισχυρότερο επιχείρημα κατά. 2) Ποιοι θίγονται περισσότερο. 3) Πώς αποτυγχάνει στην πράξη (μηχανισμοί, κίνητρα, διοίκηση). 4) Τι θα έπρεπε να αποδειχθεί για να αλλάξω γνώμη. Συνολικά έως 300 λέξεις, χωρίς εισαγωγές.`,
      messages: [{
        role: 'user',
        content: `Πρόταση: ${S(title, 400)}\n\nΣύσταση: ${S(recommendation, 2500)}\n\nΣκεπτικό: ${S(reasoning, 5000)}`,
      }],
      effort: 'high',
      maxTokens: 12000,
    })
    sse(res, { type: 'done' })
    res.end()
  } catch (err) {
    console.error('[antilogos]', err)
    sseFail(res, err?.refusal ? 'refusal' : 'api-error')
  }
})

// 2 · ΝΟΥΣ meta-agent — whole-of-government synthesis, streamed prose.
app.post('/api/nous', async (req, res) => {
  if (!rateLimit(res, 'heavy')) return
  if (!requireLive(res, true)) return
  const { proposals = [], index = {}, language = 'el' } = req.body ?? {}
  sseOpen(res)
  try {
    sse(res, { type: 'phase', phase: 'reasoning' })
    const corpus = (Array.isArray(proposals) ? proposals : [])
      .slice(0, 60)
      .map(
        (p, i) =>
          `${i + 1}. [${S(p?.ministry, 80)}] ${S(p?.title, 220)} — ΔΕ: ${S(JSON.stringify(p?.delta ?? {}), 300)}`,
      )
      .join('\n')
    await streamDeep(res, {
      system: `${HARD_RULES}\n\nΕίσαι ο ΝΟΥΣ — ο μετα-πράκτορας σύνθεσης για τον Πρωθυπουργό. ${
        language === 'en' ? 'Απάντησε στα αγγλικά.' : 'Απάντησε στα ελληνικά.'
      } Από τις προτάσεις όλων των Υπουργείων και την τρέχουσα εικόνα του Δείκτη, συνέταξε σύνοψη έως 350 λέξεων με 4 ενότητες: 1) Η εικόνα σε μία παράγραφο. 2) Οι 3 προτεραιότητες που ανεβάζουν περισσότερο τις πιο αδύναμες διαστάσεις — και γιατί. 3) Οι 2 πιο σοβαρές διυπουργικές εντάσεις (τι κερδίζεται/τι θυσιάζεται). 4) Τι ΔΕΝ πρέπει να αποφασιστεί ακόμη και ποιο στοιχείο λείπει. Θυμήσου: συμβουλεύεις· δεν αποφασίζεις.`,
      messages: [{
        role: 'user',
        content: `Τρέχων Δείκτης Ευδαιμονίας ανά διάσταση (0-100): ${S(JSON.stringify(index), 600)}\n\nΠροτάσεις του Συμβουλίου:\n${corpus}`,
      }],
      effort: 'high',
      maxTokens: 16000,
    })
    sse(res, { type: 'done' })
    res.end()
  } catch (err) {
    console.error('[nous]', err)
    sseFail(res, err?.refusal ? 'refusal' : 'api-error')
  }
})

// 5a · Citizen companion — Socratic Q&A grounded ONLY in the proposal text.
app.post('/api/companion', async (req, res) => {
  if (!rateLimit(res, 'light')) return
  if (!requireLive(res, true)) return
  const { proposal, question, history = [], language = 'el' } = req.body ?? {}
  if (!proposal || !question) return sseFail(res, 'bad-request')
  sseOpen(res)
  try {
    const doc = `ΤΙΤΛΟΣ: ${S(proposal.title, 400)}\nΑΠΛΑ: ${S(proposal.plain, 1200)}\nΚΑΤΑΣΤΑΣΗ: ${S(proposal.situation, 4000)}\nΣΥΣΤΑΣΗ: ${S(proposal.recommendation, 4000)}\nΣΚΕΠΤΙΚΟ: ${S(proposal.reasoning, 6000)}\nΑΝΤΙΛΟΓΟΣ: ${S(proposal.counterArgument, 4000)}\nΚΑΤΑΝΟΜΗ: ${S(proposal.distributionalNote, 2500)}\nΑΒΕΒΑΙΟΤΗΤΑ: ${S(proposal.uncertainty, 2500)}`
    const stream = client.messages.stream({
      model: FAST,
      max_tokens: 1500,
      system: `Είσαι ο Σύντροφος του Πολίτη στην ΠΟΛΙΤΕΙΑ-V. Απαντάς σε ερωτήσεις πολιτών ΜΟΝΟ με βάση το κείμενο της πρότασης που σου δίνεται — αν κάτι δεν υπάρχει στο κείμενο, το λες καθαρά («Η πρόταση δεν το καλύπτει αυτό»). Μιλάς απλά, ζεστά, σε 2-6 προτάσεις, χωρίς τεχνικούς όρους. Δεν δίνεις δική σου πολιτική γνώμη· εξηγείς και τις δύο πλευρές. ${
        language === 'en' ? 'Reply in English.' : 'Απάντησε στα ελληνικά.'
      }\n\n=== Η ΠΡΟΤΑΣΗ ===\n${doc}`,
      messages: [
        // Roles are coerced (never trusted from the client) and content bounded.
        ...(Array.isArray(history) ? history : []).slice(-6).map((m) => ({
          role: m?.role === 'assistant' ? 'assistant' : 'user',
          content: S(m?.content, 1500) || '…',
        })),
        { role: 'user', content: S(question, 1000) },
      ],
    })
    res.on('close', () => {
      try {
        stream.abort()
      } catch {
        /* already finished */
      }
    })
    stream.on('text', (t) => sse(res, { type: 'delta', text: t }))
    await stream.finalMessage()
    sse(res, { type: 'done' })
    res.end()
  } catch (err) {
    console.error('[companion]', err)
    sseFail(res, 'api-error')
  }
})

// 5b · Eudaimonia impact estimator — citizen idea → 9-dim ΔΕ with reasoning.
app.post('/api/estimate', async (req, res) => {
  if (!rateLimit(res, 'heavy')) return
  if (!requireLive(res, false)) return
  const { idea, language = 'el' } = req.body ?? {}
  if (!idea || String(idea).trim().length < 8) return res.status(400).json({ error: 'bad-request' })
  try {
    const schema = {
      type: 'object',
      properties: {
        title: bilingual,
        deltas: deltaSchema,
        rationale: {
          type: 'object',
          properties: Object.fromEntries(DIMENSIONS.map((d) => [d, { type: 'string' }])),
          required: DIMENSIONS,
          additionalProperties: false,
        },
        uncertainty: bilingual,
        confidence: { type: 'number' },
      },
      required: ['title', 'deltas', 'rationale', 'uncertainty', 'confidence'],
      additionalProperties: false,
    }
    const resp = await client.messages.create({
      model: DEEP,
      max_tokens: 8000,
      thinking: { type: 'adaptive' },
      output_config: { effort: 'medium', format: { type: 'json_schema', schema } },
      system: `${HARD_RULES}\n\nΈνας πολίτης καταθέτει μια ιδέα πολιτικής στο Εργαστήριο της ΠΟΛΙΤΕΙΑΣ-V. Εκτίμησε με ειλικρίνεια την επίδρασή της σε καθεμία από τις 9 διαστάσεις της Ευδαιμονίας: ακέραιος από -10 έως +10 ανά διάσταση (0 = αμελητέα), με αιτιολόγηση 8-20 λέξεων ανά διάσταση στα ${
        language === 'en' ? 'αγγλικά' : 'ελληνικά'
      } στο πεδίο rationale. Δώσε σύντομο τίτλο της ιδέας (el+en), τη σημαντικότερη αβεβαιότητα (el+en), και confidence 0.2-0.8. Να είσαι νηφάλιος: οι περισσότερες ιδέες έχουν μικρές επιδράσεις και πραγματικά κόστη.`,
      messages: [{ role: 'user', content: String(idea).slice(0, 2000) }],
    })
    if (resp.stop_reason === 'refusal') return res.status(200).json({ error: 'refusal' })
    const text = resp.content.find((b) => b.type === 'text')?.text ?? '{}'
    res.json({ estimate: JSON.parse(text), modelUsed: resp.model })
  } catch (err) {
    console.error('[estimate]', err)
    res.status(502).json({ error: 'api-error' })
  }
})

// 6 · Agora intelligence — cluster citizen voices into a map of the debate.
app.post('/api/agora', async (req, res) => {
  if (!rateLimit(res, 'light')) return
  if (!requireLive(res, false)) return
  const { comments = [], language = 'el' } = req.body ?? {}
  if (!Array.isArray(comments) || !comments.length)
    return res.status(400).json({ error: 'bad-request' })
  try {
    const schema = {
      type: 'object',
      properties: {
        themes: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              label: { type: 'string' },
              count: { type: 'integer' },
              stance: { type: 'string', enum: ['for', 'against', 'mixed'] },
            },
            required: ['label', 'count', 'stance'],
            additionalProperties: false,
          },
        },
        consensus: { type: 'array', items: { type: 'string' } },
        dissensus: { type: 'array', items: { type: 'string' } },
        strongestFor: { type: 'string' },
        strongestAgainst: { type: 'string' },
      },
      required: ['themes', 'consensus', 'dissensus', 'strongestFor', 'strongestAgainst'],
      additionalProperties: false,
    }
    const corpus = comments
      .slice(0, 80)
      .map((c, i) => `${i + 1}. [${S(c?.author, 60)}] ${S(c?.body, 400)}`)
      .join('\n')
    const data = await structured(
      schema,
      `Χαρτογραφείς τη δημόσια διαβούλευση της ΠΟΛΙΤΕΙΑΣ-V. Από τα σχόλια πολιτών εξάγεις: 3-6 θεματικές ομάδες (label 2-5 λέξεις, count = πόσα σχόλια, stance), 1-3 σημεία πραγματικής συναίνεσης, 1-3 σημεία πραγματικής διαφωνίας, και το ισχυρότερο επιχείρημα κάθε πλευράς (1 πρόταση το καθένα, πιστά στο πνεύμα των σχολίων — μην το ωραιοποιείς). ${
        language === 'en' ? 'Γράψε τα πάντα στα αγγλικά.' : 'Γράψε τα πάντα στα ελληνικά.'
      } Φωτίζεις τη συζήτηση· δεν τη λογοκρίνεις.`,
      corpus,
      3000,
    )
    res.json({ map: data, modelUsed: FAST })
  } catch (err) {
    console.error('[agora]', err)
    res.status(502).json({ error: 'api-error' })
  }
})

// 7 · ΒΑΣΑΝΟΣ — live claim-checking of any video (server/basanos.mjs).
registerBasanos(app, {
  client,
  DEEP,
  FAST,
  sseOpen,
  sse,
  sseFail,
  requireLive,
  rateLimit,
  structured,
  S,
})

// Loopback only: the key-holding server must never be reachable from the LAN.
const server = app.listen(PORT, '127.0.0.1', () => {
  console.log(
    `[politeia-v] intelligence server on 127.0.0.1:${PORT} — mode: ${LIVE ? `LIVE (${DEEP} + ${FAST})` : 'DEMO (no ANTHROPIC_API_KEY; client simulates)'}`,
  )
})

// Dev resilience: if the port is already held (an orphaned instance from a
// previous `concurrently` run), don't crash — crashing makes concurrently -k
// tear down Vite too. Stay idle; the Vite proxy will talk to the instance
// that already owns the port.
server.on('error', (err) => {
  if (err?.code === 'EADDRINUSE') {
    console.warn(
      `[politeia-v] :${PORT} already in use — an intelligence server is already running; this instance stays idle.`,
    )
    setInterval(() => {}, 1 << 30) // keep the process alive for concurrently
  } else {
    throw err
  }
})
