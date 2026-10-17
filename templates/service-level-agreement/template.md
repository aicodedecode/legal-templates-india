---
id: service-level-agreement
title: Service Level Agreement
category: commercial
summary: >-
  Service level schedule for SaaS or managed services: availability, maintenance, support severity matrix, service credits and chronic-failure exit.
audience: [startup, sme, enterprise]
jurisdiction: IN
governing_laws:
  - Indian Contract Act, 1872
  - Information Technology Act, 2000
  - Arbitration and Conciliation Act, 1996
document_type: agreement
parties: 2
stamp_duty: check
e_signature: permitted
version: 0.1.0
last_updated: 2026-10-16
review_status: draft
related: [saas-subscription-agreement, master-services-agreement, statement-of-work, data-processing-agreement]
fields:
  - key: company_name
    type: text
    label: Provider's full legal name
    example: Acme Cloud Software Private Limited
  - key: counterparty_name
    type: text
    label: Customer's full legal name
    example: Bharat Logistics Limited
  - key: principal_agreement_title
    type: text
    label: Title of the agreement to which this SLA is a schedule
    example: Software-as-a-Service Subscription Agreement
  - key: principal_agreement_date
    type: date
    label: Date of the principal agreement
    example: 1 November 2026
  - key: effective_date
    type: date
    label: Date this SLA takes effect
    example: 1 November 2026
  - key: covered_services
    type: textarea
    label: Services covered by this SLA
    example: The production instance of the Provider's logistics management platform, including its web application and public APIs
  - key: availability_commitment
    type: text
    label: Monthly availability commitment (percentage)
    example: "99.9"
  - key: maintenance_window
    type: text
    label: Standard scheduled maintenance window (IST)
    example: Sundays, 1:00 a.m. to 5:00 a.m. IST
  - key: maintenance_cap_hours
    type: number
    label: Maximum scheduled maintenance hours per calendar month
    example: "8"
  - key: maintenance_notice_hours
    type: number
    label: Hours of advance notice for scheduled maintenance outside the standard window
    example: "72"
  - key: tier_1_floor
    type: money
    label: Lower bound of credit tier 1 (percentage availability)
    example: "99.5"
  - key: tier_2_floor
    type: money
    label: Lower bound of credit tier 2 (percentage availability)
    example: "99.0"
  - key: tier_3_floor
    type: money
    label: Lower bound of credit tier 3 (percentage availability)
    example: "97.0"
  - key: credit_cap_percent
    type: number
    label: Maximum total service credits in a month as a percentage of the Monthly Fees
    example: "30"
  - key: business_hours
    type: text
    label: Support business hours
    example: 9:00 a.m. to 7:00 p.m. IST, Monday to Saturday, excluding national holidays
  - key: support_email
    type: email
    label: Support email address
    example: support@acmecloud.example
  - key: support_phone
    type: text
    label: Support phone number for Severity 1 incidents
    example: "+91 80 4000 0000"
  - key: rpo_hours
    type: number
    label: Recovery point objective (hours)
    example: "4"
  - key: rto_hours
    type: number
    label: Recovery time objective (hours)
    example: "8"
  - key: claim_days
    type: number
    label: Days after month-end within which credits must be claimed
    example: "30"
  - key: report_days
    type: number
    label: Business days after month-end for delivery of the monthly service report
    example: "10"
  - key: company_signatory_name
    type: text
    label: Name of Provider's authorised signatory
    example: Kavya Rao
  - key: company_signatory_title
    type: text
    label: Designation of Provider's authorised signatory
    example: Chief Executive Officer
  - key: counterparty_signatory_name
    type: text
    label: Name of Customer's authorised signatory
    example: Vikram Shah
  - key: counterparty_signatory_title
    type: text
    label: Designation of Customer's authorised signatory
    example: Chief Information Officer
---

# SERVICE LEVEL AGREEMENT

