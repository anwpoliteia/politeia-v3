import { Link } from 'react-router-dom'
import { useT } from '../../i18n'

export function Footer() {
  const { t } = useT()
  return (
    <footer className="mt-16 border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <div className="font-mono text-sm tracking-[0.2em] text-text">
              {t.brand.name}
            </div>
            <p className="mt-2 text-sm text-muted">{t.brand.tagline}</p>
          </div>
          <div className="space-y-2 text-sm">
            <Link to="/blueprint" className="block text-muted hover:text-text">
              {t.nav.blueprint}
            </Link>
            <Link to="/cost" className="block text-muted hover:text-text">
              {t.nav.cost}
            </Link>
            <Link to="/nous" className="block text-muted hover:text-text">
              {t.nav.nous}
            </Link>
          </div>
        </div>
        <div className="mt-8 space-y-1 border-t border-line pt-6 text-xs text-muted">
          <p>{t.footer.rights}</p>
          <p>{t.footer.privacy}</p>
          {/* Visible authorship claim. Copyright exists without it, but a
              notice on the page is what a reader — or a court — is shown. */}
          <p className="pt-2">{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
