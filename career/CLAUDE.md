# CLAUDE.md — career

This domain manages professional positioning, job search, CVs, applications, and career evidence.

## Required reading

Before operating here, read:

1. `../CLAUDE.md`
2. `commands.md`
3. `index.md`
4. Relevant pages in `wiki/`

## Core sources

Use these pages whenever relevant:

- `wiki/profile.md` — structured professional identity
- `wiki/positioning.md` — market narrative and differentiation
- `wiki/evidence/` — strengths mapped to concrete proof
- `wiki/applications.md` — application tracker and lessons

## Operating rules

- Always tailor outputs to the specific role, market, and job description.
- Consult tracker evidence in `wiki/applications.md` before generating CVs, cover letters, or fit analyses.
- Do not invent experience, outcomes, certifications, language levels, dates, or employer context.
- Store generated application outputs in `generated-applications/{application-name}/`.
- Append meaningful operations to `log.md`.

## Application pipeline

For a full application, follow `commands.md` exactly:

1. `\add`
2. `\decide`
3. `\cv`
4. `\cover`
5. `\tracker`

Never generate a CV without fit analysis. Never generate a cover letter without an application decision.

## Cross-domain rules

- Evidence can be informed by `projects/` content and approved bridges.
- Do not pull diary or health content from `personal/`.
- Personal signals are pointers only.
