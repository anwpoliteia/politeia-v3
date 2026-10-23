// Generator: compact topic seeds → full §4.2 proposals + deterministic base
// vote aggregates. The distinctive substance (title, plain, recommendation,
// counter-argument, deltas) is authored per seed; the connective prose
// (situation, reasoning, distributional note, uncertainty) is composed here
// with dimension-aware, variant-selected templates so proposals read distinctly.

import type { Proposal, Source, VoteAggregate } from '../lib/types'
import { getMinistryBySlug } from './ministries'
import { getDimension, type DimensionId } from '../constants/dimensions'
import { TOPIC_SEEDS } from './topics'
import type { TopicSeed } from './topics/_seed'

// Accusative noun phrases so they slot into "αφορά …" / "ως προς …".
const DOMAIN: Record<string, { el: string; en: string }> = {
  finance: { el: 'τη δημοσιονομική πολιτική', en: 'fiscal policy' },
  foreign: { el: 'την εξωτερική πολιτική', en: 'foreign policy' },
  defence: { el: 'την εθνική άμυνα', en: 'national defence' },
  interior: { el: 'τη δημόσια διοίκηση και την αυτοδιοίκηση', en: 'public administration and local government' },
  justice: { el: 'τη δικαιοσύνη', en: 'justice' },
  education: { el: 'την παιδεία', en: 'education' },
  health: { el: 'τη δημόσια υγεία', en: 'public health' },
  labour: { el: 'την εργασία και την κοινωνική προστασία', en: 'labour and social protection' },
  migration: { el: 'τη μετανάστευση και το άσυλο', en: 'migration and asylum' },
  'citizen-protection': { el: 'τη δημόσια ασφάλεια', en: 'public safety' },
  development: { el: 'την ανάπτυξη και τις επενδύσεις', en: 'development and investment' },
  environment: { el: 'το περιβάλλον και την ενέργεια', en: 'environment and energy' },
  rural: { el: 'την αγροτική ανάπτυξη και τα τρόφιμα', en: 'rural development and food' },
  maritime: { el: 'τη ναυτιλία και τη νησιωτική πολιτική', en: 'maritime affairs and island policy' },
  tourism: { el: 'τον τουρισμό', en: 'tourism' },
  culture: { el: 'τον πολιτισμό και τον αθλητισμό', en: 'culture and sport' },
  infrastructure: { el: 'τις υποδομές και τις μεταφορές', en: 'infrastructure and transport' },
  digital: { el: 'την ψηφιακή διακυβέρνηση', en: 'digital governance' },
  pm: { el: 'τη συνολική κυβερνητική στρατηγική', en: 'whole-of-government strategy' },
}

