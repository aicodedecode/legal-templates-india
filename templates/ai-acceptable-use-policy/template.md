---
id: ai-acceptable-use-policy
title: Generative AI Acceptable Use Policy
category: privacy-web
summary: >-
  Internal policy governing employees' use of generative AI tools in India: approved tools, prohibited inputs, human review, IP, labelling, DPDP and security.
audience: [startup, sme, enterprise]
jurisdiction: IN
governing_laws:
  - Information Technology Act, 2000
  - Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021
  - Digital Personal Data Protection Act, 2023
  - Copyright Act, 1957
  - CERT-In Directions under section 70B(6) of the Information Technology Act, 2000 (28 April 2022)
document_type: policy
parties: 0
stamp_duty: not-applicable
e_signature: permitted
version: 0.1.0
last_updated: 2026-10-16
review_status: draft
related: [employee-handbook, employment-agreement, consultancy-agreement, data-processing-agreement, privacy-policy, terms-of-use, vendor-agreement]
fields:
  - key: company_name
    label: Company's full legal name
    example: Acme Technologies Private Limited
  - key: effective_date
    label: Date the policy takes effect
    example: 1 November 2026
  - key: policy_owner_title
    label: Title of the person who owns this policy
    example: Chief Technology Officer
  - key: ai_committee_name
    label: Name of the cross-functional body that approves AI tools and use cases
    example: AI Governance Committee
  - key: approved_tools_location
    label: Where the AI Tools Register is published internally
    example: the "AI Tools Register" page on the company intranet
  - key: ai_incident_email
    label: Email address for reporting AI incidents
    example: ai-incidents@acme.example
  - key: dpo_email
    label: Email address of the DPO / privacy contact
    example: privacy@acme.example
  - key: training_frequency
    label: How often AI training must be completed
    example: annually, and within 30 days of joining
  - key: policy_review_months
    label: Interval in months between policy reviews
    example: "6"
---

# GENERATIVE AI ACCEPTABLE USE POLICY

**{{company_name}}**

Effective date: {{effective_date}} · Policy owner: {{policy_owner_title}}

> **Drafting note:** This policy governs how personnel use generative AI tools at work. It is not a public-facing document and does not address the company's obligations as a developer or deployer of AI products to customers (which need product-level governance, customer terms and, where the company is an intermediary, compliance with the IT Rules on synthetically generated information). AI law in India is changing quickly: MeitY has issued advisories on AI models and deepfakes (including advisories dated 26 December 2023 and 15 March 2024, the latter superseding one of 1 March 2024), the IT Rules have been amended on synthetically generated information (reported to be in force from 20 February 2026), and the Government has published AI governance guidelines [verify current status of each]. Review this policy at least every {{policy_review_months}} months. Incorporate it into employment and contractor terms by reference so that it is binding (see the employee-handbook and employment-agreement templates).

## 1. Purpose

1.1 Generative AI can improve the quality and speed of our work. It also creates risks: disclosure of confidential and personal data, inaccurate or fabricated output, infringement of third-party intellectual property, uncertain ownership of output, bias, security vulnerabilities, and regulatory non-compliance.

1.2 This policy sets the rules that allow {{company_name}} (the **"Company"**) to use generative AI responsibly, lawfully and securely. It supplements, and does not replace, the Company's information security, confidentiality, data protection, code of conduct and acceptable IT use policies.

## 2. Scope and application

2.1 This policy applies to all employees, directors, interns, trainees, consultants, contractors and other persons who have access to the Company's systems, information or clients (**"Personnel"**), wherever they work and whatever device they use.

2.2 It applies to any use of a Generative AI Tool: (a) in the course of work for the Company; (b) on Company devices, accounts or networks; or (c) involving Company Information, whether through a Company-provided account, a personal account, a browser extension, an API, a plug-in embedded in another application, or an AI feature within an existing approved tool.

## 3. Definitions

3.1 In this policy:

(a) **"AI Tools Register"** means the register of approved Generative AI Tools and approved use cases maintained under Clause 5 and published at {{approved_tools_location}};

(b) **"AI Incident"** means any event described in Clause 14.1;

(c) **"Client Data"** means any information received from or relating to a client, customer or business partner of the Company, including information subject to a non-disclosure agreement;

(d) **"Company Information"** means all information owned, held or controlled by the Company, including Confidential Information, Client Data, Personal Data and Source Code;

(e) **"Confidential Information"** means non-public information relating to the business, finances, strategy, products, technology, employees or affairs of the Company or any third party, as further defined in the Company's confidentiality policy and Personnel's terms of engagement;

