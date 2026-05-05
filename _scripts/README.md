# _scripts — DOCX Generation Scripts

This folder contains Node.js scripts that convert markdown CV and cover letter files into ATS-compliant DOCX files.

## Prerequisites

Node.js 18 or higher must be installed.

Run once from the vault root:

```bash
npm install
```

This installs the `docx` package required by the scripts.

## Usage

### Generate a CV

```bash
node _scripts/gen-cv.js {application-name}
```

Example:

```bash
node _scripts/gen-cv.js 2026-06-01-acme-corp-product-manager-berlin
```

Input: `career/generated-applications/{application-name}/cv-ats-en.md`
Output: `career/generated-applications/{application-name}/cv-{application-name}.docx`

### Generate a Cover Letter

```bash
node _scripts/gen-cover.js {application-name}
```

Input: `career/generated-applications/{application-name}/cover-letter-en.md`
Output: `career/generated-applications/{application-name}/cover-letter-{application-name}.docx`

## Workflow

The scripts are the final step in the application pipeline:

1. Run `\add`, `\decide`, `\cv`, `\cover` commands via Claude Code or Codex
2. These commands produce `cv-ats-en.md` and `cover-letter-en.md`
3. Run the scripts to produce the final `.docx` files
4. Send the `.docx` files as your application

## Input format

The scripts expect the exact markdown structure defined in `career/prompts/docx-format.md`.

If the agent follows `career/commands.md` correctly, the structure will always be correct.

## ATS compliance

Each script runs an ATS checklist before saving and prints the results. If a check fails, the issue is reported but the file is still saved. Review the checklist output and correct the markdown source if needed.

## What the scripts do not do

They do not modify the source markdown files.
They do not push to Git.
They do not validate content quality — only format compliance.
