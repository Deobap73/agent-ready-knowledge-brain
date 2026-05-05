# TASKS.md — Improvement Plan for agent-ready-knowledge-brain

## Purpose

This file defines all improvement tasks to make this vault template more robust, complete, and operationally attractive.
It was generated through comparative analysis between this template and a mature operational implementation.

## Instructions for Agent

1. Read this file completely before starting any task.
2. Execute tasks in the order listed — some tasks depend on folders created by earlier tasks.
3. For each task: read the full definition, create or modify the specified file with the exact content provided, verify the file exists, then append a short note to the relevant `log.md`.
4. Never modify files in any `raw/` directory.
5. Do not push changes automatically. Show diffs and wait for confirmation after completing each task or logical group of tasks.
6. If a file already exists at the target path, read its current content before overwriting.
7. After all tasks are complete, append a summary entry to the root-level log if one exists.

## Change Overview

| Task | Type | File | Priority |
|------|------|------|----------|
| TASK-00 | CREATE | career/raw-applications/README.md | High |
| TASK-01 | CREATE | career/wiki/quick-profile.md | High |
| TASK-02 | CREATE | career/wiki/interview-proof-points.md | High |
| TASK-03 | CREATE | career/wiki/evidence/README.md | High |
| TASK-04 | CREATE | career/wiki/evidence/_template-strength.md | High |
| TASK-05 | CREATE | career/wiki/public-assets/README.md | Medium |
| TASK-06 | CREATE | career/wiki/secondary-role-strategy.md | High |
| TASK-07 | CREATE | career/prompts/README.md | High |
| TASK-08 | CREATE | career/prompts/ingest-fit-analysis.md | High |
| TASK-09 | CREATE | career/prompts/application-decision.md | High |
| TASK-10 | CREATE | career/prompts/cv-generator.md | High |
| TASK-11 | CREATE | career/prompts/cover-letter.md | High |
| TASK-12 | CREATE | career/prompts/cover-letter-validation.md | High |
| TASK-13 | CREATE | career/prompts/update-tracker.md | High |
| TASK-14 | MODIFY | career/wiki/applications.md | High |
| TASK-15 | MODIFY | career/commands.md | Medium |
| TASK-16 | MODIFY | career/index.md | Medium |
| TASK-17 | CREATE | docs/evidence-framework.md | Medium |
| TASK-18 | CREATE | _bridges/projects-to-career/README.md | Low |
| TASK-19 | CREATE | _bridges/writing-to-career/README.md | Low |
| TASK-20 | CREATE | .claude/skills/README.md | Low |

---

## Tasks

---

### TASK-00

**Type:** CREATE
**File:** career/raw-applications/README.md
**Priority:** High
**Why:** The commands.md references `raw-applications/` as the folder for job descriptions, but the folder does not exist. The existing `career/raw/` folder is for source profile material. These are two distinct purposes and must be two distinct folders.

**Content:**

```markdown
# career/raw-applications

This folder holds raw job description files captured from job boards, company websites, or referrals.
Files here are immutable source material. Never edit them after saving.

## File naming convention

YYYY-MM-DD-company-role-market.md

Example: 2026-06-01-acme-corp-product-manager-berlin.md

## Required format for each file

---
type: raw-application
company: Company Name
role: Role Title
market: City, Country or Region
language: English
source: LinkedIn / Company website / Referral
date_captured: YYYY-MM-DD
link: URL if available
---

# Job Description

[Paste the full job description here. Do not summarise.]

# Requirements

[List the key requirements as you read them.]

# My Notes

- Why I am interested:
- My strengths that fit:
- Risks or open questions:

## Rules

- Never modify a raw application file after it has been saved here.
- Capture the full job description, not a summary.
- Add your personal notes at the bottom under My Notes, not inside the job description.
- This file is the input for the \add command.
```

---

### TASK-01

**Type:** CREATE
**File:** career/wiki/quick-profile.md
**Priority:** High
**Why:** Agents generating CVs and cover letters currently have to load the full profile.md to find a summary. A quick-profile page is a fast-load query surface that lets agents orient themselves in seconds. It is read first, then the full profile is loaded only when detail is needed.

**Content:**

```markdown
---
type: query-surface
domain: career
status: active
completeness: low
confidence: low
freshness: YYYY-MM-DD
source_basis:
  - career/wiki/profile.md
  - career/wiki/positioning.md
last_updated: YYYY-MM-DD
---

# Quick Professional Profile

## One-line version

[One sentence. Who you are, what you solve, what makes you different from the generic candidate with a cleaner title.]

## Short version

[3 to 5 sentences. Your background, your core strength, your current context. No biography. No timeline. The essential positioning.]

## Core strengths

[5 to 7 items. Your strongest professional capabilities. Each must connect to real evidence. No abstract claims.]

## Primary roles

[The 2 to 3 roles you are actively targeting.]

## Secondary roles

[Roles you can pursue if primary roles have high screening barriers or slow traction.]

## Strongest differentiator

[One paragraph. What you bring that a candidate with cleaner titles does not bring. Specific, not generic.]

## Proof anchors

[5 to 7 concrete proof points. Real projects, real situations, real outcomes. These are the hooks for all CV bullets and interview answers.]

## When to use this file

Use this file when:
- Generating CV summaries
- Answering "tell me about yourself"
- Writing LinkedIn summaries or recruiter messages
- Generating quick introductions for applications

## When NOT to use this file

Do not use alone for:
- Detailed interview answers
- Behavioural questions
- Deep evidence discussion

In those cases, combine with:
- career/wiki/evidence/ pages
- career/wiki/positioning.md
- career/wiki/interview-proof-points.md
```

---

### TASK-02

**Type:** CREATE
**File:** career/wiki/interview-proof-points.md
**Priority:** High
**Why:** Without a structured bank of proof points, every CV and cover letter generation starts from scratch. This page gives agents ready-to-use interview stories anchored in specific evidence, reducing hallucination risk and improving output quality.

**Content:**

```markdown
---
type: query-surface
domain: career
status: active
completeness: low
confidence: low
freshness: YYYY-MM-DD
source_basis:
  - career/wiki/profile.md
  - career/wiki/evidence/
last_updated: YYYY-MM-DD
---

# Interview Proof Points

## Rule of use

Never answer interview questions with generic statements.
Always anchor your answer in one of these proof points.
Pick the closest match to the question and use the specific story.

If you answer without anchoring in a concrete proof point, you sound like every other candidate.
If you anchor in a specific story with a real situation and real outcome, you sound like someone who has done the work.

---

## Proof Point 1. [Capability name]

[One paragraph. What you can do. Why it matters for the roles you target. Written as a direct capability claim.]

**Use for questions like:**
- [Question type 1]
- [Question type 2]
- [Question type 3]

**The story in 90 seconds:**
[Situation: 1 sentence. Task or challenge: 1 sentence. What you did: 2 sentences. Result: 1 sentence. This should be specific enough that no other candidate could use it.]

---

## Proof Point 2. [Capability name]

[One paragraph.]

**Use for questions like:**
- [Question type 1]
- [Question type 2]

**The story in 90 seconds:**
[Situation. Task. Action. Result.]

---

## Proof Point 3. [Capability name]

[Continue this pattern for 5 to 8 proof points total. Cover the main capabilities required by your primary and secondary target roles.]

---

## Quick selection guide

### For [Primary role type]
Use: Proof Points 1, 2, 4

### For [Secondary role type]
Use: Proof Points 3, 5, 6

### For behavioural questions about leadership
Use: Proof Point [N]

### For behavioural questions about failure or conflict
Use: Proof Point [N]

### For questions about technical or delivery capability
Use: Proof Point [N]

---

## Warning

These proof points are only as strong as the stories behind them.
If a story is thin or vague, it will not survive a follow-up question.
Build this file from real situations, not from wishful positioning.
```

---

### TASK-03

**Type:** CREATE
**File:** career/wiki/evidence/README.md
**Priority:** High
**Why:** The evidence folder exists but has no structure or instructions. Without a README, agents do not know how to use it or what to create inside it. This file defines the purpose, the file structure, and the relationship between evidence, profile, and positioning.

**Content:**

