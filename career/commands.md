# commands.md, career

These commands standardise how agents operate in the career domain.

## Agent Execution Model

These are workflow instructions for agents, not shell commands.

When invoked, the agent must read the required input files, create or update the specified output files, and respect domain rules.

Before executing any command:

1. Read `../CLAUDE.md` or `../AGENTS.md`, depending on agent context.
2. Read this `commands.md`.
3. Read `index.md`.
4. Read the input files listed in the command.

If a required input file is missing, stop and report it. Never guess.

After any write operation, append a short note to `log.md`.

## Prompts Layer

Each command has a corresponding detailed prompt file in `career/prompts/`.

Before executing any command, read the corresponding prompt file for full agent logic.

| Command | Prompt file |
|---------|-------------|
| `\add` | `career/prompts/ingest-fit-analysis.md` |
| `\decide` | `career/prompts/application-decision.md` |
| `\cv` | `career/prompts/cv-generator.md` |
| `\cover` | `career/prompts/cover-letter.md` + `career/prompts/cover-letter-validation.md` |
| `\tracker` | `career/prompts/update-tracker.md` |
| `\response` | `career/prompts/update-application-response.md` |

The `commands.md` defines the input and output contract. The prompt files define the execution logic.

For DOCX generation, read `career/prompts/docx-format.md` before generating any `.docx` file.

## Tracker Rule

The tracker in `wiki/applications.md` is feedback memory, not an archive.

Before generating fit analysis, decisions, CVs, cover letters, recruiter messages, or response drafts, review the tracker for patterns.

Review what produced silence, what produced responses, what produced interviews, what produced assessment requests, and what screening risks appeared more than once.

Do not overfit to one isolated result. Do not ignore a repeated pattern.

A submitted application is not enough evidence.

A response is stronger evidence than the original application package.

Silence after the follow up window is also evidence, but only when the follow up window has passed.

## \add {application-name}

**Purpose:** Create structured understanding of a job opportunity.

**Input:**
- `raw-applications/{application-name}.md`
- `wiki/profile.md`
- `wiki/positioning.md`
- `wiki/applications.md`, if it exists

**Output:**
- `generated-applications/{application-name}/fit-analysis.md`

**What the output must contain:**
- Match score, High, High with screening risk, Medium, or Low
- Strong matches with evidence references
- Weak points and screening risks
- Positioning angle to use
- CV strategy
- Cover letter strategy
- Competitive advantage
- Go or No Go recommendation

## \decide {application-name}

**Purpose:** Decide whether the application is worth pursuing.

**Input:**
- `generated-applications/{application-name}/fit-analysis.md`
- `wiki/applications.md`, if it exists

**Output:**
- `generated-applications/{application-name}/application-decision.md`

**Decision options:** APPLY, APPLY WITH ADJUSTMENTS, SKIP

**What the output must contain:**
- Decision
- Reasoning, short and direct
- Winning condition
- Failure risk
- Effort level
- Strategy if APPLY or APPLY WITH ADJUSTMENTS

## \cv {application-name}

**Purpose:** Generate a tailored ATS CV for the specific application.

**Input:**
- `raw-applications/{application-name}.md`
- `generated-applications/{application-name}/fit-analysis.md`
- `generated-applications/{application-name}/application-decision.md`
- `wiki/profile.md`
- `wiki/positioning.md`
- `wiki/evidence/`, mandatory

**Output:**
- `generated-applications/{application-name}/cv-ats-en.md`, markdown primary output
- `generated-applications/{application-name}/cv-{application-name}.docx`, DOCX generated from markdown

**DOCX generation sequence:**
1. Generate `cv-ats-en.md` following the structure in `career/prompts/docx-format.md`.
2. Validate the markdown against the simple punctuation rule.
3. Run: `node _scripts/gen-cv.js {application-name}`.
4. Verify the DOCX was created.

**Rules:**
- Tailor to the specific role and market.
- Use evidence from `wiki/evidence/`.
- Do not exaggerate titles or invent metrics.
- Apply tracker lessons from `wiki/applications.md`.
- Apply response outcomes from similar applications when they exist.
- Follow the simple punctuation rule throughout.

## \cover {application-name}

**Purpose:** Generate a tailored cover letter for the specific application.

**Input:**
- `raw-applications/{application-name}.md`
- `generated-applications/{application-name}/fit-analysis.md`
- `generated-applications/{application-name}/application-decision.md`
- `generated-applications/{application-name}/cv-ats-en.md`
- `wiki/profile.md`
- `wiki/positioning.md`

**Sequence:**
1. Generate `cover-letter-en.md` following the structure in `career/prompts/docx-format.md`.
2. Run all validation checks from `career/prompts/cover-letter-validation.md`.
3. If any check fails, rewrite and run validation again.
4. Output the cover letter only after all checks pass.
5. Run: `node _scripts/gen-cover.js {application-name}`.
6. Verify the DOCX was created.

**Output:**
- `generated-applications/{application-name}/cover-letter-en.md`, markdown
- `generated-applications/{application-name}/cover-letter-{application-name}.docx`, DOCX

