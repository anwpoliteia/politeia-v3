/*! © 2026 ΑΝΩ ΠΟΛΙΤΕΙΑ · ipoliteia.gr · SPDX-License-Identifier: AGPL-3.0-or-later · Κείμενα: CC BY-NC-ND 4.0 · Όνομα και Δωδεκάπλευρο: με επιφύλαξη παντός δικαιώματος · βλ. /COPYRIGHT.md */
import * as THREE from 'three';
import { mergeGeometries } from './vendor/BufferGeometryUtils.js';

// Athens' major monuments as simplified architectural models. Each one is fitted
// to its real OpenStreetMap footprint (position, size, orientation) and uses
// published dimensions; the mapped block it replaces stays in the data for
// collisions and picking. Readable reconstructions of today's state, not surveys.
// Local frame: x along the footprint's long axis, y up, z to the right of x.

const COLORS = {
  marble: '#e9e1cd', aged: '#d8caa9', shade: '#7f7566', tile: '#ad6448', lead: '#8a9693',
  plaster: '#f2eee4', seatShade: '#d6cdb9', ochre: '#e0cba3', brick: '#b98b6b', sand: '#d2be95', seat: '#e6dfcf', roofPale: '#ddd6c8',
};
export const MUSEUM_TINT = '#ebe2cb';
const UP = new THREE.Vector3(0, 1, 0);

// ---------------------------------------------------------------- geometry kit
function createKit() {
  const parts = new Map();
  const frame = new THREE.Matrix4();
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), p = new THREE.Vector3(), s = new THREE.Vector3(1, 1, 1);
  function place(x, y, z, rot = 0) { return m.compose(p.set(x, y, z), q.setFromAxisAngle(UP, rot), s); }
  function push(color, geometry, local) {
    let g = geometry.index ? geometry.toNonIndexed() : geometry;
    if (g !== geometry) geometry.dispose();
    if (g.attributes.uv) g.deleteAttribute('uv');
    if (g.attributes.uv2) g.deleteAttribute('uv2');
    if (!g.attributes.normal) g.computeVertexNormals();
    g.clearGroups();
    if (local) g.applyMatrix4(local);
    g.applyMatrix4(frame);
    if (!parts.has(color)) parts.set(color, []);
    parts.get(color).push(g);
  }
  const kit = {
    setFrame(f, base) {
      frame.makeBasis(new THREE.Vector3(f.ux, 0, -f.uz), UP, new THREE.Vector3(f.uz, 0, f.ux)).setPosition(f.cx, base, -f.cz);
    },
    box(c, x, y, z, sx, sy, sz, rot = 0) { push(c, new THREE.BoxGeometry(sx, sy, sz), place(x, y + sy / 2, z, rot)); },
    cyl(c, x, y, z, rb, rt, h, seg = 16, rot = 0) { push(c, new THREE.CylinderGeometry(rt, rb, h, seg), place(x, y + h / 2, z, rot)); },
    dome(c, x, y, z, r, seg = 24) { push(c, new THREE.SphereGeometry(r, seg, Math.max(6, seg / 3), 0, Math.PI * 2, 0, Math.PI / 2), place(x, y, z)); },
    // Vertical prism from a local outline [[x, z], ...].
    prism(c, points, y0, y1) {
      const shape = new THREE.Shape(points.map(([x, z]) => new THREE.Vector2(x, -z)));
      const g = new THREE.ExtrudeGeometry(shape, { depth: Math.max(.01, y1 - y0), bevelEnabled: false, curveSegments: 1 });
      g.rotateX(-Math.PI / 2); g.translate(0, y0, 0);
      push(c, g);
    },
    // Triangular roof or pediment, ridge along local x (rot turns it).
    gable(c, x, z, length, width, y, rise, rot = 0) {
      const shape = new THREE.Shape([new THREE.Vector2(-width / 2, 0), new THREE.Vector2(width / 2, 0), new THREE.Vector2(0, rise)]);
      const g = new THREE.ExtrudeGeometry(shape, { depth: length, bevelEnabled: false });
      g.translate(0, 0, -length / 2); g.rotateY(Math.PI / 2);
      push(c, g, place(x, y, z, rot));
    },
    // Ring sector (theatre and stadium seating), angles in local x/z.
    sector(c, cx, cz, r0, r1, a0, a1, y0, y1, seg = 20) {
      const pts = [];
      for (let i = 0; i <= seg; i++) { const t = a0 + (a1 - a0) * i / seg; pts.push([cx + r1 * Math.cos(t), cz + r1 * Math.sin(t)]); }
      for (let i = seg; i >= 0; i--) { const t = a0 + (a1 - a0) * i / seg; pts.push([cx + r0 * Math.cos(t), cz + r0 * Math.sin(t)]); }
      kit.prism(c, pts, y0, y1);
    },
    raw(c, geometry, matrix) { push(c, geometry, matrix); },
    column(c, x, y, z, r, h, order = 'doric') {
      const cap = order === 'corinthian' ? r * 2 : order === 'ionic' ? r * 1.1 : r * .8;
      kit.cyl(c, x, y, z, r, r * (order === 'doric' ? .8 : .86), h - cap, 10);
      if (order === 'doric') {
        kit.cyl(c, x, y + h - cap, z, r * .8, r * 1.18, cap * .55, 10);
        kit.box(c, x, y + h - cap * .45, z, r * 2.45, cap * .45, r * 2.45);
      } else if (order === 'ionic') {
        kit.box(c, x, y + h - cap, z, r * 2.9, cap * .6, r * 1.6);
        kit.box(c, x, y + h - cap * .4, z, r * 2.4, cap * .4, r * 2.4);
      } else {
        kit.cyl(c, x, y + h - cap, z, r * .86, r * 1.35, cap * .78, 10);
        kit.box(c, x, y + h - cap * .22, z, r * 2.8, cap * .22, r * 2.8);
      }
    },
    meshes() {
      const result = [];
      for (const [color, list] of parts) {
        const geometry = mergeGeometries(list);
        list.forEach(g => g.dispose());
        const metal = color === COLORS.lead;
        const mesh = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({ color, roughness: metal ? .55 : .86, metalness: metal ? .3 : .02 }));
        mesh.castShadow = mesh.receiveShadow = true;
        result.push(mesh);
      }
      return result;
    },
  };
  return kit;
}

