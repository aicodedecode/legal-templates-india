# Privacy Notice (DPDP Act, 2023)

**Category:** Privacy & Web · **Type:** notice · **Jurisdiction:** India · **Status:** Draft

## Overview

A standalone privacy notice for an Indian website or mobile app that decides why and how personal data is processed, which makes it a **Data Fiduciary** under the Digital Personal Data Protection Act, 2023 (DPDP Act) and the DPDP Rules, 2025. It is built around the notice requirements in section 5 of the Act and Rule 3 of the Rules. The core of the notice is an itemised table that sets out each category of personal data, its specified purpose, the lawful ground (consent or a section 7 legitimate use) and the service it enables. The notice also covers consent withdrawal, Consent Managers, children's data, Data Processors, cross-border transfer, retention and erasure, security, breach intimation, Data Principal rights and duties, grievance redressal, and complaints to the Data Protection Board of India.

## When to use it

- You run a consumer-facing or B2B website or app in India that collects personal data from individuals.
- You want one notice that serves both as the DPDP Act notice and as the privacy policy required by rule 3(1)(a) of the IT (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, if you are an intermediary.
- You are replacing a privacy policy written for the old "sensitive personal data" regime (the SPDI Rules, 2011), which falls away once the DPDP Act is fully in force.

## When not to use it

- **Employees and job applicants.** Prepare a separate internal notice; section 7(i) employment use does not suit a public notice.
- **Purely as a Data Processor.** For example, a B2B SaaS provider processing customer data on the customer's instructions. You need a data-processing agreement (see `data-processing-agreement`) and a short notice for your own account and marketing data only.
- **EU/UK users.** Do not use this as your GDPR notice. The legal grounds differ: there is no "legitimate interests" basis in India. Maintain a separate GDPR notice or a clearly marked regional section.
- **Specialist regimes.** Heavily regulated processing (health records under ABDM, credit information, payment data, KYC) needs sector-specific additions.

## Key provisions

- **Itemised notice (Section 3).** One row per data category, with a specific purpose and lawful ground. This is what Rule 3 requires, and regulators will read it first.
- **Consent and withdrawal (Section 4).** Withdrawal is as easy as giving consent (s.6(4)), with per-purpose toggles and a record of the consent given.
- **Legitimate uses (Section 5).** Only the closed list in s.7, with statutory retention dealt with separately under s.8(7) and Rule 8.
- **Children (Section 6).** Verifiable parental consent for under-18s, and no tracking, behavioural monitoring or targeted advertising (s.9).
- **Sharing and transfers (Sections 7–8).** Data Processors are engaged under a contract (s.8(2)). Transfers outside India are permitted except to countries the Government restricts (s.16).
- **Retention (Section 9).** A table of retention periods, the inactivity erasure rule, and one-year log retention.
- **Rights, duties and grievances (Sections 12–14).** Rights to access, correction, completion, updating and erasure, grievance redressal and nomination (ss.11–14), Data Principal duties (s.15), and the route to the Board after exhausting grievance redressal (s.13(3)).
- **Optional Significant Data Fiduciary section (Section 16)** and an AI/automated-decision paragraph (Section 18).

## India-specific notes

- **Phased commencement.** The DPDP Rules were notified in November 2025 with staggered commencement. Most Data Fiduciary obligations were deferred by about 18 months, and Consent Manager registration by about 12 months. Check the commencement notifications before relying on any date. Publishing early is low-risk and builds user trust.
- **Language.** Users must be able to read the notice in English or any Eighth Schedule language (s.5(3)). Budget for translations for the languages your users actually use.
- **No "sensitive personal data" category.** The DPDP Act treats all personal data alike. However, sector regulators (RBI, IRDAI, SEBI, the NHA) still impose their own rules on financial and health data.
- **Grievance Officer.** If you are an intermediary, the IT Rules, 2021 require a named Grievance Officer with published contact details. If you sell online, the Consumer Protection (E-Commerce) Rules, 2020 also require one. One person may fill both roles.
- **Penalties.** The Schedule to the DPDP Act provides for penalties of up to ₹250 crore for failing to take reasonable security safeguards, and up to ₹200 crore for failing to notify breaches or to meet the obligations for children's data. Verify the current amounts.
- **Stamp duty.** Not applicable. This is a unilateral notice, not an instrument.
- **E-signature.** Not needed. Consent is captured electronically through your consent interface, and you should keep consent logs.

## Customisation checklist

- [ ] Complete the data inventory and replace the Section 3 table with your actual data categories and purposes.
- [ ] Map each consent-based purpose to a separate, unticked toggle in your product.
- [ ] Decide whether children may use the Services (Option A or B), and design verifiable parental consent if they may.
- [ ] Decide on Consent Manager integration (Option A or B in Section 4.5).
- [ ] List your transfer countries and check them against any restricted-country notification and sector localisation rules.
- [ ] Set retention periods for each category, and check whether the Third Schedule erasure rule applies to you.
- [ ] Name the DPO or contact person and the Grievance Officer, and set response timelines your team can meet.
- [ ] Delete Section 16 unless you have been notified as a Significant Data Fiduciary.
- [ ] Align the notice with your Cookie Notice and Terms of Use, and keep a dated archive of every version.

## Related templates

- `cookie-notice`: detail on cookies and SDKs, linked from Section 17.
- `terms-of-use`: platform terms, IT Rules grievance mechanism.
- `data-processing-agreement`: the contract that s.8(2) requires with each Data Processor.
