# .claude/skills

## What this directory is

This directory holds custom Claude.ai skills that extend the vault's capabilities for specific use cases.

A skill is a markdown file that defines an extended agent behaviour for a specific task type. Skills are separate from the vault's structural logic and are loaded by Claude.ai when a specific task is triggered.

## When to create a skill

Create a skill when:
- A task type recurs frequently and needs specific voice, format, or logic not appropriate for commands.md
- A task is highly personal (memoir writing, diary guidance, coaching) and needs a separate instruction layer
- A task requires a specific style guide that would clutter the domain CLAUDE.md

## Example skill types

- A writing voice guide for a specific content type (memoir, newsletter, technical articles)
- A specific coaching or mentoring persona (Scrum Master preparation, interview coaching)
- A domain-specific analysis framework (investment analysis, product strategy)

## File structure

Each skill is a folder with a SKILL.md file:

```
.claude/skills/{skill-name}/SKILL.md
```

## SKILL.md format

Each SKILL.md should contain:

1. A trigger: which user requests or keywords activate this skill
2. A workflow: the steps the agent follows when the skill is active
3. Voice rules: specific style or format requirements
4. Forbidden patterns: things the agent must never do in this mode

## How skills relate to the vault

Skills are complementary to the vault, not part of it.

The vault defines knowledge structure, commands, and agent workflows.
Skills define specialised agent behaviours for specific task types that need their own instruction layer.

A skill should not duplicate what commands.md already defines.

## Note for Claude.ai users

Skills in this directory are available when using Claude.ai (claude.ai) with Claude Code or with projects that load this directory.
They are not available in all Claude.ai interfaces automatically.
Refer to Claude.ai documentation for how to load custom skills.
