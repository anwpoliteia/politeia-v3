/*! © 2026 ΑΝΩ ΠΟΛΙΤΕΙΑ · ipoliteia.gr · SPDX-License-Identifier: AGPL-3.0-or-later · Κείμενα: CC BY-NC-ND 4.0 · Όνομα και Δωδεκάπλευρο: με επιφύλαξη παντός δικαιώματος · βλ. /COPYRIGHT.md */
// Country Studio: five steps to a country's edition, entirely in the browser. The rules live in studio-core.js.
import * as core from './studio-core.js?v=20261023-1';

const KEY = 'politeia-studio-project';
const PAGE = 40;
const $ = selector => document.querySelector(selector);
const esc = x => String(x ?? '').replace(/[&<>"']/g, c => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[c]));
const today = () => new Date().toISOString().slice(0, 10);
const ok = r => { if (!r.ok) throw new Error(`${r.status} ${r.url}`); return r; };
const getJson = url => fetch(url).then(ok).then(r => r.json());
const ORIGIN_NAME = 'ΑΝΩ ΠΟΛΙΤΕΙΑ';
const SHORT_NAME = 'ΠΟΛΙΤΕΙΑ';
const KIND_LABELS = {'plan-priority': 'A published plan or programme', 'reported-condition': 'A problem the source records',
  'historical-event': 'A past event the source records'};
const NO_PIN_LABELS = {'network-wide': 'A network or many places (lines, schools, streets)', 'service-wide': 'A service or rule for the whole city',
  'site-selection-required': 'A place still to be chosen', 'needs-map-match': 'A named place I could not find on the map'};

let bundle, countries, sourceList = [], step = 1, project, photos = {}, draft = null, editing = null, page = 0, built = null;
let filter = {missing: true, query: ''};

function blank() {
  return {version: 1, setup: {nuts: '', wikidata: '', level: 2, exclude: [], cityCount: 15}, base: 'en', stems: {}, photoCredits: '',
    country: {code: '', name: '', name_en: '', language: '', locale: '',
      edition: {name: '', tagline: '', domain: '', origin: false, mark: 'citizen-assets/edition-mark.svg#edition-mark', credit: '',
        hero: {src: 'citizen-assets/hero.svg', coords: ''}, photos: {coast: 'citizen-assets/coast.svg', land: 'citizen-assets/land.svg'}},
      map: {regions: 'country-regions.geojson'}, modules: {}, contentNotice: ''},
    regionsGeo: null, places: {regions: [], cities: []},
    research: {reviewedAt: today(), status: 'draft', coverage: '', method: '', records: []}, catalogue: {}};
}

// ---- Saving --------------------------------------------------------------------------------------------------
let timer;
function save() {
  clearTimeout(timer);
  timer = setTimeout(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(project));
      $('#st-saved').textContent = 'Saved in this browser · ' + new Date().toLocaleTimeString();
    } catch {
      $('#st-saved').textContent = 'This browser could not save. Use “Save project file”.';
    }
  }, 300);
}

function restore() {
  try { return JSON.parse(localStorage.getItem(KEY) || 'null'); } catch { return null; }
}

