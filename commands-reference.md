# Commands Reference

All commands use the `\` prefix. They are workflow instructions for agents, not shell commands.

## Agent Execution Model

When a user invokes a command, the agent must:

1. Identify the target domain.
2. Read the root instruction file for its agent context (`CLAUDE.md`, `AGENTS.md`, or `GPT.md`).
3. Read the domain instruction file for its agent context.
4. Read the domain `commands.md`.
5. Read the required input files.
6. Create or update the specified output files.
7. Respect raw file immutability.
8. Respect privacy rules.
9. Append to the domain `log.md` when the command writes files.

If a required input file is missing, stop and report the missing file. Never guess.

---

## Career Domain

| Command | Purpose |
|---|---|
| `\add {opportunity-name}` | Read a raw job opportunity file and create a fit analysis |
| `\decide {opportunity-name}` | Use the fit analysis to decide whether to apply |
| `\cv {opportunity-name}` | Generate a tailored CV for the specific opportunity |
| `\cover {opportunity-name}` | Generate a tailored cover letter |
| `\tracker {opportunity-name}` | Update the applications tracker after a completed cycle |
| `\apply {opportunity-name}` | Run the full pipeline: add, decide, cv, cover, tracker |

## Projects Domain

| Command | Purpose |
|---|---|
| `\ingest {project-name}` | Process a raw project file into the full wiki structure |
| `\update {project-name} {description}` | Update the wiki when a project evolves |
| `\connect {project-name}` | Link project decisions to career evidence |
| `\extract {project-name} {decision}` | Turn a technical decision into an interview-ready narrative |
| `\query {question}` | Answer questions about documented projects |
| `\lint` | Audit the domain for gaps and inconsistencies |
| `\plan {project-name}` | Create a planning stub before code exists |

## Writing Domain

| Command | Purpose |
|---|---|
| `\draft {topic}` | Write a draft article or essay |
| `\ingest {piece-name}` | Process an approved piece into the wiki structure |
| `\refine {piece-name}` | Improve an existing draft |
| `\publish-prep {piece-name}` | Prepare a piece for publication (SEO, metadata, format) |
| `\query {tag}` | Find pieces by topic or theme |
| `\review` | Audit the domain for unpublished drafts and gaps |

## Personal Domain

| Command | Purpose |
|---|---|
| `\journal` | Write or add to today's diary entry |
| `\track {metrics}` | Log health metrics from natural language |
| `\decide {description}` | Document a significant decision |
| `\review {week/month/quarter}` | Conduct a structured periodic review |
| `\query {question}` | Query entries, patterns, or data |

## Cross-Domain Signals

These are automatic notifications, not commands. They are generated after `\journal`, `\track`, and `\review`.

| Signal | Trigger | Target |
|---|---|---|
| Writing-worthy | A diary entry describes a significant event | `writing/` — offer `\draft` |
| Career-adjacent | An entry or decision has professional implications | `career/` — offer relevant update |
| Burnout warning | Energy at or below 2 for 5 or more consecutive days | Suggest reducing work pace |
| Decision review | A decision has passed its review date | Prompt to update Result field |

Signals are offers. The user decides whether to act.
