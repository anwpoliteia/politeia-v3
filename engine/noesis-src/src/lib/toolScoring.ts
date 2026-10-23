// ΕΥΘΥΝΑΙ — the published priority formula shared by every tool, plus the
// lookups the tools need. Pure functions, no state.
//
//   P = Σ w_k · s_k / Σ w_k     (k ∈ harm, power, recurrence, remedy)
//
// Scores s_k are 1..10 editorial estimates, shown openly on every case.
// Weights w_k are 0..5 and belong to the citizen: re-weighting re-ranks the
// cases live, so the ranking is a vision each citizen authors, not a verdict
// the platform hands down.

import type {
  CaseScores,
  CriterionId,
  Pattern,
  Safeguard,
  ToolCase,
  ToolDef,
  Weights,
} from '../data/tools/types'

export const CRITERION_IDS: readonly CriterionId[] = ['harm', 'power', 'recurrence', 'remedy']

export const DEFAULT_WEIGHTS: Weights = { harm: 1, power: 1, recurrence: 1, remedy: 1 }

export const WEIGHT_MIN = 0
export const WEIGHT_MAX = 5

const clampWeight = (w: number): number =>
  Number.isFinite(w) ? Math.min(WEIGHT_MAX, Math.max(WEIGHT_MIN, w)) : 0

/** Weighted mean of the four scores. All-zero weights fall back to equal. */
export function priority(scores: CaseScores, weights: Weights): number {
  const total = CRITERION_IDS.reduce((sum, k) => sum + clampWeight(weights[k]), 0)
  if (total === 0) return priority(scores, DEFAULT_WEIGHTS)
  const weighted = CRITERION_IDS.reduce(
    (sum, k) => sum + clampWeight(weights[k]) * scores[k],
    0,
  )
  return weighted / total
}

export interface RankedCase {
  rank: number
  score: number
  item: ToolCase
}

/** Rank cases by priority; ties break on harm, then on id for stability. */
export function rankCases(cases: readonly ToolCase[], weights: Weights): RankedCase[] {
  return cases
    .map((item) => ({ item, score: priority(item.scores, weights) }))
    .sort(
      (a, b) =>
        b.score - a.score ||
        b.item.scores.harm - a.item.scores.harm ||
        a.item.id.localeCompare(b.item.id),
    )
    .map((r, i) => ({ ...r, rank: i + 1 }))
}

/**
 * The safeguards that answer a citizen's own case, strongest first: each
 * recognised pattern votes for its safeguards; more votes rank higher.
 */
export function safeguardsFor(
  chosen: readonly string[],
  patternSafeguards: (id: string) => readonly string[],
): { id: string; votes: number }[] {
  const votes = new Map<string, number>()
  for (const p of chosen) {
    for (const s of patternSafeguards(p)) votes.set(s, (votes.get(s) ?? 0) + 1)
  }
  return [...votes.entries()]
    .map(([id, v]) => ({ id, votes: v }))
    .sort((a, b) => b.votes - a.votes || a.id.localeCompare(b.id))
}

/** The published cases that share at least one pattern, most overlap first. */
export function similarCases(
  chosen: readonly string[],
  cases: readonly ToolCase[],
): { item: ToolCase; shared: number }[] {
  const set = new Set(chosen)
  return cases
    .map((item) => ({ item, shared: item.patterns.filter((p) => set.has(p)).length }))
    .filter((r) => r.shared > 0)
    .sort((a, b) => b.shared - a.shared || a.item.id.localeCompare(b.item.id))
}

/** A tool's safeguard by id; throws on a broken reference so data bugs surface. */
export function findSafeguard(tool: ToolDef, id: string): Safeguard {
  const s = tool.safeguards.find((x) => x.id === id)
  if (!s) throw new Error(`[${tool.id}] unknown safeguard: ${id}`)
  return s
}

/** A tool's pattern by id; throws on a broken reference so data bugs surface. */
export function findPattern(tool: ToolDef, id: string): Pattern {
  const p = tool.patterns.find((x) => x.id === id)
  if (!p) throw new Error(`[${tool.id}] unknown pattern: ${id}`)
  return p
}

/** Safeguard number for sorting ('Σ10' → 10). */
export const safeguardOrder = (s: Safeguard): number => Number(s.n.replace(/\D/g, '')) || 0