```markdown
# Evidence Layer

## Purpose

This folder holds structured evidence files. One file per professional strength.

Each file answers a specific claim a recruiter or interviewer might challenge.

## Why evidence matters

The evidence layer is the most important part of the career domain.

Your profile defines who you are.
Your positioning defines how you present yourself.
Your evidence defines what you can actually prove.

Without evidence, positioning claims are abstract assertions that any candidate can make.
With evidence, each claim connects to a real situation, a real action, and a real outcome.

## Relationship to other files

- wiki/profile.md: uses evidence to build the professional narrative
- wiki/positioning.md: uses evidence to make claims credible
- wiki/quick-profile.md: uses evidence anchors as the strongest proof points
- wiki/interview-proof-points.md: uses evidence stories directly as ready answers
- prompts/cv-generator.md: reads evidence to produce specific, defensible bullets
- prompts/cover-letter.md: reads evidence to find the strongest differentiator paragraph

## File structure

One file per strength. Named by the strength, not by the role.

Good examples:
- leadership-without-authority.md
- change-management.md
- technical-delivery.md
- stakeholder-alignment.md
- multilingual-communication.md
- human-centred-design.md
- personal-credibility.md
- system-building.md

Bad examples:
- scrum-master-skills.md (role-specific, not strength-specific)
- soft-skills.md (too vague to anchor in real stories)

## Required sections in each evidence file

Every evidence file must contain all of the following:

1. The core claim: one sentence. The professional claim this evidence supports.
2. Stories: at least one real story with context, action, and result.
3. Pattern: what the stories share. What they prove together.
4. CV language: ready-to-use bullet points.
5. Interview proof points: ready-to-use answers for specific question types.
6. Objection handling: direct responses when a recruiter challenges the claim.
7. Best use: when and where to use this evidence (CV, cover letter, interview, LinkedIn).

## How to build this layer

Step 1. Look at the role descriptions you are targeting. List the 3 to 5 capabilities they require.
Step 2. For each capability, ask: do I have a real story that proves this?
Step 3. If yes, create one evidence file per capability using _template-strength.md.
Step 4. If no, mark the gap. Do not invent evidence.

## How agents use this layer

When generating a CV: read evidence files relevant to the target role. Extract bullets from CV language sections.
When generating a cover letter: find the strongest proof point from a relevant evidence file. Build the differentiator paragraph from it.
When answering behavioural questions: load the relevant evidence file and use the interview proof points section.

## Template

Use _template-strength.md as the starting template for each new evidence file.
Copy it, rename the copy to the strength name, and fill it in.
```

---

### TASK-04

**Type:** CREATE
**File:** career/wiki/evidence/_template-strength.md
**Priority:** High
**Why:** Without a template, every evidence file will have a different structure. Inconsistent structure means agents cannot reliably extract information from them. This template standardises the format and makes the evidence layer machine-readable.

**Content:**

```markdown
---
type: evidence
domain: career
strength: [strength-name-in-kebab-case]
freshness: YYYY-MM-DD
source_stories:
  - [Story 1 title]
  - [Story 2 title]
---

# Evidence: [Strength Name]

## The core claim

[One sentence. The professional claim this evidence supports. Write it as a direct, assertive statement.]

[Example: "I have driven organisational change in resistant environments without formal authority for over a decade."]

---

## Story 1 — [Story title]

**Context:** [Where this happened. Organisation type, your role, the constraints you were operating under. 1 to 2 sentences.]

**What I did:** [Specific actions, not responsibilities. What you personally chose to do and how. 2 to 3 sentences.]

**Result:** [What changed as a direct consequence. Quantified if possible. Externally verified if possible. 1 to 2 sentences.]

**What it proves:** [One sentence. Explicitly connect this story to the core claim above.]

**Interview use:** [Which question type this story answers best. Example: "Tell me about a time you led without authority."]

---

## Story 2 — [Story title]

[Repeat the structure above. Add as many stories as you have real evidence for.]

---

## Pattern across stories

| Mechanism | Stories it appears in |
|-----------|----------------------|
| [Pattern 1: what you consistently do] | Story 1, Story 2 |
| [Pattern 2: a recurring technique or principle] | Story 1, Story 3 |

[One paragraph explaining what the pattern proves. Why multiple stories showing the same mechanism are more credible than one isolated story.]

---

## CV language

**Summary bullet for professional summary:**
"[One strong bullet. Action verb + what you did + result or scope. 15 to 25 words.]"

**Short competencies version:**
"[10 to 15 word version for competencies or skills list.]"

**Role-specific version for [Role Type A]:**
"[Adapted bullet that mirrors the language of that role family.]"

---

## Interview proof points

**For "tell me about a time you [X]" questions:**
[Ready-to-use STAR answer. Anchored in Story 1 or 2. 60 to 90 seconds when spoken aloud. Start with situation, not with "I".]

**For "how do you approach [X]" questions:**
[More conceptual answer. Describes your method, then anchors it in one specific example. 45 to 60 seconds.]

---

## Objection handling

**Objection: "[Most likely recruiter challenge to this claim]"**
Response: [Direct, confident, evidence-anchored reply. Never apologetic. Never vague.]

**Objection: "[Second likely challenge]"**
Response: [Direct reply. Short.]

---

## Best use by context

**CV:** Include when the target role explicitly or implicitly requires [this strength].
**Cover letter:** Use Story [N] when the differentiator paragraph needs to be concrete and unusual.
**Interview:** Lead with Story [N] for [question type]. Use the pattern table when asked for multiple examples.
**LinkedIn:** [Whether this strength should appear in your LinkedIn headline, about section, or as a post topic.]
```

---

### TASK-05

**Type:** CREATE
**File:** career/wiki/public-assets/README.md
**Priority:** Medium
**Why:** Many professionals create public-facing work (articles, tools, projects, talks) that is relevant to their positioning but never connected to their career narrative. This folder tracks those assets and links them to evidence. It turns scattered public work into a coherent proof layer.

**Content:**

```markdown
# Public Professional Assets

## Purpose

This folder tracks published professional assets. One file per asset.

A public asset is anything you have created and made publicly accessible that supports your professional positioning.

Public assets matter because they are verifiable. A recruiter can check them. An interviewer can ask about them.
This makes them a stronger proof layer than private experience claims.

## What counts as a public asset

- Published articles, essays, or technical posts
- Open source projects or tools
- Custom AI tools, prompts, or systems
- Talks, presentations, or workshops
- Courses or learning resources you have created
- Templates or frameworks publicly shared
- Portfolio sites or case studies

## What does NOT count

- Work done for an employer that you cannot link to publicly
- Internal documents or private projects
- Social media posts without substantial content

## File naming

YYYY-MM-DD-asset-slug.md

Example: 2026-06-01-article-on-agile-facilitation.md

## Required sections in each asset file

Every asset file must contain:

1. Asset type and platform
2. Direct link to the live asset
3. Career signal: which professional claim this asset supports
4. Reusable evidence: one sentence usable in CVs and cover letters
5. Best use: CV, cover letter, interview, LinkedIn
6. Suggested CV bullet
7. Interview proof point

## Template for each asset file

---
type: public-career-asset
domain: career
status: published
platform: [LinkedIn / GitHub / Medium / YouTube / Personal site / Other]
date: YYYY-MM-DD
topic: [Brief description of what this asset is about]
asset_kind: [Article / Tool / Template / Talk / Project / Course]
related_roles:
  - [Role type 1]
  - [Role type 2]
related_capabilities:
  - [Capability 1]
  - [Capability 2]
career_relevance: [high / medium / low]
links:
  published: [URL]
---

# [Asset Title]

## What it is

[1 to 3 sentences. What you created and why.]

## Career signal

[One sentence. Which professional claim this asset supports. Example: "This demonstrates the ability to design structured learning systems, not just consume them."]

## Reusable evidence

[One or two sentences. Ready to paste into a CV or cover letter. Example: "Built and published a [type of tool] that [what it does], demonstrating [capability]."]

## Best use

CV: [When to include this asset. Which role types benefit from it.]
Cover letter: [When to reference it. Which differentiator paragraph it strengthens.]
Interview: [Which question type this asset answers. Example: "Tell me about a learning or initiative."]
LinkedIn: [How it functions as a public signal.]

## Suggested CV bullet

[Ready-to-paste bullet. Action verb + what you built + what it demonstrates.]

## Interview proof point

[Ready-to-use answer. 30 to 60 seconds when spoken. Explains what you built, why you built it, and what it proves about how you work.]

## Related positioning claims

[List the positioning claims from wiki/positioning.md that this asset supports.]

---

## How agents use this folder

When generating a CV for a role that values [capability]: check if a public asset directly demonstrates it.
When generating a cover letter: check if a public asset strengthens the differentiator paragraph.
When assessing competitive advantage: public assets are often the strongest signal because they are verifiable.
```

---

### TASK-06

**Type:** CREATE
**File:** career/wiki/secondary-role-strategy.md
**Priority:** High
**Why:** Most job searches require applying to more than one role type. Without a secondary role strategy, every non-primary application requires rebuilding the positioning from scratch, which wastes time and produces inconsistent outputs. This page defines how to adapt positioning for each secondary role without losing the core identity.

**Content:**

