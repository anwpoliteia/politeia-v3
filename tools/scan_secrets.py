"""Fail if anything that looks like a secret would be published from this repository. Run it before every push.

usage: python tools/scan_secrets.py
Scans every file git would include (tracked + untracked, minus .gitignore). Findings name the file and the kind
of secret, never the value. Allowed on purpose: Supabase keys whose role is "anon" (public by design).
"""
import base64
import binascii
import json
import pathlib
import re
import subprocess
import sys

REPO = pathlib.Path(__file__).resolve().parent.parent
PATTERNS = {
    'Google API key': re.compile(rb'AIza[0-9A-Za-z_\-]{35}'),
    'Anthropic key': re.compile(rb'sk-ant-[0-9A-Za-z_\-]{20,}'),
    'OpenAI-style key': re.compile(rb'\bsk-(?:proj-)?[0-9A-Za-z]{32,}'),
    'GitHub token': re.compile(rb'\b(?:ghp|gho|ghu|ghs|ghr)_[0-9A-Za-z]{36}|\bgithub_pat_[0-9A-Za-z_]{40,}'),
    'Slack token': re.compile(rb'\bxox[abprs]-[0-9A-Za-z\-]{10,}'),
    'AWS access key': re.compile(rb'\bAKIA[0-9A-Z]{16}\b'),
    'private key': re.compile(rb'-----BEGIN (?:RSA |EC |OPENSSH |DSA )?PRIVATE KEY-----'),
}
JWT = re.compile(rb'eyJ[0-9A-Za-z_\-]{10,}\.([0-9A-Za-z_\-]{10,})\.[0-9A-Za-z_\-]{10,}')
ENV_FILE = re.compile(r'^\.env(\..+)?$')


def jwt_role(payload: bytes) -> str | None:
    try:
        claims = json.loads(base64.urlsafe_b64decode(payload + b'=' * (-len(payload) % 4)))
    except (binascii.Error, ValueError):
        return None
    return claims.get('role') if isinstance(claims, dict) else None


def scan_file(path: pathlib.Path) -> list[str]:
    """Kinds of secret found in one file (empty when clean)."""
    if ENV_FILE.match(path.name) and path.name != '.env.example':
        return ['environment file']
    data = path.read_bytes()
    found = [kind for kind, pattern in PATTERNS.items() if pattern.search(data)]
    for match in JWT.finditer(data):
        role = jwt_role(match.group(1))
        if role is not None and role != 'anon':
            found.append(f'JWT with role {role!r}')
    return found


def publishable_files() -> list[pathlib.Path]:
    listing = subprocess.run(['git', 'ls-files', '--cached', '--others', '--exclude-standard', '-z'],
                             cwd=REPO, capture_output=True, check=True).stdout
    return [REPO / name for name in listing.decode('utf-8').split('\0') if name]


def main() -> None:
    sys.stdout.reconfigure(encoding='utf-8')
    files = publishable_files()
    findings = {path: kinds for path in files if (kinds := scan_file(path))}
    for path, kinds in findings.items():
        print(f'  {path.relative_to(REPO).as_posix()}: {", ".join(kinds)}')
    if findings:
        raise SystemExit(f'{len(findings)} file(s) look like they contain secrets. Nothing may be pushed.')
    print(f'clean: {len(files)} files scanned, no secrets found')


if __name__ == '__main__':
    main()
