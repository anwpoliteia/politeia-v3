// The ΒΑΣΑΝΟΣ pipeline: a playback clock in, a rail of judged claims out.
//
// Two loops run against the same clock, each one at a time so a long video
// cannot open fifty parallel requests:
//
//   extract → a window of speech (Haiku) → claims, status "waiting"
//   judge   → up to three waiting claims (Opus 5 + web search) → verdicts
//
// The extractor reads AHEAD of the playhead by LEAD_SECONDS. On a recording we
// can see what is about to be said, so the verdict is usually ready by the
// moment the words are spoken — the page then reveals each card on its own
// timestamp. On a live stream there is nothing ahead to read, and the same code
// degrades to checking a few seconds behind, which is the honest best case.

import { useCallback, useEffect, useRef, useState } from 'react'
import {
  extractClaims,
  judgeClaims,
  type Claim,
  type LoadedSource,
  type TimedLine,
} from '../../lib/basanos'
import type { Lang } from '../../lib/types'

/** How far past the playhead the extractor is allowed to read. */
const LEAD_SECONDS = 30
/** Speech per extraction window, and the ceiling on lines sent at once. */
const WINDOW_SECONDS = 45
const MIN_WINDOW_SECONDS = 22
const MAX_WINDOW_LINES = 20
/** Claims judged per Opus call. */
const BATCH = 3
/** Back-off after a rate limit — ours or Anthropic's. */
const COOLDOWN_MS = 20_000
/** Back-off after a failure retrying cannot fix (spent balance, bad key). */
const HALT_MS = 5 * 60_000

export type Phase = 'idle' | 'extracting' | 'searching' | 'structuring'

export interface LiveCheckState {
  claims: Claim[]
  phase: Phase
  stream: string
  error: string | null
  searchFailed: boolean
  /** Fraction of the source the extractor has already read (0-1). */
  progress: number
}

export interface LiveCheck extends LiveCheckState {
  reset: () => void
}

const EMPTY: LiveCheckState = {
  claims: [],
  phase: 'idle',
  stream: '',
  error: null,
  searchFailed: false,
  progress: 0,
}

/**
 * Drive the claim pipeline from a playback clock.
 * `enabled` is the master switch: false when there is no source, no API key, or
 * the citizen has paused the check.
 * `sweep` lifts the playhead horizon entirely: the extractor reads the whole
 * transcript to the end instead of staying near the playhead, which is what
 * fills the dossier of every claim in the video. Playback becomes irrelevant —
 * the citizen can leave it paused and still get the complete record.
 */