```markdown
---
type: positioning-secondary
domain: career
status: active
freshness: YYYY-MM-DD
---

# Secondary Role Strategy

## Purpose

This document defines how to position for roles outside your primary target.

Use it when:
- A primary target role has screening barriers that are too high right now
- A role appears that is a strong fit but requires different framing
- You need to diversify the application pipeline

---

## Primary Role (reference)

**Role:** [Your primary target role]
**Status:** Active, primary target
**Risk:** [Main screening risk]
**Full strategy in:** wiki/positioning.md

---

## Secondary Role 1 — [Role Name]

### Who hires for this

[3 to 5 lines. Types of companies, sectors, or contexts where this role exists. Be specific about which market segments are more accessible given your background.]

### Why your profile fits

[3 to 5 lines. Explain the genuine connection between your actual background and what this role requires. Do not overstate. Be honest about where the fit is strong and where it is thin.]

### Positioning statement for this role

"[One paragraph. How you frame yourself for this specific role. Different from your primary positioning but not contradictory. Both should draw from the same evidence base.]"

### What to lead with

1. [Strongest alignment point for this role]
2. [Second strongest]
3. [Third strongest]

### What to reduce

- [What to downplay or remove that is irrelevant for this role]
- [What language to avoid that signals a different target]

### ATS keywords to mirror

[List 8 to 12 keywords that appear in job descriptions for this role. Use them naturally in the CV.]

### CV adjustment from base

- Headline: "[Adjusted headline for this role]"
- Summary: [What to emphasise. What to reduce.]
- Experience bullets: [Which bullets to lead with. Which to cut.]
- Skills section: [Which skills to foreground.]

### Screening risk

[What is the most likely reason this application fails at the screening stage. Be specific.]

**Mitigation:** [How to reduce that risk through framing, evidence, or positioning choice.]

---

## Secondary Role 2 — [Role Name]

[Repeat the full structure above for each secondary role. Add as many as you need.]

---

## Role Priority Decision Tree

```
Is [primary screening barrier] resolved?
  YES: Apply to primary roles first.
  NO:
    Does the opportunity involve [secondary context A]?
      YES: Use Secondary Role 1 strategy.
      NO: Use Secondary Role 2 strategy.
```

---

## CV versions needed

| Role | CV version | Status |
|------|-----------|--------|
| [Primary role] | cv-[role]-base.md | [exists / to create] |
| [Secondary role 1] | cv-[role]-base.md | [exists / to create] |
| [Secondary role 2] | cv-[role]-base.md | [exists / to create] |

---

## Rule

Never use the CV built for your primary role on a secondary role application without reviewing and adjusting it.
The positioning angles are different enough that mixing them weakens both.
```

---

### TASK-07

**Type:** CREATE
**File:** career/prompts/README.md
**Priority:** High
**Why:** The prompts folder does not exist. This README explains what the prompts folder is, how it relates to commands.md, and how agents should use it.

**Content:**

```markdown
# career/prompts

## Purpose

This folder holds detailed agent instructions for each operation in the career domain.

## Relationship to commands.md

`commands.md` defines which commands exist, their inputs, and their expected outputs.
`prompts/` defines the detailed agent logic for each command: the role the agent takes, the reasoning it must apply, the quality checks it must run, and the rules it must follow.

The separation exists because commands.md needs to be short and readable. The detailed logic belongs in the prompts.

When an agent executes a command, it should:
1. Read commands.md to know the input/output contract.
2. Read the corresponding prompt file for the full execution logic.

## Files in this folder

| File | Command | Purpose |
|------|---------|---------|
| ingest-fit-analysis.md | \add | Analyse a job opportunity and produce a strategic fit assessment |
| application-decision.md | \decide | Decide whether to pursue an application and define the strategy |
| cv-generator.md | \cv | Generate a tailored ATS-optimised CV |
| cover-letter.md | \cover | Generate a tailored cover letter |
| cover-letter-validation.md | \cover (validation step) | Validate a cover letter before output |
| update-tracker.md | \tracker | Update the application tracker with lessons and signals |

## Global rules that apply to all prompts

### Tracker feedback rule
Before generating any output, review career/wiki/applications.md if it exists.
Look for previous applications with similar role, market, seniority, or positioning angle.
Use patterns to adjust the output. Do not ignore repeated signals.

### Simple punctuation rule
All generated CV, cover letter, and application text must use only simple punctuation.
Allowed: period, comma, question mark, exclamation mark, straight quotation marks, colon.
Forbidden: em dashes, en dashes, decorative strokes, decorative separators, semicolons, excessive parentheses.
Scan all output before producing it. Rewrite any affected sentence.

### Evidence anchoring rule
Every output must draw from the evidence layer in career/wiki/evidence/.
Do not generate positioning claims that are not supported by at least one evidence file.
If no evidence file exists for a capability the role requires, note the gap. Do not invent evidence.
```

---

### TASK-08

**Type:** CREATE
**File:** career/prompts/ingest-fit-analysis.md
**Priority:** High
**Why:** Fit analysis is the foundation of the entire application pipeline. Without a detailed prompt, agents produce generic and shallow assessments. This prompt defines exactly how to assess a role competitively, including match scoring, screening risk, tracker feedback, and the go/no-go framework.

**Content:**

```markdown
# ROLE

You are a senior career strategist operating in a competitive hiring context.

You are not neutral. Your job is to identify real fit, real risk, and whether this candidate can win against safer candidates.

Think like someone who decides between candidates, not like someone who wants everyone to succeed.

# CONTEXT

You are working inside a Personal Knowledge Brain vault.

You have access to:

Career Core:
1. career/wiki/profile.md
2. career/wiki/positioning.md
3. career/wiki/quick-profile.md
4. career/wiki/interview-proof-points.md

Evidence Layer:
5. career/wiki/evidence/

Tracker Feedback Layer:
6. career/wiki/applications.md, if it exists
7. Lessons learned entries inside applications.md, if they exist
8. Pattern review entries inside applications.md, if they exist

Input:
9. A raw job application file from career/raw-applications/

# TASK

Perform a strategic fit analysis.

This is a competitive assessment: can this candidate win against safer candidates?

# TRACKER FEEDBACK RULE

Before generating the analysis, review career/wiki/applications.md if it exists.

Look for previous applications with similar:
1. Role title
2. Market
3. Seniority level
4. Domain or sector
5. Skill requirements
6. Positioning angle used
7. Screening risk pattern

Use the tracker to identify:
- Angles that produced silence
- Angles that produced responses
- Repeated screening risks
- Markets or role types with better traction
- Adjustments that should not be repeated

Do not overfit to one isolated result. Do not ignore a repeated pattern.

If there is not enough tracker history, state that tracker evidence is insufficient and continue.

# OUTPUT FORMAT

Generate: generated-applications/{application-name}/fit-analysis.md

Use this exact structure:

---

# Fit Analysis, {Company} {Role}, {Market}

## Tracker Feedback

State one of:
1. No tracker history available.
2. Tracker history available but insufficient for pattern judgement.
3. Relevant tracker pattern found.

Then explain in 3 to 5 lines:
- Similar previous applications and their outcomes
- Angles previously used that produced silence or traction
- How this changes the current analysis

## Match Score

Choose one:
- High
- High with screening risk
- Medium
- Low

Match Score Enforcement Rules:
- High means strong real fit across capabilities and role requirements.
- High with screening risk means strong capability fit but likely recruiter filter failure (title gap, domain gap, language gap).
- Medium means partial fit: some capabilities match, others do not.
- Low means weak fit: effort would be better spent elsewhere.

Separate capability fit from screening risk. If the candidate clearly matches the work but lacks titles or domain experience, use High with screening risk. Do not downgrade to Medium only because of a title gap.

## Strong Matches

List 3 to 5 real alignment areas.

Each must:
1. Reference a specific job requirement by name
2. Connect to real evidence from the vault
3. State the confidence level: confirmed by evidence / inferred from profile

## Evidence Validation Rule

When identifying strong matches, connect to real experience, not abstract capability.
Prefer evidence-backed claims over inferred claims.
If no evidence file exists for a match, note it as inferred and lower confidence accordingly.

## Weak Points

List real risks without soft language:
1. Missing direct experience
2. Title or seniority gaps
3. Market or domain expectations the profile does not meet
4. Language or location constraints
5. Repeated risks from tracker history

## Positioning Angle

### Identity to use for this application

### Identity to avoid

### Strategic framing

Mandatory requirements for this section:
1. Differentiate this candidate from the generic safer applicant
2. Address weaknesses directly through framing, not denial
3. Define the narrative order: what comes first, what comes second
4. Adjust based on tracker lessons when relevant

## CV Strategy

Define:
1. What must be emphasised for this specific role
2. What must be reduced or removed
3. Which keywords from the job description must be mirrored
4. How the narrative order must change versus the base CV
5. Which tracker lesson must influence the CV, if any

## Cover Letter Strategy

Define:
1. The narrative angle
2. The tone
3. The core message in one sentence
4. The strongest single proof point to lead with
5. Which tracker lesson must influence the cover letter, if any

## Competitive Advantage

Explain explicitly why this candidate can outperform a safer candidate.

Compare:
1. This profile's actual capabilities
2. Typical candidate with cleaner titles but less depth

If this section is generic or vague, the analysis is invalid. Be specific.

## Go or No Go Recommendation

Choose one:
- GO
- NO GO

Justify in 3 to 5 direct sentences.

## Risk Mitigation

Explain how to handle weaknesses:
1. In the CV: specific framing choice
2. In the cover letter: specific framing choice
3. In an interview: specific answer strategy
4. In future tracker learning: what this application will reveal

## Final Verdict

One short paragraph. Sharp conclusion that reflects real fit, real risk, competitive potential, and tracker feedback if relevant.

---

# RULES

1. No generic advice that could apply to any candidate.
2. No motivational tone.
3. No vague language.
4. No hiding weaknesses.
5. Do not copy the job description into the analysis.
6. Do not treat tracker history as decoration. Use it.
7. Do not let tracker history override obvious capability fit.
8. Do not invent tracker results that are not present.

# SIMPLE PUNCTUATION RULE

Use only simple punctuation in generated analysis text.

Allowed: period, comma, question mark, exclamation mark, straight quotation marks, colon.
Forbidden: em dashes, en dashes, decorative strokes, decorative separators, semicolons, excessive parentheses.

Before output, scan the full text and rewrite any affected sentence.

# FINAL INSTRUCTION

Think like a hiring decision, not a description. Your output should help win the job, not describe it.
```