// ---------------------------------------------------------------- footprint frames
function centroid(points) {
  return { x: points.reduce((s, p) => s + p.x, 0) / points.length, z: points.reduce((s, p) => s + p.z, 0) / points.length };
}
function insidePolygon(point, polygon) {
  let result = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const a = polygon[i], b = polygon[j];
    if ((a.z > point.z) !== (b.z > point.z) && point.x < (b.x - a.x) * (point.z - a.z) / (b.z - a.z) + a.x) result = !result;
  }
  return result;
}
// Smallest enclosing rectangle over the outline's edge directions.
function fitFrame(points, orient) {
  let best = null;
  for (let i = 0; i < points.length; i++) {
    const a = points[i], b = points[(i + 1) % points.length], length = Math.hypot(b.x - a.x, b.z - a.z);
    if (length < .3) continue;
    const ux = (b.x - a.x) / length, uz = (b.z - a.z) / length;
    let s0 = Infinity, s1 = -Infinity, t0 = Infinity, t1 = -Infinity;
    for (const p of points) {
      const s = p.x * ux + p.z * uz, t = -p.x * uz + p.z * ux;
      s0 = Math.min(s0, s); s1 = Math.max(s1, s); t0 = Math.min(t0, t); t1 = Math.max(t1, t);
    }
    const area = (s1 - s0) * (t1 - t0);
    if (!best || area < best.area) best = { area, ux, uz, s0, s1, t0, t1 };
  }
  const { ux, uz, s0, s1, t0, t1 } = best, sm = (s0 + s1) / 2, tm = (t0 + t1) / 2;
  let frame = { cx: sm * ux - tm * uz, cz: sm * uz + tm * ux, ux, uz, length: s1 - s0, width: t1 - t0 };
  if (frame.width > frame.length) frame = { ...frame, ux: -uz, uz: ux, length: frame.width, width: frame.length };
  return orientFrame(frame, orient);
}
function orientFrame(frame, orient) {
  if (orient === 'fixed') return { ...frame, ux: 1, uz: 0 };
  let flip = false;
  if (orient === 'east') flip = frame.ux < 0;
  else if (orient === 'north') flip = frame.uz < 0;
  else if (orient === 'south') flip = frame.uz > 0;
  else if (Array.isArray(orient)) flip = (orient[0] - frame.cx) * frame.ux + (orient[1] - frame.cz) * frame.uz < 0;
  return flip ? { ...frame, ux: -frame.ux, uz: -frame.uz } : frame;
}
function frameFrom({ cx, cz, bearing, length, width }) {
  const r = bearing * Math.PI / 180;
  return { cx, cz, ux: Math.sin(r), uz: Math.cos(r), length, width };
}
function insideFrame(point, f, margin = 1) {
  const dx = point.x - f.cx, dz = point.z - f.cz;
  return Math.abs(dx * f.ux + dz * f.uz) <= f.length / 2 + margin && Math.abs(dx * f.uz - dz * f.ux) <= f.width / 2 + margin;
}

// ---------------------------------------------------------------- templates
function temple(o) {
  return (k, f) => {
    const c = o.color || COLORS.marble;
    let y = 0;
    for (let i = 0; i < o.steps; i++) { k.box(c, 0, y, 0, f.length - 2 * i * o.tread, o.stepH, f.width - 2 * i * o.tread); y += o.stepH; }
    const ls = f.length - 2 * (o.steps - 1) * o.tread, ws = f.width - 2 * (o.steps - 1) * o.tread;
    const xE = ls / 2 - o.r * 1.35, zE = ws / 2 - o.r * 1.35, d = o.r * 2.3, top = y + o.colH, yc = top + o.entab;
    for (let i = 0; i < o.front; i++) {
      const z = -zE + 2 * zE * i / (o.front - 1);
      k.column(c, -xE, y, z, o.r, o.colH, o.order); k.column(c, xE, y, z, o.r, o.colH, o.order);
    }
    for (let i = 1; i < o.side - 1; i++) {
      const x = -xE + 2 * xE * i / (o.side - 1);
      k.column(c, x, y, -zE, o.r, o.colH, o.order); k.column(c, x, y, zE, o.r, o.colH, o.order);
    }
    for (const z of [-zE, zE]) k.box(c, 0, top, z, 2 * xE + d, o.entab, d);
    for (const x of [-xE, xE]) k.box(c, x, top, 0, d, o.entab, 2 * zE + d);
    for (const z of [-zE, zE]) k.box(c, 0, yc - .32, z, 2 * xE + d + .5, .32, d + .5);
    // Cella: full walls under a roof, or the low ruined walls of the Parthenon.
    const cx = o.side > 0 ? xE - o.r * 4.6 : xE - o.r * 5, cz = o.side > 0 ? zE - o.r * 3.1 : zE - o.r * .2;
    if (o.cella === 'full') k.box(c, 0, y, 0, 2 * cx, o.colH, 2 * cz);
    if (o.cella === 'ruin') {
      k.box(c, -cx, y, 0, 1.3, o.colH, 2 * cz);                    // west cross wall stands high
      for (const z of [-cz, cz]) k.box(c, 0, y, z, 2 * cx, 1.6, 1.2);
      k.box(c, cx, y, 0, 1.2, 1.6, 2 * cz);
    }
    for (let i = 0; i < (o.porch || 0); i++) {
      const z = o.porch > 1 ? -cz + 1 + (2 * cz - 2) * i / (o.porch - 1) : 0;
      for (const x of [-(cx + o.r * 1.9), cx + o.r * 1.9]) k.column(c, x, y, z, o.r * .9, o.colH * .93, o.order);
    }
    if (o.roof) k.gable(o.roofColor || c, 0, 0, 2 * xE + d + .6, 2 * zE + d + .8, yc, o.rise);
    else for (const x of [-xE, xE]) k.gable(c, x, 0, d * .55, 2 * zE + d + .4, yc, o.rise);
  };
}

