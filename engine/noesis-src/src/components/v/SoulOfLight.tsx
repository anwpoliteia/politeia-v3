import { useEffect, useRef } from 'react'
import { DIMENSIONS } from '../../constants/dimensions'
import { currentIndex } from '../../data/repository'

// Ψυχή — the soul of light: a luminous sphere, seen close, turning slowly on a
// tilted axis so three quarters of it fill the frame.
//
// Nine centres of gravity — one per dimension of the Eudaimonia Index — are
// spread evenly over the sphere (Fibonacci distribution), each carrying a
// swarm of motes. Rendered as light: additive blending, depth-dimmed far side,
// luminous wakes. No lines, no diagram.
//
// It is the equation made physical:
//   · Each centre's resting radius carries that dimension's real score, so a
//     deficient dimension DENTS the sphere inward — imbalance you can see.
//   · You may disturb it (pointer, tap, scroll) — and it always reforms.
//   · Restoration is PRIORITARIAN, exactly as ρ < 1 makes the generalized mean
//     concave: the further a light is driven from its place, the
//     disproportionately harder the whole pulls it home. Unity is restored
//     from the worst-off first.
//
// Page scroll is never hijacked — scrolling merely lends the sphere a spin.

const CENTRES = DIMENSIONS.length // 9
const MOTES = 34 // motes per centre

const SPRING = 2.6
const PRIORITARIAN = 3.0
const DAMPING = 0.9
const POINTER_RADIUS = 170
const POINTER_FORCE = 2600
const MAX_DT = 1 / 30

const TILT = -0.42 // fixed X-axis tilt → the three-quarter view
const FOCAL = 1250 // perspective strength

const BG = '11, 14, 20' // --color-bg
const GOLD = '200, 162, 74'
const COPPER = '176, 106, 59'
const CREAM = '236, 231, 221'

/** A soft radial light sprite, pre-rendered once and blitted per mote. */
function sprite(rgb: string, size = 64): HTMLCanvasElement {
  const c = document.createElement('canvas')
  c.width = c.height = size
  const g = c.getContext('2d')!
  const grad = g.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2)
  grad.addColorStop(0, `rgba(${rgb}, 1)`)
  grad.addColorStop(0.18, `rgba(${rgb}, 0.55)`)
  grad.addColorStop(0.55, `rgba(${rgb}, 0.12)`)
  grad.addColorStop(1, `rgba(${rgb}, 0)`)
  g.fillStyle = grad
  g.fillRect(0, 0, size, size)
  return c
}

interface Vec3 {
  x: number
  y: number
  z: number
}

interface Centre {
  dir: Vec3 // unit direction of its home on the sphere
  rest: number // resting radius as a fraction of R (dented by deficiency)
  x: number
  y: number
  z: number
  vx: number
  vy: number
  vz: number
  deficient: boolean
}

interface Mote {
  owner: number
  dir: Vec3 // its own unit direction, scattered around its centre's
  shell: number // radius fraction — gives the light shell thickness
  x: number
  y: number
  z: number
  vx: number
  vy: number
  vz: number
  phase: number
  speed: number
  wobble: number
  scale: number
}

const norm = (v: Vec3): Vec3 => {
  const l = Math.hypot(v.x, v.y, v.z) || 1
  return { x: v.x / l, y: v.y / l, z: v.z / l }
}

// The radial mask dissolves the canvas edges into the page, so the soul reads as
// ambient light rather than a video in a box. (With an overhang below the frame,
// resize() pins the same circle to the frame's centre and size.)
const FADE = 'radial-gradient(circle at 50% 50%, #000 46%, transparent 76%)'

