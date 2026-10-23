// YouTube transcript retrieval for ΒΑΣΑΝΟΣ (the Touchstone).
//
// Runs SERVER-SIDE only. The browser cannot read a video's captions itself:
// youtube.com sends no CORS headers, and the audio inside the player iframe is
// not capturable by the embedding page. So this module fetches the caption
// track the way a browser would, and hands the app plain timestamped text.
//
// Getting a caption track is not one request but a search for a client YouTube
// will still serve. Timedtext URLs minted for the desktop web player are now
// proof-of-origin gated: they answer 200 with an EMPTY body, which looks like a
// video with no captions unless you check. So we collect candidate player
// responses from several InnerTube clients, and accept the first whose track
// actually returns text. Measured order (2026-09): the iOS client serves
// timedtext, the desktop watch page does not.
//
// Every failure is reported with a distinct code. A video with no captions and
// a video YouTube refused to serve are different facts, and the citizen is told
// which one happened rather than shown an empty rail.

const UA_WEB =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36'

// Public InnerTube key. Not a secret — it ships in every youtube.com page.
const INNERTUBE_KEY = process.env.YOUTUBE_INNERTUBE_KEY || ''   // YouTube's public web-player key, set in .env (see .env.example)

// Client identities InnerTube accepts, in the order we try them. Each is a real
// published YouTube client; we are asking for the same captions its own player
// would receive.
const CLIENTS = [
  {
    id: 'IOS',
    ua: 'com.google.ios.youtube/20.03.02 (iPhone16,2; U; CPU iOS 18_2_1 like Mac OS X;)',
    ctx: {
      clientName: 'IOS',
      clientVersion: '20.03.02',
      deviceMake: 'Apple',
      deviceModel: 'iPhone16,2',
      osName: 'iPhone',
      osVersion: '18.2.1.22C161',
    },
  },
  {
    id: 'ANDROID',
    ua: 'com.google.android.youtube/19.44.38 (Linux; U; Android 14) gzip',
    ctx: {
      clientName: 'ANDROID',
      clientVersion: '19.44.38',
      androidSdkVersion: 34,
      osName: 'Android',
      osVersion: '14',
    },
  },
  {
    id: 'MWEB',
    ua: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1',
    ctx: { clientName: 'MWEB', clientVersion: '2.20240726.01.00' },
  },
]

const TIMEOUT_MS = 12_000

export class TranscriptError extends Error {
  constructor(code) {
    super(code)
    this.code = code
  }
}

/** Accept a bare id or any YouTube URL shape; return the 11-char video id. */
export function parseVideoId(input) {
  const raw = String(input ?? '').trim()
  if (!raw) return null
  if (/^[\w-]{11}$/.test(raw)) return raw

  let url
  try {
    url = new URL(raw.startsWith('http') ? raw : `https://${raw}`)
  } catch {
    return null
  }
  const host = url.hostname.replace(/^www\.|^m\./, '')
  const ok = (id) => (/^[\w-]{11}$/.test(id ?? '') ? id : null)

  if (host === 'youtu.be') return ok(url.pathname.slice(1).split('/')[0])
  if (!/(^|\.)youtube(-nocookie)?\.com$/.test(host)) return null

  const v = url.searchParams.get('v')
  if (v) return ok(v)
  // /embed/ID, /live/ID, /shorts/ID, /v/ID
  const m = url.pathname.match(/^\/(?:embed|live|shorts|v)\/([\w-]{11})/)
  return m ? m[1] : null
}

function fetchWithTimeout(url, init = {}) {
  return fetch(url, { ...init, signal: AbortSignal.timeout(TIMEOUT_MS) })
}

/**
 * Pull the first balanced JSON object that follows `marker`.
 * Regex cannot do this safely — player responses contain braces inside strings —
 * so scan with a depth counter that understands string escapes.
 */
