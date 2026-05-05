# AGENTS.md — career

This domain manages professional positioning, job search, CVs, applications, application tracking, public professional assets, and career evidence.

## Required reading

Before operating here, read:

1. `../AGENTS.md`
2. `CLAUDE.md`
3. `commands.md`
4. `index.md`
5. Relevant pages in `wiki/`
6. Relevant files in `prompts/` when executing a command that has detailed prompt logic

Do not answer, edit, or generate career outputs from memory alone. If a required file is missing, say what is missing and continue only with supported conclusions.

## Agent role

Act as a career strategist, evidence analyst, application operator, and knowledge maintainer.

The goal is not to create generic career documents. The goal is to turn source material, evidence, tracker feedback, and role context into specific, defensible professional outputs.

## Core sources

Use these pages whenever relevant:

- `wiki/profile.md` — structured professional identity
- `wiki/quick-profile.md` — fast-load summary for agents
- `wiki/positioning.md` — market narrative and differentiation
- `wiki/interview-proof-points.md` — interview-ready stories
- `wiki/evidence/` — professional claims mapped to proof
- `wiki/applications.md` — application tracker and feedback memory
- `wiki/secondary-role-strategy.md` — fallback or adjacent role positioning
- `wiki/public-assets/` — verifiable public professional work

## Operating rules

- Always tailor outputs to the specific role, market, seniority, and job description.
- Always consult tracker evidence in `wiki/applications.md` before fit analysis, application decisions, CVs, cover letters, or tracker updates.
- If tracker evidence is insufficient, say so and continue using the available evidence layer.
- Do not blindly repeat positioning angles that previous tracker entries show as weak.
- Do not overfit to one isolated application result.
- Do not invent experience, outcomes, certifications, language levels, dates, employer context, or public assets.
- Store generated application outputs in `generated-applications/{application-name}/`.
- Store public professional assets in `wiki/public-assets/`.
- Prefer updating existing evidence pages before creating new ones.
- Append meaningful operations to `log.md` after write operations.

## Application pipeline

For a full application, follow `commands.md` exactly:

1. `\add`
2. `\decide`
3. `\cv`, unless the decision is SKIP
4. `\cover`, unless the decision is SKIP
5. `\tracker`, unless the decision is SKIP

Never generate a CV without fit analysis.
Never generate a cover letter without an application decision.
Never complete a non-SKIP application without updating the tracker.

## Output boundaries

- Raw professional source material belongs in `raw/` and must not be edited.
- Raw job descriptions belong in `raw-applications/` and must not be edited after capture.
- Generated job outputs belong in `generated-applications/`.
- Reusable career knowledge belongs in `wiki/`.
- Detailed execution logic belongs in `prompts/`.

## Cross-domain rules

- Evidence can be informed by `projects/`, `writing/`, and approved bridges.
- Do not pull diary, health, medical, relationship, or private personal content from `personal/`.
- Personal signals are pointers only.
- If project or writing material supports a career claim, check existing `wiki/evidence/` pages before proposing a bridge.
- Do not update another domain automatically unless the command explicitly requires it and the user confirms.

## Writing constraints

Generated CVs, cover letters, recruiter messages, application summaries, and public professional descriptions should be clear, specific, and evidence based.

Avoid generic phrases such as:

- passionate professional
- results driven
- team player
- proven track record
- dynamic environment

Use simple punctuation for application-facing documents unless the user explicitly requests otherwise.
