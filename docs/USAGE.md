# Using 100x Legal Templates

There are three ways in, depending on who you are. Whichever route you take, the result is a **starting draft, not legal advice**. Most templates are still marked *Draft*, which means no practising advocate has reviewed them. Have an advocate qualified in India review the final document, and pay stamp duty under your State's Stamp Act before anyone signs.

| You are… | Start here | You get |
|---|---|---|
| A founder, HR or ops lead, or anyone without legal training | [Web form](#non-lawyers-the-web-form) | A filled-in Word document from your browser |
| A lawyer or legal team | [Word downloads](#lawyers) | Word files to adapt into your own precedents |
| A developer or AI agent | [Agent kit](#ai-agents) | Machine-readable templates, an MCP server and a Claude skill |

---

## Non-lawyers: the web form

**https://dharmabot-ai.github.io/legal-templates-india/**

1. **Pick a template.** Browse by category or search, for example "NDA", "offer letter" or "privacy". Each card says who the document is for. Open "When not to use it" if you are unsure.
2. **Answer the questions.** Each blank in the document becomes a labelled form field with an example. Dates, amounts and emails get matching inputs.
3. **Check the preview.** Blanks you haven't filled show highlighted as `[Field label]`, so you can see what is missing.
4. **Download** as Word (.docx) or Markdown.

**Your answers stay on your device.** The site is static: nothing you type is uploaded. Answers are saved in your browser so you can come back to them, and you can clear them with the "Clear answers" button.

**Before anyone signs:**
- **Stamp duty.** Most agreements must be stamped under your State's Stamp Act, and e-stamping is easiest. An unstamped agreement isn't void, but you can't rely on it in court until you pay the duty and a penalty. The template's README has a stamp-duty note.
- **Signing.** E-signatures are valid for most agreements. They are not valid for powers of attorney, wills, trusts or the sale of immovable property, and each template states whether it can be e-signed.
- **When to see an advocate.** Always before signing anything with real money, equity, investors, employees' rights or personal data involved. Above all, see one for the fundraising documents (term sheet, iSAFE, SHA, ESOP, board resolutions), which also need company-law and FEMA filings.

---

## Lawyers

**Word downloads.** Every release on the [Releases page](https://github.com/dharmabot-ai/legal-templates-india/releases) attaches two Word files per template, plus a zip of all of them:
- `<id>.docx`: a clean copy. Blanks show as highlighted `[Field label]` and the drafting notes are removed.
- `<id>-annotated.docx`: the same document with the drafting notes kept as shaded paragraphs. Use it for internal markup and training.

**Adapting into house precedents.**
1. Start from `-annotated.docx` or `template.md`. The drafting notes explain the choices behind each clause and what to check.
2. Search for `[verify]`. These are the points the drafters were not certain of, mostly rule numbers, thresholds, form deadlines and case citations. Treat them as your review worklist.
3. Set your firm's defaults in the `[OPTION A / OPTION B]` choices, the liability caps and the arbitral institution.
4. Templates are CC0, so you can rebrand, modify and use them commercially without attribution.

**Contributing a review.** If you are an advocate enrolled with a State Bar Council:
1. Review a template.
2. Fix any errors and resolve its `[verify]` points, citing authority in the pull request.
3. Name yourself and your enrolment State in the pull request template.

A maintainer then raises its `review_status` to `advocate-reviewed`. [CONTRIBUTING.md](../CONTRIBUTING.md) has the drafting standard.

---

## AI agents

The templates are Markdown with YAML front matter, so any LLM can read them directly. The front matter lists every blank under `fields` (`key`, `label`, `type`, `required`, `example`). Lines starting `> **Drafting note:**` are guidance for the drafter.

### Option 1: point the model at the files

Give your assistant [`llms.txt`](../llms.txt), or a raw template URL such as
`https://raw.githubusercontent.com/dharmabot-ai/legal-templates-india/main/templates/mutual-nda/template.md`,
and ask it to follow [`AGENTS.md`](../AGENTS.md). That file tells it to ask for missing facts instead of inventing them, to keep `[verify]` points visible, and to include the review notice.

### Option 2: MCP server (Claude Desktop, Claude Code, Cursor and others)

```bash
git clone https://github.com/dharmabot-ai/legal-templates-india
pip install -r legal-templates-india/mcp-server/requirements.txt
```

The server has four tools:

| Tool | Purpose |
|---|---|
| `list_templates(category?, audience?, query?)` | Find templates |
| `get_fields(template_id)` | What to ask the user |
| `get_template(template_id, include_drafting_notes?)` | Full text and metadata |
| `fill_template(template_id, values, keep_drafting_notes?)` | The finished Markdown, plus `missing_fields` |

**Claude Desktop.** Add this to `claude_desktop_config.json`, using absolute paths:

```json
{
  "mcpServers": {
    "legal-templates-india": {
      "command": "python3",
      "args": ["/path/to/legal-templates-india/mcp-server/server.py"]
    }
  }
}
```

**Claude Code:**

```bash
claude mcp add legal-templates-india -- python3 /path/to/legal-templates-india/mcp-server/server.py
```

**Cursor.** Add the same `mcpServers` block to `.cursor/mcp.json`.

### Option 3: Claude skill

Inside a clone, Claude Code picks up [`.claude/skills/indian-legal-templates/SKILL.md`](../.claude/skills/indian-legal-templates/SKILL.md) automatically. For Claude.ai or other projects, copy that folder into your skills directory. The skill runs a fixed workflow:
1. choose the template;
2. interview the user;
3. resolve the options;
4. fill;
5. hand over with the `[verify]` points and the notice.

### Option 4: build your own tool

[`catalog.json`](../catalog.json) indexes every template's metadata and fields, and is regenerated on every change. To fill templates in Python, import `render()` from `scripts/fill.py`, or run it from the command line:

```bash
python3 scripts/fill.py mutual-nda --list-fields
python3 scripts/fill.py mutual-nda --values examples/acme.yaml --out nda.docx
```

**Rules for any agent.** Never invent party details, amounts or dates. Never silently drop a `[verify]` point. Always tell the user the result needs advocate review and stamping. Don't send a client's confidential facts to a model or service they haven't approved.