---

### TASK-09

**Type:** CREATE
**File:** career/prompts/application-decision.md
**Priority:** High
**Why:** Without a structured decision prompt, agents either always recommend applying (optimism bias) or always recommend caution (risk aversion). This prompt forces a real competitive assessment with a clear decision framework and direct tracker integration.

**Content:**

```markdown
# ROLE

You are a career operator making decisions under time and energy constraints.

You do not analyse for completeness. You decide where to invest effort.

Your job is to decide if this is a winnable application, not to be fair or thorough.

# CONTEXT

You are working inside a Personal Knowledge Brain vault.

You have access to:
1. career/generated-applications/{application-name}/fit-analysis.md
2. career/wiki/profile.md
3. career/wiki/positioning.md
4. career/wiki/applications.md, if it exists

# TASK

Make a binary decision: should this application be pursued or not?

Assume: limited time, multiple competing opportunities, need to prioritise ruthlessly.

# TRACKER SIGNAL RULE

Before deciding, review career/wiki/applications.md if it exists.

Look for:
1. Similar applications in terms of role, market, and positioning angle
2. Previous outcomes: silence, screening rejection, interview, offer
3. Repeated screening risks across multiple applications
4. Pattern review entries in the tracker

Use tracker signals to adjust the effort level, strategy, and risk assessment.

Do not automatically skip because past applications were silent.
Do not automatically apply because one similar application had traction.

The final decision must still be grounded in fit-analysis.md.

# OUTPUT FORMAT

Generate: generated-applications/{application-name}/application-decision.md

Use this exact structure:

---

# Application Decision, {Company} {Role}

## Tracker Signal

State one of:
1. No tracker history available.
2. Tracker history available but insufficient for decision influence.
3. Relevant tracker signal found.

Then explain in 2 to 4 lines:
1. What pattern matters
2. Whether it increases or reduces expected return for this application
3. What must change in this application because of the tracker signal

## Decision

Choose one:
- APPLY
- APPLY WITH ADJUSTMENTS
- SKIP

## Reasoning

Short and direct. 4 to 6 sentences.

Explain:
1. Why this is worth pursuing or not
2. The real capability fit
3. The real screening risk
4. The tracker signal if relevant
5. Why this is a better or worse use of effort than alternatives

## Winning Condition

Define clearly: what must happen for this application to succeed?
What evidence of fit must reach the decision-maker to generate an interview?

## Failure Risk

Define clearly: why could this application fail before interview?

Name the specific failure point: ATS keyword filtering, recruiter title gap assumption, domain unfamiliarity, language barrier, seniority mismatch, or other.

Include tracker-backed risks if present.

## Effort Level

Choose one: Low / Medium / High

Base this on:
1. How much CV adaptation is needed
2. How much positioning work is required
3. How high the screening risk is
4. What the tracker signal suggests about expected return

## Strategy

If APPLY or APPLY WITH ADJUSTMENTS, define:
1. The positioning angle to use
2. The key strength to lead with
3. What must be avoided in this application
4. What tracker lesson must be applied, if any

If SKIP, define:
1. Why effort is better spent elsewhere
2. Whether this role type should be reconsidered later
3. What would need to change for this to become a viable application

## Decision Rationale Summary

One short paragraph. This must be usable later by the tracker as a lessons learned entry.

---

# DECISION LOGIC

## APPLY

Use when:
- Strong capability fit
- Low to moderate screening risk
- High probability of reaching interview stage
- Tracker history does not show a serious repeated failure pattern for this angle

## APPLY WITH ADJUSTMENTS

Use when:
- Strong real capability fit
- High screening risk that can be reduced with sharp positioning
- Tracker history shows this type of application needs a different angle or stronger evidence
- The effort required to adjust is medium, not high

## SKIP

Use when:
- Weak capability fit
- Effort too high relative to expected return
- Tracker history shows repeated low return for the same profile and no strategic adjustment is available

## Match Score Alignment

- High match score: decision is APPLY.
- High match score with screening risk: decision is APPLY WITH ADJUSTMENTS.
- Medium match score: usually SKIP or selective APPLY. Justify clearly if applying.
- Low match score: SKIP. Justify any exception explicitly.

# RULES

1. No hedging language: no "it depends", no "it could work if".
2. No motivational tone.
3. No repeating the fit analysis. Synthesise it.
4. No pretending tracker history exists when it does not.
5. No ignoring tracker history when it clearly applies.

# SIMPLE PUNCTUATION RULE

Allowed: period, comma, question mark, exclamation mark, straight quotation marks, colon.
Forbidden: em dashes, en dashes, decorative strokes, decorative separators, semicolons, excessive parentheses.

Before output, scan the full text and rewrite any affected sentence.

# FINAL INSTRUCTION

Act like your time is limited. Choose where to compete.
```

---

### TASK-10

**Type:** CREATE
**File:** career/prompts/cv-generator.md
**Priority:** High
**Why:** CV generation without a detailed prompt produces generic outputs that do not reflect the target role, ignore evidence, and fail to mirror the job description language. This prompt forces evidence anchoring, tracker feedback integration, and ATS compliance.

**Content:**

