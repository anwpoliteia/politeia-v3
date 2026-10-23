/*! © 2026 ΑΝΩ ΠΟΛΙΤΕΙΑ · ipoliteia.gr · SPDX-License-Identifier: AGPL-3.0-or-later · Κείμενα: CC BY-NC-ND 4.0 · Όνομα και Δωδεκάπλευρο: με επιφύλαξη παντός δικαιώματος · βλ. /COPYRIGHT.md */
import * as THREE from 'three';
import { OrbitControls } from './vendor/OrbitControls.js';
import { mergeGeometries } from './vendor/BufferGeometryUtils.js';
import { buildDetailedBuildings, createCityDetail } from './detail.js?v=20261014-monuments-7';
import { planMonuments, buildMonuments, monumentLandmarks } from './monuments.js?v=20261014-doubles-2';
import { findDuplicateBlocks } from './duplicates.js?v=20261014-doubles-2';
import { loadRegionTerrain, regionHeight, buildLandscape, buildSea } from './region-terrain.js?v=20261014-region-12';
import { createAreas, expandArea } from './region-areas.js?v=20261014-region-12';
import { createBlocks } from './region-blocks.js?v=20261014-region-12';
import { createStadiums, stadiumCover, stadiumPlaces } from './stadiums.js?v=20261014-region-12';
import { createDriving } from './driving.js?v=20261020-darkhorse-3';
import { createAtticaMinimap } from './attica-minimap.js?v=20261017-attica-frame-1';

const $ = (id) => document.getElementById(id);
const STORAGE_KEY = 'politeia-athens-proposals-v1';
const kinds = { tree: 'Δέντρο', bench: 'Παγκάκι', garden: 'Χώρος πρασίνου' };
const state = { mode: 'orbit', tool: 'explore', proposals: [], history: [], keys: new Set(), ready: false };
const origin = { lon: 23.735, lat: 37.975 };
let data, renderer, scene, camera, controls, ground, bounds, proposalGroup, preview, compassArrow, terrain;
let cityDetail, driving, monuments, sunlight, atticaMinimap;
// The wider region (relief to Piraeus and Vouliagmeni, detailed areas, basin blocks); null if not loaded.
let region = null, areas = null, blocks = null, world = null;
const REGION_BLEND = 160;
let stadiumCovers = { ids: new Set(), covers: () => false }, stadiumData = null;
// "way/1/2#" -> "way/1": relation parts and split copies share their OSM element's id.
const osmBase = id => String(id).split('#')[0].split('/').slice(0, 2).join('/');
let landmarks = [];
let yaw = 0, pitch = 0, pointerStart = null, pointerLast = null, lastTime = 0, statusTime = 0;
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
const labels = [];
const collisionGrid = new Map();
const cellSize = 60;
let lastCameraText = '';
const projected = new THREE.Vector3(), viewDirection = new THREE.Vector3();
const MAX_HEIGHT = 150, PAN_MARGIN = 250, EYE = 1.75;
// Relief: metres outside the extract over which it eases to the lowest level,
// steepest walkable rise per metre, and the ray-march step used for picking.
const TERRAIN_FADE = 450, MAX_CLIMB = .9, GROUND_STEP = 2, MAX_PICK = 6000, MAX_PICK_REGION = 40000;
// Double-click (or double-tap) flies there: taps this close in time and space count as one double.
const DOUBLE_TAP_MS = 320, DOUBLE_TAP_PX = 24, FLIGHT_MS = 1100;
const GROUND_COLOR = '#304345', PARK_COLOR = '#4d6f58', WATER_COLOR = '#3e6673', ROAD_COLOR = '#68746e';
const LABEL_LIMIT = 18, LABEL_GAP = 6, LABEL_STEM = 8;
const LABEL_KEEP_CLEAR = ['.side-panel', '.workbench', '.compass', '.brand', '.top-actions', '.attica-minimap'];
let reservedBoxes = [];
// Opening view: the Parthenon just left of centre with Syntagma to the right,
// so the Acropolis sits in the open part of the screen, not under the side panel.
const HOME_TARGET = new THREE.Vector3(-620, 0, 290), HOME_OFFSET = new THREE.Vector3(1065, 1150, 1300);
// The same seven starting places convert.py sorts to the top of athens.json.
const FEATURED = new Set(['Parthenon', 'Acropolis Museum', 'Dionysiou Areopagitou', 'Psiri', 'Numismatic Museum', 'Thissio Park', 'Filopappou Hill']);
const KIND_GROUPS = [['attraction', 'Αξιοθέατα'], ['museum', 'Μουσεία'], ['park', 'Πάρκα & λόφοι']];

