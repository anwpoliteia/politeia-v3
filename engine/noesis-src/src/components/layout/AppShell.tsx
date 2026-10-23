import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Nav } from './Nav'
import { Footer } from './Footer'
import { useT } from '../../i18n'

// App frame: skip link (keyboard a11y), sticky nav, routed content, footer.
// Keeps <html lang> in sync with the active language and scrolls to top on
// navigation.
export function AppShell() {
  const { t, lang } = useT()
  const location = useLocation()

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [location.pathname])

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-elev focus:px-4 focus:py-2 focus:text-text"
      >
        {t.nav.skipToContent}
      </a>
      <Nav />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
