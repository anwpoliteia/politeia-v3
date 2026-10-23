// Formatting helpers. Honest numbers only (Hard Rule 9) — these never invent
// precision; callers pass the precision they can defend.

import type { Lang } from './types'

const localeFor = (lang: Lang) => (lang === 'el' ? 'el-GR' : 'en-GB')

export function formatDate(iso: string, lang: Lang): string {
  return new Date(iso).toLocaleDateString(localeFor(lang), {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export function formatNumber(n: number, lang: Lang, maxFrac = 0): string {
  return n.toLocaleString(localeFor(lang), { maximumFractionDigits: maxFrac })
}

/** Euro amounts, abbreviated for large values (€48M, €15.2M, €820k). */
export function formatEuro(n: number, lang: Lang): string {
  const abs = Math.abs(n)
  const locale = localeFor(lang)
  if (abs >= 1_000_000_000) {
    return `€${(n / 1_000_000_000).toLocaleString(locale, { maximumFractionDigits: 2 })}B`
  }
  if (abs >= 1_000_000) {
    return `€${(n / 1_000_000).toLocaleString(locale, { maximumFractionDigits: 1 })}M`
  }
  if (abs >= 1_000) {
    return `€${(n / 1_000).toLocaleString(locale, { maximumFractionDigits: 0 })}k`
  }
  return `€${n.toLocaleString(locale, { maximumFractionDigits: 0 })}`
}

export function formatPercent(fraction: number, lang: Lang, maxFrac = 0): string {
  return fraction.toLocaleString(localeFor(lang), {
    style: 'percent',
    maximumFractionDigits: maxFrac,
  })
}

/** Signed delta for the Eudaimonia bars: "+4", "−3", "0". */
export function formatSignedDelta(n: number): string {
  if (n > 0) return `+${n}`
  if (n < 0) return `−${Math.abs(n)}`
  return '0'
}

/** Relative time, low-resolution and honest ("πριν 3 ημέρες" / "3 days ago"). */
export function formatRelative(iso: string, lang: Lang): string {
  const diffMs = Date.now() - new Date(iso).getTime()
  const rtf = new Intl.RelativeTimeFormat(localeFor(lang), { numeric: 'auto' })
  const mins = Math.round(diffMs / 60000)
  if (Math.abs(mins) < 60) return rtf.format(-mins, 'minute')
  const hours = Math.round(mins / 60)
  if (Math.abs(hours) < 24) return rtf.format(-hours, 'hour')
  const days = Math.round(hours / 24)
  if (Math.abs(days) < 30) return rtf.format(-days, 'day')
  const months = Math.round(days / 30)
  return rtf.format(-months, 'month')
}
