"""
Backfill the optional `type` attribute on template fields from key names and examples.

Usage:
    python3 scripts/infer_field_types.py           # rewrite templates in place
    python3 scripts/infer_field_types.py --dry-run # print the inferred types

Only fields without a `type` are touched, and only by inserting a `type:` line
after the field's `key:` line, so the rest of the front matter is left as written.
Review the diff afterwards: the rules are heuristics.
"""

import re
import sys

from common import TEMPLATES_DIR, iter_slugs, load_template

DIGITS_RE = re.compile(r"^\d+(\.\d+)?$")
NUMBER_SUFFIXES = ("_days", "_months", "_years", "_hours", "_percent", "_percentage",
                   "_count", "_number", "_size", "_per_week", "_per_month", "_per_day")
MONEY_PARTS = ("amount", "_fee", "price", "ctc", "_annual", "_monthly", "valuation",
               "_value", "_limit", "_threshold", "_floor", "round_size",
               "consideration", "costs_cap", "investor_commitment")
TEXTAREA_PARTS = ("address", "description", "details", "purpose", "services", "_ip",
                  "inventions", "deliverables", "milestones", "items", "background",
                  "objectives", "_text", "_terms", "schedule", "rate_card", "interests",
                  "expertise", "competitors", "ic_locations", "processing_locations", "countries",
                  "names")


def infer(key, example):
    example = str(example if example is not None else "").strip()
    if key.endswith("_email"):
        return "email"
    if key.endswith("_url"):
        return "url"
    if key.endswith("_date") or key in {"offer_date", "agm_date", "egm_date"}:
        return "date"
    if any(p in key for p in TEXTAREA_PARTS):
        return "textarea"
    if any(p in key for p in MONEY_PARTS) and not key.endswith(("_days", "_percent", "_percentage")):
        return "money"
    if (key.endswith(NUMBER_SUFFIXES) or key.startswith(("total_", "max_"))) and DIGITS_RE.match(example):
        return "number"
    return "text"


def main(argv):
    dry_run = "--dry-run" in argv
    changed = 0
    for slug in iter_slugs():
        meta, _ = load_template(slug)
        types = {f["key"]: infer(f["key"], f.get("example")) for f in meta["fields"] if "type" not in f}
        if dry_run:
            for key, kind in types.items():
                print(f"{slug:<30} {key:<36} {kind}")
            continue
        path = TEMPLATES_DIR / slug / "template.md"
        text = path.read_text(encoding="utf-8")
        end = text.find("\n---\n", 4)
        head, rest = text[:end], text[end:]

        def add_type(match):
            key = match.group(2)
            if key not in types:
                return match.group(0)
            return f"{match.group(0)}\n{match.group(1)}  type: {types[key]}"

        new_head = re.sub(r"^( *)- key: ([a-z0-9_]+)$", add_type, head, flags=re.MULTILINE)
        if new_head != head:
            path.write_text(new_head + rest, encoding="utf-8")
            changed += 1
    if not dry_run:
        print(f"Updated {changed} templates")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
