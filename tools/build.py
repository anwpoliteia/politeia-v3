"""Build the ΑΝΩ ΠΟΛΙΤΕΙΑ site for one country: the shared engine, with that country's pack laid over it.

usage:
  python tools/build.py --country gr                      -> dist/gr
  python tools/build.py --country gr --check proofs/<release>.sha256.txt

How a build is assembled (docs/ARCHITECTURE.md):
  1. engine/site/            the five stages and the UI, the same for every country
  2. countries/<code>/site/  that country's content; a file here replaces the engine's file at the same path
  3. the licence files from the repository root (COPYRIGHT.md, LICENSE, LICENSE-CONTENT.txt, THIRD-PARTY-NOTICES.txt)

--check compares the build with a release's SHA-256 list (sha256sum format) and fails on any difference.
For Greece this is the golden test: the V3 build must be byte-for-byte the site published on 23 October 2026.
"""
import argparse
import hashlib
import json
import pathlib
import re
import shutil
import sys

import strings

REPO = pathlib.Path(__file__).resolve().parent.parent
ENGINE = REPO / 'engine' / 'site'
LEGAL = ('COPYRIGHT.md', 'LICENSE', 'LICENSE-CONTENT.txt', 'THIRD-PARTY-NOTICES.txt')
REQUIRED_KEYS = ('code', 'name', 'language', 'edition', 'map')
RUNTIME_KEYS = ('code', 'language', 'edition', 'map', 'modules', 'contentNotice')   # what the page reads (country.js)
HEADER = ('/*! © 2026 ΑΝΩ ΠΟΛΙΤΕΙΑ · ipoliteia.gr · SPDX-License-Identifier: AGPL-3.0-or-later · Κείμενα: CC BY-NC-ND 4.0 · '
          'Όνομα και Δωδεκάπλευρο: με επιφύλαξη παντός δικαιώματος · βλ. /COPYRIGHT.md */')


RESERVED = re.compile(r'ΑΝΩ ΠΟΛΙΤΕΙΑ|ΠΟΛΙΤΕΙΑ|Πολιτεία|POLITEIA EXTRAS')   # COPYRIGHT.md §3: only the original uses them
SOURCE_LANGUAGE = 'el'
STUDIO = 'studio/'   # the Country Studio: an English tool, never translated or brand-checked
VENDOR = ('maplibre-gl.js', 'maplibre-gl.css')   # the Studio takes these from the site that hosts it
REFERENCE = {'en': REPO / 'engine' / 'translations' / 'en.json', 'fr': REPO / 'countries' / 'fr' / 'strings.fr.json'}


def studio_bundle() -> dict:
    """Everything the Country Studio needs to build an edition in a browser (studio/engine-bundle.json)."""
    def texts(root: pathlib.Path, keep=lambda rel: True) -> dict[str, str]:
        return {rel: p.read_bytes().decode('utf-8') for rel, p in files_under(root).items() if keep(rel)}
    federation = REPO / 'federation'
    return {
        'header': HEADER,
        'engine': texts(ENGINE, lambda rel: not rel.startswith(STUDIO) and rel not in VENDOR),
        'studio': {rel[len(STUDIO):]: text for rel, text in texts(ENGINE, lambda rel: rel.startswith(STUDIO)).items()},
        'template': texts(REPO / 'countries' / '_template' / 'site'),
        'legal': {name: (REPO / name).read_bytes().decode('utf-8') for name in LEGAL},
        'reference': {language: json.loads(path.read_text(encoding='utf-8')) for language, path in REFERENCE.items()},
        'tags': json.loads((federation / 'tags.json').read_text(encoding='utf-8')),
        'sectors': json.loads((federation / 'sectors.json').read_text(encoding='utf-8')),
    }


def pack_files(country: dict) -> list[str]:
    """Files every pack must provide, as paths in the built site."""
    edition, plain = country['edition'], lambda ref: ref.split('?')[0].split('#')[0]
    return ['city-data.js', 'improvements.js', 'city-evidence.json', 'location-audit.json', 'citizen-assets/credits.txt',
            country['map']['regions'], plain(edition['mark']), edition['hero']['src'], *edition['photos'].values()]


