# Agent Ready Knowledge Brain

A multi-agent Obsidian vault template for building a portable Knowledge Brain that works with Claude Code, Codex, ChatGPT Projects, Custom GPTs, Antigravity, and repository-based AI workflows.

<br> <br>
<img src="_blog/agent-ready-knowledge-brain.webp">
<br> <br>

## Why this exists

A lot of people are already using Obsidian with Claude Code to create what is often called a Knowledge Brain.

The usual setup is simple.

You create an Obsidian vault.
You add notes, project files, ideas, personal knowledge, and structured folders.
You add a `CLAUDE.md` file to explain how the vault works.
You run Claude Code inside the vault folder.
Claude reads the rules and starts helping you work with your notes.

That works well.

But it raises a bigger question.

What happens when you do not want to use only Claude?

What happens when you want the same Knowledge Brain to work with different agents?

What happens when the agent does not operate naturally inside the terminal of the Obsidian vault?

That is the problem this template tries to solve.

Claude Code can work directly inside the local vault. Other agents, such as Codex, GPT-based assistants, IDE agents, or repository-based tools, often need a different operating model.

So the idea is simple.

Obsidian remains the human interface.

The local Markdown vault remains the source of truth.

Claude Code can operate locally through the terminal.

Antigravity can open the same local project folder and use Codex, OpenAI's coding agent, inside an IDE-based workflow.

A private GitHub repository becomes the synchronisation, portability, and access layer.

`CLAUDE.md` is the behavioural source of truth.

`AGENTS.md` is the compatibility entry point for Codex, Antigravity, Cursor, and repository-based agents.

`GPT.md` adapts the same system for ChatGPT Projects and Custom GPTs.

`commands.md` defines repeatable workflows that all agents can follow.

This turns the vault from a local-first note folder into a portable, version-controlled, multi-environment, and multi-agent Knowledge Brain.

## The core idea

Most note systems store information.

This template adds an operating model.

A real Knowledge Brain should tell agents:

1. What they must read first.
2. Which domain they are working in.
3. What files they can change.
4. What files they must never touch.
5. Where generated outputs must go.
6. Which privacy rules apply.
7. Which workflow to follow when a command is invoked.
8. What needs to be logged after changes.
9. Which file is the source of truth when multiple agent entry files exist.

Without that structure, an agent has to guess.

And when agents guess inside a knowledge system, they eventually create a mess.

## Why this is different

Most Obsidian and AI setups stop at `CLAUDE.md`.

That is useful, but it usually binds the workflow to one agent, one local terminal workflow, and one way of working.

This template is built around a different idea.

The vault is the source of truth.

`CLAUDE.md` contains the main behavioural rules.

Other agent entry files should point back to those rules instead of duplicating them.

Different agents should be able to operate on the same structure, with the same rules, the same workflows, and the same safety boundaries.

| Agent context | Entry file | Behaviour source |
|---|---|---|
| Claude Code in terminal | `CLAUDE.md` | `CLAUDE.md` |
| Codex, Antigravity, Cursor, and repository-based agents | `AGENTS.md` | `CLAUDE.md` |
| ChatGPT Projects and Custom GPTs | `GPT.md` | `CLAUDE.md` adapted through `GPT.md` |
| All agents | `commands.md` for domain workflows | Domain `commands.md` |

A private GitHub repository adds the portability layer.

You can work locally in Obsidian, sync through Git, access the same vault from another machine, and let repository-based agents operate on the same structure.

You are no longer dependent only on the Obsidian local-first model.

You still keep the advantages of local Markdown.

But you also gain version control, remote access, reviewable changes, and multi-agent compatibility.

## What is inside

```text
agent-ready-knowledge-brain/
  CLAUDE.md
  AGENTS.md
  GPT.md
  commands-reference.md

  .claude/
    skills/
      README.md

  _bridges/
    projects-to-career/
      README.md
    writing-to-career/
      README.md
    personal-to-writing/

  docs/
    getting-started.md
    agent-workflow.md
    privacy-model.md
    evidence-framework.md

  career/
  projects/
  writing/
  personal/
```

Most domains follow the standard pattern. The career domain has an extended structure because job searching is the most operationally intensive use case.

### Standard domain pattern

```text
domain-name/
  CLAUDE.md
  AGENTS.md
  GPT.md
  commands.md
  index.md
  log.md
  raw/
  wiki/
```

### Career domain pattern (extended)

