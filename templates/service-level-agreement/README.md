# Service Level Agreement

**Category:** Commercial & Enterprise · **Type:** agreement · **Jurisdiction:** India · **Status:** Draft

## Overview

A service level schedule that sets out measurable commitments for a SaaS product or a managed service:

- **availability:** a monthly uptime percentage with an objective formula and monitoring method
- **maintenance:** windows, a monthly cap and notice periods
- **support:** response and resolution times by severity
- **disaster recovery:** recovery objectives
- **service credits:** a tiered table, a monthly cap and a claims process
- **chronic failure:** a right to exit

The SLA attaches to the saas-subscription-agreement (through the Order Form) or to a managed-services SOW under the master-services-agreement. It relies on that principal agreement for liability, data protection and dispute resolution.

## When to use it

- You provide a hosted platform or managed service, and enterprise customers ask for an uptime commitment with financial consequences.
- You buy SaaS or managed services, and want objective measurement, a severity matrix and a clear exit route when service is persistently poor.
- You need a standard SLA that can be adjusted per customer through placeholders, rather than negotiated from scratch.

## When not to use it

- **Project work measured by deliverables and milestones**, not by uptime. Use the acceptance and milestone mechanics in the statement-of-work.
- **Consumer services**, where service credits cannot substitute for consumer rights.
- **Critical infrastructure or regulated outsourcing** (for example, core banking or payment systems), where regulators expect stronger continuity, RTO/RPO and penalty mechanisms. Use this SLA as a starting point only.

## Key provisions

- **Measurement (para. 2).** The SLA uses a stated formula, synthetic monitoring from two Indian locations, a definition of "Unavailable" based on error rates, customer-reported outages and a status page. It also sets RTO and RPO commitments.
- **Exclusions (para. 3).** A closed list of exclusions, with the burden of proof on the provider. Emergency maintenance is excluded only up to 4 hours a month. The provider's own hosting providers are deliberately not excluded.
- **Maintenance (para. 4).** A standard window and a monthly cap, with notice periods. Rolling deployments are encouraged.
- **Support (para. 5).** A four-level severity matrix, with Severity 1 handled 24×7. Response, update and resolution targets are set out, along with escalation levels and root cause analysis for serious incidents.
- **Service credits (para. 6).** A tiered availability credit table, credits for missed Severity 1 and 2 responses, a monthly cap, and wording that frames credits as a price adjustment, not a penalty.
- **Claims (para. 7).** A claim window, with credits applied automatically where the service report shows a failure. Credits are applied against the next invoice, or refunded after exit. The clause includes a note on GST credit notes.
- **Sole remedy and chronic failure (para. 8).** Credits are the sole *financial* remedy for SLA misses, except for security, data and confidentiality matters. Chronic failure (repeated or severe misses) gives the customer a right to terminate without any early termination charge, plus a refund of prepaid fees.
- **Reporting (para. 9).** A monthly service report with defined contents and quarterly reviews.

## India-specific notes

- **Section 74, Indian Contract Act.** Indian courts award reasonable compensation up to a stipulated sum rather than enforcing penalties (*Kailash Nath Associates v. DDA*, 2015). Credits that are proportionate, capped and framed as a reduction in the value of the service are more defensible. Never call them penalties.
- **Sole-remedy clauses.** These are generally upheld between commercial parties. However, a court may still examine whether the credits are reasonable compensation. Carving out security and data breaches, as this template does, makes the clause more defensible.
- **Stamp duty.** As a schedule incorporated into a stamped principal agreement or Order Form, the SLA usually does not attract separate duty. If it is signed as a standalone instrument, check the stamp law of the relevant State, and stamp it at or before signing (*In re Interplay*, 2023: unstamped documents are inadmissible until stamped, not void).
- **GST on credits.** Service credits reduce the value of a supply. Document them through credit notes, and agree the timing with finance, because of the time limits and input tax credit implications. Verify the current CGST provisions.
- **CERT-In and DPDP.** Incident handling under this SLA does not replace the 6-hour CERT-In reporting obligation or DPDP breach intimation. Para. 5.8 preserves the shorter contractual notice periods in the principal agreement and the DPA.
- **Evidence.** Monitoring logs and service reports are electronic records. Keep them in a form that can be supported by a certificate under s.63 of the Bharatiya Sakshya Adhiniyam, 2023, in case of a dispute.

## Customisation checklist

- [ ] Identify the principal agreement and the Covered Services precisely.
- [ ] Set the availability commitment and the three credit tier floors. Make sure each floor is lower than the one before it.
- [ ] Confirm that the monitoring method matches your actual tooling.
- [ ] Set the maintenance window, the monthly cap and the notice periods.
- [ ] Set the support hours and contact channels. Review the response and resolution targets in para. 5.4.
- [ ] Confirm the RTO and RPO, and check that your DR architecture can meet them.
- [ ] Decide the credit percentages and the overall monthly cap.
- [ ] Set the claim window and the report deadline.
- [ ] Review the chronic failure triggers.
- [ ] Remove the execution block if the SLA is incorporated by an Order Form or SOW.

## Related templates

- saas-subscription-agreement: the principal agreement for subscription software
- master-services-agreement and statement-of-work: for managed services
- data-processing-agreement: breach notification and security obligations that run alongside this SLA
