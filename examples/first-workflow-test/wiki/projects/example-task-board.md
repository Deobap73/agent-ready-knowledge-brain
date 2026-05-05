# Example Task Board

## What it is

Example Task Board is a fictional project used to test the Agent Ready Knowledge Brain workflow.

It describes a small task board app with three status columns: To Do, In Progress, and Done.

## Stack

Frontend only in the first version.

No backend is defined in the source fixture.

## Architecture

The first version keeps the application frontend only.

Task data is intended to be stored in browser local storage.

## Key features

- Create tasks.
- Add a title.
- Add a description.
- Add a due date.
- Add a priority.
- Move tasks between columns.

## Main flows

1. User creates a task.
2. User assigns task details.
3. User moves the task between To Do, In Progress, and Done.
4. The app stores the task locally in the browser.

## Decisions

See `../decisions/example-task-board-decisions.md`.

## Known issues

- No backend persistence is defined.
- No authentication is defined.
- No multi-device sync is defined.

## Improvement opportunities

- Add backend persistence after validating the interaction model.
- Add user accounts if multi-device usage becomes necessary.
- Add filtering by due date or priority.

## Career evidence signal

This fictional fixture demonstrates how a project decision can be documented and later connected to career evidence.

Do not use this as real career evidence.

## Source pointers

- `examples/first-workflow-test/raw/example-task-board.md`

## Missing context

- No UI design details are provided.
- No implementation framework is provided.
- No accessibility requirements are provided.
- No deployment target is provided.

## Last updated

2026-05-05
