// ΕΥΘΥΝΑΙ — the shared shape of every accountability tool (ΙΣΟΝΟΜΙΑ for
// justice, ΔΗΜΗΤΡΑ for agriculture, and the areas still to come). A tool is
// data, not markup: the same engine renders every one of them.
// EL is authoritative (Hard Rule 5); every string a citizen reads is Bilingual.

import type { Bilingual, EudaimoniaDelta, Source } from '../../lib/types'
import type { VirtueId } from '../../constants/virtues'
import type { DimensionId } from '../../constants/dimensions'

// The four published criteria behind every tool's priority ranking. Scores are
// 1..10 editorial estimates, shown openly and re-weightable by every citizen.
export type CriterionId = 'harm' | 'power' | 'recurrence' | 'remedy'

export type CaseScores = Record<CriterionId, number>
export type Weights = Record<CriterionId, number>

export interface ToolCase {
  id: string
  when: string // display period, e.g. '2020' or '2016–2026'
  place: Bilingual
  title: Bilingual // names the office, not the officer
  harmed: Bilingual // we always name the harmed
  plain: Bilingual // "what this means" — one sentence, always first
  facts: Bilingual[] // dated, sourced facts
  outcome: Bilingual // what the system actually did
  breach: Bilingual // why this corrupts the purpose of the institution
  patterns: string[] // ids from the tool's own patterns
  safeguards: string[] // ids from the tool's own safeguards, primary first
  counterfactual: Bilingual // what the safeguard would have changed
  antilogos: Bilingual // the strongest honest case against (Hard Rule 3)
  reply: Bilingual // the answer to it
  lever: Bilingual // what one citizen can do
  scores: CaseScores
  status: Bilingual // legal status; presumption of innocence where open
  sources: Source[]
}

// A safeguard audits power; none of them judges a citizen.
export interface Safeguard {
  id: string
  n: string // 'Σ1'
  name: Bilingual
  precedent: Bilingual // the ancient or institutional root
  plain: Bilingual
  how: Bilingual // what the AI does — as witness, never as judge
  humans: Bilingual // what named humans still decide
  antilogos: Bilingual
  distributional: Bilingual // who pays, who benefits (spec §8)
  virtues: VirtueId[]
  delta: EudaimoniaDelta // estimated signed effect on the Index
}

// A recurring way the institution bends for the powerful, phrased as a
// question a citizen answers privately about their own case.
export interface Pattern {
  id: string
  name: Bilingual
  question: Bilingual
  safeguards: string[]
}

export interface Criterion {
  id: CriterionId
  name: Bilingual
  gloss: Bilingual
}

export interface Principle {
  title: Bilingual
  body: Bilingual
}

// The words that make each tool its own; every shared label lives in
// constants/toolLabels.ts.
export interface ToolCopy {
  eyebrow: Bilingual
  title: Bilingual
  subtitle: Bilingual
  quoteGreek: string // polytonic, rendered in the Greek face
  quoteRender: Bilingual
  quoteCite: Bilingual
  principles: Principle[] // three
  safeguardsLede: Bilingual
  myCaseLede: Bilingual
  visionPlaceholder: Bilingual
  charterHeading: Bilingual
}

export interface ToolDef {
  id: string // stable key, e.g. 'justice'
  slug: string // route, e.g. 'isonomia' → /isonomia
  n: string // position among the ten, e.g. '01'
  name: Bilingual // the tool, e.g. ΙΣΟΝΟΜΙΑ
  area: Bilingual // what it audits, e.g. Δικαιοσύνη
  ministrySlug?: string // its ministry in the Council (/ministry/:slug), when one exists
  dimension: DimensionId // the Index dimension it most protects
  copy: ToolCopy
  cases: readonly ToolCase[]
  safeguards: readonly Safeguard[]
  patterns: readonly Pattern[]
  verifiedOn: string // the date every fact was last checked
}
