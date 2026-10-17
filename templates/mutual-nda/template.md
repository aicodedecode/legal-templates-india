---
id: mutual-nda
title: Mutual Non-Disclosure Agreement
category: startup-core
summary: >-
  Two-way confidentiality agreement for Indian parties exploring a business relationship, with AI-training restrictions and arbitration.
audience: [startup, sme, enterprise]
jurisdiction: IN
governing_laws:
  - Indian Contract Act, 1872
  - Specific Relief Act, 1963
  - Arbitration and Conciliation Act, 1996
  - Information Technology Act, 2000
  - Digital Personal Data Protection Act, 2023
document_type: agreement
parties: 2
stamp_duty: required
e_signature: permitted
version: 0.1.0
last_updated: 2026-10-16
review_status: draft
related: [one-way-nda, consultancy-agreement, master-services-agreement, data-processing-agreement, term-sheet]
fields:
  - key: effective_date
    type: date
    label: "Effective date"
    example: "1 November 2026"
  - key: company_name
    type: text
    label: "Company's full legal name"
    example: "Acme Technologies Private Limited"
  - key: company_cin
    type: text
    label: "Company's Corporate Identity Number (CIN)"
    example: "U62099KA2024PTC123456"
  - key: company_address
    type: textarea
    label: "Company's registered office address"
    example: "No. 12, 4th Cross, Indiranagar, Bengaluru 560038, Karnataka"
  - key: counterparty_name
    type: text
    label: "Counterparty's full legal name"
    example: "Beta Analytics LLP"
  - key: counterparty_description
    type: textarea
    label: "Counterparty's constitution and registration details"
    example: "a limited liability partnership registered under the Limited Liability Partnership Act, 2008 with LLPIN AAB-1234"
  - key: counterparty_address
    type: textarea
    label: "Counterparty's registered office or principal place of business"
    example: "Unit 5, Andheri East, Mumbai 400069, Maharashtra"
  - key: purpose
    type: textarea
    label: "Purpose for which Confidential Information is shared"
    example: "evaluating a potential integration of the parties' software products and negotiating a commercial agreement for it"
  - key: arbitration_seat
    type: text
    label: "Seat (legal place) of arbitration and city whose courts have jurisdiction"
    example: "Bengaluru"
  - key: disclosure_period
    type: text
    label: "Period during which disclosures are covered"
    example: "two (2) years"
  - key: confidentiality_period
    type: text
    label: "Period for which confidentiality obligations survive"
    example: "three (3) years"
  - key: arbitration_venue
    type: text
    label: "Venue for arbitration hearings (may differ from the seat)"
    example: "Bengaluru"
  - key: stamp_duty_payer
    type: text
    label: "Party that bears stamp duty"
    example: "the Company"
  - key: company_email
    type: email
    label: "Company's email address for notices"
    example: "legal@acme.example"
  - key: company_signatory_name
    type: text
    label: "Name of the Company's authorised signatory"
    example: "Asha Rao"
  - key: company_signatory_title
    type: text
    label: "Title of the Company's authorised signatory"
    example: "Director"
  - key: counterparty_email
    type: email
    label: "Counterparty's email address for notices"
    example: "contracts@beta.example"
  - key: counterparty_signatory_name
    type: text
    label: "Name of the counterparty's authorised signatory"
    example: "Rohan Mehta"
  - key: counterparty_signatory_title
    type: text
    label: "Title of the counterparty's authorised signatory"
    example: "Designated Partner"
---

# MUTUAL NON-DISCLOSURE AGREEMENT

> **Drafting note:** Use this agreement where both parties expect to share confidential information (for example, partnership discussions, joint product evaluations, M&A or commercial negotiations). If only one side will disclose, use the One-Way NDA instead, which is more protective of the disclosing party. Delete all drafting notes before signing.

This Mutual Non-Disclosure Agreement (this **"Agreement"**) is made on {{effective_date}} (the **"Effective Date"**)

**BETWEEN**

**{{company_name}}**, a company incorporated under the Companies Act, 2013 with corporate identity number {{company_cin}}, having its registered office at {{company_address}} (the **"Company"**, which expression shall, unless repugnant to the context, include its successors and permitted assigns);

**AND**

**{{counterparty_name}}**, {{counterparty_description}}, having its registered office or principal place of business at {{counterparty_address}} (the **"Counterparty"**, which expression shall, unless repugnant to the context, include its successors and permitted assigns).

The Company and the Counterparty are each a **"Party"** and together the **"Parties"**.

