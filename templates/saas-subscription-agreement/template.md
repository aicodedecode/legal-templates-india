---
id: saas-subscription-agreement
title: SaaS Subscription Agreement
category: commercial
summary: >-
  B2B software-as-a-service terms between a provider and an enterprise customer, with order forms, AI-feature, DPDP and exit provisions.
audience: [startup, sme, enterprise]
jurisdiction: IN
governing_laws:
  - Indian Contract Act, 1872
  - Information Technology Act, 2000
  - Digital Personal Data Protection Act, 2023
  - Copyright Act, 1957
  - Central Goods and Services Tax Act, 2017
  - Micro, Small and Medium Enterprises Development Act, 2006
  - Arbitration and Conciliation Act, 1996
document_type: agreement
parties: 2
stamp_duty: required
e_signature: permitted
version: 0.1.0
last_updated: 2026-10-16
review_status: draft
related: [service-level-agreement, data-processing-agreement, master-services-agreement, statement-of-work, ai-acceptable-use-policy, mutual-nda, terms-of-use]
fields:
  - key: effective_date
    type: date
    label: Effective date of this Agreement
    example: 1 November 2026
  - key: company_name
    type: text
    label: Provider's full legal name
    example: Acme Cloud Software Private Limited
  - key: company_cin
    type: text
    label: Provider's Corporate Identity Number (CIN) or LLPIN
    example: U72900KA2021PTC145678
  - key: company_address
    type: textarea
    label: Provider's registered office address
    example: 3rd Floor, 21 Koramangala Industrial Layout, Bengaluru 560095, Karnataka
  - key: counterparty_name
    type: text
    label: Customer's full legal name
    example: Bharat Logistics Limited
  - key: counterparty_cin
    type: text
    label: Customer's Corporate Identity Number (CIN) or LLPIN
    example: L63000MH2008PLC187654
  - key: counterparty_address
    type: textarea
    label: Customer's registered office address
    example: 5th Floor, One Business Bay, Andheri East, Mumbai 400069, Maharashtra
  - key: hosting_location
    type: text
    label: Primary hosting location of Customer Data
    example: India (Mumbai and Hyderabad cloud regions)
  - key: breach_notice_hours
    type: number
    label: Hours within which Provider notifies Customer of a personal data breach
    example: "24"
  - key: security_incident_hours
    type: number
    label: Hours within which Provider notifies Customer of a Security Incident affecting Customer Data (other than a personal data breach)
    example: "48"
  - key: payment_days
    type: number
    label: Days from invoice date within which Customer must pay
    example: "30"
  - key: dispute_notice_days
    type: number
    label: Days from receipt of invoice within which Customer may dispute it
    example: "15"
  - key: late_interest_rate
    type: text
    label: Simple interest rate per annum on overdue amounts (percentage)
    example: "12"
  - key: renewal_notice_days
    type: number
    label: Days before end of a Subscription Term by which non-renewal notice must be given
    example: "60"
  - key: price_notice_days
    type: number
    label: Days' notice of a price increase on renewal
    example: "90"
  - key: price_increase_cap_percent
    type: number
    label: Maximum percentage increase in Subscription Fees on any renewal
    example: "7"
  - key: suspension_notice_days
    type: number
    label: Days' notice before suspension for non-payment
    example: "15"
  - key: warranty_cure_days
    type: number
    label: Days for Provider to cure a breach of the functionality warranty
    example: "30"
  - key: super_cap_multiple
    type: text
    label: Multiple of Annual Contract Value for the super-cap (market range 2x to 5x)
    example: two (2)
  - key: cure_period_days
    type: number
    label: Days allowed to cure a material breach
    example: "30"
  - key: data_export_days
    type: number
    label: Days after termination during which Customer may export its data
    example: "30"
  - key: deletion_days
    type: number
    label: Days after the export window within which Provider deletes Customer Data
    example: "60"
  - key: confidentiality_years
    type: number
    label: Years for which confidentiality survives termination
    example: "5"
  - key: escalation_days
    type: number
    label: Days for senior-executive negotiation before arbitration may begin
    example: "30"
  - key: arbitration_seat
    type: text
    label: Seat of arbitration (city)
    example: Bengaluru
  - key: arbitration_venue
    type: text
    label: Venue for hearings
    example: Bengaluru
  - key: governing_city
    type: text
    label: City whose courts have jurisdiction for non-arbitrable matters
    example: Bengaluru
  - key: company_email
    type: email
    label: Provider's email address for legal notices
    example: legal@acmecloud.example
  - key: counterparty_email
    type: email
    label: Customer's email address for legal notices
    example: legal@bharatlogistics.example
  - key: stamp_duty_payer
    type: text
    label: Party bearing stamp duty on this Agreement
    example: the Customer
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

# SOFTWARE-AS-A-SERVICE SUBSCRIPTION AGREEMENT

> **Drafting note:** This Agreement is for a business-to-business subscription to hosted software, signed with an enterprise customer. It is drafted as a balanced provider paper: the Provider retains its platform IP and limits its liability, while the Customer receives the commitments on data ownership, security, AI features, service levels and exit that Indian enterprise procurement and information-security teams routinely require. It is not suitable for consumers or click-through sign-up (use terms-of-use for a self-serve product, and make sure the Consumer Protection Act, 2019 is respected). Where implementation or custom development is material, pair this Agreement with the master-services-agreement and statement-of-work templates. Delete all drafting notes before signing.

This Software-as-a-Service Subscription Agreement (the **"Agreement"**) is made on {{effective_date}} (the **"Effective Date"**)

**BETWEEN**

**{{company_name}}**, a company incorporated under the laws of India with corporate identity number {{company_cin}} and its registered office at {{company_address}} (the **"Provider"**, which expression shall, unless repugnant to the context or meaning thereof, include its successors and permitted assigns) of the ONE PART;

**AND**

**{{counterparty_name}}**, a company incorporated under the laws of India with corporate identity number {{counterparty_cin}} and its registered office at {{counterparty_address}} (the **"Customer"**, which expression shall, unless repugnant to the context or meaning thereof, include its successors and permitted assigns) of the OTHER PART.

The Provider and the Customer are each referred to as a **"Party"** and together as the **"Parties"**.

**WHEREAS:**

(A) The Provider has developed and owns, and makes available on a software-as-a-service basis, the software platform described in the Documentation and the relevant Order Form.

(B) The Customer wishes to subscribe to the Subscription Services for use in its business, and the Provider has agreed to provide them, on the terms and subject to the conditions of this Agreement.

**NOW, THEREFORE, IN CONSIDERATION OF** the mutual covenants and agreements set out below, and for other good and valuable consideration (the receipt and sufficiency of which are acknowledged), the Parties agree as follows:

## 1. Definitions and Interpretation

1.1 **Definitions.** In this Agreement, unless the context otherwise requires:

**"Affiliate"** means, in relation to a Party, any entity that directly or indirectly controls, is controlled by, or is under common control with that Party, where "control" means the ownership of more than fifty per cent (50%) of the voting securities of the entity, or the right to appoint a majority of its board of directors, or the power to direct its management or policies by contract or otherwise.

**"Aggregated Data"** means data derived from the operation of the Subscription Services and from Customer Data that has been aggregated with data of other customers and de-identified so that it does not identify, and cannot reasonably be used to identify, the Customer, any Authorised User or any individual, and that contains no Customer Confidential Information.

**"AI Features"** means any functionality of the Subscription Services that uses machine learning, large language models or other artificial intelligence techniques to generate Output in response to Input, whether operated by the Provider or by a Third-Party AI Provider.

**"Annual Contract Value"** means, as at the date of the event giving rise to a claim, the total Subscription Fees payable by the Customer for the twelve (12) month period of the then-current Subscription Term in which that event occurs (or, if shorter than twelve (12) months, the Subscription Fees annualised).

**"Applicable Law"** means all statutes, laws, ordinances, rules, regulations, notifications, circulars, directions, guidelines, orders, judgments and decrees of any governmental, statutory, regulatory or judicial authority having jurisdiction, as amended from time to time, that apply to a Party or to the subject matter of this Agreement.

**"Authorised User"** means an employee, officer, contractor or agent of the Customer or its Affiliates whom the Customer authorises to use the Subscription Services under Clause 3.3 and for whom a user credential has been issued.

**"Business Day"** means a day other than a Saturday, Sunday or gazetted public holiday on which scheduled banks are open for business in the city of the Provider's registered office.

**"BSA"** means the Bharatiya Sakshya Adhiniyam, 2023.

**"Change of Control"** means, in relation to a Party, any person or persons acting in concert, who did not control that Party on the Effective Date, acquiring control (as defined in the definition of Affiliate) of that Party.

**"Confidential Information"** has the meaning given in Clause 14.1.

**"Customer Data"** means all data, content, files, records and information (including Customer Personal Data) submitted, uploaded, transmitted, imported or otherwise provided to the Subscription Services by or on behalf of the Customer or its Authorised Users, or collected by the Subscription Services from the Customer's systems at its direction, together with all Input and Output, but excluding Aggregated Data and Service Data.

**"Customer Personal Data"** means Customer Data that is personal data within the meaning of the DPDP Act.

**"Documentation"** means the Provider's then-current user guides, technical specifications, help-centre articles and other documentation describing the functionality and use of the Subscription Services, as made available to the Customer.

**"DPA"** means the data processing agreement between the Parties referred to in Clause 8.2.

**"DPDP Act"** means the Digital Personal Data Protection Act, 2023 and the Digital Personal Data Protection Rules, 2025, each as amended and in force from time to time.

**"Fees"** means the Subscription Fees, any fees for Professional Services, and any other fees set out in an Order Form.

**"Input"** means any prompt, query, instruction, file or other content submitted by or on behalf of the Customer or an Authorised User to an AI Feature.

**"Intellectual Property Rights"** means patents, utility models, rights to inventions, copyright and related rights (including in computer programmes and databases), moral rights, trade marks, service marks, trade names, domain names, rights in get-up, rights in designs, rights in confidential information (including know-how and trade secrets) and all other intellectual property rights, in each case whether registered or unregistered, including all applications for and renewals or extensions of such rights, and all similar or equivalent rights in any part of the world.

**"Losses"** means all losses, liabilities, damages, costs (including reasonable legal fees and expenses), charges, fines, penalties and expenses.

**"Malicious Code"** means viruses, worms, time bombs, Trojan horses, ransomware and other harmful or malicious code, files, scripts, agents or programmes.

