---
id: master-services-agreement
title: Master Services Agreement
category: commercial
summary: >-
  Provider-leaning but balanced framework agreement for technology and IT services delivered under individual Statements of Work.
audience: [startup, sme, enterprise]
jurisdiction: IN
governing_laws:
  - Indian Contract Act, 1872
  - Copyright Act, 1957
  - Information Technology Act, 2000
  - Digital Personal Data Protection Act, 2023
  - Micro, Small and Medium Enterprises Development Act, 2006
  - Central Goods and Services Tax Act, 2017
  - Prevention of Corruption Act, 1988
  - Arbitration and Conciliation Act, 1996
document_type: agreement
parties: 2
stamp_duty: required
e_signature: permitted
version: 0.1.0
last_updated: 2026-10-16
review_status: draft
related: [statement-of-work, service-level-agreement, data-processing-agreement, mutual-nda, saas-subscription-agreement, consultancy-agreement, ip-assignment-agreement]
fields:
  - key: effective_date
    label: Effective date of this Agreement
    example: 1 November 2026
  - key: company_name
    label: Provider's full legal name
    example: Acme Technologies Private Limited
  - key: company_cin
    label: Provider's Corporate Identity Number (CIN) or LLPIN
    example: U72900KA2020PTC123456
  - key: company_address
    label: Provider's registered office address
    example: 4th Floor, 12 Residency Road, Bengaluru 560025, Karnataka
  - key: counterparty_name
    label: Customer's full legal name
    example: Bharat Retail Solutions Limited
  - key: counterparty_cin
    label: Customer's Corporate Identity Number (CIN) or LLPIN
    example: L52100MH2005PLC654321
  - key: counterparty_address
    label: Customer's registered office address
    example: 7th Floor, Tower B, Lower Parel, Mumbai 400013, Maharashtra
  - key: change_response_days
    label: Business days for Provider to respond to a Change Request
    example: "5"
  - key: acceptance_period_days
    label: Business days for Customer to test and accept a Deliverable
    example: "10"
  - key: expense_preapproval_threshold
    label: Single expense amount above which Customer's prior written approval is needed
    example: "₹ 25,000"
  - key: payment_days
    label: Days from receipt of a valid invoice within which Customer must pay
    example: "30"
  - key: dispute_notice_days
    label: Days from receipt of invoice within which Customer may dispute it
    example: "15"
  - key: late_interest_rate
    label: Simple interest rate per annum on overdue amounts (percentage)
    example: "12"
  - key: suspension_notice_days
    label: Days' notice before Provider may suspend Services for non-payment
    example: "15"
  - key: personnel_replacement_days
    label: Business days within which Provider replaces removed personnel
    example: "15"
  - key: confidentiality_years
    label: Years for which confidentiality survives termination
    example: "3"
  - key: breach_notice_hours
    label: Hours within which Provider notifies Customer of a personal data breach
    example: "24"
  - key: warranty_period_days
    label: Warranty period in days following acceptance of a Deliverable
    example: "90"
  - key: super_cap_multiple
    label: Multiple of Annual Contract Value for the super-cap (market range 2x to 5x)
    example: three (3)
  - key: pi_insurance_amount
    label: Minimum professional indemnity / errors and omissions cover
    example: "₹ 5,00,00,000 (INR 5 crore)"
  - key: cyber_insurance_amount
    label: Minimum cyber liability cover
    example: "₹ 5,00,00,000 (INR 5 crore)"
  - key: cgl_insurance_amount
    label: Minimum commercial general / public liability cover
    example: "₹ 2,00,00,000 (INR 2 crore)"
  - key: initial_term_years
    label: Initial term of this Agreement in years
    example: "3"
  - key: convenience_notice_days
    label: Days' notice for termination of an SOW for convenience by Customer
    example: "60"
  - key: cure_period_days
    label: Days allowed to cure a material breach
    example: "30"
  - key: non_solicit_months
    label: Months after termination for which non-solicitation applies
    example: "12"
  - key: escalation_days
    label: Days for escalation discussions before arbitration may begin
    example: "30"
  - key: arbitration_seat
    label: Seat of arbitration (city)
    example: Bengaluru
  - key: arbitration_venue
    label: Venue for hearings (may differ from seat; usually same city)
    example: Bengaluru
  - key: governing_city
    label: City whose courts have jurisdiction for non-arbitrable matters and interim relief
    example: Bengaluru
  - key: company_email
    label: Provider's email address for notices
    example: legal@acmetech.example
  - key: counterparty_email
    label: Customer's email address for notices
    example: contracts@bharatretail.example
  - key: stamp_duty_payer
    label: Party bearing stamp duty on this Agreement
    example: the Provider
  - key: company_signatory_name
    label: Name of Provider's authorised signatory
    example: Asha Menon
  - key: company_signatory_title
    label: Designation of Provider's authorised signatory
    example: Director
  - key: counterparty_signatory_name
    label: Name of Customer's authorised signatory
    example: Rohan Desai
  - key: counterparty_signatory_title
    label: Designation of Customer's authorised signatory
    example: Chief Technology Officer
---

# MASTER SERVICES AGREEMENT

> **Drafting note:** This is a framework agreement. It does not by itself oblige the Customer to buy, or the Provider to supply, any services; each engagement is documented in a Statement of Work (use the statement-of-work template). It is drafted for a provider of technology and IT services (software development, implementation, integration, managed services, consulting) and leans modestly towards the Provider while keeping protections an enterprise customer will expect. For pure subscription software use the saas-subscription-agreement template instead. Delete all drafting notes before signing (scripts/fill.py removes them automatically).

This Master Services Agreement (the **"Agreement"**) is made on {{effective_date}} (the **"Effective Date"**)

**BETWEEN**

**{{company_name}}**, a company incorporated under the laws of India with corporate identity number {{company_cin}} and its registered office at {{company_address}} (the **"Provider"**, which expression shall, unless repugnant to the context, include its successors and permitted assigns);

**AND**

**{{counterparty_name}}**, a company incorporated under the laws of India with corporate identity number {{counterparty_cin}} and its registered office at {{counterparty_address}} (the **"Customer"**, which expression shall, unless repugnant to the context, include its successors and permitted assigns).

The Provider and the Customer are each a **"Party"** and together the **"Parties"**.

> **Drafting note:** If a Party is an LLP, partnership firm, sole proprietorship or foreign entity, adjust the description (for example, "a limited liability partnership registered under the Limited Liability Partnership Act, 2008 with LLPIN ..."). Confirm the exact name and CIN/LLPIN against the Ministry of Corporate Affairs master data before signing.

**WHEREAS**

(A) The Provider is in the business of providing information technology, software development, implementation, integration, support and related professional services.

(B) The Customer wishes to engage the Provider from time to time to provide such services, and the Parties wish to set out the terms on which those services will be provided under individual Statements of Work.

**NOW, THEREFORE**, in consideration of the mutual covenants set out below, the Parties agree as follows:

## 1. Definitions and Interpretation

1.1 In this Agreement, unless the context otherwise requires:

**"Affiliate"** means, in relation to a Party, any entity that directly or indirectly controls, is controlled by, or is under common control with that Party, where "control" means ownership of more than fifty per cent (50%) of the voting securities of, or the power to direct the management and policies of, the entity.

**"Annual Contract Value"** means, as at the date of the event giving rise to a claim, the greater of: (a) the total Fees paid and payable under this Agreement in the twelve (12) months immediately preceding that event; and (b) the total Fees reasonably estimated to be payable under all SOWs then in force in the twelve (12) months immediately following that event.

**"Applicable Law"** means all laws, statutes, ordinances, rules, regulations, notifications, circulars, directions, guidelines, orders and judgments of any governmental, statutory, regulatory or judicial authority in India, and any other jurisdiction expressly identified in an SOW, that apply to a Party or to the Services, as amended from time to time.

**"Bharatiya Sakshya Adhiniyam"** means the Bharatiya Sakshya Adhiniyam, 2023.

**"Business Day"** means a day other than a Saturday, Sunday or a public holiday on which banks are open for general business in the city in which the Party required to act is located.

**"Change Request"** means a request to change an SOW made in accordance with Clause 4 and substantially in the form set out in Schedule 2.

**"Change of Control"** means, in relation to a Party, any person or group of persons acting in concert (who did not control that Party on the Effective Date) acquiring control of that Party, where "control" has the meaning given in the definition of Affiliate.

**"Confidential Information"** has the meaning given in Clause 11.1.

**"Customer Materials"** means all data, information, documents, software, specifications, trade marks, content, equipment, premises, systems and other materials provided or made available by or on behalf of the Customer to the Provider in connection with this Agreement, including Customer Personal Data.

**"Customer Personal Data"** means any personal data (as defined in the DPDP Act) that the Provider processes on behalf of the Customer in performing the Services.

**"Deliverables"** means all documents, software, code, reports, designs, configurations and other work product that the Provider is required to deliver to the Customer under an SOW, as identified as a deliverable in that SOW, but excluding Provider Pre-existing IP and Provider Tools.

**"DPDP Act"** means the Digital Personal Data Protection Act, 2023 and the Digital Personal Data Protection Rules, 2025, each as amended and in force from time to time.

**"Fees"** means the fees for the Services set out in, or calculated in accordance with, the applicable SOW.

**"Force Majeure Event"** has the meaning given in Clause 19.1.

**"Good Industry Practice"** means the exercise of the degree of skill, care, diligence, prudence and foresight that would reasonably be expected from a skilled and experienced provider of services similar to the Services in India.

