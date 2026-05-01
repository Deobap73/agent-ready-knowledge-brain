# Agent Workflow

How different agents operate on the same vault — and why the private GitHub repository makes this possible.

---

## The problem with local-only vaults

Obsidian is local-first by design. Your vault is a folder. Your notes are markdown files. There is no external database, no proprietary format. This is exactly why it works well as a Knowledge Brain foundation.

But local-first creates a constraint for agents. An agent that cannot access the local folder cannot truly operate on the vault. It can generate text for you to copy. It can suggest structure. But it cannot reliably update `index.md`, append to `log.md`, or verify the current state of a wiki page before making a decision.

Without file access, you do not have an operational agent. You have a very intelligent clipboard.

---

## The private GitHub repository as access layer

When you push your vault to a private GitHub repository, you add a second layer without removing the first. Obsidian continues to be the local interface. The GitHub repository becomes the synchronisation and access layer.

This changes what is possible:

| Capability | Local only | With GitHub |
|---|---|---|
| Claude Code in terminal | Yes | Yes |
| Codex via IDE | No | Yes |
| Google Antigravity | No | Yes |
| Access from another machine | No | Yes |
| Version history and rollback | No | Yes |
| Diff review before accepting changes | No | Yes |

The vault is still private. It is still markdown. It is still yours. But now multiple agents can work on it safely.

---

## How Claude Code operates (local)

Claude Code runs in the terminal inside the vault folder. It reads `CLAUDE.md` at the root and uses it as the operating contract.

When you invoke a command like `\ingest projects my-project`:

1. Claude Code reads `CLAUDE.md` → confirms global rules
2. Claude Code reads `projects/CLAUDE.md` → loads domain rules
3. Claude Code reads `projects/commands.md` → loads the ingest workflow
4. Claude Code reads `projects/index.md` → checks current state
5. Claude Code reads `projects/raw/my-project.md` → processes source
6. Claude Code writes to `projects/wiki/projects/my-project.md`
7. Claude Code updates `projects/index.md`
8. Claude Code appends to `projects/log.md`

All of this happens on your local files. Git tracks the changes.

---

## How Codex operates (repository)

Codex and other repository-based agents read `AGENTS.md` instead of `CLAUDE.md`. The content of `AGENTS.md` mirrors the operating contract in `CLAUDE.md` but is formatted for repository-based access.

When Codex operates on the vault:

1. Codex reads `AGENTS.md` at the root
2. Codex reads the domain `AGENTS.md`
3. Codex reads `commands.md` when a command is invoked
4. Codex reads and writes files through the repository

For Codex to work, the vault must be pushed to GitHub. Codex cannot access your local folder directly.

After Codex makes changes, you review the diff before merging. This is the safety layer. Never accept agent changes without reviewing the diff.

---

## How Google Antigravity operates

Google Antigravity allows agent-based code execution in environments connected to a repository. When configured to point at your private vault repository, it can run the same command workflows that Claude Code runs locally.

The operating contract is the same: `AGENTS.md` + domain instruction files + `commands.md`. Antigravity reads these files the same way Codex does.

**Setup flow:**

1. Push vault to private GitHub repository
2. Connect Antigravity to the repository
3. Configure the entry point as the root `AGENTS.md`
4. Invoke commands through the Antigravity interface

Antigravity is especially useful when you want to run commands without opening Obsidian or a local terminal. The vault becomes accessible from any browser session where Antigravity is configured.

---

## How ChatGPT Projects operate

ChatGPT does not read local files. For ChatGPT Projects to work with your vault:

1. Upload `GPT.md` as the project instructions (or paste it)
2. Upload the `commands-reference.md` as a knowledge file
3. Upload domain `index.md` and wiki files for the domains you need
4. When the vault changes significantly, re-upload the relevant files

ChatGPT will ask you to confirm the current state of any wiki page before editing. It will generate output as clearly marked blocks you can copy back into the vault.

This is the most manual workflow, but it is useful for tasks like drafting articles, refining career narratives, or preparing interview answers — where the output does not need to be written directly to the vault.

---

## The sync discipline

Multi-agent workflows require a sync discipline. Without it, two agents can produce conflicting changes to the same file.

Recommended rules:

1. Only one agent operates on the vault at a time.
2. Always pull before starting a session: `git pull`
3. Always review the diff before accepting agent changes.
4. Commit after each meaningful operation, not at the end of a long session.
5. Use descriptive commit messages: `[career] fit analysis for company-role` not `update files`.

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

This is why the GitHub layer exists. Not just portability — safety.
