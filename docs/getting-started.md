# Getting Started

This guide takes you from zero to a working multi-agent Knowledge Brain in five steps.

---

## Prerequisites

- [Obsidian](https://obsidian.md) installed
- [Claude Code](https://claude.ai/download) installed
- Git installed and configured
- A GitHub account for the portability layer

Optional but recommended:

- Google Antigravity for local or browser-based agent execution connected to a repository
- Codex CLI or a Codex-compatible IDE extension

---

## Step 1. Set up the vault locally

Create a private repository from this template, clone it, and open it in Obsidian.

```bash
git clone https://github.com/your-username/agent-ready-knowledge-brain.git
cd agent-ready-knowledge-brain
```

In Obsidian: File, Open Vault, select the cloned folder.

The vault is now a local Obsidian workspace. All files are plain Markdown. Nothing requires a plugin to read or edit.

---

## Step 2. Review and customise the domains

Before adding personal or professional material, decide which domains you actually need.

Default domains:

- `career/` for job search, positioning, evidence, CVs, and applications
- `projects/` for technical project knowledge, architecture, decisions, and patterns
- `writing/` for drafts, essays, articles, themes, and public content
- `personal/` for diary, health, decisions, reviews, and private pointer-only signals
- `_bridges/` for cross-domain synthesis only

If a domain is not useful to you, remove it before adding source material.

If you need a new domain, copy `_domain-template/`, rename it, and replace all placeholder text.

Read `docs/customising-the-template.md` before making structural changes.

---

## Step 3. Run Claude Code inside the vault

Open a terminal in the vault root and start Claude Code.

```bash
claude
```

Claude Code reads `CLAUDE.md` at the root automatically. It understands the domain structure and is ready to follow commands.

Test it with a simple query:

```text
\query projects what projects are documented here
```

The agent should read `projects/index.md` and report the current state.

---

## Step 4. Add your content

Each domain has a `raw/` folder for source material. Add your raw files there, then use the domain commands to process them into structured wiki knowledge.

Example for projects:

```text
\ingest projects my-project
```

The agent reads `projects/raw/my-project.md`, creates structured wiki pages, updates the index, and appends to the log.

Example for career:

```text
\add career company-role-location
```

The agent reads the raw job description and creates a fit analysis.

The `raw/` folder in each domain should contain a `README.md` that explains the expected format for source files.

---

## Step 5. Push to a private GitHub repository

This step unlocks multi-agent access and vault portability.

Create a new private repository on GitHub, then:

```bash
git remote set-url origin https://github.com/your-username/your-vault.git
git add .
git commit -m "Initial vault setup"
git push
```

From this point:

- You can access the vault from any machine by cloning the repository.
- Codex and Antigravity can operate on the vault through the repository.
- ChatGPT Projects can work from selected uploaded files or repository-connected context.
- You have version history and rollback for all agent operations.

---

## Configure agents for your context

### Claude Code

The root `CLAUDE.md` is already configured. Customise the domain `CLAUDE.md` files to describe your specific context, goals, and constraints.

### Codex, Antigravity, Cursor, and repository-based agents

The root `AGENTS.md` is the entry point. These agents should start there, then follow the required reading chain into the relevant domain files.

### ChatGPT Projects or Custom GPTs

Copy the contents of `GPT.md` into your ChatGPT Project instructions. Upload `commands-reference.md` and the relevant domain `index.md` files as knowledge files.

When working deeply in one domain, also upload the relevant domain `GPT.md`, `commands.md`, `index.md`, and needed wiki pages.

---

## Recommended first actions

1. Read `docs/agent-workflow.md` to understand the multi-agent layer.
2. Read `docs/privacy-model.md` before adding private content.
3. Decide which domains you will keep.
4. Fill in `career/wiki/profile.md` if you are using the career domain.
5. Drop your first raw project file into `projects/raw/` and run `\ingest projects`.
6. Write your first diary entry with `\journal` only if you intend to use the personal domain.
7. Run the checks in `docs/template-audit.md` before relying on the vault for real work.