> **Drafting note:** Describe the Counterparty accurately by its constitution: for example, "a company incorporated under the Companies Act, 2013 with CIN ...", "a limited liability partnership registered under the Limited Liability Partnership Act, 2008 with LLPIN ...", "a partnership firm registered under the Indian Partnership Act, 1932", or, for a foreign entity, "a company incorporated under the laws of [country] with registration number ...". For an individual, use "an individual of Indian nationality, residing at ...", and adjust the signature block.

## Recitals

A. The Parties wish to evaluate, negotiate and, if they so decide, pursue the following: {{purpose}} (the **"Purpose"**).

B. In connection with the Purpose, each Party may disclose Confidential Information to the other. The Parties have agreed to protect that Confidential Information on the terms of this Agreement.

NOW, THEREFORE, in consideration of the mutual promises in this Agreement and the disclosure of Confidential Information by each Party, the Parties agree as follows:

## 1. Definitions and Interpretation

1.1 In this Agreement:

(a) **"Affiliate"** means, in relation to a Party, any entity that directly or indirectly Controls, is Controlled by, or is under common Control with that Party, where **"Control"** means the ownership of more than fifty per cent of the voting share capital of an entity or the right to appoint a majority of its board of directors or equivalent governing body;

(b) **"AI Tool"** means any artificial intelligence or machine-learning model, system, service or software, including any large language model, generative AI service, chatbot, coding assistant, embedding or vector-search service and any automated analytics service that retains, learns from or is trained, fine-tuned or evaluated on inputs, whether operated by a Party or by a third party;

(c) **"Applicable Law"** means all laws, statutes, rules, regulations, notifications, directions, orders and judgments of any governmental, regulatory, judicial or quasi-judicial authority in India or elsewhere that apply to a Party or to the subject matter of this Agreement;

(d) **"Business Day"** means a day other than a Saturday, Sunday or public holiday on which banks are open for general business in {{arbitration_seat}};

(e) **"Confidential Information"** means all information, in any form or medium (whether written, oral, visual, electronic, magnetic or otherwise, and whether or not marked as confidential), disclosed or made available, directly or indirectly, by or on behalf of a Disclosing Party or its Affiliates to the Receiving Party or its Representatives, before, on or after the Effective Date, in connection with the Purpose, including: (i) business plans, strategies, forecasts, budgets, pricing, margins, financial information and projections; (ii) information about customers, users, suppliers, investors, employees and other business relationships; (iii) products, services, roadmaps, product designs, specifications, prototypes and research and development; (iv) source code, object code, algorithms, models, model weights, prompts, training data, datasets, databases, software architecture, APIs and technical documentation; (v) inventions, know-how, trade secrets, processes, methods, formulae and techniques; (vi) Personal Data; (vii) the existence, status and terms of discussions between the Parties regarding the Purpose; and (viii) all notes, analyses, compilations, summaries, extracts and other materials prepared by or for the Receiving Party or its Representatives that contain, reflect or are derived from any of the foregoing;

(f) **"Disclosing Party"** means the Party (or its Affiliate) disclosing or making available Confidential Information, and **"Receiving Party"** means the Party (or its Affiliate) receiving or obtaining access to it;

(g) **"Personal Data"** has the meaning given to "personal data" in the Digital Personal Data Protection Act, 2023;

(h) **"Representatives"** means, in relation to a Party, its Affiliates and its and their directors, officers, employees, professional advisers (including lawyers, chartered accountants and auditors), actual or bona fide prospective financiers and investors, and consultants and contractors engaged in connection with the Purpose; and

(i) **"Trade Secret"** means any Confidential Information that derives independent commercial value from not being generally known and that is the subject of reasonable efforts to maintain its secrecy.

1.2 In this Agreement, unless the context otherwise requires:

(a) the recitals and schedules form part of this Agreement, and references to this Agreement include them;

(b) headings and the table of contents (if any) are for convenience only and do not affect interpretation;

(c) words in the singular include the plural and vice versa, and words importing a gender include every gender;

(d) a reference to a "person" includes any individual, company, limited liability partnership, partnership firm, trust, society, association, government or governmental authority, in each case whether or not having separate legal personality;

(e) the words "include", "including" and "in particular" are illustrative and do not limit the generality of the preceding words, and the ejusdem generis rule shall not apply;

(f) a reference to a statute or statutory provision includes any amendment, modification, consolidation, re-enactment or replacement of it, and any subordinate legislation made under it, in each case for the time being in force;

(g) a reference to "writing" or "written" includes email but excludes instant messaging and social-media messaging;

(h) a reference to a Clause, sub-clause or Schedule is to a clause, sub-clause or schedule of this Agreement;