**"Order Form"** means an ordering document, substantially in the form of Schedule 1, that is signed by both Parties (or by an Affiliate of the Customer and the Provider under Clause 2.3) and that specifies the Subscription Services, Subscription Term, usage limits, Fees and other commercial terms.

**"Output"** means content, data, text, code, images or other material generated by an AI Feature in response to Input.

**"Professional Services"** means implementation, configuration, data migration, training or other services described in an Order Form or a statement of work, other than the Subscription Services and Support.

**"Provider Technology"** means the Subscription Services, the Documentation, the software, source code, object code, algorithms, models (including model weights and parameters), interfaces, application programming interfaces, databases (other than Customer Data), tools, templates, workflows and know-how used by the Provider to provide the Subscription Services, and all modifications, enhancements, updates and derivative works of any of them, by whomever made.

**"Security Incident"** means any actual unauthorised access to, or acquisition, use, disclosure, alteration, loss or destruction of, Customer Data in the possession or control of the Provider or its Sub-processors, and includes a personal data breach within the meaning of the DPDP Act affecting Customer Personal Data.

**"Service Data"** means technical, usage and diagnostic data (such as logs, performance metrics, feature-usage statistics and device and browser information) generated by the operation of the Subscription Services, excluding Customer Data.

**"Service Level Schedule"** means the service level schedule attached to, or referenced in, an Order Form, setting out the availability commitment, support response targets and service credits for the Subscription Services.

**"Sub-processor"** means any third party engaged by the Provider that processes Customer Personal Data on the Provider's behalf in connection with the Subscription Services.

**"Subscription Fees"** means the fees payable for the Subscription Services as set out in an Order Form.

**"Subscription Services"** means the online, hosted software services identified in an Order Form, including the AI Features (if any) included in the Customer's subscription, together with all updates and upgrades made generally available by the Provider during the Subscription Term.

**"Subscription Term"** means the initial subscription term stated in an Order Form, together with any renewal term under Clause 18.2.

**"Support"** means the technical support for the Subscription Services described in Clause 4.4 and the Service Level Schedule.

**"Third-Party AI Provider"** means a third party that supplies a foundation model, large language model or other AI model or service used by the Provider to deliver any AI Feature.

**"Third-Party Services"** means any software, application, platform, data source or service that is not provided by the Provider and that interoperates with the Subscription Services, including those accessed by the Customer through an integration or connector.

1.2 **Interpretation.** In this Agreement, unless the context otherwise requires: (a) headings are for convenience only and do not affect interpretation; (b) the recitals and schedules form part of this Agreement; (c) the singular includes the plural and vice versa, and a reference to a gender includes all genders; (d) "including", "include" and "in particular" are illustrative and do not limit the preceding words; (e) a reference to a statute or statutory provision includes any subordinate legislation made under it and any amendment, re-enactment or replacement of it, and a reference to the Income-tax Act means the Income-tax Act, 2025 or any law that replaces it; (f) "written" or "in writing" includes email, but not instant messaging or in-application chat; (g) a reference to "days" means calendar days unless Business Days are specified; (h) no rule of construction shall apply to the disadvantage of a Party on the basis that it prepared this Agreement; and (i) a reference to a Party includes its successors and permitted assigns.

## 2. Structure, Order Forms and Precedence

2.1 **Order Forms.** The Customer may subscribe to Subscription Services and purchase Professional Services by executing Order Forms. Each Order Form is governed by and incorporates this Agreement. The Provider has no obligation to provide any service until an Order Form for it has been signed by both Parties.

2.2 **Order of precedence.** In the event of any conflict or inconsistency, the following order of precedence applies (in descending order): (a) the DPA, solely with respect to the processing of Customer Personal Data; (b) an Order Form, solely with respect to the commercial terms specified in it (Subscription Services, usage limits, Subscription Term, Fees and payment terms), and with respect to any other term only where the Order Form expressly identifies the Clause of this Agreement that it varies; (c) the clauses of this Agreement; (d) the Service Level Schedule; (e) the other Schedules; and (f) the Documentation.

2.3 **Affiliates.** An Affiliate of the Customer may enter into an Order Form with the Provider by reference to this Agreement, in which case that Affiliate shall be treated as the "Customer" for the purposes of that Order Form, and that Order Form together with this Agreement shall form a separate contract between the Provider and that Affiliate. The Customer shall be jointly and severally liable with its Affiliate for that Affiliate's payment obligations unless the Order Form provides otherwise.

2.4 **Exclusion of other terms.** No terms contained in or referred to in any purchase order, vendor registration document, procurement portal, invoice, click-through or other document of either Party shall apply to the Subscription Services or modify this Agreement, even if signed or accepted, unless the Parties expressly agree otherwise by signed amendment.

## 3. Subscription Rights and Restrictions

3.1 **Grant.** Subject to the terms of this Agreement and payment of the applicable Fees, the Provider grants to the Customer, for the Subscription Term, a non-exclusive, non-transferable (except under Clause 24.3), non-sublicensable (except to Authorised Users) right, within the territory and usage limits specified in the Order Form, to access and use the Subscription Services and the Documentation, through its Authorised Users, solely for the internal business purposes of the Customer and its Affiliates.

3.2 **Nature of right.** The Subscription Services are provided as a service. Nothing in this Agreement transfers to the Customer any title to, or copy of, the software underlying the Subscription Services, or obliges the Provider to deliver any object code or source code, except as expressly provided in an Order Form.

> **Drafting note:** Whether consideration for SaaS is "royalty" or business income for withholding-tax purposes, and whether GST is levied as a supply of services, depends on how the right is characterised. Clause 3.2 records a service, not a licence of copyright. Confirm the withholding position under the Income-tax Act, 2025 with a tax adviser, particularly where the Provider is non-resident (in which case the applicable tax treaty, the significant economic presence rules and the equalisation levy position should all be checked [verify current status of the equalisation levy]).

3.3 **Authorised Users.** The Customer shall ensure that: (a) the number of Authorised Users, and any other usage metric (such as transactions, API calls, storage, records or AI credits) does not exceed the limits in the Order Form; (b) each user credential is used by a single named individual and is not shared, save that credentials may be reassigned to a new individual when the original user no longer requires access; (c) Authorised Users keep their credentials confidential; and (d) Authorised Users comply with this Agreement. The Customer is responsible for the acts and omissions of its Authorised Users as if they were its own.

