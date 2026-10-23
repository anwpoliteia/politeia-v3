"""Start a country pack in one command: folder, map, settings, translation file, research file.

usage:
  python tools/new_country.py de --name Deutschland --language de --locale de-DE --nuts DE --level 1 \\
      --edition "YOUR EDITION NAME" --credit "Basiert auf ΑΝΩ ΠΟΛΙΤΕΙΑ (ipoliteia.gr)" [--cities 15] [--exclude ...]

Existing files are never overwritten (pass --refresh-map to rebuild the map and the city list).
Then follow AGENTS.md ("do this for <country>"): research dossiers, translate, compile, build, check.
"""
import argparse
import datetime
import json
import pathlib
import shutil
import sys

import geodata
import strings

REPO = pathlib.Path(__file__).resolve().parent.parent
TEMPLATE = REPO / 'countries' / '_template'


def write_new(path: pathlib.Path, data: dict) -> bool:
    if path.exists():
        return False
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + '\n', encoding='utf-8', newline='\n')
    return True


def main() -> None:
    parser = argparse.ArgumentParser(description='Start a country pack.')
    parser.add_argument('code', help='short code for the pack folder, e.g. fr, de, it')
    parser.add_argument('--name', required=True, help='country name in its own language')
    parser.add_argument('--language', required=True, help='interface language code, e.g. fr')
    parser.add_argument('--locale', required=True, help='date and number format, e.g. fr-FR')
    parser.add_argument('--nuts', required=True, help='NUTS country code (Greece is EL)')
    parser.add_argument('--level', type=int, required=True, help='NUTS level of the regions people know')
    parser.add_argument('--exclude', default='', help='NUTS ids to leave off the map, comma-separated')
    parser.add_argument('--cities', type=int, default=15)
    parser.add_argument('--edition', required=True, help='your edition name (not ΑΝΩ ΠΟΛΙΤΕΙΑ; COPYRIGHT.md §3α)')
    parser.add_argument('--tagline', default='')
    parser.add_argument('--credit', required=True, help='visible credit, must name ΑΝΩ ΠΟΛΙΤΕΙΑ and ipoliteia.gr')
    parser.add_argument('--refresh-map', action='store_true')
    args = parser.parse_args()
    sys.stdout.reconfigure(encoding='utf-8')
    if args.code.startswith('_') or args.code == 'gr':
        raise SystemExit('Choose another code: _template and gr are reserved.')
    pack = REPO / 'countries' / args.code
    for source in (TEMPLATE / 'site').rglob('*'):
        target = pack / 'site' / source.relative_to(TEMPLATE / 'site')
        if source.is_file() and not target.exists():
            target.parent.mkdir(parents=True, exist_ok=True)
            shutil.copy2(source, target)

    places = pack / 'research' / 'places.json'
    config = pack / 'country.json'
    map_section = None
    if args.refresh_map or not places.exists():
        map_section = geodata.make_map(args.code, args.nuts, args.level, {x for x in args.exclude.split(',') if x},
                                       args.cities, args.language)
        map_section['label'] = f'Map of {args.name}'
    country = {
        'code': args.code, 'name': args.name, 'language': args.language, 'locale': args.locale,
        'edition': {'name': args.edition, 'tagline': args.tagline, 'origin': False,
                    'mark': 'citizen-assets/edition-mark.svg#edition-mark', 'credit': args.credit,
                    'hero': {'src': 'citizen-assets/hero.svg', 'coords': ''},
                    'photos': {'coast': 'citizen-assets/coast.svg', 'land': 'citizen-assets/land.svg'}},
        'map': map_section or {},
        'modules': {},
        'contentNotice': 'AI research draft: every dossier cites an official source, but people in this country must review it.',
    }
    if not write_new(config, country) and map_section:
        existing = json.loads(config.read_text(encoding='utf-8'))
        existing['map'] = {**existing.get('map', {}), **map_section}
        config.write_text(json.dumps(existing, ensure_ascii=False, indent=2) + '\n', encoding='utf-8', newline='\n')
    write_new(pack / 'research' / 'dossiers.json', {
        'reviewedAt': datetime.date.today().isoformat(), 'status': 'ai-research-draft', 'coverage': '', 'method': '',
        'records': []})
    catalogue = strings.catalogue_path(args.code, args.language)
    merged = {**{m: '' for m in strings.source_messages()}, **strings.load_catalogue(args.code, args.language)}
    catalogue.write_text(json.dumps(merged, ensure_ascii=False, indent=1) + '\n', encoding='utf-8', newline='\n')
    todo = sum(1 for v in merged.values() if not v)
    print(f'countries/{args.code} ready. Still to do: {todo} messages to translate in {catalogue.name}, '
          f'dossiers in research/dossiers.json, then compile_pack.py and build.py (see AGENTS.md).')


if __name__ == '__main__':
    main()