(i) where a period is expressed to run from or after a specified day or event, that day or the day of that event is excluded, and if the last day of the period is not a Business Day, the period ends on the next Business Day;

(j) a reference to a Party includes its successors and permitted assigns; and

(k) no provision of this Agreement shall be construed against a Party on the ground that the Party was responsible for its preparation.

## 2. Use and Protection of Confidential Information

2.1 The Receiving Party shall:

(a) use the Confidential Information of the Disclosing Party solely for the Purpose and for no other purpose;

(b) keep the Confidential Information strictly confidential and not disclose it to any person except as permitted by this Agreement;

(c) protect the Confidential Information using at least the same degree of care that it uses to protect its own confidential information of a similar nature, and in no event less than a reasonable degree of care, including reasonable security practices and procedures appropriate to the nature of the information;

(d) not copy or reproduce the Confidential Information except to the extent reasonably necessary for the Purpose, and ensure that every copy bears the same confidentiality notices as the original;

(e) not reverse engineer, decompile, disassemble or analyse the composition of any software, prototype, sample or other material forming part of the Confidential Information, except to the extent expressly permitted in writing by the Disclosing Party; and

(f) not use the Confidential Information to solicit the Disclosing Party's customers or employees, to develop competing products, or to file any patent or design application that claims or discloses any Confidential Information.

2.2 The Receiving Party may disclose Confidential Information to those of its Representatives who: (a) need to know it for the Purpose; (b) have been informed of its confidential nature; and (c) are bound by written obligations of confidentiality (or, in the case of professional advisers, by professional duties of confidentiality) no less protective than those in this Agreement. The Receiving Party is responsible for any act or omission of its Representatives which, if done by the Receiving Party, would be a breach of this Agreement.

2.3 The Receiving Party shall notify the Disclosing Party in writing promptly, and in any event within two (2) Business Days, after becoming aware of any actual or suspected unauthorised access to, or use or disclosure of, the Disclosing Party's Confidential Information, and shall take all reasonable steps to mitigate its effects and to prevent any recurrence.

## 3. Artificial Intelligence and Machine-Learning Tools

3.1 The Receiving Party shall not, and shall ensure that its Representatives do not, without the Disclosing Party's prior written consent:

(a) input, upload, paste, transmit or otherwise make available any Confidential Information of the Disclosing Party to any AI Tool that is operated by a third party, or that retains inputs, or that uses inputs to train, fine-tune, evaluate or otherwise improve any model;

(b) use any Confidential Information of the Disclosing Party to train, fine-tune, ground, evaluate, benchmark or otherwise develop or improve any AI Tool or model; or

(c) create embeddings, vector representations or other derived datasets from the Confidential Information for storage in, or retrieval by, any AI Tool.

3.2 The Receiving Party may use an AI Tool to process the Disclosing Party's Confidential Information only where: (a) the AI Tool is deployed within the Receiving Party's controlled environment or is provided under an enterprise agreement that prohibits the provider from retaining inputs beyond the session and from using them for training or model improvement; (b) access is restricted to Representatives permitted under Clause 2.2; and (c) such processing is strictly necessary for the Purpose.

3.3 Any output of an AI Tool that contains, reflects or is derived from the Disclosing Party's Confidential Information is itself Confidential Information of the Disclosing Party.

> **Drafting note:** Clause 3.2 is a pragmatic permission for enterprise AI deployments with no-training and no-retention terms. If either Party wants an absolute prohibition, delete Clause 3.2. If source code, model weights or datasets will be exchanged, consider an outright prohibition and a separate technology evaluation licence.

## 4. Exclusions

4.1 The obligations in Clauses 2 and 3 do not apply to information which the Receiving Party can demonstrate by contemporaneous written records:

(a) is or becomes generally available to the public other than as a result of a breach of this Agreement by the Receiving Party or its Representatives;

(b) was lawfully in the possession of the Receiving Party or its Representatives, free of any obligation of confidence, before it was disclosed by or on behalf of the Disclosing Party;

(c) is lawfully received by the Receiving Party from a third party who, to the Receiving Party's knowledge after reasonable enquiry, is not under any obligation of confidence in respect of it; or

(d) is independently developed by or for the Receiving Party by persons who have had no access to the Disclosing Party's Confidential Information.

4.2 Information is not within any exclusion merely because: (a) individual features or elements of it are in the public domain or in the Receiving Party's possession, unless the particular combination and its principle of operation are also so; or (b) it is embraced by more general information that falls within an exclusion.

4.3 The exclusions in Clause 4.1 do not relieve the Receiving Party of any obligation it has under Applicable Law in respect of Personal Data.

## 5. Compelled Disclosure

