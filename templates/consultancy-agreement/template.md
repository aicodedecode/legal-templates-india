---
id: consultancy-agreement
title: Consultancy Agreement
category: startup-core
summary: >-
  Agreement engaging an independent consultant or contractor in India, with fees, GST and TDS, s.19-compliant IP assignment, confidentiality and arbitration.
audience: [startup, sme, enterprise]
jurisdiction: IN
governing_laws:
  - Indian Contract Act, 1872
  - Copyright Act, 1957
  - Patents Act, 1970
  - Micro, Small and Medium Enterprises Development Act, 2006
  - Central Goods and Services Tax Act, 2017
  - Code on Social Security, 2020
  - Digital Personal Data Protection Act, 2023
  - Arbitration and Conciliation Act, 1996
document_type: agreement
parties: 2
stamp_duty: required
e_signature: permitted
version: 0.1.0
last_updated: 2026-10-16
review_status: draft
related: [statement-of-work, ip-assignment-agreement, master-services-agreement, mutual-nda, data-processing-agreement, advisor-agreement, employment-agreement]
fields:
  - key: effective_date
    label: "Effective date"
    example: "1 November 2026"
  - key: company_name
    label: "Company's full legal name"
    example: "Acme Technologies Private Limited"
  - key: company_cin
    label: "Company's Corporate Identity Number (CIN)"
    example: "U62099KA2024PTC123456"
  - key: company_address
    label: "Company's registered office address"
    example: "No. 12, 4th Cross, Indiranagar, Bengaluru 560038, Karnataka"
  - key: counterparty_name
    label: "Counterparty's full legal name"
    example: "Beta Analytics LLP"
  - key: counterparty_description
    label: "Counterparty's constitution and registration details"
    example: "a limited liability partnership registered under the Limited Liability Partnership Act, 2008 with LLPIN AAB-1234"
  - key: counterparty_address
    label: "Counterparty's registered office or principal place of business"
    example: "Unit 5, Andheri East, Mumbai 400069, Maharashtra"
  - key: counterparty_pan
    label: "Consultant's Permanent Account Number (PAN)"
    example: "AAAFB1234C"
  - key: company_business
    label: "Short description of the Company's business"
    example: "developing and operating a cloud-based accounting platform for small businesses"
  - key: arbitration_seat
    label: "Seat (legal place) of arbitration and city whose courts have jurisdiction"
    example: "Bengaluru"
  - key: company_email
    label: "Company's email address for notices"
    example: "legal@acme.example"
  - key: payment_days
    label: "Days within which invoices are paid"
    example: "thirty (30)"
  - key: expense_preapproval_limit
    label: "Expense amount above which prior written approval is needed"
    example: "₹ 10,000"
  - key: late_payment_interest
    label: "Annual simple interest rate on late payments (non-MSE consultants)"
    example: "twelve per cent (12%)"
  - key: confidentiality_period
    label: "Period for which confidentiality obligations survive"
    example: "three (3) years"
  - key: non_solicit_months
    label: "Post-term non-solicitation period in months"
    example: "twelve (12)"
  - key: liability_cap_amount
    label: "Liability cap"
    example: "the total Fees paid and payable under this Agreement"
  - key: consultancy_term
    label: "Term of the consultancy"
    example: "twelve (12) months"
  - key: termination_notice_days
    label: "Notice period for the Company's termination for convenience"
    example: "thirty (30)"
  - key: arbitration_venue
    label: "Venue for arbitration hearings (may differ from the seat)"
    example: "Bengaluru"
  - key: stamp_duty_payer
    label: "Party that bears stamp duty"
    example: "the Company"
  - key: company_signatory_name
    label: "Name of the Company's authorised signatory"
    example: "Asha Rao"
  - key: company_signatory_title
    label: "Title of the Company's authorised signatory"
    example: "Director"
  - key: counterparty_email
    label: "Counterparty's email address for notices"
    example: "contracts@beta.example"
  - key: counterparty_signatory_name
    label: "Name of the counterparty's authorised signatory"
    example: "Rohan Mehta"
  - key: counterparty_signatory_title
    label: "Title of the counterparty's authorised signatory"
    example: "Designated Partner"
  - key: services_description
    label: "Description of the Services"
    example: "Design and development of the Company's Android and iOS mobile applications in accordance with the product requirements document dated 1 October 2026"
  - key: deliverables_description
    label: "Deliverables, specifications and format"
    example: "Source code in the Company's Git repository; build and deployment documentation; test reports"
  - key: milestones
    label: "Timelines and critical milestones"
    example: "Milestone 1 (beta build): 15 December 2026 (critical milestone); Milestone 2 (production release): 31 January 2027"
  - key: restricted_competitors
    label: "Competitors the Consultant may not serve during the Term"
    example: "Epsilon Ledger Private Limited; Zeta Books Private Limited"
  - key: fee_details
    label: "Fee structure and amounts"
    example: "₹ 6,00,000 in aggregate, payable in two equal instalments on Acceptance of Milestone 1 and Milestone 2, exclusive of GST"
  - key: key_personnel
    label: "Key Personnel and their roles"
    example: "Rohan Mehta, lead developer, minimum 30 hours per week"
  - key: consultant_background_ip
    label: "Consultant's Background IP that may be incorporated"
    example: "Consultant's proprietary UI component library (version 2.3), licensed under Clause 7.7"
---

# CONSULTANCY AGREEMENT

> **Drafting note:** Use this agreement to engage an independent consultant, freelancer or consulting firm (for example, a software developer, designer, marketing consultant or interim specialist) to deliver defined services. It is drafted in favour of the Company as the client. For an ongoing vendor relationship with multiple projects, consider the Master Services Agreement with Statements of Work. For someone who will work as part of the team under the Company's direction and control, use the Employment Agreement instead: see the drafting note in Clause 10 on misclassification. Delete all drafting notes before signing.

This Consultancy Agreement (this **"Agreement"**) is made on {{effective_date}} (the **"Effective Date"**)

**BETWEEN**

**{{company_name}}**, a company incorporated under the Companies Act, 2013 with corporate identity number {{company_cin}}, having its registered office at {{company_address}} (the **"Company"**, which expression shall, unless repugnant to the context or meaning thereof, include its successors and assigns);

**AND**

