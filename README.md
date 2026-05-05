# Agent Ready Knowledge Brain

A multi-agent Obsidian vault template for building a portable Markdown Knowledge Brain that can be used by Claude Code, Codex, ChatGPT Projects, Custom GPTs, Antigravity, Cursor, and repository-based AI agents.

<br> <br>
<img src="_blog/agent-ready-knowledge-brain.webp">
<br> <br>

## What this project is

Claude Code plus Obsidian already proved that a Markdown vault can work as external memory for one AI agent.

This project starts from the next problem.

How do you make that same vault usable by multiple AI agents, each with different access methods, different working environments, and different limitations, without losing one source of truth?

Agent Ready Knowledge Brain is a multi-agent operating model for Obsidian-based knowledge systems.

It is not another Claude Code memory setup.

It is a reusable template for making a Markdown vault agent ready.

## The core idea

Most Obsidian AI workflows start with one agent and one local workflow.

That works until you want to use another agent.

Claude Code can operate inside a local vault through the terminal. Codex, Antigravity, Cursor, and repository-based agents often need a repository or IDE workflow. ChatGPT Projects and Custom GPTs may need uploaded files, project instructions, or connected repository context.

The problem is not just memory.

The problem is controlled multi-agent access to the same memory.

This template solves that by giving each agent a clear entry point, while keeping the vault as the source of truth.

```text
Claude Code                 enters through CLAUDE.md
Codex and repository agents  enter through AGENTS.md
ChatGPT Projects             enter through GPT.md
All agents                   follow domain commands.md
All structured memory         lives in wiki/
All source material           starts in raw/
All meaningful changes        are recorded in log.md
```

Different agents. Same vault. Same source of truth.

## Why this exists

A local Obsidian vault is powerful because it is simple. It is a folder of Markdown files.

But local-first also creates a limitation.

If an agent cannot access the local folder, it cannot truly operate on the vault. It can generate text for you to copy, but it cannot reliably read the current state, update an index, append to a log, or verify what already exists.

A private GitHub repository solves that access problem.

Obsidian remains the human interface.

The Markdown vault remains the knowledge system.

GitHub becomes the synchronisation, portability, review, rollback, and repository-agent access layer.

This gives you a Knowledge Brain that can work across local, IDE, repository, and ChatGPT-based workflows.

## What makes it agent ready

A normal notes folder stores information.

An agent-ready vault defines how agents are allowed to work.

A real agent-ready Knowledge Brain tells agents:

1. What they must read first.
2. Which domain they are working in.
3. What source files are immutable.
4. Where structured knowledge belongs.
5. Which files can be changed.
6. Which files must never be changed.
7. Which privacy rules apply.
8. Which command workflow to follow.
9. Where generated output must go.
10. What must be logged after changes.
11. When cross-domain synthesis is allowed.
12. When the user must confirm before writing.

Without that structure, an agent guesses.

When agents guess inside a knowledge system, they eventually create a mess.

## The operating model

The template uses a layered instruction model.

```text
AGENTS.md      repository-agent entry point
CLAUDE.md      behavioural source of truth for Claude Code
GPT.md         ChatGPT Projects and Custom GPT adaptation
commands.md    workflow contracts
index.md       domain map and current state
log.md         operation history
raw/           immutable source material
wiki/          structured reusable knowledge
_bridges/      cross-domain synthesis
```

The vault is not controlled by model memory.

The vault itself is the memory.

The model is the worker.

## Agent entry points

| Agent context | Entry file | How it works |
|---|---|---|
| Claude Code in the local vault | `CLAUDE.md` | Starts from the local behavioural rules and reads domain files |
| Codex, Antigravity, Cursor, repository agents | `AGENTS.md` | Starts from repository-agent instructions, then follows the required reading chain |
| ChatGPT Projects and Custom GPTs | `GPT.md` | Uses pasted, uploaded, or connected files and must ask for missing context |
| All agents | Domain `commands.md` | Follows workflow contracts before writing or generating outputs |

The entry files are different because the agents operate in different environments.

The source of truth stays the same.

## Repository structure

```text
agent-ready-knowledge-brain/
  README.md
  AGENTS.md
  CLAUDE.md
  GPT.md
  commands-reference.md

  .claude/
    skills/
      README.md

  _domain-template/
    AGENTS.md
    CLAUDE.md
    GPT.md
    commands.md
    index.md
    log.md
    raw/
      README.md
    wiki/
      README.md

  _bridges/
    AGENTS.md
    README.md
    projects-to-career/
      README.md
    writing-to-career/
      README.md
    personal-to-writing/
      README.md

  docs/
    getting-started.md
    agent-workflow.md
    privacy-model.md
    evidence-framework.md
    customising-the-template.md
    template-audit.md

  career/
    AGENTS.md
    CLAUDE.md
    GPT.md
    commands.md
    index.md
    log.md
    raw/
    raw-applications/
    generated-applications/
    prompts/
    wiki/

  projects/
    AGENTS.md
    CLAUDE.md
    GPT.md
    commands.md
    index.md
    log.md
    raw/
    wiki/

  writing/
    AGENTS.md
    CLAUDE.md
    GPT.md
    commands.md
    index.md
    log.md
    raw/
    wiki/

  personal/
    AGENTS.md
    CLAUDE.md
    GPT.md
    commands.md
    index.md
    log.md
    raw/
    wiki/
```

## Standard domain pattern

Every reusable domain follows the same spine.

