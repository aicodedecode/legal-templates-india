"""
MCP server exposing the Indian legal templates library to AI agents.

Run over stdio:
    python3 mcp-server/server.py

Tools:
    list_templates  - search the catalogue by category, audience or keyword
    get_template    - full template text plus metadata
    get_fields      - the fields an agent must collect from the user
    fill_template   - fill placeholders and return the finished Markdown

Works with the official `mcp` Python SDK, v1 (FastMCP) or v2 (MCPServer).
"""

import datetime
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent.parent / "scripts"))

from common import CATEGORIES, iter_slugs, load_template  # noqa: E402
from fill import render  # noqa: E402

try:
    from mcp.server.mcpserver import MCPServer as Server
except ImportError:
    from mcp.server.fastmcp import FastMCP as Server

DISCLAIMER = ("Not legal advice. This is an AI-assisted template pending advocate review "
              "(see review_status). Have an advocate qualified in India review the final "
              "document, and pay stamp duty under the applicable State Stamp Act before signing.")

INSTRUCTIONS = f"""Indian-law legal templates for startups and enterprises (CC0).
Workflow: list_templates to choose, get_fields to see what to collect, ask the user for
every required value you do not already know (never invent party names, amounts or
dates), then fill_template. Resolve [OPTION A / OPTION B] choices with the user, keep
every [verify] point visible to the user, and always pass on this notice: {DISCLAIMER}"""

server = Server("legal-templates-india", instructions=INSTRUCTIONS)


def _jsonable(value):
    if isinstance(value, (datetime.date, datetime.datetime)):
        return value.isoformat()
    if isinstance(value, dict):
        return {k: _jsonable(v) for k, v in value.items()}
    if isinstance(value, list):
        return [_jsonable(v) for v in value]
    return value


def _summary(meta):
    return {k: _jsonable(meta[k]) for k in (
        "id", "title", "category", "summary", "audience", "document_type",
        "review_status", "stamp_duty", "e_signature") if k in meta}


def _require(template_id):
    if template_id not in iter_slugs():
        raise ValueError(f"Unknown template '{template_id}'. Call list_templates for valid ids.")
    return load_template(template_id)


@server.tool()
def list_templates(category: str = "", audience: str = "", query: str = "") -> dict:
    """List templates, optionally filtered.

    category: one of startup-core, commercial, privacy-web, fundraising, hr-policies.
    audience: one of startup, sme, enterprise, investor.
    query: case-insensitive keyword matched against title, summary and governing laws.
    """
    results = []
    for slug in iter_slugs():
        meta, _ = load_template(slug)
        if category and meta["category"] != category:
            continue
        if audience and audience not in meta["audience"]:
            continue
        haystack = " ".join([meta["title"], meta["summary"], *meta["governing_laws"]]).lower()
        if query and query.lower() not in haystack:
            continue
        results.append(_summary(meta))
    return {"categories": CATEGORIES, "count": len(results), "templates": results}


@server.tool()
def get_template(template_id: str, include_drafting_notes: bool = True) -> dict:
    """Return a template's metadata and full Markdown text.

    Drafting notes (lines starting '> **Drafting note:**') explain how to complete
    each clause; keep them when you need to advise the user, drop them for output.
    """
    meta, body = _require(template_id)
    text, _ = render(body, {}, keep_notes=include_drafting_notes)
    return {"metadata": _jsonable(meta), "text": text, "notice": DISCLAIMER}


@server.tool()
def get_fields(template_id: str) -> dict:
    """Return the fields to collect for a template: key, label, type, required and example."""
    meta, _ = _require(template_id)
    fields = [{"required": True, "type": "text", **f} for f in meta["fields"]]
    return {"template_id": template_id, "title": meta["title"], "fields": _jsonable(fields)}


@server.tool()
def fill_template(template_id: str, values: dict[str, str], keep_drafting_notes: bool = False) -> dict:
    """Fill a template's placeholders and return the finished Markdown.

    values: mapping of field key to the text to insert (see get_fields).
    Unfilled fields are shown as [Field label] and listed in `missing_fields`;
    ask the user for them rather than guessing.
    """
    meta, body = _require(template_id)
    labels = {f["key"]: f["label"] for f in meta["fields"]}
    unknown = sorted(set(values) - set(labels))
    text, missing = render(body, {k: str(v) for k, v in values.items()},
                           keep_notes=keep_drafting_notes, labels=labels)
    return {
        "template_id": template_id,
        "markdown": text,
        "missing_fields": [{"key": k, "label": labels[k]} for k in missing],
        "unknown_keys": unknown,
        "verify_points": text.count("[verify"),
        "notice": DISCLAIMER,
    }


if __name__ == "__main__":
    server.run("stdio")
