/*! © 2026 ΑΝΩ ΠΟΛΙΤΕΙΑ · ipoliteia.gr · SPDX-License-Identifier: AGPL-3.0-or-later · Κείμενα: CC BY-NC-ND 4.0 · Όνομα και Δωδεκάπλευρο: με επιφύλαξη παντός δικαιώματος · βλ. /COPYRIGHT.md */
import * as THREE from 'three';
import { loadMustang, makeCar } from './mustang.js?v=20261020-darkhorse-3';
import { createRoadGraph, findRoute, routeSegments, sampleRoute } from './routing.mjs';

const $ = id => document.getElementById(id);
const metres = n => n >= 1000 ? `${(n / 1000).toFixed(2)} χλμ.` : `${Math.round(n)} μ.`;

export async function createDriving({ scene, camera, heightAt, enterMode, leaveMode, showOverview, say, measureLabels }) {
  const trigger = document.createElement('button');
  trigger.className = 'drive-entry'; trigger.id = 'drive-entry'; trigger.disabled = true;
  trigger.innerHTML = '<span class="drive-entry-icon" aria-hidden="true">↝</span><span><strong>Η Αθήνα από τη θέση του οδηγού</strong><small>Διάλεξε διαδρομή · Από το Α στο Β</small></span><span aria-hidden="true">↗</span>';
  document.querySelector('.mode-switch').after(trigger);
  document.body.insertAdjacentHTML('beforeend', `
    <dialog id="route-dialog" class="route-dialog">
      <button class="dialog-close" id="route-close" aria-label="Κλείσιμο διαδρομής">×</button>
      <p class="eyebrow">ΓΑΙΑ / ΔΙΑΔΡΟΜΕΣ ΣΤΗΝ ΠΟΛΗ</p>
      <h2>Δες την Αθήνα.<br><em>Μέσα από το παρμπρίζ.</em></h2>
      <p>Επίλεξε δύο τόπους και δες τη διαδρομή από τη θέση του οδηγού, πάνω στους καταγεγραμμένους δρόμους.</p>
      <div class="route-fields"><label for="route-from"><b>Α</b> ΑΦΕΤΗΡΙΑ<select id="route-from"></select></label><label for="route-to"><b>Β</b> ΠΡΟΟΡΙΣΜΟΣ<select id="route-to"></select></label></div>
      <div id="route-plan-result" role="status">Διάλεξε αφετηρία και προορισμό.</div>
      <div class="route-plan-actions"><button id="route-plan" class="primary-button">Βρες διαδρομή ↗</button><button id="route-start" class="primary-button" disabled>Στη θέση του οδηγού →</button></div>
      <p class="route-disclaimer">Προσομοίωση κεντρικής Αθήνας · τα σημεία βρίσκονται σε κοντινούς προσβάσιμους δρόμους, όχι απαραίτητα στην είσοδο του χώρου. Χωρίς ζωντανή κυκλοφορία ή φανάρια. Δεν είναι οδηγίες πραγματικής οδήγησης.</p>
    </dialog>
    <section class="drive-hud glass" id="drive-hud" aria-label="Διαδρομή αυτοκινήτου" hidden>
      <div class="drive-hud-top"><div><p class="eyebrow">ΑΠΟ ΤΟ Α ΣΤΟ Β</p><strong id="drive-road">Η διαδρομή σου</strong></div><button id="drive-exit" aria-label="Έξοδος από το αυτοκίνητο">Έξοδος ↗</button></div>
      <div class="drive-instruments"><div class="speed-display"><output id="drive-speed">0</output><span>χλμ./ώρα</span></div><div class="ride-summary"><strong id="drive-remaining">—</strong><span id="drive-state">Έτοιμο για αναχώρηση</span></div><svg id="route-mini" viewBox="0 0 180 100" role="img" aria-label="Χάρτης της διαδρομής"><path id="route-mini-path"/><circle id="route-mini-car" r="4"/></svg></div>
      <label class="ride-progress-label" for="drive-progress">Θέση στη διαδρομή <output id="drive-progress-text">0%</output></label><input id="drive-progress" type="range" min="0" max="1000" value="0" aria-label="Θέση στη διαδρομή">
      <div class="drive-controls"><button id="drive-play" class="drive-main-button">Παύση</button><button id="drive-restart" aria-label="Από την αρχή">↺</button><button id="drive-view" aria-pressed="false">Κάμερα πίσω</button><label for="drive-pace">Έως <select id="drive-pace"><option value="15">15 χλμ./ώρα</option><option value="25" selected>25 χλμ./ώρα</option><option value="35">35 χλμ./ώρα</option></select></label></div>
      <div class="drive-footer"><span>Αυτόματη περιήγηση · Space: παύση</span><button id="drive-change">Άλλη διαδρομή</button></div>
    </section>
    <div id="car-interior" aria-hidden="true" hidden><div class="windshield-edge"></div><div class="dashboard-top"></div><div class="steering-wheel"><i></i><span>ΑΝΩ</span></div><div class="dashboard-line"></div></div>
  `);
  const dialog = $('route-dialog');
  $('route-close').onclick = () => dialog.close();
  let graph;
  try {
    const response = await fetch('../athens-data/driving.json', { cache: 'no-cache' });
    if (!response.ok) throw new Error('Το οδικό δίκτυο δεν φορτώθηκε.');
    graph = createRoadGraph(await response.json());
    if (!graph.destinations?.length) throw new Error('Δεν υπάρχουν διαθέσιμα σημεία διαδρομής.');
  } catch (error) {
    trigger.disabled = false; trigger.querySelector('small').textContent = 'Το οδικό δίκτυο δεν είναι διαθέσιμο';
    trigger.onclick = () => say(`${error.message} Ανανεώστε για νέα προσπάθεια.`);
    return { active: false, update() {}, stop() {} };
  }
  let route = null, segments = [], total = 0, distance = 0, speed = 0, active = false, playing = false, chase = false;
  let drawn = null, currentFrom = null, currentTo = null, lastHud = 0, savedFov = camera.fov, savedBackground, savedFog;
  let mini = null;
  const car = new THREE.Group(); car.visible = false; scene.add(car);
  let carModel = makeCar(), modelRequested = false;   // the procedural car stands in until the detailed one loads
  car.add(carModel);
  function requestModel() {
    if (modelRequested) return;
    modelRequested = true;
    loadMustang().then(model => { car.remove(carModel); carModel = model; car.add(model); })
      .catch(error => console.warn('Detailed car not loaded; keeping the simple one.', error));
  }
  const lookTarget = new THREE.Vector3(), desired = new THREE.Vector3();
  const cameraHelper = new THREE.PerspectiveCamera();
  const destinations = new Map(graph.destinations.map(d => [String(d.id), d]));
  for (const destination of graph.destinations) {
    $('route-from').append(new Option(destination.label, String(destination.id)));
    $('route-to').append(new Option(destination.label, String(destination.id)));
  }
  $('route-from').value = String(graph.defaults?.from ?? graph.destinations[0].id);
  $('route-to').value = String(graph.defaults?.to ?? graph.destinations[Math.min(1, graph.destinations.length - 1)].id);
  trigger.disabled = false;
  trigger.onclick = openPlanner;
  $('route-plan').onclick = plan;
  $('route-start').onclick = start;
  $('drive-play').onclick = () => togglePlayback();
  $('drive-restart').onclick = () => { distance = 0; speed = 0; playing = true; updateCamera(.016, true); hud(); };
  $('drive-exit').onclick = () => stop(true);
  $('drive-change').onclick = openPlanner;
  $('drive-view').onclick = () => {
    chase = !chase;
    $('drive-view').textContent = chase ? 'Θέση οδηγού' : 'Κάμερα πίσω';
    $('drive-view').setAttribute('aria-pressed', String(chase));
    $('car-interior').hidden = chase;
    car.visible = chase;
    updateCamera(.016, true);
  };
  $('drive-progress').oninput = () => {
    distance = Number($('drive-progress').value) / 1000 * total;
    speed = 0; playing = false; updateCamera(.016, true); hud();
  };
  for (const id of ['route-from', 'route-to']) $(id).onchange = () => {
    route = null; $('route-start').disabled = true;
    clearDrawn(); $('route-plan-result').textContent = 'Πάτησε «Βρες διαδρομή» για τη νέα επιλογή.';
  };
  window.addEventListener('keydown', event => {
    if (!active || dialog.open || ['INPUT', 'SELECT', 'TEXTAREA', 'BUTTON'].includes(event.target.tagName)) return;
    if (event.code === 'Space') { event.preventDefault(); togglePlayback(); }
    if (event.code === 'Escape') stop(true);
  });
  window.addEventListener('blur', () => { if (active) { playing = false; speed = 0; hud(); } });
  document.addEventListener('visibilitychange', () => { if (document.hidden && active) { playing = false; speed = 0; hud(); } });

  function openPlanner() {
    requestModel();
    if (active) stop(true);
    dialog.showModal();
    if (!route) plan(false);
  }
  function clearDrawn() {
    if (!drawn) return;
    scene.remove(drawn); drawn.geometry.dispose(); drawn.material.dispose(); drawn = null;
  }
  function plan(show = true) {
    route = null; segments = []; clearDrawn(); $('route-start').disabled = true;
    currentFrom = destinations.get($('route-from').value); currentTo = destinations.get($('route-to').value);
    if (!currentFrom || !currentTo || currentFrom.node === currentTo.node) {
      $('route-plan-result').textContent = 'Επίλεξε δύο διαφορετικά σημεία δρόμου.'; return;
    }
    route = findRoute(graph, currentFrom.node, currentTo.node);
    if (!route?.edges.length) {
      $('route-plan-result').textContent = 'Δεν βρέθηκε συνδεδεμένη διαδρομή στους διαθέσιμους δρόμους. Δοκίμασε άλλο ζευγάρι.'; route = null; return;
    }
    segments = routeSegments(graph, route); total = segments.at(-1).end; distance = 0;
    $('route-plan-result').textContent = `${metres(total)} · Πρόσβαση Α: ${Math.round(currentFrom.snapDistance || 0)} μ. από τον τόπο · Β: ${Math.round(currentTo.snapDistance || 0)} μ. από τον τόπο.`;
    $('route-start').disabled = false;
    drawRoute(); makeMini();
    if (show !== false) showOverview(segments.flatMap(s => [s.a, s.b]));
  }
  function drawRoute() {
    const positions = [];
    for (const s of segments) {
      const steps = Math.max(1, Math.ceil(s.length / 3));
      for (let j = 0; j <= steps; j++) {
        const t = j / steps, x = s.a.x + (s.b.x - s.a.x) * t, z = s.a.z + (s.b.z - s.a.z) * t;
        positions.push(x, heightAt(x, z) + .2, -z);
      }
    }
    const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    drawn = new THREE.Line(geo, new THREE.LineBasicMaterial({ color: 0xf6ce75, transparent: true, opacity: .95 }));
    scene.add(drawn);
  }
  function makeMini() {
    const pts = [segments[0].a, ...segments.map(s => s.b)];
    const xs = pts.map(p => p.x), zs = pts.map(p => p.z);
    const minX = Math.min(...xs), maxX = Math.max(...xs), minZ = Math.min(...zs), maxZ = Math.max(...zs);
    const scale = Math.min(164 / (maxX - minX || 1), 84 / (maxZ - minZ || 1));
    mini = p => ({ x: 90 + (p.x - (minX + maxX) / 2) * scale, y: 50 - (p.z - (minZ + maxZ) / 2) * scale });
    $('route-mini-path').setAttribute('d', pts.map((p, i) => { const m = mini(p); return `${i ? 'L' : 'M'}${m.x.toFixed(1)},${m.y.toFixed(1)}`; }).join(' '));
  }
  function start() {
    if (!route || !segments.length) return;
    dialog.close(); active = true; playing = true; speed = 0; distance = 0; chase = false;
    savedFov = camera.fov; savedBackground = scene.background; savedFog = scene.fog;
    scene.background = new THREE.Color(0xaebfc2); scene.fog = new THREE.Fog(0xaebfc2, 350, 1800);
    camera.fov = 67; camera.updateProjectionMatrix();
    enterMode(); document.body.classList.add('driving');
    $('drive-hud').hidden = false; $('car-interior').hidden = false;
    $('drive-view').textContent = 'Κάμερα πίσω'; $('drive-view').setAttribute('aria-pressed', 'false');
    drawn.visible = false;
    updateCamera(.016, true); hud(); measureLabels();
    say('Αυτόματη διαδρομή. Παύση για να παρατηρήσεις τον δρόμο, ή «Κάμερα πίσω» για εξωτερική θέα.');
  }
  function stop(returnToOverview = true) {
    if (!active) return;
    active = false; playing = false; speed = 0; car.visible = false;
    $('drive-hud').hidden = true; $('car-interior').hidden = true; document.body.classList.remove('driving');
    scene.background = savedBackground; scene.fog = savedFog; camera.fov = savedFov; camera.updateProjectionMatrix();
    if (drawn) drawn.visible = true;
    if (returnToOverview) { leaveMode(); showOverview(segments.flatMap(s => [s.a, s.b])); }
    measureLabels();
  }
  function togglePlayback() {
    if (!active) return;
    if (distance >= total - .01) distance = 0;
    playing = !playing; if (!playing) speed = 0; hud();
  }
  function updateCamera(delta, immediate = false) {
    const p = sampleRoute(segments, distance); if (!p) return;
    const ahead = sampleRoute(segments, Math.min(total, distance + 5));
    const directionX = ahead.x - p.x, directionZ = ahead.z - p.z;
    const mag = Math.hypot(directionX, directionZ);
    const dx = mag > .1 ? directionX / mag : p.dx, dz = mag > .1 ? directionZ / mag : p.dz;
    const y = heightAt(p.x, p.z);
    car.position.set(p.x, y + .12, -p.z); car.rotation.y = Math.atan2(-dx, dz);
    // Stay exactly on the graph centreline. Camera smoothing changes looking direction, not the road position.
    if (chase) {
      const behind = sampleRoute(segments, Math.max(0, distance - 8));
      desired.set(behind.x, heightAt(behind.x, behind.z) + 4.2, -behind.z);
      if (distance < 8) desired.set(p.x - dx * 8, Math.max(y, heightAt(p.x - dx * 8, p.z - dz * 8)) + 4.2, -p.z + dz * 8);
    } else desired.set(p.x, y + 1.35, -p.z);
    camera.position.copy(desired);
    const ly = heightAt(p.x + dx * 8, p.z + dz * 8) + (chase ? 1.0 : 1.35);
    lookTarget.set(p.x + dx * 8, ly, -p.z - dz * 8);
    cameraHelper.position.copy(camera.position); cameraHelper.lookAt(lookTarget);
    if (immediate) camera.quaternion.copy(cameraHelper.quaternion);
    else camera.quaternion.slerp(cameraHelper.quaternion, 1 - Math.exp(-delta * 7));
    if (mini) { const m = mini(p); $('route-mini-car').setAttribute('cx', m.x); $('route-mini-car').setAttribute('cy', m.y); }
  }
  function hud() {
    const p = sampleRoute(segments, distance); if (!p) return;
    const arrived = distance >= total - .01;
    $('drive-speed').textContent = String(Math.round(speed * 3.6));
    $('drive-road').textContent = p.edge.roadName || 'Τοπικός δρόμος';
    $('drive-remaining').textContent = arrived ? 'Έφτασες στον προορισμό' : `${metres(total - distance)} ακόμη`;
    $('drive-state').textContent = arrived ? currentTo.label : playing ? 'Στη διαδρομή · αυτόματη περιήγηση' : 'Σε παύση · παρατήρησε την πόλη';
    $('drive-play').textContent = arrived ? 'Ξανά' : playing ? 'Παύση' : 'Συνέχεια';
    $('drive-progress').value = String(Math.round(distance / total * 1000));
    $('drive-progress-text').textContent = `${Math.round(distance / total * 100)}%`;
    $('drive-hud').dataset.distance = distance.toFixed(1);
    $('drive-hud').dataset.total = total.toFixed(1);
    $('drive-hud').dataset.state = arrived ? 'arrived' : playing ? 'playing' : 'paused';
  }
  function update(delta, time) {
    if (!active) return;
    if (document.querySelector('dialog[open]')) { playing = false; speed = 0; }
    if (playing) {
      const p = sampleRoute(segments, distance), s = segments[p.segment];
      let limit = Math.min(Number($('drive-pace').value), p.edge.speedKph || 25) / 3.6;
      // Reduce approach speed for sharp corners instead of cutting a spline across buildings.
      const next = segments[p.segment + 1];
      if (next && s.end - distance < 18) {
        const cosine = p.dx * (next.b.x - next.a.x) / next.length + p.dz * (next.b.z - next.a.z) / next.length;
        if (cosine < .75) limit = Math.min(limit, 2.6 + Math.max(0, s.end - distance - 4) * .15);
      }
      limit = Math.min(limit, Math.sqrt(Math.max(0, 2.5 * (total - distance))));
      speed += Math.max(-3 * delta, Math.min(1.8 * delta, limit - speed));
      const before = distance;
      distance = Math.min(total, distance + speed * delta);
      carModel.userData.roll?.(distance - before);
      if (total - distance < .15) { distance = total; playing = false; speed = 0; say('Έφτασες. Μπορείς να ξαναδείς τη διαδρομή ή να επιλέξεις άλλη.'); }
    }
    updateCamera(delta);
    if (time - lastHud > 120) { hud(); lastHud = time; }
  }
  return { get active() { return active; }, update, stop };
}
