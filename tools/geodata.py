"""The map of a new country, from open data: regions from Eurostat GISCO, cities from Wikidata.

usage: python tools/geodata.py <code> --nuts FR --level 1 [--exclude FRY] [--cities 15] [--language fr]
Writes countries/<code>/site/country-regions.geojson and countries/<code>/research/places.json, and prints the
"map" section for country.json (centre, zoom, bounds, small-map projection).

Sources (both open, no account needed):
  regions  Eurostat GISCO, NUTS 2021, 1:10 million (© EuroGeographics for the administrative boundaries)
  cities   Wikidata (CC0): settlements with a GeoNames ID, population and coordinates. Districts inside another
           listed city (e.g. Paris arrondissements) are left out. Each region gets its largest city first.
"""
import argparse
import json
import math
import pathlib
import sys
import urllib.parse
import urllib.request

REPO = pathlib.Path(__file__).resolve().parent.parent
GISCO = 'https://gisco-services.ec.europa.eu/distribution/v2/nuts/geojson/NUTS_RG_10M_2021_4326_LEVL_{level}.geojson'
WIKIDATA = 'https://query.wikidata.org/sparql'
AGENT = {'User-Agent': 'politeia-v3/1.0 (https://ipoliteia.gr; country pack builder)'}
# city, big city, town, city with millions, metropolis, capital, commune of France, comune of Italy, municipality of
# Spain, municipality of Germany, urban municipality of Germany, municipality of Greece, municipality of Portugal.
# Items may also belong to a direct subclass of city, capital or big city (e.g. "city of Portugal" for Lisbon).
CLASS_ROOTS = ('Q515', 'Q5119', 'Q1549591')
CITY_CLASSES = ('Q515', 'Q1549591', 'Q3957', 'Q1637706', 'Q200250', 'Q5119', 'Q484170', 'Q747074', 'Q2074737', 'Q262166',
                'Q42744322', 'Q1349648', 'Q13217644')
WIKIDATA_COUNTRY = {'FR': 'Q142', 'DE': 'Q183', 'IT': 'Q38', 'ES': 'Q29', 'PT': 'Q45', 'EL': 'Q41', 'NL': 'Q55',
                    'BE': 'Q31', 'AT': 'Q40', 'IE': 'Q27', 'PL': 'Q36', 'CZ': 'Q213', 'SE': 'Q34', 'DK': 'Q35',
                    'FI': 'Q33', 'RO': 'Q218', 'BG': 'Q219', 'HR': 'Q224', 'CY': 'Q229', 'SI': 'Q215', 'SK': 'Q214',
                    'HU': 'Q28', 'LT': 'Q37', 'LV': 'Q211', 'EE': 'Q191', 'LU': 'Q32', 'MT': 'Q233'}


def get_json(url: str) -> dict:
    with urllib.request.urlopen(urllib.request.Request(url, headers=AGENT), timeout=120) as response:
        return json.loads(response.read().decode('utf-8'))


def sparql(query: str) -> list[dict]:
    data = urllib.parse.urlencode({'query': query, 'format': 'json'}).encode()
    request = urllib.request.Request(WIKIDATA, data=data, headers={**AGENT, 'Accept': 'application/sparql-results+json'})
    with urllib.request.urlopen(request, timeout=120) as response:
        return json.loads(response.read().decode('utf-8'))['results']['bindings']


def city_classes() -> list[str]:
    """The city-like classes plus every direct subclass of city, capital and big city."""
    rows = sparql('SELECT DISTINCT ?c WHERE { VALUES ?root { ' + ' '.join('wd:' + q for q in CLASS_ROOTS) + ' } ?c wdt:P279 ?root }')
    return sorted(set(CITY_CLASSES) | {row['c']['value'].rsplit('/', 1)[-1] for row in rows})


