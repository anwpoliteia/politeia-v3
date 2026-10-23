import { useState } from 'react'
import {
  Bar,
  BarChart,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { useT } from '../i18n'
import { Container, PageHeader } from '../components/ui/primitives'
import { Slider } from '../components/ui/Slider'
import { CHART } from '../lib/chartTheme'
import { formatEuro, formatNumber } from '../lib/format'
import { cn } from '../lib/cn'
import {
  API_DEFAULTS,
  SOVEREIGN_DEFAULTS,
  computeApi,
  computeSovereign,
  type ApiInputs,
  type SovereignInputs,
} from '../lib/costModel'

type Mode = 'sovereign' | 'api'

// /cost — live parametric TCO calculator (spec §11). Honesty is the feature:
// expose the cost function, label every figure illustrative, never imply false
// precision (Hard Rule 9).
export function Cost() {
  const { t, lang } = useT()
  const [mode, setMode] = useState<Mode>('sovereign')
  const [sov, setSov] = useState<SovereignInputs>(SOVEREIGN_DEFAULTS)
  const [api, setApi] = useState<ApiInputs>(API_DEFAULTS)

  const sovR = computeSovereign(sov)
  const apiR = computeApi(api)

  const setS = (k: keyof SovereignInputs) => (v: number) =>
    setSov((p) => ({ ...p, [k]: v }))
  const setA = (k: keyof ApiInputs) => (v: number) =>
    setApi((p) => ({ ...p, [k]: v }))

  const euro = (n: number) => formatEuro(n, lang)
  // Per-unit prices (€/kWh, €/Mtok) need decimals — formatEuro rounds sub-€1000
  // values to whole euros, which would render €0.18/kWh as "€0".
  const price = (n: number) =>
    `€${n.toLocaleString(lang === 'el' ? 'el-GR' : 'en-GB', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`

  const sovBreakdown = [
    { name: t.cost.lines.amortisedCapex, value: sovR.annualAmortisedCapex, color: CHART.gold },
    { name: t.cost.lines.power, value: sovR.annualPower, color: CHART.positive },
    { name: t.cost.lines.staff, value: sovR.annualStaff, color: CHART.muted },
    { name: t.cost.lines.software, value: sovR.annualSoftware, color: CHART.copper },
  ]
  const apiBreakdown = [
    { name: t.cost.lines.apiSpend, value: apiR.annualApiSpend, color: CHART.gold },
    { name: t.cost.lines.hosting, value: apiR.annualHosting, color: CHART.muted },
  ]

  return (
    <div>
      <PageHeader title={t.cost.title} subtitle={t.cost.subtitle} />

      <Container className="py-10">
        {/* Illustrative banner */}
        <div className="mb-8 rounded-md border border-copper/40 bg-copper/5 px-4 py-3 font-mono text-xs uppercase tracking-wider text-copper">
          {t.cost.illustrative}
        </div>

        {/* Mode toggle */}
        <div
          className="mb-8 inline-flex rounded-md border border-line"
          role="group"
          aria-label="Cost mode"
        >
          <ModeTab active={mode === 'sovereign'} onClick={() => setMode('sovereign')}>
            {t.cost.modeSovereign}
          </ModeTab>
          <ModeTab active={mode === 'api'} onClick={() => setMode('api')}>
            {t.cost.modeApi}
          </ModeTab>
        </div>

        <p className="mb-8 max-w-2xl text-sm text-muted">
          {mode === 'sovereign' ? t.cost.sovereignIntro : t.cost.apiIntro}
        </p>

        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          {/* Inputs */}
          <div>
            <h2 className="mb-5 font-mono text-xs uppercase tracking-wider text-muted">
              {t.cost.inputs}
            </h2>
            {mode === 'sovereign' ? (
              <div className="space-y-5">
                <Slider label={t.cost.sliders.gpus} value={sov.gpus} min={64} max={2048} step={8} onChange={setS('gpus')} display={formatNumber(sov.gpus, lang)} />
                <Slider label={t.cost.sliders.capexPerGpu} value={sov.capexPerGpu} min={20000} max={45000} step={1000} onChange={setS('capexPerGpu')} display={euro(sov.capexPerGpu)} />
                <Slider label={t.cost.sliders.facility} value={sov.facility} min={0} max={80000000} step={1000000} onChange={setS('facility')} display={euro(sov.facility)} />
                <Slider label={t.cost.sliders.amortisation} value={sov.amortisation} min={3} max={7} step={1} onChange={setS('amortisation')} display={`${sov.amortisation}`} />
                <Slider label={t.cost.sliders.powerPerGpu} value={sov.powerPerGpu} min={0.8} max={1.6} step={0.1} onChange={setS('powerPerGpu')} display={`${sov.powerPerGpu.toFixed(1)} kW`} />
                <Slider label={t.cost.sliders.loadFactor} value={sov.loadFactor} min={0.3} max={1} step={0.05} onChange={setS('loadFactor')} display={sov.loadFactor.toFixed(2)} />
                <Slider label={t.cost.sliders.electricity} value={sov.electricity} min={0.05} max={0.3} step={0.01} onChange={setS('electricity')} display={`${price(sov.electricity)}/kWh`} />
                <Slider label={t.cost.sliders.staff} value={sov.staff} min={5} max={150} step={1} onChange={setS('staff')} display={formatNumber(sov.staff, lang)} />
                <Slider label={t.cost.sliders.costPerHead} value={sov.costPerHead} min={45000} max={120000} step={1000} onChange={setS('costPerHead')} display={euro(sov.costPerHead)} />
                <Slider label={t.cost.sliders.softwareOpex} value={sov.softwareOpex} min={500000} max={5000000} step={100000} onChange={setS('softwareOpex')} display={euro(sov.softwareOpex)} />
              </div>
            ) : (
              <div className="space-y-5">
                <Slider label={t.cost.sliders.proposalsPerDay} value={api.proposalsPerDay} min={1} max={500} step={1} onChange={setA('proposalsPerDay')} display={formatNumber(api.proposalsPerDay, lang)} />
                <Slider label={t.cost.sliders.tokensIn} value={api.tokensIn} min={1000} max={50000} step={500} onChange={setA('tokensIn')} display={formatNumber(api.tokensIn, lang)} />
                <Slider label={t.cost.sliders.tokensOut} value={api.tokensOut} min={1000} max={30000} step={500} onChange={setA('tokensOut')} display={formatNumber(api.tokensOut, lang)} />
                <Slider label={t.cost.sliders.qaVolume} value={api.qaVolume} min={0} max={50000} step={100} onChange={setA('qaVolume')} display={formatNumber(api.qaVolume, lang)} />
                <Slider label={t.cost.sliders.priceIn} value={api.priceIn} min={0.1} max={20} step={0.1} onChange={setA('priceIn')} display={`${price(api.priceIn)}/Mtok`} />
                <Slider label={t.cost.sliders.priceOut} value={api.priceOut} min={0.5} max={80} step={0.5} onChange={setA('priceOut')} display={`${price(api.priceOut)}/Mtok`} />
                <Slider label={t.cost.sliders.hostingOpex} value={api.hostingOpex} min={10000} max={500000} step={5000} onChange={setA('hostingOpex')} display={euro(api.hostingOpex)} />
              </div>
            )}
          </div>

          {/* Results */}
          <div>
            <h2 className="mb-5 font-mono text-xs uppercase tracking-wider text-muted">
              {t.cost.results}
            </h2>

            <div className="grid gap-4 sm:grid-cols-2">
              <Headline
                label={t.cost.annualTco}
                value={euro(mode === 'sovereign' ? sovR.annualTco : apiR.annualTotal)}
                suffix={t.cost.perYear}
              />
              {mode === 'sovereign' ? (
                <Headline
                  label={t.cost.upfrontCapex}
                  value={euro(sovR.totalCapex)}
                  muted
                />
              ) : (
                <Headline
                  label={t.cost.annualTco}
                  value={euro(apiR.monthlyTotal)}
                  suffix={t.cost.perMonth}
                  muted
                />
              )}
            </div>

            <div className="mt-6 rounded-md border border-line bg-elev p-5">
              <div className="mb-3 font-mono text-xs uppercase tracking-wider text-muted">
                {t.cost.breakdown}
              </div>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    layout="vertical"
                    data={mode === 'sovereign' ? sovBreakdown : apiBreakdown}
                    margin={{ left: 8, right: 16 }}
                  >
                    <XAxis
                      type="number"
                      tickFormatter={(v) => euro(Number(v))}
                      tick={{ fill: CHART.muted, fontSize: 10 }}
                      stroke={CHART.line}
                    />
                    <YAxis
                      type="category"
                      dataKey="name"
                      width={140}
                      tick={{ fill: CHART.muted, fontSize: 11 }}
                      stroke={CHART.line}
                    />
                    <Tooltip
                      cursor={{ fill: CHART.line, opacity: 0.3 }}
                      formatter={(v) => euro(Number(v))}
                      contentStyle={{
                        background: CHART.elev,
                        border: `1px solid ${CHART.line}`,
                        borderRadius: 6,
                        color: CHART.text,
                        fontSize: 12,
                      }}
                    />
                    <Bar dataKey="value" radius={2}>
                      {(mode === 'sovereign' ? sovBreakdown : apiBreakdown).map((d) => (
                        <Cell key={d.name} fill={d.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Context */}
            {mode === 'sovereign' && (
              <div className="mt-6 rounded-md border border-line bg-elev p-5">
                <div className="mb-1 font-mono text-xs uppercase tracking-wider text-muted">
                  {t.cost.context}
                </div>
                <p className="text-sm leading-relaxed text-text">{t.cost.contextBody}</p>
              </div>
            )}
          </div>
        </div>

        {/* Trade-off */}
        <div className="mt-12 max-w-3xl border-t border-line pt-8">
          <h2 className="mb-2 text-lg font-semibold text-text">{t.cost.tradeoffTitle}</h2>
          <p className="leading-relaxed text-muted">{t.cost.tradeoffBody}</p>
        </div>
      </Container>
    </div>
  )
}

function ModeTab({
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
        'px-4 py-2 text-sm transition-colors',
        active ? 'text-gold' : 'text-muted hover:text-text',
      )}
    >
      {children}
    </button>
  )
}

function Headline({
  label,
  value,
  suffix,
  muted,
}: {
  label: string
  value: string
  suffix?: string
  muted?: boolean
}) {
  return (
    <div className="rounded-md border border-line bg-elev p-5">
      <div className="font-mono text-xs uppercase tracking-wider text-muted">
        {label}
      </div>
      <div
        className={cn(
          'mt-2 font-mono text-3xl',
          muted ? 'text-text' : 'text-gold',
        )}
      >
        {value}
        {suffix && <span className="ml-1 text-base text-muted">{suffix}</span>}
      </div>
    </div>
  )
}
