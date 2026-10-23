import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useT } from '../i18n'
import { Container } from '../components/ui/primitives'
import { MathBlock } from '../components/ui/Math'
import { RhoExplorer } from '../components/blueprint/RhoExplorer'
import { SoulOfLight } from '../components/v/SoulOfLight'
import { ProposalCard } from '../components/proposal/ProposalCard'
import {
  commentsForProposal,
  latestProposalForMinistry,
  listMinistries,
  listProposals,
  sentiment,
} from '../data/repository'

// / — Landing. Four beats chosen for the public face (spec §1): the declaration
// (Constitution), the objective function made playable (Equation), the open
// deliberation (Agora), and the whole apparatus (Council). The Manifesto keeps
// the long-form vision at /manifesto.
const HERO_TEX = String.raw`E \;=\; \left( \sum_{i=1}^{9} w_i\, d_i^{\,\rho} \right)^{1/\rho}`

export function Landing() {
  const { t, lang } = useT()
  const l = t.landing

  // Featured proposal for the Agora beat: the first flagship, with its top few
  // real citizen voices (curated where authored, generated otherwise).
  const featured = listProposals()[0]
  const topVoices = useMemo(() => {
    if (!featured) return []
    return commentsForProposal(featured.id, [], {})
      .filter((c) => !c.parentId)
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
  }, [featured])

  const ministries = listMinistries()

  return (
    <div>
      {/* 1 · The hero: the Soul as the living background — full-bleed and
             twice the size — with the call written over it. The overlay is
             pointer-transparent except for the links, so the light stays
             touchable between the words and the page still scrolls. */}
      {/* soul-hero (index.css): on wide screens the little souls may drift
             below the frame; the Soul itself is unchanged. */}
      <section className="soul-hero relative overflow-hidden border-b border-line">
        {/* On phones/tablets the Soul stands alone at the very top, with the
            copy in normal flow beneath it — and it is turned a quarter-turn so
            the little souls stream UPWARD (portrait) rather than drifting
            sideways, with the equation just below as the foot of the animation.
            The band is a centred square (capped) so the 90° turn never clips or
            distorts — a square, rotated, is still the same square. On wide
            screens everything resets: the Soul becomes the full-bleed
            background, shifted right so the copy reads against the darker flank,
            with no rotation. The turn is a wrapper transform only; the Soul
            component itself is never touched. */}
        <div className="relative mx-auto aspect-square w-full max-w-[28rem] rotate-90 lg:absolute lg:inset-0 lg:mx-0 lg:aspect-auto lg:h-auto lg:max-w-none lg:translate-x-[19%] lg:rotate-0">
          <SoulOfLight label={l.soulLabel} />
        </div>

        {/* Desktop-only spacer: sets the overlay hero's height. On mobile the
            copy below provides the height instead. */}
        <div className="hidden lg:block lg:min-h-[46rem]" />

        {/* The call and the law share the hero's floor, both on the page's own
            grid so they line up with everything below. */}
        <div className="relative pb-10 pt-4 lg:pointer-events-none lg:absolute lg:inset-x-0 lg:bottom-0 lg:pb-10 lg:pt-0">
          <Container>
            {/* Kept narrow so the words never sit on the soul's disc. */}
            <div className="max-w-lg drop-shadow-[0_2px_20px_rgba(11,14,20,0.95)] lg:-ml-8">
              {/* The law, written directly above its own name — with equal air
                  above and below so it breathes rather than leaning on the text. */}
              <div className="mt-6 mb-8 text-[1.3rem] lg:mt-14 lg:mb-28 md:text-[1.875rem]">
                <MathBlock bare tex={HERO_TEX} className="math-flush" />
              </div>

              <h1 className="text-xl font-semibold text-text md:text-2xl">
                <Link
                  to="/blueprint"
                  className="pointer-events-auto inline-flex items-center gap-2 transition-colors hover:text-gold"
                >
                  {t.blueprint.equationTitle}
                  <span aria-hidden className="text-gold">
                    →
                  </span>
                </Link>
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-text">
                {l.heroLine1} {l.heroLine2}
                <br />
                <span className="text-muted">{l.heroLine3}</span>
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {l.heroSub}
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
                <Link
                  to="/ministries"
                  className="pointer-events-auto rounded-md bg-gold px-5 py-3 text-sm font-medium text-bg transition-opacity hover:opacity-90"
                >
                  {l.ctaCouncil}
                </Link>
                <Link
                  to="/manifesto"
                  className="pointer-events-auto rounded-md border border-line bg-bg/40 px-5 py-3 text-sm text-text backdrop-blur-sm transition-colors hover:border-gold/50"
                >
                  {l.manifestoLink}
                </Link>
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* 3 · The Equation, made playable */}
      <section className="border-b border-line">
        <Container className="py-16">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <RhoExplorer />
            <div>
              <p className="max-w-xl text-sm leading-relaxed text-muted">
                {l.equationLede}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 4 · The Agora — the open deliberation */}
      <section className="border-b border-line">
        <Container className="py-16">
          <h2 className="text-2xl font-semibold text-text">{l.agoraTitle}</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
            {l.agoraLede}
          </p>

          {featured && (
            <div className="mt-8 grid gap-6 md:grid-cols-[1.2fr_1fr]">
              <ProposalCard proposal={featured} />

              <div className="flex flex-col rounded-md border border-line bg-elev p-5">
                <div className="font-mono text-xs uppercase tracking-wider text-copper">
                  {l.voices}
                </div>
                <ul className="mt-4 flex-1 space-y-4">
                  {topVoices.map((c) => (
                    <li key={c.id}>
                      <Link
                        to={`/proposal/${featured.id}`}
                        className="group block"
                      >
                        <div className="flex items-baseline justify-between gap-3">
                          <span className="text-sm text-gold">
                            {c.authorName}
                          </span>
                          <span className="shrink-0 font-mono text-xs text-muted">
                            ▲ {c.score}
                          </span>
                        </div>
                        <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-muted transition-colors group-hover:text-text">
                          {c.body}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/ministries"
                  className="mt-5 inline-flex text-sm text-gold transition-opacity hover:opacity-80"
                >
                  {l.agoraCta} →
                </Link>
              </div>
            </div>
          )}
        </Container>
      </section>

      {/* 5 · The Council — the whole apparatus */}
      <section>
        <Container className="py-16">
          <h2 className="text-2xl font-semibold text-text">
            {l.ministriesTitle}
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
            {l.ministriesLede}
          </p>

          <ul className="mt-8 grid md:grid-cols-2 md:gap-x-12">
            {ministries.map((m) => {
              const latest = latestProposalForMinistry(m.id)
              const to = m.isSynthesis ? '/nous' : `/ministry/${m.slug}`
              const approval = latest ? Math.round(sentiment(latest.id) * 100) : null
              return (
                <li key={m.id} className="border-b border-line">
                  <Link
                    to={to}
                    className="group flex items-center justify-between gap-4 py-3.5"
                  >
                    <span
                      className={`text-sm transition-colors group-hover:text-gold ${
                        m.isSynthesis ? 'text-gold' : 'text-text'
                      }`}
                    >
                      {m.name[lang]}
                    </span>
                    {approval != null && (
                      <span className="shrink-0 font-mono text-xs text-muted">
                        {approval}%{' '}
                        <span className="text-muted/70">{l.approve}</span>
                      </span>
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>

          <Link
            to="/ministries"
            className="mt-8 inline-flex rounded-md border border-gold/50 px-5 py-3 text-sm text-gold transition-colors hover:bg-gold/10"
          >
            {l.ministriesCta} →
          </Link>
        </Container>
      </section>
    </div>
  )
}