function sliceJson(text, marker) {
  const at = text.indexOf(marker)
  if (at < 0) return null
  const start = text.indexOf('{', at)
  if (start < 0) return null
  let depth = 0
  let inString = false
  let escaped = false
  for (let i = start; i < text.length; i++) {
    const c = text[i]
    if (inString) {
      if (escaped) escaped = false
      else if (c === '\\') escaped = true
      else if (c === '"') inString = false
      continue
    }
    if (c === '"') inString = true
    else if (c === '{') depth++
    else if (c === '}') {
      depth--
      if (depth === 0) {
        try {
          return JSON.parse(text.slice(start, i + 1))
        } catch {
          return null
        }
      }
    }
  }
  return null
}

async function playerFromWatchPage(videoId, hl) {
  const r = await fetchWithTimeout(
    `https://www.youtube.com/watch?v=${videoId}&hl=${hl}&bpctr=9999999999&has_verified=1`,
    {
      headers: {
        'user-agent': UA_WEB,
        'accept-language': `${hl},en;q=0.7`,
        cookie: 'CONSENT=YES+1', // skips the EU consent interstitial
      },
    },
  )
  if (!r.ok) return null
  const html = await r.text()
  return sliceJson(html, 'ytInitialPlayerResponse')
}

async function playerFromInnerTube(videoId, hl, client) {
  const r = await fetchWithTimeout(
    `https://www.youtube.com/youtubei/v1/player?key=${INNERTUBE_KEY}&prettyPrint=false`,
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'user-agent': client.ua,
        'accept-language': `${hl},en;q=0.7`,
      },
      body: JSON.stringify({
        videoId,
        context: { client: { ...client.ctx, hl, gl: 'GR' } },
        contentCheckOk: true,
        racyCheckOk: true,
      }),
    },
  )
  if (!r.ok) return null
  const player = await r.json().catch(() => null)
  return player ? { ...player, _ua: client.ua } : null
}

/**
 * Every player response we can obtain, best first. Yielded lazily so a video the
 * first client serves costs exactly one request.
 */
async function* playerResponses(videoId, hl) {
  for (const client of CLIENTS) {
    try {
      const player = await playerFromInnerTube(videoId, hl, client)
      if (player?.videoDetails || player?.captions) yield player
    } catch {
      // try the next client
    }
  }
  try {
    const player = await playerFromWatchPage(videoId, hl)
    if (player?.videoDetails || player?.captions) yield { ...player, _ua: UA_WEB }
  } catch {
    // exhausted
  }
}

/**
 * Choose a caption track: the asked-for language, else Greek, else English,
 * else whatever exists. Human-written captions beat auto-generated ones for the
 * same language — ASR mishears exactly the numbers a fact-check turns on.
 */
function pickTrack(tracks, preferred) {
  const score = (t) => {
    const code = (t.languageCode ?? '').toLowerCase()
    const manual = t.kind !== 'asr'
    if (code === preferred) return manual ? 0 : 1
    if (code.startsWith(preferred)) return manual ? 2 : 3
    if (code === 'el') return manual ? 4 : 5
    if (code.startsWith('en')) return manual ? 6 : 7
    return manual ? 8 : 9
  }
  return [...tracks].sort((a, b) => score(a) - score(b))[0] ?? null
}

const ENTITIES = {
  amp: '&',
  lt: '<',
  gt: '>',
  quot: '"',
  apos: String.fromCharCode(39),
  nbsp: ' ',
}

function decodeEntities(s) {
  return String(s)
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&(amp|lt|gt|quot|apos|nbsp);/g, (_, n) => ENTITIES[n])
}

const clean = (s) => decodeEntities(s).replace(/\s+/g, ' ').trim()

function fromJson3(json) {
  const out = []
  for (const ev of json?.events ?? []) {
    if (!Array.isArray(ev.segs)) continue
    const text = clean(ev.segs.map((s) => s.utf8 ?? '').join(''))
    if (!text) continue
    out.push({
      start: Math.round((ev.tStartMs ?? 0) / 100) / 10,
      dur: Math.round((ev.dDurationMs ?? 0) / 100) / 10,
      text,
    })
  }
  return out
}

