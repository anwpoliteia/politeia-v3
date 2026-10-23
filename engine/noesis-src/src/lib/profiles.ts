// Maps a Supabase auth user to our domain Profile, and reads/writes the
// `profiles` row (username, display name, region, language). Privacy by design
// (Hard Rule 6): we store only the account + these minimal fields.

import type { User } from '@supabase/supabase-js'
import { supabase } from './supabase'
import type { Lang, Profile } from './types'
import { normalizeUsername, suggestUsername } from './username'

function displayNameFrom(user: User): string {
  const meta = (user.user_metadata ?? {}) as Record<string, unknown>
  const name = (meta.full_name as string) || (meta.name as string)
  if (name) return name
  if (user.email) return user.email.split('@')[0]
  return 'Πολίτης'
}

function usernameFrom(user: User): string {
  const meta = (user.user_metadata ?? {}) as Record<string, unknown>
  const chosen = meta.username as string | undefined
  if (chosen) return normalizeUsername(chosen)
  return suggestUsername(user.email?.split('@')[0] || displayNameFrom(user))
}

export function baseProfile(user: User, fallbackLang: Lang): Profile {
  return {
    id: user.id,
    username: usernameFrom(user),
    displayName: displayNameFrom(user),
    region: '',
    language: fallbackLang,
    createdAt: user.created_at ?? new Date().toISOString(),
  }
}

/** Load the citizen's profile row, creating it on first sign-in. */
export async function loadOrCreateProfile(user: User, fallbackLang: Lang): Promise<Profile> {
  const base = baseProfile(user, fallbackLang)
  if (!supabase) return base

  const { data } = await supabase
    .from('profiles')
    .select('username, display_name, region, language')
    .eq('id', user.id)
    .maybeSingle()

  if (data) {
    return {
      ...base,
      username: (data.username as string) || base.username,
      displayName: (data.display_name as string) || base.displayName,
      region: (data.region as string) ?? '',
      language: ((data.language as Lang) ?? fallbackLang) as Lang,
    }
  }

  // No row yet (e.g. trigger not installed) — create one.
  await supabase.from('profiles').insert({
    id: user.id,
    username: base.username,
    display_name: base.displayName,
    region: base.region,
    language: base.language,
  })
  return base
}

/** True when no other citizen holds this username. Fails open — the DB unique
 *  index is the real guard, this is only for friendly pre-submit feedback. */
export async function isUsernameAvailable(name: string): Promise<boolean> {
  if (!supabase) return true
  const { data, error } = await supabase.rpc('username_available', {
    candidate: normalizeUsername(name),
  })
  if (error) return true
  return Boolean(data)
}

export async function saveProfile(
  id: string,
  patch: Partial<Pick<Profile, 'username' | 'displayName' | 'region' | 'language'>>,
): Promise<string | null> {
  if (!supabase) return null
  const row: Record<string, unknown> = {}
  if (patch.username != null) row.username = normalizeUsername(patch.username)
  if (patch.displayName != null) row.display_name = patch.displayName
  if (patch.region != null) row.region = patch.region
  if (patch.language != null) row.language = patch.language
  if (Object.keys(row).length === 0) return null
  const { error } = await supabase.from('profiles').update(row).eq('id', id)
  // 23505 = unique_violation (username taken).
  if (error) return error.code === '23505' ? 'username-taken' : error.message
  return null
}
