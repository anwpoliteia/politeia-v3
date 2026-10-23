// Seed: Eudaimonia Index time series (spec §7). Twelve monthly points per
// dimension, national region, ending September 2026. Deterministic (no RNG) so the
// charts are stable across reloads. Current values are calibrated so the three
// lowest dimensions match the NOUS synthesis proposal.

import type { EudaimoniaMetric } from '../lib/types'
import { DIMENSIONS, type DimensionId } from '../constants/dimensions'

// [start value 12 months ago, current value]
const TRAJECTORY: Record<DimensionId, [number, number]> = {
  life_health: [69, 72],
  knowledge_education: [65, 68],
  bodily_safety: [71, 70],
  practical_reason: [54, 58],
  affiliation_trust: [47, 49],
  economic_security: [42, 46],
  environment_ecology: [48, 51],
  play_culture: [62, 64],
  institutional_justice: [52, 55],
}

const MONTHS = 12

function monthIso(monthsAgo: number): string {
  const d = new Date(Date.UTC(2026, 8, 1)) // September 2026
  d.setUTCMonth(d.getUTCMonth() - monthsAgo)
  return d.toISOString()
}

function buildSeries(): EudaimoniaMetric[] {
  const out: EudaimoniaMetric[] = []
  DIMENSIONS.forEach((dim, di) => {
    const [start, end] = TRAJECTORY[dim.id]
    for (let i = 0; i < MONTHS; i++) {
      const t = i / (MONTHS - 1)
      const trend = start + (end - start) * t
      // small deterministic wiggle so lines aren't unnaturally straight
      const wiggle = Math.sin((i + di) * 1.3) * 0.8
      const value = Math.round((trend + wiggle) * 10) / 10
      out.push({
        id: `metric-${dim.id}-${i}`,
        dimension: dim.id,
        value,
        region: 'national',
        measuredAt: monthIso(MONTHS - 1 - i),
      })
    }
  })
  return out
}

export const METRICS: readonly EudaimoniaMetric[] = buildSeries()

/** Latest value per dimension (the current national reading). */
export function currentIndex(): Record<DimensionId, number> {
  const result = {} as Record<DimensionId, number>
  for (const dim of DIMENSIONS) {
    result[dim.id] = TRAJECTORY[dim.id][1]
  }
  return result
}
