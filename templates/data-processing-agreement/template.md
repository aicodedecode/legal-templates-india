---
id: data-processing-agreement
title: Data Processing Agreement (DPDP Act, 2023)
category: privacy-web
summary: >-
  Data Fiduciary to Data Processor agreement under section 8(2) of the DPDP Act, 2023, covering security, breach, CERT-In, transfers, audit and liability.
audience: [startup, sme, enterprise]
jurisdiction: IN
governing_laws:
  - Digital Personal Data Protection Act, 2023
  - Digital Personal Data Protection Rules, 2025
  - Information Technology Act, 2000
  - CERT-In Directions under section 70B(6) of the Information Technology Act, 2000 (28 April 2022)
  - Indian Contract Act, 1872
  - Arbitration and Conciliation Act, 1996
document_type: agreement
parties: 2
stamp_duty: required
e_signature: permitted
version: 0.1.0
last_updated: 2026-10-16
review_status: draft
related: [master-services-agreement, saas-subscription-agreement, vendor-agreement, service-level-agreement, privacy-policy]
fields:
  - key: effective_date
    label: Date on which this Agreement takes effect
    example: 1 November 2026
  - key: company_name
    label: Data Fiduciary's full legal name
    example: Acme Technologies Private Limited
  - key: company_cin
    label: Data Fiduciary's CIN or LLPIN
    example: U72900KA2024PTC123456
  - key: company_address
    label: Data Fiduciary's registered office address
    example: 4th Floor, 12 MG Road, Bengaluru, Karnataka 560001
  - key: counterparty_name
    label: Data Processor's full legal name
    example: Cloudline Services Private Limited
  - key: counterparty_cin
    label: Data Processor's CIN or LLPIN (or foreign registration number)
    example: U74999MH2019PTC654321
  - key: counterparty_address
    label: Data Processor's registered office address
    example: 7th Floor, Tower B, Lower Parel, Mumbai, Maharashtra 400013
  - key: principal_agreement_name
    label: Title of the underlying services agreement
    example: Master Services Agreement
  - key: principal_agreement_date
    label: Date of the underlying services agreement
    example: 15 October 2026
  - key: breach_notice_hours
    label: Hours within which the Processor must notify the Fiduciary of a Personal Data Breach
    example: "12"
  - key: cert_in_notice_hours
    label: Hours within which the Processor must notify the Fiduciary of a Cyber Security Incident
    example: "2"
  - key: rights_assistance_days
    label: Business days within which the Processor must assist with a Data Principal request
    example: "5"
  - key: subprocessor_notice_days
    label: Days' prior notice of a new Sub-processor
    example: "30"
  - key: audit_notice_days
    label: Business days' notice before an audit
    example: "15"
  - key: deletion_days
    label: Days after termination within which data must be returned and erased
    example: "30"
  - key: liability_cap_amount
    label: General liability cap (or reference to the Principal Agreement cap)
    example: the total fees paid or payable under the Principal Agreement in the 12 months preceding the event giving rise to the claim
  - key: super_cap_multiple
    label: Multiple of annual fees for the data-protection super-cap
    example: three (3)
  - key: insurance_amount
    label: Minimum cyber and professional indemnity insurance cover
    example: ₹ 5,00,00,000 (INR 5 crore)
  - key: company_email
    label: Data Fiduciary's email for notices
    example: legal@acme.example
  - key: counterparty_email
    label: Data Processor's email for notices
    example: legal@cloudline.example
  - key: arbitration_seat
    label: Seat of arbitration
    example: Bengaluru
  - key: arbitration_venue
    label: Venue of hearings (if different from the seat)
    example: Bengaluru, or by video conference
  - key: stamp_duty_payer
    label: Party bearing stamp duty
    example: the Data Fiduciary
  - key: company_signatory_name
    label: Name of Data Fiduciary's authorised signatory
    example: Ananya Rao (illustrative)
  - key: company_signatory_title
    label: Title of Data Fiduciary's authorised signatory
    example: Director
  - key: counterparty_signatory_name
    label: Name of Data Processor's authorised signatory
    example: Vikram Mehta (illustrative)
  - key: counterparty_signatory_title
    label: Title of Data Processor's authorised signatory
    example: Chief Executive Officer
  - key: services_description
    label: Short description of the services involving processing
    example: cloud hosting, managed database and customer-support ticketing services
  - key: processing_locations
    label: Countries and facilities where Personal Data will be processed or stored
    example: India (Mumbai and Hyderabad data centres); support access from Singapore
---

# DATA PROCESSING AGREEMENT

> **Drafting note:** Section 8(2) of the Digital Personal Data Protection Act, 2023 permits a Data Fiduciary to engage a Data Processor to process personal data on its behalf only under a valid contract, and section 8(1) keeps the Data Fiduciary responsible for compliance regardless of that contract. This Agreement is drafted from the Data Fiduciary's side but is balanced enough to be offered to a reputable processor. It is intended to sit alongside a principal commercial agreement (for example, the master-services-agreement or saas-subscription-agreement templates); it can also be adapted as a standalone agreement. The DPDP Rules, 2025 are commencing in phases (as notified in November 2025, most Data Fiduciary obligations — including security safeguards, breach intimation and erasure — were deferred by about 18 months) [verify current commencement]. Until those obligations commence, section 43A of the Information Technology Act, 2000 and the SPDI Rules, 2011 continue to govern reasonable security practices [verify]; this Agreement is drafted to satisfy both regimes.

This Data Processing Agreement (this **"Agreement"**) is made on {{effective_date}}

**BETWEEN**

**{{company_name}}**, a company incorporated under the laws of India with CIN {{company_cin}}, having its registered office at {{company_address}} (the **"Data Fiduciary"**, which expression shall, unless repugnant to the context, include its successors and permitted assigns);

**AND**

**{{counterparty_name}}**, a company incorporated under the laws of [India / jurisdiction] with registration number {{counterparty_cin}}, having its registered office at {{counterparty_address}} (the **"Data Processor"**, which expression shall, unless repugnant to the context, include its successors and permitted assigns).

The Data Fiduciary and the Data Processor are each a **"Party"** and together the **"Parties"**.

