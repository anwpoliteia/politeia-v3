import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import {
  Line,
  LineChart,
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'
import { useT } from '../i18n'
import { Container, Field, PageHeader } from '../components/ui/primitives'
import { CHART } from '../lib/chartTheme'
import {
  currentIndex,
  getMinistryByIdRef,
  listMetrics,
  listProposals,
} from '../data/repository'
import { DIMENSIONS, getDimension, type DimensionId } from '../constants/dimensions'
import { formatNumber, formatSignedDelta } from '../lib/format'
import { flourishing } from '../lib/eudaimonia'
import { NousLive } from '../components/v/NousLive'

// /nous — Synthesis (Prime Minister view). The whole-of-government Eudaimonia
// Index, dimensions over time, explicit cross-ministry trade-offs, and the
// proposals that most raise the lowest-scoring dimensions (spec §4, §7).
export function Nous() {
  const { t, lang } = useT()
  const index = currentIndex()
  const composite = flourishing(index)
  const metrics = listMetrics()
  const proposals = listProposals()

  // Radar of current national scores.
  const radarData = DIMENSIONS.map((d) => ({
    label: lang === 'el' ? d.short_el : d.short_en,
    value: index[d.id],
  }))

  // Per-dimension monthly series for the small-multiple sparklines.
  const seriesByDim = useMemo(() => {
    const map = {} as Record<DimensionId, { i: number; value: number }[]>
    for (const d of DIMENSIONS) {
      map[d.id] = metrics
        .filter((m) => m.dimension === d.id)
        .sort((a, b) => +new Date(a.measuredAt) - +new Date(b.measuredAt))
        .map((m, i) => ({ i, value: m.value }))
    }
    return map
  }, [metrics])

  // Three lowest-scoring dimensions (the priority targets).
  const lowest = useMemo(
    () =>
      [...DIMENSIONS]
        .sort((a, b) => index[a.id] - index[b.id])
        .slice(0, 3)
        .map((d) => d.id),
    [index],
  )

  // Proposals ranked by how much they raise the three lowest dimensions.
  const priorities = useMemo(() => {
    return proposals
      .map((p) => {
        const lift = lowest.reduce(
          (sum, dim) => sum + Math.max(0, p.eudaimoniaDelta[dim] ?? 0),
          0,
        )
        return { proposal: p, lift }
      })
      .filter((x) => x.lift > 0)
      .sort((a, b) => b.lift - a.lift)
      .slice(0, 8)
  }, [proposals, lowest])

  // Cross-ministry tensions: proposals that raise one dimension at the cost of
  // another (the explicit trade-offs the synthesis must surface).
  const tensions = useMemo(() => {
    return proposals
      .map((p) => {
        const entries = Object.entries(p.eudaimoniaDelta) as [DimensionId, number][]
        const up = entries.filter(([, v]) => v > 0).sort((a, b) => b[1] - a[1])[0]
        const down = entries.filter(([, v]) => v < 0).sort((a, b) => a[1] - b[1])[0]
        return up && down ? { proposal: p, up, down } : null
      })
      .filter((x): x is NonNullable<typeof x> => x !== null)
      .sort((a, b) => b.up[1] - b.down[1] - (a.up[1] - a.down[1]))
      .slice(0, 6)
  }, [proposals])

  return (
    <div>
      <PageHeader eyebrow="ΝΟΥΣ · νοῦς" title={t.nous.title} subtitle={t.nous.subtitle} />

      <Container className="py-10 space-y-14">
        {/* V — NOUS convened live, in front of the citizen */}
        <NousLive />

        {/* Index: radar + intro */}
        <section>
          <h2 className="text-xl font-semibold text-text">{t.nous.indexTitle}</h2>
          <p className="mt-2 max-w-2xl text-sm text-muted">{t.nous.indexSubtitle}</p>

          <div className="mt-6 inline-flex items-baseline gap-4 rounded-md border border-gold/40 bg-gold/5 px-5 py-3">
            <span className="font-mono text-xs uppercase tracking-wider text-gold">
              {t.nous.composite}
            </span>
            <span className="font-mono text-3xl text-text">
              {formatNumber(composite, lang, 1)}
            </span>
          </div>
          <p className="mt-2 max-w-2xl text-xs text-muted">{t.nous.compositeNote}</p>

          <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-md border border-line bg-elev p-5">
              <div className="mb-2 font-mono text-xs uppercase tracking-wider text-muted">
                {t.nous.radarTitle}
              </div>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={radarData} outerRadius="72%">
                    <PolarGrid stroke={CHART.line} />
                    <PolarAngleAxis
                      dataKey="label"
                      tick={{ fill: CHART.muted, fontSize: 11 }}
                    />
                    <Radar
                      dataKey="value"
                      stroke={CHART.gold}
                      fill={CHART.gold}
                      fillOpacity={0.18}
                    />
                    <Tooltip
                      contentStyle={{
                        background: CHART.elev,
                        border: `1px solid ${CHART.line}`,
                        borderRadius: 6,
                        color: CHART.text,
                        fontSize: 12,
                      }}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Lowest dimensions callout */}
            <div className="rounded-md border border-line bg-elev p-5">
              <div className="mb-3 font-mono text-xs uppercase tracking-wider text-copper">
                {t.nous.lowestDimensions}
              </div>
              <ul className="space-y-3">
                {lowest.map((id, rank) => {
                  const d = getDimension(id)
                  return (
                    <li key={id} className="flex items-center justify-between gap-4">
                      <span className="flex items-center gap-3 text-sm text-text">
                        <span className="font-mono text-copper">{rank + 1}</span>
                        {lang === 'el' ? d.el : d.en}
                      </span>
                      <span className="font-mono text-lg text-text">{index[id]}</span>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </section>

        {/* Dimensions over time — small multiples */}
        <section>
          <h2 className="text-xl font-semibold text-text">{t.nous.trendsTitle}</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {DIMENSIONS.map((d) => {
              const isLow = lowest.includes(d.id)
              const color = isLow ? CHART.copper : CHART.muted
              return (
                <li key={d.id} className="rounded-md border border-line bg-elev p-4">
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="text-sm text-text">
                      {lang === 'el' ? d.el : d.en}
                    </span>
                    <span className="font-mono text-lg text-text">{index[d.id]}</span>
                  </div>
                  <div className="mt-2 h-12">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={seriesByDim[d.id]}>
                        <Line
                          type="monotone"
                          dataKey="value"
                          stroke={color}
                          strokeWidth={1.5}
                          dot={false}
                          isAnimationActive={false}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </li>
              )
            })}
          </ul>
        </section>

        {/* Cross-ministry tensions */}
        <section>
          <h2 className="text-xl font-semibold text-text">{t.nous.tensionsTitle}</h2>
          <p className="mt-2 max-w-2xl text-sm text-muted">{t.nous.tensionsSubtitle}</p>
          <ul className="mt-6 space-y-3">
            {tensions.map(({ proposal, up, down }) => {
              const upDim = getDimension(up[0])
              const downDim = getDimension(down[0])
              const m = getMinistryByIdRef(proposal.ministryId)
              return (
                <li
                  key={proposal.id}
                  className="rounded-md border border-copper/40 bg-copper/5 p-4"
                >
                  <Link
                    to={`/proposal/${proposal.id}`}
                    className="text-sm font-medium text-text hover:text-gold"
                  >
                    {proposal.title[lang]}
                  </Link>
                  <p className="mt-2 text-sm text-muted">
                    {m && <span className="text-text">{m.name[lang]}</span>}{' '}
                    <span className="text-positive">
                      {t.nous.raises} {lang === 'el' ? upDim.el : upDim.en}{' '}
                      ({formatSignedDelta(up[1])})
                    </span>{' '}
                    <span aria-hidden>·</span>{' '}
                    <span className="text-negative">
                      {t.nous.lowers} {lang === 'el' ? downDim.el : downDim.en}{' '}
                      ({formatSignedDelta(down[1])})
                    </span>
                  </p>
                </li>
              )
            })}
          </ul>
        </section>

        {/* Priorities for the PM */}
        <section>
          <h2 className="text-xl font-semibold text-text">{t.nous.prioritiesTitle}</h2>
          <p className="mt-2 max-w-2xl text-sm text-muted">
            {t.nous.prioritiesSubtitle}
          </p>
          <ol className="mt-6 space-y-3">
            {priorities.map(({ proposal, lift }, i) => {
              const m = getMinistryByIdRef(proposal.ministryId)
              return (
                <li key={proposal.id}>
                  <Link
                    to={`/proposal/${proposal.id}`}
                    className="flex items-center gap-4 rounded-md border border-line bg-elev p-4 transition-colors hover:border-gold/40"
                  >
                    <span className="font-mono text-lg text-gold">{i + 1}</span>
                    <span className="flex-1">
                      <span className="block text-sm font-medium text-text">
                        {proposal.title[lang]}
                      </span>
                      {m && (
                        <span className="text-xs text-muted">{m.name[lang]}</span>
                      )}
                    </span>
                    <span className="font-mono text-sm text-positive">
                      +{lift}
                    </span>
                  </Link>
                </li>
              )
            })}
          </ol>
        </section>

        {/* The synthesis brief itself */}
        <Field label={t.council.synthesis}>
          <Link
            to="/proposal/prop-nous-01"
            className="inline-flex rounded-md border border-gold/50 px-5 py-3 text-sm text-gold transition-colors hover:bg-gold/10"
          >
            {t.common.readMore} →
          </Link>
        </Field>
      </Container>
    </div>
  )
}
