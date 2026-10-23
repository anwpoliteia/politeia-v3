"""Συμπολιτεία: editions share their public dossiers in one format and learn from each other.

usage: python tools/federation.py
Reads every local pack (countries/*, except _template) plus any remote feed listed in federation/members.json,
and writes federation/data/: members.json, index.json (every case), matches.json (for each case, related cases in
other countries) and stats.json (cases by country and sector, themes shared across countries).
tools/build.py copies federation/data/ into every edition, with the edition's own feed at federation/feed.json.

A case keeps its original language and links to its public sources; shared themes (federation/tags.json) and
sectors with their COFOG codes (federation/sectors.json) are what let cases meet across languages. Matching only
proposes related cases; people decide what is useful.
"""
import datetime
import json
import pathlib
import re
import sys
import unicodedata
import urllib.request

REPO = pathlib.Path(__file__).resolve().parent.parent
FEDERATION = REPO / 'federation'
DATA = FEDERATION / 'data'
MATCHES_PER_CASE = 3


def js_array(path: pathlib.Path, name: str) -> list:
    """The JSON array assigned to window.POLITEIA.<name> in a pack script."""
    text = path.read_bytes().decode('utf-8')
    found = re.search(r'window\.POLITEIA\.' + name + r'\s*=\s*\[', text)
    if not found:
        raise SystemExit(f'{path}: no window.POLITEIA.{name} array')
    start, depth = found.end() - 1, 0
    in_string = escaped = False
    for index in range(start, len(text)):
        char = text[index]
        if in_string:
            escaped, in_string = (False, True) if escaped else (char == '\\', char != '"')
        elif char == '"':
            in_string = True
        elif char in '[]':
            depth += 1 if char == '[' else -1
            if depth == 0:
                return json.loads(text[start:index + 1])
    raise SystemExit(f'{path}: unterminated array {name}')


def normalize(text: str) -> str:
    """Lower case, no accents, final sigma as sigma, words separated by single spaces."""
    plain = ''.join(c for c in unicodedata.normalize('NFD', text.lower()) if unicodedata.category(c) != 'Mn')
    return ' ' + re.sub(r'[^\w]+', ' ', plain.replace('ς', 'σ')).strip() + ' '


def themes(text: str, language: str, vocabulary: dict) -> list[str]:
    """Themes whose stems begin a word of the text (multi-word stems match as phrases)."""
    words = normalize(text)
    return sorted(tag for tag, entry in vocabulary.items()
                  if any(' ' + stem in words for stem in entry['stems'].get(language, [])))


def local_feed(pack: pathlib.Path, vocabulary: dict, sectors: dict) -> dict:
    country = json.loads((pack / 'country.json').read_text(encoding='utf-8'))
    code, language = country['code'], country['language']
    cities = {c['id']: c for c in js_array(pack / 'site' / 'city-data.js', 'cities')}
    review = 'draft' if country.get('contentNotice') else 'reviewed'
    cases = []
    for record in js_array(pack / 'site' / 'improvements.js', 'evidenceRecords'):
        city = cities[record['cityId']]
        record_id = f"evidence-{record['cityId']}-{record['slug']}"
        cases.append({
            'id': f"{code}:{record['cityId']}:{record['slug']}", 'edition': code, 'language': language,
            'city': {'id': city['id'], 'name': city['name'], 'geonames': city.get('geonames')}, 'region': city.get('region'),
            'sector': record['sectorId'], 'cofog': sectors[record['sectorId']]['cofog'],
            'tags': sorted(set(record.get('tags', [])) | set(themes(
                ' '.join([record['title'], record['problem'], record['action']]), language, vocabulary))),
            'title': record['title'], 'problem': record['problem'], 'action': record['action'],
            'kind': record.get('evidenceKind'), 'review': review, 'reviewedAt': record.get('reviewedAt'),
            'sources': [{key: s.get(key) for key in ('title', 'url', 'publisher')} for s in record['sources']],
            'link': f"citizen.html?design=kyma&city={record['cityId']}&dossier={record_id}"})
    edition = country['edition']
    return {'edition': code, 'name': edition['name'], 'country': country['name'], 'language': language,
            'origin': bool(edition.get('origin')), 'url': f"https://{edition['domain']}/" if edition.get('domain') else None,
            'review': review, 'license': f"© {edition['name']} · CC BY-NC-ND 4.0 · see COPYRIGHT.md of the edition",
            'cases': cases}


