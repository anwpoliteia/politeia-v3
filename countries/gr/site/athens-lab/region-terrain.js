/*! © 2026 ΑΝΩ ΠΟΛΙΤΕΙΑ · ipoliteia.gr · SPDX-License-Identifier: AGPL-3.0-or-later · Κείμενα: CC BY-NC-ND 4.0 · Όνομα και Δωδεκάπλευρο: με επιφύλαξη παντός δικαιώματος · βλ. /COPYRIGHT.md */
import * as THREE from 'three';

// Relief of the wider region (Piraeus, central Athens, the coast to Vouliagmeni):
// a 30 m grid in the same local metres as athens.json (x east, z north), stored
// as int16 decimetres above sea level. The landscape mesh is coloured by height
// and slope only; land use beyond the detailed areas is not mapped here.

const LAND_EDGE_FADE = 1400;   // metres over which the region's cut edges slope into the sea
const SEA_FLOOR = -6;          // metres above sea level for the faded edges and beyond

export async function loadRegionTerrain(base) {
  const metaResponse = await fetch(`${base}region-terrain.json`, { cache: 'no-cache' });
  if (!metaResponse.ok) return null;
  const meta = await metaResponse.json();
  const { cols, rows, spacing, xMin, zMin } = meta;
  if (![cols, rows, spacing, xMin, zMin].every(Number.isFinite) || cols < 2 || rows < 2) return null;
  const response = await fetch(`${base}${meta.file}`, { cache: 'no-cache' });
  if (!response.ok) return null;
  const buffer = await response.arrayBuffer();
  if (buffer.byteLength !== cols * rows * 2) return null;
  const view = new DataView(buffer), heights = new Float32Array(cols * rows);
  for (let i = 0; i < heights.length; i++) heights[i] = view.getInt16(i * 2, true) / 10;
  return { ...meta, heights, xMax: xMin + (cols - 1) * spacing, zMax: zMin + (rows - 1) * spacing };
}

/** Metres above sea level; the region's cut edges ease down into the sea. */
export function regionHeight(t, x, z) {
  const gx = THREE.MathUtils.clamp((x - t.xMin) / t.spacing, 0, t.cols - 1.0001);
  const gz = THREE.MathUtils.clamp((z - t.zMin) / t.spacing, 0, t.rows - 1.0001);
  const c = Math.floor(gx), r = Math.floor(gz), fx = gx - c, fz = gz - r, i = r * t.cols + c, h = t.heights;
  const value = (h[i] * (1 - fx) + h[i + 1] * fx) * (1 - fz) + (h[i + t.cols] * (1 - fx) + h[i + t.cols + 1] * fx) * fz;
  const inset = Math.min(x - t.xMin, t.xMax - x, z - t.zMin, t.zMax - z);
  if (inset >= LAND_EDGE_FADE) return value;
  const k = THREE.MathUtils.smoothstep(inset, -LAND_EDGE_FADE * .25, LAND_EDGE_FADE);
  return SEA_FLOOR + (Math.max(value, SEA_FLOOR) - SEA_FLOOR) * k;
}

const LOW = new THREE.Color('#304345'), SAND = new THREE.Color('#9d9270'), SCRUB = new THREE.Color('#465a43');
const PINE = new THREE.Color('#3b5340'), ROCK = new THREE.Color('#7b7563'), SUMMIT = new THREE.Color('#8f8a78');

function noise(x, z) {
  const s = Math.sin(x * .0123 + z * .0071) * 43758.5453 + Math.sin(x * .0037 - z * .0109) * 12543.17;
  return s - Math.floor(s);
}

/**
 * The landscape: real relief at `spacing` metres, coloured by height and slope.
 * Inside `covered` rectangles (meshes with painted ground) it is lowered so the
 * detailed ground always wins.
 */
export function buildLandscape({ t, heightAt, base, covered = [], spacing = 50 }) {
  const cols = Math.floor((t.xMax - t.xMin) / spacing) + 1, rows = Math.floor((t.zMax - t.zMin) / spacing) + 1;
  const positions = new Float32Array(cols * rows * 3), colors = new Float32Array(cols * rows * 3);
  const sink = (x, z) => covered.some(r => x > r.minX + 4 && x < r.maxX - 4 && z > r.minZ + 4 && z < r.maxZ - 4) ? 2.5 : 0;
  const color = new THREE.Color();
  for (let r = 0, v = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++, v++) {
      const x = t.xMin + c * spacing, z = t.zMin + r * spacing, y = heightAt(x, z), e = y + base;
      // The sea floor sits well under the water plane, so the two never fight for depth far away.
      positions[v * 3] = x; positions[v * 3 + 1] = e < .8 ? -base - 4 : y - sink(x, z); positions[v * 3 + 2] = -z;
      const slope = Math.hypot(heightAt(x + 20, z) - heightAt(x - 20, z), heightAt(x, z + 20) - heightAt(x, z - 20)) / 40;
      // The basin floor is built-up city whatever its height; hillsides, mountains and the shore are not.
      color.copy(LOW);
      if (e < 6) color.lerp(SAND, THREE.MathUtils.clamp(1 - (e - 1.5) / 4.5, 0, 1) * .8);
      color.lerp(SCRUB, THREE.MathUtils.smoothstep(slope, .07, .2) * .9);
      color.lerp(PINE, THREE.MathUtils.smoothstep(e, 380, 560) * .6 * (1 - THREE.MathUtils.smoothstep(slope, .45, .7)));
      color.lerp(ROCK, THREE.MathUtils.smoothstep(slope, .3, .65) * .8);
      color.lerp(SUMMIT, THREE.MathUtils.smoothstep(e, 750, 980) * .6);
      color.multiplyScalar(.93 + noise(x, z) * .14);
      colors[v * 3] = color.r; colors[v * 3 + 1] = color.g; colors[v * 3 + 2] = color.b;
    }
  }
  const index = new Uint32Array((cols - 1) * (rows - 1) * 6);
  for (let r = 0, k = 0; r < rows - 1; r++) {
    for (let c = 0; c < cols - 1; c++) {
      const a = r * cols + c, b = a + 1, n = a + cols, ne = n + 1;
      index.set([a, b, n, b, ne, n], k); k += 6;
    }
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  geometry.setIndex(new THREE.BufferAttribute(index, 1));
  geometry.computeVertexNormals();
  const mesh = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({ vertexColors: true }));
  mesh.name = 'Region relief (Mapzen/EU-DEM/SRTM)';
  mesh.receiveShadow = true;
  return mesh;
}

/** The sea at 0 m: one wide plane; the relief draws the coastline where it crosses it. */
export function buildSea(base) {
  const sea = new THREE.Mesh(new THREE.PlaneGeometry(120000, 120000),
    new THREE.MeshStandardMaterial({ color: 0x2a5664, roughness: .32, metalness: .08 }));
  sea.name = 'Saronic Gulf (sea level)';
  sea.rotation.x = -Math.PI / 2;
  sea.position.y = -base + .35;
  sea.receiveShadow = true;
  return sea;
}

export { SEA_FLOOR };
