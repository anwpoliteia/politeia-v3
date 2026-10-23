import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useT } from '../../i18n'
import { useStore } from '../../store/useStore'
import { LanguageToggle } from './LanguageToggle'
import { LiveBadge } from '../v/LiveBadge'
import { cn } from '../../lib/cn'

const linkClass = ({ isActive }: { isActive: boolean }) =>
  cn(
    // nowrap: every entry stays on a single line, never breaking in two.
    'block whitespace-nowrap px-3 py-2 text-sm transition-colors',
    isActive ? 'text-gold' : 'text-muted hover:text-text',
  )

export function Nav() {
  const { t } = useT()
  const currentUser = useStore((s) => s.currentUser)
  const logout = useStore((s) => s.logout)
  const [open, setOpen] = useState(false)

  const links = (
    <>
      <NavLink to="/blueprint" className={linkClass} onClick={() => setOpen(false)}>
        {t.nav.blueprint}
      </NavLink>
      <NavLink to="/ministries" className={linkClass} onClick={() => setOpen(false)}>
        {t.nav.council}
      </NavLink>
      <NavLink to="/nous" className={linkClass} onClick={() => setOpen(false)}>
        {t.nav.nous}
      </NavLink>
      <NavLink to="/nous2" className={linkClass} onClick={() => setOpen(false)}>
        {t.nav.nous2}
      </NavLink>
      <NavLink to="/delphoi" className={linkClass} onClick={() => setOpen(false)}>
        {t.nav.delphi}
      </NavLink>
      <NavLink to="/vasanos" className={linkClass} onClick={() => setOpen(false)}>
        {t.nav.basanos}
      </NavLink>
      <NavLink to="/efthynai" className={linkClass} onClick={() => setOpen(false)}>
        {t.nav.efthynai}
      </NavLink>
      <NavLink to="/ergastirio" className={linkClass} onClick={() => setOpen(false)}>
        {t.nav.workshop}
      </NavLink>
      <NavLink to="/canon" className={linkClass} onClick={() => setOpen(false)}>
        {t.nav.canon}
      </NavLink>
      <NavLink to="/cost" className={linkClass} onClick={() => setOpen(false)}>
        {t.nav.cost}
      </NavLink>
    </>
  )

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link
          to="/"
          className="flex items-baseline gap-2.5"
          aria-label="ΑΝΩ ΠΟΛΙΤΕΙΑ"
        >
          {/* ΑΝΩ — the studio wordmark, matched to the ΑΝΩ site exactly:
              Cormorant Garamond, 0.14em tracking, Ω in the ΑΝΩ gold. */}
          <span className="font-anw whitespace-nowrap text-xl leading-none tracking-[0.14em] text-text">
            ΑΝ<span className="text-anw-gold">Ω</span> {t.brand.name}
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">{links}</div>

        <div className="flex items-center gap-3">
          <LiveBadge />
          <LanguageToggle />
          <div className="hidden items-center gap-2 md:flex">
            {currentUser ? (
              <>
                <NavLink to="/profile" className={linkClass}>
                  @{currentUser.username}
                </NavLink>
                <button
                  type="button"
                  onClick={logout}
                  className="px-3 py-2 text-sm text-muted transition-colors hover:text-copper"
                >
                  {t.nav.logout}
                </button>
              </>
            ) : (
              <NavLink
                to="/login"
                className="rounded-md border border-line px-3 py-2 text-sm text-text transition-colors hover:border-gold/50"
              >
                {t.nav.login}
              </NavLink>
            )}
          </div>

          <button
            type="button"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="rounded-md border border-line p-2 text-text md:hidden"
          >
            <span aria-hidden className="block font-mono leading-none">
              {open ? '×' : '≡'}
            </span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-line px-3 pb-3 md:hidden">
          {links}
          <div className="mt-2 border-t border-line pt-2">
            {currentUser ? (
              <button
                type="button"
                onClick={() => {
                  logout()
                  setOpen(false)
                }}
                className="block px-3 py-2 text-sm text-muted hover:text-copper"
              >
                {t.nav.logout}
              </button>
            ) : (
              <NavLink to="/login" className={linkClass} onClick={() => setOpen(false)}>
                {t.nav.login}
              </NavLink>
            )}
          </div>
        </div>
      )}
    </header>
  )
}