function erechtheion(k, f) {
  const c = COLORS.marble, xW = -f.length / 2, zN = -f.width / 2, zc = zN + 12.2, x0 = xW + 3.2, x1 = x0 + 20.3;
  k.box(c, (x0 + x1) / 2, 0, zc, x1 - x0 + 1, 1.5, 12.6);                      // platform on the higher ground
  k.box(c, (x0 + x1) / 2, 1.5, zc, x1 - x0, 8.4, 11.6);                        // cella
  for (let i = 0; i < 6; i++) k.column(c, x1 + 2.1, 2.1, zc - 5 + i * 2, .34, 6.6, 'ionic');   // east porch
  k.box(c, x1 + 1.1, 1.5, zc, 2.6, .6, 11.6);
  k.box(c, x1 + 1.3, 8.7, zc, 2.6, 1.2, 11.6);
  k.gable(c, (x0 + x1 + 2.6) / 2, zc, x1 - x0 + 2.8, 12.2, 9.9, 1.6);
  const nx = xW + 5.35, nz = zN + 3.2;                                         // north porch, 3 m lower
  k.box(c, nx, 0, nz, 10.7, .4, 6.4);
  for (let i = 0; i < 4; i++) k.column(c, xW + .9 + i * 2.95, .4, zN + .7, .41, 7.6, 'ionic');
  for (const x of [xW + .9, xW + 9.75]) k.column(c, x, .4, zN + 3.7, .41, 7.6, 'ionic');
  k.box(c, nx, 8, nz, 10.9, 1.3, 6.6);
  k.gable(c, nx, nz, 6.8, 11.1, 9.3, 1.3, Math.PI / 2);
  const kx = xW + 6.75, kz = zc + 5.8 + 1.85;                                  // porch of the Caryatids
  k.box(c, kx, 1.5, kz, 5.7, 1.8, 3.7);
  for (let i = 0; i < 4; i++) k.column(c, kx - 2.25 + i * 1.5, 3.3, kz + 1.35, .28, 2.3, 'ionic');
  for (const x of [kx - 2.25, kx + 2.25]) k.column(c, x, 3.3, kz - .15, .28, 2.3, 'ionic');
  k.box(c, kx, 5.6, kz, 6, .8, 4);
}

function propylaea(k, f) {
  const c = COLORS.marble, zW = -f.width / 2, zE = zW + 24;
  k.box(c, 0, 0, zW + 1, 19.2, .9, 2);                                         // west steps
  for (let i = 0; i < 6; i++) k.column(c, -7.6 + i * 3.04, .9, zW + 1.6, .78, 8.8, 'doric');
  for (const x of [-9.1, 9.1]) k.box(c, x, .9, (zW + 4 + zE) / 2, 1, 11, zE - zW - 4);
  for (const [x, w] of [[-7.6, 1.8], [-4.6, 1.6], [4.6, 1.6], [7.6, 1.8]]) k.box(c, x, .9, zW + 13, w, 11, 1.2);   // door wall piers
  k.box(c, 0, 8, zW + 13, 16.6, 3.9, 1.2);
  for (const x of [-2.9, 2.9]) for (const z of [5.5, 8, 10.5]) k.column(c, x, .9, zW + z, .52, 10.3, 'ionic');
  k.box(c, 0, .9, zE - 2.4, 19.2, 1.5, 4.8);
  for (let i = 0; i < 6; i++) k.column(c, -7.6 + i * 3.04, 2.4, zE - 1, .76, 8.5, 'doric');
  k.box(c, 0, 10.9, (zW + zE) / 2, 19.8, 1.3, zE - zW + .8);
  k.gable(c, 0, (zW + zE) / 2, zE - zW + .8, 19.8, 12.2, 2.2, Math.PI / 2);
  // North wing (Pinakotheke) and the smaller south wing, porticoes facing the approach.
  k.box(c, 17.8, 0, zW + 5.5, 9, 7, 9.5);
  for (let i = 0; i < 3; i++) k.column(c, 12, 0, zW + 2 + i * 3.4, .5, 5.8, 'doric');
  k.gable(c, 16.6, zW + 5.5, 11.6, 10.2, 6.6, 1.4);
  k.box(c, -15.6, 0, zW + 3.6, 6, 6.2, 7);
  for (let i = 0; i < 3; i++) k.column(c, -12, 0, zW + 1 + i * 2.6, .45, 5.2, 'doric');
  k.gable(c, -14.6, zW + 3.6, 8, 7.4, 6, 1.2);
}

