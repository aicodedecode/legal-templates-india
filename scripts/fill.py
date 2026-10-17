"""
Fill a template's {{placeholders}} from a YAML or JSON values file and export it.

Usage:
    python3 scripts/fill.py mutual-nda --values examples/acme.yaml
    python3 scripts/fill.py mutual-nda --values examples/acme.yaml --out nda.docx
    python3 scripts/fill.py --list-fields mutual-nda

Front matter and drafting notes are removed from the output. Placeholders with
no value are left in place and listed as warnings (use --strict to fail instead).
Writing .docx or .pdf requires pandoc (https://pandoc.org) on PATH.
"""

import argparse
import json
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

import yaml

from common import DRAFTING_NOTE_RE, PLACEHOLDER_RE, iter_slugs, load_template


def load_values(path):
    text = Path(path).read_text(encoding="utf-8")
    data = json.loads(text) if path.endswith(".json") else yaml.safe_load(text)
    return {k: str(v) for k, v in (data or {}).items()}


def render(body, values):
    missing = set()

    def sub(match):
        key = match.group(1)
        if key in values:
            return values[key]
        missing.add(key)
        return match.group(0)

    text = PLACEHOLDER_RE.sub(sub, DRAFTING_NOTE_RE.sub("", body))
    return text.lstrip(), sorted(missing)


def export(markdown, out):
    suffix = Path(out).suffix.lower()
    if suffix in ("", ".md"):
        Path(out).write_text(markdown, encoding="utf-8")
        return
    if not shutil.which("pandoc"):
        sys.exit(f"pandoc is required to write {suffix} files")
    with tempfile.NamedTemporaryFile("w", suffix=".md", delete=False, encoding="utf-8") as tmp:
        tmp.write(markdown)
    subprocess.run(["pandoc", tmp.name, "-f", "markdown", "-o", out], check=True)
    Path(tmp.name).unlink()


def main():
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("template", choices=iter_slugs(), metavar="TEMPLATE")
    parser.add_argument("--values", help="YAML or JSON file mapping field keys to values")
    parser.add_argument("--out", help="output path (.md, .docx or .pdf); defaults to stdout")
    parser.add_argument("--strict", action="store_true", help="fail if any placeholder is unfilled")
    parser.add_argument("--list-fields", action="store_true", help="print the template's fields and exit")
    args = parser.parse_args()

    meta, body = load_template(args.template)
    if args.list_fields:
        for field in meta["fields"]:
            print(f"{field['key']:<36} {field['label']}  (e.g. {field.get('example', '')})")
        return 0

    values = load_values(args.values) if args.values else {}
    text, missing = render(body, values)
    if missing:
        print(f"warning: {len(missing)} unfilled field(s): {', '.join(missing)}", file=sys.stderr)
        if args.strict:
            return 1
    if args.out:
        export(text, args.out)
        print(f"Wrote {args.out}", file=sys.stderr)
    else:
        sys.stdout.write(text)
    return 0


if __name__ == "__main__":
    sys.exit(main())
