# wiki — Structured Knowledge

This folder stores processed and reusable knowledge for the domain.

The wiki is not a dump of raw sources. It is the structured memory that future agents should read before answering, writing, or updating domain knowledge.

## Rules

- Keep pages focused on one clear purpose.
- Prefer updating existing pages over creating duplicates.
- Link back to source material when useful.
- Record uncertainty instead of inventing missing details.
- Update `../index.md` when adding or removing important wiki pages.
- Append meaningful operations to `../log.md` after write operations.

## Recommended page format

```markdown
# Page Title

## Purpose

What this page is for.

## Current knowledge

Structured domain knowledge.

## Source pointers

- `raw/source-file.md`

## Open questions

- Missing or uncertain information.

## Last updated

YYYY-MM-DD
```
