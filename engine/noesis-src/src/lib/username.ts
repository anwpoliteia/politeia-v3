// Username rules — the public handle a citizen picks. Kept deliberately strict
// and lowercase so identities are unambiguous across the deliberation (no
// look-alike impersonation) and safe to use as a stable key.

export const USERNAME_MIN = 3
export const USERNAME_MAX = 20

export type UsernameError = 'empty' | 'length' | 'chars' | 'start'

/** Trim + lowercase. The stored/compared form is always the normalized one. */
export function normalizeUsername(raw: string): string {
  return raw.trim().toLowerCase()
}

/** Returns the first rule the value breaks, or null when it is valid. */
export function usernameError(raw: string): UsernameError | null {
  const u = normalizeUsername(raw)
  if (!u) return 'empty'
  if (u.length < USERNAME_MIN || u.length > USERNAME_MAX) return 'length'
  if (!/^[a-z0-9_]+$/.test(u)) return 'chars'
  if (!/^[a-z]/.test(u)) return 'start'
  return null
}

/** Best-effort suggestion from an email local-part or full name. */
export function suggestUsername(seed: string): string {
  const base = normalizeUsername(seed).replace(/[^a-z0-9_]/g, '')
  return base.length >= USERNAME_MIN ? base.slice(0, USERNAME_MAX) : `${base}polit`.slice(0, USERNAME_MAX)
}