function fromXml(xml) {
  const out = []
  const re = /<text\s+start="([\d.]+)"(?:\s+dur="([\d.]+)")?[^>]*>([\s\S]*?)<\/text>/g
  let m
  while ((m = re.exec(xml))) {
    const text = clean(m[3])
    if (text) out.push({ start: Number(m[1]), dur: Number(m[2] ?? 0), text })
  }
  return out
}

/**
 * Fetch one caption track. Must be requested with the same client identity that
 * minted the URL, or YouTube answers 200 with an empty body.
 */
async function fetchTrack(baseUrl, ua) {
  const headers = { 'user-agent': ua ?? UA_WEB }
  const json = new URL(baseUrl)
  json.searchParams.set('fmt', 'json3')
  try {
    const r = await fetchWithTimeout(json.toString(), { headers })
    if (r.ok) {
      const body = await r.text()
      if (body.trim()) {
        const segments = fromJson3(JSON.parse(body))
        if (segments.length) return segments
      }
    }
  } catch {
    // fall through to the XML form
  }
  try {
    const plain = new URL(baseUrl)
    plain.searchParams.delete('fmt')
    const r = await fetchWithTimeout(plain.toString(), { headers })
    if (!r.ok) return []
    return fromXml(await r.text())
  } catch {
    return []
  }
}

/**
 * Merge caption cues into readable lines. Auto-captions arrive as overlapping
 * two-word fragments, and a claim never fits in one. Group them into ~12s /
 * ~240ch lines so the extractor sees whole sentences, keeping each line's real
 * start time so a verdict can still point at the second it was said.
 */
function toLines(segments, { maxSeconds = 12, maxChars = 240 } = {}) {
  const lines = []
  let open = null
  for (const seg of segments) {
    if (!open) {
      open = { t: seg.start, end: seg.start + seg.dur, text: seg.text }
      continue
    }
    const wouldRun = seg.start + seg.dur - open.t > maxSeconds
    const wouldOverflow = open.text.length + seg.text.length + 1 > maxChars
    const sentenceEnded = /[.!;·?][")»]?$/.test(open.text)
    if (wouldRun || wouldOverflow || (sentenceEnded && open.text.length > 80)) {
      lines.push(open)
      open = { t: seg.start, end: seg.start + seg.dur, text: seg.text }
    } else {
      open = { ...open, end: seg.start + seg.dur, text: `${open.text} ${seg.text}` }
    }
  }
  if (open) lines.push(open)
  return lines
}

/**
 * Full transcript for a video.
 * Throws TranscriptError with one of: not-found, unplayable, no-captions,
 * empty-captions, blocked.
 */
export async function fetchTranscript(videoId, { hl = 'el' } = {}) {
  let sawPlayer = false
  let sawTracks = false
  let blockedStatus = null

  for await (const player of playerResponses(videoId, hl)) {
    sawPlayer = true
    const status = player.playabilityStatus?.status
    if (status && status !== 'OK' && status !== 'LIVE_STREAM_OFFLINE') {
      blockedStatus = status
      continue // another client may still be allowed to play it
    }

    const tracks = player.captions?.playerCaptionsTracklistRenderer?.captionTracks ?? []
    if (!tracks.length) continue
    sawTracks = true

    const track = pickTrack(tracks, hl)
    if (!track?.baseUrl) continue

    const segments = await fetchTrack(track.baseUrl, player._ua)
    if (!segments.length) continue // this client's URLs are gated; try the next

    const details = player.videoDetails ?? {}
    return {
      videoId,
      title: details.title ?? '',
      author: details.author ?? '',
      durationSec: Number(details.lengthSeconds ?? 0) || 0,
      isLive: Boolean(details.isLiveContent || details.isLive),
      track: {
        lang: track.languageCode ?? '',
        name: track.name?.simpleText ?? track.name?.runs?.[0]?.text ?? '',
        auto: track.kind === 'asr',
      },
      lines: toLines(segments),
    }
  }

  if (!sawPlayer) throw new TranscriptError('blocked')
  if (sawTracks) throw new TranscriptError('empty-captions')
  if (blockedStatus) {
    throw new TranscriptError(blockedStatus === 'ERROR' ? 'not-found' : 'unplayable')
  }
  throw new TranscriptError('no-captions')
}
