// /vasanos — ΒΑΣΑΝΟΣ, the Touchstone.
//
// The βάσανος was the black stone Athenians rubbed gold against to see whether
// it was real; in the courts it came to mean the testing of evidence. Here it
// tests public speech: put any video, recording or transcript on the stone and
// its checkable assertions are lifted out as they are spoken, searched against
// the open web, and returned with a verdict, its evidence and its sources.
//
// Advisory, like everything else in ΠΟΛΙΤΕΙΑ. The stone reports what the record
// says; the citizen decides what to make of it.

import { useEffect, useMemo, useRef, useState } from 'react'
import { useT } from '../i18n'
import { Container, PageHeader } from '../components/ui/primitives'
import { SourcePicker } from '../components/basanos/SourcePicker'
import { VerdictCard } from '../components/basanos/VerdictCard'
import { ClaimDossier } from '../components/basanos/ClaimDossier'
import { YouTubeStage, type StageHandle } from '../components/basanos/YouTubeStage'
import { VideoStage } from '../components/basanos/VideoStage'
import { useLiveCheck } from '../components/basanos/useLiveCheck'
import { useVirtualClock } from '../components/basanos/useVirtualClock'
import {
  timecode,
  VERDICT_ORDER,
  VERDICT_STYLE,
  type LoadedSource,
} from '../lib/basanos'
import { useVLive } from '../lib/vApi'
import { cn } from '../lib/cn'

/** A card appears a beat before the words land, never after. */
const REVEAL_GRACE = 1

/** One number in the dossier's tally strip. */
function Stat({
  label,
  value,
  tone,
}: {
  label: string
  value: number
  tone?: 'gold'
}) {
  return (
    <span className="flex items-baseline gap-2">
      <dt className="font-mono text-[10px] uppercase tracking-wider text-muted">
        {label}
      </dt>
      <dd className={cn('font-mono text-lg', tone === 'gold' ? 'text-gold' : 'text-text')}>
        {value}
      </dd>
    </span>
  )
}

