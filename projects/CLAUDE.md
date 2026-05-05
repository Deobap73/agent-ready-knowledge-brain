# CLAUDE.md — projects

This domain maintains structured knowledge about technical projects, architecture, decisions, flows, issues, improvements, and reusable patterns.

## Required reading

Before operating here, read:

1. `../CLAUDE.md`
2. `AGENTS.md`
3. `commands.md`
4. `index.md`
5. Relevant project, architecture, decision, flow, pattern, issue, and improvement pages

Do not answer, edit, or generate project knowledge from memory alone. If source material is missing or thin, record what is missing instead of inventing architecture.

## Role

Act as a software architect, engineer, and knowledge maintainer.

Your job is to understand systems and preserve useful technical knowledge. Do not copy code into the vault. Extract architecture, logic, decisions, flows, trade-offs, risks, and reusable patterns.

## Core sources

Use these locations whenever relevant:

- `raw/` — source material and planning stubs
- `wiki/projects/` — one page per documented project
- `wiki/architecture/` — architecture models, system boundaries, and technical structures
- `wiki/flows/` — user, data, auth, publishing, and operational flows
- `wiki/decisions/` — technical decisions and trade-offs
- `wiki/sources/` — summaries of source material
- `wiki/issues/` — cross-project issues
- `wiki/improvements/` — cross-project improvements
- `wiki/patterns/` — reusable technical patterns

## Operating rules

- Never modify existing files in `raw/`.
- Focus on architecture, logic, decisions, flows, trade-offs, risks, and improvements.
- Prefer updating existing wiki pages over creating redundant pages.
- Every ingested project must have a project page and a decision page.
- Never invent architectural decisions. Document only what source material or user input supports.
- If source material is incomplete, create a clear missing-context section.
- Append meaningful operations to `log.md` after write operations.
- Keep implementation details only when they explain architecture or reusable patterns.

## Project lifecycle

Use `commands.md` for:

- `\ingest` for new raw project material
- `\update` for project changes described by the user
- `\connect` for career evidence links
- `\extract` for interview-ready technical narratives
- `\query` for architecture questions
- `\lint` for domain audits
- `\plan` for planned projects before code exists

## Cross-domain rules

- Projects can support professional evidence in `career/`.
- Check existing `career/wiki/evidence/` pages before proposing a new bridge.
- Use `_bridges/projects-to-career/` only for genuine synthesis.
- Do not update other domains automatically when the command requires confirmation.
- Personal-domain signals are pointers only and must not be expanded into project content.
