# India Legal Templates

Free, open-source Indian-law legal templates for startups and SMBs: contracts, policies and
corporate documents in structured Markdown that people and LLMs can both read, released under
**CC0 1.0**, with a static website (GitHub Pages) that includes a searchable catalog and a
client-side quick-fill that downloads a finished document. Nothing users type leaves the browser.

**Status: v0.1.0 draft.** Statute citations were verified against current Indian law on
28 October 2026 (DPDP Rules 2025 notified 13 Nov 2025; Labour Codes in force 21 Nov 2025;
Income-tax Act 2025). **No template has been advocate-reviewed yet.** A template earns the
"Advocate reviewed" badge only after a practising advocate completes `REVIEW-CHECKLIST.md`.

## Repository layout
- `templates/<id>/template.md` one document per template, with frontmatter metadata: governing
  laws, stamp duty and e-signature flags, review status, and typed fill-in fields
- `catalog.json` machine-readable index for AI agents and integrations
- `index.html`, `app.js`, `fm.js`, `styles.css` the Pages site
- `REVIEW-CHECKLIST.md` the advocate sign-off gate

## The zero-error layer
1. **Statute currency** citations checked against current law, dated on every entry
2. **Required particulars** statutory content requirements checked per template
   (e.g. s.19(3)-(6) Copyright Act particulars in the IP assignment; Rule 12 SCD conditions in the ESOP)
3. **Repealed-law hygiene** BNS/BSA/BNSS-era references only
4. **Advocate review gate** the human layer, currently pending

## License and credit
CC0 1.0. This library was forked from
[dharmabot-ai/legal-templates-india](https://github.com/dharmabot-ai/legal-templates-india),
which follows the model of [General-Legal/legal-templates](https://github.com/General-Legal/legal-templates).
Credit is not required by CC0 and is given in good faith.

**Not legal advice.** These are starting points. Have an advocate qualified in India review any
document before you rely on it, and pay the applicable state stamp duty.
