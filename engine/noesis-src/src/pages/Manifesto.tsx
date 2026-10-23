import { Link } from 'react-router-dom'
import { useT } from '../i18n'
import { Container } from '../components/ui/primitives'
import { MathBlock } from '../components/ui/Math'
import { VIRTUES } from '../constants/virtues'

// The objective function, front and centre: eudaimonia as a weighted
// generalized mean of the nine Index dimensions (full derivation on /blueprint).
const HERO_TEX = String.raw`E \;=\; \left( \sum_{i=1}^{9} w_i\, d_i^{\,\rho} \right)^{1/\rho}`

// / — Manifesto. The vision in one screen: the Republic reframed, the
// human-sovereign principle, the seven virtues mapped to function, how to
// participate. Calm, confident, short. One primary CTA.
export function Manifesto() {
  const { t, lang } = useT()

  return (
    <div>
      {/* Hero */}
      <section className="border-b border-line">
        <Container className="py-16 md:py-24">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
            {t.manifesto.eyebrow}
          </p>
          {/* Generous breathing room; no overflow container (it would create a
              stray scrollbar). Scales down on small screens so it never clips. */}
          <div className="my-12 text-2xl sm:text-3xl md:my-20 md:text-5xl">
            <MathBlock bare tex={HERO_TEX} className="math-flush" />
          </div>
          <h1 className="text-xl font-semibold text-text md:text-2xl">
            <Link
              to="/blueprint"
              className="inline-flex items-center gap-2 transition-colors hover:text-gold"
            >
              {t.blueprint.equationTitle}
              <span aria-hidden className="text-gold">
                →
              </span>
            </Link>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            {t.manifesto.lede}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/ministries"
              className="rounded-md bg-gold px-5 py-3 text-sm font-medium text-bg transition-opacity hover:opacity-90"
            >
              {t.manifesto.ctaPrimary}
            </Link>
            <Link
              to="/blueprint"
              className="rounded-md border border-line px-5 py-3 text-sm text-text transition-colors hover:border-gold/50"
            >
              {t.manifesto.ctaSecondary}
            </Link>
          </div>
        </Container>
      </section>

      {/* Three principles */}
      <section className="border-b border-line">
        <Container className="grid gap-px py-px md:grid-cols-3">
          {[
            {
              title: t.manifesto.principleHumanTitle,
              body: t.manifesto.principleHumanBody,
            },
            {
              title: t.manifesto.principleOpenTitle,
              body: t.manifesto.principleOpenBody,
            },
            {
              title: t.manifesto.principlePublicTitle,
              body: t.manifesto.principlePublicBody,
            },
          ].map((p, i) => (
            <div key={i} className="py-10 md:px-6 md:py-12 md:first:pl-0">
              <div className="font-mono text-sm text-gold">0{i + 1}</div>
              <h2 className="mt-3 text-lg font-semibold text-text">{p.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
            </div>
          ))}
        </Container>
      </section>

      {/* Seven virtues mapped to function */}
      <section className="border-b border-line">
        <Container className="py-14">
          <h2 className="text-2xl font-semibold text-text">
            {t.manifesto.virtuesTitle}
          </h2>
          <ul className="mt-8 divide-y divide-line border-y border-line">
            {VIRTUES.map((v) => (
              <li
                key={v.id}
                className="grid grid-cols-1 gap-2 py-4 md:grid-cols-[14rem_1fr] md:gap-6"
              >
                <div className="flex items-baseline gap-2">
                  <span aria-hidden className="text-gold">
                    ·
                  </span>
                  <span className="text-text">{v.el}</span>
                  <span className="text-sm text-muted">
                    {lang === 'el' ? v.gloss_el : v.gloss_en}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-muted">
                  {lang === 'el' ? v.function_el : v.function_en}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* How to participate */}
      <section>
        <Container className="py-14">
          <h2 className="text-2xl font-semibold text-text">{t.manifesto.howTitle}</h2>
          <ol className="mt-8 grid gap-6 md:grid-cols-3">
            {[t.manifesto.howStep1, t.manifesto.howStep2, t.manifesto.howStep3].map(
              (step, i) => (
                <li key={i} className="rounded-md border border-line bg-elev p-5">
                  <div className="font-mono text-2xl text-gold">{i + 1}</div>
                  <p className="mt-3 text-sm leading-relaxed text-text">{step}</p>
                </li>
              ),
            )}
          </ol>
          <div className="mt-10">
            <Link
              to="/ministries"
              className="inline-flex rounded-md bg-gold px-5 py-3 text-sm font-medium text-bg transition-opacity hover:opacity-90"
            >
              {t.manifesto.ctaPrimary}
            </Link>
          </div>
        </Container>
      </section>
    </div>
  )
}
