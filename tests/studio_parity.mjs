// Build the France pack with the Country Studio's core (the code browsers run) and write the site to a folder.
// usage: node tests/studio_parity.mjs <repo> <engine-bundle.json> <out-folder>; prints {problems, missing} as JSON.
import {mkdirSync, readFileSync, readdirSync, writeFileSync} from 'node:fs';
import {dirname, join} from 'node:path';
import {pathToFileURL} from 'node:url';

const [repo, bundlePath, out] = process.argv.slice(2);
const core = await import(pathToFileURL(join(repo, 'engine', 'site', 'studio', 'studio-core.js')).href);
const bundle = JSON.parse(readFileSync(bundlePath, 'utf8'));
const pack = join(repo, 'countries', 'fr');
const read = path => JSON.parse(readFileSync(join(pack, path), 'utf8'));
const project = {country: read('country.json'), places: read('research/places.json'), research: read('research/dossiers.json'),
  catalogue: read('strings.fr.json'), regionsGeo: read('site/country-regions.geojson')};
const assets = Object.fromEntries(readdirSync(join(pack, 'site', 'citizen-assets'))
  .map(name => [`citizen-assets/${name}`, new Uint8Array(readFileSync(join(pack, 'site', 'citizen-assets', name)))]));
const vendor = Object.fromEntries(['maplibre-gl.js', 'maplibre-gl.css'].map(name => [name, readFileSync(join(repo, 'engine', 'site', name), 'utf8')]));

const result = core.buildSite(bundle, project, {vendor, shared: null, assets, today: '2026-10-23'});
for (const [path, content] of result.files) {
  mkdirSync(dirname(join(out, path)), {recursive: true});
  writeFileSync(join(out, path), content);
}
const zip = core.makeZip(result.files);
writeFileSync(join(out, '..', 'studio-site.zip'), zip);
console.log(JSON.stringify({problems: result.problems, missing: result.missing.length, files: result.files.size, zip: zip.length}));
