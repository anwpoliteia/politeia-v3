/*! © 2026 ΑΝΩ ΠΟΛΙΤΕΙΑ · ipoliteia.gr · SPDX-License-Identifier: AGPL-3.0-or-later · Κείμενα: CC BY-NC-ND 4.0 · Όνομα και Δωδεκάπλευρο: με επιφύλαξη παντός δικαιώματος · βλ. /COPYRIGHT.md */
import * as THREE from 'three';

// Stadiums of the region as parametric models on their OSM outlines
// (athens-data/stadiums.json, built by research/athens-region/convert-stadiums.py):
// tiered bowls rising from the pitch, stepped stands where only stands are mapped,
// domed indoor arenas, covered stands and OAKA's Calatrava arches where known.
// Simplified forms on real footprints, not surveys. Coordinates: x east, z north.

const ANGLES = 72, TIER = 1.15;
const CONCRETE = new THREE.Color('#bdb8ad'), WALL = new THREE.Color('#d2cdc2'), SEAT = new THREE.Color('#9aa3ab');
const PITCH = new THREE.Color('#4f7d50'), TRACK = new THREE.Color('#a9573f'), ROOF = new THREE.Color('#e7e8e6');

const decode = a => { const out = []; let x = 0, z = 0; for (let i = 0; i + 1 < (a?.length || 0); i += 2) { x += a[i]; z += a[i + 1]; out.push({ x: x / 10, z: z / 10 }); } return out; };
const centroid = pts => pts.reduce((c, p) => ({ x: c.x + p.x / pts.length, z: c.z + p.z / pts.length }), { x: 0, z: 0 });

/** Distance from c along (dx, dz) to the polygon edge: the farthest crossing, or the nearest. */
function reach(pts, c, dx, dz, farthest) {
  let best = farthest ? -Infinity : Infinity;
  for (let i = 0; i < pts.length; i++) {
    const a = pts[i], b = pts[(i + 1) % pts.length], ex = b.x - a.x, ez = b.z - a.z;
    const det = dx * -ez - dz * -ex;
    if (Math.abs(det) < 1e-9) continue;
    const t = ((a.x - c.x) * -ez - (a.z - c.z) * -ex) / det, s = (dx * (a.z - c.z) - dz * (a.x - c.x)) / det;
    if (t > 0 && s >= 0 && s <= 1) best = farthest ? Math.max(best, t) : Math.min(best, t);
  }
  return Number.isFinite(best) ? best : null;
}

/** Principal axis frame of a footprint: centre, unit axis (ux, uz), half-length and half-width. */
function frameOf(pts) {
  const c = centroid(pts);
  let xx = 0, xz = 0, zz = 0;
  for (const p of pts) { const dx = p.x - c.x, dz = p.z - c.z; xx += dx * dx; xz += dx * dz; zz += dz * dz; }
  const angle = .5 * Math.atan2(2 * xz, xx - zz), ux = Math.cos(angle), uz = Math.sin(angle);
  let length = 0, width = 0;
  for (const p of pts) { const dx = p.x - c.x, dz = p.z - c.z; length = Math.max(length, Math.abs(dx * ux + dz * uz)); width = Math.max(width, Math.abs(-dx * uz + dz * ux)); }
  return { c, ux, uz, length, width };
}

class Builder {
  constructor() { this.positions = []; this.colors = []; }
  tri(a, b, c, color, up) {
    // Orient each triangle by the side it should face (world: x, y, -z).
    const ab = [b[0] - a[0], b[1] - a[1], b[2] - a[2]], ac = [c[0] - a[0], c[1] - a[1], c[2] - a[2]];
    const n = [ab[1] * ac[2] - ab[2] * ac[1], ab[2] * ac[0] - ab[0] * ac[2], ab[0] * ac[1] - ab[1] * ac[0]];
    if (n[0] * up[0] + n[1] * up[1] + n[2] * up[2] < 0) [b, c] = [c, b];
    for (const p of [a, b, c]) { this.positions.push(p[0], p[1], p[2]); this.colors.push(color.r, color.g, color.b); }
  }
  quad(a, b, c, d, color, up) { this.tri(a, b, c, color, up); this.tri(a, c, d, color, up); }
  polygon(pts, y, color) {
    const shape = pts.map(p => new THREE.Vector2(p.x, p.z));
    for (const [i, j, k] of THREE.ShapeUtils.triangulateShape(shape, [])) this.tri([pts[i].x, y, -pts[i].z], [pts[j].x, y, -pts[j].z], [pts[k].x, y, -pts[k].z], color, [0, 1, 0]);
  }
  mesh(material) {
    if (!this.positions.length) return null;
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.positions, 3));
    g.setAttribute('color', new THREE.Float32BufferAttribute(this.colors, 3));
    g.computeVertexNormals(); g.computeBoundingSphere();
    const mesh = new THREE.Mesh(g, material); mesh.castShadow = mesh.receiveShadow = true;
    return mesh;
  }
}

