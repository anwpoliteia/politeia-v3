import base64
import json
import pathlib

import scan_secrets


def b64(data: dict) -> str:
    return base64.urlsafe_b64encode(json.dumps(data).encode()).rstrip(b'=').decode()


def fake_jwt(role: str) -> str:
    return f"{b64({'alg': 'HS256', 'typ': 'JWT'})}.{b64({'iss': 'supabase', 'role': role})}.{'s' * 43}"


def write(tmp_path: pathlib.Path, name: str, text: str) -> pathlib.Path:
    path = tmp_path / name
    path.write_text(text, encoding='utf-8')
    return path


def test_flags_a_google_key(tmp_path: pathlib.Path) -> None:
    key = 'AIza' + 'x' * 35
    assert scan_secrets.scan_file(write(tmp_path, 'a.js', f"const k = '{key}'")) == ['Google API key']


def test_public_anon_key_is_allowed(tmp_path: pathlib.Path) -> None:
    assert scan_secrets.scan_file(write(tmp_path, 'b.js', f"createClient(url, '{fake_jwt('anon')}')")) == []


def test_service_role_key_is_flagged(tmp_path: pathlib.Path) -> None:
    found = scan_secrets.scan_file(write(tmp_path, 'c.js', fake_jwt('service_role')))
    assert found == ["JWT with role 'service_role'"]


def test_env_files_are_flagged_but_the_example_is_not(tmp_path: pathlib.Path) -> None:
    assert scan_secrets.scan_file(write(tmp_path, '.env.local', 'A=1')) == ['environment file']
    assert scan_secrets.scan_file(write(tmp_path, '.env.example', 'A=')) == []
