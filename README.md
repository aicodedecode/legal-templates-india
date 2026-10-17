# Legal Templates — India

An open-source database of Indian-law legal templates for startups and enterprises: contracts, policies, notices and corporate documents, written in structured Markdown that people and LLMs can both read, and released under [CC0 1.0](LICENSE). You can use, modify and distribute them for any purpose, without attribution.

Each template has machine-readable metadata (category, governing statutes, stamp duty and e-signature notes, review status, and a typed list of fill-in fields). `catalog.json` indexes all of it, and `scripts/fill.py` turns a template plus a values file into a finished `.md` or `.docx`.

> [!IMPORTANT]
> **These templates are not legal advice.** They are starting points drafted to Indian law as of the `last_updated` date on each template. Most are marked **Draft**, which means no practising advocate has reviewed them yet. Laws change: the DPDP Rules, 2025 are being phased in, the Labour Codes and the Income-tax Act, 2025 are new, and stamp duty differs from state to state. Before you rely on a document, have it reviewed by an advocate qualified in the relevant area.

## Templates

<!-- catalog:start -->
### Startup Core

| Template | Description | Status |
|---|---|---|
| [Advisor Agreement](templates/advisor-agreement/) | Agreement engaging a startup advisor in India, covering services, time commitment, equity or cash compensation with vesting, IP and confidentiality. | Draft |
| [Consultancy Agreement](templates/consultancy-agreement/) | Agreement engaging an independent consultant or contractor in India, with fees, GST and TDS, s.19-compliant IP assignment, confidentiality and arbitration. | Draft |
| [Employment Agreement](templates/employment-agreement/) | Full employment agreement for a managerial or professional employee in India, aligned with the Labour Codes, State Shops and Establishments Acts, DPDP Act and s.27 ICA. | Draft |
| [Founders' Agreement](templates/founders-agreement/) | Agreement among the co-founders of an Indian private limited company covering roles, shareholding, reverse vesting, leaver terms, IP, decision-making and exit. | Draft |
| [Intellectual Property Assignment Agreement](templates/ip-assignment-agreement/) | Confirmatory and prior-inventions IP assignment by a founder, employee or contractor to an Indian company, compliant with s.19 Copyright Act and s.68 Patents Act. | Draft |
| [Mutual Non-Disclosure Agreement](templates/mutual-nda/) | Two-way confidentiality agreement for Indian parties exploring a business relationship, with AI-training restrictions and arbitration. | Draft |
| [Offer Letter](templates/offer-letter/) | Offer of employment for an Indian company setting out role, CTC breakdown, joining date, probation and conditions precedent, to be followed by a full employment agreement. | Draft |
| [One-Way Non-Disclosure Agreement](templates/one-way-nda/) | Disclosing-party-friendly confidentiality agreement for sharing a company's information with a vendor, partner, investor or candidate in India. | Draft |

### Commercial & Enterprise

| Template | Description | Status |
|---|---|---|
| [Distribution Agreement](templates/distribution-agreement/) | Appointment of a buy-sell distributor for products in a defined Indian territory, with exclusivity options, targets, competition-law and consumer-law safeguards. | Draft |
| [Master Services Agreement](templates/master-services-agreement/) | Provider-leaning but balanced framework agreement for technology and IT services delivered under individual Statements of Work. | Draft |
| [SaaS Subscription Agreement](templates/saas-subscription-agreement/) | B2B software-as-a-service terms between a provider and an enterprise customer, with order forms, AI-feature, DPDP and exit provisions. | Draft |
| [Service Level Agreement](templates/service-level-agreement/) | Service level schedule for SaaS or managed services: availability, maintenance, support severity matrix, service credits and chronic-failure exit. | Draft |
| [Statement of Work](templates/statement-of-work/) | Project-level Statement of Work issued under a Master Services Agreement, covering scope, deliverables, milestones, fees, acceptance and change control. | Draft |
| [Vendor Agreement](templates/vendor-agreement/) | Customer-leaning procurement framework for buying goods and/or services from a supplier through purchase orders, with MSMED, Labour Code and DPDP terms. | Draft |

### Privacy & Web

| Template | Description | Status |
|---|---|---|
| [Cookie and Tracking Technologies Notice](templates/cookie-notice/) | Notice explaining cookies, SDKs and similar technologies on an Indian website or app, with consent and withdrawal under the DPDP Act, 2023. | Draft |
| [Data Processing Agreement (DPDP Act, 2023)](templates/data-processing-agreement/) | Data Fiduciary to Data Processor agreement under section 8(2) of the DPDP Act, 2023, covering security, breach, CERT-In, transfers, audit and liability. | Draft |
| [Generative AI Acceptable Use Policy](templates/ai-acceptable-use-policy/) | Internal policy governing employees' use of generative AI tools in India: approved tools, prohibited inputs, human review, IP, labelling, DPDP and security. | Draft |
| [Privacy Notice (DPDP Act, 2023)](templates/privacy-policy/) | Standalone, itemised privacy notice for an Indian website or app acting as a Data Fiduciary under the DPDP Act, 2023 and DPDP Rules, 2025. | Draft |
| [Terms of Use (Website and App)](templates/terms-of-use/) | Website and app terms for an Indian platform, with IT Rules, 2021 content and grievance provisions and consumer-law safeguards. | Draft |

### Fundraising & Corporate

| Template | Description | Status |
|---|---|---|
| [Board Resolutions Pack for a Private Company](templates/board-resolutions/) | Ten commonly used board resolutions for an Indian private company in certified-true-copy format, with the enabling section, quorum and filing notes for each. | Draft |
| [Employee Stock Option Plan](templates/esop-plan/) | Employee Stock Option Plan for an unlisted Indian company under s.62(1)(b) Companies Act and Rule 12, with grant letter, exercise notice and shareholder resolution. | Draft |
| [Shareholders' Agreement (Post Priced Round)](templates/shareholders-agreement/) | Shareholders' agreement among an Indian private company, its founders and investors after a priced CCPS round, with governance, transfer, exit and FEMA provisions. | Draft |
| [Term Sheet for Seed / Series A Investment (CCPS)](templates/term-sheet/) | Term sheet for a priced seed or Series A round in an Indian private company issuing CCPS; binding only on confidentiality, exclusivity, costs and governing law. | Draft |
| [iSAFE Note – CCPS Subscription Agreement with Valuation Cap and Discount](templates/isafe-note/) | India-adapted SAFE: early-stage investment through CCPS that convert at the next qualified financing at a valuation cap and/or discount. | Draft |

### HR Policies

| Template | Description | Status |
|---|---|---|
| [Employee Handbook](templates/employee-handbook/) | Concise but complete employee handbook for an Indian company covering conduct, leave, remote work, IT, data protection, anti-bribery, POSH, grievances, discipline and exit. | Draft |
| [Prevention of Sexual Harassment (POSH) Policy](templates/posh-policy/) | Workplace sexual harassment policy under the POSH Act, 2013 and Rules: Internal Committee, complaint, conciliation, inquiry, interim relief, appeal and complaint form. | Draft |
<!-- catalog:end -->

## Quick start

```bash
pip install -r scripts/requirements.txt

# See which fields a template needs
python3 scripts/fill.py mutual-nda --list-fields

# Fill it from a values file and export to Word (requires pandoc)
python3 scripts/fill.py mutual-nda --values examples/acme.yaml --out mutual-nda.docx
```

Values files are plain YAML or JSON. Common keys such as `company_name`, `effective_date` and `arbitration_seat` are shared across templates, so one file can fill a whole document set. See [`examples/acme.yaml`](examples/acme.yaml).

### Using with LLMs

Every `template.md` is self-contained Markdown with YAML front matter. To draft with an AI assistant, give it the template and your facts, and ask it to fill the `{{placeholders}}`, choose between `[OPTION A / OPTION B]` alternatives, and follow the `> **Drafting note:**` guidance. If you are building tools on top of the library, use `catalog.json` to find templates by category, audience, statute or document type.

## Template format

```markdown
---
id: mutual-nda
title: Mutual Non-Disclosure Agreement
category: startup-core
governing_laws: [Indian Contract Act, 1872, ...]
stamp_duty: required
e_signature: permitted
review_status: draft
fields:
  - key: company_name
    label: Company's full legal name
    example: Acme Technologies Private Limited
---
# MUTUAL NON-DISCLOSURE AGREEMENT

This Agreement is made between {{company_name}} ...

> **Drafting note:** Guidance for the drafter — removed automatically by fill.py.
```

[CONTRIBUTING.md](CONTRIBUTING.md) has the full schema and the drafting standard, including the Indian-law baseline every template follows (s.27 non-competes, s.19 copyright assignments, DPDP vocabulary, Labour Codes, arbitration seat, and so on).

## Repository structure

```
legal-templates-india/
  templates/<id>/
    template.md          # Front matter + full template text
    README.md            # When to use it, key provisions, India-specific notes, checklist
  catalog.json           # Generated index of every template's metadata
  examples/acme.yaml     # Sample values file
  scripts/
    validate.py          # Checks every template against the drafting standard
    build_catalog.py     # Regenerates catalog.json and the table above
    fill.py              # Fills placeholders and exports .md / .docx / .pdf
  CONTRIBUTING.md        # Schema, drafting standard, review process
  LICENSE                # CC0 1.0 Universal
```

## Contributing

Contributions are welcome, especially reviews from practising advocates, new templates, and state-specific notes on stamp duty. Read [CONTRIBUTING.md](CONTRIBUTING.md), run `python3 scripts/validate.py` and `python3 scripts/build_catalog.py`, then open a pull request. When an advocate reviews a template, its status moves up to **Advocate reviewed**.

## License

[CC0 1.0 Universal](LICENSE). The authors have waived all copyright and related rights to the extent the law allows.