function theatre({ stageWall, rows, depth, rise, spread = 0 }) {
  return (k, f) => {
    const zs = f.width / 2 - 2, zc = zs - (stageWall ? 9 : 8);
    const r0 = stageWall ? 10.5 : 10.8, R = Math.min(f.length / 2 - 1, zc + f.width / 2 - 1, r0 + rows * depth);
    const dr = (R - r0) / rows, a0 = Math.PI - spread, a1 = 2 * Math.PI + spread;
    k.sector(COLORS.sand, 0, zc, 0, r0 - .3, a0, a1, 0, Math.max(0, k.ground(0, zc)) + .12, 22);   // orchestra
    // Each row stands on the slope it was cut into: never below the ground under it.
    let height = 0;
    for (let i = 0; i < rows; i++) {
      const r = r0 + (i + .5) * dr, under = Math.max(...[0, .2, .4, .6, .8, 1].map(s => k.ground(r * Math.cos(a0 + (a1 - a0) * s), zc + r * Math.sin(a0 + (a1 - a0) * s))));
      height = Math.max((i + 1) * rise, under + .3, height + .12);
      k.sector(i % 2 ? COLORS.seatShade : COLORS.seat, 0, zc, r0 + i * dr, r0 + (i + 1) * dr, a0, a1, 0, height, 22);
    }
    if (!stageWall) {
      k.box(COLORS.aged, 0, 0, zs - 1.2, Math.min(36, f.length - 6), 1, 4.6);
      k.box(COLORS.aged, 0, 0, zs - 4, 16, 1.4, .8);                                      // bema of Phaedrus
      return;
    }
    const wall = Math.min(f.length - 4, 76), bays = Math.floor(wall / 4.2), bay = wall / bays, c = COLORS.aged;
    k.box(c, 0, 0, zs, wall, 3, 3);
    for (const [y0, y1] of [[3, 11], [12, 18.5], [19.5, 25.5]]) {
      for (let i = 0; i <= bays; i++) k.box(c, -wall / 2 + i * bay, y0, zs, 1.5, y1 - y0, 3);
      for (let i = 0; i < bays; i++) k.box(c, -wall / 2 + (i + .5) * bay, y1 - 1.3, zs, bay - 1.4, 1.3, 3);
      k.box(c, 0, y1, zs, wall + .4, y1 === 25.5 ? 2.5 : 1, 3.2);
    }
    for (const x of [-(wall / 2 + 3.5), wall / 2 + 3.5]) k.box(c, x, 0, zs - 4, 7, 20, 11);
    k.box(COLORS.marble, 0, 0, zs - 5.4, wall - 2, 1.5, 4.8);                               // stage
  };
}

function stadium(k, f) {
  const a = 17.5, b = Math.min(f.width / 2 - 2, 53), bands = 24, rise = .74, dr = (b - a) / bands;
  const xOpen = -f.length / 2 + 6, x0 = f.length / 2 - b - 2, run = x0 - xOpen;
  let h = 0;
  for (let i = 0; i < bands; i++) {
    const r0 = a + i * dr, r1 = r0 + dr, r = r0 + dr / 2, samples = [];
    for (let s = 0; s <= 6; s++) samples.push(k.ground(xOpen + run * s / 6, r), k.ground(xOpen + run * s / 6, -r), k.ground(x0 + r * Math.cos(-Math.PI / 2 + Math.PI * s / 6), r * Math.sin(-Math.PI / 2 + Math.PI * s / 6)));
    h = Math.max((i + 1) * rise, Math.max(...samples) + .3, h + .25);
    const tone = i % 2 ? COLORS.seatShade : COLORS.seat;                     // alternate rows read as tiers
    for (const side of [-1, 1]) k.box(tone, (xOpen + x0) / 2, 0, side * (r0 + r1) / 2, run, h, dr);
    k.sector(tone, x0, 0, r0, r1, -Math.PI / 2, Math.PI / 2, 0, h, 24);
  }
  const track = [];
  for (let i = 0; i <= 24; i++) { const t = -Math.PI / 2 + Math.PI * i / 24; track.push([x0 + (a - 1.5) * Math.cos(t), (a - 1.5) * Math.sin(t)]); }
  track.push([xOpen, a - 1.5], [xOpen, -(a - 1.5)]);
  const arena = Math.max(0, ...[0, .2, .4, .6, .8, 1].flatMap(s => [-.8, 0, .8].map(w => k.ground(xOpen + (x0 + a - xOpen) * s, w * (a - 1.5)))));
  k.prism(COLORS.sand, track, 0, arena + .12);
  for (const side of [-1, 1]) k.box(COLORS.marble, xOpen + 2, 0, side * (b + 2), 4, 6.5, 4);     // entrance pylons
}