def remote_feeds() -> list[dict]:
    """Feeds of editions hosted elsewhere (federation/members.json: [{"feed": "https://…/federation/feed.json"}])."""
    listed = FEDERATION / 'members.json'
    feeds = []
    for member in json.loads(listed.read_text(encoding='utf-8')).get('remote', []) if listed.exists() else []:
        request = urllib.request.Request(member['feed'], headers={'User-Agent': 'politeia-federation/1.0'})
        with urllib.request.urlopen(request, timeout=60) as response:
            feeds.append(json.loads(response.read().decode('utf-8')))
    return feeds


def related(cases: list[dict], sectors: dict) -> dict[str, list[dict]]:
    """For each case, the closest cases in other editions: shared themes first, then sector, then COFOG division."""
    found = {}
    for case in cases:
        scored = []
        for other in cases:
            if other['edition'] == case['edition']:
                continue
            shared = sorted(set(case['tags']) & set(other['tags']))
            if not shared:
                continue
            score = 3 * len(shared) + (2 if other['sector'] == case['sector'] else 0) \
                + (1 if other['cofog'].split('.')[0] == case['cofog'].split('.')[0] else 0) \
                + (1 if other['review'] == 'reviewed' else 0)
            scored.append((-score, other['id'], {'id': other['id'], 'score': score, 'shared': shared}))
        if scored:
            found[case['id']] = [entry for _, _, entry in sorted(scored)[:MATCHES_PER_CASE]]
    return found


def statistics(feeds: list[dict], cases: list[dict], vocabulary: dict) -> dict:
    by_sector = {f['edition']: {} for f in feeds}
    for case in cases:
        by_sector[case['edition']][case['sector']] = by_sector[case['edition']].get(case['sector'], 0) + 1
    shared = []
    for tag in vocabulary:
        per = {f['edition']: [c['id'] for c in cases if c['edition'] == f['edition'] and tag in c['tags']] for f in feeds}
        present = {edition: ids for edition, ids in per.items() if ids}
        if len(present) >= 2:
            shared.append({'tag': tag, 'editions': {edition: {'count': len(ids), 'examples': ids[:3]} for edition, ids in present.items()}})
    shared.sort(key=lambda s: -min(e['count'] for e in s['editions'].values()))
    return {'generatedAt': datetime.date.today().isoformat(), 'cases': len(cases), 'editions': len(feeds),
            'bySector': by_sector, 'sharedThemes': shared}


def main() -> None:
    sys.stdout.reconfigure(encoding='utf-8')
    vocabulary = json.loads((FEDERATION / 'tags.json').read_text(encoding='utf-8'))['tags']
    sectors = json.loads((FEDERATION / 'sectors.json').read_text(encoding='utf-8'))['sectors']
    packs = sorted(p for p in (REPO / 'countries').iterdir() if p.is_dir() and not p.name.startswith('_'))
    feeds = [local_feed(p, vocabulary, sectors) for p in packs] + remote_feeds()
    cases = [case for feed in feeds for case in feed['cases']]
    members = [{key: feed[key] for key in ('edition', 'name', 'country', 'language', 'origin', 'url', 'review', 'license')}
               | {'cases': len(feed['cases'])} for feed in feeds]
    DATA.mkdir(parents=True, exist_ok=True)
    outputs = {'members.json': members, 'index.json': cases, 'matches.json': related(cases, sectors),
               'stats.json': statistics(feeds, cases, vocabulary)}
    for name, value in outputs.items():
        (DATA / name).write_text(json.dumps(value, ensure_ascii=False, separators=(',', ':')), encoding='utf-8', newline='\n')
    matched = outputs['matches.json']
    print(f"{len(feeds)} editions, {len(cases)} cases, {len(matched)} with related cases abroad, "
          f"{len(outputs['stats.json']['sharedThemes'])} themes shared across countries -> {DATA.relative_to(REPO)}")


if __name__ == '__main__':
    main()
