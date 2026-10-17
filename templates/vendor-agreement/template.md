---
id: vendor-agreement
title: Vendor Agreement
category: commercial
summary: >-
  Customer-leaning procurement framework for buying goods and/or services from a supplier through purchase orders, with MSMED, Labour Code and DPDP terms.
audience: [startup, sme, enterprise]
jurisdiction: IN
governing_laws:
  - Indian Contract Act, 1872
  - Sale of Goods Act, 1930
  - Micro, Small and Medium Enterprises Development Act, 2006
  - Central Goods and Services Tax Act, 2017
  - Code on Wages, 2019
  - Code on Social Security, 2020
  - Occupational Safety, Health and Working Conditions Code, 2020
  - Digital Personal Data Protection Act, 2023
  - Prevention of Corruption Act, 1988
  - Arbitration and Conciliation Act, 1996
document_type: agreement
parties: 2
stamp_duty: required
e_signature: permitted
version: 0.1.0
last_updated: 2026-10-16
review_status: draft
related: [master-services-agreement, data-processing-agreement, mutual-nda, service-level-agreement, statement-of-work]
fields:
  - key: effective_date
    label: Effective date of this Agreement
    example: 1 November 2026
  - key: company_name
    label: Customer's (buyer's) full legal name
    example: Acme Retail Private Limited
  - key: company_cin
    label: Customer's Corporate Identity Number (CIN) or LLPIN
    example: U52100DL2019PTC345678
  - key: company_address
    label: Customer's registered office address
    example: Plot 14, Okhla Industrial Area Phase II, New Delhi 110020
  - key: counterparty_name
    label: Supplier's full legal name
    example: Shree Packaging Industries Private Limited
  - key: counterparty_address
    label: Supplier's registered office or principal place of business
    example: Plot 22, MIDC Bhosari, Pune 411026, Maharashtra
  - key: counterparty_gstin
    label: Supplier's GSTIN
    example: 27AAACS1234F1Z5
  - key: po_acceptance_days
    label: Business days within which Supplier must accept or reject a Purchase Order
    example: "2"
  - key: delay_ld_percent
    label: Liquidated damages for late delivery, per week (percentage of value of delayed item)
    example: "0.5"
  - key: delay_ld_cap_percent
    label: Maximum liquidated damages for delay (percentage of value of the relevant Purchase Order)
    example: "10"
  - key: inspection_days
    label: Days after delivery within which Customer may inspect and reject Goods
    example: "15"
  - key: warranty_months
    label: Warranty period for Goods (months from acceptance)
    example: "12"
  - key: payment_days
    label: Days from receipt of valid invoice (or acceptance, if later) within which Customer pays
    example: "45"
  - key: audit_notice_days
    label: Business days' notice for an audit
    example: "10"
  - key: confidentiality_years
    label: Years for which confidentiality survives termination
    example: "5"
  - key: breach_notice_hours
    label: Hours within which Supplier notifies Customer of a personal data breach
    example: "24"
  - key: supplier_cap
    label: Supplier's general liability cap
    example: "the greater of (a) ₹ 1,00,00,000 (INR 1 crore) and (b) two (2) times the total Charges paid and payable in the twelve (12) months preceding the claim"
  - key: super_cap_multiple
    label: Multiple of annual Charges for the Supplier's super-cap on data, confidentiality and IP
    example: three (3)
  - key: insurance_amount
    label: Minimum public/product liability insurance cover
    example: "₹ 5,00,00,000 (INR 5 crore)"
  - key: initial_term_years
    label: Initial term in years
    example: "3"
  - key: convenience_notice_days
    label: Days' notice for Customer's termination for convenience
    example: "30"
  - key: cure_period_days
    label: Days allowed to cure a material breach
    example: "30"
  - key: escalation_days
    label: Days for senior-executive negotiation before arbitration
    example: "30"
  - key: arbitration_seat
    label: Seat of arbitration (city)
    example: New Delhi
  - key: arbitration_venue
    label: Venue for hearings
    example: New Delhi
  - key: governing_city
    label: City whose courts have jurisdiction for non-arbitrable matters
    example: New Delhi
  - key: company_email
    label: Customer's email address for notices
    example: procurement.legal@acmeretail.example
  - key: counterparty_email
    label: Supplier's email address for notices
    example: contracts@shreepackaging.example
  - key: stamp_duty_payer
    label: Party bearing stamp duty
    example: the Supplier
  - key: company_signatory_name
    label: Name of Customer's authorised signatory
    example: Meera Kapoor
  - key: company_signatory_title
    label: Designation of Customer's authorised signatory
    example: Head of Procurement
  - key: counterparty_signatory_name
    label: Name of Supplier's authorised signatory
    example: Sunil Joshi
  - key: counterparty_signatory_title
    label: Designation of Supplier's authorised signatory
    example: Managing Director
---

# VENDOR AGREEMENT

