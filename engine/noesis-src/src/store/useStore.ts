// Lightweight global state (spec §2: Zustand, no Redux).
// Holds language, mock auth, and the citizen's own votes/comments.
// Privacy by design (Hard Rule 6): we persist only the account + the user's
// own votes/comments to localStorage. No tracking, no profiling.

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Comment, Lang, Profile, Proposal, VoteValue } from '../lib/types'
import { isSupabaseConfigured, supabase } from '../lib/supabase'
import { isUsernameAvailable, saveProfile } from '../lib/profiles'
import { normalizeUsername, usernameError } from '../lib/username'

// Result of an async username change: null on success, otherwise the reason.
export type UsernameOutcome = 'invalid' | 'taken' | 'error' | null

interface PoliteiaState {
  language: Lang
  currentUser: Profile | null
  authReady: boolean // initial session check done (real auth)

  // proposalId -> this citizen's vote
  votes: Record<string, VoteValue>
  // commentId -> this citizen's vote
  commentVotes: Record<string, VoteValue>
  // comments this citizen has authored (seed comments live in the data layer)
  comments: Comment[]
  // POLITEIA-V: proposals generated live by the AI Counsellors, kept locally
  vProposals: Proposal[]

  setLanguage: (lang: Lang) => void
  toggleLanguage: () => void

  // Real auth (Supabase) — active only when configured.
  setCurrentUser: (profile: Profile | null) => void
  setAuthReady: (ready: boolean) => void
  signInWithGoogle: () => Promise<void>
  signInWithEmail: (
    email: string,
    captchaToken?: string,
    username?: string,
  ) => Promise<string | null>

  // Local mock auth — used only when Supabase is not configured.
  login: (username: string, region: string, language: Lang) => void
  logout: () => Promise<void>
  updateProfile: (patch: Partial<Pick<Profile, 'region' | 'language'>>) => void
  // Change the public handle. Validates format, checks uniqueness (real mode),
  // persists, and updates the current user. Returns null on success.
  changeUsername: (username: string) => Promise<UsernameOutcome>

  // Casting the same value again clears the vote (toggle off).
  addVProposal: (p: Proposal) => void
  castVote: (proposalId: string, value: VoteValue) => void
  voteComment: (commentId: string, value: VoteValue) => void
  addComment: (proposalId: string, body: string, parentId: string | null) => void
}

const newId = () =>
  typeof crypto !== 'undefined' && 'randomUUID' in crypto
    ? crypto.randomUUID()
    : `id-${Date.now()}-${Math.random().toString(36).slice(2)}`

export const useStore = create<PoliteiaState>()(
  persist(
    (set, get) => ({
      language: 'el', // EL default (Hard Rule 5)
      currentUser: null,
      authReady: !isSupabaseConfigured, // no async check needed in mock mode
      votes: {},
      commentVotes: {},
      comments: [],
      vProposals: [],

      setLanguage: (language) => set({ language }),
      toggleLanguage: () =>
        set((s) => ({ language: s.language === 'el' ? 'en' : 'el' })),

      setCurrentUser: (currentUser) => set({ currentUser }),
      setAuthReady: (authReady) => set({ authReady }),

      signInWithGoogle: async () => {
        if (!supabase) return
        await supabase.auth.signInWithOAuth({
          provider: 'google',
          options: { redirectTo: window.location.origin },
        })
      },

      signInWithEmail: async (email, captchaToken, username) => {
        if (!supabase) return 'not-configured'
        // OTP both creates the account (first time) and signs in; clicking the
        // emailed link confirms a real, owned inbox. The CAPTCHA token (when
        // configured) blocks automated bot sign-ups before any email is sent.
        // The chosen username rides along as metadata, which the DB trigger
        // turns into the profile's unique handle on account creation.
        const { error } = await supabase.auth.signInWithOtp({
          email: email.trim(),
          options: {
            emailRedirectTo: window.location.origin,
            shouldCreateUser: true,
            ...(username ? { data: { username: normalizeUsername(username) } } : {}),
            ...(captchaToken ? { captchaToken } : {}),
          },
        })
        return error ? error.message : null
      },

      login: (username, region, language) => {
        const handle = normalizeUsername(username) || 'politis'
        set({
          currentUser: {
            id: newId(),
            username: handle,
            displayName: handle,
            region: region.trim(),
            language,
            createdAt: new Date().toISOString(),
          },
          language,
        })
      },

      logout: async () => {
        if (supabase) await supabase.auth.signOut()
        set({ currentUser: null })
      },

      updateProfile: (patch) =>
        set((s) => {
          if (!s.currentUser) return s
          if (isSupabaseConfigured) void saveProfile(s.currentUser.id, patch)
          return { currentUser: { ...s.currentUser, ...patch } }
        }),

      changeUsername: async (username) => {
        const current = get().currentUser
        if (!current) return 'error'
        if (usernameError(username)) return 'invalid'
        const handle = normalizeUsername(username)
        if (handle === current.username) return null // no-op
        if (isSupabaseConfigured) {
          if (!(await isUsernameAvailable(handle))) return 'taken'
          const err = await saveProfile(current.id, { username: handle })
          if (err) return err === 'username-taken' ? 'taken' : 'error'
        }
        set((s) =>
          s.currentUser ? { currentUser: { ...s.currentUser, username: handle } } : s,
        )
        return null
      },

      addVProposal: (p) =>
        set((s) => ({ vProposals: [p, ...s.vProposals].slice(0, 40) })),

      castVote: (proposalId, value) =>
        set((s) => {
          const next = { ...s.votes }
          if (next[proposalId] === value) delete next[proposalId]
          else next[proposalId] = value
          return { votes: next }
        }),

      voteComment: (commentId, value) =>
        set((s) => {
          const next = { ...s.commentVotes }
          if (next[commentId] === value) delete next[commentId]
          else next[commentId] = value
          return { commentVotes: next }
        }),

      addComment: (proposalId, body, parentId) =>
        set((s) => {
          if (!s.currentUser) return s
          const comment: Comment = {
            id: newId(),
            proposalId,
            userId: s.currentUser.id,
            authorName: s.currentUser.username,
            parentId,
            body: body.trim(),
            createdAt: new Date().toISOString(),
            score: 0,
          }
          return { comments: [...s.comments, comment] }
        }),
    }),
    { name: 'politeia' },
  ),
)
