// The Eudaimonia equation (published on /blueprint, run here — transparent by
// construction). Flourishing is NOT an arithmetic mean: we use a weighted
// generalized (power) mean with an inequality-aversion parameter ρ ≤ 1.
//
//   E_ρ(d) = ( Σ_i w_i · d_i^ρ )^(1/ρ)            for ρ ≠ 0
//   E_0(d) = Π_i d_i^(w_i)                          (geometric mean, ρ → 0)
//
// For ρ < 1, E is concave: the marginal value of a point is larger the lower a
// dimension already is. That is why the system prioritises the worst-off
// dimensions — the mathematics, not a policy preference.

import { DIMENSIONS, type DimensionId } from '../constants/dimensions'
import type { EudaimoniaDelta } from './types'

// Default ρ → 0 (geometric mean): deficiency in any single dimension drags the
// whole, echoing Nussbaum's non-fungible capabilities and the Aristotelian mean.
export const DEFAULT_RHO = 0
const EPS = 1e-9

export function equalWeights(): Record<DimensionId, number> {
  const w = 1 / DIMENSIONS.length
  return Object.fromEntries(DIMENSIONS.map((d) => [d.id, w])) as Record<
    DimensionId,
    number
  >
}

/** Composite flourishing index E ∈ [0,100] from the nine dimension scores. */
export function flourishing(
  scores: Record<DimensionId, number>,
  rho: number = DEFAULT_RHO,
  weights: Record<DimensionId, number> = equalWeights(),
): number {
  if (Math.abs(rho) < EPS) {
    // geometric mean = exp( Σ w_i · ln d_i )
    let s = 0
    for (const d of DIMENSIONS) {
      const x = Math.max(scores[d.id] ?? 0, EPS)
      s += weights[d.id] * Math.log(x)
    }
    return Math.exp(s)
  }
  let s = 0
  for (const d of DIMENSIONS) {
    const x = Math.max(scores[d.id] ?? 0, 0)
    s += weights[d.id] * Math.pow(x, rho)
  }
  return Math.pow(s, 1 / rho)
}

/** Apply a proposal's signed deltas, clipped to [0,100]: (d ⊕ δ)_i. */
export function applyDelta(
  scores: Record<DimensionId, number>,
  delta: EudaimoniaDelta,
): Record<DimensionId, number> {
  const out = {} as Record<DimensionId, number>
  for (const d of DIMENSIONS) {
    const v = (scores[d.id] ?? 0) + (delta[d.id] ?? 0)
    out[d.id] = Math.min(100, Math.max(0, v))
  }
  return out
}

/** ΔE(P) = E(d ⊕ δ) − E(d): the eudaimonia value a proposal induces. */
export function deltaFlourishing(
  scores: Record<DimensionId, number>,
  delta: EudaimoniaDelta,
  rho: number = DEFAULT_RHO,
  weights?: Record<DimensionId, number>,
): number {
  const base = flourishing(scores, rho, weights)
  const after = flourishing(applyDelta(scores, delta), rho, weights)
  return after - base
}
