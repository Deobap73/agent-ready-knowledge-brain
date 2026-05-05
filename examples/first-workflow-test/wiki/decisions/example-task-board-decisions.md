# Example Task Board Decisions

## Decision 1. Keep the first version frontend only

**What was decided:**

The first version of the fictional task board is frontend only.

**Why:**

The source fixture says the goal is to test the interaction model before adding persistent server storage.

**Trade-off:**

This reduces setup complexity, but it also means there is no backend persistence, authentication, or multi-device sync in the first version.

**Verdict:**

Good first-version decision for a small interaction prototype.

**Source pointer:**

- `examples/first-workflow-test/raw/example-task-board.md`

## Missing context

- No framework is specified.
- No target user environment is specified.
- No sync or collaboration requirement is specified.
