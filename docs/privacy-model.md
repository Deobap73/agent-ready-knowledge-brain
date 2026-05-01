# Privacy Model

Privacy in this vault is built into the architecture, not left to the agent's discretion.

---

## The core principle

An agent that is told "be careful with private data" is not a privacy model. That is trust with a markdown hat.

A real privacy model defines which content lives where, which content can move between domains, and what form cross-domain references must take. The agent does not need to guess what is private. The structure tells it.

---

## Domain privacy levels

| Domain | Privacy level | What leaves |
|---|---|---|
| `career/` | Low | CV, cover letters, application outputs — designed to be shared |
| `projects/` | Low to medium | Technical documentation — shareable unless marked private |
| `writing/` | Low | Drafts and published content — designed to be public |
| `personal/` | High | Nothing leaves this domain except pointers |

---

## The personal domain rules

These rules are hardcoded in `personal/AGENTS.md` and `personal/CLAUDE.md`. They override all command behaviour.

1. Diary content never leaves this domain.
2. Health data never leaves this domain.
3. Medical notes never leave `personal/wiki/health/medical.md`.
4. Relationship content never leaves this domain.
5. Cross-domain signals contain pointers only — never private content.

When an agent detects content in the personal domain that may be relevant to another domain, it generates a signal. A signal looks like this:

```
Entry 2026-05-01 may be relevant for writing. Suggested action: \draft [topic]. User confirmation required.
```

No diary excerpt. No health data. No private details. Just a pointer and a suggested action. The human decides what happens next.

---

## Cross-domain signal rules

Signals are notifications, not data transfers.

| Signal | Trigger | Target |
|---|---|---|
| Writing-worthy event | Diary entry describes a significant experience | `writing/` — offer `\draft` |
| Career-adjacent event | Entry or decision has professional implications | `career/` — offer relevant update |
| Burnout pattern | Energy at or below 2 for 5 or more consecutive days | Suggest adjusting work pace |
| Decision review due | A decision has passed its review date | `personal/` — prompt to update |

Agents generate signals. Humans act on them.

---

## What never crosses domains

Even with user permission, some content should not cross domain boundaries:

- Raw diary text in career documents
- Health metrics in writing outputs
- Medical notes anywhere outside `personal/wiki/health/medical.md`
- Relationship details in any public-facing content

If you want to reference a personal experience in a career narrative or a writing piece, the correct path is through a bridge — and the bridge contains only the insight, not the source content.

---

## GitHub and the private repository

When your vault is on a private GitHub repository, the privacy model extends to access control.

- The repository must be private.
- Access tokens for agents (Codex, Antigravity) should have the minimum necessary permissions.
- Never store API keys, tokens, or passwords inside the vault.
- Use `.gitignore` to exclude Obsidian cache files and any local configuration that should not be committed.

The `.gitignore` included in this template excludes Obsidian workspace files by default. Review it and extend it for your specific needs.

---

## Adapting this model

The privacy model in this template is conservative by design. You may need to adjust it for your context.

If you do not use the personal domain, you can remove its privacy rules entirely.

If you add domains with different privacy requirements — for example, a domain for client work that should never appear in your personal career documents — define explicit rules in that domain's instruction files.

The pattern is always the same: name the content that stays, name the content that can move, and define the form it must take when it crosses a boundary.
