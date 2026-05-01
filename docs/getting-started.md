# Getting Started

This guide takes you from zero to a working multi-agent Knowledge Brain in four steps.

---

## Prerequisites

- [Obsidian](https://obsidian.md) installed
- [Claude Code](https://claude.ai/download) installed
- Git installed and configured
- A GitHub account (for the portability layer)

Optional but recommended:
- [Google Antigravity](https://deepmind.google/technologies/antigravity/) for local agent execution
- Codex CLI or a Codex-compatible IDE extension

---

## Step 1. Set up the vault locally

Clone this repository and open it in Obsidian.

```bash
git clone https://github.com/your-username/agent-ready-knowledge-brain.git
```

In Obsidian: File → Open Vault → select the cloned folder.

The vault is now a local Obsidian workspace. All files are plain markdown. Nothing requires a plugin to read or edit.

---

## Step 2. Run Claude Code inside the vault

Open a terminal in the vault root and start Claude Code.

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

---

## Step 3. Add your content

Each domain has a `raw/` folder for source material. Drop your raw files there. Then use the domain commands to process them into structured wiki knowledge.

Example for projects:

```
\ingest projects my-project
```

The agent reads `projects/raw/my-project.md`, creates a structured wiki page, updates the index, and appends to the log.

Example for career:

```
\add career company-role-location
```

The agent reads the raw job description and creates a fit analysis.

The `raw/` folder in each domain has a `README.md` that explains the expected format for source files.

---

## Step 4. Push to a private GitHub repository

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
- You have version history and rollback for all agent operations.

---

## Step 5. Configure agents for your context

### For Claude Code
The root `CLAUDE.md` is already configured. Customise the domain `CLAUDE.md` files to describe your specific context, goals, and constraints.

### For Codex
The root `AGENTS.md` is ready. Codex reads this file automatically when operating on the repository. Customise the domain `AGENTS.md` files as needed.

### For ChatGPT Projects or Custom GPTs
Copy the contents of `GPT.md` into your ChatGPT Project instructions. Upload the `commands-reference.md` and the relevant domain `index.md` files as knowledge files.

---

## Recommended first actions

1. Fill in `career/wiki/profile.md` with your professional identity.
2. Drop your first raw project file into `projects/raw/` and run `\ingest projects`.
3. Write your first diary entry with `\journal`.
4. Read `docs/agent-workflow.md` to understand how the multi-agent layer works.