5.1 The Receiving Party may disclose Confidential Information to the extent required by Applicable Law, by any court, tribunal or arbitral tribunal of competent jurisdiction, or by any governmental, regulatory or stock exchange authority, provided that the Receiving Party, to the extent legally permitted:

(a) gives the Disclosing Party prompt prior written notice of the requirement and of the information to be disclosed, so that the Disclosing Party may seek a protective order or other remedy;

(b) cooperates reasonably with the Disclosing Party, at the Disclosing Party's cost, in any effort to resist or narrow the disclosure;

(c) discloses only that portion of the Confidential Information which it is legally required to disclose; and

(d) uses reasonable efforts to obtain assurance that confidential treatment will be accorded to the information disclosed.

5.2 Information disclosed under this Clause 5 remains Confidential Information for all other purposes.

> **Drafting note:** If either Party is a listed company or the Purpose involves a listed company's securities, add an acknowledgement that Confidential Information may include unpublished price sensitive information and that the Receiving Party will comply with the SEBI (Prohibition of Insider Trading) Regulations, 2015, including any requirement to maintain a structured digital database of persons receiving such information.

## 6. Personal Data

6.1 Each Party shall disclose Personal Data to the other only to the extent necessary for the Purpose and only where it has a lawful basis to do so under the Digital Personal Data Protection Act, 2023 and the rules made under it.

6.2 Where the Receiving Party receives Personal Data from the Disclosing Party, it shall: (a) process that Personal Data only for the Purpose and in accordance with the Disclosing Party's reasonable written instructions; (b) implement reasonable security safeguards to prevent a personal data breach; (c) notify the Disclosing Party without undue delay, and in any event within twenty-four (24) hours, of becoming aware of any personal data breach affecting that Personal Data, so that the Disclosing Party can meet its own obligations to notify the Data Protection Board of India and affected Data Principals; and (d) erase that Personal Data when it is no longer needed for the Purpose.

> **Drafting note:** The Digital Personal Data Protection Act, 2023 and the DPDP Rules, 2025 commence in phases; check which obligations are in force on the date of signing. If substantial Personal Data will be shared, or one Party will process it on the other's behalf on an ongoing basis, put a separate Data Processing Agreement in place. Cyber security incidents may also need to be reported to CERT-In within six hours under the CERT-In Directions of 28 April 2022.

## 7. Return and Destruction

7.1 Within ten (10) Business Days after the earlier of the Disclosing Party's written request and the termination or expiry of this Agreement, the Receiving Party shall, and shall procure that its Representatives shall, at the Disclosing Party's option, return or securely destroy or permanently erase all Confidential Information of the Disclosing Party in its or their possession or control (including all copies, notes, analyses and AI Tool outputs derived from it), and shall, on request, confirm compliance in writing signed by an authorised officer.

7.2 Clause 7.1 does not require the Receiving Party to destroy or erase: (a) Confidential Information that it is required to retain by Applicable Law or by the bona fide internal compliance policies of a regulated entity; or (b) electronic copies held in automatic back-up or archival systems in the ordinary course that are not readily accessible to personnel other than information technology staff, provided that such copies are not restored or accessed except as required by Applicable Law and are overwritten or deleted in the ordinary course.

7.3 Any Confidential Information retained under Clause 7.2 remains subject to the obligations of confidentiality in this Agreement for so long as it is retained, notwithstanding any expiry of the period in Clause 10.3.

## 8. No Licence, No Warranty and No Obligation to Proceed

8.1 All Confidential Information remains the property of the Disclosing Party. Nothing in this Agreement grants the Receiving Party any licence, ownership or other right in or to any Confidential Information or any patent, copyright, design, trade mark, Trade Secret or other intellectual property of the Disclosing Party, except the limited right to use Confidential Information for the Purpose in accordance with this Agreement.

8.2 Confidential Information is provided "as is". The Disclosing Party makes no representation or warranty, express or implied, as to its accuracy, completeness, or fitness for any purpose, or that it does not infringe the rights of any third party, and shall have no liability arising from the Receiving Party's use of it, except as may be set out in a definitive agreement between the Parties.

8.3 Neither this Agreement nor any disclosure under it obliges either Party to disclose any particular information, to continue discussions, or to enter into any further agreement or transaction. Either Party may end discussions regarding the Purpose at any time for any reason. Unless and until a definitive written agreement regarding the Purpose has been executed, neither Party shall have any legal obligation of any kind in respect of the Purpose other than under this Agreement.

8.4 Nothing in this Agreement prevents either Party from independently developing, acquiring or marketing products or services that compete with those of the other Party, or from entering into discussions with third parties, provided that it does not use or disclose the other Party's Confidential Information in breach of this Agreement.