export function useLiveCheck(
  source: LoadedSource | null,
  currentTime: number,
  enabled: boolean,
  language: Lang,
  sweep = false,
): LiveCheck {
  const [state, setState] = useState<LiveCheckState>(EMPTY)

  // Mirrors, so the pump reads current values without re-subscribing.
  const claimsRef = useRef<Claim[]>([])
  const cursorRef = useRef(0)
  const extractingRef = useRef(false)
  const judgingRef = useRef(false)
  const cooldownRef = useRef(0)
  const seqRef = useRef(0)
  const abortRef = useRef<AbortController | null>(null)
  const timeRef = useRef(0)

  timeRef.current = currentTime

  const meta = {
    title: source?.title ?? '',
    author: source?.author ?? '',
  }
  const metaRef = useRef(meta)
  metaRef.current = meta

  const setClaims = useCallback((fn: (prev: Claim[]) => Claim[]) => {
    claimsRef.current = fn(claimsRef.current)
    const next = claimsRef.current
    setState((s) => ({ ...s, claims: next }))
  }, [])

  /** Record a failure and decide how long to stay off the wire for it. */
  const noteFailure = useCallback((message: string) => {
    if (message === 'rate-limited') {
      cooldownRef.current = Date.now() + COOLDOWN_MS
      return
    }
    if (message === 'no-credit' || message === 'bad-key') {
      // Retrying every two seconds against a spent balance helps nobody.
      cooldownRef.current = Date.now() + HALT_MS
      setState((s) => ({ ...s, error: message }))
      return
    }
    if (message !== 'refusal') setState((s) => ({ ...s, error: 'api-error' }))
  }, [])

  const reset = useCallback(() => {
    abortRef.current?.abort()
    abortRef.current = null
    claimsRef.current = []
    cursorRef.current = 0
    extractingRef.current = false
    judgingRef.current = false
    cooldownRef.current = 0
    seqRef.current = 0
    setState(EMPTY)
  }, [])

  // A new source is a new session — never carry one video's claims into another.
  useEffect(() => {
    reset()
    return () => {
      abortRef.current?.abort()
      abortRef.current = null
    }
  }, [source, reset])

  // ---- the extractor -------------------------------------------------------

  const pumpExtract = useCallback(async () => {
    const lines = source?.lines
    if (!lines || extractingRef.current) return
    if (Date.now() < cooldownRef.current) return

    const start = cursorRef.current
    if (start >= lines.length) return

    const horizon = sweep ? Infinity : timeRef.current + LEAD_SECONDS
    const window: TimedLine[] = []
    for (let i = start; i < lines.length; i++) {
      const line = lines[i]
      if (line.t > horizon) break
      if (window.length >= MAX_WINDOW_LINES) break
      if (window.length && line.end - window[0].t > WINDOW_SECONDS) break
      window.push(line)
    }
    if (!window.length) return

    // Wait for a window worth spending a call on, unless this is the tail of
    // the source (where a short window is all there will ever be).
    const span = window[window.length - 1].end - window[0].t
    const isTail = start + window.length >= lines.length
    const full = window.length >= MAX_WINDOW_LINES
    if (!isTail && !full && span < MIN_WINDOW_SECONDS) return

    extractingRef.current = true
    cursorRef.current = start + window.length
    setState((s) => ({
      ...s,
      phase: s.phase === 'idle' ? 'extracting' : s.phase,
      progress: cursorRef.current / lines.length,
    }))

    try {
      const raw = await extractClaims(window, metaRef.current, language)
      const fresh: Claim[] = raw.map((c) => ({
        ...c,
        id: `b${++seqRef.current}`,
        // Trust the transcript's clock over the model's arithmetic: snap each
        // claim to the line it was actually lifted from.
        t: nearestLineTime(window, c.t),
        status: 'waiting' as const,
      }))
      if (fresh.length) setClaims((prev) => [...prev, ...fresh])
      setState((s) => ({ ...s, error: null }))
    } catch (err) {
      noteFailure((err as Error)?.message ?? 'api-error')
    } finally {
      extractingRef.current = false
      setState((s) => ({ ...s, phase: s.phase === 'extracting' ? 'idle' : s.phase }))
    }
  }, [source, language, sweep, setClaims, noteFailure])

  // ---- the judge -----------------------------------------------------------

  const pumpJudge = useCallback(async () => {
    if (judgingRef.current) return
    if (Date.now() < cooldownRef.current) return

    const waiting = claimsRef.current
      .filter((c) => c.status === 'waiting')
      .sort((a, b) => a.t - b.t)
      .slice(0, BATCH)
    if (!waiting.length) return

    const ids = new Set(waiting.map((c) => c.id))
    judgingRef.current = true
    const controller = new AbortController()
    abortRef.current = controller

    setClaims((prev) =>
      prev.map((c) => (ids.has(c.id) ? { ...c, status: 'checking' } : c)),
    )
    setState((s) => ({ ...s, phase: 'searching', stream: '' }))

    try {
      const result = await judgeClaims(
        waiting,
        metaRef.current,
        language,
        {
          onPhase: (p) =>
            setState((s) => ({
              ...s,
              phase: p === 'structuring' ? 'structuring' : 'searching',
            })),
          onDelta: (text) => setState((s) => ({ ...s, stream: s.stream + text })),
        },
        controller.signal,
      )

      const byId = new Map(result.verdicts.map((v) => [v.id, v]))
      setClaims((prev) =>
        prev.map((c) => {
          if (!ids.has(c.id)) return c
          const verdict = byId.get(c.id)
          return verdict
            ? { ...c, status: 'judged', verdict }
            : { ...c, status: 'failed' }
        }),
      )
      setState((s) => ({
        ...s,
        error: null,
        searchFailed: s.searchFailed || result.searchFailed,
      }))
    } catch (err) {
      const message = (err as Error)?.message ?? 'api-error'
      // A claim the judge could not reach goes back in the queue unless the
      // model itself declined it — a refusal will not succeed on a retry.
      setClaims((prev) =>
        prev.map((c) =>
          ids.has(c.id)
            ? { ...c, status: message === 'refusal' ? 'failed' : 'waiting' }
            : c,
        ),
      )
      noteFailure(message)
    } finally {
      judgingRef.current = false
      abortRef.current = null
      setState((s) => ({ ...s, phase: 'idle' }))
    }
  }, [language, setClaims, noteFailure])

  // ---- the clock -----------------------------------------------------------

  useEffect(() => {
    if (!enabled || !source) return
    let alive = true
    const tick = () => {
      if (!alive) return
      void pumpExtract()
      void pumpJudge()
    }
    tick()
    const id = setInterval(tick, 2000)
    return () => {
      alive = false
      clearInterval(id)
    }
  }, [enabled, source, pumpExtract, pumpJudge])

  return { ...state, reset }
}

/** Snap a model-reported timestamp to the nearest line start in the window. */
function nearestLineTime(window: TimedLine[], t: number): number {
  let best = window[0].t
  let bestGap = Infinity
  for (const line of window) {
    const gap = Math.abs(line.t - t)
    if (gap < bestGap) {
      bestGap = gap
      best = line.t
    }
  }
  return best
}
