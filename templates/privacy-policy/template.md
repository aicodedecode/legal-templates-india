---
id: privacy-policy
title: Privacy Notice (DPDP Act, 2023)
category: privacy-web
summary: >-
  Standalone, itemised privacy notice for an Indian website or app acting as a Data Fiduciary under the DPDP Act, 2023 and DPDP Rules, 2025.
audience: [startup, sme, enterprise]
jurisdiction: IN
governing_laws:
  - Digital Personal Data Protection Act, 2023
  - Digital Personal Data Protection Rules, 2025
  - Information Technology Act, 2000
  - Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021
  - CERT-In Directions under section 70B(6) of the Information Technology Act, 2000 (28 April 2022)
document_type: notice
parties: 0
stamp_duty: not-applicable
e_signature: permitted
version: 0.1.0
last_updated: 2026-10-16
review_status: draft
related: [cookie-notice, terms-of-use, data-processing-agreement]
fields:
  - key: company_name
    type: text
    label: Company's full legal name
    example: Acme Technologies Private Limited
  - key: brand_name
    type: text
    label: Brand, website or app name used publicly
    example: Acme
  - key: company_cin
    type: text
    label: Corporate Identity Number (CIN)
    example: U72900KA2024PTC123456
  - key: company_address
    type: textarea
    label: Registered office address
    example: 4th Floor, 12 MG Road, Bengaluru, Karnataka 560001
  - key: website_url
    type: url
    label: Website address(es) covered by this notice
    example: www.acme.example
  - key: app_name
    type: text
    label: Name of the mobile application(s) covered
    example: Acme for Android and iOS
  - key: effective_date
    type: date
    label: Date this version of the notice takes effect
    example: 1 November 2026
  - key: notice_version
    type: text
    label: Version number of this notice
    example: 2.0
  - key: privacy_centre_location
    type: text
    label: Where in the product users can manage consents and exercise rights
    example: Settings > Privacy Centre in the app, or the Privacy Centre link in the website footer
  - key: consent_manager_name
    type: text
    label: Name of any registered Consent Manager the company integrates with (or "not applicable")
    example: not applicable
  - key: payment_aggregator_name
    type: text
    label: Payment aggregator or gateway used
    example: a payment aggregator authorised by the Reserve Bank of India
  - key: transfer_countries
    type: textarea
    label: Countries or regions to which personal data may be transferred
    example: Singapore, the United States of America and the European Union
  - key: account_retention_period
    type: text
    label: How long account data is kept after account closure or inactivity
    example: 3 years after your last interaction with us
  - key: transaction_retention_period
    type: text
    label: How long transaction and invoice records are kept
    example: 8 years from the end of the financial year to which they relate
  - key: support_retention_period
    type: text
    label: How long support tickets and call recordings are kept
    example: 2 years from closure of the ticket
  - key: marketing_retention_period
    type: text
    label: How long marketing preferences and data are kept
    example: until you withdraw consent, and in any case no longer than 2 years after your last interaction
  - key: log_retention_period
    type: text
    label: How long security and traffic logs are kept
    example: at least 1 year (and 180 days within India for logs covered by the CERT-In Directions)
  - key: dpo_name
    type: text
    label: Name or designation of the Data Protection Officer / person who can answer questions
    example: Data Protection Officer
  - key: dpo_email
    type: email
    label: Email address of the DPO / contact person
    example: privacy@acme.example
  - key: dpo_phone
    type: text
    label: Telephone number of the DPO / contact person
    example: +91 80 4000 0000
  - key: grievance_officer_name
    type: text
    label: Name of the Grievance Officer
    example: Priya Sharma (illustrative)
  - key: grievance_officer_email
    type: email
    label: Email address of the Grievance Officer
    example: grievance@acme.example
  - key: grievance_officer_address
    type: textarea
    label: Postal address of the Grievance Officer
    example: 4th Floor, 12 MG Road, Bengaluru, Karnataka 560001
  - key: grievance_response_days
    type: number
    label: Number of days within which the company commits to resolve privacy grievances
    example: 30
  - key: rights_response_days
    type: number
    label: Number of days within which the company commits to respond to rights requests
    example: 30
  - key: company_email
    type: email
    label: General contact email
    example: hello@acme.example
---

# PRIVACY NOTICE

**{{brand_name}} — Privacy Notice**

Version {{notice_version}} · Effective from {{effective_date}}

