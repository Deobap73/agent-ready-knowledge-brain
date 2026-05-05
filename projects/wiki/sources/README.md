# projects/wiki/sources

This folder holds source summary pages — one per ingested raw file.

## Purpose

When a raw file is ingested, the agent creates a source summary that records:
- What the raw file contained
- Which wiki pages were created from it
- What key facts were extracted
- What was missing or thin in the source

This creates traceability: you can always see where a piece of wiki knowledge came from.

## File naming

`{project-name}-source.md`

Example: `my-project-source.md`

## Required sections

1. Raw file path
2. Date of ingestion
3. What the source covered
4. Pages created or updated
5. Key facts extracted
6. What was missing or thin

## Rules

Source summary files are created by agents during `\ingest`.
They are not edited manually.
They are not primary knowledge — they are audit records.

If you need to update a wiki page, update the wiki page.
If the raw source has been updated, run `\ingest` again.
