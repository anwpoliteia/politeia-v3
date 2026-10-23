"""Interface text in other languages. Greek is the engine's source language.

Every run of Greek text in the engine's pages and scripts is a message. A country pack translates each message in
countries/<code>/strings.<language>.json ({"Greek message": "translation", ...}); tools/build.py applies it to the
engine's files when the pack's language is not Greek. Comments and the copyright meta tags are never translated.

usage:
  python tools/strings.py extract           writes engine/strings.source.json (every message and where it occurs)
  python tools/strings.py missing <code>    lists the messages a pack has not translated yet
  python tools/strings.py update <code>     adds new messages to the pack's file with empty translations
"""
import json
import pathlib
import re
import sys

REPO = pathlib.Path(__file__).resolve().parent.parent
ENGINE = REPO / 'engine' / 'site'
SOURCE_LIST = REPO / 'engine' / 'strings.source.json'
TEXT_FILES = {'.js', '.html', '.json'}
GREEK = '[Ͱ-Ͽἀ-῿]'
RUN = re.compile(r"[^'\"`<>{}\\\n$]*" + GREEK + r"[^'\"`<>{}\\\n$]*")
LATIN_BRAND = re.compile(r'POLITEIA EXTRAS')   # Latin brand text that other editions must replace too
# Comments (block, HTML and // line comments, but not the // of a URL) and the copyright meta tags.
PROTECTED = re.compile(r'/\*[\s\S]*?\*/|<!--[\s\S]*?-->|<meta name="(?:author|copyright)"[^>]*>|(?<![:\w\'"\\/])//[^\n]*')
UNSAFE = re.compile(r'[<>{}\\]|\$\{')
TYPOGRAPHIC = str.maketrans({"'": '’', '"': '”', '`': '’', '\n': ' ', '\r': ' '})


def messages(text: str) -> list[tuple[int, int, str]]:
    """(start, end, message) for every translatable run, outside comments and copyright tags."""
    shielded = [m.span() for m in PROTECTED.finditer(text)]
    spans = []
    for pattern in (RUN, LATIN_BRAND):
        for match in pattern.finditer(text):
            raw = match.group(0)
            start = match.start() + len(raw) - len(raw.lstrip())
            end = match.end() - (len(raw) - len(raw.rstrip()))
            if start < end and not any(start < b and end > a for a, b in shielded):   # not touching any comment
                spans.append((start, end))
    found, last = [], -1
    for start, end in sorted(spans, key=lambda s: (s[0], -s[1])):   # overlapping matches: keep the longer one
        if start >= last:
            found.append((start, end, text[start:end]))
            last = end
    return found


def engine_files() -> list[pathlib.Path]:
    """The engine's text files, except the Country Studio (an English tool that is never translated)."""
    return [p for p in sorted(ENGINE.rglob('*')) if p.is_file() and p.suffix in TEXT_FILES
            and not p.relative_to(ENGINE).as_posix().startswith('studio/')]


def source_messages() -> dict[str, list[str]]:
    """Every message in the engine -> the files it occurs in."""
    where: dict[str, list[str]] = {}
    for path in engine_files():
        rel = path.relative_to(ENGINE).as_posix()
        for _, _, message in messages(path.read_bytes().decode('utf-8')):
            files = where.setdefault(message, [])
            if rel not in files:
                files.append(rel)
    return where


def safe(translation: str, message: str) -> str:
    """Translations go into JS strings, HTML and JSON alike: quotes become typographic, code characters are refused."""
    text = translation.translate(TYPOGRAPHIC)
    if UNSAFE.search(text):
        raise SystemExit(f'Translation of {message!r} contains < > {{ }} \\ or ${{ — not allowed: {translation!r}')
    return text


def catalogue_path(code: str, language: str) -> pathlib.Path:
    return REPO / 'countries' / code / f'strings.{language}.json'


def load_catalogue(code: str, language: str) -> dict[str, str]:
    path = catalogue_path(code, language)
    return json.loads(path.read_text(encoding='utf-8')) if path.exists() else {}


def translate(text: str, catalogue: dict[str, str]) -> tuple[str, list[str]]:
    """Replace every message by its translation; returns the new text and the messages that had none."""
    missing, pieces, last = [], [], 0
    for start, end, message in messages(text):
        translation = catalogue.get(message, '')
        if not translation:
            missing.append(message)
            continue
        pieces += [text[last:start], safe(translation, message)]
        last = end
    return ''.join(pieces) + text[last:], missing


def localize(text: str, language: str, locale: str) -> str:
    """Language and number/date formats fixed to Greek in the engine."""
    return (text.replace('<html lang="el">', f'<html lang="{language}">')
            .replace("'el-GR'", f"'{locale}'")
            .replace("localeCompare(b.p.title,'el')", f"localeCompare(b.p.title,'{language}')"))


def main() -> None:
    sys.stdout.reconfigure(encoding='utf-8')
    command = sys.argv[1] if len(sys.argv) > 1 else ''
    if command == 'extract':
        where = source_messages()
        SOURCE_LIST.write_text(json.dumps(where, ensure_ascii=False, indent=1) + '\n', encoding='utf-8', newline='\n')
        print(f'{len(where)} messages -> {SOURCE_LIST.relative_to(REPO)}')
        return
    if command in ('missing', 'update') and len(sys.argv) == 3:
        code = sys.argv[2]
        country = json.loads((REPO / 'countries' / code / 'country.json').read_text(encoding='utf-8'))
        catalogue = load_catalogue(code, country['language'])
        todo = [m for m in source_messages() if not catalogue.get(m)]
        if command == 'update':
            merged = {**{m: '' for m in source_messages()}, **catalogue}
            catalogue_path(code, country['language']).write_text(
                json.dumps(merged, ensure_ascii=False, indent=1) + '\n', encoding='utf-8', newline='\n')
        print(f'{len(todo)} of {len(source_messages())} messages still to translate for {code}')
        for message in todo[:20]:
            print('  ', message)
        return
    raise SystemExit(__doc__)


if __name__ == '__main__':
    main()
