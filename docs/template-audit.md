# Template Audit

Use this checklist before relying on the vault for real work.

The purpose is simple: confirm that the repository is actually agent ready, not just a collection of Markdown folders.

## 1. Root files

Check that these files exist:

- [ ] `README.md`
- [ ] `AGENTS.md`
- [ ] `CLAUDE.md`
- [ ] `GPT.md`
- [ ] `commands-reference.md`
- [ ] `docs/getting-started.md`
- [ ] `docs/agent-workflow.md`
- [ ] `docs/privacy-model.md`
- [ ] `docs/customising-the-template.md`
- [ ] `docs/template-audit.md`

## 2. Domain spine

For every active domain, check that it contains:

- [ ] `AGENTS.md`
- [ ] `CLAUDE.md`
- [ ] `GPT.md`
- [ ] `commands.md`
- [ ] `index.md`
- [ ] `log.md`
- [ ] `raw/`
- [ ] `wiki/`

A domain missing any of these files is not fully agent ready.

## 3. Required reading chain

For every domain `AGENTS.md`, confirm it tells repository-based agents to read:

- [ ] Root `../AGENTS.md`
- [ ] Domain `CLAUDE.md`
- [ ] Domain `commands.md`
- [ ] Domain `index.md`
- [ ] Relevant wiki pages

For every domain `CLAUDE.md`, confirm it tells Claude Code to read:

- [ ] Root `../CLAUDE.md`
- [ ] Domain `AGENTS.md`
- [ ] Domain `commands.md`
- [ ] Domain `index.md`
- [ ] Relevant wiki pages

## 4. Raw and wiki rules

For every active domain, confirm:

- [ ] Existing `raw/` files are treated as immutable.
- [ ] Structured knowledge belongs in `wiki/`.
- [ ] Commands define where outputs go.
- [ ] `index.md` is updated when domain state changes.
- [ ] `log.md` is updated after meaningful write operations.

## 5. Bridge rules

Check that:

- [ ] `_bridges/README.md` exists.
- [ ] `_bridges/AGENTS.md` exists.
- [ ] Bridge directories match the active domains.
- [ ] Bridges are used only for synthesis, not simple links.
- [ ] Bridge files use `YYYY-MM-DD-slug.md`.
- [ ] Bridge files declare source, target, date, insight, and application.
- [ ] Personal, health, medical, and relationship content is not copied into bridges.

## 6. Privacy rules

Check that:

- [ ] The repository is private if it contains real personal, client, career, or project data.
- [ ] `personal/AGENTS.md` has strict privacy rules if the personal domain exists.
- [ ] `personal/CLAUDE.md` has strict privacy rules if the personal domain exists.
- [ ] `personal/GPT.md` warns ChatGPT not to reuse personal content outside the current context.
- [ ] Cross-domain signals are pointer-only.
- [ ] Health data never leaves the personal domain.
- [ ] Medical notes never leave `personal/wiki/health/medical.md`.

## 7. GPT readiness

Check that root `GPT.md` and domain `GPT.md` files explain:

- [ ] ChatGPT cannot see local files automatically.
- [ ] The user must upload, paste, or connect the relevant files.
- [ ] ChatGPT must ask for required files before assuming context.
- [ ] Output intended for the vault is clearly marked with save paths.
- [ ] Log notes are included when generated content would change the vault.

## 8. Command quality

For every command in every `commands.md`, confirm it defines:

- [ ] Purpose
- [ ] Required inputs
- [ ] Output location
- [ ] Steps or rules
- [ ] Confirmation requirement when needed
- [ ] Log update requirement

Bad commands are vague. Good commands are operational.

## 9. Template cleanliness

Before making the repository public or using it as a base template, confirm:

- [ ] No personal names remain unless intentionally part of documentation.
- [ ] No private diary content exists.
- [ ] No health data exists.
- [ ] No job applications with real personal details exist.
- [ ] No API keys, tokens, passwords, or secrets exist.
- [ ] No local Obsidian workspace files are committed.
- [ ] No generated outputs from a previous user remain.

## 10. First workflow test

Before scaling the vault, test one small workflow:

1. Add one source file to one `raw/` folder.
2. Run one command.
3. Confirm the agent read the required files.
4. Confirm the agent wrote to the correct output location.
5. Confirm `index.md` was updated if needed.
6. Confirm `log.md` was updated.
7. Review the Git diff.
8. Commit manually.

If this fails, fix the domain instructions before adding more content.

## Result

If every section passes, the vault is ready for real use.

If any required reading chain, privacy rule, or output rule fails, the template is not ready.
