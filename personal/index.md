# personal — Index

Current state of knowledge for the personal domain.

## Domain purpose

This domain exists to support:

- Private diary entries
- Health and energy tracking
- Personal decisions
- Professional-adjacent decisions
- Periodic reviews
- Pointer-only cross-domain signals

This is the most private domain in the vault. It is not a source library for other domains. It can generate signals, but those signals contain pointers only, never private content.

## Privacy summary

- Health data never leaves this domain.
- Diary content never leaves this domain.
- Medical notes never leave `wiki/health/medical.md`.
- Relationship content never leaves this domain.
- Cross-domain signals contain pointers only, no private content.
- The user decides whether to act on any signal.

## Domain structure

| Folder or file | Purpose | Privacy level |
|---|---|---|
| `wiki/diary/` | Daily diary entries | High |
| `wiki/health/log.md` | Continuous health tracking, append only | High |
| `wiki/health/medical.md` | Medical notes, most private | Highest |
| `wiki/health/baselines.md` | Personal reference metrics | High |
| `wiki/decisions/` | Personal and career-adjacent decisions | High |
| `wiki/reviews/` | Weekly, monthly, or quarterly reviews | High |
| `wiki/signals.md` | Pointer-only signal log | Medium, no private content |
| `commands.md` | Personal workflow contracts | Low |
| `log.md` | Operational history | Medium, no private content |

## Status checklist

### Foundation

- [ ] Health baselines defined in `wiki/health/baselines.md`
- [ ] First diary entry created
- [ ] First health tracking entry logged
- [ ] First personal decision documented
- [ ] First professional-adjacent decision documented
- [ ] First weekly review completed

### Operational usage

- [ ] First `\journal` command completed
- [ ] First `\track` command completed
- [ ] First `\decide` command completed
- [ ] First `\review` command completed
- [ ] First `\query` answered from personal-domain files only

### Signal readiness

- [ ] `wiki/signals.md` initialised
- [ ] Signal rules reviewed
- [ ] User understands that signals are notifications, not content exports

## Wiki pages

| Page | Purpose | Rule |
|---|---|---|
| `wiki/diary/` | Daily entries | Append only when entry already exists |
| `wiki/health/log.md` | Continuous health tracking | Append only, never edit past lines |
| `wiki/health/medical.md` | Medical notes | Never referenced externally |
| `wiki/health/baselines.md` | Personal reference metrics | Keep private |
| `wiki/decisions/` | Personal and career-adjacent decisions | Review dates recommended |
| `wiki/reviews/` | Periodic reviews | Confirm before saving |
| `wiki/signals.md` | Pointer-only signal log | No diary excerpts, no health details |

## Command workflow

| Command | Purpose | Main output |
|---|---|---|
| `\journal {optional: date}` | Write or add to a diary entry | Diary entry draft or append |
| `\track {metrics}` | Log health metrics from natural language | Confirmed line appended to health log |
| `\decide {description}` | Document a significant decision | Decision entry |
| `\review {week/month/quarter}` | Conduct periodic review | Review draft |
| `\query {question}` | Answer questions about patterns in this domain | Inline answer only |

## Signal rules

Signals are notifications, not data transfers.

Allowed signals:

| Signal | Trigger | Target | Content allowed |
|---|---|---|---|
| Writing-worthy event | Diary entry describes a significant experience | `writing/` | Pointer only |
| Career-adjacent event | Entry or decision has professional implications | `career/` | Pointer only |
| Burnout warning | Energy at or below threshold for repeated days | Personal planning only | Pointer only |
| Decision review due | A decision has passed its review date | `personal/` | Pointer only |

A valid signal contains:

- Date or pointer
- Suggested target domain
- Suggested action
- Confirmation requirement

A valid signal never contains:

- Diary excerpts
- Health details
- Medical notes
- Relationship details
- Emotional private content

## Domain rules

### Rule 1

Privacy rules override all other instructions.

### Rule 2

Never overwrite diary entries or health log history. Append only.

### Rule 3

Always confirm before saving diary drafts, health tracking lines, decision entries, or reviews when required by `commands.md`.

### Rule 4

Cross-domain movement is pointer-only unless the user explicitly approves a safe insight-level summary.

### Rule 5

Health, medical, and relationship content must not move across domains, even as a summary.

## Open questions

- What health baselines should be tracked?
- What review cadence should be used?
- Which personal decisions should have review dates?
- Should this template user keep the personal domain, or remove it entirely for a less private vault?
