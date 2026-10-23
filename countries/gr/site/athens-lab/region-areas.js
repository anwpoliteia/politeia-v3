/*! © 2026 ΑΝΩ ΠΟΛΙΤΕΙΑ · ipoliteia.gr · SPDX-License-Identifier: AGPL-3.0-or-later · Κείμενα: CC BY-NC-ND 4.0 · Όνομα και Δωδεκάπλευρο: με επιφύλαξη παντός δικαιώματος · βλ. /COPYRIGHT.md */
import * as THREE from 'three';
import { buildDetailedBuildings, createCityDetail } from './detail.js?v=20261014-monuments-7';
import { findDuplicateBlocks } from './duplicates.js?v=20261014-doubles-2';
import { planMonuments } from './monuments.js?v=20261014-doubles-2';
import { buildAreaLandmarks } from './landmarks-region.js?v=20261014-region-12';

// Detailed areas beyond the central extract (Piraeus, Vouliagmeni, north and east
// of the centre): the same OSM building model as athens.json, in a compact file
// that is expanded here to the central schema and loaded only when needed.

const GROUND_COLOR = '#304345', PARK_COLOR = '#4d6f58', WATER_COLOR = '#3e6673', BEACH_COLOR = '#a39674', ROAD_COLOR = '#68746e';
const LOAD_DISTANCE = 2600;   // metres from the view target to an area's edge
const PATCH_SPACING = 15;

// Outlines are whole decimetres: the first point absolute, then steps from the previous one.
const points2 = a => { const out = []; let x = 0, z = 0; for (let i = 0; i + 1 < a.length; i += 2) { x += a[i]; z += a[i + 1]; out.push({ x: x / 10, z: z / 10 }); } return out; };
const HEIGHT_SOURCE = { h: 'osm-height', l: 'osm-levels-inferred', p: 'parent-height', d: 'default-inferred', u: 'published' };
const points3 = a => { const out = []; for (let i = 0; i + 2 < a.length; i += 3) out.push({ x: a[i], y: a[i + 1], z: a[i + 2] }); return out; };

/** Schema 4 (compact) to the central schema 2 used by detail.js. */
export function expandArea(json) {
  const buildings = json.buildings.map(b => ({
    id: b.id, name: b.n || '', nameEn: b.en || '', kind: b.k, height: b.h, heightSource: HEIGHT_SOURCE[b.hs] || b.hs, historic: !!b.hist,
    points: points2(b.p),
    ...(b.mh ? { minHeight: b.mh } : {}), ...(b.part ? { part: true } : {}),
    ...(b.holes ? { holes: b.holes.map(h => ({ points: points2(h) })) } : {}),
    ...(b.c ? { color: b.c } : {}), ...(b.rc ? { roofColor: b.rc } : {}),
    ...(b.rs ? { roofShape: b.rs, roofHeight: b.rh, roof: { points: points3(b.roof.p), triangles: b.roof.t } } : {}),
    ...(b.wt ? { wallTops: b.wt } : {}),
  }));
  const roads = json.roads.map(r => ({ id: r.id, name: r.n || '', nameEn: '', kind: r.k, width: r.w, bridge: !!r.br, points: points2(r.p) }));
  const parks = json.parks.map(p => ({ id: p.id, name: p.n || '', nameEn: '', kind: p.k, points: points2(p.p) }));
  return { ...json, buildings, roads, parks };
}

const toRect = r => ({ minX: r.xMin, maxX: r.xMax, minZ: r.zMin, maxZ: r.zMax });
const rectDistance = (r, x, z) => Math.hypot(Math.max(r.minX - x, 0, x - r.maxX), Math.max(r.minZ - z, 0, z - r.maxZ));