def check_edition(country: dict) -> list[str]:
    """Problems with a non-original edition's name and credit line (COPYRIGHT.md §3α)."""
    edition, problems = country['edition'], []
    if edition.get('origin'):
        return problems
    if RESERVED.search(edition['name']) or re.search(r'politeia|πολιτεια', edition['name'], re.I):
        problems.append(f"edition name {edition['name']!r} uses the reserved name; choose your own")
    if 'ΑΝΩ ΠΟΛΙΤΕΙΑ' not in edition.get('credit', '') or 'ipoliteia.gr' not in edition.get('credit', ''):
        problems.append('edition.credit must say «ΑΝΩ ΠΟΛΙΤΕΙΑ» and «ipoliteia.gr», e.g. "Basé sur ΑΝΩ ΠΟΛΙΤΕΙΑ (ipoliteia.gr)"')
    if 'ano-politeia-mark' in edition['mark']:
        problems.append('edition.mark must be your own mark, not the Δωδεκάπλευρο')
    return problems


def localize(out: pathlib.Path, rels: list[str], country: dict) -> list[str]:
    """Translate the engine's files into the pack's language; returns untranslated messages."""
    language = country['language']
    catalogue = strings.load_catalogue(country['code'], language)
    missing: set[str] = set()
    for rel in rels:
        path = out / rel
        if path.suffix not in strings.TEXT_FILES:
            continue
        text, untranslated = strings.translate(path.read_bytes().decode('utf-8'), catalogue)
        missing.update(untranslated)
        path.write_bytes(strings.localize(text, language, country.get('locale', language)).encode('utf-8'))
    return sorted(missing)


def brand_leaks(out: pathlib.Path) -> list[str]:
    """Visible uses of the reserved names in a non-original build (comments, copyright tags and credit excluded).
    federation/ is shared data that names every edition, the original included, so it is not this edition's text."""
    leaks = []
    for path in sorted(out.rglob('*')):
        rel = path.relative_to(out).as_posix()
        if path.suffix not in strings.TEXT_FILES or path.name == 'country.js' or path.name in LEGAL \
                or rel.startswith(('federation/', STUDIO)):
            continue
        text = strings.PROTECTED.sub('', path.read_bytes().decode('utf-8'))
        if RESERVED.search(text):
            leaks.append(path.relative_to(out).as_posix())
    return leaks


def federate(out: pathlib.Path, code: str) -> dict | None:
    """Copy the Συμπολιτεία data (python tools/federation.py) into the site, with this edition's own feed."""
    data = REPO / 'federation' / 'data'
    if not (data / 'index.json').exists():
        return None
    target = out / 'federation'
    target.mkdir(parents=True, exist_ok=True)
    for source in [*data.glob('*.json'), REPO / 'federation' / 'tags.json', REPO / 'federation' / 'sectors.json']:
        shutil.copy2(source, target / source.name)
    members = json.loads((data / 'members.json').read_text(encoding='utf-8'))
    own = [c for c in json.loads((data / 'index.json').read_text(encoding='utf-8')) if c['edition'] == code]
    me = next((m for m in members if m['edition'] == code), {})
    (target / 'feed.json').write_text(json.dumps({**me, 'cases': own}, ensure_ascii=False, separators=(',', ':')), encoding='utf-8', newline='\n')
    return {'editions': len(members), 'cases': sum(m['cases'] for m in members)}


def country_script(country: dict, federation: dict | None = None) -> str:
    """country.js: the part of country.json the engine reads at runtime, as window.POLITEIA_COUNTRY."""
    runtime = {key: country[key] for key in RUNTIME_KEYS if key in country}
    runtime.setdefault('modules', {})
    if federation:
        runtime['federation'] = federation
    return f'{HEADER}\nwindow.POLITEIA_COUNTRY={json.dumps(runtime, ensure_ascii=False, separators=(",", ":"))};\n'


def files_under(root: pathlib.Path) -> dict[str, pathlib.Path]:
    return {p.relative_to(root).as_posix(): p for p in sorted(root.rglob('*')) if p.is_file()}


def load_country(code: str) -> tuple[pathlib.Path, dict]:
    pack = REPO / 'countries' / code
    config = pack / 'country.json'
    if not config.exists():
        raise SystemExit(f'No country pack at {pack} (country.json missing). See docs/REPLICATE.md.')
    country = json.loads(config.read_text(encoding='utf-8'))
    missing = [key for key in REQUIRED_KEYS if key not in country]
    if missing or country['code'] != code:
        raise SystemExit(f'{config}: missing {missing} or code is not {code!r}')
    return pack, country


