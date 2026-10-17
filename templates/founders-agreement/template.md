---
id: founders-agreement
title: Founders' Agreement
category: startup-core
summary: >-
  Agreement among the co-founders of an Indian private limited company covering roles, shareholding, reverse vesting, leaver terms, IP, decision-making and exit.
audience: [startup]
jurisdiction: IN
governing_laws:
  - Indian Contract Act, 1872
  - Companies Act, 2013
  - Copyright Act, 1957
  - Specific Relief Act, 1963
  - Arbitration and Conciliation Act, 1996
  - Information Technology Act, 2000
document_type: agreement
parties: 3
stamp_duty: required
e_signature: permitted
version: 0.1.0
last_updated: 2026-10-16
review_status: draft
related: [shareholders-agreement, ip-assignment-agreement, esop-plan, board-resolutions, mutual-nda, term-sheet]
fields:
  - key: effective_date
    type: date
    label: Date of execution of this Agreement
    example: 1 November 2026
  - key: execution_place
    type: text
    label: City where the Agreement is executed
    example: Bengaluru
  - key: company_name
    type: text
    label: Company's full legal name
    example: Acme Technologies Private Limited
  - key: company_cin
    type: text
    label: Company's Corporate Identity Number (CIN)
    example: U62099KA2026PTC123456
  - key: company_address
    type: textarea
    label: Company's registered office address
    example: 12, 4th Cross, Indiranagar, Bengaluru 560038, Karnataka
  - key: founder_1_name
    type: text
    label: First founder's full name
    example: Asha Rao
  - key: founder_1_address
    type: textarea
    label: First founder's residential address
    example: 45, MG Road, Bengaluru 560001, Karnataka
  - key: founder_2_name
    type: text
    label: Second founder's full name
    example: Vikram Singh
  - key: founder_2_address
    type: textarea
    label: Second founder's residential address
    example: 7, Park Street, Kolkata 700016, West Bengal
  - key: business_description
    type: textarea
    label: Short description of the Company's business
    example: a software-as-a-service platform for logistics planning
  - key: share_face_value
    type: money
    label: Face value per equity share
    example: ₹ 10
  - key: vesting_commencement_date
    type: date
    label: Date from which founder vesting is counted
    example: 1 July 2026
  - key: aoa_amendment_days
    type: number
    label: Days within which the Articles must be amended
    example: "30"
  - key: minimum_hours_per_week
    type: number
    label: Minimum hours per week each founder will devote
    example: "40"
  - key: vesting_period_months
    type: number
    label: Total vesting period in months
    example: "48"
  - key: cliff_months
    type: number
    label: Cliff period in months
    example: "12"
  - key: call_option_period_days
    type: number
    label: Days within which the call option may be exercised after a Leaving Date
    example: "90"
  - key: completion_days
    type: number
    label: Days within which a transfer must complete after a Call Notice
    example: "30"
  - key: acceleration_percentage
    type: number
    label: Percentage of Unvested Shares that accelerate on a Change of Control
    example: "50"
  - key: non_solicit_months
    type: number
    label: Post-exit non-solicitation period in months
    example: "12"
  - key: deadlock_cooling_days
    type: number
    label: Days of negotiation before a deadlock escalates
    example: "15"
  - key: lock_in_months
    type: number
    label: Founder lock-in period in months
    example: "36"
  - key: rofr_offer_period_days
    type: number
    label: Days the other founders have to accept a ROFR offer
    example: "30"
  - key: drag_threshold_percentage
    type: number
    label: Shareholding percentage needed to trigger drag-along
    example: "75"
  - key: founder_salary_approval
    type: text
    label: Body that approves founder remuneration
    example: the Board, with the consent of all Founders then in office
  - key: arbitration_seat
    type: text
    label: Seat of arbitration
    example: Bengaluru
  - key: arbitration_venue
    type: text
    label: Venue of arbitration hearings
    example: Bengaluru
  - key: company_email
    type: email
    label: Company's email address for notices
    example: legal@example.in
  - key: founder_1_email
    type: email
    label: First founder's email address for notices
    example: asha@example.in
  - key: founder_2_email
    type: email
    label: Second founder's email address for notices
    example: vikram@example.in
  - key: stamp_duty_payer
    type: text
    label: Party bearing stamp duty
    example: the Company
  - key: company_signatory_name
    type: text
    label: Name of the Company's authorised signatory
    example: Meera Iyer
  - key: company_signatory_title
    type: text
    label: Title of the Company's authorised signatory
    example: Director
  - key: founder_1_role
    type: text
    label: First founder's title and role
    example: Chief Executive Officer – strategy, fundraising, sales and hiring
  - key: founder_2_role
    type: text
    label: Second founder's title and role
    example: Chief Technology Officer – product, engineering and security
  - key: founder_1_shares
    type: text
    label: Number of equity shares held by the first founder
    example: "6,000"
  - key: founder_1_percentage
    type: text
    label: First founder's percentage shareholding
    example: "60%"
  - key: founder_2_shares
    type: text
    label: Number of equity shares held by the second founder
    example: "4,000"
  - key: founder_2_percentage
    type: text
    label: Second founder's percentage shareholding
    example: "40%"
  - key: total_shares
    type: text
    label: Total issued equity shares of the Company
    example: "10,000"
  - key: reserved_matter_spend_threshold
    type: money
    label: Spending threshold above which founder consent is required
    example: ₹ 10,00,000
  - key: founder_1_excluded_ip
    type: textarea
    label: First founder's prior or excluded IP (or "None")
    example: None
  - key: founder_2_excluded_ip
    type: textarea
    label: Second founder's prior or excluded IP (or "None")
    example: An open-source routing library published before the Vesting Commencement Date under the MIT licence
---

# FOUNDERS' AGREEMENT

> **Drafting note:** This template assumes two founders and an already-incorporated private limited company that is itself a party. For three or more founders, repeat the founder party block, the signature block and the rows in Schedule 1, and check every pro rata mechanism. If the company has not yet been incorporated, sign a short pre-incorporation agreement between the founders and have the company adopt it after incorporation (a company may enforce or be bound by a pre-incorporation contract only in the circumstances set out in the Specific Relief Act, 1963), then sign this Agreement.

This Founders' Agreement (this **"Agreement"**) is made on {{effective_date}} at {{execution_place}}.

**BETWEEN**

1. **{{company_name}}**, a private limited company incorporated under the Companies Act, 2013, with Corporate Identity Number {{company_cin}} and its registered office at {{company_address}} (the **"Company"**, which expression shall, unless repugnant to the context, include its successors and permitted assigns);

2. **{{founder_1_name}}**, an adult Indian resident residing at {{founder_1_address}} (**"Founder 1"**, which expression shall, unless repugnant to the context, include their legal heirs, executors, administrators and permitted assigns); and