## 9. Non-Solicitation

9.1 During the term of this Agreement and for a period of twelve (12) months after its termination or expiry, neither Party shall, directly or indirectly, solicit for employment or engagement any employee of the other Party with whom it first had contact, or of whom it first became aware, in connection with the Purpose. This Clause does not restrict general advertisements or recruitment campaigns not specifically targeted at the other Party's employees, or hiring any person who responds to them or who approaches a Party on their own initiative.

> **Drafting note:** Section 27 of the Indian Contract Act, 1872 makes agreements in restraint of a lawful trade, profession or business void, subject to a narrow sale-of-goodwill exception. Indian courts have reached differing views on whether post-term non-solicitation covenants fall within s.27; a narrow, time-limited employee non-solicit such as Clause 9.1 is more likely to be upheld than a customer non-solicit, but enforceability is not assured. Delete this Clause if non-solicitation is not commercially important, or reduce the post-term period.

## 10. Term, Termination and Survival

10.1 This Agreement commences on the Effective Date and, unless terminated earlier under Clause 10.2, continues for a period of {{disclosure_period}} (the **"Disclosure Period"**). Only information disclosed during the Disclosure Period is Confidential Information for the purposes of this Agreement, unless the Parties agree otherwise in writing.

10.2 Either Party may terminate this Agreement at any time by giving not less than thirty (30) days' written notice to the other Party.

10.3 Notwithstanding termination or expiry of this Agreement, the obligations of the Receiving Party in respect of Confidential Information disclosed before termination or expiry shall continue for a period of {{confidentiality_period}} from the date of termination or expiry, except that: (a) in respect of any Trade Secret, those obligations shall continue for so long as the information remains a Trade Secret; and (b) in respect of Personal Data, those obligations shall continue for so long as the Receiving Party or its Representatives hold that Personal Data.

10.4 Clauses 1, 3.3, 4, 5, 6, 7, 8, 9 (for the period stated in it), 10.3, 10.4 and 11 to 15 survive termination or expiry of this Agreement. Termination or expiry is without prejudice to any rights or remedies accrued before it.

## 11. Representations and Warranties

11.1 Each Party represents and warrants to the other, as at the Effective Date, that: (a) it is duly incorporated or constituted and validly existing under the laws of its place of incorporation or constitution; (b) it has full power and authority, and has taken all corporate or other action necessary, to enter into and perform this Agreement; (c) the person signing this Agreement on its behalf is duly authorised to do so; and (d) this Agreement constitutes its legal, valid and binding obligations, enforceable in accordance with its terms.

11.2 Each Party represents and warrants that it has the right to disclose the Confidential Information it discloses under this Agreement, and that such disclosure will not breach any obligation of confidence it owes to a third party or, in respect of Personal Data, any requirement of the Digital Personal Data Protection Act, 2023.

## 12. Remedies

12.1 Each Party acknowledges that the Confidential Information of the other Party is of a special and unique character, that damages alone may not be an adequate remedy for an actual or threatened breach of this Agreement, and that the Disclosing Party may suffer irreparable harm from any such breach.

12.2 Accordingly, and without prejudice to any other right or remedy available to it, the Disclosing Party shall be entitled to: (a) specific performance of the Receiving Party's obligations under this Agreement in accordance with the Specific Relief Act, 1963; (b) a temporary or perpetual injunction restraining any actual or threatened breach of this Agreement, including under sections 37, 38 and 42 of the Specific Relief Act, 1963 and Order XXXIX of the Code of Civil Procedure, 1908; and (c) interim measures from a court under section 9, or from the arbitral tribunal under section 17, of the Arbitration and Conciliation Act, 1996, in each case without first having to exhaust the procedure in Clause 13.2 and without proof of actual damage.

12.3 The Receiving Party shall compensate the Disclosing Party for any loss or damage caused to it by a breach of this Agreement by the Receiving Party or its Representatives, in accordance with section 73 of the Indian Contract Act, 1872. The Receiving Party shall, on request, provide the Disclosing Party with such information as it reasonably requires to assess the scope of any breach.

12.4 Neither Party shall be liable to the other under this Agreement for any indirect or consequential loss that did not arise in the usual course of things from the breach and that the Parties did not know, when they entered into this Agreement, to be likely to result from it. This Clause 12.4 does not limit liability for wilful or fraudulent breach.

