import { useState } from 'react'
import { useT } from '../../i18n'
import { currentIndex, listProposals, getMinistryByIdRef } from '../../data/repository'
import { streamV, useVLive } from '../../lib/vApi'
import { demoNous, demoStream } from '../../lib/vDemo'

// NOUS convened live: the meta-agent reads the whole Council's proposals plus
// the current Index and writes the Prime Minister's synthesis in front of the
// citizen. Live = Claude Opus 5 through the intelligence server; demo =
// simulation computed from the actual corpus.
export function NousLive() {
  const { t, lang } = useT()
  const { live, ready } = useVLive()
  const [state, setState] = useState<'idle' | 'running' | 'done' | 'error'>('idle')
  const [text, setText] = useState('')

  const run = async () => {
    setState('running')
    setText('')
    if (live) {
      try {
        const magnitude = (d: Record<string, number | undefined>): number => {
          let total = 0
          for (const v of Object.values(d)) total += Math.abs(v ?? 0)
          return total
        }
        const corpus = [...listProposals()]
          .sort((a, b) => magnitude(b.eudaimoniaDelta) - magnitude(a.eudaimoniaDelta))
          .slice(0, 48)
          .map((p) => ({
            ministry: getMinistryByIdRef(p.ministryId)?.name.el ?? '—',
            title: p.title.el,
            delta: p.eudaimoniaDelta,
          }))
        await streamV('/api/nous', {
          proposals: corpus,
          index: currentIndex(),
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
    await demoStream(demoNous(lang), (d) => setText((s) => s + d))
    setState('done')
  }

  return (
    <section className="rounded-md border border-gold/40 bg-gold/5 p-5 md:p-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
          {t.v.nousTitle}
        </div>
        {ready && !live && (
          <span className="font-mono text-[10px] uppercase tracking-wider text-muted">
            {t.v.badgeDemo}
          </span>
        )}
      </div>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">{t.v.nousSub}</p>

      {state === 'idle' && (
        <button
          type="button"
          onClick={() => void run()}
          className="mt-4 rounded-md bg-gold px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-90"
        >
          {t.v.nousCta}
        </button>
      )}

      {text && (
        <div className="mt-4 rounded-md border border-line bg-bg p-4">
          <p className="whitespace-pre-wrap text-sm leading-relaxed text-text">
            {text}
            {state === 'running' && (
              <span aria-hidden className="v-caret text-gold">
                ▍
              </span>
            )}
          </p>
        </div>
      )}
      {state === 'running' && !text && (
        <p className="mt-4 font-mono text-xs uppercase tracking-wider text-muted">
          {t.v.working}
        </p>
      )}
      {state === 'error' && <p className="mt-4 text-sm text-negative">{t.v.errApi}</p>}
      {state === 'done' && (
        <button
          type="button"
          onClick={() => void run()}
          className="mt-4 rounded-md border border-line px-4 py-2 text-sm text-text transition-colors hover:border-gold/50"
        >
          {t.v.again}
        </button>
      )}
    </section>
  )
}
