/*! © 2026 ΑΝΩ ΠΟΛΙΤΕΙΑ · ipoliteia.gr · SPDX-License-Identifier: AGPL-3.0-or-later · Κείμενα: CC BY-NC-ND 4.0 · Όνομα και Δωδεκάπλευρο: με επιφύλαξη παντός δικαιώματος · βλ. /COPYRIGHT.md */
// Country Studio core: the rules of tools/strings.py, compile_pack.py, geodata.py, federation.py and build.py,
// for the browser (and Node, which checks that both build France identically: tests/test_studio_parity.py).
// No DOM here. Greek appears only as \u escapes, so the engine's own translation never touches this file.

// ---- Interface text (tools/strings.py) ----------------------------------------------------------------------
const RUN = /[^'"`<>{}\\\n$]*[Ͱ-Ͽἀ-῿][^'"`<>{}\\\n$]*/g;
const LATIN_BRAND = /POLITEIA\x20EXTRAS/g;
const PROTECTED = /\/\*[\s\S]*?\*\/|<!--[\s\S]*?-->|<meta name="(?:author|copyright)"[^>]*>|(?<![:\p{L}\p{N}_'"\\/])\/\/[^\n]*/gu;
const UNSAFE = /[<>{}\\]|\$\{/;
const TYPOGRAPHIC = {"'": '’', '"': '”', '`': '’', '\n': ' ', '\r': ' '};
export const TEXT_FILES = ['.js', '.html', '.json'];
export const SOURCE_LANGUAGE = 'el';
const ORIGIN = 'ΑΝΩ ΠΟΛΙΤΕΙΑ';
const RESERVED = new RegExp(`${ORIGIN}|ΠΟΛΙΤΕΙΑ|Πολιτεία|POLITEIA\x20EXTRAS`);
const RESERVED_NAME = /politeia|πολιτεια/i;

const suffix = path => path.slice(path.lastIndexOf('.'));
export const isText = path => TEXT_FILES.includes(suffix(path));

export function messages(text) {
  const shielded = [...text.matchAll(PROTECTED)].map(m => [m.index, m.index + m[0].length]);
  const spans = [];
  for (const pattern of [RUN, LATIN_BRAND]) {
    for (const m of text.matchAll(pattern)) {
      const raw = m[0];
      const start = m.index + raw.length - raw.trimStart().length;
      const end = m.index + raw.trimEnd().length;
      if (start < end && !shielded.some(([a, b]) => start < b && end > a)) spans.push([start, end]);
    }
  }
  spans.sort((x, y) => x[0] - y[0] || y[1] - x[1]);
  const found = [];
  let last = -1;
  for (const [start, end] of spans) {
    if (start >= last) { found.push([start, end, text.slice(start, end)]); last = end; }
  }
  return found;
}

export function sourceMessages(engine) {
  const where = new Map();
  for (const path of Object.keys(engine).sort()) {
    if (!isText(path)) continue;
    for (const [, , message] of messages(engine[path])) {
      if (!where.has(message)) where.set(message, []);
      if (!where.get(message).includes(path)) where.get(message).push(path);
    }
  }
  return where;
}

export function safe(translation, message) {
  const text = [...translation].map(c => TYPOGRAPHIC[c] ?? c).join('');
  if (UNSAFE.test(text)) throw new Error(`The translation of "${message}" contains < > { } \\ or \${, which are not allowed: ${translation}`);
  return text;
}

export function translate(text, catalogue) {
  const missing = [], pieces = [];
  let last = 0;
  for (const [start, end, message] of messages(text)) {
    const translation = catalogue[message] || '';
    if (!translation) { missing.push(message); continue; }
    pieces.push(text.slice(last, start), safe(translation, message));
    last = end;
  }
  return {text: pieces.join('') + text.slice(last), missing};
}

export const localize = (text, language, locale) => text
  .split('<html lang="el">').join(`<html lang="${language}">`)
  .split("'el-GR'").join(`'${locale}'`)
  .split("localeCompare(b.p.title,'el')").join(`localeCompare(b.p.title,'${language}')`);

/** Fill the reference translations' placeholders ([EDITION], [COUNTRY], [CAPITAL], [REGIONS], [CITIES]). */
export function fillPlaceholders(text, values) {
  return text.replace(/\[(EDITION|COUNTRY|CAPITAL|REGIONS|CITIES)\]/g, (_, key) =>
    key === 'CAPITAL' ? String(values.CAPITAL ?? '').toLocaleUpperCase() : String(values[key] ?? `[${key}]`));
}

// ---- Edition rules (tools/build.py) --------------------------------------------------------------------------
const plain = ref => ref.split('?')[0].split('#')[0];
export const packFiles = country => ['city-data.js', 'improvements.js', 'city-evidence.json', 'location-audit.json',
  'citizen-assets/credits.txt', country.map.regions, plain(country.edition.mark), country.edition.hero.src,
  ...Object.values(country.edition.photos)];

export function checkEdition(country) {
  const edition = country.edition, problems = [];
  if (edition.origin) return problems;
  if (!String(edition.name || '').trim()) problems.push('Give your edition a name.');
  if (RESERVED.test(edition.name || '') || RESERVED_NAME.test(edition.name || '')) {
    problems.push(`The name "${edition.name}" uses the reserved name of the original. Choose your own.`);
  }
  if (!(edition.credit || '').includes(ORIGIN) || !(edition.credit || '').includes('ipoliteia.gr')) {
    problems.push(`The credit line must name ${ORIGIN} and ipoliteia.gr.`);
  }
  if ((edition.mark || '').includes('ano-politeia-mark')) problems.push('Use your own mark, not the original logo.');
  return problems;
}

export function brandLeaks(files) {
  const legal = ['COPYRIGHT.md', 'LICENSE', 'LICENSE-CONTENT.txt', 'THIRD-PARTY-NOTICES.txt'];
  return [...files.keys()].filter(path => isText(path) && !path.endsWith('country.js') && !legal.includes(path)
    && !path.startsWith('federation/') && !path.startsWith('studio/')
    && typeof files.get(path) === 'string' && RESERVED.test(files.get(path).replace(PROTECTED, ''))).sort();
}

export function countryScript(header, country, federation) {
  const runtime = {};
  for (const key of ['code', 'language', 'edition', 'map', 'modules', 'contentNotice']) if (key in country) runtime[key] = country[key];
  if (!('modules' in runtime)) runtime.modules = {};
  if (federation) runtime.federation = federation;
  return `${header}\nwindow.POLITEIA_COUNTRY=${JSON.stringify(runtime)};\n`;
}

// ---- Research (tools/compile_pack.py) ------------------------------------------------------------------------
export const SECTORS = ['health', 'education', 'agriculture', 'transport', 'water', 'environment', 'energy', 'housing', 'work',
  'care', 'culture', 'protection', 'services', 'justice', 'economy', 'tourism', 'maritime', 'digital'];
export const KINDS = ['reported-condition', 'plan-priority', 'historical-event'];
export const NO_PIN = ['service-wide', 'network-wide', 'site-selection-required', 'needs-map-match', 'source-conflict'];
const TEXT_FIELDS = ['slug', 'title', 'problem', 'action', 'counter', 'measure', 'responsibility', 'locationName'];
const DATE = /^\d{4}-\d{2}-\d{2}$/;

export function problemsIn(record, cityIds) {
  const found = TEXT_FIELDS.filter(f => !String(record[f] ?? '').trim()).map(f => `missing ${f}`);
  if (!cityIds.has(record.cityId)) found.push(`unknown city ${record.cityId}`);
  if (!SECTORS.includes(record.sectorId) || !(record.relatedSectors || []).every(s => SECTORS.includes(s))) found.push('unknown sector');
  if (!KINDS.includes(record.evidenceKind)) found.push('evidenceKind must be one of ' + [...KINDS].sort().join(', '));
  const steps = record.steps || [];
  if (steps.length !== 2 || !steps.every(step => String(step).trim())) found.push('exactly two steps');
  const sources = record.sources || [];
  if (!sources.length) found.push('no source');
  for (const s of sources) {
    if (!/^https?:\/\//.test(String(s.url || ''))) found.push('source without a link');
    if (!DATE.test(String(s.accessedAt || ''))) found.push('source without an access date (YYYY-MM-DD)');
    if (!s.locator || !s.evidence || !s.publisher) found.push('source needs publisher, locator (where to look) and evidence (what it says)');
  }
  if (record.coordinates) {
    const [lon, lat] = record.coordinates;
    if (!(lon >= -180 && lon <= 180 && lat >= -90 && lat <= 90) || !(record.coordinateSources || []).length) {
      found.push('mapped location needs valid [lon, lat] and coordinateSources');
    }
  } else if (!NO_PIN.includes(record.geographicDisposition)) {
    found.push('no coordinates: geographicDisposition must say why (' + [...NO_PIN].sort().join(', ') + ')');
  }
  if (!record.coordinateNote) found.push('coordinateNote: one sentence on what the pin (or its absence) means');
  return [...new Set(found)];
}

export function complete(record, reviewed) {
  const full = {relatedSectors: [], proposalStatus: 'proposal', locationScope: 'city', coordinateSources: [],
    reviewedAt: reviewed, coordinateReviewedAt: reviewed, coordinates: null, ...record};
  if (full.coordinates) {
    if (!('coordinateSource' in full)) full.coordinateSource = full.coordinateSources[0].url;
    if (!('coordinateSourceType' in full)) full.coordinateSourceType = 'OpenStreetMap';
    if (!('coordinateAccuracy' in full)) full.coordinateAccuracy = 'site-reference';
    if (!('geographicDisposition' in full)) full.geographicDisposition = 'source-matched';
  }
  if (!('geographicReview' in full)) full.geographicReview = {reviewedAt: reviewed, reason: full.coordinateNote};
  return full;
}

const jsValue = (name, value) => `window.POLITEIA.${name} = ${JSON.stringify(value, null, 2)};\n`;

export function packData(header, places, research) {
  const records = research.records.map(r => complete(r, research.reviewedAt));
  const regions = places.regions.map(({sources, ...rest}) => rest);
  const cities = places.cities.map(c => ({id: c.id, geonames: c.geonames, name: c.name, latin: c.latin, region: c.region,
    center: c.center, context: c.context}));
  const meta = {};
  for (const key of ['reviewedAt', 'coverage', 'method']) if (key in research) meta[key] = research[key];
  const mapped = records.filter(r => r.coordinates);
  const counts = {};
  for (const r of records) { const k = r.coordinates ? 'source-matched' : r.geographicDisposition; counts[k] = (counts[k] || 0) + 1; }
  const audit = {reviewedAt: research.reviewedAt, total: records.length, scopeReviewed: records.length, mapped: mapped.length,
    areaWide: records.length - mapped.length, scopeCounts: counts,
    records: records.map(r => ({cityId: r.cityId, slug: r.slug, location: r.locationName, disposition: r.geographicDisposition, review: r.geographicReview}))};
  return {
    records,
    files: {
      'city-data.js': header + '\n' + jsValue('regions', regions) + jsValue('cities', cities),
      'improvements.js': header + '\n/* Generated from research/dossiers.json by tools/compile_pack.py. */\n' + jsValue('evidenceRecords', records),
      'city-evidence.json': JSON.stringify({...meta, records}, null, 1),
      'location-audit.json': JSON.stringify(audit, null, 1),
    },
  };
}

// ---- Map from open data (tools/geodata.py) -------------------------------------------------------------------
export const GISCO = level => `https://gisco-services.ec.europa.eu/distribution/v2/nuts/geojson/NUTS_RG_10M_2021_4326_LEVL_${level}.geojson`;
const CITY_CLASSES = ['Q515', 'Q1549591', 'Q3957', 'Q1637706', 'Q200250', 'Q5119', 'Q484170', 'Q747074', 'Q2074737', 'Q262166',
  'Q42744322', 'Q1349648', 'Q13217644'];
export const CLASS_ROOTS = ['Q515', 'Q5119', 'Q1549591'];   // their direct subclasses count too ("city of Portugal")
export const subclassQuery = () => `SELECT DISTINCT ?c WHERE { VALUES ?root { ${CLASS_ROOTS.map(q => 'wd:' + q).join(' ')} } ?c wdt:P279 ?root }`;

export function regionsOf(collection, nuts, exclude) {
  const features = collection.features
    .filter(f => f.properties.CNTR_CODE === nuts && !exclude.includes(f.properties.NUTS_ID))
    .map(f => ({type: 'Feature', properties: {NUTS_ID: f.properties.NUTS_ID, NAME_LATN: f.properties.NAME_LATN, NUTS_NAME: f.properties.NUTS_NAME}, geometry: f.geometry}))
    .sort((a, b) => a.properties.NUTS_ID.localeCompare(b.properties.NUTS_ID));
  return {type: 'FeatureCollection', features};
}

const rings = geometry => (geometry.type === 'MultiPolygon' ? geometry.coordinates : [geometry.coordinates]).flat();

export function inside([x, y], geometry) {
  let hit = false;
  for (const ring of rings(geometry)) {
    for (let i = 0; i < ring.length; i++) {
      const [x1, y1] = ring[i], [x2, y2] = ring[(i + 1) % ring.length];
      if ((y1 > y) !== (y2 > y) && x < (x2 - x1) * (y - y1) / (y2 - y1) + x1) hit = !hit;
    }
  }
  return hit;
}

const round = (value, digits) => Math.round(value * 10 ** digits) / 10 ** digits;

export function mapConfig(collection) {
  const points = collection.features.flatMap(f => rings(f.geometry).flat());
  const west = Math.min(...points.map(p => p[0])), east = Math.max(...points.map(p => p[0]));
  const south = Math.min(...points.map(p => p[1])), north = Math.max(...points.map(p => p[1]));
  const k = Math.cos((south + north) / 2 * Math.PI / 180);
  const sx = round(Math.min(250 / (east - west), 250 * k / (north - south)), 2), sy = round(sx / k, 2);
  return {center: [round((west + east) / 2, 3), round((south + north) / 2, 3)], zoom: round(Math.log2(360 / (east - west)) + 0.4, 1),
    bounds: [[round(west, 2), round(south, 2)], [round(east, 2), round(north, 2)]],
    // the country's middle at the middle of the 270-unit square (the viewBox starts at x = -8)
    mini: {lon0: round((west + east) / 2 - 127 / sx, 2), lat0: round((south + north) / 2 + 135 / sy, 2), sx, sy, viewBox: '-8 0 270 270'}};
}

export function settlementsQuery(wikidataCountry, language, subclasses = []) {
  const classes = [...new Set([...CITY_CLASSES, ...subclasses])].sort();
  return `SELECT ?item ?label ?latin ?geonames ?pop ?coord ?parent WHERE {
    VALUES ?class { ${classes.map(q => 'wd:' + q).join(' ')} }
    ?item wdt:P31 ?class; wdt:P17 wd:${wikidataCountry}; wdt:P1566 ?geonames; wdt:P1082 ?pop; wdt:P625 ?coord.
    FILTER(?pop >= 50000)
    OPTIONAL { ?item wdt:P131 ?parent }
    OPTIONAL { ?item rdfs:label ?label FILTER(lang(?label) = "${language}") }
    OPTIONAL { ?item rdfs:label ?latin FILTER(lang(?latin) = "en") }
  }`;
}

export function settlements(rows) {
  const found = new Map();
  for (const row of rows) {
    const item = row.item.value.split('/').pop();
    const [lon, lat] = row.coord.value.replace('Point(', '').replace(')', '').split(' ').map(Number);
    if (!found.has(item)) {
      found.set(item, {wikidata: item, geonames: row.geonames.value, population: 0,
        name: (row.label || row.latin || {value: item}).value, latin: (row.latin || row.label || {value: item}).value,
        center: [round(lon, 5), round(lat, 5)], parents: new Set()});
    }
    const entry = found.get(item);
    entry.population = Math.max(entry.population, Math.trunc(Number(row.pop.value)));
    if (row.parent) entry.parents.add(row.parent.value.split('/').pop());
  }
  const kept = [...found.values()].filter(e => ![...e.parents].some(p => found.has(p))).map(({parents, ...e}) => e);
  const largest = new Map();   // a city listed twice (as a city and as its municipality) keeps its larger entry
  for (const e of kept.sort((a, b) => b.population - a.population)) if (!largest.has(e.name.toLowerCase())) largest.set(e.name.toLowerCase(), e);
  return [...largest.values()];
}

export function chooseCities(candidates, collection, count) {
  const placed = candidates.map(c => ({...c, region: collection.features.find(f => inside(c.center, f.geometry))?.properties.NUTS_ID}))
    .filter(c => c.region).sort((a, b) => b.population - a.population);
  const chosen = [];
  for (const f of collection.features) {
    const first = placed.find(c => c.region === f.properties.NUTS_ID);
    if (first) chosen.push(first);
  }
  for (const c of placed) if (chosen.length < count && !chosen.includes(c)) chosen.push(c);
  return chosen.sort((a, b) => b.population - a.population).map(c => ({id: `city-${c.geonames}`, geonames: c.geonames,
    wikidata: c.wikidata, name: c.name, latin: c.latin, region: c.region, center: c.center, population: c.population, context: ''}));
}

// ---- Sympoliteia (tools/federation.py) -----------------------------------------------------------------------
export function normalize(text) {
  const plainText = text.toLowerCase().normalize('NFD').replace(/\p{Mn}/gu, '').replace(/ς/g, 'σ');
  return ' ' + plainText.replace(/[^\p{L}\p{N}_]+/gu, ' ').trim() + ' ';
}

export function themes(text, language, vocabulary) {
  const words = normalize(text);
  return Object.keys(vocabulary).filter(tag => (vocabulary[tag].stems[language] || []).some(stem => words.includes(' ' + stem))).sort();
}

export function feedFor(country, cities, records, vocabulary, sectors) {
  const byId = Object.fromEntries(cities.map(c => [c.id, c]));
  const review = country.contentNotice ? 'draft' : 'reviewed';
  const cases = records.map(r => {
    const city = byId[r.cityId];
    return {id: `${country.code}:${r.cityId}:${r.slug}`, edition: country.code, language: country.language,
      city: {id: city.id, name: city.name, geonames: city.geonames}, region: city.region,
      sector: r.sectorId, cofog: sectors[r.sectorId].cofog,
      tags: [...new Set([...(r.tags || []), ...themes([r.title, r.problem, r.action].join(' '), country.language, vocabulary)])].sort(),
      title: r.title, problem: r.problem, action: r.action, kind: r.evidenceKind, review, reviewedAt: r.reviewedAt,
      sources: r.sources.map(s => ({title: s.title, url: s.url, publisher: s.publisher})),
      link: `citizen.html?design=kyma&city=${r.cityId}&dossier=evidence-${r.cityId}-${r.slug}`};
  });
  const edition = country.edition;
  return {edition: country.code, name: edition.name, country: country.name, language: country.language, origin: Boolean(edition.origin),
    url: edition.domain ? `https://${edition.domain}/` : null, review,
    license: `© ${edition.name} · CC BY-NC-ND 4.0 · see COPYRIGHT.md of the edition`, cases};
}

export function related(cases) {
  const found = {};
  for (const c of cases) {
    const scored = [];
    for (const o of cases) {
      if (o.edition === c.edition) continue;
      const shared = c.tags.filter(t => o.tags.includes(t)).sort();
      if (!shared.length) continue;
      const score = 3 * shared.length + (o.sector === c.sector ? 2 : 0) + (o.cofog.split('.')[0] === c.cofog.split('.')[0] ? 1 : 0)
        + (o.review === 'reviewed' ? 1 : 0);
      scored.push({score, id: o.id, shared});
    }
    scored.sort((a, b) => b.score - a.score || (a.id < b.id ? -1 : 1));
    if (scored.length) found[c.id] = scored.slice(0, 3);
  }
  return found;
}

export function statistics(members, cases, vocabulary, today) {
  const bySector = Object.fromEntries(members.map(m => [m.edition, {}]));
  for (const c of cases) bySector[c.edition][c.sector] = (bySector[c.edition][c.sector] || 0) + 1;
  const sharedThemes = [];
  for (const tag of Object.keys(vocabulary)) {
    const editions = {};
    for (const m of members) {
      const ids = cases.filter(c => c.edition === m.edition && c.tags.includes(tag)).map(c => c.id);
      if (ids.length) editions[m.edition] = {count: ids.length, examples: ids.slice(0, 3)};
    }
    if (Object.keys(editions).length >= 2) sharedThemes.push({tag, editions});
  }
  sharedThemes.sort((a, b) => Math.min(...Object.values(b.editions).map(e => e.count)) - Math.min(...Object.values(a.editions).map(e => e.count)));
  return {generatedAt: today, cases: cases.length, editions: members.length, bySector, sharedThemes};
}

// ---- The whole build ------------------------------------------------------------------------------------------
/**
 * Build an edition from the bundle (studio/engine-bundle.json) and a Studio project. Returns the site's files
 * (path -> string or Uint8Array), the problems that stop publishing and the messages still untranslated.
 * extras: {vendor: {path: text}, shared: {members, index} | null, assets: {path: Uint8Array}, today: 'YYYY-MM-DD'}
 */
export function buildSite(bundle, project, extras) {
  const {country, places, research, catalogue, regionsGeo} = project;
  const problems = [...checkEdition(country)];
  const files = new Map();
  for (const [path, text] of Object.entries(bundle.engine)) files.set(path, text);
  for (const [path, text] of Object.entries(extras.vendor || {})) files.set(path, text);
  const overlay = new Map(Object.entries(bundle.template));
  for (const [path, data] of Object.entries(extras.assets || {})) overlay.set(path, data);
  overlay.set(country.map.regions, JSON.stringify(regionsGeo));
  const cityIds = new Set(places.cities.map(c => c.id));
  research.records.forEach((r, i) => {
    const found = problemsIn(r, cityIds);
    if (found.length) problems.push(`Priority ${i + 1} (${r.title || 'untitled'}): ${found.join('; ')}`);
  });
  const compiled = packData(bundle.header, places, research);
  for (const [path, text] of Object.entries(compiled.files)) overlay.set(path, text);
  for (const [path, data] of overlay) files.set(path, data);
  for (const [name, text] of Object.entries(bundle.legal)) files.set(name, text);

  const own = feedFor(country, places.cities, compiled.records, bundle.tags.tags, bundle.sectors.sectors);
  const otherCases = (extras.shared?.index || []).filter(c => c.edition !== country.code);
  const members = [...(extras.shared?.members || []).filter(m => m.edition !== country.code),
    {...Object.fromEntries(['edition', 'name', 'country', 'language', 'origin', 'url', 'review', 'license'].map(k => [k, own[k]])), cases: own.cases.length}];
  const cases = [...otherCases, ...own.cases];
  files.set('federation/members.json', JSON.stringify(members));
  files.set('federation/index.json', JSON.stringify(cases));
  files.set('federation/matches.json', JSON.stringify(related(cases)));
  files.set('federation/stats.json', JSON.stringify(statistics(members, cases, bundle.tags.tags, extras.today)));
  files.set('federation/tags.json', JSON.stringify(bundle.tags));
  files.set('federation/sectors.json', JSON.stringify(bundle.sectors));
  files.set('federation/feed.json', JSON.stringify(own));
  files.set('country.js', countryScript(bundle.header, country, {editions: members.length, cases: cases.length}));

  for (const [path, text] of Object.entries(bundle.studio)) files.set('studio/' + path, text);
  files.set('studio/engine-bundle.json', JSON.stringify(bundle));

  const missing = new Set();
  if (country.language !== SOURCE_LANGUAGE || !country.edition.origin) {
    for (const path of Object.keys(bundle.engine).sort()) {
      if (overlay.has(path) || !isText(path)) continue;
      try {
        const result = translate(files.get(path), catalogue);
        result.missing.forEach(m => missing.add(m));
        files.set(path, localize(result.text, country.language, country.locale || country.language));
      } catch (error) { problems.push(error.message); }
    }
  }
  if (missing.size && country.language !== SOURCE_LANGUAGE) problems.push(`${missing.size} interface messages are not translated yet.`);
  const absent = packFiles(country).filter(path => !files.has(path));
  if (absent.length) problems.push('Missing files: ' + absent.join(', '));
  if (!country.edition.origin) {
    const leaks = brandLeaks(files);
    if (leaks.length) problems.push('The original name still shows in: ' + leaks.join(', '));
  }
  return {files, problems, missing: [...missing], records: compiled.records};
}

// ---- A zip file, stored without compression ---------------------------------------------------------------------
const CRC_TABLE = Array.from({length: 256}, (_, n) => {
  let c = n;
  for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  return c >>> 0;
});

function crc32(bytes) {
  let c = 0xffffffff;
  for (const b of bytes) c = CRC_TABLE[(c ^ b) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

/** files: Map path -> string | Uint8Array. Returns the bytes of a .zip any operating system and Netlify can open. */
export function makeZip(files) {
  const encoder = new TextEncoder(), parts = [], central = [];
  let offset = 0;
  const time = (12 << 11), date = ((2026 - 1980) << 9) | (1 << 5) | 1;
  for (const [path, content] of [...files].sort(([a], [b]) => (a < b ? -1 : 1))) {
    const name = encoder.encode(path), data = typeof content === 'string' ? encoder.encode(content) : content;
    const crc = crc32(data), header = new DataView(new ArrayBuffer(30));
    [[0, 0x04034b50, 4], [4, 20, 2], [6, 0x0800, 2], [8, 0, 2], [10, time, 2], [12, date, 2], [14, crc, 4],
     [18, data.length, 4], [22, data.length, 4], [26, name.length, 2], [28, 0, 2]]
      .forEach(([at, value, size]) => (size === 4 ? header.setUint32(at, value, true) : header.setUint16(at, value, true)));
    const entry = new DataView(new ArrayBuffer(46));
    [[0, 0x02014b50, 4], [4, 20, 2], [6, 20, 2], [8, 0x0800, 2], [10, 0, 2], [12, time, 2], [14, date, 2], [16, crc, 4],
     [20, data.length, 4], [24, data.length, 4], [28, name.length, 2], [30, 0, 2], [32, 0, 2], [34, 0, 2], [36, 0, 2],
     [38, 0, 4], [42, offset, 4]]
      .forEach(([at, value, size]) => (size === 4 ? entry.setUint32(at, value, true) : entry.setUint16(at, value, true)));
    parts.push(new Uint8Array(header.buffer), name, data);
    central.push(new Uint8Array(entry.buffer), name);
    offset += 30 + name.length + data.length;
  }
  const size = central.reduce((n, part) => n + part.length, 0), end = new DataView(new ArrayBuffer(22));
  [[0, 0x06054b50, 4], [4, 0, 2], [6, 0, 2], [8, files.size, 2], [10, files.size, 2], [12, size, 4], [16, offset, 4], [20, 0, 2]]
    .forEach(([at, value, sz]) => (sz === 4 ? end.setUint32(at, value, true) : end.setUint16(at, value, true)));
  const all = [...parts, ...central, new Uint8Array(end.buffer)];
  const out = new Uint8Array(all.reduce((n, part) => n + part.length, 0));
  let at = 0;
  for (const part of all) { out.set(part, at); at += part.length; }
  return out;
}