3. **{{founder_2_name}}**, an adult Indian resident residing at {{founder_2_address}} (**"Founder 2"**, which expression shall, unless repugnant to the context, include their legal heirs, executors, administrators and permitted assigns).

Founder 1 and Founder 2 are together the **"Founders"** and each a **"Founder"**. The Company and the Founders are together the **"Parties"** and each a **"Party"**.

> **Drafting note:** If any Founder is a non-resident (including an OCI cardholder or NRI), transfers of shares between that Founder and a resident (including the leaver transfers in Clause 8) are subject to the pricing guidelines and reporting requirements under the Foreign Exchange Management Act, 1999 and the Foreign Exchange Management (Non-debt Instruments) Rules, 2019. A face-value transfer may breach those pricing guidelines; take advice before using this template unchanged.

## RECITALS

A. The Founders have incorporated the Company to carry on the business of {{business_description}} (the **"Business"**).

B. The Founders hold the equity shares of the Company set out against their names in Schedule 1.

C. The Founders wish to record their understanding on their roles, time commitment, the vesting of their shares, the consequences of a Founder leaving, the ownership of intellectual property, decision-making and the transfer of shares, and the Company has agreed to be a party to this Agreement to give effect to these arrangements.

NOW, THEREFORE, in consideration of the mutual promises set out in this Agreement, the Parties agree as follows:

## 1. Definitions and Interpretation

1.1 In this Agreement, the following terms have the following meanings:

(a) **"Affiliate"** means, in relation to a person, any other person who directly or indirectly controls, is controlled by or is under common control with that person, and in relation to an individual, includes a Relative of that individual.

(b) **"Articles"** means the articles of association of the Company, as amended from time to time.

(c) **"Board"** means the board of directors of the Company.

(d) **"Business Day"** means a day, other than a Saturday, Sunday or public holiday, on which banks are open for general business in {{execution_place}}.

(e) **"Cause"** means, in relation to a Founder, any of the following: (i) fraud, embezzlement or misappropriation of the Company's funds or property; (ii) conviction for an offence involving moral turpitude or an offence punishable with imprisonment of more than six months; (iii) a material breach of Clause 10 (Intellectual Property), Clause 11 (Confidentiality) or Clause 12 (Non-Compete and Non-Solicitation); (iv) any other material breach of this Agreement or the Articles which, if capable of remedy, is not remedied within 30 days of written notice from the Board; (v) wilful and persistent neglect of the Founder's duties after written warning; or (vi) gross misconduct that causes, or is reasonably likely to cause, material harm to the Company's business or reputation.

(f) **"Change of Control"** means (i) a transaction or series of related transactions as a result of which any person or persons acting in concert (other than the existing shareholders) acquire more than 50% of the voting share capital of the Company or the right to appoint a majority of the Board; (ii) a merger, amalgamation or scheme of arrangement as a result of which the shareholders of the Company immediately before it hold less than 50% of the voting share capital of the surviving entity; or (iii) a sale or exclusive licence of all or substantially all of the assets or Intellectual Property of the Company.

(g) **"Company IP"** has the meaning given in Clause 10.1.

(h) **"Confidential Information"** has the meaning given in Clause 11.1.

(i) **"Encumbrance"** means any mortgage, pledge, charge, lien, hypothecation, option, right of pre-emption, power of sale, voting arrangement or other security interest or third-party right of any kind, and any agreement to create any of them.

(j) **"Fair Market Value"** means the fair market value of an equity share of the Company determined by a registered valuer (or, where required by applicable law, a merchant banker) appointed by the Board, using an internationally accepted pricing methodology on an arm's-length basis, as on a date not more than 90 days before the relevant transfer.

(k) **"Intellectual Property"** means patents, inventions, copyright and related rights, moral rights, trade marks, service marks, trade names, domain names, designs, rights in software and source code, database rights, rights in know-how and trade secrets, rights in Confidential Information and all other intellectual property rights, in each case whether registered or unregistered, and including applications for and renewals or extensions of such rights, anywhere in the world.

(l) **"Leaving Date"** means the date on which a Founder ceases to be a director, employee or full-time service provider of the Company (whichever is the last to occur), or, if earlier, the date on which the Founder gives or receives notice of such cessation.

(m) **"Leaving Founder"** means a Founder in respect of whom a Leaving Date has occurred.

(n) **"Nominee"** means any person (including an employee welfare trust, a new or existing employee, or an investor) designated by the Board, with the approval of the Remaining Founders, to acquire Unvested Shares under Clause 8.

(o) **"Relative"** has the meaning given to it in the Companies Act, 2013.

(p) **"Remaining Founders"** means, in relation to a Leaving Founder, the Founders other than the Leaving Founder who have not themselves become Leaving Founders.

(q) **"Shares"** means equity shares of the Company of face value {{share_face_value}} each, and includes any shares or securities issued in respect of them by way of bonus, split, consolidation, rights issue or other reorganisation.

(r) **"Transfer"** means to sell, gift, assign, transfer, Encumber, grant any interest in or otherwise dispose of, whether directly or indirectly, voluntarily or by operation of law, and "Transferred" shall be construed accordingly.

(s) **"Unvested Shares"** and **"Vested Shares"** have the meanings given in Clause 6.

(t) **"Vesting Commencement Date"** means {{vesting_commencement_date}}.

1.2 In this Agreement: (a) headings are for convenience only and do not affect interpretation; (b) the singular includes the plural and vice versa; (c) references to any gender include all genders; (d) references to a statute include any amendment, re-enactment or replacement of it and any rules or regulations made under it; (e) the words "including" and "includes" are illustrative and do not limit the general words that precede them; (f) references to Clauses and Schedules are to clauses of and schedules to this Agreement, and the Schedules form part of this Agreement; and (g) any reference to a percentage of Shares is to that percentage of the issued and paid-up equity share capital of the Company on a fully diluted basis, unless stated otherwise.

## 2. Articles of Association and Effectiveness

2.1 This Agreement takes effect on the date of its execution.

2.2 The Founders shall exercise their voting rights as shareholders and directors, and the Company shall take all necessary corporate action, to amend the Articles within {{aoa_amendment_days}} days of the date of this Agreement so as to incorporate Clauses 6 to 9 (Vesting, Leavers, Transfer Mechanics and Acceleration) and Clause 15 (Transfer Restrictions) and any other provision of this Agreement that relates to the Transfer of Shares or the rights attached to Shares.

2.3 If there is any conflict between this Agreement and the Articles, this Agreement shall prevail as between the Founders, and the Founders shall exercise their voting and other rights to amend the Articles to remove the conflict.

