import json
import pathlib
import shutil

import pytest

import build

REPO = pathlib.Path(__file__).resolve().parent.parent


def latest_release() -> pathlib.Path:
    """The newest proof of the Greek edition: the golden reference."""
    return sorted((REPO / 'proofs').glob('ΑΝΩ ΠΟΛΙΤΕΙΑ - έκδοση *.sha256.txt'))[-1]


def test_greece_build_is_byte_identical_to_the_release() -> None:
    """The golden test: moving to engine + country pack must not change one byte of the published site."""
    out = REPO / 'dist' / 'test-gr'
    try:
        build.assemble('gr', out)
        total, differ, missing, extra = build.check(out, latest_release())
    finally:
        shutil.rmtree(out, ignore_errors=True)
    assert (differ, missing, extra) == ([], [], [])
    assert total > 300   # engine + pack + licences + country.js + Συμπολιτεία data


def test_refuses_to_write_outside_dist(tmp_path: pathlib.Path) -> None:
    with pytest.raises(SystemExit, match='Refusing'):
        build.assemble('gr', tmp_path / 'site')


def test_unknown_country_is_explained() -> None:
    with pytest.raises(SystemExit, match='No country pack'):
        build.load_country('zz')


def test_pack_file_replaces_the_engine_file(tmp_path: pathlib.Path, monkeypatch: pytest.MonkeyPatch) -> None:
    (tmp_path / 'engine' / 'site').mkdir(parents=True)
    (tmp_path / 'engine' / 'site' / 'index.html').write_text('engine', encoding='utf-8')
    (tmp_path / 'engine' / 'site' / 'shared.js').write_text('shared', encoding='utf-8')
    pack = tmp_path / 'countries' / 'xx'
    country = {'code': 'xx', 'name': 'X', 'language': 'el', 'map': {'regions': 'r.geojson'},
               'edition': {'name': 'X', 'origin': True, 'mark': 'm.svg#m', 'hero': {'src': 'h.svg'}, 'photos': {'coast': 'c.svg'}}}
    (pack / 'site' / 'citizen-assets').mkdir(parents=True)
    (pack / 'site' / 'index.html').write_text('country', encoding='utf-8')
    for rel in build.pack_files(country):
        (pack / 'site' / rel).write_text(rel, encoding='utf-8')
    (pack / 'country.json').write_text(json.dumps(country), encoding='utf-8')
    for name in build.LEGAL:
        (tmp_path / name).write_text(name, encoding='utf-8')
    monkeypatch.setattr(build, 'REPO', tmp_path)
    monkeypatch.setattr(build, 'ENGINE', tmp_path / 'engine' / 'site')

    _, _, _, replaced = build.assemble('xx', tmp_path / 'dist' / 'xx')

    assert replaced == ['index.html']
    assert (tmp_path / 'dist' / 'xx' / 'index.html').read_text(encoding='utf-8') == 'country'
    assert (tmp_path / 'dist' / 'xx' / 'shared.js').read_text(encoding='utf-8') == 'shared'
    assert (tmp_path / 'dist' / 'xx' / 'COPYRIGHT.md').exists()


def test_other_editions_must_use_their_own_name_and_credit() -> None:
    edition = {'name': 'ΑΝΩ ΠΟΛΙΤΕΙΑ · France', 'origin': False, 'credit': 'Inspired', 'mark': 'citizen-assets/ano-politeia-mark.svg'}
    problems = build.check_edition({'edition': edition})
    assert len(problems) == 3
    fine = {'name': 'CITÉ COMMUNE', 'origin': False, 'credit': 'Basé sur ΑΝΩ ΠΟΛΙΤΕΙΑ (ipoliteia.gr)', 'mark': 'm.svg#m'}
    assert build.check_edition({'edition': fine}) == []


def test_france_builds_translated_and_without_the_reserved_name() -> None:
    out = REPO / 'dist' / 'test-fr'
    try:
        country, *_ = build.assemble('fr', out)
        page = (out / 'index.html').read_text(encoding='utf-8')
        assert country['language'] == 'fr' and '<html lang="fr">' in page
        assert build.brand_leaks(out) == []
    finally:
        shutil.rmtree(out, ignore_errors=True)
