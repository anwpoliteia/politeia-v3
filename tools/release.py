"""Make a release of one edition: build it, zip it, and record a dated SHA-256 proof in proofs/.

usage: python tools/release.py --country gr [--copy-to "C:/path/folder"]
writes dist/<code>.zip and proofs/<edition name> - έκδοση <date time>.sha256.txt (sha256sum format: check it from
inside the built folder with sha256sum -c). The proof can then be timestamped: python tools/timestamp_proof.py <proof>.
The newest Greek proof is the golden reference of tests/test_build.py.
"""
import argparse
import datetime
import hashlib
import pathlib
import shutil
import sys
import zipfile

import build

REPO = pathlib.Path(__file__).resolve().parent.parent


def main() -> None:
    parser = argparse.ArgumentParser(description='Build, zip and prove one edition.')
    parser.add_argument('--country', required=True)
    parser.add_argument('--copy-to', help='also copy the zip into this folder')
    args = parser.parse_args()
    sys.stdout.reconfigure(encoding='utf-8')
    out = REPO / 'dist' / args.country
    country, *_ = build.assemble(args.country, out)
    files = sorted(p for p in out.rglob('*') if p.is_file())
    archive = REPO / 'dist' / f'{args.country}.zip'
    with zipfile.ZipFile(archive, 'w', zipfile.ZIP_DEFLATED, compresslevel=9) as z:
        for path in files:
            z.write(path, path.relative_to(out).as_posix())
    stamp = datetime.datetime.now().astimezone()
    name = country['edition']['name']
    lines = [f'# {name} — αποτυπώματα SHA-256 της έκδοσης ({args.country})',
             f'# δημιουργήθηκε {stamp.isoformat(timespec="seconds")} από tools/release.py',
             f'# zip: {archive.name}  SHA-256 {hashlib.sha256(archive.read_bytes()).hexdigest()}',
             '# έλεγχος: μέσα στον φάκελο της έκδοσης, sha256sum -c "<αυτό το αρχείο>"']
    lines += [f'{hashlib.sha256(p.read_bytes()).hexdigest()}  {p.relative_to(out).as_posix()}' for p in files]
    proof = REPO / 'proofs' / f'{name} - έκδοση {stamp:%Y-%m-%d %H%M%S}.sha256.txt'
    proof.write_bytes(('\n'.join(lines) + '\n').encode('utf-8'))
    size = sum(p.stat().st_size for p in files) / 1048576
    if args.copy_to:
        shutil.copy2(archive, pathlib.Path(args.copy_to) / archive.name)
    print(f'{name}: {len(files)} files, {size:.1f} MB, zip {archive.stat().st_size / 1048576:.1f} MB\nproof: {proof.name}')


if __name__ == '__main__':
    main()