def regions(nuts: str, level: int, exclude: set[str]) -> dict:
    """The country's NUTS regions at one level, as a FeatureCollection with NUTS_ID and names."""
    collection = get_json(GISCO.format(level=level))
    features = [{'type': 'Feature', 'properties': {key: f['properties'][key] for key in ('NUTS_ID', 'NAME_LATN', 'NUTS_NAME')},
                 'geometry': f['geometry']}
                for f in collection['features']
                if f['properties']['CNTR_CODE'] == nuts and f['properties']['NUTS_ID'] not in exclude]
    if not features:
        raise SystemExit(f'No NUTS level {level} regions for {nuts}')
    return {'type': 'FeatureCollection', 'features': sorted(features, key=lambda f: f['properties']['NUTS_ID'])}


def rings(geometry: dict) -> list[list[list[float]]]:
    polygons = geometry['coordinates'] if geometry['type'] == 'MultiPolygon' else [geometry['coordinates']]
    return [ring for polygon in polygons for ring in polygon]


def inside(point: list[float], geometry: dict) -> bool:
    """Even-odd ray casting over every ring (holes included)."""
    x, y, hit = point[0], point[1], False
    for ring in rings(geometry):
        for (x1, y1), (x2, y2) in zip(ring, ring[1:] + ring[:1]):
            if (y1 > y) != (y2 > y) and x < (x2 - x1) * (y - y1) / (y2 - y1) + x1:
                hit = not hit
    return hit


def map_config(collection: dict) -> dict:
    """Centre, zoom and bounds for the big map; projection for the small SVG map (centred in a 270-unit box)."""
    points = [c for f in collection['features'] for ring in rings(f['geometry']) for c in ring]
    west, east = min(p[0] for p in points), max(p[0] for p in points)
    south, north = min(p[1] for p in points), max(p[1] for p in points)
    k = math.cos(math.radians((south + north) / 2))
    sx = round(min(250 / (east - west), 250 * k / (north - south)), 2)
    sy = round(sx / k, 2)
    return {'center': [round((west + east) / 2, 3), round((south + north) / 2, 3)],
            'zoom': round(math.log2(360 / (east - west)) + 0.4, 1),
            'bounds': [[round(west, 2), round(south, 2)], [round(east, 2), round(north, 2)]],
            # the country's middle at the middle of the 270-unit square (the viewBox starts at x = -8)
            'mini': {'lon0': round((west + east) / 2 - 127 / sx, 2), 'lat0': round((south + north) / 2 + 135 / sy, 2),
                     'sx': sx, 'sy': sy,
                     'viewBox': '-8 0 270 270'}}


def settlements(nuts: str, language: str) -> list[dict]:
    country = WIKIDATA_COUNTRY.get(nuts)
    if not country:
        raise SystemExit(f'Add the Wikidata item of {nuts} to WIKIDATA_COUNTRY')
    # Listed classes only (city_classes adds the direct subclasses): walking the whole class tree times out.
    query = f'''SELECT ?item ?label ?latin ?geonames ?pop ?coord ?parent WHERE {{
      VALUES ?class {{ {' '.join('wd:' + q for q in city_classes())} }}
      ?item wdt:P31 ?class; wdt:P17 wd:{country}; wdt:P1566 ?geonames; wdt:P1082 ?pop; wdt:P625 ?coord.
      FILTER(?pop >= 50000)
      OPTIONAL {{ ?item wdt:P131 ?parent }}
      OPTIONAL {{ ?item rdfs:label ?label FILTER(lang(?label) = "{language}") }}
      OPTIONAL {{ ?item rdfs:label ?latin FILTER(lang(?latin) = "en") }}
    }}'''
    rows = sparql(query)
    found: dict[str, dict] = {}
    for row in rows:
        item = row['item']['value'].rsplit('/', 1)[-1]
        lon, lat = (float(v) for v in row['coord']['value'].removeprefix('Point(').rstrip(')').split())
        entry = found.setdefault(item, {'wikidata': item, 'geonames': row['geonames']['value'], 'population': 0,
                                        'name': row.get('label', row.get('latin', {})).get('value', item),
                                        'latin': row.get('latin', row.get('label', {})).get('value', item),
                                        'center': [round(lon, 5), round(lat, 5)], 'parents': set()})
        entry['population'] = max(entry['population'], int(float(row['pop']['value'])))
        if 'parent' in row:
            entry['parents'].add(row['parent']['value'].rsplit('/', 1)[-1])
    # Districts of a listed city (Paris arrondissements, Berlin boroughs) are not cities of their own, and a city
    # listed twice (as a city and as its municipality) keeps its larger entry.
    kept = [e for e in found.values() if not e.pop('parents') & found.keys()]
    largest: dict[str, dict] = {}
    for entry in sorted(kept, key=lambda e: -e['population']):
        largest.setdefault(entry['name'].casefold(), entry)
    return list(largest.values())