export function SoulOfLight({ label }: { label: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const sprGold = sprite(GOLD)
    const sprCopper = sprite(COPPER)
    const sprCream = sprite(CREAM, 128)

    // ---- composition: the nation's actual flourishing ---------------------
    const index = currentIndex()
    const lowest = new Set(
      [...DIMENSIONS]
        .sort((a, b) => (index[a.id] ?? 0) - (index[b.id] ?? 0))
        .slice(0, 3)
        .map((d) => d.id),
    )

    // Nine points spread evenly over a sphere (Fibonacci / golden angle).
    const GOLDEN = Math.PI * (3 - Math.sqrt(5))
    const centres: Centre[] = DIMENSIONS.map((d, i) => {
      const y = 1 - (i / (CENTRES - 1)) * 2
      const r = Math.sqrt(Math.max(0, 1 - y * y))
      const th = GOLDEN * i
      const score = index[d.id] ?? 50
      return {
        dir: { x: Math.cos(th) * r, y, z: Math.sin(th) * r },
        rest: 0.80 + 0.20 * (score / 100), // deficiency dents the sphere
        x: 0,
        y: 0,
        z: 0,
        vx: 0,
        vy: 0,
        vz: 0,
        deficient: lowest.has(d.id),
      }
    })

    const motes: Mote[] = []
    for (let c = 0; c < CENTRES; c++) {
      for (let m = 0; m < MOTES; m++) {
        // Scatter around the owner's direction so the patches tile the sphere.
        const jitter = {
          x: centres[c].dir.x + (Math.random() - 0.5) * 1.15,
          y: centres[c].dir.y + (Math.random() - 0.5) * 1.15,
          z: centres[c].dir.z + (Math.random() - 0.5) * 1.15,
        }
        motes.push({
          owner: c,
          dir: norm(jitter),
          shell: 0.72 + Math.random() ** 0.7 * 0.4,
          x: 0,
          y: 0,
          z: 0,
          vx: 0,
          vy: 0,
          vz: 0,
          phase: Math.random() * Math.PI * 2,
          speed: 0.3 + Math.random() * 0.8,
          wobble: 3 + Math.random() * 9,
          scale: 0.3 + Math.random() * 0.7,
        })
      }
    }

    let w = 0
    let h = 0
    let full = 0 // drawing height: the frame plus any overhang below it
    let cx = 0
    let cy = 0
    let R = 0

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const rect = canvas.getBoundingClientRect()
      // The canvas may hang below its frame (--soul-bleed on the landing hero)
      // so the little souls can drift out of it. The Soul measures itself from
      // the frame, so its centre, size and fade stay exactly as they were; only
      // the drawing area grows downwards.
      const frame = canvas.parentElement?.getBoundingClientRect().height ?? rect.height
      const bleed = Math.max(0, rect.height - frame)
      w = rect.width
      h = rect.height - bleed
      full = rect.height
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(full * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      cx = w / 2
      cy = h / 2
      // Close up: the sphere is larger than the frame, so it is cropped and
      // roughly three quarters of it is visible.
      R = Math.min(w, h) * 0.62
      const mask =
        bleed > 0
          ? `radial-gradient(circle ${Math.hypot(w / 2, h / 2).toFixed(1)}px at 50% ${cy.toFixed(1)}px, #000 46%, transparent 76%)`
          : FADE
      canvas.style.setProperty('mask-image', mask)
      canvas.style.setProperty('-webkit-mask-image', mask)
      ctx.globalCompositeOperation = 'source-over'
      ctx.fillStyle = `rgb(${BG})`
      ctx.fillRect(0, 0, w, full)
    }

    /** Rotate a model-space point into world space: spin about Y, fixed tilt. */
    const rotate = (v: Vec3, a: number): Vec3 => {
      const ca = Math.cos(a)
      const sa = Math.sin(a)
      const x = v.x * ca + v.z * sa
      const z = -v.x * sa + v.z * ca
      const ct = Math.cos(TILT)
      const st = Math.sin(TILT)
      return { x, y: v.y * ct - z * st, z: v.y * st + z * ct }
    }

    /** Perspective projection; also yields a 0..1 depth for shading. */
    const project = (x: number, y: number, z: number) => {
      const p = FOCAL / (FOCAL - z)
      return { sx: cx + x * p, sy: cy + y * p, depth: (z + R) / (2 * R), p }
    }

    resize()
    for (const c of centres) {
      const home = rotate({ x: c.dir.x * R * c.rest, y: c.dir.y * R * c.rest, z: c.dir.z * R * c.rest }, 0)
      c.x = home.x
      c.y = home.y
      c.z = home.z
    }
    for (const m of motes) {
      const home = rotate({ x: m.dir.x * R * m.shell, y: m.dir.y * R * m.shell, z: m.dir.z * R * m.shell }, 0)
      m.x = home.x
      m.y = home.y
      m.z = home.z
    }

    // ---- disturbance ------------------------------------------------------
    const pointer = { x: -9999, y: -9999, active: false }
    let swirl = 0
    let lastScrollY = window.scrollY

    const onPointerMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect()
      pointer.x = e.clientX - r.left
      pointer.y = e.clientY - r.top
      pointer.active = true
    }
    const onPointerLeave = () => {
      pointer.active = false
      pointer.x = pointer.y = -9999
    }
    const onPointerDown = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect()
      const px = e.clientX - r.left
      const py = e.clientY - r.top
      for (const c of centres) {
        const { sx, sy } = project(c.x, c.y, c.z)
        const dx = sx - px
        const dy = sy - py
        const d = Math.hypot(dx, dy) || 1
        const kick = (250 / Math.max(d, 45)) * 60
        c.vx += (dx / d) * kick
        c.vy += (dy / d) * kick
        c.vz += (Math.random() - 0.5) * kick
      }
      for (const m of motes) {
        m.vx += (Math.random() - 0.5) * 460
        m.vy += (Math.random() - 0.5) * 460
        m.vz += (Math.random() - 0.5) * 460
      }
    }
    const onScroll = () => {
      const dy = window.scrollY - lastScrollY
      lastScrollY = window.scrollY
      swirl += Math.max(-40, Math.min(40, dy)) * 0.05
    }

    canvas.addEventListener('pointermove', onPointerMove)
    canvas.addEventListener('pointerleave', onPointerLeave)
    canvas.addEventListener('pointerdown', onPointerDown)
    window.addEventListener('scroll', onScroll, { passive: true })
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    let visible = true
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting), {
      threshold: 0,
    })
    io.observe(canvas)

    // ---- render -----------------------------------------------------------
    const blit = (img: HTMLCanvasElement, x: number, y: number, r: number, a: number) => {
      if (a <= 0.002 || r <= 0.4) return
      ctx.globalAlpha = a
      ctx.drawImage(img, x - r, y - r, r * 2, r * 2)
    }

    const draw = (unity: number, t: number) => {
      // Luminous wake: fade the previous frame rather than clearing it.
      ctx.globalCompositeOperation = 'source-over'
      ctx.globalAlpha = 1
      ctx.fillStyle = `rgba(${BG}, ${reduced ? 1 : 0.2})`
      ctx.fillRect(0, 0, w, full)

      ctx.globalCompositeOperation = 'lighter'

      // The lit interior — an aura, not a lamp in a void.
      const pulse = 1 + Math.sin(t * 1.1) * 0.05
      blit(sprGold, cx, cy, R * (0.95 + 0.2 * unity) * pulse, 0.030 + 0.045 * unity)
      blit(sprCream, cx, cy, R * (0.5 + 0.2 * unity) * pulse, 0.028 + 0.05 * unity)
      blit(sprGold, cx, cy, (16 + 16 * unity) * pulse, 0.10 + 0.16 * unity)
      blit(sprCream, cx, cy, (7 + 9 * unity) * pulse, 0.18 + 0.32 * unity)

      // The body: motes as living light, dimmed and shrunk with depth so the
      // volume of the sphere reads.
      for (const m of motes) {
        const { sx, sy, depth, p } = project(m.x, m.y, m.z)
        const spr = centres[m.owner].deficient ? sprCopper : sprGold
        const r = (3.8 + m.scale * 7) * p * (0.5 + 0.5 * depth) * (0.8 + 0.3 * unity)
        const a = (0.09 + 0.12 * unity) * (0.16 + 0.84 * depth)
        blit(spr, sx, sy, r, a)
        blit(sprCream, sx, sy, r * 0.26, a * 1.5)
      }

      ctx.globalAlpha = 1
    }

    // ---- loop -------------------------------------------------------------
    let raf = 0
    let last = performance.now()
    let spin = 0
    let t = 0

    const step = (now: number) => {
      raf = requestAnimationFrame(step)
      const dt = Math.min((now - last) / 1000, MAX_DT)
      last = now
      if (!visible) return

      t += dt
      spin += (0.16 + swirl * 0.01) * dt
      swirl *= 0.94
      const breath = 1 + Math.sin(t * 0.5) * 0.025

      let displacement = 0
      // Centres chase their rotating homes on the sphere.
      for (const c of centres) {
        const rr = R * c.rest * breath
        const home = rotate({ x: c.dir.x * rr, y: c.dir.y * rr, z: c.dir.z * rr }, spin)
        const dx = home.x - c.x
        const dy = home.y - c.y
        const dz = home.z - c.z
        const d = Math.hypot(dx, dy, dz)
        displacement += d

        // Prioritarian restoration — ρ < 1 expressed as force.
        const k = SPRING * (1 + PRIORITARIAN * (d / R))
        c.vx += dx * k * dt
        c.vy += dy * k * dt
        c.vz += dz * k * dt

        if (pointer.active) {
          const { sx, sy } = project(c.x, c.y, c.z)
          const px = sx - pointer.x
          const py = sy - pointer.y
          const pd = Math.hypot(px, py)
          if (pd < POINTER_RADIUS && pd > 0.001) {
            const f = (1 - pd / POINTER_RADIUS) ** 2 * POINTER_FORCE
            c.vx += (px / pd) * f * dt
            c.vy += (py / pd) * f * dt
          }
        }

        const damp = DAMPING ** (dt * 60)
        c.vx *= damp
        c.vy *= damp
        c.vz *= damp
        c.x += c.vx * dt
        c.y += c.vy * dt
        c.z += c.vz * dt

        // Remember this frame's displacement so the swarm follows its centre.
        ;(c as Centre & { dx?: number; dy?: number; dz?: number }).dx = c.x - home.x
        ;(c as Centre & { dx?: number; dy?: number; dz?: number }).dy = c.y - home.y
        ;(c as Centre & { dx?: number; dy?: number; dz?: number }).dz = c.z - home.z
      }

      const unity = Math.max(0, 1 - displacement / CENTRES / (R * 0.55))

      // Motes ride the shell, carried by their centre's displacement.
      for (const m of motes) {
        const c = centres[m.owner] as Centre & { dx?: number; dy?: number; dz?: number }
        m.phase += m.speed * dt
        const rr = R * m.shell * breath
        const home = rotate({ x: m.dir.x * rr, y: m.dir.y * rr, z: m.dir.z * rr }, spin)
        const tx = home.x + (c.dx ?? 0) + Math.cos(m.phase) * m.wobble
        const ty = home.y + (c.dy ?? 0) + Math.sin(m.phase * 1.13) * m.wobble
        const tz = home.z + (c.dz ?? 0)

        m.vx += (tx - m.x) * 5.5 * dt
        m.vy += (ty - m.y) * 5.5 * dt
        m.vz += (tz - m.z) * 5.5 * dt

        if (pointer.active) {
          const { sx, sy } = project(m.x, m.y, m.z)
          const px = sx - pointer.x
          const py = sy - pointer.y
          const pd = Math.hypot(px, py)
          if (pd < POINTER_RADIUS && pd > 0.001) {
            const f = (1 - pd / POINTER_RADIUS) ** 2 * POINTER_FORCE * 0.6
            m.vx += (px / pd) * f * dt
            m.vy += (py / pd) * f * dt
          }
        }

        const damp = 0.88 ** (dt * 60)
        m.vx *= damp
        m.vy *= damp
        m.vz *= damp
        m.x += m.vx * dt
        m.y += m.vy * dt
        m.z += m.vz * dt
      }

      draw(unity, t)
    }

    if (reduced) {
      const still = () => {
        resize()
        for (const c of centres) {
          const rr = R * c.rest
          const home = rotate({ x: c.dir.x * rr, y: c.dir.y * rr, z: c.dir.z * rr }, 0.6)
          c.x = home.x
          c.y = home.y
          c.z = home.z
        }
        for (const m of motes) {
          const rr = R * m.shell
          const home = rotate({ x: m.dir.x * rr, y: m.dir.y * rr, z: m.dir.z * rr }, 0.6)
          m.x = home.x
          m.y = home.y
          m.z = home.z
        }
        draw(1, 0)
      }
      still()
      window.addEventListener('resize', still)
      return () => {
        window.removeEventListener('resize', still)
        canvas.removeEventListener('pointermove', onPointerMove)
        canvas.removeEventListener('pointerleave', onPointerLeave)
        canvas.removeEventListener('pointerdown', onPointerDown)
        window.removeEventListener('scroll', onScroll)
        ro.disconnect()
        io.disconnect()
      }
    }

    raf = requestAnimationFrame(step)
    return () => {
      cancelAnimationFrame(raf)
      canvas.removeEventListener('pointermove', onPointerMove)
      canvas.removeEventListener('pointerleave', onPointerLeave)
      canvas.removeEventListener('pointerdown', onPointerDown)
      window.removeEventListener('scroll', onScroll)
      ro.disconnect()
      io.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      role="img"
      aria-label={label}
      style={{ maskImage: FADE, WebkitMaskImage: FADE }}
      className="h-full w-full cursor-crosshair touch-pan-y select-none"
    />
  )
}
