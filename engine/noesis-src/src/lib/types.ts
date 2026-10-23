// Domain types — mirror the Supabase/Postgres schema (spec §5) so the mock
// repository can be swapped for a real Supabase client with no UI changes.

import type { VirtueId } from '../constants/virtues'
import type { DimensionId } from '../constants/dimensions'

export type Lang = 'el' | 'en'

/** A bilingual string. EL is authoritative (Hard Rule 5). */
export interface Bilingual {
  el: string
  en: string
}

export type ModelTier = 'standard' | 'high'

export interface Ministry {
  id: string
  slug: string
  name: Bilingual
  primaryVirtue: VirtueId
  jurisdiction: Bilingual
  description: Bilingual
  isSynthesis: boolean // true only for NOUS / PM
}

export interface Counsellor {
  id: string
  ministryId: string
  displayName: Bilingual
  systemPrompt: string // editable; see §6.3
  defaultModel: string
  stakesModel: string
  method: Bilingual
}

export interface Source {
  title: string
  url: string
}

/** Estimated signed effect on each Index dimension, in points (−/+). */
export type EudaimoniaDelta = Partial<Record<DimensionId, number>>

export interface Proposal {
  id: string
  ministryId: string
  version: number
  supersedes: string | null // versioning = transparency over time
  status: 'proposal'
  stakes: ModelTier
  title: Bilingual
  plain: Bilingual // "what this means" — one plain sentence, always first
  situation: Bilingual
  recommendation: Bilingual // advisory phrasing only
  reasoning: Bilingual
  counterArgument: Bilingual // the strongest honest case against (Hard Rule 3)
  virtues: VirtueId[]
  eudaimoniaDelta: EudaimoniaDelta
  distributionalNote: Bilingual // who pays, who benefits
  confidence: number // 0..1
  uncertainty: Bilingual // what would change the recommendation
  sources: Source[]
  modelUsed: string
  accountableRole: Bilingual // the human role responsible for the decision
  createdAt: string // ISO
}

export interface EudaimoniaMetric {
  id: string
  dimension: DimensionId
  value: number // 0..100
  region: string // default 'national'
  measuredAt: string // ISO
}

export interface Profile {
  id: string
  username: string // unique public handle, shown on votes/comments
  displayName: string
  region: string
  language: Lang
  createdAt: string
}

export type VoteValue = -1 | 1

export interface VoteAggregate {
  up: number
  down: number
}

export interface Comment {
  id: string
  proposalId: string
  userId: string
  authorName: string
  parentId: string | null
  body: string
  createdAt: string
  // Net votes drive the "most reasoned" sort (spec §8). Seeded aggregate + live.
  score: number
}