**"Intellectual Property Rights"** means patents, rights to inventions, copyright and related rights (including rights in computer programmes and databases), moral rights, trade marks, service marks, trade names, domain names, rights in designs, rights in get-up, rights in confidential information (including know-how and trade secrets), and all other intellectual property rights, in each case whether registered or unregistered, including all applications for, and renewals or extensions of, such rights, and all similar or equivalent rights or forms of protection in any part of the world.

**"Losses"** means losses, liabilities, damages, costs (including reasonable legal fees), charges, fines, penalties and expenses.

**"Personnel"** means the employees, consultants, agents and Subcontractors of a Party engaged in the performance of this Agreement.

**"Provider Pre-existing IP"** means all Intellectual Property Rights and materials owned by or licensed to the Provider (a) before the Effective Date or the date of the relevant SOW, or (b) developed by the Provider independently of this Agreement, including any modifications, enhancements and derivatives of them.

**"Provider Tools"** means the software, tools, frameworks, libraries, templates, methodologies, processes, know-how and other materials of general application that the Provider uses in performing services for its customers generally, including any improvements made to them in the course of the Services.

**"Services"** means the services to be performed by the Provider as described in an SOW, including the provision of Deliverables.

**"SOW"** or **"Statement of Work"** means a statement of work entered into by the Parties under this Agreement, substantially in the form of Schedule 1, including any Change Request agreed in respect of it.

**"Subcontractor"** means any third party (other than an employee of the Provider) engaged by the Provider to perform any part of the Services.

1.2 In this Agreement: (a) clause, schedule and paragraph headings do not affect interpretation; (b) the schedules form part of this Agreement; (c) words in the singular include the plural and vice versa; (d) "including" and similar words are illustrative and do not limit the general words preceding them; (e) a reference to a statute or statutory provision includes any subordinate legislation made under it and any amendment, consolidation or re-enactment of it; (f) "writing" includes email but not other electronic messaging unless expressly agreed; and (g) a reference to a Party includes its successors and permitted assigns.

## 2. Structure of this Agreement

2.1 **Framework.** This Agreement sets out the terms on which the Provider will provide Services to the Customer. The Provider shall have no obligation to provide, and the Customer shall have no obligation to purchase, any Services unless and until an SOW has been signed by both Parties.

2.2 **Statements of Work.** Each SOW shall describe, as a minimum, the Services, the Deliverables, any acceptance criteria, the timetable or milestones, the Fees and payment schedule, the key Personnel, the assumptions and dependencies, and the Customer's responsibilities. Each SOW, once signed, forms a separate contract incorporating the terms of this Agreement.

2.3 **Affiliates.** An Affiliate of the Customer may enter into an SOW with the Provider (or an Affiliate of the Provider) under this Agreement by signing an SOW that references this Agreement, in which case references to the "Customer" (or the "Provider") in this Agreement shall, for the purposes of that SOW, be read as references to that Affiliate. Each Party remains responsible for ensuring that its Affiliates comply with the terms of this Agreement.

2.4 **Order of precedence.** If there is any conflict or inconsistency between the documents forming the contract for any Services, the following order of precedence shall apply (in descending order): (a) any data processing agreement entered into under Clause 12, solely in relation to the processing of Customer Personal Data; (b) the clauses of this Agreement; (c) the Schedules to this Agreement; (d) the applicable SOW (including agreed Change Requests, with a later Change Request prevailing over an earlier one); and (e) any document incorporated by reference into an SOW. However, an SOW shall prevail over the clauses of this Agreement where the SOW expressly identifies the clause of this Agreement it is intended to vary and states that it is to prevail, and then only for the purposes of that SOW.

2.5 **No other terms.** No terms or conditions printed on, attached to or referred to in any purchase order, vendor registration form, invoice, portal click-through or similar document issued by either Party shall form part of this Agreement or any SOW, even if that document is signed or accepted. A purchase order shall be used by the Customer solely for its internal administrative purposes.

> **Drafting note:** Enterprise customers often insist that the Provider accepts their purchase order terms or vendor-portal terms. Clause 2.5 neutralises those. If the Customer's procurement process requires a purchase order before invoices can be paid, the SOW should state the PO number and the Provider should not begin work until it is received.

## 3. Provision of Services

3.1 **Performance.** The Provider shall perform the Services: (a) in accordance with this Agreement and the applicable SOW; (b) with reasonable skill and care and in accordance with Good Industry Practice; (c) using appropriately qualified and experienced Personnel; and (d) in compliance with Applicable Law.

3.2 **Timetable.** The Provider shall use commercially reasonable efforts to meet any dates set out in an SOW. Unless an SOW expressly states that time is of the essence in respect of a particular date, all dates are estimates only. The Provider shall not be liable for any delay to the extent caused by a failure of the Customer to perform its obligations under this Agreement or an SOW (a **"Customer Default"**), and in that case the Provider shall be entitled to a reasonable extension of time and to recover any additional costs reasonably incurred as a result of the Customer Default, which shall be documented through the change control procedure in Clause 4.

3.3 **Service levels.** Where an SOW specifies that service levels apply, those service levels and any associated service credits shall be set out in a service level schedule attached to that SOW.

> **Drafting note:** For managed services or support, attach a service level schedule based on the service-level-agreement template. Service credits should be framed as a price adjustment reflecting the reduced value of the service, not as a penalty, to stay within s.74 of the Indian Contract Act, 1872.

3.4 **Customer policies.** The Provider shall comply, and shall ensure its Personnel comply, with the Customer's reasonable site, security and IT policies that have been notified to the Provider in writing in advance and that apply to the Provider's Personnel while on the Customer's premises or accessing the Customer's systems. If compliance with any such policy notified after the date of an SOW increases the Provider's cost of performance, the matter shall be dealt with as a Change Request.

3.5 **Non-exclusivity.** This Agreement is non-exclusive. Nothing in this Agreement prevents the Provider from providing services similar to the Services to any other person, or the Customer from obtaining services similar to the Services from any other person, provided that the Provider does not use the Customer's Confidential Information in doing so.

## 4. Change Control

4.1 **Requesting changes.** Either Party may request a change to the scope, Deliverables, timetable, Personnel or any other aspect of an SOW by submitting a Change Request to the other Party's project manager.

4.2 **Impact assessment.** Within {{change_response_days}} Business Days of receiving (or submitting) a Change Request, or such other period as the Parties may agree, the Provider shall provide a written assessment setting out, to the extent relevant: (a) a description of the change; (b) its impact on the Services, Deliverables, timetable, acceptance criteria and service levels; (c) any change to the Fees, calculated on the basis of the rates in the SOW or, if none, the Provider's then-current rate card; and (d) any other terms the Provider reasonably requires.

4.3 **Agreement of changes.** No change to an SOW shall be effective unless and until a Change Request recording the change has been signed by the authorised representatives of both Parties. Until then, the Provider shall continue to perform the SOW as unchanged.

4.4 **Mandatory changes.** If a change in Applicable Law requires a change to the Services, the Parties shall agree a Change Request to give effect to it. The cost of such a change shall be borne by the Customer where the change in law is specific to the Customer's business or industry, and shared equitably in other cases, unless the SOW provides otherwise.

4.5 **No unreasonable refusal.** Neither Party shall unreasonably withhold or delay its agreement to a Change Request that is necessary to address a Customer Default or a change in Applicable Law.

## 5. Customer Responsibilities and Customer Materials

5.1 **Cooperation.** The Customer shall: (a) cooperate with the Provider in all matters relating to the Services; (b) appoint a project manager with authority to make decisions on its behalf on day-to-day matters; (c) provide, in a timely manner, the Customer Materials, information, decisions and approvals that the Provider reasonably requires; (d) provide the Provider's Personnel with safe access to its premises, systems, environments and personnel as reasonably required; (e) perform the Customer responsibilities and satisfy the dependencies set out in each SOW; and (f) obtain and maintain all licences and consents required for the Provider to use any third-party software or systems of the Customer in performing the Services.

5.2 **Customer Materials.** The Customer retains all right, title and interest (including all Intellectual Property Rights) in the Customer Materials. The Customer grants to the Provider and its Subcontractors a non-exclusive, royalty-free, non-transferable licence during the term of the relevant SOW to use, copy and modify the Customer Materials solely for the purpose of performing the Services.

5.3 **Customer warranty on materials.** The Customer warrants that: (a) it has all rights, licences and consents necessary to provide the Customer Materials to the Provider and to permit the Provider to use them in accordance with this Agreement; (b) the use of the Customer Materials in accordance with this Agreement will not infringe the Intellectual Property Rights or other rights of any third party or breach Applicable Law; and (c) where Customer Materials include personal data, it has provided all notices and obtained all consents, or relies on another lawful basis, required under the DPDP Act for the Provider to process that personal data for the purposes of the Services.

5.4 **Accuracy.** The Provider may rely on the accuracy and completeness of the Customer Materials and shall not be liable for any defect in the Services or Deliverables to the extent caused by inaccurate, incomplete or late Customer Materials.

## 6. Acceptance

6.1 **Acceptance criteria.** Where an SOW specifies that a Deliverable is subject to acceptance, the acceptance criteria and test procedures set out in the SOW shall apply. If none are specified, the Deliverable shall be tested against its specification in the SOW in all material respects.

6.2 **Testing.** On delivery of a Deliverable that is subject to acceptance, the Provider shall notify the Customer that the Deliverable is ready for acceptance testing. The Customer shall, within {{acceptance_period_days}} Business Days of that notice (the **"Acceptance Period"**), carry out the acceptance tests and either: (a) notify the Provider in writing that the Deliverable is accepted; or (b) notify the Provider in writing that the Deliverable has failed to meet the acceptance criteria, giving reasonable detail of each non-conformity (a **"Rejection Notice"**).