**{{counterparty_name}}**, {{counterparty_description}}, having its registered office, principal place of business or residence at {{counterparty_address}} and holding Permanent Account Number {{counterparty_pan}} (the **"Consultant"**, which expression shall, unless repugnant to the context or meaning thereof, include, where the Consultant is an individual, the Consultant's legal heirs and legal representatives, and otherwise its successors and permitted assigns).

The Company and the Consultant are each a **"Party"** and together the **"Parties"**.

> **Drafting note:** Describe the Consultant by its constitution, for example "a company incorporated under the Companies Act, 2013 with CIN ...", "a limited liability partnership registered under the Limited Liability Partnership Act, 2008 with LLPIN ...", "a sole proprietorship owned by [name]" (a proprietorship has no separate legal personality, so the proprietor contracts personally) or "an individual of Indian nationality". If the Consultant is resident outside India, the GST, withholding tax and FEMA treatment differ; see the drafting note in Clause 6.

## Recitals

A. The Company is engaged in the business of {{company_business}}.

B. The Consultant is engaged in the independent business of providing professional services of the kind described in Schedule 1, holds itself out to the public as providing such services, and has represented to the Company that it has the skills, expertise, experience and resources to provide the Services.

C. Relying on those representations, the Company wishes to engage the Consultant, on a non-exclusive and independent-contractor basis, to provide the Services, and the Consultant has agreed to provide them, on the terms of this Agreement.

NOW, THEREFORE, in consideration of the mutual covenants in this Agreement and the Fees, the Parties agree as follows:

## 1. Definitions and Interpretation

1.1 In this Agreement:

(a) **"Acceptance"** has the meaning given in Clause 4.2, and **"Accepted"** shall be construed accordingly;

(b) **"Affiliate"** means, in relation to a person, any entity that directly or indirectly Controls, is Controlled by, or is under common Control with that person, where **"Control"** means the ownership of more than fifty per cent of the voting share capital of an entity or the right to appoint a majority of its board of directors or equivalent governing body;

(c) **"AI Tool"** means any artificial intelligence or machine-learning model, system, service or software, including any large language model, generative AI service, code-generation or coding-assistant tool, and any service that retains inputs or uses them to train, fine-tune or improve any model;

(d) **"Applicable Law"** means all laws, statutes, codes, ordinances, rules, regulations, notifications, circulars, directions, guidelines, orders and judgments of any governmental, statutory, regulatory, judicial or quasi-judicial authority, in India or elsewhere, that apply to a Party, the Services or the subject matter of this Agreement;

(e) **"Background IP"** means all Intellectual Property Rights, materials, tools, methodologies, software and know-how owned by or licensed to the Consultant before the Effective Date, or developed by the Consultant independently of this Agreement and without use of the Company's Confidential Information or resources, including those listed in Part B of Schedule 3;

(f) **"Business Day"** means a day other than a Saturday, Sunday or public holiday on which banks are open for general business in {{arbitration_seat}};

(g) **"Company Materials"** means all data, documents, information, software, systems, equipment, accounts, credentials and other materials provided by or on behalf of the Company or its Affiliates to the Consultant, and all Personal Data processed by the Consultant on the Company's behalf;

(h) **"Confidential Information"** means all information, in any form or medium and whether or not marked as confidential, relating to the Company, its Affiliates or their respective businesses, products, services, technology, source code, data, customers, users, suppliers, investors, employees, finances, plans or strategies, that is disclosed to or obtained by the Consultant or its Personnel in connection with this Agreement, together with the Deliverables, the Work Product and the terms of this Agreement, but excluding information that the Consultant can demonstrate by written records: (i) is or becomes generally available to the public other than through a breach of this Agreement; (ii) was lawfully in its possession free of any obligation of confidence before it was disclosed by or on behalf of the Company; or (iii) is lawfully received from a third party free of any obligation of confidence;

(i) **"Deliverables"** means all documents, reports, designs, software (in source code and object code form), configurations, data, materials and other outputs that the Consultant is required to deliver to the Company under this Agreement, as described in Schedule 1 or any Statement of Work;

(j) **"Fees"** means the fees payable for the Services as set out in Schedule 2;

(k) **"Good Industry Practice"** means the exercise of the degree of skill, care, diligence, prudence, efficiency and foresight that would reasonably be expected from a skilled and experienced professional providing services similar to the Services;

(l) **"Intellectual Property Rights"** means copyright and related rights (including all rights comprised in copyright under section 14 of the Copyright Act, 1957), patents, utility models, rights in inventions, registered and unregistered designs, trade marks, service marks, trade names, domain names and social-media handles, rights in get-up and goodwill and the right to sue for passing off, rights in computer software, database rights, rights in confidential information (including know-how and trade secrets), semiconductor integrated circuit layout-design rights, and all other intellectual property rights, in each case whether registered or unregistered, including all applications for, and renewals, extensions and revivals of, such rights, and all similar or equivalent rights anywhere in the world;

(m) **"Key Personnel"** means the individuals named in Part A of Schedule 3, and any replacement approved under Clause 3.4;

(n) **"Personal Data"** has the meaning given to "personal data" in the Digital Personal Data Protection Act, 2023, and **"Data Fiduciary"**, **"Data Processor"**, **"Data Principal"** and **"personal data breach"** have the meanings given to them in that Act;

(o) **"Personnel"** means, in relation to the Consultant, the Consultant (if an individual) and its partners, directors, employees, agents and any approved subcontractors and their employees, who are engaged in providing the Services;

(p) **"Services"** means the services described in Schedule 1 and in any Statement of Work, together with any services incidental to them;

(q) **"Statement of Work"** means a document, in a form agreed by the Parties and signed by both, describing additional or modified services, deliverables, timelines and fees, which on signature forms part of this Agreement;

(r) **"Term"** has the meaning given in Clause 16.1; and

(s) **"Work Product"** means the Deliverables and all other works, inventions (whether or not patentable), discoveries, improvements, designs, software, code, data, documentation, materials, ideas and know-how that are created, conceived, developed or reduced to practice by or for the Consultant or its Personnel, alone or jointly with others, in the course of or as a result of providing the Services, or using the Company Materials or Confidential Information, including all drafts, iterations and work in progress.

1.2 In this Agreement, unless the context otherwise requires: (a) the recitals and Schedules form part of this Agreement; (b) headings are for convenience only and do not affect interpretation; (c) the singular includes the plural and vice versa, and words importing a gender include every gender; (d) "include" and "including" are illustrative and do not limit the preceding words, and the ejusdem generis rule shall not apply; (e) a reference to a statute or statutory provision includes any amendment, consolidation, re-enactment or replacement of it and any subordinate legislation made under it, for the time being in force; (f) a reference to "writing" includes email but excludes instant messaging; (g) a reference to a "person" includes any individual, body corporate, partnership, limited liability partnership, trust, association or authority; and (h) no provision of this Agreement shall be construed against a Party on the ground that it prepared it.

1.3 If there is any conflict or inconsistency between the documents forming this Agreement, the following order of precedence applies: (a) the clauses of this Agreement; (b) the Schedules; and (c) any Statement of Work, save that a Statement of Work prevails over Schedule 1 and Schedule 2 in respect of the services and fees described in it if it expressly so states.

## 2. Engagement and Services

2.1 **Engagement.** With effect from the Effective Date, the Company engages the Consultant, on a non-exclusive basis, to provide the Services, and the Consultant agrees to provide the Services and the Deliverables in accordance with this Agreement.

2.2 **Statements of Work.** The Parties may from time to time agree that the Consultant will provide additional services by signing a Statement of Work. Each Statement of Work is governed by this Agreement. No Statement of Work binds either Party until signed by both.

2.3 **Change control.** Either Party may request a change to the scope, timelines or Deliverables of the Services by written notice to the other (a **"Change Request"**). The Consultant shall, within five (5) Business Days after receiving a Change Request from the Company, provide a written assessment of its effect on the timelines, Fees and any other term of this Agreement. No Change Request is binding unless and until it is agreed in writing and signed by both Parties. Unless agreed in a signed Change Request, the Consultant is not entitled to any additional fee for any work that is within the scope of the Services or that is required to remedy a defect in the Services or the Deliverables.

2.4 **Non-exclusivity.** Nothing in this Agreement prevents the Company from engaging any other person to provide services that are the same as or similar to the Services, or from performing them itself.

2.5 **Timelines.** The Consultant shall provide the Services and deliver the Deliverables in accordance with the timelines in Schedule 1 or the relevant Statement of Work. Time is of the essence for any milestone that is expressly identified in Schedule 1 or a Statement of Work as a "critical milestone"; for all other timelines, the Consultant shall use its best endeavours to meet them and shall notify the Company promptly in writing of any anticipated delay, its cause and the steps the Consultant is taking to mitigate it.

## 3. Consultant's Obligations

3.1 **Standard of performance.** The Consultant shall provide the Services: (a) with due skill, care and diligence and in accordance with Good Industry Practice; (b) in accordance with Schedule 1, any Statement of Work and the Company's reasonable written instructions as to the scope and outcome (but not the manner) of the Services; (c) in compliance with Applicable Law; and (d) in compliance with the Company's policies notified to it in writing, including on information security, acceptable use of systems and AI Tools, anti-bribery, and prevention of sexual harassment at the workplace.

3.2 **Personnel.** The Consultant shall ensure that all Personnel are suitably qualified, experienced and skilled, are properly supervised by the Consultant, and comply with the obligations of the Consultant under this Agreement as they apply to them. The Consultant shall ensure that, before any individual is given access to Confidential Information or Company Materials, that individual has entered into a written agreement with the Consultant containing obligations of confidentiality and an assignment of Intellectual Property Rights at least as protective of the Company as Clauses 7 and 8.

3.3 **Background checks.** Where Schedule 1 so requires, the Consultant shall carry out background verification of Personnel in accordance with Applicable Law before deploying them, and shall share the outcome with the Company on request, subject to Applicable Law on the processing of Personal Data.

3.4 **Key Personnel.** The Consultant shall ensure that the Key Personnel are engaged in providing the Services for the time commitments set out in Schedule 3. The Consultant shall not remove or replace any Key Personnel without the Company's prior written consent (not to be unreasonably withheld), except in case of death, serious illness, resignation or termination for misconduct, in which case the Consultant shall promptly propose a replacement of equivalent qualifications and experience for the Company's approval, at no additional cost to the Company.

3.5 **Removal of Personnel.** The Company may, on reasonable grounds and by written notice, require the Consultant to remove any individual from the provision of the Services, and the Consultant shall promptly do so and provide a suitable replacement.

3.6 **Subcontracting.** The Consultant shall not subcontract or delegate any of its obligations under this Agreement without the Company's prior written consent. If the Company consents, the Consultant remains fully responsible for the acts and omissions of the subcontractor as if they were its own, and shall ensure that the subcontractor assigns to the Consultant (for onward assignment to the Company under Clause 7) all Intellectual Property Rights in any Work Product it creates.

3.7 **Equipment and premises.** Unless Schedule 1 provides otherwise, the Consultant shall provide all equipment, software licences, tools and premises required to provide the Services at its own cost. When at the Company's premises or using its systems, the Consultant and its Personnel shall comply with the Company's site, health and safety and information security rules.

3.8 **Reporting.** The Consultant shall keep the Company informed of the progress of the Services and shall provide such written reports, timesheets (where Fees are calculated on a time basis) and other information as the Company may reasonably request.

3.9 **Use of AI Tools.** The Consultant shall not use any AI Tool in providing the Services: (a) in a manner that would input or expose any Confidential Information, Company Materials or Personal Data to an AI Tool that retains inputs or uses them for training, unless the Company has approved that AI Tool in writing; or (b) to generate any material part of a Deliverable without disclosing that use to the Company in writing, identifying the AI Tool and the relevant portion of the Deliverable. The Consultant remains fully responsible for every Deliverable, whether or not generated with the assistance of an AI Tool.

> **Drafting note:** Clause 3.9 addresses two risks: confidentiality leakage into third-party AI services, and uncertainty over copyright in AI-generated material. The Copyright Act, 1957 does not clearly address authorship of works generated autonomously by AI, so the Company may not obtain enforceable copyright in AI-generated portions of a Deliverable; the disclosure obligation lets the Company assess this. Align this Clause with the Company's AI Acceptable Use Policy.

## 4. Delivery and Acceptance

4.1 **Delivery.** The Consultant shall deliver each Deliverable to the Company in the format specified in Schedule 1 or the relevant Statement of Work and, for software, together with complete source code, build instructions, technical documentation and a list of all third-party and open-source components incorporated in it (identifying the applicable licence for each).

4.2 **Acceptance.** Within ten (10) Business Days after delivery of a Deliverable (the **"Review Period"**), the Company shall review it and either: (a) notify the Consultant in writing that it accepts the Deliverable (**"Acceptance"**); or (b) notify the Consultant in writing that the Deliverable does not conform to the requirements of this Agreement, giving reasonable details of the non-conformity. If the Company does neither within the Review Period, the Deliverable is deemed Accepted at the end of the Review Period.

4.3 **Rectification.** If the Company notifies a non-conformity, the Consultant shall, at its own cost, correct it and redeliver the Deliverable within ten (10) Business Days (or such other period as the Parties agree), and Clause 4.2 shall apply again. If a Deliverable fails to conform on its second redelivery, the Company may, without prejudice to its other rights: (a) accept it subject to a reasonable reduction in the Fees; (b) require a further redelivery; or (c) terminate this Agreement, or the relevant Statement of Work, under Clause 16.3 and recover any Fees paid for that Deliverable.

4.4 **No waiver.** Acceptance of a Deliverable does not waive any right of the Company in respect of any defect that was not reasonably discoverable on reasonable inspection during the Review Period, or any breach of warranty under Clause 12.

## 5. Fees, Invoicing and Payment

5.1 **Fees.** In consideration of the provision of the Services, the Company shall pay the Consultant the Fees in accordance with Schedule 2. The Fees are the entire consideration for the Services and the assignment of Intellectual Property Rights under Clause 7, and, unless Schedule 2 expressly provides otherwise, are inclusive of all costs, overheads and expenses of the Consultant.

5.2 **Invoices.** The Consultant shall invoice the Company at the times specified in Schedule 2. Each invoice shall: (a) be a valid tax invoice complying with the Central Goods and Services Tax Act, 2017, the applicable State or Integrated Goods and Services Tax law and the rules under them (where the Consultant is registered for GST), stating the Consultant's GSTIN, the Company's GSTIN, the place of supply and the applicable SAC code; (b) state the Consultant's Permanent Account Number and bank details; (c) refer to this Agreement and any applicable Statement of Work; (d) itemise the Services provided and the Fees and any approved expenses claimed, with supporting timesheets or receipts as applicable; and (e) be addressed to the Company's accounts team at {{company_email}} or such other address as the Company notifies.

5.3 **Payment.** The Company shall pay each correctly rendered and undisputed invoice within {{payment_days}} days after receipt, by electronic transfer to the bank account specified in the invoice. The Company shall have no obligation to pay any invoice relating to a Deliverable that has not been Accepted, unless Schedule 2 provides for payment against delivery or on a time-and-materials basis.

5.4 **Disputed invoices.** If the Company disputes any invoice or part of an invoice in good faith, it shall notify the Consultant in writing within ten (10) Business Days after receipt, giving reasons, and shall pay the undisputed portion in accordance with Clause 5.3. The Parties shall resolve the dispute under Clause 19. The Consultant shall not suspend the Services by reason of any amount disputed in good faith.

5.5 **Expenses.** The Company shall reimburse reasonable out-of-pocket expenses incurred by the Consultant in providing the Services only if: (a) Schedule 2 provides for reimbursement of that category of expense; (b) any expense exceeding {{expense_preapproval_limit}} (individually or in aggregate in a calendar month) has been approved in writing by the Company in advance; and (c) the claim is supported by original receipts and is in accordance with the Company's travel and expenses policy notified to the Consultant.

5.6 **Micro and small enterprises.** If the Consultant is registered as a micro or small enterprise under the Micro, Small and Medium Enterprises Development Act, 2006 (the **"MSMED Act"**), the Consultant shall provide the Company with a copy of its Udyam registration certificate before submitting its first invoice and shall state its Udyam registration number on each invoice. In that case, notwithstanding Clause 5.3, the Company shall make payment within the period required by section 15 of the MSMED Act (being, where a period is agreed in writing, not more than forty-five (45) days from the day of acceptance or deemed acceptance of the Services), and the Consultant shall promptly notify the Company in writing of any change in its status.

> **Drafting note:** Under section 15 of the MSMED Act, 2006, a buyer must pay a micro or small enterprise supplier by the agreed date, which cannot exceed forty-five days from the day of acceptance or deemed acceptance of the goods or services; if there is no agreement, the limit is fifteen days. Late payment attracts compound interest with monthly rests at three times the bank rate notified by the Reserve Bank of India (section 16), and the supplier may refer the dispute to the Micro and Small Enterprises Facilitation Council (section 18). Applicable tax laws may also restrict the buyer's deduction for amounts owed to micro and small enterprises that remain unpaid beyond the statutory period; confirm the current position under the Income-tax Act, 2025 with the Company's tax adviser. If the Consultant is an MSE, keep the payment period in Schedule 2 at forty-five days or less.

5.7 **Late payment.** Subject to Clause 5.6 and the MSMED Act (which prevails where it applies), if the Company fails to pay any undisputed amount by its due date, the Consultant may charge simple interest on the overdue amount at the rate of {{late_payment_interest}} per annum from the due date until the date of actual payment, which the Parties agree is a genuine pre-estimate of the Consultant's loss and not a penalty.

5.8 **Set-off.** The Company may set off against any amount payable to the Consultant under this Agreement any amount that the Consultant owes to the Company under this Agreement, on written notice to the Consultant.

## 6. Taxes

6.1 **GST.** The Fees are exclusive of goods and services tax (**"GST"**). Where the Consultant is registered for GST and GST is chargeable on the Services, the Company shall pay the applicable GST in addition to the Fees on receipt of a valid tax invoice. The Consultant shall: (a) correctly charge, collect and deposit GST with the government; (b) timely file its returns and upload its invoices so that the Company is able to claim input tax credit; and (c) if the Company is denied input tax credit, or is required to reverse it, as a result of any act or omission of the Consultant, indemnify the Company for the credit so lost, together with any interest and penalty, or issue an appropriate credit note.

6.2 **Withholding.** The Company may deduct or withhold from any payment to the Consultant any tax that it is required to deduct at source under applicable tax laws, and shall pay the amount so deducted to the appropriate authority and furnish the Consultant with a certificate of deduction within the time prescribed under applicable tax laws. Amounts so deducted shall be treated as paid to the Consultant.

6.3 **Consultant's taxes.** The Consultant is solely responsible for all income tax and other taxes, duties, levies, contributions and charges payable on or in respect of the Fees and its Personnel, and shall indemnify the Company against any liability for any such amount (including interest and penalties) that is imposed on the Company.

6.4 **Lower deduction.** If the Consultant holds a valid certificate for lower or nil deduction of tax at source under applicable tax laws, it shall provide a copy to the Company, and the Company shall deduct tax in accordance with that certificate for so long as it remains valid.

> **Drafting note:** The Income-tax Act, 2025 replaced the Income-tax Act, 1961 from 1 April 2026; this Agreement deliberately refers to "applicable tax laws" rather than section numbers. Confirm the applicable TDS rate and category for the Services (professional or technical fees, or payment to a contractor) with the Company's tax adviser. If the Consultant is resident outside India: (a) the Company may be liable to pay GST on the import of services under the reverse charge mechanism; (b) withholding tax applies to the remittance at the rate under applicable tax laws or the relevant Double Taxation Avoidance Agreement (subject to the Consultant furnishing a tax residency certificate and any other prescribed documents); (c) payment must be made through an authorised dealer bank in compliance with FEMA, 1999; and (d) a gross-up clause may be requested by the Consultant and should be resisted or priced.

## 7. Intellectual Property

7.1 **Ownership.** As between the Parties, the Company shall be the sole and exclusive owner of the Work Product and all Intellectual Property Rights in it, which shall vest in the Company free from all encumbrances.

7.2 **Assignment.** The Consultant hereby assigns, and shall procure that each of its Personnel assigns, to the Company, absolutely and unconditionally, by way of present assignment of existing rights and of future rights (which shall vest in the Company automatically on their creation), all rights, title and interest, present and future, in and to the Work Product and all Intellectual Property Rights in it. Without limiting the generality of the foregoing, and for the purposes of section 19 of the Copyright Act, 1957:

(a) the works assigned are each and every work comprised in the Work Product, including the Deliverables described in Schedule 1 and each Statement of Work, and all literary works (including computer programs, source code, object code, tables and compilations), artistic works, cinematograph films and sound recordings comprised in it;

(b) the rights assigned are all rights comprised in the copyright in those works under section 14 of the Copyright Act, 1957, including the exclusive rights to reproduce the work in any material form (including storage in any medium by electronic means), to issue copies to the public, to perform or communicate the work to the public, to make any cinematograph film or sound recording in respect of it, to make any translation or adaptation of it and to do any of the foregoing in relation to a translation or adaptation, and, in the case of a computer program, to sell or give on commercial rental or offer for sale or commercial rental any copy of it, together with all rights to modify, combine, license, sub-license, commercialise and otherwise exploit the works by any means and in any medium now known or later devised;

(c) the assignment is for the full term of copyright and of each other Intellectual Property Right, including all renewals, revivals, reversions and extensions;

(d) the assignment extends to the whole world; and

(e) the consideration for the assignment is included in the Fees, and no royalty or other amount is payable to the Consultant or any of its Personnel in respect of it, which the Consultant acknowledges is adequate consideration.

7.3 **No lapse or reversion.** The Parties expressly agree that, notwithstanding section 19(4) of the Copyright Act, 1957, the rights assigned under Clause 7.2 shall not be deemed to have lapsed or reverted to the Consultant by reason of the Company not exercising them within one year or any other period, and that the default duration and territory under sections 19(5) and 19(6) of that Act do not apply because the duration and territory are expressly stated in Clause 7.2.

7.4 **Patents and designs.** The Consultant shall promptly disclose to the Company in writing every invention, design or other subject matter comprised in the Work Product that may be capable of protection by patent, design registration or other registrable right. The Company alone shall be entitled to apply for such protection in its own name, in any country. The Consultant acknowledges that the Company may file this Agreement, or a confirmatory deed of assignment, as proof of its right to apply or as evidence of its title, including for the purposes of section 68 of the Patents Act, 1970 and the corresponding provisions of the Designs Act, 2000.

7.5 **Moral rights.** To the fullest extent permitted by Applicable Law, the Consultant waives, and shall procure that each of its Personnel who is an author of any part of the Work Product waives, and irrevocably undertakes not to assert against the Company, its Affiliates, licensees or successors in title, any right under section 57 of the Copyright Act, 1957, or any equivalent right anywhere in the world, to claim authorship of the Work Product or to restrain or claim damages in respect of any distortion, mutilation, modification or other act in relation to it, including the adaptation, modification, combination or use of the Work Product without attribution.

> **Drafting note:** Section 17 of the Copyright Act, 1957 makes an employer the first owner of copyright in works made by an employee in the course of employment under a contract of service; it does not apply to independent contractors, who own what they create unless they assign it in writing. Clause 7.2 is drafted to satisfy section 19 (a written assignment identifying the work, the rights, the duration and the territory, and stating the consideration). Without an express statement, duration defaults to five years and territory to India. The enforceability of an outright waiver of the author's special rights under section 57 is unsettled in India, so Clause 7.5 couples a waiver with an undertaking not to assert. Where the Consultant is a firm or company, it must obtain written assignments from its own employees and subcontractors (Clause 3.2); ask to see them for critical work.

7.6 **Further assurance.** The Consultant shall, during the Term and at any time after it, at the Company's request and expense (save for the Consultant's own time, which is included in the Fees), promptly execute all documents (including confirmatory deeds of assignment in a form suitable for recordal with the Registrar of Copyrights or the Controller General of Patents, Designs and Trade Marks) and do all acts and things that the Company may reasonably require to vest, perfect, register, maintain, defend and enforce the Company's rights under this Clause 7 anywhere in the world. If the Consultant fails to do so within ten (10) Business Days of a written request, the Company may require the Consultant to execute a separate power of attorney in its favour for that purpose.

