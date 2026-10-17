---
id: statement-of-work
title: Statement of Work
category: commercial
summary: >-
  Project-level Statement of Work issued under a Master Services Agreement, covering scope, deliverables, milestones, fees, acceptance and change control.
audience: [startup, sme, enterprise]
jurisdiction: IN
governing_laws:
  - Indian Contract Act, 1872
  - Copyright Act, 1957
  - Central Goods and Services Tax Act, 2017
  - Digital Personal Data Protection Act, 2023
  - Arbitration and Conciliation Act, 1996
document_type: agreement
parties: 2
stamp_duty: check
e_signature: permitted
version: 0.1.0
last_updated: 2026-10-16
review_status: draft
related: [master-services-agreement, service-level-agreement, data-processing-agreement, saas-subscription-agreement]
fields:
  - key: sow_number
    type: text
    label: Statement of Work reference number
    example: SOW-2026-003
  - key: effective_date
    type: date
    label: Date this SOW is signed / takes effect
    example: 1 December 2026
  - key: company_name
    type: text
    label: Provider's full legal name
    example: Acme Technologies Private Limited
  - key: counterparty_name
    type: text
    label: Customer's full legal name
    example: Bharat Retail Solutions Limited
  - key: msa_date
    type: date
    label: Date of the Master Services Agreement
    example: 1 November 2026
  - key: project_name
    type: text
    label: Project name
    example: Omnichannel Order Management Platform – Phase 1
  - key: project_start_date
    type: date
    label: Project start date
    example: 8 December 2026
  - key: project_end_date
    type: date
    label: Target completion date
    example: 31 May 2027
  - key: project_background
    type: textarea
    label: Short description of the Customer's business need
    example: The Customer wishes to replace its legacy order management system with a cloud-native platform integrated with its e-commerce storefront and ERP.
  - key: project_objectives
    type: textarea
    label: Measurable project objectives
    example: Go-live of order capture, inventory sync and returns modules for 120 stores by 31 May 2027.
  - key: in_scope_services
    type: textarea
    label: Description of in-scope Services
    example: Requirements validation, solution design, development of three modules, integration with the Customer's ERP via documented APIs, testing support, deployment and 30 days of hypercare.
  - key: out_of_scope_items
    type: textarea
    label: Items expressly out of scope
    example: Data cleansing of legacy records; hardware procurement; changes to the ERP itself; end-user training beyond two train-the-trainer sessions.
  - key: deliverable_1
    type: text
    label: Deliverable 1 – name and description
    example: Solution Design Document
  - key: deliverable_1_date
    type: date
    label: Deliverable 1 – due date
    example: 15 January 2027
  - key: deliverable_2
    type: text
    label: Deliverable 2 – name and description
    example: Order Capture and Inventory Sync modules (source code and configuration)
  - key: deliverable_2_date
    type: date
    label: Deliverable 2 – due date
    example: 31 March 2027
  - key: deliverable_3
    type: text
    label: Deliverable 3 – name and description
    example: Returns module, deployment runbook and production go-live
  - key: deliverable_3_date
    type: date
    label: Deliverable 3 – due date
    example: 15 May 2027
  - key: pricing_model
    type: text
    label: Pricing model
    example: Fixed price
  - key: total_fees
    type: money
    label: Total Fees for this SOW (excluding GST)
    example: "₹ 85,00,000 (INR 85 lakh)"
  - key: milestone_1_amount
    type: money
    label: Milestone 1 payment amount
    example: "₹ 17,00,000"
  - key: milestone_2_amount
    type: money
    label: Milestone 2 payment amount
    example: "₹ 34,00,000"
  - key: milestone_3_amount
    type: money
    label: Milestone 3 payment amount
    example: "₹ 25,50,000"
  - key: milestone_4_amount
    type: money
    label: Milestone 4 (hypercare completion) payment amount
    example: "₹ 8,50,000"
  - key: rate_card
    type: textarea
    label: Time-and-materials rates for change requests and additional work
    example: "Architect ₹ 12,000 per day; Senior Developer ₹ 8,000 per day; QA Engineer ₹ 6,000 per day"
  - key: acceptance_period_days
    type: number
    label: Business days for acceptance testing of each Deliverable
    example: "10"
  - key: hypercare_days
    type: number
    label: Days of post-go-live hypercare support
    example: "30"
  - key: work_location
    type: text
    label: Location(s) from which Services will be performed
    example: Provider's offices in Bengaluru, with on-site presence at the Customer's Mumbai office as required
  - key: company_project_manager
    type: text
    label: Provider's project manager (name and email)
    example: Neha Kulkarni, neha.k@acmetech.example
  - key: counterparty_project_manager
    type: text
    label: Customer's project manager (name and email)
    example: Arjun Iyer, arjun.iyer@bharatretail.example
  - key: personal_data_description
    type: textarea
    label: Categories of personal data and Data Principals to be processed (or "None")
    example: Names, phone numbers, email and delivery addresses of the Customer's retail customers; names and work emails of Customer employees
  - key: stamp_duty_payer
    type: text
    label: Party bearing stamp duty on this SOW (if separately chargeable)
    example: the Customer
  - key: company_signatory_name
    type: text
    label: Name of Provider's authorised signatory
    example: Asha Menon
  - key: company_signatory_title
    type: text
    label: Designation of Provider's authorised signatory
    example: Director
  - key: counterparty_signatory_name
    type: text
    label: Name of Customer's authorised signatory
    example: Rohan Desai
  - key: counterparty_signatory_title
    type: text
    label: Designation of Customer's authorised signatory
    example: Chief Technology Officer
