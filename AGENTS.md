# AGENTS.md — Agent-Ready Knowledge Brain

This is the root instruction file for Codex and repository-based agents operating on this vault.

## What this repository is

An Obsidian-based knowledge system structured as a markdown repository. Four domains, each with its own instruction files, command layer, and wiki. The vault is private. The repository is the access layer for non-local agents.

## Start every session

1. Read this file.
2. Read the relevant domain `AGENTS.md`.
3. Read the relevant domain `commands.md` before executing a domain command.
4. Read the relevant `index.md` before answering or editing.

## Domains

- `career/` — CVs, job applications, professional positioning, evidence.
- `personal/` — diary, health, decisions, reviews, private signals.
- `projects/` — technical project documentation, architecture, decisions, flows, issues, patterns.
- `writing/` — articles, drafts, essays, public content, themes.
- `_bridges/` — cross-domain synthesis only. Not a general linking layer.

## Global rules

- Never modify files in any `raw/` folder unless a domain command explicitly says a newly approved source must be saved there.
- Treat existing `raw/` files as immutable source material.
- Structured knowledge belongs in `wiki/`.
- Append operational history to the domain `log.md` when a command changes domain knowledge.
- Prefer updating existing pages over creating duplicates.
- Do not invent facts, sources, dates, decisions, health data, job outcomes, or project details.
- Keep changes scoped to the active domain unless the user explicitly approves a cross-domain update.
- Show diffs before committing. Do not push automatically.

## Privacy boundaries

- Health data never leaves `personal/`.
- Diary content never leaves `personal/`.
- Medical notes are never referenced outside `personal/wiki/health/medical.md`.
- Cross-domain signals from `personal/` must contain pointers only, never private content.
- Privacy rules override all other instructions.

## Cross-domain work

- Use `_bridges/` only when a connection creates genuine new meaning across domains.
- Do not create bridges for simple cross-references or convenience links.
- Before creating a bridge, check whether an existing domain page can absorb the insight.
- Report proposed cross-domain updates and wait for confirmation when a command requires it.

## Command layer

Commands in this vault are instructions for LLM usage, not shell commands. Read the relevant `commands.md` before handling any command invocation. The domain `commands.md` is the source of truth for command behaviour.