function hadrianArch(k) {
  const c = COLORS.aged, w = 13.5, d = 2.3, half = 3.25, spring = 7.6, top = spring + half + .9;
  for (const side of [-1, 1]) k.box(c, side * (half + (w / 2 - half) / 2), 0, 0, w / 2 - half, spring, d);
  for (let i = 0; i < 10; i++) {
    const y0 = spring + i * (top - spring) / 10, y1 = y0 + (top - spring) / 10, ym = (y0 + y1) / 2 - spring;
    const open = ym < half ? Math.sqrt(half * half - ym * ym) : 0;
    for (const side of [-1, 1]) k.box(c, side * (open + (w / 2 - open) / 2), y0, 0, w / 2 - open, y1 - y0, d);
  }
  k.box(c, 0, top, 0, w + .4, 1.1, d + .4);
  k.box(c, 0, top + 1.1, 0, 10.2, .5, 2.1);
  for (const x of [-4.6, -1.7, 1.7, 4.6]) k.box(c, x, top + 1.6, 0, .8, 3.9, 1.4);
  k.box(c, 0, top + 5.5, 0, 10.2, .65, 2.1);
  k.gable(c, 0, 0, 2.1, 3.6, top + 6.15, .9, Math.PI / 2);
}

function towerOfWinds(k) {
  const c = COLORS.marble, R = 4.28, turn = Math.PI / 8;
  k.cyl(c, 0, 0, 0, R + .4, R + .4, .5, 8, turn);
  k.cyl(c, 0, .5, 0, R, R, 11.6, 8, turn);
  k.cyl(c, 0, 12.1, 0, R + .25, R + .25, .5, 8, turn);
  k.cyl(c, 0, 12.6, 0, R + .2, .5, 1.5, 8, turn);
  k.cyl(c, 0, 14.1, 0, .45, .3, .5, 8);
  for (const angle of [Math.PI / 4, -Math.PI / 4]) {                          // north-east and north-west porches
    const dx = Math.sin(angle), dz = -Math.cos(angle), px = dx * (R + 1.3), pz = dz * (R + 1.3);
    for (const side of [-1, 1]) k.column(c, px - dz * side * 1.3, .5, pz + dx * side * 1.3, .22, 4.2, 'corinthian');
    k.box(c, px, 4.7, pz, 3.4, .5, 2.6, -angle);
  }
  k.cyl(c, 0, 0, R + 1.6, 2.2, 2.2, 6.8, 20);                                  // southern water tank
}

function lysicrates(k) {
  const c = COLORS.marble;
  k.box(c, 0, 0, 0, 2.95, 3.5, 2.95);
  k.box(c, 0, 3.5, 0, 3.2, .35, 3.2);
  k.cyl(c, 0, 3.85, 0, 1.45, 1.45, .45, 24);
  k.cyl(c, 0, 4.3, 0, 1.25, 1.25, 3.5, 24);
  for (let i = 0; i < 6; i++) k.column(c, Math.cos(i * Math.PI / 3) * 1.3, 4.3, Math.sin(i * Math.PI / 3) * 1.3, .2, 3.5, 'corinthian');
  k.cyl(c, 0, 7.8, 0, 1.55, 1.55, .75, 24);
  k.cyl(c, 0, 8.55, 0, 1.55, .3, .35, 24);
  k.cyl(c, 0, 8.9, 0, .25, .45, .9, 12);
}

function philopappos(k) {
  const c = COLORS.aged, R = 10;
  k.box(c, -1.5, 0, 0, 5, 2.2, 11);
  for (let i = -2; i <= 2; i++) {
    const phi = i * .22, x = R * (1 - Math.cos(phi)), z = R * Math.sin(phi);
    k.box(c, x - .6, 2.2, z, 1.2, 9.3, 2.25, phi);
    k.box(c, x - .5, 11.5, z, 1.6, .5, 2.3, phi);
    if (Math.abs(i) <= 1) k.box(COLORS.shade, x + .03, 6.6, z, .06, 3.6, 1.2, phi);          // niches
    k.box(c, x - .45, 2.2, z, 1.2, 3.2, 2.3, phi);                                           // relief band
  }
}

function stoa(k, f) {
  const c = COLORS.marble, L = f.length, zF = -f.width / 2 + .9, zB = f.width / 2;
  k.box(c, 0, 0, 0, L, .5, f.width);
  k.box(c, 0, .5, zB - 3.6, L - .2, 9.9, 7.2);
  for (const x of [-(L / 2 - .5), L / 2 - .5]) k.box(c, x, .5, 0, 1, 9.9, f.width - .4);
  k.box(c, 0, 5, (zF + zB - 7.2) / 2, L - 1, .6, zB - 7.2 - zF + .6);
  const n = Math.max(12, Math.round((L - 3) / 2.55));
  for (let i = 0; i < n; i++) {
    const x = -L / 2 + 1.6 + i * (L - 3.2) / (n - 1);
    k.column(c, x, .5, zF, .42, 4.5, 'doric');
    k.column(c, x, 5.9, zF, .3, 3.6, 'ionic');
    if (i % 2 === 0) k.column(c, x, .5, zF + 5.4, .36, 4.5, 'ionic');
  }
  k.box(c, 0, 5, zF, L - 1, .9, 1);
  k.box(c, 0, 5.9, zF, L - 1, 1.05, .25);
  k.box(c, 0, 9.5, zF, L - .6, .9, 1.1);
  k.gable(COLORS.tile, 0, 0, L + .4, f.width + .6, 10.4, 2);
}

