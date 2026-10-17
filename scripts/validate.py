"""
Validate every template against the drafting standard in CONTRIBUTING.md.

Usage:
    python3 scripts/validate.py              # all templates
    python3 scripts/validate.py mutual-nda   # specific templates

Exits non-zero if any template fails.
"""

import datetime
import re
import sys

from common import (CATEGORIES, PLACEHOLDER_RE, TEMPLATES_DIR, iter_slugs,
                    split_front_matter)

REQUIRED_KEYS = [
    "id", "title", "category", "summary", "audience", "jurisdiction",
    "governing_laws", "document_type", "parties", "stamp_duty", "e_signature",
    "version", "last_updated", "review_status", "fields",
]
ENUMS = {
    "category": set(CATEGORIES),
    "document_type": {"agreement", "policy", "notice", "letter", "resolution", "term-sheet", "plan"},
    "stamp_duty": {"required", "not-applicable", "check"},
    "e_signature": {"permitted", "not-permitted", "check"},
    "review_status": {"draft", "community-reviewed", "advocate-reviewed"},
}
AUDIENCES = {"startup", "sme", "enterprise", "investor"}
FIELD_TYPES = {"text", "textarea", "date", "number", "money", "email", "url", "select"}
README_SECTIONS = [
    "## Overview", "## When to use it", "## When not to use it", "## Key provisions",
    "## India-specific notes", "## Customisation checklist", "## Related templates",
]
SEMVER_RE = re.compile(r"^\d+\.\d+\.\d+$")
SLUG_RE = re.compile(r"^[a-z0-9]+(-[a-z0-9]+)*$")


def check(slug, all_slugs):
    errors = []
    tdir = TEMPLATES_DIR / slug
    if not SLUG_RE.match(slug):
        errors.append("directory name is not kebab-case")
    tpath, rpath = tdir / "template.md", tdir / "README.md"
    if not tpath.exists():
        return ["template.md missing"]
    if not rpath.exists():
        errors.append("README.md missing")
    else:
        readme = rpath.read_text(encoding="utf-8")
        for section in README_SECTIONS:
            if section not in readme:
                errors.append(f"README.md missing section '{section}'")

    try:
        meta, body = split_front_matter(tpath.read_text(encoding="utf-8"))
    except Exception as exc:  # noqa: BLE001 - report any parse failure
        return errors + [f"front matter: {exc}"]

    for key in REQUIRED_KEYS:
        if key not in meta:
            errors.append(f"front matter missing '{key}'")
    for key, allowed in ENUMS.items():
        if key in meta and meta[key] not in allowed:
            errors.append(f"'{key}' must be one of {sorted(allowed)}")
    if meta.get("id") != slug:
        errors.append(f"id '{meta.get('id')}' does not match directory '{slug}'")
    if meta.get("jurisdiction") != "IN":
        errors.append("jurisdiction must be IN")
    if len(str(meta.get("summary", ""))) > 200:
        errors.append("summary longer than 200 characters")
    if not set(meta.get("audience") or []) <= AUDIENCES or not meta.get("audience"):
        errors.append(f"audience must be a non-empty subset of {sorted(AUDIENCES)}")
    if not isinstance(meta.get("parties"), int):
        errors.append("parties must be an integer")
    if not SEMVER_RE.match(str(meta.get("version", ""))):
        errors.append("version must be semver (x.y.z)")
    if not isinstance(meta.get("last_updated"), datetime.date):
        errors.append("last_updated must be a YYYY-MM-DD date")
    if not meta.get("governing_laws"):
        errors.append("governing_laws must not be empty")
    for rel in meta.get("related") or []:
        if rel not in all_slugs:
            errors.append(f"related template '{rel}' does not exist")

    declared = []
    for i, field in enumerate(meta.get("fields") or []):
        if not isinstance(field, dict) or not {"key", "label"} <= set(field):
            errors.append(f"fields[{i}] must have 'key' and 'label'")
            continue
        declared.append(field["key"])
        if "type" in field and field["type"] not in FIELD_TYPES:
            errors.append(f"field '{field['key']}' type must be one of {sorted(FIELD_TYPES)}")
        if "required" in field and not isinstance(field["required"], bool):
            errors.append(f"field '{field['key']}' required must be true or false")
        if field.get("type") == "select" and not field.get("options"):
            errors.append(f"field '{field['key']}' is a select but has no options")
    dupes = {k for k in declared if declared.count(k) > 1}
    if dupes:
        errors.append(f"duplicate field keys: {sorted(dupes)}")
    used = set(PLACEHOLDER_RE.findall(body))
    if undeclared := used - set(declared):
        errors.append(f"placeholders not declared in fields: {sorted(undeclared)}")
    if unused := set(declared) - used:
        errors.append(f"fields declared but never used: {sorted(unused)}")
    if malformed := re.findall(r"\{\{(?![a-z][a-z0-9_]*\}\})[^}]*\}\}", body):
        errors.append(f"malformed placeholders: {malformed[:5]}")

    first = next((ln for ln in body.splitlines() if ln.strip()), "")
    if not first.startswith("# "):
        errors.append("body must start with a level-1 heading")
    for ln in body.splitlines():
        if ln.startswith(">") and "Drafting note" in ln and not ln.startswith("> **Drafting note:**"):
            errors.append(f"drafting note must start with '> **Drafting note:**': {ln[:60]}")
    return errors


def main(argv):
    all_slugs = set(iter_slugs())
    slugs = argv or sorted(all_slugs)
    failed = 0
    for slug in slugs:
        errors = check(slug, all_slugs)
        if errors:
            failed += 1
            print(f"FAIL {slug}")
            for err in errors:
                print(f"     - {err}")
        else:
            print(f"ok   {slug}")
    print(f"\n{len(slugs) - failed}/{len(slugs)} templates valid")
    return 1 if failed else 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
