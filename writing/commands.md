# commands.md — writing

## Agent Execution Model

Workflow instructions for agents. Read required files before executing. Append to `log.md` after write operations.

---

## \draft {topic}

**Purpose:** Write a first draft on a given topic.

**Input:** Topic description, optional source notes from `raw/`.

**Output:** `wiki/pieces/{slug}.md`

**Structure for articles:**
- Title
- Meta description
- Introduction
- Body (H2 sections)
- Conclusion
- Tags

---

## \ingest {piece-name}

**Purpose:** Process an approved piece into the wiki structure with metadata.

**Input:** `raw/{piece-name}.md`

**Output:**
- `wiki/pieces/{piece-name}.md` with full frontmatter
- Updated `index.md`

**Frontmatter:**
```yaml
title:
status: draft / review / published
published_url:
platform:
date:
tags:
themes:
```

---

## \refine {piece-name}

**Purpose:** Improve a draft for clarity, structure, and voice.

**Input:** `wiki/pieces/{piece-name}.md`

**Steps:**
1. Read the full piece.
2. Identify structural weaknesses.
3. Suggest or apply improvements.
4. Preserve the author's voice.
5. Do not change factual claims without confirmation.

---

## \publish-prep {piece-name}

**Purpose:** Prepare a piece for publication.

**Input:** `wiki/pieces/{piece-name}.md`

**Output:** Inline suggestions for:
- SEO title and meta description
- Tags
- Platform-specific formatting adjustments

---

## \query {tag}

**Purpose:** Find pieces by topic or theme.

**Output:** List of matching pieces with status and recommended next action.

---

## \review

**Purpose:** Audit the domain.

**Checks:**
- Drafts stuck in review status
- Published pieces missing URLs
- Themes with no recent pieces
