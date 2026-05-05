# projects/wiki/patterns

This folder holds pattern pages — cross-project insights about how problems are consistently solved.

## Pages in this folder

| Page | Purpose |
|------|---------|
| `shared-patterns.md` | Recurring patterns and anti-patterns across all projects |

## When to add a new pattern

Add a pattern to `shared-patterns.md` when you notice the same design choice appearing in two or more projects.

Patterns can also be technology-specific — for example, multilingual routing approaches across different stacks.

Create a separate page if a pattern family is large enough to warrant its own analysis.

## How agents use this folder

When ingesting a project, the `\ingest` command checks for new patterns and adds them to `shared-patterns.md`.

When running `\lint`, agents check whether patterns from recent projects have been documented here.