const SOURCES: Record<string, Source[]> = {
  finance: [
    { title: 'ΕΛΣΤΑΤ — Στατιστική Αρχή Ελλάδος', url: 'https://www.statistics.gr/' },
    { title: 'OECD — Economic Surveys: Greece', url: 'https://www.oecd.org/economy/greece-economic-snapshot/' },
  ],
  foreign: [
    { title: 'European Council', url: 'https://www.consilium.europa.eu/' },
    { title: 'United Nations', url: 'https://www.un.org/' },
  ],
  defence: [
    { title: 'NATO — Defence Expenditure', url: 'https://www.nato.int/' },
    { title: 'IISS — The Military Balance', url: 'https://www.iiss.org/publications/the-military-balance' },
  ],
  interior: [
    { title: 'ΕΛΣΤΑΤ — Στατιστική Αρχή Ελλάδος', url: 'https://www.statistics.gr/' },
    { title: 'Council of Europe — Local Democracy', url: 'https://www.coe.int/' },
  ],
  justice: [
    { title: 'CEPEJ — Council of Europe', url: 'https://www.coe.int/en/web/cepej' },
    { title: 'EU Justice Scoreboard', url: 'https://commission.europa.eu/' },
  ],
  education: [
    { title: 'OECD — PISA', url: 'https://www.oecd.org/pisa/' },
    { title: 'EU — Education and Training', url: 'https://education.ec.europa.eu/' },
  ],
  health: [
    { title: 'WHO — Health systems', url: 'https://www.who.int/' },
    { title: 'ΕΟΔΥ — Εθνικός Οργανισμός Δημόσιας Υγείας', url: 'https://eody.gov.gr/' },
  ],
  labour: [
    { title: 'Eurostat — Employment', url: 'https://ec.europa.eu/eurostat' },
    { title: 'ILO — International Labour Organization', url: 'https://www.ilo.org/' },
  ],
  migration: [
    { title: 'UNHCR', url: 'https://www.unhcr.org/' },
    { title: 'EUAA — Asylum Report', url: 'https://euaa.europa.eu/' },
  ],
  'citizen-protection': [
    { title: 'Eurostat — Crime statistics', url: 'https://ec.europa.eu/eurostat' },
    { title: 'Ελληνική Αστυνομία', url: 'https://www.astynomia.gr/' },
  ],
  development: [
    { title: 'World Bank — Data', url: 'https://data.worldbank.org/' },
    { title: 'OECD — Investment', url: 'https://www.oecd.org/investment/' },
  ],
  environment: [
    { title: 'IEA — International Energy Agency', url: 'https://www.iea.org/' },
    { title: 'European Environment Agency', url: 'https://www.eea.europa.eu/' },
  ],
  rural: [
    { title: 'FAO — Food and Agriculture', url: 'https://www.fao.org/' },
    { title: 'EU — Common Agricultural Policy', url: 'https://agriculture.ec.europa.eu/' },
  ],
  maritime: [
    { title: 'IMO — International Maritime Organization', url: 'https://www.imo.org/' },
    { title: 'ΕΛΣΤΑΤ — Ναυτιλία', url: 'https://www.statistics.gr/' },
  ],
  tourism: [
    { title: 'UN Tourism (UNWTO)', url: 'https://www.unwto.org/' },
    { title: 'ΙΝΣΕΤΕ — Ινστιτούτο ΣΕΤΕ', url: 'https://insete.gr/' },
  ],
  culture: [
    { title: 'UNESCO', url: 'https://www.unesco.org/' },
    { title: 'Υπουργείο Πολιτισμού', url: 'https://www.culture.gov.gr/' },
  ],
  infrastructure: [
    { title: 'European Investment Bank', url: 'https://www.eib.org/' },
    { title: 'OECD — Infrastructure', url: 'https://www.oecd.org/infrastructure/' },
  ],
  digital: [
    { title: 'EU — Digital Economy and Society Index (DESI)', url: 'https://digital-strategy.ec.europa.eu/' },
    { title: 'OECD — Digital Government', url: 'https://www.oecd.org/governance/digital-government/' },
  ],
  pm: [
    { title: 'POLITEIA — Eudaimonia Index (internal series)', url: '/nous' },
    { title: 'OECD — Government at a Glance', url: 'https://www.oecd.org/governance/' },
  ],
}

const DEFAULT_SOURCES: Source[] = [
  { title: 'ΕΛΣΤΑΤ — Στατιστική Αρχή Ελλάδος', url: 'https://www.statistics.gr/' },
]

function hash(s: string): number {
  let h = 0
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0
  return Math.abs(h)
}

const sg = (v: number) => (v > 0 ? `+${v}` : v < 0 ? `−${Math.abs(v)}` : '0')

function rankDims(delta: Proposal['eudaimoniaDelta']) {
  const entries = Object.entries(delta) as [DimensionId, number][]
  const up = entries.filter(([, v]) => v > 0).sort((a, b) => b[1] - a[1])
  const down = entries.filter(([, v]) => v < 0).sort((a, b) => a[1] - b[1])
  return { up, down }
}

function pick<T>(arr: T[], n: number): T {
  return arr[n % arr.length]
}

function shortRole(slug: string): { el: string; en: string } {
  const m = getMinistryBySlug(slug)!
  if (m.isSynthesis) return { el: 'Πρωθυπουργός', en: 'Prime Minister' }
  return {
    el: `Υπουργός ${m.name.el.replace(/^Υπουργείο\s+/, '')}`,
    en: `Minister of ${m.name.en.replace(/^Ministry of\s+/, '')}`,
  }
}

function buildSituation(seed: TopicSeed, v: number): { el: string; en: string } {
  const dom = DOMAIN[seed.ministry] ?? { el: 'τη δημόσια πολιτική', en: 'public policy' }
  const el = pick(
    [
      `Το ζήτημα «${seed.title.el}» τίθεται ανοιχτά και αφορά ${dom.el}· οι επιλογές έχουν διακριτές αντισταθμίσεις.`,
      `Η τρέχουσα κατάσταση ως προς ${dom.el} αφήνει μετρήσιμο περιθώριο βελτίωσης, το οποίο η πρόταση επιχειρεί να αξιοποιήσει.`,
      `Η απόφαση εκκρεμεί και επηρεάζει άμεσα τους πολίτες ως προς ${dom.el}.`,
    ],
    v,
  )
  const en = pick(
    [
      `The question “${seed.title.en}” is on the table and concerns ${dom.en}; the choices carry distinct trade-offs.`,
      `The current position on ${dom.en} leaves measurable room for improvement, which the proposal seeks to capture.`,
      `The decision is pending and directly affects citizens with respect to ${dom.en}.`,
    ],
    v,
  )
  return { el, en }
}