3.4 **Usage limits and true-up.** The Provider may monitor usage of the Subscription Services against the limits in the Order Form. If the Customer exceeds any usage limit, the Provider shall notify the Customer, and the Customer shall within thirty (30) days either reduce its usage to within the limit or execute an Order Form for the additional usage at the rates specified in the existing Order Form (or, if none, the Provider's then-current list rates less any discount percentage applicable to the existing Order Form), pro-rated for the remainder of the Subscription Term. The Provider may apply reasonable technical throttling to protect the stability of the Subscription Services where usage materially exceeds the limits, after giving notice.

3.5 **Restrictions.** The Customer shall not, and shall not permit any person to: (a) sell, resell, rent, lease, sublicense, distribute, time-share or otherwise make the Subscription Services available to any third party other than Authorised Users; (b) copy, modify, translate or create derivative works of the Provider Technology; (c) decompile, disassemble, reverse engineer or otherwise attempt to derive the source code, model weights, underlying algorithms or structure of the Provider Technology, except to the extent that such restriction is prohibited by Applicable Law (including section 52(1)(ab) of the Copyright Act, 1957, for interoperability, after first requesting the necessary information from the Provider); (d) access the Subscription Services to build a competing product or service, or to copy any features, functions or user interface; (e) use the Subscription Services in breach of Applicable Law or the Acceptable Use Policy in Schedule 3; (f) introduce Malicious Code into, or interfere with or disrupt the integrity or performance of, the Subscription Services; (g) attempt to gain unauthorised access to the Subscription Services or related systems, or perform penetration testing or vulnerability scanning without the Provider's prior written consent; (h) use any automated means to scrape, extract or harvest data from the Subscription Services other than through documented APIs within applicable rate limits; (i) use any AI Feature or Output to develop or train a model that competes with the Subscription Services; or (j) remove or obscure any proprietary notice in the Provider Technology.

3.6 **Affiliates and contractors.** The Customer may permit its Affiliates and its contractors to use the Subscription Services as Authorised Users solely for the benefit of the Customer and its Affiliates, provided that the Customer remains liable for their compliance with this Agreement.

## 4. Provider Obligations, Service Levels and Support

4.1 **Provision of services.** The Provider shall provide the Subscription Services: (a) substantially in accordance with the Documentation; (b) in accordance with the Service Level Schedule; (c) with reasonable skill and care and in accordance with good industry practice for providers of comparable software-as-a-service in India; and (d) in compliance with Applicable Law that applies to the Provider as a provider of the Subscription Services.

4.2 **Service levels.** The Provider shall use commercially reasonable efforts to make the Subscription Services available in accordance with the availability commitment in the Service Level Schedule. The Customer's rights to service credits and to terminate for chronic failure in respect of availability and support failures are set out in the Service Level Schedule.

4.3 **Changes to the Subscription Services.** The Provider may update and modify the Subscription Services from time to time, provided that it shall not, during a Subscription Term, materially decrease the overall functionality, security or performance of the Subscription Services to which the Customer has subscribed. The Provider shall give the Customer not less than ninety (90) days' written notice before deprecating any material feature or API (or such shorter notice as is reasonably practicable where required by Applicable Law, a security vulnerability or a Third-Party AI Provider withdrawing a model, in which case the Provider shall use commercially reasonable efforts to substitute a functionally comparable feature or model). If a change made by the Provider materially and adversely affects the Customer, the Customer may, within thirty (30) days after the change takes effect, terminate the affected Order Form on written notice and receive a pro-rata refund of prepaid Subscription Fees for the remainder of the Subscription Term.

4.4 **Support.** The Provider shall provide Support during the Subscription Term at the support tier specified in the Order Form, in accordance with the Service Level Schedule. Support includes access to the Provider's help desk via the channels described in the Service Level Schedule, investigation and resolution of reproducible errors in the Subscription Services, and access to updates. Support does not include Professional Services, or the resolution of issues caused by Third-Party Services, Customer Data, the Customer's systems or a breach of this Agreement by the Customer.

4.5 **Professional Services.** Any Professional Services shall be described in an Order Form or a statement of work. Unless the Parties have entered into a separate master services agreement, Professional Services shall be performed with reasonable skill and care, and any deliverables shall be licensed to the Customer as part of the Subscription Services (and not assigned) unless the Order Form expressly states otherwise.

4.6 **Hosting location.** Unless an Order Form provides otherwise, the Provider shall host Customer Data in {{hosting_location}}, and shall not change the primary hosting location to a different country without giving the Customer not less than ninety (90) days' prior written notice. Clause 8.7 governs any access to or transfer of Customer Personal Data outside India.

## 5. Customer Responsibilities

5.1 **General.** The Customer shall: (a) be responsible for the accuracy, quality, integrity and lawfulness of Customer Data and the means by which it was acquired; (b) use commercially reasonable efforts to prevent unauthorised access to or use of the Subscription Services, and notify the Provider promptly of any such access or use; (c) provide and maintain the equipment, connectivity and browsers that meet the minimum requirements in the Documentation; (d) configure the Subscription Services (including user roles, access permissions, retention settings and integrations) appropriately for its needs; and (e) use the Subscription Services only in accordance with this Agreement, the Documentation and Applicable Law.

5.2 **Lawful basis.** The Customer shall ensure that it has given all notices and obtained all consents, or has another lawful basis under the DPDP Act and any other Applicable Law, for the Provider to process Customer Personal Data as contemplated by this Agreement, including through AI Features.

5.3 **Third-Party Services.** The Customer may choose to use Third-Party Services with the Subscription Services. The Customer's use of Third-Party Services is governed solely by its agreement with the relevant third party. If the Customer enables a Third-Party Service, it authorises the Provider to allow that Third-Party Service to access Customer Data as required for the interoperation. The Provider is not responsible for any Third-Party Service, for any disclosure, modification or deletion of Customer Data by it, or for any unavailability of the Subscription Services caused by it. A Third-Party Service shall not be treated as a Sub-processor of the Provider unless the Provider engages it.

## 6. Customer Data

6.1 **Ownership.** As between the Parties, the Customer owns and retains all right, title and interest (including all Intellectual Property Rights) in and to Customer Data. The Provider acquires no right in Customer Data other than the limited rights granted in this Clause 6 and Clause 7.

6.2 **Licence to Provider.** The Customer grants to the Provider and its Sub-processors a non-exclusive, worldwide (subject to Clauses 4.6 and 8.7), royalty-free licence during the Subscription Term and any data export period under Clause 19 to host, copy, transmit, display, process and use Customer Data solely to: (a) provide, maintain, secure and support the Subscription Services for the Customer; (b) prevent or address service, security or technical problems; (c) comply with Applicable Law; and (d) as otherwise expressly permitted by the Customer in writing.

6.3 **Service Data and Aggregated Data.** The Provider may collect and use Service Data to operate, secure, maintain, analyse and improve the Subscription Services, and may create and use Aggregated Data for any lawful purpose, including to improve its products and to publish benchmarking or statistical reports, provided that the Provider: (a) does not disclose Aggregated Data in a form that identifies, or could reasonably be used to identify, the Customer, any Authorised User or any individual; (b) does not attempt to re-identify any Aggregated Data; and (c) processes any personal data contained in Service Data in compliance with the DPDP Act. Aggregated Data shall not be used to train any AI model except in accordance with Clause 7.3.

6.4 **No sale.** The Provider shall not sell, rent or otherwise commercialise Customer Data, and shall not use Customer Data for advertising or for profiling Authorised Users.

6.5 **Back-ups.** The Provider shall back up Customer Data in accordance with Schedule 2 and the Service Level Schedule (including any recovery point and recovery time objectives stated in it). The Provider shall use commercially reasonable efforts to restore any lost or corrupted Customer Data from its most recent back-up where the loss or corruption is caused by the Provider. Restoring Customer Data from the Provider's back-ups shall be the Customer's sole remedy for loss or corruption of Customer Data, except where it is caused by a breach of Clause 8 or Clause 9 by the Provider or by the Provider's wilful misconduct.

6.6 **Legal requests.** If the Provider receives any order, direction, summons or request from a court, regulator or law enforcement agency for access to Customer Data, it shall (unless prohibited by Applicable Law) promptly notify the Customer, provide a copy of the request, redirect the requesting authority to the Customer where reasonably possible, and disclose only the Customer Data that it is legally compelled to disclose.

## 7. AI Features

7.1 **Applicability.** This Clause 7 applies to the extent that the Subscription Services include AI Features. The Order Form or Documentation shall identify the AI Features included and whether they are operated using any Third-Party AI Provider.

7.2 **Input and Output ownership.** As between the Parties, the Customer owns all Input. To the extent that any Intellectual Property Rights subsist in Output, the Provider hereby assigns to the Customer, with effect from the time each Output is generated, all of the Provider's right, title and interest in and to that Output, for the full term of those rights and throughout the world, and waives (and shall procure the waiver of) any claim to it. The Customer acknowledges that: (a) Output may not be protectable by Intellectual Property Rights under Applicable Law; (b) because of the nature of AI, Output may be similar or identical to output generated for other customers, and the Provider's assignment does not extend to such similar output generated independently for others; and (c) the Provider does not transfer any rights in the Provider Technology, including any model, prompt template or system instruction, by reason of this Clause 7.2.

> **Drafting note:** Whether AI-generated material is protected by copyright in India, and who its "author" would be under s.2(d)(vi) of the Copyright Act, 1957 (which deals with computer-generated works), is unsettled [verify current position]. Clause 7.2 therefore assigns whatever rights the Provider may have rather than warranting that any exist. Where the Customer intends to commercialise Output, it should take its own advice on protectability.

7.3 **No training on Customer Data.** The Provider shall not, and shall ensure that its Sub-processors and Third-Party AI Providers do not, use Customer Data (including Input and Output), or any Aggregated Data derived from Input or Output, to train, retrain, fine-tune or otherwise improve any AI model that is made available to any person other than the Customer, unless the Customer has given its prior, express and written consent by signing an Order Form or written instrument that specifically refers to this Clause 7.3. Any such consent may be withdrawn by the Customer on thirty (30) days' written notice, and withdrawal shall apply to future use only. The Provider may use Customer Data to fine-tune or configure a model instance that is dedicated to, and used only for, the Customer, where that is a feature the Customer has enabled.

7.4 **Third-Party AI Providers.** Where an AI Feature uses a Third-Party AI Provider: (a) the Provider shall engage the Third-Party AI Provider as a Sub-processor in accordance with Clause 8; (b) the Provider shall ensure, through its contract with the Third-Party AI Provider, that Input and Output are not retained by the Third-Party AI Provider longer than necessary to provide the AI Feature (and in any event not longer than the period stated in the Documentation) and are not used to train its models; and (c) the Provider shall identify the Third-Party AI Provider and the location of processing in the Documentation or the Sub-processor list.

7.5 **Customer responsibilities for AI use.** The Customer acknowledges that Output is generated probabilistically, may be inaccurate, incomplete, biased or inappropriate, and should be reviewed by a suitably qualified human before being relied upon. The Customer is responsible for: (a) its Input, including having all necessary rights in it; (b) evaluating Output for accuracy and suitability for its use case; (c) not using AI Features or Output to make any decision that produces legal or similarly significant effects for an individual without meaningful human review; (d) complying with the Acceptable Use Policy in Schedule 3 and any AI-specific usage policy notified by the Provider; and (e) complying with Applicable Law relating to its use of Output, including any obligation to label or disclose synthetically generated information.

> **Drafting note:** The Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021 have been amended to impose labelling and metadata obligations for synthetically generated information on certain intermediaries [verify date of commencement and scope]. MeitY advisories on AI have changed several times; check the current position. If the Customer is in a regulated sector (credit, insurance, health, employment screening), add sector-specific restrictions and consider requiring the Customer to adopt the ai-acceptable-use-policy template internally.

7.6 **Provider responsibilities for AI Features.** The Provider shall: (a) describe in the Documentation the intended purpose, known material limitations and the categories of data used by each AI Feature; (b) implement reasonable safeguards designed to prevent AI Features from generating unlawful content or from disclosing one customer's data to another; (c) allow the Customer's administrators to disable AI Features for the Customer's account; and (d) promptly notify the Customer of any material change to the Third-Party AI Provider or model used for an AI Feature.

## 8. Data Protection

8.1 **Roles.** The Parties acknowledge that, in respect of Customer Personal Data, the Customer is the Data Fiduciary and the Provider is a Data Processor processing Customer Personal Data on behalf of the Customer, each within the meaning of the DPDP Act. To the extent the Provider processes personal data of Authorised Users as Service Data for its own account-management, security and billing purposes, the Provider acts as a Data Fiduciary and shall comply with the DPDP Act accordingly.

8.2 **DPA.** The Parties shall execute a DPA, substantially in the form of the Parties' agreed data processing agreement, on or before the Effective Date, and it shall form part of this Agreement. In the absence of an executed DPA, the provisions of this Clause 8 shall constitute the Parties' contract for processing under the DPDP Act.

> **Drafting note:** Use the data-processing-agreement template for the DPA. The DPDP Rules, 2025 were notified in November 2025 with phased commencement; the core obligations of Data Fiduciaries (notice, security safeguards, breach intimation, retention and erasure, children's data and Data Principal rights) are expected to apply from around May 2027 [verify exact commencement dates]. Until then, s.43A of the Information Technology Act, 2000 and the 2011 SPDI Rules continue to apply to sensitive personal data [verify]. The template is drafted to the DPDP standard now so that it does not need to be amended on commencement. If the Customer is subject to the EU GDPR or UK GDPR, add Art. 28 terms and a transfer mechanism.

8.3 **Processing on instructions.** The Provider shall process Customer Personal Data only: (a) on the documented instructions of the Customer, which are constituted by this Agreement, the Order Form, the DPA and the Customer's use and configuration of the Subscription Services; and (b) for the purpose of providing the Subscription Services, Support and Professional Services. The Provider shall inform the Customer if, in its opinion, an instruction infringes the DPDP Act.

8.4 **Security safeguards.** The Provider shall implement and maintain reasonable security safeguards, including the technical and organisational measures in Schedule 2, to protect Customer Personal Data against personal data breach, and shall ensure that its personnel authorised to process Customer Personal Data are bound by appropriate confidentiality obligations.

8.5 **Assistance.** Taking into account the nature of the processing, the Provider shall provide reasonable assistance to the Customer (including through self-service functionality in the Subscription Services) to enable the Customer to: (a) respond to requests from Data Principals to access, correct, complete, update or erase their personal data, to nominate, or to have grievances redressed; (b) erase Customer Personal Data when consent is withdrawn or the specified purpose is no longer being served; and (c) respond to any inquiry or proceeding of the Data Protection Board of India. Assistance beyond what is available through the Subscription Services shall be provided at the Provider's then-current Professional Services rates, unless the request arises from the Provider's breach.

8.6 **Sub-processors.** The Customer authorises the Provider to engage the Sub-processors listed in the Documentation or the DPA as at the Effective Date. The Provider shall: (a) give the Customer not less than thirty (30) days' notice (which may be given by updating the Sub-processor list where the Customer has subscribed to update notifications) of any intended addition or replacement of a Sub-processor; (b) impose on each Sub-processor data protection obligations no less protective than those in this Clause 8; and (c) remain liable for the acts and omissions of its Sub-processors. If the Customer objects on reasonable data-protection grounds within that notice period and the Parties cannot agree a solution within thirty (30) days, the Customer may terminate the affected Order Form and receive a pro-rata refund of prepaid Subscription Fees for the remainder of the Subscription Term.

8.7 **Cross-border transfer.** The Provider shall not transfer Customer Personal Data to, or permit it to be accessed from, any country or territory outside India except: (a) to the locations identified in the Sub-processor list or the Order Form; (b) where the transfer is not to a country or territory restricted by the Central Government by notification under section 16 of the DPDP Act; and (c) in compliance with any stricter data localisation requirement applicable to the Customer that the Customer has notified to the Provider in writing before the transfer (for example, under directions of the Reserve Bank of India on storage of payment system data).

8.8 **Personal data breach.** The Provider shall notify the Customer without undue delay, and in any event within {{breach_notice_hours}} hours, after becoming aware of a personal data breach affecting Customer Personal Data. The notification shall describe, to the extent then known, the nature, extent, timing and location of the breach, the categories and approximate numbers of Data Principals and records affected, its likely consequences, the measures taken or proposed to mitigate risk, and a contact point for further information. The Provider shall supplement the notification as further information becomes available, and shall provide all information and cooperation the Customer reasonably requires to enable it to intimate the Data Protection Board of India and each affected Data Principal, and to submit any detailed report, within the time required by the DPDP Act.

> **Drafting note:** Under the DPDP Rules, 2025, the Data Fiduciary must intimate the Board and affected Data Principals without delay and furnish a detailed report to the Board within 72 hours of becoming aware of the breach (or such longer period as the Board allows) [verify]. The Provider's notice period must therefore be materially shorter: 24 hours or less is typical. This is separate from the 6-hour CERT-In reporting obligation in Clause 9.4.

8.9 **Return and deletion.** On termination or expiry, the Provider shall return and delete Customer Personal Data in accordance with Clause 19.

8.10 **Audit.** The Provider shall make available to the Customer the information reasonably necessary to demonstrate compliance with this Clause 8, in accordance with Clause 9.6.

## 9. Security

9.1 **Security programme.** The Provider shall maintain a written information security programme that includes administrative, physical and technical safeguards designed to protect the security, confidentiality and integrity of Customer Data, which shall be no less protective than the measures described in Schedule 2. The Provider shall not materially diminish the overall level of protection afforded by those measures during a Subscription Term.

9.2 **Certifications.** The Provider shall maintain the certifications and attestations (if any) listed in the Order Form (for example, ISO/IEC 27001 certification or a SOC 2 Type II report) and shall, on request, provide the Customer with a copy of its current certificate or report, subject to confidentiality.

9.3 **Security Incidents.** Without prejudice to Clause 8.8, the Provider shall notify the Customer within {{security_incident_hours}} hours after becoming aware of any Security Incident that is not a personal data breach, shall promptly take reasonable steps to contain, investigate and remediate it, and shall provide the Customer with a written post-incident report describing its root cause and the remedial measures taken.

9.4 **CERT-In compliance.** Each Party shall comply with the directions issued by the Indian Computer Emergency Response Team (**"CERT-In"**) under section 70B(6) of the Information Technology Act, 2000 on 28 April 2022, as amended or clarified from time to time (the **"CERT-In Directions"**), to the extent applicable to it, including: (a) reporting specified cyber incidents to CERT-In within six (6) hours of noticing them or being notified of them; (b) enabling and maintaining logs of its ICT systems securely for a rolling period of one hundred and eighty (180) days within Indian jurisdiction; and (c) synchronising its ICT system clocks to the network time protocol servers specified in the CERT-In Directions. The Parties shall cooperate so that each can meet its own reporting obligations within the required time, and shall share such logs and information relating to an incident affecting the Subscription Services as the other reasonably requires and as Applicable Law permits.

> **Drafting note:** The CERT-In Directions also impose additional record-keeping and know-your-customer obligations on data centres, virtual private server providers, cloud service providers and VPN service providers. If the Provider falls within any of those categories (and many SaaS providers that offer infrastructure-like services may), check those obligations specifically. CERT-In reporting runs in parallel with, and is separate from, DPDP breach intimation.

9.5 **Vulnerability management.** The Provider shall conduct vulnerability scanning of the Subscription Services at least monthly and an independent third-party penetration test at least annually, shall remediate identified vulnerabilities in accordance with their severity within the timelines in Schedule 2, and shall, on request, provide the Customer with an executive summary of the most recent penetration test.

9.6 **Security assessments and audit.** Not more than once in any twelve (12) month period (and additionally following a Security Incident or where required by a regulator of the Customer), the Customer may assess the Provider's compliance with Clauses 8 and 9 by: (a) requesting the Provider to complete a reasonable information security questionnaire; and (b) where the Customer reasonably considers that the information provided under (a) and Clause 9.2 is insufficient, conducting (itself or through an independent auditor bound by confidentiality who is not a competitor of the Provider) an audit on not less than thirty (30) days' notice, during business hours, limited to the systems and records relevant to the Subscription Services and conducted so as not to disrupt the Provider's operations or compromise the security of other customers' data. Each Party shall bear its own costs, save that the Provider shall bear the reasonable costs of an audit that reveals a material breach of Clause 8 or Clause 9. Where the Customer is a regulated entity whose regulator requires direct audit or inspection rights over its service providers, the Provider shall grant such rights to the Customer and its regulator to the extent so required.

## 10. Fees, Invoicing and Taxes

10.1 **Fees.** The Customer shall pay the Fees set out in each Order Form. Unless the Order Form provides otherwise: (a) Subscription Fees are invoiced annually in advance on the start date of the Subscription Term and on each anniversary of it; (b) usage-based Fees and overage are invoiced monthly in arrears; and (c) Professional Services Fees are invoiced monthly in arrears or as set out in the Order Form. Subscription Fees are based on subscriptions purchased and not on actual usage, and the number of subscriptions cannot be reduced during a Subscription Term.

10.2 **Payment.** The Customer shall pay each invoice in full within {{payment_days}} days of the date of the invoice, in Indian Rupees (unless the Order Form specifies another currency), by electronic funds transfer to the bank account designated by the Provider.

10.3 **Disputed invoices.** If the Customer disputes any invoice in good faith, it shall notify the Provider in writing within {{dispute_notice_days}} days of receiving it, with reasonable details of the dispute, and shall pay the undisputed portion by the due date. The Parties shall seek to resolve the dispute within thirty (30) days, failing which either Party may refer it to dispute resolution under Clause 22. Any amount agreed or determined to be payable shall be paid within ten (10) Business Days, together with interest under Clause 10.4 from the original due date.

10.4 **Late payment.** Any undisputed amount not paid when due shall bear simple interest at the rate of {{late_interest_rate}} per cent per annum from the due date until the date of payment. The Parties agree that this rate represents a genuine pre-estimate of the Provider's cost of funds and is not a penalty.

10.5 **MSMED Act.** If the Provider is a micro or small enterprise holding a valid Udyam registration under the Micro, Small and Medium Enterprises Development Act, 2006 (the **"MSMED Act"**) and has provided a copy of its registration certificate to the Customer, then, notwithstanding anything in this Agreement: (a) the Customer shall pay each amount due within the period agreed under this Agreement, which shall in no case exceed forty-five (45) days from the day of acceptance or deemed acceptance of the services to which it relates, within the meaning of the MSMED Act; and (b) any delay shall attract interest at the rate and in the manner prescribed by section 16 of the MSMED Act in place of Clause 10.4. The Provider shall promptly notify the Customer of any change in its status under the MSMED Act.

> **Drafting note:** Section 15 of the MSMED Act caps the agreed payment period to a micro or small enterprise supplier at 45 days from acceptance or deemed acceptance, and s.16 imposes compound interest with monthly rests at three times the bank rate notified by the Reserve Bank of India; under s.23 that interest is not deductible for income-tax purposes. In addition, under applicable tax laws a buyer may be denied a deduction for an amount owed to a micro or small enterprise until the year in which it is actually paid, if it is not paid within the MSMED Act time limit (a rule introduced into the Income-tax Act, 1961 from assessment year 2024-25 and understood to be carried into the Income-tax Act, 2025 [verify]). Medium enterprises, and traders whose Udyam registration is limited to priority-sector lending, may not benefit from these protections [verify]. Where the Provider qualifies, the Customer may also need to report overdue amounts in MSME Form 1 [verify].

10.6 **Taxes.** All Fees are exclusive of goods and services tax (**"GST"**) and all other indirect taxes, duties and levies, which shall be charged in addition at the applicable rate. The Provider shall issue tax invoices complying with the Central Goods and Services Tax Act, 2017 and the applicable State or Integrated Goods and Services Tax law (including e-invoicing where applicable), shall reflect each invoice correctly in its GST returns within the prescribed time, and shall be liable to the Customer for any input tax credit that the Customer is denied solely because of the Provider's failure to do so.

10.7 **Tax deduction at source.** If the Customer is required by applicable tax laws to deduct tax at source from any payment to the Provider, it shall deduct no more than the amount required (having regard to any lower or nil deduction certificate furnished by the Provider), deposit the amount deducted with the appropriate authority within the prescribed time, and furnish the Provider with the corresponding certificate within the prescribed time. The amount so deducted and deposited shall be treated as paid to the Provider. If the Customer fails to deposit the tax or furnish the certificate within the prescribed time, it shall reimburse the Provider for any resulting loss of credit.

10.8 **Renewal pricing.** The Subscription Fees for any renewal term shall be the Subscription Fees for the immediately preceding term, provided that the Provider may increase them with effect from the renewal by giving the Customer not less than {{price_notice_days}} days' written notice before the end of the then-current Subscription Term. Any such increase shall not exceed {{price_increase_cap_percent}} per cent of the Subscription Fees for the immediately preceding term, unless the Customer has changed its subscription (for example, by adding modules or users, or changing tier) or the Provider is no longer offering the subscribed edition. If the Customer does not accept an increase, it may give notice of non-renewal under Clause 18.2 notwithstanding that the notice period in that Clause has passed, provided that it does so within fifteen (15) days of receiving the notice of increase.

10.9 **No set-off.** Except for service credits under the Service Level Schedule and any deduction required by applicable tax laws, the Customer shall pay all amounts due without set-off, deduction or counterclaim.

## 11. Suspension

11.1 **Non-payment.** If any undisputed amount remains unpaid for more than thirty (30) days after its due date, the Provider may, after giving the Customer not less than {{suspension_notice_days}} days' written notice (sent to the Customer's billing contact and its notice address under Clause 24.1) that it intends to do so, suspend the Customer's access to the Subscription Services until the amount is paid in full. The Provider shall not suspend for non-payment where the Customer has disputed the amount in good faith under Clause 10.3.

11.2 **Security and legal risk.** The Provider may suspend access to the Subscription Services by the Customer or any Authorised User, in whole or in part, without prior notice, to the extent reasonably necessary and for no longer than necessary, if: (a) the Customer's or an Authorised User's use poses a material risk to the security, integrity or availability of the Subscription Services or any other customer's data; (b) the Customer's or an Authorised User's use is in material breach of Clause 3.5 or the Acceptable Use Policy; or (c) suspension is required by Applicable Law or by an order or direction of a competent authority (including under section 69A of the Information Technology Act, 2000). The Provider shall notify the Customer of the suspension and its reasons as soon as reasonably practicable (unless prohibited by Applicable Law), shall limit the suspension to the affected Authorised Users or functionality where possible, and shall restore access promptly once the reason for it has been resolved.

11.3 **Effect.** Suspension under this Clause 11 does not relieve the Customer of its obligation to pay Fees (except where suspension under Clause 11.2(c) results from the Provider's own breach of Applicable Law). Customer Data shall not be deleted during suspension.

## 12. Intellectual Property

12.1 **Provider Technology.** As between the Parties, the Provider and its licensors own and retain all right, title and interest (including all Intellectual Property Rights) in and to the Provider Technology, Service Data and Aggregated Data. Except for the rights expressly granted in this Agreement, no right, title or interest in the Provider Technology is granted to the Customer, by implication, estoppel or otherwise, and all such rights are reserved.

12.2 **Feedback.** If the Customer or any Authorised User provides suggestions, ideas, enhancement requests or other feedback relating to the Subscription Services (**"Feedback"**), the Provider may use and incorporate the Feedback without restriction or obligation, provided that the Provider shall not identify the Customer as the source of Feedback without its consent and that Feedback shall not include Customer Data or Customer Confidential Information. The Customer grants to the Provider a perpetual, irrevocable, worldwide, royalty-free licence to use the Feedback for any purpose.

12.3 **Customer marks.** The Customer grants to the Provider a non-exclusive, royalty-free licence during the Subscription Term to use the Customer's name and logo solely within the Subscription Services where the Customer has configured them to appear (for example, for white-labelling or branding the Customer's instance).

## 13. Warranties and Disclaimers

13.1 **Mutual warranties.** Each Party represents and warrants that: (a) it is duly incorporated and validly existing under the laws of India; (b) it has full corporate power and authority to enter into and perform this Agreement; (c) this Agreement has been duly authorised, executed and delivered by it and constitutes its legal, valid and binding obligations; and (d) its execution and performance of this Agreement do not breach its constitutional documents, any agreement binding on it or any Applicable Law.

13.2 **Provider warranties.** The Provider warrants that during the Subscription Term: (a) the Subscription Services will perform materially in accordance with the Documentation; (b) the Provider will not materially decrease the overall security of the Subscription Services; (c) the Provider will use industry-standard measures to prevent the introduction of Malicious Code into the Subscription Services; and (d) any Professional Services will be performed in a professional and workmanlike manner consistent with good industry practice.

13.3 **Remedy.** For any breach of the warranty in Clause 13.2(a), the Customer shall notify the Provider in writing, with reasonable detail, and the Provider shall use commercially reasonable efforts to correct the non-conformity within {{warranty_cure_days}} days. If the Provider fails to do so, the Customer may terminate the affected Order Form by written notice within thirty (30) days thereafter and receive a refund of prepaid Subscription Fees for the remainder of the Subscription Term. This Clause 13.3 and the Service Level Schedule state the Customer's sole and exclusive remedies for breach of the warranty in Clause 13.2(a). The warranty does not apply to non-conformities caused by Customer Data, Third-Party Services, use contrary to the Documentation or this Agreement, or free, trial, beta or preview features.

13.4 **Customer warranties.** The Customer warrants that: (a) it has all rights, licences, consents and lawful bases necessary to provide Customer Data to the Provider and for the Provider to process it in accordance with this Agreement; and (b) Customer Data and Input will not infringe the Intellectual Property Rights or other rights of any person, contain Malicious Code, or breach Applicable Law.

13.5 **Beta features.** The Provider may make available features designated as beta, preview, early access or trial (**"Beta Features"**). The Customer may choose whether to use Beta Features. Beta Features are provided "as is", without any warranty, service level, support or indemnity, may be withdrawn at any time, and are excluded from any availability calculation.

13.6 **Disclaimer.** Except as expressly provided in this Agreement, the Subscription Services, AI Features, Output and Documentation are provided without any other warranty, representation, condition or term, whether express or implied by statute, custom or course of dealing, and all such warranties, representations, conditions and terms (including as to merchantability, satisfactory quality, fitness for a particular purpose, accuracy and non-infringement) are excluded to the fullest extent permitted by Applicable Law. The Provider does not warrant that the Subscription Services will be uninterrupted or error-free, that Output will be accurate or complete, or that the Subscription Services will meet requirements of the Customer that are not stated in the Documentation or an Order Form. The Provider is not responsible for delays, delivery failures or other damage resulting from problems inherent in the use of the internet and electronic communications.

## 14. Confidentiality

14.1 **Definition.** **"Confidential Information"** means all information disclosed by or on behalf of one Party (the **"Discloser"**) to the other Party (the **"Recipient"**), whether before or after the Effective Date and in any form, that is designated as confidential or that a reasonable person would understand to be confidential given its nature and the circumstances of disclosure. The Customer's Confidential Information includes Customer Data. The Provider's Confidential Information includes the Provider Technology, non-public pricing, security documentation, audit reports and product roadmaps. The terms of this Agreement and each Order Form are the Confidential Information of both Parties.

14.2 **Exclusions.** Confidential Information (other than Customer Personal Data, which remains subject to Clause 8 in all cases) does not include information that the Recipient can demonstrate by written records: (a) is or becomes generally available to the public other than through a breach of this Agreement; (b) was known to the Recipient, free of any obligation of confidence, before disclosure by the Discloser; (c) is received from a third party who lawfully possesses it free of any obligation of confidence; or (d) is independently developed by the Recipient without use of or reference to the Discloser's Confidential Information.

14.3 **Obligations.** The Recipient shall: (a) use the Discloser's Confidential Information only to perform its obligations and exercise its rights under this Agreement; (b) not disclose it except as permitted by Clause 14.4; and (c) protect it with at least the degree of care it uses for its own confidential information of a similar nature, and in any event no less than reasonable care.

14.4 **Permitted disclosures.** The Recipient may disclose the Discloser's Confidential Information: (a) to its and its Affiliates' directors, officers, employees, contractors, Sub-processors, professional advisers, auditors and insurers who need to know it for the purposes of this Agreement and who are bound by written or professional obligations of confidentiality no less protective than this Clause 14, the Recipient remaining responsible for their compliance; (b) to bona fide actual or prospective investors, lenders or acquirers, limited to the existence and principal terms of this Agreement and subject to confidentiality obligations; and (c) to the extent required by Applicable Law, a court, regulator or stock exchange, provided that (where lawful) the Recipient gives the Discloser prompt prior written notice and reasonable assistance to contest or limit the disclosure, and discloses only the minimum required.

14.5 **Duration.** The obligations in this Clause 14 shall continue during the term of this Agreement and for {{confidentiality_years}} years after its termination or expiry, save that obligations in respect of trade secrets, source code and Customer Data shall continue for so long as the information remains confidential (and, in the case of Customer Data, until it is deleted in accordance with Clause 19).

14.6 **Remedies.** The Recipient acknowledges that unauthorised use or disclosure of Confidential Information may cause irreparable harm for which damages may be inadequate, and that the Discloser shall be entitled to seek specific performance, injunctive relief and interim measures (including under section 9 or section 17 of the Arbitration and Conciliation Act, 1996), in addition to any other remedy available to it.

## 15. Indemnities

15.1 **Provider indemnity.** The Provider shall defend the Customer, its Affiliates and their respective directors, officers and employees (the **"Customer Indemnitees"**) against any claim, demand, suit or proceeding brought by a third party (a **"Third-Party Claim"**) alleging that the Subscription Services, as provided by the Provider and used by the Customer in accordance with this Agreement, infringe or misappropriate that third party's Intellectual Property Rights (an **"IP Claim"**), and shall indemnify and hold harmless the Customer Indemnitees from and against all Losses awarded against them in a final judgment or arbitral award, or agreed in a settlement approved by the Provider, in respect of the IP Claim.

15.2 **Mitigation of IP Claims.** If the Subscription Services become, or in the Provider's reasonable opinion are likely to become, the subject of an IP Claim, the Provider may, at its option and expense: (a) procure for the Customer the right to continue using them; (b) modify or replace them so that they are non-infringing without materially reducing their functionality; or (c) if neither (a) nor (b) is commercially reasonable, terminate the affected Order Form on written notice and refund to the Customer the prepaid Subscription Fees for the remainder of the Subscription Term.

15.3 **Exclusions.** The Provider has no obligation under Clause 15.1 to the extent that an IP Claim arises from: (a) Customer Data, Input or any material provided by the Customer; (b) Output, except to the extent that the IP Claim arises from the Provider Technology itself rather than from Input or the Customer's use of Output; (c) use of the Subscription Services in combination with any product, service, data or process not provided or specified by the Provider, where the IP Claim would not have arisen but for the combination; (d) a Third-Party Service; (e) use of the Subscription Services in breach of this Agreement or after the Provider has notified the Customer to cease use under Clause 15.2; or (f) modifications to the Subscription Services made by any person other than the Provider or its subcontractors.

15.4 **Customer indemnity.** The Customer shall defend the Provider, its Affiliates and their respective directors, officers and employees (the **"Provider Indemnitees"**) against any Third-Party Claim arising from: (a) an allegation that Customer Data or Input, or its use with the Subscription Services in accordance with this Agreement, infringes or misappropriates any person's Intellectual Property Rights, violates any person's privacy rights or breaches Applicable Law; (b) the Customer's or any Authorised User's use of the Subscription Services or Output in breach of Clause 3.5, Clause 7.5 or the Acceptable Use Policy; or (c) the Customer's failure to have a lawful basis under the DPDP Act for the processing of Customer Personal Data as instructed, and shall indemnify and hold harmless the Provider Indemnitees from and against all Losses awarded against them in a final judgment or arbitral award, or agreed in a settlement approved by the Customer, in respect of that Third-Party Claim.

15.5 **Procedure.** The obligations of the indemnifying Party (the **"Indemnifier"**) under this Clause 15 are subject to the indemnified person (the **"Indemnitee"**): (a) giving the Indemnifier prompt written notice of the Third-Party Claim, provided that any delay shall relieve the Indemnifier of its obligations only to the extent that it is materially prejudiced by the delay; (b) giving the Indemnifier sole control of the defence and settlement of the Third-Party Claim, provided that the Indemnifier shall: (i) keep the Indemnitee informed of the progress of the claim and consult with it on material decisions; (ii) not settle any Third-Party Claim in a manner that requires an admission of fault or liability by the Indemnitee, or imposes any obligation on it other than the payment of money that the Indemnifier pays in full, without the Indemnitee's prior written consent (not to be unreasonably withheld or delayed); and (iii) conduct the defence diligently and through competent counsel; (c) providing reasonable cooperation and information, at the Indemnifier's expense for out-of-pocket costs; and (d) not making any admission of liability or offer of settlement, or taking any step that would prejudice the defence, without the Indemnifier's prior written consent. The Indemnitee may participate in the defence through counsel of its own choice at its own cost. If the Indemnifier fails to assume the defence within twenty (20) Business Days of notice, the Indemnitee may defend the Third-Party Claim itself, at the Indemnifier's reasonable cost, without losing its right to indemnity.

15.6 **Exclusive remedy.** This Clause 15 states the Indemnifier's entire liability, and the Indemnitee's exclusive remedy, for any Third-Party Claim of the kind described in it.

> **Drafting note:** Indemnities are recognised under ss.124 and 125 of the Indian Contract Act, 1872; Indian courts have held that an indemnity holder may enforce the indemnity once its liability has become absolute, without first paying (for example, Gajanan Moreshwar Parelkar v. Moreshwar Madan Mantri, Bombay High Court, 1942). Enterprise customers commonly also ask for an indemnity for Third-Party Claims and regulatory proceedings arising from a Security Incident caused by the Provider's breach of Clauses 8 or 9; if conceded, add it to Clause 15.1 and make it subject to the Super-Cap in Clause 16.3.

## 16. Limitation of Liability

16.1 **Unlimited liability.** Nothing in this Agreement shall limit or exclude a Party's liability for: (a) death or personal injury caused by its negligence; (b) fraud or fraudulent misrepresentation; (c) its gross negligence or wilful misconduct; (d) the Customer's obligation to pay Fees properly due; (e) the Customer's breach of Clause 3.5(a) to (d) (misuse of the Provider Technology); or (f) any other liability that cannot be limited or excluded under Applicable Law.

16.2 **General cap.** Subject to Clauses 16.1 and 16.3, each Party's total aggregate liability arising out of or in connection with this Agreement and all Order Forms, whether in contract, tort (including negligence), breach of statutory duty, under any indemnity or otherwise, shall not exceed the total Fees paid and payable by the Customer under this Agreement in the twelve (12) months immediately preceding the event giving rise to the most recent claim (the **"General Cap"**).

16.3 **Super-Cap.** Subject to Clause 16.1, each Party's total aggregate liability arising out of or in connection with: (a) its breach of Clause 14 (Confidentiality); (b) in the case of the Provider, its breach of Clause 8 (Data Protection), Clause 9 (Security) or the DPA, including any Security Incident caused by such breach; (c) in the case of the Provider, its breach of Clause 7.3 (No training on Customer Data); and (d) its obligations under Clause 15.1 or Clause 15.4(a), shall not exceed in aggregate {{super_cap_multiple}} times the Annual Contract Value (the **"Super-Cap"**). Liability under the Super-Cap is separate from and in addition to the General Cap, and amounts paid under one shall not erode the other.

> **Drafting note:** A general cap of 12 months' fees, with a super-cap of 2x to 5x annual contract value for data, confidentiality and IP exposure, is the prevailing market position in Indian enterprise SaaS. The Provider should align the multiple with its cyber and errors-and-omissions insurance. DPDP penalties (up to ₹250 crore for failure to take reasonable security safeguards under the Schedule to the DPDP Act) are imposed on the Data Fiduciary; whether a Data Fiduciary can recover a penalty from its processor by contract, and on what basis, should be addressed expressly if the Customer requires it [verify].

16.4 **Exclusion of certain losses.** Subject to Clause 16.1, neither Party shall be liable to the other, whether in contract, tort (including negligence), breach of statutory duty or otherwise, for: (a) loss of profits, revenue, business or anticipated savings; (b) loss of goodwill or reputation; (c) indirect, special or consequential loss or damage, being loss that did not arise naturally in the usual course of things from the breach and that the Parties did not know, when they entered into this Agreement, to be likely to result from it; or (d) except as provided in Clause 6.5 and Clause 16.3, loss or corruption of data; in each case whether or not that loss was foreseeable or the Party was advised of its possibility. The following shall be deemed direct losses recoverable (subject to the applicable cap) by the Customer: the reasonable costs of investigating and remediating a Security Incident caused by the Provider's breach, of notifying affected Data Principals and the Data Protection Board of India, and of restoring Customer Data.

16.5 **Service credits.** Service credits under the Service Level Schedule count towards the General Cap.

16.6 **Mitigation.** Each Party shall take reasonable steps to mitigate any Losses for which it seeks to recover from the other.

16.7 **Limitation period.** Nothing in this Agreement shortens the period within which a Party may commence proceedings under the Limitation Act, 1963.

> **Drafting note:** Section 28 of the Indian Contract Act, 1872 renders void any clause that extinguishes a right, or limits the time to enforce it, on the expiry of a period shorter than the statutory limitation period. Do not include a short contractual claims window.

## 17. Insurance

17.1 During the term of this Agreement, the Provider shall maintain with reputable insurers: (a) technology errors and omissions or professional indemnity insurance; (b) cyber liability insurance covering data breach response costs, network security liability and privacy liability; and (c) commercial general liability insurance, each with limits of indemnity not less than those specified in the Order Form (or, if none are specified, limits reasonable for a provider of its size and the Annual Contract Value). The Provider shall furnish certificates of insurance on reasonable request.

## 18. Term and Termination

18.1 **Term of Agreement.** This Agreement commences on the Effective Date and continues until the expiry or termination of all Order Forms, unless terminated earlier in accordance with this Clause 18. If no Order Form is in force for a continuous period of twelve (12) months, either Party may terminate this Agreement on thirty (30) days' written notice.

18.2 **Subscription Term and renewal.** Each Order Form commences on its start date and continues for the initial Subscription Term stated in it. Unless the Order Form provides otherwise, each Subscription Term shall automatically renew for successive periods equal to the shorter of the initial Subscription Term and twelve (12) months, unless either Party gives the other written notice of non-renewal at least {{renewal_notice_days}} days before the end of the then-current Subscription Term. The Provider shall send the Customer a written reminder of the forthcoming renewal and the applicable Fees at least thirty (30) days before the last date for giving notice of non-renewal; if it fails to do so, the Customer may give notice of non-renewal at any time up to the end of the then-current Subscription Term.

18.3 **Termination for cause.** Either Party may terminate this Agreement or any Order Form with immediate effect by written notice to the other Party if the other Party: (a) commits a material breach of this Agreement or that Order Form that is incapable of remedy, or, if capable of remedy, is not remedied within {{cure_period_days}} days after receipt of written notice specifying the breach and requiring its remedy; or (b) becomes the subject of a corporate insolvency resolution process admitted under the Insolvency and Bankruptcy Code, 2016, has a liquidator, interim resolution professional or receiver appointed over all or substantially all of its assets, passes a resolution for or is ordered to be wound up (other than for a solvent reorganisation), or ceases to carry on business.

> **Drafting note:** Termination on insolvency may be restricted while a moratorium under the Insolvency and Bankruptcy Code, 2016 is in force, particularly for supplies of goods or services critical to preserve the corporate debtor's value [verify scope of s.14(2A) and related regulations]. Treat Clause 18.3(b) as of limited value against a counterparty already in insolvency proceedings.

18.4 **Termination for convenience.** [OPTION A: Neither Party may terminate an Order Form for convenience during a Subscription Term. / OPTION B: The Customer may terminate an Order Form for convenience on not less than ninety (90) days' written notice, in which case the Customer shall pay the Subscription Fees for the remainder of the then-current twelve (12) month period of the Subscription Term (or, if less, the remainder of the Subscription Term), and no prepaid Subscription Fees shall be refunded.]

> **Drafting note:** Subscription economics depend on committed terms, so providers normally refuse convenience termination (Option A). Enterprise and public-sector customers often require it; Option B preserves the Provider's revenue for the current contract year. Any early termination charge should reflect a genuine pre-estimate of loss to stay within s.74 of the Indian Contract Act, 1872.

18.5 **Refund on termination for Provider breach.** If the Customer terminates an Order Form under Clause 18.3, the Provider shall refund to the Customer the prepaid Subscription Fees covering the remainder of the Subscription Term after the effective date of termination. If the Provider terminates an Order Form under Clause 18.3, the Customer shall pay any unpaid Fees covering the remainder of the then-current Subscription Term.

## 19. Consequences of Termination, Data Export and Deletion

19.1 **Cessation of use.** On termination or expiry of an Order Form, all rights granted to the Customer under it shall cease, and the Customer shall cease using the Subscription Services covered by it, subject to Clause 19.2.

19.2 **Data export.** For {{data_export_days}} days after the effective date of termination or expiry of an Order Form (the **"Export Period"**), the Provider shall, at no additional charge, continue to make Customer Data available to the Customer for export or download through the Subscription Services' standard export functionality, in a commonly used, machine-readable format (such as CSV, JSON or the format specified in the Documentation), together with any attachments and documents in their native format. During the Export Period the Customer's access shall be limited to that required for export, and the Subscription Services shall not otherwise be available for production use.

19.3 **Transition assistance.** If the Customer requests in writing before the end of the Export Period, the Provider shall provide reasonable transition assistance, including assistance with bulk export, data mapping and reasonable questions from the Customer or a successor provider, for up to ninety (90) days, at the Provider's then-current Professional Services rates (or the rates in the Order Form), provided that the Customer has paid all undisputed Fees due. If the Customer requires continued production access to the Subscription Services during transition, the Parties shall agree a short-term extension Order Form at the then-current Subscription Fees pro-rated on a monthly basis.

19.4 **Deletion.** Within {{deletion_days}} days after the end of the Export Period, the Provider shall delete all Customer Data from its production systems and shall ensure that Customer Data is deleted from back-ups in accordance with its back-up rotation schedule described in Schedule 2, and shall, on the Customer's written request, certify such deletion in writing. The Provider may retain Customer Data to the extent and for the period required by Applicable Law (including logs retained under the CERT-In Directions), in which case Clause 14 and Clause 8 shall continue to apply to it and it shall not be actively processed for any other purpose.

> **Drafting note:** Clause 19 reconciles three regimes. The DPDP Act requires erasure once the specified purpose is no longer being served, unless retention is required by law. The CERT-In Directions require 180 days of log retention. Sector regulators (for example the Reserve Bank of India for regulated entities) may require that data be kept accessible for longer periods. If the Customer is a regulated entity, extend the Export Period or add a paid archive option in the Order Form.

19.5 **Accrued rights and survival.** Termination or expiry shall not affect any accrued rights or liabilities of either Party. Clauses 1, 6.1, 6.3, 7.2, 7.3, 8 (for so long as the Provider holds Customer Personal Data), 10 (as to amounts accrued), 12, 13.6, 14, 15, 16, 19, 22, 23 and 24, and any other provision that by its nature is intended to survive, shall survive termination or expiry.

## 20. Force Majeure

20.1 Neither Party shall be liable for any failure or delay in performing its obligations (other than payment obligations) to the extent caused by an event beyond its reasonable control, including acts of God, flood, earthquake, fire, epidemic or pandemic and associated government action, war, terrorism, riot, civil commotion, governmental action, failure of public utility or telecommunications networks, and denial-of-service or other cyber-attacks that could not have been prevented by measures consistent with good industry practice (a **"Force Majeure Event"**), provided that the affected Party: (a) notifies the other promptly of the Force Majeure Event and its likely effect; (b) uses reasonable efforts to mitigate its effect, including by implementing its business continuity and disaster recovery plans; and (c) resumes performance as soon as practicable.

20.2 A Force Majeure Event shall not excuse the Provider from implementing its business continuity and disaster recovery plans or from its obligations under Clauses 8 and 9.

20.3 If a Force Majeure Event prevents the provision of all or substantially all of the Subscription Services for more than thirty (30) consecutive days, either Party may terminate the affected Order Form on written notice, and the Provider shall refund prepaid Subscription Fees for the remainder of the Subscription Term.

## 21. Compliance

21.1 **Anti-bribery.** Each Party shall comply with the Prevention of Corruption Act, 1988 and all other applicable anti-bribery and anti-corruption laws, and shall not offer, give, request or accept any bribe, kickback, facilitation payment or other undue advantage in connection with this Agreement. Each Party shall maintain adequate procedures designed to prevent persons associated with it from engaging in such conduct. A breach of this Clause 21.1 is a material breach incapable of remedy.

21.2 **Export control and sanctions.** The Subscription Services may be subject to export control and sanctions laws, including the Foreign Trade (Development and Regulation) Act, 1992 and the SCOMET list notified under it and, to the extent applicable to the Provider or its Sub-processors, the export control and sanctions laws of other jurisdictions. The Customer shall not permit access to or use of the Subscription Services in breach of those laws, including by any person or in any country or territory subject to comprehensive sanctions applicable to either Party. Each Party represents that it is not a person with whom the other Party is prohibited from dealing under applicable sanctions laws.

21.3 **Foreign exchange.** Where the Customer or the Provider is resident outside India, or any Fees are payable in foreign currency or to or from an account outside India, each Party shall comply with the Foreign Exchange Management Act, 1999 and the rules, regulations and directions made under it, and shall provide any documents that an authorised dealer bank reasonably requires to process the remittance. Any withholding tax on cross-border payments shall be dealt with in accordance with Clause 10.7 and any applicable tax treaty, and the Provider shall furnish a tax residency certificate and other prescribed documents to claim treaty benefits.

> **Drafting note:** Clauses 21.2 and 21.3 matter for cross-border deals. Encryption functionality may fall within SCOMET Category 8 [verify category]; if the Provider uses US cloud infrastructure or US-origin AI models, US Export Administration Regulations may also apply. Where the Customer is non-resident and pays in foreign currency, the Provider must realise export proceeds within the period specified by the Reserve Bank of India [verify current period], and export of services may be zero-rated for GST subject to conditions.

21.4 **Public sector customers.** If the Customer is a government department, public sector undertaking or other "State" within the meaning of Article 12 of the Constitution of India, the Parties shall agree in the Order Form any additional terms required by applicable procurement rules or guidelines.

## 22. Dispute Resolution

22.1 **Negotiation.** Any dispute, controversy or claim arising out of or in connection with this Agreement or any Order Form, including its existence, validity, interpretation, performance, breach or termination (a **"Dispute"**), shall first be referred by written notice to the Parties' relationship managers, and if not resolved within ten (10) Business Days, to a senior executive of each Party with authority to settle it. If the Dispute is not resolved within {{escalation_days}} days of the initial notice, either Party may refer it to arbitration under Clause 22.2.

22.2 **Arbitration.** Any Dispute not resolved under Clause 22.1 shall be referred to and finally resolved by arbitration under the Arbitration and Conciliation Act, 1996 (the **"Arbitration Act"**) in accordance with the following:

(a) the tribunal shall consist of a sole arbitrator appointed by mutual agreement of the Parties within thirty (30) days of a written request by either Party, failing which the arbitrator shall be appointed [OPTION A: by the High Court of competent jurisdiction under section 11 of the Arbitration Act / OPTION B: by the [name of arbitral institution] under its rules for the time being in force, which rules shall govern the arbitration];

(b) no Party shall be entitled to appoint the arbitrator unilaterally or to require the other Party to choose from a panel of arbitrators proposed by it alone;

(c) the seat of arbitration shall be {{arbitration_seat}}, India, and the venue of hearings shall be {{arbitration_venue}}, India, provided that the tribunal may conduct hearings by video conference or at another location without changing the seat;

(d) the language of the arbitration shall be English;

(e) the arbitration and the award shall be confidential to the extent required by section 42A of the Arbitration Act; and

(f) the award shall be final and binding on the Parties.

> **Drafting note:** Specify the seat clearly; following BGS SGS Soma JV v. NHPC Ltd (Supreme Court, 2019), the seat confers exclusive supervisory jurisdiction on its courts, and naming only a "venue" can create ambiguity. A clause permitting one Party to appoint the sole arbitrator unilaterally is invalid: Perkins Eastman Architects DPC v. HSCC (India) Ltd (Supreme Court, 2019), and Central Organisation for Railway Electrification v. ECI-SPIC-SMO-MCML (JV) (Constitution Bench, 8 November 2024), which also held that requiring a party to choose from a panel curated by the other offends equal treatment. For institutional arbitration, name an institution (such as MCIA, DIAC or IIAC) and use its model clause. For cross-border deals with a foreign Customer, consider a foreign seat or international institution and check New York Convention enforceability.

22.3 **Courts.** The courts at {{arbitration_seat}} shall have exclusive supervisory jurisdiction over the arbitration, including over applications under sections 9, 11 (where the institutional option is not chosen), 34 and 37 of the Arbitration Act. Nothing in this Clause 22 prevents either Party from seeking urgent interim relief from those courts or from the tribunal under section 17 of the Arbitration Act.

22.4 **Continued performance.** Pending resolution of a Dispute, each Party shall continue to perform its obligations, subject to the Provider's rights under Clause 11.

## 23. Governing Law and Jurisdiction

23.1 This Agreement and any Dispute or non-contractual obligation arising out of or in connection with it shall be governed by and construed in accordance with the laws of India.

23.2 Subject to Clause 22, the courts at {{governing_city}} shall have exclusive jurisdiction over any matter that is not capable of resolution by arbitration. Where any such matter is a commercial dispute within the meaning of the Commercial Courts Act, 2015 and urgent interim relief is not sought, the Parties shall first undertake pre-institution mediation in accordance with section 12A of that Act.

> **Drafting note:** Pre-institution mediation under s.12A of the Commercial Courts Act, 2015 is mandatory for a commercial suit that does not contemplate urgent interim relief (Patil Automation Pvt Ltd v. Rakheja Engineers Pvt Ltd, Supreme Court, 2022). Keep the court city the same as the arbitral seat.

## 24. General

24.1 **Notices.** Notices under this Agreement shall be in writing in English and delivered by hand, by registered post acknowledgement due or reputable courier to the registered office of the receiving Party stated above, or by email to: (a) for the Provider, {{company_email}}; and (b) for the Customer, {{counterparty_email}}; or to such other address as a Party may notify in accordance with this Clause. A notice is deemed received: if delivered by hand, on delivery; if sent by registered post or courier, on the third (3rd) Business Day after dispatch; and if sent by email, at the time of transmission if sent before 6:00 p.m. (IST) on a Business Day, and otherwise at 9:00 a.m. on the next Business Day, provided that no automated non-delivery message is received. A notice of breach, termination or Dispute sent by email shall also be sent by one of the other methods within two (2) Business Days. Operational notices (including notices of updates, Sub-processor changes and maintenance) may be given through the Subscription Services or by email to the Customer's designated administrator.

24.2 **Entire agreement.** This Agreement (including its Schedules), the Order Forms and the DPA constitute the entire agreement between the Parties regarding their subject matter, and supersede all prior and contemporaneous agreements, proposals, negotiations, representations and understandings, whether written or oral. Each Party acknowledges that it has not relied on any statement, representation, assurance or warranty that is not set out in this Agreement. Nothing in this Clause limits liability for fraud.

24.3 **Assignment.** Neither Party may assign, transfer, novate or otherwise deal with any of its rights or obligations under this Agreement without the prior written consent of the other Party (not to be unreasonably withheld or delayed), except that either Party may, on written notice to the other, assign this Agreement in its entirety (together with all Order Forms) to an Affiliate or to a successor in connection with a merger, amalgamation, scheme of arrangement, demerger or sale of all or substantially all of its business or assets to which this Agreement relates, provided that the assignee agrees in writing to be bound by this Agreement and is not a direct competitor of the other Party. Any purported assignment in breach of this Clause is void.

24.4 **Change of Control.** Each Party shall notify the other in writing within thirty (30) days after undergoing a Change of Control. If the Provider undergoes a Change of Control as a result of which it becomes controlled by a direct competitor of the Customer, the Customer may, by written notice given within ninety (90) days after receiving the notice of Change of Control, terminate any Order Form on not less than sixty (60) days' notice, and the Provider shall refund prepaid Subscription Fees for the period after the effective date of termination. Clause 19 shall apply. A Change of Control shall not otherwise give rise to any right of termination.

24.5 **Subcontracting.** The Provider may subcontract its obligations, subject to Clause 8.6 in respect of Sub-processors, and remains responsible for the performance of its subcontractors.

24.6 **Independent contractors.** The Parties are independent contractors. Nothing in this Agreement creates a partnership, joint venture, agency, fiduciary or employment relationship between the Parties.

24.7 **Amendment.** No amendment or variation of this Agreement shall be effective unless made in writing, expressly referring to this Agreement and signed by authorised representatives of both Parties. The Provider may not amend this Agreement by updating any online terms, and any online terms or click-through accepted by an Authorised User shall not bind the Customer to the extent they are inconsistent with this Agreement.

24.8 **Waiver.** No failure or delay in exercising any right or remedy shall operate as a waiver of it, and no single or partial exercise of any right or remedy shall preclude any further exercise of it or of any other right or remedy.

24.9 **Severability.** If any provision of this Agreement is held to be invalid, illegal or unenforceable, it shall be deemed modified to the minimum extent necessary to make it valid, legal and enforceable, and if such modification is not possible, it shall be deemed deleted, without affecting the remaining provisions.

24.10 **Third-party rights.** Except for the Customer Indemnitees and Provider Indemnitees under Clause 15, no person other than the Parties has any right to enforce any term of this Agreement.

24.11 **Publicity.** Neither Party shall issue any press release or public announcement regarding this Agreement, or use the other Party's name, logo or trade marks, without the other Party's prior written consent, save that the Provider may list the Customer's name (but not logo) as a customer in its customer lists unless the Customer objects in writing.

24.12 **Remedies.** Except as expressly provided in this Agreement (including Clauses 13.3, 15.6 and the sole-remedy provisions of the Service Level Schedule), rights and remedies under this Agreement are cumulative and in addition to any rights or remedies provided by law. Each Party acknowledges that specific performance is available as a remedy in accordance with the Specific Relief Act, 1963.

24.13 **Costs.** Except as expressly provided otherwise, each Party shall bear its own costs of negotiating, preparing and executing this Agreement and each Order Form.

24.14 **Counterparts and electronic execution.** This Agreement and each Order Form may be executed in counterparts, each of which shall be an original and which together constitute one instrument, and may be executed by electronic signature (including Aadhaar-based e-sign or a digital signature certificate) in accordance with the Information Technology Act, 2000, which shall be as effective as a handwritten signature. Each Party shall preserve the electronic signature audit trail and shall, where required, furnish a certificate under section 63 of the BSA in respect of any electronic record relating to this Agreement that it seeks to produce in evidence.

24.15 **Stamp duty.** Stamp duty payable on this Agreement and on each Order Form (where applicable) shall be borne by {{stamp_duty_payer}}, who shall ensure that this Agreement is duly stamped (by e-stamping or otherwise) in accordance with the applicable stamp law before or at the time of its execution.

> **Drafting note:** An unstamped or insufficiently stamped agreement is not void but is inadmissible in evidence until the deficit duty and penalty are paid; an arbitration clause in it remains enforceable (In re: Interplay between Arbitration Agreements under the Arbitration and Conciliation Act, 1996 and the Indian Stamp Act, 1899, seven-judge bench of the Supreme Court, 13 December 2023). Check whether each Order Form attracts separate duty in the relevant State.

24.16 **Further assurance.** Each Party shall execute all documents and do all things reasonably required to give full effect to this Agreement.

## Execution

IN WITNESS WHEREOF the Parties have caused this Agreement to be executed by their duly authorised representatives as of the Effective Date.

| For and on behalf of **{{company_name}}** (Provider) | For and on behalf of **{{counterparty_name}}** (Customer) |
|---|---|
| Signature: ______________________ | Signature: ______________________ |
| Name: {{company_signatory_name}} | Name: {{counterparty_signatory_name}} |
| Designation: {{company_signatory_title}} | Designation: {{counterparty_signatory_title}} |
| Date: ______________________ | Date: ______________________ |
| Place: ______________________ | Place: ______________________ |

> **Drafting note:** Confirm each signatory's authority (board resolution, delegation of authority or power of attorney). For a company, the board's powers and delegation are governed by s.179 of the Companies Act, 2013 and its articles.

## Schedule 1 – Form of Order Form

**Order Form No.** [●] under the Software-as-a-Service Subscription Agreement dated [●] between the Provider and the Customer (the **"Agreement"**). Capitalised terms have the meanings given in the Agreement.

| Item | Details |
|---|---|
| Customer entity (if an Affiliate) and billing address | |
| Customer GSTIN / Provider GSTIN | |
| Purchase order number (if required by Customer) | |
| Subscription Services (product, edition, modules) | |
| AI Features included (and Third-Party AI Provider, if any) | |
| Training consent under Clause 7.3 | Not given / Given for: [describe scope] |
| Usage limits (users, records, API calls, storage, AI credits) | |
| Territory of use (if restricted) | |
| Hosting location | |
| Subscription start date | |
| Initial Subscription Term | |
| Subscription Fees (₹, per year) | |
| Overage rates | |
| Professional Services (scope and fees, or reference to SOW) | |
| Support tier | |
| Service Level Schedule | Attached / Provider's standard schedule version [●] |
| Billing frequency and payment terms | |
| Renewal terms (if different from Clause 18.2) | |
| Insurance limits | |
| Certifications maintained (Clause 9.2) | |
| Special terms (identify Clause varied) | |

Signed for the Provider: Name ______________ Designation ______________ Signature ______________ Date ______

Signed for the Customer: Name ______________ Designation ______________ Signature ______________ Date ______

## Schedule 2 – Technical and Organisational Security Measures

The Provider shall implement at least the following measures, as appropriate to the nature of the Subscription Services:

1. **Governance:** a documented information security policy approved by senior management; a named person responsible for information security; annual risk assessments; security awareness training for all personnel on joining and annually.
2. **Access control:** role-based access on a least-privilege basis; unique user identifiers; multi-factor authentication for all administrative and remote access to production systems; prompt revocation of access on role change or exit; quarterly access reviews.
3. **Encryption:** encryption of Customer Data in transit using TLS 1.2 or higher, and at rest using AES-256 or equivalent; secure key management with restricted access to keys.
4. **Segregation:** logical segregation of each customer's data; separate development, test and production environments; no use of production Customer Personal Data in non-production environments without masking.
5. **Logging and monitoring:** logging of access to production systems and security-relevant events; protection of logs against tampering; retention of logs for at least one hundred and eighty (180) days within India in accordance with the CERT-In Directions (and for at least one (1) year where required by the DPDP Rules, 2025 [verify]); continuous monitoring and alerting.
6. **Vulnerability management:** monthly vulnerability scanning; annual independent penetration testing; remediation of critical vulnerabilities within seven (7) days, high within thirty (30) days and medium within ninety (90) days of identification, or the timelines otherwise agreed in the Order Form.
7. **Secure development:** secure coding standards; code review; dependency and open-source vulnerability scanning; change management for production deployments.
8. **Back-up and recovery:** daily back-ups of Customer Data, encrypted and stored in a separate location within India (unless otherwise stated in the Order Form); back-up retention not exceeding thirty-five (35) days; recovery point objective and recovery time objective as stated in the Service Level Schedule; annual testing of the disaster recovery plan.
9. **Physical security:** hosting only in data centres operated by reputable providers with recognised third-party security certifications.
10. **Incident response:** a documented incident response plan, tested at least annually, including procedures for CERT-In reporting within six (6) hours and notification of the Customer within the periods in Clauses 8.8 and 9.3.
11. **Personnel:** background verification of personnel with access to Customer Data, to the extent permitted by Applicable Law; written confidentiality undertakings.
12. **Sub-processors:** due diligence before engagement and periodic review of Sub-processors' security.
13. **Deletion:** secure deletion of Customer Data at the end of the retention period, using industry-standard methods.

## Schedule 3 – Acceptable Use Policy

The Customer and its Authorised Users shall not use the Subscription Services, including any AI Feature, to:

1. host, display, upload, modify, publish, transmit, store, update or share any information that is unlawful, including information prohibited under rule 3(1)(b) of the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021 [verify current numbering];
2. infringe any person's Intellectual Property Rights or privacy, or process personal data without a lawful basis under the DPDP Act;
3. send unsolicited commercial communications in breach of Applicable Law, including the Telecom Commercial Communications Customer Preference Regulations, 2018;
4. generate or disseminate deepfakes or other synthetically generated information intended to deceive, defame, impersonate or harass any person, or without any labelling required by Applicable Law;
5. make automated decisions producing legal or similarly significant effects for individuals (for example, on credit, employment, insurance or access to essential services) without meaningful human review;
6. develop weapons, malware or any tool designed to cause harm to systems, people or property;
7. engage in, facilitate or promote any activity that is illegal under Applicable Law, including fraud, money laundering or online money gaming prohibited by law;
8. circumvent usage limits, security measures or content safeguards, or attempt to extract system prompts, model weights or training data; or
9. impersonate any person or misrepresent the origin of any Output.

The Provider may update this Acceptable Use Policy by notice to the Customer, provided that no update shall materially reduce the Customer's rights under the Agreement during a Subscription Term.