## Recitals

A. The Parties have entered into the {{principal_agreement_name}} dated {{principal_agreement_date}} (the **"Principal Agreement"**), under which the Data Processor provides {{services_description}} (the **"Services"**) to the Data Fiduciary.

B. In providing the Services, the Data Processor will process Personal Data on behalf of the Data Fiduciary, for which the Data Fiduciary determines the purpose and means of processing.

C. Section 8(2) of the DPDP Act permits a Data Fiduciary to engage a Data Processor to process personal data on its behalf only under a valid contract, and section 8(5) of the DPDP Act and the DPDP Rules require the Data Fiduciary to protect personal data in its possession or under its control, including in respect of processing undertaken by a Data Processor on its behalf, by taking reasonable security safeguards.

D. The Parties wish to record the terms on which the Data Processor will process Personal Data, so as to enable the Data Fiduciary to comply with Data Protection Laws.

NOW, THEREFORE, in consideration of the mutual covenants in this Agreement and the Principal Agreement, the Parties agree as follows.

## 1. Definitions and interpretation

1.1 In this Agreement, unless the context otherwise requires:

(a) **"Applicable Law"** means all laws, statutes, ordinances, rules, regulations, directions, notifications, guidelines, orders and judgments of any Governmental Authority in force in India from time to time, and, to the extent applicable to a Party, of any other jurisdiction;

(b) **"Audit"** has the meaning given in Clause 12.2;

(c) **"Board"** means the Data Protection Board of India established under section 18 of the DPDP Act;

(d) **"CERT-In"** means the Indian Computer Emergency Response Team appointed under section 70B of the IT Act;

(e) **"CERT-In Directions"** means the directions issued by CERT-In under section 70B(6) of the IT Act on 28 April 2022 relating to information security practices, procedure, prevention, response and reporting of cyber incidents, together with any frequently asked questions, amendments or further directions;

(f) **"Confidential Information"** has the meaning given in the Principal Agreement;

(g) **"Cyber Security Incident"** has the meaning given to "cyber security incident" in the IT Act and includes any incident of a type listed in the annexure to the CERT-In Directions;

(h) **"Data Principal"** means the individual to whom the Personal Data relates, and, where such individual is a child or a person with disability, includes the parents or lawful guardian of such individual, as the context requires;

(i) **"Data Principal Request"** means any request, complaint, grievance or communication from a Data Principal (or a Consent Manager or nominee acting on behalf of a Data Principal) relating to the exercise of rights under Chapter III of the DPDP Act or the withdrawal of consent;

(j) **"Data Protection Laws"** means the DPDP Act, the DPDP Rules, the IT Act and the rules made under it (including, for so long as it remains in force, the SPDI Rules), the CERT-In Directions, and all other Applicable Law relating to the processing, privacy or security of personal data;

(k) **"DPDP Act"** means the Digital Personal Data Protection Act, 2023;

(l) **"DPDP Rules"** means the Digital Personal Data Protection Rules, 2025;

(m) **"Documented Instructions"** means the instructions of the Data Fiduciary set out in this Agreement (including Schedule 1), the Principal Agreement, and any further written instructions given by the Data Fiduciary from time to time in accordance with Clause 3;

(n) **"Governmental Authority"** means any government, ministry, department, regulator, statutory authority, court, tribunal or other authority having jurisdiction, including the Board and CERT-In;

(o) **"IT Act"** means the Information Technology Act, 2000;

(p) **"Personal Data"** means any personal data (as defined in the DPDP Act) that is processed by the Data Processor or any Sub-processor on behalf of the Data Fiduciary in connection with the Services, as further described in Schedule 1;

(q) **"Personal Data Breach"** means any unauthorised processing of Personal Data or accidental disclosure, acquisition, sharing, use, alteration, destruction of or loss of access to Personal Data, that compromises the confidentiality, integrity or availability of Personal Data;

(r) **"Personnel"** means the employees, officers, contractors, consultants and agents of the Data Processor or a Sub-processor;

(s) **"Processing"** has the meaning given to "processing" in the DPDP Act, and **"Process"** and **"Processed"** shall be construed accordingly;

(t) **"Restricted Transfer"** means a transfer of, or the grant of access to, Personal Data to any person or place outside India;

(u) **"Security Measures"** means the technical and organisational measures set out in Schedule 2;

(v) **"SPDI Rules"** means the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011; and

(w) **"Sub-processor"** means any person (including an affiliate of the Data Processor) engaged by the Data Processor, or by another Sub-processor, to Process Personal Data on behalf of the Data Fiduciary.

1.2 Capitalised terms used but not defined in this Agreement have the meanings given to them in the Principal Agreement, and terms such as "Data Fiduciary", "Data Processor", "Consent Manager" and "Significant Data Fiduciary", where used generically, have the meanings given to them in the DPDP Act.

1.3 In this Agreement, unless the context otherwise requires: (a) headings are for convenience only and do not affect interpretation; (b) the singular includes the plural and vice versa; (c) references to a statute or statutory provision include that statute or provision as amended, re-enacted or replaced from time to time, and any subordinate legislation made under it; (d) the words "include", "including" and "in particular" are illustrative and do not limit the generality of the preceding words; (e) references to Clauses and Schedules are to clauses of and schedules to this Agreement, and the Schedules form part of this Agreement; (f) a reference to "writing" includes email but not instant messaging; (g) a reference to "days" means calendar days and a reference to "business days" means days other than Saturdays, Sundays and public holidays in the city of the Data Fiduciary's registered office; and (h) no rule of construction shall apply to the disadvantage of a Party on the basis that it prepared this Agreement.

## 2. Scope, roles and order of precedence

2.1 **Roles.** In respect of the Personal Data, the Data Fiduciary is the Data Fiduciary and the Data Processor is a Data Processor. The Data Processor shall not determine the purpose or means of Processing of the Personal Data and shall not act as a Data Fiduciary in respect of it.

2.2 **Data Processor's own data.** To the extent the Data Processor processes personal data relating to the Data Fiduciary's personnel for its own account-management, billing or legal-compliance purposes, the Data Processor does so as an independent Data Fiduciary and this Agreement shall not apply to such processing, save that the Data Processor shall comply with Data Protection Laws in respect of it.

