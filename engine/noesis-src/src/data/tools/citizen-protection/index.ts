// ΑΡΓΟΣ — the citizen protection tool, assembled.

import type { ToolDef } from '../types'
import { CASES_A } from './cases-a'
import { CASES_B } from './cases-b'
import { SAFEGUARDS } from './safeguards'
import { PATTERNS } from './patterns'
import { CITIZEN_PROTECTION_COPY } from './copy'

export const CITIZEN_PROTECTION: ToolDef = {
  id: 'citizen-protection',
  slug: 'argos',
  n: '07',
  name: { el: 'ΑΡΓΟΣ', en: 'ARGOS' },
  area: { el: 'Προστασία του Πολίτη', en: 'Citizen Protection' },
  ministrySlug: 'citizen-protection',
  dimension: 'practical_reason',
  copy: CITIZEN_PROTECTION_COPY,
  cases: [...CASES_A, ...CASES_B],
  safeguards: SAFEGUARDS,
  patterns: PATTERNS,
  verifiedOn: '2026-09-30',
}
