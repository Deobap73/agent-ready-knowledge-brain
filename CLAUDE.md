# CLAUDE.md — Agent Ready Knowledge Brain

This is the root behaviour file for Claude Code operating inside this vault.

This vault is a Markdown-based Knowledge Brain designed for multi-agent use. Claude Code can operate locally inside the vault. Repository-based agents enter through `AGENTS.md`. ChatGPT Projects and Custom GPTs use `GPT.md`.

The vault is the source of truth. The model is the worker.

## What this vault is

A structured personal or professional knowledge system with four default domains and one cross-domain synthesis layer:

- `career/` — job search, applications, CVs, positioning, public assets, evidence, and tracker feedback
- `projects/` — technical projects, architecture, decisions, flows, issues, improvements, and patterns
- `writing/` — articles, essays, drafts, public content, themes, voice rules, and publishing preparation
- `personal/` — diary, health, decisions, reviews, and private pointer-only signals
- `_bridges/` — cross-domain synthesis only

The repository also includes `_domain-template/` for creating new domains. Do not treat `_domain-template/` as real user knowledge.

## Start every session

Before answering, editing, or executing a command:

1. Read this file.
2. Identify the active domain.
3. Read the domain `CLAUDE.md`.
4. Read the domain `AGENTS.md`.
5. Read the domain `commands.md` before executing any command.
6. Read the domain `index.md` before answering or modifying wiki content.
7. Read only the minimum relevant wiki pages needed for the task.
8. Read raw source files only when the command or task requires them.
9. If required context is missing, say what is missing and continue only with supported conclusions.

## Domain map

| Domain | Purpose |
|---|---|
| `career/` | Job search, applications, CVs, positioning, evidence, public assets, tracker feedback |
| `projects/` | Technical projects, architecture, decisions, flows, issues, improvements, patterns |
| `writing/` | Articles, essays, drafts, public content, themes, voice, publishing preparation |
| `personal/` | Diary, health, decisions, reviews, private pointer-only signals |
| `_bridges/` | Cross-domain synthesis only |
| `_domain-template/` | Template for creating new domains, not user knowledge |

## Global rules

- Never modify files in any `raw/` folder unless a command explicitly requires saving new approved source material there.
- Treat existing `raw/` files as immutable source material.
- All structured knowledge belongs in `wiki/`.
- Append operational history to the domain `log.md` when a command changes domain knowledge.
- Prefer updating existing pages over creating duplicates.
- Do not invent facts, decisions, dates, health data, project details, job outcomes, personal claims, or public asset status.
- Keep changes scoped to the active domain unless the user explicitly approves a cross-domain update.
- Do not push changes automatically unless the user explicitly asks for it.
- Show the changed files or clearly summarize changes before treating work as complete.
- Do not treat `_domain-template/` as real knowledge.

## Cross-domain work

- Use `_bridges/` only when a connection creates genuine new meaning across domains.
- Do not create bridges for simple cross-references, summaries, or convenience links.
- Before creating a bridge, check whether an existing domain page can absorb the insight.
- Read `_bridges/AGENTS.md` before creating or updating bridge files.
- Report proposed cross-domain updates and wait for confirmation when required.
- Personal-domain signals are offers, not automatic transfers.

## Privacy rules

Privacy rules override all command behaviour.

- Health data never leaves `personal/`.
- Diary content never leaves `personal/`.
- Medical notes never leave `personal/wiki/health/medical.md`.
- Relationship content never leaves `personal/`.
- Cross-domain signals from `personal/` must contain pointers only, never private content.
- Never use personal-domain content in public writing, career documents, or project notes unless the user explicitly approves a safe insight-level summary.
- Even with approval, do not transfer health, medical, or relationship details.

## Command layer

Commands are workflow contracts, not shell commands.

When a user invokes a command, the agent must:

1. Identify the target domain.
2. Read the root `CLAUDE.md`.
3. Read the domain `CLAUDE.md`.
4. Read the domain `AGENTS.md`.
5. Read the domain `commands.md`.
6. Read the domain `index.md`.
7. Read the required input files.
8. Create or update only the specified output files.
9. Respect raw file immutability.
10. Respect privacy rules.
11. Append to the domain `log.md` when the command writes files.

## Template maintenance

When maintaining this template:

1. Keep root `AGENTS.md`, root `CLAUDE.md`, and root `GPT.md` aligned.
2. Keep every active domain on the standard spine: `AGENTS.md`, `CLAUDE.md`, `GPT.md`, `commands.md`, `index.md`, `log.md`, `raw/`, and `wiki/`.
3. Keep `_domain-template/` generic and free of personal data.
4. Keep `_bridges/` focused on synthesis, not navigation.
5. Run `docs/template-audit.md` after structural changes.
