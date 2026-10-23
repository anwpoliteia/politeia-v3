// Choosing what to put on the stone.
//
// Three ways in, because "any video" means more than YouTube:
//   · a YouTube link      — captions fetched server-side, nothing to upload
//   · a video or audio    — played from your own machine or a direct URL,
//                           read from the subtitle file you bring with it
//   · a transcript        — pasted or dropped, checked on its own clock
//
// There is no speech-to-text anywhere in this stack, and the page says so
// rather than implying it can hear a file it cannot. What it needs is words
// with times against them; where those come from is open.

import { useRef, useState } from 'react'
import { useT } from '../../i18n'
import { fetchYouTubeTranscript, type LoadedSource } from '../../lib/basanos'
import {
  isPlayableUrl,
  parseTranscriptText,
  parseVideoId,
} from '../../lib/basanosParse'
import { cn } from '../../lib/cn'

type Tab = 'youtube' | 'media' | 'transcript'

const inputClass =
  'w-full rounded-md border border-line bg-elev px-3 py-2.5 text-sm text-text placeholder:text-muted focus:border-gold/50'

const fileClass =
  'block w-full text-sm text-muted file:mr-3 file:rounded-md file:border file:border-line file:bg-elev file:px-3 file:py-2 file:text-sm file:text-text hover:file:border-gold/50'

