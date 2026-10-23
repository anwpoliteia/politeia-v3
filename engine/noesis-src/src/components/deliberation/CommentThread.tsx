import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import type { Comment } from '../../lib/types'
import { useStore } from '../../store/useStore'
import { useT } from '../../i18n'
import { commentsForProposal } from '../../data/repository'
import { formatNumber, formatRelative } from '../../lib/format'
import { cn } from '../../lib/cn'

type Sort = 'reasoned' | 'newest'

// Threaded, reasoned comments (spec §9). Default sort is "most reasoned" (net
// votes), structurally rewarding argument over noise (spec §8) — never recency
// by default, never engagement-driven ranking.
export function CommentThread({ proposalId }: { proposalId: string }) {
  const { t, lang } = useT()
  const currentUser = useStore((s) => s.currentUser)
  const userComments = useStore((s) => s.comments)
  const commentVotes = useStore((s) => s.commentVotes)
  const addComment = useStore((s) => s.addComment)
  const [sort, setSort] = useState<Sort>('reasoned')
  const [draft, setDraft] = useState('')

  const comments = useMemo(
    () => commentsForProposal(proposalId, userComments, commentVotes),
    [proposalId, userComments, commentVotes],
  )

  const byParent = useMemo(() => {
    const map = new Map<string | null, Comment[]>()
    for (const c of comments) {
      const key = c.parentId
      map.set(key, [...(map.get(key) ?? []), c])
    }
    return map
  }, [comments])

  const topLevel = byParent.get(null) ?? []

  const strongest = useMemo(
    () => [...topLevel].sort((a, b) => b.score - a.score)[0],
    [topLevel],
  )

  const sortedTop = useMemo(() => {
    const arr = [...topLevel]
    if (sort === 'reasoned') return arr.sort((a, b) => b.score - a.score)
    return arr.sort((a, b) => +new Date(b.createdAt) - +new Date(a.createdAt))
  }, [topLevel, sort])

  const submit = () => {
    if (!draft.trim()) return
    addComment(proposalId, draft, null)
    setDraft('')
  }

  return (
    <div>
      {/* The single highest-net-vote objection, surfaced at the top (spec §9). */}
      {strongest && (
        <div className="mb-6 rounded-md border border-gold/40 bg-gold/5 p-4">
          <div className="mb-1 font-mono text-[11px] uppercase tracking-wider text-gold">
            {t.deliberation.strongestObjection}
          </div>
          <p className="text-sm text-text">{strongest.body}</p>
          <div className="mt-2 text-xs text-muted">
            {strongest.authorName} · {formatNumber(strongest.score, lang)}{' '}
            {t.deliberation.netVotes}
          </div>
        </div>
      )}

      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-text">
          {t.deliberation.comments}{' '}
          <span className="font-mono text-muted">({comments.length})</span>
        </h3>
        <div className="flex items-center gap-1 text-xs">
          <SortTab active={sort === 'reasoned'} onClick={() => setSort('reasoned')}>
            {t.deliberation.sortMostReasoned}
          </SortTab>
          <SortTab active={sort === 'newest'} onClick={() => setSort('newest')}>
            {t.deliberation.sortNewest}
          </SortTab>
        </div>
      </div>

      {currentUser ? (
        <div className="mb-6">
          <textarea
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder={t.deliberation.writePlaceholder}
            rows={3}
            className="w-full resize-y rounded-md border border-line bg-bg px-3 py-2 text-sm text-text placeholder:text-muted focus:border-gold/50"
          />
          <div className="mt-2 flex justify-end">
            <button
              type="button"
              onClick={submit}
              disabled={!draft.trim()}
              className="rounded-md border border-gold/50 px-4 py-2 text-sm text-gold transition-colors hover:bg-gold/10 disabled:opacity-40"
            >
              {t.deliberation.post}
            </button>
          </div>
        </div>
      ) : (
        <p className="mb-6 text-sm text-muted">
          <Link to="/login" className="text-gold underline-offset-2 hover:underline">
            {t.deliberation.loginToParticipate}
          </Link>
        </p>
      )}

      {sortedTop.length === 0 ? (
        <p className="text-sm text-muted">{t.deliberation.noComments}</p>
      ) : (
        <ul className="space-y-4">
          {sortedTop.map((c) => (
            <CommentItem
              key={c.id}
              comment={c}
              byParent={byParent}
              proposalId={proposalId}
            />
          ))}
        </ul>
      )}
    </div>
  )
}