```text
career/
  CLAUDE.md
  AGENTS.md
  GPT.md
  commands.md
  index.md
  log.md
  raw/                          ← profile source material
  raw-applications/             ← captured job descriptions
  generated-applications/       ← tailored outputs per application
  prompts/
    README.md
    ingest-fit-analysis.md
    application-decision.md
    cv-generator.md
    cover-letter.md
    cover-letter-validation.md
    update-tracker.md
  wiki/
    profile.md
    quick-profile.md
    positioning.md
    interview-proof-points.md
    secondary-role-strategy.md
    applications.md
    evidence/
      README.md
      _template-strength.md
    public-assets/
      README.md
```

The `prompts/` folder is the career domain's most important extension. It holds detailed agent execution logic for each command, separate from the command definitions in `commands.md`. This separation keeps commands short and readable while allowing agent instructions to be as detailed as the task requires.

## How the main files work

### CLAUDE.md

`CLAUDE.md` is the behavioural source of truth for the vault.

Claude Code reads this file directly when operating locally in the terminal.

Other agent entry files should point back to this file instead of duplicating its rules.

### AGENTS.md

`AGENTS.md` is the compatibility entry point for Codex, Antigravity, Cursor, and repository-based agents.

It tells those agents how to enter the vault, then directs them to the root `CLAUDE.md`, the relevant domain `CLAUDE.md`, the relevant domain `commands.md`, and the relevant domain `index.md`.

It should not become a second source of truth.

### GPT.md

`GPT.md` adapts the same knowledge system for ChatGPT Projects and Custom GPTs.

ChatGPT may not always have direct access to the local vault. This file explains how to request the right files, avoid guessing, and work with uploaded or linked knowledge.

### commands.md

`commands.md` defines repeatable workflows.

These are not shell commands. They are Markdown-based workflow contracts for agents.

For example:

```text
\ingest projects my-first-project
```

This tells the agent to read the relevant domain instructions and follow the documented workflow.

### prompts/ (career domain)

`prompts/` holds the detailed agent execution logic for each career command.

This separation exists because `commands.md` needs to be short and readable. The detailed logic — how to score a fit analysis, how to validate a cover letter, how to structure tracker signals — belongs in the prompts layer.

When an agent executes a career command, it reads `commands.md` for the input/output contract, then reads the corresponding prompt file for the full execution logic.

### raw

`raw` stores original source material.

Agents must never modify files inside `raw` unless a command explicitly says a newly approved source must be saved there.

### raw-applications (career domain)

`raw-applications` stores captured job descriptions. These are immutable source material.

This is separate from `raw` to distinguish between your own professional source material and external job opportunity inputs.

### wiki

`wiki` stores processed and structured knowledge.

Agents can update `wiki` only when the change is supported by source material and the domain rules allow it.

### index.md

`index.md` acts as the domain map.

Agents read it before modifying structured knowledge.

### log.md

`log.md` records operational changes.

Every write operation should append a short note to the relevant `log.md`.

### _bridges

`_bridges` stores cross-domain synthesis.

A bridge is not a lazy link.

A bridge should exist only when a relationship between domains creates new meaning that could not exist inside either domain alone.

### .claude/skills

`.claude/skills` stores custom Claude.ai skills that extend the vault's capabilities for specific task types.

A skill is a Markdown file that defines a specialised agent behaviour — a specific voice, a specific workflow, a specific format — for a task type that needs its own instruction layer. Skills are separate from the vault's structural logic and are loaded by Claude.ai when a specific task is triggered.

Common skill types: memoir writing voice guides, interview coaching personas, domain-specific analysis frameworks.

See `.claude/skills/README.md` for the full format and examples.

## Why use a private GitHub repository

Obsidian is local-first, and that is one of its strengths.

But local-first also creates a limitation.

If an agent cannot access the local vault folder, it cannot really operate on the Knowledge Brain. It can only generate text for you to copy.

By syncing the vault with a private GitHub repository, you create a controlled access layer.

This gives you:

1. Access from different machines.
2. Version control.
3. Commit history.
4. Rollback.
5. Branch-based experiments.
6. Reviewable diffs.
7. Compatibility with repository-based agents.
8. A way for different local environments to work on the same vault.

The repository should be private if your vault contains personal notes, private workflows, career material, or sensitive thinking.

Do not put a personal Knowledge Brain in a public repository unless you are absolutely sure it contains no private content.

## Local workflow with Obsidian and Claude Code

This is the classic local workflow.

Open the repository folder as an Obsidian vault.

Then open a terminal in the same folder and run Claude Code.

```bash
cd agent-ready-knowledge-brain
claude
```

Claude Code reads `CLAUDE.md` at the root automatically. It understands the domain structure and is ready to follow commands.

