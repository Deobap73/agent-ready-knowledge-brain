---
type: response-signal-rules
domain: career
status: active
created: 2026-05-07
confidence: high
---

# Response Signal Rules

## Purpose

This file defines how company responses are interpreted inside the career domain.

A submitted application is only an attempt.

A response is market evidence.

The tracker must record what happened after the CV was sent.

## Core rules

Generic rejection means weak signal.

Specific rejection means useful signal.

Interview invitation means strong positive signal.

Assessment request means partial positive signal.

Offer means confirmed positive signal.

Silence after follow up means negative signal only after the follow up window has passed.

## Signal strength

Low signal:

1. Generic rejection.
2. Automated message.
3. No reason given.
4. No evidence that the full profile was reviewed.

Medium signal:

1. Indirect clues.
2. Screening hints.
3. Clarification request.
4. Partial reason such as location, salary, timing, language, or fit.

High signal:

1. Interview invitation.
2. Assessment request.
3. Specific feedback.
4. Offer.
5. Concrete recruiter next step.

## Outcome categories

Use one primary category:

1. Title gap
2. Domain gap
3. Language gap
4. Seniority gap
5. Salary mismatch
6. Location mismatch
7. Work authorization issue
8. Tooling gap
9. Timing or vacancy closed
10. Strong positive traction
11. Weak positive traction
12. Unknown

If the response does not provide enough evidence, use Unknown.

Do not invent reasons.

## Tracker update rule

Every response must update:

1. Status
2. Result
3. Notes
4. Lessons learned log
5. Response analysis file
6. Next action file

The original tracker entry must not be erased.

The row should evolve.

## Pattern rule

Do not call a pattern confirmed before there are at least 5 recorded outcomes.

Applications are not outcomes.

Only these count as outcomes:

1. Rejection
2. Interview invitation
3. Assessment request
4. Offer
5. Withdrawal
6. No response after follow up window

## Future command rule

Before generating a new fit analysis, decision, CV, cover letter, or recruiter message, the agent must check response outcomes from similar applications.

Every response must become strategy.
