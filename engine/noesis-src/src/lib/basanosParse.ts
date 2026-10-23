// Turning whatever the citizen has into timed lines.
//
// YouTube hands us captions through the server. Everything else arrives as a
// file or a paste: SubRip (.srt), WebVTT (.vtt), or plain prose. The first two
// carry real timings; prose does not, and rather than pretend otherwise we lay
// it out at an average speaking rate and mark the source `timed: false` so the
// page can say the clock is an estimate.

import type { TimedLine } from './basanos'

/** Accept a bare id or any YouTube URL shape; return the 11-char video id. */
export function parseVideoId(input: string): string | null {
  const raw = (input ?? '').trim()
  if (!raw) return null
  if (/^[\w-]{11}$/.test(raw)) return raw

  let url: URL
  try {
    url = new URL(raw.startsWith('http') ? raw : `https://${raw}`)
  } catch {
    return null
  }
  const host = url.hostname.replace(/^www\.|^m\./, '')
  const ok = (id: string | null | undefined) =>
    id && /^[\w-]{11}$/.test(id) ? id : null

  if (host === 'youtu.be') return ok(url.pathname.slice(1).split('/')[0])
  if (!/(^|\.)youtube(-nocookie)?\.com$/.test(host)) return null

  const v = url.searchParams.get('v')
  if (v) return ok(v)
  const m = url.pathname.match(/^\/(?:embed|live|shorts|v)\/([\w-]{11})/)
  return m ? m[1] : null
}

/** hh:mm:ss,mmm / mm:ss.mmm / ss → seconds. */
function toSeconds(stamp: string): number {
  const parts = stamp.trim().replace(',', '.').split(':').map(Number)
  if (parts.some(Number.isNaN)) return 0
  return parts.reduce((acc, part) => acc * 60 + part, 0)
}

const stripTags = (s: string) =>
  s
    .replace(/<[^>]*>/g, '')
    .replace(/\{[^}]*\}/g, '')
    .replace(/\s+/g, ' ')
    .trim()

const CUE = /(\d{1,2}:)?\d{1,2}:\d{2}[.,]\d{1,3}\s*-->\s*(\d{1,2}:)?\d{1,2}:\d{2}[.,]\d{1,3}/

/**
 * SubRip and WebVTT share a cue shape, so one parser reads both. Cue settings
 * after the end stamp (VTT's `align:start position:10%`) are ignored.
 */
export function parseCues(text: string): TimedLine[] {
  const lines: TimedLine[] = []
  const blocks = text.replace(/\r\n?/g, '\n').split(/\n{2,}/)

  for (const block of blocks) {
    const rows = block.split('\n')
    const cueAt = rows.findIndex((r) => CUE.test(r))
    if (cueAt < 0) continue
    const stamps = rows[cueAt].split('-->')
    const t = toSeconds(stamps[0])
    const end = toSeconds((stamps[1] ?? '').trim().split(/\s+/)[0] ?? '')
    const body = stripTags(rows.slice(cueAt + 1).join(' '))
    if (!body) continue
    lines.push({ t, end: end > t ? end : t + 3, text: body })
  }
  return lines
}

const INLINE_STAMP = /^\s*[[(]?((?:\d{1,2}:)?\d{1,2}:\d{2})[\])]?\s*[-–—:]?\s*/

/**
 * Plain prose. If the paste carries leading timestamps (`[12:04] …`, a common
 * shape for published transcripts) those are honoured; otherwise lines are laid
 * out at ~2.6 words per second — an average public-speaking rate.
 */
export function parseProse(text: string): { lines: TimedLine[]; timed: boolean } {
  const raw = text
    .replace(/\r\n?/g, '\n')
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean)
  if (!raw.length) return { lines: [], timed: false }

  const stamped = raw.filter((l) => INLINE_STAMP.test(l)).length
  const timed = stamped >= Math.max(2, raw.length * 0.5)

  if (timed) {
    const lines: TimedLine[] = []
    for (const line of raw) {
      const m = line.match(INLINE_STAMP)
      if (!m) {
        // Continuation of the previous cue.
        const last = lines[lines.length - 1]
        if (last) lines[lines.length - 1] = { ...last, text: `${last.text} ${line}` }
        continue
      }
      const body = line.slice(m[0].length).trim()
      if (body) lines.push({ t: toSeconds(m[1]), end: 0, text: body })
    }
    return {
      lines: lines.map((l, i) => ({
        ...l,
        end: lines[i + 1]?.t ?? l.t + 6,
      })),
      timed: true,
    }
  }

  // No timings: split long paragraphs into sentence-sized lines and pace them.
  const WORDS_PER_SEC = 2.6
  const chunks = raw.flatMap((paragraph) =>
    paragraph.length <= 240
      ? [paragraph]
      : (paragraph.match(/[^.!;·?]+[.!;·?]*\s*/g) ?? [paragraph])
          .map((s) => s.trim())
          .filter(Boolean),
  )

  let clock = 0
  const lines = chunks.map((text) => {
    const span = Math.max(2, text.split(/\s+/).length / WORDS_PER_SEC)
    const line: TimedLine = { t: clock, end: clock + span, text }
    clock += span
    return line
  })
  return { lines, timed: false }
}

/** Route a dropped or pasted transcript to the right parser. */
export function parseTranscriptText(
  text: string,
  filename = '',
): { lines: TimedLine[]; timed: boolean } {
  const looksLikeCues = CUE.test(text) || /^WEBVTT/m.test(text) || /\.(srt|vtt)$/i.test(filename)
  if (looksLikeCues) {
    const lines = parseCues(text)
    if (lines.length) return { lines, timed: true }
  }
  return parseProse(text)
}

/** A direct media URL we can hand to a <video> element. */
export function isPlayableUrl(input: string): boolean {
  try {
    const url = new URL(input.trim())
    if (url.protocol !== 'https:' && url.protocol !== 'http:') return false
    return /\.(mp4|webm|ogg|ogv|m4v|mov|m3u8|mp3|m4a|wav)$/i.test(url.pathname)
  } catch {
    return false
  }
}
