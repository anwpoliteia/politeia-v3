"""The Country Studio (JavaScript, in browsers) and tools/build.py (Python) must build the same edition.

France is built both ways. Engine files, translations, licences and images must be byte-identical; generated data
must have the same content (number formatting differs between Python and JavaScript); federation/ and studio/ are
left out (the Studio reads the live Sympoliteia, the Python build reads federation/data/).
"""
import json
import pathlib
import shutil
import subprocess
import zipfile

import pytest

import build
import federation

REPO = pathlib.Path(__file__).resolve().parent.parent
DATA_FILES = {'city-data.js', 'improvements.js', 'city-evidence.json', 'location-audit.json', 'country-regions.geojson', 'country.js'}


def tree(root: pathlib.Path) -> dict[str, pathlib.Path]:
    return {rel: path for rel, path in build.files_under(root).items() if not rel.startswith(('federation/', 'studio/'))}


def same_content(rel: str, studio: pathlib.Path, python: pathlib.Path) -> bool:
    if rel.endswith('.json') or rel.endswith('.geojson'):
        return json.loads(studio.read_bytes()) == json.loads(python.read_bytes())
    if rel == 'country.js':   # the federation summary differs by design (live data vs federation/data)
        def runtime(path: pathlib.Path) -> dict:
            data = json.loads(path.read_text(encoding='utf-8').split('window.POLITEIA_COUNTRY=', 1)[1].rstrip().rstrip(';'))
            return {key: value for key, value in data.items() if key != 'federation'}
        return runtime(studio) == runtime(python)
    names = {'city-data.js': ('regions', 'cities'), 'improvements.js': ('evidenceRecords',)}[rel]
    return all(federation.js_array(studio, n) == federation.js_array(python, n) for n in names)


@pytest.mark.skipif(shutil.which('node') is None, reason='Node is needed to run the Studio core')
def test_studio_builds_france_like_the_python_build(tmp_path: pathlib.Path) -> None:
    bundle = tmp_path / 'engine-bundle.json'
    bundle.write_text(json.dumps(build.studio_bundle(), ensure_ascii=False), encoding='utf-8')
    studio_out = tmp_path / 'studio-site'
    run = subprocess.run(['node', str(REPO / 'tests' / 'studio_parity.mjs'), str(REPO), str(bundle), str(studio_out)],
                         capture_output=True, text=True, encoding='utf-8', check=True)
    report = json.loads(run.stdout)
    assert report['problems'] == [] and report['missing'] == 0

    python_out = REPO / 'dist' / 'test-parity-fr'
    try:
        build.assemble('fr', python_out)
        studio_files, python_files = tree(studio_out), tree(python_out)
        assert sorted(studio_files) == sorted(python_files)
        different = [rel for rel in python_files if rel not in DATA_FILES
                     and studio_files[rel].read_bytes() != python_files[rel].read_bytes()]
        assert different == []
        assert [rel for rel in DATA_FILES if not same_content(rel, studio_files[rel], python_files[rel])] == []
    finally:
        shutil.rmtree(python_out, ignore_errors=True)

    with zipfile.ZipFile(tmp_path / 'studio-site.zip') as archive:   # the Studio's own zip writer
        assert archive.testzip() is None and 'index.html' in archive.namelist()
