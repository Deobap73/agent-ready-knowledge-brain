# projects/wiki/decisions

This folder holds decision pages — one per project, containing all non-obvious technical decisions made during development.

## When to create a page

Create a decision page for every ingested project.
Every project must have a decision page — this is a mandatory rule enforced by the `\ingest` command.

## File naming

`{project-name}-decisions.md`

Example: `my-project-decisions.md`

## Required sections in each page

A decision log entry for each non-obvious decision.

Each entry must contain:

1. **Decision:** what was decided
2. **Reason:** why this option was chosen
3. **Trade-off:** what was given up or accepted
4. **Verdict:** was it the right call, and would you change it

## What counts as a non-obvious decision

- Choosing one library or framework over another
- Splitting or merging components or services
- Choosing a specific auth pattern
- Deciding on a data model shape
- Accepting a performance trade-off
- Choosing between two valid approaches

## What does not need a decision entry

- Using a standard tool as documented
- Obvious naming or structure choices
- Following a well-established convention without deviation

## How agents use this folder

When ingesting a project, the `\ingest` command creates the decisions page and populates it from the raw source material.

When asked why something was built a certain way, agents read the decisions page.

When extracting interview narratives with `\extract`, agents pull from the decisions page to build the story.
