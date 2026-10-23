import { useState } from 'react'
import { useT } from '../../i18n'
import { Slider } from '../ui/Slider'
import { MathInline } from '../ui/Math'
import { currentIndex } from '../../data/repository'
import { flourishing } from '../../lib/eudaimonia'
import { formatNumber } from '../../lib/format'

// Interactive demonstration of the Eudaimonia equation: drag ρ from 1
// (arithmetic mean / utilitarian) down through 0 (geometric / balanced) toward
// −∞ (the minimum / Rawlsian maximin), and watch the composite Index fall as
// imbalance is penalised ever more harshly. Computed live with the same
// flourishing() the rest of the app uses.
const RHO_MIN = -10
const RHO_MAX = 1

export function RhoExplorer() {
  const { t, lang } = useT()
  const e = t.blueprint.equationExplore
  const index = currentIndex()

  const values = Object.values(index)
  const minScore = Math.min(...values) // E as ρ → −∞ (maximin)
  const arith = flourishing(index, 1) // E at ρ = 1 (arithmetic mean)
  const geo = flourishing(index, 0) // E at ρ → 0 (geometric mean) reference tick
  const span = Math.max(arith - minScore, 1e-6)

  const [rho, setRho] = useState(0)
  const E = flourishing(index, rho)
  const pos = Math.min(1, Math.max(0, (E - minScore) / span))
  const geoPos = Math.min(1, Math.max(0, (geo - minScore) / span))

  const regime =
    rho >= 0.5
      ? e.regimeUtilitarian
      : rho <= -0.5
        ? e.regimePrioritarian
        : e.regimeBalanced

  return (
    <div className="rounded-md border border-line bg-elev p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="font-mono text-xs uppercase tracking-wider text-muted">
          {e.title}
        </div>
        <div className="flex items-baseline gap-2 text-muted">
          <MathInline tex={String.raw`E_{\rho}\ =`} />
          <span className="font-mono text-3xl text-gold">
            {formatNumber(E, lang, 1)}
          </span>
        </div>
      </div>

      <p className="mt-2 text-sm text-muted">{e.note}</p>

      <div className="mt-5">
        <Slider
          label={e.rhoLabel}
          value={rho}
          min={RHO_MIN}
          max={RHO_MAX}
          step={0.1}
          onChange={setRho}
          display={rho.toFixed(1)}
        />
      </div>

      {/* Flourishing scale: maximin (left) ↔ arithmetic mean (right). */}
      <div className="mt-6">
        <div className="relative h-2 rounded-full bg-line">
          {/* geometric-mean (ρ→0) reference tick */}
          <span
            aria-hidden
            className="absolute top-1/2 h-3.5 w-px -translate-y-1/2 bg-muted"
            style={{ left: `${geoPos * 100}%` }}
          />
          <span
            aria-hidden
            className="absolute top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-bg bg-gold transition-[left] duration-150"
            style={{ left: `${pos * 100}%` }}
          />
        </div>
        <div className="mt-2 flex justify-between font-mono text-xs text-muted">
          <span>
            {e.scaleMin} · {formatNumber(minScore, lang, 0)}
          </span>
          <span>
            {e.scaleMax} · {formatNumber(arith, lang, 1)}
          </span>
        </div>
      </div>

      <p className="mt-4 text-sm text-gold">{regime}</p>
    </div>
  )
}