function buildReasoning(seed: TopicSeed, v: number): { el: string; en: string } {
  const { up, down } = rankDims(seed.delta)
  const top = up[0]
  const topEl = top ? getDimension(top[0]).el : '—'
  const topEn = top ? getDimension(top[0]).en : '—'
  const topVal = top ? ` (${sg(top[1])})` : ''
  const downEl = down[0] ? `, με αναγνωρισμένο κόστος στη διάσταση ${getDimension(down[0][0]).el} (${sg(down[0][1])})` : ''
  const downEn = down[0] ? `, with a recognised cost to ${getDimension(down[0][0]).en} (${sg(down[0][1])})` : ''
  // Vary the framing so consecutive proposals do not read identically.
  const leadEl = top
    ? pick(
        [
          `Η εκτίμηση δείχνει ότι η παρέμβαση ενισχύει κυρίως ${topEl}${topVal}`,
          `Σύμφωνα με την ανάλυση, το κύριο όφελος εντοπίζεται στη διάσταση ${topEl}${topVal}`,
          `Τα στοιχεία υποδεικνύουν ότι η μεγαλύτερη βελτίωση αφορά ${topEl}${topVal}`,
        ],
        v,
      )
    : ''
  const leadEn = top
    ? pick(
        [
          `The assessment shows the intervention chiefly strengthens ${topEn}${topVal}`,
          `On the analysis, the main benefit lands in ${topEn}${topVal}`,
          `The evidence indicates the largest improvement is to ${topEn}${topVal}`,
        ],
        v,
      )
    : ''
  const confEl =
    seed.confidence >= 0.72
      ? 'Η βεβαιότητα είναι σχετικά υψηλή, στηριγμένη σε συγκλίνοντα στοιχεία.'
      : seed.confidence >= 0.6
        ? 'Η βεβαιότητα είναι μέτρια· τα στοιχεία είναι ενθαρρυντικά αλλά όχι οριστικά.'
        : 'Η βεβαιότητα είναι περιορισμένη και η πρόταση πρέπει να δοκιμαστεί σταδιακά.'
  const confEn =
    seed.confidence >= 0.72
      ? 'Confidence is relatively high, resting on converging evidence.'
      : seed.confidence >= 0.6
        ? 'Confidence is moderate; the evidence is encouraging but not decisive.'
        : 'Confidence is limited and the proposal should be tested incrementally.'
  const el = top ? `${leadEl}${downEl}. ${confEl}` : confEl
  const en = top ? `${leadEn}${downEn}. ${confEn}` : confEn
  return { el, en }
}

function buildCounter(seed: TopicSeed, v: number): { el: string; en: string } {
  const closerEl = pick(
    [
      ' Μια πιο σταδιακή, πιλοτική εκδοχή θα μείωνε τον κίνδυνο μη αναστρέψιμου σφάλματος.',
      ' Οι ίδιοι πόροι ίσως αποδίδουν μεγαλύτερο όφελος ευημερίας αλλού.',
      ' Χωρίς ισχυρές εγγυήσεις, το αναμενόμενο όφελος μπορεί να μην υλοποιηθεί.',
    ],
    v,
  )
  const closerEn = pick(
    [
      ' A more gradual, pilot-led version would reduce the risk of an irreversible error.',
      ' The same resources might yield a larger eudaimonia gain elsewhere.',
      ' Without strong safeguards, the expected benefit may not materialise.',
    ],
    v,
  )
  return {
    el: `Ο ισχυρότερος αντίλογος: ${seed.tension.el}${closerEl}`,
    en: `The strongest case against: ${seed.tension.en}${closerEn}`,
  }
}

