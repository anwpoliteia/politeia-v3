import { useT } from '../../i18n'
import { useVLive } from '../../lib/vApi'

// Nav chip: whether the intelligence server is LIVE (Anthropic key present) or
// the app is running its demo simulation. Honest by design — the citizen always
// knows which one they are watching.
export function LiveBadge() {
  const { t } = useT()
  const { live, ready } = useVLive()
  if (!ready) return null
  return (
    <span
      title={live ? t.v.liveNote : t.v.demoNote}
      className={
        'hidden items-center gap-1.5 rounded-md border px-2 py-1 font-mono text-[10px] uppercase tracking-wider sm:inline-flex ' +
        (live ? 'border-gold/50 text-gold' : 'border-line text-muted')
      }
    >
      <span
        aria-hidden
        className={
          'inline-block h-1.5 w-1.5 rounded-full ' + (live ? 'bg-gold' : 'bg-muted')
        }
      />
      {live ? t.v.badgeLive : t.v.badgeDemo}
    </span>
  )
}