function SortTab({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        'rounded-md px-2 py-1 transition-colors',
        active ? 'text-gold' : 'text-muted hover:text-text',
      )}
    >
      {children}
    </button>
  )
}

function CommentItem({
  comment,
  byParent,
  proposalId,
}: {
  comment: Comment
  byParent: Map<string | null, Comment[]>
  proposalId: string
}) {
  const { t, lang } = useT()
  const currentUser = useStore((s) => s.currentUser)
  const myVote = useStore((s) => s.commentVotes[comment.id])
  const voteComment = useStore((s) => s.voteComment)
  const addComment = useStore((s) => s.addComment)
  const [replying, setReplying] = useState(false)
  const [reply, setReply] = useState('')

  const children = byParent.get(comment.id) ?? []

  const submitReply = () => {
    if (!reply.trim()) return
    addComment(proposalId, reply, comment.id)
    setReply('')
    setReplying(false)
  }

  return (
    <li>
      <div className="rounded-md border border-line bg-elev p-4">
        <div className="mb-1 flex items-center justify-between gap-3">
          <span className="text-sm font-medium text-text">{comment.authorName}</span>
          <span className="font-mono text-xs text-muted">
            {formatRelative(comment.createdAt, lang)}
          </span>
        </div>
        <p className="text-sm text-text">{comment.body}</p>
        <div className="mt-3 flex items-center gap-3 text-xs text-muted">
          <button
            type="button"
            disabled={!currentUser}
            aria-pressed={myVote === 1}
            onClick={() => voteComment(comment.id, 1)}
            className={cn(
              'transition-colors disabled:opacity-40',
              myVote === 1 ? 'text-positive' : 'hover:text-positive',
            )}
          >
            ▲
          </button>
          <span className="font-mono text-text">
            {formatNumber(comment.score, lang)}
          </span>
          <button
            type="button"
            disabled={!currentUser}
            aria-pressed={myVote === -1}
            onClick={() => voteComment(comment.id, -1)}
            className={cn(
              'transition-colors disabled:opacity-40',
              myVote === -1 ? 'text-negative' : 'hover:text-negative',
            )}
          >
            ▼
          </button>
          {currentUser && (
            <button
              type="button"
              onClick={() => setReplying((r) => !r)}
              className="ml-2 hover:text-text"
            >
              {t.deliberation.reply}
            </button>
          )}
        </div>

        {replying && (
          <div className="mt-3">
            <textarea
              value={reply}
              onChange={(e) => setReply(e.target.value)}
              placeholder={t.deliberation.replyPlaceholder}
              rows={2}
              className="w-full resize-y rounded-md border border-line bg-bg px-3 py-2 text-sm text-text placeholder:text-muted focus:border-gold/50"
            />
            <div className="mt-2 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setReplying(false)}
                className="px-3 py-1.5 text-xs text-muted hover:text-text"
              >
                {t.deliberation.cancel}
              </button>
              <button
                type="button"
                onClick={submitReply}
                disabled={!reply.trim()}
                className="rounded-md border border-gold/50 px-3 py-1.5 text-xs text-gold hover:bg-gold/10 disabled:opacity-40"
              >
                {t.deliberation.reply}
              </button>
            </div>
          </div>
        )}
      </div>

      {children.length > 0 && (
        <ul className="mt-3 space-y-3 border-l border-line pl-4">
          {children
            .slice()
            .sort((a, b) => b.score - a.score)
            .map((child) => (
              <CommentItem
                key={child.id}
                comment={child}
                byParent={byParent}
                proposalId={proposalId}
              />
            ))}
        </ul>
      )}
    </li>
  )
}
