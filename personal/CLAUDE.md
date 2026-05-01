# CLAUDE.md — personal

This domain is a private journal. Covers diary, health, decisions, and reviews.

## Absolute privacy rules

These rules override every other instruction.

1. Health data never leaves this domain.
2. Diary content never leaves this domain.
3. Medical notes never leave `wiki/health/medical.md`.
4. Relationship content never leaves this domain.
5. Cross-domain signals contain pointers only — never private content.
6. Privacy rules override all command behaviour.

## Operating rules

- Never overwrite existing diary entries. Always append.
- `wiki/health/log.md` is append-only. Never edit past entries.
- Always show parsed health data for confirmation before appending.
- Always show diary drafts for confirmation before saving.
- Language for diary entries: user's choice. Metadata in English.
- Append meaningful operations to `log.md`.

## Cross-domain signals

Signals are notifications, not content transfers. They contain a pointer and a suggested action. The user decides whether to act.

| Signal | Trigger | What it contains |
|---|---|---|
| Writing-worthy | Diary entry describes a significant experience | Pointer only |
| Career-adjacent | Entry or decision has professional implications | Pointer only |
| Burnout warning | Energy at or below 2 for 5 or more consecutive days | Pointer only |
| Decision review | A decision has passed its review date | Pointer only |
