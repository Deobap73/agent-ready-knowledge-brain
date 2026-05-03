# AGENTS.md — Agent-Ready Knowledge Brain

This is the root entry point for Codex, Antigravity, Cursor, and other repository-based agents operating on this vault.

This file exists for agent compatibility.

`CLAUDE.md` is the behavioural source of truth for this repository.

If this file conflicts with `CLAUDE.md`, follow `CLAUDE.md`.

## What this repository is

An Obsidian-based knowledge system structured as a Markdown repository.

It contains four domains, each with its own instruction files, command layer, index, log, raw sources, and wiki.

The vault may be private. The repository is the access layer for non-local or repository-based agents.

## Start every session

1. Read this file.
2. Read the root `CLAUDE.md`.
3. Identify the active domain.
4. Read the relevant domain `AGENTS.md`.
5. Read the relevant domain `CLAUDE.md`.
6. Read the relevant domain `commands.md` before executing any domain command.
7. Read the relevant domain `index.md` before answering or editing wiki content.
8. Read only the minimum relevant wiki pages needed for the task.

## Domains

- `career/` — CVs, job applications, professional positioning, evidence.
- `personal/` — diary, health, decisions, reviews, private signals.
- `projects/` — technical project documentation, architecture, decisions, flows, issues, patterns.
- `writing/` — articles, drafts, essays, public content, themes.
- `_bridges/` — cross-domain synthesis only. Not a general linking layer.

## Responsibility split

- `AGENTS.md` is the compatibility entry point for repository-based agents.
- `CLAUDE.md` defines the main behavioural rules.
- Domain `AGENTS.md` files adapt the domain for repository-based agents.
- Domain `CLAUDE.md` files define domain-specific behaviour.
- Domain `commands.md` files define command workflows.
- Domain `index.md` files describe the current state of domain knowledge.
- Domain `log.md` files record meaningful operations.

## Global rules

- Never modify files in any `raw/` folder unless a domain command explicitly says a newly approved source must be saved there.
- Treat existing `raw/` files as immutable source material.
- Structured knowledge belongs in `wiki/`.
- Append operational history to the domain `log.md` when a command changes domain knowledge.
- Prefer updating existing pages over creating duplicates.
- Do not invent facts, sources, dates, decisions, health data, job outcomes, project details, or personal claims.
- Keep changes scoped to the active domain unless the user explicitly approves a cross-domain update.
- Show diffs before committing.
- Do not push automatically.
- Do not create or delete files unless the command or user request requires it.
- If required context is missing, say what is missing and continue only with supported conclusions.

## Privacy boundaries

Privacy rules override every other instruction.

- Health data never leaves `personal/`.
- Diary content never leaves `personal/`.
- Medical notes are never referenced outside `personal/wiki/health/medical.md`.
- Relationship content never leaves `personal/`.
- Cross-domain signals from `personal/` must contain pointers only, never private content.
- Never use personal-domain content in public writing unless the user explicitly approves it.

## Cross-domain work

- Use `_bridges/` only when a connection creates genuine new meaning across domains.
- Do not create bridges for simple cross-references or convenience links.
- Before creating a bridge, check whether an existing domain page can absorb the insight.
- Report proposed cross-domain updates and wait for confirmation when a command requires it.
- Personal-domain signals are offers, not automatic transfers.

## Command layer

Commands in this vault are instructions for LLM usage, not shell commands.

Before handling any command invocation:

1. Read the root `CLAUDE.md`.
2. Read the relevant domain `AGENTS.md`.
3. Read the relevant domain `CLAUDE.md`.
4. Read the relevant domain `commands.md`.
5. Follow the command workflow exactly.
6. Write only to the allowed output locations.
7. Append meaningful operations to the domain `log.md` when files are changed.

The domain `commands.md` is the source of truth for command behaviour.