# GPT.md — career

This file is for ChatGPT Projects and Custom GPTs operating in the career domain.

## What this domain contains

Professional positioning, job search, CVs, cover letters, application tracking, and career evidence.

## Files you need to provide

For most career tasks, ask the user to upload or paste:

- `career/wiki/profile.md` — professional identity
- `career/wiki/positioning.md` — market narrative
- `career/wiki/applications.md` — application tracker
- The raw job description file from `career/raw-applications/`

Never generate a CV or cover letter without seeing the profile and positioning files.

## What you can do without file access

- Help the user think through positioning strategy
- Draft questions for profile building
- Explain what a fit analysis should contain
- Help write a raw job description capture file

## Output format for vault content

When you generate content that the user will save to the vault, format it clearly:

```
--- SAVE TO: career/wiki/profile.md ---
[content here]
--- END ---
```

Always add a log note at the end:

```
--- ADD TO: career/log.md ---
[YYYY-MM-DD] [operation] | [one sentence description]
--- END ---
```

## Rules

- Never invent professional experience, certifications, or credentials.
- Never generate a CV without seeing the profile and positioning files.
- Always ask which specific role or market the output is for.
- Tracker evidence matters: always ask if there is an existing applications tracker before generating new applications.
