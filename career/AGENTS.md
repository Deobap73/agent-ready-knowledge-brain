# AGENTS.md — career

This domain manages professional positioning, job search, CVs, applications, and career evidence.

## Required reading

Before operating here, read:

1. `../AGENTS.md`
2. `commands.md`
3. `index.md`
4. Relevant pages in `wiki/`

## Core sources

Use these pages whenever relevant:

- `wiki/profile.md`
- `wiki/positioning.md`
- `wiki/evidence/`
- `wiki/applications.md`

## Operating rules

- Always tailor outputs to the specific role, market, seniority, and job description.
- Always consult tracker evidence in `wiki/applications.md` before fit analysis, application decisions, CVs, or cover letters.
- Do not invent experience, outcomes, certifications, language levels, dates, or employer context.
- Store generated application outputs in `generated-applications/{application-name}/`.
- Append meaningful operations to `log.md`.

## Application pipeline

1. `\add`
2. `\decide`
3. `\cv`, unless the decision is SKIP
4. `\cover`, unless the decision is SKIP
5. `\tracker`, unless the decision is SKIP

## Cross-domain rules

- Evidence can be informed by `projects/` and approved bridges.
- Do not pull diary or health content from `personal/`.
- Personal signals are pointers only.
- Prefer updating existing `wiki/evidence/` pages before proposing a new bridge.
