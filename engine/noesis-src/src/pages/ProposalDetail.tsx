import { Link, useParams } from 'react-router-dom'
import { useT } from '../i18n'
import { Container, Field } from '../components/ui/primitives'
import { StatusChip } from '../components/ui/StatusChip'
import { VirtueMark } from '../components/ui/VirtueMark'
import { DivergingBars } from '../components/ui/DivergingBars'
import { ConfidenceMeter } from '../components/ui/ConfidenceMeter'
import { Collapsible } from '../components/ui/Collapsible'
import { VoteButtons } from '../components/deliberation/VoteButtons'
import { CommentThread } from '../components/deliberation/CommentThread'
import { ProposalIntelligence } from '../components/v/ProposalIntelligence'
import { useStore } from '../store/useStore'
import {
  currentIndex,
  getCounsellor,
  getMinistryByIdRef,
  getProposal,
} from '../data/repository'
import { getVirtue } from '../constants/virtues'
import { formatDate, formatNumber } from '../lib/format'
import { deltaFlourishing } from '../lib/eudaimonia'

// /proposal/:id — the core unit of the whole system (spec §4.2). Rendered
// top-to-bottom in the canonical order.
export function ProposalDetail() {
  const { id } = useParams()
  const { t, lang } = useT()
  const vProposals = useStore((s) => s.vProposals)
  const proposal = id
    ? (getProposal(id) ?? vProposals.find((p) => p.id === id))
    : undefined

  if (!proposal) {
    return (
      <Container className="py-20 text-center">
        <p className="text-muted">{t.common.notFound}</p>
        <Link to="/ministries" className="mt-4 inline-block text-gold">
          {t.common.backToCouncil}
        </Link>
      </Container>
    )
  }

  const ministry = getMinistryByIdRef(proposal.ministryId)
  const counsellor = getCounsellor(proposal.ministryId)
  const ministryHref = ministry?.isSynthesis
    ? '/nous'
    : `/ministry/${ministry?.slug}`

  // The composite eudaimonia change this proposal induces on the current
  // national picture, via the Blueprint equation.
  const dE = deltaFlourishing(currentIndex(), proposal.eudaimoniaDelta)

  return (
    <article className="py-10">
      <Container width="reading">
        {/* 1 — Status / provenance */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-muted">
          <StatusChip />
          {proposal.stakes === 'high' && (
            <span className="rounded-md border border-line px-2 py-0.5 font-mono uppercase tracking-wider">
              {t.common.high}
            </span>
          )}
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
          {ministry && (
            <Link to={ministryHref} className="text-text hover:text-gold">
              {ministry.name[lang]}
            </Link>
          )}
          <span aria-hidden>·</span>
          <span>{counsellor?.displayName[lang]}</span>
        </div>

        {/* 2 — Title */}
        <h1 className="mt-4 text-3xl font-semibold leading-tight text-text text-balance md:text-4xl">
          {proposal.title[lang]}
        </h1>

        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-muted">
          <span>
            {t.common.model}: {proposal.modelUsed}
          </span>
          <span>
            {t.proposal.version} {proposal.version}
          </span>
          <span>{formatDate(proposal.createdAt, lang)}</span>
          {proposal.supersedes && (
            <span className="text-gold">{t.proposal.supersedes}</span>
          )}
        </div>

        {/* 3 — What this means (always first, plain language) */}
        <div className="mt-8 rounded-md border border-gold/40 bg-gold/5 p-5">
          <div className="font-mono text-xs uppercase tracking-wider text-gold">
            {t.proposal.whatThisMeans}
          </div>
          <p className="mt-2 text-lg leading-relaxed text-text text-balance">
            {proposal.plain[lang]}
          </p>
        </div>

        <div className="mt-10 space-y-10">
          {/* 4 — Situation */}
          <Field label={t.proposal.situation}>
            <p className="leading-relaxed text-text">{proposal.situation[lang]}</p>
          </Field>

          {/* 5 — Recommendation (advisory phrasing only) */}
          <Field label={t.proposal.recommendation} accent="gold">
            <p className="leading-relaxed text-text">
              {proposal.recommendation[lang]}
            </p>
          </Field>

          {/* 6 — Reasoning (collapsible but present) + sources */}
          <div>
            <Collapsible summary={t.proposal.reasoning} defaultOpen>
              <p className="leading-relaxed text-text">{proposal.reasoning[lang]}</p>
              <div className="mt-5">
                <div className="mb-2 font-mono text-xs uppercase tracking-wider text-muted">
                  {t.proposal.sourcesCited}
                </div>
                <ul className="space-y-1.5">
                  {proposal.sources.map((s) => (
                    <li key={s.url} className="text-sm">
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gold underline-offset-2 hover:underline"
                      >
                        {s.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Collapsible>
          </div>

          {/* 7 — Counter-argument (copper, adversarial) */}
          <div className="rounded-md border border-copper/50 bg-copper/5 p-5">
            <div className="font-mono text-xs uppercase tracking-wider text-copper">
              {t.proposal.counterArgument}
            </div>
            <p className="mt-1 text-xs text-muted">
              {t.proposal.counterArgumentNote}
            </p>
            <p className="mt-3 leading-relaxed text-text">
              {proposal.counterArgument[lang]}
            </p>
          </div>

          {/* V — live intelligence attached to this proposal */}
          <ProposalIntelligence proposal={proposal} />

          {/* 8 — Virtue marks (which virtues, and how) */}
          <Field label={t.proposal.virtuesServed}>
            <ul className="space-y-2">
              {proposal.virtues.map((vid) => {
                const v = getVirtue(vid)
                return (
                  <li key={vid} className="flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:gap-3">
                    <VirtueMark id={vid} />
                    <span className="text-sm text-muted">
                      {lang === 'el' ? v.function_el : v.function_en}
                    </span>
                  </li>
                )
              })}
            </ul>
          </Field>

          {/* 9 — Eudaimonia impact + distributional note */}
          <Field label={t.proposal.eudaimoniaImpact}>
            <div className="mb-5 flex flex-wrap items-baseline gap-x-4 gap-y-1 rounded-md border border-line bg-elev px-4 py-3">
              <span className="font-mono text-xs uppercase tracking-wider text-muted">
                {t.proposal.compositeDelta}
              </span>
              <span
                className={
                  'font-mono text-2xl ' +
                  (dE >= 0 ? 'text-positive' : 'text-negative')
                }
              >
                {dE >= 0 ? '+' : ''}
                {formatNumber(dE, lang, 2)}
              </span>
              <span className="basis-full text-xs text-muted">
                {t.proposal.compositeDeltaNote}
              </span>
            </div>
            <p className="mb-4 text-sm text-muted">{t.proposal.eudaimoniaNote}</p>
            <DivergingBars delta={proposal.eudaimoniaDelta} />
            <div className="mt-6 rounded-md border border-line bg-elev p-4">
              <div className="mb-1 font-mono text-xs uppercase tracking-wider text-muted">
                {t.proposal.distributionalNote}
              </div>
              <p className="text-sm leading-relaxed text-text">
                {proposal.distributionalNote[lang]}
              </p>
            </div>
          </Field>

          {/* 10 — Confidence & uncertainty */}
          <Field label={t.proposal.confidence}>
            <ConfidenceMeter value={proposal.confidence} />
            <div className="mt-4">
              <div className="mb-1 font-mono text-xs uppercase tracking-wider text-muted">
                {t.proposal.uncertainty}
              </div>
              <p className="text-sm leading-relaxed text-text">
                {proposal.uncertainty[lang]}
              </p>
            </div>
          </Field>

          {/* 11 — Public deliberation */}
          <Field label={t.proposal.deliberation} accent="gold">
            <div className="mb-6 max-w-sm">
              <VoteButtons proposalId={proposal.id} />
            </div>
            <CommentThread proposalId={proposal.id} />
          </Field>

          {/* 12 — Accountability line */}
          <div className="rounded-md border border-line bg-elev p-5">
            <div className="font-mono text-xs uppercase tracking-wider text-muted">
              {t.proposal.accountability}
            </div>
            <p className="mt-2 text-sm leading-relaxed text-text">
              {t.proposal.accountabilityPrefix}{' '}
              <span className="font-medium text-gold">
                {proposal.accountableRole[lang]}
              </span>
              . {t.proposal.accountabilitySuffix}
            </p>
          </div>
        </div>
      </Container>
    </article>
  )
}
