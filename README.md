# Agent-Ready Knowledge Brain

A multi-agent Obsidian vault template that works with Claude Code, Codex, ChatGPT Projects, and any repository-based AI workflow.

Most Obsidian and AI setups stop at `CLAUDE.md`. This template goes further.

---

## Why this is different

The standard approach gives you one agent reading one instruction file inside one application. That works, but it binds your knowledge system to a single tool.

This template is designed around a different idea: the vault is the source of truth, and different agents should be able to operate on it with the same rules, the same structure, and the same safety guarantees — regardless of which tool you are using.

| Agent context | Entry file |
|---|---|
| Claude Code (terminal) | `CLAUDE.md` |
| Codex, repository-based agents | `AGENTS.md` |
| ChatGPT Projects, Custom GPTs | `GPT.md` |
| All agents | `commands.md` for domain workflows |

A private GitHub repository adds a second layer: your vault is no longer locked to one machine. You work locally in Obsidian, sync through Git, and any agent that can access the repository can operate on the same structure.

---

## What is inside

```
agent-ready-knowledge-brain/
├── CLAUDE.md                    ← for Claude Code
├── AGENTS.md                    ← for Codex and repository agents
├── GPT.md                       ← for ChatGPT Projects and Custom GPTs
├── commands-reference.md        ← global command map
│
├── _bridges/                    ← cross-domain synthesis (not lazy links)
│
├── docs/
│   ├── getting-started.md       ← how to start using this
│   ├── agent-workflow.md        ← how agents operate on the vault
│   └── privacy-model.md        ← how privacy is built into the structure
│
├── career/                      ← job search, applications, positioning
├── projects/                    ← technical projects and decisions
├── writing/                     ← articles, essays, public content
└── personal/                    ← diary, health, private decisions
```

Each domain contains its own `CLAUDE.md`, `AGENTS.md`, `GPT.md`, `commands.md`, `index.md`, `log.md`, `raw/`, and `wiki/`.

---

## Quick start

### Step 1. Clone or fork this repository

```bash
git clone https://github.com/your-username/agent-ready-knowledge-brain.git
cd agent-ready-knowledge-brain
```

### Step 2. Open the vault in Obsidian

Open the cloned folder as an Obsidian vault. All structure is standard markdown. Nothing proprietary.

### Step 3. Run Claude Code in the terminal

```bash
cd agent-ready-knowledge-brain
claude
```

Claude Code reads `CLAUDE.md` at the root and follows it.

### Step 4. Try your first command

```
\ingest projects my-first-project
```

This tells the agent to process a raw source file into the projects wiki.

### Step 5. Push to a private GitHub repository

```bash
git remote set-url origin https://github.com/your-username/your-private-vault.git
git push
```

From this point, your vault is accessible from any machine, and agents like Codex can operate on it through the repository.

---

## Adding a domain

Each domain follows the same pattern:

```
domain-name/
  CLAUDE.md       ← Claude Code instructions for this domain
  AGENTS.md       ← Codex instructions for this domain
  GPT.md          ← ChatGPT instructions for this domain
  commands.md     ← domain workflows (read before executing)
  index.md        ← current state of knowledge
  log.md          ← operation history (append only)
  raw/            ← immutable source material
  wiki/           ← all structured knowledge
```

To add a new domain, copy any existing domain folder, rename it, and update the instruction files to describe its purpose and rules.

---

## How agents use this vault

1. Agent reads the root instruction file for its context (`CLAUDE.md`, `AGENTS.md`, or `GPT.md`).
2. Agent identifies the active domain.
3. Agent reads the domain instruction file.
4. If a command is invoked, agent reads `commands.md` for that domain.
5. Agent reads `index.md` before modifying any wiki content.
6. Agent writes outputs to the correct location and appends to `log.md`.

No agent modifies `raw/` files. No agent skips privacy rules. No agent pushes changes without explicit instruction.

---

## Privacy model

The `personal/` domain has the strictest rules. Diary content, health data, and private decisions never leave that domain. Cross-domain signals contain pointers only — no content.

Privacy is built into the folder structure and the instruction files. Agents do not need to guess what is private. The system tells them.

Read `docs/privacy-model.md` for the full model.

---

## Using with Codex and Google Antigravity

When you push your vault to a private GitHub repository, tools like Codex (via IDE extensions) and Google Antigravity can operate on the same structure that Claude Code uses locally. They read `AGENTS.md` instead of `CLAUDE.md`, but follow the same domain structure, the same commands, and the same rules.

Read `docs/agent-workflow.md` for the complete flow.

---

## Related article

This template implements the architecture described in:

**Para Lá do Claude.md — Como Transformar o Obsidian num Knowledge Brain Multi Agente**

[Link to your article]

---

## License

MIT. Use it, fork it, adapt it. If you build something useful on top of it, share it.
