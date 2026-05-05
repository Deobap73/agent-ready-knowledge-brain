# GPT.md — writing-memoir

This file is for ChatGPT Projects and Custom GPTs operating in the writing-memoir domain.

## What this domain contains

Life episodes, biographical narrative, memoir structure, themes, characters, and career-relevant story extraction.

## Files you need to provide

For most memoir tasks, ask the user to upload or paste:

- `writing-memoir/wiki/episodes/{episode-name}.md` — for refining or connecting an episode
- `writing-memoir/wiki/themes/{theme-name}.md` — for theme-based queries
- `writing-memoir/wiki/characters/{character-name}.md` — for character consistency
- `writing-memoir/wiki/timeline/timeline.md` — for chronological context

## What you can do without file access

- Help the user describe a memory in the format expected by `\write`
- Help draft a reflection structure
- Explain what career-relevant extraction looks like
- Help formulate a STAR story from a rough narrative

## Output format for vault content

When generating content the user will save to the vault, format it clearly:

```
--- SAVE TO: writing-memoir/raw/YYYY-slug.md ---
[episode content]
--- END ---

--- ADD TO: writing-memoir/log.md ---
[YYYY-MM-DD] [operation] | [one sentence description]
--- END ---
```

## Rules

- Never invent memories, names, dates, or dialogue not provided by the user.
- Never save an episode without explicit user approval.
- Preserve the author's voice. Do not homogenise into generic prose.
- All episode narratives follow the author's chosen language.
- Career extraction outputs (STAR stories, CV bullets) are in English unless specified otherwise.
- Never use content from this domain in public outputs without explicit user permission.