(f) **"Enterprise Tool"** means a Generative AI Tool provided under a written contract with the Company that, at a minimum, prohibits the vendor from using inputs and outputs to train or improve its models, limits retention of inputs and outputs, provides appropriate security commitments, and (where Personal Data is processed) includes data-processing terms compliant with the DPDP Act;

(g) **"Generative AI Tool"** means any software, service or model that generates text, code, images, audio, video or other content in response to prompts or other inputs, including chatbots, coding assistants, image and video generators, voice-cloning tools, meeting-transcription and summarisation tools, and AI agents capable of taking actions;

(h) **"Input"** means any prompt, file, data, image, audio or other material provided to a Generative AI Tool;

(i) **"Output"** means any content generated by a Generative AI Tool;

(j) **"Personal Data"** has the meaning given in the Digital Personal Data Protection Act, 2023 (the **"DPDP Act"**): any data about an individual who is identifiable by or in relation to such data;

(k) **"Public Tool"** means any Generative AI Tool that is not an Enterprise Tool, including free or consumer versions of tools that also have enterprise versions;

(l) **"Source Code"** means the Company's (or its clients') human-readable or machine-readable computer programs, configurations, scripts, secrets, keys and credentials; and

(m) **"Synthetically Generated Information"** means information that is artificially or algorithmically created, generated, modified or altered using a computer resource in a manner that reasonably appears to be authentic or true, as that expression is defined in the IT Rules from time to time.

## 4. Core principles

4.1 Personnel using Generative AI Tools must observe the following principles:

(a) **Accountability** — you remain fully responsible for any work product you create with the help of AI, as if you had created it entirely yourself;

(b) **Confidentiality** — you must protect Company Information and never place it in a tool that is not approved for it;

(c) **Accuracy** — you must verify Output before relying on it;

(d) **Lawfulness** — you must not use AI to do anything that would be unlawful, unethical or contrary to Company policy if done without AI;

(e) **Fairness** — you must guard against biased or discriminatory Output;

(f) **Transparency** — you must disclose the use of AI where this policy, a client contract or the law requires; and

(g) **Security** — you must treat Generative AI Tools as an attack surface.

## 5. Approved tools and use cases

5.1 **AI Tools Register.** The {{ai_committee_name}} maintains the AI Tools Register, which lists, for each approved Generative AI Tool: (a) the approved version or plan (for example, enterprise licence); (b) the classification of Company Information that may be used as Input (see Clause 6); (c) approved and prohibited use cases; (d) any configuration requirements (for example, history disabled, data retention set to minimum); (e) the business owner; and (f) the date of the last review.

5.2 **Use only approved tools.** Personnel may use only Generative AI Tools listed in the AI Tools Register, in the manner and for the use cases there specified. Use of any other Generative AI Tool for Company work — including through a personal account — is prohibited.

5.3 **Requesting a new tool or use case.** To request approval of a new tool or use case, submit a request to the {{ai_committee_name}} describing the tool, the vendor, the intended use, the categories of Company Information involved, and the expected benefit. New tools are approved only after the procurement review in Clause 13.

5.4 **AI features in existing software.** AI features newly enabled in already-approved software (for example, an AI assistant added to a productivity suite, CRM or design tool) are treated as new tools and must not be switched on until approved.

5.5 **AI agents.** Generative AI Tools that can take actions autonomously (for example, sending emails, executing code, making purchases, or modifying records) may be used only where the AI Tools Register expressly permits it and subject to defined authority limits, spending caps, human approval for irreversible actions, and audit logging. Personnel are accountable for actions taken by an agent they deploy.

> **Drafting note:** Under section 11 of the Information Technology Act, 2000, an electronic record is attributed to the originator if it was sent by an information system programmed by or on behalf of the originator to operate automatically, so actions and contracts made by AI agents may bind the Company. Keep agent permissions narrow and logged.

## 6. Information classification and prohibited inputs

6.1 The following table states which categories of Company Information may be used as Input:

| Information category | Public Tool | Enterprise Tool |
|---|---|---|
| Public information (published by the Company or freely available) | Permitted | Permitted |
| Internal, non-confidential information | Not permitted | Permitted |
| Confidential Information | Not permitted | Permitted only for use cases approved in the AI Tools Register |
| Client Data | Not permitted | Permitted only where the client contract allows it and the use case is approved |
| Personal Data | Not permitted | Permitted only for approved use cases, under a DPDP-compliant data-processing agreement and Clause 9 |
| Source Code, secrets, keys, credentials | Not permitted | Source Code permitted only in approved coding assistants; secrets, keys and credentials never permitted |
| Information subject to legal privilege, or regulated information (for example, unpublished price-sensitive information, payment data, health records) | Not permitted | Not permitted unless specifically approved by Legal |