> **Drafting note:** The DPDP Act, 2023 and the DPDP Rules, 2025 are being brought into force in phases. As notified in November 2025, provisions on the Data Protection Board took effect immediately, Consent Manager registration was deferred by about 12 months, and most substantive Data Fiduciary obligations (notice, security safeguards, breach intimation, retention, children's data, Data Principal rights) were deferred by about 18 months. Check the current commencement notifications on the Ministry of Electronics and Information Technology (MeitY) website and the e-Gazette before publishing, and decide whether to adopt this notice early (recommended) or from the commencement date. Until the substantive DPDP provisions commence, section 43A of the Information Technology Act, 2000 and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 continue to apply (section 44(2) of the DPDP Act omits section 43A on commencement) [verify current status]; during that interim period, also check that the notice meets rule 4 (privacy policy) and rule 5 (written consent for sensitive personal data or information, and the right to withdraw) of the 2011 Rules.

> **Drafting note:** Rule 3 of the DPDP Rules requires the notice to be understandable independently of any other information, to give an itemised description of the personal data and the specified purposes, and to give a communication link to withdraw consent, exercise rights and complain to the Board. Do not bury this notice inside the Terms of Use; publish it as a standalone page and show a short-form version (with a link to this full notice) at each point of collection. Section 5(3) of the DPDP Act lets the Data Principal access the notice in English or any language in the Eighth Schedule to the Constitution, so plan to offer translations.

## 1. Who we are and what this notice covers

1.1 This Privacy Notice explains how **{{company_name}}**, a company incorporated in India with CIN {{company_cin}} and registered office at {{company_address}} (**"{{brand_name}}"**, **"we"**, **"us"** or **"our"**), processes your personal data when you use our website at {{website_url}}, our mobile application {{app_name}}, and any related products, services, features and communications that link to this notice (together, the **"Services"**).

1.2 For the purposes of the Digital Personal Data Protection Act, 2023 (the **"DPDP Act"**) and the Digital Personal Data Protection Rules, 2025 (the **"DPDP Rules"**), we are the **"Data Fiduciary"** — that is, we decide why and how your personal data is processed. You are the **"Data Principal"** — the individual to whom the personal data relates. Where you are a child or a person with a disability who has a lawful guardian, "you" includes your parent or lawful guardian acting on your behalf.

1.3 In this notice, **"personal data"** means any data about an individual who is identifiable by or in relation to that data, and **"processing"** means any wholly or partly automated operation performed on digital personal data, from collection and storage to sharing and erasure. Other capitalised terms have the meanings given to them in the DPDP Act.

1.4 This notice applies to digital personal data, and to personal data collected in non-digital form that we later digitise. It does not cover the practices of third-party websites, apps or services that may be linked from our Services; their own privacy notices apply.

1.5 We have written this notice in plain language. If anything is unclear, please contact our Data Protection Officer using the details in Section 15. You may request this notice in English or in any language listed in the Eighth Schedule to the Constitution of India by writing to {{dpo_email}}.

## 2. Summary of key points

2.1 We collect only the personal data that we need for the specific purposes listed in Section 3, and we tell you, item by item, what we collect and why.

2.2 Where we rely on your consent, you can withdraw it at any time, as easily as you gave it, from {{privacy_centre_location}}.

2.3 We do not sell your personal data.

2.4 We do not knowingly allow children (individuals under 18) to use the Services without verifiable consent from a parent or lawful guardian, and we do not track, behaviourally monitor or show targeted advertising to children.

2.5 You have rights to access information about your personal data, to correct, complete, update and erase it, to have your grievances redressed, and to nominate another person to exercise your rights in the event of your death or incapacity.

2.6 You may complain to the Data Protection Board of India if we do not resolve your grievance.

## 3. Personal data we process and why (itemised notice)

3.1 The table below sets out, for each category of personal data, the specific purposes for which we process it, the lawful ground on which we rely, and the goods or services that the processing enables. We will not process your personal data for a purpose that is not listed here without first giving you a fresh notice and, where required, seeking your consent.

> **Drafting note:** This table is the heart of the notice. Delete rows that do not apply and add rows for every other category of personal data you collect (for example, health data, location history, contacts, biometric data, KYC documents, financial account details). Each row must name a specific purpose — "to improve our services" on its own is too vague. Make sure every purpose that relies on consent has a separate, unticked toggle in your consent interface; bundled consent is not "specific" or "unconditional" under section 6(1).

| # | Personal data (itemised) | Specified purpose(s) | Lawful ground | What it enables |
|---|---|---|---|---|
| A | Account data: full name, mobile number, email address, password (stored in hashed form), profile photograph (optional), preferred language | Creating and securing your account; verifying your mobile number or email by one-time password; authenticating you when you sign in; communicating with you about your account | Consent | Registration and access to the Services |
| B | Age and age-verification data: date of birth or age declaration; for children, the parent's or guardian's identity and age-verification details | Confirming whether you are an adult; obtaining verifiable consent from a parent or lawful guardian where you are a child | Consent; legal obligation under section 9 of the DPDP Act | Lawful onboarding of children and adults |
| C | Transaction data: products or plans purchased, order history, invoices, billing name and address, GSTIN (if provided), payment status and transaction reference numbers | Processing your orders and subscriptions; issuing invoices; handling refunds and chargebacks; meeting tax and accounting obligations | Consent (to fulfil the transaction you request); statutory records are retained as required by law (s.8(7) and Rule 8 of the DPDP Rules) | Purchases, subscriptions and refunds |
| D | Payment data: card or UPI details are entered directly with {{payment_aggregator_name}}; we receive only a token or masked reference and payment status | Collecting payments you authorise; preventing payment fraud | Consent | Paid features |
| E | Communications data: messages, emails, chat transcripts and call recordings when you contact us; feedback and survey responses | Responding to your queries and complaints; quality assurance and training of our support staff; resolving disputes | Personal data you voluntarily provide for this purpose (s.7(a)); consent for call recording | Customer support |
| F | Device and technical data: IP address, device identifiers, device model, operating system, browser type, app version, crash logs, time-zone and language settings | Delivering the Services to your device; maintaining security; detecting and preventing fraud, abuse and unauthorised access; diagnosing errors; maintaining logs required by law | Consent; logs are retained as required by law (s.8(7), Rule 8 and the CERT-In Directions) | Secure and stable operation of the Services |
| G | Usage data: pages and screens viewed, features used, clicks, search queries within the Services, session duration | Understanding how the Services are used in aggregate so that we can fix problems and prioritise improvements | Consent (through the analytics setting in our cookie and consent tool) | Product analytics |
| H | Location data: approximate location derived from IP address; precise location only if you enable it in your device settings | Showing location-relevant content or availability; precise location for [describe feature] | Consent (precise location requires a separate device permission) | Location-based features |
| I | Marketing data: your marketing preferences and your interactions with our emails, SMS or notifications | Sending you newsletters, offers and product updates | Consent (separate and optional) | Marketing communications |
| J | Cookies and similar technologies: see our Cookie Notice | As described in the Cookie Notice | Consent (except strictly necessary cookies) | As described in the Cookie Notice |
| K | Content you upload or create: [describe, e.g. documents, images, posts, reviews] | Storing and displaying your content as you direct; moderating content to comply with law and our Terms of Use | Consent; disclosure to the State where required by law (s.7(d)) or by a court order (s.7(e)) | Core features of the Services |
| L | Identity and KYC data (only if applicable): [e.g. PAN, officially valid document details, as required by law] | Complying with know-your-customer, anti-money-laundering or other legal requirements applicable to us | Consent; disclosure to the State where required by law (s.7(d)) | Regulated features |

3.2 **Personal data we receive from others.** We may receive personal data about you from: (a) a person who refers you to us or invites you to the Services (your name and contact details); (b) your employer or organisation, if it gives you access to the Services under its account (your name, work email and role); (c) a sign-in provider you choose to use (your name, email address and profile photograph, as authorised by you on that provider's screen); and (d) payment and fraud-prevention partners (payment status and fraud signals). We process this data only for the purposes set out in Section 3.1 for the corresponding category.

3.3 **No sensitive inferences.** We do not use your personal data to infer your religion, caste, political opinions, sexual orientation, health or financial status, except where you choose to provide that information for a feature that needs it and we have told you so in a specific notice.

3.4 **Accuracy.** Where we use your personal data to make a decision that affects you, or disclose it to another Data Fiduciary, we will make reasonable efforts to ensure that it is complete, accurate and consistent. Please help us by keeping your account details up to date.

## 4. Consent and how to withdraw it

4.1 **How we seek consent.** Where we rely on consent, we will ask for it through a clear affirmative action — for example, by your ticking an unticked box or tapping a button next to a specific purpose — after showing you a notice that tells you what personal data we will process and why. Your consent will be free, specific, informed, unconditional and unambiguous, and limited to the personal data necessary for the purpose you consented to. We will not make access to a service conditional on your consenting to processing that is not necessary for that service.

4.2 **Record of consent.** We keep a record of the notice you were shown, the consents you gave or refused, and the date and time, so that we can demonstrate that consent was validly obtained.

4.3 **Withdrawing consent.** You may withdraw any consent at any time, and doing so will be as easy as giving it. You can withdraw consent:

(a) from {{privacy_centre_location}}, where each consent has its own toggle;

(b) by using the "unsubscribe" link in any marketing email or replying "STOP" to marketing SMS, for marketing consent;

(c) through the cookie settings link on our website, for cookie consent; or

(d) by writing to {{dpo_email}}.

4.4 **Effect of withdrawal.** When you withdraw consent, we will, within a reasonable time, stop processing the relevant personal data for that purpose and cause our Data Processors to do the same, unless processing without your consent is required or authorised under the DPDP Act or any other law. Withdrawal does not affect the lawfulness of processing carried out before withdrawal. If you withdraw consent for processing that is necessary for a feature, that feature may stop working, and if you withdraw consent that is necessary for your account, we may need to close your account; we will tell you about these consequences before you confirm the withdrawal.

4.5 **Consent Managers.** The DPDP Act allows you to give, manage, review and withdraw consent through a **"Consent Manager"** — a person registered with the Data Protection Board of India that provides an accessible, transparent and interoperable platform for managing consent. [OPTION A: We integrate with {{consent_manager_name}}. If you use that Consent Manager, you may give, review and withdraw your consent to us through it, and we will act on instructions received through it as if you had given them to us directly. / OPTION B: We do not currently integrate with a registered Consent Manager. If we do so in future, we will update this notice and you will be able to manage your consents through that platform as well as directly with us.]

> **Drafting note:** Consent Manager registration under Rule 4 of the DPDP Rules commenced later than the Board provisions. Before choosing Option A, confirm that the Consent Manager is registered with the Board and that your integration meets the Rules' technical requirements. If you choose Option B, delete the `consent_manager_name` field from the front matter or keep it and fill it with "not applicable".

## 5. Processing without consent: legitimate uses

5.1 Section 7 of the DPDP Act lists certain "legitimate uses" for which we may process your personal data without seeking your consent. We rely on the following legitimate uses, and only to the extent described:

(a) **Personal data you voluntarily provide for a specified purpose** (s.7(a)) — for example, when you write to our support team with your contact details and a question, we will use those details to reply to you, unless you tell us that you do not consent to that use;

(b) **Disclosure to the State required by law** (s.7(d)) — to fulfil an obligation under any law in force in India to disclose information to the State or any of its instrumentalities, such as responding to lawful requests from law-enforcement agencies or reporting obligations under the Information Technology Act, 2000 and its rules;

(c) **Compliance with a judgment, decree or order** (s.7(e)) — issued under any law in force in India, or a judgment or order relating to claims of a contractual or civil nature under any law in force outside India;

(d) **Medical emergencies** (s.7(f)) — to respond to a medical emergency involving a threat to your life or immediate threat to your health or that of another individual;

(e) **Disasters and breakdowns of public order** (s.7(h)) — to take measures to ensure safety of, or provide assistance or services to, any individual during any disaster or breakdown of public order; and

(f) **Employment purposes** (s.7(i)) — where you are our employee, for the purposes of employment or to safeguard us from loss or liability, as described in our separate employee privacy notice.

> **Drafting note:** Section 7 is a closed list; there is no GDPR-style "legitimate interests" ground, and s.7(d) covers only legal duties to disclose information to the State, not general legal obligations (statutory retention sits under s.8(7) and Rule 8). Check the lettering against the official text, delete the legitimate uses you do not rely on, and keep (f) only if employees can see this notice (better practice is a separate employee notice — see the employee-handbook template).

5.2 **Retention required by law.** Separately from section 7, the DPDP Act (s.8(7)) and Rule 8 of the DPDP Rules allow us to retain personal data where retention is necessary for compliance with any law, such as tax, accounting and company-law record-keeping and log retention under the CERT-In Directions. We describe these periods in Section 9.

5.3 Where we rely on a legitimate use, we will still process only the personal data necessary for that purpose, keep it secure, and retain it only for as long as that purpose requires.

## 6. Children's personal data

6.1 Under the DPDP Act, a **"child"** is an individual who has not completed eighteen years of age. The Services are [OPTION A: intended only for adults. If you are under 18, please do not use the Services or provide us with any personal data. / OPTION B: available to children only with the verifiable consent of a parent or lawful guardian, as described below.]

6.2 **Verifiable parental consent.** Before we process any personal data of a child, we will obtain the verifiable consent of the child's parent or lawful guardian. We will take appropriate technical and organisational measures to check that the individual giving consent is an identifiable adult, by reference to (a) reliable details of identity and age already available with us, or (b) identity and age details voluntarily provided by the parent or guardian, or a virtual token mapped to such details, issued by an entity entrusted by law or the Government with maintaining them (for example, through a digital locker service provider).

6.3 **Persons with disabilities.** Where a person with a disability has a lawful guardian, we will obtain the verifiable consent of that guardian, after taking reasonable steps to verify that the guardian has been appointed by a court, designated authority or local level committee under the applicable guardianship law.

6.4 **What we will not do.** We will not undertake processing of a child's personal data that is likely to cause any detrimental effect on the well-being of the child. We will not track or behaviourally monitor children, and we will not direct targeted advertising at children.

6.5 **Exemptions.** The DPDP Rules exempt certain classes of Data Fiduciaries and purposes from some of these requirements (for example, healthcare professionals, educational institutions, child-care providers, and processing for the child's safety or for specified legal purposes), subject to conditions. [We rely on the following exemption: describe exemption, or delete this sentence.]

6.6 **If we learn we have a child's data without consent.** If we learn that we have collected personal data of a child without verifiable consent of a parent or lawful guardian, we will stop processing it and erase it, except where we are required to retain it by law. If you believe we hold such data, please contact {{dpo_email}}.

> **Drafting note:** Verify the exemptions in Rule 12 and the Fourth Schedule [verify rule numbering] of the DPDP Rules before relying on them, and record which exemption you rely on and why. If your Services are adult-only (Option A), you still need a reasonable age-gating mechanism; a self-declaration of age alone may not suffice where the Service is likely to attract children. Ed-tech, gaming and social platforms should take specific advice.

## 7. Sharing your personal data

7.1 We do not sell your personal data. We share it only as described below and only to the extent necessary for the relevant purpose.

7.2 **Data Processors.** We engage **"Data Processors"** — service providers who process personal data on our behalf and on our instructions — for the following functions: cloud hosting and storage; payment processing; customer support and ticketing tools; SMS, email and push-notification delivery; analytics (only where you have consented); fraud prevention and security monitoring; and professional services such as audit and legal advice. We engage each Data Processor only under a valid contract that requires it to process personal data only on our instructions, keep it confidential, implement reasonable security safeguards, notify us of personal data breaches, and erase or return the data at the end of the engagement. We remain responsible for processing carried out on our behalf by our Data Processors.

> **Drafting note:** Section 8(2) of the DPDP Act permits a Data Fiduciary to engage a Data Processor only under a valid contract. Use the data-processing-agreement template for this. You are not required to name each Data Processor, but publishing a sub-processor list (or the categories, as above) increases transparency; s.11(1)(b) gives Data Principals the right to know the identities of Data Fiduciaries and Data Processors with whom their data has been shared, so keep a current internal list ready.

7.3 **Other Data Fiduciaries.** We may share personal data with other organisations that decide for themselves how to process it, namely: (a) your employer or organisation, where you use the Services under its account; (b) our group companies, for the purposes listed in Section 3.1 only; (c) a purchaser, investor or successor entity in connection with a proposed or actual merger, acquisition, demerger, amalgamation, sale of assets or financing, subject to confidentiality obligations and to that entity continuing to honour this notice; and (d) professional advisers, insurers and auditors, where necessary for the establishment, exercise or defence of legal claims or the management of risk.

7.4 **Government and law enforcement.** We may disclose personal data to courts, tribunals, regulators, law-enforcement agencies and other government authorities where we are required to do so by law, by a lawful order, or to protect the rights, property or safety of you, us or others, as permitted by law.

## 8. Transfers outside India

8.1 Some of our Data Processors and group companies are located, or store data, outside India, including in {{transfer_countries}}. The DPDP Act permits transfer of personal data outside India except to countries or territories that the Central Government restricts by notification. We will not transfer your personal data to any country or territory so restricted, and we will comply with any conditions the Central Government may specify for transfers.

8.2 Where we transfer personal data outside India, we will ensure through contracts and technical measures that it receives protection consistent with this notice and the DPDP Act.

8.3 Where a sectoral law or regulator (for example, the Reserve Bank of India's directions on storage of payment system data) requires certain data to be stored or processed only in India, we will comply with that requirement.

> **Drafting note:** Section 16 of the DPDP Act and the corresponding Rule (Rule 15 as notified [verify]) take a "negative list" approach. As of drafting, check whether the Central Government has notified any restricted countries or any conditions on transfer, and whether any sector rules (RBI, SEBI, IRDAI, health or telecom) impose localisation. Significant Data Fiduciaries may be directed to keep specified personal data in India.

## 9. How long we keep your personal data

9.1 We keep personal data only for as long as it is necessary for the specified purpose for which it was collected, or for as long as we are required to keep it by law, whichever is longer. When you withdraw consent, or when it is reasonable to assume that the specified purpose is no longer being served, we will erase the personal data and cause our Data Processors to erase it, unless retention is required by law.

9.2 Our retention periods are:

| Category | Retention period |
|---|---|
| Account data (Row A) | Until you close your account, and then {{account_retention_period}}, unless a longer period is required by law |
| Transaction and invoice records (Rows C and D) | {{transaction_retention_period}}, as required by tax, accounting and company laws |
| Support communications (Row E) | {{support_retention_period}} |
| Marketing data (Row I) | {{marketing_retention_period}} |
| Security, traffic and processing logs (Row F) | {{log_retention_period}} |
| Content you upload (Row K) | Until you delete it or close your account, subject to any legal hold or takedown record-keeping obligation |

9.3 **Inactive accounts.** Where you have not used the Services or exercised any of your rights for the period prescribed under the DPDP Rules for our class of Data Fiduciary, we will treat the purpose as no longer being served and erase your personal data, except where retention is required by law. We will notify you at least 48 hours before erasure, so that you can log in or contact us if you wish to keep your account.

9.4 **Logs retained by law.** Regardless of the above, we retain personal data, associated traffic data and other logs of processing for a minimum period of one year from the date of processing, for the purposes specified in the DPDP Rules (such as detecting and investigating personal data breaches), unless a different period is required by law.

> **Drafting note:** Rule 8 and the Third Schedule of the DPDP Rules [verify] set specific erasure periods (as notified, three years from the Data Principal's last approach) and a 48-hour pre-erasure notice for specified classes of large e-commerce entities, online gaming intermediaries and social media intermediaries, defined by registered-user thresholds. Check whether you fall in a specified class; if not, Section 9.3 is good practice but you may adapt it. Also check the one-year log retention period in the Rules and the 180-day in-India log retention under the CERT-In Directions, and align your sector record-keeping rules (for example, under tax, company and anti-money-laundering laws).

## 10. How we protect your personal data

10.1 We protect personal data in our possession or under our control, including data processed by our Data Processors, by taking reasonable security safeguards to prevent personal data breaches. These include:

(a) encryption of personal data in transit and at rest, and use of obfuscation, masking or virtual tokens where appropriate;

(b) role-based access controls, multi-factor authentication for our personnel, and the principle of least privilege;

(c) logging and monitoring of access to systems that process personal data, and periodic review of those logs, to detect unauthorised access, investigate incidents and prevent recurrence;

(d) backups and business-continuity measures so that processing can continue if confidentiality, integrity or availability is compromised;

(e) contractual security obligations on our Data Processors;

(f) security testing, vulnerability management and secure software development practices; and

(g) confidentiality obligations and periodic privacy and security training for our personnel.

10.2 No system is completely secure. Please use a strong, unique password and never share your one-time passwords; we will never ask you for them.

## 11. Personal data breaches

11.1 A **"personal data breach"** is any unauthorised processing of personal data or accidental disclosure, acquisition, sharing, use, alteration, destruction or loss of access to personal data that compromises its confidentiality, integrity or availability.

11.2 If a personal data breach affecting your personal data occurs, we will, without delay and to the best of our knowledge, inform you in a concise, clear and plain manner through your account, email, SMS or other registered mode of communication. Our intimation will describe the breach (including its nature, extent, timing and location), the consequences relevant to you that are likely to arise from it, the measures we have taken or are taking to mitigate the risk, the safety measures you may take to protect your interests, and the contact details of a person who can answer your questions.

11.3 We will also intimate the Data Protection Board of India of the breach without delay and furnish a detailed report within the period required by the DPDP Rules, and report cyber security incidents to the Indian Computer Emergency Response Team (CERT-In) within the time required by the CERT-In Directions.

> **Drafting note:** As notified, Rule 7 [verify] requires intimation to the Board without delay and a detailed report within 72 hours of becoming aware (or a longer period the Board allows); the CERT-In Directions of 28 April 2022 require reporting of specified cyber incidents within 6 hours of noticing them. Verify both before publishing. Keep the commitment in this notice general so that it does not become out of date, and put the detailed timelines in your internal incident response plan.

## 12. Your rights as a Data Principal

12.1 Subject to the DPDP Act and the DPDP Rules, you have the following rights in respect of personal data that you have consented to our processing, or that you have voluntarily provided under Section 5.1(a):

(a) **Right to access information** — to obtain from us (i) a summary of the personal data we process and the processing activities we undertake with it; (ii) the identities of all other Data Fiduciaries and Data Processors with whom we have shared it, together with a description of the personal data shared; and (iii) any other information related to your personal data and its processing, as may be prescribed. This right does not extend to sharing with Data Fiduciaries authorised by law to obtain personal data for the prevention, detection or investigation of offences or cyber incidents, or for prosecution or punishment of offences, where the request is made in writing for those purposes;

(b) **Right to correction, completion and updating** — to have inaccurate or misleading personal data corrected, incomplete personal data completed, and personal data updated;

(c) **Right to erasure** — to have personal data that is no longer necessary for the purpose for which it was processed erased, unless retention is necessary for the specified purpose or for compliance with any law;

(d) **Right of grievance redressal** — to have readily available means of grievance redressal provided by us in respect of any act or omission regarding the performance of our obligations relating to your personal data or the exercise of your rights; and

(e) **Right to nominate** — to nominate any other individual who, in the event of your death or incapacity, will exercise your rights in accordance with the DPDP Act and the DPDP Rules. "Incapacity" means inability to exercise your rights due to unsoundness of mind or infirmity of body.

12.2 **How to exercise your rights.** You may exercise your rights from {{privacy_centre_location}} or by writing to {{dpo_email}} with the subject line "Data Principal request". Please give us your name, the identifier associated with your account (such as your registered mobile number or email address), and details of your request. To protect your personal data, we may need to verify your identity before acting on a request; we will ask only for information that is necessary for that purpose.

12.3 **Timelines.** We will respond to requests to exercise your rights within {{rights_response_days}} days of receipt, and in any event within the period prescribed under the DPDP Rules. If we need more information from you or cannot comply (for example, because retention is required by law), we will tell you why.

12.4 **Nomination.** To nominate an individual, use the nomination form in {{privacy_centre_location}} or write to {{dpo_email}} with the nominee's name and contact details. You may change or revoke a nomination at any time in the same way. If a nominee contacts us after your death or incapacity, we will ask for reasonable proof of the event and of the nominee's identity before acting.

12.5 **No charge.** We do not charge you for exercising your rights.

> **Drafting note:** Rule 14 of the DPDP Rules (as notified) [verify] requires Data Fiduciaries to publish on their website or app the means by which a Data Principal may make a request, and the particulars (such as username or identifier) needed to identify them. It also requires a grievance response period that does not exceed 90 days. Set {{rights_response_days}} and {{grievance_response_days}} to a period your operations can genuinely meet; 30 days is a common commitment. Rights under sections 11 and 12 apply to data processed on consent or under s.7(a); they do not apply to the other legitimate uses.

## 13. Your duties as a Data Principal

13.1 Section 15 of the DPDP Act places certain duties on Data Principals. When you exercise your rights or use the Services, you must:

(a) comply with the provisions of all applicable laws;

(b) not impersonate another person while providing your personal data for a specified purpose;

(c) not suppress any material information while providing your personal data for any document, unique identifier, proof of identity or proof of address issued by the State or any of its instrumentalities;

(d) not register a false or frivolous grievance or complaint with us or the Data Protection Board of India; and

(e) furnish only information that is verifiably authentic while exercising your right to correction or erasure.

13.2 Breach of these duties may attract a penalty under the DPDP Act.

## 14. Grievances and complaints

14.1 **Grievance redressal.** If you have a grievance about how we process your personal data or about how we have handled a request, please contact our Grievance Officer:

Name: {{grievance_officer_name}}
Email: {{grievance_officer_email}}
Address: {{grievance_officer_address}}

14.2 We will acknowledge your grievance and resolve it within {{grievance_response_days}} days of receipt, and in any event within the period prescribed under the DPDP Rules.

14.3 **Grievances under the Information Technology Rules.** Where we act as an intermediary, the Grievance Officer named above is also our grievance officer for the purposes of rule 3(2) of the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021. Complaints under those rules (for example, about content hosted on the Services) will be acknowledged within 24 hours and resolved within the period set out in those rules, as further described in our Terms of Use.

> **Drafting note:** Keep Section 14.3 only if you are an "intermediary" under the IT Act (for example, you host user-generated content or allow users to message each other). The IT Rules timelines (24-hour acknowledgement, 15-day resolution, and shorter timelines for certain categories of content) have been amended several times; verify the current text. If you are also an e-commerce entity, the Consumer Protection (E-Commerce) Rules, 2020 require a grievance officer for consumer complaints with their own timelines; you may designate the same person.

14.4 **Complaint to the Data Protection Board of India.** If you are not satisfied with our resolution of your grievance, or we do not respond within the time stated above, you may file a complaint with the Data Protection Board of India in accordance with the DPDP Act and the DPDP Rules. The DPDP Act requires you to exhaust the opportunity of redressing your grievance with us before approaching the Board. The Board functions as a digital office; information on how to file a complaint is available on the Board's official website.

## 15. Data Protection Officer and contact

15.1 If you have any question about the processing of your personal data, please contact:

{{dpo_name}}
Email: {{dpo_email}}
Telephone: {{dpo_phone}}
Postal address: {{company_name}}, {{company_address}}

15.2 For general (non-privacy) queries, please write to {{company_email}}.

> **Drafting note:** Section 8(9) of the DPDP Act requires every Data Fiduciary to publish the business contact information of a Data Protection Officer (if applicable) or of a person able to answer, on its behalf, Data Principals' questions about processing. Only a Significant Data Fiduciary must appoint a DPO, who must be based in India, represent the SDF and be responsible to its Board of Directors (s.10(2)). If you are not an SDF, describe the contact as "the person who can answer your questions" rather than DPO, or use DPO as a voluntary designation.

## 16. Significant Data Fiduciary obligations

16.1 [If we are notified as a Significant Data Fiduciary: In addition to the commitments above, we have appointed a Data Protection Officer based in India who is responsible to our Board of Directors; we have appointed an independent data auditor; we carry out periodic Data Protection Impact Assessments and audits; we verify that the algorithmic software we deploy for processing personal data is not likely to pose a risk to the rights of Data Principals; and we comply with any direction of the Central Government on keeping specified personal data and associated traffic data within India.]

> **Drafting note:** Delete Section 16 unless the Central Government has notified you (or your class) as a Significant Data Fiduciary under section 10 of the DPDP Act, having regard to factors such as the volume and sensitivity of data, risk to Data Principals, and impact on the sovereignty, integrity and security of India. As notified, Rule 13 [verify] requires an SDF to undertake a Data Protection Impact Assessment and audit once every 12 months and furnish a report to the Board, to observe due diligence on algorithmic software, and to ensure that specified personal data identified by a government committee is processed subject to the restriction that it, and associated traffic data, is not transferred outside India. Verify these duties against the current Rules.

## 17. Cookies and similar technologies

17.1 We use cookies, software development kits, pixels and similar technologies on our website and app. Strictly necessary technologies are used to deliver the Services you request. We use other technologies — for example, for analytics or advertising — only with your consent, which you can give, refuse or withdraw at any time through our cookie settings. Please read our Cookie Notice, available on our website, for details of the technologies we use, their purposes and how to manage them.

## 18. Automated decision-making and AI

18.1 [We use automated systems, including machine-learning models, to [describe use, e.g. detect fraudulent transactions or recommend content]. Where such a system makes or materially contributes to a decision that significantly affects you (for example, suspending your account), you may ask for a human review of that decision by writing to {{dpo_email}}.] We do not use your personal data to train general-purpose artificial-intelligence models offered to third parties [without your separate consent].

## 19. Changes to this notice

19.1 We may update this notice from time to time to reflect changes in our processing, the Services or the law. The version number and effective date at the top of this notice show when it was last changed.

19.2 If we make a material change — for example, to process your personal data for a new purpose, or to share it with a new category of recipient — we will give you prior notice through the Services or by email and, where the change relies on consent, we will seek your fresh consent before the new processing begins. We will not use your personal data for a new purpose based on consent you gave for a different purpose.

19.3 Earlier versions of this notice are available on request from {{dpo_email}}.

## 20. Language and governing law

20.1 This notice is published in English. [It is also available in: list languages.] If there is any inconsistency between the English version and a translation, [the English version will prevail to the extent permitted by law / the version in the language you chose will prevail].

20.2 This notice is governed by the laws of India. Nothing in this notice limits any right you have under the DPDP Act, the Consumer Protection Act, 2019 or any other law that cannot be limited by agreement.

