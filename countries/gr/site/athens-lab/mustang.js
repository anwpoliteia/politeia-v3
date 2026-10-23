/*! © 2026 ΑΝΩ ΠΟΛΙΤΕΙΑ · ipoliteia.gr · SPDX-License-Identifier: AGPL-3.0-or-later · Κείμενα: CC BY-NC-ND 4.0 · Όνομα και Δωδεκάπλευρο: με επιφύλαξη παντός δικαιώματος · βλ. /COPYRIGHT.md */
import * as THREE from 'three';

// Ford Mustang Dark Horse (seventh generation, S650, 2024-2026) in Shadow Black. A procedural
// model from the published dimensions (4.81 m long, 1.92 m wide, 1.40 m high, 2.72 m wheelbase)
// and photographs: a lofted body with wheel arches, the fastback greenhouse, pedestal wing, hood
// vents, honeycomb grille, tri-bar lamps, quad exhausts and twin-spoke wheels. No badges.
// Metres; u runs forward along the car and the nose points to -z.

const FRONT = 2.44, REAR = -2.46, FRONT_AXLE = 1.40, REAR_AXLE = -1.32, TYRE = .345, ARCH = .42;
const N_TOP = 5, N_BOTTOM = 6, GLASS_BASE = .86;

/** Smooth curve through [u, value] knots (cubic Hermite, Catmull-Rom tangents). */
function curve(knots) {
  const last = knots.length - 1;
  const tangent = i => { const a = knots[Math.max(0, i - 1)], b = knots[Math.min(last, i + 1)]; return (b[1] - a[1]) / (b[0] - a[0]); };
  return u => {
    if (u <= knots[0][0]) return knots[0][1];
    if (u >= knots[last][0]) return knots[last][1];
    let i = 0; while (knots[i + 1][0] < u) i++;
    const [u0, v0] = knots[i], [u1, v1] = knots[i + 1], h = u1 - u0, t = (u - u0) / h, t2 = t * t, t3 = t2 * t;
    return (2 * t3 - 3 * t2 + 1) * v0 + (t3 - 2 * t2 + t) * h * tangent(i) + (3 * t2 - 2 * t3) * v1 + (t3 - t2) * h * tangent(i + 1);
  };
}

// Body: half-width, top line (hood, beltline, deck, ducktail), widest line and sill, rear to front.
const halfWidth = curve([[-2.46, .86], [-2.42, .9], [-2.3, .935], [-1.75, .958], [-1.25, .962], [-.6, .935], [.4, .93], [1.3, .938], [1.95, .915], [2.25, .87], [2.38, .8], [2.44, .74]]);
const top = curve([[-2.46, .95], [-2.4, 1.05], [-2.25, 1.035], [-1.9, 1.01], [-1.2, 1], [0, .985], [.85, .975], [1.5, .9], [2.1, .8], [2.36, .75], [2.44, .7]]);
const middle = curve([[-2.46, .56], [-1.3, .6], [0, .6], [1.4, .58], [2.44, .5]]);
const bottom = curve([[-2.46, .26], [-2.3, .22], [-1.9, .21], [1.9, .21], [2.3, .2], [2.44, .19]]);
const crown = curve([[-2.46, .01], [.8, .015], [1.2, .035], [2.2, .03], [2.44, .01]]);
// Greenhouse: roof line (windshield, roof, fastback) and half-widths at the shoulders and the roof.
const roofLine = curve([[-1.94, 1], [-1.4, 1.165], [-.95, 1.31], [-.6, 1.385], [-.3, 1.398], [0, 1.345], [.45, 1.15], [.88, .96]]);
const glassBase = curve([[-1.94, .62], [-1.5, .74], [-.9, .8], [.5, .8], [.88, .78]]);
const glassTop = curve([[-1.94, .5], [-1.4, .56], [-.8, .63], [0, .64], [.6, .62], [.88, .6]]);

const across = (c, n) => Math.sign(c) * Math.pow(Math.abs(c), 2 / n);

