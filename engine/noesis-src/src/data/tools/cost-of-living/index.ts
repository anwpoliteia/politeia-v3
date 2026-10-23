// ΑΓΟΡΑΝΟΜΟΣ — the cost-of-living tool, assembled.

import type { ToolDef } from '../types'
import { CASES_A } from './cases-a'
import { CASES_B } from './cases-b'
import { SAFEGUARDS } from './safeguards'
import { PATTERNS } from './patterns'
import { COST_OF_LIVING_COPY } from './copy'

export const COST_OF_LIVING: ToolDef = {
  id: 'cost-of-living',
  slug: 'agoranomos',
  n: '08',
  name: { el: 'ΑΓΟΡΑΝΟΜΟΣ', en: 'AGORANOMOS' },
  area: { el: 'Ακρίβεια', en: 'Cost of Living' },
  ministrySlug: 'development',
  dimension: 'economic_security',
  copy: COST_OF_LIVING_COPY,
  cases: [...CASES_A, ...CASES_B],
  safeguards: SAFEGUARDS,
  patterns: PATTERNS,
  verifiedOn: '2026-09-30',
}
