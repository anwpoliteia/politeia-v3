// ΙΣΟΝΟΜΙΑ — the justice tool, assembled.

import type { ToolDef } from '../types'
import { CASES_A } from './cases-a'
import { CASES_B } from './cases-b'
import { SAFEGUARDS } from './safeguards'
import { PATTERNS } from './patterns'
import { JUSTICE_COPY } from './copy'

export const JUSTICE: ToolDef = {
  id: 'justice',
  slug: 'isonomia',
  n: '01',
  name: { el: 'ΙΣΟΝΟΜΙΑ', en: 'ISONOMIA' },
  area: { el: 'Δικαιοσύνη', en: 'Justice' },
  ministrySlug: 'justice',
  dimension: 'institutional_justice',
  copy: JUSTICE_COPY,
  cases: [...CASES_A, ...CASES_B],
  safeguards: SAFEGUARDS,
  patterns: PATTERNS,
  verifiedOn: '2026-09-29',
}