6.3 **Remedy.** On receipt of a Rejection Notice, the Provider shall correct the non-conformities identified and re-submit the Deliverable for acceptance testing within a reasonable period, and Clause 6.2 shall apply again, limited to the non-conformities identified and any areas affected by the correction. If the Deliverable fails acceptance testing for a third time for reasons attributable to the Provider, the Customer may, as its sole remedies in respect of that failure: (a) accept the Deliverable subject to a reasonable reduction in the Fees for it, agreed between the Parties acting in good faith; (b) require the Provider to make further attempts to correct it; or (c) terminate the relevant SOW in so far as it relates to that Deliverable and recover the Fees paid for the non-conforming Deliverable.

6.4 **Deemed acceptance.** A Deliverable shall be deemed accepted on the earliest of: (a) the Customer's written notice of acceptance; (b) expiry of the Acceptance Period without the Provider having received a Rejection Notice; or (c) the Customer using the Deliverable in a live or production environment for any purpose other than acceptance testing.

6.5 **Minor defects.** The Customer shall not withhold acceptance by reason of defects that do not materially affect the functionality or performance of the Deliverable. The Provider shall correct any such minor defects within a reasonable time after acceptance.

> **Drafting note:** Deemed acceptance is important to the Provider because milestone payments are often tied to acceptance. Customers frequently ask to delete paragraph (c) of Clause 6.4 or to extend the Acceptance Period; a reasonable compromise is to keep (c) but exclude limited pilot use agreed in the SOW.

## 7. Fees, Expenses and Taxes

7.1 **Fees.** In consideration of the Services, the Customer shall pay the Fees set out in each SOW. Fees may be fixed price, time and materials, milestone-based, or a combination, as specified in the SOW. Where Fees are on a time and materials basis, they shall be calculated using the rates in the SOW and the time recorded by the Provider's Personnel, and the Provider shall maintain accurate time records and make them available to the Customer on reasonable request.

7.2 **Rate revision.** Unless an SOW states otherwise, the Provider may revise its time and materials rates once in each calendar year with effect from the anniversary of the Effective Date, by giving the Customer not less than sixty (60) days' written notice. Any such increase shall not exceed the percentage increase in the All-India Consumer Price Index published by the Government of India for the preceding twelve (12) months plus three (3) percentage points, unless the Parties agree otherwise.

7.3 **Expenses.** The Customer shall reimburse the Provider for reasonable travel, accommodation and out-of-pocket expenses properly incurred in performing the Services, provided that: (a) the expenses are permitted by the SOW or are incurred in accordance with the Customer's travel policy notified to the Provider; (b) any single expense exceeding {{expense_preapproval_threshold}} has been approved in advance in writing (email sufficing) by the Customer; and (c) the expenses are supported by reasonable evidence. Expenses are reimbursed at cost without mark-up.

7.4 **Goods and services tax.** All Fees and other amounts payable under this Agreement are exclusive of goods and services tax (**"GST"**) and any other indirect taxes, which shall be charged by the Provider at the applicable rate and paid by the Customer in addition to the Fees, against a valid tax invoice. The Provider shall issue tax invoices that comply with the Central Goods and Services Tax Act, 2017 and the applicable State Goods and Services Tax law (including e-invoicing requirements where applicable), shall correctly report its outward supplies in its GST returns within the prescribed time so that the Customer can avail input tax credit, and shall indemnify the Customer for any input tax credit denied to the Customer solely by reason of the Provider's failure to do so.

7.5 **Withholding tax.** If the Customer is required by applicable tax laws to deduct tax at source from any payment to the Provider, the Customer may make that deduction, shall deposit the tax deducted with the government within the prescribed time, and shall furnish the Provider with the tax deduction certificate in the prescribed form within the time prescribed under applicable tax laws. The amount so deducted and deposited shall be treated as paid to the Provider. The Customer shall not deduct tax at a rate higher than that required by applicable tax laws, having regard to any lower or nil deduction certificate furnished by the Provider.

> **Drafting note:** The Income-tax Act, 2025 replaced the Income-tax Act, 1961 from 1 April 2026. Do not hard-code section numbers or rates for tax deduction at source; confirm with your tax adviser how the payments under each SOW (for example, fees for professional or technical services versus royalty for software licences) are characterised, because that affects the rate. If the Provider is a non-resident, add a gross-up or treaty-relief mechanism and check the Customer's equalisation levy and GST reverse-charge position.

7.6 **Other taxes.** Each Party shall bear its own income taxes and any taxes on its own employees. Stamp duty shall be borne as set out in Clause 24.13.

## 8. Invoicing and Payment

8.1 **Invoicing.** Unless an SOW provides otherwise, the Provider shall invoice: (a) fixed-price Fees in accordance with the milestone or payment schedule in the SOW; (b) time and materials Fees monthly in arrears; and (c) expenses monthly in arrears. Each invoice shall reference the SOW (and any purchase order number notified by the Customer) and contain the particulars required by applicable GST law.

8.2 **Payment.** The Customer shall pay each undisputed invoice in full, in Indian Rupees, by electronic funds transfer to the bank account specified by the Provider, within {{payment_days}} days of receipt of the invoice.

8.3 **Disputed invoices.** If the Customer disputes any part of an invoice in good faith, it shall notify the Provider in writing within {{dispute_notice_days}} days of receipt of the invoice, giving reasonable details of the dispute, and shall pay the undisputed portion by the due date. The Parties shall work together in good faith to resolve the dispute promptly, failing which Clause 22 applies. An invoice not disputed within that period shall be deemed accepted, without prejudice to the Customer's audit rights. Any amount found to be payable shall be paid within ten (10) Business Days of resolution, together with interest under Clause 8.4 from the original due date.

8.4 **Late payment interest.** Without prejudice to its other rights, the Provider may charge simple interest on any undisputed amount not paid by the due date at the rate of {{late_interest_rate}} per cent per annum, from the due date until the date of actual payment, accruing daily. The Parties agree that this rate is a genuine pre-estimate of the Provider's financing cost and not a penalty.

8.5 **MSMED Act.** If the Provider is a micro or small enterprise registered under the Micro, Small and Medium Enterprises Development Act, 2006 (the **"MSMED Act"**) and has furnished a copy of its valid Udyam registration certificate to the Customer, then notwithstanding anything in this Agreement: (a) the period for payment of any amount for Services shall not exceed forty-five (45) days from the day of acceptance or deemed acceptance of the Services within the meaning of the MSMED Act; and (b) if the Customer fails to pay within that period, interest shall be payable in accordance with the MSMED Act in place of the interest set out in Clause 8.4. The Provider shall promptly notify the Customer of any change in its MSMED Act status.

> **Drafting note:** Under s.15 of the MSMED Act a buyer must pay a micro or small enterprise supplier within the agreed period, which cannot exceed 45 days from the day of acceptance or deemed acceptance; s.16 then imposes compound interest with monthly rests at three times the bank rate notified by the Reserve Bank of India, and the Act has overriding effect. Medium enterprises are not covered by these payment protections. Two collateral consequences matter to the Customer: (i) under applicable tax laws, an amount payable to a micro or small enterprise that is not actually paid within the MSMED Act time limit may not be allowed as a deduction in computing the buyer's income until the year in which it is actually paid (a rule introduced in the Income-tax Act, 1961 with effect from assessment year 2024-25 and, as understood, carried into the Income-tax Act, 2025 [verify the corresponding provision]); and (ii) companies may have to report dues to MSEs outstanding beyond 45 days to the Registrar in the half-yearly MSME Form 1 return [verify current form and periodicity]. Interest under s.16 is also not deductible for tax purposes (s.23 MSMED Act). Verify the Provider's Udyam certificate and enterprise classification at the time of signing and on renewal.

8.6 **Suspension for non-payment.** If any undisputed amount remains unpaid for more than {{payment_days}} days after its due date, the Provider may, after giving the Customer not less than {{suspension_notice_days}} days' written notice of its intention to do so, suspend performance of the Services under the relevant SOW until payment is made in full. Any such suspension shall not be a breach of this Agreement by the Provider, and the timetable in the SOW shall be extended accordingly.

8.7 **No set-off.** The Customer shall pay all amounts due under this Agreement without any set-off, counterclaim or deduction, other than any deduction required by applicable tax laws or any service credits expressly provided for in an SOW.

## 9. Personnel and Subcontracting

9.1 **Provider Personnel.** The Provider is solely responsible for the recruitment, supervision, direction and payment of its Personnel. Nothing in this Agreement creates an employment relationship between the Customer and any of the Provider's Personnel. The Provider shall be solely responsible for compliance with all labour and employment laws applicable to its Personnel, including the Code on Wages, 2019, the Industrial Relations Code, 2020, the Code on Social Security, 2020, the Occupational Safety, Health and Working Conditions Code, 2020 and the applicable state shops and establishments legislation, including payment of wages, social security contributions and statutory benefits.

> **Drafting note:** Where the Provider's Personnel work on the Customer's premises, the Customer may be treated as a "principal employer" under the Labour Codes, with possible secondary liability for unpaid wages and social security contributions. Enterprise customers will commonly ask for evidence of compliance (wage registers, provident fund and ESI challans) and an indemnity; Clause 14.1(c) provides one. If the engagement looks like long-term deployment of individuals under the Customer's control, take advice on contract labour and deemed-employment risk.

9.2 **Key Personnel.** Where an SOW identifies key Personnel, the Provider shall use reasonable efforts to ensure that those individuals remain engaged on the Services for the duration specified in the SOW, and shall not remove them except in cases of resignation, termination of employment, serious illness, parental or other statutory leave, promotion, or other circumstances outside the Provider's reasonable control. The Provider shall replace any key Personnel with individuals of comparable skills and experience.