6.2 **Absolute prohibitions.** Regardless of the tool, Personnel must never input: (a) passwords, API keys, private keys, tokens or other credentials; (b) Aadhaar numbers, full payment-card details, bank account credentials or biometric data; (c) unpublished price-sensitive information within the meaning of the SEBI (Prohibition of Insider Trading) Regulations, 2015 (if the Company or a client is listed); (d) information that the Company is prohibited by contract or law from disclosing; or (e) any material that is unlawful to possess or share.

6.3 **Anonymisation is not a loophole.** Removing names does not necessarily anonymise information. If a person could be identified by combining the remaining data with other information, it is still Personal Data. If in doubt, treat information as being in the higher-risk category.

6.4 **Client restrictions.** Many client contracts restrict or prohibit the use of AI tools on client work or with client data, or require disclosure. Before using AI on client work, check the client contract and any client instructions with the engagement lead. Client restrictions override this policy where they are stricter.

## 7. Human review and responsible use of Output

7.1 **Verify before use.** Output may be inaccurate, incomplete, out of date or fabricated (including invented facts, citations, case law, statistics, references or code libraries). Personnel must review all Output for accuracy, completeness and suitability before using it, with a degree of care proportionate to the impact of the use.

7.2 **Mandatory human review.** Output must be reviewed and approved by a suitably qualified person before it is: (a) sent to a client, customer, regulator, court or other external party; (b) published; (c) used to make or support a decision affecting an individual (including decisions on hiring, performance, promotion, termination, credit, pricing or access to services); (d) deployed into production code; or (e) relied on for legal, financial, tax, medical, safety or compliance purposes.

7.3 **No sole reliance for decisions about people.** Generative AI Tools must not be the sole basis for any decision that has a legal or similarly significant effect on an individual. A human decision-maker must consider the relevant facts independently and must be able to explain the decision.

7.4 **Citations and sources.** Every legal, regulatory or factual citation in Output must be checked against the primary source before use. Unverified citations must not be included in any external communication or filing.

7.5 **Code.** AI-generated code must go through the Company's normal code-review, testing and security-scanning processes, and must be checked for licence obligations (Clause 8.4) and for hard-coded secrets or insecure patterns.

## 8. Intellectual property and copyright

8.1 **Ownership of work product.** As between Personnel and the Company, all work product created by Personnel in the course of their engagement with the help of Generative AI Tools, and all rights in it, belong to the Company in accordance with Personnel's terms of employment or engagement.

8.2 **Uncertain protection.** The extent to which AI-generated Output is protected by copyright in India is unsettled. Section 2(d)(vi) of the Copyright Act, 1957 treats the author of a computer-generated work as the person who causes the work to be created, but the originality and human-authorship requirements may not be met where human contribution is minimal. Where protection matters (for example, brand assets, software products, published content), Personnel must contribute and record meaningful human creative input and keep records of prompts, drafts and edits.

8.3 **Third-party rights.** Output may reproduce or closely resemble third-party copyright works, trade marks, designs or personal likenesses. Personnel must not: (a) prompt a tool to reproduce or imitate a specific copyrighted work, the style of a named living artist or author for commercial use, or a third party's trade mark; (b) use Output that appears to reproduce third-party material without clearance; or (c) input third-party copyright material (for example, licensed reports, paywalled content or client-owned materials) unless the Company has the right to do so.

8.4 **Open-source licences.** AI coding assistants may produce code derived from open-source software subject to licence obligations (including copyleft licences). Use code-scanning tools approved by Engineering and enable any duplication-detection filters offered by the tool.

8.5 **Vendor indemnities.** Where available, the Company will prefer Enterprise Tools whose vendors provide indemnities against third-party intellectual-property claims arising from Output, and Personnel must comply with any conditions of those indemnities (for example, not disabling content filters).

> **Drafting note:** India has no specific text-and-data-mining exception, and litigation concerning the use of copyright works to train AI models is pending before the Delhi High Court (including ANI v OpenAI) [verify status and any ruling]. Courts have also protected personality rights against AI-generated imitations of well-known persons. Keep Clause 8 under review as the law develops.

## 9. Data protection

