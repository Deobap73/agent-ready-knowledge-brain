# Agent Workflow

How different agents operate on the same vault, and why the private GitHub repository makes this possible.

---

## The problem with local-only vaults

Obsidian is local-first by design. Your vault is a folder. Your notes are Markdown files. There is no external database, no proprietary format. This is exactly why it works well as a Knowledge Brain foundation.

But local-first creates a constraint for agents. An agent that cannot access the local folder cannot truly operate on the vault. It can generate text for you to copy. It can suggest structure. But it cannot reliably update `index.md`, append to `log.md`, or verify the current state of a wiki page before making a decision.

Without file access, you do not have an operational agent. You have a very intelligent clipboard.

---

## The private GitHub repository as access layer

When you push your vault to a private GitHub repository, you add a second layer without removing the first. Obsidian continues to be the local interface. The GitHub repository becomes the synchronisation and access layer.

This changes what is possible:

| Capability | Local only | With GitHub |
|---|---|---|
| Claude Code in terminal | Yes | Yes |
| Codex via IDE or repository workflow | No | Yes |
| Google Antigravity | No | Yes |
| Access from another machine | No | Yes |
| Version history and rollback | No | Yes |
| Diff review before accepting changes | No | Yes |

The vault is still private. It is still Markdown. It is still yours. But now multiple agents can work on it safely.

---

## How Claude Code operates locally

Claude Code runs in the terminal inside the vault folder. It starts from `CLAUDE.md` at the root and uses it as the local operating contract.

When you invoke a command like `\ingest projects my-project`:

1. Claude Code reads `CLAUDE.md` and confirms global rules.
2. Claude Code reads `projects/CLAUDE.md` and loads domain rules.
3. Claude Code reads `projects/AGENTS.md` for repository-agent compatibility rules that also matter inside the domain.
4. Claude Code reads `projects/commands.md` and loads the ingest workflow.
5. Claude Code reads `projects/index.md` and checks current state.
6. Claude Code reads `projects/raw/my-project.md` and processes the source.
7. Claude Code writes to the allowed `projects/wiki/` locations.
8. Claude Code updates `projects/index.md` when needed.
9. Claude Code appends to `projects/log.md`.

All of this happens on your local files. Git tracks the changes.

---

## How Codex and repository-based agents operate

Codex, Antigravity, Cursor, and other repository-based agents start from `AGENTS.md` because that is the compatibility entry point for agents operating through a repository or IDE workflow.

This does not mean they ignore `CLAUDE.md`.

The root `AGENTS.md` points them to the root `CLAUDE.md`, the relevant domain `AGENTS.md`, the relevant domain `CLAUDE.md`, the domain `commands.md`, and the domain `index.md`.

When Codex operates on the vault:

1. Codex reads `AGENTS.md` at the root.
2. Codex follows the required reading chain into `CLAUDE.md`.
3. Codex identifies the active domain.
4. Codex reads the domain `AGENTS.md`.
5. Codex reads the domain `CLAUDE.md`.
6. Codex reads `commands.md` when a command is invoked.
7. Codex reads `index.md` and the minimum relevant wiki pages.
8. Codex reads or writes files through the repository.

For Codex to work against the shared vault, the vault must be pushed to GitHub. Codex cannot access your local folder directly unless your local IDE setup exposes it.

After Codex makes changes, review the diff before merging or pulling. This is the safety layer. Never accept agent changes without reviewing the diff.

---

## How Google Antigravity operates

Google Antigravity allows agent-based work in environments connected to a repository or local project workspace.

When configured to point at your private vault repository, it can run the same command workflows that Claude Code runs locally.

The operating contract is the same:

```text
AGENTS.md
CLAUDE.md
domain AGENTS.md
domain CLAUDE.md
domain commands.md
domain index.md
minimum relevant wiki pages
```

Setup flow:

1. Push the vault to a private GitHub repository.
2. Connect Antigravity to the repository or local project folder.
3. Use the root `AGENTS.md` as the entry point for repository-style operation.
4. Invoke commands through the Antigravity interface.
5. Review diffs before accepting changes.

Antigravity is useful when you want an IDE-based agent workflow instead of a terminal-only Claude Code workflow.

---

## How ChatGPT Projects operate

ChatGPT does not read local files automatically. For ChatGPT Projects to work with your vault:

1. Paste or upload `GPT.md` as the project instructions.
2. Upload `commands-reference.md` as a knowledge file.
3. Upload the relevant domain `GPT.md` file when working deeply inside one domain.
4. Upload domain `index.md` and required wiki files for the domains you need.
5. When the vault changes significantly, re-upload the relevant files.

ChatGPT must ask you to confirm the current state of any wiki page before editing or generating content based on it.

ChatGPT should generate output as clearly marked blocks that the user can copy back into the vault.

This is the most manual workflow, but it is useful for tasks like drafting articles, refining career narratives, preparing interview answers, or shaping source material before it is saved.

---

## The sync discipline

Multi-agent workflows require a sync discipline. Without it, two agents can produce conflicting changes to the same file.

Recommended rules:

1. Only one agent operates on the vault at a time.
2. Always pull before starting a session: `git pull`.
3. Always review the diff before accepting agent changes.
4. Commit after each meaningful operation, not at the end of a long session.
5. Use descriptive commit messages: `[career] fit analysis for company-role`, not `update files`.

This is the same discipline as a software project. A Knowledge Brain that agents modify is effectively a codebase. Treat it like one.

---

## Rollback

If an agent produces a bad output, rollback is a one-command operation:

```bash
git revert HEAD
```

Or to see the exact changes before reverting:

```bash
git diff HEAD~1
git revert HEAD
```

This is why the GitHub layer exists. Not just portability, safety.