/** A point on the body section at u; phi runs from the right side (0) over the top (π/2) and under. */
function bodyPoint(u, phi) {
  const c = Math.cos(phi), s = Math.sin(phi), w = halfWidth(u);
  let yb = bottom(u);
  for (const axle of [FRONT_AXLE, REAR_AXLE]) {
    const d = Math.abs(u - axle);
    if (d < ARCH) yb = Math.max(yb, TYRE + Math.sqrt(ARCH * ARCH - d * d));   // wheel arch
  }
  const ym = Math.max(middle(u), yb + .04), yt = top(u);
  if (s >= 0) {
    const k = Math.pow(s, 2 / N_TOP), x = w * (1 - .07 * k) * across(c, N_TOP);
    return [x, ym + (yt - ym) * k + crown(u) * (1 - (x / w) ** 2) * k];
  }
  const k = Math.pow(-s, 2 / N_BOTTOM);
  return [w * (1 - .04 * k) * across(c, N_BOTTOM), ym - (ym - yb) * k];
}

function glassPoint(u, phi) {
  const c = Math.cos(phi), k = Math.pow(Math.max(0, Math.sin(phi)), 1 / 3), r = Math.max(roofLine(u), GLASS_BASE);
  const w = glassBase(u) + (glassTop(u) - glassBase(u)) * k;
  return [w * across(c, 6), GLASS_BASE + (r - GLASS_BASE) * k];
}

/** Windshield, rear glass and side windows on the greenhouse; the rest is body colour. */
function isGlass(u, phi) {
  if (Math.pow(Math.abs(Math.cos(phi)), 1 / 3) < .84) return (u > .06 && u < .84) || (u < -.98 && u > -1.84);
  const y = glassPoint(u, phi)[1];
  return u > -1.62 && u < .62 && y > .975 && y < roofLine(u) - .06;
}

/** Height of the body's upper surface at (u, x). */
function topAt(u, x) {
  let lo = 0, hi = Math.PI / 2;
  for (let k = 0; k < 20; k++) { const mid = (lo + hi) / 2; if (bodyPoint(u, mid)[0] > Math.abs(x)) lo = mid; else hi = mid; }
  return bodyPoint(u, (lo + hi) / 2)[1];
}

const range = (n, from, to) => Array.from({ length: n }, (_, i) => from + (to - from) * i / (n - 1));

function loft({ stations, ring, closed, point, glass = () => false }) {
  const positions = [], paint = [], glazing = [], m = ring.length;
  for (const u of stations) for (const phi of ring) { const [x, y] = point(u, phi); positions.push(x, y, -u); }
  for (let i = 0; i + 1 < stations.length; i++) {
    for (let j = 0; j < (closed ? m : m - 1); j++) {
      const a = i * m + j, b = i * m + (j + 1) % m, c = a + m, d = b + m;
      const phi = (ring[j] + (j + 1 < m ? ring[j + 1] : ring[0] + Math.PI * 2)) / 2;
      (glass((stations[i] + stations[i + 1]) / 2, phi) ? glazing : paint).push(a, c, b, b, c, d);
    }
  }
  return { positions, paint, glazing };
}

/** Flat end of the body at u, with its own vertices so the edge stays crisp. */
function cap({ positions, paint }, u, ring, facing) {
  const start = positions.length / 3, pts = ring.map(phi => bodyPoint(u, phi));
  positions.push(0, pts.reduce((s, p) => s + p[1], 0) / pts.length, -u);
  for (const [x, y] of pts) positions.push(x, y, -u);
  for (let j = 0; j < pts.length; j++) {
    const a = start + 1 + j, b = start + 1 + (j + 1) % pts.length;
    paint.push(...(facing < 0 ? [start, b, a] : [start, a, b]));
  }
}

function surface({ positions, paint, glazing }) {
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  g.setIndex([...paint, ...glazing]);
  g.addGroup(0, paint.length, 0); g.addGroup(paint.length, glazing.length, 1);
  g.computeVertexNormals();
  return g;
}

