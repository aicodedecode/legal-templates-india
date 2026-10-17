"""Shared helpers for loading templates and their front matter."""

import re
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parent.parent
TEMPLATES_DIR = ROOT / "templates"

PLACEHOLDER_RE = re.compile(r"\{\{\s*([a-z][a-z0-9_]*)\s*\}\}")
DRAFTING_NOTE_RE = re.compile(r"^> \*\*Drafting note:\*\*.*$\n?", re.MULTILINE)

CATEGORIES = {
    "startup-core": "Startup Core",
    "commercial": "Commercial & Enterprise",
    "privacy-web": "Privacy & Web",
    "fundraising": "Fundraising & Corporate",
    "hr-policies": "HR Policies",
}


def split_front_matter(text):
    """Return (metadata dict, body str) for a template.md file."""
    if not text.startswith("---\n"):
        raise ValueError("missing YAML front matter")
    end = text.find("\n---\n", 4)
    if end == -1:
        raise ValueError("unterminated YAML front matter")
    meta = yaml.safe_load(text[4:end]) or {}
    body = text[end + 5:]
    return meta, body


def load_template(slug):
    path = TEMPLATES_DIR / slug / "template.md"
    meta, body = split_front_matter(path.read_text(encoding="utf-8"))
    return meta, body


def iter_slugs():
    return sorted(p.name for p in TEMPLATES_DIR.iterdir() if p.is_dir())
