// ΙΠΠΟΔΑΜΟΣ — the planning & permits tool, assembled.

import type { ToolDef } from '../types'
import { CASES_A } from './cases-a'
import { CASES_B } from './cases-b'
import { SAFEGUARDS } from './safeguards'
import { PATTERNS } from './patterns'
import { PLANNING_COPY } from './copy'

export const PLANNING: ToolDef = {
  id: 'planning',
  slug: 'ippodamos',
  n: '05',
  name: { el: 'ΙΠΠΟΔΑΜΟΣ', en: 'HIPPODAMUS' },
  area: { el: 'Πολεοδομίες', en: 'Planning & Permits' },
  ministrySlug: 'environment',
  dimension: 'environment_ecology',
  copy: PLANNING_COPY,
  cases: [...CASES_A, ...CASES_B],
  safeguards: SAFEGUARDS,
  patterns: PATTERNS,
  verifiedOn: '2026-09-30',
}