export function SourcePicker({ onLoad }: { onLoad: (source: LoadedSource) => void }) {
  const { t, lang } = useT()
  const [tab, setTab] = useState<Tab>('youtube')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [ytUrl, setYtUrl] = useState('')
  const [mediaUrl, setMediaUrl] = useState('')
  const [mediaFile, setMediaFile] = useState<File | null>(null)
  const [subsText, setSubsText] = useState('')
  const [subsName, setSubsName] = useState('')
  const [prose, setProse] = useState('')
  const proseFileRef = useRef<HTMLInputElement | null>(null)

  const tabs: { id: Tab; label: string }[] = [
    { id: 'youtube', label: t.basanos.tabYouTube },
    { id: 'media', label: t.basanos.tabMedia },
    { id: 'transcript', label: t.basanos.tabTranscript },
  ]

  const readFile = async (file: File, set: (text: string, name: string) => void) => {
    try {
      set(await file.text(), file.name)
      setError(null)
    } catch {
      setError(t.basanos.errFileRead)
    }
  }

  const loadYouTube = async () => {
    if (!parseVideoId(ytUrl)) return setError(t.basanos.errBadUrl)
    setBusy(true)
    setError(null)
    try {
      const tr = await fetchYouTubeTranscript(ytUrl.trim(), lang)
      onLoad({
        kind: 'youtube',
        title: tr.title,
        author: tr.author,
        lines: tr.lines,
        durationSec: tr.durationSec,
        videoId: tr.videoId,
        timed: true,
        autoCaptions: tr.track.auto,
      })
    } catch (err) {
      const code = (err as { code?: string })?.code ?? 'fetch-failed'
      const messages: Record<string, string> = t.basanos.transcriptErrors
      setError(messages[code] ?? messages['fetch-failed'])
    } finally {
      setBusy(false)
    }
  }

  const loadMedia = () => {
    if (!subsText.trim()) return setError(t.basanos.errNeedSubs)
    const url = mediaFile ? URL.createObjectURL(mediaFile) : mediaUrl.trim()
    if (!mediaFile && !isPlayableUrl(url)) return setError(t.basanos.errBadMediaUrl)

    const { lines, timed } = parseTranscriptText(subsText, subsName)
    if (!lines.length) return setError(t.basanos.errNoLines)

    setError(null)
    onLoad({
      kind: mediaFile ? 'file' : 'url',
      title: mediaFile?.name ?? url.split('/').pop() ?? '',
      author: '',
      lines,
      durationSec: lines[lines.length - 1].end,
      mediaUrl: url,
      timed,
    })
  }

  const loadProse = () => {
    const { lines, timed } = parseTranscriptText(prose)
    if (!lines.length) return setError(t.basanos.errNoLines)
    setError(null)
    onLoad({
      kind: 'transcript',
      title: t.basanos.pastedTitle,
      author: '',
      lines,
      durationSec: lines[lines.length - 1].end,
      timed,
    })
  }

  return (
    <div className="rounded-md border border-line bg-elev p-5">
      <div className="mb-5 flex flex-wrap gap-1 border-b border-line">
        {tabs.map((entry) => (
          <button
            key={entry.id}
            type="button"
            onClick={() => {
              setTab(entry.id)
              setError(null)
            }}
            className={cn(
              '-mb-px border-b-2 px-3 py-2 text-sm transition-colors',
              tab === entry.id
                ? 'border-gold text-gold'
                : 'border-transparent text-muted hover:text-text',
            )}
          >
            {entry.label}
          </button>
        ))}
      </div>

      {tab === 'youtube' && (
        <div className="space-y-3">
          <input
            type="url"
            value={ytUrl}
            onChange={(e) => setYtUrl(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && void loadYouTube()}
            placeholder={t.basanos.youtubePlaceholder}
            className={inputClass}
          />
          <p className="text-xs leading-relaxed text-muted">{t.basanos.youtubeHint}</p>
          <button
            type="button"
            disabled={busy || !ytUrl.trim()}
            onClick={() => void loadYouTube()}
            className="min-h-11 rounded-md bg-gold px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-90 disabled:opacity-50"
          >
            {busy ? t.basanos.fetching : t.basanos.load}
          </button>
        </div>
      )}

      {tab === 'media' && (
        <div className="space-y-4">
          <div>
            <label className="mb-1.5 block font-mono text-[11px] uppercase tracking-wider text-muted">
              {t.basanos.mediaFile}
            </label>
            <input
              type="file"
              accept="video/*,audio/*"
              onChange={(e) => setMediaFile(e.target.files?.[0] ?? null)}
              className={fileClass}
            />
            <p className="mt-1.5 text-xs text-muted">{t.basanos.mediaLocalNote}</p>
          </div>

          <div>
            <label className="mb-1.5 block font-mono text-[11px] uppercase tracking-wider text-muted">
              {t.basanos.mediaUrl}
            </label>
            <input
              type="url"
              value={mediaUrl}
              onChange={(e) => setMediaUrl(e.target.value)}
              placeholder="https://…/speech.mp4"
              disabled={Boolean(mediaFile)}
              className={cn(inputClass, mediaFile && 'opacity-50')}
            />
          </div>

          <div>
            <label className="mb-1.5 block font-mono text-[11px] uppercase tracking-wider text-muted">
              {t.basanos.subsFile}
            </label>
            <input
              type="file"
              accept=".srt,.vtt,.txt,text/plain"
              onChange={(e) => {
                const file = e.target.files?.[0]
                if (file) void readFile(file, (text, name) => {
                  setSubsText(text)
                  setSubsName(name)
                })
              }}
              className={fileClass}
            />
            <p className="mt-1.5 text-xs leading-relaxed text-muted">
              {t.basanos.subsHint}
            </p>
            {subsName && (
              <p className="mt-1 font-mono text-[11px] text-gold">{subsName}</p>
            )}
          </div>

          <button
            type="button"
            disabled={!subsText.trim() || (!mediaFile && !mediaUrl.trim())}
            onClick={loadMedia}
            className="min-h-11 rounded-md bg-gold px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-90 disabled:opacity-50"
          >
            {t.basanos.load}
          </button>
        </div>
      )}

      {tab === 'transcript' && (
        <div className="space-y-3">
          <textarea
            value={prose}
            onChange={(e) => setProse(e.target.value)}
            rows={7}
            placeholder={t.basanos.prosePlaceholder}
            className="w-full rounded-md border border-line bg-bg p-3 text-sm leading-relaxed text-text placeholder:text-muted focus:border-gold/50"
          />
          <input
            ref={proseFileRef}
            type="file"
            accept=".srt,.vtt,.txt,text/plain"
            onChange={(e) => {
              const file = e.target.files?.[0]
              if (file) void readFile(file, (text) => setProse(text))
            }}
            className={fileClass}
          />
          <p className="text-xs leading-relaxed text-muted">{t.basanos.proseHint}</p>
          <button
            type="button"
            disabled={prose.trim().length < 40}
            onClick={loadProse}
            className="min-h-11 rounded-md bg-gold px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-90 disabled:opacity-50"
          >
            {t.basanos.load}
          </button>
        </div>
      )}

      {error && <p className="mt-4 text-sm text-negative">{error}</p>}
    </div>
  )
}
