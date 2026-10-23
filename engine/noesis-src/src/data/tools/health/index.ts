// ΙΠΠΟΚΡΑΤΗΣ — the health tool, assembled.

import type { ToolDef } from '../types'
import { CASES_A } from './cases-a'
import { CASES_B } from './cases-b'
import { SAFEGUARDS } from './safeguards'
import { PATTERNS } from './patterns'
import { HEALTH_COPY } from './copy'

export const HEALTH: ToolDef = {
  id: 'health',
  slug: 'ippokratis',
  n: '03',
  name: { el: 'ΙΠΠΟΚΡΑΤΗΣ', en: 'HIPPOCRATES' },
  area: { el: 'Υγεία', en: 'Health' },
  ministrySlug: 'health',
  dimension: 'life_health',
  copy: HEALTH_COPY,
  cases: [...CASES_A, ...CASES_B],
  safeguards: SAFEGUARDS,
  patterns: PATTERNS,
  verifiedOn: '2026-09-29',
}
