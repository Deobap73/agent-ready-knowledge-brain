# projects — Index

Current state of knowledge for the projects domain.

## Domain purpose

This domain exists to support:

- Technical project documentation
- Architecture understanding
- Decision tracking
- Flow documentation
- Cross-project pattern extraction
- Issue and improvement tracking
- Career evidence signals from technical work

It is not a code archive. It is an operational knowledge system for understanding projects and preserving reusable technical knowledge.

## Domain structure

| Folder or file | Purpose |
|---|---|
| `raw/` | Source material, project notes, planning stubs, and approved technical inputs |
| `wiki/projects/` | One structured page per project |
| `wiki/architecture/` | Architecture models, system boundaries, and technical structures |
| `wiki/flows/` | User flows, data flows, auth flows, publishing flows, and operational flows |
| `wiki/decisions/` | Technical decisions, reasons, trade-offs, and verdicts |
| `wiki/sources/` | Summaries of raw source files |
| `wiki/issues/` | Known issues and cross-project risks |
| `wiki/improvements/` | Improvement opportunities and refactoring candidates |
| `wiki/patterns/` | Reusable technical patterns across projects |
| `commands.md` | Project workflow contracts |
| `log.md` | Operational history |

## Status checklist

### Foundation

- [ ] First project source added to `raw/`
- [ ] First project ingested into `wiki/projects/`
- [ ] First decision page created in `wiki/decisions/`
- [ ] First architecture page created or updated
- [ ] First project flow documented

### Operational usage

- [ ] First `\ingest` command completed
- [ ] First `\update` command completed
- [ ] First `\query` answered from project wiki pages
- [ ] First `\lint` audit completed
- [ ] First career connection proposed through `\connect`

### Cross-domain value

- [ ] At least one project mapped to a career evidence claim
- [ ] At least one reusable pattern extracted
- [ ] At least one issue or improvement tracked across projects

## Projects

| Project | Status | Stack | Wiki page | Decision page | Notes |
|---|---|---|---|---|---|

## Core wiki sections

| Section | Purpose | Required when |
|---|---|---|
| `wiki/projects/` | One page per project | Every ingested project |
| `wiki/architecture/` | Architecture and system models | Project has meaningful structure |
| `wiki/flows/` | User, data, auth, publishing, or operational flows | Project has repeatable workflows |
| `wiki/decisions/` | Technical decisions and trade-offs | Every ingested project |
| `wiki/sources/` | Source summaries | Raw source needs traceability |
| `wiki/issues/` | Issues and risks | Known technical or process problems exist |
| `wiki/improvements/` | Improvements and refactoring opportunities | Future work is identified |
| `wiki/patterns/` | Reusable technical patterns | Pattern appears in more than one project or is strategically reusable |

## Command workflow

| Command | Purpose | Main output |
|---|---|---|
| `\ingest {project-name}` | Process a raw project file into structured wiki knowledge | Project page, decision page, index update, log update |
| `\update {project-name} {description}` | Update project knowledge when a project evolves | Updated affected wiki pages |
| `\connect {project-name}` | Find links between project knowledge and career evidence | Proposal or bridge candidate |
| `\extract {project-name} {decision}` | Turn a technical decision into an interview narrative | Inline narrative and CV bullet |
| `\query {question}` | Answer questions from documented project knowledge | Inline answer |
| `\lint` | Audit the domain for gaps and inconsistencies | Inline audit report |
| `\plan {project-name}` | Create a planning stub before code exists | Raw planning file |

## Domain rules

### Rule 1

Do not copy whole codebases into the vault. Extract architecture, decisions, flows, patterns, risks, and lessons.

### Rule 2

Every ingested project must have a project page and a decision page.

### Rule 3

Do not invent architecture. If source material does not support a claim, mark it as missing context.

### Rule 4

Projects can support career evidence, but career updates require confirmation.

### Rule 5

Reusable patterns should be extracted only when they are useful beyond one isolated implementation.

## Open questions

- Which project should be ingested first?
- Which architecture pages should exist by default?
- Which projects are public and can support career evidence?
- Which projects are private and must stay internal?