Test it with a simple query:

```
\query projects what projects are documented here
```

The agent will read `projects/index.md` and report the current state.

## Local workflow with Antigravity and Codex

This template also supports a second local workflow.

Open the same project folder in Google Antigravity.

Antigravity can create its own `.code-workspace` file for the local project environment.

From there, use Codex, OpenAI's coding agent, to operate on the same vault structure.

Codex and repository-based agents should read:

1. The root `AGENTS.md`.
2. The root `CLAUDE.md`.
3. The relevant domain `AGENTS.md`.
4. The relevant domain `CLAUDE.md`.
5. The relevant domain `commands.md` when a command is invoked.
6. The relevant domain `prompts/` file when executing a command that has one.
7. The relevant `index.md` before modifying structured knowledge.
8. Only the minimum relevant wiki pages needed for the task.

This mode is useful when you want a local IDE-based agent experience instead of a terminal-based Claude Code workflow.

The important point is that both modes operate on the same Markdown-based vault and follow the same behavioural source of truth.

```text
Same local folder
Same Obsidian vault
Same Git repository
Different agent entry files
Same behavioural source of truth
Different working environments
```

Claude Code enters through `CLAUDE.md`.

Codex, Antigravity, Cursor, and repository-based agents enter through `AGENTS.md`.

ChatGPT Projects or Custom GPTs enter through `GPT.md`.

The vault remains the source of truth.

`CLAUDE.md` remains the behavioural source of truth.

## Working with ChatGPT Projects and Custom GPTs

ChatGPT does not automatically read local vault files.

This template includes `GPT.md` so the same knowledge brain can be adapted to ChatGPT Projects and Custom GPTs.

Depending on your setup, ChatGPT can work with the vault in three ways:

1. By using `GPT.md` as project or GPT instructions.
2. By uploading selected files such as `index.md`, `commands.md`, and wiki pages.
3. By connecting to the GitHub repository when repository access is available.

The rule is simple.

If ChatGPT cannot see a file, it must ask for it.

It must not invent the current state of the vault.

## Automatic sync with the Obsidian Git plugin

To keep the local vault synchronised with the private GitHub repository, this template works well with the Obsidian Git plugin by Vinzent.

Repository:

```text
https://github.com/Vinzent03/obsidian-git
```

The plugin can automatically commit and sync changes at a defined interval.

The relevant setting is:

```text
Auto commit and sync interval, minutes
```

For a public template, the safer starting recommendation is:

```text
Start with manual commits.
Enable auto commit and sync only after your workflow is stable.
Use short intervals only if you understand the risks.
```

This matters because agents can create many file changes quickly.

If auto sync is enabled, bad changes can be committed before you review them.

For personal use, 5 minutes may be acceptable if you trust your workflow and review changes regularly.

For beginners, manual sync or a longer interval is safer.

## Important distinction about automatic sync

Agents should not decide to push changes automatically.

Automatic sync is a user-configured vault behaviour.

If Obsidian Git is configured to auto commit and sync every few minutes, that is controlled by the user's vault configuration, not by the agent.

The rule is:

```text
No agent should initiate a push by itself.

If automatic sync is enabled through Obsidian Git, that sync is controlled by the user's vault configuration.
```

Recommended safety rules:

1. Keep the repository private if it contains personal content.
2. Review changes often.
3. Do not let agents initiate push operations by themselves.
4. Use Git history to recover from bad edits.
5. Keep raw files immutable.
6. Avoid running large agent operations right before an automatic sync.
7. Disable auto sync when testing new workflows.
8. Re-enable auto sync only after reviewing the result.

## Quick start

### Step 1. Create a private repository from this template

Use this template to create a new GitHub repository.

Keep it private if you plan to store personal or sensitive knowledge.

### Step 2. Clone it locally

```bash
git clone https://github.com/your-username/agent-ready-knowledge-brain.git
cd agent-ready-knowledge-brain
```

### Step 3. Open it in Obsidian

Open the cloned folder as an Obsidian vault.

Everything is Markdown. Nothing is locked into a proprietary format.

### Step 4. Install the Obsidian Git plugin

Install the Obsidian Git plugin.

Repository:

```text
https://github.com/Vinzent03/obsidian-git
```

Recommended first setup:

1. Keep automatic sync disabled at first.
2. Make a few manual commits.
3. Confirm that the repository syncs correctly.
4. Enable auto commit and sync later if needed.

### Step 5. Read the documentation before customising

Before filling in any domain, read these two files:

