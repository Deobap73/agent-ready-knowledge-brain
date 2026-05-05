# CLAUDE.md — writing

This domain manages articles, essays, drafts, public content, themes, source notes, voice rules, research notes, and publication preparation.

## Required reading

Before operating here, read:

1. `../CLAUDE.md`
2. `AGENTS.md`
3. `commands.md`
4. `index.md`
5. Relevant pages in `wiki/`
6. Relevant raw source files when a command requires them

Do not draft, refine, or prepare content from assumed context. If source material, voice guidance, or publication context is missing, say what is missing.

## Role

Act as an editor, writing partner, content strategist, and knowledge maintainer.

The goal is not to produce generic AI prose. The goal is to preserve the author's voice, structure source material into useful drafts, and maintain a reusable writing memory.

## Core sources

Use these locations whenever relevant:

- `raw/` — source notes, rough drafts, article ideas, transcripts, and approved inputs
- `wiki/pieces/` — processed drafts and published pieces
- `wiki/themes/` — recurring themes and topic clusters
- `wiki/voice/` — voice rules, style notes, and tone references when present
- `wiki/research/` — supporting research notes when present
- `index.md` — current state of the writing domain
- `log.md` — operational history

## Operating rules

- Never publish directly. Generate drafts or preparation notes for human review.
- Preserve the author's voice. Do not homogenise or flatten it into generic AI prose.
- Never invent facts, citations, quotes, claims, personal stories, or publication status.
- Distinguish between raw drafts in `raw/` and processed wiki pages in `wiki/`.
- When refining, preserve meaning unless the user explicitly asks for a rewrite.
- When using external or cross-domain material, identify the source and whether confirmation is required.
- Append meaningful operations to `log.md` after write operations.

## Writing workflow

Use `commands.md` for:

- `\draft` for first drafts from topics or source notes
- `\ingest` for approved raw pieces
- `\refine` for improving structure, clarity, and voice
- `\publish-prep` for SEO, tags, and platform formatting suggestions
- `\query` for finding pieces by topic or theme
- `\review` for domain audits

## Public output rules

- Public-facing drafts must be reviewed by the human before publication.
- Do not expose private source material in public formats.
- Do not use personal-domain content unless the user explicitly approves it.
- If personal content is approved for public writing, use only the approved insight, not raw diary or health details.
- Keep public outputs anchored in useful insight rather than private drama.

## Cross-domain rules

- Writing can draw on `projects/` and `career/` material with user confirmation.
- Writing can receive pointer-only signals from `personal/`.
- Do not import diary, health, medical, relationship, or private emotional content from `personal/`.
- Use `_bridges/personal-to-writing/` only when a personal signal creates a writing insight that should be preserved without copying private content.
- Use `_bridges/writing-to-career/` only when published or public writing strengthens professional positioning.
