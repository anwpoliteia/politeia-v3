// The nine dimensions of the Eudaimonia Index (spec §7).
// Neo-Aristotelian; adapted from Nussbaum's capabilities for a modern Greek state.
// Each is scored 0..100, tracked over time; every proposal estimates a signed delta.

export type DimensionId =
  | 'life_health'
  | 'knowledge_education'
  | 'bodily_safety'
  | 'practical_reason'
  | 'affiliation_trust'
  | 'economic_security'
  | 'environment_ecology'
  | 'play_culture'
  | 'institutional_justice'

export interface Dimension {
  id: DimensionId
  index: number // 1..9, the canonical ordering
  el: string
  en: string
  short_el: string // for compact charts
  short_en: string
}

export const DIMENSIONS: readonly Dimension[] = [
  {
    id: 'life_health',
    index: 1,
    el: 'Ζωή & Υγεία',
    en: 'Life & Health',
    short_el: 'Υγεία',
    short_en: 'Health',
  },
  {
    id: 'knowledge_education',
    index: 2,
    el: 'Γνώση & Εκπαίδευση',
    en: 'Knowledge & Education',
    short_el: 'Παιδεία',
    short_en: 'Education',
  },
  {
    id: 'bodily_safety',
    index: 3,
    el: 'Σωματική Ασφάλεια & Ακεραιότητα',
    en: 'Bodily Safety & Integrity',
    short_el: 'Ασφάλεια',
    short_en: 'Safety',
  },
  {
    id: 'practical_reason',
    index: 4,
    el: 'Πρακτικός Λόγος & Πολιτική Φωνή',
    en: 'Practical Reason & Civic Voice',
    short_el: 'Φωνή',
    short_en: 'Voice',
  },
  {
    id: 'affiliation_trust',
    index: 5,
    el: 'Συμμετοχή & Κοινωνική Εμπιστοσύνη',
    en: 'Affiliation & Social Trust',
    short_el: 'Εμπιστοσύνη',
    short_en: 'Trust',
  },
  {
    id: 'economic_security',
    index: 6,
    el: 'Οικονομική Ασφάλεια & Αξιοπρεπής Εργασία',
    en: 'Economic Security & Dignified Work',
    short_el: 'Οικονομία',
    short_en: 'Economy',
  },
  {
    id: 'environment_ecology',
    index: 7,
    el: 'Περιβάλλον & Οικολογική Υγεία',
    en: 'Environment & Ecological Health',
    short_el: 'Περιβάλλον',
    short_en: 'Environment',
  },
  {
    id: 'play_culture',
    index: 8,
    el: 'Παιχνίδι, Πολιτισμός & Αναψυχή',
    en: 'Play, Culture & Leisure',
    short_el: 'Πολιτισμός',
    short_en: 'Culture',
  },
  {
    id: 'institutional_justice',
    index: 9,
    el: 'Θεσμική Δικαιοσύνη & Ισότητα',
    en: 'Institutional Justice & Equality',
    short_el: 'Θεσμοί',
    short_en: 'Institutions',
  },
] as const

const DIMENSION_BY_ID: Record<DimensionId, Dimension> = Object.fromEntries(
  DIMENSIONS.map((d) => [d.id, d]),
) as Record<DimensionId, Dimension>

export function getDimension(id: DimensionId): Dimension {
  return DIMENSION_BY_ID[id]
}
