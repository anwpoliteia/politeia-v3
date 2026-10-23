// ΑΙΓΙΣ — the civil protection tool, assembled. The Council has no Counsellor
// for this ministry yet, so the tool carries no ministrySlug (see registry).

import type { ToolDef } from '../types'
import { CASES_A } from './cases-a'
import { CASES_B } from './cases-b'
import { SAFEGUARDS } from './safeguards'
import { PATTERNS } from './patterns'
import { CIVIL_PROTECTION_COPY } from './copy'

export const CIVIL_PROTECTION: ToolDef = {
  id: 'civil-protection',
  slug: 'aigis',
  n: '09',
  name: { el: 'ΑΙΓΙΣ', en: 'AEGIS' },
  area: { el: 'Πολιτική Προστασία', en: 'Civil Protection' },
  dimension: 'bodily_safety',
  copy: CIVIL_PROTECTION_COPY,
  cases: [...CASES_A, ...CASES_B],
  safeguards: SAFEGUARDS,
  patterns: PATTERNS,
  verifiedOn: '2026-09-30',
}
