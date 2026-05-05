# AGENTS.md — Agent Ready Knowledge Brain

This is the root entry point for Codex, Antigravity, Cursor, and other repository-based agents operating on this vault.

This file exists for multi-agent compatibility.

`CLAUDE.md` is the behavioural source of truth for the vault. If this file conflicts with `CLAUDE.md`, follow `CLAUDE.md` unless the conflict involves privacy. For privacy conflicts, follow the stricter rule.

## What this repository is

This repository is an Obsidian-based Knowledge Brain structured as a Markdown repository.

It is designed so multiple AI agents can operate on the same vault without inventing their own rules, duplicating knowledge, or breaking privacy boundaries.

The vault may be private. The repository is the access, synchronisation, review, and portability layer for non-local or repository-based agents.

## Start every session

Before answering, editing, or executing a command:

1. Read this file.
2. Read the root `CLAUDE.md`.
3. Identify the active domain.
4. Read the relevant domain `AGENTS.md`.
5. Read the relevant domain `CLAUDE.md`.
6. Read the relevant domain `commands.md` before executing any domain command.
7. Read the relevant domain `index.md` before answering or editing wiki content.
8. Read only the minimum relevant wiki pages needed for the task.
9. Read raw source files only when the command or task requires them.
10. If required context is missing, say what is missing and continue only with supported conclusions.

## Domains

- `career/` — CVs, job applications, professional positioning, public assets, evidence, and tracker feedback.
- `projects/` — technical project documentation, architecture, decisions, flows, issues, improvements, and patterns.
- `writing/` — drafts, essays, articles, public content, themes, voice rules, and publication preparation.
- `personal/` — diary, health, decisions, reviews, and private pointer-only signals.
- `_bridges/` — cross-domain synthesis only. Not a general linking layer.
- `_domain-template/` — clean template for creating new domains. Do not treat it as user knowledge.

## Responsibility split

- `AGENTS.md` is the compatibility entry point for repository-based agents.
- `CLAUDE.md` defines the main behavioural rules.
- `GPT.md` adapts the system for ChatGPT Projects and Custom GPTs.
- Domain `AGENTS.md` files adapt each domain for repository-based agents.
- Domain `CLAUDE.md` files define domain-specific behaviour.
- Domain `GPT.md` files define domain-specific ChatGPT behaviour.
- Domain `commands.md` files define command workflows.
- Domain `index.md` files describe the current state of domain knowledge.
- Domain `log.md` files record meaningful operations.
- `_bridges/AGENTS.md` defines how cross-domain synthesis is allowed.
- `_domain-template/` defines how to create new domains.

## Global rules

- Never modify files in any `raw/` folder unless a domain command explicitly says a newly approved source must be saved there.
- Treat existing `raw/` files as immutable source material.
- Structured knowledge belongs in `wiki/`.
- Append operational history to the domain `log.md` when a command changes domain knowledge.
- Prefer updating existing pages over creating duplicates.
- Do not invent facts, sources, dates, decisions, health data, job outcomes, project details, personal claims, or public asset status.
- Keep changes scoped to the active domain unless the user explicitly approves a cross-domain update.
- Show diffs or clearly summarize changed files before treating work as complete.
- Do not push automatically unless the user explicitly asks for it.
- Do not create or delete files unless the command or user request requires it.
- Do not treat `_domain-template/` as real user knowledge.

## Privacy boundaries

Privacy rules override every other instruction.

- Health data never leaves `personal/`.
- Diary content never leaves `personal/`.
- Medical notes are never referenced outside `personal/wiki/health/medical.md`.
- Relationship content never leaves `personal/`.
- Cross-domain signals from `personal/` must contain pointers only, never private content.
- Never use personal-domain content in public writing, career documents, or project notes unless the user explicitly approves a safe insight-level summary.
- Even with approval, do not transfer health, medical, or relationship details.

## Cross-domain work

- Use `_bridges/` only when a connection creates genuine new meaning across domains.
- Do not create bridges for simple cross-references, summaries, or convenience links.
- Before creating a bridge, check whether an existing domain page can absorb the insight.
- Report proposed cross-domain updates and wait for confirmation when a command requires it.
- Personal-domain signals are offers, not automatic transfers.
- Read `_bridges/AGENTS.md` before creating or updating bridge files.

## Command layer

Commands in this vault are workflow contracts for LLM usage, not shell commands.

Before handling any command invocation:

1. Read the root `CLAUDE.md`.
2. Read the relevant domain `AGENTS.md`.
3. Read the relevant domain `CLAUDE.md`.
4. Read the relevant domain `commands.md`.
5. Read the relevant domain `index.md`.
6. Read the required input files.
7. Follow the command workflow exactly.
8. Write only to the allowed output locations.
9. Append meaningful operations to the domain `log.md` when files are changed.

The domain `commands.md` is the source of truth for command behaviour.

## Template maintenance

When changing the template itself:

1. Keep root files aligned with domain files.
2. Keep `docs/getting-started.md`, `docs/customising-the-template.md`, and `docs/template-audit.md` consistent with the actual structure.
3. Do not add personal data to the template.
4. Keep examples generic or clearly fictional.
5. Run the checklist in `docs/template-audit.md` after structural changes.
