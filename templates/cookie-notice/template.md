---
id: cookie-notice
title: Cookie and Tracking Technologies Notice
category: privacy-web
summary: >-
  Notice explaining cookies, SDKs and similar technologies on an Indian website or app, with consent and withdrawal under the DPDP Act, 2023.
audience: [startup, sme, enterprise]
jurisdiction: IN
governing_laws:
  - Digital Personal Data Protection Act, 2023
  - Digital Personal Data Protection Rules, 2025
  - Information Technology Act, 2000
document_type: notice
parties: 0
stamp_duty: not-applicable
e_signature: permitted
version: 0.1.0
last_updated: 2026-10-16
review_status: draft
related: [privacy-policy, terms-of-use]
fields:
  - key: brand_name
    type: text
    label: Brand, website or app name used publicly
    example: Acme
  - key: effective_date
    type: date
    label: Date this version of the notice takes effect
    example: 1 November 2026
  - key: company_name
    type: text
    label: Company's full legal name
    example: Acme Technologies Private Limited
  - key: website_url
    type: url
    label: Website address(es) covered
    example: www.acme.example
  - key: app_name
    type: text
    label: Name of the mobile application(s) covered
    example: Acme for Android and iOS
  - key: cookie_settings_location
    type: text
    label: Where users can open cookie settings
    example: the "Cookie settings" link in the footer of every page, or Settings > Privacy in the app
  - key: consent_record_period
    type: text
    label: How long consent records are retained
    example: the life of your account plus 3 years
  - key: consent_refresh_months
    type: number
    label: Interval (in months) after which consent is sought again
    example: 12
  - key: dpo_email
    type: email
    label: Email address of the DPO / contact person
    example: privacy@acme.example
  - key: grievance_officer_name
    type: text
    label: Name of the Grievance Officer
    example: Priya Sharma (illustrative)
  - key: grievance_officer_email
    type: email
    label: Email address of the Grievance Officer
    example: grievance@acme.example
---

# COOKIE NOTICE

**{{brand_name}} — Cookie and Tracking Technologies Notice**

Effective from {{effective_date}}

> **Drafting note:** India has no standalone cookie law equivalent to the EU ePrivacy Directive. Cookies and similar technologies are regulated through the DPDP Act, 2023 to the extent they process personal data (which most identifiers, such as cookie IDs, device IDs and IP addresses linked to a user, will). Non-essential cookies that process personal data therefore need DPDP-compliant consent (free, specific, informed, unconditional, unambiguous, by clear affirmative action and withdrawable as easily as given), unless a legitimate use under section 7 applies, which is rarely the case for analytics or advertising. Most substantive DPDP obligations commence in phases under the DPDP Rules, 2025; check which are in force [verify]. Run a cookie scan of your website and app before completing the tables in Section 4.

## 1. About this notice

1.1 This Cookie Notice explains how **{{company_name}}** (**"we"**, **"us"** or **"our"**) uses cookies, software development kits, pixels and similar technologies (together, **"Cookies"**) on our website at {{website_url}} and in our mobile application {{app_name}} (together, the **"Services"**), and the choices you have.

1.2 This notice forms part of, and should be read with, our Privacy Notice, which explains how we process personal data as a Data Fiduciary under the Digital Personal Data Protection Act, 2023 (the **"DPDP Act"**), your rights as a Data Principal, and how to raise a grievance. Words defined in the Privacy Notice have the same meaning here.

## 2. What are Cookies?

2.1 **Cookies** are small text files placed on your browser or device when you visit a website. They allow the website to recognise your device and remember information about your visit, such as your preferences or whether you are signed in.

2.2 **Session Cookies** are deleted when you close your browser. **Persistent Cookies** remain on your device for a set period or until you delete them.

2.3 **First-party Cookies** are set by us. **Third-party Cookies** are set by another organisation — for example, an analytics or advertising provider — whose content or code is included in the Services.