> **Drafting note:** Since the Specific Relief (Amendment) Act, 2018 took effect, specific performance is the general rule rather than a discretionary remedy, subject to the exceptions in the Act (including sections 11(2), 14 and 16). Note that section 14 bars specific performance of a contract that is in its nature determinable; because this Agreement may be terminated on notice, the more reliable route to restrain misuse of Confidential Information is a prohibitory injunction enforcing the negative covenants (sections 38 and 42 of the Specific Relief Act, 1963) and interim relief under section 9 of the Arbitration Act, which is why both are preserved expressly [verify the application of section 14 to surviving confidentiality covenants]. This Agreement deliberately contains no liquidated damages sum: under section 74 of the Indian Contract Act, 1872, a stipulated sum is recoverable only as reasonable compensation not exceeding that sum, and the loss from a confidentiality breach is hard to pre-estimate. Never describe any amount as a penalty.

## 13. Governing Law and Dispute Resolution

13.1 **Governing law.** This Agreement, and any dispute, controversy or claim arising out of or in connection with it, its subject matter or formation, or its breach, termination or validity (including non-contractual disputes or claims), shall be governed by and construed in accordance with the laws of the Republic of India.

13.2 **Amicable resolution.** If any dispute, controversy or claim arises out of or in connection with this Agreement (a **"Dispute"**), either Party may give the other a written notice describing the Dispute in reasonable detail (a **"Dispute Notice"**). Authorised representatives of the Parties with authority to settle the Dispute shall meet (in person or by video conference) within ten (10) days after service of the Dispute Notice and shall attempt in good faith to resolve the Dispute.

13.3 **Arbitration.** Any Dispute that is not resolved within thirty (30) days after service of the Dispute Notice (or such longer period as the Parties may agree in writing) shall, to the exclusion of the jurisdiction of any court save as provided in Clause 13.5, be referred to and finally resolved by arbitration in accordance with the Arbitration and Conciliation Act, 1996 (the **"Arbitration Act"**), as follows:

(a) the arbitral tribunal shall consist of a sole arbitrator jointly appointed by the Parties within thirty (30) days after either Party proposes, in writing, the name of one or more persons to act as arbitrator; failing such joint appointment, the arbitrator shall be appointed in accordance with section 11 of the Arbitration Act;

(b) no Party shall have the right to appoint the arbitrator unilaterally, or to require the other Party to select the arbitrator from a panel of names chosen by the first Party alone;

(c) the seat, or legal place, of the arbitration shall be {{arbitration_seat}}, India;

(d) the venue of hearings shall be {{arbitration_venue}}, or such other place as the arbitrator may determine after consulting the Parties, and the arbitrator may conduct any hearing wholly or partly by video conference; a change of venue, or the holding of a hearing at any other place, shall not change the seat;

(e) the language of the arbitration shall be English;

(f) the arbitrator shall give a reasoned award, and may award costs (including reasonable legal fees) in accordance with section 31A of the Arbitration Act; and

(g) the award shall be final and binding on the Parties, who undertake to carry it out without delay.

13.4 **Confidentiality of proceedings.** The Parties shall keep the existence of the arbitration, all submissions, evidence and documents produced in it, and the award confidential, save to the extent disclosure is required to enforce or challenge the award, by Applicable Law, or under section 42A of the Arbitration Act.

13.5 **Courts.** Subject to Clause 13.3, the courts at {{arbitration_seat}} shall have exclusive jurisdiction over any application or proceeding under the Arbitration Act in relation to the arbitration (including applications under sections 9, 11, 27, 34 and 36), and over any matter arising out of or in connection with this Agreement that is held not to be arbitrable. Nothing in this Clause 13 prevents either Party from applying to a court of competent jurisdiction for urgent interim or injunctive relief under section 9 of the Arbitration Act, or to the arbitral tribunal under section 17 of the Arbitration Act, at any time, including before or during the procedure in Clause 13.2.

13.6 **Pre-institution mediation.** If any Dispute falls to be decided by a court (rather than in arbitration) and constitutes a commercial dispute of specified value within the meaning of the Commercial Courts Act, 2015, the Parties shall, unless the suit contemplates urgent interim relief, first exhaust pre-institution mediation in accordance with section 12A of that Act and the rules made under it.

13.7 **Continued performance.** Pending resolution of any Dispute, the Parties shall continue to perform their respective obligations under this Agreement, save to the extent that this Agreement has been terminated.