9.3 **Removal at Customer's request.** The Customer may, acting reasonably and on reasonable grounds notified in writing (including misconduct or a breach of Customer policies), require the Provider to remove any of its Personnel from the Services. The Provider shall comply promptly and shall provide a suitably qualified replacement within {{personnel_replacement_days}} Business Days. The Customer shall not make any such request on grounds that would be unlawful under Applicable Law, including grounds of discrimination.

9.4 **Background checks.** The Provider shall carry out, before assigning any Personnel to the Services, the background verification checks that are customary for the Provider's industry and any additional checks specified in the SOW, in each case to the extent permitted by Applicable Law.

9.5 **Subcontracting.** The Provider may subcontract any part of the Services to a Subcontractor, provided that: (a) where the Subcontractor will process Customer Personal Data or have access to the Customer's production systems, the Provider gives the Customer prior written notice and the Customer does not object on reasonable grounds within ten (10) Business Days; (b) the Provider imposes on the Subcontractor obligations of confidentiality, data protection and intellectual property assignment no less protective of the Customer than those in this Agreement; and (c) the Provider remains fully responsible for the acts and omissions of its Subcontractors as if they were its own.

9.6 **Independent contractor.** The Provider is an independent contractor. Neither Party is the agent, partner or joint venturer of the other, and neither Party has authority to bind the other.

## 10. Intellectual Property

10.1 **Provider Pre-existing IP and Provider Tools.** As between the Parties, the Provider retains all right, title and interest (including all Intellectual Property Rights) in and to the Provider Pre-existing IP and the Provider Tools. Nothing in this Agreement assigns or transfers any of them to the Customer.

10.2 **Customer IP.** As between the Parties, the Customer retains all right, title and interest (including all Intellectual Property Rights) in and to the Customer Materials.

10.3 **Assignment of Deliverables.** Subject to Clause 10.4 and to the Customer paying in full the Fees for the relevant Deliverable, the Provider hereby assigns to the Customer, with effect from the date of such payment, by way of present assignment of existing rights and of future rights (to take effect as each work comes into existence), all right, title and interest in and to the Intellectual Property Rights in the Deliverables, including (in the case of copyright) all rights comprised in the copyright under section 14 of the Copyright Act, 1957, for the full term of protection of those rights (including all renewals and extensions) and throughout the world. The consideration for this assignment is included in the Fees. The Deliverables to which this assignment relates are those identified as Deliverables in each SOW and any Change Request.

10.4 **Exclusions from assignment.** The assignment in Clause 10.3 does not apply to: (a) Provider Pre-existing IP or Provider Tools, whether or not incorporated in a Deliverable; (b) third-party materials, including open-source software, incorporated in a Deliverable; or (c) any Deliverable that an SOW expressly states is to be licensed rather than assigned.

10.5 **Non-lapse.** The Parties agree that the assignment in Clause 10.3 shall not be deemed to lapse by reason of the Customer not exercising the rights assigned within one (1) year of the assignment, and that the Customer's rights are not limited to any period less than the full term of protection or to any territory less than the whole world.

> **Drafting note:** Section 19 of the Copyright Act, 1957 requires an assignment of copyright to be in writing and to identify the work, the rights assigned, their duration and territory; where duration or territory is not stated, it defaults to five years and India respectively. Section 19(4) provides that an assignment lapses if the assignee does not exercise the rights within one year unless the agreement provides otherwise; Clause 10.5 is that "otherwise". Because this assignment takes effect only on payment, the Customer has only the licence in Clause 10.7 until it pays. Customers often ask for assignment on creation; if conceded, keep a right for the Provider to terminate the licence or reclaim title for non-payment, and take advice on how that operates.

10.6 **Moral rights.** The Provider shall procure that each of its Personnel who is an author of any part of the Deliverables waives, or agrees not to assert, to the extent permitted by Applicable Law, his or her moral rights under section 57 of the Copyright Act, 1957 (or any equivalent rights in any jurisdiction) in respect of the Deliverables, so as to permit the Customer to use, modify and adapt the Deliverables without attribution.

10.7 **Licence of Provider Pre-existing IP and Provider Tools.** To the extent that any Provider Pre-existing IP or Provider Tools are incorporated into, or are necessary for the use of, a Deliverable, the Provider grants to the Customer and its Affiliates, with effect from delivery of that Deliverable, a non-exclusive, worldwide, royalty-free, non-transferable (except together with the Deliverable under Clause 24.3) licence to use, copy, modify and maintain that Provider Pre-existing IP and those Provider Tools solely as part of, and for the purpose of using, the Deliverable for the Customer's and its Affiliates' internal business purposes. Until payment in full of the Fees for the relevant Deliverable, this licence and the Customer's right to use the Deliverable are revocable on written notice if the Customer fails to pay undisputed Fees when due; on such payment, this licence becomes perpetual and irrevocable. The Customer shall not sell, sublicense on a standalone basis or commercialise any Provider Pre-existing IP or Provider Tools separately from the Deliverable.

10.8 **Third-party and open-source materials.** The Provider shall not incorporate third-party materials into any Deliverable except as specified in the SOW or with the Customer's prior written approval (email sufficing). The Provider shall identify in each Deliverable or its documentation any open-source software included, and shall not, without the Customer's prior written approval, incorporate any open-source software licensed under terms that would require the Customer to disclose or license its own proprietary source code. Third-party materials are licensed to the Customer on the terms of their respective licences.

10.9 **Know-how.** Subject to Clause 11, nothing in this Agreement prevents either Party from using the general skills, knowledge, experience, ideas, concepts and techniques retained in the unaided memory of its Personnel, provided that this does not permit the use or disclosure of the other Party's Confidential Information or infringe the other Party's Intellectual Property Rights.

10.10 **Further assurance.** Each Party shall, at the other Party's reasonable request and expense, execute such documents and do such things as may be reasonably necessary to perfect or record the rights granted under this Clause 10.

## 11. Confidentiality

11.1 **Definition.** **"Confidential Information"** means all information, in any form, disclosed by or on behalf of a Party (the **"Discloser"**) to the other Party (the **"Recipient"**) in connection with this Agreement that is marked or identified as confidential or that a reasonable person would understand to be confidential given its nature and the circumstances of disclosure, including the terms of this Agreement, the Customer Materials (in the case of the Customer), the Provider Tools and pricing (in the case of the Provider), and each Party's business plans, technology, source code, customers, finances and personnel.

11.2 **Exceptions.** Confidential Information does not include information that the Recipient can demonstrate: (a) is or becomes publicly available other than through a breach of this Agreement; (b) was lawfully in its possession free of any obligation of confidence before receipt from the Discloser; (c) is lawfully received from a third party without restriction on disclosure and without breach of any obligation of confidence; or (d) is independently developed by it without use of or reference to the Discloser's Confidential Information.

11.3 **Obligations.** The Recipient shall: (a) use the Discloser's Confidential Information only for the purpose of performing its obligations or exercising its rights under this Agreement; (b) not disclose it to any person except as permitted by Clause 11.4; and (c) protect it using at least the same degree of care it uses to protect its own confidential information of a similar nature, and in any event no less than reasonable care.

11.4 **Permitted disclosure.** The Recipient may disclose Confidential Information: (a) to its and its Affiliates' Personnel, professional advisers, auditors, insurers and (in the case of the Provider) Subcontractors who need to know it for the purposes of this Agreement and who are bound by obligations of confidentiality no less protective than this Clause 11, the Recipient remaining responsible for their compliance; (b) to actual or prospective investors, lenders or acquirers who are bound by appropriate confidentiality obligations, limited to the existence and key commercial terms of this Agreement; and (c) to the extent required by Applicable Law, a court, a regulator or a stock exchange, provided that, where lawful, the Recipient gives the Discloser prompt notice and reasonable assistance to seek a protective order, and discloses only what is legally required.

11.5 **Return and destruction.** On termination of this Agreement or on the Discloser's written request, the Recipient shall promptly return or destroy the Discloser's Confidential Information, except that the Recipient may retain copies (a) as required by Applicable Law or its bona fide document retention policy, and (b) in automatic electronic back-ups that are not readily accessible, in each case subject to continuing confidentiality.

11.6 **Duration.** The obligations in this Clause 11 continue during the term of this Agreement and for {{confidentiality_years}} years after its termination or expiry, except that obligations in respect of trade secrets and source code continue for so long as that information remains a trade secret or confidential.

11.7 **Equitable relief.** Each Party acknowledges that damages alone may not be an adequate remedy for breach of this Clause 11, and that the Discloser shall be entitled to seek injunctive or other equitable relief, including interim measures under section 9 of the Arbitration and Conciliation Act, 1996, in addition to any other remedy.

## 12. Data Protection and Information Security

12.1 **Roles.** The Parties acknowledge that, in respect of Customer Personal Data, the Customer will ordinarily be the Data Fiduciary and the Provider will be a Data Processor (as those terms are defined in the DPDP Act) processing Customer Personal Data on behalf of the Customer. Each SOW shall describe the categories of Customer Personal Data and Data Principals and the processing activities involved. Each Party is a Data Fiduciary in respect of the personal data of its own Personnel exchanged for the purposes of contract administration.

12.2 **Data processing agreement.** Before the Provider processes any Customer Personal Data, the Parties shall enter into a data processing agreement substantially in the form of the Parties' agreed data processing agreement (the **"DPA"**), which shall form part of this Agreement. Pending execution of the DPA, Clauses 12.3 to 12.6 shall apply as the minimum terms of processing.

