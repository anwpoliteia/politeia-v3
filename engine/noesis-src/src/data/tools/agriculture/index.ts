// ΔΗΜΗΤΡΑ — the agriculture tool, assembled.

import type { ToolDef } from '../types'
import { CASES_A } from './cases-a'
import { CASES_B } from './cases-b'
import { SAFEGUARDS } from './safeguards'
import { PATTERNS } from './patterns'
import { AGRICULTURE_COPY } from './copy'

export const AGRICULTURE: ToolDef = {
  id: 'agriculture',
  slug: 'dimitra',
  n: '02',
  name: { el: 'ΔΗΜΗΤΡΑ', en: 'DIMITRA' },
  area: { el: 'Αγροτική Ανάπτυξη', en: 'Agriculture' },
  ministrySlug: 'rural',
  dimension: 'economic_security',
  copy: AGRICULTURE_COPY,
  cases: [...CASES_A, ...CASES_B],
  safeguards: SAFEGUARDS,
  patterns: PATTERNS,
  verifiedOn: '2026-09-29',
}