function download(name, bytes, type) {
  const url = URL.createObjectURL(new Blob([bytes], {type}));
  const a = Object.assign(document.createElement('a'), {href: url, download: name});
  document.body.append(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
}

const getPath = (object, path) => path.split('.').reduce((o, k) => o?.[k], object);
function setPath(object, path, value) {
  const keys = path.split('.'), last = keys.pop();
  keys.reduce((o, k) => (o[k] ??= {}), object)[last] = value;
}

// ---- Status of each step -------------------------------------------------------------------------------------
const cityIds = () => new Set(project.places.cities.map(c => c.id));
const recordProblems = r => core.problemsIn(r, cityIds());
// The checker's messages (shared with tools/compile_pack.py) in the form's words. The slug comes from the title on keep.
const PLAIN = {
  'missing title': 'Write a title.',
  'missing problem': 'Write the problem or plan, as the source states it.',
  'missing action': 'Write your proposal.',
  'missing counter': 'Write a counter-argument.',
  'missing measure': 'Say how we will see the difference.',
  'missing responsibility': 'Say who is responsible.',
  'missing locationName': 'Name the place.',
  'exactly two steps': 'Fill in both steps.',
  'no source': 'Add at least one source.',
  'source without a link': 'Give each source its link (https://…).',
  'source without an access date (YYYY-MM-DD)': 'Give each source the date you read it (YYYY-MM-DD).',
  'source needs publisher, locator (where to look) and evidence (what it says)': 'For each source, say who published it, where to look and what it says.',
  'coordinateNote: one sentence on what the pin (or its absence) means': 'Write one sentence about the pin, or why there is none.',
  'mapped location needs valid [lon, lat] and coordinateSources': 'Find the place on OpenStreetMap, or choose “No pin”.',
};
const draftProblems = r => recordProblems(r).filter(p => p !== 'missing slug').map(p => PLAIN[p] || p);
const codeProblem = () => (/^[a-z0-9-]{2,12}$/.test(project.country.code) ? (project.country.code === 'gr' ? 'The code gr belongs to the original edition; choose another.' : '') : 'Choose a short code: 2–12 lowercase letters, digits or dashes.');
const translated = () => sourceList.filter(m => (project.catalogue[m] || '').trim()).length;
const done = {
  1: () => project.country.name && !core.checkEdition(project.country).length && !codeProblem() && project.country.language,
  2: () => project.regionsGeo && project.places.cities.length > 0,
  3: () => project.research.records.length > 0 && project.research.records.every(r => !recordProblems(r).length),
  4: () => project.country.language === core.SOURCE_LANGUAGE || translated() === sourceList.length,
  5: () => Boolean(built && !built.problems.length),
};

function values() {
  const first = project.places.cities[0];
  return {EDITION: project.country.edition.name || '[EDITION]', COUNTRY: project.country.name || '[COUNTRY]', CAPITAL: first?.name || '[CAPITAL]',
    REGIONS: project.places.regions.length || '[REGIONS]', CITIES: project.places.cities.length || '[CITIES]'};
}

function baseText(message) {
  const base = project.base;
  if (base === 'en') return core.fillPlaceholders(bundle.reference.en[message] || '', values());
  if (base === 'fr') return (bundle.reference.fr[message] || '').split('CITÉ COMMUNE').join(project.country.edition.name || '[EDITION]');
  if (base === 'el') return message.split(ORIGIN_NAME).join(project.country.edition.name).split(SHORT_NAME).join(project.country.edition.name);
  return '';
}

// ---- Rendering -----------------------------------------------------------------------------------------------
function render() {
  document.querySelectorAll('[data-step]').forEach(b => {
    b.toggleAttribute('aria-current', Number(b.dataset.step) === step);
    if (Number(b.dataset.step) === step) b.setAttribute('aria-current', 'step');
    b.classList.toggle('done', Boolean(done[b.dataset.step]()));
  });
  $('#st-main').innerHTML = [, stepCountry, stepMap, stepPriorities, stepLanguage, stepPublish][step]();
}

const field = (label, path, hint = '', type = 'text', wide = false) => `<label class="st-field"${wide ? ' style="grid-column:1/-1"' : ''}>${label}`
  + (type === 'textarea' ? `<textarea data-bind="${path}">${esc(getPath(project, path))}</textarea>`
    : `<input type="${type}" data-bind="${path}" value="${esc(getPath(project, path))}">`) + (hint ? `<small>${hint}</small>` : '') + '</label>';
const problemList = items => (items.length ? `<ul class="st-problems">${items.map(p => `<li>${esc(p)}</li>`).join('')}</ul>` : '');
const next = n => `<div class="st-actions"><button type="button" class="st-primary" data-step="${n}">Next: ${['', '', 'Map', 'Priorities', 'Language', 'Publish'][n]} →</button></div>`;

function stepCountry() {
  const chosen = project.setup.nuts;
  const options = countries.countries.map(c => `<option value="${c.nuts}"${c.nuts === chosen ? ' selected' : ''}>${esc(c.english)} — ${esc(c.name)}</option>`).join('');
  const problems = [...core.checkEdition(project.country), codeProblem()].filter(Boolean);
  return `<h2>1 · Your country and your edition's name</h2>
    <p class="st-note">Your edition is a new site of its own: it keeps the five stages and the interface, and gets your country's map, priorities and language.</p>
    <div class="st-card st-grid">
      <label class="st-field">Country<select data-action="country"><option value="">Choose…</option>${options}</select><small>Not listed? Any country with Eurostat NUTS regions can be added to studio/countries.json.</small></label>
      ${field("Your edition's name", 'country.edition.name', 'Your own name, not “' + ORIGIN_NAME + '” or “Politeia”.')}
      ${field('Short tagline', 'country.edition.tagline', 'One line under the name, e.g. “The next day, together.”')}
      ${field('Short code', 'country.code', 'Used in links between editions, e.g. de, it, pt.')}
      ${field('Language', 'country.language', 'Two-letter code of the interface language, e.g. de.')}
      ${field('Date and number format', 'country.locale', 'e.g. de-DE.')}
      ${field('Credit line', 'country.edition.credit', 'Required. It must name ' + ORIGIN_NAME + ' and ipoliteia.gr; translate the rest.', 'text', true)}
      ${field('Your web address (optional)', 'country.edition.domain', 'For example example.org, without https://. Other editions will link to it.')}
      ${field('Draft notice', 'country.contentNotice', 'Shown on every page until people in your country have reviewed the priorities. Clear it only then.', 'textarea', true)}
    </div>${problemList(problems)}${next(2)}`;
}

function miniMap() {
  if (!project.regionsGeo) return '';
  const {lon0, lat0, sx, sy} = project.country.map.mini, at = ([lon, lat]) => [(lon - lon0) * sx, (lat0 - lat) * sy];
  const rings = g => (g.type === 'MultiPolygon' ? g.coordinates : [g.coordinates]).flat();
  const paths = project.regionsGeo.features.map(f => `<path d="${rings(f.geometry).map(r => r.map((c, i) => (i ? 'L' : 'M') + at(c).map(v => v.toFixed(1)).join(',')).join('') + 'Z').join('')}"/>`).join('');
  const dots = project.places.cities.map(c => { const [x, y] = at(c.center); return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="3"/>`; }).join('');
  return `<svg viewBox="-8 0 270 270" role="img" aria-label="Preview of the map">${paths}${dots}</svg>`;
}

function stepMap() {
  const s = project.setup, loaded = Boolean(project.regionsGeo);
  const regionName = id => project.places.regions.find(r => r.id === id)?.name || id;
  const cities = project.places.cities.map((c, i) => `<tr><td><input type="text" data-city="${i}.name" value="${esc(c.name)}"></td><td>${esc(regionName(c.region))}</td>`
    + `<td>${c.population ? c.population.toLocaleString() : ''}</td><td><input type="text" data-city="${i}.context" value="${esc(c.context)}" placeholder="In a few words: what matters here"></td>`
    + `<td><button type="button" class="st-small" data-action="drop-city" data-index="${i}">Remove</button></td></tr>`).join('');
  return `<h2>2 · Your map</h2>
    <p class="st-note">Regions come from Eurostat (the EU's official regions, called NUTS) and cities from Wikidata. Nothing to draw: press the button.</p>
    <div class="st-card st-grid">
      <label class="st-field">Region level<select data-setup="level">${[1, 2, 3].map(l => `<option${l === Number(s.level) ? ' selected' : ''}>${l}</option>`).join('')}</select><small>Pick the level whose regions people in your country know. The suggestion comes with the country.</small></label>
      <label class="st-field">Leave off the map<input type="text" data-setup="exclude" value="${esc(s.exclude.join(', '))}"><small>NUTS codes of far-away regions, separated by commas.</small></label>
      <label class="st-field">How many cities<input type="number" min="1" max="60" data-setup="cityCount" value="${esc(s.cityCount)}"><small>Every region gets its largest city first.</small></label>
    </div>
    <div class="st-actions"><button type="button" class="st-primary" data-action="load-map"${s.nuts ? '' : ' disabled'}>${loaded ? 'Load the map again' : 'Load the map'}</button><span class="st-note" id="st-status">${s.nuts ? '' : 'Choose your country in step 1 first.'}</span></div>
    ${loaded ? `<div class="st-card st-map">${miniMap()}<div><p><b>${project.places.regions.length}</b> regions · <b>${project.places.cities.length}</b> cities. The first city is the one on the home page.</p>
      <div style="overflow-x:auto"><table><thead><tr><th>City</th><th>Region</th><th>Population</th><th>In a few words</th><th></th></tr></thead><tbody>${cities}</tbody></table></div>
      <h3>Add a city</h3><div class="st-actions" style="margin-top:4px"><input type="text" id="st-new-city" placeholder="City name" style="max-width:260px"><button type="button" class="st-button" data-action="add-city">Find and add</button></div></div></div>${next(3)}` : ''}`;
}

function recordCard(r, i) {
  const problems = recordProblems(r), city = project.places.cities.find(c => c.id === r.cityId);
  return `<div class="st-item"><div><b>${esc(r.title || 'Untitled priority')}</b><small>${esc(city?.name || 'no city')} · ${esc(bundle.sectors.sectors[r.sectorId]?.en || 'no sector')} · `
    + (problems.length ? `<span class="st-bad">${problems.length} to fix</span>` : '<span class="st-good">ready</span>') + `</small></div>`
    + `<div><button type="button" data-action="edit" data-index="${i}">Edit</button><button type="button" data-action="delete" data-index="${i}">Delete</button></div></div>`;
}

function editor() {
  const r = draft, select = (name, options, value) => `<select data-rec="${name}">${options.map(([v, l]) => `<option value="${esc(v)}"${v === value ? ' selected' : ''}>${esc(l)}</option>`).join('')}</select>`;
  const recField = (label, name, hint = '', area = false) => `<label class="st-field">${label}${area ? `<textarea data-rec="${name}">${esc(r[name])}</textarea>` : `<input type="text" data-rec="${name}" value="${esc(r[name])}">`}${hint ? `<small>${hint}</small>` : ''}</label>`;
  const sources = r.sources.map((s, i) => `<div class="st-source"><b>Source ${i + 1}</b><div class="st-grid">`
    + [['title', 'Title of the page or document'], ['url', 'Link (https://…)'], ['publisher', 'Who published it'], ['publishedAt', 'Published on (YYYY-MM-DD, if shown)'],
      ['accessedAt', 'Read on (YYYY-MM-DD)'], ['locator', 'Where to look: the section or heading'], ['evidence', 'What it says, in your own words']]
      .map(([k, l]) => `<label class="st-field">${l}<input type="text" data-src="${i}.${k}" value="${esc(s[k])}"></label>`).join('')
    + `</div>${r.sources.length > 1 ? `<button type="button" class="st-small" data-action="drop-source" data-index="${i}">Remove this source</button>` : ''}</div>`).join('');
  const pinned = Boolean(r.coordinates);
  return `<div class="st-card"><h3>${editing === 'new' ? 'New priority' : 'Edit priority'}</h3>
    <p class="st-note">Use only official pages you have read yourself. Write the facts as the source states them; the proposal, steps and counter-argument are yours.</p>
    <div class="st-grid">
      <label class="st-field">City${select('cityId', project.places.cities.map(c => [c.id, c.name]), r.cityId)}</label>
      <label class="st-field">Sector${select('sectorId', core.SECTORS.map(s => [s, bundle.sectors.sectors[s].en]), r.sectorId)}</label>
      <label class="st-field">What the source is${select('evidenceKind', core.KINDS.map(k => [k, KIND_LABELS[k]]), r.evidenceKind)}</label>
      ${recField('Title', 'title', 'Short, in your language: what could get better.')}
      ${recField('The problem or plan, as the source states it', 'problem', '', true)}
      ${recField('Your proposal', 'action', 'What should happen next, in one sentence.', true)}
      <label class="st-field">Step 1<input type="text" data-step-index="0" value="${esc(r.steps[0])}"></label>
      <label class="st-field">Step 2<input type="text" data-step-index="1" value="${esc(r.steps[1])}"></label>
      ${recField('Counter-argument', 'counter', 'What could go wrong, or who could lose out.', true)}
      ${recField('How we will see the difference', 'measure')}
      ${recField('Who is responsible', 'responsibility')}
      ${recField('Place', 'locationName', 'A named place, or the area the priority covers.')}
    </div>
    <h3>On the map</h3>
    <div class="st-actions" style="margin-top:0"><label><input type="radio" name="pin" data-action="no-pin"${pinned ? '' : ' checked'}> No pin</label><label><input type="radio" name="pin" data-action="want-pin"${pinned ? ' checked' : ''}> A precise place</label></div>
    ${pinned ? `<p class="st-note">Pinned at ${r.coordinates[1].toFixed(5)}, ${r.coordinates[0].toFixed(5)} · <a href="${esc(r.coordinateSources[0]?.url)}" target="_blank" rel="noopener">${esc(r.coordinateSources[0]?.name)} ↗</a></p>`
      : `<label class="st-field">Why there is no pin${select('geographicDisposition', Object.entries(NO_PIN_LABELS), r.geographicDisposition)}</label>`}
    <div class="st-actions" style="margin-top:6px"><button type="button" class="st-button" data-action="find-place">Find “${esc(r.locationName || 'the place')}” on OpenStreetMap</button></div>
    ${recField('About the pin (or its absence), in one sentence', 'coordinateNote')}
    <h3>Sources</h3>${sources}<div class="st-actions"><button type="button" class="st-button" data-action="add-source">Add another source</button></div>
    <div id="st-record-problems">${problemList(draftProblems(r))}</div>
    <div class="st-actions"><button type="button" class="st-primary" data-action="keep">Keep this priority</button><button type="button" class="st-button" data-action="cancel">Cancel</button></div></div>`;
}

function stepPriorities() {
  if (!project.places.cities.length) return '<h2>3 · Priorities</h2><p class="st-note">Load the map in step 2 first: every priority belongs to a city.</p>';
  const records = project.research.records;
  return `<h2>3 · Your country's priorities</h2>
    <p class="st-note">These are what people will see: one card per real, public priority of a city. Start with a few good ones.
    Each needs at least one official source (the city, region or a national agency) and two steps you propose.</p>
    ${editing === null ? `<div class="st-list">${records.map(recordCard).join('') || '<p class="st-note">No priorities yet.</p>'}</div>
      <div class="st-actions"><button type="button" class="st-primary" data-action="new">Add a priority</button></div>` : editor()}
    ${editing === null && records.length ? next(4) : ''}`;
}

function stepLanguage() {
  const language = project.country.language;
  if (!language) return '<h2>4 · Language</h2><p class="st-note">Set your language in step 1 first.</p>';
  const isStem = m => /^[α-ω]+$/.test(m);
  const query = filter.query.toLowerCase();
  const rows = sourceList.filter(m => (!filter.missing || !(project.catalogue[m] || '').trim())
    && (!query || m.toLowerCase().includes(query) || baseText(m).toLowerCase().includes(query) || (project.catalogue[m] || '').toLowerCase().includes(query)));
  const pages = Math.max(1, Math.ceil(rows.length / PAGE));
  page = Math.min(page, pages - 1);
  const shown = rows.slice(page * PAGE, page * PAGE + PAGE);
  const count = translated(), total = sourceList.length;
  const themes = Object.entries(bundle.tags.tags).map(([tag, t]) => `<tr><td>${esc(t.label.en)}</td><td>${esc((t.stems.en || []).join(', '))}</td>`
    + `<td><input type="text" data-stem="${tag}" value="${esc(project.stems[tag] ?? (t.stems[language] || []).join(', '))}"></td></tr>`).join('');
  return `<h2>4 · Your language</h2>
    <p class="st-note">${language === core.SOURCE_LANGUAGE ? 'Your edition is in Greek, the engine\'s own language. Only the lines with the original name must change: choose “Greek” below and press Fill.'
      : 'Every line of the interface, ready to translate. Start from English (your names and numbers are already filled in), then make each line sound right in your language.'}</p>
    <div class="st-card"><div class="st-actions" style="margin-top:0">
      <label class="st-field">Start from<select data-action="base">${[['en', 'English'], ['fr', 'Français'], ['el', 'Greek (the source)'], ['', 'Nothing']].map(([v, l]) => `<option value="${v}"${v === project.base ? ' selected' : ''}>${l}</option>`).join('')}</select></label>
      <button type="button" class="st-button" data-action="fill">Fill every empty line from it</button>
      <label><input type="checkbox" data-action="missing"${filter.missing ? ' checked' : ''}> Only lines still to do</label>
      <input type="text" id="st-search" placeholder="Search" value="${esc(filter.query)}" style="max-width:220px"></div>
      <div class="st-progress"><span style="width:${(100 * count / total).toFixed(1)}%"></span></div><p class="st-note">${count} of ${total} lines translated.</p>
      <table class="st-tr"><thead><tr><th>Original (Greek)</th><th>Starting text</th><th>Your text</th></tr></thead><tbody>
      ${shown.map(m => `<tr><td>${esc(m)}${isStem(m) ? '<span class="st-tag">search word</span>' : ''}</td><td>${esc(baseText(m))}</td>`
        + `<td><textarea data-message="${esc(m)}" rows="1">${esc(project.catalogue[m] || '')}</textarea></td></tr>`).join('') || '<tr><td colspan="3">Nothing to show.</td></tr>'}
      </tbody></table>
      <div class="st-pager"><button type="button" class="st-small" data-action="page" data-delta="-1"${page ? '' : ' disabled'}>← Previous</button><span>Page ${page + 1} of ${pages}</span><button type="button" class="st-small" data-action="page" data-delta="1"${page + 1 < pages ? '' : ' disabled'}>Next →</button></div>
      <p class="st-note">“Search words” are short word beginnings, lower case and without accents, that the site's search uses (for example “school”, “tree”). Quotes become typographic automatically; &lt; &gt; { } and backslashes are not allowed.</p></div>
    <div class="st-card"><h3>Shared themes (Sympoliteia)</h3><p class="st-note">Word beginnings in your language for each theme, separated by commas. They connect your priorities to similar ones in other countries.</p>
      <div style="overflow-x:auto"><table><thead><tr><th>Theme</th><th>English</th><th>Your language</th></tr></thead><tbody>${themes}</tbody></table></div></div>${next(5)}`;
}

function stepPublish() {
  const checks = [
    [done[1](), 'Country, name and credit line', 1], [done[2](), `Map: ${project.places.regions.length} regions, ${project.places.cities.length} cities`, 2],
    [done[3](), `Priorities: ${project.research.records.length}, ${project.research.records.filter(r => !recordProblems(r).length).length} ready`, 3],
    [done[4](), `Language: ${translated()} of ${sourceList.length} lines`, 4]];
  const summary = built ? (built.problems.length ? problemList(built.problems)
    : `<div class="st-card"><p class="st-good">Your site is ready: ${built.files.size} files.</p><div class="st-actions"><button type="button" class="st-primary" data-action="download-site">Download the site (.zip)</button><button type="button" class="st-button" data-action="download-pack">Download the country pack (for GitHub)</button></div>
      <h3>Put it online in two minutes, for free</h3><ol><li>Open <a href="https://app.netlify.com/drop" target="_blank" rel="noopener">app.netlify.com/drop</a> and create a free account.</li><li>Drag the downloaded .zip onto the page. Your site gets an address at once; you can add your own domain later.</li><li>Check all five stages, a priority and the Sympoliteia page.</li></ol>
      <h3>Join the Sympoliteia</h3><p class="st-note">Your site already shows its priorities next to the other countries'. For the others to see yours, send your feed's address (your site + <code>/federation/feed.json</code>) to ipoliteia.gr, or add it to <code>federation/members.json</code> on GitHub.</p>
      <h3>Keep</h3><p class="st-note">Save the project file to change things later. Your source stays public under the AGPL: the .zip already contains it and the licences.</p></div>`) : '';
  return `<h2>5 · Publish</h2>
    <div class="st-card"><ul class="st-check">${checks.map(([good, label, n]) => `<li>${good ? '<span class="st-good">✓</span>' : '<span class="st-bad">•</span>'} ${esc(label)} ${good ? '' : `<button type="button" class="st-small" data-step="${n}">Go</button>`}</li>`).join('')}</ul></div>
    <div class="st-card"><h3>Photos (optional)</h3><p class="st-note">Until you add photos, your site uses simple illustrations. Use photos you are allowed to publish, and say whose they are below.</p>
      <div class="st-grid">${[['hero', 'Home page (wide)'], ['coast', 'Kyma: coast or water'], ['land', 'Kyma: land or food']].map(([k, l]) => `<label class="st-field">${l}<input type="file" accept="image/jpeg,image/png,image/webp" data-photo="${k}"><small>${photos[k] ? esc(photos[k].name) : 'none'}</small></label>`).join('')}</div>
      ${field('Photo credits: author, title, link and licence of each photo', 'photoCredits', '', 'textarea', true)}</div>
    <div class="st-actions"><button type="button" class="st-primary" data-action="build">Build my site</button><span class="st-note" id="st-status"></span></div>${summary}`;
}

// ---- Actions -------------------------------------------------------------------------------------------------
function status(text) { const el = $('#st-status'); if (el) el.textContent = text; }

function chooseCountry(nuts) {
  const c = countries.countries.find(x => x.nuts === nuts);
  if (!c) return;
  project.setup = {...project.setup, nuts, wikidata: c.wikidata, level: c.level, exclude: [...c.exclude]};
  Object.assign(project.country, {name: c.name.split(' / ')[0], name_en: c.english, language: c.language, locale: c.locale,
    code: project.country.code || (nuts === 'EL' ? 'gr2' : nuts.toLowerCase())});
  if (!project.country.edition.credit) project.country.edition.credit = countries.credit[c.language] || countries.credit.en;
  if (!project.country.contentNotice) project.country.contentNotice = countries.notice[c.language] || countries.notice.en;
  project.regionsGeo = null; project.places = {regions: [], cities: []};
}

function heroCoords() {
  const first = project.places.cities[0];
  if (!first) return;
  const [lon, lat] = first.center;
  project.country.edition.hero.coords = `${Math.abs(lat).toFixed(4)}° ${lat >= 0 ? 'N' : 'S'} &nbsp; ${Math.abs(lon).toFixed(4)}° ${lon >= 0 ? 'E' : 'W'}`;
}

async function loadMap() {
  const s = project.setup, country = project.country;
  status('Loading the regions from Eurostat…');
  const collection = core.regionsOf(await getJson(core.GISCO(s.level)), s.nuts, s.exclude);
  if (!collection.features.length) throw new Error('No regions at this level. Try another level.');
  status('Loading the cities from Wikidata…');
  const sparql = query => fetch('https://query.wikidata.org/sparql', {method: 'POST', headers: {Accept: 'application/sparql-results+json'},
    body: new URLSearchParams({query, format: 'json'})}).then(ok).then(r => r.json()).then(j => j.results.bindings);
  const subclasses = (await sparql(core.subclassQuery())).map(row => row.c.value.split('/').pop());
  const rows = await sparql(core.settlementsQuery(s.wikidata, country.language, subclasses));
  const cities = core.chooseCities(core.settlements(rows), collection, Number(s.cityCount) || 15);
  project.regionsGeo = collection;
  project.places = {regions: collection.features.map(f => ({id: f.properties.NUTS_ID, name: f.properties.NUTS_NAME, short: f.properties.NUTS_NAME,
    city: cities.find(c => c.region === f.properties.NUTS_ID)?.name || ''})), cities};
  project.country.map = {regions: 'country-regions.geojson', regionLevel: `NUTS-${s.level}`,
    label: `${country.name} · ${collection.features.length}`, ...core.mapConfig(collection)};
  heroCoords();
}

const iso2 = nuts => (nuts === 'EL' ? 'gr' : nuts.toLowerCase());
async function nominatim(text) {
  const q = new URLSearchParams({q: text, format: 'jsonv2', limit: '1', countrycodes: iso2(project.setup.nuts)});
  const [hit] = await getJson('https://nominatim.openstreetmap.org/search?' + q);
  if (!hit) throw new Error(`OpenStreetMap does not know “${text}”. Try another spelling.`);
  return hit;
}

async function addCity(name) {
  const hit = await nominatim(name);
  const center = [Number(Number(hit.lon).toFixed(5)), Number(Number(hit.lat).toFixed(5))];
  const region = project.regionsGeo.features.find(f => core.inside(center, f.geometry))?.properties.NUTS_ID;
  if (!region) throw new Error(`${name} is outside the regions on your map.`);
  project.places.cities.push({id: `city-osm-${hit.osm_id}`, geonames: '', wikidata: '', name, latin: name, region, center, population: 0, context: ''});
}

const slug = text => text.toLowerCase().normalize('NFD').replace(/\p{Mn}/gu, '').replace(/[^\p{L}\p{N}]+/gu, '-').replace(/^-|-$/g, '').slice(0, 48) || 'priority';

function newRecord() {
  return {cityId: project.places.cities[0].id, slug: '', sectorId: 'transport', relatedSectors: [], title: '', problem: '', action: '', steps: ['', ''],
    counter: '', measure: '', responsibility: '', locationName: '', evidenceKind: 'plan-priority', coordinates: null,
    geographicDisposition: 'network-wide', coordinateNote: '',
    sources: [{title: '', url: '', publisher: '', publishedAt: null, accessedAt: today(), locator: '', evidence: ''}]};
}

function keepRecord() {
  const records = project.research.records, taken = new Set(records.filter((_, i) => i !== editing).map(r => r.cityId + '/' + r.slug));
  let base = slug(draft.title), candidate = base, n = 2;
  while (taken.has(draft.cityId + '/' + candidate)) candidate = `${base}-${n++}`;
  draft.slug = candidate;
  draft.sources = draft.sources.map(s => ({...s, publishedAt: s.publishedAt || null}));
  if (editing === 'new') records.push(draft); else records[editing] = draft;
  editing = null; draft = null;
}

async function build() {
  status('Building…');
  const country = structuredClone(project.country), assets = {};
  for (const [kind, file] of Object.entries(photos)) {
    const path = `citizen-assets/photo-${kind}.${file.name.split('.').pop().toLowerCase()}`;
    assets[path] = new Uint8Array(await file.arrayBuffer());
    if (kind === 'hero') country.edition.hero.src = path; else country.edition.photos[kind] = path;
  }
  if (project.photoCredits.trim()) assets['citizen-assets/credits.txt'] = new TextEncoder().encode(project.photoCredits.trim() + '\n');
  const tags = structuredClone(bundle.tags);
  for (const [tag, text] of Object.entries(project.stems)) {
    tags.tags[tag].stems[country.language] = text.split(',').map(s => s.trim().toLowerCase().normalize('NFD').replace(/\p{Mn}/gu, '')).filter(Boolean);
  }
  const vendor = {'maplibre-gl.js': await fetch('../maplibre-gl.js').then(ok).then(r => r.text()),
    'maplibre-gl.css': await fetch('../maplibre-gl.css').then(ok).then(r => r.text())};
  let shared = null;
  try { shared = {members: await getJson('../federation/members.json'), index: await getJson('../federation/index.json')}; } catch { shared = null; }
  const catalogue = Object.fromEntries(Object.entries(project.catalogue).map(([m, t]) => [m, core.fillPlaceholders(t, values())]));
  built = core.buildSite({...bundle, tags}, {country, places: project.places, research: project.research, catalogue, regionsGeo: project.regionsGeo},
    {vendor, shared, assets, today: today()});
  built.country = country;
  built.tags = tags;
}

function countryPack() {
  const c = built.country, root = `countries/${c.code}/`, files = new Map(), json = v => JSON.stringify(v, null, 2) + '\n';
  files.set(root + 'country.json', json(c));
  files.set(root + `strings.${c.language}.json`, json(project.catalogue));
  files.set(root + 'research/places.json', json({sources: {regions: 'Eurostat GISCO NUTS 2021', cities: 'Wikidata (CC0)'}, ...project.places}));
  files.set(root + 'research/dossiers.json', json(project.research));
  files.set(root + 'site/country-regions.geojson', JSON.stringify(project.regionsGeo));
  for (const [path, content] of built.files) if (path.startsWith('citizen-assets/')) files.set(root + 'site/' + path, content);
  files.set(`federation-stems.${c.language}.json`, json(Object.fromEntries(Object.entries(built.tags.tags).map(([t, v]) => [t, v.stems[c.language] || []]))));
  files.set('README.txt', `Country pack for ${c.edition.name} (${c.name}).\nAdd the countries/${c.code} folder to the repository, merge federation-stems into federation/tags.json, then run:\n  python tools/compile_pack.py ${c.code}\n  python tools/federation.py\n  python tools/build.py --country ${c.code}\n`);
  return core.makeZip(files);
}

// ---- Events --------------------------------------------------------------------------------------------------
async function run(task) {
  try { await task(); } catch (error) { status(error.message); return false; }
  save(); render(); return true;
}

document.addEventListener('click', async event => {
  const target = event.target.closest('button, [data-action="no-pin"], [data-action="want-pin"]');
  if (!target) return;
  const index = Number(target.dataset.index);
  if (target.dataset.step) { step = Number(target.dataset.step); built = step === 5 ? built : null; render(); $('#st-main').focus(); return; }
  switch (target.dataset.action) {
    case 'export': download(`${project.country.code || 'country'}-studio-project.json`, JSON.stringify(project, null, 1), 'application/json'); return;
    case 'reset': if (confirm('Start over? Save your project file first if you want to keep this work.')) { project = blank(); photos = {}; built = null; save(); step = 1; render(); } return;
    case 'load-map': await run(loadMap); return;
    case 'add-city': await run(() => addCity($('#st-new-city').value.trim())); return;
    case 'drop-city': project.places.cities.splice(index, 1); heroCoords(); save(); render(); return;
    case 'new': draft = newRecord(); editing = 'new'; render(); return;
    case 'edit': draft = structuredClone(project.research.records[index]); editing = index; render(); return;
    case 'delete': if (confirm('Delete this priority?')) { project.research.records.splice(index, 1); save(); render(); } return;
    case 'cancel': editing = null; draft = null; render(); return;
    case 'keep': keepRecord(); save(); render(); return;
    case 'add-source': draft.sources.push({title: '', url: '', publisher: '', publishedAt: null, accessedAt: today(), locator: '', evidence: ''}); render(); return;
    case 'drop-source': draft.sources.splice(index, 1); render(); return;
    case 'no-pin': Object.assign(draft, {coordinates: null, coordinateSources: [], geographicDisposition: draft.geographicDisposition || 'network-wide'});
      delete draft.mapLocationName; delete draft.coordinateSource; delete draft.coordinateAccuracy; render(); return;
    case 'want-pin': case 'find-place': {
      const city = project.places.cities.find(c => c.id === draft.cityId)?.name || '';
      try {
        const hit = await nominatim(`${draft.locationName}, ${city}`);
        const url = `https://www.openstreetmap.org/${hit.osm_type}/${hit.osm_id}`, name = hit.display_name.split(',')[0];
        Object.assign(draft, {coordinates: [Number(Number(hit.lon).toFixed(7)), Number(Number(hit.lat).toFixed(7))], coordinateSource: url,
          coordinateSourceType: 'OpenStreetMap', coordinateAccuracy: 'site-reference', mapLocationName: name,
          coordinateSources: [{url, name, accessedAt: today()}]});
        delete draft.geographicDisposition;
      } catch (error) { alert(error.message + ' Keep “No pin” if the place cannot be found.'); }
      render(); return;
    }
    case 'fill': for (const m of sourceList) if (!(project.catalogue[m] || '').trim() && baseText(m)) project.catalogue[m] = baseText(m); save(); render(); return;
    case 'page': page += Number(target.dataset.delta); render(); return;
    case 'build': await run(build); return;
    case 'download-site': download(`${built.country.code}-site.zip`, core.makeZip(built.files), 'application/zip'); return;
    case 'download-pack': download(`${built.country.code}-country-pack.zip`, countryPack(), 'application/zip'); return;
  }
});

