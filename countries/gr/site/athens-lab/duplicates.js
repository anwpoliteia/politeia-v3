/*! © 2026 ΑΝΩ ΠΟΛΙΤΕΙΑ · ipoliteia.gr · SPDX-License-Identifier: AGPL-3.0-or-later · Κείμενα: CC BY-NC-ND 4.0 · Όνομα και Δωδεκάπλευρο: με επιφύλαξη παντός δικαιώματος · βλ. /COPYRIGHT.md */
// OpenStreetMap sometimes maps one volume more than once: an outline kept beside
// the building:parts that already describe it, the same part entered twice, or a
// smaller part sealed inside a larger one. Drawn together their walls and roofs
// share a plane and flicker, and the building reads as doubled. This finds the
// copies that add nothing visible, so the city mesh can skip them (they still
// collide and pick). Metric coordinates: x east, z north.

const TOL = .6;           // metres: a vertex this close to an edge counts as on it
const CELL = 60;          // grid cell for the neighbour search
const PART_COVER = .5;    // an outline is dropped once its parts cover this share of it

function area(points) {
  let sum = 0;
  for (let i = 0; i < points.length; i++) {
    const a = points[i], b = points[(i + 1) % points.length];
    sum += a.x * b.z - b.x * a.z;
  }
  return Math.abs(sum / 2);
}
function boxOf(points) {
  let minX = Infinity, minZ = Infinity, maxX = -Infinity, maxZ = -Infinity;
  for (const p of points) {
    minX = Math.min(minX, p.x); maxX = Math.max(maxX, p.x);
    minZ = Math.min(minZ, p.z); maxZ = Math.max(maxZ, p.z);
  }
  return { minX, minZ, maxX, maxZ };
}
function boxWithin(inner, outer) {
  return inner.minX >= outer.minX - TOL && inner.maxX <= outer.maxX + TOL
    && inner.minZ >= outer.minZ - TOL && inner.maxZ <= outer.maxZ + TOL;
}
function inside(p, points) {
  let result = false;
  for (let i = 0, j = points.length - 1; i < points.length; j = i++) {
    const a = points[i], b = points[j];
    if ((a.z > p.z) !== (b.z > p.z) && p.x < (b.x - a.x) * (p.z - a.z) / (b.z - a.z) + a.x) result = !result;
  }
  return result;
}
function nearEdge(p, points) {
  for (let i = 0; i < points.length; i++) {
    const a = points[i], b = points[(i + 1) % points.length];
    const dx = b.x - a.x, dz = b.z - a.z;
    const t = Math.max(0, Math.min(1, ((p.x - a.x) * dx + (p.z - a.z) * dz) / (dx * dx + dz * dz || 1)));
    if (Math.hypot(p.x - a.x - t * dx, p.z - a.z - t * dz) < TOL) return true;
  }
  return false;
}
// Vertices and edge midpoints, so a concave outer cannot hide an edge that leaves it.
function probes(points) {
  const out = [];
  for (let i = 0; i < points.length; i++) {
    const a = points[i], b = points[(i + 1) % points.length];
    out.push(a, { x: (a.x + b.x) / 2, z: (a.z + b.z) / 2 });
  }
  return out;
}
// Points strictly inside a polygon: a coarse grid plus the area centroid. The edge
// tolerance alone would let a thin strip lying just outside a wall pass as enclosed.
const interiorCache = new WeakMap();
function interior(points) {
  if (!interiorCache.has(points)) interiorCache.set(points, sampleInterior(points));
  return interiorCache.get(points);
}
function sampleInterior(points) {
  const box = boxOf(points), w = box.maxX - box.minX, d = box.maxZ - box.minZ;
  const step = Math.min(Math.max(Math.min(w, d) / 4, .25), Math.max(w, d) / 6 || .25);
  const out = [];
  for (let x = box.minX + step / 2; x < box.maxX; x += step)
    for (let z = box.minZ + step / 2; z < box.maxZ; z += step) if (inside({ x, z }, points)) out.push({ x, z });
  let cx = 0, cz = 0, a = 0;
  for (let i = 0; i < points.length; i++) {
    const p = points[i], q = points[(i + 1) % points.length], k = p.x * q.z - q.x * p.z;
    a += k; cx += (p.x + q.x) * k; cz += (p.z + q.z) * k;
  }
  if (Math.abs(a) > 1e-6) { const c = { x: cx / (3 * a), z: cz / (3 * a) }; if (inside(c, points)) out.push(c); }
  return out;
}
/** True when `inner` lies in the solid part of `outer` (not in a courtyard). */
function encloses(outer, inner) {
  const holes = (outer.holes || []).map(h => h.points);
  const solid = p => inside(p, outer.points) && !holes.some(h => inside(p, h));
  const samples = interior(inner.points);
  return samples.length > 0 && samples.every(solid)
    && probes(inner.points).every(p => nearEdge(p, outer.points) || (solid(p) || holes.some(h => nearEdge(p, h))));
}

