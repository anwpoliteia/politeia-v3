"""Timestamp files with the public OpenTimestamps calendars, using only the Python standard library.

usage: python timestamp_proof.py <file> [<file> ...]
Writes <file>.ots beside each file. Only SHA-256(SHA-256(file) + random nonce) leaves the computer; never the file.
Owner's approval for sending these fingerprints: 23 October 2026.

Each calendar gets its own nonce branch, so its answer is kept exactly as received. A new .ots is "pending":
within a few hours the calendars anchor it in a Bitcoin block. Completing it later (`ots upgrade` from
opentimestamps-client, or verifying on opentimestamps.org with the original file) turns it into a proof
that anyone can check without trusting us or the calendars.
"""
import hashlib
import os
import pathlib
import sys
import urllib.request

CALENDARS = ('https://a.pool.opentimestamps.org', 'https://b.pool.opentimestamps.org',
             'https://a.pool.eternitywall.com', 'https://ots.btc.catallaxy.com')
MAGIC = b'\x00OpenTimestamps\x00\x00Proof\x00\xbf\x89\xe2\xe8\x84\xe8\x92\x94'
OP_SHA256, OP_APPEND = 0x08, 0xf0
UNARY_OPS = {0x02, 0x03, 0x08, 0x67, 0xf2, 0xf3}
BINARY_OPS = {0xf0, 0xf1}
PENDING = bytes.fromhex('83dfe30d2ef90c8e')
BITCOIN = bytes.fromhex('0588960d73d71901')


def submit(calendar, digest):
    request = urllib.request.Request(f'{calendar}/digest', data=digest, method='POST', headers={
        'Accept': 'application/vnd.opentimestamps.v1', 'User-Agent': 'politeia-timestamp/1.0',
        'Content-Type': 'application/x-www-form-urlencoded'})
    with urllib.request.urlopen(request, timeout=30) as response:
        if response.status != 200:
            raise OSError(f'HTTP {response.status}')
        return response.read(10_000)


def varuint(buf, i):
    value = shift = 0
    while True:
        byte = buf[i]
        i += 1
        value |= (byte & 0x7f) << shift
        if not byte & 0x80:
            return value, i
        shift += 7


def check(ots, file_digest):
    """Parse the whole proof back; return the attestations found. Raises on any malformed byte."""
    if not ots.startswith(MAGIC) or ots[len(MAGIC)] != 1 or ots[len(MAGIC) + 1] != OP_SHA256:
        raise ValueError('bad header')
    start = len(MAGIC) + 2
    if ots[start:start + 32] != file_digest:
        raise ValueError('file digest mismatch')
    found = []

    def timestamp(i, depth):
        while True:
            more = ots[i] == 0xff
            i = item(i + 1 if more else i, depth)
            if not more:
                return i

    def item(i, depth):
        if depth > 256:
            raise ValueError('too deep')
        tag = ots[i]
        i += 1
        if tag == 0x00:
            kind = ots[i:i + 8]
            size, i = varuint(ots, i + 8)
            payload = ots[i:i + size]
            found.append('pending ' + payload[1:].decode('ascii', 'replace') if kind == PENDING
                         else 'bitcoin' if kind == BITCOIN else 'other ' + kind.hex())
            return i + size
        if tag in BINARY_OPS:
            size, i = varuint(ots, i)
            return timestamp(i + size, depth + 1)
        if tag in UNARY_OPS:
            return timestamp(i, depth + 1)
        raise ValueError(f'unknown tag {tag:#x} at {i - 1}')

    end = timestamp(start + 32, 0)
    if end != len(ots):
        raise ValueError(f'{len(ots) - end} trailing bytes')
    return found


def stamp(path):
    file_digest = hashlib.sha256(path.read_bytes()).digest()
    branches = []
    for calendar in CALENDARS:
        nonce = os.urandom(16)
        try:
            answer = submit(calendar, hashlib.sha256(file_digest + nonce).digest())
        except OSError as error:
            print(f'  {calendar}: no answer ({error})')
            continue
        branches.append(bytes([OP_APPEND, len(nonce)]) + nonce + bytes([OP_SHA256]) + answer)
        print(f'  {calendar}: ok')
    if len(branches) < 2:
        raise SystemExit(f'{path.name}: fewer than two calendars answered; nothing written')
    branches.sort()   # canonical order of a fork: by operation, here by nonce
    ots = MAGIC + bytes([1, OP_SHA256]) + file_digest + b''.join(b'\xff' + b for b in branches[:-1]) + branches[-1]
    attestations = check(ots, file_digest)
    target = path.with_name(path.name + '.ots')
    target.write_bytes(ots)
    return target, file_digest.hex(), attestations


if __name__ == '__main__':
    sys.stdout.reconfigure(encoding='utf-8')
    for name in sys.argv[1:]:
        source = pathlib.Path(name)
        print(source.name)
        written, digest, attestations = stamp(source)
        print(f'  SHA-256 {digest}\n  -> {written.name}: {len(attestations)} attestations')
        for attestation in attestations:
            print('    ', attestation)
