# Cookie and Tracking Technologies Notice

**Category:** Privacy & Web · **Type:** notice · **Jurisdiction:** India · **Status:** Draft

## Overview

A notice that explains how a website or app uses cookies, pixels, local storage, SDKs and device identifiers, and how users can give, refuse and withdraw consent. It sorts these technologies into four categories (strictly necessary, functional, analytics and advertising), each with a table to fill in. It sets out the consent mechanism, explains how third parties are treated, and adds the DPDP Act restrictions on tracking children.

## When to use it

- Any Indian website or app that sets non-essential cookies or embeds third-party SDKs, such as analytics tools, advertising pixels, chat widgets or session-replay tools.
- Alongside the `privacy-policy` template. This notice is the detailed layer behind Section 17 of the privacy notice.

## When not to use it

- **No cookies beyond the essential ones.** If your site sets only strictly necessary cookies, a short paragraph in the privacy notice is enough.
- **EU or UK users.** If you target users in the EU or UK, you also need ePrivacy/PECR-compliant consent, and the EU's "strictly necessary" exemption works differently. Use a regional version or a geo-targeted banner.

## Key provisions

- **Definitions of the technologies (s.2).** First-party and third-party, session and persistent, and SDKs and identifiers.
- **Category descriptions and lawful ground (s.3).** Every category other than strictly necessary is consent-only.
- **Cookie tables to fill in (s.4).** Columns for provider, purpose and duration.
- **Consent banner standards (s.5).** No pre-ticked categories, rejecting is as easy as accepting, withdrawal is as easy as consent (s.6(4) DPDP Act), consent records are kept, consent is refreshed periodically, and Consent Managers are recognised.
- **Third parties as Data Processors or independent Data Fiduciaries (s.6).**
- **Children (s.7).** No tracking, behavioural monitoring or targeted advertising (s.9(3) DPDP Act).

## India-specific notes

- **No standalone cookie law.** India has no statute equivalent to the EU ePrivacy Directive and no regulator guidance specific to cookies. Cookies are regulated through the **DPDP Act, 2023** to the extent they process personal data. Cookie IDs, advertising IDs and IP addresses linked to a user or device will generally be personal data, because the Act covers any data "about an individual who is identifiable by or in relation to such data". Consent must therefore meet s.6: free, specific, informed, unconditional, unambiguous, given by clear affirmative action, and limited to what is necessary. "By continuing to browse you accept cookies" banners do not meet that standard.
- **No legitimate-interests basis.** Section 7 of the DPDP Act is a closed list and contains no general "legitimate interests" ground, so analytics and advertising cookies need consent. The treatment of strictly necessary cookies in this template is a reasoned interpretation that the Data Protection Board has not yet tested; the drafting note in the template flags it.
- **Dark patterns.** The CCPA's Guidelines for Prevention and Regulation of Dark Patterns, 2023 list practices such as "interface interference" and "nagging" that apply to consent banners on consumer platforms. Do not make "Reject" harder to find than "Accept".
- **Before the DPDP provisions commence.** Until the substantive DPDP obligations are in force (phased under the DPDP Rules, 2025), s.43A of the IT Act and the SPDI Rules, 2011 apply [verify]. Cookies rarely collect "sensitive personal data or information" under those Rules, but publishing this notice early is good practice.
- **Children.** You cannot obtain a child's consent through a banner. Verifiable parental consent is needed under s.9 and the DPDP Rules, and tracking and targeted advertising aimed at children are prohibited whatever consent is given, unless an exemption applies.
- **Stamp duty and signature.** Not applicable. This is a unilateral notice.

## Customisation checklist

- [ ] Run a cookie and SDK scan of the website and each app build.
- [ ] Fill in Tables 1–4 and remove the placeholder rows.
- [ ] For each third party, decide whether it is a Data Processor (sign a DPA) or an independent Data Fiduciary (disclose it and link its notice).
- [ ] Configure the consent tool: categories off by default, "Reject all" as prominent as "Accept all", and a persistent settings link.
- [ ] Decide how long to keep consent records and when to refresh consent.
- [ ] Decide how you will detect children, and disable tracking and advertising for them.
- [ ] Check cross-border transfers by analytics and advertising vendors against your privacy notice.
- [ ] Align contact details with the privacy notice.

## Related templates

- `privacy-policy`: the main DPDP notice, which this notice supplements.
- `terms-of-use`: platform terms that refer to both notices.
