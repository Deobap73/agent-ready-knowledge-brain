# docx-format.md — DOCX Format Specification

This file defines the exact format for all DOCX files generated in the career domain.
It applies to both CV and cover letter outputs.

Read this file completely before generating any DOCX.
Do not deviate from these rules.
Follow the spec precisely.

---

## 1. Page Setup

- Paper size: A4 (11906 x 16838 DXA)
- Margins: top 1134 DXA, bottom 1134 DXA, left 1134 DXA, right 1134 DXA (approx. 2cm each side)
- Orientation: Portrait
- No headers. No footers.

---

## 2. Typography

### Font

- Font family: Arial — used for all text without exception
- No fallback fonts. No mixing of fonts.

### Sizes (in half-points as used by docx library)

| Element | Size (pt) | Size (half-pt) |
|---------|-----------|----------------|
| Candidate name | 18pt | 36 |
| Contact line | 10pt | 20 |
| Section heading (H1) | 12pt | 24 |
| Job title / role line | 11pt | 22 |
| Body text | 10.5pt | 21 |
| Date / location meta | 10pt | 20 |

### Colour

- All text: black (#000000)
- No coloured text, no grey text, no accent colours
- No background colours on any element

### Emphasis

- Bold: used only for candidate name, section headings, job titles, and company names
- Italic: used only for dates and location metadata
- Underline: not used anywhere
- All caps: not used anywhere (write section headings in ALL CAPS directly in the string)

---

## 3. Spacing

### Paragraphs

- Spacing before body paragraphs: 0
- Spacing after body paragraphs: 80 DXA
- Line spacing: single (240 DXA)

### Sections

- Spacing before each section heading: 240 DXA
- Spacing after each section heading: 80 DXA
- A thin horizontal rule must follow each section heading

### Experience blocks

- Between experience entries: 160 DXA gap after the last bullet of the previous entry

---

## 4. Heading Styles

Use Word built-in heading styles via HeadingLevel in the docx library.

### Heading 1 — Section headings

```
font: Arial
size: 24 half-pt (12pt)
bold: true
colour: #000000
spacing before: 240 DXA
spacing after: 80 DXA
outlineLevel: 0
```

Write section heading text in ALL CAPS directly in the content string.
Do not apply AllCaps via style — write it explicitly.

### No Heading 2 or deeper

All other structure is handled via bold inline runs.

---

## 5. Section Dividers

After every section heading, insert a paragraph with a bottom border:

```javascript
new Paragraph({
  border: {
    bottom: { style: BorderStyle.SINGLE, size: 6, color: "000000", space: 1 }
  },
  spacing: { before: 0, after: 80 }
})
```

Do not use tables, images, or special characters as dividers.

---

## 6. Lists

Use docx numbering config with LevelFormat.BULLET.
Never use unicode bullet characters directly.

```javascript
numbering: {
  config: [{
    reference: "cv-bullets",
    levels: [{
      level: 0,
      format: LevelFormat.BULLET,
      text: "\u2022",
      alignment: AlignmentType.LEFT,
      style: {
        paragraph: {
          indent: { left: 360, hanging: 180 }
        }
      }
    }]
  }]
}
```

Each bullet paragraph:
- Font: Arial, 10.5pt (21 half-pt)
- Spacing after: 60 DXA
- No spacing before

---

## 7. CV Structure and Section Order

Generate sections in exactly this order.

### 7.1 Header block (no section heading, no divider)

Line 1: Candidate full name — Bold, 18pt, left-aligned
Line 2: Target role / professional title — Not bold, 11pt
Line 3: Contact line — Format: City, Country | email | LinkedIn URL — 10pt

Use the pipe character `|` as separator.
Spacing after header block: 240 DXA

### 7.2 PROFESSIONAL SUMMARY (mandatory)

- Section heading: "PROFESSIONAL SUMMARY"
- 3 to 5 lines of plain prose
- No bullets in this section

### 7.3 CORE COMPETENCIES (mandatory)

- Section heading: "CORE COMPETENCIES"
- Single paragraph, comma-separated list
- No bullets, no columns, no tables

### 7.4 PROFESSIONAL EXPERIENCE (mandatory)

- Section heading: "PROFESSIONAL EXPERIENCE"

For each role:

Line 1: Company name (bold) + two spaces + Location (italic) + two spaces + Date range (italic)
Line 2: Job title (bold, 11pt)
Then bullet points.

Spacing between roles: 160 DXA gap paragraph.

### 7.5 EDUCATION (mandatory)

- Section heading: "EDUCATION"

For each entry:
Line 1: Degree or qualification (bold) — Institution name (not bold)
Line 2: Year (italic)

### 7.6 CERTIFICATIONS (include if present)

- Section heading: "CERTIFICATIONS"

For each entry:
Line 1: Certification name (bold) — Issuing body (not bold)
Line 2: Year (italic)

### 7.7 LANGUAGES (mandatory)

- Section heading: "LANGUAGES"
- Single paragraph, comma-separated
- Format: Language (Level), Language (Level)

### 7.8 ADDITIONAL INFORMATION (optional)

- Section heading: "ADDITIONAL INFORMATION"
- 1 to 3 lines of plain prose

---

## 8. Cover Letter Structure

### 8.1 Header block

Same as CV header block (name, title, contact line).
Spacing after: 240 DXA.

### 8.2 Date and recipient block

Line 1: Date (e.g. "1 June 2026")
Line 2: Hiring Manager name or "Hiring Team"
Line 3: Company name
Line 4: City

Spacing after: 160 DXA.

### 8.3 Subject line

Format: "Re: {Role Title} — {Company Name}"
Bold, 10.5pt.
Spacing after: 160 DXA.

### 8.4 Body

- Salutation: "Dear {Name}," or "Dear Hiring Team,"
- 3 to 4 paragraphs of plain prose
- No bullets, no section headings
- 10.5pt body text
- Paragraph spacing after: 160 DXA between paragraphs

### 8.5 Closing

"Kind regards," or "Yours sincerely,"
Two empty line paragraphs
Candidate full name (bold)
Target role / title (not bold)

---

## 9. ATS Final Checklist

Before saving, verify every point:

- [ ] Single-column layout — no text boxes, no multi-column sections
- [ ] Only Arial font used — no other fonts present
- [ ] No images, icons, or logos
- [ ] No tables used for layout
- [ ] No coloured text or backgrounds
- [ ] Section headings use Word built-in Heading 1 style
- [ ] All bullets use docx-js numbering — no unicode bullet characters
- [ ] Page size is A4
- [ ] Margins are minimum 2cm on all sides
- [ ] File is saved as .docx
- [ ] Filename matches the required pattern exactly

---

## 10. What Not To Do

- Do not use tables for layout, contact info, or skills columns
- Do not use text boxes
- Do not use coloured section headings or accent bars
- Do not use icons or symbol fonts
- Do not add a photo
- Do not add a sidebar
- Do not use decorative lines made from repeated characters (===, ---, ___)
- Do not use page numbers
- Do not use headers or footers
- Do not change font at any point in the document
- Do not use Heading 2 or deeper heading levels
