# GPT.md — Agent Ready Knowledge Brain

This file adapts Agent Ready Knowledge Brain for ChatGPT Projects and Custom GPTs.

ChatGPT does not automatically read local vault files. It can only work from files the user uploads, pastes, or connects through repository access.

The rule is simple.

If ChatGPT cannot see a file, it must ask for it.

It must not invent the current state of the vault.

## What this vault is

This is a Markdown-based Knowledge Brain designed for multi-agent use.

Obsidian is the human interface. The Markdown vault is the source of truth. GitHub can act as the synchronisation, portability, review, and access layer.

Default domains:

| Domain | Purpose |
|---|---|
| `career/` | Job search, applications, CVs, positioning, evidence, public assets, tracker feedback |
| `projects/` | Technical projects, architecture, decisions, flows, issues, improvements, patterns |
| `writing/` | Articles, drafts, essays, public content, themes, voice, publishing preparation |
| `personal/` | Diary, health, decisions, reviews, private pointer-only signals |
| `_bridges/` | Cross-domain synthesis only |
| `_domain-template/` | Template for creating new domains, not user knowledge |

## How ChatGPT should operate

When direct repository or file access is not available:

1. Ask the user which domain they are working in.
2. Ask for the relevant domain `GPT.md`.
3. Ask for the relevant domain `commands.md`.
4. Ask for the relevant domain `index.md`.
5. Ask for relevant wiki pages.
6. Ask for raw source files only when the task requires them.
7. Never assume the current state of a page without seeing it.
8. Generate clearly marked output blocks the user can copy back into the vault.

When repository access is available:

1. Read root `AGENTS.md` or root `CLAUDE.md` for the operating model.
2. Read the relevant domain files.
3. Follow the same command workflow as other agents.
4. Respect raw immutability, privacy boundaries, output paths, and log requirements.

## Files to provide for a ChatGPT Project

Recommended baseline files:

1. `GPT.md`
2. `commands-reference.md`
3. `docs/agent-workflow.md`
4. `docs/privacy-model.md`
5. Relevant domain `GPT.md`
6. Relevant domain `commands.md`
7. Relevant domain `index.md`
8. Relevant wiki pages

Do not upload private personal content unless it is needed for the current task and you understand the privacy risk.

## What ChatGPT can do without file access

Without seeing vault files, ChatGPT may:

- Explain the system.
- Help choose which files are needed.
- Draft new raw source material for the user to save.
- Suggest domain structures.
- Help design commands.
- Review pasted content.
- Produce clearly marked drafts for human review.

Without seeing vault files, ChatGPT must not:

- Claim to know the current state of the vault.
- Edit unseen wiki pages.
- Summarize unseen source files.
- Generate final outputs that require missing evidence.
- Move personal content across domains.

## Output format for vault content

When generating content that the user will save to the vault, use this format:

```text
--- SAVE TO: domain/path/file.md ---
[content here]
--- END ---
```

When the generated content would change the vault, include a log note:

```text
--- ADD TO: domain/log.md ---
[YYYY-MM-DD] [operation] | [one sentence description]
--- END ---
```

If multiple files are required, use one save block per file.

## Privacy rules

Privacy rules override all other instructions.

- Health data never leaves `personal/`.
- Diary content never leaves `personal/`.
- Medical notes never leave `personal/wiki/health/medical.md`.
- Relationship content never leaves `personal/`.
- Cross-domain signals contain pointers only, never private content.
- If the user pastes personal content, treat it as session-only and do not reuse it in outputs intended for other domains unless explicitly approved.
- Even with approval, do not transfer health, medical, or relationship details.

## Cross-domain rules

- Use `_bridges/` only for genuine synthesis.
- Do not create bridges for simple links, summaries, or convenience references.
- Never create a bridge from private personal content.
- If a cross-domain update is useful, propose it and wait for confirmation unless the user explicitly asks for the final save block.

## Commands

Commands work the same way regardless of agent.

When the user invokes a command, ask for the relevant domain `commands.md` if it is not already in context. Then follow the workflow exactly.

If a command requires a source file and the file is missing, stop and ask for it.

## Custom GPT setup

For a Custom GPT:

1. Paste this file into the instructions.
2. Add the relevant domain `GPT.md` file to the instructions or knowledge.
3. Upload `commands-reference.md`.
4. Upload domain `index.md` files for the domains the GPT should support.
5. Add only non-private wiki pages as knowledge unless the GPT is private and purpose-specific.
6. Add this instruction: Always ask for the current file content before editing or generating output based on a specific vault page.

## ChatGPT Project setup

For a ChatGPT Project:

1. Use this file as the project instruction base.
2. Upload `commands-reference.md`.
3. Upload `docs/agent-workflow.md`.
4. Upload `docs/privacy-model.md`.
5. Upload the relevant domain `GPT.md`, `commands.md`, and `index.md` files.
6. Refresh uploaded files when the vault changes significantly.
