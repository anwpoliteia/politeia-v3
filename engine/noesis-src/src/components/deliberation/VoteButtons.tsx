import { Link } from 'react-router-dom'
import { useStore } from '../../store/useStore'
import { useT } from '../../i18n'
import { voteAggregate } from '../../data/repository'
import { formatNumber } from '../../lib/format'
import { cn } from '../../lib/cn'

// One like/dislike per citizen (spec §9). Shows live aggregate counts; never an
// individual's vote. Requires login to participate.
export function VoteButtons({ proposalId }: { proposalId: string }) {
  const { t, lang } = useT()
  const currentUser = useStore((s) => s.currentUser)
  const userVote = useStore((s) => s.votes[proposalId])
  const castVote = useStore((s) => s.castVote)

  const agg = voteAggregate(proposalId, currentUser ? userVote : undefined)

  return (
    <div className="space-y-3">
      <div className="flex gap-3">
        <button
          type="button"
          disabled={!currentUser}
          aria-pressed={userVote === 1}
          onClick={() => castVote(proposalId, 1)}
          className={cn(
            'flex min-h-11 flex-1 items-center justify-center gap-2 rounded-md border px-4 py-2.5 text-sm transition-colors',
            userVote === 1
              ? 'border-positive bg-positive/10 text-positive'
              : 'border-line text-muted hover:border-positive/50 hover:text-text',
            !currentUser && 'cursor-not-allowed opacity-50',
          )}
        >
          {t.deliberation.agree}
          <span className="font-mono">{formatNumber(agg.up, lang)}</span>
        </button>
        <button
          type="button"
          disabled={!currentUser}
          aria-pressed={userVote === -1}
          onClick={() => castVote(proposalId, -1)}
          className={cn(
            'flex min-h-11 flex-1 items-center justify-center gap-2 rounded-md border px-4 py-2.5 text-sm transition-colors',
            userVote === -1
              ? 'border-negative bg-negative/10 text-negative'
              : 'border-line text-muted hover:border-negative/50 hover:text-text',
            !currentUser && 'cursor-not-allowed opacity-50',
          )}
        >
          {t.deliberation.disagree}
          <span className="font-mono">{formatNumber(agg.down, lang)}</span>
        </button>
      </div>
      {!currentUser && (
        <p className="text-xs text-muted">
          <Link to="/login" className="text-gold underline-offset-2 hover:underline">
            {t.deliberation.loginToParticipate}
          </Link>
        </p>
      )}
    </div>
  )
}
