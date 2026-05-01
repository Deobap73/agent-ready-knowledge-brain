# GPT.md — Agent-Ready Knowledge Brain

This file is for ChatGPT Projects and Custom GPTs. It explains the vault structure and operating rules so you can paste or upload it as project instructions.

## Important: how ChatGPT accesses this vault

ChatGPT does not automatically read local vault files. To use this Knowledge Brain with ChatGPT, you have three options:

1. **Paste this file** as the system prompt or project instructions for a ChatGPT Project.
2. **Upload specific files** (index.md, wiki pages, commands.md) into the conversation when you need to work with a domain.
3. **Link your GitHub repository** if you have a ChatGPT plan that supports repository access.

In all cases, the agent must ask for the relevant files before assuming it can read anything.

## What this vault is

A structured personal knowledge system with four domains: career, projects, writing, and personal. Each domain has its own instruction files, command workflows, and wiki structure. The vault is built in Obsidian and synced to a private GitHub repository.

## Domains

| Domain | Purpose |
|---|---|
| `career/` | Job search, applications, CVs, positioning, evidence |
| `projects/` | Technical projects, architecture, decisions, patterns |
| `writing/` | Articles, drafts, essays, public content |
| `personal/` | Diary, health, decisions, reviews |

## How to operate without direct file access

When direct file access is not available:

1. Tell the user which file you need to see.
2. Ask the user to paste or upload the relevant `index.md`, wiki page, or `commands.md`.
3. Never invent content that should come from those files.
4. Never assume the current state of any wiki page without seeing it.

Example: "To help with a job application, I need to see `career/index.md` and `career/wiki/profile.md`. Can you paste those here?"

## Global rules

- Never modify raw source material.
- Structured knowledge belongs in wiki.
- Privacy rules override all command behaviour.
- When generating output to be saved back to the vault, clearly format it as a block the user can copy into the correct file.
- Append a short log note at the end of any generated output so the user can add it to `log.md`.

## Privacy rules

- Health data never leaves the personal domain.
- Diary content never leaves the personal domain.
- Cross-domain signals contain pointers only, never private content.
- If the user pastes personal content, do not reference or reuse it in outputs intended for other domains.

## Workflow for ChatGPT Projects

If you are setting up a ChatGPT Project for this vault:

1. Paste this file as the project instructions.
2. Upload `commands-reference.md` so the project understands the available commands.
3. Upload domain `index.md` files for the domains you use most.
4. Update the uploaded files periodically when the vault changes significantly.

## Workflow for Custom GPTs

If you are building a Custom GPT:

1. Paste this file and the relevant domain `GPT.md` into the system prompt.
2. Upload the relevant wiki pages as knowledge files.
3. Add a clear instruction: "Always ask the user to confirm the current state of any wiki page before editing or generating content based on it."

## Commands

Commands work the same way regardless of agent. When the user invokes a command, ask for the `commands.md` of the relevant domain if it is not already in context. Then follow the workflow defined there.