function buildDistribution(seed: TopicSeed, v: number): { el: string; en: string } {
  const { up, down } = rankDims(seed.delta)
  const posEl = up.slice(0, 2).map(([d]) => getDimension(d).el).join(', ') || 'πολλές διαστάσεις'
  const posEn = up.slice(0, 2).map(([d]) => getDimension(d).en).join(', ') || 'several dimensions'
  const bearerEl = pick(['τον κρατικό προϋπολογισμό', 'τους άμεσα θιγόμενους κλάδους', 'τους φορολογουμένους'], v)
  const bearerEn = pick(['the state budget', 'the directly affected sectors', 'taxpayers'], v)
  const costEl = down[0]
    ? `Το κόστος εμφανίζεται στη διάσταση ${getDimension(down[0][0]).el} και βαραίνει ${bearerEl}.`
    : `Το κόστος βαραίνει κυρίως ${bearerEl}.`
  const costEn = down[0]
    ? `The cost appears in ${getDimension(down[0][0]).en} and falls on ${bearerEn}.`
    : `The cost falls chiefly on ${bearerEn}.`
  return {
    el: `Ωφελούνται οι πολίτες κυρίως ως προς ${posEl}. ${costEl}`,
    en: `Citizens gain chiefly in ${posEn}. ${costEn}`,
  }
}

function buildUncertainty(_seed: TopicSeed, v: number): { el: string; en: string } {
  const el = pick(
    [
      'Η σύσταση θα άλλαζε αν νεότερα στοιχεία ανέτρεπαν την παραπάνω εκτίμηση οφέλους.',
      'Η σύσταση θα άλλαζε αν ο κίνδυνος του αντιλόγου εκδηλωνόταν σε μεγαλύτερη κλίμακα από την αναμενόμενη.',
      'Η σύσταση εξαρτάται από τη διοικητική ικανότητα υλοποίησης· χωρίς αυτήν, το όφελος μειώνεται.',
    ],
    v,
  )
  const en = pick(
    [
      'The recommendation would change if newer data overturned the benefit estimate above.',
      'The recommendation would change if the counter-argument’s risk materialised at a larger scale than expected.',
      'The recommendation depends on administrative capacity to implement; without it, the benefit falls.',
    ],
    v,
  )
  return { el, en }
}

const BASE_DATE = Date.UTC(2026, 5, 15) // 15 June 2026

function buildProposal(seed: TopicSeed, index: number): Proposal {
  const ministry = getMinistryBySlug(seed.ministry)!
  const v = hash(seed.key + seed.ministry)
  const role = shortRole(seed.ministry)
  const created = new Date(BASE_DATE - (index * 4 + (v % 6)) * 86_400_000).toISOString()
  return {
    id: `prop-${seed.ministry}-${seed.key}`,
    ministryId: ministry.id,
    version: 1,
    supersedes: null,
    status: 'proposal',
    stakes: seed.stakes,
    title: seed.title,
    plain: seed.plain,
    situation: buildSituation(seed, v),
    recommendation: {
      el: `Προτείνεται ${seed.lever.el}.`,
      en: `We propose ${seed.lever.en}.`,
    },
    reasoning: buildReasoning(seed, v),
    counterArgument: buildCounter(seed, v),
    virtues: seed.virtues,
    eudaimoniaDelta: seed.delta,
    distributionalNote: buildDistribution(seed, v),
    confidence: seed.confidence,
    uncertainty: buildUncertainty(seed, v),
    sources: SOURCES[seed.ministry] ?? DEFAULT_SOURCES,
    modelUsed: seed.stakes === 'high' ? 'claude-opus-5' : 'claude-sonnet-4-6',
    accountableRole: role,
    createdAt: created,
  }
}

function buildBaseVotes(seed: TopicSeed): VoteAggregate {
  const v = hash(seed.key + seed.ministry + 'votes')
  const sum = Object.values(seed.delta).reduce((a, n) => a + n, 0)
  const approval = Math.min(
    0.94,
    Math.max(0.18, 0.5 + (seed.confidence - 0.65) * 0.7 + Math.sign(sum) * 0.04 + ((v % 21) - 10) / 100),
  )
  const total = 350 + (v % 3200)
  const up = Math.round(total * approval)
  return { up, down: total - up }
}

// Built once. Returns the generated proposals plus their deterministic base
// vote aggregates (so sentiment bars vary believably without storing identities).
let cache: { proposals: Proposal[]; baseVotes: Record<string, VoteAggregate> } | null = null

export function buildGenerated() {
  if (cache) return cache
  const proposals: Proposal[] = []
  const baseVotes: Record<string, VoteAggregate> = {}
  TOPIC_SEEDS.forEach((seed, i) => {
    const p = buildProposal(seed, i)
    proposals.push(p)
    baseVotes[p.id] = buildBaseVotes(seed)
  })
  cache = { proposals, baseVotes }
  return cache
}