> **Drafting note:** Clause 13.3 provides for ad hoc arbitration with joint appointment. For institutional arbitration, replace sub-clause (a) with the model clause of a recognised institution, such as the Mumbai Centre for International Arbitration (MCIA), the Delhi International Arbitration Centre (DIAC) or the India International Arbitration Centre (IIAC), and check that institution's current rules and fee schedule; institutional appointment avoids a section 11 application if the parties cannot agree. Do not give either party the unilateral right to appoint the arbitrator, or to nominate a panel from which the other must choose: the Supreme Court held unilateral appointment invalid in Perkins Eastman Architects DPC v. HSCC (India) Ltd (2019), and a Constitution Bench confirmed that unilateral appointment clauses offend the equal-treatment principle in Central Organisation for Railway Electrification v. ECI-SPIC-SMO-MCML (JV) (2024). Always name the seat expressly and keep it distinct from the venue, to avoid the seat-versus-venue disputes that followed BGS SGS Soma JV v. NHPC Ltd (2019). For small claims, the parties may agree to the fast-track procedure under section 29B of the Arbitration Act. The specified value for commercial disputes under the Commercial Courts Act, 2015 (currently understood to be three lakh rupees) should be checked at the time of the dispute [verify]. If a party is outside India, consider an institution and seat acceptable to both and check that the award will be enforceable where the counterparty's assets are located (New York Convention reciprocity).

## 14. Stamp Duty and Execution

14.1 **Stamp duty.** This Agreement shall be stamped, on or before its execution, in accordance with the stamp law in force in the State in which it is first executed and, if it is subsequently received in or brought into any other State in India where a higher duty is payable, in accordance with the stamp law of that State. Stamp duty (including any differential duty) and any penalty payable on this Agreement shall be borne by {{stamp_duty_payer}}. If any duty or penalty is payable because a Party brings this Agreement into another State, or produces it before an authority, other than the State of execution, that Party shall bear the incremental amount.

14.2 **Electronic execution.** This Agreement may be executed by electronic signature, including an Aadhaar-based e-sign or a digital signature certificate, in accordance with sections 3A, 5 and 10A of the Information Technology Act, 2000, and each Party agrees that a contract formed by the exchange of electronic records in that manner is valid and enforceable. Each Party consents to the other retaining the electronic record of this Agreement and of its execution, together with the audit trail generated by the signing platform.

14.3 **Electronic evidence.** Each Party shall, on request, provide such certificate, affidavit or other cooperation as may reasonably be required to prove an electronic record of this Agreement, or of any notice or communication under it, in any proceedings, including a certificate under section 63 of the Bharatiya Sakshya Adhiniyam, 2023.

14.4 **Counterparts.** This Agreement may be executed in any number of counterparts, each of which when executed is an original and all of which together constitute one and the same instrument. Delivery of an executed counterpart by email in portable document format, or by electronic signature platform, is as effective as delivery of a manually executed original.