12.3 **Processor obligations.** The Provider shall: (a) process Customer Personal Data only on the documented instructions of the Customer and for the purpose of performing the Services, unless otherwise required by Applicable Law (in which case it shall, where lawful, inform the Customer before processing); (b) ensure that its Personnel authorised to process Customer Personal Data are bound by confidentiality; (c) implement reasonable security safeguards, including appropriate technical and organisational measures, to protect Customer Personal Data against a personal data breach; (d) not engage a sub-processor except in accordance with Clause 9.5; (e) provide reasonable assistance to the Customer, at the Customer's cost where the assistance goes beyond what the Provider makes available to customers generally, to enable the Customer to respond to requests from Data Principals exercising their rights and to comply with its obligations under the DPDP Act; and (f) on termination of the relevant SOW, or on the Customer's earlier request, delete or return Customer Personal Data in accordance with Clause 18.3, unless retention is required by Applicable Law.

12.4 **Personal data breach.** The Provider shall notify the Customer without undue delay, and in any event within {{breach_notice_hours}} hours, after becoming aware of any personal data breach affecting Customer Personal Data, and shall provide such information and assistance as the Customer reasonably requires to investigate and mitigate the breach and to meet its obligations to notify the Data Protection Board of India and affected Data Principals. The Provider shall not notify any regulator or Data Principal in respect of such a breach on behalf of the Customer without the Customer's prior written approval, except where required by Applicable Law.

12.5 **Cyber security incidents.** Each Party shall comply with the directions issued by the Indian Computer Emergency Response Team (**"CERT-In"**) under section 70B of the Information Technology Act, 2000 that apply to it, including the directions dated 28 April 2022 on reporting of cyber incidents within six (6) hours of being noticed and maintenance of logs of ICT systems for a rolling period of one hundred and eighty (180) days. Where an incident affects the Customer's systems or data, the Parties shall coordinate on reporting so that each meets its own obligations.

12.6 **Cross-border transfers.** The Provider shall not transfer Customer Personal Data outside India, or permit access to it from outside India, except: (a) as described in the relevant SOW or DPA; (b) to a country or territory not restricted by the Central Government under the DPDP Act; and (c) in compliance with any sector-specific data localisation requirements notified by the Customer in writing.

> **Drafting note:** The DPDP Act and DPDP Rules, 2025 commence in phases; check which obligations are in force on the date of signing and on each renewal, and until the relevant provisions commence also consider s.43A of the Information Technology Act, 2000 and the 2011 SPDI Rules. Sector regulators (RBI for payment data and regulated entities, SEBI, IRDAI) may impose stricter localisation, outsourcing and audit requirements; if the Customer is a regulated entity, add its outsourcing-policy requirements to the SOW or a schedule. Use the data-processing-agreement template for the DPA.

12.7 **Information security.** The Provider shall maintain an information security programme consistent with Good Industry Practice and, where specified in an SOW, with a recognised standard such as ISO/IEC 27001. The Provider shall comply with any additional security requirements set out in an SOW. The Customer shall be responsible for the security of its own systems, networks and credentials, and for any access it grants to the Provider.

12.8 **Security audit.** Not more than once in any twelve (12) month period (or more frequently following a personal data breach or where required by a regulator of the Customer), the Customer may, on not less than fifteen (15) Business Days' written notice, audit the Provider's compliance with this Clause 12, by itself or through an independent auditor bound by confidentiality, during normal business hours and in a manner that minimises disruption. The Provider may satisfy such a request in the first instance by providing current third-party certifications or audit reports. Each Party shall bear its own costs of an audit, unless the audit reveals a material breach by the Provider, in which case the Provider shall bear the reasonable costs of the audit.

## 13. Warranties

13.1 **Mutual warranties.** Each Party warrants that: (a) it is duly incorporated and validly existing under the laws of its place of incorporation; (b) it has full power and authority to enter into and perform this Agreement; (c) this Agreement has been duly authorised and executed by it and constitutes legal, valid and binding obligations; and (d) entering into and performing this Agreement will not breach any agreement, order or Applicable Law binding on it.

13.2 **Provider warranties.** The Provider warrants that: (a) the Services will be performed in accordance with Clause 3.1; (b) for a period of {{warranty_period_days}} days following acceptance (or deemed acceptance) of a Deliverable (the **"Warranty Period"**), the Deliverable will conform in all material respects to its specification in the SOW; (c) it will use industry-standard measures to ensure that the Deliverables, when delivered, do not contain any virus, malware, time bomb or other code designed to disrupt, damage or provide unauthorised access to any system or data; and (d) to its knowledge, the Deliverables (excluding Customer Materials and third-party materials) will not, when used in accordance with this Agreement, infringe the Intellectual Property Rights of any third party.

13.3 **Remedy for breach of warranty.** If the Customer notifies the Provider in writing during the Warranty Period of a breach of the warranty in Clause 13.2(b), giving reasonable details, the Provider shall, at its own cost and as the Customer's sole and exclusive remedy for that breach, correct the non-conformity or re-perform the relevant Services within a reasonable time; and if the Provider is unable to do so after a reasonable number of attempts, the Customer may terminate the relevant SOW in so far as it relates to the non-conforming Deliverable and recover the Fees paid for it.

13.4 **Exclusions.** The warranties in Clause 13.2 do not apply to the extent that a non-conformity results from: (a) use of a Deliverable other than in accordance with this Agreement, the SOW or its documentation; (b) modification of a Deliverable by any person other than the Provider or its Subcontractors; (c) combination of a Deliverable with any software, hardware or data not supplied or specified by the Provider; (d) Customer Materials, or any Customer Default; or (e) failure of the Customer to implement corrections or updates supplied by the Provider.

13.5 **Disclaimer.** Except as expressly set out in this Agreement, all warranties, conditions and other terms, whether express or implied by statute, custom or otherwise (including any implied terms as to fitness for a particular purpose or merchantability), are excluded to the fullest extent permitted by Applicable Law. The Provider does not warrant that the Deliverables will be error-free or that their operation will be uninterrupted.

## 14. Indemnities

14.1 **Provider indemnity.** The Provider shall indemnify, defend and hold harmless the Customer, its Affiliates and their respective directors, officers and employees from and against all Losses finally awarded against them by a court or arbitral tribunal, or agreed in a settlement approved by the Provider, arising out of any claim, demand or proceeding brought by a third party (a **"Third-Party Claim"**) to the extent that it alleges or arises from:

(a) the Deliverables or Services (excluding Customer Materials and third-party materials) infringing the Intellectual Property Rights of that third party (an **"IP Claim"**);

(b) death or personal injury, or loss of or damage to tangible property, caused by the negligence or wilful misconduct of the Provider or its Personnel; or

(c) any failure by the Provider to pay wages, statutory dues or social security contributions to or in respect of its Personnel, or any claim by any of its Personnel that he or she is an employee of the Customer.

14.2 **IP Claim remedies.** If any Deliverable or Service becomes, or in the Provider's reasonable opinion is likely to become, the subject of an IP Claim, the Provider may, at its option and expense: (a) procure for the Customer the right to continue using it; (b) modify or replace it so that it is non-infringing without materially reducing its functionality; or (c) if neither (a) nor (b) is commercially reasonable, require the return of the affected Deliverable and refund the Fees paid for it, less a reasonable amount for use calculated on a straight-line basis over three (3) years from acceptance.

14.3 **Exclusions from IP indemnity.** The Provider shall have no liability under Clause 14.1(a) to the extent that an IP Claim arises from: (a) Customer Materials, or the Provider's compliance with specifications, designs or instructions provided by the Customer; (b) modification of the Deliverable by any person other than the Provider or its Subcontractors; (c) combination of the Deliverable with any software, hardware, data or process not supplied or specified by the Provider, where the claim would not have arisen but for the combination; (d) use of a version of a Deliverable after the Provider has supplied a non-infringing version; or (e) use of the Deliverable other than in accordance with this Agreement.

14.4 **Customer indemnity.** The Customer shall indemnify, defend and hold harmless the Provider, its Affiliates and their respective directors, officers and employees from and against all Losses finally awarded against them, or agreed in a settlement approved by the Customer, arising out of any Third-Party Claim to the extent that it alleges or arises from: (a) the Customer Materials, or the Provider's use of them in accordance with this Agreement, infringing the Intellectual Property Rights or other rights of a third party or breaching Applicable Law; (b) any matter excluded from the Provider's indemnity under Clause 14.3(a), (c) or (e); or (c) death or personal injury, or loss of or damage to tangible property, caused by the negligence or wilful misconduct of the Customer or its Personnel.

14.5 **Procedure.** A Party seeking indemnification (the **"Indemnified Party"**) shall: (a) notify the other Party (the **"Indemnifying Party"**) in writing promptly after becoming aware of the Third-Party Claim (but a delay in notice relieves the Indemnifying Party of its obligations only to the extent it is prejudiced by the delay); (b) allow the Indemnifying Party sole control of the defence and settlement of the claim, provided that the Indemnifying Party shall not settle any claim in a manner that admits fault on behalf of, or imposes any non-monetary obligation on, the Indemnified Party without its prior written consent (not to be unreasonably withheld); (c) provide reasonable cooperation at the Indemnifying Party's expense; and (d) not make any admission or settlement without the Indemnifying Party's prior written consent. The Indemnified Party may participate in the defence with counsel of its own choice at its own expense. Each Indemnified Party shall take reasonable steps to mitigate its Losses.

14.6 **Exclusive remedy.** This Clause 14 states each Party's sole liability, and the other Party's exclusive remedy, for Third-Party Claims of the kinds described in it.

