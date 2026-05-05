# commands.md — {domain-name}

These commands standardise how agents operate in the `{domain-name}` domain.

Commands are workflow contracts for agents. They are not shell commands.

## Agent execution model

Before executing any command:

1. Read `../AGENTS.md` or `../CLAUDE.md`, depending on agent context.
2. Read `AGENTS.md`.
3. Read `CLAUDE.md`.
4. Read this `commands.md`.
5. Read `index.md`.
6. Read the required input files listed in the command.

If a required input file is missing, stop and report it. Never guess.

After any write operation:

1. Update the relevant wiki or output file.
2. Update `index.md` if navigation or domain state changed.
3. Append a short note to `log.md`.
4. Report what changed.

## \add {source-name}

Purpose: Process a new approved source into structured domain knowledge.

Input:

- `raw/{source-name}.md`
- `index.md`
- Relevant existing pages in `wiki/`

Output:

- One or more updated or created pages in `wiki/`
- Updated `index.md` when needed
- Updated `log.md`

Rules:

- Do not modify the raw source file.
- Prefer updating existing wiki pages over creating duplicates.
- If the source is too thin, record what is missing.

## \query {question}

Purpose: Answer a question from existing domain knowledge.

Input:

- `index.md`
- Relevant pages in `wiki/`

Output:

- Inline answer only, unless the user asks for a saved file.

Rules:

- Do not answer from memory alone.
- If the answer is not supported by existing files, say what is missing.
- Cite or name the pages used when useful.

## \update {page-or-topic}

Purpose: Update existing structured knowledge when the domain changes.

Input:

- Existing relevant page in `wiki/`
- User-provided update or approved source material

Output:

- Updated wiki page
- Updated `index.md` when needed
- Updated `log.md`

Rules:

- Preserve useful existing structure.
- Do not overwrite supported knowledge without reason.
- Record uncertainty when the update is incomplete.

## \review

Purpose: Audit the domain for gaps, stale information, duplicates, and missing links.

Checks:

- Raw files that have not been processed
- Wiki pages not listed in `index.md`
- Index entries pointing to missing pages
- Duplicate or overlapping wiki pages
- Missing log entries after changes
- Possible bridge candidates that require confirmation

Output:

- Inline audit report
- Optional proposed changes, only saved with confirmation

## \connect {target-domain}

Purpose: Identify whether this domain contains knowledge that should connect to another domain.

Input:

- Relevant pages in this domain
- Relevant index and wiki pages from the target domain

Output:

- Inline proposal
- Optional bridge file in `_bridges/`, only with confirmation

Rules:

- Use bridges only for genuine synthesis.
- Do not create bridges for simple references.
- Respect privacy boundaries.
- Wait for user confirmation before writing outside this domain.