function church(k, f) {
  const c = COLORS.brick, t = COLORS.tile, xC = 2;
  k.box(c, xC, 0, 0, 9, 7, 9);
  k.gable(t, xC, 0, 9.6, 4.4, 7, 1.6);
  k.gable(t, xC, 0, 9.6, 4.4, 7, 1.6, Math.PI / 2);
  k.cyl(c, xC, 7, 0, 1.9, 1.9, 2.8, 8, Math.PI / 8);
  k.dome(t, xC, 9.8, 0, 2.05, 16);
  k.cyl(c, xC + 4.5, 0, 0, 2.2, 2.2, 5.5, 16);
  k.cyl(t, xC + 4.5, 5.5, 0, 2.35, .6, .9, 16);
  k.box(c, -5, 0, 0, 5, 5.6, 9);
  k.box(t, -5, 5.6, 0, 5.3, .45, 9.4);
  k.box(c, -f.length / 2 + .7, 0, 0, 1.4, 4.4, 8);
}

function chapel(k) {
  const c = COLORS.plaster;
  k.box(c, .5, 0, 0, 7.5, 5, 5.2);
  k.gable(COLORS.roofPale, .5, 0, 7.9, 5.6, 5, 1.3);
  k.cyl(c, 1.5, 5.6, 0, 1.45, 1.45, 1.5, 8, Math.PI / 8);
  k.dome(c, 1.5, 7.1, 0, 1.5, 16);
  k.cyl(c, 4.25, 0, 0, 1.6, 1.6, 4.2, 16);
  k.box(c, -4.2, 0, -1.2, 2, 8.4, 2);
  k.cyl(c, -4.2, 8.4, -1.2, 1.4, 0, 1.6, 4, Math.PI / 4);
}

function mosque(k, f) {
  const hall = Math.min(f.width - .4, f.length - 4.2, 14), xH = -f.length / 2 + hall / 2, porch = f.length / 2 - (xH + hall / 2);
  k.box(COLORS.ochre, xH, 0, 0, hall, 9, hall);
  k.box(COLORS.aged, xH, 9, 0, hall + .4, .4, hall + .4);
  k.cyl(COLORS.ochre, xH, 9.4, 0, hall / 2 - .1, hall / 2 - .1, 1.4, 8, Math.PI / 8);
  k.dome(COLORS.lead, xH, 10.8, 0, hall / 2 - .3, 28);
  const xp = xH + hall / 2 + porch / 2;
  k.box(COLORS.aged, xp, 0, 0, porch, .4, hall);
  for (let i = 0; i < 4; i++) k.column(COLORS.aged, xH + hall / 2 + porch - .4, .4, -hall / 2 + 1 + i * (hall - 2) / 3, .3, 4.4, 'doric');
  k.box(COLORS.ochre, xp, 4.8, 0, porch + .2, .8, hall + .2);
  for (let i = -1; i <= 1; i++) k.dome(COLORS.lead, xp, 5.6, i * hall / 3, Math.min(1.6, porch / 2.4), 16);
}

function gateway(k, f) {
  const c = COLORS.aged, n = 4, r = .55, h = 8, span = f.length - 2 * r - .6;
  k.box(c, 0, 0, 0, f.length, .5, Math.max(2.4, f.width));
  for (let i = 0; i < n; i++) k.column(c, -span / 2 + i * span / (n - 1), .5, 0, r, h, 'doric');
  k.box(c, 0, h + .5, 0, f.length, 1.6, 1.6);
  k.gable(c, 0, 0, 1.6, f.length, h + 2.1, 1.4, Math.PI / 2);
}

function pedestal(k) {
  k.box(COLORS.aged, 0, 0, 0, 3.8, 1, 3.4);
  k.box(COLORS.aged, 0, 1, 0, 3.4, 7.4, 3);
  k.box(COLORS.aged, 0, 8.4, 0, 3.8, .5, 3.4);
}

function olympieion(k, f) {
  const c = COLORS.marble, L = f.length, W = f.width, m = 1.6, step = 5.6;
  k.box(COLORS.aged, 0, 0, 0, L + 2.4, .6, W + 2.4);
  k.box(COLORS.aged, 0, .6, 0, L + 1.2, .6, W + 1.2);
  k.box(COLORS.aged, 0, 1.2, 0, L, .4, W);
  // Dipteral plan: triple rows at the ends first, then the double side rows (no duplicates).
  const spots = [], add = (x, z) => { if (!spots.some(([a, b]) => Math.hypot(a - x, b - z) < 2)) spots.push([x, z]); };
  for (let j = 0; j < 8; j++) {
    const z = -W / 2 + m + j * (W - 2 * m) / 7;
    for (const x of [L / 2 - m, L / 2 - m - step, L / 2 - m - 2 * step, -(L / 2 - m), -(L / 2 - m - step), -(L / 2 - m - 2 * step)]) add(x, z);
  }
  for (let i = 0; i < 20; i++) {
    const x = -L / 2 + m + i * (L - 2 * m) / 19;
    for (const z of [W / 2 - m, W / 2 - m - step, -(W / 2 - m), -(W / 2 - m - step)]) add(x, z);
  }
  // Today: the south-east group of 13, two to the south-west, one fallen (1852).
  const standing = spots.filter(([x, z]) => x > L / 2 - m - 2 * step - 12 && z > W / 2 - m - 2 * step - 3)
    .sort((a, b) => (b[0] + b[1]) - (a[0] + a[1])).slice(0, 13);
  const southRow = spots.filter(([, z]) => Math.abs(z - (W / 2 - m)) < .1).sort((a, b) => a[0] - b[0]);
  standing.push(southRow[6], southRow[7]);
  for (const [x, z] of standing) k.column(c, x, 1.6, z, .85, 17.25, 'corinthian');
  for (let i = 0; i < standing.length; i++) for (let j = i + 1; j < standing.length; j++) {
    const [ax, az] = standing[i], [bx, bz] = standing[j], length = Math.hypot(bx - ax, bz - az);
    if (length > 6.4 || i >= 13 || j >= 13) continue;
    k.box(c, (ax + bx) / 2, 18.85, (az + bz) / 2, length + 1.6, 1.4, 1.5, Math.atan2(bx - ax, bz - az) + Math.PI / 2);
  }
  const [fx, fz] = southRow[8], drum = new THREE.Matrix4();
  for (let i = 0; i < 9; i++) {
    const g = new THREE.CylinderGeometry(.85, .85, 1.6, 16);
    k.raw(c, g, drum.makeRotationZ(Math.PI / 2).setPosition(fx - 3 - i * 1.75, 2.45, fz - 2.5 + (i % 2) * .4));
  }
}