9.1 **DPDP compliance.** Any Processing of Personal Data using a Generative AI Tool is Processing by the Company as a Data Fiduciary under the DPDP Act, and must: (a) have a lawful ground (consent or a legitimate use under section 7); (b) be for a purpose covered by the notice given to the Data Principal; (c) be limited to the Personal Data necessary for that purpose; and (d) take place only in an Enterprise Tool whose vendor is engaged under a valid contract as a Data Processor, as required by section 8(2) of the DPDP Act.

9.2 **New purposes.** Using Personal Data collected for one purpose (for example, customer support) for a new purpose through AI (for example, profiling customers or training a model) requires prior review by the privacy team at {{dpo_email}}, because it may require a fresh notice and consent.

9.3 **Children's data.** Personal Data of children (individuals under 18) must not be input into any Generative AI Tool without the specific approval of the privacy team. The Company does not use AI to track, behaviourally monitor or target advertising at children.

9.4 **Data Principal rights.** Personnel must ensure that Personal Data processed with AI tools can be located, corrected and erased so that the Company can respond to requests under sections 11 to 14 of the DPDP Act. Avoid workflows that embed Personal Data in places from which it cannot later be removed.

9.5 **Cross-border transfer.** Inputs to many Generative AI Tools are processed outside India. The AI Tools Register records where each tool processes data. Personal Data may be used only with tools whose processing locations are permitted under section 16 of the DPDP Act and any applicable sectoral rules.

9.6 **Meeting tools.** AI transcription and note-taking tools may be used in a meeting only if all participants are informed in advance and no participant objects; they must not be used in disciplinary, grievance, Internal Committee (POSH), medical or legally privileged meetings.

## 10. Labelling and disclosure of AI-generated content

10.1 **External content.** Where the Company publishes or distributes Synthetically Generated Information externally — in particular realistic images, audio or video of people, places or events — it must be clearly labelled as AI-generated, and any metadata or identifiers applied by the generating tool must not be removed.

10.2 **Deepfakes.** Personnel must never create or share Synthetically Generated Information that depicts a real person (including colleagues, clients or public figures) saying or doing something they did not say or do, or that imitates a real person's voice or likeness, without that person's written consent and the approval of Legal. Creating or sharing deceptive, defamatory, obscene or impersonating content may also be an offence under the Information Technology Act, 2000 and the Bharatiya Nyaya Sanhita, 2023.

10.3 **Client and regulator disclosure.** Personnel must disclose the use of Generative AI Tools to clients, courts, regulators or other recipients where required by contract, by court or regulatory directions, or by professional rules, and where the recipient would reasonably expect to be told.

10.4 **Internal transparency.** Where AI materially contributed to a document that others will rely on, note this in the document's version history or cover note.

> **Drafting note:** The MeitY advisories of December 2023 and March 2024 asked intermediaries and platforms to label AI-generated content, to inform users of the possible unreliability of output, and to prevent bias and threats to electoral integrity; the later amendments to the IT Rules on synthetically generated information impose labelling, metadata and user-declaration duties on intermediaries [verify current text and scope]. These primarily bind intermediaries, not every company using AI internally, but Clause 10 adopts them as good practice. If the Company itself offers AI-generation features to users, the terms-of-use template (Clause 5A) and product-level compliance are also needed.

## 11. Bias, discrimination and fairness

11.1 Output may reflect biases in training data. Personnel must review Output for content that is discriminatory, stereotyping or offensive on grounds including religion, race, caste, sex, gender identity, sexual orientation, place of birth, disability, age or language.

11.2 Generative AI Tools must not be used to screen, rank or evaluate job applicants or employees, or to make decisions about customers' eligibility, pricing or access to services, unless the use case has been approved by the {{ai_committee_name}} after a documented assessment of bias, accuracy and explainability, and is subject to human oversight under Clause 7.3.

11.3 Use of AI in recruitment and employment decisions must comply with applicable employment laws, including the Rights of Persons with Disabilities Act, 2016 and the Transgender Persons (Protection of Rights) Act, 2019, and the Company's equal-opportunity and POSH policies.

## 12. Security

12.1 Personnel must: (a) access Enterprise Tools only through Company-managed single sign-on; (b) not install browser extensions, plug-ins or desktop applications with AI capabilities unless approved; (c) not connect AI tools to Company email, file storage, code repositories or other systems except through approved integrations; and (d) report suspicious behaviour of AI tools immediately.

12.2 Personnel must be alert to AI-specific threats, including: (a) **prompt injection** — hidden instructions in documents, web pages or emails processed by an AI tool that cause it to disclose data or take unintended actions; (b) **data exfiltration** through AI integrations; (c) **AI-enabled social engineering**, such as voice-cloned calls or deepfake video requesting payments or credentials; and (d) **malicious or hallucinated code dependencies**.

