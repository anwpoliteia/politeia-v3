// ΔΑΙΔΑΛΟΣ — the infrastructure & transport tool, assembled.

import type { ToolDef } from '../types'
import { CASES_A } from './cases-a'
import { CASES_B } from './cases-b'
import { SAFEGUARDS } from './safeguards'
import { PATTERNS } from './patterns'
import { INFRASTRUCTURE_COPY } from './copy'

export const INFRASTRUCTURE: ToolDef = {
  id: 'infrastructure',
  slug: 'daidalos',
  n: '06',
  name: { el: 'ΔΑΙΔΑΛΟΣ', en: 'DAEDALUS' },
  area: { el: 'Υποδομές & Μεταφορές', en: 'Infrastructure & Transport' },
  ministrySlug: 'infrastructure',
  dimension: 'bodily_safety',
  copy: INFRASTRUCTURE_COPY,
  cases: [...CASES_A, ...CASES_B],
  safeguards: SAFEGUARDS,
  patterns: PATTERNS,
  verifiedOn: '2026-09-30',
}
