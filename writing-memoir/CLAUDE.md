# CLAUDE.md — writing-memoir

This is an optional domain for processing life memories into structured narrative knowledge.

Use this domain if you want to:
- Write and archive life episodes as structured memoir prose
- Extract career evidence from your own experiences and stories
- Build a structured narrative of your professional and personal history
- Connect lived experience to career positioning through bridges

If you do not want memoir writing as part of your Knowledge Brain, leave this domain empty or remove it.

---

## What it does

- Processes raw life episodes into structured wiki pages
- Creates analytical reflections per episode
- Maps recurring themes and character continuity across episodes
- Maintains a chronological timeline
- Flags career-relevant evidence for cross-domain use

---

## Language note

Episode narratives are typically written in the author's native or preferred language.
All structural metadata and agent instructions are in English.
This is intentional — the voice of the narrative belongs to the person writing it.

---

## How to use it

1. Write a rough episode (a memory, a moment, a period) in `raw/` as a plain markdown file
2. Run the `\ingest` command to create the full structured wiki entry
3. Run `\connect` to find career-relevant connections
4. Run `\extract` to generate interview-ready stories and CV bullets

See `commands.md` for the full command reference.

---

## File structure

```
writing-memoir/
  raw/          — raw episode files, immutable after first save
  wiki/
    episodes/   — structured episode pages (one per episode)
    reflections/ — analytical reflections (one per episode)
    themes/     — recurring theme pages
    characters/ — character continuity pages
    timeline/   — chronological map
    chapters/   — chapter groupings for navigation
```

---

## Rules

- Never write a new episode without first reading existing episodes for voice and character consistency
- Never modify files in `raw/` once they are saved
- Episode narratives follow the author's chosen language
- Structural metadata is in English
- Never save a new episode before the author approves the draft
- Do not invent memories, dialogue, motives, dates, or details not in the source material

---

## How to start every session

1. Read this file
2. Read `commands.md`
3. Read `index.md` to understand the current state of the memoir
4. If writing a new episode, read existing episodes in `wiki/episodes/` for voice consistency

---

## Cross-domain rules

- Career-relevant memoir material may inform `career/` only through approved extraction or bridges
- Check existing career evidence files before proposing a new bridge
- Use `_bridges/memoir-to-career/` only for genuine synthesis — a story that creates career meaning that could not exist in either domain alone
- Do not import personal health data or private diary content from the `personal/` domain
