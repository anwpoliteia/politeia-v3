import { useEffect, useState } from 'react'
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Legend,
} from 'recharts'
import { useT } from '../i18n'
import { Container, PageHeader } from '../components/ui/primitives'
import { ConfidenceMeter } from '../components/ui/ConfidenceMeter'
import { DivergingBars } from '../components/ui/DivergingBars'
import { CHART } from '../lib/chartTheme'
import { currentIndex } from '../data/repository'
import { applyDelta, flourishing } from '../lib/eudaimonia'
import { DIMENSIONS } from '../constants/dimensions'
import { formatNumber } from '../lib/format'
import { useVLive, type VEstimate } from '../lib/vApi'
import { demoEstimate } from '../lib/vDemo'
import type { EudaimoniaDelta } from '../lib/types'

type Status = 'idle' | 'running' | 'done' | 'error'

// /ergastirio — The Citizen's Workshop (V). A citizen writes their own policy
// idea; the Counsellor estimates its signed effect on the nine dimensions, and
// the published Equation scores it: E today vs E with the idea. Non-binding by
// construction — an instrument for public reasoning, not a promise.
export function Workshop() {
  const { t, lang } = useT()
  const { live, ready } = useVLive()
  const [idea, setIdea] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [estimate, setEstimate] = useState<VEstimate | null>(null)
  const [tick, setTick] = useState(0)

  // Rotating status line while the Counsellor reasons.
  useEffect(() => {
    if (status !== 'running') return
    const id = setInterval(() => setTick((n) => n + 1), 1600)
    return () => clearInterval(id)
  }, [status])

  const statusLines = [t.v.estimating1, t.v.estimating2, t.v.estimating3]

  const run = async () => {
    if (idea.trim().length < 8) return
    setStatus('running')
    setEstimate(null)
    if (live) {
      try {
        const r = await fetch('/api/estimate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ idea: idea.trim(), language: lang }),
        })
        if (!r.ok) throw new Error('api')
        const data = (await r.json()) as { estimate?: VEstimate; error?: string }
        if (!data.estimate) throw new Error(data.error || 'api')
        setEstimate(data.estimate)
        setStatus('done')
      } catch {
        setStatus('error')
      }
      return
    }
    await new Promise((r) => setTimeout(r, 2000))
    setEstimate(demoEstimate(idea.trim(), lang))
    setStatus('done')
  }

  const index = currentIndex()
  const eBefore = flourishing(index)

  // Clamp to the published scale (−10..+10): live model output is not
  // guaranteed to respect numeric bounds, and the charts must stay honest.
  const clamped = {} as Record<(typeof DIMENSIONS)[number]['id'], number>
  const delta: EudaimoniaDelta = {}
  if (estimate) {
    for (const d of DIMENSIONS) {
      const v = Math.max(-10, Math.min(10, Math.round(Number(estimate.deltas[d.id]) || 0)))
      clamped[d.id] = v
      if (v !== 0) delta[d.id] = v
    }
  }
  const after = estimate ? applyDelta(index, delta) : index
  const eAfter = flourishing(after)
  const dE = eAfter - eBefore

  const radarData = DIMENSIONS.map((d) => ({
    label: lang === 'el' ? d.short_el : d.short_en,
    before: index[d.id],
    after: after[d.id],
  }))

  return (
    <div>
      <PageHeader
        eyebrow={t.v.workshopEyebrow}
        title={t.v.workshopTitle}
        subtitle={t.v.workshopSub}
      />

      <Container className="py-10">
        {/* The idea */}
        <div className="mx-auto max-w-3xl">
          <textarea
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            placeholder={t.v.ideaPlaceholder}
            rows={4}
            className="w-full rounded-md border border-line bg-elev p-4 text-base leading-relaxed text-text placeholder:text-muted focus:border-gold/50"
          />
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <button
              type="button"
              disabled={status === 'running' || idea.trim().length < 8}
              onClick={() => void run()}
              className="min-h-11 rounded-md bg-gold px-6 py-3 text-sm font-medium text-bg transition-opacity hover:opacity-90 disabled:opacity-50"
            >
              {status === 'running' ? t.v.working : t.v.estimate}
            </button>
            {ready && !live && (
              <span className="font-mono text-[10px] uppercase tracking-wider text-muted">
                {t.v.badgeDemo}
              </span>
            )}
          </div>

          {status === 'running' && (
            <div className="mt-8 rounded-md border border-gold/40 bg-gold/5 p-5">
              <p className="font-mono text-sm text-gold">
                {statusLines[tick % statusLines.length]}
                <span aria-hidden className="v-caret">
                  ▍
                </span>
              </p>
            </div>
          )}
          {status === 'error' && (
            <p className="mt-6 text-sm text-negative">{t.v.errApi}</p>
          )}
        </div>

        {/* The verdict of the Equation */}
        {estimate && status === 'done' && (
          <div className="mx-auto mt-12 max-w-4xl space-y-10">
            <h2 className="text-xl font-semibold text-text">
              {estimate.title[lang]}
            </h2>

            {/* E before → after */}
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-md border border-line bg-elev p-5">
                <div className="font-mono text-[11px] uppercase tracking-wider text-muted">
                  {t.v.eBefore}
                </div>
                <div className="mt-2 font-mono text-4xl text-text">
                  {formatNumber(eBefore, lang, 1)}
                </div>
              </div>
              <div className="rounded-md border border-gold/50 bg-gold/5 p-5">
                <div className="font-mono text-[11px] uppercase tracking-wider text-gold">
                  {t.v.eAfter}
                </div>
                <div className="mt-2 font-mono text-4xl text-gold">
                  {formatNumber(eAfter, lang, 1)}
                </div>
              </div>
              <div className="rounded-md border border-line bg-elev p-5">
                <div className="font-mono text-[11px] uppercase tracking-wider text-muted">
                  ΔE
                </div>
                <div
                  className={
                    'mt-2 font-mono text-4xl ' +
                    (dE >= 0 ? 'text-positive' : 'text-negative')
                  }
                >
                  {dE >= 0 ? '+' : ''}
                  {formatNumber(dE, lang, 2)}
                </div>
              </div>
            </div>

            {/* Radar: today vs with-the-idea */}
            <div className="rounded-md border border-line bg-elev p-5">
              <div className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={radarData} outerRadius="72%">
                    <PolarGrid stroke={CHART.line} />
                    <PolarAngleAxis
                      dataKey="label"
                      tick={{ fill: CHART.muted, fontSize: 11 }}
                    />
                    <Radar
                      name={t.v.radarBefore}
                      dataKey="before"
                      stroke={CHART.muted}
                      fill={CHART.muted}
                      fillOpacity={0.12}
                    />
                    <Radar
                      name={t.v.radarAfter}
                      dataKey="after"
                      stroke={CHART.gold}
                      fill={CHART.gold}
                      fillOpacity={0.2}
                    />
                    <Legend
                      wrapperStyle={{ fontSize: 12, color: CHART.muted }}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Per-dimension verdict + reasoning */}
            <div>
              <div className="mb-3 font-mono text-xs uppercase tracking-wider text-muted">
                {t.v.perDimension}
              </div>
              <DivergingBars delta={delta} />
              <ul className="mt-6 space-y-3">
                {DIMENSIONS.map((d) => {
                  const v = clamped[d.id] ?? 0
                  return (
                    <li
                      key={d.id}
                      className="grid grid-cols-[3.5rem_1fr] items-baseline gap-3 border-b border-line pb-3"
                    >
                      <span
                        className={
                          'font-mono text-sm ' +
                          (v > 0
                            ? 'text-positive'
                            : v < 0
                              ? 'text-negative'
                              : 'text-muted')
                        }
                      >
                        {v > 0 ? `+${v}` : v}
                      </span>
                      <span>
                        <span className="text-sm text-text">
                          {lang === 'el' ? d.el : d.en}
                        </span>
                        <span className="mt-0.5 block text-sm leading-relaxed text-muted">
                          {estimate.rationale[d.id]}
                        </span>
                      </span>
                    </li>
                  )
                })}
              </ul>
            </div>

            {/* Uncertainty + confidence + disclaimer */}
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-md border border-line bg-elev p-5">
                <div className="mb-2 font-mono text-[11px] uppercase tracking-wider text-muted">
                  {t.v.workshopUncertainty}
                </div>
                <p className="text-sm leading-relaxed text-text">
                  {estimate.uncertainty[lang]}
                </p>
              </div>
              <div className="rounded-md border border-line bg-elev p-5">
                <div className="mb-2 font-mono text-[11px] uppercase tracking-wider text-muted">
                  {t.v.workshopConfidence}
                </div>
                <ConfidenceMeter value={estimate.confidence} />
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => {
                  setStatus('idle')
                  setEstimate(null)
                  setIdea('')
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                className="rounded-md border border-line px-5 py-2.5 text-sm text-text transition-colors hover:border-gold/50"
              >
                {t.v.tryAnother}
              </button>
              <p className="text-xs leading-relaxed text-muted">
                {t.v.workshopDisclaimer}
              </p>
            </div>
          </div>
        )}
      </Container>
    </div>
  )
}
