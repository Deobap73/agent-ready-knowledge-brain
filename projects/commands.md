# commands.md — projects

## Agent Execution Model

Workflow instructions for agents. Not shell commands. Read the required files before executing. Append to `log.md` after every write operation. Report missing inputs — never guess.

---

## \ingest {project-name}

**Purpose:** Process a raw project file into the full wiki structure.

**Input:** `raw/{project-name}.md`

**Output:**
- `wiki/projects/{project-name}.md`
- `wiki/decisions/{project-name}-decisions.md`
- Updated `index.md`
- Updated `log.md`

**Required sections in the project page:**
- What it is
- Stack
- Architecture
- Key features
- Main flows
- Decisions (link to decisions page)
- Known issues
- Career evidence signal

**Required sections in the decisions page:**
- Every non-obvious technical decision with: what was decided, why, trade-off, verdict.

---

## \update {project-name} {description}

**Purpose:** Update the wiki when a project evolves.

**Input:** Natural language description of what changed.

**Steps:**
1. Read the existing project page and decisions page.
2. Identify which pages are affected.
3. Update only affected pages.
4. If the change introduces a new decision, add it to the decisions page.
5. Append to `log.md`.

---

## \connect {project-name}

**Purpose:** Find connections between a project and the career domain.

**Input:**
- `wiki/projects/{project-name}.md`
- `wiki/decisions/{project-name}-decisions.md`
- `../career/wiki/evidence/`

**Steps:**
1. Identify what professional claims this project supports.
2. Check existing career evidence files.
3. If an evidence file covers it, propose adding the project as supporting proof.
4. If neither exists and the claim is genuinely new, propose a bridge.
5. Report findings. Wait for confirmation before writing outside projects.

---

## \extract {project-name} {decision}

**Purpose:** Turn a technical decision into an interview-ready narrative.

**Output (inline only):**

```
PROJECT: {name}
DECISION: {what was decided}
CAREER CLAIM: what capability this proves

INTERVIEW NARRATIVE (60 to 90 seconds):
  Context: what the system needed
  Naive approach: what most people would have done
  What I chose: the actual decision
  Why: the reasoning
  Result: what this enabled or prevented

CV BULLET: [one strong bullet, 20 to 30 words]
OBJECTION ANSWERED: which hiring objection this defeats
BEST USE: which interview question type this fits
```

---

## \query {question}

**Purpose:** Answer questions about the documented projects.

**Steps:**
1. Read `index.md`.
2. Read the relevant project and decision pages.
3. Provide a direct answer.
4. If documentation is missing, say what is missing.

---

## \lint

**Purpose:** Audit the domain for gaps and inconsistencies.

**Checks:**
- Projects without decision pages
- Issues with no mitigation progress
- Bridges referencing pages that no longer exist
- Projects listed in index but not in wiki, or the reverse

---

## \plan {project-name}

**Purpose:** Create a planning stub before code exists.

**Output:** `raw/{project-name}-plan.md`

Planning stubs stay in `raw/` until the project has real code. Then run `\ingest`.
