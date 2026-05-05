# AGENTS.md — {domain-name}

This file is the repository-agent entry point for the `{domain-name}` domain.

Replace this paragraph with a short description of what this domain manages.

## Required reading

Before operating here, read:

1. `../AGENTS.md`
2. `CLAUDE.md`
3. `commands.md`
4. `index.md`
5. Relevant pages in `wiki/`
6. Relevant source files in `raw/` when a command requires them

Do not answer, edit, or generate domain knowledge from memory alone. If required context is missing, say what is missing and continue only with supported conclusions.

## Agent role

Act as a domain specialist and knowledge maintainer for `{domain-name}`.

The goal is to preserve useful structured knowledge, avoid duplication, and make future agent work more reliable.

## Core sources

Use these locations whenever relevant:

- `raw/` — immutable source material
- `wiki/` — processed and structured knowledge
- `index.md` — current state of the domain
- `commands.md` — workflow contracts
- `log.md` — operational history

## Operating rules

- Never modify existing files in `raw/` unless a command explicitly allows saving new approved source material there.
- Treat existing raw files as immutable source material.
- Store structured reusable knowledge in `wiki/`.
- Prefer updating existing wiki pages over creating duplicates.
- Do not invent facts, dates, decisions, outcomes, sources, or private details.
- Keep changes scoped to this domain unless the user explicitly approves a cross-domain update.
- Append meaningful operations to `log.md` after write operations.

## Commands

Use `commands.md` for domain workflows.

Recommended starter commands:

- `\add {source-name}` — add or process a new source
- `\query {question}` — answer from existing domain knowledge
- `\review` — audit the domain for gaps and inconsistencies

Adapt these commands to the purpose of the domain.

## Cross-domain rules

- Use `_bridges/` only when a relationship between domains creates new meaning.
- Do not create bridges for simple links or convenience references.
- Do not pull private content from other domains unless explicit domain rules allow pointer-only signals.
- Report proposed cross-domain updates and wait for confirmation when required.

## Custom domain rules

Add domain-specific safety, privacy, output, and formatting rules here.