function rings(s, heightAt) {
  const outer = decode(s.outer), inner = decode(s.inner), c = centroid(inner.length ? inner : outer);
  const out = [], ground = heightAt(c.x, c.z);
  for (let k = 0; k < ANGLES; k++) {
    const a = k / ANGLES * Math.PI * 2, dx = Math.cos(a), dz = Math.sin(a);
    const rOut = reach(outer, c, dx, dz, true) ?? 0;
    let rIn = inner.length ? reach(inner, c, dx, dz, false) : null;
    if (rIn == null || rIn > rOut - 3) rIn = Math.max(rOut * .62, rOut - Math.min(30, rOut * .38));
    out.push({ dx, dz, rIn, rOut });
  }
  return { c, ground, ring: out, outer, inner };
}

function bowl(b, s, heightAt) {
  const { c, ground, ring } = rings(s, heightAt), H = s.height, tiers = Math.max(3, Math.min(32, Math.round(H / TIER)));
  const seat = s.seat ? new THREE.Color(s.seat) : SEAT, seatDark = seat.clone().multiplyScalar(.8);
  const at = (k, r, y) => { const q = ring[k % ANGLES]; return [c.x + q.dx * r, y, -(c.z + q.dz * r)]; };
  const level = i => ground + 1.1 + (H - 1.1) * i / tiers;
  for (let k = 0; k < ANGLES; k++) {
    const q0 = ring[k], q1 = ring[(k + 1) % ANGLES], mid = ring[k];
    const inward = [-mid.dx, 0, mid.dz], outward = [mid.dx, 0, -mid.dz];
    const r = (q, i) => q.rIn + (q.rOut - q.rIn) * i / tiers;
    // front wall from the pitch to the first row
    b.quad(at(k, q0.rIn, ground), at(k + 1, q1.rIn, ground), at(k + 1, q1.rIn, level(0)), at(k, q0.rIn, level(0)), CONCRETE, inward);
    for (let i = 0; i < tiers; i++) {
      b.quad(at(k, r(q0, i), level(i)), at(k + 1, r(q1, i), level(i)), at(k + 1, r(q1, i), level(i + 1)), at(k, r(q0, i), level(i + 1)), CONCRETE, inward);
      b.quad(at(k, r(q0, i), level(i + 1)), at(k + 1, r(q1, i), level(i + 1)), at(k + 1, r(q1, i + 1), level(i + 1)), at(k, r(q0, i + 1), level(i + 1)), i % 2 ? seatDark : seat, [0, 1, 0]);
    }
    // outer wall down to the real ground
    const g0 = heightAt(c.x + q0.dx * q0.rOut, c.z + q0.dz * q0.rOut) - 1, g1 = heightAt(c.x + q1.dx * q1.rOut, c.z + q1.dz * q1.rOut) - 1;
    b.quad(at(k, q0.rOut, g0), at(k + 1, q1.rOut, g1), at(k + 1, q1.rOut, level(tiers)), at(k, q0.rOut, level(tiers)), WALL, outward);
  }
  return { c, ground, ring, top: level(tiers) };
}

function canopy(b, shape, height, onlyLongSides, frame) {
  const { c, ring } = shape;
  const at = (q, r, y) => [c.x + q.dx * r, y, -(c.z + q.dz * r)];
  for (let k = 0; k < ANGLES; k++) {
    const q0 = ring[k], q1 = ring[(k + 1) % ANGLES];
    if (onlyLongSides && Math.abs(-q0.dx * frame.uz + q0.dz * frame.ux) < .55) continue;
    const i0 = q0.rOut - (q0.rOut - q0.rIn) * .72, i1 = q1.rOut - (q1.rOut - q1.rIn) * .72;
    b.quad(at(q0, i0, height), at(q1, i1, height), at(q1, q1.rOut + 1, height + 1.5), at(q0, q0.rOut + 1, height + 1.5), ROOF, [0, 1, 0]);
    b.quad(at(q0, i0, height - .8), at(q1, i1, height - .8), at(q1, q1.rOut + 1, height + .7), at(q0, q0.rOut + 1, height + .7), ROOF, [0, -1, 0]);
  }
}

