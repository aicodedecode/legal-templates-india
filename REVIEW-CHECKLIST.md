# Advocate Review Checklist

This library ships drafts. A template earns the **Advocate reviewed** badge only after a
practising advocate completes this checklist for it.

- Reviewer names: _add the two advocates here_
- Review dates: _on sign-off_

## Per-template checklist

For each template in `catalog.json`:

- [ ] Read the full template against the current India Code text of every statute in its
      `governing_laws` frontmatter
- [ ] All statutorily required particulars present (for example the s.19(3) Copyright Act
      particulars for the IP assignment; the Rule 12 SCD conditions for the ESOP; the POSH Act
      Internal Committee composition for the POSH policy)
- [ ] No post-employment non-compete in employment or offer templates (s.27, Indian Contract Act)
- [ ] Signature block is eSign-ready (Aadhaar eSign / Class 3 DSC) with witness lines where customary
- [ ] Stamp duty note is correct: does execution on stamp paper or e-stamping apply, and under
      which state schedule
- [ ] Arbitration clause coherent: seat, venue, institutional rules
- [ ] Every `[verify]` tag inside the template resolved or converted into a plain-language caveat
- [ ] The summary shown on the site page is accurate

## Sign-off format

Append to the template frontmatter:

`review_status: reviewed` with a note `reviewed_by: <name>, <bar enrolment no.>, <date>`

and set `review_status: reviewed` for the template in `catalog.json`.