function paintPatch(rect, data, renderer) {
  const width = rect.maxX - rect.minX, depth = rect.maxZ - rect.minZ;
  const max = Math.min(renderer.capabilities.maxTextureSize, matchMedia('(max-width: 760px)').matches ? 2048 : 4096);
  const canvas = document.createElement('canvas');
  canvas.width = Math.max(256, Math.round(max * Math.min(1, width / depth)));
  canvas.height = Math.max(256, Math.round(max * Math.min(1, depth / width)));
  const ctx = canvas.getContext('2d'), sx = canvas.width / width, sz = canvas.height / depth, scale = (sx + sz) / 2;
  const trace = pts => { ctx.beginPath(); pts.forEach((p, i) => (i ? ctx.lineTo : ctx.moveTo).call(ctx, (p.x - rect.minX) * sx, (rect.maxZ - p.z) * sz)); };
  ctx.fillStyle = GROUND_COLOR; ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (const park of data.parks) {
    if (park.points.length < 3) continue;
    ctx.fillStyle = park.kind === 'water' ? WATER_COLOR : park.kind === 'beach' ? BEACH_COLOR : PARK_COLOR;
    trace(park.points); ctx.closePath(); ctx.fill();
  }
  ctx.strokeStyle = ROAD_COLOR; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
  for (const road of data.roads) {
    if (road.points.length < 2) continue;
    ctx.lineWidth = Math.max(2, Math.min(Number(road.width) || 7, 30)) * scale;
    trace(road.points); ctx.stroke();
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
  return texture;
}

function groundPatch(rect, texture, heightAt) {
  const cols = Math.ceil((rect.maxX - rect.minX) / PATCH_SPACING) + 1, rows = Math.ceil((rect.maxZ - rect.minZ) / PATCH_SPACING) + 1;
  const positions = new Float32Array(cols * rows * 3), uvs = new Float32Array(cols * rows * 2);
  for (let r = 0, v = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++, v++) {
      const x = Math.min(rect.minX + c * PATCH_SPACING, rect.maxX), z = Math.min(rect.minZ + r * PATCH_SPACING, rect.maxZ);
      positions.set([x, heightAt(x, z), -z], v * 3);
      uvs.set([(x - rect.minX) / (rect.maxX - rect.minX), (z - rect.minZ) / (rect.maxZ - rect.minZ)], v * 2);
    }
  }
  const index = new Uint32Array((cols - 1) * (rows - 1) * 6);
  for (let r = 0, k = 0; r < rows - 1; r++) {
    for (let c = 0; c < cols - 1; c++) { const a = r * cols + c, n = a + cols; index.set([a, a + 1, n, a + 1, n + 1, n], k); k += 6; }
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
  geometry.setIndex(new THREE.BufferAttribute(index, 1));
  geometry.computeVertexNormals();
  const mesh = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({ map: texture }));
  mesh.receiveShadow = true;
  return mesh;
}

export function createAreas({ scene, manifest, base, heightAt, registerCollision, renderer, onLoaded, covers = () => false }) {
  const areas = manifest.map(a => ({ ...a, rectsXZ: a.rects.map(toRect), state: 'idle', data: null, detail: null }));
  async function load(area) {
    area.state = 'loading';
    try {
      const response = await fetch(`${base}${area.file}`, { cache: 'no-cache' });
      if (!response.ok) throw new Error(`${area.file}: ${response.status}`);
      const data = expandArea(await response.json());
      const heightOf = b => Math.max(.2, Math.min(Number(b.height) || 12, 150));
      const skip = findDuplicateBlocks(data.buildings, { heightOf });
      for (const b of data.buildings) if (covers(b)) skip.add(b.id);   // drawn by a stadium model
      const { tint } = planMonuments(data);   // museums get the same marble tint as in the centre
      const group = new THREE.Group(); group.name = `Area: ${area.title}`; scene.add(group);
      for (const rect of area.rectsXZ) group.add(groundPatch(rect, paintPatch(rect, data, renderer), heightAt));
      buildAreaLandmarks({ group, data, heightAt, skip });   // SNFCC, East Terminal: models in place of plain blocks
      buildDetailedBuildings({ data, heightAt, scene: group, registerCollision, skip, tint });
      area.detail = createCityDetail({ scene: group, data, heightAt, skip });
      area.data = data; area.group = group; area.state = 'ready';
      onLoaded?.(area);
    } catch (error) {
      console.warn('Area not loaded:', area.title, error); area.state = 'failed';
    }
  }
  function ensure(id) {
    const area = areas.find(a => a.id === id);
    if (area && area.state === 'idle') load(area);
  }
  function update(camera, x, z) {
    for (const area of areas) {
      if (area.state === 'idle' && area.rectsXZ.some(r => rectDistance(r, x, z) < LOAD_DISTANCE)) load(area);
      area.detail?.update(camera);
    }
  }
  const ready = () => areas.filter(a => a.state === 'ready');
  return {
    areas, ensure, update,
    isReady: id => areas.some(a => a.id === id && a.state === 'ready'),
    rects: () => areas.flatMap(a => a.rectsXZ),
    roads: () => ready().flatMap(a => a.data.roads),
    contains: (x, z, margin = 0) => ready().some(a => a.rectsXZ.some(r => x >= r.minX + margin && x <= r.maxX - margin && z >= r.minZ + margin && z <= r.maxZ - margin)),
    buildingCount: () => ready().reduce((s, a) => s + a.data.buildings.length, 0),
  };
}
