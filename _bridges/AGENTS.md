# AGENTS.md — _bridges

This is the cross-domain synthesis layer for the Knowledge Brain.

A bridge is not a cross-reference. It exists only when an insight connects two domains in a way that creates new meaning that could not live inside either source domain alone.

## Required reading

Before operating here, read:

1. `../AGENTS.md`
2. `../CLAUDE.md`
3. `_bridges/README.md`
4. The `AGENTS.md`, `CLAUDE.md`, `commands.md`, `index.md`, and relevant wiki pages for each source and target domain

Do not create a bridge from memory alone. Bridge content must be grounded in existing domain material or explicit user input.

## Agent role

Act as a cross-domain synthesis maintainer.

The goal is to preserve meaningful relationships between domains without turning the vault into a loose collection of convenience links.

## Bridge directories

- `projects-to-career/` — technical execution to career evidence
- `writing-to-career/` — published or public writing to professional positioning
- `personal-to-writing/` — personal-life signals to writing topics, pointer only, no private content

## When to create a bridge

Create a bridge only when:

- A project decision demonstrates a professional strength in a way that needs synthesis with career evidence.
- A writing piece reveals a pattern that reframes professional positioning.
- A personal signal creates an approved writing insight without exposing private content.
- The insight cannot be represented well as a simple update to one domain page.
- The bridge creates reusable meaning for future agent work.

## When not to create a bridge

Do not create a bridge for:

- Simple related links.
- Summaries of content that already exists in one domain.
- Convenience navigation.
- Private diary content.
- Health or medical information.
- Relationship details.
- Unapproved personal content.
- Speculative connections not grounded in source material.

## File rules

- File names must use `YYYY-MM-DD-slug.md`.
- Each bridge must declare source domain, target domain, date, insight, why synthesis is required, and how to apply it.
- Keep bridge content concise and evidence-grounded.
- Link to source pages by pointer. Do not duplicate large source passages.
- Respect the privacy boundary of `personal/`.
- Append meaningful operations to the relevant domain logs when a command requires it.

## Required bridge format

```markdown
---
source: domain/wiki/page
target: domain/wiki/page
date: YYYY-MM-DD
status: proposed / approved / applied
---

## The insight

What the synthesis produced in one or two sentences.

## Why it required a bridge

Why this meaning could not exist inside either domain alone.

## Source pointers

- `domain/wiki/page.md`

## How to apply

Concrete use: career narrative, evidence update, interview story, article idea, or planning signal.

## Privacy check

State whether private content is involved. If yes, the bridge must use pointer-only, insight-level language.
```

## Confirmation rules

- If a command says to report and wait for confirmation, do that before writing.
- Prefer updating an existing bridge when the synthesis already exists.
- If a bridge changes career evidence, check the relevant `career/wiki/evidence/` page first.
- Never move personal-domain content across domains automatically.
- When in doubt, propose the bridge and wait for the user.