> **Drafting note:** Under the principle laid down by the Supreme Court in V.B. Rangaraj v. V.B. Gopalakrishnan (1992), restrictions on the transfer of shares of a private company that are not contained in its articles of association are not binding on the company or on its shareholders as against the company. A private agreement between founders may still be enforceable between those founders as a contract, but the company cannot refuse to register a transfer, and cannot itself enforce vesting or pre-emption, unless the articles contain the restriction. Amending the articles requires a special resolution under the Companies Act, 2013 and filing with the Registrar of Companies (Form MGT-14 within 30 days of the resolution [verify]), so build the amendment into the incorporation or first-board timeline and do not skip it. The Delhi High Court applied the same reasoning to shareholders' agreement rights that had not been incorporated into the articles in World Phone India Pvt Ltd v. WPI Group Inc. (2013) [verify citation]. Section 58(2) of the Companies Act, 2013, which recognises contracts between shareholders on transfer, applies to public companies and does not displace this rule for private companies.

## 3. Roles and Responsibilities

3.1 Each Founder shall hold the title and perform the role set out against their name in Schedule 1, and shall perform such other duties consistent with that role as the Board may reasonably assign from time to time.

3.2 Each Founder shall be appointed (if not already appointed) as a director of the Company for so long as they remain a Founder in office and hold Shares, subject to applicable law and to any rights of investors under a future shareholders' agreement.

3.3 Each Founder shall: (a) act in good faith and in the best interests of the Company; (b) comply with the duties of directors under the Companies Act, 2013 (including disclosure of interests); (c) comply with all lawful decisions of the Board; and (d) promptly disclose to the other Founders any matter that may materially affect the Company, the Business or the Founder's ability to perform their role.

3.4 The roles in Schedule 1 may be changed only by a decision of the Board taken in accordance with Clause 13, with the consent of the affected Founder (not to be unreasonably withheld where the change is in the interests of the Company).

## 4. Time Commitment and Exclusivity

4.1 Each Founder shall devote substantially the whole of their working time, attention and skill to the Business, and in any event not less than {{minimum_hours_per_week}} hours per week, save for periods of leave agreed by the Board or periods of illness or incapacity.

4.2 A Founder shall not, without the prior written consent of the other Founders, hold any employment, consultancy, directorship or other engagement with any other person, other than: (a) passive investments of not more than 2% of the listed securities of any company; (b) unpaid roles with charitable, academic or community organisations that do not interfere with the Founder's duties; and (c) the engagements (if any) disclosed in Schedule 1.

4.3 Each Founder represents that they are not bound by any agreement (including any employment agreement, non-compete, non-solicitation or confidentiality undertaking) that would prevent or restrict them from performing their role or from assigning Intellectual Property under Clause 10, except as disclosed in Schedule 1.

## 5. Shareholding and Capital

5.1 The issued and paid-up equity share capital of the Company on the date of this Agreement, and the Shares held by each Founder, are as set out in Schedule 1. Each Founder confirms that the subscription amount for their Shares has been paid in full.

5.2 The Founders acknowledge that the Company may establish an employee stock option plan and reserve a pool of Shares for it, and may raise capital from investors, and that their shareholding percentages will be diluted proportionately by such issuances. Any issuance of Shares (other than under an approved employee stock option plan) shall require the approval set out in Clause 13.

5.3 Each Founder shall hold their Shares in dematerialised form if required by applicable law or by the Board, and shall provide all instructions and documents reasonably required by the Company for that purpose.

> **Drafting note:** Private companies other than small companies are required to issue and hold securities in dematerialised form under the Companies (Prospectus and Allotment of Securities) Rules, 2014, as amended. Check whether the Company is a small company and the current compliance deadline [verify]; in demat form, leaver transfers in Clause 8 will be effected through delivery instruction slips rather than physical share transfer forms (Form SH-4).

## 6. Founder Vesting

6.1 All Shares held by a Founder on the date of this Agreement, and any Shares later issued to a Founder in respect of them, are subject to vesting under this Clause 6. Vesting is implemented by way of the transfer obligation in Clauses 7 and 8 (commonly called reverse vesting): each Founder is and remains the full legal and beneficial owner of all of their Shares, with full voting and dividend rights, but Shares that have not vested are liable to be transferred under Clause 8 if the Founder becomes a Leaving Founder.

6.2 Subject to Clause 6.3 and Clause 9, a Founder's Shares shall vest over a period of {{vesting_period_months}} months from the Vesting Commencement Date as follows:

(a) no Shares shall vest before the expiry of {{cliff_months}} months from the Vesting Commencement Date (the **"Cliff"**);

(b) on the expiry of the Cliff, the proportion of the Founder's Shares equal to the number of months in the Cliff divided by {{vesting_period_months}} shall vest; and

(c) thereafter, an equal proportion of the Founder's Shares shall vest at the end of each completed calendar month, so that all of the Founder's Shares have vested at the end of {{vesting_period_months}} months from the Vesting Commencement Date.

6.3 Vesting under Clause 6.2 is conditional on the Founder continuing to be a director, employee or full-time service provider of the Company on each vesting date. Vesting stops on the Leaving Date.

6.4 Shares that have vested under this Clause 6 are **"Vested Shares"**, and Shares that have not vested are **"Unvested Shares"**. Where the calculation produces a fraction, the number of Vested Shares shall be rounded down to the nearest whole Share.

6.5 A Founder shall not Transfer any Unvested Shares, other than under Clause 8 or with the prior written consent of all other Founders.

> **Drafting note:** The recommended default is a four-year (48-month) vesting period with a one-year (12-month) cliff and monthly vesting thereafter. To give credit for time already served, set the Vesting Commencement Date at the date the founders began working full-time on the Business (which may be before incorporation and before this Agreement); a founder who has served more than the cliff on signing will then have a proportion of Vested Shares from day one. Quarterly vesting or a shorter period are legitimate alternatives. Keep the vesting arithmetic in Clause 6.2 consistent with any equivalent provision inserted in the Articles. Institutional investors will usually re-impose or reset founder vesting at the first priced round; this Agreement will then be superseded to that extent by the shareholders' agreement.

## 7. Good Leaver and Bad Leaver

7.1 A Leaving Founder is a **"Good Leaver"** if the Leaving Date occurs because of:

(a) the Founder's death or permanent incapacity (meaning a physical or mental condition that, in the reasonable opinion of a medical practitioner appointed by the Board, prevents the Founder from performing their role for a continuous period of more than six months);

(b) the removal of the Founder as a director or termination of the Founder's employment or engagement by the Company other than for Cause;

(c) the Founder's resignation after the expiry of the Cliff by giving not less than three months' written notice; or

(d) any other circumstance which the Board, with the approval of the Remaining Founders, determines in writing to be a Good Leaver circumstance.

7.2 A Leaving Founder is a **"Bad Leaver"** if they are not a Good Leaver, including where the Leaving Date occurs because of: (a) removal, dismissal or termination for Cause; (b) the Founder's resignation before the expiry of the Cliff; or (c) the Founder's resignation without giving the notice required by Clause 7.1(c).

