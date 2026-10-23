/*! © 2026 ΑΝΩ ΠΟΛΙΤΕΙΑ · ipoliteia.gr · SPDX-License-Identifier: AGPL-3.0-or-later · Κείμενα: CC BY-NC-ND 4.0 · Όνομα και Δωδεκάπλευρο: με επιφύλαξη παντός δικαιώματος · βλ. /COPYRIGHT.md */
import * as THREE from 'three';

// Simplified models of landmark architecture outside the centre, on the real OSM
// outline and from published descriptions (not surveys). Each replaces the plain
// OSM block with the same id when its detailed area loads. x east, z north.

function frameOf(points) {
  const c = points.reduce((s, p) => ({ x: s.x + p.x / points.length, z: s.z + p.z / points.length }), { x: 0, z: 0 });
  let xx = 0, xz = 0, zz = 0;
  for (const p of points) { const dx = p.x - c.x, dz = p.z - c.z; xx += dx * dx; xz += dx * dz; zz += dz * dz; }
  const angle = .5 * Math.atan2(2 * xz, xx - zz), ux = Math.cos(angle), uz = Math.sin(angle);
  let length = 0, width = 0;
  for (const p of points) { const dx = p.x - c.x, dz = p.z - c.z; length = Math.max(length, Math.abs(dx * ux + dz * uz)); width = Math.max(width, Math.abs(-dx * uz + dz * ux)); }
  return { c, ux, uz, length, width, angle };
}
const at = (f, u, v) => ({ x: f.c.x + f.ux * u - f.uz * v, z: f.c.z + f.uz * u + f.ux * v });

function prism(points, bottom, top, material) {
  const shape = new THREE.Shape(points.map(p => new THREE.Vector2(p.x, p.z)));
  const g = new THREE.ExtrudeGeometry(shape, { depth: top - bottom, bevelEnabled: false });
  g.rotateX(-Math.PI / 2); g.translate(0, bottom, 0);   // shape (x, z north) -> world (x, height, -z), winding kept
  const mesh = new THREE.Mesh(g, material); mesh.castShadow = mesh.receiveShadow = true;
  return mesh;
}
function box(f, u, v, y, length, width, height, material) {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(length, height, width), material);
  const p = at(f, u, v);
  mesh.position.set(p.x, y + height / 2, -p.z);
  mesh.rotation.y = f.angle;
  mesh.castShadow = mesh.receiveShadow = true;
  return mesh;
}

const STONE = new THREE.MeshLambertMaterial({ color: 0xe6e2d8 });
const CONCRETE = new THREE.MeshLambertMaterial({ color: 0xcfc8b8 });
const GLASS = new THREE.MeshStandardMaterial({ color: 0x9fc4d1, roughness: .12, metalness: .35, transparent: true, opacity: .62 });
const CANOPY_TOP = new THREE.MeshStandardMaterial({ color: 0x4f5c66, roughness: .4, metalness: .45 });
const CANOPY_UNDER = new THREE.MeshLambertMaterial({ color: 0xf2f2ee });
const STEEL = new THREE.MeshLambertMaterial({ color: 0xdedfdc });

// Stavros Niarchos Foundation Cultural Center (Renzo Piano, 2016): the Opera and Library
// under a green roof, the glass "Lighthouse" on top, and the 100 x 100 m solar canopy
// on slender columns. Heights approximate: building ~24 m, canopy underside ~42 m.
function snfcc(group, building, heightAt) {
  const f = frameOf(building.points), ground = Math.min(...building.points.map(p => heightAt(p.x, p.z)));
  const roof = ground + 24, canopyY = ground + 42;
  group.add(prism(building.points, ground - 1, roof, STONE));
  const end = f.length * .32;   // the Lighthouse and the canopy sit over the northern end of the roof
  group.add(box(f, end, 0, roof, 34, 16, 10, GLASS));
  const canopy = new THREE.Group();
  canopy.add(box(f, end, 0, canopyY, 100, 100, .9, CANOPY_UNDER));
  canopy.add(box(f, end, 0, canopyY + .9, 98, 98, .5, CANOPY_TOP));
  for (let i = 0; i < 6; i++) for (let j = 0; j < 5; j++) {
    const u = end - 40 + i * 16, v = -32 + j * 16;
    const p = at(f, u, v), column = new THREE.Mesh(new THREE.CylinderGeometry(.35, .35, canopyY - roof, 8), STEEL);
    column.position.set(p.x, (roof + canopyY) / 2, -p.z);
    canopy.add(column);
  }
  canopy.traverse(o => { o.castShadow = true; });
  group.add(canopy);
}

// Ellinikon East Terminal (Eero Saarinen, 1969): a long two-storey hall under a deep
// concrete roof slab that overhangs the walls, carried by piers that rise above it along
// the long facades. Heights approximate; the outline is OSM's.
function eastTerminal(group, building, heightAt) {
  const pts = building.points, ground = Math.min(...pts.map(p => heightAt(p.x, p.z)));
  const c = pts.reduce((s, p) => ({ x: s.x + p.x / pts.length, z: s.z + p.z / pts.length }), { x: 0, z: 0 });
  group.add(prism(pts, ground - 1, ground + 9, CONCRETE));
  const grown = pts.map(p => { const d = Math.hypot(p.x - c.x, p.z - c.z) || 1; return { x: p.x + (p.x - c.x) / d * 3, z: p.z + (p.z - c.z) / d * 3 }; });
  group.add(prism(grown, ground + 9, ground + 11.2, CONCRETE));
  let area = 0;
  for (let i = 0; i < pts.length; i++) { const a = pts[i], b = pts[(i + 1) % pts.length]; area += a.x * b.z - b.x * a.z; }
  const out = area >= 0 ? 1 : -1;
  for (let i = 0; i < pts.length; i++) {
    const a = pts[i], b = pts[(i + 1) % pts.length], length = Math.hypot(b.x - a.x, b.z - a.z);
    if (length < 30) continue;   // piers line the long facades only
    const ux = (b.x - a.x) / length, uz = (b.z - a.z) / length, nx = uz * out, nz = -ux * out;
    for (let k = 1; k < Math.floor(length / 16); k++) {
      const x = a.x + ux * k * 16 + nx * 1.6, z = a.z + uz * k * 16 + nz * 1.6;
      const pier = new THREE.Mesh(new THREE.BoxGeometry(2.2, 14.5, 1.4), CONCRETE);
      pier.position.set(x, ground + 7.25, -z);
      pier.rotation.y = Math.atan2(uz, ux);
      pier.castShadow = true;
      group.add(pier);
    }
  }
}

const MODELS = { 'way/376880079': snfcc, 'way/191315051': eastTerminal };

/** Build the models for buildings in `data`; their ids join `skip` so the plain block is not drawn too. */
export function buildAreaLandmarks({ group, data, heightAt, skip }) {
  let built = 0;
  for (const building of data.buildings) {
    const make = MODELS[String(building.id).split('#')[0]];
    if (!make) continue;
    try { make(group, building, heightAt); skip.add(building.id); built++; } catch (error) { console.warn('Landmark model skipped:', building.id, error); }
  }
  return built;
}
