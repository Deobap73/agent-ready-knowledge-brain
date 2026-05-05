# Command Layer — writing-memoir

These commands standardise how agents operate in the writing-memoir domain.

## Agent Execution Model

These are workflow instructions for agents, not shell commands.

When invoked, the agent must read the required input files, create or update the specified output files, and respect domain rules.

Claude Code follows `CLAUDE.md`. Codex and repository agents follow `AGENTS.md`.

Before executing any command:

1. Read the root instruction file for the agent context.
2. Read this `commands.md`.
3. Read `index.md`.
4. Read the input files listed in the command.

If a required input file is missing, stop and report it. Never guess.

After any write operation, append a short note to `log.md`.

---

## Domain Execution Rules

1. Never save a new episode before explicit user approval of the draft.
2. Never modify existing files in `raw/`.
3. Do not invent memories, dialogue, motives, or details not in the source material.
4. Episode narratives use the author's chosen language.
5. Structural metadata is in English.

---

## \write {memory-prompt}

**Also triggered by:** `[BIO_MODE] {memory-prompt}`

**Purpose:** Write a new memoir episode from scratch or from a rough idea.

**Sequence:**
1. Read all existing episodes in `wiki/episodes/` for voice consistency.
2. Read `wiki/characters/` to ensure character names and relationships are consistent.
3. Write the episode in full narrative prose.
4. Present the draft to the user. Do not save anything.
5. Wait for explicit approval.
6. After approval, run `\ingest {episode-name}`.

**Rules:**
- Never save before user approval.
- Voice must match existing episodes in rhythm and tone.
- Do not invent details not provided by the user.

---

## \ingest {episode-name}

**Purpose:** Process an approved episode into the full wiki structure.

**Input:** `raw/{episode-name}.md`

**Sequence:**
1. Save the approved narrative to `raw/YYYY-slug.md` (immutable from this point).
2. Create `wiki/episodes/YYYY-episode-slug.md` with structured metadata.
3. Create `wiki/reflections/YYYY-episode-slug-reflection.md`.
4. Update `wiki/timeline/timeline.md` with the episode in chronological position.
5. Update relevant theme pages in `wiki/themes/`.
6. Update relevant character pages in `wiki/characters/`.
7. Update `wiki/chapters/README.md` to place the episode in the correct chapter.
8. If career-relevant, run `\connect {episode-name}`.
9. Append to `log.md`.
10. Update `index.md`.

**Episode page format:**

```markdown
---
title: [Episode title]
date: [YYYY or YYYY-MM or YYYY-MM-DD]
period: [life period label]
characters: [comma-separated names]
themes: [comma-separated themes]
career-relevant: true / false
source: raw/{filename}.md
---

## Narrative
[Summary or full narrative prose]

## Reflection
[Analytical note: what this moment means in the larger arc]

## Themes
[List of themes present in this episode]

## Characters
[Each person and their role in this episode]
```

---

## \connect {episode-name}

**Purpose:** Find connections between an episode and the career domain.

**Input:**
- `wiki/episodes/{episode-name}.md`
- `wiki/reflections/{episode-name}-reflection.md`
- `career/wiki/positioning.md`
- `career/wiki/evidence/`

**Sequence:**
1. Read the episode and its reflection.
2. Identify what professional capability it demonstrates.
3. Check if that capability has an existing evidence file in `career/wiki/evidence/`.
4. If yes, propose adding the episode as a new story to the existing evidence file.
5. If no, assess whether a new bridge is warranted.
6. If a bridge is warranted, create it in `_bridges/memoir-to-career/`.
7. Report what was found. Wait for confirmation before writing outside this domain.

**Rules:**
- Only create bridges for genuine synthesis, not cross-references.
- Always check if an existing evidence file can absorb the episode before creating a bridge.
- Do not automatically update career files — report and wait for confirmation.

---

## \extract {episode-name}

**Purpose:** Extract career-usable material from an episode.

**Use before:** job applications, interview preparation, CV generation.

**Input:**
- `wiki/episodes/{episode-name}.md`
- `wiki/reflections/{episode-name}-reflection.md`

**Output (inline only — do not save as file):**

```
EPISODE: {name}
CAREER CLAIM: [what capability this proves, one sentence]

STAR STORY (interview format):
  Situation: [2 sentences]
  Task: [1 sentence]
  Action: [2 to 3 sentences — what you did and how]
  Result: [1 to 2 sentences — specific outcome]

CV BULLET: [one strong bullet, 20 to 30 words]
OBJECTION IT ANSWERS: [which recruiter objection this story defeats]
BEST USE: [which question type or role this story fits best]
```

---

## \story {episode-name} {format}

**Purpose:** Transform a memoir episode into public-facing content.

**Supported formats:**
- `linkedin` — LinkedIn post, 150 to 250 words, ends with a professional insight
- `blog` — blog post introduction and structure, 500 to 800 words
- `anecdote` — short 3-paragraph professional anecdote for interviews or networking

**Input:** `wiki/episodes/{episode-name}.md`

**Rules:**
- Never use real names of third parties without explicit user permission.
- Keep the narrative anchored in professional insight.
- The output is a draft. Present it to the user before saving.

**Output:** `wiki/outputs/{episode-name}-{format}.md`

---

## \query {tag}

**Purpose:** Find episodes relevant to a specific capability, theme, or interview question type.

**Available tags (add your own as themes grow):**
- `leadership-without-authority`
- `change-management`
- `resistance-management`
- `stakeholder-management`
- `human-centred-design`
- `personal-credibility`
- `narrative-facilitation`
- `technical-delivery`
- `resilience`
- `failure-and-learning`

**Input:**
- `wiki/themes/{tag}.md`
- `wiki/chapters/README.md`

**Output (inline):** List of episodes relevant to the tag with career relevance rating and recommended story format.

---

## \review

**Purpose:** Audit the domain for gaps and maintenance needs.

**Checks:**
- Episodes without reflections
- Themes with no recent episode updates
- Career-relevant episodes with no bridge or evidence file connection
- Characters appearing in episodes but not in `wiki/characters/`
- `wiki/chapters/README.md` accuracy

**Output (inline):** Gap report with recommended actions.

---

## Pipeline: Writing and extracting a career story

```
[BIO_MODE] {rough idea or memory}
→ \write drafts the episode
→ User approves
→ \ingest processes it into the full wiki structure
→ \connect checks career relevance
→ \extract generates STAR story and CV bullet
→ Bullets feed into \cv or \cover commands in the career domain
```
