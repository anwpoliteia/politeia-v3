// The YouTube stage. Plays the video in YouTube's own iframe player and reports
// the playhead back, four times a second, so the rail can reveal each verdict on
// the second the words are spoken.
//
// The page cannot hear this video: audio inside a cross-origin iframe is not
// capturable. That is why ΒΑΣΑΝΟΣ reads captions server-side instead of
// transcribing — the iframe supplies the clock, the caption track supplies the
// words.

import { useEffect, useImperativeHandle, useRef, type Ref } from 'react'

export interface StageHandle {
  seek: (seconds: number) => void
}

interface YTPlayer {
  getCurrentTime: () => number
  getDuration: () => number
  seekTo: (seconds: number, allowSeekAhead: boolean) => void
  destroy: () => void
}

interface YTApi {
  Player: new (
    el: HTMLElement,
    options: {
      videoId: string
      playerVars?: Record<string, string | number>
      events?: { onReady?: () => void }
    },
  ) => YTPlayer
}

declare global {
  interface Window {
    YT?: YTApi & { loading?: number }
    onYouTubeIframeAPIReady?: () => void
  }
}

let apiPromise: Promise<YTApi> | null = null

/** Load the IFrame API once per document, whatever mounts first. */
function loadYouTubeApi(): Promise<YTApi> {
  if (apiPromise) return apiPromise
  apiPromise = new Promise<YTApi>((resolve, reject) => {
    if (window.YT?.Player) return resolve(window.YT)
    const previous = window.onYouTubeIframeAPIReady
    window.onYouTubeIframeAPIReady = () => {
      previous?.()
      if (window.YT?.Player) resolve(window.YT)
      else reject(new Error('yt-api'))
    }
    const script = document.createElement('script')
    script.src = 'https://www.youtube.com/iframe_api'
    script.async = true
    script.onerror = () => reject(new Error('yt-api'))
    document.head.appendChild(script)
  })
  return apiPromise
}

export function YouTubeStage({
  videoId,
  onTime,
  handle,
}: {
  videoId: string
  onTime: (seconds: number) => void
  handle?: Ref<StageHandle>
}) {
  const mountRef = useRef<HTMLDivElement | null>(null)
  const playerRef = useRef<YTPlayer | null>(null)
  const onTimeRef = useRef(onTime)
  onTimeRef.current = onTime

  useImperativeHandle(handle, () => ({
    seek: (seconds: number) => playerRef.current?.seekTo(Math.max(0, seconds), true),
  }))

  useEffect(() => {
    let cancelled = false
    let poll: ReturnType<typeof setInterval> | null = null

    void loadYouTubeApi()
      .then((YT) => {
        if (cancelled || !mountRef.current) return
        playerRef.current = new YT.Player(mountRef.current, {
          videoId,
          playerVars: { rel: 0, modestbranding: 1, playsinline: 1 },
        })
        poll = setInterval(() => {
          const t = playerRef.current?.getCurrentTime?.()
          if (typeof t === 'number' && Number.isFinite(t)) onTimeRef.current(t)
        }, 250)
      })
      .catch(() => {
        /* the page shows the source card without a player */
      })

    return () => {
      cancelled = true
      if (poll) clearInterval(poll)
      try {
        playerRef.current?.destroy()
      } catch {
        /* already gone */
      }
      playerRef.current = null
    }
  }, [videoId])

  return (
    <div className="aspect-video w-full overflow-hidden rounded-md border border-line bg-black">
      {/* The API replaces this node with the player iframe. */}
      <div ref={mountRef} className="h-full w-full" />
    </div>
  )
}
