# CLAUDE.md — Agent-Ready Knowledge Brain

This is the root instruction file for Claude Code operating inside this vault.

## What this vault is

A structured personal knowledge system with four domains: career, projects, writing, and personal. Each domain has its own instruction files, command layer, and wiki structure.

## How to start every session

1. Read this file.
2. Identify the domain the user is working in.
3. Read the domain `CLAUDE.md`.
4. Read the domain `commands.md` before executing any command.
5. Read the domain `index.md` before modifying wiki content.

## Domains

| Domain | Purpose |
|---|---|
| `career/` | Job search, applications, CVs, positioning, evidence |
| `projects/` | Technical projects, architecture, decisions, patterns |
| `writing/` | Articles, essays, drafts, public content |
| `personal/` | Diary, health, decisions, reviews |

## Global rules

- Never modify files in any `raw/` folder unless a command explicitly requires saving new approved source material there.
- Treat existing `raw/` files as immutable.
- All structured knowledge belongs in `wiki/`.
- Append operational history to the domain `log.md` when a command changes domain knowledge.
- Prefer updating existing pages over creating duplicates.
- Do not invent facts, decisions, dates, health data, or project details.
- Keep changes scoped to the active domain unless the user explicitly approves a cross-domain update.
- Do not push changes automatically. Show the diff and wait for confirmation.

## Cross-domain work

- Use `_bridges/` only when a connection creates genuine new meaning across domains.
- Do not create bridges for simple cross-references.
- Before creating a bridge, check whether an existing domain page can absorb the insight.
- Report proposed cross-domain updates and wait for confirmation.

## Privacy rules

- Health data never leaves `personal/`.
- Diary content never leaves `personal/`.
- Medical notes never leave `personal/wiki/health/medical.md`.
- Cross-domain signals from `personal/` must contain pointers only, never private content.
- Privacy rules override all command behaviour.

## Command layer

Commands are workflows, not shell commands. Read the relevant `commands.md` before handling any command invocation.

When a user invokes a command, the agent must:

1. Identify the target domain.
2. Read the root `CLAUDE.md`.
3. Read the domain `CLAUDE.md`.
4. Read the domain `commands.md`.
5. Read the required input files.
6. Create or update the specified output files.
7. Respect raw file immutability.
8. Respect privacy rules.
9. Append to the domain `log.md` when the command writes files.