function indoor(b, s, heightAt) {
  const outer = decode(s.outer), c = centroid(outer), ground = Math.min(...outer.map(p => heightAt(p.x, p.z)));
  const top = ground + s.height, mean = outer.reduce((m, p) => m + Math.hypot(p.x - c.x, p.z - c.z), 0) / outer.length;
  const rise = Math.min(16, mean * .22), levels = 7;
  for (let i = 0; i < outer.length; i++) {
    const a = outer[i], d = outer[(i + 1) % outer.length], n = [d.z - a.z, 0, d.x - a.x];   // outward for a counter-clockwise ring (world z negated)
    b.quad([a.x, ground - 1, -a.z], [d.x, ground - 1, -d.z], [d.x, top, -d.z], [a.x, top, -a.z], WALL, n);
    for (let j = 0; j < levels; j++) {
      const f0 = j / levels, f1 = (j + 1) / levels, s0 = 1 - f0 * f0 * .98, s1 = 1 - f1 * f1 * .98;
      const y0 = top + rise * Math.sin(f0 * Math.PI / 2), y1 = top + rise * Math.sin(f1 * Math.PI / 2);
      const p = (q, k) => [c.x + (q.x - c.x) * k, 0, -(c.z + (q.z - c.z) * k)];
      const A = p(a, s0), D = p(d, s0), A1 = p(a, s1), D1 = p(d, s1);
      b.quad([A[0], y0, A[2]], [D[0], y0, D[2]], [D1[0], y1, D1[2]], [A1[0], y1, A1[2]], ROOF, [0, 1, 0]);
    }
  }
}

function stands(b, s, heightAt) {
  const pitch = decode(s.pitch), target = centroid(pitch.length ? pitch : decode(s.outer));
  for (const stand of s.stands || []) {
    const pts = decode(stand.outer), f = frameOf(pts);
    // Seats rise away from the pitch along whichever axis points at it.
    const tx = target.x - f.c.x, tz = target.z - f.c.z;
    const alongU = Math.abs(tx * f.ux + tz * f.uz) > Math.abs(-tx * f.uz + tz * f.ux);
    const ax = alongU ? f.ux : -f.uz, az = alongU ? f.uz : f.ux, depth = alongU ? f.length : f.width, span = alongU ? f.width : f.length;
    const facing = Math.sign(tx * ax + tz * az) || 1, bx = -az, bz = ax;
    const ground = Math.min(...pts.map(p => heightAt(p.x, p.z))), tiers = Math.max(2, Math.min(24, Math.round(stand.height / TIER)));
    const P = (d, w, y) => [f.c.x + ax * d * facing + bx * w, y, -(f.c.z + az * d * facing + bz * w)];
    for (let i = 0; i < tiers; i++) {
      const d0 = depth - 2 * depth * i / tiers, d1 = depth - 2 * depth * (i + 1) / tiers, y = ground + stand.height * (i + 1) / tiers;
      b.quad(P(d0, -span, y), P(d0, span, y), P(d1, span, y), P(d1, -span, y), i % 2 ? SEAT.clone().multiplyScalar(.85) : SEAT, [0, 1, 0]);
      b.quad(P(d0, -span, ground + stand.height * i / tiers), P(d0, span, ground + stand.height * i / tiers), P(d0, span, y), P(d0, -span, y), CONCRETE, [ax * facing, 0, -az * facing]);
    }
    b.quad(P(-depth, -span, ground - 1), P(-depth, span, ground - 1), P(-depth, span, ground + stand.height), P(-depth, -span, ground + stand.height), WALL, [-ax * facing, 0, az * facing]);
    for (const side of [-1, 1]) b.quad(P(depth, side * span, ground - 1), P(-depth, side * span, ground - 1), P(-depth, side * span, ground + stand.height), P(depth, side * span, ground + .5), WALL, [bx * side, 0, -bz * side]);
  }
}

function arches(group, s, shape, heightAt) {
  const f = frameOf(decode(s.outer)), material = new THREE.MeshStandardMaterial({ color: 0xf4f4f1, roughness: .35, metalness: .25 });
  for (const side of [-1, 1]) {
    const points = [];
    for (let i = 0; i <= 40; i++) {
      const u = (i / 40 * 2 - 1) * f.length * 1.08, v = side * (f.width + 16), x = f.c.x + f.ux * u - f.uz * v, z = f.c.z + f.uz * u + f.ux * v;
      points.push(new THREE.Vector3(x, shape.ground + 76 * (1 - (u / (f.length * 1.08)) ** 2), -z));
    }
    const tube = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points), 80, 2.4, 10), material);
    tube.castShadow = true;
    group.add(tube);
  }
  return f;
}