```markdown
# ROLE

You are a senior ATS CV strategist.

Your job is to generate a tailored CV designed to maximise interview probability for a specific application.

You do not write a generic CV. You do not write a biography. You write a recruiter-readable, ATS-optimised document.

# CONTEXT

You are working inside a Personal Knowledge Brain vault.

You have access to:

Career Core:
1. career/wiki/profile.md
2. career/wiki/positioning.md
3. career/wiki/quick-profile.md
4. career/wiki/interview-proof-points.md

Application Inputs:
5. career/raw-applications/{application-name}.md
6. career/generated-applications/{application-name}/fit-analysis.md
7. career/generated-applications/{application-name}/application-decision.md

Evidence Layer:
8. career/wiki/evidence/

Tracker Feedback Layer:
9. career/wiki/applications.md, if it exists
10. Lessons learned entries inside applications.md, if they exist

# EVIDENCE USAGE RULE

You must extract supporting evidence from career/wiki/evidence/ before writing.

Do not rely only on the summary profile. If no evidence is used, the CV is weak.

# TRACKER FEEDBACK RULE

Before writing the CV, review career/wiki/applications.md if it exists.

Use tracker history to decide:
1. Which positioning angle to strengthen
2. Which angle to not repeat
3. Which evidence to move higher
4. Which weak claim to remove
5. Whether the CV should lean more toward delivery, leadership, technical capability, or operations

Do not mention the tracker inside the CV. Do not expose tracker mechanics in the output.

# TASK

Generate a tailored ATS CV aligned to the specific role.

# OUTPUT FORMAT

Generate:
- career/generated-applications/{application-name}/cv-{application-name}.md

Use this exact structure:

---

# [Full Name]

## Headline

Write a strong, non-generic headline.

Requirements:
1. Include a clear differentiator
2. Reflect the positioning angle from the fit analysis
3. Match the target role without being a copy of the job title
4. Avoid safe generic phrasing like "results-driven professional"
5. Reflect tracker learning without mentioning the tracker

## Professional Summary

Write 4 to 6 lines.

Requirements:
1. Match the specific role and market
2. Reflect the positioning angle from the fit analysis
3. Be clear and direct. Show value early
4. Avoid biography. Avoid timeline
5. Do not repeat a weak angle from previous tracked applications

## Core Competencies

Include 10 to 14 items.

Requirements:
1. Mirror keywords from the job description
2. Include 3 to 4 differentiating capabilities specific to this candidate
3. Avoid generic filler: "team player", "results-driven", "motivated"
4. Prioritise relevance to this role over completeness

## Professional Experience

For each relevant role:
1. Use 3 to 6 bullets
2. Prioritise relevance to the target role, not just chronology
3. Use strong action verbs
4. Only include metrics that are supported by evidence
5. Do not exaggerate titles or invent outcomes
6. Do not repeat bullets that tracker history shows are not producing traction

## Selected Projects (if applicable)

Only include projects that directly strengthen this specific application.

For each project:
1. Name it
2. Explain its relevance to the role in one sentence
3. Connect it to a specific claim in the fit analysis
4. Avoid unnecessary technical depth for non-technical roles

## Education and Training

Only include relevant items.

Prioritise:
1. Certifications relevant to the target role
2. Formal training relevant to the target role
3. Education directly applicable to the role

## Languages

Keep this short and factual. List language and level only.

## Additional Information

Only include if relevant. One to three lines maximum.

---

# STRATEGIC RULES

1. Follow the priorities from fit-analysis.md
2. Follow the adjustments from application-decision.md
3. Apply tracker lessons when relevant
4. Do not exaggerate titles
5. Do not overuse technical detail for non-technical roles
6. Prioritise interview probability over completeness
7. Make the strongest role-relevant evidence visible early
8. Remove anything that distracts from the target role
9. Mirror job description language naturally, not mechanically
10. Do not write a career autobiography

# SIMPLE PUNCTUATION RULE

All generated CV text must use only simple punctuation.

Allowed: period, comma, question mark, exclamation mark, straight quotation marks, colon.
Forbidden: em dashes, en dashes, decorative strokes, decorative separators, semicolons, excessive parentheses.

Before output, scan the full CV and rewrite any affected sentence.

# QUALITY CHECK

Before output, verify:
1. Does the CV match the specific role clearly?
2. Is the differentiator visible in the first 10 seconds of reading?
3. Is the evidence layer used?
4. Would it pass a recruiter 10-second skim?
5. Does it avoid generic phrasing?
6. Does it use only simple punctuation?
7. Was tracker feedback checked and applied?

If any answer is weak, fix the CV before output.

# FINAL INSTRUCTION

Position the candidate to win this specific application. Not a general candidate. Not a perfect candidate. This candidate, for this role, in this market.
```

---

### TASK-11

**Type:** CREATE
**File:** career/prompts/cover-letter.md
**Priority:** High
**Why:** Cover letters generated without a detailed prompt tend to repeat the CV, use generic phrases, and fail to make the candidate memorable. This prompt forces specific proof points, prevents CV repetition, and requires the agent to name the candidate's actual differentiator.

**Content:**

```markdown
# ROLE

You are a senior career strategist and cover letter writer.

Your job is to write a tailored positioning document, not a summary of the CV.

A cover letter is not a motivational speech. It is not a career biography. It is a specific argument for why this candidate is the right person for this role.

# CONTEXT

You are working inside a Personal Knowledge Brain vault.

You have access to:

Career Core:
1. career/wiki/profile.md
2. career/wiki/positioning.md
3. career/wiki/quick-profile.md
4. career/wiki/interview-proof-points.md

Application Inputs:
5. career/raw-applications/{application-name}.md
6. career/generated-applications/{application-name}/fit-analysis.md
7. career/generated-applications/{application-name}/application-decision.md
8. career/generated-applications/{application-name}/cv-{application-name}.md

Evidence Layer:
9. career/wiki/evidence/

Tracker Feedback Layer:
10. career/wiki/applications.md, if it exists
11. Lessons learned entries inside applications.md, if they exist

# EVIDENCE ANCHORING RULE

At least one paragraph must be anchored in real experience.

Do not write abstract claims. Use concrete evidence from career/wiki/evidence/.

# TRACKER FEEDBACK RULE

Before writing, review career/wiki/applications.md if it exists.

Use tracker history to decide:
1. Which opening angle to avoid (produced silence in similar applications)
2. Which proof point to make sharper
3. Which weakness to reframe differently
4. Which differentiator has been underused

Do not mention the tracker inside the cover letter.

# TASK

Write a tailored cover letter for this specific role.

# OUTPUT FORMAT

Generate: career/generated-applications/{application-name}/cover-letter-{application-name}.md

Use this exact structure:

---

Dear [Hiring Manager name or Hiring Team],

Paragraph 1:
State clearly why this application is directly relevant to this role.
No generic enthusiasm. No "I am writing to apply."
Open with relevance, not with the candidate.

Paragraph 2:
Show the strongest alignment with the role.
Use one or two specific proof points. Not abstract capabilities. Real situations with real outcomes.
Do not repeat the CV. Interpret it. Add meaning.

Paragraph 3:
Address the real differentiator.
Name explicitly what this candidate brings that a safer candidate with cleaner titles does not bring.
This paragraph must be specific to this candidate. It cannot be copied for another applicant.

Paragraph 4:
Close with confidence and relevance.
Do not beg. Do not over-explain. Do not perform enthusiasm.
One or two sentences connecting your availability and interest to the role.

Kind regards,
[Full Name]

---

# STRATEGIC RULES

## Opening Rule

The first sentence must make relevance immediately clear.

Avoid openings that start with:
1. "I am writing to apply"
2. "I am excited to"
3. "I believe I am"
4. "Having reviewed the job description"
5. "With great interest"
6. Any sentence that starts with "I" as its first word
7. Any angle that tracker history shows has produced silence in similar applications

Use:
1. A direct alignment statement: what you do and why it matters for this specific role
2. The specific problem the candidate solves that this role requires
3. A concrete proof point that immediately establishes credibility
4. A tracker-informed angle when evidence supports it

Test: could any other candidate have written this first sentence? If yes, rewrite.

## Rule 1: Do not repeat the CV. Interpret it.

## Rule 2: Lead with the strongest role-relevant angle from fit-analysis.md.

## Rule 3: Handle weaknesses through framing, not apology.

Never use: "Although I do not have", "While I lack", "I may not have."

If a weakness must be addressed, address it confidently through equivalent substance.

## Rule 4: Make the candidate memorable.

The letter must answer: why this candidate for this role now?

## Rule 5: No generic phrases.

Remove on sight: "passionate about", "results-driven", "dynamic", "fast learner", "team player", "leverage my experience", "hit the ground running", "proven track record" (unless followed by a specific number or outcome).

## Rule 6: Tone must be direct, sober, and evidence-led.

# LENGTH RULE

Keep the letter between 220 and 320 words.

Too short becomes shallow. Too long becomes indulgent. Neither wins.

# SIMPLE PUNCTUATION RULE

Allowed: period, comma, question mark, exclamation mark, straight quotation marks, colon.
Forbidden: em dashes, en dashes, decorative strokes, decorative separators, semicolons, excessive parentheses.

Before output, scan the full letter and rewrite any affected sentence.

# FINAL INSTRUCTION

Make the candidate credible, relevant, and distinct. Do not flatter. Do not perform enthusiasm. Do not sound like AI.
```

---

### TASK-12

**Type:** CREATE
**File:** career/prompts/cover-letter-validation.md
**Priority:** High
**Why:** Without a validation step, cover letters with generic openings, CV repetition, or weak differentiators are released. This checklist catches the most common failure modes before output and forces a rewrite if any check fails.

**Content:**

