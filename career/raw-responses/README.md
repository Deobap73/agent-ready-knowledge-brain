# Raw Responses

This folder stores raw company responses for tracked applications.

Raw responses are immutable evidence.

Do not edit them after saving.

## Folder structure

Use this format:

career/raw-responses/{application-name}/YYYY-MM-DD-response.md

Example:

career/raw-responses/2026-05-04-jetbrains-talent-sourcer-germany/2026-05-20-response.md

## What to store here

Store the original response text from:

1. Email replies.
2. LinkedIn recruiter messages.
3. Rejection messages.
4. Interview invitations.
5. Assessment requests.
6. Offer messages.
7. Follow up replies.
8. Confirmed no-response notes after the follow up window has passed.

## Required format

Each raw response file should include:

Date received:
Company:
Role:
Source:
Response type:
Raw text:

## Example

Date received: 2026-05-20
Company: JetBrains
Role: Talent Sourcer
Source: Email
Response type: Rejection

Raw text:

Paste the full message here.

## Rule

After saving a raw response, run:

\response {application-name}

The response command will update the tracker, create a response analysis, and create the next action file.