> **Drafting note:** Indemnities are recognised under ss.124–125 of the Indian Contract Act, 1872, and Indian courts have held that an indemnity holder may call on the indemnifier once liability is absolute, even before payment. This template limits indemnities to third-party claims (rather than all losses arising from a breach) to keep them consistent with the liability cap. Customers often seek an indemnity for breach of data protection obligations; if conceded, limit it to third-party claims and regulatory proceedings and make it subject to the Super-Cap in Clause 15.3.

## 15. Limitation of Liability

15.1 **Unlimited liability.** Nothing in this Agreement limits or excludes either Party's liability for: (a) death or personal injury caused by its negligence; (b) fraud or fraudulent misrepresentation; (c) wilful misconduct, gross negligence or wilful abandonment of the Services; (d) the Customer's obligation to pay Fees and other amounts properly due; or (e) any liability that cannot be limited or excluded under Applicable Law.

15.2 **General cap.** Subject to Clauses 15.1 and 15.3, each Party's total aggregate liability arising out of or in connection with this Agreement and all SOWs, whether in contract, tort (including negligence), breach of statutory duty, under any indemnity or otherwise, shall not exceed an amount equal to the total Fees paid and payable by the Customer under this Agreement in the twelve (12) months immediately preceding the event giving rise to the most recent claim (or, if the event occurs in the first twelve (12) months after the Effective Date, the Fees reasonably estimated to be payable in the first twelve (12) months under all SOWs then signed) (the **"General Cap"**).

15.3 **Super-cap.** Subject to Clause 15.1, each Party's total aggregate liability arising out of or in connection with: (a) breach of Clause 11 (Confidentiality); (b) breach of Clause 12 (Data Protection and Information Security) or the DPA, including any personal data breach affecting Customer Personal Data caused by the Provider's breach; and (c) its obligations under Clause 14.1(a) (IP Claims) or Clause 14.4(a), shall not exceed in aggregate {{super_cap_multiple}} times the Annual Contract Value (the **"Super-Cap"**). Amounts paid under the Super-Cap shall not count towards or erode the General Cap, and amounts paid under the General Cap shall not erode the Super-Cap.

> **Drafting note:** A separate super-cap of 2x to 5x annual contract value for data breach, confidentiality and IP infringement is market practice in Indian technology deals. Regulatory penalties under the DPDP Act are significant (the Schedule to the Act provides for penalties of up to ₹250 crore for failure to take reasonable security safeguards; check current amounts), but penalties imposed on the Customer as Data Fiduciary are not automatically recoverable from the Provider; say expressly if the Parties intend that regulatory fines caused by the Provider's breach are recoverable, and consider whether recovery of a penalty is permissible as a matter of public policy [verify]. Calibrate the multiple to available cyber and professional indemnity cover.

15.4 **Excluded losses.** Subject to Clause 15.1, neither Party shall be liable to the other, whether in contract, tort (including negligence), breach of statutory duty or otherwise, for any: (a) loss of profits, revenue, business, contracts or anticipated savings; (b) loss of goodwill or reputation; (c) loss or corruption of data, except to the extent of the reasonable cost of restoring it from the most recent back-up; or (d) indirect, special or consequential loss or damage, or any loss that did not arise in the usual course of things from the breach and that the Parties did not know, when they made this Agreement, to be likely to result from it; in each case whether or not foreseeable or advised of the possibility of such loss.

> **Drafting note:** Section 73 of the Indian Contract Act, 1872 already denies compensation for remote and indirect loss; Clause 15.4 records the Parties' agreement on what is excluded so that there is less room for argument. Courts read exclusion clauses strictly against the party relying on them, so keep the list specific.

15.5 **Service credits.** Any service credits payable under an SOW shall count towards the General Cap, and shall be the Customer's sole financial remedy for the service level failure to which they relate, without prejudice to any right to terminate expressly provided in the SOW.

15.6 **Mitigation and contribution.** Each Party shall take reasonable steps to mitigate any Losses for which it may claim against the other. A Party's liability shall be reduced to the extent that the Losses were caused or contributed to by the other Party or its Personnel.

15.7 **Time limit for claims.** To the extent permitted by Applicable Law, neither Party may bring a claim under this Agreement more than three (3) years after the date on which the cause of action arose.

> **Drafting note:** Section 28 of the Indian Contract Act, 1872 (as amended in 1997) renders void agreements that extinguish rights or limit the time to enforce them. A contractual period shorter than the limitation period under the Limitation Act, 1963 (generally three years for contract claims) is at risk. Clause 15.7 therefore mirrors the statutory period; do not shorten it.

## 16. Insurance

