import compile_pack

CITIES = {'city-1'}


def record(**changes: object) -> dict:
    base = {'cityId': 'city-1', 'slug': 's', 'sectorId': 'transport', 'relatedSectors': [], 'title': 'T', 'problem': 'P',
            'action': 'A', 'counter': 'C', 'measure': 'M', 'responsibility': 'R', 'locationName': 'L',
            'evidenceKind': 'plan-priority', 'steps': ['one', 'two'], 'coordinates': None,
            'geographicDisposition': 'network-wide', 'coordinateNote': 'No pin: a network.',
            'sources': [{'title': 'S', 'url': 'https://example.org', 'publisher': 'City', 'accessedAt': '2026-10-23',
                         'locator': 'Section 2', 'evidence': 'What it says.'}]}
    return {**base, **changes}


def test_a_complete_dossier_passes() -> None:
    assert compile_pack.problems_in(record(), CITIES) == []


def test_a_dossier_without_a_source_is_refused() -> None:
    assert 'no source' in compile_pack.problems_in(record(sources=[]), CITIES)


def test_a_source_needs_link_date_locator_and_evidence() -> None:
    weak = record(sources=[{'title': 'S', 'url': 'example.org', 'publisher': 'City', 'accessedAt': 'today'}])
    found = compile_pack.problems_in(weak, CITIES)
    assert {'source without a link', 'source without an access date (YYYY-MM-DD)'} <= set(found)
    assert any('locator' in p for p in found)


def test_no_pin_needs_a_reason_and_a_pin_needs_its_source() -> None:
    assert any('geographicDisposition' in p for p in compile_pack.problems_in(record(geographicDisposition=None), CITIES))
    assert any('coordinateSources' in p for p in compile_pack.problems_in(record(coordinates=[5.38, 43.29]), CITIES))


def test_unknown_city_sector_and_wrong_step_count_are_refused() -> None:
    found = compile_pack.problems_in(record(cityId='city-9', sectorId='magic', steps=['only one']), CITIES)
    assert {'unknown city city-9', 'unknown sector', 'exactly two steps'} <= set(found)
