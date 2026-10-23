// Repository (spec §2/§5, user repository pattern). The ONE place the UI reads
// data. Today it serves bundled seed data synchronously; to go live, replace the
// bodies with Supabase queries (the table shapes already match §5) and make the
// signatures async — no UI component reaches past this module.
//
// Deliberation reads combine seed aggregates/comments with the citizen's own
// votes/comments (passed in from the store), so live counts update immediately
// without storing anyone's identity (Hard Rule 6).

import type {
  Comment,
  EudaimoniaMetric,
  Ministry,
  Proposal,
  VoteAggregate,
  VoteValue,
} from '../lib/types'
import type { DimensionId } from '../constants/dimensions'
import {
  MINISTRIES,
  getMinistryBySlug,
  getMinistryById,
} from './ministries'
import { getCounsellorByMinistry } from './counsellors'
import { PROPOSALS as FLAGSHIP_PROPOSALS } from './proposals'
import { WEEKLY_PROPOSALS } from './weeklyProposals'
import { buildGenerated } from './generateProposals'
import { commentsFor } from './generateComments'
import { CURATED } from './curatedComments'
import { METRICS, currentIndex as currentIndexSeed } from './metrics'
import { BASE_VOTES } from './deliberation'

// ---- Ministries & counsellors -------------------------------------------

export const listMinistries = (): readonly Ministry[] => MINISTRIES
export const getMinistry = (slug: string) => getMinistryBySlug(slug)
export const getMinistryByIdRef = (id: string) => getMinistryById(id)
export const getCounsellor = (ministryId: string) =>
  getCounsellorByMinistry(ministryId)

// ---- Proposals ------------------------------------------------------------

// This week's scan (freshest, so it leads) + hand-authored flagship proposals
// + generated breadth (≥10 per ministry).
const GEN = buildGenerated()
const ALL_PROPOSALS: readonly Proposal[] = [
  ...WEEKLY_PROPOSALS,
  ...FLAGSHIP_PROPOSALS,
  ...GEN.proposals,
]
const PROPOSAL_BY_ID = new Map(ALL_PROPOSALS.map((p) => [p.id, p]))
const COMBINED_BASE_VOTES: Record<string, VoteAggregate> = {
  ...BASE_VOTES,
  ...GEN.baseVotes,
}

export const listProposals = (): readonly Proposal[] => ALL_PROPOSALS
export const getProposal = (id: string) => PROPOSAL_BY_ID.get(id)
export const listProposalsByMinistry = (ministryId: string) =>
  ALL_PROPOSALS.filter((p) => p.ministryId === ministryId)

/** Most recent proposal for a ministry (by createdAt), if any. */
export function latestProposalForMinistry(
  ministryId: string,
): Proposal | undefined {
  return [...listProposalsByMinistry(ministryId)].sort(
    (a, b) => +new Date(b.createdAt) - +new Date(a.createdAt),
  )[0]
}

// ---- Eudaimonia Index -----------------------------------------------------

export const listMetrics = (): readonly EudaimoniaMetric[] => METRICS
export const currentIndex = (): Record<DimensionId, number> =>
  currentIndexSeed()

// ---- Deliberation ---------------------------------------------------------

/** Aggregate votes = seed base + the current citizen's vote (live). */
export function voteAggregate(
  proposalId: string,
  userVote: VoteValue | undefined,
): VoteAggregate {
  const base = COMBINED_BASE_VOTES[proposalId] ?? { up: 0, down: 0 }
  if (userVote === 1) return { up: base.up + 1, down: base.down }
  if (userVote === -1) return { up: base.up, down: base.down + 1 }
  return base
}

/** Citizen sentiment as the approval fraction (0..1) for the sentiment bar. */
export function sentiment(proposalId: string): number {
  const base = COMBINED_BASE_VOTES[proposalId]
  if (!base) return 0.5
  const total = base.up + base.down
  return total === 0 ? 0.5 : base.up / total
}

/**
 * Comments for a proposal: seed + the citizen's own, with each comment's net
 * score adjusted by the citizen's vote on it. Returns a flat list; threading is
 * resolved by the UI via parentId.
 */
export function commentsForProposal(
  proposalId: string,
  userComments: readonly Comment[],
  commentVotes: Readonly<Record<string, VoteValue>>,
): Comment[] {
  // Hand-authored, researched threads where they exist (flagship proposals);
  // the stance-based generator covers the rest.
  const proposal = PROPOSAL_BY_ID.get(proposalId)
  const base =
    CURATED[proposalId] ?? (proposal ? commentsFor(proposal) : [])
  const all = [
    ...base,
    ...userComments.filter((c) => c.proposalId === proposalId),
  ]
  return all.map((c) => {
    const v = commentVotes[c.id]
    const score = c.score + (v ?? 0)
    return score === c.score ? c : { ...c, score }
  })
}