16.1 During the term of this Agreement and for at least one (1) year afterwards, the Provider shall maintain, with reputable insurers authorised by the Insurance Regulatory and Development Authority of India (or, for foreign cover, a reputable international insurer), the following insurance policies with at least the following limits of indemnity per claim or in the aggregate: (a) professional indemnity or technology errors and omissions insurance of not less than {{pi_insurance_amount}}; (b) cyber liability insurance of not less than {{cyber_insurance_amount}}; (c) commercial general or public liability insurance of not less than {{cgl_insurance_amount}}; and (d) employee compensation insurance (or coverage under the Employees' State Insurance scheme, as applicable) in respect of its Personnel as required by the Code on Social Security, 2020.

16.2 The Provider shall, on the Customer's reasonable request (not more than once per year), provide certificates of insurance evidencing the policies in Clause 16.1. The maintenance of insurance does not limit or relieve the Provider of any liability under this Agreement.

> **Drafting note:** Calibrate insurance limits to the size of the engagement and the liability caps in Clause 15; there is little point in a super-cap that is several times the available cyber cover. Startups may not yet carry all these policies; if so, reduce or delete items rather than sign a promise that cannot be kept.

## 17. Term and Termination

17.1 **Term.** This Agreement commences on the Effective Date and continues for an initial term of {{initial_term_years}} years, after which it automatically renews for successive periods of one (1) year each, unless either Party gives the other at least ninety (90) days' written notice of non-renewal before the end of the then-current term. If this Agreement expires while any SOW remains in force, this Agreement shall continue to apply to that SOW until it expires or is terminated.

17.2 **SOW term.** Each SOW commences on the date stated in it and continues until the Services under it are completed or it is terminated in accordance with this Agreement.

17.3 **Termination for convenience by Customer.** The Customer may terminate any SOW for convenience by giving the Provider not less than {{convenience_notice_days}} days' written notice. In that case the Customer shall pay the Provider: (a) all Fees for Services performed and expenses incurred up to the effective date of termination (for fixed-price milestones, pro-rated on the basis of work completed); (b) any non-cancellable commitments reasonably entered into by the Provider for the SOW; and (c) any termination fee specified in the SOW.

> **Drafting note:** Provider-leaning drafting gives only the Customer a right to terminate for convenience, and protects the Provider through payment for work done and committed costs. If the Provider has hired or ring-fenced a dedicated team, consider a termination fee in the SOW reflecting a reasonable pre-estimate of the Provider's redeployment costs (framed to satisfy s.74 of the Indian Contract Act, 1872).

17.4 **Termination for cause.** Either Party may terminate this Agreement or any SOW with immediate effect by written notice to the other Party if the other Party:

(a) commits a material breach of this Agreement or that SOW that is incapable of remedy, or that is capable of remedy but is not remedied within {{cure_period_days}} days after receipt of written notice specifying the breach and requiring its remedy;

(b) fails to pay any undisputed amount due within {{cure_period_days}} days after receipt of written notice of non-payment (this ground being available to the Provider only); or

(c) has an order made or resolution passed for its winding up (other than for a solvent reorganisation), has a corporate insolvency resolution process admitted against it under the Insolvency and Bankruptcy Code, 2016, has a receiver, liquidator, interim resolution professional or administrator appointed over all or a substantial part of its assets, or ceases or threatens to cease carrying on business.

> **Drafting note:** Once a corporate insolvency resolution process is admitted, the moratorium under the Insolvency and Bankruptcy Code, 2016, and (for critical goods and services) s.14(2A) [verify], may restrict termination of supplies to the corporate debtor. Ipso facto termination rights such as Clause 17.4(c) may therefore not be fully enforceable against a company in insolvency; take advice before relying on them.

17.5 **Termination of Agreement on breach of SOW.** A termination of an SOW does not by itself terminate this Agreement or any other SOW, unless the termination notice states that it is given in respect of a breach that also entitles the terminating Party to terminate this Agreement.

## 18. Consequences of Termination

18.1 **Payment.** On termination or expiry of an SOW for any reason, the Customer shall pay to the Provider all Fees and expenses due for Services performed up to the effective date of termination, and any amounts payable under Clause 17.3 where applicable. Where the Customer terminates under Clause 17.4, it shall be entitled to recover any Fees paid in advance for Services not performed.

18.2 **Deliverables.** On termination of an SOW (other than by the Provider under Clause 17.4), the Provider shall deliver to the Customer all completed Deliverables and, on request, all work in progress, in each case to the extent paid for, and Clause 10 shall apply to them.

18.3 **Return of materials and data.** Within thirty (30) days after termination or expiry of an SOW, each Party shall return or destroy the other Party's Confidential Information and materials in accordance with Clause 11.5, and the Provider shall, at the Customer's election, return Customer Personal Data in a commonly used format or securely delete it and certify deletion in writing, subject to any retention required by Applicable Law.

18.4 **Transition assistance.** If requested by the Customer in writing before, or within thirty (30) days after, the effective date of termination or expiry of an SOW (other than termination by the Provider under Clause 17.4), the Provider shall provide such assistance as the Customer reasonably requires for the orderly transfer of the Services to the Customer or a replacement provider (the **"Transition Assistance"**) for a period of up to ninety (90) days (the **"Transition Period"**), including: (a) delivering an exit plan within ten (10) Business Days of the request; (b) delivering all Deliverables, documentation, source code (to the extent assigned or licensed to the Customer), configuration details and runbooks in the Provider's possession; (c) answering reasonable questions from the Customer or the replacement provider; and (d) continuing to perform the Services during the Transition Period on the terms of the relevant SOW. Transition Assistance shall be charged at the rates in the SOW or, if none, the Provider's then-current rates, and is conditional on the Customer having paid all undisputed Fees then due. The Provider shall not be obliged to disclose its Confidential Information (including Provider Tools source code) to a replacement provider that is its competitor, except under a written confidentiality undertaking in favour of the Provider.

18.5 **Survival.** Termination or expiry does not affect any rights or liabilities accrued before termination. Clauses 1, 7 to 8 (in respect of amounts accrued), 10, 11, 12 (for so long as the Provider holds Customer Personal Data), 14, 15, 18, 20, 22, 23 and 24, and any other clause which by its nature is intended to survive, shall survive termination or expiry.

## 19. Force Majeure

19.1 **Definition.** **"Force Majeure Event"** means any event or circumstance beyond the reasonable control of the affected Party, including acts of God, flood, earthquake, cyclone, fire, epidemic or pandemic and related governmental restrictions, war, hostilities, terrorism, riot, civil commotion, sabotage, nationwide or statewide strikes (other than those of the affected Party's own Personnel), action by any governmental authority, and failure of public utilities or telecommunication networks, but excluding any lack of funds or the occurrence of a cyber-attack that would have been prevented by security measures consistent with Good Industry Practice.

19.2 **Relief.** A Party affected by a Force Majeure Event shall not be in breach of this Agreement, or liable for any delay or failure in performing its obligations (other than payment obligations), to the extent that the delay or failure is caused by the Force Majeure Event, provided that it: (a) notifies the other Party promptly, and in any event within five (5) Business Days, of the Force Majeure Event and its likely effect; (b) uses reasonable efforts to mitigate its effect, including by implementing any business continuity plan required by the SOW; and (c) resumes performance as soon as reasonably possible.

19.3 **Prolonged force majeure.** If a Force Majeure Event prevents a Party from performing all or a material part of its obligations under an SOW for a continuous period of more than sixty (60) days, either Party may terminate that SOW by written notice, and Clause 18 shall apply as if the SOW had been terminated by the Customer for convenience (but without any termination fee).

> **Drafting note:** Absent a force majeure clause, a party must rely on frustration under s.56 of the Indian Contract Act, 1872, which Indian courts apply narrowly. A specific clause is therefore valuable; tailor the list of events and the termination period to the Services.

## 20. Non-solicitation

20.1 During the term of each SOW and for {{non_solicit_months}} months after its termination or expiry, neither Party shall, without the prior written consent of the other Party, directly or indirectly solicit for employment or engagement any employee of the other Party who was directly involved in the performance or receipt of the Services under that SOW during the preceding six (6) months.

20.2 Clause 20.1 does not restrict: (a) general recruitment advertisements or job postings not specifically targeted at the other Party's employees, or hiring any person who responds to them; (b) engaging any person whose employment with the other Party ended at least six (6) months earlier; or (c) engaging any person who first approaches the hiring Party on his or her own initiative.

> **Drafting note:** Section 27 of the Indian Contract Act, 1872 renders void agreements in restraint of trade. Courts have generally upheld non-solicitation of employees between businesses during the contract term, but are more cautious about post-term restrictions, and a clause that in effect prevents an individual from taking employment may fail. Keep the post-term period short and the class of employees narrow. Avoid a fixed "poaching fee" unless it is a genuine pre-estimate of loss (s.74).

## 21. Anti-bribery and Compliance

21.1 **Anti-bribery.** Each Party shall, and shall ensure that its Personnel and anyone acting on its behalf in connection with this Agreement shall: (a) comply with the Prevention of Corruption Act, 1988 and all other applicable anti-bribery and anti-corruption laws; (b) not offer, promise, give, request or accept any undue advantage, bribe, kickback or facilitation payment to or from any person, including any public servant, to obtain or retain business or any advantage in connection with this Agreement; and (c) maintain adequate procedures designed to prevent such conduct.

> **Drafting note:** Following the 2018 amendments, s.9 of the Prevention of Corruption Act, 1988 [verify] makes a commercial organisation liable where a person associated with it gives an undue advantage to a public servant, with a defence of having adequate procedures in place. If either Party is subject to foreign anti-bribery laws (such as the US Foreign Corrupt Practices Act or the UK Bribery Act 2010), add them here.

21.2 **Compliance with laws.** Each Party shall comply with all Applicable Law in the performance of its obligations under this Agreement, including laws relating to export control and sanctions to the extent applicable.

21.3 **Export control and sanctions.** Neither Party shall export, re-export or transfer any Deliverable, software, technology or technical data received under this Agreement in breach of the Foreign Trade (Development and Regulation) Act, 1992 and the export control lists notified under it (including the SCOMET list), or of any other export control or sanctions law applicable to that Party. Each Party represents that neither it nor any of its Affiliates is the subject of sanctions that would make performance of this Agreement unlawful for the other Party.

21.4 **Foreign exchange.** Where any Party is resident outside India, or any payment under this Agreement is to be made in foreign currency or to or from an account outside India, each Party shall comply with the Foreign Exchange Management Act, 1999 and the rules, regulations and directions made under it, and the Parties shall cooperate in furnishing any documents (including invoices and tax residency certificates) that an authorised dealer bank reasonably requires to process the remittance.

> **Drafting note:** Clauses 21.3 and 21.4 matter only for cross-border engagements. For a foreign Provider, check withholding tax under the applicable double taxation avoidance agreement (the Provider will need a tax residency certificate and other prescribed documents), GST reverse charge on import of services, and whether advance payments require bank documentation. Encryption and certain dual-use software may be SCOMET-controlled [verify the current SCOMET category]; if the Provider is subject to US export controls (EAR) add them expressly.

21.5 **Conflicts of interest.** The Provider shall promptly notify the Customer of any actual or potential conflict of interest that may affect the Provider's performance of the Services.

21.6 **Termination for breach.** A breach of Clause 21.1 shall be a material breach incapable of remedy for the purposes of Clause 17.4(a).

## 22. Dispute Resolution

22.1 **Escalation.** If any dispute, controversy or claim arises out of or in connection with this Agreement or any SOW, including any question regarding its existence, validity, interpretation, performance or termination (a **"Dispute"**), either Party may give the other written notice of the Dispute. The Parties' project managers shall meet within ten (10) Business Days of the notice to try to resolve it. If they cannot, the Dispute shall be referred to a senior executive of each Party with authority to settle it, who shall meet (in person or virtually) to try to resolve it. If the Dispute is not resolved within {{escalation_days}} days of the original notice, either Party may refer it to arbitration under Clause 22.2.

22.2 **Arbitration.** Any Dispute not resolved under Clause 22.1 shall be referred to and finally resolved by arbitration in accordance with the Arbitration and Conciliation Act, 1996 (the **"Arbitration Act"**), as follows:

(a) the arbitral tribunal shall consist of a sole arbitrator appointed jointly by the Parties; if the Parties fail to agree on the arbitrator within thirty (30) days after a written request by either Party to do so, the arbitrator shall be appointed in accordance with section 11 of the Arbitration Act [OPTION A: by the court of competent jurisdiction / OPTION B: by the [name of arbitral institution] in accordance with its rules for the time being in force, which rules shall then govern the arbitration];

(b) neither Party shall have the right unilaterally to appoint, nominate or curate a panel of arbitrators from which the other Party must choose, and any person appointed as arbitrator shall be independent and impartial and shall make the disclosures required by section 12 of the Arbitration Act;

(c) the juridical seat of arbitration shall be {{arbitration_seat}}, India, and the venue for hearings shall be {{arbitration_venue}}, India, provided that the tribunal may hold hearings, in whole or in part, by video conference or at any other place it considers appropriate without changing the seat;

(d) the language of the arbitration shall be English, and the substantive law of the contract shall be the laws of India;

(e) the arbitration shall be confidential in accordance with section 42A of the Arbitration Act; and

(f) the award shall be in writing, reasoned, final and binding on the Parties, and the Parties agree to carry out the award without delay.

> **Drafting note:** State the seat and the venue separately and clearly; the seat determines which courts have supervisory jurisdiction (BGS SGS Soma JV v. NHPC Ltd, Supreme Court, 2019). A clause that lets one Party (or its officer) unilaterally appoint the sole arbitrator, or confines the other Party to a panel curated by one side, is invalid (Perkins Eastman Architects DPC v. HSCC (India) Ltd, 2019; Central Organisation for Railway Electrification v. ECI-SPIC-SMO-MCML (JV), Constitution Bench, 8 November 2024), hence paragraph (b). For institutional arbitration choose Option B and name an institution such as the Mumbai Centre for International Arbitration (MCIA), the Delhi International Arbitration Centre (DIAC) or the India International Arbitration Centre (IIAC), and adopt that institution's model clause. Note the time limits for the award under s.29A and the expedited procedure under s.29B.

22.3 **Supervisory jurisdiction and interim relief.** The courts at {{arbitration_seat}} shall have exclusive supervisory jurisdiction over the arbitration, including over applications under sections 9, 11 (where applicable), 27, 29A, 34 and 37 of the Arbitration Act. Nothing in this Clause 22 prevents a Party from seeking urgent interim relief, before or during the arbitration, from those courts or from the arbitral tribunal under section 17 of the Arbitration Act.

22.4 **Continued performance.** Pending resolution of a Dispute, the Parties shall continue to perform their respective obligations under this Agreement, except to the extent the Dispute makes performance impossible and subject to the Provider's rights under Clause 8.6.

## 23. Governing Law

23.1 This Agreement and any Dispute or non-contractual obligation arising out of or in connection with it shall be governed by and construed in accordance with the laws of India.

23.2 Subject to Clause 22, the courts at {{governing_city}} shall have exclusive jurisdiction over any matter arising out of or in connection with this Agreement that is not capable of being referred to arbitration. Where any such matter is a commercial dispute within the meaning of the Commercial Courts Act, 2015 and no urgent interim relief is sought, the Parties shall first exhaust pre-institution mediation under section 12A of that Act.

> **Drafting note:** Pre-institution mediation under s.12A of the Commercial Courts Act, 2015 is mandatory for commercial suits not seeking urgent interim relief (Patil Automation Pvt Ltd v. Rakheja Engineers Pvt Ltd, Supreme Court, 2022). It does not apply to arbitration, but is relevant to recovery suits (for example a summary suit under Order XXXVII of the Code of Civil Procedure) if the arbitration clause is waived. Use the same city for the arbitral seat and for court jurisdiction to avoid arguments about which court supervises the arbitration. For international customers, consider whether an Indian-seated award will need to be enforced abroad (India is a party to the New York Convention) and whether a foreign seat is commercially necessary.

## 24. General

24.1 **Notices.** Any notice under this Agreement shall be in writing in English and shall be delivered by hand, sent by registered post or reputable courier to the address of the receiving Party set out at the beginning of this Agreement, or sent by email to the address below (or such other address as a Party notifies to the other in accordance with this Clause):

(a) Provider: {{company_email}}, marked for the attention of the signatory named in the execution block below;

(b) Customer: {{counterparty_email}}, marked for the attention of the signatory named in the execution block below.

A notice is deemed received: if delivered by hand, on delivery; if sent by registered post or courier, on the third Business Day after posting; and if sent by email, at the time of transmission, provided that no automated message indicating non-delivery is received and, in the case of a notice of breach, termination or Dispute, a copy is also sent by one of the other methods within two (2) Business Days. Operational communications may be exchanged between project managers by email.

24.2 **Entire agreement.** This Agreement, together with the SOWs and the DPA, constitutes the entire agreement between the Parties relating to its subject matter and supersedes all prior agreements, proposals, representations and understandings, whether written or oral. Each Party acknowledges that it has not relied on any statement, representation or warranty not expressly set out in this Agreement. Nothing in this Clause limits liability for fraud.

24.3 **Assignment.** Neither Party may assign, transfer or novate any of its rights or obligations under this Agreement without the prior written consent of the other Party (not to be unreasonably withheld or delayed), except that either Party may, on written notice, assign this Agreement in its entirety to an Affiliate or to a successor in connection with a merger, amalgamation, demerger or sale of all or substantially all of the business to which this Agreement relates, provided the assignee is not a competitor of the other Party and agrees in writing to be bound by this Agreement. The Provider may assign its right to receive payment to a bank or financial institution, including through the Trade Receivables Discounting System (TReDS).

24.4 **Change of Control.** Each Party shall notify the other in writing within thirty (30) days after it undergoes a Change of Control. If the Provider undergoes a Change of Control as a result of which it becomes controlled by a direct competitor of the Customer, the Customer may, within ninety (90) days after receiving that notice, terminate this Agreement and any SOW by giving not less than sixty (60) days' written notice, without liability for any termination fee under Clause 17.3(c) but subject to Clause 18.1. A Change of Control shall not otherwise constitute an assignment or entitle either Party to terminate this Agreement.

24.5 **Amendment.** No amendment to this Agreement shall be effective unless it is in writing, refers to this Agreement and is signed by the authorised representatives of both Parties.

24.6 **Waiver.** No failure or delay by a Party in exercising any right or remedy shall operate as a waiver of it, and no single or partial exercise of any right shall prevent its further exercise.

24.7 **Severability.** If any provision of this Agreement is held invalid, illegal or unenforceable, it shall be modified to the minimum extent necessary to make it valid and enforceable, or if that is not possible, deleted, and the remaining provisions shall continue in full force and effect.

24.8 **No third-party rights.** Except for the rights of indemnified persons under Clause 14, nothing in this Agreement confers any right on any person who is not a Party.

24.9 **Publicity.** Neither Party shall use the other Party's name, logo or trade marks, or issue any press release or public announcement relating to this Agreement, without the other Party's prior written consent, except that the Provider may identify the Customer by name (but not logo) in lists of its customers unless the Customer objects in writing.

24.10 **Remedies cumulative.** Except as expressly provided in this Agreement, the rights and remedies under this Agreement are in addition to, and not exclusive of, any rights or remedies provided by law.

24.11 **Costs.** Each Party shall bear its own costs incurred in negotiating, preparing and executing this Agreement and each SOW.

24.12 **Counterparts and electronic execution.** This Agreement and any SOW may be executed in any number of counterparts, each of which is an original and all of which together constitute one instrument. The Parties agree that this Agreement and any SOW may be executed by electronic signature or Aadhaar-based e-sign in accordance with the Information Technology Act, 2000, and that such execution shall be as valid as execution in ink. Each Party shall retain the audit trail and certificate generated by the electronic signature platform, and shall cooperate in furnishing any certificate required under section 63 of the Bharatiya Sakshya Adhiniyam for the admission of this Agreement or any electronic record relating to it in evidence.

24.13 **Stamp duty.** Stamp duty payable on this Agreement and on each SOW (where applicable) shall be borne by {{stamp_duty_payer}}. The Parties shall cooperate to ensure that this Agreement is duly stamped in accordance with the applicable stamp law, by e-stamping or otherwise, before or at the time of execution.

> **Drafting note:** An unstamped or insufficiently stamped instrument is not void, but it is inadmissible in evidence and cannot be acted upon until the deficit duty and penalty are paid; the arbitration agreement within it remains valid and enforceable at the referral stage (In re: Interplay between Arbitration Agreements under the Arbitration and Conciliation Act, 1996 and the Indian Stamp Act, 1899, seven-judge bench of the Supreme Court, 13 December 2023). Stamp before or at execution to avoid penalty and delay when enforcing.

24.14 **Further assurance.** Each Party shall execute such documents and do such things as the other Party may reasonably require to give full effect to this Agreement.

## Execution

IN WITNESS WHEREOF the Parties have caused this Agreement to be executed by their duly authorised representatives on the Effective Date.

| For and on behalf of **{{company_name}}** (Provider) | For and on behalf of **{{counterparty_name}}** (Customer) |
|---|---|
| Signature: ______________________ | Signature: ______________________ |
| Name: {{company_signatory_name}} | Name: {{counterparty_signatory_name}} |
| Designation: {{company_signatory_title}} | Designation: {{counterparty_signatory_title}} |
| Date: ______________________ | Date: ______________________ |
| Place: ______________________ | Place: ______________________ |

> **Drafting note:** Confirm that each signatory is authorised, for a company typically by a board resolution or a power of attorney under s.179 of the Companies Act, 2013 or the company's delegation of authority. A common seal is no longer mandatory for companies but may be required by the articles of some older companies.

## Schedule 1 – Form of Statement of Work

Each SOW shall be substantially in the form of the statement-of-work template maintained in this repository and shall contain, at a minimum:

1. A reference to this Agreement and its date, and a statement that the SOW is governed by it.
2. The SOW number, commencement date and expected completion date.
3. Project overview and objectives.
4. Scope of Services and matters expressly out of scope.
5. Deliverables, including for each Deliverable whether it is subject to acceptance and whether it is assigned or licensed.
6. Milestones and timetable.
7. Acceptance criteria and test procedures.
8. Fees, payment schedule, rate card (for time and materials work) and expense arrangements.
9. Key Personnel and governance (project managers, steering committee, reporting).
10. Assumptions, dependencies and Customer responsibilities.
11. Any service levels (by reference to a service level schedule).
12. Description of Customer Personal Data to be processed (if any), the Parties' roles under the DPDP Act and any permitted locations of processing.
13. Any variations to this Agreement, identified by clause number in accordance with Clause 2.4.
14. Signatures of authorised representatives of both Parties.

## Schedule 2 – Change Request Form

| Item | Details |
|---|---|
| Change Request number | |
| SOW reference | |
| Date raised | |
| Raised by (name, Party) | |
| Description of the change requested | |
| Reason for the change | |
| Impact on scope and Deliverables | |
| Impact on timetable and milestones | |
| Impact on acceptance criteria and service levels | |
| Impact on Fees (fixed amount or estimated effort × rate) | |
| Impact on Customer responsibilities and dependencies | |
| Impact on personal data processing (if any) | |
| Other terms | |
| Validity of this proposal (date) | |

Approved for the Provider: Name __________________ Designation __________________ Signature __________________ Date __________

Approved for the Customer: Name __________________ Designation __________________ Signature __________________ Date __________

## Schedule 3 – Governance and Escalation

| Level | Provider | Customer | Frequency of meetings |
|---|---|---|---|
| Level 1 – Project managers | [Name, email] | [Name, email] | Weekly or as set out in the SOW |
| Level 2 – Delivery heads / programme sponsors | [Name, email] | [Name, email] | Monthly |
| Level 3 – Senior executives | [Name, email] | [Name, email] | Quarterly, and on escalation under Clause 22.1 |

Each Party may change its representatives by written notice (email sufficing) to the other Party's Level 1 representative.
