# Agent instructions

This file is for AI agents (Claude, ChatGPT, Copilot, Cursor and others) working with this repository: either drafting documents for a user or editing the templates themselves.

## Drafting a document for a user

1. Find the template in [`catalog.json`](catalog.json). Each entry has `id`, `title`, `summary`, `category`, `audience`, `document_type`, `stamp_duty`, `e_signature`, `review_status` and `fields`.
2. Read `templates/<id>/template.md` and `templates/<id>/README.md`.
3. Ask the user for every field in `fields` you do not already know. Each field has a `key`, a `label`, an optional `type` (text, textarea, date, number, money, email, url, select), `required` (default true) and an `example`. Never invent party details, amounts or dates.
4. Resolve each `[OPTION A: ... / OPTION B: ...]` with the user, and follow the `> **Drafting note:**` guidance.
5. Fill the template with `python3 scripts/fill.py <id> --values values.yaml --out out.docx`, or replace each `{{key}}` yourself. Remove the drafting notes from the final document.
6. Give the user every relevant `[verify]` point, the stamp duty and e-signature status, and this notice: *"This is an AI-assisted draft based on an open-source template, not legal advice. Have an advocate qualified in India review it before signing, and pay stamp duty under your State's Stamp Act."*

You can also connect to the MCP server in [`mcp-server/`](mcp-server/), or use the Claude skill in [`.claude/skills/indian-legal-templates/`](.claude/skills/indian-legal-templates/SKILL.md). [`llms.txt`](llms.txt) is a compact index with raw URLs.

## Editing the templates

- Follow [CONTRIBUTING.md](CONTRIBUTING.md) exactly: the front matter schema, `{{snake_case}}` placeholders, the drafting-note format and the Indian-law baseline.
- After any change, run:
  ```bash
  python3 scripts/validate.py
  python3 scripts/build_catalog.py      # regenerates catalog.json, llms.txt and the README table
  python3 mcp-server/smoke_test.py      # if you changed scripts/ or mcp-server/
  ```
- Never raise `review_status` to `advocate-reviewed` yourself. Only a named advocate's review in a pull request can do that.
- Cite statutes and cases only when you are sure. Otherwise add a drafting note marked `[verify]`.
- Do not add firm branding, real people's names or confidential client facts to the templates.
