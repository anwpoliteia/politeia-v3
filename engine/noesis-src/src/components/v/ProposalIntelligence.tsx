import { useMemo, useRef, useState } from 'react'
import { useT } from '../../i18n'
import { useStore } from '../../store/useStore'
import type { Proposal } from '../../lib/types'
import { commentsForProposal } from '../../data/repository'
import { streamV, useVLive, type VAgoraMap } from '../../lib/vApi'
import { demoAgora, demoAntilogos, demoCompanion, demoStream } from '../../lib/vDemo'

// The V intelligence attached to every proposal page:
//   1. the counter-argument deepened by a second adversarial pass,
//   2. the map of the debate (themes / consensus / dissent from real voices),
//   3. the citizen companion — Q&A grounded ONLY in the proposal text.
export function ProposalIntelligence({ proposal }: { proposal: Proposal }) {
  const { t } = useT()
  return (
    <section className="space-y-6 border-t border-line pt-8">
      <div className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
        {t.v.intelTitle}
      </div>
      <Deepen proposal={proposal} />
      <AgoraMap proposal={proposal} />
      <Companion proposal={proposal} />
    </section>
  )
}

// ---- 1 · Αντίλογος σε βάθος -------------------------------------------------

function Deepen({ proposal }: { proposal: Proposal }) {
  const { t, lang } = useT()
  const { live } = useVLive()
  const [state, setState] = useState<'idle' | 'running' | 'done' | 'error'>('idle')
  const [text, setText] = useState('')

  const run = async () => {
    setState('running')
    setText('')
    if (live) {
      try {
        await streamV('/api/antilogos', {
          title: proposal.title[lang],
          recommendation: proposal.recommendation[lang],
          reasoning: proposal.reasoning[lang],
          language: lang,
        }, {
          onDelta: (d) => setText((s) => s + d),
          onError: () => setState('error'),
        })
        setState((s) => (s === 'running' ? 'done' : s))
      } catch {
        setState('error')
      }
      return
    }
    await demoStream(demoAntilogos(proposal, lang), (d) => setText((s) => s + d))
    setState('done')
  }

  return (
    <div className="rounded-md border border-copper/50 bg-copper/5 p-5">
      <div className="font-mono text-xs uppercase tracking-wider text-copper">
        {t.v.deepenTitle}
      </div>
      <p className="mt-1 text-xs text-muted">{t.v.deepenSub}</p>
      {state === 'idle' && (
        <button
          type="button"
          onClick={() => void run()}
          className="mt-3 rounded-md border border-copper/60 px-4 py-2 text-sm text-copper transition-colors hover:bg-copper/10"
        >
          {t.v.deepenCta}
        </button>
      )}
      {text && (
        <p className="mt-3 whitespace-pre-wrap text-sm leading-relaxed text-text">
          {text}
          {state === 'running' && (
            <span aria-hidden className="v-caret text-copper">
              ▍
            </span>
          )}
        </p>
      )}
      {state === 'error' && <p className="mt-3 text-sm text-negative">{t.v.errApi}</p>}
    </div>
  )
}

// ---- 2 · Ο χάρτης της συζήτησης ---------------------------------------------