---

# STATEMENT OF WORK

> **Drafting note:** This SOW is designed to sit under the master-services-agreement template. It contains no general legal terms of its own: IP, confidentiality, data protection, warranties, indemnities, liability and dispute resolution are governed by the MSA. Use Part 12 only if this SOW needs to depart from the MSA, and then identify the MSA clause precisely, because the MSA's order of precedence gives effect to an SOW variation only where the clause is identified. The most frequent source of project disputes in India is not the legal terms but a vague scope; spend the time on Parts 3 to 7.

**SOW No.:** {{sow_number}}

**Date:** {{effective_date}} (the **"SOW Effective Date"**)

This Statement of Work (the **"SOW"**) is entered into between **{{company_name}}** (the **"Provider"**) and **{{counterparty_name}}** (the **"Customer"**) under, and is governed by, the Master Services Agreement between them dated {{msa_date}} (the **"MSA"**).

## 1. Incorporation and Interpretation

1.1 This SOW is an SOW for the purposes of the MSA and incorporates the terms of the MSA. On execution, this SOW and the MSA together form a separate contract between the Parties for the Services described below.

1.2 Capitalised terms used but not defined in this SOW have the meanings given in the MSA. In this SOW: **"Project"** means the project described in Part 2; **"Milestone"** means each milestone listed in Part 6; and **"Project Plan"** means the detailed project plan prepared under paragraph 3.3, as updated from time to time in accordance with this SOW.

1.3 If there is any conflict between this SOW and the MSA, the MSA prevails, except to the extent that Part 12 of this SOW expressly identifies a clause of the MSA that it varies and states that this SOW is to prevail.

## 2. Project Overview

2.1 **Project name:** {{project_name}}

2.2 **Background:** {{project_background}}

2.3 **Objectives:** {{project_objectives}}

2.4 **Term of SOW:** This SOW commences on {{project_start_date}} and, unless terminated earlier in accordance with the MSA, continues until the later of {{project_end_date}} and the completion of the Services and acceptance of all Deliverables (including completion of any hypercare period).

2.5 **Location:** The Services will be performed from {{work_location}}. Travel by the Provider's Personnel to any other location shall require the Customer's prior written approval and shall be reimbursed under clause 7.3 of the MSA.

## 3. Scope of Services

3.1 **In-scope Services.** The Provider shall perform the following Services: {{in_scope_services}}

3.2 **Phases.** Unless the Project Plan provides otherwise, the Services shall be delivered in the following phases:

(a) **Discovery and design:** validation of requirements, review of the Customer's existing systems and interfaces, and preparation of the solution design;

(b) **Build:** configuration, development and unit testing of the solution in accordance with the approved solution design;

(c) **Testing:** system integration testing by the Provider and support for user acceptance testing by the Customer;

(d) **Deployment:** deployment to the Customer's production environment in accordance with a cut-over plan agreed by the Parties; and

(e) **Hypercare:** post-go-live support for {{hypercare_days}} days, limited to the correction of defects in the Deliverables and stabilisation of the solution.

3.3 **Project Plan.** Within ten (10) Business Days after the SOW Effective Date, the Provider shall prepare and submit a Project Plan setting out the detailed activities, timelines, resources and dependencies for the Project, consistent with this SOW. The Customer shall review it and either approve it or provide reasonable comments within five (5) Business Days. Once approved, the Project Plan shall be updated fortnightly and reviewed at the governance meetings in Part 10. A change to the Project Plan that affects scope, Milestones, Fees or acceptance criteria shall be made only through the change control procedure in clause 4 of the MSA.

