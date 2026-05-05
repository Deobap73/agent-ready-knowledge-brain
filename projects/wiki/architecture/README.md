# projects/wiki/architecture

This folder holds architecture pages — one per project or per significant architectural system.

## When to create a page

Create an architecture page when a project has decisions about:
- Auth system design
- Data model and schema decisions
- API structure
- Multilingual or localisation architecture
- External service integration patterns
- State management approach

## File naming

`{project-name}-{system}.md`

Examples:
- `my-project-auth-architecture.md`
- `my-project-content-model.md`

## Required sections in each page

1. Overview: what this architecture does and why it was designed this way
2. Layers or components: the main pieces and how they connect
3. Main flows: how data or requests move through the system
4. Design observations: what makes this architecture correct or noteworthy
5. Known issues: what is not right yet

## How agents use this folder

When ingesting a project, the `\ingest` command creates architecture pages for each significant architectural decision.

When asked architecture questions, agents read the relevant pages.

When running `\lint`, agents check that architecture pages exist for all significant decisions.
