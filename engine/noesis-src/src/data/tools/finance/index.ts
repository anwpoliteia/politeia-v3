// ΛΟΓΙΣΤΑΙ — the finance & tax tool, assembled.

import type { ToolDef } from '../types'
import { CASES_A } from './cases-a'
import { CASES_B } from './cases-b'
import { SAFEGUARDS } from './safeguards'
import { PATTERNS } from './patterns'
import { FINANCE_COPY } from './copy'

export const FINANCE: ToolDef = {
  id: 'finance',
  slug: 'logistai',
  n: '04',
  name: { el: 'ΛΟΓΙΣΤΑΙ', en: 'LOGISTAI' },
  area: { el: 'Οικονομικά & Φορολογία', en: 'Finance & Tax' },
  ministrySlug: 'finance',
  dimension: 'economic_security',
  copy: FINANCE_COPY,
  cases: [...CASES_A, ...CASES_B],
  safeguards: SAFEGUARDS,
  patterns: PATTERNS,
  verifiedOn: '2026-09-30',
}
