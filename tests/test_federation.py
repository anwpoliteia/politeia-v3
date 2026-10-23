import pathlib

import federation

VOCABULARY = {
    'heat-shade': {'stems': {'el': ['σκια', 'δροσ'], 'fr': ['ombre', 'ilot de chaleur']}},
    'public-transport': {'stems': {'el': ['μετρο'], 'fr': ['metro ', 'tram ']}},
}


def test_themes_ignore_accents_case_and_final_sigma() -> None:
    assert federation.themes('Δροσερές διαδρομές με ΣΚΙΆ', 'el', VOCABULARY) == ['heat-shade']


def test_themes_match_word_starts_and_phrases_only() -> None:
    assert federation.themes("Un îlot de chaleur près du métro", 'fr', VOCABULARY) == ['heat-shade', 'public-transport']
    assert federation.themes('La métropole et ses trames vertes', 'fr', VOCABULARY) == []


def test_js_array_reads_nested_arrays_and_brackets_inside_strings(tmp_path: pathlib.Path) -> None:
    script = tmp_path / 'data.js'
    script.write_text('/* x */\nwindow.POLITEIA.items = [{"a": [1, [2]], "b": "] tricky [ \\" quote"}];\nmore();', encoding='utf-8')
    assert federation.js_array(script, 'items') == [{'a': [1, [2]], 'b': '] tricky [ " quote'}]


def case(case_id: str, edition: str, tags: list[str], sector: str = 'environment') -> dict:
    return {'id': case_id, 'edition': edition, 'tags': tags, 'sector': sector, 'cofog': '05', 'review': 'reviewed'}


def test_related_cases_come_only_from_other_editions_with_a_shared_theme() -> None:
    cases = [case('gr:1', 'gr', ['heat-shade']), case('gr:2', 'gr', ['heat-shade']),
             case('fr:1', 'fr', ['heat-shade']), case('fr:2', 'fr', ['public-transport'], 'transport')]
    found = federation.related(cases, {})
    assert [m['id'] for m in found['fr:1']] == ['gr:1', 'gr:2']
    assert 'fr:2' not in found and all(m['shared'] == ['heat-shade'] for m in found['gr:1'])