> **Drafting note:** A power of attorney is excluded from the Information Technology Act, 2000 by its First Schedule, so it cannot be validly executed by electronic signature; it must be signed in wet ink, stamped under the applicable State stamp law and usually notarised. For that reason this Agreement does not contain an embedded power of attorney; if a power of attorney is needed for a high-value technology, execute it as a separate physical instrument (see the IP Assignment Agreement template).

7.7 **Background IP.** The Consultant retains ownership of its Background IP. To the extent any Background IP is incorporated into, or is necessary for the use or exploitation of, any Work Product, the Consultant hereby grants the Company and its Affiliates a non-exclusive, perpetual, irrevocable, worldwide, royalty-free, fully paid-up licence, transferable (together with the relevant Work Product) and sub-licensable through multiple tiers, to use, reproduce, modify, adapt, distribute, communicate and otherwise exploit that Background IP as part of or in connection with that Work Product. The Consultant shall not incorporate any Background IP into any Deliverable that is not listed in Part B of Schedule 3 without the Company's prior written consent.

7.8 **Third-party and open-source materials.** The Consultant shall not incorporate any third-party material or open-source software into any Deliverable unless: (a) it has disclosed the material and its licence terms to the Company in writing before incorporating it; (b) the Company has approved it in writing; and (c) its licence does not require the Company to disclose or license any of the Company's own source code, or to make any Deliverable available free of charge, or otherwise restrict the Company's ability to commercialise it (including licences of the GNU General Public License family), unless the Company has specifically approved that licence.