> **Drafting note:** This Service Level Agreement is drafted as a schedule to a principal agreement, either the saas-subscription-agreement (attach it to the Order Form) or the master-services-agreement (attach it to a managed-services SOW). It relies on the principal agreement for definitions, liability, confidentiality, data protection and dispute resolution. If you use it with a different principal agreement, check the cross-references in paragraphs 1, 8 and 9. The figures in the examples reflect common Indian enterprise SaaS practice; calibrate them to your architecture and to what you can measure reliably.

This Service Level Agreement (the **"SLA"**) is entered into between **{{company_name}}** (the **"Provider"**) and **{{counterparty_name}}** (the **"Customer"**) and forms a schedule to, and is governed by, the {{principal_agreement_title}} between them dated {{principal_agreement_date}} (the **"Principal Agreement"**). This SLA takes effect on {{effective_date}}.

## 1. Interpretation and Scope

1.1 Capitalised terms used but not defined in this SLA have the meanings given to them in the Principal Agreement. In this SLA:

**"Availability"** means the percentage calculated in accordance with paragraph 2.3.

**"Availability Commitment"** means {{availability_commitment}} per cent.

**"Covered Services"** means {{covered_services}}.

**"Downtime"** means a period of at least one (1) consecutive minute during which the Covered Services are Unavailable, excluding Excluded Downtime.

**"Excluded Downtime"** means any Unavailability attributable to an event described in paragraph 3.

**"Incident"** means an unplanned interruption to, or reduction in the quality of, the Covered Services, or a failure of a component of the Covered Services that has not yet affected them.

**"Monthly Fees"** means the Subscription Fees (or, in the case of managed services, the recurring service fees) attributable to the affected Covered Services for the relevant month, calculated as one-twelfth of the annual Fees where Fees are invoiced annually.

**"Resolution"** means the restoration of the affected Covered Services to normal operation, whether by permanent fix or by a workaround that removes the material business impact, and **"Resolve"** shall be construed accordingly.

**"Response"** means the acknowledgement of an Incident by a qualified member of the Provider's support team (not an automated acknowledgement) who has begun work on it, communicated to the Customer through the support channel.

**"Service Credit"** means the credit calculated in accordance with paragraph 6.

**"Service Month"** means a calendar month (or, for the first and last months of the term, the part of a calendar month falling within the term).

**"Severity Level"** means the severity assigned to an Incident in accordance with paragraph 5.3.

**"Unavailable"** means that the Covered Services do not respond to requests, or return server errors (HTTP 5xx or equivalent) for more than five per cent (5%) of valid requests, as measured by the Provider's monitoring system under paragraph 2.4, such that Authorised Users are unable to log in or to use the core functionality described in the Documentation; and **"Unavailability"** shall be construed accordingly.

1.2 This SLA applies only to the production environment of the Covered Services. It does not apply to sandbox, staging, test, trial or Beta Features, or to Third-Party Services.

1.3 If there is any conflict between this SLA and the Principal Agreement, the Principal Agreement prevails, except in respect of the calculation of Availability and Service Credits, where this SLA prevails.

## 2. Availability Commitment and Measurement

2.1 **Commitment.** The Provider shall make the Covered Services Available at least to the level of the Availability Commitment in each Service Month.

2.2 **Recovery objectives.** In the event of a disaster affecting the primary hosting site, the Provider shall restore the Covered Services from its disaster recovery site within a recovery time objective of {{rto_hours}} hours, with a recovery point objective of {{rpo_hours}} hours (being the maximum period of Customer Data loss measured backwards from the time of the disaster). The Provider shall test its disaster recovery plan at least once in every twelve (12) months and provide the Customer, on request, with a summary of the results.

2.3 **Calculation.** Availability in a Service Month shall be calculated as follows:

Availability (%) = ((Total Minutes − Excluded Downtime Minutes − Downtime Minutes) ÷ (Total Minutes − Excluded Downtime Minutes)) × 100

where **"Total Minutes"** means the total number of minutes in the Service Month.

2.4 **Measurement.** Availability shall be measured by the Provider using automated synthetic monitoring that tests the login function and at least one core transaction of the Covered Services from at least two (2) geographically separate locations within India at intervals of not more than one (1) minute. A minute shall be counted as Downtime only if the monitoring from at least two locations records Unavailability. The Provider shall maintain monitoring records for at least twelve (12) months and make them available to the Customer on reasonable request in support of a claim.

