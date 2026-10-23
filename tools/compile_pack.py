"""Turn a country's research into the files its site reads, after checking every dossier.

usage: python tools/compile_pack.py <code>
reads   countries/<code>/research/places.json    regions and cities (python tools/geodata.py writes the first version)
        countries/<code>/research/dossiers.json  {"reviewedAt", "coverage", "method", "records": [...]}
writes  countries/<code>/site/city-data.js, improvements.js, city-evidence.json, location-audit.json

A dossier is refused unless it has a public source (url, access date, where to look, what it says), a known
sector and city, exactly two steps, and either a mapped location with its source or an honest "no pin" reason.
Records keep the Greek pack's fields so the engine shows them the same way (engine/site/evidence.js).
"""
import json
import pathlib
import re
import sys

REPO = pathlib.Path(__file__).resolve().parent.parent
SECTORS = {'health', 'education', 'agriculture', 'transport', 'water', 'environment', 'energy', 'housing', 'work', 'care',
           'culture', 'protection', 'services', 'justice', 'economy', 'tourism', 'maritime', 'digital'}
KINDS = {'reported-condition', 'plan-priority', 'historical-event'}
NO_PIN = {'service-wide', 'network-wide', 'site-selection-required', 'needs-map-match', 'source-conflict'}
TEXT_FIELDS = ('slug', 'title', 'problem', 'action', 'counter', 'measure', 'responsibility', 'locationName')
DATE = re.compile(r'^\d{4}-\d{2}-\d{2}$')
HEADER = ('/*! © 2026 ΑΝΩ ΠΟΛΙΤΕΙΑ · ipoliteia.gr · SPDX-License-Identifier: AGPL-3.0-or-later · Κείμενα: CC BY-NC-ND 4.0 · '
          'Όνομα και Δωδεκάπλευρο: με επιφύλαξη παντός δικαιώματος · βλ. /COPYRIGHT.md */')


def problems_in(record: dict, cities: set[str]) -> list[str]:
    found = [f'missing {field}' for field in TEXT_FIELDS if not str(record.get(field, '')).strip()]
    if record.get('cityId') not in cities:
        found.append(f"unknown city {record.get('cityId')}")
    if record.get('sectorId') not in SECTORS or not set(record.get('relatedSectors', [])) <= SECTORS:
        found.append('unknown sector')
    if record.get('evidenceKind') not in KINDS:
        found.append('evidenceKind must be one of ' + ', '.join(sorted(KINDS)))
    steps = record.get('steps', [])
    if len(steps) != 2 or not all(str(step).strip() for step in steps):
        found.append('exactly two steps')
    sources = record.get('sources', [])
    if not sources:
        found.append('no source')
    for source in sources:
        if not str(source.get('url', '')).startswith(('https://', 'http://')):
            found.append('source without a link')
        if not DATE.match(str(source.get('accessedAt', ''))):
            found.append('source without an access date (YYYY-MM-DD)')
        if not source.get('locator') or not source.get('evidence') or not source.get('publisher'):
            found.append('source needs publisher, locator (where to look) and evidence (what it says)')
    if record.get('coordinates'):
        lon, lat = record['coordinates']
        if not (-180 <= lon <= 180 and -90 <= lat <= 90) or not record.get('coordinateSources'):
            found.append('mapped location needs valid [lon, lat] and coordinateSources')
    elif record.get('geographicDisposition') not in NO_PIN:
        found.append('no coordinates: geographicDisposition must say why (' + ', '.join(sorted(NO_PIN)) + ')')
    if not record.get('coordinateNote'):
        found.append('coordinateNote: one sentence on what the pin (or its absence) means')
    return found


def complete(record: dict, reviewed: str) -> dict:
    """Fill the fields the engine expects but research does not need to repeat."""
    base = {'relatedSectors': [], 'proposalStatus': 'proposal', 'locationScope': 'city', 'coordinateSources': [],
            'reviewedAt': reviewed, 'coordinateReviewedAt': reviewed, 'coordinates': None}
    full = {**base, **record}
    if full['coordinates']:
        full.setdefault('coordinateSource', full['coordinateSources'][0]['url'])
        full.setdefault('coordinateSourceType', 'OpenStreetMap')
        full.setdefault('coordinateAccuracy', 'site-reference')
        full.setdefault('geographicDisposition', 'source-matched')
    full.setdefault('geographicReview', {'reviewedAt': reviewed, 'reason': full['coordinateNote']})
    return full


def js_value(name: str, value: object) -> str:
    return f'window.POLITEIA.{name} = {json.dumps(value, ensure_ascii=False, indent=2)};\n'


def main() -> None:
    sys.stdout.reconfigure(encoding='utf-8')
    if len(sys.argv) != 2:
        raise SystemExit(__doc__)
    pack = REPO / 'countries' / sys.argv[1]
    places = json.loads((pack / 'research' / 'places.json').read_text(encoding='utf-8'))
    research = json.loads((pack / 'research' / 'dossiers.json').read_text(encoding='utf-8'))
    cities = {c['id'] for c in places['cities']}
    if not DATE.match(str(research.get('reviewedAt', ''))):
        raise SystemExit('dossiers.json needs reviewedAt (YYYY-MM-DD)')
    errors = {f"{r.get('cityId')}/{r.get('slug')}": p for r in research['records'] if (p := problems_in(r, cities))}
    if errors:
        for key, found in errors.items():
            print(f'  {key}: {"; ".join(sorted(set(found)))}')
        raise SystemExit(f'{len(errors)} dossier(s) refused; nothing written')
    records = [complete(r, research['reviewedAt']) for r in research['records']]
    regions = [{k: v for k, v in r.items() if k != 'sources'} for r in places['regions']]
    city_rows = [{k: c[k] for k in ('id', 'geonames', 'name', 'latin', 'region', 'center', 'context')} for c in places['cities']]
    site = pack / 'site'
    (site / 'city-data.js').write_text(HEADER + '\n' + js_value('regions', regions) + js_value('cities', city_rows), encoding='utf-8', newline='\n')
    (site / 'improvements.js').write_text(
        HEADER + '\n/* Generated from research/dossiers.json by tools/compile_pack.py. */\n' + js_value('evidenceRecords', records),
        encoding='utf-8', newline='\n')
    meta = {key: research[key] for key in ('reviewedAt', 'coverage', 'method') if key in research}
    (site / 'city-evidence.json').write_text(json.dumps({**meta, 'records': records}, ensure_ascii=False, indent=1), encoding='utf-8', newline='\n')
    mapped = [r for r in records if r['coordinates']]
    counts: dict[str, int] = {}
    for r in records:
        counts[r['geographicDisposition'] if not r['coordinates'] else 'source-matched'] = counts.get(
            r['geographicDisposition'] if not r['coordinates'] else 'source-matched', 0) + 1
    audit = {'reviewedAt': research['reviewedAt'], 'total': len(records), 'scopeReviewed': len(records),
             'mapped': len(mapped), 'areaWide': len(records) - len(mapped), 'scopeCounts': counts,
             'records': [{'cityId': r['cityId'], 'slug': r['slug'], 'location': r['locationName'],
                          'disposition': r['geographicDisposition'], 'review': r['geographicReview']} for r in records]}
    (site / 'location-audit.json').write_text(json.dumps(audit, ensure_ascii=False, indent=1), encoding='utf-8', newline='\n')
    print(f'{len(regions)} regions, {len(city_rows)} cities, {len(records)} dossiers ({len(mapped)} mapped) -> {site}')


if __name__ == '__main__':
    main()
