// A clock for sources with nothing to play.
//
// A pasted transcript has no player, but the rail is built around a playhead —
// so we give it one. The clock walks the transcript at real speaking speed
// (1x) or faster, and the citizen can start, stop and scrub it exactly as they
// would a video. Nothing is simulated except the passage of time.

import { useCallback, useEffect, useRef, useState } from 'react'

export interface VirtualClock {
  time: number
  running: boolean
  rate: number
  toggle: () => void
  setRate: (rate: number) => void
  seek: (seconds: number) => void
}

export function useVirtualClock(durationSec: number, active: boolean): VirtualClock {
  const [time, setTime] = useState(0)
  const [running, setRunning] = useState(false)
  const [rate, setRate] = useState(1)
  const lastRef = useRef(0)

  useEffect(() => {
    if (!active) setRunning(false)
  }, [active])

  useEffect(() => {
    if (!running) return
    lastRef.current = performance.now()
    const id = setInterval(() => {
      const now = performance.now()
      const elapsed = ((now - lastRef.current) / 1000) * rate
      lastRef.current = now
      setTime((t) => {
        const next = t + elapsed
        if (durationSec && next >= durationSec) {
          setRunning(false)
          return durationSec
        }
        return next
      })
    }, 250)
    return () => clearInterval(id)
  }, [running, rate, durationSec])

  const toggle = useCallback(() => setRunning((r) => !r), [])
  const seek = useCallback((seconds: number) => setTime(Math.max(0, seconds)), [])

  return { time, running, rate, toggle, setRate, seek }
}