7.3 Consequences for a Good Leaver:

(a) the Good Leaver shall retain all of their Vested Shares; and

(b) the Remaining Founders and/or the Nominee shall have the option (but not the obligation) to acquire all or any of the Good Leaver's Unvested Shares under Clause 8 at a price per Share equal to the face value of the Share.

7.4 Consequences for a Bad Leaver:

(a) the Remaining Founders and/or the Nominee shall have the option (but not the obligation) to acquire all or any of the Bad Leaver's Unvested Shares under Clause 8 at a price per Share equal to the face value of the Share; and

(b) [OPTION A: the Bad Leaver shall retain their Vested Shares. / OPTION B: the Remaining Founders and/or the Nominee shall also have the option to acquire all or any of the Bad Leaver's Vested Shares under Clause 8 at a price per Share equal to the lower of the face value of the Share and the Fair Market Value of the Share.]

7.5 On the death or permanent incapacity of a Founder, [OPTION A: no further Shares shall vest / OPTION B: 100% of that Founder's Unvested Shares shall immediately vest], and the Founder's Vested Shares shall pass to their legal heirs or nominees, who shall be bound by Clause 15 as if they were Founders.

7.6 Each Party agrees that the prices in Clauses 7.3 and 7.4 are a genuine pre-estimate of the value to the Company of the Leaving Founder's unperformed future contribution and reflect that the Shares were subscribed at face value in anticipation of that contribution, and are not a penalty.

> **Drafting note:** Courts may scrutinise forfeiture-type provisions under s.74 of the Indian Contract Act, 1872 (compensation for breach) and as an unreasonable restriction on the transfer of property. OPTION A in Clause 7.4(b) is the safer and more common choice; OPTION B (taking back vested shares from a bad leaver at the lower of face value and fair market value) is more aggressive and more likely to be challenged, especially where "Cause" is disputed. Recording the commercial rationale (Clause 7.6) helps but does not guarantee enforceability.

## 8. Transfer Mechanics for Leaver Shares

8.1 **Call option.** Within {{call_option_period_days}} days after a Leaving Date, the Board (acting without the vote of the Leaving Founder) may, on behalf of the Remaining Founders and/or the Nominee, serve a written notice (a **"Call Notice"**) on the Leaving Founder specifying the number of Shares to be acquired, the transferees and the price determined under Clause 7.

8.2 **Allocation.** Unless the Remaining Founders agree otherwise, Shares subject to a Call Notice shall be allocated among the Remaining Founders in proportion to their respective shareholdings, and any Shares not taken up by them may be allocated to the Nominee.

8.3 **Completion.** Within {{completion_days}} days after a Call Notice, the Leaving Founder shall transfer the specified Shares free from all Encumbrances to the transferees against payment of the price, and shall deliver duly executed instruments of transfer (or delivery instruction slips for dematerialised Shares), the relevant share certificates (if any) and any other documents required to register the transfer. The price may be paid by bank transfer to the Leaving Founder's account last notified to the Company, and payment into that account is a good discharge.

8.4 **Default.** If a Leaving Founder fails to complete a transfer under Clause 8.3:

(a) the Leaving Founder irrevocably authorises any director of the Company (other than the Leaving Founder) to execute, complete and deliver the instruments of transfer and other documents on the Leaving Founder's behalf, this authority being given by way of security for the performance of the Leaving Founder's obligations and coupled with an interest;

(b) the Company may receive the price on trust for the Leaving Founder (without interest) and its receipt shall be a good discharge to the transferees;

(c) the Company shall, subject to applicable law, register the transferees as holders of the Shares; and

(d) the Parties acknowledge that the Shares of the Company are not readily available in the market, that damages would not be an adequate remedy, and that the transferees and the Company shall be entitled to specific performance of this Clause 8 under the Specific Relief Act, 1963 (under which, following its amendment in 2018, specific performance is the general rule rather than a discretionary exception), in addition to any other remedy.

8.5 **Pending transfer.** From the Leaving Date until the transfer of Shares subject to a Call Notice is completed or the Call Notice lapses, the Leaving Founder shall not exercise voting rights attached to the Unvested Shares except in accordance with the directions of the Board, and shall not Transfer any Shares.

8.6 **Taxes and costs.** Each transferor and transferee shall bear their own taxes arising from a transfer under this Clause 8. Stamp duty on the instruments of transfer shall be borne by the transferee.

> **Drafting note:** Why a transfer to the remaining founders or a nominee, not a buyback? A buyback by the Company under s.68 of the Companies Act, 2013 is usually impractical for an early-stage company: it can be funded only from free reserves, securities premium or the proceeds of a different issue, is capped by reference to paid-up capital and free reserves, needs shareholder approval above a threshold, requires a declaration of solvency, is limited to one buyback in any 12-month period and attracts its own tax treatment. Most startups have accumulated losses and no free reserves. A capital reduction under s.66 requires a Tribunal process. Transfer to the remaining founders or a Board-designated nominee (such as an ESOP trust) avoids these constraints.

> **Drafting note:** Tax: a transfer of unlisted shares at face value when the Fair Market Value is higher can give rise to deemed income for the transferee (on the shortfall) and a deemed sale consideration for the transferor under the Income-tax Act, 2025. Obtain a valuation and tax advice before each leaver transfer. The authority in Clause 8.4(a) operates as a contractual authority; a separate power of attorney is in the First Schedule to the Information Technology Act, 2000, cannot be e-signed and may need stamping and notarisation under state law if you choose to use one.

## 9. Acceleration on Change of Control

9.1 If a Change of Control is completed while a Founder remains a director, employee or full-time service provider of the Company, then [OPTION A (single trigger): {{acceleration_percentage}}% of that Founder's Unvested Shares shall vest immediately before completion of the Change of Control. / OPTION B (double trigger): if, within 12 months after completion of the Change of Control, that Founder's employment or engagement is terminated other than for Cause, or the Founder resigns because of a material reduction in their role, remuneration or location, {{acceleration_percentage}}% of that Founder's then Unvested Shares shall vest immediately before the Leaving Date.]

9.2 Any Unvested Shares that do not accelerate under Clause 9.1 shall continue to vest in accordance with Clause 6, or be treated as the acquirer and the Founders may agree in writing.

> **Drafting note:** Double-trigger acceleration is more acceptable to acquirers and investors because it keeps founders incentivised to stay after an acquisition. Single-trigger full acceleration often reduces the price an acquirer will pay.

## 10. Intellectual Property

10.1 **Assignment.** Each Founder hereby assigns to the Company, absolutely, for the full term of protection (including all renewals and extensions) and throughout the world, all right, title and interest in and to all Intellectual Property that the Founder has created, conceived, developed or reduced to practice, alone or jointly, at any time before or after the date of this Agreement, in connection with the Business or the Company, including all source code, designs, documentation, product concepts, brand names, domain names, business plans and customer lists (**"Company IP"**), excluding only the Intellectual Property listed against that Founder's name in Schedule 3 (**"Excluded IP"**).

10.2 **Scope of assignment.** The assignment in Clause 10.1 includes all rights to reproduce, adapt, translate, publish, communicate to the public, distribute, sell, rent, license, commercialise and otherwise exploit the Company IP in all media and formats, whether now known or developed in future, and the right to sue for and retain damages for past, present and future infringement. Each Founder acknowledges that the consideration for this assignment is the issue of Shares to them and the mutual promises in this Agreement, and that the assignment shall not lapse under section 19(4) of the Copyright Act, 1957 by reason of the Company not exercising any rights within any period.

10.3 **Future works.** To the extent any Company IP comes into existence after the date of this Agreement, the assignment in Clause 10.1 shall take effect as a present assignment of future rights, and to the extent that is not effective under applicable law, the Founder shall assign such Company IP to the Company promptly upon its creation, free of charge.

10.4 **Moral rights.** To the extent permitted by applicable law, each Founder waives, and undertakes not to assert, any moral rights (including under section 57 of the Copyright Act, 1957) in the Company IP against the Company, its successors, licensees and assigns.

10.5 **Excluded IP.** If a Founder incorporates any Excluded IP into any product, service or process of the Company, that Founder hereby grants the Company a non-exclusive, perpetual, irrevocable, worldwide, royalty-free, transferable and sub-licensable licence to use, modify and commercialise that Excluded IP as part of the Company's products, services and processes.

10.6 **Further assurance.** Each Founder shall, during and after their involvement with the Company, execute all documents and do all acts reasonably requested by the Company (at the Company's cost) to perfect, register, maintain or enforce the Company's rights in the Company IP, including executing confirmatory assignment deeds, and shall disclose promptly to the Company all Company IP.

10.7 **Domain names and accounts.** Each Founder shall transfer to the Company, or hold on trust for the Company, all domain names, social media handles, code repositories, cloud accounts and app store accounts used for the Business that are registered in their personal name.

> **Drafting note:** Section 17 of the Copyright Act, 1957 (employer is first owner of works made under a contract of service) will not cover work done before a founder became an employee, or work by a founder who is a director but not an employee, so the express assignment in Clause 10 is essential. Section 19 requires an assignment to be in writing and to identify the work, rights, duration and territory; failing that, duration defaults to five years and territory to India. Patentable inventions are not owned by the Company by statute and must be assigned. A separate founder IP assignment deed (see the ip-assignment-agreement template) is often requested by investors.

## 11. Confidentiality

11.1 **"Confidential Information"** means all information (in any form) relating to the Company, the Business, its products, technology, source code, finances, customers, suppliers, employees, investors and plans, and the terms of this Agreement, other than information that: (a) is or becomes publicly available other than through a breach of this Agreement; (b) was lawfully in the receiving Founder's possession free of any obligation of confidence before it was obtained in connection with the Company (and is not Company IP); or (c) is required to be disclosed by law, regulation or order of a court or authority, to the extent of that requirement and after giving the Company prompt notice where lawful.

11.2 Each Founder shall, during their involvement with the Company and at all times thereafter: (a) keep the Confidential Information strictly confidential; (b) use it only for the purposes of the Business; and (c) not disclose it to any person other than directors, employees, advisers and prospective investors of the Company who need to know it and are bound by obligations of confidentiality.

11.3 On their Leaving Date, a Leaving Founder shall return or (at the Company's option) destroy all documents, devices and materials containing Confidential Information, and shall confirm in writing that they have done so.

## 12. Non-Compete and Non-Solicitation

12.1 **During involvement.** While a Founder is a director, employee, service provider or shareholder holding Unvested Shares, the Founder shall not, directly or indirectly, whether as principal, agent, employee, consultant, director, partner, shareholder or otherwise: (a) carry on, be engaged in or be interested in any business that competes with the Business; or (b) solicit or entice away any customer, supplier, employee or consultant of the Company.

12.2 **After leaving.** For {{non_solicit_months}} months after the Leaving Date, the Leaving Founder shall not, directly or indirectly, solicit or induce any employee or consultant of the Company with whom the Founder had material dealings in the 12 months before the Leaving Date to leave the Company, and shall not use the Confidential Information to solicit any customer of the Company.

12.3 Nothing in this Clause 12 prevents a Leaving Founder from carrying on any lawful profession, trade or business after the Leaving Date, provided they comply with Clause 11 and Clause 12.2.

> **Drafting note:** Section 27 of the Indian Contract Act, 1872 makes void any agreement in restraint of trade, save for the sale-of-goodwill exception. Indian courts have upheld restraints that operate during the term of an engagement (Niranjan Shankar Golikari v. Century Spinning, 1967) but consistently refuse to enforce post-termination non-competes (for example, Percept D'Mark v. Zaheer Khan, 2006). A founder who sells shares to an acquirer together with goodwill may be bound by a reasonable post-exit non-compete under the s.27 exception; that belongs in the sale agreement, not here. Post-exit non-solicitation of employees and customers is enforced inconsistently; keep it short and tied to use of confidential information.

## 13. Decision-Making

13.1 **Board.** The Business shall be managed by the Board in accordance with the Companies Act, 2013 and the Articles. Until the Company admits external investors with board rights, the Board shall consist of the Founders. Board meetings shall be held at least once every calendar quarter, and decisions may be taken by circular resolution under section 175 of the Companies Act, 2013.

13.2 **Day-to-day decisions.** Each Founder may take day-to-day operational decisions within their area of responsibility set out in Schedule 1, within the annual budget approved by the Board.

13.3 **Ordinary decisions.** Other decisions of the Board shall be taken by a simple majority of the directors present and voting, subject to Clause 13.4.

13.4 **Reserved Matters.** The Company shall not take, and the Founders shall procure that the Company does not take, any of the actions listed in Schedule 2 (**"Reserved Matters"**) without the prior written consent of Founders holding at least 75% of the Shares held by all Founders then in office, or, where there are only two Founders in office, both Founders.

13.5 **Information.** Each Founder shall have full access to the books, accounts, bank statements, code repositories and records of the Company.

## 14. Deadlock

14.1 A **"Deadlock"** arises if a Reserved Matter or a matter requiring Board approval is proposed at two consecutive duly convened Board meetings (or by circular resolution twice) held not less than seven days apart and is neither approved nor rejected because of a disagreement between the Founders.

14.2 On a Deadlock, the Founders shall first meet in person (or by video conference) and negotiate in good faith for {{deadlock_cooling_days}} days.

14.3 If the Deadlock is not resolved under Clause 14.2, the Founders shall refer the matter to mediation by a mediator agreed by them (or, failing agreement within seven days, appointed in accordance with the Mediation Act, 2023), to be concluded within 30 days of the reference.

14.4 [OPTION A (status quo): If the Deadlock is still not resolved under Clause 14.3, the proposal shall be deemed rejected and the status quo shall continue, provided that no Founder shall use a Deadlock to prevent the Company from meeting its statutory obligations or from paying its debts as they fall due. / OPTION B (buy-sell): If the Deadlock is still not resolved under Clause 14.3 and it concerns a Fundamental Deadlock Matter, Clause 14.5 shall apply.]

14.5 **Buy-sell mechanism.** This Clause 14.5 applies only if OPTION B in Clause 14.4 is selected.

(a) **"Fundamental Deadlock Matter"** means a Deadlock concerning the annual budget, a fundraising, a Change of Control, or the appointment or removal of a Founder from an executive role.

(b) **Shotgun.** [OPTION B1 (shotgun): Any Founder (the **"Initiating Founder"**) may serve a written notice (a **"Buy-Sell Notice"**) on the other Founder(s) (the **"Recipient Founders"**) specifying a single cash price per Share at which the Initiating Founder is willing either to buy all the Shares held by the Recipient Founders or to sell all its own Shares to the Recipient Founders. Within 45 days of receipt, the Recipient Founders shall elect by written notice either to sell all their Shares to the Initiating Founder, or to buy all the Initiating Founder's Shares, at that price. If the Recipient Founders do not make an election within that period, they shall be deemed to have elected to sell. / OPTION B2 (Texas shoot-out): Any Founder may serve a written notice on the other Founder(s) offering to buy all of their Shares at a stated cash price per Share. The recipient may, within 30 days, serve a counter-notice offering to buy all of the offeror's Shares at a higher price. The Founders shall then submit sealed bids to an independent person appointed by the Board within a further 15 days, and the Founder submitting the highest bid per Share shall buy, and the other Founder shall sell, all the other Founder's Shares at that price.]

(c) **Completion.** Completion of any sale under this Clause 14.5 shall take place within 90 days of the final election or bid, against payment of the full price in cash, free from all Encumbrances, and Clauses 8.3 and 8.4 shall apply to the selling Founder with any necessary changes. Unvested Shares held by the selling Founder shall be treated as Vested Shares for this purpose.

(d) **Regulatory conditions.** Completion is conditional on compliance with applicable law, including the Foreign Exchange Management Act, 1999 and the rules under it where any Founder is a non-resident, and on any third-party consents required under the Company's contracts with investors or lenders.

(e) **No abuse.** No Founder may serve a Buy-Sell Notice while it is in material breach of this Agreement or within 12 months after the Vesting Commencement Date.

> **Drafting note:** Deadlock tools escalate in severity: good-faith escalation between the Founders, then mediation, then either the status quo (OPTION A, safest for an early-stage company) or a buy-sell exit (OPTION B). A shotgun (OPTION B1) is fair only where the Founders have comparable access to funds; otherwise the wealthier Founder can name a low price knowing the other cannot buy. A Texas shoot-out (OPTION B2) tends to produce a higher price but takes longer. Either mechanism must be written into the Articles to bind the Company (see the drafting note to Clause 2), requires a valuation and compliance with FEMA pricing guidelines where a non-resident is involved, and may have tax consequences for both Founders. Some founders also add a casting vote for the chief executive on operational matters only. Mediation may be conducted under the Mediation Act, 2023; verify which provisions are in force [verify].

## 15. Transfer Restrictions

15.1 **Lock-in.** No Founder shall Transfer any Shares (whether Vested or Unvested) for {{lock_in_months}} months from the date of this Agreement, other than: (a) under Clause 8; (b) under Clause 15.4 (Drag-Along) or Clause 15.3 (Tag-Along); (c) to the legal heirs of a deceased Founder; or (d) with the prior written consent of all other Founders.

15.2 **Right of first refusal.** After the lock-in period, a Founder who wishes to Transfer any Vested Shares (the **"Selling Founder"**) shall first offer them in writing to the other Founders, specifying the number of Shares, the price and the other terms (the **"ROFR Notice"**). The other Founders may, within {{rofr_offer_period_days}} days of the ROFR Notice, accept the offer in respect of all (and not some only) of those Shares, in proportion to their shareholdings or as they agree among themselves. If the offer is not accepted, the Selling Founder may, within 90 days thereafter, Transfer those Shares to a third party at a price not lower than, and on terms no more favourable to the purchaser than, those in the ROFR Notice, provided that the purchaser first executes a deed of adherence in the form in Schedule 4.

15.3 **Tag-along.** If one or more Founders propose to Transfer Shares that would result in a Change of Control, the other Founders may require, as a condition of that Transfer, that the purchaser also acquires the same proportion of their Shares, at the same price per Share and on the same terms.

15.4 **Drag-along.** If Founders holding at least {{drag_threshold_percentage}}% of the Shares held by all Founders (the **"Dragging Founders"**) accept a bona fide offer from an unrelated third party to acquire 100% of the Shares on arm's-length terms, the Dragging Founders may require the other Founders to Transfer all of their Shares to that third party at the same price per Share and on the same terms, provided that the other Founders shall not be required to give any representation or warranty other than as to title to their Shares and capacity, or to accept any liability exceeding the consideration they receive.

15.5 **Invalid transfers.** Any Transfer in breach of this Agreement or the Articles shall be void, and the Company shall not register it.

> **Drafting note:** Drag-along rights are enforceable against shareholders of a private company only if contained in the Articles (see the drafting note to Clause 2). Where a non-resident shareholder is dragged, the pricing guidelines under the Foreign Exchange Management (Non-debt Instruments) Rules, 2019 apply. Once investors come in, these provisions will be replaced by the investor shareholders' agreement.

## 16. Remuneration and Expenses

16.1 Each Founder shall be entitled to such remuneration (if any) as may be approved by {{founder_salary_approval}}, which shall be documented in a written employment or service agreement. Remuneration payable to a Founder who is a managing director or whole-time director shall comply with the Companies Act, 2013.

16.2 The Company shall reimburse each Founder for reasonable, documented out-of-pocket expenses properly incurred in the performance of their role, in accordance with the Company's expense policy.

16.3 Any loan by a Founder to the Company shall be recorded in writing and approved by the Board, and shall comply with the Companies (Acceptance of Deposits) Rules, 2014 (under which amounts received from a director who furnishes the required declaration are generally excluded from "deposits").

## 17. Representations and Warranties

17.1 Each Party represents and warrants to the others that: (a) it has full power and capacity to enter into and perform this Agreement; (b) this Agreement constitutes its legal, valid and binding obligations; and (c) entering into and performing this Agreement does not breach any law, order or agreement binding on it.

17.2 Each Founder further represents and warrants that: (a) they are the sole legal and beneficial owner of their Shares, free from Encumbrances; (b) they have not been convicted of any offence involving fraud or dishonesty and are not disqualified from being a director under the Companies Act, 2013; and (c) the information about them in Schedule 1 and Schedule 3 is true, complete and accurate.

## 18. Term and Termination

18.1 This Agreement shall continue in force until the earliest of: (a) the written agreement of all Parties; (b) the Company being wound up or dissolved; (c) the listing of the Shares on a recognised stock exchange; or (d) the date on which only one Founder holds Shares.

18.2 If a Founder ceases to hold any Shares, this Agreement shall terminate as regards that Founder only.

18.3 Termination shall not affect accrued rights and obligations. Clauses 10 (Intellectual Property), 11 (Confidentiality), 12.2 (Non-Solicitation), 19 (Dispute Resolution) and 20 (General) shall survive termination.

18.4 If the Company enters into a shareholders' agreement with investors that deals with any matter covered by this Agreement, that shareholders' agreement shall prevail to the extent of any inconsistency.

## 19. Dispute Resolution

19.1 **Governing law.** This Agreement is governed by the laws of India.

19.2 **Negotiation.** The Parties shall first attempt to resolve any dispute, controversy or claim arising out of or in connection with this Agreement (a **"Dispute"**) by good-faith negotiation between the Founders for 30 days after written notice of the Dispute.

19.3 **Arbitration.** Any Dispute not resolved under Clause 19.2 shall be referred to and finally resolved by arbitration under the Arbitration and Conciliation Act, 1996 (the **"Arbitration Act"**).

19.4 **Tribunal.** The arbitral tribunal shall consist of a sole arbitrator jointly appointed by the parties to the Dispute. If they fail to agree on the arbitrator within 30 days after a written request by any of them, the arbitrator shall be appointed in accordance with section 11 of the Arbitration Act. No Party shall have the right to appoint the sole arbitrator unilaterally, or to prepare a panel from which the other Party must choose.

19.5 **Seat, venue and language.** The seat (juridical place) of arbitration shall be {{arbitration_seat}}. The venue of hearings shall be {{arbitration_venue}}, or such other place (including by video conference) as the tribunal may decide after consulting the parties, without changing the seat. The language of the arbitration shall be English.

19.6 **Award.** The award shall be in writing, reasoned, final and binding on the parties to the Dispute, who undertake to carry it out without delay. The tribunal may award costs.

19.7 **Courts.** Subject to Clauses 19.3 to 19.6, the courts at {{arbitration_seat}} shall have exclusive supervisory jurisdiction over the arbitration, including applications under sections 9, 11, 27, 29A, 34 and 37 of the Arbitration Act.

19.8 **Interim relief.** Nothing in this Clause 19 prevents a Party from seeking urgent interim or injunctive relief from the courts referred to in Clause 19.7 or from the arbitral tribunal under section 17 of the Arbitration Act.

19.9 **Continued performance.** Pending resolution of a Dispute, the Parties shall continue to perform their obligations under this Agreement, except those directly in dispute.

> **Drafting note:** State the seat and the venue separately: the seat fixes the supervisory courts and the curial law; the venue is merely where hearings take place (confusion between the two caused the litigation in BGS SGS Soma JV v. NHPC, 2019). A clause allowing one party alone to appoint the sole arbitrator, or to curate a panel for the other to pick from, is invalid: Perkins Eastman Architects DPC v. HSCC (India) Ltd (SC, 2019) and Central Organisation for Railway Electrification v. ECI-SPIC-SMO-MCML (JV) (Constitution Bench, SC, 2024) [verify citation]. For institutional arbitration, name an institution such as the Mumbai Centre for International Arbitration (MCIA), the Delhi International Arbitration Centre (DIAC) or the India International Arbitration Centre (IIAC), and adopt its rules for appointment. Claims of oppression and mismanagement under ss.241–242 of the Companies Act, 2013 fall within the exclusive jurisdiction of the National Company Law Tribunal and may be held non-arbitrable to that extent (see Vidya Drolia v. Durga Trading Corporation, SC, 2020, on arbitrability); a founder dispute can therefore end up in two forums. If the Parties prefer courts to arbitration, replace this Clause 19 with exclusive jurisdiction of the courts at a named city and note that a commercial dispute of specified value must first go through pre-institution mediation under s.12A of the Commercial Courts Act, 2015 unless urgent interim relief is sought.

## 20. General

20.1 **Notices.** Notices under this Agreement shall be in writing and delivered by hand, by registered post or courier, or by email, to the addresses set out above or the following email addresses (or as notified in writing): the Company at {{company_email}}; Founder 1 at {{founder_1_email}}; Founder 2 at {{founder_2_email}}. A notice sent by email is deemed received when sent, unless the sender receives an automated message that it was not delivered.

20.2 **Stamp duty.** This Agreement shall be stamped in accordance with the stamp law applicable at the place of its execution before or at the time of execution, and the stamp duty (and any penalty for late stamping) shall be borne by {{stamp_duty_payer}}. If this Agreement is executed in, or later brought into, a State that levies additional duty, the Party seeking to rely on it there shall pay the differential duty, without prejudice to its right to recover it from the Party bearing duty under this Clause.

> **Drafting note:** An unstamped or insufficiently stamped instrument is not void, but it is inadmissible in evidence and cannot be acted upon until the deficit duty and penalty are paid; the Supreme Court's seven-judge bench in In re: Interplay between Arbitration Agreements under the Arbitration and Conciliation Act, 1996 and the Indian Stamp Act, 1899 (2023) held that an arbitration agreement in such an instrument is still enforceable and the stamping objection is for the tribunal. Stamp before or at execution, preferably by e-stamping, to avoid delay and penalty at the point of enforcement.

20.3 **Entire agreement.** This Agreement, together with the Articles and the documents referred to in it, constitutes the entire agreement between the Parties on its subject matter and supersedes all prior discussions, term sheets, emails and understandings. Each Party confirms that it has not relied on any statement or representation not expressly set out in this Agreement, provided that nothing in this Clause limits liability for fraud.

20.4 **Amendment and waiver.** No amendment of this Agreement is effective unless in writing and signed by all Parties. No failure or delay in exercising a right is a waiver of it.

20.5 **Severability.** If any provision of this Agreement is held invalid or unenforceable, it shall be enforced to the maximum extent permissible and the remaining provisions shall continue in force.

20.6 **Assignment and adherence.** No Party may assign its rights or obligations under this Agreement without the prior written consent of the other Parties. Any person (other than a Founder) who acquires Shares from a Founder under this Agreement, including the Nominee and the legal heirs of a deceased Founder, shall first execute a deed of adherence substantially in the form in Schedule 4, and the Company shall not register any transfer to such a person until it has done so.

20.7 **No partnership.** Nothing in this Agreement creates a partnership or agency between the Founders.

20.8 **Further assurance.** Each Party shall execute all documents, pass all resolutions and do all acts reasonably required to give full effect to this Agreement.

20.9 **Costs.** Each Party shall bear its own costs of negotiating and entering into this Agreement.

20.10 **Counterparts and electronic signature.** This Agreement may be executed in any number of counterparts, each of which shall be deemed an original and all of which together constitute one instrument. Each Party may execute this Agreement by an electronic signature or electronic authentication technique recognised under sections 3A and 5 of the Information Technology Act, 2000, and agrees that the electronic record so created, together with the audit trail generated by the signing platform, may be produced in evidence in accordance with section 63 of the Bharatiya Sakshya Adhiniyam, 2023.

20.11 **Independent advice.** Each Founder confirms that they have had the opportunity to take independent legal and tax advice before signing this Agreement.

20.12 **Remedies cumulative.** The rights and remedies under this Agreement are cumulative and in addition to any rights or remedies provided by law.

20.13 **Third parties.** Except for the Nominee's right to acquire Shares under Clause 8, a person who is not a Party has no right to enforce any term of this Agreement.

20.14 **Conflict with law.** If any provision of this Agreement is inconsistent with the Companies Act, 2013 or any other applicable law, the Parties shall give effect to it to the maximum extent permitted and shall negotiate in good faith a lawful provision that achieves, as nearly as possible, the same commercial effect.

> **Drafting note:** Retain the e-signature platform's audit trail and certificate of completion; to prove an electronic record in court, a certificate under s.63 of the Bharatiya Sakshya Adhiniyam, 2023 (which replaced s.65B of the Indian Evidence Act, 1872) will be required. A power of attorney cannot be executed electronically (First Schedule to the Information Technology Act, 2000).

## EXECUTION

IN WITNESS WHEREOF, the Parties have executed this Agreement on the date first written above.

| For and on behalf of the Company | Founder 1 | Founder 2 |
|---|---|---|
| **{{company_name}}** | | |
| Signature: ____________________ | Signature: ____________________ | Signature: ____________________ |
| Name: {{company_signatory_name}} | Name: {{founder_1_name}} | Name: {{founder_2_name}} |
| Title: {{company_signatory_title}} | | |
| Date: | Date: | Date: |

> **Drafting note:** The Company's signatory should be authorised by a Board resolution approving this Agreement, passed with the Founders disclosing their interest. Where a Founder is the only available signatory for the Company, record the Board approval carefully. Witnesses are not legally required for a contract but are commonly added in India; add two witness lines if desired.

## Schedule 1 – Founders, Roles and Shareholding

**Part A – Founder roles**

| Founder | Title and role | Areas of day-to-day authority | Disclosed outside engagements and restrictive covenants |
|---|---|---|---|
| {{founder_1_name}} | {{founder_1_role}} | As stated in role | None, unless stated |
| {{founder_2_name}} | {{founder_2_role}} | As stated in role | None, unless stated |

**Part B – Shareholding on the date of this Agreement**

| Shareholder | Number of Shares | Percentage | Subject to vesting |
|---|---|---|---|
| {{founder_1_name}} | {{founder_1_shares}} | {{founder_1_percentage}} | Yes, all |
| {{founder_2_name}} | {{founder_2_shares}} | {{founder_2_percentage}} | Yes, all |
| **Total** | **{{total_shares}}** | **100%** | |

## Schedule 2 – Reserved Matters

1. Any amendment to the memorandum or articles of association of the Company.
2. Any issue, allotment, buyback, redemption, reclassification or reduction of share capital or securities convertible into shares, other than grants under an employee stock option plan approved under this Schedule.
3. The adoption or amendment of any employee stock option plan, or any change to the size of the option pool.
4. Any fundraising, including the execution of a term sheet with an investor, and any borrowing above {{reserved_matter_spend_threshold}}.
5. Any capital or revenue expenditure, or any contract, outside the approved annual budget and exceeding {{reserved_matter_spend_threshold}}.
6. Approval of the annual budget and business plan.
7. Any merger, amalgamation, demerger, scheme of arrangement, Change of Control or sale of all or a substantial part of the Company's undertaking or assets.
8. The acquisition of shares in, or the incorporation of, any other company or the creation of any subsidiary or joint venture.
9. The sale, assignment, exclusive licence or Encumbrance of any material Company IP.
10. The appointment or removal of any director, key managerial personnel or statutory auditor, and the remuneration of any Founder.
11. Any transaction with a Founder or a Founder's Affiliate (a related party transaction).
12. Any change to the nature of the Business or the commencement of a new line of business.
13. The commencement or settlement of any litigation or arbitration with a value exceeding {{reserved_matter_spend_threshold}}.
14. The declaration of any dividend.
15. Any voluntary winding up, insolvency application or the appointment of an administrator or liquidator.

## Schedule 3 – Excluded IP

| Founder | Excluded IP (prior inventions, works or rights not assigned) |
|---|---|
| {{founder_1_name}} | {{founder_1_excluded_ip}} |
| {{founder_2_name}} | {{founder_2_excluded_ip}} |

> **Drafting note:** List only specific, identifiable pre-existing works (for example, a named open-source project or a pre-existing patent application). Vague entries such as "all my prior know-how" undermine the assignment in Clause 10 and will be flagged in investor due diligence.

## Schedule 4 – Form of Deed of Adherence

THIS DEED OF ADHERENCE is made on [date] by [name of new shareholder], [description and address] (the **"New Shareholder"**), in favour of the parties to the Founders' Agreement dated {{effective_date}} between {{company_name}}, {{founder_1_name}} and {{founder_2_name}} (the **"Founders' Agreement"**).

1. The New Shareholder confirms that it has been given and has read a copy of the Founders' Agreement and the Articles.

2. The New Shareholder proposes to acquire [number] equity Shares of the Company from [transferor] under Clause [8 / 15] of the Founders' Agreement.

3. With effect from the date on which it is registered as the holder of those Shares, the New Shareholder agrees with each party to the Founders' Agreement to observe and be bound by Clauses 11 (Confidentiality), 15 (Transfer Restrictions), 19 (Dispute Resolution) and 20 (General) of the Founders' Agreement as if it were a Founder [and, where the New Shareholder is a Founder's legal heir, by Clauses 6 to 8 in respect of any Unvested Shares].

4. The New Shareholder's address and email for notices are: [address and email].

5. This Deed is governed by the laws of India, and Clause 19 of the Founders' Agreement applies to any dispute arising from it.

Signed by the New Shareholder: ____________________

Name: ____________________

Accepted by the Company: ____________________ (authorised signatory)

> **Drafting note:** A deed of adherence is an instrument separately chargeable to stamp duty in most States (often as an agreement or deed not otherwise provided for); check the applicable State Stamp Act.
