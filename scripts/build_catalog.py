"""
Build catalog.json and the template table in README.md from template front matter.

Usage:
    python3 scripts/build_catalog.py           # write catalog.json and update README.md
    python3 scripts/build_catalog.py --check   # exit non-zero if either is out of date (CI)
"""

import datetime
import json
import sys

from common import CATEGORIES, ROOT, iter_slugs, load_template

CATALOG_PATH = ROOT / "catalog.json"
README_PATH = ROOT / "README.md"
START, END = "<!-- catalog:start -->", "<!-- catalog:end -->"
STATUS_BADGE = {"draft": "Draft", "community-reviewed": "Community reviewed",
                "advocate-reviewed": "Advocate reviewed"}


def to_jsonable(value):
    if isinstance(value, (datetime.date, datetime.datetime)):
        return value.isoformat()
    if isinstance(value, dict):
        return {k: to_jsonable(v) for k, v in value.items()}
    if isinstance(value, list):
        return [to_jsonable(v) for v in value]
    return value


def build_entries():
    entries = []
    for slug in iter_slugs():
        meta, body = load_template(slug)
        entry = to_jsonable(meta)
        entry["path"] = f"templates/{slug}/template.md"
        entry["word_count"] = len(body.split())
        entries.append(entry)
    return entries


def render_catalog(entries):
    catalog = {
        "name": "legal-templates-india",
        "license": "CC0-1.0",
        "jurisdiction": "IN",
        "categories": CATEGORIES,
        "count": len(entries),
        "templates": entries,
    }
    return json.dumps(catalog, indent=2, ensure_ascii=False) + "\n"


def render_table(entries):
    lines = []
    for cat, label in CATEGORIES.items():
        rows = [e for e in entries if e["category"] == cat]
        if not rows:
            continue
        lines += [f"### {label}", "", "| Template | Description | Status |", "|---|---|---|"]
        for e in sorted(rows, key=lambda e: e["title"]):
            status = STATUS_BADGE.get(e["review_status"], e["review_status"])
            lines.append(f"| [{e['title']}](templates/{e['id']}/) | {e['summary'].strip()} | {status} |")
        lines.append("")
    return "\n".join(lines).rstrip() + "\n"


def render_readme(entries):
    readme = README_PATH.read_text(encoding="utf-8")
    head, rest = readme.split(START, 1)
    _, tail = rest.split(END, 1)
    return f"{head}{START}\n{render_table(entries)}{END}{tail}"


def main(argv):
    entries = build_entries()
    outputs = {CATALOG_PATH: render_catalog(entries), README_PATH: render_readme(entries)}
    if "--check" in argv:
        stale = [p.name for p, text in outputs.items()
                 if not p.exists() or p.read_text(encoding="utf-8") != text]
        if stale:
            print(f"Out of date: {', '.join(stale)}. Run python3 scripts/build_catalog.py")
            return 1
        print("catalog.json and README.md are up to date")
        return 0
    for path, text in outputs.items():
        path.write_text(text, encoding="utf-8")
    print(f"Wrote {len(entries)} templates to catalog.json and README.md")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
