/*! © 2026 ΑΝΩ ΠΟΛΙΤΕΙΑ · ipoliteia.gr · SPDX-License-Identifier: AGPL-3.0-or-later · Κείμενα: CC BY-NC-ND 4.0 · Όνομα και Δωδεκάπλευρο: με επιφύλαξη παντός δικαιώματος · βλ. /COPYRIGHT.md */
// Local SVG overview: the same GISCO boundaries used by the Politeia atlas.
// No map tiles, second WebGL renderer, location permission or tracking request.
const NS = 'http://www.w3.org/2000/svg';
const EXTENT = { west: 23.12, east: 24.30, south: 37.60, north: 38.35 };
const WIDTH = 300, HEIGHT = 210, PAD = 8;
const COS = Math.cos(38 * Math.PI / 180);
const SCALE = Math.min((WIDTH - PAD * 2) / ((EXTENT.east - EXTENT.west) * COS), (HEIGHT - PAD * 2) / (EXTENT.north - EXTENT.south));
const OFFSET_X = (WIDTH - (EXTENT.east - EXTENT.west) * COS * SCALE) / 2;
const OFFSET_Y = (HEIGHT - (EXTENT.north - EXTENT.south) * SCALE) / 2;
export function projectAttica(lon, lat) {
  return { x: OFFSET_X + (lon - EXTENT.west) * COS * SCALE, y: OFFSET_Y + (EXTENT.north - lat) * SCALE };
}
export function unprojectAttica(x, y) {
  return { lon: EXTENT.west + (x - OFFSET_X) / (COS * SCALE), lat: EXTENT.north - (y - OFFSET_Y) / SCALE };
}
function svgNode(name, attrs, text) {
  const node = document.createElementNS(NS, name);
  for (const [key, value] of Object.entries(attrs || {})) node.setAttribute(key, String(value));
  if (text) node.textContent = text;
  return node;
}
function ringOverlaps(ring) {
  const xs = ring.map(p => p[0]), ys = ring.map(p => p[1]);
  return Math.max(...xs) >= EXTENT.west && Math.min(...xs) <= EXTENT.east && Math.max(...ys) >= EXTENT.south && Math.min(...ys) <= EXTENT.north;
}
function ringPath(ring) {
  return ring.map((p, i) => { const q = projectAttica(p[0], p[1]); return `${i ? 'L' : 'M'}${q.x.toFixed(2)},${q.y.toFixed(2)}`; }).join('') + 'Z';
}
// GeoNames centres from city-data.js; OSM landmark positions from areas.json.
const PLACES = [
  { name: 'Αθήνα', lon: 23.72784, lat: 37.98376, dx: 8, dy: 3, anchor: 'start' },
  { name: 'Πειραιάς', lon: 23.64619, lat: 37.94203, dx: -7, dy: 7, anchor: 'end' },
  { name: 'ΟΑΚΑ', lon: 23.7851268, lat: 38.0379587, dx: 7, dy: -4, anchor: 'start' },
  { name: 'Λ. Βουλιαγμένης', lon: 23.785324, lat: 37.8079865, dx: 7, dy: 6, anchor: 'start' }
];

