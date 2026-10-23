/*! © 2026 ΑΝΩ ΠΟΛΙΤΕΙΑ · ipoliteia.gr · SPDX-License-Identifier: AGPL-3.0-or-later · Κείμενα: CC BY-NC-ND 4.0 · Όνομα και Δωδεκάπλευρο: με επιφύλαξη παντός δικαιώματος · βλ. /COPYRIGHT.md */
import * as THREE from 'three';

// Simple blocks for every mapped building in the basin outside the detailed
// areas: real OSM outlines, OSM heights where tagged, labelled placeholders
// otherwise (see athens-data/blocks/blocks.json). Tiles of 2 km stream in
// around the view and are built a slice per frame, so the page never stalls.

const PALETTE = ['#d8cfb8', '#cbc6b6', '#e0d8c3', '#c2c3ba', '#d1c0a3', '#dbd6c6'];
const CLASS_COLOR = [null, '#a99c88', '#e9e1cc', '#aeb0aa'];
const BUILD_BUDGET_MS = 6;

function hash(n) {
  n = Math.imul(n ^ (n >>> 16), 2246822507); n = Math.imul(n ^ (n >>> 13), 3266489909);
  return (n ^ (n >>> 16)) >>> 0;
}

// Record (blocks.json format 2): varint(n << 2 | class), u8 height in half metres (255: then a
// varint in decimetres), then zigzag varint quarter-metre steps, the first from the tile centre.
function* buildTile(buffer, tile, heightAt) {
  const bytes = new Uint8Array(buffer), positions = [], colors = [], indices = [];
  const color = new THREE.Color();
  let offset = 0, count = 0, started = performance.now();
  const varint = () => {
    let value = 0, scale = 1, byte;
    do { byte = bytes[offset++]; value += (byte & 0x7f) * scale; scale *= 128; } while (byte & 0x80 && offset < bytes.length);
    return value;
  };
  const signed = () => { const v = varint(); return v % 2 ? -(v + 1) / 2 : v / 2; };
  while (offset < bytes.length) {
    const head = varint(), n = Math.floor(head / 4), cls = head % 4;
    const half = bytes[offset++], height = half < 255 ? half / 2 : varint() / 10;
    if (n < 3 || offset > bytes.length) break;
    const ring = [];
    let qx = 0, qz = 0;
    for (let i = 0; i < n; i++) { qx += signed(); qz += signed(); ring.push(new THREE.Vector2(tile.cx + qx / 4, tile.cz + qz / 4)); }
    let ground = Infinity;
    for (const p of ring) ground = Math.min(ground, heightAt(p.x, p.y));
    const triangles = THREE.ShapeUtils.triangulateShape(ring, []);
    if (triangles.length) {
      const first = positions.length / 3, shade = hash(tile.col * 92821 + tile.row * 6151 + count);
      color.set(CLASS_COLOR[cls] || PALETTE[shade % PALETTE.length]).multiplyScalar(.94 + (shade % 13) / 100);
      const r = Math.round(color.r * 255), g = Math.round(color.g * 255), b = Math.round(color.b * 255);
      for (const p of ring) { positions.push(p.x, ground - .8, -p.y); colors.push(r * .86, g * .86, b * .86); }
      for (const p of ring) { positions.push(p.x, ground + height, -p.y); colors.push(r, g, b); }
      // Outlines are counter-clockwise in x/z; with z negated for the world, walls face outward.
      for (let i = 0; i < n; i++) {
        const j = (i + 1) % n, a = first + i, bb = first + j, at = first + n + i, bt = first + n + j;
        indices.push(a, bb, bt, a, bt, at);
      }
      // Roofs face up when counter-clockwise in x/z (as in detail.js), whatever order the triangulator returns.
      for (const [a, b2, c] of triangles) {
        const p = ring[a], q = ring[b2], s = ring[c];
        const ccw = (q.x - p.x) * (s.y - p.y) - (q.y - p.y) * (s.x - p.x) >= 0;
        indices.push(first + n + a, first + n + (ccw ? b2 : c), first + n + (ccw ? c : b2));
      }
    }
    count++;
    if (performance.now() - started > BUILD_BUDGET_MS) { yield; started = performance.now(); }
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(Uint8Array.from(colors, Math.round), 3, true));
  geometry.setIndex(positions.length / 3 > 65535 ? new THREE.Uint32BufferAttribute(indices, 1) : new THREE.Uint16BufferAttribute(indices, 1));
  geometry.computeBoundingSphere();
  return { geometry, count };
}

export function createBlocks({ scene, index, base, heightAt }) {
  const group = new THREE.Group(); group.name = 'Basin buildings (simple OSM blocks)'; scene.add(group);
  const material = new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true });
  const tiles = index.tiles.map(t => ({ ...t, state: 'idle', mesh: null }));
  const queue = [];
  let building = null, inFlight = 0;
  async function fetchTile(tile) {
    tile.state = 'loading'; inFlight++;
    try {
      const response = await fetch(`${base}${tile.file}`);
      if (!response.ok) throw new Error(`${tile.file}: ${response.status}`);
      tile.buffer = await response.arrayBuffer();
      tile.state = 'queued'; queue.push(tile);
    } catch (error) {
      console.warn('Basin tile skipped:', error.message); tile.state = 'failed';
    } finally { inFlight--; }
  }
  function release(tile) {
    if (tile.mesh) { tile.mesh.geometry.dispose(); group.remove(tile.mesh); tile.mesh = null; }
    tile.buffer = null; tile.state = 'idle';
  }
  /** Stream tiles within `radius` of (x, z); build at most a few milliseconds per call. */
  function update(x, z, radius) {
    for (const tile of tiles) {
      const d = Math.hypot(tile.cx - x, tile.cz - z);
      if (d < radius && tile.state === 'idle' && inFlight < 3) fetchTile(tile);
      else if (d > radius * 1.35 + 1500 && (tile.state === 'ready' || tile.state === 'queued')) {
        const at = queue.indexOf(tile); if (at >= 0) queue.splice(at, 1);
        if (building?.tile === tile) building = null;
        release(tile);
      }
    }
    if (!building && queue.length) {
      queue.sort((a, b) => Math.hypot(a.cx - x, a.cz - z) - Math.hypot(b.cx - x, b.cz - z));
      const tile = queue.shift();
      building = { tile, steps: buildTile(tile.buffer, tile, heightAt) };
    }
    if (building) {
      const step = building.steps.next();
      if (step.done) {
        const { tile } = building, { geometry } = step.value;
        tile.mesh = new THREE.Mesh(geometry, material);
        tile.mesh.name = `Basin tile ${tile.col},${tile.row}`;
        group.add(tile.mesh);
        tile.buffer = null; tile.state = 'ready'; building = null;
      }
    }
  }
  const total = tiles.reduce((sum, t) => sum + t.count, 0);
  return { group, update, total, shown: () => tiles.filter(t => t.state === 'ready').reduce((s, t) => s + t.count, 0) };
}
