// ΒΑΣΑΝΟΣ — types and client for the Touchstone.
//
// The touchstone was the black stone Athenians rubbed gold against to see
// whether it was real. This section does the same to public speech: while a
// video plays, the checkable assertions in it are lifted out, searched against
// the open web, and returned with a verdict, its evidence and its sources.
//
// A source is anything that yields TIMED TEXT plus, optionally, something to
// play: a YouTube link (captions fetched server-side), a video file or direct
// URL paired with its subtitles, or a bare transcript read on its own clock.
// Everything downstream of `TimedLine[]` is source-agnostic on purpose.

import { streamV } from './vApi'

/** One line of speech with the second it was said. */
export interface TimedLine {
  t: number
  end: number
  text: string
}

export interface Transcript {
  videoId: string
  title: string
  author: string
  durationSec: number
  isLive: boolean
  track: { lang: string; name: string; auto: boolean }
  lines: TimedLine[]
}

export type SourceKind = 'youtube' | 'file' | 'url' | 'transcript'

/** A loaded source: its timed text, and how (or whether) it can be played. */
export interface LoadedSource {
  kind: SourceKind
  title: string
  author: string
  lines: TimedLine[]
  durationSec: number
  /** YouTube video id, for the iframe player. */
  videoId?: string
  /** Object URL or direct URL, for the HTML5 player. */
  mediaUrl?: string
  /** True when the timings came from the caption track rather than a guess. */
  timed: boolean
  /** Auto-generated captions mishear numbers; the UI says so. */
  autoCaptions?: boolean
}

export type VerdictKind =
  | 'true'
  | 'mostly_true'
  | 'mixed'
  | 'misleading'
  | 'false'
  | 'unverifiable'

export interface VerdictSource {
  title: string
  url: string
}

export interface Verdict {
  id: string
  verdict: VerdictKind
  summary: string
  evidence: string[]
  confidence: number
  sources: VerdictSource[]
}

export type ClaimStatus = 'waiting' | 'checking' | 'judged' | 'failed'

export interface Claim {
  id: string
  t: number
  quote: string
  claim: string
  kind: string
  weight: number
  status: ClaimStatus
  verdict?: Verdict
}

export interface RawClaim {
  t: number
  quote: string
  claim: string
  kind: string
  weight: number
}

// ---- presentation ----------------------------------------------------------

/** Tailwind tokens per verdict. Only misleading/false carry the warm accent —
 *  a rail that shouts at everything tells the citizen nothing. */
export const VERDICT_STYLE: Record<
  VerdictKind,
  { border: string; text: string; dot: string }
> = {
  true: { border: 'border-positive/50', text: 'text-positive', dot: 'bg-positive' },
  mostly_true: { border: 'border-positive/30', text: 'text-positive', dot: 'bg-positive' },
  mixed: { border: 'border-gold/40', text: 'text-gold', dot: 'bg-gold' },
  misleading: { border: 'border-copper/50', text: 'text-copper', dot: 'bg-copper' },
  false: { border: 'border-negative/50', text: 'text-negative', dot: 'bg-negative' },
  unverifiable: { border: 'border-line', text: 'text-muted', dot: 'bg-muted' },
}

export const VERDICT_ORDER: VerdictKind[] = [
  'false',
  'misleading',
  'mixed',
  'mostly_true',
  'true',
  'unverifiable',
]

/** Seconds → m:ss (or h:mm:ss past the hour). */
export function timecode(seconds: number): string {
  const total = Math.max(0, Math.round(seconds || 0))
  const h = Math.floor(total / 3600)
  const m = Math.floor((total % 3600) / 60)
  const s = total % 60
  const pad = (n: number) => String(n).padStart(2, '0')
  return h ? `${h}:${pad(m)}:${pad(s)}` : `${m}:${pad(s)}`
}

// ---- API -------------------------------------------------------------------

export type TranscriptErrorCode =
  | 'bad-url'
  | 'not-found'
  | 'unplayable'
  | 'no-captions'
  | 'empty-captions'
  | 'blocked'
  | 'fetch-failed'
  | 'rate-limited'

export class BasanosError extends Error {
  code: TranscriptErrorCode
  constructor(code: TranscriptErrorCode) {
    super(code)
    this.code = code
  }
}

/** Captions for a YouTube video, fetched by the intelligence server. */
export async function fetchYouTubeTranscript(
  url: string,
  hl: 'el' | 'en',
): Promise<Transcript> {
  const r = await fetch(
    `/api/basanos/transcript?url=${encodeURIComponent(url)}&hl=${hl}`,
  )
  if (!r.ok) {
    const body = (await r.json().catch(() => null)) as { error?: string } | null
    throw new BasanosError(
      (body?.error as TranscriptErrorCode) ??
        (r.status === 429 ? 'rate-limited' : 'fetch-failed'),
    )
  }
  const body = (await r.json()) as { transcript: Transcript }
  return body.transcript
}

/** Lift the checkable assertions out of one window of speech. */
export async function extractClaims(
  lines: TimedLine[],
  meta: { title: string; author: string },
  language: 'el' | 'en',
  signal?: AbortSignal,
): Promise<RawClaim[]> {
  const r = await fetch('/api/basanos/claims', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      lines: lines.map((l) => ({ t: l.t, text: l.text })),
      title: meta.title,
      author: meta.author,
      language,
    }),
    signal,
  })
  if (!r.ok) {
    const body = (await r.json().catch(() => null)) as { error?: string } | null
    throw new Error(body?.error ?? (r.status === 429 ? 'rate-limited' : 'api-error'))
  }
  const body = (await r.json()) as { claims?: RawClaim[] }
  return body.claims ?? []
}

export interface VerdictResult {
  verdicts: Verdict[]
  searched: VerdictSource[]
  searchFailed: boolean
}

/** Judge a batch of claims, streaming the reasoning as it is written. */
export async function judgeClaims(
  claims: Claim[],
  meta: { title: string; author: string },
  language: 'el' | 'en',
  handlers: { onPhase?: (p: string) => void; onDelta?: (t: string) => void },
  signal?: AbortSignal,
): Promise<VerdictResult> {
  let result: VerdictResult = { verdicts: [], searched: [], searchFailed: false }
  let failure: string | null = null

  await streamV(
    '/api/basanos/verdict',
    {
      claims: claims.map((c) => ({ id: c.id, t: c.t, quote: c.quote, claim: c.claim })),
      title: meta.title,
      author: meta.author,
      language,
    },
    {
      onPhase: handlers.onPhase,
      onDelta: handlers.onDelta,
      onFinal: (data) => {
        result = data as VerdictResult
      },
      onError: (message) => {
        failure = message
      },
    },
    signal,
  )

  if (failure) throw new Error(failure)
  return result
}
