import { Link } from 'react-router-dom'
import { useT } from '../i18n'
import { Container, PageHeader } from '../components/ui/primitives'
import { VIRTUES } from '../constants/virtues'
import { SAFEGUARDS, SYSTEM_PROMPT_SKELETON } from '../constants/safeguards'
import { MathBlock, MathInline } from '../components/ui/Math'
import { RhoExplorer } from '../components/blueprint/RhoExplorer'
import { AristotleFoundation } from '../components/blueprint/AristotleFoundation'

// TeX for the Eudaimonia equation (rendered with KaTeX). Static, trusted source;
// mirrors the implementation in src/lib/eudaimonia.ts (transparent by construction).
const TEX = {
  composite: String.raw`E_{\rho}(\mathbf{d}) \;=\; \left( \sum_{i=1}^{9} w_i\, d_i^{\,\rho} \right)^{1/\rho}, \qquad \textstyle\sum_i w_i = 1,\;\; 0 \le d_i \le 100,\;\; \rho \le 1`,
  geometric: String.raw`E_{0}(\mathbf{d}) \;=\; \prod_{i=1}^{9} d_i^{\,w_i} \qquad (\rho \to 0)`,
  objective: String.raw`\Delta E(P) \;=\; E_{\rho}\!\left(\mathbf{d} \oplus \boldsymbol{\delta}(P)\right) \,-\, E_{\rho}(\mathbf{d})`,
  marginal: String.raw`\frac{\partial E_{0}}{\partial d_i} \;=\; \frac{w_i\, E_{0}}{d_i}`,
} as const

const LEGEND_SYMBOLS = [
  String.raw`E_{\rho}`,
  String.raw`d_i`,
  String.raw`w_i`,
  String.raw`\rho`,
] as const