```text
domain-name/
  AGENTS.md      repository-agent entry point
  CLAUDE.md      Claude Code behaviour for this domain
  GPT.md         ChatGPT adaptation for this domain
  commands.md    workflow contracts
  index.md       current state and navigation map
  log.md         operation history
  raw/           immutable source material
  wiki/          structured reusable knowledge
```

If you need a new domain, copy `_domain-template/`, rename it, and customise the placeholder text.

Do not create a new domain by copying `career/`, `projects/`, `writing/`, or `personal/`. Those domains contain specific rules.

Use `_domain-template/` as the clean starting point.

## Default domains

### career

The career domain manages professional positioning, job applications, CVs, cover letters, application tracking, public professional assets, and evidence.

It is the most operationally detailed domain because job search requires source material, role analysis, fit analysis, decision logic, document generation, validation, and tracker feedback.

The tracker is feedback memory, not an archive.

Before generating fit analyses, CVs, or cover letters, agents must review `career/wiki/applications.md` for repeated patterns.

### projects

The projects domain manages technical project knowledge.

It is not a code archive. It preserves architecture, decisions, flows, patterns, risks, issues, and improvements.

Projects can support career evidence, but career updates require confirmation.

### writing

The writing domain manages drafts, essays, articles, themes, voice rules, research notes, and publication preparation.

It protects the author's voice and prevents generic AI prose.

It can receive pointer-only personal signals, but it must never import raw diary, health, medical, or relationship content.

### personal

The personal domain manages diary, health tracking, personal decisions, reviews, and private signals.

It has the strictest privacy rules.

Health data never leaves this domain. Diary content never leaves this domain. Medical notes never leave `personal/wiki/health/medical.md`. Cross-domain signals contain pointers only.

### _bridges

The bridges layer stores cross-domain synthesis.

A bridge is not a simple link.

Create a bridge only when an insight connects two domains in a way that creates new meaning that could not live inside either domain alone.

## How knowledge moves

The basic flow is simple.

```text
raw source
  agent reads source and domain rules
    structured wiki page is created or updated
      index.md is updated when needed
        log.md records the operation
          future agents reuse the structured knowledge
```

The source stays stable.

The wiki becomes reusable memory.

The index keeps the domain navigable.

The log keeps operations reviewable.

Git keeps every change reversible.

## Commands are workflows, not shell commands

Commands in this vault are Markdown workflow contracts for agents.

Example:

```text
\ingest projects my-project
```

This means the agent must read the relevant root entry file, domain instruction files, domain `commands.md`, domain `index.md`, required source files, and only then create or update the allowed outputs.

A command should define:

1. Purpose.
2. Required inputs.
3. Output location.
4. Steps or rules.
5. Confirmation requirement when needed.
6. Log update requirement.

## Why use a private GitHub repository

GitHub is not the brain.

GitHub is the access, synchronisation, history, review, and rollback layer.

A private GitHub repository gives you:

1. Portability across machines.
2. Version control.
3. Commit history.
4. Rollback.
5. Reviewable diffs.
6. Branch-based experiments.
7. Repository-agent compatibility.
8. A safer way to let different environments operate on the same vault.

Keep the repository private if it contains personal notes, career material, private projects, client work, sensitive research, or health information.

Do not put a real personal Knowledge Brain in a public repository unless you are certain it contains no private content.

## How agents operate

### Claude Code

Claude Code works locally inside the vault folder.

It starts from `CLAUDE.md`, then reads the relevant domain `CLAUDE.md`, `AGENTS.md`, `commands.md`, `index.md`, and required source files.

### Codex, Antigravity, Cursor, and repository agents

Repository-based agents start from `AGENTS.md`.

They then follow the required reading chain into `CLAUDE.md`, the relevant domain `AGENTS.md`, domain `CLAUDE.md`, domain `commands.md`, domain `index.md`, and the minimum relevant wiki pages.

### ChatGPT Projects and Custom GPTs

ChatGPT does not automatically see local files.

Use `GPT.md` as project instructions, then provide the relevant domain `GPT.md`, `commands.md`, `index.md`, and wiki pages.

If ChatGPT cannot see a file, it must ask for it.

It must not invent the current state of the vault.

## Privacy model

Privacy is structural in this template.

The rule is not “be careful with private data”.

The rule is: name what lives where, what can move, what can never move, and what form cross-domain movement must take.

The personal domain is the strictest example.

```text
Health data       never leaves personal/
Diary content     never leaves personal/
Medical notes     never leave personal/wiki/health/medical.md
Signals           pointers only, no private content
```

Read `docs/privacy-model.md` before adding private content.

## Getting started

Start here:

1. Read `docs/getting-started.md`.
2. Read `docs/agent-workflow.md`.
3. Read `docs/privacy-model.md`.
4. Decide which domains you will keep.
5. Use `_domain-template/` if you need a new domain.
6. Run `docs/template-audit.md` before relying on the vault for real work.

## Recommended first workflow

Do not automate your whole life on day one.

Start with one domain and one command.

Example:

```text
\ingest projects my-first-project
```

Then check:

1. Did the agent read the required files?
2. Did it write only to allowed locations?
3. Did it update `index.md` if needed?
4. Did it append to `log.md`?
5. Does the Git diff make sense?

If this small workflow works, expand slowly.

## What this template is not

This is not an Obsidian plugin.

This is not a vector database.

This is not an AI product.

This is not a replacement for thinking.

This is not a way to let agents do whatever they want.

It is a Markdown-based operating model for building a portable, version-controlled, multi-agent Knowledge Brain.

## The first rule

Start small.

Use one domain.

Use one command.

Review every change.

Then expand.

A Knowledge Brain becomes valuable because it is maintained with discipline, not because an agent touched it.