2.5 **Customer-reported outages.** If the Customer reports Unavailability that the Provider's monitoring did not detect, and the Provider's investigation confirms that the Covered Services were Unavailable to all or a substantial part of the Customer's Authorised Users, that period shall be counted as Downtime from the time the Customer reported it to the support channel.

2.6 **Status page.** The Provider shall maintain a status page or equivalent notification mechanism showing the current operational status of the Covered Services and any ongoing Incidents and scheduled maintenance.

## 3. Exclusions

3.1 Unavailability shall be Excluded Downtime, and shall not count against the Availability Commitment, to the extent caused by:

(a) scheduled maintenance carried out in accordance with paragraph 4;

(b) emergency maintenance under paragraph 4.4, up to a maximum of four (4) hours in any Service Month (and any emergency maintenance in excess of that limit shall count as Downtime);

(c) a Force Majeure Event (as defined in the Principal Agreement);

(d) acts or omissions of the Customer or its Authorised Users, including use of the Covered Services in breach of the Principal Agreement or the Documentation, or the Customer's configuration choices;

(e) the Customer's or its Authorised Users' equipment, software, network connectivity or internet service provider, or any other failure outside the Provider's network demarcation point;

(f) Third-Party Services, or any integration not provided by the Provider;

(g) suspension of the Covered Services in accordance with the Principal Agreement;

(h) a denial-of-service attack or other malicious attack, but only to the extent that the Provider has implemented and maintained protective measures consistent with good industry practice;

(i) Beta Features or features designated as not covered by this SLA in the Documentation; or

(j) compliance with an order or direction of a court or governmental authority (including a blocking direction), other than one made by reason of the Provider's own breach of law.

3.2 The Provider shall bear the burden of demonstrating that an exclusion applies.

> **Drafting note:** Exclusions are where most SLA value is won or lost. Customers should resist open-ended exclusions (for example, all "third-party" or "upstream cloud provider" failures). The Provider's own hosting and infrastructure providers are deliberately not excluded here, because the Customer has no relationship with them; if the Provider insists on excluding a hyperscaler region-wide outage, limit it to outages that also defeat the Provider's documented multi-zone architecture.

## 4. Maintenance

4.1 **Scheduled maintenance.** The Provider may carry out scheduled maintenance during the standard maintenance window of {{maintenance_window}}. Scheduled maintenance that causes Unavailability shall not exceed {{maintenance_cap_hours}} hours in total in any Service Month. Any Unavailability for scheduled maintenance in excess of that limit shall count as Downtime.

