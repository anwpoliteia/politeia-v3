import { useEffect, useRef } from 'react'
import { turnstileSiteKey } from '../../lib/supabase'

// Cloudflare Turnstile CAPTCHA — the anti-spam gate on email sign-in. Renders
// the widget when a site key is configured and yields its token; renders
// nothing otherwise (so the mock demo and key-less builds are unaffected).
// The token is single-use and short-lived, so we reset on expiry/error.

const SCRIPT_SRC =
  'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'

interface TurnstileApi {
  render: (
    el: HTMLElement,
    opts: {
      sitekey: string
      theme?: 'auto' | 'light' | 'dark'
      callback?: (token: string) => void
      'expired-callback'?: () => void
      'error-callback'?: () => void
    },
  ) => string
  reset: (id?: string) => void
  remove: (id?: string) => void
}

declare global {
  interface Window {
    turnstile?: TurnstileApi
  }
}

let scriptPromise: Promise<void> | null = null

function loadScript(): Promise<void> {
  if (window.turnstile) return Promise.resolve()
  if (scriptPromise) return scriptPromise
  scriptPromise = new Promise<void>((resolve, reject) => {
    const s = document.createElement('script')
    s.src = SCRIPT_SRC
    s.async = true
    s.defer = true
    s.onload = () => resolve()
    s.onerror = () => reject(new Error('turnstile-load-failed'))
    document.head.appendChild(s)
  })
  return scriptPromise
}

export function Turnstile({
  onToken,
}: {
  onToken: (token: string | null) => void
}) {
  const ref = useRef<HTMLDivElement>(null)
  const widgetId = useRef<string | null>(null)

  useEffect(() => {
    if (!turnstileSiteKey) return
    let cancelled = false

    loadScript()
      .then(() => {
        if (cancelled || !ref.current || !window.turnstile) return
        // Guard against a double render (React 18/19 StrictMode mounts twice).
        if (widgetId.current) return
        widgetId.current = window.turnstile.render(ref.current, {
          sitekey: turnstileSiteKey!,
          theme: 'dark',
          callback: (token) => onToken(token),
          'expired-callback': () => onToken(null),
          'error-callback': () => onToken(null),
        })
      })
      .catch(() => onToken(null))

    return () => {
      cancelled = true
      if (widgetId.current && window.turnstile) {
        window.turnstile.remove(widgetId.current)
        widgetId.current = null
      }
    }
    // onToken is stable from the parent; we intentionally run this once.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!turnstileSiteKey) return null
  return <div ref={ref} className="mt-1" />
}