12.3 Payment requests, changes to bank details, and requests for credentials received by voice or video must be verified through an independent channel, however authentic they appear.

## 13. Procurement of AI tools and vendors

13.1 No Generative AI Tool may be procured, trialled with Company Information, or added to the AI Tools Register until the following have been reviewed and approved by IT Security, Legal and the privacy team:

(a) the vendor's terms on use of Inputs and Output for training, data retention and deletion, and confidentiality;

(b) ownership of Output, and any licence restrictions on its use;

(c) intellectual-property indemnity and its conditions;

(d) security certifications (for example, ISO/IEC 27001, SOC 2 Type II), encryption, access control and audit logging;

(e) processing locations and sub-processors, and compliance with section 16 of the DPDP Act and sectoral localisation rules;

(f) data-processing terms meeting section 8(2) of the DPDP Act, including breach notification that enables the Company to meet its DPDP and CERT-In obligations;

(g) model change notification, accuracy and safety documentation, and content filtering; and

(h) liability caps, including a super-cap for data-protection and intellectual-property claims where obtainable.

13.2 The data-processing-agreement template may be used as a basis for (f).

## 14. AI incidents

14.1 An **AI Incident** includes: (a) any Input of information in breach of Clause 6; (b) Output that has been used externally and is found to be materially inaccurate, infringing, discriminatory or harmful; (c) any suspected prompt-injection, data leakage or unauthorised action by an AI tool or agent; (d) receipt of a deepfake or AI-enabled social-engineering attempt; and (e) any complaint from a client, user or third party about the Company's use of AI.

14.2 Personnel must report an AI Incident immediately, and in any event within [two] hours of becoming aware of it, to {{ai_incident_email}}. Do not attempt to investigate on your own or delete evidence.

14.3 AI Incidents involving Personal Data will be handled under the Company's personal data breach response plan, which provides for intimation to the Data Protection Board of India and affected Data Principals under the DPDP Act and the DPDP Rules. AI Incidents that are cyber security incidents will be reported to CERT-In within six hours of being noticed where required by the CERT-In Directions. Prompt internal reporting is essential to meet these deadlines.

14.4 Personnel who report in good faith will not suffer retaliation, including where they report their own inadvertent mistake promptly.

## 15. Training and awareness

15.1 All Personnel must complete the Company's AI training {{training_frequency}}. Personnel may not be granted access to Enterprise Tools until they have completed the training.

15.2 Additional role-specific training is required for engineers using coding assistants, marketing and communications staff generating external content, and managers using AI in people decisions.

## 16. Monitoring and records

16.1 To the extent permitted by applicable law and the Company's employee privacy notice, the Company may monitor and log the use of Enterprise Tools and Company networks to enforce this policy, protect Company Information and investigate incidents. Monitoring is proportionate and is carried out for these specified purposes only.

16.2 The {{ai_committee_name}} maintains records of approved tools, approved use cases, risk assessments and AI Incidents.

## 17. Roles and responsibilities

17.1 **{{policy_owner_title}}** — owns this policy and is accountable for its implementation.

17.2 **{{ai_committee_name}}** — comprising representatives of Technology, Information Security, Legal, Privacy and Human Resources; maintains the AI Tools Register, approves tools and use cases, and reviews AI Incidents.

17.3 **Managers** — ensure their teams understand and follow this policy and that use cases in their area are approved.

17.4 **All Personnel** — comply with this policy and report incidents.

## 18. Enforcement

18.1 Breach of this policy may result in disciplinary action in accordance with the Company's standing orders, code of conduct and applicable law, up to and including termination of employment or engagement, and may also give rise to civil or criminal liability.

18.2 In deciding the appropriate response, the Company will consider the nature and sensitivity of the information involved, whether the breach was deliberate or inadvertent, whether it was promptly reported, and any harm caused.

18.3 Contractors and consultants who breach this policy may have their engagement terminated in accordance with their contract.

## 19. Exceptions

19.1 Any exception to this policy must be approved in writing in advance by the {{ai_committee_name}}, must be time-limited, and must be recorded with the reasons and compensating controls.

## 20. Review

20.1 This policy will be reviewed at least every {{policy_review_months}} months, and sooner if there is a material change in law, technology or the Company's business. Personnel will be notified of material changes.

## Acknowledgement

I confirm that I have read, understood and agree to comply with the Generative AI Acceptable Use Policy of {{company_name}}.

Name: ____________________

Employee / contractor ID: ____________________

Signature (physical or electronic): ____________________

Date: ____________________
