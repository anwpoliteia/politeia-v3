// POLITEIA-V demo simulators. When no ANTHROPIC_API_KEY is configured on the
// intelligence server, these produce a faithful *simulation* of the live
// experience from the app's own seed corpus — clearly labelled as a demo in
// the UI. Same dormant-until-keys pattern as the Supabase auth.

import type { Comment, Lang, Ministry, Proposal } from './types'
import { DIMENSIONS, type DimensionId } from '../constants/dimensions'
import { listProposals, listProposalsByMinistry, currentIndex } from '../data/repository'
import type { VAgoraMap, VEstimate, VProposalDraft } from './vApi'

/** Stream text to a callback in small chunks, like a live model. */
export async function demoStream(
  text: string,
  onDelta: (t: string) => void,
  signal?: { aborted: boolean },
): Promise<void> {
  const words = text.split(/(\s+)/)
  for (let i = 0; i < words.length; i += 2) {
    if (signal?.aborted) return
    onDelta(words.slice(i, i + 2).join(''))
    await new Promise((r) => setTimeout(r, 24))
  }
}

const pickSeed = (ministryId: string): Proposal => {
  const pool = listProposalsByMinistry(ministryId)
  return pool[Math.floor(Math.random() * pool.length)] ?? listProposals()[0]
}

/** A counsellor session simulated from the seed corpus. */
export function demoCounsellor(ministry: Ministry, lang: Lang): {
  prose: string
  draft: VProposalDraft
} {
  const seed = pickSeed(ministry.id)
  const L = (b: { el: string; en: string }) => b[lang]
  const prose = [
    `ΤΙΤΛΟΣ: ${L(seed.title)}`,
    `ΑΠΛΑ: ${L(seed.plain)}`,
    `ΚΑΤΑΣΤΑΣΗ: ${L(seed.situation)}`,
    `ΣΥΣΤΑΣΗ: ${L(seed.recommendation)}`,
    `ΣΚΕΠΤΙΚΟ: ${L(seed.reasoning)}`,
    `ΑΝΤΙΛΟΓΟΣ: ${L(seed.counterArgument)}`,
    `ΚΑΤΑΝΟΜΗ: ${L(seed.distributionalNote)}`,
    `ΑΒΕΒΑΙΟΤΗΤΑ: ${L(seed.uncertainty)}`,
  ].join('\n\n')
  const delta = Object.fromEntries(
    DIMENSIONS.map((d) => [d.id, seed.eudaimoniaDelta[d.id] ?? 0]),
  ) as Record<DimensionId, number>
  return {
    prose,
    draft: {
      title: seed.title,
      plain: seed.plain,
      situation: seed.situation,
      recommendation: seed.recommendation,
      reasoning: seed.reasoning,
      counterArgument: seed.counterArgument,
      distributionalNote: seed.distributionalNote,
      uncertainty: seed.uncertainty,
      eudaimoniaDelta: delta,
      confidence: seed.confidence,
      sources: seed.sources,
    },
  }
}

/** Deepened adversarial critique, simulated from the proposal's own text. */
export function demoAntilogos(p: Proposal, lang: Lang): string {
  if (lang === 'en') {
    return `1) The strongest case against.\n${p.counterArgument.en}\n\n2) Who is hit hardest.\n${p.distributionalNote.en}\n\n3) How it fails in practice.\nImplementation depends on administrative capacity that the reasoning assumes rather than demonstrates; incentives at the point of delivery can quietly invert the intended effect.\n\n4) What would change my mind.\n${p.uncertainty.en}`
  }
  return `1) Το ισχυρότερο επιχείρημα κατά.\n${p.counterArgument.el}\n\n2) Ποιοι θίγονται περισσότερο.\n${p.distributionalNote.el}\n\n3) Πώς αποτυγχάνει στην πράξη.\nΗ εφαρμογή προϋποθέτει διοικητική ικανότητα που το σκεπτικό μάλλον υποθέτει παρά τεκμηριώνει· τα κίνητρα στο σημείο της υλοποίησης μπορούν αθόρυβα να αντιστρέψουν το επιδιωκόμενο αποτέλεσμα.\n\n4) Τι θα με έκανε να αλλάξω γνώμη.\n${p.uncertainty.el}`
}