function AgoraMap({ proposal }: { proposal: Proposal }) {
  const { t, lang } = useT()
  const { live } = useVLive()
  const userComments = useStore((s) => s.comments)
  const commentVotes = useStore((s) => s.commentVotes)
  const [state, setState] = useState<'idle' | 'running' | 'done' | 'error'>('idle')
  const [map, setMap] = useState<VAgoraMap | null>(null)

  const comments = useMemo(
    () => commentsForProposal(proposal.id, userComments, commentVotes),
    [proposal.id, userComments, commentVotes],
  )

  const run = async () => {
    setState('running')
    if (live) {
      try {
        const r = await fetch('/api/agora', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            comments: comments.map((c) => ({ author: c.authorName, body: c.body })),
            language: lang,
          }),
        })
        if (!r.ok) throw new Error('api')
        const data = (await r.json()) as { map: VAgoraMap }
        setMap(data.map)
        setState('done')
      } catch {
        setState('error')
      }
      return
    }
    await new Promise((r) => setTimeout(r, 700))
    setMap(demoAgora(comments, lang))
    setState('done')
  }

  const stanceLabel = (s: 'for' | 'against' | 'mixed') =>
    s === 'for' ? t.v.stanceFor : s === 'against' ? t.v.stanceAgainst : t.v.stanceMixed
  const stanceColor = (s: 'for' | 'against' | 'mixed') =>
    s === 'for' ? 'text-positive' : s === 'against' ? 'text-negative' : 'text-muted'

  if (comments.length === 0) return null

  return (
    <div className="rounded-md border border-line bg-elev p-5">
      <div className="font-mono text-xs uppercase tracking-wider text-gold">
        {t.v.agoraTitle}
      </div>
      <p className="mt-1 text-xs text-muted">{t.v.agoraSub}</p>

      {state !== 'done' && (
        <button
          type="button"
          disabled={state === 'running'}
          onClick={() => void run()}
          className="mt-3 rounded-md border border-gold/50 px-4 py-2 text-sm text-gold transition-colors hover:bg-gold/10 disabled:opacity-50"
        >
          {state === 'running' ? t.v.working : t.v.agoraCta}
        </button>
      )}
      {state === 'error' && <p className="mt-3 text-sm text-negative">{t.v.errApi}</p>}

      {map && (
        <div className="mt-4 space-y-5">
          <div>
            <div className="mb-2 font-mono text-[11px] uppercase tracking-wider text-muted">
              {t.v.agoraThemes}
            </div>
            <ul className="flex flex-wrap gap-2">
              {map.themes.map((th) => (
                <li
                  key={th.label}
                  className="flex items-baseline gap-2 rounded-md border border-line bg-bg px-3 py-1.5 text-sm text-text"
                >
                  {th.label}
                  <span className="font-mono text-xs text-muted">{th.count}</span>
                  <span className={'font-mono text-[10px] uppercase ' + stanceColor(th.stance)}>
                    {stanceLabel(th.stance)}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <div className="mb-2 font-mono text-[11px] uppercase tracking-wider text-positive">
                {t.v.agoraConsensus}
              </div>
              <ul className="space-y-1.5">
                {map.consensus.map((c, i) => (
                  <li key={i} className="text-sm leading-relaxed text-text">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="mb-2 font-mono text-[11px] uppercase tracking-wider text-negative">
                {t.v.agoraDissensus}
              </div>
              <ul className="space-y-1.5">
                {map.dissensus.map((c, i) => (
                  <li key={i} className="text-sm leading-relaxed text-text">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <blockquote className="rounded-md border-l-2 border-positive/60 bg-bg p-3 text-sm leading-relaxed text-muted">
              <div className="mb-1 font-mono text-[10px] uppercase tracking-wider text-positive">
                {t.v.agoraFor}
              </div>
              {map.strongestFor}
            </blockquote>
            <blockquote className="rounded-md border-l-2 border-negative/60 bg-bg p-3 text-sm leading-relaxed text-muted">
              <div className="mb-1 font-mono text-[10px] uppercase tracking-wider text-negative">
                {t.v.agoraAgainst}
              </div>
              {map.strongestAgainst}
            </blockquote>
          </div>
        </div>
      )}
    </div>
  )
}

// ---- 3 · Ο Σύντροφος του Πολίτη ---------------------------------------------

interface Turn {
  role: 'user' | 'assistant'
  content: string
}

function Companion({ proposal }: { proposal: Proposal }) {
  const { t, lang } = useT()
  const { live } = useVLive()
  const [turns, setTurns] = useState<Turn[]>([])
  const [input, setInput] = useState('')
  const [busy, setBusy] = useState(false)
  const listRef = useRef<HTMLDivElement>(null)

  const ask = async (question: string) => {
    const q = question.trim()
    if (!q || busy) return
    setBusy(true)
    setInput('')
    const history = turns
    setTurns((s) => [...s, { role: 'user', content: q }, { role: 'assistant', content: '' }])
    const append = (d: string) =>
      setTurns((s) => {
        const next = [...s]
        const last = next[next.length - 1]
        next[next.length - 1] = { ...last, content: last.content + d }
        return next
      })
    setTimeout(() => listRef.current?.scrollTo({ top: 1e6 }), 50)

    if (live) {
      try {
        await streamV('/api/companion', {
          proposal: {
            title: proposal.title[lang],
            plain: proposal.plain[lang],
            situation: proposal.situation[lang],
            recommendation: proposal.recommendation[lang],
            reasoning: proposal.reasoning[lang],
            counterArgument: proposal.counterArgument[lang],
            distributionalNote: proposal.distributionalNote[lang],
            uncertainty: proposal.uncertainty[lang],
          },
          question: q,
          history,
          language: lang,
        }, {
          onDelta: append,
          onError: () => append(t.v.errApi),
        })
      } catch {
        append(t.v.errApi)
      }
    } else {
      await demoStream(demoCompanion(q, proposal, lang), append)
    }
    setBusy(false)
  }

  const chips = [t.v.chip1, t.v.chip2, t.v.chip3]

  return (
    <div className="rounded-md border border-gold/40 bg-gold/5 p-5">
      <div className="font-mono text-xs uppercase tracking-wider text-gold">
        {t.v.companionTitle}
      </div>
      <p className="mt-1 text-xs text-muted">{t.v.companionSub}</p>

      {turns.length === 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {chips.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => void ask(c)}
              className="rounded-md border border-line bg-bg px-3 py-1.5 text-sm text-text transition-colors hover:border-gold/50"
            >
              {c}
            </button>
          ))}
        </div>
      )}

      {turns.length > 0 && (
        <div ref={listRef} className="mt-4 max-h-80 space-y-3 overflow-y-auto pr-1">
          {turns.map((turn, i) => (
            <div
              key={i}
              className={
                turn.role === 'user'
                  ? 'ml-6 rounded-md border border-line bg-bg p-3 text-sm text-text'
                  : 'mr-6 rounded-md border border-gold/30 bg-bg p-3 text-sm leading-relaxed text-text'
              }
            >
              {turn.content}
              {turn.role === 'assistant' && busy && i === turns.length - 1 && (
                <span aria-hidden className="v-caret text-gold">
                  ▍
                </span>
              )}
            </div>
          ))}
        </div>
      )}

      <form
        className="mt-4 flex gap-2"
        onSubmit={(e) => {
          e.preventDefault()
          void ask(input)
        }}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={t.v.companionPlaceholder}
          className="min-h-11 flex-1 rounded-md border border-line bg-bg px-3 py-2 text-sm text-text placeholder:text-muted focus:border-gold/50"
        />
        <button
          type="submit"
          disabled={busy || !input.trim()}
          className="min-h-11 rounded-md bg-gold px-4 py-2 text-sm font-medium text-bg transition-opacity hover:opacity-90 disabled:opacity-50"
        >
          {t.v.companionSend}
        </button>
      </form>
    </div>
  )
}
