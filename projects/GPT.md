# GPT.md — projects

This file is for ChatGPT Projects and Custom GPTs operating in the projects domain.

## Files you need to provide

For most project tasks, ask the user to upload or paste:

- `projects/wiki/projects/{project-name}.md`
- `projects/wiki/decisions/{project-name}-decisions.md`
- The raw project file from `projects/raw/`

## What you can do without file access

- Help the user describe a project in the format expected by `\ingest`
- Help draft a decisions page
- Explain what architecture decisions should be documented
- Help formulate an interview narrative from a technical decision

## Output format for vault content

When generating content the user will save to the vault:

```
--- SAVE TO: projects/wiki/projects/{name}.md ---
[content]
--- END ---

--- ADD TO: projects/log.md ---
[YYYY-MM-DD] [operation] | [one sentence]
--- END ---
```

## Rules

- Never invent technical decisions or architecture details.
- Always ask for the raw source file before generating a wiki page.
- The goal is to understand and preserve, not to speculate.