7.9 **Residual skills.** Nothing in this Agreement prevents the Consultant from using the general skills, knowledge and experience acquired by it in providing the Services, provided that it does not use or disclose any Confidential Information or infringe any of the Company's Intellectual Property Rights.

## 8. Confidentiality

8.1 The Consultant shall, and shall procure that its Personnel shall: (a) keep the Confidential Information strictly confidential; (b) use the Confidential Information solely for the purpose of providing the Services; (c) not disclose the Confidential Information to any person other than those of its Personnel who need to know it to provide the Services and who are bound by written obligations of confidentiality no less protective than this Clause 8; (d) protect the Confidential Information with at least the degree of care it uses to protect its own confidential information, and in no event less than reasonable care; and (e) not copy, reproduce or remove from the Company's systems any Confidential Information except to the extent strictly necessary to provide the Services.

8.2 The Consultant may disclose Confidential Information to the extent required by Applicable Law or by any court or competent authority, provided that, to the extent legally permitted, it gives the Company prompt prior written notice, cooperates with the Company in seeking a protective order or other remedy, and discloses only the minimum information legally required.

8.3 The Consultant shall notify the Company in writing immediately on becoming aware of any actual or suspected unauthorised access to, or use or disclosure of, any Confidential Information.

8.4 The Consultant's obligations under this Clause 8 continue during the Term and for {{confidentiality_period}} after its expiry or termination, save that they continue indefinitely in respect of trade secrets, source code and Personal Data, for so long as the information remains confidential.

## 9. Data Protection and Information Security

9.1 **Roles.** To the extent the Consultant processes Personal Data on behalf of the Company in providing the Services, the Company is the Data Fiduciary and the Consultant is a Data Processor in respect of that Personal Data.