**Cover letter rules:**
- The cover letter must not repeat the CV. It must interpret it.
- Lead with the strongest role-relevant angle from the fit analysis.
- No generic phrases: "I am passionate about", "results-driven", "team player".
- Handle weaknesses through framing, not apology.
- 220 to 320 words.
- Apply response outcomes from similar applications when they exist.

## \tracker {application-name}

**Purpose:** Update the application tracker after a completed cycle.

**Mode:**
- `WITH_COVER`, when a cover letter was created
- `NO_COVER`, when no cover letter was required or useful

**Input:**
- All files in `generated-applications/{application-name}/`
- `raw-applications/{application-name}.md`
- `wiki/applications.md`

**Output:**
- `wiki/applications.md`, new row added
- `wiki/applications.md`, lessons learned entry added
- `generated-applications/{application-name}/follow-up-reminder.md`

If no cover letter was created, record the reason in the tracker row under Notes.

**Status options:** planned, drafted, submitted, follow-up due, follow-up sent, interview, rejected, archived

## \response {application-name}

**Purpose:** Update an existing application after receiving a company response, rejection, interview invitation, assessment request, offer, follow up reply, or confirmed silence after follow up.

This command closes the feedback loop.

The application process does not end when the CV is sent.

It becomes useful when the result is recorded.

**Use:**

`career/prompts/update-application-response.md`

**Input, mandatory:**
- `raw-responses/{application-name}/YYYY-MM-DD-response.md`
- `wiki/applications.md`
- `generated-applications/{application-name}/fit-analysis.md`
- `generated-applications/{application-name}/application-decision.md`
- `generated-applications/{application-name}/cv-ats-en.md`, if it exists
- `generated-applications/{application-name}/cv-{application-name}.md`, if it exists
- `wiki/response-signal-rules.md`, if it exists
- `index.md`

**Input, optional:**
- `generated-applications/{application-name}/cover-letter-en.md`
- `generated-applications/{application-name}/cover-letter-{application-name}.md`
- Additional raw response files inside `raw-responses/{application-name}/`

**Output:**
- `wiki/applications.md`, existing row updated
- `wiki/applications.md`, response entry added to Lessons learned log
- `generated-applications/{application-name}/response-analysis.md`
- `generated-applications/{application-name}/next-action.md`
- `log.md`, operation note added

**Status values supported by response updates:**
- response received
- rejected
- interview invited
- interview scheduled
- interview completed
- assessment requested
- assessment submitted
- follow up reply
- offer
- withdrawn by candidate
- no response after follow up
- archived

**Rules:**
1. Never overwrite the original tracker entry.
2. Never invent a reason for rejection.
3. If the response is generic, mark signal strength as Low.
4. If the response includes indirect evidence, mark signal strength as Medium.
5. If the response includes specific feedback, interview traction, an assessment request, or an offer, mark signal strength as High.
6. If the response creates a next action, generate it clearly.
7. If the response closes the process, mark the application as archived only after the final outcome is recorded.
8. Future commands must read response outcomes before generating new applications for similar roles.
9. Do not modify raw response files.
10. Do not treat silence as a negative signal before the follow up window has passed.

## \apply {application-name}

**Purpose:** Run the full pipeline.

**Steps:**
1. `\add`
2. `\decide`
3. If not SKIP: `\cv`
4. If not SKIP: decide whether a cover letter is required
5. If cover letter is required: `\cover`
6. If no cover letter: record NO_COVER mode
7. If not SKIP: `\tracker`

**Post submission lifecycle:**
1. Save any company response in `career/raw-responses/{application-name}/YYYY-MM-DD-response.md`.
2. Run `\response {application-name}`.
3. Read `generated-applications/{application-name}/response-analysis.md`.
4. Read `generated-applications/{application-name}/next-action.md`.
5. Use the next action to reply, prepare, archive, or update strategy.

Never skip `\decide`. Never generate a CV without fit analysis. Never complete without `\tracker`.

Do not run `\response` until there is a real raw response file or a confirmed no-response outcome after follow up.

## \asset {asset-name}

**Purpose:** Register a public professional asset into the career domain.

Use when:
1. An article, post, or essay is published publicly.
2. A custom AI tool, template, or framework is made public.
3. A talk, workshop, or training resource is published.
4. Any public-facing professional output is created.

**Input:**
- Asset title and description
- Direct URL to the published asset
- Related role targets
- Related capabilities

**Output:**
- `career/wiki/public-assets/{asset-name}.md`

**Rules:**
1. Do not treat public assets as job applications.
2. Do not store them in `generated-applications/`.
3. Every public asset must connect to at least one capability in `career/wiki/evidence/`.
4. If the asset does not strengthen positioning in a verifiable way, do not add it.

## Simple Punctuation Rule

All generated CV, cover letter, application text, recruiter messages, and response drafts must use only simple punctuation.

Allowed: period, comma, question mark, exclamation mark, straight quotation marks, colon.

Forbidden: em dashes, en dashes, decorative strokes, decorative separators, semicolons, excessive parentheses.

Scan all output before saving. Rewrite any affected sentence.
