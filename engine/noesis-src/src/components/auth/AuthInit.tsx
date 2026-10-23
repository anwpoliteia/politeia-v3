import { useEffect } from 'react'
import { supabase } from '../../lib/supabase'
import { loadOrCreateProfile } from '../../lib/profiles'
import { useStore } from '../../store/useStore'

// Reconciles the Supabase session into the store: sets the current citizen on
// load, on OAuth/magic-link return, and on sign-out. No-op when Supabase is not
// configured (the app then uses local mock auth). Renders nothing.
export function AuthInit() {
  const setCurrentUser = useStore((s) => s.setCurrentUser)
  const setAuthReady = useStore((s) => s.setAuthReady)

  useEffect(() => {
    if (!supabase) return
    let active = true
    const lang = () => useStore.getState().language

    supabase.auth.getSession().then(async ({ data }) => {
      if (!active) return
      const user = data.session?.user ?? null
      setCurrentUser(user ? await loadOrCreateProfile(user, lang()) : null)
      setAuthReady(true)
    })

    const { data: sub } = supabase.auth.onAuthStateChange(async (_event, session) => {
      const user = session?.user ?? null
      setCurrentUser(user ? await loadOrCreateProfile(user, lang()) : null)
      setAuthReady(true)
    })

    return () => {
      active = false
      sub.subscription.unsubscribe()
    }
  }, [setCurrentUser, setAuthReady])

  return null
}
