# Customising the Template

This guide explains how to adapt Agent Ready Knowledge Brain without breaking the multi-agent operating model.

## The rule

Do not customise by randomly deleting files.

This template works because each domain has the same operating spine:

```text
domain-name/
  AGENTS.md
  CLAUDE.md
  GPT.md
  commands.md
  index.md
  log.md
  raw/
  wiki/
```

You can change domain names, remove domains, or add new ones, but keep the spine intact.

---

## What you can safely customise

You can customise:

- Domain names
- Domain purpose
- Command names and workflows
- Wiki folder structure
- Privacy rules
- Cross-domain bridge directories
- Agent roles
- Output formats
- GPT project instructions

You should not remove:

- Root `AGENTS.md`
- Root `CLAUDE.md`
- Root `GPT.md`
- Domain `AGENTS.md`
- Domain `CLAUDE.md`
- Domain `commands.md`
- Domain `index.md`
- Domain `log.md`

Unless you remove the entire domain.

---

## Removing a domain

If you do not need a domain:

1. Delete the domain folder.
2. Remove it from root `AGENTS.md`.
3. Remove it from root `CLAUDE.md`.
4. Remove it from root `GPT.md` if referenced.
5. Remove its commands from `commands-reference.md`.
6. Remove related bridge directories from `_bridges/` if they no longer apply.
7. Update `docs/privacy-model.md` if privacy boundaries changed.

Example: if you remove `personal/`, also remove or adapt `personal-to-writing/` bridge rules.

---

## Creating a new domain

To create a new domain:

1. Copy `_domain-template/`.
2. Rename the copied folder.
3. Replace every `{domain-name}` placeholder.
4. Define the domain purpose in `index.md`.
5. Define the agent role in `AGENTS.md` and `CLAUDE.md`.
6. Define ChatGPT behaviour in `GPT.md`.
7. Adapt `commands.md` to the domain's real workflows.
8. Add the domain to root `AGENTS.md` and root `CLAUDE.md`.
9. Add the domain to `commands-reference.md` if it has commands.
10. Add bridge rules only if the domain genuinely connects to others.

Do not create a new domain just because a topic is related. Create a new domain when it has its own sources, workflows, privacy rules, and long-term knowledge structure.

---

## Renaming a domain

To rename a domain:

1. Rename the folder.
2. Update root `AGENTS.md`.
3. Update root `CLAUDE.md`.
4. Update root `GPT.md`.
5. Update `commands-reference.md`.
6. Update `_bridges/README.md` and `_bridges/AGENTS.md`.
7. Update all bridge folder names and source pointers.
8. Update docs that mention the old domain name.

Run `docs/template-audit.md` after renaming.

---

## Adapting commands

Commands should remain workflow contracts, not shell commands.

A good command defines:

- Purpose
- Required input files
- Output location
- Steps
- Safety rules
- Log update requirement
- Confirmation requirement when needed

Avoid vague commands like:

```text
\work
\do-it
\process
```

Prefer specific commands like:

```text
\ingest {source-name}
\query {question}
\review
\connect {target-domain}
```

---

## Adapting privacy rules

Privacy rules must be structural, not motivational.

Weak rule:

```text
Be careful with private data.
```

Strong rule:

```text
Health data never leaves `personal/`. Cross-domain signals contain pointers only.
```

For every domain, define:

1. What content lives there.
2. What content can leave.
3. What content can never leave.
4. What form allowed cross-domain movement must take.
5. Whether user confirmation is required.

---

## Adapting bridges

Bridges are for synthesis, not navigation.

Use a bridge when an insight between two domains creates new meaning.

Do not use a bridge for:

- Simple links
- Summaries
- Convenience references
- Private diary content
- Health or medical content
- Anything unsupported by source material

If the connection can be handled by updating one domain page, do that instead.

---

## Before real use

Before adding sensitive or important content:

1. Run the checklist in `docs/template-audit.md`.
2. Make sure the repository is private.
3. Disable automatic sync until the first workflow is tested.
4. Review every agent-generated change before committing.
5. Start with one domain and one command.

A Knowledge Brain becomes valuable through disciplined maintenance, not because an agent touched it.
