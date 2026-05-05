# commands.md — projects

These commands standardise how agents operate in the projects domain.

Commands are workflow instructions for agents, not shell commands.

## Agent Execution Model

Before executing any command:

1. Read `../CLAUDE.md` or `../AGENTS.md`, depending on agent context.
2. Read `AGENTS.md`.
3. Read `CLAUDE.md`.
4. Read this `commands.md`.
5. Read `index.md`.
6. Read the required input files listed in the command.

If a required input file is missing, stop and report it. Never guess.

After any write operation:

1. Update only the allowed output files.
2. Update `index.md` if domain state or navigation changed.
3. Append a short note to `log.md`.
4. Report changed files.

---

## \ingest {project-name}

**Purpose:** Process a raw project file into the full project wiki structure.

**Input:**

- `raw/{project-name}.md`
- `index.md`
- Existing relevant pages in `wiki/projects/`, `wiki/architecture/`, `wiki/flows/`, `wiki/decisions/`, `wiki/issues/`, `wiki/improvements/`, or `wiki/patterns/` when present

**Output:**

- `wiki/projects/{project-name}.md`
- `wiki/decisions/{project-name}-decisions.md`
- Optional supporting pages in `wiki/architecture/`, `wiki/flows/`, `wiki/issues/`, `wiki/improvements/`, or `wiki/patterns/` when the source supports them
- Updated `index.md`
- Updated `log.md`

**Steps:**

1. Read the raw project file.
2. Identify the project purpose, stack, architecture, features, flows, decisions, issues, and improvement opportunities.
3. Check existing wiki pages to avoid duplicates.
4. Create or update the project page.
5. Create or update the decision page.
6. Create supporting pages only when they add reusable structure.
7. Update `index.md`.
8. Append to `log.md`.

**Required sections in the project page:**

- What it is
- Stack
- Architecture
- Key features
- Main flows
- Decisions, with link to decisions page
- Known issues
- Improvement opportunities
- Career evidence signal
- Source pointers
- Missing context

**Required sections in the decisions page:**

- Every non-obvious technical decision with what was decided, why, trade-off, verdict, and source pointer.

**Confirmation:**

- Writing inside `projects/` is allowed by this command.
- Writing outside `projects/` requires user confirmation.

---

## \update {project-name} {description}

**Purpose:** Update the wiki when a documented project evolves.

**Input:**

- Natural language description of what changed
- `wiki/projects/{project-name}.md`
- `wiki/decisions/{project-name}-decisions.md`
- Other affected wiki pages when relevant

**Output:**

- Updated affected project wiki pages
- Updated decision page if the change introduces or revises a decision
- Updated `index.md` if project status, structure, or navigation changed
- Updated `log.md`

**Steps:**

1. Read the existing project page and decision page.
2. Identify which pages are affected.
3. Update only affected pages.
4. If the change introduces a new decision, add it to the decisions page.
5. If the change affects architecture, flows, issues, improvements, or patterns, update the relevant section or page.
6. Update `index.md` when needed.
7. Append to `log.md`.

**Confirmation:**

- Writing inside `projects/` is allowed by this command.
- Writing outside `projects/` requires user confirmation.

---

## \connect {project-name}

**Purpose:** Find connections between a project and another domain, usually career evidence.

**Input:**

- `wiki/projects/{project-name}.md`
- `wiki/decisions/{project-name}-decisions.md`
- Relevant `../career/wiki/evidence/` pages when connecting to career
- Relevant bridge files in `_bridges/` when they exist

**Output:**

- Inline proposal by default
- Optional proposed update to `../career/wiki/evidence/{capability}.md`
- Optional proposed bridge in `_bridges/projects-to-career/`
- Updated `log.md` only if a confirmed write is made

**Steps:**

1. Identify what professional claims the project supports.
2. Check existing career evidence files.
3. If an evidence file already covers the claim, propose adding the project as supporting proof.
4. If no evidence file covers it and the claim is genuinely new, propose a bridge.
5. Report findings clearly.
6. Wait for confirmation before writing outside `projects/`.

**Confirmation:**

- Always wait for confirmation before updating `career/` or `_bridges/`.

---

## \extract {project-name} {decision}

**Purpose:** Turn a documented technical decision into an interview-ready narrative.

**Input:**

- `wiki/projects/{project-name}.md`
- `wiki/decisions/{project-name}-decisions.md`
- Specific decision name or description

**Output:**

- Inline narrative only, unless the user asks to save it

**Steps:**

1. Read the project page.
2. Read the decision page.
3. Locate the decision.
4. Extract context, naive approach, chosen approach, reasoning, trade-off, and result.
5. Produce the narrative format below.
6. If evidence is missing, state what cannot be supported.

**Output format:**

```text
PROJECT: {name}
DECISION: {what was decided}
CAREER CLAIM: what capability this proves

INTERVIEW NARRATIVE, 60 to 90 seconds:
  Context: what the system needed
  Naive approach: what most people would have done
  What I chose: the actual decision
  Why: the reasoning
  Result: what this enabled or prevented

CV BULLET: one strong bullet, 20 to 30 words
OBJECTION ANSWERED: which hiring objection this defeats
BEST USE: which interview question type this fits
```

**Confirmation:**

- No file is written unless the user explicitly asks to save it.

---

## \query {question}

**Purpose:** Answer questions about documented projects.

**Input:**

- `index.md`
- Relevant project, architecture, flow, decision, pattern, issue, or improvement pages

**Output:**

- Inline answer only, unless the user asks to save an update

**Steps:**

1. Read `index.md`.
2. Identify relevant wiki pages.
3. Read the minimum relevant pages.
4. Provide a direct answer grounded in those pages.
5. If documentation is missing, say what is missing.
6. Suggest a follow-up update only when useful.

**Confirmation:**

- No file is written unless the user explicitly asks to save an update.

---

## \lint

**Purpose:** Audit the projects domain for gaps and inconsistencies.

**Input:**

- `index.md`
- Relevant pages in `wiki/projects/`, `wiki/decisions/`, `wiki/architecture/`, `wiki/flows/`, `wiki/issues/`, `wiki/improvements/`, and `wiki/patterns/`
- Relevant bridge files when referenced by projects

**Output:**

- Inline audit report by default
- Optional proposed file updates, only with confirmation

**Checks:**

- Projects without decision pages
- Decision pages without project pages
- Issues with no mitigation progress
- Bridges referencing pages that no longer exist
- Projects listed in index but not in wiki, or the reverse
- Patterns that should be extracted but are duplicated across pages
- Missing source pointers
- Missing log entries after obvious changes

**Confirmation:**

- Do not write audit fixes without confirmation.

---

## \plan {project-name}

**Purpose:** Create a planning stub before code exists.

**Input:**

- User-provided project idea, goal, or planning notes

**Output:**

- `raw/{project-name}-plan.md`
- Updated `log.md`

**Steps:**

1. Create a concise planning stub from the user's idea.
2. Include goal, intended users, possible stack, risks, open questions, and next action.
3. Save it in `raw/` as source material.
4. Append to `log.md`.

**Confirmation:**

- Ask for confirmation before creating the raw planning file if the user has not explicitly asked to save it.

**Rule:**

Planning stubs stay in `raw/` until the project has real code or implementation evidence. Then run `\ingest`.