2.4 **Similar technologies** include: (a) **pixels or web beacons** — tiny images or code embedded in a web page or email that tell us whether it was viewed; (b) **local storage** — browser storage that holds larger amounts of data than a cookie; (c) **software development kits ("SDKs")** — code from a third party embedded in our app that can collect information about app usage and device; and (d) **device and advertising identifiers** — identifiers assigned by your device's operating system. This notice applies to all of these in the same way as to cookies.

## 3. Categories of Cookies we use and our lawful ground

3.1 **Strictly necessary Cookies.** These are essential to provide the Services you request — for example, to keep you signed in, remember items in your cart, balance traffic, protect against fraud and cross-site request forgery, and remember your cookie choices. Without them, the Services cannot function. We use these Cookies to provide the service you have asked for, and they process only the minimum personal data needed for that purpose. You cannot switch them off in our cookie settings, but you can block them through your browser, in which case parts of the Services may not work.

3.2 **Functional Cookies.** These remember choices you make — such as language, region or display settings — to provide enhanced, more personal features. We use them only with your consent.

3.3 **Analytics Cookies.** These help us understand how visitors use the Services — for example, which pages are visited most and whether users encounter errors — so that we can improve them. Where possible, we configure analytics tools to mask IP addresses and to aggregate data. We use them only with your consent.

3.4 **Advertising Cookies.** These are used, by us or by advertising partners, to deliver advertisements that are more relevant to you, to limit the number of times you see an advertisement, and to measure the effectiveness of advertising campaigns. They may track your activity across websites and apps. We use them only with your consent, and never for users we know to be children (see Section 7).

> **Drafting note:** The DPDP Act does not use the "strictly necessary" exemption found in EU law. The position taken in Section 3.1 is that processing needed to deliver the specific service requested is covered by the consent given when the user asks for that service, and/or is "voluntarily provided" for that purpose under section 7(a) [verify — this is an interpretation not yet tested before the Data Protection Board]. Keep the strictly necessary category narrow; do not place analytics or advertising Cookies in it.

## 4. Cookies on the Services

4.1 The tables below list the Cookies we use. We review them periodically, but third-party providers may change their Cookie names. The current list is always available in {{cookie_settings_location}}.

**Table 1 — Strictly necessary**

| Cookie / technology | Provider (first or third party) | Purpose | Duration |
|---|---|---|---|
| [session_id] | [First party] | Keeps you signed in during your session | [Session] |
| [csrf_token] | [First party] | Protects forms against cross-site request forgery | [Session] |
| [consent_state] | [First party] | Records your cookie choices | [12 months] |
| [load_balancer] | [Hosting provider — third party] | Routes traffic to available servers | [Session] |

**Table 2 — Functional**

| Cookie / technology | Provider (first or third party) | Purpose | Duration |
|---|---|---|---|
| [lang_pref] | [First party] | Remembers your language | [12 months] |
| [chat_widget] | [Support-chat provider — third party] | Enables the in-page chat window | [6 months] |

**Table 3 — Analytics**

| Cookie / technology | Provider (first or third party) | Purpose | Duration |
|---|---|---|---|
| [analytics_id] | [Analytics provider — third party] | Distinguishes users for aggregate statistics | [13 months] |
| [Analytics SDK] | [Analytics provider — third party] | Measures app screens, sessions and crashes | [Until app uninstalled or reset] |

**Table 4 — Advertising**

| Cookie / technology | Provider (first or third party) | Purpose | Duration |
|---|---|---|---|
| [ad_pixel] | [Advertising platform — third party] | Measures conversions from our advertisements | [90 days] |
| [Advertising identifier] | [Mobile operating system] | Attributes app installs to campaigns | [Until reset by you] |

> **Drafting note:** Replace every bracketed entry with the actual Cookies found by your scan. For each third-party provider, check whether it acts as your Data Processor (processing only on your instructions, under a contract — see the data-processing-agreement template) or as an independent Data Fiduciary (using the data for its own purposes, as many advertising platforms do). If it is an independent Data Fiduciary, say so here and link its privacy notice, and check whether the data is transferred outside India.