function foundation(k, f, source) {
  k.prism(COLORS.aged, source.map(p => [p.x, -p.z]), 0, .9);
}

// ---------------------------------------------------------------- catalogue
const doric = { order: 'doric' };
const CATALOG = [
  { id: 'way/384709197', name: 'Παρθενώνας', orient: 'east', top: 17.5, build: temple({ ...doric, steps: 3, stepH: .55, tread: .7, front: 8, side: 17, r: .95, colH: 10.43, entab: 3.29, rise: 3.4, roof: false, cella: 'ruin', porch: 6 }) },
  { id: 'relation/3363599', name: 'Ηφαιστείο', orient: 'east', top: 8.3, build: temple({ ...doric, steps: 3, stepH: .3, tread: .15, front: 6, side: 13, r: .51, colH: 5.71, entab: .65, rise: 1.04, roof: true, roofColor: COLORS.aged, cella: 'full', porch: 2 }) },
  { id: 'relation/12352554', name: 'Ναός Αθηνάς Νίκης', orient: 'east', top: 6.4, build: temple({ order: 'ionic', steps: 3, stepH: .25, tread: .18, front: 4, side: 0, r: .27, colH: 4.05, entab: .9, rise: .65, roof: true, cella: 'full' }) },
  { id: 'way/910010334', name: 'Ερέχθειο', orient: 'east', top: 11.5, build: erechtheion },
  { id: 'relation/12352555/7', name: 'Προπύλαια', orient: 'north', top: 14.4, build: propylaea },
  { id: 'relation/13249184', name: 'Ωδείο Ηρώδου Αττικού', orient: 'east', top: 28, terrain: true, build: theatre({ stageWall: true, rows: 28, depth: 1.03, rise: .44 }) },
  { id: 'way/694700578', name: 'Θέατρο του Διονύσου', orient: 'east', top: 7.6, terrain: true, alsoHide: ['way/1482573221'], build: theatre({ stageWall: false, rows: 20, depth: .8, rise: .38, spread: .12 }) },
  { id: 'relation/19023846', name: 'Παναθηναϊκό Στάδιο', orient: 'south', top: .2, open: true, terrain: true, build: stadium },
  { id: 'way/175107932', name: 'Πύλη του Αδριανού', orient: 'east', top: 18.5, build: hadrianArch },
  { id: 'way/976244069', name: 'Αέρηδες', orient: 'fixed', top: 14.6, build: towerOfWinds },
  { id: 'way/157180174', name: 'Μνημείο του Λυσικράτη', orient: 'fixed', top: 9.8, build: lysicrates },
  { id: 'way/442128059', name: 'Μνημείο Φιλοπάππου', orient: [-735.6, -389.2], top: 12, build: philopappos },
  { id: 'way/975219801', name: 'Στοά του Αττάλου', orient: 'north', top: 12.4, alsoHide: ['way/975219802', 'way/975219799', 'way/975219971'], build: stoa },
  { id: 'way/771404754', name: 'Παναγία Καπνικαρέα', orient: 'east', top: 11.9, build: church },
  { id: 'way/391814751', name: 'Άγιος Γεώργιος Λυκαβηττού', orient: 'east', top: 10, build: chapel },
  { id: 'way/729674900', name: 'Τζαμί Τζισταράκη', orient: [-1788, 1108], top: 16.4, build: mosque },
  { id: 'way/208068229', name: 'Φετιχιέ Τζαμί', orient: [-1740, 944], top: 17, build: mosque },
  // The gate's columns are also mapped as separate 1 m² parts with no height (drawn 12 m tall).
  { id: 'way/815455437', name: 'Πύλη της Αρχηγέτιδος Αθηνάς', orient: 'east', top: 11.5, alsoHide: ['way/815455593', 'way/815455594', 'way/815455595', 'way/815455596'], build: gateway },
  { id: 'way/426887028', name: 'Μνημείο του Αγρίππα', orient: 'east', top: 8.9, build: pedestal },
  { frame: { cx: -161.9, cz: -634, bearing: 87.7, length: 107.75, width: 41.11 }, name: 'Ναός του Ολυμπίου Διός', top: 20.3, build: olympieion },
  ...['relation/12352551', 'way/146815833', 'way/146815835', 'way/910010357', 'way/985610978', 'way/145674492']
    .map(id => ({ id, name: 'Θεμέλια', orient: 'east', top: .9, only: true, build: foundation })),
];