> **Drafting note:** Stamp duty is a State subject and the rate, article and payment mechanics differ by State. An agreement of this kind is ordinarily stamped under the residuary "agreement or memorandum of an agreement" article of the applicable State schedule (Article 5 of Schedule I to the Indian Stamp Act, 1899 in States that follow it, or the corresponding article of the State's own Stamp Act, for example the Maharashtra Stamp Act, 1958 or the Karnataka Stamp Act, 1957) [verify the article and rate for the State of execution]. Pay duty before or at execution, preferably by e-stamping (for example, through the Stock Holding Corporation of India e-stamping system where the State uses it), and print or attach the e-stamp certificate to the executed copy. An unstamped or under-stamped instrument is not void, but it is inadmissible in evidence and cannot be acted upon until the deficit duty and penalty are paid; a seven-judge bench of the Supreme Court so held in In re: Interplay between Arbitration Agreements under the Arbitration and Conciliation Act, 1996 and the Indian Stamp Act, 1899 (2023), which also held that the arbitration clause remains enforceable and that stamping objections are for the arbitral tribunal. Where a document is executed outside a State or outside India, check the time limit for stamping after it is first received in the State [verify]. The Information Technology Act, 2000 does not apply to the documents listed in its First Schedule (including powers of attorney, trusts, wills and contracts for the sale or conveyance of immovable property); this Agreement is not such a document. Keep the e-signature platform's audit trail: an electronic record must be proved with a certificate under section 63 of the Bharatiya Sakshya Adhiniyam, 2023.

## 15. General

15.1 **Notices.** Any notice, consent or other communication under this Agreement (a **"Notice"**) shall be in writing in English and shall be delivered by hand, sent by registered post acknowledgement due or reputed courier, or sent by email, to the address of the relevant Party set out below (or such other address as a Party may notify to the other in accordance with this Clause). A Notice is deemed received: (a) if delivered by hand, at the time of delivery; (b) if sent by registered post or courier, on the third Business Day after dispatch; and (c) if sent by email, at the time of transmission, unless the sender receives an automated message that the email has not been delivered; provided that a Notice deemed received after 6:00 p.m. or on a day that is not a Business Day is deemed received at 9:00 a.m. on the next Business Day. A Notice of breach or a Dispute Notice sent by email shall also be sent by one of the other methods within two (2) Business Days.

Company: {{company_address}}; email: {{company_email}}; attention: {{company_signatory_name}}, {{company_signatory_title}}.

Counterparty: {{counterparty_address}}; email: {{counterparty_email}}; attention: {{counterparty_signatory_name}}, {{counterparty_signatory_title}}.

15.2 **Assignment.** Neither Party may assign, transfer, novate or otherwise deal with this Agreement or any of its rights or obligations under it without the prior written consent of the other Party, save that either Party may assign this Agreement, on written notice, to a successor to all or substantially all of the business or assets to which this Agreement relates (whether by merger, amalgamation, scheme of arrangement or sale), provided that the successor agrees in writing to be bound by this Agreement. Any purported assignment in breach of this Clause is void.

15.3 **Relationship.** Nothing in this Agreement creates or shall be deemed to create a partnership, joint venture, agency, fiduciary or employment relationship between the Parties, and neither Party has authority to bind the other.

15.4 **Third-party rights.** The Affiliates of a Disclosing Party whose Confidential Information is disclosed under this Agreement may have the benefit of it, and the Disclosing Party may enforce this Agreement on their behalf. Save as aforesaid, nothing in this Agreement confers any right on any person who is not a Party.

15.5 **Precedence over click-through terms.** This Agreement prevails over any confidentiality terms in any data room, portal, electronic access agreement or click-through terms that a Party or its Representatives may accept in order to access Confidential Information in connection with the Purpose, unless those terms expressly state that they override this Agreement and are signed by both Parties.

15.6 **Definitive agreement.** Confidentiality terms in any definitive agreement relating to the Purpose shall prevail over this Agreement in respect of information disclosed after that definitive agreement takes effect.

15.7 **Entire agreement.** This Agreement (together with the documents referred to in it) constitutes the entire agreement between the Parties relating to its subject matter and supersedes all prior drafts, agreements, arrangements and understandings, whether written or oral, relating to that subject matter. Each Party acknowledges that in entering into this Agreement it has not relied on any statement, representation or warranty that is not expressly set out in this Agreement. Nothing in this Clause limits or excludes any liability for fraud.

15.8 **Amendment.** No amendment, variation or modification of this Agreement shall be effective unless it is in writing, expressly refers to this Agreement and is signed by or on behalf of each Party by a duly authorised signatory.

15.9 **Waiver.** No failure or delay by a Party in exercising any right, power or remedy under this Agreement or Applicable Law shall operate as a waiver of it, nor shall any single or partial exercise of any right, power or remedy preclude any other or further exercise of it or of any other right, power or remedy. A waiver is effective only if given in writing and only in the instance and for the purpose for which it is given.

15.10 **Remedies cumulative.** Except as expressly provided in this Agreement, the rights, powers and remedies provided in this Agreement are cumulative and are in addition to, and not exclusive of, any rights, powers or remedies provided by Applicable Law.

15.11 **Severability.** If any provision (or part of a provision) of this Agreement is held by any court, arbitral tribunal or competent authority to be invalid, illegal or unenforceable, that provision (or part) shall, to the extent required, be deemed modified to the minimum extent necessary to make it valid, legal and enforceable, or, if such modification is not possible, deemed deleted; and the validity and enforceability of the remaining provisions shall not be affected. The Parties shall negotiate in good faith to replace any provision so modified or deleted with a valid provision that achieves, as nearly as possible, the original commercial intention.

15.12 **Limitation.** Nothing in this Agreement shall be construed as restricting a Party absolutely from enforcing its rights under or in respect of this Agreement by the usual legal proceedings, or as limiting the time within which it may enforce those rights, in either case in contravention of section 28 of the Indian Contract Act, 1872.

15.13 **Further assurance.** Each Party shall, at the reasonable request of the other, execute such documents and do such acts and things as may reasonably be required to give full effect to this Agreement.

15.14 **Costs.** Except as otherwise provided in this Agreement, each Party shall bear its own costs and expenses (including legal fees) incurred in connection with the negotiation, preparation and execution of this Agreement.

15.15 **Language.** This Agreement is made in the English language. If it is translated into any other language, the English text shall prevail.

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

> **Drafting note:** Witnesses are not legally required for this Agreement but are customary in India; add two witness lines (name, address, signature) under each signatory if desired. Confirm that each signatory is authorised (by board resolution, partner authority or power of attorney) to sign on behalf of the relevant Party.
