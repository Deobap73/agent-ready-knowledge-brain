# projects/wiki/flows

This folder holds flow pages — one per significant user, data, or process flow.

## When to create a page

Create a flow page for:
- Auth flows (login, refresh, logout, protected routes)
- Content creation and publication flows
- Data ingestion or processing flows
- User onboarding flows
- Payment or subscription flows
- Notification or event flows

## File naming

`{project-name}-{flow-name}-flow.md`

Examples:
- `my-project-auth-flow.md`
- `my-project-publish-flow.md`
- `my-project-contact-flow.md`

## Required sections in each page

1. Flow name and project reference
2. A visual representation using ASCII or a numbered sequence
3. Each step with what happens and why
4. Key design decisions within the flow
5. Known issues or edge cases

## Format for flow diagrams

Use ASCII sequences:

```
User submits form
  → Validation
  → If invalid: return error
  → If valid: persist to database
  → Attempt external call
  → Update status
  → Return response
```

## How agents use this folder

When ingesting a project, the `\ingest` command creates flow pages for each major flow.

When asked questions about how a feature works, agents read the relevant flow page.
