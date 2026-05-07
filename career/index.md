# career, Index

Current state of knowledge for the career domain.

## Domain purpose

This domain exists to support:
- CV generation
- Job applications
- Interview preparation
- Professional positioning
- Recruiter communication
- Application response tracking
- Career strategy feedback loops

It is not a storage area. It is an operational system.

## Domain structure

| Folder | Purpose |
|--------|---------|
| raw/ | Core professional sources: profile documents, old CVs, reference material |
| raw-applications/ | Captured job descriptions, immutable source material |
| raw-responses/ | Raw company responses, immutable outcome evidence |
| generated-applications/ | Tailored outputs per application: CV, cover letter, analysis, response analysis, next action |
| wiki/ | Structured reusable career knowledge |
| prompts/ | Detailed agent execution logic for each command |

## Status checklist

### Core foundation
- [ ] Professional profile ingested, raw/
- [ ] CV baseline created, wiki/cv-base/ or similar

### Core structure
- [ ] Structured profile built, wiki/profile.md
- [ ] Quick-profile query surface built, wiki/quick-profile.md
- [ ] Positioning strategy defined, wiki/positioning.md
- [ ] Interview proof points built, wiki/interview-proof-points.md
- [ ] Evidence layer started, wiki/evidence/
- [ ] Application tracker initialised, wiki/applications.md
- [ ] Response signal rules created, wiki/response-signal-rules.md
- [ ] Secondary role strategy defined, wiki/secondary-role-strategy.md

### Operational usage
- [ ] First raw application ingested, raw-applications/
- [ ] First fit analysis created, generated-applications/
- [ ] First CV generated for a real role
- [ ] First cover letter generated
- [ ] First application tracked in wiki/applications.md
- [ ] First raw response stored, raw-responses/
- [ ] First application response analysed
- [ ] First next action generated from a response

## Core wiki pages

| Page | Purpose |
|------|---------|
| wiki/profile.md | Structured professional identity |
| wiki/quick-profile.md | Fast-load query surface for agents |
| wiki/positioning.md | Market narrative and differentiation |
| wiki/interview-proof-points.md | Structured bank of interview stories |
| wiki/evidence/ | Strengths mapped to real proof |
| wiki/applications.md | Application tracking and feedback system |
| wiki/response-signal-rules.md | Rules for interpreting company responses and outcomes |
| wiki/secondary-role-strategy.md | Positioning for non-primary roles |
| wiki/public-assets/ | Published professional assets |

## Prompts layer

| File | Purpose |
|------|---------|
| prompts/ingest-fit-analysis.md | Detailed logic for \add command |
| prompts/application-decision.md | Detailed logic for \decide command |
| prompts/cv-generator.md | Detailed logic for \cv command |
| prompts/cover-letter.md | Detailed logic for \cover command |
| prompts/cover-letter-validation.md | Validation checklist for cover letters |
| prompts/update-tracker.md | Detailed logic for \tracker command |
| prompts/update-application-response.md | Detailed logic for \response command |

## Application workflow

### Step 1: Capture

Save job description in career/raw-applications/

### Step 2: Analyse

\add {application-name}

Generates: fit-analysis.md

### Step 3: Decide

\decide {application-name}

Generates: application-decision.md

### Step 4: Generate documents

\cv {application-name}

\cover {application-name}, when required or strategically useful

### Step 5: Track application

\tracker {application-name}

Updates: wiki/applications.md

Generates: follow-up-reminder.md

### Step 6: Capture response

Save company response in:

career/raw-responses/{application-name}/YYYY-MM-DD-response.md

This includes rejection, interview invitation, assessment request, offer, follow up reply, or confirmed no-response outcome after the follow up window.

### Step 7: Analyse response

\response {application-name}

Updates: wiki/applications.md

Generates: response-analysis.md

Generates: next-action.md

## Domain rules

### Rule 1

Everything must connect to evidence, real projects, real situations, or real market outcomes. No abstract claims.

### Rule 2

Positioning overrides description. Do not describe what you did. Describe what problems you solve.

### Rule 3

Generated outputs must be traceable. Every CV and cover letter references a specific application and is stored in generated-applications/.

### Rule 4

The tracker is feedback memory, not an archive. Read it before every application.

### Rule 5

No orphan work. If a document is generated, it is stored, linked to an application, and tracked.

### Rule 6

The application process is not strategically complete until a response, rejection, interview signal, assessment request, offer, follow up outcome, or archived no-response outcome has been recorded when available.

### Rule 7

Do not invent outcomes. If the company response does not explain the reason, mark the reason as Unknown and treat the signal strength as Low unless there is concrete evidence.
