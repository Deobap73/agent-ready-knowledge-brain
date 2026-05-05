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
