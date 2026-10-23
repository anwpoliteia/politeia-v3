import { Link } from 'react-router-dom'
import type { Proposal } from '../../lib/types'
import { useT } from '../../i18n'
import { sentiment, getMinistryByIdRef } from '../../data/repository'
import { formatRelative } from '../../lib/format'
import { StatusChip } from '../ui/StatusChip'
import { VirtueMark } from '../ui/VirtueMark'
import { SentimentBar } from '../ui/SentimentBar'

// Compact proposal card for the Council and ministry lists. The plain-language
// summary is the most prominent line (Hard Rule 4).
export function ProposalCard({ proposal }: { proposal: Proposal }) {
  const { t, lang } = useT()
  const ministry = getMinistryByIdRef(proposal.ministryId)

  return (
    <Link
      to={`/proposal/${proposal.id}`}
      className="block rounded-md border border-line bg-elev p-5 transition-colors hover:border-gold/40"
    >
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-muted">
        <StatusChip />
        {ministry && <span>{ministry.name[lang]}</span>}
        <span aria-hidden>·</span>
        <span className="font-mono">{formatRelative(proposal.createdAt, lang)}</span>
      </div>

      <h3 className="mt-3 text-lg font-semibold leading-snug text-text text-balance">
        {proposal.title[lang]}
      </h3>

      <p className="mt-2 text-sm text-muted">
        <span className="text-gold">{t.proposal.whatThisMeans} </span>
        {proposal.plain[lang]}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {proposal.virtues.slice(0, 3).map((v) => (
          <VirtueMark key={v} id={v} />
        ))}
      </div>

      <div className="mt-4">
        <SentimentBar approval={sentiment(proposal.id)} />
      </div>
    </Link>
  )
}
