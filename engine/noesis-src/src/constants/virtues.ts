// The seven virtues, mapped to function (spec §6.4 — the charter).
// The `function_*` fields are rendered verbatim on /blueprint.

export type VirtueId =
  | 'sophia'
  | 'phronesis'
  | 'dikaiosyne'
  | 'sophrosyne'
  | 'andreia'
  | 'parrhesia'
  | 'eudaimonia'

export interface Virtue {
  id: VirtueId
  el: string // Greek name
  en: string // English name
  gloss_el: string // short gloss
  gloss_en: string
  function_el: string // how it maps to system function (charter, verbatim)
  function_en: string
}

export const VIRTUES: readonly Virtue[] = [
  {
    id: 'sophia',
    el: 'Σοφία',
    en: 'Sophia',
    gloss_el: 'Σοφία',
    gloss_en: 'Wisdom',
    function_el:
      'το αποδεικτικό κριτήριο και η ποιότητα συλλογισμού κάθε πρότασης.',
    function_en:
      'the evidentiary standard and reasoning quality of every proposal.',
  },
  {
    id: 'phronesis',
    el: 'Φρόνησις',
    en: 'Phronesis',
    gloss_el: 'Πρακτική σοφία',
    gloss_en: 'Practical wisdom',
    function_el:
      'η κρίση προσαρμοσμένη στο πλαίσιο· το αριστοτελικό μέσον· καμία ενιαία συνταγή.',
    function_en:
      'context-specific judgement; the Aristotelian mean; no one-size policy.',
  },
  {
    id: 'dikaiosyne',
    el: 'Δικαιοσύνη',
    en: 'Dikaiosyne',
    gloss_el: 'Δικαιοσύνη',
    gloss_en: 'Justice',
    function_el:
      'υποχρεωτική κατανεμητική ανάλυση· ισότητα απέναντι στην πρόταση.',
    function_en:
      'mandatory distributional analysis; equality before the proposal.',
  },
  {
    id: 'sophrosyne',
    el: 'Σωφροσύνη',
    en: 'Sophrosyne',
    gloss_el: 'Εγκράτεια',
    gloss_en: 'Temperance',
    function_el:
      'αυτοσυγκράτηση, δημοσιονομική πειθαρχία, βιωσιμότητα, καμία υπέρβαση.',
    function_en:
      'restraint, fiscal discipline, sustainability, no overreach.',
  },
  {
    id: 'andreia',
    el: 'Ἀνδρεία',
    en: 'Andreia',
    gloss_el: 'Θάρρος',
    gloss_en: 'Courage',
    function_el:
      'η προθυμία να προταθεί η δύσκολη, ορθή, αντιδημοφιλής επιλογή — σαφώς επισημασμένη ως τέτοια.',
    function_en:
      'willingness to propose the hard, right, unpopular option — clearly flagged as such.',
  },
  {
    id: 'parrhesia',
    el: 'Παρρησία',
    en: 'Parrhesia',
    gloss_el: 'Ειλικρινής λόγος',
    gloss_en: 'Frank truth',
    function_el: 'η ειλικρινής αβεβαιότητα και ο υποχρεωτικός αντίλογος.',
    function_en: 'honest uncertainty and the compulsory counter-argument.',
  },
  {
    id: 'eudaimonia',
    el: 'Εὐδαιμονία',
    en: 'Eudaimonia',
    gloss_el: 'Ευημερία',
    gloss_en: 'Flourishing',
    function_el: 'η ίδια η αντικειμενική συνάρτηση· ο Δείκτης είναι το μέτρο της.',
    function_en: 'the objective function itself; the Index is its measure.',
  },
] as const

const VIRTUE_BY_ID: Record<VirtueId, Virtue> = Object.fromEntries(
  VIRTUES.map((v) => [v.id, v]),
) as Record<VirtueId, Virtue>

export function getVirtue(id: VirtueId): Virtue {
  return VIRTUE_BY_ID[id]
}
