# Contributing & Drafting Standard

This file is both the contribution guide and the drafting standard every template in this repository must follow. `scripts/validate.py` enforces the mechanical parts; reviewers enforce the rest.

## 1. Directory layout

Each template lives in its own directory under `templates/`, named with a lowercase kebab-case slug:

```
templates/<slug>/
  README.md     # Plain-language guide: what it is, when to use it, key provisions, India-specific notes
  template.md   # YAML front matter + the full template text
```

## 2. Front matter (`template.md`)

Every `template.md` starts with YAML front matter. All keys below are required unless marked optional.

```yaml
---
id: mutual-nda                       # must equal the directory name
title: Mutual Non-Disclosure Agreement
category: startup-core               # startup-core | commercial | privacy-web | fundraising | hr-policies
summary: >-                          # one sentence, <= 200 characters, used in the catalogue
  Two-way confidentiality agreement for parties exploring a business relationship.
audience: [startup, enterprise]      # any of: startup, sme, enterprise, investor
jurisdiction: IN
governing_laws:                      # statutes the document is built around
  - Indian Contract Act, 1872
  - Arbitration and Conciliation Act, 1996
document_type: agreement             # agreement | policy | notice | letter | resolution | term-sheet | plan
parties: 2                           # number of signing parties (0 for policies/notices)
stamp_duty: required                 # required | not-applicable | check
e_signature: permitted               # permitted | not-permitted | check
version: 0.1.0
last_updated: 2026-10-16
review_status: draft                 # draft | community-reviewed | advocate-reviewed
related: [one-way-nda]               # optional: ids of related templates
fields:                              # every {{placeholder}} used in the body, in order of first use
  - key: company_name
    label: Company's full legal name
    example: Acme Technologies Private Limited
  - key: effective_date
    type: date
    label: Effective date
    example: 1 November 2026
---
```

Each field must have `key` and `label`, and may also have:

| Attribute | Values | Used by |
|---|---|---|
| `type` | `text` (default), `textarea`, `date`, `number`, `money`, `email`, `url`, `select` | Web form input type; AI agents' validation |
| `required` | `true` (default) or `false` | Web form and agents: whether the document is incomplete without it |
| `options` | list of strings (required for `select`) | Choices offered in the form |
| `help` | one sentence | Hint shown under the form input |
| `example` | string | Placeholder text in the form and sample values for agents |

Write dates in the body as they should appear in the signed document (for example "1 November 2026"). The web form converts a picked date to that format.

## 3. Placeholders

- Fill-in fields use double braces with a snake_case key: `{{company_name}}`.
- Every placeholder in the body **must** be declared under `fields`, and every declared field **must** appear in the body.
- Reuse common keys across templates so a single values file can fill several documents:
  `company_name`, `company_cin`, `company_address`, `company_signatory_name`, `company_signatory_title`, `company_email`,
  `counterparty_name`, `counterparty_address`, `counterparty_signatory_name`, `counterparty_signatory_title`, `counterparty_email`,
  `effective_date`, `governing_city`, `arbitration_seat`, `website_url`, `grievance_officer_name`, `grievance_officer_email`.
- Choices between alternative clauses are written inline as `[OPTION A: ... / OPTION B: ...]`. Use sparingly.

## 4. Drafting notes

Guidance for the person filling in the template goes in blockquotes that begin exactly with `> **Drafting note:**`. These are stripped by `scripts/fill.py` when producing a final document. Each drafting note must be a single paragraph (one line in the file).

## 5. Body formatting

- First line of the body is the document title as a level-1 heading (`# MUTUAL NON-DISCLOSURE AGREEMENT`).
- Numbered clauses use level-2 headings (`## 1. Definitions`); sub-clauses use plain numbered text (`1.1`, `1.2`, `(a)`, `(b)`) written out literally, not Markdown auto-numbered lists, so numbering survives conversion to .docx.
- Defined terms are bold on definition (`**"Confidential Information"**`) and capitalised thereafter.
- Agreements end with an execution/signature block written as a Markdown table or labelled lines, plus any schedules (`## Schedule 1 – ...`).
- Use Indian English spelling (organisation, licence (noun), authorise) and Indian number formatting for money (₹ 1,00,000 / INR 10 lakh) where amounts appear.
- No firm branding, no names of real people or companies, no URLs except statutory/regulator references.

## 6. Indian-law baseline

Templates are drafted for **India**. Apply these defaults unless the template's purpose requires otherwise:

