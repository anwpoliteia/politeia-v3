import { Link } from 'react-router-dom'
import { useT } from '../i18n'
import { Container } from '../components/ui/primitives'

export function NotFound() {
  const { t } = useT()
  return (
    <Container width="reading" className="py-24 text-center">
      <div className="font-mono text-5xl text-gold">404</div>
      <p className="mt-4 text-muted">{t.common.notFound}</p>
      <Link
        to="/"
        className="mt-6 inline-block rounded-md border border-line px-5 py-2.5 text-sm text-text hover:border-gold/50"
      >
        {t.brand.name}
      </Link>
    </Container>
  )
}
