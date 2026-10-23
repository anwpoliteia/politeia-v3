// ΑΡΙΣΤΕΙΔΗΣ — the public-sector & patronage tool, assembled.

import type { ToolDef } from '../types'
import { CASES_A } from './cases-a'
import { CASES_B } from './cases-b'
import { SAFEGUARDS } from './safeguards'
import { PATTERNS } from './patterns'
import { PUBLIC_SECTOR_COPY } from './copy'

export const PUBLIC_SECTOR: ToolDef = {
  id: 'public-sector',
  slug: 'aristeidis',
  n: '10',
  name: { el: 'ΑΡΙΣΤΕΙΔΗΣ', en: 'ARISTIDES' },
  area: { el: 'Δημόσιο & Ρουσφέτι', en: 'Public Sector & Patronage' },
  ministrySlug: 'interior',
  dimension: 'affiliation_trust',
  copy: PUBLIC_SECTOR_COPY,
  cases: [...CASES_A, ...CASES_B],
  safeguards: SAFEGUARDS,
  patterns: PATTERNS,
  verifiedOn: '2026-09-30',
}