/** NOUS synthesis simulated from the actual corpus + current index. */
export function demoNous(lang: Lang): string {
  const index = currentIndex()
  const lowest = [...DIMENSIONS].sort((a, b) => index[a.id] - index[b.id]).slice(0, 3)
  const proposals = listProposals()
  const lift = (p: Proposal) =>
    lowest.reduce((s, d) => s + Math.max(0, p.eudaimoniaDelta[d.id] ?? 0), 0)
  const top = [...proposals].sort((a, b) => lift(b) - lift(a)).slice(0, 3)
  const dn = (d: (typeof DIMENSIONS)[number]) => (lang === 'el' ? d.el : d.en)
  if (lang === 'en') {
    return `1) The picture in one paragraph.\nThe composite Index is held down by ${dn(lowest[0])} (${index[lowest[0].id]}), ${dn(lowest[1])} (${index[lowest[1].id]}) and ${dn(lowest[2])} (${index[lowest[2].id]}). Because the Index is a geometric mean, no surplus elsewhere can buy these off — they are the binding constraint.\n\n2) Three priorities that lift the weakest dimensions.\n${top.map((p, i) => `${i + 1}. ${p.title.en}`).join('\n')}\nEach targets at least one of the three lowest dimensions directly.\n\n3) The most serious cross-ministry tensions.\nFiscal measures that raise economic security tend to draw on the same budget lines as health and education staffing; environmental protections constrain short-run growth in the regions that need income most.\n\n4) What should NOT be decided yet.\nAny proposal whose delta rests on estimates flagged as uncertain — commission the missing measurement first. The AI advises; named humans decide.`
  }
  return `1) Η εικόνα σε μία παράγραφο.\nΟ σύνθετος Δείκτης συγκρατείται χαμηλά από τις διαστάσεις ${dn(lowest[0])} (${index[lowest[0].id]}), ${dn(lowest[1])} (${index[lowest[1].id]}) και ${dn(lowest[2])} (${index[lowest[2].id]}). Επειδή ο Δείκτης είναι γεωμετρικός μέσος, κανένα πλεόνασμα αλλού δεν τις εξαγοράζει — αυτές είναι ο δεσμευτικός περιορισμός.\n\n2) Τρεις προτεραιότητες που ανεβάζουν τις πιο αδύναμες διαστάσεις.\n${top.map((p, i) => `${i + 1}. ${p.title.el}`).join('\n')}\nΚαθεμία στοχεύει άμεσα τουλάχιστον μία από τις τρεις χαμηλότερες διαστάσεις.\n\n3) Οι σοβαρότερες διυπουργικές εντάσεις.\nΤα δημοσιονομικά μέτρα που ενισχύουν την οικονομική ασφάλεια αντλούν από τις ίδιες γραμμές προϋπολογισμού με τη στελέχωση υγείας και παιδείας· οι περιβαλλοντικές προστασίες περιορίζουν βραχυπρόθεσμη ανάπτυξη εκεί όπου το εισόδημα χρειάζεται περισσότερο.\n\n4) Τι ΔΕΝ πρέπει να αποφασιστεί ακόμη.\nΚάθε πρόταση της οποίας το ΔΕ στηρίζεται σε εκτιμήσεις χαρακτηρισμένες αβέβαιες — πρώτα η μέτρηση που λείπει. Η ΤΝ συμβουλεύει· αποφασίζουν επώνυμοι άνθρωποι.`
}

/** Companion answer simulated by routing the question to the right section. */
export function demoCompanion(question: string, p: Proposal, lang: Lang): string {
  const q = question.toLowerCase()
  const L = (b: { el: string; en: string }) => b[lang]
  const pre =
    lang === 'el'
      ? 'Με βάση το κείμενο της πρότασης: '
      : 'Based on the proposal text: '
  if (/(αντ[ίι]λογ|κατ[άα]|αντεπιχε[ίι]ρημα|against|counter|risk|κ[ίι]νδυν)/.test(q))
    return pre + L(p.counterArgument)
  if (/(περιφ[έε]ρει|μ[έε]να|πληρ[ώω]|κ[όο]στος|ωφελ|region|me|pay|cost|benefit)/.test(q))
    return pre + L(p.distributionalNote)
  if (/(αβ[έε]βαι|σ[ίι]γουρ|uncertain|sure|confiden)/.test(q))
    return pre + L(p.uncertainty)
  if (/(τι σημα[ίι]νει|απλ[άα]|εξ[ήη]γησ|what does|explain|simple)/.test(q))
    return (
      pre +
      L(p.plain) +
      (lang === 'el' ? ' Η κατάσταση σήμερα: ' : ' The situation today: ') +
      L(p.situation)
    )
  return pre + L(p.reasoning)
}