/** Decide which mapped blocks the models replace, and which buildings are museums. */
export function planMonuments(data) {
  const byId = new Map(data.buildings.map(b => [b.id, b]));
  const hidden = new Set(), plans = [], tint = new Map(), heights = new Map();
  const centres = new Map(data.buildings.filter(b => b.points?.length).map(b => [b, centroid(b.points)]));
  for (const entry of CATALOG) {
    const source = entry.id ? byId.get(entry.id) : null;
    if (entry.id && !(source?.points?.length >= 3)) continue;               // not in this extract
    const frame = entry.frame ? frameFrom(entry.frame) : fitFrame(source.points, entry.orient);
    const covered = entry.only ? [source] : [...centres].filter(([b, c]) => b === source || (source ? insidePolygon(c, source.points) : insideFrame(c, frame))).map(([b]) => b);
    for (const id of entry.alsoHide || []) if (byId.has(id)) covered.push(byId.get(id));
    covered.forEach(b => hidden.add(b.id));
    plans.push({ ...entry, frame, covered, footprint: source?.points });
  }
  const museums = [...(data.landmarks || [])].filter(l => l.kind === 'museum');
  for (const b of data.buildings) {
    if (!b.points?.length || hidden.has(b.id) || b.color) continue;
    if (b.kind === 'museum' || museums.some(l => Math.abs(l.x - centres.get(b).x) < 80 && Math.abs(l.z - centres.get(b).z) < 80 && insidePolygon(l, b.points))) tint.set(b.id, MUSEUM_TINT);
  }
  // The Acropolis rock and the Lycabettus summit carry no tall modern buildings: unmapped heights there are drawn low.
  for (const [b, c] of centres) {
    if (b.heightSource !== 'default-inferred' || hidden.has(b.id)) continue;
    if (onAcropolis(c)) heights.set(b.id, 4.5);
    else if (Math.hypot(c.x - 737, c.z - 773) < 70) heights.set(b.id, 5);
  }
  return { hidden, plans, tint, heights };
}

/** Build every planned model on the relief; replaced blocks keep picking at the model's height. */
export function buildMonuments({ scene, plans, heightAt }) {
  const group = new THREE.Group(); group.name = 'Athens monuments (simplified models on mapped footprints)';
  const kit = createKit();
  for (const plan of plans) {
    const outline = plan.footprint || cornersOf(plan.frame, 1.2);
    const ground = outline.map(p => heightAt(p.x, p.z)), low = Math.min(...ground);
    const high = Math.max(...ground, heightAt(plan.frame.cx, plan.frame.cz));
    const base = plan.terrain ? low : high, f = plan.only ? { cx: 0, cz: 0, ux: 1, uz: 0 } : plan.frame;
    const local = p => [(p.x - f.cx) * f.ux + (p.z - f.cz) * f.uz, (p.x - f.cx) * f.uz - (p.z - f.cz) * f.ux];
    kit.setFrame(f, base);
    kit.ground = (a, b) => heightAt(f.cx + a * f.ux + b * f.uz, f.cz + a * f.uz - b * f.ux) - base;
    if (!plan.terrain && high - low > .05) kit.prism(COLORS.aged, outline.map(local), low - high - .4, .02);
    try { plan.build(kit, plan.frame, plan.footprint); } catch (error) { console.warn('Monument skipped:', plan.name, error); continue; }
    for (const b of plan.covered) { b.groundBase = base; b.roofTop = base + (plan.open ? .2 : plan.top); }
  }
  kit.meshes().forEach(mesh => group.add(mesh));
  group.userData = { count: plans.length, source: 'OpenStreetMap footprints; published dimensions; simplified reconstruction' };
  scene.add(group);
  return group;
}
/** Destinations for models missing from the OSM landmark list (e.g. the Panathenaic Stadium). */
export function monumentLandmarks(plans, landmarks) {
  const known = new Set((landmarks || []).map(l => l.name));
  // A mapped landmark on the model's centre is the same place under another name (Ηφαιστείο / Ναός του Ηφαίστου).
  const sameSpot = p => (landmarks || []).some(l => Math.hypot(l.x - p.frame.cx, l.z - p.frame.cz) < 5);
  return plans.filter(p => !p.only && !known.has(p.name) && !sameSpot(p))
    .map(p => ({ id: `monument/${p.name}`, name: p.name, nameEn: p.name, kind: 'attraction', x: p.frame.cx, z: p.frame.cz, positionSource: 'monument model on its mapped footprint' }));
}
function onAcropolis({ x, z }) {
  const dx = x + 750, dz = z + 372, r = 80 * Math.PI / 180;
  const a = dx * Math.sin(r) + dz * Math.cos(r), b = dx * Math.cos(r) - dz * Math.sin(r);
  return (a / 165) ** 2 + (b / 75) ** 2 < 1;
}
function cornersOf(f, margin = 0) {
  const hl = f.length / 2 + margin, hw = f.width / 2 + margin, vx = f.uz, vz = -f.ux;
  return [[hl, hw], [hl, -hw], [-hl, -hw], [-hl, hw]].map(([a, b]) => ({ x: f.cx + a * f.ux + b * vx, z: f.cz + a * f.uz + b * vz }));
}