| Topic | Baseline |
|---|---|
| Non-competes | Post-termination non-competes are void under s.27 Indian Contract Act, 1872 (save the sale-of-goodwill exception). Restrict only *during* the term; post-term, rely on confidentiality and narrowly drawn non-solicitation, and add a drafting note on enforceability. |
| Damages | Liquidated damages are capped at reasonable compensation under s.74 ICA; do not call them penalties. |
| Indemnity | Contractual indemnities are recognised (ss.124–125 ICA). Pair with a liability cap and carve-outs. |
| Disputes | Default: negotiation → arbitration under the Arbitration and Conciliation Act, 1996, sole arbitrator, **seat** `{{arbitration_seat}}`, English language; courts at the seat have exclusive supervisory jurisdiction. Mention institutional option (e.g., MCIA, DIAC, IIAC) in a drafting note. Consumer-facing documents must not purport to exclude consumer fora. |
| IP | Copyright assignments must be in writing and identify the work, rights, duration and territory (s.19 Copyright Act, 1957) — otherwise duration defaults to 5 years and territory to India. Always state "for the full term of protection, worldwide". Address moral rights (s.57) by waiver/undertaking not to assert, to the extent permitted. Contractors are not covered by s.17 employer ownership — always assign. |
| E-signature | Electronic signatures are valid under the Information Technology Act, 2000 (s.3A, s.10A) except for documents in its First Schedule (e.g., powers of attorney, trusts, wills, contracts for sale of immovable property). |
| Stamp duty | State-specific. Every agreement README must include a stamp-duty note; the body includes a clause that the party bearing stamp duty is `{{stamp_duty_payer}}` only where meaningful. |
| Data protection | Digital Personal Data Protection Act, 2023 and DPDP Rules, 2025 (phased commencement — add a drafting note telling users to check which obligations are in force). Use DPDP vocabulary: Data Fiduciary, Data Processor, Data Principal, personal data breach, Data Protection Board of India. Cyber incidents: CERT-In Directions (28 April 2022) — 6-hour reporting, 180-day log retention. |
| Employment | The four Labour Codes (Code on Wages, 2019; Industrial Relations Code, 2020; Code on Social Security, 2020; Occupational Safety, Health and Working Conditions Code, 2020) are in force; refer to them and to the applicable state Shops and Establishments Act. Keep the "wages" definition in mind (excluded allowances above 50% are added back). |
| Tax | The Income-tax Act, 2025 has replaced the Income-tax Act, 1961 from 1 April 2026. Refer to "applicable tax laws" or the Act generically — **do not cite section numbers** of either Act. GST is charged extra unless stated. |
| Payments to MSEs | Where the paying party may buy from micro/small enterprises, note the 45-day payment limit under the MSMED Act, 2006. |
| Company law | Companies Act, 2013 and rules; cite sections only where you are confident (e.g., s.62(1)(b) ESOPs, s.42 private placement, s.175 circular resolutions, s.179 board powers). |
| Foreign investment | FEMA, 1999 and Foreign Exchange Management (Non-debt Instruments) Rules, 2019 — flag pricing, reporting (FC-GPR etc.) and sectoral caps in drafting notes, not as hard-coded numbers. |

### Additional baseline points

- **Stamping and enforceability:** an unstamped or under-stamped instrument is inadmissible in evidence until the duty and penalty are paid, but it is not void (*In re Interplay*, SC 7-judge bench, 2023). Recommend e-stamping before or at execution.
- **Electronic evidence:** electronic records need a certificate under s.63 of the Bharatiya Sakshya Adhiniyam, 2023. Advise keeping e-signature audit trails.
- **Arbitration:** state the *seat* and the *venue* separately. Unilateral appointment of an arbitrator by one party is invalid (*Perkins Eastman*; *CORE*, Constitution Bench, 2024), so provide for mutual or institutional appointment.
- **Court route:** for domestic commercial disputes that go to court, mention pre-institution mediation under s.12A of the Commercial Courts Act, 2015.
- **Specific performance:** this has been the general rule since the 2018 amendment to the Specific Relief Act, 1963.
- **Limitation:** clauses shortening limitation periods are hit by s.28 of the Indian Contract Act.
- **Liability super-caps:** for data breach, confidentiality and IP in SaaS and technology deals, a super-cap of 2–5x annual contract value is market practice.
- **Shareholder documents:**
  - Investor rights must be mirrored in the AoA to bind the company (*V.B. Rangaraj*; *World Phone*).
  - Default to 1x non-participating liquidation preference and broad-based weighted-average anti-dilution.
  - Press Note 3 (2020) requires government approval for investors from countries sharing a land border with India.
  - Angel tax was abolished with effect from AY 2025-26.
- **Resolutions:** each resolution states the meeting type and date (or passing by circulation), quorum, the enabling section, and who is authorised to sign and file.
- **Citations:** mark any citation, form, fee or timeline you are not certain of with `[verify]` in a drafting note. Never guess.

**When in doubt, prefer a drafting note telling the user what to verify over asserting a specific number, date or section you are not sure of.**

## 7. Template README structure

```markdown
# <Title>

**Category:** <Category name> · **Type:** <document_type> · **Jurisdiction:** India · **Status:** Draft

## Overview
## When to use it
## When not to use it
## Key provisions
## India-specific notes        (statutes, stamp duty, registration, enforceability points)
## Customisation checklist     (the decisions the user must make before signing)
## Related templates
```

## 8. Workflow

1. Copy an existing template directory as a starting point.
2. Run `python3 scripts/validate.py` until it passes.
3. Run `python3 scripts/build_catalog.py` to regenerate `catalog.json` and the README table.
4. Open a pull request. Describe the source of any clause language you did not write yourself; only contribute text you have the right to release under CC0.

## 9. Review status

- `draft` — written to this standard, not yet reviewed by a practising lawyer.
- `community-reviewed` — reviewed by at least one contributor other than the author.
- `advocate-reviewed` — reviewed by an advocate enrolled with a State Bar Council; name them in the pull request.