## 5. Your consent and how to manage Cookies

5.1 **Cookie banner.** When you first visit the website, we show a banner that explains our use of Cookies and lets you "Accept all", "Reject all" or "Manage preferences" by category. Non-essential Cookies are not set until you give consent. No category other than strictly necessary is pre-selected, and choosing "Reject all" is as easy as choosing "Accept all".

5.2 **App permissions.** In our app, we ask for your consent to analytics and advertising SDKs through an in-app screen, and your device's operating system may separately ask for permission to track you across other companies' apps. We respect the operating-system choice.

5.3 **Withdrawing consent.** You may withdraw or change your consent at any time, as easily as you gave it, through {{cookie_settings_location}}. When you withdraw consent, we will stop setting the relevant Cookies and stop processing personal data collected through them for that purpose within a reasonable time, and will instruct our Data Processors to do the same. Withdrawal does not affect processing that took place before it.

5.4 **Record of your choices.** We keep a record of the version of this notice shown to you, your choices and the time you made them, for {{consent_record_period}}, so that we can demonstrate your consent. We will ask you to confirm your choices again after {{consent_refresh_months}} months, or sooner if we make a material change to the Cookies we use.

5.5 **Consent Managers.** Where we integrate with a Consent Manager registered under the DPDP Act, you may also give, manage and withdraw consent through that Consent Manager, as described in our Privacy Notice.

5.6 **Browser and device controls.** Most browsers allow you to view, block and delete Cookies through their settings, and to send a "do not track" or similar signal. You can reset or limit the use of your device's advertising identifier in your device settings. Blocking strictly necessary Cookies may stop parts of the Services from working.

5.7 **Third-party opt-outs.** Some third-party providers offer their own opt-out tools. Where available, we provide links to them in {{cookie_settings_location}}.

## 6. Third-party Cookies

6.1 Some Cookies on the Services are set by third parties. Where those third parties process personal data on our behalf, they do so as our Data Processors under contracts that require them to process it only on our instructions and to protect it. Where they use the data for their own purposes, they act as independent Data Fiduciaries and their own privacy notices apply; we identify them in Section 4.

6.2 Some third-party providers may process data outside India. Our Privacy Notice explains how we handle transfers outside India.

## 7. Children

7.1 The DPDP Act prohibits Data Fiduciaries from undertaking tracking or behavioural monitoring of children (individuals under 18), or targeted advertising directed at children, subject to exemptions notified under the DPDP Rules. Accordingly:

(a) where we know, or have verified through our age-assurance process, that a user is a child, we will not set analytics Cookies that build individual behavioural profiles, or any advertising Cookies, for that user; and

(b) we will not knowingly allow third parties to set tracking or advertising Cookies on parts of the Services directed at children.

> **Drafting note:** Section 9(3) of the DPDP Act and the exemptions in the DPDP Rules (Rule 12 and the Fourth Schedule as notified [verify]) govern this. If your Services are directed at children, or a significant share of your users are children, consider disabling all non-essential Cookies on those surfaces and take specific advice; a cookie banner consent from a child is not valid consent.

## 8. Retention

8.1 The duration of each Cookie is shown in Section 4. Personal data collected through Cookies is retained in accordance with our Privacy Notice and erased when the purpose is served or you withdraw consent, unless retention is required by law.

## 9. Changes to this notice

9.1 We will update this notice when we change the Cookies we use or when the law changes. The effective date at the top shows when it was last updated. If we introduce a new category of non-essential Cookie, we will ask for your consent before setting it.

## 10. Contact and grievances

10.1 For questions about this notice or our use of Cookies, write to {{dpo_email}}.

10.2 If you have a grievance, contact our Grievance Officer, {{grievance_officer_name}}, at {{grievance_officer_email}}. If you are not satisfied with our response, you may complain to the Data Protection Board of India after exhausting our grievance redressal mechanism, as explained in our Privacy Notice.