def choose_cities(candidates: list[dict], collection: dict, count: int) -> list[dict]:
    """The largest city of every region first (so every region has one), then the largest others."""
    for city in candidates:
        city['region'] = next((f['properties']['NUTS_ID'] for f in collection['features'] if inside(city['center'], f['geometry'])), None)
    placed = sorted((c for c in candidates if c['region']), key=lambda c: -c['population'])
    chosen = []
    for feature in collection['features']:
        first = next((c for c in placed if c['region'] == feature['properties']['NUTS_ID']), None)
        if first:
            chosen.append(first)
    chosen += [c for c in placed if c not in chosen][:max(0, count - len(chosen))]
    chosen.sort(key=lambda c: -c['population'])
    return [{'id': f"city-{c['geonames']}", 'geonames': c['geonames'], 'wikidata': c['wikidata'], 'name': c['name'],
             'latin': c['latin'], 'region': c['region'], 'center': c['center'], 'population': c['population'], 'context': ''}
            for c in chosen]


def make_map(code: str, nuts: str, level: int, exclude: set[str], count: int, language: str) -> dict:
    """Write the pack's regions file and research/places.json; return the map section for country.json."""
    pack = REPO / 'countries' / code
    collection = regions(nuts, level, exclude)
    (pack / 'site').mkdir(parents=True, exist_ok=True)
    (pack / 'site' / 'country-regions.geojson').write_text(json.dumps(collection, ensure_ascii=False), encoding='utf-8', newline='\n')
    cities = choose_cities(settlements(nuts, language), collection, count)
    places = {'sources': {'regions': GISCO.format(level=level), 'cities': 'Wikidata (CC0) via ' + WIKIDATA},
              'regions': [{'id': f['properties']['NUTS_ID'], 'name': f['properties']['NAME_LATN'],
                           'short': f['properties']['NAME_LATN'],
                           'city': next((c['name'] for c in cities if c['region'] == f['properties']['NUTS_ID']), '')}
                          for f in collection['features']],
              'cities': cities}
    (pack / 'research').mkdir(parents=True, exist_ok=True)
    (pack / 'research' / 'places.json').write_text(json.dumps(places, ensure_ascii=False, indent=1) + '\n', encoding='utf-8', newline='\n')
    print(f"{len(collection['features'])} regions, {len(cities)} cities: " + ', '.join(c['name'] for c in cities))
    return {'regions': 'country-regions.geojson', 'regionLevel': f'NUTS-{level}', **map_config(collection)}


def main() -> None:
    parser = argparse.ArgumentParser(description='Map of a new country from Eurostat GISCO and Wikidata.')
    parser.add_argument('code')
    parser.add_argument('--nuts', required=True, help='NUTS country code, e.g. FR, DE, IT (Greece is EL)')
    parser.add_argument('--level', type=int, required=True, help='NUTS level that matches the regions people know')
    parser.add_argument('--exclude', default='', help='comma-separated NUTS ids to leave off the map')
    parser.add_argument('--cities', type=int, default=15)
    parser.add_argument('--language', required=True, help='label language for city names, e.g. fr')
    args = parser.parse_args()
    sys.stdout.reconfigure(encoding='utf-8')
    section = make_map(args.code, args.nuts, args.level, {x for x in args.exclude.split(',') if x}, args.cities, args.language)
    print('map for country.json:', json.dumps(section, ensure_ascii=False))


if __name__ == '__main__':
    main()
