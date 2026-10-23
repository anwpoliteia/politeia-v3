import { Navigate, useParams, Link } from 'react-router-dom'
import { useT } from '../i18n'
import { useStore } from '../store/useStore'
import { Container, Field, PageHeader } from '../components/ui/primitives'
import { ProposalCard } from '../components/proposal/ProposalCard'
import { VirtueMark } from '../components/ui/VirtueMark'
import { GenerationTheater } from '../components/v/GenerationTheater'
import {
  getCounsellor,
  getMinistry,
  latestProposalForMinistry,
  listProposalsByMinistry,
} from '../data/repository'

// /ministry/:slug — The Counsellor's identity + method, a rolling situation
// brief, and the ranked list of proposals.
export function MinistryDetail() {
  const { slug } = useParams()
  const { t, lang } = useT()
  const vProposals = useStore((s) => s.vProposals)
  const ministry = slug ? getMinistry(slug) : undefined

  if (!ministry) {
    return (
      <Container className="py-20 text-center">
        <p className="text-muted">{t.common.notFound}</p>
        <Link to="/ministries" className="mt-4 inline-block text-gold">
          {t.common.backToCouncil}
        </Link>
      </Container>
    )
  }

  // PM's Office routes to NOUS (spec §4.1).
  if (ministry.isSynthesis) return <Navigate to="/nous" replace />

  const counsellor = getCounsellor(ministry.id)
  const proposals = [
    ...vProposals.filter((p) => p.ministryId === ministry.id),
    ...listProposalsByMinistry(ministry.id),
  ].sort((a, b) => +new Date(b.createdAt) - +new Date(a.createdAt))
  const latest = latestProposalForMinistry(ministry.id)

  return (
    <div>
      <PageHeader
        eyebrow={t.common.ministry}
        title={ministry.name[lang]}
        subtitle={ministry.description[lang]}
      />

      <Container className="py-10">
        <div className="grid gap-10 lg:grid-cols-[20rem_1fr]">
          {/* Counsellor identity + method */}
          <aside className="space-y-6 lg:sticky lg:top-20 lg:self-start">
            <div className="rounded-md border border-line bg-elev p-5">
              <div className="font-mono text-[11px] uppercase tracking-wider text-muted">
                {t.common.counsellor}
              </div>
              <div className="mt-1 text-lg font-semibold text-text">
                {counsellor?.displayName[lang]}
              </div>
              <div className="mt-3">
                <VirtueMark id={ministry.primaryVirtue} showGloss />
              </div>
            </div>

            <Field label={t.ministry.method}>
              <p className="text-sm leading-relaxed text-muted">
                {counsellor?.method[lang]}
              </p>
            </Field>

            <Field label={t.ministry.jurisdiction}>
              <p className="text-sm leading-relaxed text-muted">
                {ministry.jurisdiction[lang]}
              </p>
            </Field>

            {latest && (
              <Field label={t.ministry.situationBrief}>
                <p className="text-sm leading-relaxed text-muted">
                  {latest.situation[lang]}
                </p>
              </Field>
            )}
          </aside>

          {/* Proposals */}
          <div>
            {/* V — convene the Counsellor live */}
            <div className="mb-8">
              <GenerationTheater ministry={ministry} />
            </div>

            <h2 className="mb-4 text-xl font-semibold text-text">
              {t.ministry.proposalsRanked}{' '}
              <span className="font-mono text-sm text-muted">
                ({proposals.length})
              </span>
            </h2>
            {proposals.length === 0 ? (
              <p className="text-muted">{t.ministry.noProposals}</p>
            ) : (
              <ul className="space-y-4">
                {proposals.map((p) => (
                  <li key={p.id}>
                    <ProposalCard proposal={p} />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </Container>
    </div>
  )
}