> **Drafting note:** This is a customer-leaning framework agreement for the purchase of goods, services, or both, from a supplier through Purchase Orders. It suits recurring procurement of materials, packaging, equipment, IT hardware, facility services, logistics, marketing services and similar categories. It is not suitable for software-as-a-service (use the saas-subscription-agreement from the customer's side) or for complex IT projects (use the master-services-agreement). Delete inapplicable goods-only or services-only clauses where the relationship involves only one. Delete all drafting notes before signing.

This Vendor Agreement (the **"Agreement"**) is made on {{effective_date}} (the **"Effective Date"**)

**BETWEEN**

**{{company_name}}**, a company incorporated under the laws of India with corporate identity number {{company_cin}} and its registered office at {{company_address}} (the **"Customer"**, which expression shall, unless repugnant to the context or meaning thereof, include its successors and permitted assigns) of the ONE PART;

**AND**

**{{counterparty_name}}**, having its registered office or principal place of business at {{counterparty_address}} and GSTIN {{counterparty_gstin}} (the **"Supplier"**, which expression shall, unless repugnant to the context or meaning thereof, include its successors and permitted assigns) of the OTHER PART.

The Customer and the Supplier are each a **"Party"** and together the **"Parties"**.

> **Drafting note:** If the Supplier is a company or LLP, add its CIN or LLPIN; if a partnership firm or proprietorship, describe it accordingly and name the partners or proprietor. Verify the GSTIN on the GST portal before signing; input tax credit depends on it.

**WHEREAS:**

(A) The Supplier is engaged in the business of manufacturing, supplying and/or providing the goods and services described in Schedule 1.

(B) The Customer wishes to purchase such goods and services from the Supplier from time to time by issuing Purchase Orders, and the Supplier has agreed to supply them, on the terms of this Agreement.

**NOW, THEREFORE, IN CONSIDERATION OF** the mutual covenants set out below, the Parties agree as follows:

## 1. Definitions and Interpretation

1.1 **Definitions.** In this Agreement, unless the context otherwise requires:

**"Affiliate"** means, in relation to a Party, any entity that directly or indirectly controls, is controlled by, or is under common control with that Party, where "control" means ownership of more than fifty per cent (50%) of the voting securities, or the power to direct the management or policies, of the entity.

**"Applicable Law"** means all laws, statutes, ordinances, rules, regulations, notifications, standards (including mandatory Bureau of Indian Standards standards and quality control orders), directions, orders and judgments of any governmental, statutory, regulatory or judicial authority in India or any other jurisdiction applicable to a Party, the Goods or the Services, as amended from time to time.

**"Business Day"** means a day other than a Saturday, Sunday or public holiday on which banks are open for general business in the city of the Customer's registered office.

**"Change of Control"** means, in relation to the Supplier, any person or persons acting in concert (who did not control the Supplier on the Effective Date) acquiring control of the Supplier, where "control" has the meaning given in the definition of Affiliate.

**"Charges"** means the prices for the Goods and the fees for the Services set out in Schedule 2 or in a Purchase Order, as applicable.

**"Code of Conduct"** means the Customer's supplier code of conduct summarised in Schedule 4, as updated and notified to the Supplier from time to time.

**"Confidential Information"** has the meaning given in Clause 13.1.

**"Customer Materials"** means all materials, equipment, tools, moulds, dies, drawings, specifications, data and information supplied by or on behalf of the Customer to the Supplier, or paid for by the Customer.

**"Customer Personal Data"** means personal data (as defined in the DPDP Act) that the Supplier processes on behalf of the Customer in connection with this Agreement.

**"Defect"** means any failure of Goods or Services to comply with the Specifications, any Purchase Order, this Agreement or Applicable Law, or any defect in design (to the extent designed by the Supplier), materials or workmanship.

**"Deliverables"** means all documents, reports, designs, artwork, software, data and other materials produced by or on behalf of the Supplier for the Customer in performing the Services.

**"Delivery Date"** means the date (or window) for delivery of Goods or performance of Services specified in the relevant Purchase Order.

**"Delivery Location"** means the location specified in the relevant Purchase Order for delivery of Goods or performance of Services.

**"DPDP Act"** means the Digital Personal Data Protection Act, 2023 and the Digital Personal Data Protection Rules, 2025, as amended and in force from time to time.

**"Goods"** means the goods (including any parts, packaging, labels and documentation) described in Schedule 1 or in a Purchase Order.

**"Intellectual Property Rights"** means patents, copyright and related rights, moral rights, trade marks, trade names, rights in designs, rights in get-up, rights in confidential information (including know-how and trade secrets), database rights and all other intellectual property rights, whether registered or unregistered, and all applications, renewals and extensions of them, anywhere in the world.

**"Losses"** means all losses, liabilities, damages, costs (including reasonable legal fees), charges, fines, penalties and expenses.

**"Purchase Order"** means a written purchase order issued by the Customer (including through its procurement system or by email) substantially in the form of Schedule 3, specifying the Goods or Services, quantities, Charges, Delivery Date and Delivery Location.

**"Services"** means the services described in Schedule 1 or in a Purchase Order, including the provision of Deliverables.

**"Site"** means any premises of the Customer or its Affiliates or customers at which the Supplier's Personnel perform Services or deliver Goods.

**"Specifications"** means the specifications, drawings, samples, quality standards and descriptions of the Goods or Services set out or referred to in Schedule 1 or a Purchase Order, or otherwise agreed in writing.

**"Supplier Personnel"** means all employees, contract workers, agents and subcontractors of the Supplier (and of its subcontractors) engaged in the supply of the Goods or performance of the Services.

1.2 **Interpretation.** In this Agreement: (a) headings do not affect interpretation; (b) the recitals and Schedules form part of this Agreement; (c) the singular includes the plural and vice versa; (d) "including" and similar words are illustrative and do not limit the preceding words; (e) a reference to a statute includes subordinate legislation and any amendment or re-enactment of it; (f) "writing" includes email; (g) a reference to "days" means calendar days unless Business Days are specified; and (h) no rule of construction applies to the disadvantage of a Party because it drafted this Agreement.

## 2. Framework, Purchase Orders and Precedence

2.1 **Framework.** This Agreement sets out the terms on which the Supplier shall supply Goods and Services ordered by the Customer. It does not oblige the Customer to place any minimum volume of orders, and any forecasts provided by the Customer are for planning purposes only and are not binding, unless a Purchase Order expressly states otherwise. The appointment of the Supplier is non-exclusive.

2.2 **Purchase Orders.** The Customer may place orders by issuing Purchase Orders. The Supplier shall, within {{po_acceptance_days}} Business Days of receipt, either accept a Purchase Order in writing or reject it giving reasons. If the Supplier neither accepts nor rejects a Purchase Order within that period, or begins performance, it shall be deemed to have accepted the Purchase Order. Each accepted Purchase Order forms a separate contract incorporating this Agreement.

2.3 **Changes to Purchase Orders.** The Customer may, by written notice before dispatch of Goods or commencement of Services, cancel or change the quantity, Delivery Date or Delivery Location of a Purchase Order. If a change increases or decreases the Supplier's cost or the time required, the Parties shall agree an equitable adjustment to the Charges or Delivery Date, which the Supplier must request in writing within five (5) Business Days of the change notice. If the Customer cancels a Purchase Order for goods made to the Customer's specific design after the Supplier has begun manufacture, the Customer shall pay the Supplier's reasonable, documented costs of work in progress and non-cancellable materials, not exceeding the Charges for the cancelled Goods, against delivery to the Customer of that work in progress and those materials.

2.4 **Order of precedence.** In the event of conflict or inconsistency, the following order of precedence applies (in descending order): (a) the clauses of this Agreement; (b) the Schedules; (c) the Purchase Order (save that a Purchase Order shall prevail as to quantities, Delivery Dates, Delivery Location and any special requirements identified in it as overriding this Agreement); and (d) any other document referred to in the Purchase Order. Any terms or conditions in the Supplier's quotation, acknowledgement, delivery note, invoice or other document shall have no effect, even if signed by the Customer.

## 3. Supply of Goods

3.1 **Conformity.** The Supplier shall ensure that the Goods: (a) conform in all respects to the Specifications and the Purchase Order, and correspond with any samples approved by the Customer; (b) are of satisfactory quality and fit for any purpose held out by the Supplier or made known to the Supplier by the Customer, expressly or by implication, and in this respect the Customer relies on the Supplier's skill and judgement; (c) are free from Defects; (d) are new and unused (unless otherwise specified); and (e) comply with all Applicable Law, including requirements relating to manufacture, labelling, packaging, storage, handling, transport, safety, environment and any mandatory standards and certification (including any Bureau of Indian Standards quality control order).

3.2 **Packaging and labelling.** The Supplier shall ensure that the Goods are properly packed and secured so as to reach the Delivery Location in good condition, and that the packaging and labels comply with the Specifications and Applicable Law (including, where the Goods are pre-packaged commodities, the Legal Metrology Act, 2009 and the Legal Metrology (Packaged Commodities) Rules, 2011, and where applicable extended producer responsibility obligations for plastic packaging). Each delivery shall be accompanied by a delivery note stating the Purchase Order number, the description and quantity of Goods, and any special handling or storage instructions, together with the tax invoice or delivery challan and any e-way bill required by GST law.

3.3 **Delivery.** The Supplier shall deliver the Goods to the Delivery Location on the Delivery Date, during the Customer's normal receiving hours or as otherwise specified, and shall be responsible for unloading them at its own risk. Unless the Purchase Order provides otherwise, the Charges include packing, loading, freight, transit insurance and delivery to the Delivery Location. The Supplier shall not deliver Goods in instalments, or before the Delivery Date, without the Customer's prior written consent.

3.4 **Time of delivery.** Time is of the essence as to the Delivery Date. The Supplier shall notify the Customer immediately if it becomes aware that it will or may be unable to meet a Delivery Date, giving reasons and a revised delivery date. Such notification shall not relieve the Supplier of its obligations.

3.5 **Liquidated damages for delay.** If the Supplier fails to deliver any Goods or complete any Services by the Delivery Date (other than by reason of a Force Majeure Event or a failure by the Customer), the Supplier shall pay, or the Customer may deduct from amounts due to the Supplier, liquidated damages at the rate of {{delay_ld_percent}} per cent of the Charges for the delayed Goods or Services for each week (or part of a week) of delay, up to a maximum of {{delay_ld_cap_percent}} per cent of the Charges under the relevant Purchase Order. The Parties agree that this amount represents a genuine pre-estimate of the loss the Customer is likely to suffer by reason of delay (including disruption to its production, distribution and customer commitments), which would be difficult to quantify precisely. Payment of liquidated damages shall be without prejudice to the Customer's right to terminate the Purchase Order under Clause 3.6.

> **Drafting note:** Under s.74 of the Indian Contract Act, 1872, the Customer may recover only reasonable compensation up to the stated sum; where loss is difficult to prove and the sum is a genuine pre-estimate, proof of actual loss may not be needed, but the Customer should still be able to show that some loss was likely (ONGC v. Saw Pipes, 2003; Kailash Nath Associates v. DDA, 2015). Keep the weekly rate and cap commercially proportionate, record the reasons in the clause, and do not describe the sum as a penalty. If the Supplier is an MSE, the MSMED Act payment timelines still apply to the undisputed balance.

3.6 **Remedies for late delivery.** If any Goods are not delivered, or Services not completed, within fourteen (14) days after the Delivery Date (or such other period as the Purchase Order specifies), the Customer may, without liability and in addition to its other rights: (a) terminate the Purchase Order in whole or in part; (b) refuse to accept any subsequent delivery; (c) obtain substitute goods or services from a third party and recover from the Supplier the reasonable additional cost of doing so; and (d) recover any amounts paid in advance for the undelivered Goods or Services.

3.7 **Quantity.** The Customer shall not be obliged to accept or pay for any Goods delivered in excess of the quantity ordered, and may return excess Goods at the Supplier's risk and expense. If fewer Goods are delivered than ordered, the Customer may reject the delivery or accept it and pay pro rata, without prejudice to its other rights.

## 4. Supply of Services

4.1 **Standard of performance.** The Supplier shall perform the Services: (a) in accordance with the Specifications and the Purchase Order; (b) with the highest standard of skill, care and diligence to be expected of a leading supplier of services of the same kind in India; (c) using appropriately qualified, trained and experienced Supplier Personnel in sufficient numbers; (d) using good quality materials, equipment and techniques; (e) in accordance with any service levels specified in Schedule 1 or a service level schedule; and (f) in compliance with Applicable Law, the Code of Conduct and the Customer's site rules, safety and security policies notified to the Supplier.

4.2 **Deliverables.** The Supplier shall ensure that all Deliverables conform to the Specifications and are free from Defects, and that the Services and Deliverables do not infringe the Intellectual Property Rights of any third party.

4.3 **Customer Materials.** The Supplier shall hold all Customer Materials in safe custody at its own risk, maintain them in good condition, keep them clearly identified as the Customer's property and separate from other property, use them solely for the purposes of this Agreement, insure them for their full replacement value, and return them to the Customer on demand or on termination. Customer Materials shall at all times remain the property of the Customer, and the Supplier shall have no lien over them.

## 5. Inspection, Testing and Rejection

5.1 **Inspection before dispatch.** The Customer may, on reasonable notice, inspect and test the Goods (and the Supplier's manufacturing processes and quality records) at the Supplier's premises before dispatch. The Supplier shall provide all reasonable facilities and assistance for such inspection. Inspection or testing by the Customer shall not relieve the Supplier of any obligation or constitute acceptance of the Goods.

5.2 **Inspection after delivery.** The Customer shall have {{inspection_days}} days after delivery (the **"Inspection Period"**) to inspect the Goods and to notify the Supplier of any Goods that do not conform to this Agreement. Signing a delivery note or goods receipt note confirms only the number of packages received and does not constitute acceptance.

5.3 **Rejection.** If any Goods or Services are not in conformity with this Agreement, the Customer may, by written notice to the Supplier (a **"Rejection Notice"**) and without prejudice to its other rights: (a) reject them (in whole or in part, whether or not title has passed) and return rejected Goods to the Supplier at the Supplier's risk and expense; (b) require the Supplier, at the Customer's option, to repair or replace the rejected Goods, or re-perform the rejected Services, within seven (7) days or such other period as the Customer reasonably specifies; (c) require a full refund of the Charges paid for the rejected Goods or Services; or (d) accept them subject to an equitable reduction in the Charges.

5.4 **Latent Defects.** The Customer's rights under this Clause 5 extend to Defects that could not reasonably have been discovered during the Inspection Period, which the Customer may notify within the warranty period under Clause 8.

5.5 **Acceptance.** Goods shall be deemed accepted on the expiry of the Inspection Period if the Customer has not issued a Rejection Notice, and Services shall be deemed accepted on the Customer's written confirmation that they have been completed in accordance with the Purchase Order or, where no such confirmation is required by the Purchase Order, fifteen (15) days after the Supplier notifies completion if the Customer has not issued a Rejection Notice. Acceptance does not affect the Supplier's warranty obligations or the Customer's rights in respect of latent Defects.

> **Drafting note:** For an MSE Supplier, the MSMED Act defines the "day of acceptance" as the day of actual delivery or rendering of services or, where an objection is made in writing within fifteen days of delivery, the day on which the defect is removed; it also has a "day of deemed acceptance" where no objection is made within fifteen days (s.2(b) MSMED Act [verify wording]). If the Supplier is an MSE, keep the Inspection Period at or below fifteen days; a longer contractual period will not extend the statutory payment clock.

## 6. Title and Risk

6.1 **Risk.** Risk of loss of or damage to the Goods shall pass to the Customer on completion of unloading of the Goods at the Delivery Location and their receipt by the Customer's authorised personnel.

6.2 **Title.** Title to the Goods shall pass to the Customer on the earlier of: (a) delivery to the Delivery Location; and (b) payment for the Goods (in whole or in part), without prejudice to the Customer's right of rejection. The Supplier warrants that it has full, clear and unencumbered title to the Goods and the right to transfer it, and that the Goods are free from any lien, charge, hypothecation or other encumbrance (including in favour of the Supplier's lenders).

6.3 **Rejected Goods.** Title and risk in rejected Goods shall revert to the Supplier on the date of the Rejection Notice. The Supplier shall collect rejected Goods within seven (7) days of the Rejection Notice, failing which the Customer may return or dispose of them at the Supplier's risk and cost.

> **Drafting note:** Clauses 6.1 and 6.2 displace the default rules of the Sale of Goods Act, 1930 (ss.18 to 26) on passing of property and risk, which the Act permits where the parties so intend. Where goods are hypothecated to the Supplier's bank (common for SMEs), a no-encumbrance warranty matters; for high-value equipment, consider obtaining a no-objection letter from the Supplier's lender.

## 7. Charges, Invoicing and Payment

7.1 **Charges.** The Charges are set out in Schedule 2 or the relevant Purchase Order. Unless otherwise agreed in writing, the Charges are fixed for the term of this Agreement, and include all costs of packaging, insurance, transport, delivery, unloading, installation (where applicable), Supplier Personnel, travel and expenses, and all duties and levies other than GST. No increase in the Charges shall be effective unless agreed in writing by the Customer.

7.2 **GST.** The Charges are exclusive of goods and services tax (**"GST"**), which shall be payable by the Customer in addition against a valid tax invoice. The Supplier shall: (a) issue tax invoices that comply with GST law (including e-invoicing, where applicable, and the correct HSN or SAC codes); (b) generate e-way bills where required; (c) upload invoice details and file its GST returns correctly and within the prescribed time, so that the Customer can avail input tax credit; and (d) pay the GST charged to the government. If input tax credit is denied, reversed or delayed for the Customer because of any act or omission of the Supplier, the Supplier shall indemnify the Customer for the tax, interest and penalty, and the Customer may withhold an equivalent amount from future payments until the Supplier rectifies the default.

7.3 **Tax deduction at source.** The Customer may deduct from any payment any tax that it is required to deduct at source under applicable tax laws, and shall furnish the Supplier with the corresponding certificate within the prescribed time. The amount deducted and deposited shall be treated as paid to the Supplier.

> **Drafting note:** The Income-tax Act, 2025 replaced the Income-tax Act, 1961 from 1 April 2026; do not cite section numbers. Depending on the nature of the purchase, the Customer may be required to deduct tax on purchase of goods, on contract work or on professional or technical services, or the Supplier may be required to collect tax on sale; the rates and thresholds differ. Ask your tax adviser to map each category in Schedule 2.

7.4 **Invoicing.** The Supplier shall invoice the Customer for Goods on or after delivery, and for Services monthly in arrears or on completion as specified in the Purchase Order. Each invoice shall quote the Purchase Order number, the goods receipt or service entry reference (if notified by the Customer), and be supported by the documents reasonably required by the Customer. The Customer shall not be obliged to pay any invoice that does not comply with this Clause 7.4 until a compliant invoice is issued.

7.5 **Payment.** Subject to Clause 7.6, the Customer shall pay each valid and undisputed invoice within {{payment_days}} days of the later of: (a) its receipt of the invoice; and (b) acceptance of the Goods or Services to which it relates, by electronic transfer to the Supplier's bank account specified in Schedule 2 (changes to which shall be effective only on written confirmation signed by an authorised signatory of the Supplier and verified by the Customer by telephone call-back).

7.6 **MSE suppliers.** If the Supplier is a micro or small enterprise under the Micro, Small and Medium Enterprises Development Act, 2006 (the **"MSMED Act"**), holding a valid Udyam registration certificate for the relevant activity, and has delivered the declaration in Schedule 5 to the Customer, then notwithstanding Clause 7.5 or anything else in this Agreement: (a) the Customer shall pay for Goods and Services within the period agreed in this Agreement, which shall in no case exceed forty-five (45) days from the day of acceptance or the day of deemed acceptance (as those terms are defined in the MSMED Act); and (b) if the Customer fails to do so, it shall pay compound interest with monthly rests at the rate prescribed by section 16 of the MSMED Act (being three times the bank rate notified by the Reserve Bank of India) from the appointed day. The Supplier shall notify the Customer in writing within seven (7) days of any change in its Udyam registration or classification (including any reclassification as a medium enterprise or cancellation of registration), and shall indemnify the Customer for any Losses resulting from an incorrect declaration.

> **Drafting note:** The MSMED Act payment rules (ss.15 to 24) apply only to micro and small enterprises (not medium enterprises) that are "suppliers" holding a Udyam registration; registration should predate the supply [verify current position on registration timing]. Retail and wholesale traders may register on Udyam for priority-sector lending only and may not be entitled to the delayed-payment protections [verify current Ministry of MSME notification]. Interest under s.16 is mandatory, overrides contrary agreement (s.24), and under s.23 is not deductible for income-tax purposes. In addition, under applicable tax laws an amount owed to a micro or small enterprise that is not paid within the s.15 time limit may not be allowed as a deduction in computing the buyer's income until the year in which it is actually paid (introduced into the Income-tax Act, 1961 from assessment year 2024-25 and understood to be continued under the Income-tax Act, 2025 [verify]). Specified companies must also report MSE dues outstanding beyond 45 days in a half-yearly return to the Registrar (MSME Form 1) [verify current requirement]. An MSE supplier may refer a dispute to the Micro and Small Enterprises Facilitation Council under s.18, now through the MSME ODR portal [verify], notwithstanding the arbitration clause in this Agreement. Build these timelines into your accounts-payable process.

7.7 **Disputed invoices.** If the Customer disputes any invoice in good faith, it shall notify the Supplier in writing within fifteen (15) days of receipt, with reasons, and shall pay the undisputed portion in accordance with Clause 7.5 or 7.6. The Parties shall resolve the dispute in accordance with Clause 22.

7.8 **Set-off.** The Customer may set off against any amount payable to the Supplier under this Agreement or any Purchase Order any amount that the Supplier owes to the Customer or its Affiliates under this Agreement or any Purchase Order, including liquidated damages and amounts payable under any indemnity, provided that the Customer gives the Supplier written notice of the set-off with reasonable details.

7.9 **Payment not acceptance.** Payment by the Customer shall not constitute acceptance of any Goods or Services or a waiver of any of its rights.

## 8. Warranties

8.1 **Goods warranty.** The Supplier warrants that, for a period of {{warranty_months}} months from acceptance (or such longer period as the Supplier's standard warranty or the Specifications provide) (the **"Warranty Period"**), the Goods shall conform to Clause 3.1. If any Goods are found to have a Defect during the Warranty Period, the Supplier shall, at the Customer's option and at the Supplier's cost (including the cost of collection, transport, dismantling and reinstallation), repair or replace them within seven (7) days of notification (or such other period as the Customer reasonably specifies), or refund the Charges paid for them. Repaired or replaced Goods shall have a fresh Warranty Period.

8.2 **Services warranty.** The Supplier warrants that the Services shall be performed in accordance with Clause 4.1, and shall, at its own cost, promptly re-perform any Services that do not conform, within the period the Customer reasonably specifies. If the Supplier fails to do so, the Customer may engage a third party to re-perform them and recover the reasonable cost from the Supplier.

8.3 **General warranties.** The Supplier warrants and represents that: (a) it is duly organised and validly existing, and has full power and authority to enter into and perform this Agreement; (b) it holds, and shall maintain, all licences, registrations, permits and approvals required to supply the Goods and Services (including GST registration, any factory licence, trade licence, and registrations under the Labour Codes and environmental laws); (c) the Goods, Services and Deliverables, and their use by the Customer, do not and will not infringe any third party's Intellectual Property Rights; (d) it is not insolvent and there are no proceedings pending or threatened against it that would materially affect its ability to perform this Agreement; and (e) all information it provided to the Customer during the vendor onboarding process is true, complete and accurate.

8.4 **Third-party warranties.** The Supplier shall assign to the Customer, or hold on trust for it, the benefit of any warranty or indemnity given by the manufacturer of any Goods or components not manufactured by the Supplier.

8.5 **Implied terms.** The warranties in this Agreement are in addition to the conditions and warranties implied by the Sale of Goods Act, 1930, which are not excluded.

## 9. Supplier Personnel and Labour Law Compliance

9.1 **Responsibility.** The Supplier Personnel are and shall remain employees, contract workers or subcontractors of the Supplier, and nothing in this Agreement creates any employment relationship between the Customer and any Supplier Personnel. The Supplier alone shall be responsible for their selection, engagement, supervision, discipline, remuneration and termination.

9.2 **Labour Codes.** The Supplier shall comply, and shall ensure that its subcontractors comply, with all Applicable Law relating to Supplier Personnel, including the Code on Wages, 2019, the Industrial Relations Code, 2020, the Code on Social Security, 2020, the Occupational Safety, Health and Working Conditions Code, 2020, the rules made under them, and the applicable state shops and establishments legislation. Without limitation, the Supplier shall:

(a) obtain and maintain any licence required to engage contract labour and any registration as an establishment, and provide copies to the Customer before deploying Supplier Personnel at a Site;

(b) pay Supplier Personnel not less than the applicable minimum or floor wage, on time and by bank transfer, and pay overtime, bonus, leave and other entitlements as required by law;

(c) register Supplier Personnel with, and deposit contributions for them to, the Employees' Provident Fund Organisation and the Employees' State Insurance Corporation (or provide the benefits required by the Code on Social Security, 2020) on time, and provide employee compensation cover where required;

(d) maintain the registers, records and returns required by law, and issue wage slips and appointment letters to Supplier Personnel;

(e) not employ any child or adolescent in breach of the Child and Adolescent Labour (Prohibition and Regulation) Act, 1986, and not use any forced, bonded or trafficked labour;

(f) comply with the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013 in respect of Supplier Personnel, and cooperate with the Customer's Internal Committee where a complaint involves a Site; and

(g) provide the Customer, by the tenth (10th) day of each month (or as otherwise requested), with evidence of payment of wages and statutory contributions for Supplier Personnel deployed at any Site in the previous month, including challans and electronic challan-cum-returns.

9.3 **Customer's right to pay.** If the Supplier fails to pay any wages or statutory contributions to or for Supplier Personnel deployed at a Site, the Customer may (without being obliged to) pay them directly, and recover the amount from the Supplier by set-off or otherwise.

> **Drafting note:** The contract labour provisions formerly in the Contract Labour (Regulation and Abolition) Act, 1970 are now in the Occupational Safety, Health and Working Conditions Code, 2020. Under the Labour Codes, a principal employer may be liable to pay wages, or social security contributions, that a contractor fails to pay, with a right to recover them from the contractor [verify the exact provisions of the Code on Wages, 2019 and the Code on Social Security, 2020 and applicable State rules]. Clause 9.3 and the monthly evidence requirement protect the Customer. Avoid controlling Supplier Personnel directly (supervision, attendance, discipline) to reduce the risk that they are held to be the Customer's employees in a "sham contract" analysis. Check the thresholds for contract labour licensing under the applicable State rules.

9.4 **Site rules and safety.** While at any Site, the Supplier shall ensure that Supplier Personnel comply with the Customer's health, safety, security, environmental and conduct rules, wear prescribed personal protective equipment, and hold any permits required for hazardous work. The Customer may refuse admission to, or require the removal of, any Supplier Personnel who in its reasonable opinion is not suitably qualified, has breached any Site rule or the Code of Conduct, or whose presence is otherwise undesirable, and the Supplier shall promptly provide a suitable replacement at no cost to the Customer.

9.5 **Background checks.** The Supplier shall carry out, before deploying any Supplier Personnel at a Site or giving them access to the Customer's systems or data, background verification checks appropriate to the role, to the extent permitted by Applicable Law.

9.6 **Subcontracting.** The Supplier shall not subcontract any of its obligations without the Customer's prior written consent. The Supplier remains fully responsible for the acts and omissions of its subcontractors, and shall flow down to them obligations equivalent to those in this Agreement.

## 10. Compliance, Ethics and Sustainability

10.1 **Compliance with law.** The Supplier shall comply with all Applicable Law in performing this Agreement, and shall promptly notify the Customer of any investigation, notice or proceeding by any authority relating to the Goods, the Services or the Supplier's compliance with law that could affect the Customer.

10.2 **Anti-bribery.** The Supplier shall, and shall ensure that its directors, officers, Supplier Personnel and any person acting on its behalf shall: (a) comply with the Prevention of Corruption Act, 1988 and all other applicable anti-bribery and anti-corruption laws; (b) not offer, promise, give, request or accept any bribe, kickback, facilitation payment, gift, hospitality or other undue advantage to or from any person (including any public servant or any employee of the Customer) in connection with this Agreement; (c) maintain adequate procedures, including a code of conduct and training, designed to prevent such conduct; and (d) promptly report to the Customer any request or demand for an undue advantage received in connection with this Agreement. The Supplier confirms that no employee or director of the Customer has any financial interest in the Supplier, except as disclosed in writing to the Customer before the Effective Date.

10.3 **Code of Conduct.** The Supplier shall comply with the Code of Conduct.

10.4 **Sanctions and export control.** The Supplier represents that neither it nor any of its owners, directors or Affiliates is the subject of any sanctions administered by the Government of India, the United Nations or any other authority applicable to the Customer, and shall not supply Goods or components originating from any sanctioned person or territory. Where any Goods are subject to export control, including under the Foreign Trade (Development and Regulation) Act, 1992 and the SCOMET list, the Supplier shall so notify the Customer and provide the relevant classification.

10.5 **Imports and FEMA.** Where the Supplier is resident outside India or any Goods are imported, the Supplier shall provide all documents required for customs clearance and for the Customer's compliance with the Foreign Exchange Management Act, 1999 and the directions of the Reserve Bank of India on import payments, and any import duties shall be borne as specified in the Purchase Order.

10.6 **[OPTIONAL] Environmental, social and governance requirements.** The Supplier shall: (a) comply with applicable environmental laws, including those relating to hazardous waste, e-waste, battery waste and plastic waste and any extended producer responsibility obligations; (b) on reasonable request, provide the Customer with data on energy consumption, greenhouse gas emissions, water use and waste attributable to the Goods and Services, and other information reasonably required by the Customer for its business responsibility and sustainability reporting; (c) work towards any reduction targets agreed with the Customer in writing; and (d) respect human rights in its operations and supply chain, including freedom of association, non-discrimination and fair working hours.

> **Drafting note:** Listed entities within the top 1,000 by market capitalisation must file a Business Responsibility and Sustainability Report under the SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015, and the largest are subject to value-chain disclosure and assurance requirements being phased in [verify current SEBI circular]. If the Customer is such an entity, or supplies to one, keep Clause 10.6; otherwise it may be deleted or simplified.

10.7 **Breach.** A breach of Clause 10.2 or Clause 10.4 shall be a material breach incapable of remedy.

## 11. Records and Audit

11.1 **Records.** The Supplier shall maintain complete and accurate records relating to the Goods and Services, the Charges, its compliance with Clauses 9, 10 and 14 and quality control, for at least eight (8) years after the year to which they relate (or such longer period as Applicable Law requires).

11.2 **Audit.** The Customer, its auditors and any regulator having jurisdiction over the Customer may, on giving {{audit_notice_days}} Business Days' notice (or without notice in the case of suspected fraud, a serious safety concern or a regulatory requirement), during normal business hours, inspect and audit the Supplier's premises, manufacturing processes, records and systems to verify the Supplier's compliance with this Agreement. The Supplier shall provide all reasonable assistance and access to relevant personnel. The Customer shall bear its own costs of an audit unless it reveals an overcharge of more than five per cent (5%) or a material breach by the Supplier, in which case the Supplier shall reimburse the reasonable costs of the audit and promptly refund any overcharge with interest at the rate in Clause 7.6 (or, if the Supplier is not an MSE, at twelve per cent (12%) per annum).

11.3 **Corrective action.** The Supplier shall promptly remedy any non-compliance identified by an audit, in accordance with a corrective action plan agreed with the Customer.

## 12. Intellectual Property

12.1 **Customer IP.** All Intellectual Property Rights in the Customer Materials, the Specifications provided by the Customer, and the Customer's trade marks remain vested in the Customer. The Supplier shall not use the Customer's name or trade marks except as required to perform this Agreement (for example, on packaging specified by the Customer), and shall not supply Goods bearing the Customer's trade marks or made to the Customer's Specifications to any third party.

12.2 **Assignment of Deliverables.** The Supplier hereby assigns to the Customer, with full title guarantee and by way of present assignment of existing and future rights (with future rights vesting in the Customer as and when they come into existence), all Intellectual Property Rights in the Deliverables and in any bespoke designs, artwork, tooling and Goods developed specifically for the Customer (together, the **"Bespoke Materials"**), including all rights comprised in copyright under section 14 of the Copyright Act, 1957, for the full term of protection of those rights (including all renewals and extensions) and throughout the world. The consideration for this assignment is included in the Charges. The Parties agree that this assignment shall not lapse under section 19(4) of the Copyright Act, 1957 by reason of the Customer not exercising the rights within one year.

12.3 **Moral rights.** The Supplier shall procure that each author of any Bespoke Materials irrevocably waives, or undertakes not to assert, to the extent permitted by Applicable Law, any moral rights under section 57 of the Copyright Act, 1957 in respect of the Bespoke Materials.

12.4 **Supplier background IP.** To the extent that any pre-existing Intellectual Property Rights of the Supplier are incorporated in the Goods or Deliverables, the Supplier grants to the Customer and its Affiliates a non-exclusive, perpetual, irrevocable, worldwide, royalty-free, transferable licence (with the right to sub-license to their contractors and customers) to use, reproduce, modify and distribute them as part of, or for the purpose of using, the Goods and Deliverables.

12.5 **Further assurance.** The Supplier shall execute all documents and do all acts reasonably required by the Customer to perfect, register or enforce the rights assigned under this Clause 12, including design and trade mark registrations.

> **Drafting note:** Contractors are not covered by the employer-ownership rule in s.17 of the Copyright Act, 1957, so an express written assignment is essential; s.19 requires it to identify the work, the rights, duration and territory, failing which duration defaults to five years and territory to India. Registered designs are governed by the Designs Act, 2000; a design created on commission belongs to the person commissioning it, but record the assignment expressly [verify s.2(j) Designs Act definition of "proprietor"].

## 13. Confidentiality

13.1 **Definition.** **"Confidential Information"** means all information disclosed by or on behalf of a Party (the **"Discloser"**) to the other Party (the **"Recipient"**) in connection with this Agreement, in any form, that is marked or identified as confidential or that a reasonable person would understand to be confidential, including the Specifications, the Customer Materials, pricing, volumes, forecasts, product plans, customer lists and Customer Personal Data.

13.2 **Exceptions.** Clause 13.3 does not apply to information that the Recipient can show: (a) is or becomes public other than through a breach of this Agreement; (b) was lawfully in its possession free of any duty of confidence before disclosure; (c) is lawfully received from a third party free of any duty of confidence; or (d) is independently developed without use of the Discloser's Confidential Information.

13.3 **Obligations.** The Recipient shall keep the Discloser's Confidential Information confidential, use it only to perform this Agreement, and not disclose it except to its directors, employees, professional advisers and (with the Customer's consent, in the case of the Supplier) subcontractors who need to know it and are bound by obligations of confidentiality no less strict than this Clause 13, or as required by Applicable Law or a competent authority (after giving the Discloser prompt notice where lawful). The Recipient shall protect it with at least reasonable care.

13.4 **Return.** On termination or on request, the Recipient shall return or securely destroy the Discloser's Confidential Information and certify that it has done so, save to the extent retention is required by Applicable Law.

13.5 **Duration.** This Clause 13 survives for {{confidentiality_years}} years after termination of this Agreement, and indefinitely in respect of trade secrets and Customer Personal Data.

13.6 **Remedies.** The Discloser shall be entitled to seek injunctive relief, specific performance and interim measures in respect of any actual or threatened breach of this Clause 13, in addition to any other remedy.

## 14. Data Protection and Information Security

14.1 **Application.** This Clause 14 applies if the Supplier processes any Customer Personal Data or has access to the Customer's information systems.

14.2 **Roles and DPA.** In respect of Customer Personal Data, the Customer is the Data Fiduciary and the Supplier is a Data Processor under the DPDP Act. Before processing any Customer Personal Data, the Supplier shall execute the Customer's data processing agreement (the **"DPA"**), which shall form part of this Agreement. Until it does so, Clauses 14.3 to 14.6 apply.

14.3 **Processing obligations.** The Supplier shall: (a) process Customer Personal Data only on the Customer's documented instructions and only for the purpose of performing this Agreement; (b) implement reasonable security safeguards, including appropriate technical and organisational measures, to prevent personal data breach; (c) ensure that persons authorised to process Customer Personal Data are bound by confidentiality; (d) not engage any sub-processor without the Customer's prior written consent, and impose equivalent obligations on any approved sub-processor; (e) assist the Customer in responding to Data Principals exercising their rights and in complying with its obligations under the DPDP Act; (f) not transfer Customer Personal Data outside India without the Customer's prior written consent; and (g) on termination or on request, return or securely delete Customer Personal Data and certify deletion.

14.4 **Breach notification.** The Supplier shall notify the Customer without undue delay, and in any event within {{breach_notice_hours}} hours, after becoming aware of any personal data breach affecting Customer Personal Data, and shall provide all information and cooperation the Customer requires to investigate, mitigate and notify the breach to the Data Protection Board of India and affected Data Principals within the times required by the DPDP Act.

14.5 **CERT-In.** The Supplier shall comply with the directions issued by CERT-In on 28 April 2022 under section 70B of the Information Technology Act, 2000 to the extent applicable to it (including reporting specified cyber incidents within six (6) hours and maintaining logs of ICT systems for one hundred and eighty (180) days), and shall promptly inform the Customer of any cyber incident that affects the Customer's systems or data.

14.6 **Systems access.** Where the Supplier has access to the Customer's systems, it shall comply with the Customer's information security policies, use access only for the purposes of this Agreement, and ensure that access credentials are personal to named Supplier Personnel and revoked promptly when no longer required.

> **Drafting note:** The DPDP Act and DPDP Rules, 2025 commence in phases; most Data Fiduciary obligations are expected to apply from around May 2027 [verify]. Until then, s.43A of the Information Technology Act, 2000 and the SPDI Rules, 2011 continue to apply [verify]. The Customer, as Data Fiduciary, remains responsible for its processors' compliance (s.8(1) DPDP Act), so vendor due diligence and the DPA matter. Use the data-processing-agreement template.

## 15. Indemnity

15.1 **Supplier indemnity.** The Supplier shall indemnify, defend and hold harmless the Customer, its Affiliates and their respective directors, officers, employees and agents (the **"Customer Indemnitees"**) from and against all Losses suffered or incurred by any of them arising out of or in connection with:

(a) any claim that the Goods, Services or Deliverables, or their use or resale by the Customer in accordance with this Agreement, infringe the Intellectual Property Rights of any third party (except to the extent the infringement results from the Supplier's compliance with Specifications provided by the Customer that mandated the infringing element);

(b) any claim by a third party (including a consumer, end customer or authority) for death, personal injury or damage to property arising from any Defect in the Goods, or from any act or omission of the Supplier or Supplier Personnel, including any product liability claim under Chapter VI of the Consumer Protection Act, 2019;

(c) any product recall, field correction or withdrawal of Goods (or of products incorporating them) that is required by Applicable Law or reasonably undertaken by the Customer because of a Defect in the Goods;

(d) any breach by the Supplier of Clause 9 (Supplier Personnel and Labour Law Compliance), including any claim by Supplier Personnel against a Customer Indemnitee for wages, statutory contributions, compensation or employment, and any liability of the Customer as principal employer;

(e) any breach by the Supplier of Clause 10 (Compliance, Ethics and Sustainability), Clause 13 (Confidentiality) or Clause 14 (Data Protection and Information Security);

(f) any breach of Clause 7.2 (GST) or any incorrect declaration under Clause 7.6; and

(g) the negligence, fraud or wilful misconduct of the Supplier or Supplier Personnel.

15.2 **Conduct of claims.** Where a Customer Indemnitee becomes aware of a claim by a third party to which Clause 15.1 applies (a **"Claim"**), the Customer shall notify the Supplier in writing within a reasonable time (but a delay shall relieve the Supplier only to the extent it is materially prejudiced). The Supplier may, by notice to the Customer within ten (10) Business Days, elect to assume the conduct of the defence of the Claim at its own cost with counsel reasonably acceptable to the Customer, provided that: (a) the Supplier first confirms in writing that the Claim is within the indemnity in Clause 15.1; (b) the Supplier keeps the Customer fully informed and consults it on all material steps; (c) the Supplier shall not settle or compromise any Claim, or make any admission, without the Customer's prior written consent (not to be unreasonably withheld where the settlement involves only the payment of money by the Supplier, includes an unconditional release of the Customer Indemnitees and contains no admission of fault by them); and (d) the Customer may participate in the defence with its own counsel at its own cost. The Customer may retain or resume conduct of a Claim, at the Supplier's cost, if: the Supplier fails to elect or to diligently conduct the defence; the Claim involves a regulator, criminal proceedings, a recall or a matter that the Customer reasonably considers may materially affect its reputation or business; or a conflict of interest arises. The Customer shall provide reasonable cooperation at the Supplier's cost and shall not settle a Claim conducted by the Supplier without the Supplier's consent.

15.3 **Nature of indemnity.** The indemnity in Clause 15.1 is in addition to, and not in substitution for, the Customer's other rights. The Supplier's obligation to indemnify shall arise as soon as a Customer Indemnitee incurs a liability, whether or not it has paid.

> **Drafting note:** Under ss.124 and 125 of the Indian Contract Act, 1872, an indemnity holder may recover damages, costs and settlement amounts. Indian courts have recognised that an indemnity may be enforced once liability becomes absolute, even before payment. Clause 15.1 goes beyond third-party claims (for example, recall costs and GST losses), which is a customer-leaning position; a supplier will seek to limit the indemnity to third-party claims and to bring it within the liability cap.

## 16. Limitation of Liability

16.1 **Unlimited liability.** Nothing in this Agreement limits or excludes either Party's liability for: (a) death or personal injury caused by its negligence; (b) fraud or fraudulent misrepresentation; (c) wilful misconduct or wilful abandonment of the Agreement; (d) the Supplier's liability under Clause 15.1(b), (c) or (d); (e) the Customer's obligation to pay undisputed Charges; or (f) any liability that cannot be limited under Applicable Law.

16.2 **Customer's liability.** Subject to Clause 16.1, the Customer's total aggregate liability arising out of or in connection with this Agreement shall not exceed the Charges paid and payable by it under the Purchase Orders giving rise to the claim.

16.3 **Supplier's liability.** Subject to Clauses 16.1 and 16.4, the Supplier's total aggregate liability arising out of or in connection with this Agreement and all Purchase Orders, whether in contract, tort (including negligence), breach of statutory duty, under any indemnity or otherwise, shall not exceed {{supplier_cap}}.

16.4 **Supplier super-cap.** Subject to Clause 16.1, the Supplier's total aggregate liability arising from breach of Clause 13 (Confidentiality) or Clause 14 (Data Protection and Information Security), or under Clause 15.1(a) (IP infringement) or Clause 15.1(e) (insofar as it relates to Clauses 13 and 14), shall not exceed {{super_cap_multiple}} times the total Charges paid and payable under this Agreement in the twelve (12) months preceding the event giving rise to the claim, and such liability shall be in addition to, and shall not erode, the cap in Clause 16.3.

16.5 **Indirect loss.** Subject to Clause 16.1, neither Party shall be liable for any indirect or consequential loss, or for loss of profit, business or goodwill, that did not arise in the usual course of things from the breach and that the Parties did not know, when they made this Agreement, to be likely to result from it. The following shall be treated as direct losses recoverable by the Customer: (a) the additional cost of procuring substitute goods or services; (b) the costs of a recall or field correction; (c) wasted expenditure; (d) the costs of investigating, mitigating and notifying any personal data breach; (e) regulatory fines and penalties imposed on the Customer to the extent caused by the Supplier's breach (to the extent recoverable at law); and (f) liquidated damages under Clause 3.5.

16.6 **Limitation period.** Nothing in this Agreement limits the period within which a Party may bring a claim under the Limitation Act, 1963.

> **Drafting note:** Section 28 of the Indian Contract Act, 1872 invalidates clauses that extinguish rights or limit the time to enforce them on the expiry of a period shorter than the statutory limitation period, so no shorter claims period is included. The asymmetric caps reflect a customer-leaning position; a supplier will seek mutuality and a cap tied to annual Charges.

## 17. Insurance

17.1 The Supplier shall maintain, during the term of this Agreement and for at least two (2) years thereafter, with reputable insurers: (a) public and product liability insurance with a limit of not less than {{insurance_amount}} per occurrence (covering product recall where the Goods are consumer products or components of them); (b) employee compensation insurance or coverage as required by the Code on Social Security, 2020 in respect of all Supplier Personnel; (c) insurance of Customer Materials in its custody for their full replacement value; (d) where the Supplier provides professional or technology services, professional indemnity insurance; and (e) such other insurance as Applicable Law requires.

17.2 The Supplier shall provide certificates of insurance on request, and shall notify the Customer of any cancellation or material reduction in cover. The Supplier shall procure that the Customer is named as an additional insured on its public and product liability policy where commercially available.

## 18. Term and Termination

18.1 **Term.** This Agreement commences on the Effective Date and continues for {{initial_term_years}} years, unless terminated earlier in accordance with this Clause 18. It may be renewed by written agreement of the Parties. Any Purchase Order accepted before expiry shall continue to be governed by this Agreement until completed.

18.2 **Termination for convenience.** The Customer may terminate this Agreement, or any Purchase Order, in whole or in part, for convenience by giving the Supplier {{convenience_notice_days}} days' written notice. On termination of a Purchase Order under this Clause, the Customer shall pay for Goods delivered and Services performed and accepted up to the effective date of termination, and Clause 2.3 shall apply to work in progress on Goods made to the Customer's specific design. The Customer shall have no other liability to the Supplier, including for loss of profit.

18.3 **Termination for cause by the Customer.** The Customer may terminate this Agreement or any Purchase Order with immediate effect by written notice if the Supplier: (a) commits a material breach that is incapable of remedy, or that is capable of remedy but is not remedied within {{cure_period_days}} days of written notice; (b) commits repeated breaches (whether or not remedied) that together amount to a material breach; (c) breaches Clause 9.2, Clause 10.2 or Clause 10.4; (d) suffers an insolvency event, including admission of a corporate insolvency resolution process against it under the Insolvency and Bankruptcy Code, 2016, the appointment of a liquidator, receiver or resolution professional, or a winding-up order or resolution; (e) undergoes a Change of Control without the Customer's prior written consent, or a Change of Control as a result of which it becomes controlled by a competitor of the Customer; or (f) is subject to a Force Majeure Event for more than thirty (30) consecutive days.

18.4 **Termination by the Supplier.** The Supplier may terminate this Agreement (but not any Purchase Order already accepted) by written notice if the Customer fails to pay any undisputed amount within sixty (60) days after its due date and does not pay it within thirty (30) days of a written notice from the Supplier referring to this Clause.

> **Drafting note:** The Supplier's limited right to terminate reflects a customer-leaning draft. Ipso facto termination on insolvency may be restricted during a moratorium under the Insolvency and Bankruptcy Code, 2016 where the Customer is the corporate debtor and the supply is critical [verify s.14(2A)]; Clause 18.3(d) concerns the Supplier's insolvency, where the Customer's main protection is the ability to source from elsewhere.

## 19. Consequences of Termination and Exit

19.1 On termination or expiry of this Agreement or any Purchase Order: (a) the Supplier shall deliver to the Customer all Goods, Deliverables and work in progress paid for (or to be paid for) by the Customer; (b) the Supplier shall return all Customer Materials and Confidential Information; (c) the Customer shall pay the Charges properly due for Goods delivered and Services performed and accepted up to the effective date of termination, less any amounts the Customer is entitled to set off; and (d) the Supplier shall refund any Charges paid in advance for Goods not delivered or Services not performed.

19.2 **Exit assistance.** Where the Customer terminates this Agreement or does not renew it, the Supplier shall, for up to ninety (90) days after termination (and at the rates in Schedule 2, or at no charge where the Customer terminates under Clause 18.3), continue to supply Goods and Services under Purchase Orders issued by the Customer, and cooperate in good faith with the Customer and any replacement supplier to ensure an orderly transition without disruption to the Customer's business, including by transferring documentation, specifications, tooling owned by the Customer and know-how reasonably required.

19.3 **Spares.** Where the Goods are equipment, the Supplier shall make spare parts and maintenance services available to the Customer on reasonable commercial terms for at least five (5) years after the last delivery of the relevant Goods.

19.4 **Survival.** Clauses 1, 5.4, 7 (as to amounts accrued), 8, 11, 12, 13, 14, 15, 16, 17, 19, 22, 23 and 24, and any provision that by its nature is intended to survive, shall survive termination or expiry. Termination shall not affect accrued rights and remedies.

## 20. Force Majeure

20.1 Neither Party shall be liable for delay or failure to perform its obligations (other than payment obligations) to the extent caused by an event beyond its reasonable control, which could not have been prevented or mitigated by reasonable precautions or business continuity measures, including acts of God, flood, earthquake, fire, epidemic, war, terrorism, riot, governmental action and general strikes (excluding strikes or labour disputes of the affected Party's own workforce or its subcontractors, shortage of materials or labour, or increase in costs) (a **"Force Majeure Event"**). The affected Party shall notify the other promptly, use all reasonable efforts to mitigate the effect, and resume performance as soon as possible.

20.2 During a Force Majeure Event affecting the Supplier, the Customer may obtain Goods and Services from third parties and reduce its orders under this Agreement accordingly, without liability.

## 21. Business Continuity

21.1 The Supplier shall maintain a business continuity plan designed to ensure continuity of supply in the event of disruption (including dual sourcing of critical components where practicable, safety stock and alternative manufacturing sites), shall test it at least annually, and shall provide a summary of it to the Customer on request.

21.2 The Supplier shall promptly notify the Customer of any actual or anticipated material disruption to supply, any material adverse change in its financial condition, or any change in the place of manufacture or source of critical components of the Goods.

## 22. Dispute Resolution

22.1 **Negotiation.** Any dispute arising out of or in connection with this Agreement or any Purchase Order (a **"Dispute"**) shall first be referred by written notice to the Customer's category manager and the Supplier's account manager, and if not resolved within ten (10) Business Days, to a senior executive of each Party. If the Dispute is not resolved within {{escalation_days}} days of the initial notice, either Party may refer it to arbitration under Clause 22.2.

22.2 **Arbitration.** Any Dispute not resolved under Clause 22.1 shall be referred to and finally resolved by arbitration under the Arbitration and Conciliation Act, 1996 (the **"Arbitration Act"**), by a sole arbitrator appointed by mutual agreement of the Parties within thirty (30) days of a written request, failing which [OPTION A: by the court of competent jurisdiction under section 11 of the Arbitration Act / OPTION B: by the [name of arbitral institution] in accordance with its rules, which shall govern the arbitration]. Neither Party may unilaterally appoint the arbitrator or require the other to choose from a panel proposed by it alone. The seat of arbitration shall be {{arbitration_seat}}, India, and the venue of hearings shall be {{arbitration_venue}}, India (without prejudice to the tribunal's power to hold hearings virtually or elsewhere). The language shall be English. The award shall be final and binding.

22.3 **Courts.** The courts at {{arbitration_seat}} shall have exclusive supervisory jurisdiction over the arbitration. Either Party may seek urgent interim relief from those courts under section 9 of the Arbitration Act or from the tribunal under section 17.

22.4 **MSME disputes.** Nothing in this Clause 22 shall prevent the Supplier, if it is a micro or small enterprise, from making a reference to the Micro and Small Enterprises Facilitation Council under section 18 of the MSMED Act in respect of amounts due under section 17 of that Act.

> **Drafting note:** State the seat separately from the venue (BGS SGS Soma JV v. NHPC Ltd, Supreme Court, 2019). A clause allowing one Party unilaterally to appoint the sole arbitrator is invalid (Perkins Eastman Architects DPC v. HSCC (India) Ltd, 2019; Central Organisation for Railway Electrification v. ECI-SPIC-SMO-MCML (JV), Constitution Bench, 2024). For institutional arbitration, name MCIA, DIAC, IIAC or another institution and use its model clause. The Supreme Court has held that the MSMED Act's dispute mechanism under s.18 overrides a private arbitration agreement for claims by MSE suppliers (Gujarat State Civil Supplies Corporation Ltd v. Mahakali Foods Pvt Ltd, 2022), hence Clause 22.4.

22.5 **Continued performance.** The Supplier shall continue to perform its obligations pending resolution of any Dispute.

## 23. Governing Law and Jurisdiction

23.1 This Agreement and any Dispute shall be governed by the laws of India.

23.2 Subject to Clause 22, the courts at {{governing_city}} shall have exclusive jurisdiction over any matter not capable of resolution by arbitration. Before instituting any suit that is a commercial dispute under the Commercial Courts Act, 2015 (and does not seek urgent interim relief), the claimant shall exhaust pre-institution mediation under section 12A of that Act.

> **Drafting note:** Pre-institution mediation under s.12A of the Commercial Courts Act, 2015 is mandatory for commercial suits not seeking urgent interim relief (Patil Automation Pvt Ltd v. Rakheja Engineers Pvt Ltd, Supreme Court, 2022).

## 24. General

24.1 **Notices.** Notices shall be in writing in English and delivered by hand, by registered post or reputable courier to the addresses stated above, or by email to: (a) the Customer at {{company_email}}; and (b) the Supplier at {{counterparty_email}}; or such other address as a Party notifies in accordance with this Clause. Notices are deemed received: by hand, on delivery; by registered post or courier, on the third (3rd) Business Day after dispatch; by email, at the time of transmission if sent during business hours on a Business Day (and otherwise at the start of the next Business Day), provided that no automated non-delivery message is received. A notice of breach, termination or Dispute sent by email shall also be sent by one of the other methods. Purchase Orders and operational communications may be sent by email or through the Customer's procurement system.

24.2 **Entire agreement.** This Agreement, together with the Schedules, the Purchase Orders and the DPA, constitutes the entire agreement between the Parties in relation to its subject matter and supersedes all prior agreements, understandings and representations. Nothing in this Clause limits liability for fraud.

24.3 **Assignment.** The Supplier shall not assign, transfer, novate or subcontract any of its rights or obligations without the Customer's prior written consent, except that the Supplier may assign its receivables under this Agreement to a bank or financial institution, including through the Trade Receivables Discounting System (TReDS), on notice to the Customer. The Customer may assign or novate this Agreement to any of its Affiliates or to a successor to the relevant business on written notice to the Supplier.

24.4 **Change of Control.** The Supplier shall notify the Customer in writing at least thirty (30) days before (or, where prior notice is prohibited by law or confidentiality obligations, promptly after) any Change of Control of the Supplier, and Clause 18.3(e) shall apply.

24.5 **Independent contractors.** The Supplier is an independent contractor. Nothing in this Agreement creates any partnership, joint venture, agency or employment relationship between the Parties.

24.6 **Non-exclusivity and no restraint.** Nothing in this Agreement restricts the Supplier from supplying goods or services to any other person (subject to Clauses 12.1 and 13), or the Customer from procuring goods or services from any other person.

24.7 **Amendment.** No amendment to this Agreement is effective unless in writing and signed by authorised representatives of both Parties.

24.8 **Waiver.** No failure or delay in exercising any right shall operate as a waiver of it.

24.9 **Severability.** If any provision is held invalid or unenforceable, it shall be modified to the minimum extent necessary to make it valid, or deleted, and the remainder of this Agreement shall continue in effect.

24.10 **Third-party rights.** Except for the Customer Indemnitees under Clause 15, no person other than the Parties has any right under this Agreement.

24.11 **Publicity.** The Supplier shall not publicise its relationship with the Customer, or use the Customer's name or trade marks in any marketing material or customer list, without the Customer's prior written consent.

24.12 **Remedies cumulative; specific performance.** The rights and remedies of the Customer under this Agreement are cumulative and in addition to its rights at law, including the right to specific performance under the Specific Relief Act, 1963.

24.13 **Counterparts and electronic execution.** This Agreement may be executed in counterparts and by electronic signature in accordance with the Information Technology Act, 2000. Each Party shall retain the electronic signature audit trail and shall cooperate in furnishing any certificate required under section 63 of the Bharatiya Sakshya Adhiniyam, 2023 to prove this Agreement or any Purchase Order, invoice or other electronic record relating to it.

24.14 **Stamp duty.** Stamp duty on this Agreement shall be borne by {{stamp_duty_payer}}, and the Parties shall ensure that this Agreement is duly stamped (by e-stamping or otherwise) under the applicable stamp law before or at the time of execution.

> **Drafting note:** An unstamped or under-stamped agreement is inadmissible in evidence until the deficit duty and penalty are paid, but it is not void, and the arbitration clause remains enforceable (In re: Interplay between Arbitration Agreements under the Arbitration and Conciliation Act, 1996 and the Indian Stamp Act, 1899, seven-judge bench, Supreme Court, 13 December 2023). Some States levy ad valorem duty on works or supply contracts; check whether Purchase Orders attract duty.

## Execution

IN WITNESS WHEREOF the Parties have executed this Agreement through their duly authorised representatives on the Effective Date.

| For and on behalf of **{{company_name}}** (Customer) | For and on behalf of **{{counterparty_name}}** (Supplier) |
|---|---|
| Signature: ______________________ | Signature: ______________________ |
| Name: {{company_signatory_name}} | Name: {{counterparty_signatory_name}} |
| Designation: {{company_signatory_title}} | Designation: {{counterparty_signatory_title}} |
| Date: ______________________ | Date: ______________________ |
| Place: ______________________ | Place: ______________________ |

## Schedule 1 – Goods, Services and Specifications

| Item code | Description of Goods / Services | Specification reference (drawing, standard, sample) | Unit of measure | Lead time | Service levels (if any) |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |

Quality requirements: [e.g. ISO 9001 certification; first-article inspection; certificate of conformity with each lot; acceptable quality level].

Mandatory standards and certifications: [e.g. BIS registration / quality control order compliance; FSSAI licence for food contact materials; EPR registration].

## Schedule 2 – Charges and Payment Details

| Item code | Unit price (₹, excluding GST) | HSN / SAC | GST rate | Validity | Price variation formula (if any) |
|---|---|---|---|---|---|
| | | | | | |

Supplier bank account: Account name [●] · Bank [●] · Branch [●] · Account no. [●] · IFSC [●]

TDS/TCS category (to be confirmed by Customer's tax team): [●]

## Schedule 3 – Form of Purchase Order

| Field | Details |
|---|---|
| Purchase Order number and date | |
| Reference to this Vendor Agreement (date) | |
| Customer entity, GSTIN and billing address | |
| Supplier name and GSTIN | |
| Item code, description, quantity, unit price | |
| Total value (excluding GST) | |
| Delivery Date / window | |
| Delivery Location and receiving contact | |
| Special requirements (identify any term intended to override the Agreement) | |
| Authorised signatory of Customer | |

## Schedule 4 – Supplier Code of Conduct (Summary)

The Supplier shall, and shall ensure that its subcontractors shall:

1. Comply with all Applicable Law.
2. Not engage in bribery, corruption, fraud, money laundering or anti-competitive conduct (including bid-rigging or price-fixing with other suppliers, which is prohibited by the Competition Act, 2002).
3. Not use child labour, forced, bonded or trafficked labour; pay at least the applicable minimum wage; comply with lawful working hours; and respect freedom of association.
4. Provide a safe and healthy workplace and prevent sexual harassment.
5. Not discriminate on the grounds of caste, religion, gender, sexual orientation, disability, age or any other protected characteristic.
6. Disclose conflicts of interest, and not offer gifts or hospitality to Customer employees beyond nominal value.
7. Protect confidential information and personal data.
8. Minimise environmental impact and comply with environmental permits and waste-management obligations.
9. Report any breach of this Code of Conduct to the Customer's designated ethics contact, without fear of retaliation.

## Schedule 5 – MSME Declaration

To: {{company_name}}

We, {{counterparty_name}}, declare that:

1. We [are / are not] registered under the Udyam registration portal of the Ministry of Micro, Small and Medium Enterprises.
2. Udyam Registration Number: ______________________ Date of registration: ______________________
3. Classification as on date: [Micro / Small / Medium] enterprise, engaged in [manufacturing / services / trading].
4. The goods and services supplied under the Vendor Agreement fall within the activities covered by our Udyam registration.
5. We shall notify you in writing within seven (7) days of any change in our registration or classification.

A copy of our Udyam registration certificate is enclosed.

For {{counterparty_name}}

Signature: ______________________ Name: ______________________ Designation: ______________________ Date: ______________________
