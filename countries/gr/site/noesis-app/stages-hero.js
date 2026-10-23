/*! © 2026 ΑΝΩ ΠΟΛΙΤΕΙΑ · ipoliteia.gr · SPDX-License-Identifier: AGPL-3.0-or-later · Κείμενα: CC BY-NC-ND 4.0 · Όνομα και Δωδεκάπλευρο: με επιφύλαξη παντός δικαιώματος · βλ. /COPYRIGHT.md */
// The five stages of ΑΝΩ ΠΟΛΙΤΕΙΑ as a quiet line animation in the Διακήρυξη hero, right of the
// Ευδαιμονία equation. It sits beside the imported app (like atlas-embed.js) instead of inside its
// bundle, so the hero's own text and equation stay exactly as they are. Styles: stages-hero.css.
(() => {
  'use strict';
  const ROUTE = '/manifesto';

  const TEXT = {
    el: {
      label: 'Τα πέντε στάδια της ΑΝΩ ΠΟΛΙΤΕΙΑΣ. Πάτησε για παύση ή συνέχεια.',
      intro: ['ΑΝΩ ΠΟΛΙΤΕΙΑ', 'Πέντε στάδια.', 'Ο οδηγός μας: το δωδεκάπλευρο, ο αιθέρας.'],
      finale: ['ipoliteia.gr', 'Πέντε στάδια, μία Πολιτεία.', 'Από την αφετηρία ως τη σύνθεση.'],
      stages: [
        ['Ήλιος', 'Πυρ · Τετράεδρο · Η αφετηρία', 'Η Πολιτεία ξεκινά από εσένα.', ['Γράφεις τον τόπο σου και ξεκινάς από εκεί: γειτονιά, δήμο ή νησί.', 'Έτοιμες αφετηρίες: περισσότερη σκιά, πρόσβαση στην υγεία, ασφαλής διαδρομή στο σχολείο.', 'Κάθε τόπος έχει μια καλύτερη εκδοχή. Τη φανταζόμαστε και την εξετάζουμε μαζί.']],
        ['Γαία', 'Γη · Κύβος · Ο τόπος', 'Ο τόπος σου, σε κάθε διάσταση.', ['Χάρτης όλης της Ελλάδας: κάθε γειτονιά, κάθε νησί.', 'Κάρτες τόπου με συντεταγμένες, ελεγμένες σε πρωτογενείς πηγές.', 'Τρισδιάστατη Αθήνα από τον Πειραιά ως τη Βουλιαγμένη, με μνημεία, στάδια και διαδρομές.']],
        ['Δήμος', 'Αήρ · Οκτάεδρο · Ο διάλογος', 'Ο διάλογος γίνεται κοινή πράξη.', ['Οι φάκελοι της πόλης, με τα στοιχεία τους.', 'Συμπόσιο: τι μπορεί να γίνει καλύτερο, και ο αντίλογος.', 'Δηλώνεις τη θέση σου. Δεν χρειάζεται να συμφωνούμε σε όλα, χρειάζεται να ακούμε καλύτερα.']],
        ['Κύμα', 'Ύδωρ · Εικοσάεδρο · Η καθημερινή πράξη', 'Η καθημερινότητα στο επίκεντρο.', ['Ξεκινάς από μια ανάγκη της καθημερινής ζωής.', 'Ένα μικρό βήμα σήμερα, με λίστα και πρόοδο που μένει στη συσκευή σου.', 'Η νοημοσύνη προτείνει. Οι άνθρωποι αποφασίζουν.']],
        ['Νόησις', 'Αιθήρ · Δωδεκάπλευρο · Η σύνθεση', 'Μια καλύτερη ισορροπία για όλους.', ['Συμβουλευτικό επίπεδο τεχνητής νοημοσύνης για τη δημόσια διοίκηση.', 'ΝΟΥΣ 2.0: χάρτης κινδύνου διαφθοράς από δημόσια δεδομένα.', 'Δελφοί: παρακολούθηση των αποφάσεων στη Διαύγεια.']],
      ],
    },
    en: {
      label: 'The five stages of ANO POLITEIA. Press to pause or resume.',
      intro: ['ANO POLITEIA', 'Five stages.', 'Our guide: the dodecahedron, the aether.'],
      finale: ['ipoliteia.gr', 'Five stages, one Politeia.', 'From the starting point to the synthesis.'],
      stages: [
        ['Helios', 'Fire · Tetrahedron · The starting point', 'The Republic starts with you.', ['Type your place and start from there: a neighbourhood, a municipality or an island.', 'Ready starting points: more shade, access to health care, a safe route to school.', 'Every place has a better version. We imagine it and examine it together.']],
        ['Gaia', 'Earth · Cube · The place', 'Your place, in every dimension.', ['A map of all of Greece: every neighbourhood, every island.', 'Place cards with coordinates, checked against primary sources.', '3D Athens from Piraeus to Vouliagmeni, with monuments, stadiums and drives.']],
        ['Demos', 'Air · Octahedron · The dialogue', 'Dialogue becomes common action.', ['The city’s dossiers, with their evidence.', 'Symposium: what can be better, and the counter-argument.', 'You state your position. We need not agree on everything; we need to listen better.']],
        ['Kyma', 'Water · Icosahedron · Everyday practice', 'Everyday life at the centre.', ['You start from a need of everyday life.', 'One small step today, with a checklist and progress kept on your device.', 'The intelligence proposes. People decide.']],
        ['Noesis', 'Aether · Dodecahedron · The synthesis', 'A better balance for all.', ['An AI advisory layer for public administration.', 'NOUS 2.0: a corruption-risk map from public data.', 'Delphi: following the decisions published on Diavgeia.']],
      ],
    },
  };
  const KINDS = ['tetrahedron', 'cube', 'octahedron', 'icosahedron', 'dodecahedron'];

  // ---- Geometry: the same construction and viewing angles as the site's navigation symbols ----
  const phi = (1 + Math.sqrt(5)) / 2, S = [-1, 1];
  const RAW = {
    tetrahedron: [[1, 1, 1], [1, -1, -1], [-1, 1, -1], [-1, -1, 1]],
    cube: S.flatMap(x => S.flatMap(y => S.map(z => [x, y, z]))),
    octahedron: [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]],
    icosahedron: S.flatMap(a => S.flatMap(b => [[0, a, b * phi], [a, b * phi, 0], [b * phi, 0, a]])),
    dodecahedron: [...S.flatMap(x => S.flatMap(y => S.map(z => [x, y, z]))),
      ...S.flatMap(a => S.flatMap(b => [[0, a / phi, b * phi], [a / phi, b * phi, 0], [b * phi, 0, a / phi]]))],
  };
  const ANGLES = { tetrahedron: [-0.18, 0.52, -0.05], cube: [-0.42, 0.60, 0], octahedron: [-0.25, 0.40, 0], icosahedron: [-0.18, 0.31, 0.08], dodecahedron: [-0.26, 0.37, -0.05] };
  const sub = (a, b) => a.map((v, i) => v - b[i]), dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
  const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
  function rotate([x, y, z], [ax, ay, az]) {
    const y1 = y * Math.cos(ax) - z * Math.sin(ax), z1 = y * Math.sin(ax) + z * Math.cos(ax);
    const x2 = x * Math.cos(ay) + z1 * Math.sin(ay), z2 = -x * Math.sin(ay) + z1 * Math.cos(ay);
    return [x2 * Math.cos(az) - y1 * Math.sin(az), x2 * Math.sin(az) + y1 * Math.cos(az), z2];
  }
  function build(kind) {
    const verts = RAW[kind], pairs = [];
    for (let a = 0; a < verts.length; a++) for (let b = a + 1; b < verts.length; b++) { const d = sub(verts[a], verts[b]); pairs.push([a, b, dot(d, d)]); }
    const min = Math.min(...pairs.map(p => p[2]));
    let edges = pairs.filter(p => Math.abs(p[2] - min) < 1e-6).map(p => [p[0], p[1]]);
    const faces = new Map();
    for (let a = 0; a < verts.length - 2; a++) for (let b = a + 1; b < verts.length - 1; b++) for (let c = b + 1; c < verts.length; c++) {
      let n = cross(sub(verts[b], verts[a]), sub(verts[c], verts[a])); const len = Math.sqrt(dot(n, n)); if (len < 1e-7) continue;
      n = n.map(v => v / len);
      const ds = verts.map(p => dot(n, sub(p, verts[a])));
      if (ds.some(v => v > 1e-7) && ds.some(v => v < -1e-7)) continue;
      if (dot(n, verts[a]) < 0) n = n.map(v => -v);
      const ids = ds.flatMap((v, i) => Math.abs(v) < 1e-7 ? [i] : []);
      faces.set(ids.join(','), { ids, n });
    }
    const faceList = [...faces.values()], rot = ANGLES[kind];
    const depth = verts.map(() => Infinity); depth[0] = 0; const queue = [0];
    while (queue.length) { const v = queue.shift(); for (const [a, b] of edges) { const o = a === v ? b : b === v ? a : -1; if (o >= 0 && depth[o] === Infinity) { depth[o] = depth[v] + 1; queue.push(o); } } }
    edges = edges.map(([a, b]) => depth[a] <= depth[b] ? [a, b] : [b, a]).sort((e, f) => depth[e[0]] - depth[f[0]] || depth[e[1]] - depth[f[1]]);
    const P = verts.map(v => rotate(v, rot)), xs = P.map(p => p[0]), ys = P.map(p => p[1]);
    const span = Math.max(Math.max(...xs) - Math.min(...xs), Math.max(...ys) - Math.min(...ys));
    const ox = (Math.max(...xs) + Math.min(...xs)) / 2, oy = (Math.max(...ys) + Math.min(...ys)) / 2;
    const visible = faceList.map(f => rotate(f.n, rot)[2] > 1e-6);
    return {
      pts: P.map(p => [(p[0] - ox) / span, -(p[1] - oy) / span]),
      edges,
      front: edges.map(([a, b]) => faceList.some((f, i) => visible[i] && f.ids.includes(a) && f.ids.includes(b))),
      box: { w: (Math.max(...xs) - Math.min(...xs)) / span, h: (Math.max(...ys) - Math.min(...ys)) / span },
    };
  }
  const SOLID = Object.fromEntries(KINDS.map(k => [k, build(k)]));

  const DURATIONS = [6, 7.5, 7.5, 7.5, 7.5, 7.5, 6.5];   // intro, five stages, finale
  const STARTS = DURATIONS.map((_, i) => DURATIONS.slice(0, i).reduce((a, b) => a + b, 0));
  const TOTAL = DURATIONS.reduce((a, b) => a + b, 0);
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  const ease = v => { v = clamp(v); return v < .5 ? 4 * v * v * v : 1 - Math.pow(-2 * v + 2, 3) / 2; };
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const lang = () => (document.documentElement.lang || 'el').startsWith('en') ? 'en' : 'el';

  function captionsHtml(T) {
    const scenes = [
      { n: esc(T.intro[0]), title: T.intro[1], motto: T.intro[2], features: [] },
      ...T.stages.map((s, i) => ({ n: `<b>0${i + 1}</b> · ${esc(s[1])}`, title: s[0], motto: s[2], features: s[3] })),
      { n: esc(T.finale[0]), title: T.finale[1], motto: T.finale[2], features: [] },
    ];
    return scenes.map(s => `<div class="stages-cap"><p class="n">${s.n}</p><h3>${esc(s.title)}</h3><p class="m">${esc(s.motto)}</p>${s.features.length ? `<ul>${s.features.map(f => `<li>${esc(f)}</li>`).join('')}</ul>` : ''}</div>`).join('');
  }

  function mount(host) {
    const root = document.createElement('div');
    root.className = 'stages-hero';
    root.tabIndex = 0;
    root.setAttribute('role', 'button');
    root.innerHTML = '<canvas aria-hidden="true"></canvas><div class="stages-caps"></div><i class="stages-progress" aria-hidden="true"></i>';
    host.classList.add('stages-host');
    host.appendChild(root);
    const canvas = root.querySelector('canvas'), ctx = canvas.getContext('2d'), caps = root.querySelector('.stages-caps'), bar = root.querySelector('.stages-progress');
    const css = getComputedStyle(document.documentElement);
    const token = (name, fallback) => css.getPropertyValue(name).trim() || fallback;
    const C = { gold: token('--color-gold', '#c8a24a'), text: token('--color-text', '#ece7dd') };

    let W = 0, H = 0, L = null, t = 0, playing = true, visible = true, last = performance.now(), current = -1, raf = 0, capEls = [];
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

    function setLanguage() {
      const T = TEXT[lang()];
      root.setAttribute('aria-label', T.label);
      caps.innerHTML = captionsHtml(T);
      capEls = [...caps.children];
      current = -1;
      draw();
    }
    // Beside the Ευδαιμονία equation, from the eyebrow down to the buttons. The lede's long lines
    // reach past the centre: the drawing stays above them and the frame's left edge fades out there.
    let ledeY = Infinity;
    function place() {
      const s = getComputedStyle(host);
      root.style.setProperty('--stages-top', s.paddingTop);
      root.style.setProperty('--stages-bottom', s.paddingBottom);
      root.style.setProperty('--stages-right', s.paddingRight);
      const lede = [...host.children].find(c => c.tagName === 'P' && c.classList.contains('max-w-2xl'));
      const own = root.getBoundingClientRect();
      ledeY = lede && getComputedStyle(root).position === 'absolute' ? lede.getBoundingClientRect().top - own.top : Infinity;
      const end = Number.isFinite(ledeY) && own.height ? clamp((ledeY - 10) / own.height, .2, 1) : 1;
      root.style.setProperty('--fade-end', `${(end * 100).toFixed(1)}%`);
      root.style.setProperty('--fade-start', `${(Math.max(0, end - .14) * 100).toFixed(1)}%`);
    }
    function layout() {
      const r = root.getBoundingClientRect(), dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = r.width; H = r.height;
      if (!W || !H) return;
      canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const portrait = W / H < 1.1;
      const g = Math.round(clamp(W * .055, 22, 40)), icon = Math.round(clamp(W * .06, 26, 36)), box = SOLID.dodecahedron.box;
      L = {
        g, icon, portrait,
        slot: { x: W - g - icon * box.w / 2, y: g + icon * box.h / 2, size: icon },   // the small dodecahedron: top right, g from both edges
        cx: portrait ? W * .5 : W * .25,
        u: portrait ? Math.min(W * .42, H * .24) : Math.min(W * .27, H * .5),
        lw: 1.5,
      };
      // Landscape: keep the whole drawing (Νόησις row included, .88 u below centre) above the lede.
      L.cy = portrait ? H * .76 : clamp(Math.min(H * .5, ledeY - 12 - L.u * .88), L.u * .6, H * .5);
      root.style.setProperty('--g', `${g}px`);
      root.style.setProperty('--cap-top', `${g + icon + Math.round(g * .5)}px`);
      root.style.setProperty('--cap-left', `${portrait ? g : Math.round(W * .48)}px`);   // mirrored: solid left by the equation, text right
    }

    function solid(kind, x, y, size, { alpha = 1, progress = 1, width = L.lw } = {}) {
      const s = SOLID[kind], drawn = clamp(progress) * s.edges.length;
      if (alpha <= 0 || drawn <= 0) return;
      ctx.strokeStyle = C.gold; ctx.lineWidth = width; ctx.lineCap = 'round';
      s.edges.forEach(([a, b], i) => {
        if (i >= drawn) return;
        const f = Math.min(1, drawn - i), A = s.pts[a], B = s.pts[b];
        ctx.globalAlpha = alpha * (s.front[i] ? 1 : .23);
        ctx.beginPath();
        ctx.moveTo(x + A[0] * size, y + A[1] * size);
        ctx.lineTo(x + (A[0] + (B[0] - A[0]) * f) * size, y + (A[1] + (B[1] - A[1]) * f) * size);
        ctx.stroke();
      });
      ctx.globalAlpha = 1;
    }
    function line(x1, y1, x2, y2, alpha) {
      if (alpha <= 0) return;
      ctx.globalAlpha = alpha; ctx.strokeStyle = C.gold; ctx.lineWidth = 1; ctx.lineCap = 'round';
      ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke(); ctx.globalAlpha = 1;
    }
    function glow(x, y, r, alpha) {
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, C.gold); g.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.globalAlpha = .07 * alpha; ctx.fillStyle = g; ctx.fillRect(x - r, y - r, r * 2, r * 2); ctx.globalAlpha = 1;
    }
    function stageArt(i, lt, alpha) {   // scenes 1..5 are the stages
      if (i < 1 || i > 5) return;
      const kind = KINDS[i - 1], base = L.cy + L.u * .62;
      glow(L.cx, L.cy, L.u * .95, alpha);
      if (kind !== 'dodecahedron') {
        line(L.cx - L.u * .75 * ease(lt / 1.4), base, L.cx + L.u * .75 * ease(lt / 1.4), base, .35 * alpha);
        solid(kind, L.cx, L.cy, L.u, { alpha, progress: ease((lt - .3) / 2.2), width: L.lw + .2 });
        return;
      }
      const top = L.cy - L.u * .12;   // Νόησις: the four others gather beneath the large dodecahedron
      solid('dodecahedron', L.cx, top, L.u * .8, { alpha, progress: ease((lt - .3) / 2.4), width: L.lw + .2 });
      KINDS.slice(0, 4).forEach((k, j) => {
        const a = ease((lt - 2.4 - j * .3) / 1.1), x = L.cx + (j - 1.5) * L.u * .34, y = base + L.u * .2;
        line(x, y - L.u * .07, L.cx, top + L.u * .42, .3 * a * alpha);
        solid(k, x, y, L.u * .12, { alpha: a * alpha, width: L.lw - .3 });
      });
    }

    function sceneAt(time) { let i = STARTS.length - 1; for (let k = 0; k < STARTS.length; k++) if (time < STARTS[k] + DURATIONS[k]) { i = k; break; } return [i, time - STARTS[i]]; }
    function draw() {
      if (!L || !W) return;
      const [i, lt] = sceneAt(t), prev = (i + DURATIONS.length - 1) % DURATIONS.length;
      ctx.clearRect(0, 0, W, H);
      if (i !== current) {
        current = i;
        capEls.forEach((c, k) => c.classList.toggle('on', k === i));
        if (i === 0 && lt < .1) capEls[0]?.classList.add('first'); else capEls[0]?.classList.remove('first');
      }
      stageArt(prev, DURATIONS[prev], 1 - ease(lt / .7));
      const slot = L.slot;
      if (i === 0) {
        const m = ease((lt - 3.6) / 2.2);
        const x = L.cx + (slot.x - L.cx) * m, y = L.cy + (slot.y - L.cy) * m, size = L.u + (slot.size - L.u) * m;
        glow(L.cx, L.cy, L.u * .95, 1 - m);
        solid('dodecahedron', x, y, size, { progress: ease((lt - .2) / 2.6), width: L.lw + .2 * (1 - m) });
      } else if (i <= 5) {
        stageArt(i, lt, 1);
        solid('dodecahedron', slot.x, slot.y, slot.size, { width: 1.25 });
      } else {
        // Finale: the five in one row across the window, under the short closing words.
        const size = L.u * .24, gap = Math.min(L.u * .4, (W - 2 * L.g - size) / 4.2), rowX = W * .5, rowY = L.portrait ? L.cy : Math.min(H * .74, Math.max(L.cy, ledeY - 12 - size * 1.1));
        const base = rowY + size * .9, xs = [0, 1, 2, 3, 4].map(j => rowX + (j - 2) * gap);
        line(rowX - gap * 2.6 * ease(lt / 1.6), base, rowX + gap * 2.6 * ease(lt / 1.6), base, .35);
        KINDS.slice(0, 4).forEach((k, j) => solid(k, xs[j], rowY, size, { alpha: ease((lt - .4 - j * .35) / .9), progress: ease((lt - .4 - j * .35) / 1.4) }));
        const m = ease((lt - 1.6) / 1.8);
        solid('dodecahedron', slot.x + (xs[4] - slot.x) * m, slot.y + (rowY - slot.y) * m, slot.size + (size - slot.size) * m, { width: 1.25 + .25 * m });
      }
      bar.style.width = `${(t / TOTAL * 100).toFixed(2)}%`;
    }
    function tick(now) {
      if (!root.isConnected) { stop(); return; }
      const dt = Math.min(.05, (now - last) / 1000); last = now;
      if (playing && visible) { t = (t + dt) % TOTAL; draw(); }
      raf = requestAnimationFrame(tick);
    }
    function toggle() { playing = !playing; last = performance.now(); root.setAttribute('aria-pressed', String(!playing)); }
    root.addEventListener('click', toggle);
    root.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); } });

    const resize = new ResizeObserver(() => { place(); layout(); draw(); });
    resize.observe(root); resize.observe(host);
    const seen = new IntersectionObserver(entries => { visible = entries.some(e => e.isIntersecting); last = performance.now(); });
    seen.observe(root);
    const langWatch = new MutationObserver(setLanguage);
    langWatch.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
    function stop() { cancelAnimationFrame(raf); resize.disconnect(); seen.disconnect(); langWatch.disconnect(); }

    place(); layout(); setLanguage();
    if (reduce) { t = STARTS[1] + 4.6; playing = false; root.setAttribute('aria-pressed', 'true'); }
    draw();
    raf = requestAnimationFrame(tick);
    return { host, root, stop };
  }

  let mounted = null, pending = 0;
  const route = () => (location.hash.replace(/^#/, '') || '/').split('?')[0];
  function check() {
    pending = 0;
    if (mounted && !mounted.root.isConnected) { mounted.stop(); mounted = null; }
    if (route() !== ROUTE) return;
    const math = document.querySelector('.math-flush'), section = math && math.closest('section'), host = section && section.firstElementChild;
    if (!host || (mounted && mounted.host === host)) return;
    if (mounted) { mounted.stop(); mounted.root.remove(); }
    mounted = mount(host);
  }
  const later = () => { if (!pending) pending = setTimeout(check, 120); };
  window.addEventListener('hashchange', later);
  const start = () => { new MutationObserver(later).observe(document.body, { childList: true, subtree: true }); check(); };
  if (document.body) start(); else document.addEventListener('DOMContentLoaded', start);
})();
