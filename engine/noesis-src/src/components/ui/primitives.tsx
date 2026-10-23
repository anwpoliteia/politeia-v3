import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

// Shared page primitives for consistent rhythm and a single max-width.

export function Container({
  children,
  className,
  width = 'wide',
}: {
  children: ReactNode
  className?: string
  width?: 'wide' | 'reading'
}) {
  return (
    <div
      className={cn(
        'mx-auto px-5',
        width === 'reading' ? 'max-w-3xl' : 'max-w-6xl',
        className,
      )}
    >
      {children}
    </div>
  )
}

export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string
  title: string
  subtitle?: string
}) {
  return (
    <header className="border-b border-line py-10 md:py-14">
      <Container>
        {eyebrow && (
          <p className="mb-3 font-mono text-xs uppercase tracking-wider text-gold">
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-3xl text-3xl font-semibold leading-tight text-text text-balance md:text-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-base text-muted">{subtitle}</p>
        )}
      </Container>
    </header>
  )
}

// A labelled block used throughout the proposal detail and other pages.
export function Field({
  label,
  children,
  accent,
}: {
  label: string
  children: ReactNode
  accent?: 'gold' | 'copper'
}) {
  return (
    <section>
      <h2
        className={cn(
          'mb-2 font-mono text-xs uppercase tracking-wider',
          accent === 'copper' ? 'text-copper' : accent === 'gold' ? 'text-gold' : 'text-muted',
        )}
      >
        {label}
      </h2>
      {children}
    </section>
  )
}