// /blueprint — the architecture documented openly (spec §10). Self-documenting:
// the Eudaimonia equation (lead), diagram, philosophy, the seven-virtue charter
// verbatim, routing, scoring, the agent prompt, safeguards, adaptation guide,
// open methodology.
export function Blueprint() {
  const { t, lang } = useT()

  const flow = [
    { el: 'Σύμβουλοι', en: 'Counsellors', sub: { el: '18 υπουργεία', en: '18 ministries' } },
    { el: 'ΝΟΥΣ', en: 'NOUS', sub: { el: 'σύνθεση', en: 'synthesis' } },
    {
      el: 'Δημόσια διαβούλευση',
      en: 'Public deliberation',
      sub: { el: 'ο λαός κρίνει', en: 'the public judges' },
    },
    {
      el: 'Ανθρώπινη απόφαση',
      en: 'Human decision',
      sub: { el: 'επώνυμη, υπεύθυνη', en: 'named, accountable' },
    },
  ]

  return (
    <div>
      <PageHeader title={t.blueprint.title} subtitle={t.blueprint.subtitle} />

      <Container className="py-12 space-y-16">
        {/* The Eudaimonia equation — led with, the intellectual core */}
        <section>
          <h2 className="mb-3 text-2xl font-semibold text-text">
            {t.blueprint.equationTitle}
          </h2>
          <p className="max-w-3xl leading-relaxed text-muted">
            {t.blueprint.equationIntro}
          </p>

          <div className="mt-6 max-w-3xl space-y-4">
            <MathBlock tex={TEX.composite} />
            <MathBlock tex={TEX.geometric} />
          </div>

          {/* Interactive ρ explorer */}
          <div className="mt-6 max-w-3xl">
            <RhoExplorer />
          </div>

          {/* Symbol legend */}
          <div className="mt-6 max-w-3xl">
            <div className="mb-3 font-mono text-xs uppercase tracking-wider text-muted">
              {t.blueprint.equationLegendTitle}
            </div>
            <ul className="space-y-2">
              {t.blueprint.equationLegend.map((desc, i) => (
                <li key={i} className="flex items-baseline gap-4">
                  <span className="inline-flex min-w-14 justify-end text-gold">
                    <MathInline tex={LEGEND_SYMBOLS[i]} />
                  </span>
                  <span className="text-sm text-muted">{desc}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-6 max-w-3xl leading-relaxed text-muted">
            {t.blueprint.equationDefault}
          </p>

          {/* What ρ does — the dial from utilitarian mean to Rawlsian maximin */}
          <div className="mt-8 max-w-3xl">
            <h3 className="mb-3 text-base font-semibold text-text">
              {t.blueprint.equationRhoTitle}
            </h3>
            <ul className="space-y-2">
              {t.blueprint.equationRho.map((line, i) => (
                <li
                  key={i}
                  className="flex gap-3 rounded-md border border-line bg-elev p-3 text-sm text-muted"
                >
                  <span aria-hidden className="text-gold">
                    ·
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* The Counsellor objective */}
          <div className="mt-8 max-w-3xl">
            <h3 className="mb-3 text-base font-semibold text-text">
              {t.blueprint.equationObjectiveTitle}
            </h3>
            <p className="leading-relaxed text-muted">
              {t.blueprint.equationObjectiveBody}
            </p>
            <div className="mt-4">
              <MathBlock tex={TEX.objective} />
            </div>
          </div>

          {/* Why the worst-off come first — the prioritarian property */}
          <div className="mt-8 max-w-3xl">
            <h3 className="mb-3 text-base font-semibold text-text">
              {t.blueprint.equationPriorityTitle}
            </h3>
            <p className="leading-relaxed text-muted">
              {t.blueprint.equationPriorityBody}
            </p>
            <div className="mt-4">
              <MathBlock tex={TEX.marginal} />
            </div>
          </div>

          <p className="mt-8 max-w-3xl rounded-md border border-copper/40 bg-copper/5 p-4 text-sm leading-relaxed text-muted">
            {t.blueprint.equationCaveat}
          </p>

          {/* Philosophical foundation: what eudaimonia is and why it is the objective */}
          <AristotleFoundation />
        </section>

        {/* Diagram */}
        <section>
          <h2 className="mb-6 text-xl font-semibold text-text">
            {t.blueprint.diagramTitle}
          </h2>
          <div className="flex flex-col items-stretch gap-3 md:flex-row md:items-center">
            {flow.map((node, i) => (
              <div key={i} className="flex flex-1 items-center gap-3">
                <div className="flex-1 rounded-md border border-line bg-elev p-4 text-center">
                  <div className="font-mono text-sm text-gold">{node[lang]}</div>
                  <div className="mt-1 text-xs text-muted">{node.sub[lang]}</div>
                </div>
                {i < flow.length - 1 && (
                  <span aria-hidden className="text-gold md:rotate-0">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
          <p className="mt-4 font-mono text-xs text-muted">{t.blueprint.diagramFlow}</p>
        </section>

        {/* Philosophy */}
        <section className="max-w-3xl">
          <h2 className="mb-3 text-xl font-semibold text-text">
            {t.blueprint.philosophyTitle}
          </h2>
          <p className="leading-relaxed text-muted">{t.blueprint.philosophyBody}</p>
        </section>

        {/* Seven-virtue charter — verbatim */}
        <section>
          <h2 className="mb-6 text-xl font-semibold text-text">
            {t.blueprint.charterTitle}
          </h2>
          <ul className="divide-y divide-line border-y border-line">
            {VIRTUES.map((v) => (
              <li
                key={v.id}
                className="grid grid-cols-1 gap-2 py-5 md:grid-cols-[16rem_1fr] md:gap-8"
              >
                <div>
                  <div className="flex items-baseline gap-2">
                    <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-gold" />
                    <span className="text-text">{v.el}</span>
                    <span className="text-sm text-muted">/ {v.en}</span>
                  </div>
                  <div className="mt-1 pl-3.5 text-xs text-muted">
                    {lang === 'el' ? v.gloss_el : v.gloss_en}
                  </div>
                </div>
                <p className="leading-relaxed text-muted">
                  {lang === 'el' ? v.function_el : v.function_en}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* Architecture & routing */}
        <section className="max-w-3xl">
          <h2 className="mb-3 text-xl font-semibold text-text">
            {t.blueprint.architectureTitle}
          </h2>
          <p className="leading-relaxed text-muted">{t.blueprint.architectureBody}</p>
        </section>

        {/* Scoring */}
        <section className="max-w-3xl">
          <h2 className="mb-3 text-xl font-semibold text-text">
            {t.blueprint.scoringTitle}
          </h2>
          <p className="leading-relaxed text-muted">{t.blueprint.scoringBody}</p>
        </section>

        {/* System-prompt skeleton */}
        <section>
          <h2 className="mb-4 text-xl font-semibold text-text">
            {t.blueprint.promptTitle}
          </h2>
          <pre className="overflow-x-auto rounded-md border border-line bg-elev p-5 font-mono text-xs leading-relaxed text-muted">
            {SYSTEM_PROMPT_SKELETON}
          </pre>
        </section>

        {/* Safeguards */}
        <section>
          <h2 className="mb-6 text-xl font-semibold text-text">
            {t.blueprint.safeguardsTitle}
          </h2>
          <ul className="grid gap-3 md:grid-cols-2">
            {SAFEGUARDS.map((s, i) => (
              <li
                key={i}
                className="flex gap-3 rounded-md border border-line bg-elev p-4"
              >
                <span className="font-mono text-sm text-gold">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-sm leading-relaxed text-text">{s[lang]}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Adapt + open methodology */}
        <section className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-3 text-xl font-semibold text-text">
              {t.blueprint.adaptTitle}
            </h2>
            <p className="leading-relaxed text-muted">{t.blueprint.adaptBody}</p>
          </div>
          <div>
            <h2 className="mb-3 text-xl font-semibold text-text">
              {t.blueprint.openTitle}
            </h2>
            <p className="leading-relaxed text-muted">{t.blueprint.openBody}</p>
          </div>
        </section>

        {/* Appendix link → The Canon & The Statecraft */}
        <section>
          <Link
            to="/canon"
            className="flex flex-wrap items-baseline justify-between gap-3 rounded-md border border-line bg-elev p-5 transition-colors hover:border-gold/40"
          >
            <span>
              <span className="font-mono text-xs uppercase tracking-wider text-muted">
                {t.nav.canon}
              </span>
              <span className="mt-1 block text-lg font-semibold text-text">
                {t.canon.title}
              </span>
            </span>
            <span className="text-gold">→</span>
          </Link>
        </section>
      </Container>
    </div>
  )
}