export function createAtticaMinimap({ mount, origin, coverage, onNavigate }) {
  const panel = document.createElement('aside');
  panel.className = 'attica-minimap glass'; panel.setAttribute('aria-label', 'Χάρτης προσανατολισμού Αττικής');
  panel.innerHTML = `<div class="attica-map-heading"><span>ΑΤΤΙΚΗ</span><span class="attica-north" aria-label="Βορράς">Β ↑</span><button type="button" class="attica-map-toggle" aria-label="Σύμπτυξη χάρτη Αττικής" aria-expanded="true" aria-controls="attica-map-content">−</button></div><div id="attica-map-content"><div class="attica-map-drawing"></div><div class="attica-map-caption"><span class="attica-map-dot"></span><output>Κέντρο θέας</output></div><a class="attica-map-credit" href="../greece-regions.geojson" target="_blank" rel="noopener" title="Όρια Eurostat GISCO NUTS 2024 · τοπωνύμια GeoNames / OpenStreetMap">GISCO · GeoNames · OSM</a></div>`;
  mount.append(panel); document.body.classList.add('has-attica-map');
  const svg = svgNode('svg', { viewBox: `0 0 ${WIDTH} ${HEIGHT}`, role: 'img', 'aria-label': 'Αττική και Σαρωνικός, με βορρά προς τα πάνω' });
  const title = svgNode('title', {}, 'Προσανατολισμός στην Αττική'); svg.append(title);
  const defs = svgNode('defs'), clip = svgNode('clipPath', { id: 'attica-map-clip' });
  clip.append(svgNode('rect', { width: WIDTH, height: HEIGHT, rx: 10 })); defs.append(clip); svg.append(defs);
  svg.append(svgNode('rect', { width: WIDTH, height: HEIGHT, rx: 10, class: 'attica-map-water' }));
  const cartography = svgNode('g', { 'clip-path': 'url(#attica-map-clip)' }); svg.append(cartography);
  const land = svgNode('g'); cartography.append(land);
  if (coverage) {
    const lonScale = 111320 * Math.cos(origin.lat * Math.PI / 180);
    const nw = projectAttica(origin.lon + coverage.minX / lonScale, origin.lat + coverage.maxZ / 111320);
    const se = projectAttica(origin.lon + coverage.maxX / lonScale, origin.lat + coverage.minZ / 111320);
    // Visual frame only: navigation continues to use the unchanged world bounds.
    const side = Math.max(se.x - nw.x, se.y - nw.y) * 1.33;
    const area = svgNode('rect', { x: (nw.x + se.x - side) / 2, y: (nw.y + se.y - side) / 2, width: side, height: side, rx: 2, class: 'attica-map-coverage' });
    area.append(svgNode('title', {}, 'Οπτικό πλαίσιο προσανατολισμού · δεν ορίζει τα όρια πλοήγησης')); cartography.append(area);
  }
  const labels = svgNode('g', { class: 'attica-map-places' }); cartography.append(labels);
  for (const p of PLACES) {
    const q = projectAttica(p.lon, p.lat);
    const placeAttrs = { 'data-lon': p.lon, 'data-lat': p.lat };
    labels.append(svgNode('circle', { cx: q.x, cy: q.y, r: 1.8, ...placeAttrs }));
    labels.append(svgNode('text', { x: q.x + p.dx, y: q.y + p.dy, 'text-anchor': p.anchor, ...placeAttrs }, p.name));
  }
  const scale = svgNode('g', { class: 'attica-map-scale', transform: 'translate(15 191)' });
  const km5 = 5000 / 111320 * SCALE;
  scale.append(svgNode('path', { d: `M0,-3V0H${km5.toFixed(2)}V-3` }));
  scale.append(svgNode('text', { x: km5 / 2, y: -6, 'text-anchor': 'middle' }, '5 χλμ.')); svg.append(scale);
  const marker = svgNode('g', { class: 'attica-map-marker', 'aria-hidden': 'true' });
  const heading = svgNode('g');
  heading.append(svgNode('path', { d: 'M0,0 L-9,-24 Q0,-29 9,-24 Z', class: 'attica-map-cone' }));
  marker.append(heading, svgNode('circle', { r: 7, class: 'attica-map-halo' }), svgNode('circle', { r: 3.5, class: 'attica-map-position' }));
  cartography.append(marker); panel.querySelector('.attica-map-drawing').append(svg);
  const output = panel.querySelector('output'), toggle = panel.querySelector('button'), content = panel.querySelector('#attica-map-content');
  const hint = document.createElement('p');
  hint.className = 'attica-map-hint';
  hint.innerHTML = '<span class="attica-map-mouse-hint">Διπλό αριστερό κλικ · μετάβαση</span><span class="attica-map-touch-hint">Διπλό άγγιγμα · μετάβαση</span>';
  content.insertBefore(hint, panel.querySelector('.attica-map-caption'));
  svg.style.touchAction = 'none';
  let press = null, lastTap = null;
  svg.addEventListener('contextmenu', event => event.preventDefault());
  svg.addEventListener('pointerdown', event => {
    if (event.button !== 0 && event.pointerType !== 'touch') { press = null; lastTap = null; return; }
    event.preventDefault(); event.stopPropagation();
    press = { x: event.clientX, y: event.clientY, time: performance.now(), id: event.pointerId };
  });
  svg.addEventListener('pointerup', event => {
    const start = press; press = null;
    if (!start || start.id !== event.pointerId) return;
    event.preventDefault(); event.stopPropagation();
    const now = performance.now(), type = event.pointerType === 'touch' ? 'touch' : 'left';
    if (now - start.time > 500 || Math.hypot(event.clientX - start.x, event.clientY - start.y) > 8) { lastTap = null; return; }
    const second = lastTap && lastTap.type === type && now - lastTap.time < 500 && Math.hypot(event.clientX - lastTap.x, event.clientY - lastTap.y) < 12;
    if (!second) { lastTap = { x: event.clientX, y: event.clientY, time: now, type }; return; }
    lastTap = null;
    const matrix = svg.getScreenCTM();
    if (!matrix || !mapReady) return;
    const place = event.target.closest('[data-lon][data-lat]');
    if (place) { onNavigate?.({ lon: Number(place.dataset.lon), lat: Number(place.dataset.lat) }); return; }
    const point = new DOMPoint(event.clientX, event.clientY).matrixTransform(matrix.inverse());
    if (point.x < 0 || point.x > WIDTH || point.y < 0 || point.y > HEIGHT) return;
    onNavigate?.(unprojectAttica(point.x, point.y));
  });
  svg.addEventListener('pointercancel', () => { press = null; lastTap = null; });
  svg.addEventListener('pointerleave', () => { press = null; lastTap = null; });
  let collapsed = false, lastUpdate = -Infinity, mapReady = false, disposed = false;
  toggle.addEventListener('click', () => {
    collapsed = !collapsed; content.hidden = collapsed;
    panel.classList.toggle('is-collapsed', collapsed); document.body.classList.toggle('attica-map-collapsed', collapsed);
    toggle.textContent = collapsed ? '+' : '−'; toggle.setAttribute('aria-expanded', String(!collapsed));
    toggle.setAttribute('aria-label', `${collapsed ? 'Εμφάνιση' : 'Σύμπτυξη'} χάρτη Αττικής`);
    window.dispatchEvent(new Event('resize'));
  });
  const abort = new AbortController();
  fetch('../greece-regions.geojson', { signal: abort.signal }).then(r => { if (!r.ok) throw new Error('Map unavailable'); return r.json(); }).then(geo => {
    if (disposed) return;
    // Neighboring land provides context; Attica is drawn last with a warmer tone.
    const features = geo.features.filter(f => ['EL30', 'EL64', 'EL65'].includes(f.properties.NUTS_ID)).sort((a, b) => Number(a.properties.NUTS_ID === 'EL30') - Number(b.properties.NUTS_ID === 'EL30'));
    for (const feature of features) {
      const polygons = feature.geometry.type === 'MultiPolygon' ? feature.geometry.coordinates : [feature.geometry.coordinates];
      for (const polygon of polygons) {
        if (!ringOverlaps(polygon[0])) continue;
        land.append(svgNode('path', { d: polygon.map(ringPath).join(''), 'fill-rule': 'evenodd', class: feature.properties.NUTS_ID === 'EL30' ? 'attica-map-land' : 'attica-map-context' }));
      }
    }
    mapReady = true;
  }).catch(() => { if (!disposed) { output.textContent = 'Ο χάρτης δεν φορτώθηκε'; svg.setAttribute('aria-label', 'Ο χάρτης Αττικής δεν φορτώθηκε'); } });
  function update({ x, z, directionX, directionZ, mode, time }) {
    if (disposed || collapsed || time - lastUpdate < 200) return;
    lastUpdate = time;
    const lon = origin.lon + x / (111320 * Math.cos(origin.lat * Math.PI / 180));
    const lat = origin.lat + z / 111320;
    if (![lon, lat].every(Number.isFinite)) return;
    const q = projectAttica(lon, lat), outside = lon < EXTENT.west || lon > EXTENT.east || lat < EXTENT.south || lat > EXTENT.north;
    marker.setAttribute('transform', `translate(${Math.max(7, Math.min(WIDTH - 7, q.x)).toFixed(2)} ${Math.max(7, Math.min(HEIGHT - 7, q.y)).toFixed(2)})`);
    marker.classList.toggle('is-outside', outside);
    heading.setAttribute('transform', `rotate(${(Math.atan2(directionX, -directionZ) * 180 / Math.PI).toFixed(1)})`);
    if (mapReady) output.textContent = outside ? 'Εκτός χάρτη Αττικής' : mode === 'orbit' ? 'Κέντρο θέας' : mode === 'drive' ? 'Θέση στην οδήγηση' : 'Η θέση σου';
    const description = `${output.textContent} · ${lat.toFixed(4)}° Β, ${lon.toFixed(4)}° Α`;
    output.title = description; title.textContent = description;
  }
  return { update, dispose() { disposed = true; abort.abort(); panel.remove(); document.body.classList.remove('has-attica-map', 'attica-map-collapsed'); } };
}