```markdown
# COVER LETTER PRE-OUTPUT MANDATORY VALIDATION

This validation block must be executed before generating any cover letter output.

If any check fails, the cover letter must be rewritten before output. Do not release a cover letter that fails any check.

---

## CHECK 1. Opening sentence

Read the first sentence of the letter.

If it contains any of these patterns, rewrite before output:

1. "I am writing to apply"
2. "This role makes sense"
3. "I am excited to"
4. "I believe I am"
5. "I am interested in"
6. "I would like to apply"
7. "I am reaching out"
8. "Having reviewed the job description"
9. "With great interest"
10. Any sentence where "I" is the first word

The correct opening must:
- State a direct capability claim relevant to the role, OR
- Name the specific problem the candidate solves that this role requires, OR
- Open with a specific, concrete proof point

Test: could any other candidate have written this sentence? If yes, rewrite.

---

## CHECK 2. Generic phrases

Scan the entire letter for these phrases. If found, delete or replace:

1. "Passionate about"
2. "Excited to apply"
3. "Strong fit"
4. "Results-driven"
5. "Dynamic"
6. "Innovative"
7. "Fast learner"
8. "Motivated"
9. "Team player"
10. "Go above and beyond"
11. "Diverse skill set"
12. "Hit the ground running"
13. "Leverage my experience"
14. "Proven track record" (unless followed by a specific number or verifiable outcome)

---

## CHECK 3. Apology language

If any sentence acknowledges a weakness with apologetic framing, rewrite.

Prohibited patterns:
1. "Although I do not have"
2. "While I lack"
3. "I may not have"
4. "I know I am not the typical candidate"

Correct approach: frame the gap indirectly through equivalent substance, or address it once with confidence, not apology.

---

## CHECK 4. CV repetition check

The cover letter must not repeat the CV. It must interpret it.

Test: pick any bullet from the CV. Is the same fact stated in the letter without adding new meaning?

If yes, replace it with what that fact means for this role.

---

## CHECK 5. Differentiator check

Read the differentiator paragraph (typically paragraph 3).

Test: could a safer candidate with cleaner titles have written this paragraph?

If yes, the differentiator is not visible. Rewrite to name what this candidate specifically brings that the safer candidate does not.

The differentiator must be:
- Specific to this candidate (not a general strength)
- Connected to real evidence
- Directly relevant to this role

---

## CHECK 6. Length check

Count the words.

Correct range: 220 to 320 words.

If under 220 words: add one concrete proof point.
If over 320 words: cut the weakest paragraph.

---

## CHECK 7. Tone check

Read the letter in full. Select the correct description:

- Direct and evidence-led: PASS
- Slightly formal but clear: PASS
- Confident and specific: PASS
- Begging for a chance: FAIL
- Generic (could be for any company): FAIL
- Sounds like AI text: FAIL

If the letter fails: rewrite with active verbs and specific nouns.

---

## CHECK 8. Target market context check

If the application is for a specific national or cultural market, verify:

1. At least one sentence acknowledges the market context: location, language capacity, local work history, or professional context relevant to that market.
2. The tone matches the professional norms of that market.
3. The letter emphasises the qualities that market values most.

If the application is not market-specific, mark this check N/A.

---

## CHECK 9. Simple punctuation compliance

Scan the entire letter for forbidden punctuation.

Allowed: period, comma, question mark, exclamation mark, straight quotation marks, colon.
Forbidden: em dashes, en dashes, decorative strokes, decorative separators, semicolons, excessive parentheses.

If forbidden punctuation found: rewrite the affected sentence. Run this check again. Only output when clean.

---

## CHECK 10. Tracker alignment check

Review career/wiki/applications.md before approving the final letter, if the file exists.

Check:
1. Does the letter repeat a positioning angle that previous tracker entries marked as weak?
2. Does the letter ignore a relevant lesson from a similar application?
3. Does the letter use a stronger proven angle when tracker evidence supports it?

If tracker history contains a relevant lesson and the letter ignores it: FAIL. Rewrite and run again.

If tracker history is insufficient: mark as PASS with note "Tracker evidence insufficient."

Do not mention tracker mechanics in the final cover letter.

---

## VALIDATION OUTPUT FORMAT

Before generating the final letter, output a validation log in this format:

VALIDATION:
Check 1, opening: PASS or FAIL, if fail state the problem in one line.
Check 2, generic phrases: PASS or FAIL.
Check 3, apology language: PASS or FAIL.
Check 4, CV repetition: PASS or FAIL.
Check 5, differentiator: PASS or FAIL.
Check 6, length: [word count], PASS or FAIL.
Check 7, tone: [descriptor], PASS or FAIL.
Check 8, market context: PASS, FAIL, or N/A.
Check 9, simple punctuation: PASS or FAIL.
Check 10, tracker alignment: PASS, FAIL, or PASS with note.

All checks passed: YES or NO.

If all checks passed is NO: rewrite the failed sections and run validation again. Output the letter only when all checks passed is YES.
```

---

### TASK-13

**Type:** CREATE
**File:** career/prompts/update-tracker.md
**Priority:** High
**Why:** The tracker is the memory of the job search. Without a structured update prompt, agents produce thin tracker entries that are useful as archives but useless as feedback systems. This prompt forces the agent to extract lessons, create signals, and build pattern reviews that influence future applications.

**Content:**

```markdown
# ROLE

You are a career operations agent maintaining a precise application record.

Your job is not to summarise. Your job is to create a permanent operational record that makes future applications smarter.

# CONTEXT

You are working inside a Personal Knowledge Brain vault.

You have access to:
1. career/wiki/applications.md, the tracker to update
2. career/generated-applications/{application-name}/fit-analysis.md
3. career/generated-applications/{application-name}/application-decision.md
4. career/generated-applications/{application-name}/cv-{application-name}.md
5. career/generated-applications/{application-name}/cover-letter-{application-name}.md (if created)
6. career/raw-applications/{application-name}.md
7. career/index.md

# TASK

Update career/wiki/applications.md with a new row for this application.
Then create a lessons learned entry, a tracker signal entry, and a follow-up reminder.
Trigger a pattern review if the threshold has been reached.

# OUTPUT 1: TRACKER ROW

Add one row to the tracking table with these exact fields:

Date: date the application was submitted. If absent, use today's date and note it was inferred.
Company: company name from the raw application.
Role: role title exactly as posted.
Market: city, country, or remote.
Version used: which CV base or version was used.
Main angle used: the single strongest positioning angle, one sentence maximum.
Status: use the status legend (planned / drafted / submitted / follow-up due / follow-up sent / interview / rejected / archived).
Follow-up date: 10 working days from submission unless otherwise specified.
Result: leave blank if not yet known.
Notes: one sentence on the single most important risk or adjustment made.

# OUTPUT 2: LESSONS LEARNED ENTRY

After the table, add a dated entry to the Lessons learned log section:

### YYYY-MM-DD, [Company] [Role]

Decision: [APPLY / APPLY WITH ADJUSTMENTS / SKIP]

Angle used: [one sentence description of the main positioning angle]

Screening risks: [one sentence naming the primary screening risk]

Key adjustment made: [one sentence describing the most significant adaptation for this application]

Next application: [one sentence stating what to change or test differently in the next similar application]

# OUTPUT 3: TRACKER SIGNAL ENTRY

After the lessons entry, add a signal entry.

This is what future commands read to adjust their strategy.

### Signal, YYYY-MM-DD, [Company] [Role]

Role family: [Project Management / Agile-Scrum / Technical / Operations / Creative / Customer Success / Other]

Market: [name of the market]

Main angle: [one sentence]

Risk type: [Title gap / Domain gap / Language gap / Seniority gap / Low relevance / Other]

Experiment: [one sentence describing what was tested in this application that was different from others]

Expected signal: [one sentence. What response or silence would indicate about the strategy.]

Future instruction: [one sentence that future fit analysis, decision, CV, or cover letter prompts should act on.]

# OUTPUT 4: PATTERN REVIEW TRIGGER

If the tracker now has 5 or more applications, append to the Lessons learned log:

### Pattern review, [date]

Total applications: [N]

Roles applied to: [list of role titles]

Response rate so far: [N responses from N total. If no responses yet, state that.]

Silence pattern: [what appears to be generating silence. If no pattern yet, state that.]

Traction pattern: [what appears to be generating responses. If no traction yet, state that.]

Positioning adjustment needed: [one sentence describing the strategic shift indicated by the data.]

Future command instruction: [one sentence that should influence future \add, \decide, \cv, and \cover commands.]

---

Note: Do not mark patterns as confirmed with fewer than 5 applications. Describe observations as early signals only.

# OUTPUT 5: FOLLOW-UP REMINDER

Generate a follow-up reminder file:

Save as: career/generated-applications/{application-name}/follow-up-reminder.md

Content:

FOLLOW-UP REMINDER

Company: [name]
Role: [title]
Date to follow up: [date, 10 working days from submission]
Message type: Short professional follow-up after silence

Draft message:
[3 to 4 sentence follow-up. Direct, not apologetic. References the specific role. Does not repeat the entire cover letter. Asks for a status update or next step.]

---

# OUTPUT 6: INDEX UPDATE

Check career/index.md status checklist.

If any of these are now true for the first time, mark them complete:
- First raw application ingested
- First fit analysis created
- First CV generated for a real role
- First cover letter generated
- First application tracked

# RULES

1. Never skip the follow-up reminder. It is mandatory.
2. Always update career/index.md if items are newly complete.
3. One row per application. Do not merge multiple applications.
4. Notes must be critical and operational, not polite summaries.
5. The tracker must produce future usable learning, not just a historical record.
6. Do not invent submission status if the source does not confirm it.
7. Do not invent response outcomes.
8. Do not mark patterns as confirmed from fewer than 5 applications.

# SIMPLE PUNCTUATION RULE

Allowed: period, comma, question mark, exclamation mark, straight quotation marks, colon.
Forbidden: em dashes, en dashes, decorative strokes, decorative separators, semicolons, excessive parentheses.

Before output, scan all generated text and rewrite affected sentences.

# FINAL INSTRUCTION

The tracker is the memory of the job search. Every entry without a future instruction is operational memory wasted.
```