1. `docs/getting-started.md` — how to set up and run your first command
2. `docs/evidence-framework.md` — the most important concept for building a career domain that agents can use effectively

Understanding the difference between profile, positioning, and evidence will save you significant time.

### Step 6. Customise your domains

Start with only the domains you need.

Remove what you do not need. Rename what does not fit your life or work. Add whatever works best for your system.

For the career domain specifically, the recommended fill-in order is:

1. `career/wiki/profile.md` — your professional identity
2. `career/wiki/positioning.md` — how you present yourself
3. `career/wiki/evidence/` — what you can prove (use `_template-strength.md` to start)
4. `career/wiki/quick-profile.md` — the fast-load version for agents
5. `career/wiki/interview-proof-points.md` — your ready interview stories
6. `career/wiki/secondary-role-strategy.md` — your fallback positioning

Do not fill in everything at once. Start with profile, positioning, and one or two evidence files. The rest builds from there.

### Step 7. Add source material to raw

Original inputs go into `raw`.

Examples:

```text
projects/raw/my-project.md
writing/raw/article-idea.md
career/raw/old-cv.md
career/raw-applications/2026-06-01-company-role-market.md
```

### Step 8. Run one small workflow

Start with one command. Do not try to automate your entire life on day one.

Example:

```text
\add career 2026-06-01-company-role-market
```

The agent should read the relevant root entry file, then `CLAUDE.md`, then the domain instructions, then the domain `commands.md`, then the corresponding prompt file, then process the raw application file and generate a fit analysis inside `generated-applications/`.

### Step 9. Review changes before syncing

Before committing or syncing, review the changed files.

Check that:

1. No raw source was modified.
2. New structured knowledge went into `wiki` or `generated-applications`.
3. The relevant `index.md` was updated when needed.
4. The relevant `log.md` was updated when files changed.
5. No private content moved across domains without approval.

## Example use cases

### Career brain

The career brain is the most fully developed use case in this template.

Store job descriptions, CV versions, positioning notes, interview evidence, application decisions, and tracker updates.

The prompts layer allows agents to produce genuinely differentiated CVs and cover letters — not generic ones — because they read your evidence files, check your tracker history, and apply structured validation before generating output.

The tracker is designed as a feedback system, not an archive. After 5 or more applications, the tracker's pattern review tells you which angles are producing silence and which are producing responses, and instructs future commands to adjust accordingly.

The evidence framework is the foundation. Before building anything else in the career domain, read `docs/evidence-framework.md`. It explains why profile and positioning alone are insufficient, and why the difference between them and evidence is what makes agent output genuinely useful versus generically polished.

The public assets tracker lets you connect published work — articles, tools, open-source projects, talks — back to your positioning and evidence layer. Public work is the strongest proof available because it is verifiable.

### Project brain

Store project notes, architecture decisions, flows, issues, patterns, and lessons learned.

The agent can turn raw project material into structured technical knowledge and reusable professional evidence.

Use `_bridges/projects-to-career/` when a technical decision in a project demonstrates a professional capability that belongs in the career domain's evidence layer.

### Writing brain

Store article ideas, drafts, essays, voice rules, themes, and public content plans.

The agent can help turn raw writing material into structured drafts while respecting source material and privacy boundaries.

Use `_bridges/writing-to-career/` when a published piece provides external validation of a career positioning claim.

### Personal brain

Store diary entries, decisions, health notes, reviews, and private signals.

This domain has the strictest privacy rules. Health data, diary content, and relationship content never leave the personal domain.

Cross-domain signals from the personal domain contain pointers only. No content. The user decides whether to act.

## Safety model

This template assumes that agents are useful but not trustworthy by default.

That is why it uses:

1. Immutable raw source folders.
2. Structured wiki output folders.
3. Domain indexes.
4. Operation logs.
5. Privacy boundaries.
6. Cross-domain bridge rules.
7. Reviewable Git diffs.
8. No automatic agent push rule.
9. Clear source of truth hierarchy.
10. Separated prompts layer (detailed logic is not mixed with structural rules).

The goal is not to let agents do whatever they want.

The goal is to give agents a controlled workspace where they can be useful without damaging the knowledge system.

## What this template is not

This is not an Obsidian plugin.

This is not an AI product.

This is not a vector database.

This is not a replacement for thinking.

This is a Markdown-based operating model for building a portable, version-controlled, agent-ready Knowledge Brain.

## Recommended first rule

Start small.

Use one domain.

Use one command.

Review every change.

Then expand.

A Knowledge Brain becomes valuable because it is maintained with discipline, not because an agent touched it.