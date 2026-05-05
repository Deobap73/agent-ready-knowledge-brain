# writing-memoir/wiki/episodes

This folder holds structured episode pages — one per ingested memoir episode.

## File naming

`YYYY-episode-slug.md`

Example: `2015-the-decision.md`

## Required sections in each page

```yaml
---
title: [Episode title]
date: [YYYY or YYYY-MM or YYYY-MM-DD]
period: [life period label]
characters: [comma-separated names]
themes: [comma-separated themes]
career-relevant: true / false
source: raw/{filename}.md
---
```

Then:

- `## Narrative` — summary or full narrative prose
- `## Reflection` — analytical note on what this moment means
- `## Themes` — themes present in this episode
- `## Characters` — each person and their role in this episode

## How agents use this folder

Before writing a new episode, agents read all files here for voice and character consistency.

When ingesting, agents create one page per approved episode.

When querying, agents search here for relevant episodes by theme or capability.