document.addEventListener('input', event => {
  const t = event.target;
  if (t.dataset.bind) { setPath(project, t.dataset.bind, t.value); save(); }
  else if (t.dataset.city) { const [i, key] = t.dataset.city.split('.'); project.places.cities[i][key] = t.value; if (Number(i) === 0) heroCoords(); save(); }
  else if (t.dataset.rec) draft[t.dataset.rec] = t.value;
  else if (t.dataset.stepIndex) draft.steps[Number(t.dataset.stepIndex)] = t.value;
  else if (t.dataset.src) { const [i, key] = t.dataset.src.split('.'); draft.sources[i][key] = t.value; }
  else if (t.dataset.message !== undefined) { project.catalogue[t.dataset.message] = t.value; save(); }
  else if (t.dataset.stem) { project.stems[t.dataset.stem] = t.value; save(); }
  else if (t.id === 'st-search') { filter.query = t.value; page = 0; clearTimeout(t.timer); t.timer = setTimeout(() => { render(); $('#st-search')?.focus(); }, 400); }
  if (draft && $('#st-record-problems')) $('#st-record-problems').innerHTML = problemList(draftProblems(draft));
});

document.addEventListener('change', async event => {
  const t = event.target;
  if (t.dataset.action === 'country') { chooseCountry(t.value); save(); render(); }
  else if (t.dataset.action === 'import' && t.files[0]) {
    try { project = {...blank(), ...JSON.parse(await t.files[0].text())}; built = null; save(); render(); } catch { alert('This file is not a Studio project.'); }
  } else if (t.dataset.setup) { project.setup[t.dataset.setup] = t.dataset.setup === 'exclude' ? t.value.split(',').map(x => x.trim()).filter(Boolean) : t.value; save(); }
  else if (t.dataset.action === 'base') { project.base = t.value; save(); render(); }
  else if (t.dataset.action === 'missing') { filter.missing = t.checked; page = 0; render(); }
  else if (t.dataset.photo && t.files[0]) { photos[t.dataset.photo] = t.files[0]; built = null; render(); }
  else if (t.dataset.rec || t.dataset.bind) render();
});

async function start() {
  try {
    [bundle, countries] = await Promise.all([getJson('engine-bundle.json'), getJson('countries.json')]);
  } catch {
    $('#st-main').innerHTML = '<p class="st-problems">The Studio could not load the engine. Open it from a published edition, for example ipoliteia.gr/studio/.</p>';
    return;
  }
  sourceList = [...core.sourceMessages(bundle.engine).keys()];
  project = {...blank(), ...(restore() || {})};
  $('#st-saved').textContent = restore() ? 'Your work in this browser was restored.' : 'Nothing saved yet.';
  render();
}
start();
