# Commands Reference

All commands use the `\` prefix. They are workflow instructions for agents, not shell commands.

This file is a high-level command map. The source of truth for execution is always the relevant domain `commands.md`.

## Agent Execution Model

When a user invokes a command, the agent must:

1. Identify the target domain.
2. Read the root instruction file for its agent context: `CLAUDE.md`, `AGENTS.md`, or `GPT.md`.
3. Read the domain `AGENTS.md`.
4. Read the domain `CLAUDE.md`.
5. Read the domain `commands.md`.
6. Read the domain `index.md`.
7. Read the required input files.
8. Create or update only the specified output files.
9. Respect raw file immutability.
10. Respect privacy rules.
11. Append to the domain `log.md` when the command writes files.

If a required input file is missing, stop and report the missing file. Never guess.

---

## Career Domain

Detailed source of truth: `career/commands.md`

| Command | Purpose |
|---|---|
| `\add {application-name}` | Read a raw job opportunity file and create a fit analysis |
| `\decide {application-name}` | Use the fit analysis to decide whether to apply |
| `\cv {application-name}` | Generate a tailored ATS CV for the specific opportunity |
| `\cover {application-name}` | Generate a tailored cover letter when required or useful |
| `\tracker {application-name}` | Update the applications tracker after a completed cycle |
| `\apply {application-name}` | Run the full pipeline: add, decide, cv, optional cover, tracker |
| `\asset {asset-name}` | Register a public professional asset into career evidence |

Career commands may rely on detailed prompt files in `career/prompts/`.

---

## Projects Domain

Detailed source of truth: `projects/commands.md`

| Command | Purpose |
|---|---|
| `\ingest {project-name}` | Process a raw project file into the project wiki structure |
| `\update {project-name} {description}` | Update the wiki when a documented project evolves |
| `\connect {project-name}` | Find connections between project knowledge and career evidence |
| `\extract {project-name} {decision}` | Turn a technical decision into an interview-ready narrative |
| `\query {question}` | Answer questions about documented projects |
| `\lint` | Audit the domain for gaps and inconsistencies |
| `\plan {project-name}` | Create a planning stub before code exists |

---

## Writing Domain

Detailed source of truth: `writing/commands.md`

| Command | Purpose |
|---|---|
| `\draft {topic}` | Write a first draft from a topic, source note, or approved idea |
| `\ingest {piece-name}` | Process an approved raw piece into the wiki structure |
| `\refine {piece-name}` | Improve an existing draft for clarity, structure, and voice |
| `\publish-prep {piece-name}` | Prepare a piece for publication without publishing it |
| `\query {question-or-tag}` | Find or answer questions about writing pieces, themes, or status |
| `\review` | Audit the domain for stale drafts, missing metadata, and publication gaps |

---

## Personal Domain

Detailed source of truth: `personal/commands.md`

| Command | Purpose |
|---|---|
| `\journal {optional: date}` | Write or add to a diary entry |
| `\track {metrics}` | Log health metrics from natural language |
| `\decide {description}` | Document a significant personal or career-adjacent decision |
| `\review {week/month/quarter}` | Conduct a structured periodic review |
| `\query {question}` | Query entries, patterns, decisions, reviews, or data inside the personal domain |

Personal commands are subject to the strictest privacy rules. Health, diary, medical, and relationship content must not leave `personal/`.

---

## Cross-Domain Signals

Signals are automatic notifications, not commands.

They may be generated after `\journal`, `\track`, and `\review` inside the personal domain.

| Signal | Trigger | Target | Content allowed |
|---|---|---|---|
| Writing-worthy | A diary entry describes a significant experience | `writing/` | Pointer only |
| Career-adjacent | An entry or decision has professional implications | `career/` | Pointer only |
| Burnout warning | Energy at or below threshold for repeated days | Personal planning only | Pointer only |
| Decision review | A decision has passed its review date | `personal/` | Pointer only |

Signals are offers. The user decides whether to act.

Signals must never include diary excerpts, health details, medical notes, relationship details, or private emotional content.

---

## Cross-Domain Bridges

Detailed source of truth: `_bridges/AGENTS.md`

Bridges are not commands. They are cross-domain synthesis files.

Use `_bridges/` only when a connection between domains creates new meaning that cannot live inside either source domain alone.

Do not create bridges for simple references, summaries, or convenience links.
