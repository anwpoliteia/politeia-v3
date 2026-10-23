import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useT } from '../../i18n'
import { useStore } from '../../store/useStore'
import type { Ministry } from '../../lib/types'
import {
  draftToProposal,
  streamV,
  useVLive,
  type VProposalDraft,
} from '../../lib/vApi'
import { demoCounsellor, demoStream } from '../../lib/vDemo'

type Status = 'idle' | 'running' | 'done' | 'error'
type Phase = 'reasoning' | 'structuring' | 'filing'

// The live Counsellor session: the citizen convenes the ministry's AI
// Counsellor and watches the full argument — reasoning, mandatory
// counter-argument, 9-dimension scoring — being written in front of them.
// Live mode streams Claude Opus 5 via the intelligence server; demo mode
// simulates the same theatre from the seed corpus, clearly labelled.
export function GenerationTheater({ ministry }: { ministry: Ministry }) {
  const { t, lang } = useT()
  const { live, ready } = useVLive()
  const addVProposal = useStore((s) => s.addVProposal)

  const [status, setStatus] = useState<Status>('idle')
  const [phase, setPhase] = useState<Phase>('reasoning')
  const [text, setText] = useState('')
  const [topic, setTopic] = useState('')
  const [doneId, setDoneId] = useState<string | null>(null)
  const [errKey, setErrKey] = useState<'errRefusal' | 'errApi'>('errApi')
  const abortRef = useRef<{ aborted: boolean }>({ aborted: false })
  const endRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: 'nearest' })
  }, [text, phase])

  useEffect(() => () => void (abortRef.current.aborted = true), [])

  const finalize = (draft: VProposalDraft, modelUsed: string) => {
    const proposal = draftToProposal(draft, ministry, modelUsed)
    addVProposal(proposal)
    setDoneId(proposal.id)
    setPhase('filing')
    setStatus('done')
  }

  const run = async () => {
    setStatus('running')
    setPhase('reasoning')
    setText('')
    setDoneId(null)
    abortRef.current = { aborted: false }
    const signal = abortRef.current

    if (live) {
      try {
        let finalDraft: VProposalDraft | null = null
        let model = 'claude-opus-5'
        await streamV('/api/counsellor', {
          ministryName: ministry.name.el,
          jurisdiction: ministry.jurisdiction.el,
          topic: topic.trim() || undefined,
          language: lang,
        }, {
          onPhase: (p) => setPhase(p === 'structuring' ? 'structuring' : 'reasoning'),
          onDelta: (d) => setText((s) => s + d),
          onFinal: (data) => {
            const payload = data as { proposal: VProposalDraft; modelUsed: string }
            finalDraft = payload.proposal
            model = payload.modelUsed
          },
          onError: (m) => {
            setErrKey(m === 'refusal' ? 'errRefusal' : 'errApi')
            setStatus('error')
          },
        })
        if (signal.aborted) return
        if (finalDraft) finalize(finalDraft, model)
        else setStatus((s) => (s === 'running' ? 'error' : s))
      } catch {
        if (!signal.aborted) {
          setErrKey('errApi')
          setStatus('error')
        }
      }
      return
    }

    // Demo simulation — same theatre, seed corpus, honest label.
    const { prose, draft } = demoCounsellor(ministry, lang)
    await demoStream(prose, (d) => setText((s) => s + d), signal)
    if (signal.aborted) return
    setPhase('structuring')
    await new Promise((r) => setTimeout(r, 900))
    if (signal.aborted) return
    finalize(draft, 'simulation-seed')
  }

  const phases: { id: Phase; label: string }[] = [
    { id: 'reasoning', label: t.v.phaseReasoning },
    { id: 'structuring', label: t.v.phaseStructuring },
    { id: 'filing', label: t.v.phaseFiling },
  ]
  const phaseIdx = phases.findIndex((p) => p.id === phase)

  return (
    <section className="rounded-md border border-gold/40 bg-gold/5 p-5 md:p-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
          {t.v.sessionEyebrow}
        </div>
        {ready && !live && (
          <span className="font-mono text-[10px] uppercase tracking-wider text-muted">
            {t.v.badgeDemo}
          </span>
        )}
      </div>

      {status === 'idle' && (
        <div className="mt-3">
          <h3 className="text-lg font-semibold text-text">{t.v.sessionTitle}</h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
            {t.v.sessionSub}
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder={t.v.topicPlaceholder}
              className="min-h-11 flex-1 rounded-md border border-line bg-bg px-3 py-2 text-sm text-text placeholder:text-muted focus:border-gold/50"
            />
            <button
              type="button"
              onClick={() => void run()}
              className="min-h-11 rounded-md bg-gold px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-90"
            >
              {t.v.convene}
            </button>
          </div>
          {ready && !live && (
            <p className="mt-3 text-xs text-muted">{t.v.demoNote}</p>
          )}
        </div>
      )}

      {status !== 'idle' && (
        <div className="mt-4">
          {/* Phase timeline */}
          <ol className="flex flex-wrap items-center gap-2">
            {phases.map((p, i) => {
              const active = i === phaseIdx && status === 'running'
              const done = i < phaseIdx || status === 'done'
              return (
                <li key={p.id} className="flex items-center gap-2">
                  <span
                    className={
                      'rounded-md border px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider transition-colors ' +
                      (active
                        ? 'border-gold bg-gold/10 text-gold'
                        : done
                          ? 'border-positive/50 text-positive'
                          : 'border-line text-muted')
                    }
                  >
                    {p.label}
                  </span>
                  {i < phases.length - 1 && (
                    <span aria-hidden className="h-px w-4 bg-line" />
                  )}
                </li>
              )
            })}
          </ol>

          {/* The public reasoning, streamed */}
          {text && (
            <div className="mt-4 max-h-96 overflow-y-auto rounded-md border border-line bg-bg p-4">
              <p className="whitespace-pre-wrap text-sm leading-relaxed text-text">
                {text}
                {status === 'running' && (
                  <span aria-hidden className="v-caret text-gold">
                    ▍
                  </span>
                )}
              </p>
              <div ref={endRef} />
            </div>
          )}
          {status === 'running' && (
            <p className="mt-2 font-mono text-[11px] uppercase tracking-wider text-muted">
              {t.v.streamingNote}
            </p>
          )}

          {status === 'done' && doneId && (
            <div className="mt-5 rounded-md border border-positive/50 bg-positive/5 p-4">
              <div className="font-mono text-xs uppercase tracking-wider text-positive">
                {t.v.doneTitle}
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <Link
                  to={`/proposal/${doneId}`}
                  className="rounded-md bg-gold px-4 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-90"
                >
                  {t.v.doneCta} →
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setStatus('idle')
                    setText('')
                  }}
                  className="rounded-md border border-line px-4 py-2.5 text-sm text-text transition-colors hover:border-gold/50"
                >
                  {t.v.again}
                </button>
              </div>
              {!live && <p className="mt-3 text-xs text-muted">{t.v.demoTag}</p>}
            </div>
          )}

          {status === 'error' && (
            <div className="mt-5 rounded-md border border-negative/50 bg-negative/5 p-4">
              <p className="text-sm text-text">{t.v[errKey]}</p>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="mt-3 rounded-md border border-line px-4 py-2 text-sm text-text transition-colors hover:border-gold/50"
              >
                {t.v.again}
              </button>
            </div>
          )}
        </div>
      )}
    </section>
  )
}
