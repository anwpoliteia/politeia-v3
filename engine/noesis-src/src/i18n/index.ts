// i18n entry point. EL default; key-based dictionaries (spec §2).
// useT() reads the active language from the store and returns the matching
// dictionary plus the current language and a toggle.

import { useStore } from '../store/useStore'
import { el, type Dictionary } from './el'
import { en } from './en'
import type { Bilingual, Lang } from '../lib/types'

const DICTIONARIES: Record<Lang, Dictionary> = { el, en }

export function useT() {
  const language = useStore((s) => s.language)
  const setLanguage = useStore((s) => s.setLanguage)
  const toggleLanguage = useStore((s) => s.toggleLanguage)
  return {
    lang: language,
    t: DICTIONARIES[language],
    setLanguage,
    toggleLanguage,
  }
}

/** Resolve a bilingual field to the active language. */
export function pick(value: Bilingual, lang: Lang): string {
  return value[lang]
}

export type { Dictionary }
