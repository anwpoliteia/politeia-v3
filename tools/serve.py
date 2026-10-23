"""Serve a built edition locally the way Netlify will: static files plus the _redirects rewrites and _headers types.

usage: python tools/serve.py [folder] [port]      default: dist/gr on 127.0.0.1:5199
Only GET/HEAD; nothing is ever written.
"""
import functools
import http.server
import pathlib
import sys

FOLDER = pathlib.Path(sys.argv[1] if len(sys.argv) > 1 else pathlib.Path(__file__).resolve().parent.parent / 'dist' / 'gr')
PORT = int(sys.argv[2]) if len(sys.argv) > 2 else 5199


def read_rewrites(folder):
    """(from, to) pairs for the 200 rules in _redirects; a trailing /* matches any deeper path."""
    rules = []
    path = folder / '_redirects'
    for line in path.read_text(encoding='utf-8').splitlines() if path.exists() else []:
        parts = line.split()
        if len(parts) == 3 and not line.lstrip().startswith('#') and parts[2] == '200':
            rules.append((parts[0], parts[1]))
    return rules


def read_types(folder):
    """{path: content type} for the exact-path Content-Type rules in _headers."""
    types, current = {}, None
    path = folder / '_headers'
    for line in path.read_text(encoding='utf-8').splitlines() if path.exists() else []:
        if line.startswith('/'):
            current = line.strip()
        elif current and line.strip().lower().startswith('content-type:'):
            types[current] = line.split(':', 1)[1].strip()
    return types


class Handler(http.server.SimpleHTTPRequestHandler):
    rules = read_rewrites(FOLDER)
    types = read_types(FOLDER)
    forced_type = None

    def guess_type(self, path):
        return self.forced_type or super().guess_type(path)

    def rewrite(self):
        path, _, query = self.path.partition('?')
        self.forced_type = self.types.get(path)
        for source, target in self.rules:
            if path == source or (source.endswith('/*') and path.startswith(source[:-1])):
                self.path = target + ('?' + query if query else '')
                return

    def do_GET(self):
        self.rewrite()
        super().do_GET()

    def do_HEAD(self):
        self.rewrite()
        super().do_HEAD()


if __name__ == '__main__':
    sys.stdout.reconfigure(encoding='utf-8')   # the folder name is Greek; Windows consoles default to cp1252
    handler = functools.partial(Handler, directory=str(FOLDER))
    print(f'Serving {FOLDER} on http://127.0.0.1:{PORT}  ({len(Handler.rules)} rewrites)')
    http.server.ThreadingHTTPServer(('127.0.0.1', PORT), handler).serve_forever()