/** Deterministic pseudo-estimate from the idea text (clearly a demo). */
export function demoEstimate(idea: string, lang: Lang): VEstimate {
  let h = 2166136261
  for (let i = 0; i < idea.length; i++) {
    h ^= idea.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  const rand = () => {
    h = Math.imul(h ^ (h >>> 15), 2246822519)
    h = Math.imul(h ^ (h >>> 13), 3266489917)
    return ((h ^= h >>> 16) >>> 0) / 4294967296
  }
  const deltas = {} as Record<DimensionId, number>
  const rationale = {} as Record<DimensionId, string>
  for (const d of DIMENSIONS) {
    const r = rand()
    const v = r < 0.45 ? 0 : Math.round((rand() - 0.35) * 8)
    deltas[d.id] = Math.max(-6, Math.min(7, v))
    rationale[d.id] =
      lang === 'el'
        ? deltas[d.id] === 0
          ? 'Αμελητέα άμεση επίδραση με βάση τη διατύπωση της ιδέας.'
          : 'Χονδρική εκτίμηση επίδειξης — η ζωντανή έκδοση αιτιολογεί ανά διάσταση.'
        : deltas[d.id] === 0
          ? 'Negligible direct effect given the idea as stated.'
          : 'Coarse demo estimate — the live build reasons per dimension.'
  }
  return {
    title: {
      el: idea.slice(0, 60) + (idea.length > 60 ? '…' : ''),
      en: idea.slice(0, 60) + (idea.length > 60 ? '…' : ''),
    },
    deltas,
    rationale,
    uncertainty: {
      el: 'Λειτουργία επίδειξης: η εκτίμηση είναι προσομοίωση. Με κλειδί Anthropic, ο Σύμβουλος (Claude Opus 5) αιτιολογεί πραγματικά κάθε διάσταση.',
      en: 'Demo mode: this estimate is simulated. With an Anthropic key, the Counsellor (Claude Opus 5) genuinely reasons about each dimension.',
    },
    confidence: 0.4,
  }
}

/** Debate map simulated from the actual comment corpus. */
export function demoAgora(comments: Comment[], lang: Lang): VAgoraMap {
  const roots = comments.filter((c) => !c.parentId)
  const byScore = [...roots].sort((a, b) => b.score - a.score)
  const against = byScore.find((c) =>
    /(δεν|όχι|κατά|αποτύχ|κόστος|ρίσκο|not|against|fail|cost)/i.test(c.body),
  )
  const forC = byScore.find((c) => c !== against) ?? byScore[0]
  const buckets: { label: { el: string; en: string }; re: RegExp; stance: 'for' | 'against' | 'mixed' }[] = [
    { label: { el: 'Κόστος & χρηματοδότηση', en: 'Cost & funding' }, re: /(κόστ|δαπάν|χρηματοδ|φόρ|budget|cost|fund)/i, stance: 'against' },
    { label: { el: 'Εφαρμογή & διοίκηση', en: 'Implementation' }, re: /(εφαρμογ|υλοποί|διοίκ|γραφειοκρατ|implement|admin)/i, stance: 'mixed' },
    { label: { el: 'Δικαιοσύνη & κατανομή', en: 'Fairness' }, re: /(δίκαι|άνισ|περιφέρει|νησι|fair|region|island)/i, stance: 'mixed' },
    { label: { el: 'Υπέρ της κατεύθυνσης', en: 'For the direction' }, re: /(σωστ|επιτέλους|ναι|υπέρ|right|finally|yes)/i, stance: 'for' },
  ]
  const themes = buckets
    .map((b) => ({
      label: b.label[lang],
      count: roots.filter((c) => b.re.test(c.body)).length,
      stance: b.stance,
    }))
    .filter((t) => t.count > 0)
  const clip = (s?: string) => (s ? s.slice(0, 180) + (s.length > 180 ? '…' : '') : '—')
  return {
    themes: themes.length ? themes : [{ label: lang === 'el' ? 'Γενική συζήτηση' : 'General debate', count: roots.length, stance: 'mixed' }],
    consensus: [
      lang === 'el'
        ? 'Το πρόβλημα που περιγράφει η πρόταση αναγνωρίζεται ως υπαρκτό από τις περισσότερες φωνές.'
        : 'Most voices accept that the problem the proposal names is real.',
    ],
    dissensus: [
      lang === 'el'
        ? 'Διαφωνία στο αν το προτεινόμενο μέσο είναι το σωστό — κυρίως ως προς κόστος και εφαρμογή.'
        : 'Disagreement over whether the proposed instrument is right — mainly cost and implementation.',
    ],
    strongestFor: clip(forC?.body),
    strongestAgainst: clip(against?.body),
  }
}
