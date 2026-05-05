# AGENTS.md — writing-memoir

This domain processes life memories into structured narrative knowledge.

## Required reading

Before operating here, read:

1. `../AGENTS.md`
2. `CLAUDE.md`
3. `commands.md`
4. `index.md`
5. Relevant episode, reflection, character, and theme pages

## Language and voice

- Episode narratives are written in the author's chosen language.
- Structural metadata is in English.
- Before writing a new episode, read existing episodes in `wiki/episodes/` for voice, rhythm, and character consistency.

## Operating rules

- Never modify existing files in `raw/`.
- Never save a new episode before the user approves the draft.
- Once an approved episode is saved to `raw/`, treat it as immutable.
- Create structured wiki pages only after the user approves the episode.
- Keep reflections analytical and grounded in the episode content.
- Update themes, characters, timeline, chapters, index, and log when ingestion requires it.
- Do not invent memories, dialogue, motives, dates, or details.

## Main locations

- `raw/` — approved raw episode files, immutable after creation
- `wiki/episodes/` — structured episode pages
- `wiki/reflections/` — analytical reflections
- `wiki/themes/` — recurring themes
- `wiki/characters/` — character continuity
- `wiki/timeline/timeline.md` — chronological order
- `wiki/chapters/README.md` — chapter structure

## Commands

Use `commands.md` for:

- `\write` or `[BIO_MODE]` for drafting memoir prose
- `\ingest` for processing approved episodes
- `\connect` for career-relevant connections
- `\extract` for STAR stories and CV bullets
- `\story` for public-content drafts (LinkedIn, blog, anecdote)
- `\query` for theme or capability searches
- `\review` for domain audits

## Cross-domain rules

- Career-relevant memoir material may inform `career/` only through approved extraction, evidence updates, or bridges.
- Check existing career evidence files before proposing a new bridge.
- Use `_bridges/memoir-to-career/` only for genuine synthesis.
- Do not import content from `personal/` domain.