2.3 **Scope.** This Agreement applies to all Processing of Personal Data by the Data Processor and its Sub-processors in connection with the Services, whether such Processing occurs before or after the date of this Agreement, and whether in India or elsewhere.

2.4 **Order of precedence.** In the event of any conflict or inconsistency between: (a) this Agreement; (b) the Principal Agreement; and (c) any statement of work, order form, policy or other document incorporated into the Principal Agreement, the following order of precedence shall apply to the extent of the conflict, with the higher-ranked document prevailing: first, any mandatory provision of Data Protection Laws; second, this Agreement (including its Schedules); third, the Principal Agreement; and fourth, any other document. Nothing in the Principal Agreement shall be construed to reduce the Data Processor's obligations under this Agreement.

2.5 **Change in law.** If a change in Data Protection Laws (including the commencement of any provision of the DPDP Act or DPDP Rules, or the notification of the Data Fiduciary as a Significant Data Fiduciary) requires any amendment to this Agreement, the Parties shall negotiate in good faith and execute such amendment within 30 days of a written request from either Party. Pending such amendment, the Data Processor shall comply with any reasonable Documented Instructions given by the Data Fiduciary to give effect to the change.

## 3. Processing on Documented Instructions

3.1 The Data Processor shall Process Personal Data only: (a) on the Documented Instructions of the Data Fiduciary; (b) to the extent necessary to provide the Services; and (c) for the purposes and in the manner described in Schedule 1. The Data Processor shall not Process Personal Data for its own purposes, including for profiling, analytics, product improvement, benchmarking, or the training, fine-tuning or evaluation of any artificial-intelligence or machine-learning model, except as expressly set out in Schedule 1.

3.2 If Applicable Law requires the Data Processor to Process Personal Data otherwise than on Documented Instructions, the Data Processor shall inform the Data Fiduciary of that legal requirement before Processing, unless that law prohibits such information, and shall Process only to the minimum extent required.

3.3 The Data Processor shall immediately inform the Data Fiduciary if, in its opinion, a Documented Instruction infringes Data Protection Laws, and may suspend execution of that instruction until the Data Fiduciary confirms or modifies it.

3.4 The Data Processor shall not sell, rent, disclose, share or otherwise make available Personal Data to any third party except: (a) to Sub-processors in accordance with Clause 7; (b) as required by Applicable Law in accordance with Clause 14; or (c) as expressly instructed by the Data Fiduciary.

3.5 The Data Processor shall not combine Personal Data with personal data received from any other source, nor attempt to re-identify any Data Principal from de-identified, masked or tokenised data, except as necessary to provide the Services.

## 4. Data Fiduciary's obligations

4.1 The Data Fiduciary shall: (a) ensure that it has a lawful ground under the DPDP Act (consent under section 6 or a legitimate use under section 7) for the Processing it instructs; (b) give notices to Data Principals as required by section 5 of the DPDP Act; (c) ensure that its Documented Instructions comply with Data Protection Laws; and (d) promptly inform the Data Processor of any withdrawal of consent, erasure request or other event that requires the Data Processor to cease Processing or to erase any Personal Data.

4.2 Where consent is withdrawn or the specified purpose is no longer being served, the Data Fiduciary shall notify the Data Processor, and the Data Processor shall cease Processing and erase the relevant Personal Data in accordance with Clause 13 within the time specified in the notification, as required by sections 6(6) and 8(7) of the DPDP Act.

## 5. Personnel and confidentiality

5.1 The Data Processor shall ensure that access to Personal Data is limited to those Personnel who need access to perform the Services, and only to the extent necessary.

5.2 The Data Processor shall ensure that all Personnel authorised to Process Personal Data: (a) are bound by written obligations of confidentiality, or are under an appropriate statutory obligation of confidentiality, that survive the end of their engagement; (b) have received appropriate training in data protection and information security before being given access and at least annually thereafter; and (c) are subject to background verification appropriate to the sensitivity of the Personal Data and permitted by Applicable Law.

5.3 The Data Processor shall be liable for the acts and omissions of its Personnel as if they were its own.

5.4 Personal Data is Confidential Information of the Data Fiduciary. The obligations in this Clause 5 are in addition to, and not in substitution for, the confidentiality obligations in the Principal Agreement, and shall survive termination of this Agreement without limit in time for so long as the Data Processor or any Sub-processor holds any Personal Data.

## 6. Security safeguards

6.1 The Data Processor shall implement and maintain, throughout the term of this Agreement and for so long as it holds any Personal Data, reasonable security safeguards to prevent Personal Data Breaches, which shall be no less protective than: (a) the Security Measures; (b) the measures required of a Data Fiduciary under section 8(5) of the DPDP Act and the DPDP Rules, to the extent applicable to Processing undertaken on its behalf; (c) for so long as the SPDI Rules remain in force, reasonable security practices and procedures within the meaning of section 43A of the IT Act and rule 8 of the SPDI Rules; and (d) the CERT-In Directions.

6.2 Without limiting Clause 6.1, the Data Processor shall at a minimum:

(a) secure Personal Data through encryption, obfuscation, masking or the use of virtual tokens mapped to that Personal Data;

(b) implement appropriate measures to control access to the computer resources used for Processing;

(c) maintain visibility over access to Personal Data through appropriate logs, monitoring and review, for enabling detection of unauthorised access, its investigation, remediation to prevent recurrence and continuity of Processing in the event of a compromise;

(d) implement reasonable measures, including backups, for continued Processing in the event of a compromise of confidentiality, integrity or availability of Personal Data;

(e) retain such logs and Personal Data relating to such Processing as are necessary for the purposes in sub-clause (c) for a period of at least one year, unless a longer period is required under Applicable Law or a shorter period is instructed by the Data Fiduciary consistent with Applicable Law; and

(f) implement appropriate technical and organisational measures to ensure effective observance of the above.