export function createStadiums({ scene, data, heightAt }) {
  const group = new THREE.Group(); group.name = 'Stadiums (parametric models on OSM outlines)'; scene.add(group);
  const solid = new Builder(), roofs = new Builder(), leaves = new Builder(), ground = new Builder();
  for (const s of data.stadiums || []) {
    try {
      if (s.type === 'indoor') { indoor(solid, s, heightAt); continue; }
      const pitch = decode(s.pitch), centre = centroid(pitch.length ? pitch : decode(s.inner).length ? decode(s.inner) : decode(s.outer));
      const level = heightAt(centre.x, centre.z) + .15;
      if (pitch.length > 2) {
        ground.polygon(pitch, level, s.track ? TRACK : PITCH);
        if (s.track) ground.polygon(pitch.map(p => ({ x: centre.x + (p.x - centre.x) * .78, z: centre.z + (p.z - centre.z) * .82 })), level + .05, PITCH);
      }
      if (s.type === 'stands') { stands(solid, s, heightAt); continue; }
      const shape = bowl(solid, s, heightAt);
      if (pitch.length < 3) ground.polygon(shape.ring.map(q => ({ x: shape.c.x + q.dx * q.rIn, z: shape.c.z + q.dz * q.rIn })), level, PITCH);
      if (s.roof === 'canopy') canopy(roofs, shape, shape.top + 4, false);
      if (s.roof === 'arches') canopy(leaves, shape, shape.top + 12, true, arches(group, s, shape, heightAt));
    } catch (error) { console.warn('Stadium skipped:', s.name, error); }
  }
  const add = (builder, material) => { const mesh = builder.mesh(material); if (mesh) group.add(mesh); return mesh; };
  add(solid, new THREE.MeshLambertMaterial({ vertexColors: true }));
  add(roofs, new THREE.MeshLambertMaterial({ vertexColors: true, side: THREE.DoubleSide }));
  add(leaves, new THREE.MeshLambertMaterial({ vertexColors: true, side: THREE.DoubleSide, transparent: true, opacity: .82 }));
  const pitchMesh = add(ground, new THREE.MeshLambertMaterial({ vertexColors: true, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 }));
  if (pitchMesh) pitchMesh.castShadow = false;
  // OSM buildings the models replace (detailed areas, the centre, and the basin converter skip them).
  const hidden = new Set((data.stadiums || []).flatMap(s => s.hide || []));
  return { group, hidden, count: (data.stadiums || []).length };
}

/**
 * Which mapped buildings a stadium model replaces: listed stands, and anything whose
 * centre lies inside a bowl or an indoor arena (roof leaves, stand pieces, kiosks).
 */
export function stadiumCover(data) {
  const ids = new Set((data?.stadiums || []).flatMap(s => s.hide || []));
  const areas = (data?.stadiums || []).filter(s => s.type !== 'stands').map(s => {
    const pts = decode(s.outer);
    const xs = pts.map(p => p.x), zs = pts.map(p => p.z);
    return { pts, minX: Math.min(...xs), maxX: Math.max(...xs), minZ: Math.min(...zs), maxZ: Math.max(...zs) };
  });
  const inside = (x, z, pts) => {
    let r = false;
    for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
      const a = pts[i], b = pts[j];
      if ((a.z > z) !== (b.z > z) && x < (b.x - a.x) * (z - a.z) / (b.z - a.z) + a.x) r = !r;
    }
    return r;
  };
  return {
    ids,
    covers(building, osmId) {
      if (ids.has(osmId)) return true;
      const c = centroid(building.points);
      return areas.some(a => c.x >= a.minX && c.x <= a.maxX && c.z >= a.minZ && c.z <= a.maxZ && inside(c.x, c.z, a.pts));
    },
  };
}

/** Named stadiums as destinations: name and the centre of the outline. */
export function stadiumPlaces(data) {
  return (data?.stadiums || []).filter(s => s.name).map(s => {
    const c = centroid(decode(s.outer));
    return { id: `stadium/${s.id}`, name: s.name, nameEn: '', kind: 'stadium', x: c.x, z: c.z, positionSource: 'stadium outline centre' };
  });
}