---

### TASK-14

**Type:** MODIFY
**File:** career/wiki/applications.md
**Priority:** High
**Why:** The current applications.md has only a basic tracking table. It is missing the lessons learned log, the signal entries, the pattern review section, and the follow-up templates that make the tracker a feedback system rather than an archive.

**Replace the entire file content with:**

```markdown
---
type: applications-tracker
domain: career
status: active
completeness: empty
confidence: low
freshness: YYYY-MM-DD
last_updated: YYYY-MM-DD
---

# Job Application Tracker

## Purpose

This file tracks applications, follow-ups, role patterns, and lessons.

It is not an archive. It is a decision tool.

The goal is to answer:
- Which roles are generating responses
- Which narrative angles are performing
- What is generating silence
- Where positioning needs adjustment
- What the next application should do differently

## Status legend

- planned
- drafted
- submitted
- follow-up due
- follow-up sent
- interview
- rejected
- archived

## Tracking table

| Date | Company | Role | Market | Version used | Main angle used | Status | Follow-up date | Result | Notes |
|------|---------|------|--------|--------------|-----------------|--------|----------------|--------|-------|

---

## Lessons learned log

<!-- Add a dated entry after every application cycle. Format defined in career/prompts/update-tracker.md. -->

---

## Pattern review section

<!-- Add a pattern review after every 5 applications. Trigger is automatic when using the \tracker command with the update-tracker prompt. -->

### Current assumptions

[Fill in as you apply. Examples:]
- Primary best-fit target is [role type]
- Secondary route is [role type]
- Best-performing market so far: [market]

### Watch for evidence

- Are [primary role] applications generating responses or silence?
- Do [secondary role] applications respond better?
- Does one market respond differently from others?
- Is the problem targeting, messaging, or proof?

---

## Follow-up templates

### Template 1: Short professional follow-up after silence

Subject: [Role title] application — [Your name]

Dear [Hiring Manager or Hiring Team],

I submitted my application for the [role title] position on [date] and wanted to follow up to confirm it was received.

I remain very interested in the opportunity and would welcome the chance to speak further. Please let me know if you need any additional information.

Kind regards,
[Full Name]

---

### Template 2: Follow-up with one reinforcing proof point

Subject: [Role title] application follow-up — [Your name]

Dear [Hiring Manager or Hiring Team],

Following my application for the [role title] position on [date], I wanted to add one relevant detail.

[One specific proof point directly relevant to a key requirement in the job description. 2 sentences maximum.]

I look forward to the possibility of discussing the role further.

Kind regards,
[Full Name]

---

## Tracker rules

### Rule 1
Every application records the main angle used. One sentence describing the positioning.

### Rule 2
If an application is tailored from the base CV, note exactly what was changed.

### Rule 3
If there is silence after follow-up, log the pattern. Silence is data.

### Rule 4
Every 5 applications, trigger a pattern review. Use the prompts/update-tracker.md prompt.

### Rule 5
The tracker informs strategy. It does not override strong role evidence.
```

---

### TASK-15

**Type:** MODIFY
**File:** career/commands.md
**Priority:** Medium
**Why:** The commands.md needs two additions: a reference to the prompts folder so agents know to load the detailed prompt logic before executing commands, and a new \asset command to register public professional assets.

**Add the following block immediately after the opening Agent Execution Model section, before the first command definition:**

```markdown
## Prompts Layer

Each command in this file has a corresponding detailed prompt file in `career/prompts/`.

Before executing any command, read the corresponding prompt file for full agent logic.

| Command | Prompt file |
|---------|-------------|
| \add | career/prompts/ingest-fit-analysis.md |
| \decide | career/prompts/application-decision.md |
| \cv | career/prompts/cv-generator.md |
| \cover | career/prompts/cover-letter.md + career/prompts/cover-letter-validation.md |
| \tracker | career/prompts/update-tracker.md |

The commands.md defines the input/output contract. The prompt files define the execution logic.
```

**Add the following command block at the end of the commands.md file, after the \apply command:**

```markdown
---

## \asset {asset-name}

**Purpose:** Register a public professional asset into the career domain.

Use when:
1. An article, post, or essay is published publicly.
2. A custom AI tool, template, or framework is made public.
3. A talk, workshop, or training resource is published.
4. Any public-facing professional output is created.

**Input:**
- Asset title and description
- Direct URL to the published asset
- Related role targets
- Related capabilities

**Output:**
- career/wiki/public-assets/{asset-name}.md

**Rules:**
1. Do not treat public assets as job applications.
2. Do not store them in generated-applications/.
3. Every public asset must connect to at least one capability in career/wiki/evidence/.
4. If the asset does not strengthen positioning in a verifiable way, do not add it.

**Output format for each asset file:**

Follow the template in career/wiki/public-assets/README.md.
```

---

### TASK-16

**Type:** MODIFY
**File:** career/index.md
**Priority:** Medium
**Why:** The index.md does not reflect the new pages and folders added by these tasks. An accurate index is critical because agents read it before any write operation to understand the current state of the domain.

**Replace the entire content of career/index.md with:**

```markdown
# career — Index

Current state of knowledge for the career domain.

## Domain purpose

This domain exists to support:
- CV generation
- Job applications
- Interview preparation
- Professional positioning
- Recruiter communication

It is not a storage area. It is an operational system.

---

## Domain structure

| Folder | Purpose |
|--------|---------|
| raw/ | Core professional sources: profile documents, old CVs, reference material |
| raw-applications/ | Captured job descriptions (immutable source material) |
| generated-applications/ | Tailored outputs per application: CV, cover letter, analysis |
| wiki/ | Structured reusable career knowledge |
| prompts/ | Detailed agent execution logic for each command |

---

## Status checklist

### Core foundation
- [ ] Professional profile ingested (raw/)
- [ ] CV baseline created (wiki/cv-base/ or similar)

### Core structure
- [ ] Structured profile built (wiki/profile.md)
- [ ] Quick-profile query surface built (wiki/quick-profile.md)
- [ ] Positioning strategy defined (wiki/positioning.md)
- [ ] Interview proof points built (wiki/interview-proof-points.md)
- [ ] Evidence layer started (wiki/evidence/)
- [ ] Application tracker initialised (wiki/applications.md)
- [ ] Secondary role strategy defined (wiki/secondary-role-strategy.md)

### Operational usage
- [ ] First raw application ingested (raw-applications/)
- [ ] First fit analysis created (generated-applications/)
- [ ] First CV generated for a real role
- [ ] First cover letter generated
- [ ] First application tracked in wiki/applications.md

---

## Core wiki pages

| Page | Purpose |
|------|---------|
| wiki/profile.md | Structured professional identity |
| wiki/quick-profile.md | Fast-load query surface for agents |
| wiki/positioning.md | Market narrative and differentiation |
| wiki/interview-proof-points.md | Structured bank of interview stories |
| wiki/evidence/ | Strengths mapped to real proof |
| wiki/applications.md | Application tracking and feedback system |
| wiki/secondary-role-strategy.md | Positioning for non-primary roles |
| wiki/public-assets/ | Published professional assets |

---

## Prompts layer

| File | Purpose |
|------|---------|
| prompts/ingest-fit-analysis.md | Detailed logic for \add command |
| prompts/application-decision.md | Detailed logic for \decide command |
| prompts/cv-generator.md | Detailed logic for \cv command |
| prompts/cover-letter.md | Detailed logic for \cover command |
| prompts/cover-letter-validation.md | Validation checklist for cover letters |
| prompts/update-tracker.md | Detailed logic for \tracker command |

---

## Application workflow

### Step 1: Capture
Save job description in career/raw-applications/

### Step 2: Analyse
\add {application-name}
Generates: fit-analysis.md

### Step 3: Decide
\decide {application-name}
Generates: application-decision.md

### Step 4: Generate documents
\cv {application-name}
\cover {application-name}

### Step 5: Track
\tracker {application-name}
Updates: wiki/applications.md

---

## Domain rules

### Rule 1
Everything must connect to evidence, real projects, or real situations. No abstract claims.

### Rule 2
Positioning overrides description. Do not describe what you did. Describe what problems you solve.

### Rule 3
Generated outputs must be traceable. Every CV and cover letter references a specific application and is stored in generated-applications/.

### Rule 4
The tracker is feedback memory, not an archive. Read it before every application.

### Rule 5
No orphan work. If a document is generated, it is stored, linked to an application, and tracked.
```

---

### TASK-17

**Type:** CREATE
**File:** docs/evidence-framework.md
**Priority:** Medium
**Why:** The most common mistake when building a career knowledge brain is confusing profile, positioning, and evidence. This document explains the distinction and the relationship between the three layers, helping users build a vault that agents can use effectively.

**Content:**