function carEnvironment() {   // sky, a pale Athenian skyline and the street, for the paint to reflect
  const w = 512, h = 256, canvas = Object.assign(document.createElement('canvas'), { width: w, height: h }), ctx = canvas.getContext('2d');
  const sky = ctx.createLinearGradient(0, 0, 0, h / 2);
  sky.addColorStop(0, '#6f8a98'); sky.addColorStop(.75, '#bfcdd2'); sky.addColorStop(1, '#eef0ea');
  ctx.fillStyle = sky; ctx.fillRect(0, 0, w, h / 2);
  const ground = ctx.createLinearGradient(0, h / 2, 0, h);
  ground.addColorStop(0, '#5d605c'); ground.addColorStop(.3, '#353735'); ground.addColorStop(1, '#161717');
  ctx.fillStyle = ground; ctx.fillRect(0, h / 2, w, h / 2);
  let seed = 7; const rand = () => (seed = seed * 16807 % 2147483647) / 2147483647;
  for (let x = 0; x < w; x += 4 + rand() * 18) {
    const tone = 180 + rand() * 50 | 0, bh = 4 + rand() * 20;
    ctx.fillStyle = `rgb(${tone},${tone - 10},${tone - 30})`; ctx.fillRect(x, h / 2 - bh, 6 + rand() * 22, bh);
  }
  ctx.fillStyle = '#ffffff55';
  for (const x of [60, 210, 330, 450]) { ctx.beginPath(); ctx.ellipse(x, 30 + x % 3 * 8, 46, 6, 0, 0, Math.PI * 2); ctx.fill(); }
  ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.ellipse(w * .72, h * .16, 10, 8, 0, 0, Math.PI * 2); ctx.fill();
  const texture = new THREE.CanvasTexture(canvas);
  texture.mapping = THREE.EquirectangularReflectionMapping; texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function honeycomb() {
  const canvas = Object.assign(document.createElement('canvas'), { width: 52, height: 45 }), ctx = canvas.getContext('2d');
  ctx.fillStyle = '#2a2c30'; ctx.fillRect(0, 0, 52, 45); ctx.fillStyle = '#030304';
  for (const [x, y] of [[0, 0], [26, 0], [52, 0], [13, 22.5], [39, 22.5], [0, 45], [26, 45], [52, 45]]) {
    ctx.beginPath();
    for (let k = 0; k < 6; k++) { const a = Math.PI / 3 * k + Math.PI / 6; ctx.lineTo(x + 12.5 * Math.cos(a), y + 12.5 * Math.sin(a)); }
    ctx.fill();
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping; texture.repeat.set(15, 17); texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

// The detailed model: "[FREE] 2024 Ford Mustang Dark Horse" by livanovbog (CC BY 4.0), baked by
// research/athens-region/convert-car.py into car/mustang.bin. The procedural car below stands in
// until it loads, and if it cannot.
const CAR_FILE = './car/mustang.bin?v=20261020-3';

function bakedMaterial(name, spec, env, load) {
  const black = (roughness, clearcoat = 0) => new THREE.MeshPhysicalMaterial({ color: 0x0a0a0b, roughness, metalness: .1, clearcoat, clearcoatRoughness: .1, envMap: env, envMapIntensity: .5 });
  const metal = (color, roughness) => new THREE.MeshStandardMaterial({ color, metalness: .9, roughness, envMap: env });
  switch (name) {
    case 'M_CarPaint': return new THREE.MeshPhysicalMaterial({ color: 0x020203, metalness: .2, roughness: .3, clearcoat: 1, clearcoatRoughness: .04, envMap: env, envMapIntensity: .5 });
    case 'M_CarPaint_Trim': return black(.25, 1);
    case 'M_Glass_Window': return new THREE.MeshPhysicalMaterial({ color: 0x0c1218, roughness: .04, transparent: true, opacity: .5, depthWrite: false, envMap: env, envMapIntensity: 1.3 });
    case 'M_LGlass_InnerClear': return new THREE.MeshPhysicalMaterial({ color: 0xffffff, roughness: 0, transparent: true, opacity: .18, depthWrite: false, envMap: env, envMapIntensity: 1.5 });
    case 'M_LGlass_OuterRed': return new THREE.MeshPhysicalMaterial({ color: 0x8c0606, emissive: 0x3a0000, roughness: .05, transparent: true, opacity: .6, depthWrite: false, envMap: env });
    case 'M_GlassOpaque_Mirror': return metal(0xd0d4d8, .04);
    case 'M_Opaque_Chrome': return metal(0xc4c7cb, .15);
    case 'M_Opaque_AluminumRough': case 'standardSurface1': return metal(0x8a8d90, .35);
    case 'M_Opaque_AluminumBlackRough': return metal(0x1c1c1e, .3);
    case 'M_Rim_Main': return metal(0x232427, .3);
    case 'M_BrakeDisc': return metal(0x5a5d60, .5);
    case 'M_Caliper': return new THREE.MeshStandardMaterial({ color: 0x9a0f12, roughness: .45, metalness: .3 });
    case 'M_LicensePlate': return new THREE.MeshStandardMaterial({ color: 0xe4e4e4, roughness: .6 });
  }
  if (spec.map) {
    const material = new THREE.MeshStandardMaterial({ map: load(spec.map), roughness: name === 'M_Tire' ? .9 : .6, metalness: name === 'M_Badge' || name === 'M_RimBadge' ? .6 : .1, envMap: env });
    if (name === 'M_Badge' || name === 'M_RimBadge') material.alphaTest = .5;
    if (spec.emissiveMap) { material.emissiveMap = load(spec.emissiveMap); material.emissive = new THREE.Color(0xffffff); material.emissiveIntensity = name === 'M_LBucket' ? 1.2 : .6; }
    return material;
  }
  return black(.7);   // plastics, grille, trim, window surrounds
}

/** The detailed Mustang, standing on y = 0 with its nose to -z; userData.roll(distance) turns the wheels. */
export async function loadMustang() {
  const response = await fetch(CAR_FILE);
  if (!response.ok) throw new Error(`mustang.bin: ${response.status}`);
  const buffer = await response.arrayBuffer();
  const headerLength = new DataView(buffer).getUint32(0, true);
  const header = JSON.parse(new TextDecoder().decode(new Uint8Array(buffer, 4, headerLength)));
  const body = 4 + headerLength, env = carEnvironment(), textures = new Map(), materials = new Map();
  const load = file => {
    if (!textures.has(file)) {
      const texture = new THREE.TextureLoader().load(`./car/${file}`);
      texture.flipY = false; texture.colorSpace = THREE.SRGBColorSpace; texture.anisotropy = 4;
      textures.set(file, texture);
    }
    return textures.get(file);
  };
  const group = new THREE.Group(), hubs = header.wheels.map(w => {
    const hub = new THREE.Group(); hub.position.fromArray(w.centre); group.add(hub); return hub;
  });
  const still = header.wheels.map(w => { const g = new THREE.Group(); g.position.fromArray(w.centre); group.add(g); return g; });
  for (const e of header.groups) {
    const g = new THREE.BufferGeometry(), q = new Int16Array(buffer, body + e.position, e.vertices * 3), positions = new Float32Array(q.length);
    for (let i = 0; i < q.length; i++) positions[i] = e.posMin[i % 3] + (q[i] + 32768) / 65535 * e.posScale[i % 3];
    g.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    g.setAttribute('normal', new THREE.BufferAttribute(new Int8Array(buffer, body + e.normal, e.vertices * 3), 3, true));
    if (e.uv !== undefined) {
      const t = new Uint16Array(buffer, body + e.uv, e.vertices * 2), uv = new Float32Array(t.length);
      for (let i = 0; i < t.length; i++) uv[i] = e.uvMin[i % 2] + t[i] / 65535 * e.uvScale[i % 2];
      g.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
    }
    g.setIndex(new THREE.BufferAttribute(e.indexType === 'u32' ? new Uint32Array(buffer, body + e.index, e.indices) : new Uint16Array(buffer, body + e.index, e.indices), 1));
    if (!materials.has(e.material)) materials.set(e.material, bakedMaterial(e.material, header.materials[e.material] || {}, env, load));
    const material = materials.get(e.material), mesh = new THREE.Mesh(g, material);
    mesh.castShadow = !material.transparent;
    (e.wheel < 0 ? group : e.material === 'M_Caliper' ? still[e.wheel] : hubs[e.wheel]).add(mesh);
  }
  group.userData.roll = distance => { for (let i = 0; i < hubs.length; i++) hubs[i].rotation.x -= distance / header.wheels[i].radius; };
  group.userData.credit = header.credit;
  return group;
}

export function makeCar() {
  const group = new THREE.Group(), env = carEnvironment(), wheels = [];
  const paint = new THREE.MeshPhysicalMaterial({ color: 0x050607, metalness: .25, roughness: .38, clearcoat: 1, clearcoatRoughness: .05, envMap: env, envMapIntensity: .6 });
  const glass = new THREE.MeshPhysicalMaterial({ color: 0x18222a, metalness: .3, roughness: .02, envMap: env, envMapIntensity: 1.5 });
  const trim = new THREE.MeshStandardMaterial({ color: 0x0c0d0f, roughness: .7, metalness: .1 });
  const grille = new THREE.MeshStandardMaterial({ map: honeycomb(), roughness: .6 });
  const smoked = new THREE.MeshPhysicalMaterial({ color: 0x1c0507, roughness: .05, clearcoat: 1, envMap: env, envMapIntensity: .8 });
  const chrome = new THREE.MeshStandardMaterial({ color: 0xa4a7ac, metalness: 1, roughness: .18, envMap: env, side: THREE.DoubleSide });
  const led = new THREE.MeshBasicMaterial({ color: 0xf4f8ff }), red = new THREE.MeshBasicMaterial({ color: 0xff2018 });
  const wheel = {
    rubber: new THREE.MeshStandardMaterial({ color: 0x111112, roughness: .9, side: THREE.DoubleSide }),
    barrel: new THREE.MeshStandardMaterial({ color: 0x0b0b0c, roughness: .6, side: THREE.DoubleSide }),
    alloy: new THREE.MeshStandardMaterial({ color: 0x1f2023, metalness: .8, roughness: .28, envMap: env }),
    disc: new THREE.MeshStandardMaterial({ color: 0x77797c, metalness: .9, roughness: .45 }),
    caliper: new THREE.MeshStandardMaterial({ color: 0xb3151a, roughness: .4 }),
  };
  const add = (geometry, material, parent = group) => { const m = new THREE.Mesh(geometry, material); m.castShadow = true; parent.add(m); return m; };
  const box = (x, y, z, w, h, d, material, parent) => { const m = add(new THREE.BoxGeometry(w, h, d), material, parent); m.position.set(x, y, z); return m; };
  // A flat shape on the rear face (facing 1) or the front face (facing -1); points are [x, y].
  const plate = (points, z, material, facing = 1) => {
    const g = new THREE.ShapeGeometry(new THREE.Shape(points.map(([x, y]) => new THREE.Vector2(facing > 0 ? x : -x, y))));
    if (facing < 0) g.rotateY(Math.PI);
    return add(g.translate(0, 0, z), material);
  };
  // A patch lying on the upper body: from x0..x1 at u0 to x2..x3 at u1.
  const patch = (u0, u1, x0, x1, x2, x3, material) => {
    const positions = [], index = [], n = 6;
    for (let i = 0; i <= n; i++) for (let j = 0; j <= n; j++) {
      const t = i / n, u = u0 + (u1 - u0) * t, a = x0 + (x2 - x0) * t, x = a + (x1 + (x3 - x1) * t - a) * j / n;
      positions.push(x, topAt(u, x) + .004, -u);
    }
    for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) { const a = i * (n + 1) + j, b = a + 1, c = a + n + 1, d = c + 1; index.push(a, b, c, b, d, c); }
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3)); g.setIndex(index); g.computeVertexNormals();
    return add(g, material);
  };

  // Body and greenhouse.
  const ring = range(36, 0, Math.PI * 35 / 36).concat(range(16, Math.PI, Math.PI * 31 / 16));
  const body = loft({ stations: range(100, REAR, FRONT), ring, closed: true, point: bodyPoint });
  cap(body, REAR, ring, 1); cap(body, FRONT, ring, -1);
  add(surface(body), [paint, glass]);
  add(surface(loft({ stations: range(60, -1.94, .88), ring: range(29, 0, Math.PI), closed: false, point: glassPoint, glass: isGlass })), [paint, glass]);

  // Front: honeycomb grille, lower intakes, slim headlamps with the tri-bar daytime lights, splitter.
  const zf = -FRONT - .003;
  plate([[-.58, .28], [.58, .28], [.46, .5], [-.46, .5]], zf, grille, -1);
  box(0, .175, -2.39, 1.42, .025, .14, trim);
  for (const s of [-1, 1]) {
    plate([[s * .46, .29], [s * .64, .3], [s * .62, .4], [s * .48, .4]], zf, grille, -1);
    plate([[s * .28, .555], [s * .64, .535], [s * .66, .585], [s * .32, .605]], zf, glass, -1);
    plate([[s * .31, .561], [s * .62, .543], [s * .62, .551], [s * .31, .569]], zf - .001, led, -1);
    for (const x of [.55, .58, .61]) plate([[s * x, .556], [s * (x + .012), .555], [s * (x + .012), .585], [s * x, .586]], zf - .001, led, -1);
    patch(1.72, 2.12, s < 0 ? -.46 : .12, s < 0 ? -.12 : .46, s < 0 ? -.4 : .1, s < 0 ? -.1 : .4, trim);   // hood vents
  }

  // Rear: tri-bar tail lamps in smoked lenses on a gloss-black panel, plate recess, diffuser, quad exhausts, wing.
  const zr = -REAR + .003;
  plate([[-.38, .77], [.38, .77], [.38, .88], [-.38, .88]], zr, glass);
  plate([[-.27, .42], [.27, .42], [.27, .54], [-.27, .54]], zr, trim);
  for (const s of [-1, 1]) {
    plate([[s * .36, .75], [s * .7, .765], [s * .68, .875], [s * .38, .885]], zr, smoked);
    for (const x of [.44, .53, .62]) plate([[s * (x - .0175), .765], [s * (x + .0175), .765], [s * (x + .0375), .875], [s * (x + .0025), .875]], zr + .002, red);
    for (const x of [.6, .73]) {
      add(new THREE.CylinderGeometry(.046, .046, .16, 20, 1, true).rotateX(Math.PI / 2), chrome).position.set(s * x, .275, 2.4);
      add(new THREE.CircleGeometry(.04, 16), trim).position.set(s * x, .275, 2.474);
    }
    box(s * .5, 1.12, 2.24, .018, .17, .14, paint);   // wing uprights
    box(s * .8, .225, -.04, .08, .04, 1.86, trim);     // side skirts
    const mirror = add(new THREE.SphereGeometry(1, 16, 12), paint); mirror.scale.set(.1, .065, .085); mirror.position.set(s * 1, 1.02, -.62);
    box(s * .93, 1, -.6, .12, .03, .05, trim);
  }
  box(0, .26, 2.36, 1, .08, .22, trim);
  for (const x of [-.33, -.15, .15, .33]) box(x, .24, 2.36, .012, .1, .22, trim);
  const blade = new THREE.Shape();
  blade.moveTo(-2.1, 1.205); blade.quadraticCurveTo(-2.12, 1.235, -2.2, 1.237); blade.lineTo(-2.42, 1.255); blade.lineTo(-2.425, 1.24); blade.quadraticCurveTo(-2.25, 1.2, -2.1, 1.205);
  add(new THREE.ExtrudeGeometry(blade, { depth: 1.56, bevelEnabled: false }).rotateY(Math.PI / 2).translate(-.78, 0, 0), paint);
  const fin = add(new THREE.SphereGeometry(1, 12, 8), paint); fin.scale.set(.03, .035, .09); fin.position.set(0, roofLine(-1) + .01, 1);

  // Wheels: arch liners, tyres, twin-spoke rims, brake discs and calipers.
  for (const axle of [FRONT_AXLE, REAR_AXLE]) {
    box(0, .53, -axle, 1.3, .5, .86, trim);
    for (const x of [-.8, .8]) addWheel(x, -axle);
  }
  function addWheel(x, z) {
    const s = Math.sign(x), hub = new THREE.Group();
    hub.position.set(x, TYRE, z); group.add(hub); wheels.push(hub);
    const profile = [[.25, -.122], [.31, -.129], [.336, -.12], [.345, -.095], [.345, .095], [.336, .12], [.31, .129], [.25, .122]];
    add(new THREE.LatheGeometry(profile.map(([r, y]) => new THREE.Vector2(r, y)), 40).rotateZ(Math.PI / 2), wheel.rubber, hub);
    add(new THREE.CylinderGeometry(.248, .248, .22, 32, 1, true).rotateZ(Math.PI / 2), wheel.barrel, hub);
    add(new THREE.TorusGeometry(.244, .008, 6, 40).rotateY(Math.PI / 2), wheel.alloy, hub).position.x = s * .112;
    add(new THREE.CylinderGeometry(.055, .055, .03, 16).rotateZ(Math.PI / 2), wheel.alloy, hub).position.x = s * .104;
    for (let k = 0; k < 10; k++) {
      const a = (Math.floor(k / 2) * 72 + (k % 2 ? 6 : -6)) * Math.PI / 180;
      const spoke = box(s * .104, Math.cos(a) * .145, Math.sin(a) * .145, .018, .19, .022, wheel.alloy, hub);
      spoke.rotation.x = a;
    }
    add(new THREE.CylinderGeometry(.18, .18, .022, 32).rotateZ(Math.PI / 2), wheel.disc, hub).position.x = s * .01;
    box(x + s * .06, TYRE + .13, z + .06, .05, .1, .17, wheel.caliper);
  }

  group.userData.roll = distance => { for (const hub of wheels) hub.rotation.x -= distance / TYRE; };
  return group;
}