3.4 **Out of scope.** The following are excluded from the Services, and any work relating to them shall be performed only under an agreed Change Request: {{out_of_scope_items}} Without limitation, the Services also exclude: (a) any services not expressly described in paragraph 3.1; (b) the supply of hardware, third-party software licences or cloud infrastructure, unless listed as a Deliverable; (c) remediation of defects in the Customer's existing systems or third-party systems; and (d) support or maintenance after the end of the hypercare period, which may be procured under a separate SOW with a service level schedule.

## 4. Deliverables

4.1 The Provider shall deliver the following Deliverables:

| No. | Deliverable | Format | Due date | Subject to acceptance? | IP treatment |
|---|---|---|---|---|---|
| D1 | {{deliverable_1}} | Document (PDF and editable source) | {{deliverable_1_date}} | Yes | Assigned under clause 10.3 of the MSA |
| D2 | {{deliverable_2}} | Source code in the Customer's repository; configuration exported | {{deliverable_2_date}} | Yes | Assigned under clause 10.3 of the MSA, excluding Provider Tools |
| D3 | {{deliverable_3}} | Code, runbook (editable source) and production deployment | {{deliverable_3_date}} | Yes | Assigned under clause 10.3 of the MSA, excluding Provider Tools |

4.2 Each Deliverable that is software shall be delivered with: (a) its source code, committed to the repository nominated by the Customer; (b) build and deployment instructions sufficient for a reasonably skilled developer to build and deploy it; (c) a list of all third-party and open-source components incorporated in it, with their licence terms; and (d) technical documentation commensurate with industry practice.

4.3 **Provider Tools.** The Provider expects to use the following Provider Pre-existing IP and Provider Tools in the Deliverables, which shall be licensed (and not assigned) to the Customer under clause 10.7 of the MSA: [list accelerators, frameworks, libraries or components, or state "None"].

> **Drafting note:** Listing Provider Tools at the outset avoids later disputes over what the Customer owns. Under s.19 of the Copyright Act, 1957, an assignment must identify the work; the Deliverables table, read with the MSA, supplies that identification. If a Deliverable is to be licensed rather than assigned (for example, a configurable product), say so in the "IP treatment" column.

## 5. Acceptance Criteria

5.1 Each Deliverable marked as subject to acceptance shall be tested in accordance with clause 6 of the MSA, using the acceptance period of {{acceptance_period_days}} Business Days and the acceptance criteria below.

5.2 **Documents** (D1) shall be accepted if they address each of the matters listed in the agreed table of contents and are consistent with the requirements agreed in the discovery phase.

5.3 **Software** (D2 and D3) shall be accepted if, when tested against the approved test cases in the Customer's user acceptance testing environment:

(a) all test cases marked "critical" in the approved test plan pass;

(b) there are no open Severity 1 (critical) or Severity 2 (high) defects, where Severity 1 means a defect that prevents a core business process from being performed with no workaround, and Severity 2 means a defect that materially impairs a core business process but for which a reasonable workaround exists;

(c) the number of open Severity 3 (medium) defects does not exceed five (5), each with an agreed remediation date; and

(d) the non-functional requirements listed in the approved solution design (including response time, concurrency and security testing) are met.

5.4 **Test cases.** The Customer shall prepare its user acceptance test cases, based on the approved solution design, and share them with the Provider not later than ten (10) Business Days before the start of user acceptance testing. The Provider may comment on whether they are consistent with the solution design. Test cases not shared in time, or not consistent with the solution design, shall not be grounds for rejection.

5.5 **Go-live.** Go-live of D3 in production shall constitute acceptance of D2 and D3 under clause 6.4(c) of the MSA, save for defects notified within the hypercare period, which the Provider shall remedy as part of hypercare.

## 6. Fees and Payment Schedule

6.1 **Pricing model:** {{pricing_model}}.

6.2 **Total Fees:** {{total_fees}}, exclusive of GST, which shall be charged in addition at the applicable rate.

6.3 **Milestone payment schedule:**

| Milestone | Milestone event | Payment trigger | Amount (excluding GST) |
|---|---|---|---|
| M1 | Approval of Project Plan and acceptance of D1 | Acceptance (or deemed acceptance) of D1 | {{milestone_1_amount}} |
| M2 | Acceptance of D2 | Acceptance (or deemed acceptance) of D2 | {{milestone_2_amount}} |
| M3 | Go-live in production (D3) | Go-live | {{milestone_3_amount}} |
| M4 | Completion of hypercare | Expiry of the hypercare period | {{milestone_4_amount}} |

