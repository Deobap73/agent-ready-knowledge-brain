# commands.md — personal

These commands standardise how agents operate in the personal domain.

Commands are workflow instructions for agents, not shell commands.

Privacy rules override all command behaviour.

## Agent Execution Model

Before executing any command:

1. Read `../CLAUDE.md` or `../AGENTS.md`, depending on agent context.
2. Read `AGENTS.md`.
3. Read `CLAUDE.md`.
4. Read this `commands.md`.
5. Read `index.md`.
6. Read the required input files listed in the command.

If required input is missing, stop and report it. Never guess.

After any write operation:

1. Show the proposed content for confirmation unless the user already explicitly approved saving.
2. Update only the allowed output files.
3. Update `index.md` if domain state changed.
4. Append a short note to `log.md`.
5. Run the relevant signal check when required.
6. Report changed files.

## Absolute privacy rule

No command may export diary, health, medical, relationship, or raw emotional content outside `personal/`.

Signals are pointer-only notifications. They are not content transfers.

---

## \journal {optional: date}

**Purpose:** Write or add to a diary entry.

**Input:**

- User-provided diary notes, reflection, or spoken summary
- Optional date. If no date is provided, use today's date
- Existing `wiki/diary/YYYY-MM-DD.md` if it exists

**Output:**

- New or appended `wiki/diary/YYYY-MM-DD.md`
- Optional pointer-only signal in `wiki/signals.md`
- Updated `log.md`

**Steps:**

1. Identify the date.
2. Check whether `wiki/diary/YYYY-MM-DD.md` already exists.
3. If it exists, append. Never overwrite.
4. Draft the entry in the user's language.
5. Show the draft for confirmation before saving.
6. After confirmation, save or append the diary entry.
7. Run the cross-domain signal check.
8. If a signal is detected, write only a pointer, not content.
9. Append to `log.md`.

**Entry format:**

```markdown
---
date: YYYY-MM-DD
mood: 1-5
energy: 1-5
---

## How I am

[Free writing. Reflective.]

## The day

[What happened. What I did. What is coming.]

## Notes

[Optional. Anything else.]
```

**Confirmation:**

- Always show the draft and wait for confirmation before saving.

---

## \track {metrics}

**Purpose:** Log health, energy, sleep, exercise, or baseline metrics from natural language.

**Input:**

- User-provided metrics in natural language
- Existing `wiki/health/log.md`
- `wiki/health/baselines.md` when relevant

**Input examples:**

- `energy 4, slept 7 hours quality 3, walked 40 minutes, 75kg`
- `energy 2, poor sleep, no exercise`

**Output:**

- New appended line in `wiki/health/log.md`
- Optional pointer-only signal in `wiki/signals.md`
- Updated `log.md`

**Steps:**

1. Parse the user's natural language metrics into the standard format.
2. Show the formatted line for confirmation.
3. After confirmation, append to `wiki/health/log.md`.
4. Never edit past health log entries.
5. Check whether a burnout or low-energy signal should be generated.
6. If a signal is generated, write only a pointer, never health details.
7. Append to `log.md`.

**Log format:**

```text
YYYY-MM-DD | energy: N/5 | sleep: Nh Nq/5 | exercise: type Nmin | weight: N.Nkg | notes: ...
```

**Confirmation:**

- Always show the parsed line and wait for confirmation before appending.

---

## \decide {description}

**Purpose:** Document a significant personal or career-adjacent decision.

**Input:**

- User-provided decision description
- Existing `wiki/decisions/` pages when relevant

**Output:**

- Updated decision page in `wiki/decisions/`
- Optional pointer-only signal in `wiki/signals.md` when career-adjacent
- Updated `index.md` if needed
- Updated `log.md`

**Steps:**

1. Ask whether the decision is personal or career-adjacent if unclear.
2. Ask what alternatives were considered if missing.
3. Ask what outcome is expected if missing.
4. Draft the structured decision entry.
5. Show the draft for confirmation before saving.
6. Save the decision after confirmation.
7. If career-adjacent, generate a pointer-only signal.
8. Update `index.md` when needed.
9. Append to `log.md`.

**Decision format:**

```markdown
## YYYY-MM-DD — [Decision title]

**Context:**
**Alternatives considered:**
**Decision:**
**Reasoning:**
**Expected outcome:**
**Review date:** YYYY-MM-DD
**Result:** [filled in during \review]
```

**Confirmation:**

- Always show the decision draft and wait for confirmation before saving.

---

## \review {week/month/quarter}

**Purpose:** Conduct a structured periodic review.

**Input:**

- Relevant diary entries for the period
- Relevant health log entries for the period
- Relevant decisions logged during the period
- Existing reviews in `wiki/reviews/` when relevant

**Output:**

- New review file in `wiki/reviews/`
- Optional pointer-only signals in `wiki/signals.md`
- Updated `index.md` when needed
- Updated `log.md`

**Steps:**

1. Identify the review period.
2. Read diary entries for the period.
3. Read health log entries for the period.
4. Read decisions logged during the period.
5. Generate a structured review.
6. Show the review for confirmation before saving.
7. After confirmation, save the review.
8. Run the full cross-domain signal check.
9. Generate only pointer-only signals.
10. Update `index.md` when needed.
11. Append to `log.md`.

**Review sections:**

- General state
- Health summary, kept inside personal domain
- Highlights
- What worked
- What did not work
- Open decisions for review
- Next period intentions
- Signals generated

**Confirmation:**

- Always show the review draft and wait for confirmation before saving.

---

## \query {question}

**Purpose:** Answer questions about patterns, entries, decisions, reviews, or data inside the personal domain.

**Input:**

- `index.md`
- Relevant diary, health, decision, review, or signal pages

**Output:**

- Inline answer only, unless the user explicitly asks to save an update

**Steps:**

1. Read `index.md`.
2. Identify the relevant personal-domain pages.
3. Read only the minimum relevant pages.
4. Answer inside the personal-domain boundary.
5. Do not export private content.
6. If a pattern is significant, offer to run `\review`.

**Confirmation:**

- Do not write files unless the user explicitly asks to save an update.

---

## Signal rules

Run after `\journal`, `\track`, and `\review`.

**Writing-worthy:** Diary entry describes a significant experience.

Signal format:

```text
Entry YYYY-MM-DD may be relevant for writing. Suggested action: \draft [topic]. User confirmation required.
```

**Career-adjacent:** Entry or decision has professional implications.

Signal format:

```text
Entry YYYY-MM-DD may be relevant for career. Suggested action: update [page]. User confirmation required.
```

**Burnout:** Energy at or below threshold for repeated days.

Signal format:

```text
Personal domain shows a low-energy pattern. Suggested action: consider adjusting pace. User confirmation required.
```

Do not include health details in the signal.

**Decision review:** A decision has passed its review date.

Signal format:

```text
Decision [title] is due for review. User confirmation required.
```

Signals are offers. The user decides whether to act.