def assemble(code: str, out: pathlib.Path, allow_missing: bool = False) -> tuple[dict, int, int, list[str]]:
    pack, country = load_country(code)
    problems = check_edition(country)
    if problems:
        raise SystemExit(f'{code}: ' + '; '.join(problems))
    dist = (REPO / 'dist').resolve()
    if out.resolve() != dist and dist not in out.resolve().parents:
        raise SystemExit(f'Refusing to write outside {dist}: {out}')
    if out.exists():
        shutil.rmtree(out)
    engine, overlay = files_under(ENGINE), files_under(pack / 'site')
    for rel, source in {**engine, **overlay}.items():
        target = out / rel
        target.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(source, target)
    for name in LEGAL:
        shutil.copy2(REPO / name, out / name)
    (out / 'country.js').write_bytes(country_script(country, federate(out, code)).encode('utf-8'))
    if (ENGINE / STUDIO / 'index.html').exists():   # every edition carries the Country Studio and its engine
        (out / STUDIO / 'engine-bundle.json').write_bytes(
            json.dumps(studio_bundle(), ensure_ascii=False, separators=(',', ':')).encode('utf-8'))
    absent = [rel for rel in pack_files(country) if not (out / rel).is_file()]
    if absent:
        raise SystemExit(f'{code}: the pack is missing {absent} (docs/REPLICATE.md lists what a pack provides)')
    if country['language'] != SOURCE_LANGUAGE or not country['edition'].get('origin'):
        # Another Greek-language edition still needs its own name in place of ours, so it is translated too.
        missing = localize(out, sorted(rel for rel in set(engine) - set(overlay) if not rel.startswith(STUDIO)), country)
        if missing and not allow_missing and country['language'] != SOURCE_LANGUAGE:
            raise SystemExit(f'{code}: {len(missing)} interface messages are not translated yet; '
                             f'run python tools/strings.py missing {code}')
    if not country['edition'].get('origin'):
        leaks = brand_leaks(out)
        if leaks:
            raise SystemExit(f'{code}: the reserved name still shows in {leaks}')
    replaced = sorted(set(engine) & set(overlay))
    return country, len(engine), len(overlay), replaced


def check(out: pathlib.Path, reference: pathlib.Path) -> tuple[int, list[str], list[str], list[str]]:
    expected = {}
    for line in reference.read_bytes().decode('utf-8').splitlines():
        if line and not line.startswith('#'):
            digest, rel = line.split('  ', 1)
            expected[rel] = digest
    actual = {rel: hashlib.sha256(p.read_bytes()).hexdigest() for rel, p in files_under(out).items()}
    differ = sorted(rel for rel in expected.keys() & actual.keys() if expected[rel] != actual[rel])
    missing, extra = sorted(expected.keys() - actual.keys()), sorted(actual.keys() - expected.keys())
    return len(expected), differ, missing, extra


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__.split('\n')[0])
    parser.add_argument('--country', required=True, help='country pack code, e.g. gr')
    parser.add_argument('--out', help='output folder inside dist/ (default dist/<country>)')
    parser.add_argument('--check', help='release SHA-256 list the build must match exactly')
    parser.add_argument('--allow-missing', action='store_true', help='build even if some interface text is untranslated')
    args = parser.parse_args()
    sys.stdout.reconfigure(encoding='utf-8')
    out = pathlib.Path(args.out) if args.out else REPO / 'dist' / args.country
    country, n_engine, n_pack, replaced = assemble(args.country, out, args.allow_missing)
    print(f"{country['edition']['name']} · {country['name']}: {n_engine} engine + {n_pack} pack files -> {out}")
    if replaced:
        print(f'  pack replaces {len(replaced)} engine files: {", ".join(replaced[:8])}')
    if args.check:
        total, differ, missing, extra = check(out, pathlib.Path(args.check))
        if differ or missing or extra:
            for label, items in (('different', differ), ('missing', missing), ('extra', extra)):
                if items:
                    print(f'  {label}: {len(items)} e.g. {items[:5]}')
            raise SystemExit('check FAILED')
        print(f'  check passed: all {total} files identical to {pathlib.Path(args.check).name}')


if __name__ == '__main__':
    main()
