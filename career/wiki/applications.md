---
type: applications-tracker
domain: career
status: active
completeness: empty
confidence: low
freshness: YYYY-MM-DD
last_updated: YYYY-MM-DD
---

# Job Application Tracker

## Purpose

This file tracks applications, follow-ups, role patterns, company responses, outcomes, and lessons.

It is not an archive. It is a decision tool.

The goal is to answer:
- Which roles are generating responses
- Which narrative angles are performing
- What is generating silence
- Which applications produced interviews or assessments
- Which rejection patterns are repeating
- Where positioning needs adjustment
- What the next application should do differently

## Status legend

Initial application statuses:

- planned
- drafted
- submitted
- follow-up due
- follow-up sent

Response and outcome statuses:

- response received
- rejected
- interview invited
- interview scheduled
- interview completed
- assessment requested
- assessment submitted
- offer
- withdrawn by candidate
- no response after follow up
- archived

## Tracking table

| Date | Company | Role | Market | Version used | Main angle used | Status | Follow-up date | Result | Notes |
|------|---------|------|--------|--------------|-----------------|--------|----------------|--------|-------|

---

## Response signal rules

Detailed rules live in:

career/wiki/response-signal-rules.md

Core rules:

- Generic rejection means weak signal.
- Specific rejection means useful signal.
- Interview invitation means strong positive signal.
- Assessment request means partial positive signal.
- Offer means confirmed positive signal.
- Silence after follow up means negative signal only after the follow up window has passed.
- Do not invent reasons for rejection.
- If the company gives no evidence, mark the likely cause as Unknown.

---

## Lessons learned log

<!-- Add a dated entry after every application cycle. Format defined in career/prompts/update-tracker.md. -->

<!-- Add response entries after company responses. Format defined in career/prompts/update-application-response.md. -->

---

## Pattern review section

<!-- Add an application pattern review after every 5 applications. Trigger is automatic when using the \tracker command with the update-tracker prompt. -->

<!-- Add a response pattern review only after at least 5 recorded outcomes. Applications are not outcomes. -->

### Current assumptions

[Fill in as you apply. Examples:]
- Primary best-fit target is [role type]
- Secondary route is [role type]
- Best-performing market so far: [market]

### Watch for evidence

- Are [primary role] applications generating responses or silence?
- Do [secondary role] applications respond better?
- Does one market respond differently from others?
- Is the problem targeting, messaging, or proof?
- Which roles generate interviews?
- Which roles generate assessment requests?
- Which rejection causes repeat?

---

## Follow-up templates

### Template 1: Short professional follow-up after silence

Subject: [Role title] application, [Your name]

Dear [Hiring Manager or Hiring Team],

I submitted my application for the [role title] position on [date] and wanted to follow up to confirm it was received.

I remain very interested in the opportunity and would welcome the chance to speak further. Please let me know if you need any additional information.

Kind regards,
[Full Name]

---

### Template 2: Follow-up with one reinforcing proof point

Subject: [Role title] application follow-up, [Your name]

Dear [Hiring Manager or Hiring Team],

Following my application for the [role title] position on [date], I wanted to add one relevant detail.

[One specific proof point directly relevant to a key requirement in the job description. 2 sentences maximum.]

I look forward to the possibility of discussing the role further.

Kind regards,
[Full Name]

---

## Tracker rules

### Rule 1

Every application records the main angle used. One sentence describing the positioning.

### Rule 2

If an application is tailored from the base CV, note exactly what was changed.

### Rule 3

If there is silence after follow-up, log the pattern. Silence is data only after the follow-up window has passed.

### Rule 4

Every 5 applications, trigger an application pattern review. Use the prompts/update-tracker.md prompt.

### Rule 5

Every response must be stored as raw evidence in career/raw-responses/{application-name}/YYYY-MM-DD-response.md before running \response.

### Rule 6

Every company response must generate a response-analysis.md file and a next-action.md file.

### Rule 7

Do not mark response patterns as confirmed before at least 5 outcomes exist.

### Rule 8

The tracker informs strategy. It does not override strong role evidence.