export function Basanos() {
  const { t, lang } = useT()
  const { live, ready } = useVLive()

  const [source, setSource] = useState<LoadedSource | null>(null)
  const [time, setTime] = useState(0)
  const [checking, setChecking] = useState(true)
  // Sweep reads the whole transcript regardless of the playhead, to build the
  // dossier of every claim. It costs a search per batch, so it is always the
  // citizen's deliberate choice rather than something that starts on its own.
  const [sweep, setSweep] = useState(false)
  const stageRef = useRef<StageHandle | null>(null)

  const hasPlayer = Boolean(source?.videoId || source?.mediaUrl)
  const clock = useVirtualClock(source?.durationSec ?? 0, Boolean(source) && !hasPlayer)

  // Object URLs for local files are held by the browser until revoked; a citizen
  // who checks six recordings in a row should not leak six of them.
  useEffect(() => {
    const url = source?.kind === 'file' ? source.mediaUrl : null
    return () => {
      if (url) URL.revokeObjectURL(url)
    }
  }, [source])

  useEffect(() => {
    if (!hasPlayer) setTime(clock.time)
  }, [hasPlayer, clock.time])

  useEffect(() => {
    setTime(0)
    setSweep(false)
  }, [source])

  const { claims, phase, stream, error, searchFailed, progress } = useLiveCheck(
    source,
    time,
    Boolean(source) && live && (checking || sweep),
    lang,
    sweep,
  )

  const seek = (seconds: number) => {
    if (hasPlayer) stageRef.current?.seek(seconds)
    else clock.seek(seconds)
    setTime(seconds)
  }

  // Only what has been said by now — the rail is a record of the video as heard,
  // not a spoiler of what is coming.
  const revealed = useMemo(
    () => claims.filter((c) => c.t <= time + REVEAL_GRACE).sort((a, b) => b.t - a.t),
    [claims, time],
  )

  const tally = useMemo(() => {
    const counts = new Map<string, number>()
    for (const c of revealed) {
      if (!c.verdict) continue
      counts.set(c.verdict.verdict, (counts.get(c.verdict.verdict) ?? 0) + 1)
    }
    return counts
  }, [revealed])

  // The dossier is the whole record, in the order the video said it — unlike the
  // rail, nothing here is gated on the playhead.
  const ordered = useMemo(() => [...claims].sort((a, b) => a.t - b.t), [claims])

  const counts = useMemo(() => {
    let judged = 0
    let pending = 0
    let failed = 0
    for (const c of claims) {
      if (c.status === 'judged') judged++
      else if (c.status === 'failed') failed++
      else pending++
    }
    return { judged, pending, failed }
  }, [claims])

  const sweepComplete = sweep && progress >= 1 && counts.pending === 0

  const nowLine = useMemo(() => {
    if (!source) return null
    const lines = source.lines
    for (let i = lines.length - 1; i >= 0; i--) {
      if (lines[i].t <= time) return lines[i]
    }
    return lines[0] ?? null
  }, [source, time])

  const phaseLabel: Record<string, string> = {
    extracting: t.basanos.phaseExtracting,
    searching: t.basanos.phaseSearching,
    structuring: t.basanos.phaseStructuring,
  }

  return (
    <div>
      <PageHeader
        eyebrow={t.basanos.eyebrow}
        title={t.basanos.title}
        subtitle={t.basanos.subtitle}
      />

      <Container className="py-10">
        {!source ? (
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_20rem]">
            <div className="space-y-6">
              <SourcePicker onLoad={setSource} />
              {ready && !live && (
                <p className="rounded-md border border-line bg-elev p-4 text-sm leading-relaxed text-muted">
                  {t.basanos.needKey}
                </p>
              )}
            </div>

            <aside className="space-y-5">
              <h2 className="font-mono text-xs uppercase tracking-wider text-gold">
                {t.basanos.howTitle}
              </h2>
              <ol className="space-y-3">
                {[t.basanos.how1, t.basanos.how2, t.basanos.how3, t.basanos.how4].map(
                  (step, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span className="font-mono text-gold">{i + 1}</span>
                      <span>{step}</span>
                    </li>
                  ),
                )}
              </ol>
              <p className="border-t border-line pt-4 text-xs leading-relaxed text-muted">
                {t.basanos.disclaimer}
              </p>
            </aside>
          </div>
        ) : (
          <>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_24rem]">
            {/* ---- stage ---- */}
            <div className="space-y-5">
              {source.videoId && (
                <YouTubeStage
                  videoId={source.videoId}
                  onTime={setTime}
                  handle={stageRef}
                />
              )}
              {source.mediaUrl && (
                <VideoStage src={source.mediaUrl} onTime={setTime} handle={stageRef} />
              )}
              {!hasPlayer && (
                <div className="flex flex-wrap items-center gap-4 rounded-md border border-line bg-elev p-4">
                  <button
                    type="button"
                    onClick={clock.toggle}
                    className="min-h-11 rounded-md bg-gold px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-90"
                  >
                    {clock.running ? t.basanos.clockPause : t.basanos.clockPlay}
                  </button>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
                      {t.basanos.clockSpeed}
                    </span>
                    {[1, 2, 4].map((rate) => (
                      <button
                        key={rate}
                        type="button"
                        onClick={() => clock.setRate(rate)}
                        className={cn(
                          'rounded-md border px-2.5 py-1 font-mono text-xs transition-colors',
                          clock.rate === rate
                            ? 'border-gold/50 text-gold'
                            : 'border-line text-muted hover:text-text',
                        )}
                      >
                        {rate}×
                      </button>
                    ))}
                  </div>
                  <span className="font-mono text-sm text-muted">
                    {timecode(time)} / {timecode(source.durationSec)}
                  </span>
                </div>
              )}

              {/* ---- what is being said right now ---- */}
              <div className="rounded-md border border-line bg-elev p-4">
                <div className="flex items-baseline justify-between gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted">
                    {t.basanos.nowSpeaking}
                  </span>
                  <span className="font-mono text-[11px] text-muted">{timecode(time)}</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-text">
                  {nowLine?.text ?? '—'}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <div className="min-w-32 flex-1">
                  <div className="h-1 overflow-hidden rounded-full bg-line">
                    <div
                      className="h-full bg-gold transition-[width] duration-500"
                      style={{ width: `${Math.round(progress * 100)}%` }}
                    />
                  </div>
                  <p className="mt-1.5 font-mono text-[10px] uppercase tracking-wider text-muted">
                    {t.basanos.progressLabel} {Math.round(progress * 100)}%
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setChecking((c) => !c)}
                  disabled={!live}
                  className="rounded-md border border-line px-4 py-2 text-sm text-text transition-colors hover:border-gold/50 disabled:opacity-50"
                >
                  {checking ? t.basanos.pauseCheck : t.basanos.resumeCheck}
                </button>
                <button
                  type="button"
                  onClick={() => setSource(null)}
                  className="rounded-md border border-line px-4 py-2 text-sm text-muted transition-colors hover:text-text"
                >
                  {t.basanos.changeSource}
                </button>
              </div>

              {/* ---- the judgement, as it is written ---- */}
              {stream && (
                <div className="rounded-md border border-gold/40 bg-gold/5 p-5">
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-gold">
                      {t.basanos.judgementTitle}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-muted">
                      {phaseLabel[phase] ?? ''}
                    </span>
                  </div>
                  <pre className="max-h-64 overflow-y-auto whitespace-pre-wrap font-sans text-sm leading-relaxed text-text">
                    {stream}
                    <span aria-hidden className="v-caret">
                      ▍
                    </span>
                  </pre>
                  <p className="mt-3 text-xs leading-relaxed text-muted">
                    {t.basanos.judgementNote}
                  </p>
                </div>
              )}

              {/* ---- honest caveats about this particular source ---- */}
              <div className="space-y-2">
                {source.autoCaptions && (
                  <p className="text-xs leading-relaxed text-muted">
                    {t.basanos.autoCaptionsWarning}
                  </p>
                )}
                {!source.timed && (
                  <p className="text-xs leading-relaxed text-muted">
                    {t.basanos.notTimedWarning}
                  </p>
                )}
                {searchFailed && (
                  <p className="text-xs leading-relaxed text-copper">
                    {t.basanos.searchFailedNote}
                  </p>
                )}
                {error && (
                  <p className="text-sm text-negative">
                    {error === 'no-credit'
                      ? t.basanos.errNoCredit
                      : error === 'bad-key'
                        ? t.basanos.errBadKey
                        : t.v.errApi}
                  </p>
                )}
                {ready && !live && (
                  <p className="text-sm text-muted">{t.basanos.needKey}</p>
                )}
              </div>
            </div>

            {/* ---- the rail ---- */}
            <aside className="space-y-4">
              <div className="flex items-baseline justify-between gap-3">
                <h2 className="font-mono text-xs uppercase tracking-wider text-gold">
                  {t.basanos.railTitle}
                </h2>
                <span className="font-mono text-[11px] text-muted">{revealed.length}</span>
              </div>

              {tally.size > 0 && (
                <ul className="flex flex-wrap gap-x-4 gap-y-1.5 border-b border-line pb-3">
                  {VERDICT_ORDER.filter((v) => tally.get(v)).map((v) => (
                    <li key={v} className="flex items-center gap-1.5">
                      <span
                        aria-hidden
                        className={cn('h-1.5 w-1.5 rounded-full', VERDICT_STYLE[v].dot)}
                      />
                      <span className="font-mono text-[10px] uppercase tracking-wider text-muted">
                        {t.basanos.verdicts[v]}
                      </span>
                      <span className={cn('font-mono text-xs', VERDICT_STYLE[v].text)}>
                        {tally.get(v)}
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              {revealed.length === 0 ? (
                <p className="rounded-md border border-dashed border-line p-5 text-sm leading-relaxed text-muted">
                  {live && checking ? t.basanos.railWaiting : t.basanos.railPaused}
                </p>
              ) : (
                <div className="space-y-3">
                  {revealed.map((claim) => (
                    <VerdictCard key={claim.id} claim={claim} onSeek={seek} />
                  ))}
                </div>
              )}

              <p className="border-t border-line pt-4 text-xs leading-relaxed text-muted">
                {t.basanos.disclaimer}
              </p>
            </aside>
          </div>

          {/* ---- the dossier: every claim in the video, with its evidence ---- */}
          <section className="mt-14 border-t border-line pt-10">
            <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-4">
              <div>
                <h2 className="text-xl font-semibold text-text">
                  {t.basanos.dossierTitle}
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                  {t.basanos.dossierSub}
                </p>
              </div>
              {sweep ? (
                <button
                  type="button"
                  onClick={() => setSweep(false)}
                  className="min-h-11 rounded-md border border-line px-5 py-2.5 text-sm text-text transition-colors hover:border-gold/50"
                >
                  {t.basanos.sweepStop}
                </button>
              ) : (
                <button
                  type="button"
                  disabled={!live}
                  onClick={() => setSweep(true)}
                  className="min-h-11 rounded-md bg-gold px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-90 disabled:opacity-50"
                >
                  {t.basanos.sweepCta}
                </button>
              )}
            </div>

            <dl className="mt-6 flex flex-wrap items-baseline gap-x-8 gap-y-3 border-y border-line py-3">
              <Stat label={t.basanos.countFound} value={claims.length} />
              <Stat label={t.basanos.countJudged} value={counts.judged} tone="gold" />
              <Stat label={t.basanos.countPending} value={counts.pending} />
              {counts.failed > 0 && (
                <Stat label={t.basanos.countFailed} value={counts.failed} />
              )}
              <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
                {sweepComplete
                  ? t.basanos.sweepDone
                  : sweep
                    ? t.basanos.sweepRunning
                    : t.basanos.sweepIdle}
              </span>
            </dl>

            <p className="mt-3 max-w-3xl text-xs leading-relaxed text-muted">
              {t.basanos.sweepNote}
            </p>

            <div className="mt-8">
              <ClaimDossier claims={ordered} onSeek={seek} />
            </div>
          </section>
          </>
        )}
      </Container>
    </div>
  )
}
