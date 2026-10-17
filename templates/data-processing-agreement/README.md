# Data Processing Agreement (DPDP Act, 2023)

**Category:** Privacy & Web · **Type:** agreement · **Jurisdiction:** India · **Status:** Draft

## Overview

This is the contract a Data Fiduciary must have in place before a Data Processor processes personal data on its behalf. Section 8(2) of the Digital Personal Data Protection Act, 2023 allows a processor to be engaged "only under a valid contract". Section 8(1) keeps the fiduciary responsible for any failure by its processor.

The agreement turns that statutory exposure into contractual protection:

- processing only on documented instructions;
- minimum security safeguards that track Rule 6 of the DPDP Rules, 2025;
- breach notification fast enough for the fiduciary to meet its own obligations to the Board and to Data Principals;
- co-ordination with the CERT-In 6-hour reporting regime;
- control of sub-processors, transfers outside India, audit and erasure;
- a liability structure with a data-protection super-cap.

It is drafted from the fiduciary's side but in balanced, market-standard terms.

## When to use it

- You are engaging a cloud host, SaaS tool, CRM, support desk, payroll provider, marketing platform, analytics vendor, BPO or any other vendor that will hold or access personal data for you.
- You are a processor (for example, a B2B SaaS company) and want a reasonable form to offer your customers rather than accept theirs.
- You are adding a DPDP-compliant data annex to an existing master-services, SaaS or vendor agreement.

## When not to use it

- **Joint or independent Data Fiduciaries.** Where both parties decide the purposes and means of processing (for example, co-marketing or data sharing between two businesses), use a data-sharing agreement.
- **EU/UK data transfers on their own.** The agreement does not satisfy GDPR Article 28 or the rules on international transfers. Add the international addendum described in the drafting note to clause 11.
- **Employees.** Employees processing data for their employer are not processors and need no DPA.

## Key provisions

- **Recitals, interpretation and order of precedence (cl. 1–2).** Mandatory law ranks first, then this Agreement, then the Principal Agreement. A change-in-law clause covers phased commencement and notification as a Significant Data Fiduciary.
- **Instructions (cl. 3).** No processing for the processor's own purposes, including training AI models, and no re-identification.
- **Security (cl. 6 and Schedule 2).** The Rule 6 minimum measures (encryption, masking or tokens, access control, logs and monitoring, backups, logs kept for at least one year), plus ISO 27001/SOC 2 and VAPT.
- **Sub-processors (cl. 7).** Prior authorisation, a right to object with a termination remedy, flow-down of obligations, and full liability for sub-processors.
- **Assistance with Data Principal rights (cl. 8).** Covers ss.11–14 and withdrawal of consent under s.6(4), plus support for Significant Data Fiduciary DPIAs and audits.
- **Breach (cl. 9 and Schedule 4).** Notice within a fixed number of hours, with information supplied in phases and mapped to what the fiduciary needs for the Board's detailed report within 72 hours.
- **CERT-In (cl. 10).** The 6-hour reporting window, 180-day log retention in India, NTP synchronisation and a single point of contact.
- **Transfers (cl. 11).** Approved locations only, no transfers to restricted countries notified under s.16, and sectoral localisation rules.
- **Audit (cl. 12), erasure and return (cl. 13), government requests (cl. 14).**
- **Liability (cl. 15).**
  - A general cap and a separate super-cap on data-protection liability.
  - Uncapped liability for fraud and wilful misconduct.
  - Certain losses deemed direct: Board penalties (to the extent recoverable), notification costs and costs of remedies for Data Principals.
- **Indemnity (cl. 16) and insurance (cl. 17).**
- **Disputes (cl. 19).** Seat and venue stated separately, mutual, court or institutional appointment of the arbitrator, and interim relief under s.9.

## India-specific notes

- **DPDP, SPDI and s.43A together.** Until the substantive DPDP obligations commence (phased under the Rules notified in November 2025), s.43A of the IT Act and the SPDI Rules, 2011 still govern "reasonable security practices", and s.43A imposes compensation liability on body corporates. Section 44(2) of the DPDP Act omits s.43A once commenced [verify date]. Clause 6.1 is drafted to satisfy both regimes, so the agreement does not need re-papering at commencement.
- **Two clocks after an incident.**
  - Under the CERT-In Directions (28 April 2022), specified cyber incidents must be reported to CERT-In within 6 hours.
  - Under the DPDP Rules, the Board and affected Data Principals must be told without delay, and the Board must receive a detailed report within 72 hours.
  - Set the processor's notice period (`breach_notice_hours`) well inside both. 12–24 hours is common, and regulated entities often ask for 2–6 hours.
- **Penalties.** The DPDP Act provides for penalties of up to ₹250 crore for security failures and ₹200 crore for failing to notify a breach [verify]. These fall on the fiduciary, which is why the super-cap and the "deemed direct losses" clause matter. A super-cap of 2–5x annual contract value is market practice for data, confidentiality and IP breaches.
- **Sector overlays.** Add the relevant rules for the counterparty's sector, for example RBI outsourcing and IT-governance directions and payment-data localisation, SEBI cyber-security and cyber-resilience frameworks, IRDAI information-security guidelines, or ABDM health-data policies.
- **Arbitration.** An arbitrator cannot be appointed unilaterally by one party (*Perkins Eastman*, 2019; *CORE*, Constitution Bench, 2024). Keep the seat distinct from the venue (*BGS SGS Soma*, 2019).
- **Stamp duty.** A DPA is an agreement chargeable under the residuary "agreement" article of most State Stamp Acts. Rates are usually modest, but they vary by State and depend on where the agreement is executed or first received. Use e-stamping where available. An unstamped agreement is not void, but it is inadmissible in evidence until duty and penalty are paid (*In re Interplay*, SC 2023). If the DPA is a schedule to an already-stamped principal agreement, check whether separate duty is payable.
- **E-signature.** Permitted under ss.3A and 10A of the IT Act. Keep the audit trail, because electronic records need a certificate under s.63 of the Bharatiya Sakshya Adhiniyam, 2023 when produced in evidence.
- **MSE payments.** If the fiduciary pays a micro or small enterprise for the Services, the 45-day payment limit under the MSMED Act, 2006 applies under the Principal Agreement.

## Customisation checklist

- [ ] Identify the Principal Agreement and confirm that the parties' roles are fiduciary and processor.
- [ ] Complete Schedule 1 in full: purposes, data categories, children's data, locations and incident contacts.
- [ ] Set the breach and CERT-In notice hours, the timeline for assistance with rights requests, and the deletion period.
- [ ] Review Schedule 2 against the processor's actual controls and any sectoral requirements.
- [ ] List the approved sub-processors in Schedule 3 and set the notice period for new ones.
- [ ] Agree the general cap, the super-cap multiple and the insurance amount.
- [ ] Choose court or institutional appointment of the arbitrator, and fill in the seat and venue.
- [ ] Decide who pays stamp duty, and e-stamp before or at execution.
- [ ] Add a GDPR/UK international transfer addendum if EU or UK personal data is involved.

## Related templates

- `master-services-agreement`, `saas-subscription-agreement`, `vendor-agreement`: principal agreements this DPA attaches to.
- `service-level-agreement`: uptime and support commitments.
- `privacy-policy`: the fiduciary's public notice, which should describe processor categories consistently.
