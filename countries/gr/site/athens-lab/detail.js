/*! © 2026 ΑΝΩ ΠΟΛΙΤΕΙΑ · ipoliteia.gr · SPDX-License-Identifier: AGPL-3.0-or-later · Κείμενα: CC BY-NC-ND 4.0 · Όνομα και Δωδεκάπλευρο: με επιφύλαξη παντός δικαιώματος · βλ. /COPYRIGHT.md */
import * as THREE from 'three';

// Metric OSM coordinates are x=east, z=north. Three's world is x, y, -z.
// Roofs, parts, courtyard holes and colours below come from the saved extract.
// Windows, cornices and carriageway finishes are restrained procedural artwork;
// they must not be described as a survey of individual facades or lane markings.
const PALETTE = ['#ded5bd', '#cfcabb', '#e6dec9', '#c3c5bd', '#d6c4a8', '#e0dccc'];
const MOTOR_ROADS = new Set(['motorway', 'motorway_link', 'trunk', 'trunk_link', 'primary', 'primary_link', 'secondary', 'secondary_link', 'tertiary', 'tertiary_link', 'residential', 'unclassified', 'living_street', 'service']);
const MAJOR_ROADS = new Set(['motorway', 'motorway_link', 'trunk', 'trunk_link', 'primary', 'primary_link', 'secondary', 'secondary_link', 'tertiary', 'tertiary_link']);
const FACADE_PART_KINDS = new Set(['apartments', 'residential', 'house', 'office', 'commercial', 'retail', 'hotel']);
const GRID = 80;
const MAX_WINDOWS = 14000, MAX_BANDS = 3200, MAX_BALCONIES = 2000, MAX_RAIL_PARTS = MAX_BALCONIES * 4;

function hash(text) {
  let n = 2166136261;
  for (const c of String(text || '')) n = Math.imul(n ^ c.charCodeAt(0), 16777619);
  return n >>> 0;
}
function contains(x, z, points) {
  let result = false;
  for (let i = 0, j = points.length - 1; i < points.length; j = i++) {
    const a = points[i], b = points[j];
    if ((a.z > z) !== (b.z > z) && x < (b.x - a.x) * (z - a.z) / (b.z - a.z) + a.x) result = !result;
  }
  return result;
}
function geometryOf(positions, colors, uvs) {
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  if (colors) geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  if (uvs) geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geometry.computeVertexNormals();
  geometry.computeBoundingSphere();
  return geometry;
}
function indexedTriangles(positions, colors, points, triangles, base, color, height) {
  for (let k = 0; k + 2 < triangles.length; k += 3) {
    const ring = [points[triangles[k]], points[triangles[k + 1]], points[triangles[k + 2]]];
    if (ring.some(p => !p)) continue;
    // Upward winding even when a source cap was triangulated with reverse rings.
    const [a, b, c] = ring;
    if ((b.x - a.x) * (c.z - a.z) - (b.z - a.z) * (c.x - a.x) < 0) [ring[1], ring[2]] = [ring[2], ring[1]];
    for (const p of ring) {
      positions.push(p.x, base + (height ?? p.y), -p.z);
      colors.push(color.r, color.g, color.b);
    }
  }
}