> **Drafting note:** Clause 6.2 tracks the minimum safeguards in Rule 6 of the DPDP Rules as notified (encryption, obfuscation, masking or virtual tokens; access control; logs and monitoring; continuity and backups; one-year retention of logs and associated personal data; contractual provision with processors; and technical and organisational measures) [verify Rule numbering and text against the Gazette]. Note the interaction with the CERT-In Directions, which require ICT system logs to be maintained securely within Indian jurisdiction for a rolling period of 180 days. Where the Data Fiduciary is regulated by RBI, SEBI or IRDAI, add the relevant outsourcing and cyber-security directions to Schedule 2.

6.3 The Data Processor shall maintain an information security programme that is certified to, or materially consistent with, ISO/IEC 27001 [and/or SOC 2 Type II], and shall provide the Data Fiduciary, on request and at least annually, with a copy of current certifications and summary audit reports.

6.4 The Data Processor shall not materially diminish the overall level of security provided by the Security Measures during the term of this Agreement. Any change to the Security Measures that may adversely affect the protection of Personal Data requires the Data Fiduciary's prior written consent.

6.5 The Data Processor shall conduct vulnerability assessments at least [quarterly] and penetration tests at least [annually] on systems that Process Personal Data, by a qualified independent tester (which, where required by Applicable Law or the Data Fiduciary's regulator, shall be a CERT-In-empanelled auditor), and shall remediate critical and high-severity findings within [15] and [30] days respectively.

## 7. Sub-processors

7.1 **Prior authorisation.** The Data Processor shall not engage any Sub-processor without the prior written authorisation of the Data Fiduciary. The Data Fiduciary authorises the Sub-processors listed in Schedule 3 as at the date of this Agreement.

7.2 **New Sub-processors.** The Data Processor shall give the Data Fiduciary at least {{subprocessor_notice_days}} days' prior written notice of any intended addition or replacement of a Sub-processor, specifying the Sub-processor's identity, location, the Processing it will perform and the safeguards in place. The Data Fiduciary may object on reasonable grounds relating to data protection within that period. If the Data Fiduciary objects, the Parties shall discuss in good faith; if no resolution is reached within 15 days, the Data Fiduciary may terminate the affected Services without penalty and shall receive a pro-rata refund of any prepaid fees for them.

7.3 **Flow-down.** The Data Processor shall engage each Sub-processor only under a written contract that imposes on the Sub-processor data-protection obligations no less protective of Personal Data than those in this Agreement, including Clauses 3, 5, 6, 9, 10, 11, 12 and 13, and which enables the Data Processor to meet its obligations to the Data Fiduciary.

7.4 **Liability.** The Data Processor shall remain fully liable to the Data Fiduciary for the acts and omissions of each Sub-processor as if they were the acts and omissions of the Data Processor.

7.5 **Records.** The Data Processor shall maintain an up-to-date list of Sub-processors and shall provide it to the Data Fiduciary on request, so that the Data Fiduciary can respond to requests under section 11(1)(b) of the DPDP Act.

## 8. Assistance with Data Principal rights and compliance

8.1 **Data Principal Requests.** Taking into account the nature of the Processing, the Data Processor shall implement appropriate technical and organisational measures to assist the Data Fiduciary in responding to Data Principal Requests, including requests for access to information (section 11), correction, completion, updating and erasure (section 12), grievance redressal (section 13) and nomination (section 14) of the DPDP Act, and withdrawal of consent (section 6(4)).

8.2 If the Data Processor receives a Data Principal Request directly, it shall, within two business days, forward it to the Data Fiduciary and shall not respond to the Data Principal except to acknowledge receipt and redirect the Data Principal to the Data Fiduciary, unless otherwise instructed.

8.3 The Data Processor shall carry out any instruction of the Data Fiduciary to give effect to a Data Principal Request (including to correct, complete, update or erase Personal Data, or to provide a summary of Personal Data Processed) within {{rights_assistance_days}} business days of the instruction, or any shorter period reasonably required for the Data Fiduciary to meet its obligations under Data Protection Laws.

8.4 **Other assistance.** The Data Processor shall provide reasonable assistance to the Data Fiduciary in: (a) ensuring compliance with its obligations in respect of security safeguards and Personal Data Breaches; (b) where the Data Fiduciary is a Significant Data Fiduciary, carrying out Data Protection Impact Assessments, periodic audits and due diligence on algorithmic software under section 10 of the DPDP Act and the DPDP Rules; (c) responding to any inquiry, direction or proceeding of the Board or any other Governmental Authority; and (d) ensuring the completeness, accuracy and consistency of Personal Data where it is used to make a decision affecting a Data Principal or disclosed to another Data Fiduciary.

8.5 **Children's data.** Where Schedule 1 indicates that Personal Data of children is Processed, the Data Processor shall not undertake any tracking or behavioural monitoring of children or targeted advertising directed at children, and shall support the Data Fiduciary's mechanism for verifiable parental consent.

## 9. Personal Data Breach

9.1 **Notification to the Data Fiduciary.** The Data Processor shall notify the Data Fiduciary in writing without undue delay, and in any event within {{breach_notice_hours}} hours, after becoming aware of a Personal Data Breach, or of any reasonable suspicion of a Personal Data Breach, affecting Personal Data Processed by it or any Sub-processor.

9.2 **Content of notification.** The notification shall include, to the extent then known, the information set out in Schedule 4. Where not all such information is available at once, it shall be provided in phases as it becomes available, without undue further delay, and the Data Processor shall in any event provide all information reasonably required for the Data Fiduciary to: (a) intimate the Board and each affected Data Principal without delay; and (b) furnish the detailed report to the Board within the period prescribed under the DPDP Rules.

> **Drafting note:** As notified, Rule 7 of the DPDP Rules requires the Data Fiduciary, on becoming aware of a personal data breach, to intimate each affected Data Principal and the Board without delay, and to furnish a detailed report to the Board within 72 hours (or such longer period as the Board allows) covering facts, circumstances and reasons, mitigation measures, findings on the person who caused the breach, remedial measures and notifications to Data Principals [verify]. Because the clock runs from the Data Fiduciary's awareness — and arguably from its processor's — keep {{breach_notice_hours}} short: 12 to 24 hours is common, and some fiduciaries demand 6 hours to align with CERT-In. Penalties under the Schedule to the DPDP Act for failing to intimate a breach can reach ₹200 crore [verify].

9.3 **Response.** The Data Processor shall, at its own cost (unless the breach was caused by the Data Fiduciary): (a) immediately take all reasonable steps to contain, investigate, mitigate and remediate the Personal Data Breach; (b) preserve all relevant evidence, logs and forensic artefacts; (c) co-operate fully with the Data Fiduciary and any forensic investigator appointed by it; (d) provide regular updates (at least daily during the active phase); and (e) within [15] days of containment, provide a written root-cause analysis and remediation plan.

9.4 **Communications.** The Data Processor shall not notify the Board, any Data Principal, the media or any third party (other than CERT-In or a law-enforcement agency where required by Applicable Law, in accordance with Clause 10) of a Personal Data Breach affecting Personal Data without the Data Fiduciary's prior written approval of the content and timing, save to the extent required by Applicable Law.

9.5 **No admission.** Notification of, or response to, a Personal Data Breach by the Data Processor shall not of itself be construed as an acknowledgement of fault or liability.

## 10. Cyber Security Incidents and CERT-In

10.1 The Data Processor shall comply with the CERT-In Directions to the extent applicable to it, including: (a) reporting Cyber Security Incidents of the types listed in the CERT-In Directions to CERT-In within six hours of noticing them or being brought to notice of them; (b) maintaining logs of all its ICT systems securely within Indian jurisdiction for a rolling period of 180 days; (c) synchronising its system clocks with the Network Time Protocol servers of the National Informatics Centre or the National Physical Laboratory, or with servers traceable to them; and (d) designating a point of contact to interface with CERT-In.

10.2 To enable the Data Fiduciary to meet its own reporting obligations, the Data Processor shall notify the Data Fiduciary of any Cyber Security Incident affecting systems used to provide the Services within {{cert_in_notice_hours}} hours of noticing it, whether or not Personal Data is affected, and shall share (subject to Applicable Law) a copy of any report it makes to CERT-In concerning the Services.

10.3 The Parties shall co-ordinate in good faith so that reports to CERT-In and to the Board are consistent, and shall agree which Party will file which report where both are obliged to report the same incident. Each Party remains responsible for its own statutory reporting.

> **Drafting note:** The CERT-In Directions dated 28 April 2022 (and CERT-In's FAQs of May 2022) apply to service providers, intermediaries, data centres, body corporates and government organisations, and impose a 6-hour reporting window from noticing an incident. A Personal Data Breach may also be a reportable cyber incident, so both tracks may run in parallel with different clocks. Check any later amendments and sector-specific reporting (for example, RBI, SEBI or IRDAI incident reporting) [verify].

## 11. Transfers outside India and data localisation

11.1 The Data Processor shall Process and store Personal Data only in the locations set out in Schedule 1 ({{processing_locations}}). The Data Processor shall not make any Restricted Transfer (including by remote access from outside India) other than to the locations specified in Schedule 1, without the Data Fiduciary's prior written consent.

11.2 The Data Processor shall not in any event transfer Personal Data to any country or territory restricted by the Central Government by notification under section 16(1) of the DPDP Act, and shall comply with any conditions that the Central Government may specify under the DPDP Rules in respect of transfers outside India. If any location in Schedule 1 becomes so restricted, the Data Processor shall, at its cost and within the period required by Applicable Law (or, if none, within 30 days), cease the transfer and repatriate or erase the affected Personal Data.

11.3 Where Applicable Law (including any direction to a Significant Data Fiduciary under the DPDP Rules, or any sectoral law such as the Reserve Bank of India's directions on storage of payment system data) requires any Personal Data to be stored or Processed only in India, the Data Processor shall comply with that requirement as notified to it by the Data Fiduciary.

> **Drafting note:** Section 16 of the DPDP Act takes a negative-list approach to cross-border transfers; section 16(2) preserves any stricter sectoral law. Check whether any restricted list or conditions have been notified under the DPDP Rules (Rule 15 as notified) [verify]. If the Data Fiduciary also processes personal data subject to the EU GDPR or UK GDPR, this Agreement will not suffice for transfers of that data: add an "International Data Transfer Addendum" incorporating the European Commission's Standard Contractual Clauses (Module 2 or 3) or the UK International Data Transfer Addendum, plus the GDPR Article 28(3) content, as a separate schedule that prevails only for that data.

## 12. Records, information and audit

12.1 **Records.** The Data Processor shall maintain complete and accurate records of all Processing carried out on behalf of the Data Fiduciary, including the categories of Processing, Sub-processors, Restricted Transfers and Security Measures, and shall make them available to the Data Fiduciary on request.

12.2 **Audit right.** The Data Processor shall make available to the Data Fiduciary all information necessary to demonstrate compliance with this Agreement and Data Protection Laws, and shall allow for and contribute to audits and inspections (each an **"Audit"**) conducted by the Data Fiduciary, an independent auditor appointed by it (bound by confidentiality obligations), or any Governmental Authority having jurisdiction over the Data Fiduciary.

12.3 **Conduct of Audits.** Save where an Audit follows a Personal Data Breach, is required by a Governmental Authority, or the Data Fiduciary has reasonable grounds to suspect a material breach of this Agreement: (a) the Data Fiduciary shall give at least {{audit_notice_days}} business days' written notice; (b) Audits shall take place no more than once in any 12-month period; (c) Audits shall be conducted during normal business hours and so as to minimise disruption; and (d) the Data Fiduciary may first rely on current independent certifications and audit reports provided under Clause 6.3, and shall conduct an on-site Audit only where those do not reasonably address its concerns.

12.4 **Costs.** Each Party shall bear its own costs of an Audit, provided that if an Audit reveals a material breach of this Agreement by the Data Processor, the Data Processor shall reimburse the Data Fiduciary's reasonable costs of the Audit and shall remedy the breach at its own cost within the period reasonably specified by the Data Fiduciary.

12.5 **Questionnaires.** The Data Processor shall complete, within 30 days of request and not more than once a year (save following a Personal Data Breach), any reasonable security and privacy questionnaire issued by the Data Fiduciary.

## 13. Retention, return and erasure

13.1 The Data Processor shall not retain Personal Data for longer than is necessary to provide the Services or as instructed by the Data Fiduciary, save as required by Applicable Law.

13.2 Upon: (a) termination or expiry of the Principal Agreement or this Agreement; (b) the Data Fiduciary's written request; or (c) the Data Fiduciary notifying the Data Processor that the specified purpose is no longer being served or that consent has been withdrawn, the Data Processor shall, at the Data Fiduciary's election, return to the Data Fiduciary (in a commonly used, machine-readable format) and/or securely erase all relevant Personal Data, including all copies held by Sub-processors, within {{deletion_days}} days (or such shorter period as may be required to enable the Data Fiduciary to comply with Data Protection Laws).

13.3 Erasure shall be carried out using methods that render the Personal Data unrecoverable, consistent with recognised standards. The Data Processor shall, on request, provide a written certificate of erasure signed by an authorised officer.

13.4 If Applicable Law requires the Data Processor to retain any Personal Data (including logs under the CERT-In Directions or the DPDP Rules), the Data Processor shall inform the Data Fiduciary, retain only the minimum required, continue to protect it in accordance with this Agreement, Process it only for the purpose of compliance with that law, and erase it promptly on expiry of the retention period.

13.5 Backup copies that cannot reasonably be erased immediately shall be isolated, protected and erased in accordance with the Data Processor's normal backup rotation, which shall not exceed [90] days.

## 14. Requests from Governmental Authorities

14.1 If the Data Processor receives a request, order, summons or direction from any Governmental Authority (other than the Data Fiduciary's own regulator acting through the Data Fiduciary) for disclosure of Personal Data, it shall, to the extent permitted by Applicable Law: (a) promptly notify the Data Fiduciary and provide a copy of the request; (b) redirect the Governmental Authority to the Data Fiduciary; (c) not disclose Personal Data unless legally compelled; (d) challenge any request that it reasonably considers unlawful or overbroad; and (e) disclose only the minimum Personal Data necessary to comply.

14.2 Where the Data Processor is prohibited by Applicable Law from notifying the Data Fiduciary, it shall use reasonable efforts to obtain a waiver of the prohibition and shall provide the Data Fiduciary with as much information as it lawfully can, as soon as it lawfully can.

## 15. Liability

15.1 **General cap.** Subject to Clauses 15.2 and 15.3, each Party's aggregate liability arising out of or in connection with this Agreement, whether in contract, tort (including negligence), breach of statutory duty or otherwise, shall not exceed {{liability_cap_amount}} (the **"General Cap"**).

15.2 **Data Protection Super-Cap.** Subject to Clause 15.3, the Data Processor's aggregate liability arising out of or in connection with: (a) any breach of Clauses 3, 5, 6, 7, 9, 10, 11 or 13; (b) any Personal Data Breach caused or contributed to by the Data Processor or a Sub-processor; or (c) the indemnity in Clause 16.1, shall not exceed an amount equal to {{super_cap_multiple}} times the total fees paid or payable under the Principal Agreement in the 12 months preceding the event giving rise to the claim (the **"Super-Cap"**). The Super-Cap is separate from and in addition to the General Cap, and amounts paid under one shall not erode the other.

15.3 **Uncapped liability.** Neither the General Cap nor the Super-Cap shall limit either Party's liability for: (a) fraud or fraudulent misrepresentation; (b) wilful misconduct or wilful default, including any deliberate Processing of Personal Data otherwise than on Documented Instructions; (c) death or personal injury caused by negligence; or (d) any liability that cannot be limited under Applicable Law.

15.4 **Recoverable losses.** Subject to Clause 15.5, neither Party shall be liable for any indirect or consequential loss, or loss of profits, revenue or goodwill, that was not reasonably foreseeable at the time of this Agreement within the meaning of section 73 of the Indian Contract Act, 1872.

15.5 **Losses deemed direct.** The Parties agree that the following losses suffered by the Data Fiduciary as a result of a breach of this Agreement by the Data Processor are direct and recoverable (subject to the applicable cap): (a) penalties imposed by the Board or any other Governmental Authority, to the extent permitted by Applicable Law to be recovered; (b) amounts paid to Data Principals under any order, settlement approved by the Data Processor (acting reasonably) or voluntary undertaking accepted by the Board; (c) reasonable costs of investigation, forensic analysis, legal advice and notification to the Board and Data Principals; (d) reasonable costs of call centres, credit monitoring and identity-protection services offered to affected Data Principals; and (e) reasonable costs of restoring or recreating lost or corrupted Personal Data.

15.6 **Apportionment.** Where both Parties have contributed to a loss, each Party's liability shall be reduced in proportion to the extent to which the other Party contributed to it.

15.7 **Relationship with Principal Agreement.** This Clause 15 applies to all liability arising under this Agreement notwithstanding any limitation or exclusion of liability in the Principal Agreement, and liability under this Agreement shall not count towards any cap in the Principal Agreement.

> **Drafting note:** Under section 8(1) of the DPDP Act, the Data Fiduciary remains liable to the Board for its processor's failures, and penalties under the Schedule to the Act can reach ₹250 crore for failure to take reasonable security safeguards [verify]. A super-cap of 2–5x annual contract value for data-protection, confidentiality and security breaches is market practice in Indian technology contracts; processors with strong leverage will resist anything above the general cap. Whether a regulatory penalty is recoverable from a contractual counterparty is untested in India; Clause 15.5(a) is drafted "to the extent permitted". Keep penalty-recovery and indemnity outside any "consequential loss" exclusion, as drafted.

## 16. Indemnity

16.1 The Data Processor shall indemnify and hold harmless the Data Fiduciary, its affiliates and their respective directors, officers and employees against all losses, damages, penalties, costs (including reasonable legal fees) and expenses arising out of or in connection with: (a) any breach by the Data Processor or any Sub-processor of this Agreement or Data Protection Laws; (b) any Personal Data Breach caused or contributed to by the Data Processor or any Sub-processor; and (c) any claim by a Data Principal, complaint to the Board, or proceeding of any Governmental Authority, to the extent arising from (a) or (b).

16.2 The Data Fiduciary shall indemnify and hold harmless the Data Processor against all losses, damages, costs and expenses arising out of any claim by a third party to the extent caused by Processing carried out by the Data Processor strictly in accordance with Documented Instructions that infringe Data Protection Laws.

16.3 **Procedure.** The indemnified Party shall: (a) notify the indemnifying Party promptly in writing of any claim (but failure to do so shall relieve the indemnifying Party only to the extent it is prejudiced); (b) allow the indemnifying Party to conduct the defence and settlement of a third-party claim, provided that the Data Fiduciary shall retain control of all communications with the Board and Data Principals and of any proceeding before the Board; (c) not admit liability or settle without the indemnifying Party's prior written consent (not to be unreasonably withheld); and (d) provide reasonable co-operation at the indemnifying Party's cost.

16.4 The indemnities in this Clause 16 are subject to the caps in Clause 15 as applicable, are in addition to any other rights or remedies, and are enforceable in accordance with sections 124 and 125 of the Indian Contract Act, 1872. The indemnified Party shall be entitled to claim under this Clause 16 on incurring a liability, without having first to make payment.

## 17. Insurance

17.1 The Data Processor shall maintain, throughout the term of this Agreement and for at least [two] years thereafter, with reputable insurers, cyber liability and professional indemnity insurance with a limit of not less than {{insurance_amount}} per claim and in the aggregate, covering its liabilities under this Agreement, and shall provide certificates of insurance on request.

## 18. Term and termination

18.1 This Agreement takes effect on the date stated above and continues for so long as the Data Processor or any Sub-processor Processes Personal Data, notwithstanding the termination or expiry of the Principal Agreement.

18.2 The Data Fiduciary may terminate this Agreement and the Principal Agreement (in whole or in relevant part), without liability, by written notice if: (a) the Data Processor commits a material breach of this Agreement which is not capable of remedy or, if capable of remedy, is not remedied within 15 days of written notice; (b) the Data Processor is subject to a Personal Data Breach that, in the Data Fiduciary's reasonable opinion, results from a failure to implement the Security Measures; (c) a Governmental Authority directs the Data Fiduciary to cease using the Data Processor; or (d) continued Processing would cause the Data Fiduciary to breach Data Protection Laws.

18.3 Clauses 5, 9 (in respect of breaches occurring before the end of Processing), 12, 13, 14, 15, 16, 19 and 20, and any other provisions which by their nature are intended to survive, survive termination or expiry.

## 19. Governing law and dispute resolution

19.1 This Agreement is governed by the laws of India.

19.2 **Negotiation.** Any dispute, controversy or claim arising out of or in connection with this Agreement, including its existence, validity, interpretation, performance, breach or termination (a **"Dispute"**), shall first be referred by written notice to senior executives of each Party, who shall attempt in good faith to resolve it within 30 days of the notice.

19.3 **Arbitration.** Any Dispute not resolved under Clause 19.2 shall be referred to and finally resolved by arbitration under the Arbitration and Conciliation Act, 1996. The arbitral tribunal shall consist of a sole arbitrator appointed by mutual agreement of the Parties within 30 days of a written request by either Party, failing which the arbitrator shall be appointed [OPTION A: by the High Court having jurisdiction under section 11 of the Arbitration and Conciliation Act, 1996 / OPTION B: in accordance with the rules of [name of arbitral institution], which rules are deemed incorporated by reference into this Clause]. Neither Party shall have the right to appoint the arbitrator unilaterally or to require the other Party to choose from a panel curated by one Party alone.

19.4 **Seat and venue.** The seat (juridical place) of arbitration shall be {{arbitration_seat}}. The venue of hearings shall be {{arbitration_venue}}; the choice of any venue for hearings, including by video conference, shall not change the seat. The language of the arbitration shall be English. The courts at {{arbitration_seat}} shall have exclusive supervisory jurisdiction over the arbitration.

19.5 **Interim relief.** Nothing in this Clause 19 prevents either Party from seeking urgent interim relief, including an injunction to restrain unauthorised Processing or disclosure of Personal Data, from a court of competent jurisdiction under section 9 of the Arbitration and Conciliation Act, 1996. The Parties acknowledge that damages may not be an adequate remedy for breach of Clauses 3, 5, 6 or 13, and that specific performance and injunctive relief are available under the Specific Relief Act, 1963.

19.6 **Continued performance.** The Data Processor shall continue to comply with this Agreement pending resolution of any Dispute.

> **Drafting note:** State the seat and venue separately to avoid the uncertainty addressed in BGS SGS Soma JV v NHPC (SC, 2019). Unilateral appointment of an arbitrator by one party, or appointment from a panel curated by one party, is invalid (Perkins Eastman Architects DPC v HSCC (India) Ltd, SC, 2019; Central Organisation for Railway Electrification v ECI-SPIC-SMO-MCML (JV), Constitution Bench, SC, 2024), so this clause provides for mutual, court or institutional appointment. For institutional arbitration, consider MCIA, DIAC or IIAC rules. If the Parties prefer courts, replace Clauses 19.3–19.4 with an exclusive-jurisdiction clause and note that a commercial suit not contemplating urgent interim relief requires pre-institution mediation under section 12A of the Commercial Courts Act, 2015. Where the Data Processor is a foreign entity, consider a foreign seat only after checking enforceability in its home jurisdiction.

## 20. General

20.1 **Notices.** Notices under this Agreement shall be in writing and delivered by hand, by registered post or courier, or by email to the addresses below (or such other address as a Party notifies). Notices of a Personal Data Breach or Cyber Security Incident shall be given by email and by telephone to the contacts listed in Schedule 1.

Data Fiduciary: {{company_address}}; email: {{company_email}}
Data Processor: {{counterparty_address}}; email: {{counterparty_email}}

20.2 **Stamp duty.** This Agreement shall be stamped in accordance with the applicable State stamp law. Stamp duty payable on this Agreement shall be borne by {{stamp_duty_payer}}.

20.3 **Counterparts and electronic execution.** This Agreement may be executed in counterparts and by electronic signature in accordance with the IT Act, each of which shall be an original and all of which together constitute one instrument.

20.4 **Amendment.** No amendment to this Agreement is effective unless in writing and signed by authorised signatories of both Parties.

20.5 **Assignment.** The Data Processor shall not assign, novate or otherwise transfer this Agreement, and no change of control of the Data Processor shall occur, without the Data Fiduciary's prior written consent, which may be withheld if the assignee or acquirer does not offer equivalent data-protection assurances.

20.6 **Severability.** If any provision of this Agreement is held invalid or unenforceable, it shall be modified to the minimum extent necessary to make it valid and enforceable, and the remaining provisions shall continue in full force.

20.7 **Waiver.** No failure or delay in exercising any right operates as a waiver of it.

20.8 **Entire agreement.** This Agreement, together with the Principal Agreement, constitutes the entire agreement between the Parties relating to the Processing of Personal Data, and supersedes all prior data-processing terms between them.

20.9 **Third parties.** Nothing in this Agreement confers any right on any person other than the Parties, save that Data Principals retain all rights they have under Data Protection Laws.

## Execution

IN WITNESS WHEREOF the Parties have executed this Agreement through their duly authorised signatories on the date first written above.

| For and on behalf of {{company_name}} (Data Fiduciary) | For and on behalf of {{counterparty_name}} (Data Processor) |
|---|---|
| Signature: ____________________ | Signature: ____________________ |
| Name: {{company_signatory_name}} | Name: {{counterparty_signatory_name}} |
| Title: {{company_signatory_title}} | Title: {{counterparty_signatory_title}} |
| Date: ____________________ | Date: ____________________ |

## Schedule 1 – Details of Processing

| Item | Details |
|---|---|
| Subject matter | Provision of the Services under the Principal Agreement |
| Duration | Term of the Principal Agreement plus the period required to return and erase Personal Data under Clause 13 |
| Nature of Processing | [e.g. hosting, storage, backup, retrieval, transmission, support access, analytics on instructions] |
| Specified purposes | [e.g. hosting the Data Fiduciary's customer application; resolving support tickets raised by the Data Fiduciary's customers] |
| Categories of Data Principals | [e.g. customers and end-users of the Data Fiduciary; the Data Fiduciary's employees; prospective customers] |
| Categories of Personal Data | [e.g. name, contact details, account identifiers, transaction history, device data, support communications] |
| Children's Personal Data | [Yes / No. If yes, describe and confirm the verifiable-consent mechanism] |
| Financial, health, biometric or other high-risk data | [Describe, and identify any sectoral law that applies] |
| Processing locations | {{processing_locations}} |
| Permitted Restricted Transfers | [List countries and recipients, or "None"] |
| Retention instructions | [e.g. delete within 30 days of Data Fiduciary instruction; logs retained for at least one year] |
| Breach and incident contacts | Data Fiduciary: [name, role, email, 24x7 phone]. Data Processor: [name, role, email, 24x7 phone] |

## Schedule 2 – Security Measures

The Data Processor shall implement at least the following measures.

1. **Governance:** a documented information security policy approved by senior management; a named information security officer; annual risk assessment; and a point of contact for CERT-In.

2. **Encryption and pseudonymisation:** encryption of Personal Data in transit using current versions of TLS and at rest using industry-standard algorithms (for example, AES-256); key management with segregation of duties and periodic key rotation; and masking, tokenisation or obfuscation of Personal Data in non-production environments and wherever full data is not required.

3. **Access control:** unique user IDs; role-based access on a least-privilege and need-to-know basis; multi-factor authentication for all administrative and remote access; privileged access management; quarterly access reviews; and revocation of access within 24 hours of a person leaving or changing role.

4. **Logging and monitoring:** centralised logging of access to and changes in Personal Data and of security events, protected against tampering; security monitoring and alerting; retention of logs for at least one year (and ICT system logs within India for 180 days under the CERT-In Directions); and time synchronisation as required by the CERT-In Directions.

5. **Continuity and resilience:** encrypted backups at a frequency appropriate to the data; tested restoration at least annually; and a business-continuity and disaster-recovery plan with defined recovery objectives.

6. **Secure development and change management:** secure software development practices; code review; dependency and vulnerability scanning; segregated development, test and production environments; and change approval.

7. **Vulnerability management:** patching of critical vulnerabilities within [7] days and high-severity vulnerabilities within [30] days; periodic vulnerability assessment and penetration testing in accordance with Clause 6.5.

8. **Network and endpoint security:** firewalls, network segmentation, intrusion detection or prevention, hardened configurations, endpoint protection and full-disk encryption on devices that access Personal Data.

9. **Physical security:** data centres with access control, surveillance and environmental controls, certified to recognised standards.

10. **Personnel:** confidentiality undertakings, background verification, and security and privacy training at onboarding and annually.

11. **Incident response:** a documented incident-response plan covering Personal Data Breaches and Cyber Security Incidents, with escalation paths that meet the timelines in Clauses 9 and 10, tested at least annually.

12. **Vendor management:** due diligence and contractual flow-down for all Sub-processors under Clause 7.

## Schedule 3 – Authorised Sub-processors

| Sub-processor (legal name) | Processing performed | Location(s) of Processing | Safeguards |
|---|---|---|---|
| [Name] | [e.g. infrastructure hosting] | [e.g. India] | [e.g. ISO 27001; DPA executed] |
| [Name] | [e.g. email delivery] | [e.g. India, Singapore] | [e.g. SOC 2 Type II; DPA executed] |

## Schedule 4 – Content of Personal Data Breach Notification

The Data Processor's notification under Clause 9 shall include, to the extent known:

1. a description of the Personal Data Breach, including its nature, extent, timing and location of occurrence;

2. the date and time the breach occurred (or is estimated to have occurred) and the date and time the Data Processor became aware of it;

3. the categories and approximate number of Data Principals and Personal Data records concerned, including whether children's Personal Data is involved;

4. the systems, services and Sub-processors affected;

5. the likely consequences of the breach for Data Principals;

6. the measures taken or proposed to contain and mitigate the breach and to prevent recurrence;

7. the safety measures that Data Principals may take to protect their interests;

8. any information known about the person or cause responsible for the breach;

9. whether the incident has been, or is required to be, reported to CERT-In or any other Governmental Authority, and the reference number of any such report; and

10. the name and contact details of the Data Processor's point of contact for the breach.