/**
 * Ids of mapped blocks that duplicate another block's volume.
 * heightOf(b) must return the drawn height, so overrides (e.g. low zones) are respected.
 */
export function findDuplicateBlocks(buildings, { skip = new Set(), heightOf = b => Number(b.height) || 12 } = {}) {
  const live = buildings.filter(b => b.points?.length >= 3 && !skip.has(b.id));
  const info = new Map(live.map(b => {
    const h = heightOf(b), min = Math.max(0, Number(b.minHeight) || 0);
    // Walls stop under a pitched roof, so only that height safely contains another part.
    const walls = Math.min(h - (b.roof ? Number(b.roofHeight) || 0 : 0), ...(b.wallTops || [h]));
    return [b, { box: boxOf(b.points), area: area(b.points), min, top: h, walls }];
  }));
  const grid = new Map();
  for (const b of live) {
    const { box } = info.get(b);
    for (let gx = Math.floor(box.minX / CELL); gx <= Math.floor(box.maxX / CELL); gx++)
      for (let gz = Math.floor(box.minZ / CELL); gz <= Math.floor(box.maxZ / CELL); gz++) {
        const key = `${gx},${gz}`;
        if (!grid.has(key)) grid.set(key, []);
        grid.get(key).push(b);
      }
  }
  const drop = new Set(), partCover = new Map();
  for (const outer of live) {
    const o = info.get(outer), seen = new Set();
    for (let gx = Math.floor(o.box.minX / CELL); gx <= Math.floor(o.box.maxX / CELL); gx++)
      for (let gz = Math.floor(o.box.minZ / CELL); gz <= Math.floor(o.box.maxZ / CELL); gz++)
        for (const inner of grid.get(`${gx},${gz}`) || []) {
          if (inner === outer || seen.has(inner)) continue;
          seen.add(inner);
          const n = info.get(inner);
          if (n.area > o.area * 1.02 || !boxWithin(n.box, o.box) || !encloses(outer, inner)) continue;
          if (!outer.part && inner.part) {
            // Simple 3D Buildings: where parts are mapped, the outline itself is not drawn.
            partCover.set(outer, (partCover.get(outer) || 0) + n.area);
            continue;
          }
          if (outer.part !== inner.part) continue;
          // A twin (same footprint both ways) keeps whichever copy carries more detail.
          const twin = n.area > o.area * .98 && encloses(inner, outer);
          if (twin && (drop.has(outer.id) || detail(inner) > detail(outer))) continue;
          // Sealed inside the outer volume: invisible, except where faces coincide and flicker.
          if (n.min >= o.min - .05 && n.top <= o.walls + .05) drop.add(inner.id);
        }
  }
  for (const [outline, covered] of partCover) {
    if (covered >= info.get(outline).area * PART_COVER) drop.add(outline.id);
  }
  return drop;
}
function detail(b) {
  return (b.heightSource === 'osm-height' ? 4 : 0) + (b.roof ? 2 : 0) + (b.color ? 1 : 0) + (b.name ? 1 : 0);
}