9.2 **Processing obligations.** The Consultant shall: (a) process such Personal Data only on the documented instructions of the Company and only to the extent necessary to provide the Services; (b) implement reasonable security safeguards, including appropriate technical and organisational measures, to protect Personal Data against personal data breach; (c) ensure that its Personnel who have access to Personal Data are bound by obligations of confidentiality; (d) not engage any sub-processor without the Company's prior written consent; (e) not transfer Personal Data outside India without the Company's prior written consent and in compliance with Applicable Law; (f) assist the Company in responding to requests from Data Principals and in meeting its obligations under the Digital Personal Data Protection Act, 2023; (g) notify the Company without undue delay, and in any event within twenty-four (24) hours, after becoming aware of any personal data breach affecting such Personal Data, with all information reasonably required by the Company to meet its obligations to notify the Data Protection Board of India and affected Data Principals; and (h) on completion of the Services or earlier on request, delete or return all such Personal Data, and confirm in writing that it has done so, save to the extent retention is required by Applicable Law.

9.3 **Cyber security incidents.** The Consultant shall report to the Company, within two (2) hours of noticing it, any cyber security incident affecting the Company's systems, data or the Services, so as to enable the Company to report it to the Indian Computer Emergency Response Team within six (6) hours where required under the directions issued under section 70B(6) of the Information Technology Act, 2000 dated 28 April 2022, and shall maintain logs of its systems used to provide the Services for a rolling period of one hundred and eighty (180) days and provide them to the Company on request.

9.4 **Systems access.** Where the Consultant or its Personnel are given access to the Company's systems, they shall use that access only to provide the Services, shall not attempt to access any system or data they are not authorised to access, shall keep all credentials secure and shall comply with the Company's information security policies. The Company may suspend or revoke any access at any time.

> **Drafting note:** The Digital Personal Data Protection Act, 2023 and the DPDP Rules, 2025 commence in phases; check which obligations are in force on the date of signing. If the Consultant will process significant volumes of Personal Data or sensitive categories of data, put a separate Data Processing Agreement in place and refer to it here. Clause 9.3 tracks the CERT-In Directions of 28 April 2022 (six-hour reporting and 180-day log retention); it applies most directly to service providers and intermediaries, but flowing it down ensures the Company can meet its own obligations.

## 10. Independent Contractor Status

10.1 **Independent contractor.** The Consultant is an independent contractor. Nothing in this Agreement shall be construed as creating any relationship of employer and employee, master and servant, principal and agent, partnership or joint venture between the Company and the Consultant or any of its Personnel.

10.2 **Control.** The Consultant shall determine the method, manner, means, hours and place of performing the Services, subject only to the Company's requirements as to the scope, quality, outcome and timelines of the Services under this Agreement and to Clause 3.1(d). The Consultant is free to provide services to other clients during the Term, subject to Clauses 8 and 11.

10.3 **No employment benefits.** Neither the Consultant nor any of its Personnel is entitled to any salary, wages, bonus, gratuity, leave, provident fund, employees' state insurance, maternity benefit, retrenchment or closure compensation, notice pay or other benefit from the Company, whether under the Code on Wages, 2019, the Industrial Relations Code, 2020, the Code on Social Security, 2020, the Occupational Safety, Health and Working Conditions Code, 2020, any State Shops and Establishments Act or otherwise.

10.4 **Responsibility for Personnel.** The Consultant is solely responsible for engaging, supervising, paying and discharging its Personnel and for complying with all Applicable Law in respect of them, including payment of wages and the deposit of all statutory contributions and taxes. The Consultant shall, on request, provide the Company with evidence of such compliance.

10.5 **No authority.** The Consultant has no authority to bind the Company, incur any liability on its behalf, or hold itself out as an employee, agent or representative of the Company, except to the extent expressly authorised in writing by the Company.

10.6 **Indemnity.** The Consultant shall indemnify the Company against all claims, liabilities, contributions, penalties, interest, costs and expenses arising out of any claim by the Consultant or any of its Personnel, or by any authority, that the Consultant or any of its Personnel is an employee or worker of the Company, or that the Company is liable as principal employer or otherwise for any wages, benefits or contributions in respect of them.

> **Drafting note:** Misclassification is a real risk. Labels in the contract do not decide status: Indian courts and authorities look at the substance of the relationship, including the degree of control over how and when work is done, integration into the Company's organisation, exclusivity, who provides tools and equipment, the method of payment, and economic dependence. A "consultant" who works fixed office hours, reports into a line manager, manages Company staff, receives a fixed monthly fee resembling a salary and works only for the Company may be held to be an employee, triggering obligations under the Code on Wages, 2019, the Code on Social Security, 2020 (provident fund, ESI, gratuity) and the applicable State Shops and Establishments Act, and potentially under the Industrial Relations Code, 2020. If the Consultant supplies several individuals to work at the Company's establishment, the contract-labour provisions of the Occupational Safety, Health and Working Conditions Code, 2020 may apply, with registration, licensing and principal-employer liability depending on headcount thresholds [verify current thresholds and State rules]. The Code on Social Security, 2020 also creates separate categories for gig workers and platform workers, which matter mainly for aggregators. Keep the arrangement genuinely independent, or issue an employment agreement.

## 11. Restrictive Covenants

11.1 **Conflicts during the Term.** During the Term, the Consultant shall promptly disclose to the Company any engagement or interest that conflicts, or may reasonably be expected to conflict, with the Consultant's obligations under this Agreement. During the Term, the Consultant shall not, and shall procure that its Key Personnel do not, provide services similar to the Services to any of the competitors of the Company listed in Schedule 1, without the Company's prior written consent.

11.2 **Non-solicitation of personnel.** During the Term and for {{non_solicit_months}} months after its expiry or termination, the Consultant shall not, directly or indirectly, solicit or entice away from the Company, or employ or engage, any employee or individual consultant of the Company with whom the Consultant or its Personnel had material dealings in the course of providing the Services, provided that this Clause does not restrict general advertisements not specifically targeted at the Company's personnel, or the hiring of any person who responds to them.

11.3 **Non-solicitation of customers.** During the Term and for {{non_solicit_months}} months after its expiry or termination, the Consultant shall not use any Confidential Information to solicit or entice away from the Company any customer or client of the Company with whom the Consultant had material dealings in the course of providing the Services.

11.4 **Reasonableness.** The Consultant acknowledges that the restrictions in this Clause 11 are reasonable and no wider than necessary to protect the Company's Confidential Information, goodwill and workforce stability, and that the Consultant remains free after the Term to carry on its trade, profession or business, including for competitors of the Company.

