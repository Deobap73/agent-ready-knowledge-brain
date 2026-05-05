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