6.4 The Provider shall invoice each Milestone amount on achievement of the payment trigger, and the Customer shall pay it in accordance with clause 8 of the MSA. If a Milestone is delayed due to a Customer Default, the Provider may invoice the Milestone amount, pro-rated for the work completed, sixty (60) days after the originally planned Milestone date.

6.5 **Rate card.** The following rates (exclusive of GST) apply to Change Requests and any additional work requested by the Customer: {{rate_card}}. Rates are per person per eight (8) hour working day, exclusive of travel time, and are fixed for the term of this SOW.

6.6 **Expenses.** Travel and out-of-pocket expenses are [OPTION A: included in the Fees / OPTION B: reimbursable at cost in accordance with clause 7.3 of the MSA, subject to a cap of [amount] for the SOW].

6.7 **Taxes and MSMED Act.** Clauses 7.4 (GST), 7.5 (tax deduction at source) and 8.5 (MSMED Act) of the MSA apply. Where the Provider is a micro or small enterprise, the Customer shall pay each Milestone invoice within the period required by the MSMED Act, calculated from the date of acceptance or deemed acceptance of the relevant Deliverable or Milestone.

> **Drafting note:** For a time-and-materials SOW, replace paragraph 6.3 with an estimate of effort, a not-to-exceed amount (if any) and monthly invoicing in arrears against approved timesheets; state whether the Provider may exceed the estimate without a Change Request. Where milestone payments are tied to acceptance, the MSMED Act 45-day clock for an MSE supplier runs from acceptance or deemed acceptance, so slow acceptance by the Customer also delays the statutory payment date.

## 7. Assumptions and Dependencies

7.1 **Assumptions.** The Fees and timetable are based on the following assumptions. If any assumption proves incorrect, the Provider shall notify the Customer and the Parties shall agree an appropriate Change Request:

(a) the requirements captured in the discovery phase will not change materially after approval of the solution design;

(b) the Customer's ERP and other systems expose documented, stable APIs with test environments available from the start of the build phase;

(c) the number of integrations, user roles, reports and data migration objects does not exceed those listed in the solution design;

(d) the Customer will make decisions and provide approvals within three (3) Business Days of a request, unless the Project Plan provides otherwise;

(e) user acceptance testing will be completed within the acceptance period in paragraph 5.1 for each Deliverable; and

(f) work will be performed during normal business hours (9:00 a.m. to 6:00 p.m. IST, Monday to Friday, excluding public holidays), save for go-live activities that the Parties agree to perform out of hours.

7.2 **Customer dependencies.** In addition to its obligations under clause 5 of the MSA, the Customer shall:

(a) provide the Provider with access to its subject-matter experts for the discovery and testing phases as set out in the Project Plan;

(b) provide development, test and production environments, VPN access and user credentials for the Provider's Personnel by the dates in the Project Plan;

(c) procure and maintain all third-party software licences and cloud subscriptions required for the solution, except those expressly listed as Deliverables;

(d) coordinate with its other vendors (including its ERP vendor) to make interfaces available and to resolve issues in their systems;

(e) prepare, cleanse and provide data for migration in the format specified by the Provider; and

(f) provide trained users for user acceptance testing.

7.3 **Effect of Customer Default.** A failure by the Customer to satisfy any dependency in paragraph 7.2 by the relevant date constitutes a Customer Default under clause 3.2 of the MSA.

## 8. Project Team

8.1 **Provider key Personnel:**

| Role | Name | Allocation | Key Personnel? |
|---|---|---|---|
| Project manager | {{company_project_manager}} | 100% | Yes |
| Solution architect | [Name] | 50% | Yes |
| Developers (×[number]) | [Names to be confirmed in Project Plan] | 100% | No |
| QA engineer | [Name] | 100% | No |

8.2 **Customer team:**

| Role | Name | Responsibilities |
|---|---|---|
| Project manager | {{counterparty_project_manager}} | Day-to-day decisions, approvals, coordination of Customer resources |
| Business owner / sponsor | [Name] | Sign-off of solution design and acceptance; chair of steering committee |
| IT lead | [Name] | Environments, access, interfaces, coordination with other vendors |

8.3 Clause 9 of the MSA applies to the replacement of key Personnel. Each Party may change non-key members of its team by notice to the other Party's project manager.

## 9. Data Protection and Security

9.1 **Personal data.** In performing the Services, the Provider will process the following Customer Personal Data: {{personal_data_description}}.

9.2 **Roles.** For the purposes of the DPDP Act, the Customer is the Data Fiduciary and the Provider is a Data Processor in respect of that Customer Personal Data. The DPA (or, pending its execution, clause 12 of the MSA) applies.