function say(message) { $('status').textContent = message; statusTime = performance.now(); }
function setError(error) {
  $('loading').hidden = true;
  $('error-panel').hidden = false;
  $('error-message').textContent = error.message || String(error);
  say('Η προβολή δεν είναι διαθέσιμη.');
}
function sectorReturn() {
  const sector = new URLSearchParams(location.search).get('sector') || 'all';
  document.querySelectorAll('a[href^="../?"]').forEach((a) => {
    const url = new URL(a.getAttribute('href'), location.href);
    if (sector !== 'all') url.searchParams.set('sector', sector);
    a.href = url.href;
  });
}
function inside(p, polygon) {
  let result = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const a = polygon[i], b = polygon[j];
    if (((a.z > p.z) !== (b.z > p.z)) && p.x < (b.x - a.x) * (p.z - a.z) / (b.z - a.z) + a.x) result = !result;
  }
  return result;
}
function registerCollision(building) {
  const xs = building.points.map(p => p.x), zs = building.points.map(p => p.z);
  building.bounds = { minX: Math.min(...xs), maxX: Math.max(...xs), minZ: Math.min(...zs), maxZ: Math.max(...zs) };
  const b = building.bounds;
  for (let x = Math.floor(b.minX / cellSize); x <= Math.floor(b.maxX / cellSize); x++) {
    for (let z = Math.floor(b.minZ / cellSize); z <= Math.floor(b.maxZ / cellSize); z++) {
      const key = `${x},${z}`;
      if (!collisionGrid.has(key)) collisionGrid.set(key, []);
      collisionGrid.get(key).push(building);
    }
  }
}
function inBuilding(x, z, radius = 0) {
  const candidates = new Set();
  for (let gx = Math.floor((x - radius) / cellSize); gx <= Math.floor((x + radius) / cellSize); gx++) {
    for (let gz = Math.floor((z - radius) / cellSize); gz <= Math.floor((z + radius) / cellSize); gz++) {
      (collisionGrid.get(`${gx},${gz}`) || []).forEach(b => candidates.add(b));
    }
  }
  const probes = radius ? [[0, 0], [radius, 0], [-radius, 0], [0, radius], [0, -radius], [radius * .7, radius * .7], [-radius * .7, radius * .7], [radius * .7, -radius * .7], [-radius * .7, -radius * .7]] : [[0, 0]];
  for (const building of candidates) {
    if (Number(building.minHeight) >= 2.5) continue;
    for (const [dx, dz] of probes) {
      const point = { x: x + dx, z: z + dz };
      if (inside(point, building.points) && !(building.holes || []).some(hole => inside(point, hole.points))) return true;
    }
  }
  return false;
}
function inBounds(x, z, radius = 0) {
  return (x >= bounds.minX + radius && x <= bounds.maxX - radius && z >= bounds.minZ + radius && z <= bounds.maxZ - radius)
    || !!areas?.contains(x, z, radius);
}
function shape(points) {
  return new THREE.Shape(points.map(p => new THREE.Vector2(p.x, p.z)));
}
function addMerged(geometries, material, receiveShadow = false, castShadow = false) {
  if (!geometries.length) return null;
  const geometry = mergeGeometries(geometries);
  geometries.forEach(g => g.dispose());
  if (!geometry) throw new Error('Δεν μπόρεσε να δημιουργηθεί η γεωμετρία της πόλης.');
  const mesh = new THREE.Mesh(geometry, material);
  mesh.receiveShadow = receiveShadow;
  mesh.castShadow = castShadow;
  scene.add(mesh);
  return mesh;
}
function getBounds() {
  const lonScale = 111320 * Math.cos(origin.lat * Math.PI / 180);
  const latScale = 111320;
  // The supported OSM extract is central Athens; no synthetic city is generated outside it.
  return { minX: (23.718 - origin.lon) * lonScale, maxX: (23.750 - origin.lon) * lonScale, minZ: (37.964 - origin.lat) * latScale, maxZ: (37.986 - origin.lat) * latScale };
}
function readTerrain(json) {
  const { xMin, zMin, spacing, cols, rows, heights, baseElevation } = json || {};
  const valid = [xMin, zMin, spacing, baseElevation].every(Number.isFinite) && spacing > 0
    && Number.isInteger(cols) && Number.isInteger(rows) && cols > 1 && rows > 1
    && Array.isArray(heights) && heights.length === cols * rows && heights.every(Number.isFinite)
    && Math.abs(json.originLon - origin.lon) < 1e-6 && Math.abs(json.originLat - origin.lat) < 1e-6;
  if (!valid) return null;
  const values = Float32Array.from(heights, h => h / 10 - baseElevation);
  let low = Infinity, high = -Infinity;
  for (const h of values) { low = Math.min(low, h); high = Math.max(high, h); }
  return { real: true, xMin, zMin, spacing, cols, rows, heights: values, base: baseElevation, floor: low - .5, top: high };
}
function flatTerrain() {
  return { real: false, xMin: -6000, zMin: -6000, spacing: 12000, cols: 2, rows: 2, heights: new Float32Array(4), base: 0, floor: 0, top: 0 };
}
function rawHeight(x, z) {
  const t = terrain, h = t.heights;
  const gx = THREE.MathUtils.clamp((x - t.xMin) / t.spacing, 0, t.cols - 1.0001);
  const gz = THREE.MathUtils.clamp((z - t.zMin) / t.spacing, 0, t.rows - 1.0001);
  const c = Math.floor(gx), r = Math.floor(gz), fx = gx - c, fz = gz - r, i = r * t.cols + c;
  // Match the rendered grid triangles so kerbs and cars do not float above a bilinear approximation.
  if (fx + fz <= 1) return h[i] + (h[i + 1] - h[i]) * fx + (h[i + t.cols] - h[i]) * fz;
  const ne = h[i + t.cols + 1];
  return ne + (h[i + t.cols] - ne) * (1 - fx) + (h[i + 1] - ne) * (1 - fz);
}
// Ground height in metres above the lowest point of the extract (x east, z north).
// With the regional relief loaded, the central 10 m grid blends into it over its
// outer REGION_BLEND metres; without it, the relief eases down to one level.
function heightAt(x, z) {
  const h = rawHeight(x, z);
  if (region) {
    const t = terrain, inset = Math.min(x - t.xMin, t.xMin + (t.cols - 1) * t.spacing - x, z - t.zMin, t.zMin + (t.rows - 1) * t.spacing - z);
    if (inset >= REGION_BLEND) return h;
    const r = regionHeight(region, x, z) - t.base;
    return inset <= 0 ? r : r + (h - r) * THREE.MathUtils.smoothstep(inset, 0, REGION_BLEND);
  }
  const outside = Math.hypot(Math.max(bounds.minX - x, 0, x - bounds.maxX), Math.max(bounds.minZ - z, 0, z - bounds.maxZ));
  return outside ? h + (terrain.floor - h) * THREE.MathUtils.smoothstep(outside, 0, TERRAIN_FADE) : h;
}
// Lowest ground under a footprint, so objects sink into a slope instead of floating over it.
function footingAt(x, z, radius) {
  return Math.min(heightAt(x, z), heightAt(x + radius, z), heightAt(x - radius, z), heightAt(x, z + radius), heightAt(x, z - radius));
}
function radiusOf(type) {
  return type === 'garden' ? 5.95 : type === 'tree' ? 2.6 : 1.3;
}
function buildCity() {
  bounds = getBounds();
  const plan = planMonuments(data);
  // Skip the blocks the models replace, and mapped copies sealed inside another block
  // (they flicker against it and read as a doubled building). Both still collide.
  const drawnHeight = b => Math.max(.2, Math.min(Number(plan.heights.get(b.id) ?? b.height) || 12, MAX_HEIGHT));
  const copies = findDuplicateBlocks(data.buildings, { skip: plan.hidden, heightOf: drawnHeight });
  const replaced = data.buildings.filter(b => stadiumCovers.covers(b, osmBase(b.id))).map(b => b.id);   // stadium models draw these
  monuments = { ...plan, skip: new Set([...plan.hidden, ...copies, ...replaced]) };
  buildDetailedBuildings({ data, heightAt, scene, registerCollision, skip: monuments.skip, tint: monuments.tint, heights: monuments.heights });
  buildMonuments({ scene, plans: monuments.plans, heightAt });
  proposalGroup = new THREE.Group();
  scene.add(proposalGroup);
  preview = new THREE.Mesh(new THREE.RingGeometry(3.5, 4, 40), new THREE.MeshBasicMaterial({ color: 0xe8ce92, transparent: true, opacity: .85, side: THREE.DoubleSide, depthWrite: false }));
  preview.rotation.x = -Math.PI / 2;
  preview.visible = false;
  scene.add(preview);
}
// Parks, streets, landmark rings and the extract border are painted into one
// texture draped over the relief: they follow every slope with no z-fighting.
// The painted area: the extract alone, or the whole central relief grid when the
// region surrounds it (edge texels stretched past the extract would smear streets).
function groundArea() {
  if (!region) return bounds;
  const t = terrain;
  return { minX: t.xMin, maxX: t.xMin + (t.cols - 1) * t.spacing, minZ: t.zMin, maxZ: t.zMin + (t.rows - 1) * t.spacing };
}
function paintGround() {
  const area = groundArea();
  const size = Math.min(renderer.capabilities.maxTextureSize, matchMedia('(max-width: 760px)').matches ? 2048 : 4096);
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext('2d');
  const sx = size / (area.maxX - area.minX), sz = size / (area.maxZ - area.minZ), scale = (sx + sz) / 2;
  const trace = points => {
    ctx.beginPath();
    points.forEach((p, i) => (i ? ctx.lineTo : ctx.moveTo).call(ctx, (p.x - area.minX) * sx, (area.maxZ - p.z) * sz));
  };
  ctx.fillStyle = GROUND_COLOR;
  ctx.fillRect(0, 0, size, size);
  for (const park of data.parks) {
    if (park.points.length < 3) continue;
    ctx.fillStyle = park.kind === 'water' ? WATER_COLOR : PARK_COLOR;
    trace(park.points); ctx.closePath(); ctx.fill();
  }
  ctx.strokeStyle = ROAD_COLOR; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
  for (const road of data.roads) {
    if (road.points.length < 2) continue;
    ctx.lineWidth = Math.max(2, Math.min(Number(road.width) || 7, 30)) * scale;
    trace(road.points); ctx.stroke();
  }
  ctx.strokeStyle = 'rgba(215, 183, 121, .55)'; ctx.lineWidth = 2 * scale;
  for (const landmark of landmarks) {
    if (landmark.area) continue;
    ctx.beginPath();
    ctx.ellipse((landmark.x - area.minX) * sx, (area.maxZ - landmark.z) * sz, 8 * sx, 8 * sz, 0, 0, Math.PI * 2);
    ctx.stroke();
  }
  // The frame marks the end of the data; with the wider region around it there is no end to mark.
  if (!region) {
    ctx.strokeStyle = 'rgba(205, 183, 133, .32)'; ctx.lineWidth = 3;
    ctx.strokeRect(6.5, 6.5, size - 13, size - 13);
  }
  // A plain frame: texels clamped beyond the extract repeat ground, not streets.
  ctx.strokeStyle = GROUND_COLOR; ctx.lineWidth = 8;
  ctx.strokeRect(0, 0, size, size);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
  return texture;
}
function buildGround() {
  const t = terrain, count = t.cols * t.rows;
  const positions = new Float32Array(count * 3), uvs = new Float32Array(count * 2);
  const area = groundArea(), width = area.maxX - area.minX, depth = area.maxZ - area.minZ;
  for (let r = 0, v = 0; r < t.rows; r++) {
    for (let c = 0; c < t.cols; c++, v++) {
      const x = t.xMin + c * t.spacing, z = t.zMin + r * t.spacing;
      positions[v * 3] = x; positions[v * 3 + 1] = heightAt(x, z); positions[v * 3 + 2] = -z;
      uvs[v * 2] = (x - area.minX) / width; uvs[v * 2 + 1] = (z - area.minZ) / depth;
    }
  }
  const index = new Uint32Array((t.cols - 1) * (t.rows - 1) * 6);
  for (let r = 0, k = 0; r < t.rows - 1; r++) {
    for (let c = 0; c < t.cols - 1; c++) {
      const a = r * t.cols + c, b = a + 1, north = a + t.cols, northEast = north + 1;
      index.set([a, b, north, b, northEast, north], k); k += 6;
    }
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
  geometry.setIndex(new THREE.BufferAttribute(index, 1));
  geometry.computeVertexNormals();
  ground = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({ map: paintGround() }));
  ground.receiveShadow = true;
  scene.add(ground);
  if (region) {
    const centralGrid = { minX: t.xMin, maxX: t.xMin + (t.cols - 1) * t.spacing, minZ: t.zMin, maxZ: t.zMin + (t.rows - 1) * t.spacing };
    const spacing = matchMedia('(max-width: 760px)').matches ? 90 : 50;   // phones get a lighter landscape mesh
    scene.add(buildLandscape({ t: region, heightAt, base: t.base, covered: [centralGrid, ...(areas?.rects() || [])], spacing }));
    scene.add(buildSea(t.base));
    return;
  }
  const beyond = new THREE.Mesh(new THREE.PlaneGeometry(14000, 14000), new THREE.MeshLambertMaterial({ color: GROUND_COLOR }));
  beyond.rotation.x = -Math.PI / 2;
  beyond.position.y = terrain.floor - .2;
  beyond.receiveShadow = true;
  scene.add(beyond);
}
function uniqueByName(list) {
  // OSM maps some places more than once (five parts of the ΣΕΝ weaving mill,
  // two nodes for the Tomb of the Unknown Soldier). Keep the first of each name.
  // The same name in another area is another place (Piraeus has its own municipal gallery).
  const seen = new Set();
  return list.filter(landmark => {
    const key = `${landmark.area || ''}|${landmark.name}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}
function setupLandmarks() {
  const areaLandmarks = (areas?.areas || []).flatMap(area => area.landmarks.map(l => ({ ...l, areaTitle: area.title })));
  landmarks = uniqueByName([...data.landmarks, ...monumentLandmarks(monuments.plans, data.landmarks), ...areaLandmarks]);
  // Every named stadium is also listed under «Στάδια»: an existing destination of that name, or a new one.
  const stadiumIndices = [];
  for (const place of stadiumPlaces(stadiumData)) {
    let index = landmarks.findIndex(l => l.name === place.name);
    if (index < 0) { landmarks.push(place); index = landmarks.length - 1; }
    stadiumIndices.push(index);
  }
  const featured = [], grouped = new Map(KIND_GROUPS.map(([kind]) => [kind, []])), byArea = new Map();
  landmarks.forEach((landmark, index) => {
    const isFeatured = FEATURED.has(landmark.nameEn) && !landmark.area;
    const option = new Option(landmark.name, String(index));
    if (isFeatured) featured.push(option);
    else if (landmark.kind === 'stadium' && !landmark.area) { /* listed only under «Στάδια» below */ }
    else if (landmark.area) {
      if (!byArea.has(landmark.areaTitle)) byArea.set(landmark.areaTitle, []);
      byArea.get(landmark.areaTitle).push(option);
    }
    else (grouped.get(landmark.kind) || grouped.get('attraction')).push(option);
    const label = document.createElement('span');
    label.className = 'landmark';
    label.textContent = landmark.name;
    $('landmark-labels').append(label);
    labels.push({ element: label, index, priority: isFeatured ? 0 : 1, point: new THREE.Vector3(landmark.x, heightAt(landmark.x, landmark.z) + 35, -landmark.z), width: 0, height: 0, shown: true });
  });
  const optgroup = (label, options) => {
    const group = document.createElement('optgroup');
    group.label = label;
    group.append(...options);
    return group;
  };
  const byName = (a, b) => a.text.localeCompare(b.text, 'el');
  $('destination').append(
    optgroup('Ξεκίνα από εδώ', featured),
    ...KIND_GROUPS.filter(([kind]) => grouped.get(kind).length).map(([kind, label]) => optgroup(label, grouped.get(kind).sort(byName))),
    ...(stadiumIndices.length ? [optgroup('Στάδια', [...new Set(stadiumIndices)].map(i => new Option(landmarks[i].name, String(i))).sort(byName))] : []),
    ...[...byArea].map(([title, options]) => optgroup(title, options.sort(byName)))
  );
  $('destination').disabled = false;
  measureLabels();
}
function measureLabels() {
  for (const label of labels) {
    label.element.hidden = false;
    label.width = label.element.offsetWidth;
    label.height = label.element.offsetHeight + LABEL_STEM;
  }
  for (const label of labels) { label.element.hidden = true; label.shown = false; }
  reservedBoxes = LABEL_KEEP_CLEAR.map(selector => document.querySelector(selector)?.getBoundingClientRect())
    .filter(rect => rect && rect.width && rect.height)
    .map(({ left, right, top, bottom }) => ({ left, right, top, bottom }));
}
function placeLabels() {
  const width = window.innerWidth, height = window.innerHeight, candidates = [];
  if (state.mode === 'orbit') {
    for (const label of labels) {
      projected.copy(label.point).project(camera);
      if (projected.z <= -1 || projected.z >= 1 || Math.abs(projected.x) > .95 || Math.abs(projected.y) > .92) continue;
      const rank = label.index === state.focus ? -1 : label.priority;
      candidates.push({ label, rank, x: (projected.x + 1) * width / 2, y: (1 - projected.y) * height / 2, depth: label.point.distanceToSquared(camera.position) });
    }
  }
  // The chosen destination first, then the seven starting places, then the
  // nearest. A label is drawn only where it does not cover one already drawn.
  candidates.sort((a, b) => a.rank - b.rank || a.depth - b.depth);
  const boxes = [...reservedBoxes], show = new Set();
  for (const item of candidates) {
    if (show.size >= LABEL_LIMIT) break;
    const { label } = item;
    const box = { left: item.x - label.width / 2 - LABEL_GAP, right: item.x + label.width / 2 + LABEL_GAP, top: item.y - label.height - LABEL_GAP, bottom: item.y + LABEL_GAP };
    if (boxes.some(o => box.left < o.right && box.right > o.left && box.top < o.bottom && box.bottom > o.top)) continue;
    boxes.push(box);
    show.add(label);
    label.element.style.left = `${item.x}px`;
    label.element.style.top = `${item.y}px`;
  }
  for (const label of labels) {
    const visible = show.has(label);
    if (visible !== label.shown) { label.element.hidden = !visible; label.shown = visible; }
  }
}
function homeView() {
  setMode('orbit');
  controls.target.set(HOME_TARGET.x, heightAt(HOME_TARGET.x, -HOME_TARGET.z), HOME_TARGET.z);
  camera.position.copy(controls.target).add(HOME_OFFSET);
  controls.update();
  $('destination').value = 'overview';
  state.focus = null;
  say('Σύρε για περιστροφή · τροχός για κοντινή θέα · δεξί κλικ για μετακίνηση · διπλό κλικ για να πας κάπου.');
}
function roadSpawn(x, z) {
  let nearest = null, distance = Infinity;
  for (const road of [...data.roads, ...(areas?.roads() || [])]) {
    for (let i = 1; i < road.points.length; i++) {
      const a = road.points[i - 1], b = road.points[i];
      const dx = b.x - a.x, dz = b.z - a.z;
      const t = THREE.MathUtils.clamp(((x - a.x) * dx + (z - a.z) * dz) / (dx * dx + dz * dz || 1), 0, 1);
      const px = a.x + t * dx, pz = a.z + t * dz, d = (px - x) ** 2 + (pz - z) ** 2;
      if (d < distance && inBounds(px, pz, 2) && !inBuilding(px, pz, 1.1)) { nearest = { x: px, z: pz }; distance = d; }
    }
  }
  if (!nearest) throw new Error('Δεν βρέθηκε διαθέσιμο σημείο δρόμου για τον περίπατο.');
  return nearest;
}
function setMode(mode, keepPosition = false) {
  if (!state.ready) return;
  flight = null;
  if (mode !== 'drive' && driving?.active) driving.stop(false);
  const wasWalking = state.mode === 'walk';
  state.mode = mode;
  controls.enabled = mode === 'orbit';
  $('orbit-button').setAttribute('aria-pressed', String(mode === 'orbit'));
  $('walk-button').setAttribute('aria-pressed', String(mode === 'walk'));
  $('walk-hint').hidden = mode !== 'walk';
  $('touch-pad').hidden = mode !== 'walk';
  $('crosshair').hidden = mode !== 'walk';
  state.keys.clear();
  if (mode === 'drive') {
    setTool('explore');
    if (document.pointerLockElement) document.exitPointerLock();
    return;
  }
  if (mode === 'walk') {
    if (!keepPosition) {
      const spawn = roadSpawn(controls.target.x, -controls.target.z);
      camera.position.set(spawn.x, heightAt(spawn.x, spawn.z) + EYE, -spawn.z);
    }
    yaw = 0; pitch = 0;
    camera.rotation.order = 'YXZ';
    camera.rotation.set(pitch, yaw, 0);
    controls.enableDamping = false;
    say('Περίπατος: WASD ή βέλη για κίνηση. Σύρε στην πόλη για να κοιτάξεις γύρω. Διπλό κλικ για να πας κάπου.');
  } else {
    if (document.pointerLockElement) document.exitPointerLock();
    if (wasWalking) {
      controls.target.set(camera.position.x, heightAt(camera.position.x, -camera.position.z), camera.position.z);
      camera.position.add(new THREE.Vector3(200, 300, 250));
    }
    controls.enableDamping = true;
    controls.update();
  }
}
function goDestination() {
  flight = null;
  const value = $('destination').value;
  if (value === 'overview') return homeView();
  const landmark = landmarks[Number(value)];
  if (!landmark) return;
  if (landmark.area) {
    areas?.ensure(landmark.area);
    // Walking needs the area's streets; until they arrive, fly there instead.
    if (state.mode === 'walk' && !areas?.isReady(landmark.area)) setMode('orbit');
  }
  state.focus = Number(value);
  if (state.mode === 'walk') {
    const spawn = roadSpawn(landmark.x, landmark.z);
    camera.position.set(spawn.x, heightAt(spawn.x, spawn.z) + EYE, -spawn.z);
    yaw = Math.atan2(spawn.x - landmark.x, -(spawn.z - landmark.z));
    pitch = 0;
    camera.rotation.set(pitch, yaw, 0);
  } else {
    controls.target.set(landmark.x, heightAt(landmark.x, landmark.z), -landmark.z);
    camera.position.copy(controls.target).add(new THREE.Vector3(230, 320, 270));
    controls.update();
  }
  say(`Βρίσκεσαι κοντά: ${landmark.name}.`);
}

const proposalMaterials = {
  trunk: new THREE.MeshLambertMaterial({ color: 0x7d6c4b }),
  leaf: new THREE.MeshLambertMaterial({ color: 0x7c9b58 }),
  leafLight: new THREE.MeshLambertMaterial({ color: 0x96b86c }),
  wood: new THREE.MeshLambertMaterial({ color: 0xcaa56c }),
  metal: new THREE.MeshLambertMaterial({ color: 0x394d48 }),
  garden: new THREE.MeshLambertMaterial({ color: 0x87a365 }),
  rim: new THREE.MeshLambertMaterial({ color: 0xd5c59d })
};
const proposalGeometries = {
  trunk: new THREE.CylinderGeometry(.24, .4, 3.7, 6),
  crown: new THREE.IcosahedronGeometry(2.5, 1),
  seat: new THREE.BoxGeometry(2.3, .17, .65),
  back: new THREE.BoxGeometry(2.3, .65, .15),
  leg: new THREE.BoxGeometry(.16, .8, .6),
  garden: new THREE.BoxGeometry(8, .18, 8),
  gardenRim: new THREE.BoxGeometry(8.4, .15, 8.4)
};
function part(group, geometry, material, x, y, z, scale = 1) {
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(x, y, z);
  mesh.scale.setScalar(scale);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  group.add(mesh);
}
function makeProposal(proposal) {
  const group = new THREE.Group();
  group.userData.proposalId = proposal.id;
  group.position.set(proposal.x, footingAt(proposal.x, proposal.z, radiusOf(proposal.type)) + .2, -proposal.z);
  group.rotation.y = proposal.rotation || 0;
  if (proposal.type === 'tree') {
    part(group, proposalGeometries.trunk, proposalMaterials.trunk, 0, 1.85, 0);
    part(group, proposalGeometries.crown, proposalMaterials.leaf, 0, 4.25, 0);
    part(group, proposalGeometries.crown, proposalMaterials.leafLight, .3, 5.1, .3, .65);
  } else if (proposal.type === 'bench') {
    part(group, proposalGeometries.seat, proposalMaterials.wood, 0, .8, 0);
    part(group, proposalGeometries.back, proposalMaterials.wood, 0, 1.15, -.27);
    part(group, proposalGeometries.leg, proposalMaterials.metal, -.85, .4, 0);
    part(group, proposalGeometries.leg, proposalMaterials.metal, .85, .4, 0);
  } else {
    part(group, proposalGeometries.gardenRim, proposalMaterials.rim, 0, .075, 0);
    part(group, proposalGeometries.garden, proposalMaterials.garden, 0, .18, 0);
    for (const [x, z] of [[-2.5, -2.5], [2.5, 2.5], [2.5, -2.5], [-2.5, 2.5]]) part(group, proposalGeometries.crown, proposalMaterials.leaf, x, .6, z, .26);
  }
  proposalGroup.add(group);
}
function checkpoint() {
  state.history.push(JSON.stringify(state.proposals));
  if (state.history.length > 40) state.history.shift();
}
function updateProposals(persist = true) {
  proposalGroup.clear();
  state.proposals.forEach(makeProposal);
  $('proposal-count').textContent = `${state.proposals.length} ${state.proposals.length === 1 ? 'πρόταση' : 'προτάσεις'}`;
  $('undo-button').disabled = !state.history.length;
  $('clear-button').disabled = !state.proposals.length;
  if (persist) save(false);
}
function exportDocument() {
  return { format: 'politeia-athens-proposals', version: 1, exportedAt: new Date().toISOString(), coordinateSystem: 'local-metres-east-north', originLon: origin.lon, originLat: origin.lat, proposals: state.proposals, note: 'Personal proposals, not municipal submissions. Terrain is a coarse elevation model; many building heights and facade details are estimates. Base geometry: OpenStreetMap contributors, ODbL.' };
}
function save(notify = true) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(exportDocument()));
    if (notify) say('Οι προτάσεις σου αποθηκεύτηκαν σε αυτόν τον browser.');
    return true;
  } catch {
    say('Ο browser δεν επιτρέπει αποθήκευση. Κράτησε τις προτάσεις σου με «Εξαγωγή».');
    return false;
  }
}
function validateDocument(doc) {
  if (doc?.format !== 'politeia-athens-proposals' || doc.version !== 1 || Math.abs(doc.originLon - origin.lon) > .00001 || Math.abs(doc.originLat - origin.lat) > .00001 || !Array.isArray(doc.proposals) || doc.proposals.length > 250) throw new Error('Αυτό το αρχείο δεν είναι συμβατή εξαγωγή του εργαστηρίου Αθήνας.');
  const ids = new Set();
  for (const p of doc.proposals) {
    const radius = radiusOf(p.type);
    if (!kinds[p.type] || typeof p.id !== 'string' || ids.has(p.id) || !Number.isFinite(p.x) || !Number.isFinite(p.z) || !Number.isFinite(p.rotation) || !inBounds(p.x, p.z, radius) || inBuilding(p.x, p.z, radius)) throw new Error('Το αρχείο περιέχει μη έγκυρη θέση ή πρόταση.');
    ids.add(p.id);
  }
  return doc.proposals.map(p => ({ id: p.id, type: p.type, x: p.x, z: p.z, rotation: p.rotation }));
}
function loadSaved() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    state.proposals = validateDocument(JSON.parse(raw));
    updateProposals(false);
    if (state.proposals.length) say(`Επαναφέραμε ${state.proposals.length} αποθηκευμένες προτάσεις σου.`);
  } catch {
    say('Δεν διαβάστηκε η προηγούμενη αποθήκευση. Το αρχικό περιβάλλον παραμένει διαθέσιμο.');
  }
}
function setTool(tool) {
  state.tool = tool;
  document.querySelectorAll('[data-tool]').forEach(button => {
    const active = button.dataset.tool === tool;
    button.setAttribute('aria-pressed', String(active));
    button.classList.toggle('active', active);
  });
  preview.visible = false;
  if (tool === 'explore') say('Σύρε για περιήγηση. Διάλεξε «Περίπατος» για να κατέβεις στον δρόμο.');
  else if (tool === 'erase') say('Πάτησε σε μια δική σου πρόταση για να την αφαιρέσεις.');
  else say(`${kinds[tool]}: πλησίασε και πάτησε σε ελεύθερο έδαφος. Η πρόταση μένει μόνο εδώ.`);
}
// Where a click lands: walk the ray from the height of the tallest roof until it
// enters a building (a roof or wall, never the street behind it) or meets the relief.
function pointAt(event) {
  const rect = renderer.domElement.getBoundingClientRect();
  if (document.pointerLockElement === renderer.domElement) pointer.set(0, 0);
  else pointer.set((event.clientX - rect.left) / rect.width * 2 - 1, -(event.clientY - rect.top) / rect.height * 2 + 1);
  raycaster.setFromCamera(pointer, camera);
  const { origin: from, direction } = raycaster.ray;
  if (direction.y >= 0) return null;
  const at = t => ({ x: from.x + direction.x * t, y: from.y + direction.y * t, z: -(from.z + direction.z * t), distance: t });
  // With the region the ground reaches down to the sea and up to Hymettus, and clicks can land kilometres away.
  const floor = region ? -terrain.base - 10 : terrain.floor, top = region ? Math.max(terrain.top, region.max - terrain.base) : terrain.top;
  const limit = Math.min((from.y - floor) / -direction.y + GROUND_STEP, region ? MAX_PICK_REGION : MAX_PICK);
  let previous = Math.max(0, (from.y - top - MAX_HEIGHT) / -direction.y);
  // Steps grow with distance (2 m close by); the bisection below finds the exact crossing.
  for (let t = previous; t <= limit; previous = t, t += Math.max(GROUND_STEP, t * .003)) {
    const point = at(t);
    const building = buildingAt(point.x, point.z);
    if (building && point.y <= building.roofTop) return { ...point, onBuilding: true };
    if (point.y <= heightAt(point.x, point.z)) {
      let low = previous, high = t;
      for (let i = 0; i < 10; i++) {
        const middle = at((low + high) / 2);
        if (middle.y <= heightAt(middle.x, middle.z)) high = middle.distance; else low = middle.distance;
      }
      return { ...at(high), onBuilding: false };
    }
  }
  return null;
}
function buildingAt(x, z) {
  let highest = null;
  for (const building of collisionGrid.get(`${Math.floor(x / cellSize)},${Math.floor(z / cellSize)}`) || []) {
    if (inside({ x, z }, building.points) && !(building.holes || []).some(hole => inside({ x, z }, hole.points))) {
      if (!highest || building.roofTop > highest.roofTop) highest = building;
    }
  }
  return highest;
}

function placeAt(event) {
  if (state.tool === 'explore') return;
  const position = pointAt(event);
  if (state.tool === 'erase') {
    const hit = raycaster.intersectObjects(proposalGroup.children, true)[0];
    if (!hit || (position && position.distance < hit.distance - 1)) return say('Πάτησε πάνω σε δέντρο, παγκάκι ή πράσινο που έχεις προσθέσει.');
    let object = hit.object;
    while (object.parent && !object.userData.proposalId) object = object.parent;
    checkpoint();
    state.proposals = state.proposals.filter(p => p.id !== object.userData.proposalId);
    updateProposals();
    return say('Η πρόταση αφαιρέθηκε. Μπορείς να το αναιρέσεις.');
  }
  const radius = radiusOf(state.tool);
  if (!position || !inBounds(position.x, position.z, radius)) return say('Διάλεξε σημείο μέσα στο διαθέσιμο τμήμα της Αθήνας.');
  if (position.onBuilding || inBuilding(position.x, position.z, radius)) return say('Εδώ υπάρχει κτίριο. Διάλεξε ελεύθερο έδαφος δίπλα του.');
  if (state.proposals.length >= 250) return say('Έχεις φτάσει τις 250 προτάσεις. Αφαίρεσε κάποια για να προσθέσεις νέα.');
  checkpoint();
  state.proposals.push({ id: crypto.randomUUID(), type: state.tool, x: +position.x.toFixed(2), z: +position.z.toFixed(2), rotation: 0 });
  updateProposals();
  say(`${kinds[state.tool]} προστέθηκε στη δική σου Αθήνα. Αποθηκεύεται αυτόματα σε αυτόν τον browser.`);
}
function updatePreview(event) {
  if (!kinds[state.tool]) { preview.visible = false; return; }
  const p = pointAt(event);
  if (!p) { preview.visible = false; return; }
  const radius = radiusOf(state.tool);
  preview.visible = true;
  preview.position.set(p.x, p.y + .3, -p.z);
  preview.scale.setScalar(radius / 4);
  const free = !p.onBuilding && inBounds(p.x, p.z, radius) && !inBuilding(p.x, p.z, radius);
  preview.material.color.set(free ? 0xe8ce92 : 0xc97566);
}
// Double-click / double-tap: fly there (or, on foot, step there). The view keeps its
// angle, comes 40% closer, and a gold ring marks the spot for a moment.
let flight = null, lastTap = null, marker = null;
function nearestPlace(x, z, within = 260) {
  let best = null, distance = within;
  for (const landmark of landmarks) {
    const d = Math.hypot(landmark.x - x, landmark.z - z);
    if (d < distance) { best = landmark; distance = d; }
  }
  return best?.name || null;
}
function showMarker(target, size) {
  if (!marker) {
    // A dark band with a gold line inside: readable over pale roofs and dark streets alike.
    const ring = (inner, outer, color) => new THREE.Mesh(new THREE.RingGeometry(inner, outer, 64),
      new THREE.MeshBasicMaterial({ color, transparent: true, side: THREE.DoubleSide, depthWrite: false, depthTest: false }));
    marker = new THREE.Group();
    marker.add(ring(.5, 1, 0x1c3335), ring(.66, .84, 0xf0d593));
    marker.rotation.x = -Math.PI / 2;
    marker.children.forEach(m => { m.renderOrder = 3; });
    scene.add(marker);
  }
  marker.position.copy(target).y += .6;
  marker.userData = { size, start: performance.now(), until: performance.now() + FLIGHT_MS + 1300 };
  marker.visible = true;
}
function goThere(event) {
  const point = pointAt(event);
  if (!point) return say('Διπλό κλικ πάνω στο έδαφος ή σε κτίριο για να πας εκεί.');
  const place = nearestPlace(point.x, point.z);
  if (state.mode === 'walk') {
    // A facade or a kerb next to a wall still means "go there": step onto the nearest free street point.
    let spot = !point.onBuilding && inBounds(point.x, point.z, 1.2) && !inBuilding(point.x, point.z, 1.2) ? point : null;
    if (!spot) { try { spot = roadSpawn(point.x, point.z); } catch { spot = null; } }
    if (!spot || Math.hypot(spot.x - point.x, spot.z - point.z) > 60) return say('Εκεί δεν γίνεται περίπατος. Διάλεξε δρόμο ή πλατεία.');
    camera.position.set(spot.x, heightAt(spot.x, spot.z) + EYE, -spot.z);
    return say(place ? `Περπατάς κοντά: ${place}.` : 'Βρίσκεσαι εκεί που διάλεξες.');
  }
  if (state.mode !== 'orbit') return;
  const target = new THREE.Vector3(point.x, heightAt(point.x, point.z), -point.z);
  const offset = camera.position.clone().sub(controls.target), distance = offset.length();
  if (distance > 160) offset.setLength(THREE.MathUtils.clamp(distance * .6, 140, controls.maxDistance));
  flight = { start: performance.now(), fromTarget: controls.target.clone(), fromCamera: camera.position.clone(), toTarget: target, toCamera: target.clone().add(offset) };
  showMarker(target, Math.max(10, offset.length() * .035));
  state.focus = null;
  say(place ? `Πας κοντά: ${place}.` : 'Πας εκεί.');
}
function goMapLocation({ lon, lat }) {
  if (!state.ready || !Number.isFinite(lon) || !Number.isFinite(lat)) return;
  const x = (lon - origin.lon) * 111320 * Math.cos(origin.lat * Math.PI / 180), z = (lat - origin.lat) * 111320;
  const limits = world || { minX: bounds.minX - PAN_MARGIN, maxX: bounds.maxX + PAN_MARGIN, minZ: bounds.minZ - PAN_MARGIN, maxZ: bounds.maxZ + PAN_MARGIN };
  if (x < limits.minX || x > limits.maxX || z < limits.minZ || z > limits.maxZ) {
    return say('Η περιοχή αυτή δεν περιλαμβάνεται ακόμη στο 3D περιβάλλον. Διάλεξε ένα σημείο πιο κοντά στην Αθήνα.');
  }
  const offset = state.mode === 'orbit' ? camera.position.clone().sub(controls.target) : new THREE.Vector3(400, 600, 500);
  flight = null;
  setMode('orbit');
  setTool('explore');
  offset.y = Math.max(offset.y, 300);
  offset.setLength(THREE.MathUtils.clamp(offset.length(), 600, 1800));
  const target = new THREE.Vector3(x, heightAt(x, z), -z);
  flight = { start: performance.now(), fromTarget: controls.target.clone(), fromCamera: camera.position.clone(), toTarget: target, toCamera: target.clone().add(offset) };
  showMarker(target, Math.max(10, offset.length() * .035));
  state.focus = null;
  if (!$('destination').querySelector('option[value="map"]')) {
    const option = new Option('Σημείο στον χάρτη', 'map'); option.disabled = true; $('destination').append(option);
  }
  $('destination').value = 'map';
  const place = nearestPlace(x, z);
  say(place ? `Μετάβαση κοντά: ${place}.` : 'Μετάβαση στο σημείο που επέλεξες στον χάρτη.');
}
function updateFlight(time) {
  if (flight) {
    const k = Math.min(1, (time - flight.start) / FLIGHT_MS), e = k < .5 ? 4 * k ** 3 : 1 - (-2 * k + 2) ** 3 / 2;
    controls.target.lerpVectors(flight.fromTarget, flight.toTarget, e);
    camera.position.lerpVectors(flight.fromCamera, flight.toCamera, e);
    if (k >= 1) flight = null;
  }
  if (marker?.visible) {
    const { size, start, until } = marker.userData, left = until - time;
    marker.scale.setScalar(size * (.85 + .25 * Math.min(1, (time - start) / FLIGHT_MS)));   // opens up as you arrive
    marker.children[0].material.opacity = THREE.MathUtils.clamp(left / 1300, 0, 1) * .75;
    marker.children[1].material.opacity = THREE.MathUtils.clamp(left / 1300, 0, 1);
    if (left <= 0) marker.visible = false;
  }
}
function installControls() {
  $('home-button').addEventListener('click', homeView);
  $('orbit-button').addEventListener('click', () => setMode('orbit'));
  $('walk-button').addEventListener('click', () => setMode('walk'));
  $('destination').addEventListener('change', goDestination);
  document.querySelectorAll('[data-tool]').forEach(button => button.addEventListener('click', () => setTool(button.dataset.tool)));
  $('save-button').addEventListener('click', () => save());
  $('undo-button').addEventListener('click', () => {
    if (!state.history.length) return;
    state.proposals = JSON.parse(state.history.pop());
    updateProposals();
    say('Η τελευταία αλλαγή αναιρέθηκε.');
  });
  $('export-button').addEventListener('click', () => {
    const url = URL.createObjectURL(new Blob([JSON.stringify(exportDocument(), null, 2)], { type: 'application/json' }));
    const a = document.createElement('a');
    a.href = url; a.download = `athens-proposals-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    say('Το αρχείο των προτάσεών σου είναι έτοιμο.');
  });
  $('import-button').addEventListener('click', () => $('import-file').click());
  $('import-file').addEventListener('change', async () => {
    const file = $('import-file').files[0];
    if (!file) return;
    try {
      if (file.size > 1000000) throw new Error('Το αρχείο είναι πολύ μεγάλο. Επίλεξε εξαγωγή προτάσεων έως 1 MB.');
      const proposals = validateDocument(JSON.parse(await file.text()));
      checkpoint();
      state.proposals = proposals;
      updateProposals();
      say(`Εισήχθησαν ${proposals.length} προτάσεις. Η προηγούμενη κατάσταση επανέρχεται με Αναίρεση.`);
    } catch (error) { say(error.message); }
    $('import-file').value = '';
  });
  $('clear-button').addEventListener('click', () => $('clear-dialog').showModal());
  $('confirm-clear').addEventListener('click', () => {
    checkpoint(); state.proposals = []; updateProposals();
    $('clear-dialog').close(); say('Οι προτάσεις αφαιρέθηκαν. Η Αθήνα επέστρεψε στην αρχική της μορφή.');
  });
  $('lock-button').addEventListener('click', () => {
    const promise = renderer.domElement.requestPointerLock?.();
    if (promise?.catch) promise.catch(() => say('Η ελεύθερη ματιά δεν επιτράπηκε. Μπορείς πάντα να σύρεις για να κοιτάξεις.'));
  });
  renderer.domElement.addEventListener('wheel', () => { flight = null; }, { passive: true });
  renderer.domElement.addEventListener('pointerdown', event => {
    flight = null;   // any drag or tap takes the camera back from a flight
    pointerStart = { x: event.clientX, y: event.clientY, id: event.pointerId };
    pointerLast = pointerStart;
    if (state.mode === 'walk') renderer.domElement.setPointerCapture(event.pointerId);
  });
  renderer.domElement.addEventListener('pointermove', event => {
    if (state.mode === 'walk' && (pointerLast || document.pointerLockElement === renderer.domElement)) {
      const dx = document.pointerLockElement ? event.movementX : event.clientX - pointerLast.x;
      const dy = document.pointerLockElement ? event.movementY : event.clientY - pointerLast.y;
      yaw -= dx * .003;
      pitch = THREE.MathUtils.clamp(pitch - dy * .003, -1.3, 1.3);
      camera.rotation.set(pitch, yaw, 0, 'YXZ');
      if (pointerLast) pointerLast = { x: event.clientX, y: event.clientY };
    }
    updatePreview(event);
  });
  renderer.domElement.addEventListener('pointerup', event => {
    if (pointerStart && Math.hypot(event.clientX - pointerStart.x, event.clientY - pointerStart.y) < 7 && event.button === 0) {
      // Taps are counted here rather than with 'dblclick', so a double-tap on a phone works too.
      // With a placing tool chosen, taps keep placing; going somewhere is for the explore tool.
      const now = performance.now(), second = lastTap && now - lastTap.time < DOUBLE_TAP_MS && Math.hypot(event.clientX - lastTap.x, event.clientY - lastTap.y) < DOUBLE_TAP_PX;
      if (second && state.tool === 'explore') { lastTap = null; goThere(event); }
      else { lastTap = { time: now, x: event.clientX, y: event.clientY }; placeAt(event); }
    }
    pointerStart = null; pointerLast = null;
  });
  renderer.domElement.addEventListener('pointercancel', () => { pointerStart = null; pointerLast = null; });
  renderer.domElement.addEventListener('pointerleave', () => { preview.visible = false; });
  renderer.domElement.addEventListener('contextmenu', event => event.preventDefault());
  const keyMap = { KeyW: 'forward', ArrowUp: 'forward', KeyS: 'backward', ArrowDown: 'backward', KeyA: 'left', ArrowLeft: 'left', KeyD: 'right', ArrowRight: 'right', ShiftLeft: 'fast', ShiftRight: 'fast' };
  window.addEventListener('keydown', event => {
    if (state.mode !== 'walk' || document.querySelector('dialog[open]') || ['INPUT', 'SELECT', 'TEXTAREA'].includes(event.target.tagName)) return;
    if (keyMap[event.code]) { event.preventDefault(); state.keys.add(keyMap[event.code]); }
  });
  window.addEventListener('keyup', event => { if (keyMap[event.code]) state.keys.delete(keyMap[event.code]); });
  window.addEventListener('blur', () => state.keys.clear());
  document.addEventListener('visibilitychange', () => state.keys.clear());
  document.querySelectorAll('[data-move]').forEach(button => {
    button.addEventListener('pointerdown', event => { event.preventDefault(); state.keys.add(button.dataset.move); button.setPointerCapture(event.pointerId); });
    for (const name of ['pointerup', 'pointercancel', 'lostpointercapture']) button.addEventListener(name, () => state.keys.delete(button.dataset.move));
  });
}
function walk(delta) {
  if (state.mode !== 'walk' || document.querySelector('dialog[open]')) return;
  const forward = Number(state.keys.has('forward')) - Number(state.keys.has('backward'));
  const right = Number(state.keys.has('right')) - Number(state.keys.has('left'));
  if (!forward && !right) return;
  const norm = Math.hypot(forward, right), speed = (state.keys.has('fast') ? 11 : 4.2) * delta;
  const dx = (-Math.sin(yaw) * forward + Math.cos(yaw) * right) / norm * speed;
  const dz = (-Math.cos(yaw) * forward - Math.sin(yaw) * right) / norm * speed;
  // A step is refused into a building, out of the extract, or up a slope steeper than MAX_CLIMB.
  const canStep = (fromX, fromZ, toX, toZ) => inBounds(toX, toZ, 1.2) && !inBuilding(toX, toZ, 1.2)
    && heightAt(toX, toZ) - heightAt(fromX, fromZ) <= MAX_CLIMB * Math.hypot(toX - fromX, toZ - fromZ);
  let x = camera.position.x, z = -camera.position.z;
  if (canStep(x, z, x + dx, z)) x += dx;
  if (canStep(x, z, x, z - dz)) z -= dz;
  camera.position.set(x, heightAt(x, z) + EYE, -z);
}
function keepTargetInCity() {
  const limits = world || { minX: bounds.minX - PAN_MARGIN, maxX: bounds.maxX + PAN_MARGIN, minZ: bounds.minZ - PAN_MARGIN, maxZ: bounds.maxZ + PAN_MARGIN };
  const x = THREE.MathUtils.clamp(controls.target.x, limits.minX, limits.maxX);
  const z = THREE.MathUtils.clamp(controls.target.z, -limits.maxZ, -limits.minZ);
  const dx = x - controls.target.x, dz = z - controls.target.z;
  if (!dx && !dz) return;
  controls.target.x = x; controls.target.z = z;
  camera.position.x += dx; camera.position.z += dz;
}
function followGround() {
  const lift = (heightAt(controls.target.x, -controls.target.z) - controls.target.y) * .2;
  controls.target.y += lift;
  camera.position.y += lift;
  camera.position.y = Math.max(camera.position.y, heightAt(camera.position.x, -camera.position.z) + 4);
}
function cameraReadout() {
  const lon = origin.lon + camera.position.x / (111320 * Math.cos(origin.lat * Math.PI / 180));
  const lat = origin.lat - camera.position.z / 111320;
  const text = `${state.mode === 'drive' ? 'Αυτοκίνητο' : state.mode === 'walk' ? 'Περίπατος' : 'Πανοραμική'} · ${lat.toFixed(5)}° Β, ${lon.toFixed(5)}° Α · ${(camera.position.y + terrain.base).toFixed(1)} μ.`;
  if (lastCameraText !== text) { $('camera-readout').textContent = text; lastCameraText = text; }
}
// The wider region follows the view: areas load near it, basin tiles stream around
// it, and the sun's shadow box, the fog and the near plane move and scale with it.
function updateRegion() {
  if (!region) return;
  const orbit = state.mode === 'orbit';
  const x = orbit ? controls.target.x : camera.position.x, z = orbit ? -controls.target.z : -camera.position.z;
  const distance = orbit ? camera.position.distanceTo(controls.target) : 0;
  areas?.update(camera, x, z);
  blocks?.update(x, z, THREE.MathUtils.clamp(distance * 2.4, 3200, 8000));
  const y = heightAt(x, z);
  sunlight.target.position.set(x, y, -z);
  sunlight.target.updateMatrixWorld();
  sunlight.position.set(x - 900, y + 1600, -z + 600);
  scene.fog.near = orbit ? 2300 + distance * .9 : 1800;
  scene.fog.far = orbit ? 6500 + distance * 2.6 : 6500;
  const near = orbit ? THREE.MathUtils.clamp(distance * .0025, .15, 6) : .15;
  if (Math.abs(camera.near - near) > camera.near * .2) { camera.near = near; camera.updateProjectionMatrix(); }
}
async function loadRegion() {
  const base = '../athens-data/';
  const [t, manifest, index, stadiumData] = await Promise.all([
    loadRegionTerrain(base),
    fetch(`${base}areas.json`, { cache: 'no-cache' }).then(r => (r.ok ? r.json() : [])),
    fetch(`${base}blocks/blocks.json`, { cache: 'no-cache' }).then(r => (r.ok ? r.json() : null)),
    fetch(`${base}stadiums.json`, { cache: 'no-cache' }).then(r => (r.ok ? r.json() : null)).catch(() => null),
  ]);
  return t ? { t, manifest: Array.isArray(manifest) ? manifest : [], index, stadiumData } : null;
}
function updateCount() {
  const detailed = data.buildings.length + (areas?.buildingCount() || 0);
  $('data-count').textContent = `${detailed.toLocaleString('el-GR')} κτίρια με λεπτομέρεια`
    + (blocks ? ` · ${blocks.total.toLocaleString('el-GR')} απλοί όγκοι στο λεκανοπέδιο` : ` · ${data.roads.length.toLocaleString('el-GR')} τμήματα δρόμων`);
}
function animate(time) {
  const delta = Math.min((time - lastTime) / 1000 || .016, .06);
  lastTime = time;
  walk(delta);
  driving?.update(delta, time);
  updateFlight(time);
  if (state.mode === 'orbit') { controls.update(); keepTargetInCity(); followGround(); }
  updateRegion();
  cityDetail?.update(camera);
  camera.updateMatrixWorld();
  placeLabels();
  if (Math.floor(time / 250) !== Math.floor((time - delta * 1000) / 250)) cameraReadout();
  camera.getWorldDirection(viewDirection);
  atticaMinimap?.update({
    x: state.mode === 'orbit' ? controls.target.x : camera.position.x,
    z: state.mode === 'orbit' ? -controls.target.z : -camera.position.z,
    directionX: viewDirection.x, directionZ: viewDirection.z, mode: state.mode, time
  });
  compassArrow.style.transform = `rotate(${Math.atan2(viewDirection.x, -viewDirection.z)}rad)`;
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
async function init() {
  sectorReturn();
  $('sources-button').addEventListener('click', () => $('sources-dialog').showModal());
  document.querySelectorAll('[data-close]').forEach(button => button.addEventListener('click', () => button.closest('dialog').close()));
  $('retry-button').addEventListener('click', () => location.reload());
  const readout = document.createElement('output');
  readout.id = 'camera-readout'; readout.setAttribute('aria-label', 'Θέση κάμερας');
  readout.className = 'camera-readout';
  compassArrow = document.querySelector('.compass svg');
  document.querySelector('.data-summary').append(readout);
  try {
    renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.domElement.setAttribute('aria-label', 'Περιήγηση και τοποθέτηση προτάσεων στην τρισδιάστατη Αθήνα');
    renderer.domElement.setAttribute('tabindex', '0');
    $('canvas-mount').append(renderer.domElement);
  } catch {
    throw new Error('Απαιτείται ενεργή υποστήριξη WebGL. Άνοιξε τη σελίδα σε browser με επιτάχυνση γραφικών.');
  }
  renderer.domElement.addEventListener('webglcontextlost', event => { event.preventDefault(); setError(new Error('Η σύνδεση με τα γραφικά διακόπηκε. Δοκίμασε ξανά για επαναφορά.')); });
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x3f575b);
  scene.fog = new THREE.Fog(0x3f575b, 2300, 6000);
  camera = new THREE.PerspectiveCamera(47, window.innerWidth / window.innerHeight, .15, 12000);
  scene.add(new THREE.HemisphereLight(0xf1e9d6, 0x35575b, 2.7));
  sunlight = new THREE.DirectionalLight(0xffe3b2, 2.5);
  sunlight.position.set(-900, 1600, 600);
  scene.add(sunlight.target);
  sunlight.castShadow = true;
  sunlight.shadow.mapSize.set(2048, 2048);
  sunlight.shadow.camera.left = -1800; sunlight.shadow.camera.right = 1800;
  sunlight.shadow.camera.top = 1800; sunlight.shadow.camera.bottom = -1800;
  sunlight.shadow.camera.far = 4500;
  sunlight.shadow.normalBias = 1;
  scene.add(sunlight);
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true; controls.dampingFactor = .065;
  controls.minDistance = 25; controls.maxDistance = 3400;
  controls.maxPolarAngle = Math.PI / 2 - .035;
  controls.screenSpacePanning = false;
  const [response, terrainResponse, regionParts] = await Promise.all([
    fetch('../athens-data/athens.json', { cache: 'no-cache' }),
    fetch('../athens-data/terrain.json', { cache: 'no-cache' }).catch(() => null),
    loadRegion().catch(error => { console.warn('Region not loaded:', error); return null; })
  ]);
  if (!response.ok) throw new Error('Τα δεδομένα της Αθήνας δεν είναι διαθέσιμα ακόμη. Δοκίμασε ξανά σε λίγο.');
  data = await response.json();
  if (data.schemaVersion === 4) data = expandArea(data);   // the compact form of the same extract (decimetre outlines, caps built here)
  if (!Array.isArray(data.buildings) || !data.buildings.length || !Array.isArray(data.roads) || !data.roads.length) throw new Error('Δεν βρέθηκε η πραγματική γεωμετρία κτιρίων και δρόμων.');
  origin.lon = Number(data.originLon) || origin.lon;
  origin.lat = Number(data.originLat) || origin.lat;
  data.parks ||= []; data.landmarks ||= [];
  terrain = (terrainResponse?.ok && readTerrain(await terrainResponse.json().catch(() => null))) || flatTerrain();
  // The regional relief shares the central grid's sea-level reference, so it is used only alongside it.
  if (terrain.real && regionParts) {
    region = regionParts.t;
    world = { minX: region.xMin + 600, maxX: region.xMax - 600, minZ: region.zMin + 600, maxZ: region.zMax - 600 };
    camera.far = 90000; camera.updateProjectionMatrix();
    controls.maxDistance = 26000;
  }
  const terrainNote = $('terrain-note');
  if (terrainNote) terrainNote.textContent = region
    ? 'Αθήνα, Πειραιάς, Βουλιαγμένη · πραγματικό ανάγλυφο και θάλασσα (~30 μ.) · εκτιμώμενα ύψη κτιρίων όπου λείπουν'
    : terrain.real
      ? 'Κεντρική Αθήνα · πραγματικό ανάγλυφο (~30 μ.) · εκτιμώμενα ύψη κτιρίων όπου λείπουν'
      : 'Κεντρική Αθήνα · επίπεδο έδαφος (τα υψόμετρα δεν φορτώθηκαν) · εκτιμώμενα ύψη όπου λείπουν';
  $('loading-status').textContent = 'Σχηματίζουμε τους δρόμους και τα κτίρια…';
  await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
  if (region && regionParts.stadiumData) { stadiumData = regionParts.stadiumData; stadiumCovers = stadiumCover(stadiumData); }
  buildCity();
  if (region) {
    if (regionParts.stadiumData) createStadiums({ scene, data: regionParts.stadiumData, heightAt });
    areas = createAreas({ scene, manifest: regionParts.manifest, base: '../athens-data/', heightAt, registerCollision, renderer, covers: (b) => stadiumCovers.covers(b, osmBase(b.id)),
      onLoaded: area => { measureLabels(); updateCount(); say(`Φορτώθηκε σε λεπτομέρεια: ${area.title}.`); } });
    if (regionParts.index?.tiles?.length) blocks = createBlocks({ scene, index: regionParts.index, base: '../athens-data/blocks/', heightAt });
  }
  setupLandmarks();
  buildGround();
  cityDetail = createCityDetail({ scene, data, heightAt, skip: monuments.skip, heights: monuments.heights });
  state.ready = true;
  installControls();
  homeView();
  loadSaved();
  atticaMinimap = createAtticaMinimap({ mount: $('world'), origin,
    coverage: world || { minX: bounds.minX - PAN_MARGIN, maxX: bounds.maxX + PAN_MARGIN, minZ: bounds.minZ - PAN_MARGIN, maxZ: bounds.maxZ + PAN_MARGIN },
    onNavigate: goMapLocation });
  driving = await createDriving({ scene, camera, heightAt, say, measureLabels,
    enterMode: () => setMode('drive'), leaveMode: () => setMode('orbit'),
    showOverview: points => {
      setMode('orbit');
      const xs = points.map(p => p.x), zs = points.map(p => p.z);
      const x = (Math.min(...xs) + Math.max(...xs)) / 2, z = (Math.min(...zs) + Math.max(...zs)) / 2;
      const span = Math.max(Math.max(...xs) - Math.min(...xs), Math.max(...zs) - Math.min(...zs), 240);
      controls.target.set(x, heightAt(x, z), -z);
      camera.position.copy(controls.target).add(new THREE.Vector3(span * .4, span * .9, span * .75));
      controls.update();
    }
  });
  measureLabels();
  updateCount();
  $('world').dataset.ready = 'true';
  $('loading').hidden = true;
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    measureLabels();
  });
  cameraReadout();
  requestAnimationFrame(animate);
}
init().catch(setError);

