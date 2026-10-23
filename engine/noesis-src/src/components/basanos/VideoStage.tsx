// The stage for everything that is not YouTube.
//
// A local file (played from an object URL, never uploaded anywhere) or a direct
// media URL, in a plain <video> element. Same contract as the YouTube stage: it
// reports the playhead and accepts seeks, so the rail behaves identically
// whatever the citizen brought.

import { useEffect, useImperativeHandle, useRef, type Ref } from 'react'
import type { StageHandle } from './YouTubeStage'

export function VideoStage({
  src,
  onTime,
  onDuration,
  handle,
}: {
  src: string
  onTime: (seconds: number) => void
  onDuration?: (seconds: number) => void
  handle?: Ref<StageHandle>
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const onTimeRef = useRef(onTime)
  onTimeRef.current = onTime

  useImperativeHandle(handle, () => ({
    seek: (seconds: number) => {
      const video = videoRef.current
      if (video) video.currentTime = Math.max(0, seconds)
    },
  }))

  // timeupdate fires only ~4x/second and stops when paused; poll instead so the
  // reveal clock keeps the same cadence as the YouTube stage.
  useEffect(() => {
    const id = setInterval(() => {
      const t = videoRef.current?.currentTime
      if (typeof t === 'number' && Number.isFinite(t)) onTimeRef.current(t)
    }, 250)
    return () => clearInterval(id)
  }, [])

  return (
    <video
      ref={videoRef}
      src={src}
      controls
      playsInline
      preload="metadata"
      onLoadedMetadata={(e) => onDuration?.(e.currentTarget.duration || 0)}
      className="aspect-video w-full rounded-md border border-line bg-black"
    />
  )
}
