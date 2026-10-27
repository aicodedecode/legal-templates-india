---
name: indian-legal-templates
description: Draft Indian-law contracts, policies and corporate documents (NDAs, consultancy, employment, ESOP, founders' agreement, MSA, SaaS, SOW, SLA, vendor, distribution, privacy policy, terms of use, DPA, AI policy, term sheet, iSAFE, SHA, board resolutions, POSH, handbook) from the open-source India Legal Templates library (legal-templates-india). Use when a user asks for one of these documents for an Indian company or under Indian law.
---

# Indian legal templates

Fill templates from the India Legal Templates library (repo `legal-templates-india`) with the user's facts. The templates are AI-assisted drafts pending advocate review, so your output is a starting draft and you must say so.

## Where the files are

- Inside a clone of the repo, read `catalog.json` and `templates/<id>/template.md` directly.
- Otherwise fetch from `https://raw.githubusercontent.com/aicodedecode/legal-templates-india/main/` (start with `catalog.json`).
- If the `legal-templates-india` MCP server is connected, use its `list_templates`, `get_fields` and `fill_template` tools instead.

## Workflow

1. **Choose the template.** Match the request to a catalogue entry by `title`, `summary` and `document_type`. If two fit (for example `mutual-nda` vs `one-way-nda`), ask one short question to decide. Read the template's `README.md` "When not to use it" section before going further.
2. **Collect the facts.** From front matter `fields`, list what you still need. Ask for all of it in one message, grouped by party, commercial terms and dates. Use each field's `label`, and show its `example` as the format to follow. Never invent party names, CINs, addresses, amounts or dates. If the user wants to proceed without some values, leave them as `[Field label]`.
3. **Make the drafting choices.** Read every `> **Drafting note:**` and resolve each `[OPTION A: ... / OPTION B: ...]` with the user, or with a stated default if they ask you to choose. Explain each choice in one line.
4. **Fill.** Replace each `{{key}}` with the user's value. With a clone, run `python3 scripts/fill.py <id> --values values.yaml --out <file>.docx`; `--label-placeholders` shows gaps as `[Label]`. Remove the drafting notes from the final document.
5. **Hand over.** Give the user:
   - the document;
   - a short list of the choices you made;
   - every `[verify]` point from the drafting notes that applies to their facts;
   - the stamp duty and e-signature status from front matter (`stamp_duty`, `e_signature`);
   - this notice: *"This is an AI-assisted draft based on an open-source template, not legal advice. Have an advocate qualified in India review it before signing, and pay stamp duty under your State's Stamp Act."*

## Rules

- Do not remove, rewrite or "resolve" a `[verify]` point yourself. Pass it on.
- Do not change the legal substance of clauses to suit a request (for example, adding a post-employment non-compete). Explain the Indian-law limit noted in the drafting note instead.
- Keep confidential client information out of public tools, and fill locally where possible.