9.3 **Environments and data.** The Provider shall not use production Customer Personal Data in development or test environments unless it has been masked or pseudonymised, or the Customer has given its prior written approval. Customer Personal Data shall be processed only in India unless the DPA permits otherwise.

9.4 **Access.** The Provider's access to the Customer's production systems shall be limited to named Personnel, on a least-privilege basis, through the Customer's approved access mechanisms, and shall be revoked at the end of the hypercare period.

## 10. Governance and Reporting

10.1 **Weekly status meeting:** chaired by the Parties' project managers; reviews progress against the Project Plan, risks and issues, decisions required and pending Change Requests. The Provider shall circulate a written status report one (1) Business Day before each meeting, covering progress, Milestone status (RAG), top risks and issues, and actions.

10.2 **Monthly steering committee:** attended by the Customer's business owner and IT lead and the Provider's delivery head and project manager; reviews overall project health, approves material changes and resolves escalated issues. The steering committee constitutes level 2 of the governance structure in Schedule 3 to the MSA.

10.3 **RAID log:** the Provider shall maintain a risks, assumptions, issues and dependencies log, accessible to the Customer, and update it at least weekly.

10.4 **Escalation:** issues not resolved at the weekly meeting within five (5) Business Days shall be escalated to the steering committee, and thereafter in accordance with clause 22.1 of the MSA.

## 11. Change Control

11.1 Changes to this SOW shall be made only in accordance with clause 4 of the MSA, using the Change Request form in Schedule A to this SOW.

11.2 The Provider shall not be obliged to perform, and the Customer shall not be obliged to pay for, any work outside the scope of this SOW unless it is the subject of an agreed Change Request, except that minor clarifications requiring less than two (2) person-days of effort in aggregate per month may be absorbed by the Provider without a Change Request.

## 12. Variations to the MSA

12.1 The Parties agree that the following clauses of the MSA are varied for the purposes of this SOW only, and that this Part 12 prevails over those clauses: [Identify MSA clause number and set out the variation, or state "None".]

## 13. Stamp Duty and Execution

13.1 Any stamp duty payable on this SOW shall be borne by {{stamp_duty_payer}}.

13.2 This SOW may be executed in counterparts and by electronic signature in accordance with clause 24.12 of the MSA.

> **Drafting note:** Whether a separate SOW attracts its own stamp duty, and at what rate, depends on the State and on whether the SOW is treated as a separate instrument or as part of the stamped MSA; several States levy ad valorem duty on works or service contracts with a stated value. Check before signing, and stamp at or before execution. An unstamped instrument is inadmissible in evidence until duty and penalty are paid, but it is not void (In re Interplay, Supreme Court, 2023).

## Execution

Signed by the authorised representatives of the Parties on the date first written above.

| For and on behalf of **{{company_name}}** (Provider) | For and on behalf of **{{counterparty_name}}** (Customer) |
|---|---|
| Signature: ______________________ | Signature: ______________________ |
| Name: {{company_signatory_name}} | Name: {{counterparty_signatory_name}} |
| Designation: {{company_signatory_title}} | Designation: {{counterparty_signatory_title}} |
| Date: ______________________ | Date: ______________________ |

## Schedule A – Change Request Form

**Change Request No.:** CR-[●] **SOW reference:** {{sow_number}} **Date raised:** [●]

**Part 1 – Request (completed by the requesting Party)**

| Item | Details |
|---|---|
| Raised by (name, Party, role) | |
| Title of change | |
| Description of the change | |
| Reason for the change / business justification | |
| Priority (critical / high / medium / low) | |
| Date by which a response is required | |

**Part 2 – Impact assessment (completed by the Provider within the period in clause 4.2 of the MSA)**

| Item | Details |
|---|---|
| Impact on scope and Deliverables | |
| Impact on Project Plan, Milestones and go-live date | |
| Impact on acceptance criteria | |
| Effort estimate (role × days) | |
| Impact on Fees (fixed amount or estimate at rate card) | |
| Impact on payment schedule | |
| Impact on Customer dependencies | |
| Impact on personal data processing or security | |
| Risks of implementing / not implementing the change | |
| Validity of this assessment (date) | |

**Part 3 – Decision**

[ ] Approved [ ] Rejected [ ] Deferred to (date): __________

Approved for the Provider: Name __________ Designation __________ Signature __________ Date __________

Approved for the Customer: Name __________ Designation __________ Signature __________ Date __________

Once signed by both Parties, this Change Request amends the SOW identified above, in accordance with clause 4.3 of the MSA.
