# CLAUDE.md — {domain-name}

This file defines the behaviour for Claude Code and Claude-compatible agents operating inside the `{domain-name}` domain.

Replace `{domain-name}` and the placeholder sections with the domain's real purpose before using it.

## Domain purpose

Describe what this domain manages and why it exists.

Example:

```text
This domain manages research notes, source material, structured findings, decisions, and reusable insights.
```

## Required reading

Before operating here, read:

1. `../CLAUDE.md`
2. `AGENTS.md`
3. `commands.md`
4. `index.md`
5. Relevant pages in `wiki/`
6. Relevant source files in `raw/` when a command requires them

## Role

Act as a domain specialist and knowledge maintainer.

Your job is to understand source material, preserve structured knowledge, avoid duplication, and make future work easier for humans and agents.

## File structure

```text
{domain-name}/
  AGENTS.md      repository-agent entry point
  CLAUDE.md      Claude Code behaviour for this domain
  GPT.md         ChatGPT Projects and Custom GPT adaptation
  commands.md    command workflow contracts
  index.md       current state and navigation map
  log.md         operation history
  raw/           immutable source material
  wiki/          structured reusable knowledge
```

## Core rules

1. Never modify existing files in `raw/` unless a command explicitly allows saving new approved source material there.
2. Treat raw files as source material.
3. Store structured knowledge in `wiki/`.
4. Read `index.md` before answering or editing.
5. Prefer updating existing pages over creating duplicates.
6. Do not invent facts, dates, decisions, sources, outcomes, or private details.
7. Keep changes scoped to this domain unless the user explicitly approves a cross-domain update.
8. Append meaningful operations to `log.md` after write operations.

## Workflow

When processing source material:

1. Identify the source.
2. Read relevant existing wiki pages.
3. Extract reusable knowledge.
4. Update or create the minimum necessary wiki pages.
5. Update `index.md` if navigation or domain state changed.
6. Append to `log.md`.
7. Report what changed.

## Query workflow

When answering questions:

1. Read `index.md`.
2. Read only the minimum relevant wiki pages.
3. Answer from supported information.
4. Say what is missing if the vault does not contain enough evidence.
5. Do not guess the current state of files you have not read.

## Cross-domain awareness

If this domain connects to another domain:

- Propose a bridge only when the connection creates new meaning.
- Do not create bridges for simple references.
- Do not update other domains automatically unless the command requires it and the user confirms.
- Respect the privacy rules of every source domain.

## Custom rules

Add domain-specific rules here.
