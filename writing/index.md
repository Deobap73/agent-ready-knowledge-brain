# writing — Index

Current state of knowledge for the writing domain.

## Domain purpose

This domain exists to support:

- Article ideas and drafts
- Essays and public writing
- Voice and style preservation
- Theme tracking
- Publication preparation
- Research-backed writing
- Cross-domain writing signals

It is not a dumping ground for random drafts. It is an operational writing system that helps agents preserve voice, structure ideas, and prepare public-facing content without inventing facts or exposing private material.

## Domain structure

| Folder or file | Purpose |
|---|---|
| `raw/` | Source notes, rough drafts, transcripts, article ideas, and approved inputs |
| `wiki/pieces/` | Processed drafts, essays, articles, and published pieces |
| `wiki/themes/` | Recurring themes and topic clusters |
| `wiki/voice/` | Voice rules, style notes, and tone references when present |
| `wiki/research/` | Supporting research notes when present |
| `commands.md` | Writing workflow contracts |
| `log.md` | Operational history |

## Status checklist

### Foundation

- [ ] First raw writing source added to `raw/`
- [ ] First processed piece created in `wiki/pieces/`
- [ ] First theme documented in `wiki/themes/`
- [ ] Voice rules created or linked
- [ ] Publication workflow defined

### Operational usage

- [ ] First `\draft` command completed
- [ ] First `\ingest` command completed
- [ ] First `\refine` command completed
- [ ] First `\publish-prep` command completed
- [ ] First `\review` audit completed

### Public output readiness

- [ ] Published pieces track platform and URL
- [ ] Drafts clearly distinguish status: draft, review, or published
- [ ] Private material is excluded from public drafts unless explicitly approved

## Pieces

| Title | Status | Platform | Date | Wiki page | Notes |
|---|---|---|---|---|---|

## Themes

| Theme | Pieces | Notes |
|---|---|---|

## Content types

| Type | Purpose | Typical output |
|---|---|---|
| Article | Public educational or reflective content | `wiki/pieces/{slug}.md` |
| Essay | Longer argument or reflection | `wiki/pieces/{slug}.md` |
| Short post | Compact public post or social adaptation | Inline or `wiki/pieces/{slug}.md` |
| Draft note | Early raw idea | `raw/{slug}.md` |
| Research note | Supporting material | `wiki/research/{slug}.md` |
| Voice note | Style, tone, or author preference | `wiki/voice/{slug}.md` |

## Command workflow

| Command | Purpose | Main output |
|---|---|---|
| `\draft {topic}` | Write a first draft from a topic or source note | Draft piece |
| `\ingest {piece-name}` | Process an approved raw piece into wiki structure | Wiki piece with metadata |
| `\refine {piece-name}` | Improve clarity, structure, and voice | Updated piece or proposed edits |
| `\publish-prep {piece-name}` | Prepare SEO, tags, and platform formatting | Inline publication suggestions |
| `\query {tag}` | Find pieces by topic or theme | Matching pieces and recommended action |
| `\review` | Audit the domain | Inline audit report |

## Source policy

1. Raw drafts and source notes belong in `raw/`.
2. Approved and processed writing belongs in `wiki/pieces/`.
3. Research notes must not be converted into claims without support.
4. Publication status must not be invented.
5. Personal-domain content can only enter writing as an approved insight, never as raw diary, health, medical, or relationship content.

## Voice policy

1. Preserve the author's voice.
2. Do not flatten writing into generic AI prose.
3. Before continuing an existing piece, read the relevant piece and voice notes when available.
4. If no voice rules exist, ask for examples or preserve the style of the provided source.

## Cross-domain rules

- Writing can draw on `projects/` and `career/` material with confirmation.
- Writing can receive pointer-only signals from `personal/`.
- Use `_bridges/personal-to-writing/` only for approved insight-level synthesis.
- Use `_bridges/writing-to-career/` only when public writing strengthens professional positioning.

## Open questions

- What voice rules should this domain preserve?
- What content types matter most for the user?
- Which platforms should publishing preparation support?
- Which themes should be tracked first?
