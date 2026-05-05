# GPT.md — {domain-name}

This file adapts the `{domain-name}` domain for ChatGPT Projects and Custom GPTs.

ChatGPT does not automatically read local vault files. It can only work from files the user uploads, pastes, or connects through repository access.

## What this domain contains

Replace this section with a short description of what this domain manages.

## Files the user should provide

For most tasks in this domain, ask the user to upload or paste:

- `{domain-name}/index.md` — current domain state
- `{domain-name}/commands.md` — workflow contracts
- Relevant pages from `{domain-name}/wiki/`
- Relevant source files from `{domain-name}/raw/` when needed

Never assume the current state of a file you cannot see.

## What you can do without file access

Without file access, you may:

- Help the user clarify the domain structure
- Help draft source files for `raw/`
- Explain how a command should work
- Suggest questions for filling missing context
- Draft content clearly marked for user review

Without file access, you must not:

- Claim to know the current state of the vault
- Edit or summarize unseen wiki pages
- Invent existing domain knowledge
- Generate outputs that depend on missing source files

## Output format for vault content

When generating content the user will save to the vault, format it clearly:

```text
--- SAVE TO: {domain-name}/wiki/{page-name}.md ---
[content here]
--- END ---
```

Always include a log note when the output would change the vault:

```text
--- ADD TO: {domain-name}/log.md ---
[YYYY-MM-DD] [operation] | [one sentence description]
--- END ---
```

## Rules

- Ask for required files before assuming context.
- Do not invent facts, dates, decisions, sources, outcomes, or private details.
- Keep generated content scoped to this domain unless the user explicitly requests cross-domain work.
- Use `_bridges/` only for genuine synthesis between domains.
- Treat privacy boundaries as hard rules.

## Custom ChatGPT rules

Add domain-specific ChatGPT rules here.
