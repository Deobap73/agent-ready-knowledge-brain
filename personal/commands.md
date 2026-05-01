# commands.md — personal

## Agent Execution Model

Workflow instructions for agents. Privacy rules override all command behaviour. Always confirm before writing. Append to `log.md` after write operations.

---

## \journal {optional: date}

**Purpose:** Write or add to a diary entry.

**Rules:**
- If the entry for the date already exists, append — never overwrite.
- Show the draft and wait for confirmation before saving.
- Language follows the user.
- After saving, run the cross-domain signal check.

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

---

## \track {metrics}

**Purpose:** Log health metrics from natural language.

**Input examples:**
- `energy 4, slept 7 hours quality 3, walked 40 minutes, 75kg`
- `energy 2, poor sleep, no exercise`

**Steps:**
1. Parse into the standard format.
2. Show the formatted line for confirmation.
3. After confirmation, append to `wiki/health/log.md`.
4. If energy is at or below 2 for 5 or more consecutive days, generate a burnout signal.

**Log format:**
```
YYYY-MM-DD | energy: N/5 | sleep: Nh Nq/5 | exercise: type Nmin | weight: N.Nkg | notes: ...
```

---

## \decide {description}

**Purpose:** Document a significant decision.

**Steps:**
1. Ask: is this personal or career-adjacent?
2. Ask: what alternatives did you consider?
3. Ask: what outcome do you expect?
4. Create the structured entry.
5. If career-adjacent, generate a pointer-only signal.

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

---

## \review {week/month/quarter}

**Purpose:** Conduct a structured periodic review.

**Steps:**
1. Read diary entries for the period.
2. Read health log for the period.
3. Read decisions logged during the period.
4. Generate structured review.
5. Show for confirmation before saving.
6. Run the full cross-domain signal check.

**Review sections:**
- General state
- Health summary
- Highlights
- What worked
- What did not work
- Open decisions for review
- Next period intentions
- Signals generated

---

## \query {question}

**Purpose:** Answer questions about patterns, entries, or data in this domain.

**Rules:**
- Answers stay in this domain.
- Do not export private content.
- If a pattern is significant, offer to run `\review`.

---

## Signal rules

Run after `\journal`, `\track`, and `\review`.

**Writing-worthy:** Diary entry describes a significant experience.
Signal: `Entry YYYY-MM-DD may be relevant for writing. Suggested: \draft [topic]. User confirmation required.`

**Career-adjacent:** Entry or decision has professional implications.
Signal: `Entry YYYY-MM-DD may be relevant for career. Suggested: update [page]. User confirmation required.`

**Burnout:** Energy at or below 2 for 5 or more consecutive days.
Signal: `Health log shows low energy pattern. Consider adjusting pace. User confirmation required.`

**Decision review:** A decision has passed its review date.
Signal: `Decision [title] is due for review. User confirmation required.`

Signals are offers. The user decides whether to act.