/** Replace the old prism-only building loop. Returns one merged city mesh. */
// skip: blocks replaced by monument models (still collide and pick); tint: museum walls.
export function buildDetailedBuildings({ data, heightAt, scene, registerCollision, skip, tint, heights }) {
  const positions = [], colors = [];
  let courtyardCount = 0, roofCount = 0;
  for (const building of data.buildings) {
    if (!building.points || building.points.length < 3) continue;
    const height = Math.max(.2, Math.min(Number(heights?.get(building.id) ?? building.height) || 12, 150));
    const minHeight = Math.max(0, Math.min(Number(building.minHeight) || 0, height - .1));
    const base = Math.min(...building.points.map(p => heightAt(p.x, p.z)));
    building.groundBase = base;
    building.roofTop = base + height;
    if (skip?.has(building.id)) { registerCollision?.(building); continue; }
    const wallColor = new THREE.Color(tint?.get(building.id) || building.color || PALETTE[hash(building.id) % PALETTE.length]);
    const roofColor = new THREE.Color(building.roofColor || (building.roof ? '#aa8870' : '#b9b6a9'));
    const rings = [building.points, ...(building.holes || []).map(h => h.points)];
    courtyardCount += rings.length > 1 ? 1 : 0;
    for (let r = 0; r < rings.length; r++) {
      const points = rings[r];
      let area = 0;
      for (let i = 0; i < points.length; i++) {
        const a = points[i], b = points[(i + 1) % points.length];
        area += a.x * b.z - b.x * a.z;
      }
      const reverse = r === 0 ? area < 0 : area > 0;
      for (let i = 0; i < points.length; i++) {
        const j = (i + 1) % points.length, a = points[i], b = points[j];
        const aTop = r === 0 && building.wallTops ? building.wallTops[i] : height - (Number(building.roofHeight) || 0);
        const bTop = r === 0 && building.wallTops ? building.wallTops[j] : height - (Number(building.roofHeight) || 0);
        const vertices = [[a.x, base + minHeight, -a.z], [b.x, base + minHeight, -b.z], [b.x, base + Math.max(minHeight, bTop), -b.z], [a.x, base + Math.max(minHeight, aTop), -a.z]];
        const indices = reverse ? [0, 2, 1, 0, 3, 2] : [0, 1, 2, 0, 2, 3];
        for (const id of indices) {
          positions.push(...vertices[id]);
          // Subtle darker footing reads as depth without inventing facade data.
          const shade = id < 2 ? .9 : 1;
          colors.push(wallColor.r * shade, wallColor.g * shade, wallColor.b * shade);
        }
      }
    }
    if (building.roof?.points?.length && building.roof?.triangles?.length) {
      indexedTriangles(positions, colors, building.roof.points, building.roof.triangles, base, roofColor);
      roofCount++;
    } else {
      const points = rings.flat();
      let cap = building.cap;
      if (!cap?.length) {
        cap = THREE.ShapeUtils.triangulateShape(building.points.map(p => new THREE.Vector2(p.x, p.z)), rings.slice(1).map(r => r.map(p => new THREE.Vector2(p.x, p.z)))).flat();
      }
      indexedTriangles(positions, colors, points, cap, base, roofColor, height);
    }
    registerCollision?.(building);
  }
  const geometry = geometryOf(positions, colors);
  const material = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: .93, metalness: .015 });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.name = 'OSM buildings: mapped parts, courtyards and roofs';
  mesh.castShadow = mesh.receiveShadow = true;
  mesh.userData = { courtyardCount, roofCount, source: 'OpenStreetMap', architecturalDetail: 'mapped volume; procedural surface detail is separate' };
  scene.add(mesh);
  return mesh;
}

