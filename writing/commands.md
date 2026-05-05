# commands.md — writing

These commands standardise how agents operate in the writing domain.

Commands are workflow instructions for agents, not shell commands.

## Agent Execution Model

Before executing any command:

1. Read `../CLAUDE.md` or `../AGENTS.md`, depending on agent context.
2. Read `AGENTS.md`.
3. Read `CLAUDE.md`.
4. Read this `commands.md`.
5. Read `index.md`.
6. Read the required input files listed in the command.

If a required input file is missing, stop and report it. Never guess.

After any write operation:

1. Update only the allowed output files.
2. Update `index.md` if domain state, piece status, themes, or navigation changed.
3. Append a short note to `log.md`.
4. Report changed files.

---

## \draft {topic}

**Purpose:** Write a first draft from a topic, source note, or approved idea.

**Input:**

- Topic description from the user
- Optional source notes from `raw/`
- Relevant voice notes from `wiki/voice/` when present
- Relevant theme pages from `wiki/themes/` when present

**Output:**

- `wiki/pieces/{slug}.md`
- Updated `index.md`
- Updated `log.md`

**Steps:**

1. Clarify the intended content type if unclear.
2. Read relevant source notes when provided.
3. Read relevant voice and theme notes when present.
4. Draft the piece with clear structure and status metadata.
5. Mark the output as draft.
6. Update `index.md` with the new piece.
7. Append to `log.md`.

**Structure for articles:**

- Title
- Status
- Meta description
- Intended platform
- Introduction
- Body with H2 sections
- Conclusion
- Tags
- Themes
- Source pointers
- Open questions

**Confirmation:**

- If the user explicitly asks to save the draft, writing to `wiki/pieces/` is allowed.
- If the user only asks for an idea or outline, output inline and wait for confirmation before saving.

---

## \ingest {piece-name}

**Purpose:** Process an approved raw piece into the wiki structure with metadata.

**Input:**

- `raw/{piece-name}.md`
- `index.md`
- Relevant `wiki/themes/` pages when present
- Relevant `wiki/voice/` pages when present

**Output:**

- `wiki/pieces/{piece-name}.md`
- Updated or created theme pages when supported
- Updated `index.md`
- Updated `log.md`

**Steps:**

1. Read the raw piece.
2. Identify title, status, platform, tags, themes, and source context.
3. Preserve the author's voice and meaning.
4. Create the processed piece in `wiki/pieces/`.
5. Update theme pages only when the connection is meaningful.
6. Update `index.md`.
7. Append to `log.md`.

**Frontmatter:**

```yaml
title:
status: draft / review / published
published_url:
platform:
date:
tags:
themes:
source:
```

**Confirmation:**

- Writing inside `writing/` is allowed by this command when the raw source exists and is approved.
- Do not publish or mark as published unless the source or user explicitly confirms publication.

---

## \refine {piece-name}

**Purpose:** Improve an existing draft for clarity, structure, flow, and voice.

**Input:**

- `wiki/pieces/{piece-name}.md`
- Relevant `wiki/voice/` pages when present
- Relevant `wiki/themes/` pages when present

**Output:**

- Updated `wiki/pieces/{piece-name}.md`, when the user confirms changes
- Inline improvement report when confirmation is not given
- Updated `log.md` if the file is changed

**Steps:**

1. Read the full piece.
2. Read relevant voice notes when present.
3. Identify structural weaknesses.
4. Identify unclear claims or unsupported factual statements.
5. Suggest improvements or apply them if the user asked for direct editing.
6. Preserve the author's voice.
7. Do not change factual claims without support or confirmation.
8. Append to `log.md` if the file is changed.

**Confirmation:**

- If the user asks for suggestions, do not edit the file.
- If the user asks to apply improvements, update the file and log the change.

---

## \publish-prep {piece-name}

**Purpose:** Prepare a piece for publication without publishing it.

**Input:**

- `wiki/pieces/{piece-name}.md`
- Target platform or publication context when available

**Output:**

- Inline publication preparation report by default
- Optional updated metadata in `wiki/pieces/{piece-name}.md`, only with confirmation

**Steps:**

1. Read the piece.
2. Identify target platform and audience if available.
3. Suggest SEO title and meta description.
4. Suggest tags and platform formatting adjustments.
5. Flag unsupported claims or missing source context.
6. Do not mark as published unless the user confirms publication.

**Inline output must include:**

- SEO title
- Meta description
- Suggested tags
- Platform notes
- Structural changes recommended
- Publication risks or missing context

**Confirmation:**

- Do not modify the piece unless the user confirms.
- Never publish directly.

---

## \query {question-or-tag}

**Purpose:** Find or answer questions about writing pieces, themes, status, or publication readiness.

**Input:**

- `index.md`
- Relevant pages in `wiki/pieces/`
- Relevant pages in `wiki/themes/` when needed

**Output:**

- Inline answer only, unless the user asks to save an update

**Steps:**

1. Read `index.md`.
2. Identify relevant pieces or themes.
3. Read the minimum relevant wiki pages.
4. Provide a direct answer.
5. Include status and recommended next action when useful.
6. If documentation is missing, say what is missing.

**Confirmation:**

- Do not write files unless the user explicitly asks for an update.

---

## \review

**Purpose:** Audit the writing domain for stale drafts, missing metadata, weak themes, and publication gaps.

**Input:**

- `index.md`
- Relevant pages in `wiki/pieces/`
- Relevant pages in `wiki/themes/`
- Relevant pages in `wiki/voice/` when present

**Output:**

- Inline audit report by default
- Optional proposed file updates, only with confirmation

**Checks:**

- Drafts stuck in review status
- Published pieces missing URLs
- Pieces missing tags or themes
- Themes with no recent pieces
- Voice rules missing or too vague
- Pieces with unsupported factual claims
- Raw files not yet ingested
- Index entries pointing to missing pages

**Confirmation:**

- Do not write audit fixes without confirmation.