```markdown
# Evidence Framework

## The three layers of career knowledge

Most people build a professional profile and stop there. This vault uses three distinct layers, each serving a different purpose.

Understanding the difference between them is the most important thing you can do before building your career domain.

---

## Layer 1: Profile

**File:** career/wiki/profile.md

**What it is:** A structured record of your professional identity. Who you are, where you have worked, what you have done, what you know.

**What it is not:** A positioning statement. A CV. A marketing document.

**What agents use it for:** Background context. Timeline reference. Fact checking.

**The problem with relying only on profile:**
A profile says "I managed teams for 10 years."
That claim could belong to anyone. It says nothing about how you managed, what challenges you faced, what outcomes you produced, or why your approach is different from the next candidate with the same 10 years.

---

## Layer 2: Positioning

**File:** career/wiki/positioning.md

**What it is:** A strategic definition of how you present yourself in the market. What role types you target, what makes you different, what objections you will face, and what language you use.

**What it is not:** Proof. Positioning is a claim. Without evidence, it is an assertion.

**What agents use it for:** Framing. Headline generation. Narrative direction.

**The problem with relying only on positioning:**
Positioning says "I lead without formal authority."
That claim also could belong to anyone. Any candidate can write it in a summary. It does not prove anything without a specific situation that demonstrates it.

---

## Layer 3: Evidence

**Folder:** career/wiki/evidence/

**What it is:** Structured proof for specific professional claims. Real situations, real actions, real outcomes, connected to real stories that can be told in an interview.

**What it is not:** A list of responsibilities. A CV bullets bank. A general skills inventory.

**What agents use it for:** Generating specific CV bullets, cover letter differentiators, and interview answers that are actually defensible under follow-up questions.

**Why evidence changes everything:**
Evidence says "In 2022, I facilitated the adoption of a new workflow across a team that had rejected three previous proposals. I identified that the resistance was about meaning, not capability, and reframed the change as a risk reduction rather than an improvement. The team adopted it in full within 6 weeks."

That story is specific. It cannot be copied by another candidate. It survives follow-up questions. It makes the positioning claim credible.

---

## How the three layers work together

Profile tells agents what you have done.
Positioning tells agents how to frame it.
Evidence tells agents why anyone should believe the frame.

Without evidence, the vault produces CVs and cover letters that are well-written but generic.
With evidence, the vault produces documents that are genuinely differentiated.

---

## How to build the evidence layer

### Step 1: List the capabilities your target roles require

Look at 5 to 10 job descriptions for your primary target role. List the 5 to 7 capabilities they consistently require. These are the claims you need to be able to prove.

### Step 2: For each capability, ask a hard question

Do you have a specific, real situation where you demonstrated this capability with a clear outcome?

If yes: write it down. That is your evidence story.
If no: you have a gap. A gap is not a problem if you name it. It is a problem if you pretend it does not exist.

### Step 3: Create one evidence file per capability

Use career/wiki/evidence/_template-strength.md as the template.

Name the file by the capability: leadership-without-authority.md, not professional-skills.md.

### Step 4: Fill in the file with real stories

Do not invent outcomes. Do not generalise specific situations into vague claims. Real stories survive follow-up questions. Generic claims do not.

### Step 5: Connect evidence to positioning

Once you have at least 3 evidence files, review wiki/positioning.md. Every claim in positioning should now connect to at least one evidence file. If a positioning claim has no evidence, either remove it or build the evidence.

---

## The minimum viable evidence layer

To support a functioning application pipeline, you need:

1. At least 3 evidence files covering the 3 most important capabilities for your primary target role
2. At least 1 evidence file that addresses the most likely objection to your application
3. At least 1 evidence file that contains a story unique to you that no generic candidate can replicate

With these three conditions met, agents can produce CVs, cover letters, and interview answers that are meaningfully differentiated.

---

## Signs your evidence layer is too thin

- Every CV bullet sounds like it could come from any candidate
- Cover letter differentiator paragraphs read as abstract claims
- Interview answers to "give me an example" require improvisation
- Agents keep generating generic outputs despite detailed profile and positioning files

These are all signs that the evidence layer needs more specific stories.
```

---

### TASK-18

**Type:** CREATE
**File:** _bridges/projects-to-career/README.md
**Priority:** Low
**Why:** The _bridges directory has a root README but no READMEs for individual subdirectories. Without a subdirectory README, agents cannot understand the specific synthesis purpose of that bridge layer.

**Content:**

```markdown
# _bridges/projects-to-career

Bridges from the projects domain to the career domain.

A file lives here when a technical project, once documented, yields evidence that translates into career positioning in a non-obvious way.

The most common trigger: a technical decision demonstrates a professional capability that does not appear clearly in either domain alone.

## When to create a bridge

- A project decision proves a senior-adjacent or leadership capability (not just a technical one)
- A project demonstrates a product philosophy or design thinking that supports career claims
- Multiple projects together show a pattern that is stronger evidence than any single project
- A project provides a specific story for a career objection (example: "you only know tutorials")

## When NOT to create a bridge

- Simple links: "this project used this technology"
- Summaries of content that already exists in one domain
- Convenience cross-references
- Technical skill lists that belong in profile.md

## File naming

Each bridge file: YYYY-MM-DD-slug.md

## Template for each bridge file

---
source: projects/wiki/projects/{project-name}.md
target: career/wiki/evidence/{capability}.md
date: YYYY-MM-DD
---

## The insight
[What the synthesis produced. One or two sentences. The specific career claim that this project makes defensible.]

## Why it required a bridge
[Why this meaning could not exist inside either domain alone.]

## How to apply
[Concrete use: CV bullet, portfolio entry, interview story, cover letter differentiator, evidence file update.]
```

---

### TASK-19

**Type:** CREATE
**File:** _bridges/writing-to-career/README.md
**Priority:** Low
**Why:** Same reason as TASK-18. Subdirectory needs a README for agent orientation.

**Content:**

```markdown
# _bridges/writing-to-career

Bridges from the writing domain to the career domain.

A file lives here when a published piece, once documented, yields career positioning evidence that is not obvious from either domain alone.

## When to create a bridge

- A published article demonstrates a capability relevant to target roles (thought leadership, technical communication, subject matter expertise)
- A public writing asset provides external validation of a claim in positioning.md
- A piece of writing is the strongest available proof of a specific capability

## When NOT to create a bridge

- Simple links: "I wrote about this topic"
- Articles that are tangentially related to your career target
- Writing that does not add anything beyond what evidence files already contain

## File naming

Each bridge file: YYYY-MM-DD-slug.md

## Template

---
source: writing/wiki/pieces/{piece-name}.md
target: career/wiki/evidence/{capability}.md or career/wiki/public-assets/{asset-name}.md
date: YYYY-MM-DD
---

## The insight
[What the synthesis produced. The specific career claim this published piece makes more credible.]

## Why it required a bridge
[Why this connection needed synthesis, not just a cross-reference.]

## How to apply
[Concrete use: CV bullet, cover letter angle, interview proof point, LinkedIn signal.]
```

---

### TASK-20

**Type:** CREATE
**File:** .claude/skills/README.md
**Priority:** Low
**Why:** The Berto operational system uses a skills directory (.claude/skills/) to store custom Claude.ai skills that extend the vault's capabilities for specific use cases. This README explains the concept for users of this template who want to take advantage of the same pattern.

**Content:**

```markdown
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
```

---

## Post-execution verification

After all tasks are complete, verify:

1. career/raw-applications/ folder exists with README.md
2. career/wiki/quick-profile.md exists
3. career/wiki/interview-proof-points.md exists
4. career/wiki/evidence/README.md exists
5. career/wiki/evidence/_template-strength.md exists
6. career/wiki/public-assets/README.md exists
7. career/wiki/secondary-role-strategy.md exists
8. career/prompts/README.md exists
9. career/prompts/ingest-fit-analysis.md exists
10. career/prompts/application-decision.md exists
11. career/prompts/cv-generator.md exists
12. career/prompts/cover-letter.md exists
13. career/prompts/cover-letter-validation.md exists
14. career/prompts/update-tracker.md exists
15. career/wiki/applications.md has been updated with new sections
16. career/commands.md has been updated with prompts layer reference and \asset command
17. career/index.md has been updated with all new pages
18. docs/evidence-framework.md exists
19. _bridges/projects-to-career/README.md exists
20. _bridges/writing-to-career/README.md exists
21. .claude/skills/README.md exists

After verification, append the following to career/log.md:

[YYYY-MM-DD] improvement-run | Template improvement tasks completed from TASKS.md. Created 18 new files, modified 3 existing files. Key additions: prompts layer (6 files), evidence framework, quick-profile query surface, interview proof points, secondary role strategy, public assets tracker, and bridge subdirectory READMEs.

Then archive or delete this TASKS.md file.
```