function makeTexture(kind) {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = kind === 'window' ? 128 : 256;
  const c = canvas.getContext('2d');
  if (kind === 'window') {
    c.fillStyle = '#d5d2c7'; c.fillRect(0, 0, 128, 128);
    c.fillStyle = '#424d4c'; c.fillRect(6, 5, 116, 116);
    const gradient = c.createLinearGradient(0, 0, 110, 128);
    gradient.addColorStop(0, '#a0b6b6'); gradient.addColorStop(.48, '#627c80'); gradient.addColorStop(.5, '#43595d'); gradient.addColorStop(1, '#253c42');
    c.fillStyle = gradient; c.fillRect(12, 11, 104, 104);
    c.fillStyle = '#c4c5bc'; c.fillRect(61, 6, 5, 116); c.fillRect(6, 66, 116, 4);
    c.fillStyle = 'rgba(223,218,193,.24)'; c.fillRect(13, 12, 10, 53); c.fillRect(104, 12, 10, 53);
    c.fillStyle = '#ede6d1'; c.fillRect(2, 121, 124, 6);
  } else {
    const pixels = c.createImageData(256, 256);
    let seed = 441;
    for (let i = 0; i < pixels.data.length; i += 4) {
      seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
      const n = 104 + (seed >>> 27);
      pixels.data[i] = n; pixels.data[i + 1] = n + 1; pixels.data[i + 2] = n; pixels.data[i + 3] = 255;
    }
    c.putImageData(pixels, 0, 0);
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  if (kind !== 'window') texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.anisotropy = 4;
  return texture;
}

function buildingIndex(buildings) {
  const cells = new Map();
  for (const b of buildings) {
    if (!b.points?.length) continue;
    const xs = b.points.map(p => p.x), zs = b.points.map(p => p.z);
    const box = b.detailBounds = { minX: Math.min(...xs), maxX: Math.max(...xs), minZ: Math.min(...zs), maxZ: Math.max(...zs) };
    for (let x = Math.floor(box.minX / GRID); x <= Math.floor(box.maxX / GRID); x++) {
      for (let z = Math.floor(box.minZ / GRID); z <= Math.floor(box.maxZ / GRID); z++) {
        const key = `${x},${z}`;
        if (!cells.has(key)) cells.set(key, []);
        cells.get(key).push(b);
      }
    }
  }
  return {
    near(x, z, radius) {
      const result = new Set();
      for (let i = Math.floor((x - radius) / GRID); i <= Math.floor((x + radius) / GRID); i++) {
        for (let j = Math.floor((z - radius) / GRID); j <= Math.floor((z + radius) / GRID); j++) {
          for (const b of cells.get(`${i},${j}`) || []) result.add(b);
        }
      }
      return [...result];
    },
    occupied(x, z) {
      return (cells.get(`${Math.floor(x / GRID)},${Math.floor(z / GRID)}`) || []).some(b => contains(x, z, b.points) && !(b.holes || []).some(h => contains(x, z, h.points)));
    },
  };
}

function streets(data, heightAt, index) {
  const asphalt = [], asphaltUv = [], walks = [], kerbs = [], paint = [];
  const junctions = new Map();
  const motorRoads = data.roads.filter(r => MOTOR_ROADS.has(r.kind));
  // A road junction is not necessarily an endpoint: OSM ways frequently carry
  // the crossing node in their interior. Mask finishes against the corridors
  // of every other motor road, leaving the continuous asphalt intact.
  const corridors = new Map(), corridorCell = 64;
  for (const road of motorRoads) {
    const half = THREE.MathUtils.clamp(Number(road.width) || 6, 2.8, 30) / 2;
    for (let i = 1; i < road.points.length; i++) {
      const a = road.points[i - 1], b = road.points[i], dx = b.x - a.x, dz = b.z - a.z, lengthSq = dx * dx + dz * dz;
      if (lengthSq < .0001) continue;
      const segment = { road, a, dx, dz, lengthSq, radiusSq: (half + 2.65) ** 2 };
      const pad = half + 2.65;
      for (let x = Math.floor((Math.min(a.x, b.x) - pad) / corridorCell); x <= Math.floor((Math.max(a.x, b.x) + pad) / corridorCell); x++) {
        for (let z = Math.floor((Math.min(a.z, b.z) - pad) / corridorCell); z <= Math.floor((Math.max(a.z, b.z) + pad) / corridorCell); z++) {
          const key = `${x},${z}`;
          if (!corridors.has(key)) corridors.set(key, []);
          corridors.get(key).push(segment);
        }
      }
    }
  }
  function crossesOtherRoad(x, z, ownRoad) {
    for (const s of corridors.get(`${Math.floor(x / corridorCell)},${Math.floor(z / corridorCell)}`) || []) {
      if (s.road === ownRoad) continue;
      const t = THREE.MathUtils.clamp(((x - s.a.x) * s.dx + (z - s.a.z) * s.dz) / s.lengthSq, 0, 1);
      const dx = x - s.a.x - s.dx * t, dz = z - s.a.z - s.dz * t;
      // 1m junction breathing room plus 1.65m for the half-diagonal of the
      // current <=2.5m long, 1m wide finish strip prevents corner intrusions.
      if (dx * dx + dz * dz < s.radiusSq) return true;
    }
    return false;
  }
  const keyOf = p => `${Math.round(p.x * 4)},${Math.round(p.z * 4)}`;
  for (const r of motorRoads) for (const p of [r.points[0], r.points[r.points.length - 1]]) if (p) junctions.set(keyOf(p), (junctions.get(keyOf(p)) || 0) + 1);
  function strip(target, a, b, near, far, lift, uv) {
    const dx = b.x - a.x, dz = b.z - a.z, length = Math.hypot(dx, dz);
    if (length < .01) return;
    const nx = -dz / length, nz = dx / length;
    const ps = [[a.x + nx * near, a.z + nz * near], [b.x + nx * near, b.z + nz * near], [b.x + nx * far, b.z + nz * far], [a.x + nx * far, a.z + nz * far]];
    for (const i of [0, 1, 2, 0, 2, 3]) {
      const [x, z] = ps[i];
      target.push(x, heightAt(x, z) + lift, -z);
      if (uv) uv.push(x / 9, z / 9);
    }
  }
  function edgeFace(a, b, offset) {
    const dx = b.x - a.x, dz = b.z - a.z, length = Math.hypot(dx, dz), nx = -dz / length, nz = dx / length;
    const x1 = a.x + nx * offset, z1 = a.z + nz * offset, x2 = b.x + nx * offset, z2 = b.z + nz * offset;
    const h1 = heightAt(x1, z1), h2 = heightAt(x2, z2);
    const p = [[x1, h1 + .048, -z1], [x2, h2 + .048, -z2], [x2, h2 + .17, -z2], [x1, h1 + .17, -z1]];
    for (const n of [0, 1, 2, 0, 2, 3]) kerbs.push(...p[n]);
  }
  for (const road of motorRoads) {
    const width = THREE.MathUtils.clamp(Number(road.width) || 6, 2.8, 30), half = width / 2;
    const sidewalks = road.kind !== 'service' && !road.bridge && !road.kind.includes('motorway');
    const centerLine = MAJOR_ROADS.has(road.kind) && width >= 6.5;
    const startIsJunction = junctions.get(keyOf(road.points[0])) > 1, endIsJunction = junctions.get(keyOf(road.points[road.points.length - 1])) > 1;
    let distance = 0;
    const total = road.points.slice(1).reduce((sum, p, i) => sum + Math.hypot(p.x - road.points[i].x, p.z - road.points[i].z), 0);
    for (let i = 1; i < road.points.length; i++) {
      const from = road.points[i - 1], to = road.points[i], length = Math.hypot(to.x - from.x, to.z - from.z);
      if (length < .01) continue;
      const count = Math.max(1, Math.ceil(length / 2.5));
      for (let s = 0; s < count; s++) {
        const t1 = s / count, t2 = (s + 1) / count;
        const a = { x: THREE.MathUtils.lerp(from.x, to.x, t1), z: THREE.MathUtils.lerp(from.z, to.z, t1) };
        const b = { x: THREE.MathUtils.lerp(from.x, to.x, t2), z: THREE.MathUtils.lerp(from.z, to.z, t2) };
        strip(asphalt, a, b, -half, half, .055, asphaltUv);
        const at = distance + length * (t1 + t2) / 2;
        const junction = (startIsJunction && at < half + 4) || (endIsJunction && total - at < half + 4);
        if (centerLine && !junction && (at % 10) < 4.8 && !crossesOtherRoad((a.x + b.x) / 2, (a.z + b.z) / 2, road)) strip(paint, a, b, -.065, .065, .078);
        if (sidewalks && !junction) {
          const dx = b.x - a.x, dz = b.z - a.z, len = Math.hypot(dx, dz);
          for (const side of [-1, 1]) {
            const midX = (a.x + b.x) / 2 - dz / len * (half + .55) * side;
            const midZ = (a.z + b.z) / 2 + dx / len * (half + .55) * side;
            // Keep the inferred narrow pavement clear of mapped building footprints.
            if (index.occupied(midX, midZ) || crossesOtherRoad(midX, midZ, road)) continue;
            const near = side < 0 ? -half - 1.0 : half, far = side < 0 ? -half : half + 1.0;
            strip(walks, a, b, near, far, .17);
            edgeFace(a, b, half * side);
          }
        }
      }
      distance += length;
    }
  }
  const group = new THREE.Group();
  group.name = 'OSM streets · procedural asphalt, narrow pavements and illustrative markings';
  const asphaltTexture = makeTexture('asphalt');
  const definitions = [
    [asphalt, new THREE.MeshStandardMaterial({ color: 0x747d79, map: asphaltTexture, roughness: 1, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1 }), asphaltUv],
    [walks, new THREE.MeshStandardMaterial({ color: 0xb4b3a4, roughness: 1, side: THREE.DoubleSide })],
    [kerbs, new THREE.MeshStandardMaterial({ color: 0xc8c7b8, roughness: 1, side: THREE.DoubleSide })],
    [paint, new THREE.MeshBasicMaterial({ color: 0xd5d4b9, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 })],
  ];
  for (const [vertices, material, uvs] of definitions) {
    if (!vertices.length) { material.dispose(); continue; }
    const mesh = new THREE.Mesh(geometryOf(vertices, null, uvs), material);
    mesh.receiveShadow = true;
    group.add(mesh);
  }
  return group;
}

/** Local facade detail uses four draw calls regardless of the number of buildings. */
export function createCityDetail({ scene, data, heightAt, radius = 165, skip, heights }) {
  const root = new THREE.Group(); root.name = 'Athens street detail'; scene.add(root);
  const index = buildingIndex(data.buildings);
  root.add(streets(data, heightAt, index));
  const near = new THREE.Group(); root.add(near);
  const windowTexture = makeTexture('window');
  const windowMaterial = new THREE.MeshStandardMaterial({ map: windowTexture, roughness: .42, metalness: .13, side: THREE.DoubleSide });
  const stoneMaterial = new THREE.MeshStandardMaterial({ color: 0xe2dcc9, roughness: .9 });
  const metalMaterial = new THREE.MeshStandardMaterial({ color: 0x435653, roughness: .72, metalness: .25 });
  const paneGeometry = new THREE.PlaneGeometry(1, 1), boxGeometry = new THREE.BoxGeometry(1, 1, 1);
  function instances(geometry, material, count) {
    const mesh = new THREE.InstancedMesh(geometry, material, count);
    mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage); mesh.count = 0; mesh.frustumCulled = false; mesh.receiveShadow = true;
    near.add(mesh); return mesh;
  }
  const windows = instances(paneGeometry, windowMaterial, MAX_WINDOWS);
  const bands = instances(boxGeometry, stoneMaterial, MAX_BANDS);
  const balconies = instances(boxGeometry, stoneMaterial, MAX_BALCONIES);
  const rails = instances(boxGeometry, metalMaterial, MAX_RAIL_PARTS);
  const dummy = new THREE.Object3D();
  let lastX = Infinity, lastZ = Infinity, lastUpdate = -Infinity;
  function put(mesh, capacity, x, y, z, angle, sx, sy, sz) {
    if (mesh.count >= capacity) return;
    dummy.position.set(x, y, z); dummy.rotation.set(0, angle, 0); dummy.scale.set(sx, sy, sz); dummy.updateMatrix();
    mesh.setMatrixAt(mesh.count++, dummy.matrix);
  }
  function update(camera, force = false) {
    const x = camera.position.x, z = -camera.position.z;
    near.visible = camera.position.y - heightAt(x, z) < 115;
    if (!near.visible) return;
    const now = performance.now();
    if (!force && (now - lastUpdate < 220 || Math.hypot(x - lastX, z - lastZ) < 16)) return;
    lastX = x; lastZ = z; lastUpdate = now;
    for (const mesh of near.children) mesh.count = 0;
    const distance = b => Math.hypot(Math.max(b.detailBounds.minX - x, 0, x - b.detailBounds.maxX), Math.max(b.detailBounds.minZ - z, 0, z - b.detailBounds.maxZ));
    const buildings = index.near(x, z, radius).filter(b => distance(b) < radius).sort((a, b) => distance(a) - distance(b)).slice(0, 210);
    for (const building of buildings) {
      // Untyped ground-level parts can be ancient columns/walls whose parent
      // historic tag was not inherited. Only explicitly domestic/commercial
      // parts receive invented facade finish; historic and raised parts do not.
      if (skip?.has(building.id) || building.historic || (building.part && !FACADE_PART_KINDS.has(building.kind)) || Number(building.minHeight) > 0 || /^(roof|ruins|temple|church|chapel|cathedral|shed|garage|garages|column|steps)$/.test(building.kind)) continue;
      const wallHeight = Number(heights?.get(building.id) ?? building.height) - (Number(building.roofHeight) || 0), base = building.groundBase ?? Math.min(...building.points.map(p => heightAt(p.x, p.z)));
      if (wallHeight < 4.2) continue;
      const seed = hash(building.id), floorHeight = 3.15, floors = Math.max(1, Math.min(15, Math.floor(wallHeight / floorHeight)));
      const ring = building.points;
      let area = 0;
      for (let i = 0; i < ring.length; i++) { const a = ring[i], b = ring[(i + 1) % ring.length]; area += a.x * b.z - b.x * a.z; }
      const direction = area >= 0 ? 1 : -1;
      for (let i = 0; i < ring.length; i++) {
        const a = ring[i], b = ring[(i + 1) % ring.length], dx = b.x - a.x, dz = b.z - a.z, length = Math.hypot(dx, dz);
        if (length < 3.1 || length > 110) continue;
        const nx = dz / length * direction, nz = -dx / length * direction;
        const midX = (a.x + b.x) / 2, midZ = (a.z + b.z) / 2;
        // Party walls have no windows; mapped neighbouring buildings win.
        if (index.occupied(midX + nx * .45, midZ + nz * .45)) continue;
        const angle = Math.atan2(nx, -nz);
        const columns = Math.max(1, Math.floor((length - 1) / 3.05));
        const windowWidth = Math.min(1.4, (length - 1.0) / columns * .49);
        const topHere = building.wallTops ? Math.min(building.wallTops[i], building.wallTops[(i + 1) % ring.length]) : wallHeight;
        for (let floor = 0; floor < floors; floor++) {
          const elevation = 1.9 + floor * floorHeight;
          if (elevation + 1 > topHere || base + elevation < heightAt(midX, midZ) + 1.1) continue;
          if (floor > 0) put(bands, MAX_BANDS, midX + nx * .075, base + floor * floorHeight + .1, -(midZ + nz * .075), angle, Math.max(.2, length - .14), .12, .16);
          for (let col = 0; col < columns; col++) {
            const t = (col + .5) / columns, wx = a.x + dx * t, wz = a.z + dz * t;
            put(windows, MAX_WINDOWS, wx + nx * .045, base + elevation, -(wz + nz * .045), angle, windowWidth, floor ? 1.58 : 1.88, 1);
            // Limited apartment balconies supply readable depth; no detail is
            // added to mapped monuments, roofs, parts or historical structures.
            if (floor > 0 && floor < 7 && (building.kind === 'apartments' || building.kind === 'residential' || building.kind === 'yes') && (seed + col) % 3 !== 0 && !index.occupied(wx + nx * .85, wz + nz * .85)) {
              put(balconies, MAX_BALCONIES, wx + nx * .43, base + elevation - 1.03, -(wz + nz * .43), angle, windowWidth + .65, .13, .82);
              const railWidth = windowWidth + .65;
              put(rails, MAX_RAIL_PARTS, wx + nx * .83, base + elevation - .22, -(wz + nz * .83), angle, railWidth, .055, .045);
              for (const along of [-.46, 0, .46]) {
                put(rails, MAX_RAIL_PARTS, wx + nx * .83 + dx / length * along * railWidth, base + elevation - .61, -(wz + nz * .83 + dz / length * along * railWidth), angle, .04, .8, .04);
              }
            }
          }
        }
        if (!building.roof) put(bands, MAX_BANDS, midX + nx * .02, base + wallHeight + .12, -(midZ + nz * .02), angle, length, .24, .17);
      }
    }
    for (const mesh of near.children) mesh.instanceMatrix.needsUpdate = true;
  }
  function dispose() {
    root.removeFromParent();
    const geometries = new Set(), materials = new Set(), textures = new Set();
    root.traverse(o => { if (o.geometry) geometries.add(o.geometry); if (o.material) materials.add(o.material); });
    for (const material of materials) { if (material.map) textures.add(material.map); material.dispose(); }
    for (const geometry of geometries) geometry.dispose();
    for (const texture of textures) texture.dispose();
  }
  return { group: root, update, dispose, detailOrigin: 'Mapped OSM volumes and terrain; procedural windows, cornices, balconies and road finishes.' };
}