4.2 **Notice.** The Provider shall give the Customer at least five (5) Business Days' notice of scheduled maintenance expected to cause Unavailability during the standard window, and at least {{maintenance_notice_hours}} hours' notice of any scheduled maintenance outside the standard window (which the Provider shall carry out only where reasonably necessary and outside the Customer's business hours, and which shall count towards the monthly cap).

4.3 **Minimising impact.** The Provider shall use commercially reasonable efforts to carry out maintenance without Unavailability (including by using rolling deployments), and to schedule any maintenance that causes Unavailability at times of low usage.

4.4 **Emergency maintenance.** The Provider may carry out emergency maintenance without prior notice where reasonably necessary to address a critical security vulnerability, prevent imminent harm to the Covered Services or Customer Data, or comply with Applicable Law. The Provider shall notify the Customer as soon as reasonably practicable (through the status page and by email), and shall provide a brief explanation of the reasons for the emergency maintenance on request.

## 5. Support Services

5.1 **Support channels.** The Customer may report Incidents and raise service requests by:

(a) the Provider's online support portal, available twenty-four (24) hours a day, seven (7) days a week;

(b) email to {{support_email}}; and

(c) for Severity 1 Incidents only, telephone at {{support_phone}}, followed by a portal ticket.

5.2 **Support hours.** Severity 1 Incidents shall be supported twenty-four (24) hours a day, seven (7) days a week. All other Incidents and service requests shall be supported during {{business_hours}} (**"Business Hours"**), and the response and resolution targets for them shall run only during Business Hours.

5.3 **Severity Levels.** The Customer shall assign an initial Severity Level to each Incident on reporting it, acting reasonably and in accordance with the following definitions. The Provider may reclassify an Incident, acting reasonably, by notice to the Customer giving its reasons, and any disagreement shall be escalated under paragraph 5.6.

| Severity Level | Definition | Examples |
|---|---|---|
| Severity 1 – Critical | The Covered Services are Unavailable, or a core business function is unusable, for all or a substantial number of Authorised Users, with no workaround; or there is a suspected Security Incident affecting Customer Data | Login failure for all users; data corruption; confirmed unauthorised access |
| Severity 2 – High | A core business function is materially degraded or unavailable for a subset of users, and no reasonable workaround exists; or performance is severely degraded | One module unavailable; API error rates materially elevated; significant performance degradation |
| Severity 3 – Medium | A non-core function is impaired, or a core function is impaired but a reasonable workaround exists | A report fails to generate; intermittent errors with a workaround |
| Severity 4 – Low | Minor issue, cosmetic defect, documentation error, general question or enhancement request | Display issue; how-to query |

5.4 **Response and resolution targets.** The Provider shall meet the following targets, measured from the time an Incident is logged through a support channel in paragraph 5.1 (or, if earlier, detected by the Provider's monitoring):

| Severity Level | Response target | Update frequency | Resolution target | Support coverage |
|---|---|---|---|---|
| Severity 1 | 30 minutes | Every 60 minutes until Resolution | 4 hours | 24 × 7 |
| Severity 2 | 2 hours | Every 4 Business Hours | 1 Business Day | Business Hours |
| Severity 3 | 8 Business Hours | Every 2 Business Days | 5 Business Days | Business Hours |
| Severity 4 | 2 Business Days | On material change | Next scheduled release, or as agreed | Business Hours |

> **Drafting note:** Resolution targets are often expressed as "target" rather than "guaranteed" times, because the cause may lie outside the Provider's control. This template attaches Service Credits only to the Severity 1 and Severity 2 Response targets and to Availability, which is common and measurable. If the Customer requires credits for missed resolution targets, add a row to the credit table in paragraph 6.3 and define "Resolution" carefully.

5.5 **Customer cooperation.** The response and resolution targets are conditional on the Customer: (a) providing reasonable information about the Incident (including steps to reproduce, screenshots and affected users); (b) making appropriately skilled personnel available, during the period for which the Severity Level requires support, to work with the Provider; and (c) applying any workaround or fix the Provider supplies. The clock for a resolution target shall pause for any period during which the Provider is awaiting information or action reasonably requested from the Customer.

5.6 **Escalation.** If an Incident is not Resolved within its resolution target, or the Customer disagrees with a reclassification, the Customer may escalate in accordance with the following matrix:

| Level | Provider contact | Trigger |
|---|---|---|
| Level 1 | Support duty manager | Response target missed, or disagreement on Severity Level |
| Level 2 | Head of customer support / customer success | Resolution target missed for Severity 1 or 2 |
| Level 3 | Chief Technology Officer (or equivalent) | Severity 1 not Resolved within twice the resolution target, or repeated Severity 1 Incidents in a Service Month |

The Provider shall notify the Customer of the names and contact details of its escalation contacts and keep them up to date.

5.7 **Root cause analysis.** For each Severity 1 Incident, and each Severity 2 Incident that remains unresolved beyond its resolution target, the Provider shall deliver a written root cause analysis within five (5) Business Days of Resolution, describing the Incident timeline, root cause, impact, corrective actions taken and preventive actions planned with target dates.

5.8 **Security Incidents.** Where an Incident is or involves a Security Incident or a personal data breach, the notification and cooperation obligations in the Principal Agreement and the DPA apply in addition to this paragraph 5, and nothing in this SLA extends any time limit in them.

## 6. Service Credits

6.1 **Entitlement.** If the Provider fails to meet the Availability Commitment, or a Severity 1 or Severity 2 response target, in any Service Month, the Customer shall be entitled to the Service Credits set out in this paragraph 6, subject to paragraph 7.

6.2 **Availability credits.** Service Credits for Availability shall be calculated as a percentage of the Monthly Fees, as follows:

| Availability in the Service Month | Service Credit (% of Monthly Fees) |
|---|---|
| Below {{availability_commitment}}% but at or above {{tier_1_floor}}% | 5% |
| Below {{tier_1_floor}}% but at or above {{tier_2_floor}}% | 10% |
| Below {{tier_2_floor}}% but at or above {{tier_3_floor}}% | 20% |
| Below {{tier_3_floor}}% | 30% |

6.3 **Response credits.** For each Severity 1 Incident for which the Provider misses the response target, the Service Credit shall be two per cent (2%) of the Monthly Fees, and for each Severity 2 Incident for which the Provider misses the response target, one per cent (1%) of the Monthly Fees, subject to a maximum of ten per cent (10%) of the Monthly Fees in aggregate for response credits in any Service Month.

6.4 **Cap.** The total Service Credits for any Service Month shall not exceed {{credit_cap_percent}} per cent of the Monthly Fees for that Service Month.

6.5 **Nature of Service Credits.** The Parties agree that Service Credits: (a) are a price adjustment reflecting the reduced value of the Covered Services to the Customer when the service levels are not met; (b) represent a genuine and reasonable pre-estimate of that reduction in value, agreed between commercial parties with the benefit of advice; and (c) are not a penalty.

> **Drafting note:** Under s.74 of the Indian Contract Act, 1872, where a contract names a sum payable on breach, the court awards only reasonable compensation not exceeding that sum; actual loss need not always be proved where it is difficult to prove, but a sum that is a penalty in terrorem will not be enforced as such (Kailash Nath Associates v. DDA, Supreme Court, 2015; ONGC v. Saw Pipes, Supreme Court, 2003). Framing credits as a price adjustment for reduced service value, keeping them proportionate and capping them, improves the prospect that they are applied as agreed. Do not describe credits as "penalties" or "liquidated damages for delay" in any document, including invoices or procurement correspondence.

## 7. Claiming Service Credits

7.1 **Claim.** To receive Service Credits, the Customer must submit a written claim to {{support_email}} within {{claim_days}} days after the end of the Service Month to which the claim relates, identifying the dates, times and duration of the Downtime or the Incident reference numbers concerned. The Provider shall automatically apply Service Credits for any Downtime or missed response target recorded in the monthly service report under paragraph 9, whether or not the Customer submits a claim.

7.2 **Validation.** The Provider shall validate each claim against its monitoring and support records within ten (10) Business Days of receipt, and shall notify the Customer of the Service Credits it accepts, with supporting data. Any dispute about a claim shall be escalated under paragraph 5.6 and, if unresolved, determined under the dispute resolution provisions of the Principal Agreement.

7.3 **Application.** Accepted Service Credits shall be applied against the next invoice issued under the Principal Agreement. If no further invoice is to be issued (because the Principal Agreement or the relevant Order Form has expired or been terminated), the Provider shall pay the Customer the amount of the Service Credits within thirty (30) days. Service Credits shall be reflected as a credit note or reduction in value in accordance with applicable goods and services tax law.

> **Drafting note:** Under GST law, a post-supply reduction in value is generally documented by a credit note issued by the supplier, which may have time limits and input tax credit reversal consequences for the recipient [verify the current provisions of s.34 of the CGST Act, 2017 and any agreement-linked discount conditions]. Agree with both finance teams how credits will be documented.

7.4 **Conditions.** Service Credits shall not be available for any Service Month in which the Customer has undisputed Fees overdue by more than thirty (30) days at the time the Service Credits would otherwise be applied, until those Fees are paid.

## 8. Sole Remedy and Chronic Failure

8.1 **Sole financial remedy.** Subject to paragraph 8.2 and to the Customer's rights in the Principal Agreement in respect of Security Incidents, personal data breaches, breach of confidentiality, data protection and indemnities, Service Credits are the Customer's sole and exclusive financial remedy for the Provider's failure to meet the Availability Commitment or the response targets in this SLA.

> **Drafting note:** A sole-remedy clause is generally enforceable between commercial parties under Indian law, but it does not prevent a court or tribunal from scrutinising the credit amounts under s.74 of the Indian Contract Act, 1872. Customers frequently negotiate to exclude from the sole-remedy clause any failure that also amounts to a breach of the security or data protection obligations, which this template already does. Service Credits count towards the general liability cap in the Principal Agreement.

8.2 **Chronic failure.** A **"Chronic Failure"** occurs if:

(a) Availability falls below the Availability Commitment in any three (3) consecutive Service Months, or in any four (4) Service Months in any rolling period of twelve (12) Service Months;

(b) Availability falls below {{tier_3_floor}} per cent in any single Service Month; or

(c) the Provider misses the Severity 1 resolution target three (3) or more times in any rolling period of three (3) Service Months.

8.3 **Termination for Chronic Failure.** If a Chronic Failure occurs, the Customer may, by written notice given within sixty (60) days after the end of the Service Month in which the Chronic Failure occurred, terminate the Principal Agreement (or the Order Form or SOW to which this SLA relates) without liability for any early termination charge. In that case: (a) the Provider shall refund to the Customer any Fees paid in advance for the period after the effective date of termination; and (b) the provisions of the Principal Agreement on data export, transition assistance and deletion shall apply. This right is in addition to the Service Credits for the relevant Service Months, and the Parties agree that a Chronic Failure constitutes a material breach of the Principal Agreement.

8.4 **Remediation plan.** Where Availability falls below the Availability Commitment in any two (2) consecutive Service Months, the Provider shall, within fifteen (15) Business Days, deliver a written remediation plan describing the causes and the measures it will take to restore compliance, and shall implement that plan. Delivery of a remediation plan does not affect the Customer's rights under paragraph 8.3.

## 9. Reporting and Reviews

9.1 **Monthly service report.** Within {{report_days}} Business Days after the end of each Service Month, the Provider shall deliver to the Customer a service report containing at least:

(a) Availability achieved for the Service Month and the trailing three (3) and twelve (12) Service Months;

(b) each period of Downtime and Excluded Downtime, with its duration and cause;

(c) the number of Incidents raised by Severity Level, and performance against the response and resolution targets;

(d) Service Credits due for the Service Month;

(e) root cause analyses delivered and the status of preventive actions;

(f) scheduled and emergency maintenance performed; and

(g) any material changes to the Covered Services, hosting or Sub-processors during the Service Month.

9.2 **Quarterly review.** The Parties' relationship managers shall meet (in person or by video conference) at least once in every calendar quarter to review service performance, trends, open problems, upcoming changes and the Customer's satisfaction, and to agree any improvement actions.

9.3 **Accuracy.** The Provider shall ensure that service reports are accurate and complete. Acceptance of a service report by the Customer does not prevent the Customer from later disputing it if it discovers that it was inaccurate.

## 10. Review and Amendment of this SLA

10.1 The Parties shall review this SLA at least once a year and on any renewal of the Principal Agreement. The Provider may improve the service levels at any time. No change that reduces the service levels, increases the exclusions or reduces the Service Credits shall be effective during a Subscription Term (or the term of the relevant SOW) unless agreed in writing and signed by both Parties.

10.2 Any notice under this SLA (other than an operational communication through the support channel) shall be given in accordance with the notices clause of the Principal Agreement.

## Execution

| For and on behalf of **{{company_name}}** (Provider) | For and on behalf of **{{counterparty_name}}** (Customer) |
|---|---|
| Signature: ______________________ | Signature: ______________________ |
| Name: {{company_signatory_name}} | Name: {{counterparty_signatory_name}} |
| Designation: {{company_signatory_title}} | Designation: {{counterparty_signatory_title}} |
| Date: ______________________ | Date: ______________________ |

> **Drafting note:** If this SLA is attached to an Order Form or SOW that is itself signed, a separate execution block is unnecessary; delete it and state in the Order Form or SOW that this SLA is incorporated. If signed separately, check whether it attracts stamp duty as a distinct instrument in the relevant State.