> **Drafting note:** Section 27 of the Indian Contract Act, 1872 makes void every agreement by which anyone is restrained from exercising a lawful profession, trade or business, save for the sale-of-goodwill exception. Courts generally uphold restraints that operate only during the term of a contract, but have consistently refused to enforce post-termination non-competes against individuals (see, for example, Superintendence Co. of India v. Krishan Murgai (1980) and Percept D'Mark (India) Pvt Ltd v. Zaheer Khan (2006)). That is why Clause 11.1 applies only during the Term. Courts have reached differing views on post-term non-solicitation covenants: some have upheld narrow employee and customer non-solicits as protecting confidential information and goodwill, while others have treated them as restraints of trade. Clauses 11.2 and 11.3 are therefore kept narrow (limited period, limited to personnel and customers the Consultant actually dealt with, and in the case of customers tied to misuse of Confidential Information); keep the post-term period short (six to twelve months) and do not rely on them as a substitute for confidentiality.

## 12. Warranties

12.1 **Mutual.** Each Party represents and warrants to the other that it has full power and authority to enter into and perform this Agreement, and that its execution and performance of this Agreement do not breach any agreement or obligation binding on it.

12.2 **Consultant.** The Consultant represents, warrants and undertakes to the Company that:

(a) it has, and its Personnel have, the qualifications, skills, experience, licences, registrations and resources required to provide the Services in accordance with this Agreement;

(b) the Services will be performed in accordance with Clause 3.1, and each Deliverable will, on delivery and for a period of ninety (90) days after Acceptance, conform in all material respects to its specification in Schedule 1 or the relevant Statement of Work, and be free from material defects;

(c) the Work Product, and its use by the Company in accordance with this Agreement, will not infringe or misappropriate any Intellectual Property Right or other right of any third party;

(d) the Work Product will be original to the Consultant and its Personnel, save for Background IP and third-party materials approved under Clause 7.8;

(e) it has not granted, and will not grant, any right in the Work Product to any third party, and the Work Product is free from any lien, charge or encumbrance;

(f) all software comprised in the Deliverables will, on delivery, be free from any virus, malware, back door, time-bomb, undisclosed telemetry or other code designed to disrupt, disable, harm or gain unauthorised access to any system or data;

(g) it will not, in providing the Services, use or disclose any confidential information or intellectual property belonging to any third party (including any former client or employer) without authority; and

(h) it is not, and none of its Key Personnel is, subject to any obligation or restriction that would prevent or restrict it from providing the Services or assigning the Work Product to the Company.

12.3 **Remedy.** If the Consultant breaches the warranty in Clause 12.2(b), the Consultant shall, at the Company's option and without prejudice to its other rights, promptly re-perform the relevant Services or correct the relevant Deliverable at no additional cost, or refund the Fees paid for the non-conforming Services or Deliverable.

## 13. Indemnity

13.1 The Consultant shall indemnify, defend and hold harmless the Company, its Affiliates and their respective directors, officers, employees and agents (each an **"Indemnified Person"**) from and against all losses, damages, liabilities, penalties, fines, costs (including reasonable legal fees) and expenses suffered or incurred by any Indemnified Person arising out of or in connection with:

(a) any claim that the Work Product, or the use or exploitation of it by the Company in accordance with this Agreement, infringes or misappropriates the Intellectual Property Rights or other rights of any third party (an **"IP Claim"**);

(b) any breach by the Consultant or its Personnel of Clause 8 (Confidentiality) or Clause 9 (Data Protection and Information Security);

(c) any claim referred to in Clause 10.6 (Independent Contractor Status) or Clause 6 (Taxes);

(d) any death or personal injury, or loss of or damage to tangible property, caused by the negligence or wilful misconduct of the Consultant or its Personnel; and

(e) any fraud, wilful misconduct or breach of Applicable Law by the Consultant or its Personnel.

13.2 **Procedure.** The Company shall: (a) notify the Consultant in writing within a reasonable time after becoming aware of any third-party claim for which it seeks indemnity (provided that delay in notifying shall relieve the Consultant of its obligations only to the extent it is materially prejudiced by the delay); (b) subject to paragraph (c), permit the Consultant, at the Consultant's cost, to conduct the defence and settlement of an IP Claim, provided that the Consultant shall not settle any claim in a manner that imposes any obligation or admission on the Company without its prior written consent; and (c) be entitled to retain conduct of any claim that relates to its regulatory standing, its Personal Data obligations or its relationship with its customers. The Company shall provide reasonable assistance at the Consultant's cost.

13.3 **Mitigation of IP Claims.** If any Work Product becomes, or in the Company's reasonable opinion is likely to become, the subject of an IP Claim, the Consultant shall, at its own cost and at the Company's option: (a) procure for the Company the right to continue using it; (b) modify or replace it so that it is non-infringing without loss of functionality; or (c) if neither is achievable on reasonable terms, refund the Fees paid for it, without prejudice to the Company's rights under Clause 13.1.

> **Drafting note:** Indemnities are recognised under sections 124 and 125 of the Indian Contract Act, 1872, and the Indemnified Persons who are not parties should be treated as beneficiaries of the Company's right to claim rather than as direct claimants, since third-party enforcement of contracts is limited under Indian law. Pair the indemnity with the liability cap in Clause 14 and its carve-outs.

## 14. Limitation of Liability

14.1 **Exclusion of indirect loss.** Subject to Clause 14.3, neither Party shall be liable to the other, whether in contract, tort (including negligence), breach of statutory duty or otherwise, for any indirect or consequential loss or damage, or for any loss of profit, revenue, business, goodwill or anticipated savings, arising out of or in connection with this Agreement, in each case whether or not foreseeable.

14.2 **Cap.** Subject to Clause 14.3, each Party's aggregate liability arising out of or in connection with this Agreement, whether in contract, tort (including negligence), breach of statutory duty or otherwise, shall not exceed {{liability_cap_amount}}.

14.3 **Carve-outs.** Nothing in this Agreement limits or excludes: (a) the Company's obligation to pay the Fees properly due; (b) the Consultant's liability under Clause 7 (Intellectual Property), Clause 8 (Confidentiality), Clause 9 (Data Protection and Information Security), Clause 10.6 or Clause 13 (Indemnity); (c) either Party's liability for fraud, wilful misconduct or gross negligence; (d) liability for death or personal injury caused by negligence; or (e) any liability that cannot be limited or excluded under Applicable Law.

> **Drafting note:** A typical cap for a consultancy engagement is the total Fees paid or payable under this Agreement (or in the twelve months before the claim), or a fixed multiple of them. For technology engagements where the Consultant has access to production systems or Personal Data, consider a separate, higher cap (often two to five times annual fees) for data-protection and confidentiality breaches rather than leaving them wholly uncapped, if the Consultant will not accept unlimited liability. Do not use a cap that is so low that it renders the Consultant's core obligations illusory; Indian courts read exclusion clauses strictly against the party relying on them.

## 15. Insurance

15.1 Where Schedule 1 so requires, the Consultant shall maintain, with a reputable insurer, professional indemnity insurance (and, where relevant, cyber liability and public liability insurance) with a limit of indemnity of not less than the amount stated in Schedule 1 per claim, during the Term and for at least two (2) years after it, and shall provide a copy of the policy schedule to the Company on request.

## 16. Term and Termination

16.1 **Term.** This Agreement commences on the Effective Date and continues for {{consultancy_term}}, unless extended by written agreement of the Parties or terminated earlier in accordance with this Clause 16 (the **"Term"**). If any Statement of Work is in effect at the end of the Term, this Agreement continues to apply to that Statement of Work until its completion or termination.

16.2 **Termination for convenience.** The Company may terminate this Agreement, or any Statement of Work, at any time and for any reason by giving the Consultant not less than {{termination_notice_days}} days' written notice. The Consultant may terminate this Agreement for convenience by giving the Company not less than sixty (60) days' written notice, provided that no Statement of Work is then in progress or the Company has consented.

16.3 **Termination for cause.** Either Party may terminate this Agreement with immediate effect by written notice to the other if the other Party: (a) commits a material breach of this Agreement which is incapable of remedy, or which (if capable of remedy) is not remedied within fifteen (15) days after written notice requiring it to be remedied; (b) is the subject of an order or resolution for winding up, or of an application admitted for the initiation of a corporate insolvency resolution process, liquidation or bankruptcy under the Insolvency and Bankruptcy Code, 2016, or has a receiver, liquidator, resolution professional or similar officer appointed over any of its assets, or ceases or threatens to cease carrying on business; or (c) where the Consultant is an individual, dies or becomes permanently incapable of providing the Services.

16.4 **Additional Company rights.** The Company may terminate this Agreement with immediate effect by written notice if: (a) the Consultant or any of its Key Personnel commits any act of fraud, dishonesty, gross misconduct or sexual harassment, or is charged with or convicted of any offence (other than a minor traffic offence); (b) the Consultant breaches Clause 7, 8, 9 or 11; (c) the Consultant undergoes a change of Control, or any of its Key Personnel ceases to be available, and a replacement acceptable to the Company is not provided within fifteen (15) days; or (d) the Consultant's acts or omissions bring, or are likely to bring, the Company into serious disrepute.

## 17. Consequences of Termination

17.1 On expiry or termination of this Agreement for any reason, the Consultant shall immediately: (a) cease providing the Services (save as the Company may require under Clause 17.2); (b) deliver to the Company all Work Product (whether complete or not), including all source code and documentation; (c) return to the Company, or at the Company's direction securely destroy, all Company Materials and Confidential Information in its possession or control, and confirm in writing that it has done so; and (d) deliver up all credentials, equipment and other property of the Company.

17.2 On termination for any reason other than termination by the Consultant under Clause 16.3, the Consultant shall, if the Company so requests, provide reasonable cooperation and handover assistance for a period of up to thirty (30) days to enable an orderly transfer of the Services to the Company or a replacement provider, at the rates set out in Schedule 2.

17.3 Subject to Clause 17.4, on termination the Company shall pay the Consultant: (a) the Fees for Services properly performed and Deliverables Accepted up to the date of termination; and (b) where the Company terminates under Clause 16.2 and Fees are milestone-based, a fair and reasonable proportion of the Fees for the milestone then in progress, reflecting the work actually performed and delivered to the Company. The Consultant shall not be entitled to any other compensation for termination, including for loss of profit or anticipated fees.

17.4 Where the Company terminates under Clause 16.3 or 16.4, the Company may withhold payment of any amount otherwise payable until the Consultant has complied with Clause 17.1, and may set off against it any loss suffered as a result of the breach.

17.5 Termination or expiry of this Agreement is without prejudice to the rights and remedies of either Party that have accrued up to the date of termination or expiry. Clauses 1, 4.4, 5 (in respect of amounts accrued), 6, 7, 8, 9, 10, 11, 12, 13, 14, 17, 19, 20 and 21, and any other provision which by its nature is intended to survive, shall survive expiry or termination.

## 18. Force Majeure

18.1 Neither Party is liable for any delay or failure to perform its obligations under this Agreement (other than an obligation to pay money) to the extent caused by an event beyond its reasonable control, including acts of God, flood, earthquake, epidemic or pandemic, war, terrorism, riot, civil commotion, government action or lockdown, or failure of public utilities or telecommunication networks (but excluding any strike or labour dispute involving the affected Party's own Personnel, and any event that the affected Party could have prevented or mitigated by business-continuity measures consistent with Good Industry Practice) (a **"Force Majeure Event"**).

18.2 The affected Party shall promptly notify the other of the Force Majeure Event, its expected duration and the steps it is taking to mitigate its effect, and shall use all reasonable endeavours to resume performance. If a Force Majeure Event prevents the Consultant from providing all or a material part of the Services for more than thirty (30) days, the Company may terminate this Agreement by written notice, and the Company shall have no obligation to pay Fees for Services not performed.

> **Drafting note:** Indian courts treat force majeure clauses as governed by section 32 of the Indian Contract Act, 1872 (contingent contracts) and, where there is no clause, analyse frustration under section 56. A clause such as this one controls the outcome where it applies, so it is worth listing the events the parties actually care about.

## 19. Governing Law and Dispute Resolution

19.1 **Governing law.** This Agreement, and any dispute, controversy or claim arising out of or in connection with it, its subject matter or formation, or its breach, termination or validity (including non-contractual disputes or claims), shall be governed by and construed in accordance with the laws of the Republic of India.

19.2 **Amicable resolution.** If any dispute, controversy or claim arises out of or in connection with this Agreement (a **"Dispute"**), either Party may give the other a written notice describing the Dispute in reasonable detail (a **"Dispute Notice"**). Authorised representatives of the Parties with authority to settle the Dispute shall meet (in person or by video conference) within ten (10) days after service of the Dispute Notice and shall attempt in good faith to resolve the Dispute.

19.3 **Arbitration.** Any Dispute that is not resolved within thirty (30) days after service of the Dispute Notice (or such longer period as the Parties may agree in writing) shall, to the exclusion of the jurisdiction of any court save as provided in Clause 19.5, be referred to and finally resolved by arbitration in accordance with the Arbitration and Conciliation Act, 1996 (the **"Arbitration Act"**), as follows:

(a) the arbitral tribunal shall consist of a sole arbitrator jointly appointed by the Parties within thirty (30) days after either Party proposes, in writing, the name of one or more persons to act as arbitrator; failing such joint appointment, the arbitrator shall be appointed in accordance with section 11 of the Arbitration Act;

(b) no Party shall have the right to appoint the arbitrator unilaterally, or to require the other Party to select the arbitrator from a panel of names chosen by the first Party alone;

(c) the seat, or legal place, of the arbitration shall be {{arbitration_seat}}, India;

(d) the venue of hearings shall be {{arbitration_venue}}, or such other place as the arbitrator may determine after consulting the Parties, and the arbitrator may conduct any hearing wholly or partly by video conference; a change of venue, or the holding of a hearing at any other place, shall not change the seat;

(e) the language of the arbitration shall be English;

(f) the arbitrator shall give a reasoned award, and may award costs (including reasonable legal fees) in accordance with section 31A of the Arbitration Act; and

(g) the award shall be final and binding on the Parties, who undertake to carry it out without delay.

19.4 **Confidentiality of proceedings.** The Parties shall keep the existence of the arbitration, all submissions, evidence and documents produced in it, and the award confidential, save to the extent disclosure is required to enforce or challenge the award, by Applicable Law, or under section 42A of the Arbitration Act.

19.5 **Courts.** Subject to Clause 19.3, the courts at {{arbitration_seat}} shall have exclusive jurisdiction over any application or proceeding under the Arbitration Act in relation to the arbitration (including applications under sections 9, 11, 27, 34 and 36), and over any matter arising out of or in connection with this Agreement that is held not to be arbitrable. Nothing in this Clause 19 prevents either Party from applying to a court of competent jurisdiction for urgent interim or injunctive relief under section 9 of the Arbitration Act, or to the arbitral tribunal under section 17 of the Arbitration Act, at any time, including before or during the procedure in Clause 19.2.

19.6 **Pre-institution mediation.** If any Dispute falls to be decided by a court (rather than in arbitration) and constitutes a commercial dispute of specified value within the meaning of the Commercial Courts Act, 2015, the Parties shall, unless the suit contemplates urgent interim relief, first exhaust pre-institution mediation in accordance with section 12A of that Act and the rules made under it.

19.7 **Continued performance.** Pending resolution of any Dispute, the Parties shall continue to perform their respective obligations under this Agreement, save to the extent that this Agreement has been terminated.

> **Drafting note:** Clause 19.3 provides for ad hoc arbitration with joint appointment. For institutional arbitration, replace sub-clause (a) with the model clause of a recognised institution, such as the Mumbai Centre for International Arbitration (MCIA), the Delhi International Arbitration Centre (DIAC) or the India International Arbitration Centre (IIAC), and check that institution's current rules and fee schedule; institutional appointment avoids a section 11 application if the parties cannot agree. Do not give either party the unilateral right to appoint the arbitrator, or to nominate a panel from which the other must choose: the Supreme Court held unilateral appointment invalid in Perkins Eastman Architects DPC v. HSCC (India) Ltd (2019), and a Constitution Bench confirmed that unilateral appointment clauses offend the equal-treatment principle in Central Organisation for Railway Electrification v. ECI-SPIC-SMO-MCML (JV) (2024). Always name the seat expressly and keep it distinct from the venue, to avoid the seat-versus-venue disputes that followed BGS SGS Soma JV v. NHPC Ltd (2019). For small claims, the parties may agree to the fast-track procedure under section 29B of the Arbitration Act. The specified value for commercial disputes under the Commercial Courts Act, 2015 (currently understood to be three lakh rupees) should be checked at the time of the dispute [verify]. If a party is outside India, consider an institution and seat acceptable to both and check that the award will be enforceable where the counterparty's assets are located (New York Convention reciprocity).
## 20. Stamp Duty and Execution

20.1 **Stamp duty.** This Agreement shall be stamped, on or before its execution, in accordance with the stamp law in force in the State in which it is first executed and, if it is subsequently received in or brought into any other State in India where a higher duty is payable, in accordance with the stamp law of that State. Stamp duty (including any differential duty) and any penalty payable on this Agreement shall be borne by {{stamp_duty_payer}}. If any duty or penalty is payable because a Party brings this Agreement into another State, or produces it before an authority, other than the State of execution, that Party shall bear the incremental amount.

20.2 **Electronic execution.** This Agreement may be executed by electronic signature, including an Aadhaar-based e-sign or a digital signature certificate, in accordance with sections 3A, 5 and 10A of the Information Technology Act, 2000, and each Party agrees that a contract formed by the exchange of electronic records in that manner is valid and enforceable. Each Party consents to the other retaining the electronic record of this Agreement and of its execution, together with the audit trail generated by the signing platform.

20.3 **Electronic evidence.** Each Party shall, on request, provide such certificate, affidavit or other cooperation as may reasonably be required to prove an electronic record of this Agreement, or of any notice or communication under it, in any proceedings, including a certificate under section 63 of the Bharatiya Sakshya Adhiniyam, 2023.

20.4 **Counterparts.** This Agreement may be executed in any number of counterparts, each of which when executed is an original and all of which together constitute one and the same instrument. Delivery of an executed counterpart by email in portable document format, or by electronic signature platform, is as effective as delivery of a manually executed original.

> **Drafting note:** Stamp duty is a State subject and the rate, article and payment mechanics differ by State. An agreement of this kind is ordinarily stamped under the residuary "agreement or memorandum of an agreement" article of the applicable State schedule (Article 5 of Schedule I to the Indian Stamp Act, 1899 in States that follow it, or the corresponding article of the State's own Stamp Act, for example the Maharashtra Stamp Act, 1958 or the Karnataka Stamp Act, 1957) [verify the article and rate for the State of execution]. Pay duty before or at execution, preferably by e-stamping (for example, through the Stock Holding Corporation of India e-stamping system where the State uses it), and print or attach the e-stamp certificate to the executed copy. An unstamped or under-stamped instrument is not void, but it is inadmissible in evidence and cannot be acted upon until the deficit duty and penalty are paid; a seven-judge bench of the Supreme Court so held in In re: Interplay between Arbitration Agreements under the Arbitration and Conciliation Act, 1996 and the Indian Stamp Act, 1899 (2023), which also held that the arbitration clause remains enforceable and that stamping objections are for the arbitral tribunal. Where a document is executed outside a State or outside India, check the time limit for stamping after it is first received in the State [verify]. The Information Technology Act, 2000 does not apply to the documents listed in its First Schedule (including powers of attorney, trusts, wills and contracts for the sale or conveyance of immovable property); this Agreement is not such a document. Keep the e-signature platform's audit trail: an electronic record must be proved with a certificate under section 63 of the Bharatiya Sakshya Adhiniyam, 2023.
## 21. General

21.1 **Notices.** Any notice, consent or other communication under this Agreement (a **"Notice"**) shall be in writing in English and shall be delivered by hand, sent by registered post acknowledgement due or reputed courier, or sent by email, to the address of the relevant Party set out below (or such other address as a Party may notify to the other in accordance with this Clause). A Notice is deemed received: (a) if delivered by hand, at the time of delivery; (b) if sent by registered post or courier, on the third Business Day after dispatch; and (c) if sent by email, at the time of transmission, unless the sender receives an automated message that the email has not been delivered; provided that a Notice deemed received after 6:00 p.m. or on a day that is not a Business Day is deemed received at 9:00 a.m. on the next Business Day. A Notice of termination or a Dispute Notice sent by email shall also be sent by one of the other methods within two (2) Business Days.

Company: {{company_address}}; email: {{company_email}}; attention: {{company_signatory_name}}, {{company_signatory_title}}.

Consultant: {{counterparty_address}}; email: {{counterparty_email}}; attention: {{counterparty_signatory_name}}.

21.2 **Assignment.** The Consultant shall not assign, transfer, novate, charge or otherwise deal with this Agreement or any of its rights or obligations under it without the Company's prior written consent. The Company may assign or transfer this Agreement, or any of its rights under it (including its rights in the Work Product), to any of its Affiliates or to any successor to all or part of its business, on written notice to the Consultant. Any purported assignment in breach of this Clause is void.

21.3 **Anti-bribery.** The Consultant shall comply with the Prevention of Corruption Act, 1988 and all other applicable anti-bribery and anti-corruption laws, shall not offer, give, solicit or accept any bribe, facilitation payment or other improper advantage in connection with this Agreement, and shall promptly report to the Company any request for such a payment.

21.4 **Prevention of sexual harassment.** The Consultant shall ensure that its Personnel comply with the Company's policy under the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013 while at the Company's workplace (which, for this purpose, includes any place visited, and any virtual platform used, in connection with the Services), and shall cooperate with any inquiry by the Company's Internal Committee involving its Personnel.

21.5 **Publicity.** The Consultant shall not use the name, logo or trade marks of the Company or its Affiliates, or refer to the Company as a client, in any publicity, website, portfolio or marketing material without the Company's prior written consent.

21.6 **Third-party rights.** Except for the rights of Indemnified Persons under Clause 13 (which the Company may enforce on their behalf), nothing in this Agreement confers any right on any person who is not a Party.

21.7 **Entire agreement.** This Agreement (together with the documents referred to in it) constitutes the entire agreement between the Parties relating to its subject matter and supersedes all prior drafts, agreements, arrangements and understandings, whether written or oral, relating to that subject matter. Each Party acknowledges that in entering into this Agreement it has not relied on any statement, representation or warranty that is not expressly set out in this Agreement. Nothing in this Clause limits or excludes any liability for fraud.

21.8 **Amendment.** No amendment, variation or modification of this Agreement shall be effective unless it is in writing, expressly refers to this Agreement and is signed by or on behalf of each Party by a duly authorised signatory.

21.9 **Waiver.** No failure or delay by a Party in exercising any right, power or remedy under this Agreement or Applicable Law shall operate as a waiver of it, nor shall any single or partial exercise of any right, power or remedy preclude any other or further exercise of it or of any other right, power or remedy. A waiver is effective only if given in writing and only in the instance and for the purpose for which it is given.

21.10 **Remedies cumulative.** Except as expressly provided in this Agreement, the rights, powers and remedies provided in this Agreement are cumulative and are in addition to, and not exclusive of, any rights, powers or remedies provided by Applicable Law.

21.11 **Severability.** If any provision (or part of a provision) of this Agreement is held by any court, arbitral tribunal or competent authority to be invalid, illegal or unenforceable, that provision (or part) shall, to the extent required, be deemed modified to the minimum extent necessary to make it valid, legal and enforceable, or, if such modification is not possible, deemed deleted; and the validity and enforceability of the remaining provisions shall not be affected. The Parties shall negotiate in good faith to replace any provision so modified or deleted with a valid provision that achieves, as nearly as possible, the original commercial intention.

21.12 **Limitation.** Nothing in this Agreement shall be construed as restricting a Party absolutely from enforcing its rights under or in respect of this Agreement by the usual legal proceedings, or as limiting the time within which it may enforce those rights, in either case in contravention of section 28 of the Indian Contract Act, 1872.

21.13 **Further assurance.** Each Party shall, at the reasonable request of the other, execute such documents and do such acts and things as may reasonably be required to give full effect to this Agreement.

21.14 **Costs.** Except as otherwise provided in this Agreement, each Party shall bear its own costs and expenses (including legal fees) incurred in connection with the negotiation, preparation and execution of this Agreement.

21.15 **Language.** This Agreement is made in the English language. If it is translated into any other language, the English text shall prevail.
**[Signature page follows]**

## Execution

IN WITNESS WHEREOF, the Parties have executed this Agreement through their duly authorised representatives on the Effective Date.

| For and on behalf of **{{company_name}}** | For and on behalf of **{{counterparty_name}}** |
|---|---|
| Signature: ______________________ | Signature: ______________________ |
| Name: {{company_signatory_name}} | Name: {{counterparty_signatory_name}} |
| Title: {{company_signatory_title}} | Title: {{counterparty_signatory_title}} |
| Date: ______________________ | Date: ______________________ |
| Place: ______________________ | Place: ______________________ |

> **Drafting note:** If the Consultant is an individual or a sole proprietor, the individual signs personally; replace the title line with "Proprietor" or delete it. Confirm the authority of each corporate signatory (board resolution under section 179 of the Companies Act, 2013, or a power of attorney). Witnesses are not legally required but are customary.

## Schedule 1 – Services and Deliverables

**1. Description of Services**

{{services_description}}

**2. Deliverables, specifications and format**

{{deliverables_description}}

**3. Timelines and critical milestones**

{{milestones}}

**4. Company competitors (for Clause 11.1)**

{{restricted_competitors}}

**5. Location and working arrangements**

The Consultant shall provide the Services from its own premises, save for meetings and workshops at the Company's premises or by video conference as reasonably requested by the Company.

**6. Background verification and insurance requirements (if any)**

[Specify whether background verification is required under Clause 3.3 and any minimum insurance limits under Clause 15.1, or state "Not applicable".]

## Schedule 2 – Fees and Payment

**1. Fees**

{{fee_details}}

> **Drafting note:** State whether Fees are fixed per milestone, a monthly retainer, or a time-and-materials rate (per hour or per day, with any cap). Express amounts in Indian format (for example, ₹ 1,50,000 per month or INR 12 lakh in total) and state that GST is extra. If a monthly retainer is used, avoid fixed working hours and leave entitlements that resemble employment terms.

**2. Invoicing**

[Monthly in arrears / on Acceptance of each milestone / as set out in the payment schedule below.]

| Milestone or period | Deliverable | Amount (₹, exclusive of GST) |
|---|---|---|
| | | |
| | | |

**3. Payment period:** {{payment_days}} days after receipt of a correctly rendered invoice (subject to Clause 5.6 if the Consultant is a micro or small enterprise).

**4. Reimbursable expenses:** [Specify the categories of expenses that are reimbursable, or state "None".]

**5. Handover assistance rate (Clause 17.2):** [Specify the daily or hourly rate.]

## Schedule 3 – Key Personnel and Background IP

**Part A – Key Personnel**

| Name | Role | Minimum time commitment |
|---|---|---|
| {{key_personnel}} | | |

**Part B – Consultant's Background IP that may be incorporated in the Deliverables**

{{consultant_background_ip}}

> **Drafting note:** List only the specific pre-existing tools, libraries, templates or frameworks that the Consultant intends to incorporate; a vague or blanket listing (for example, "all of the Consultant's know-how") undermines the Company's ownership of the Work Product. If nothing is to be incorporated, state "None".
