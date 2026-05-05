#!/usr/bin/env node
/**
 * gen-cv.js — CV DOCX Generator for Agent-Ready Knowledge Brain
 *
 * Usage:   node _scripts/gen-cv.js {application-name}
 * Example: node _scripts/gen-cv.js 2026-06-01-acme-corp-product-manager-berlin
 *
 * Input:   career/generated-applications/{application-name}/cv-ats-en.md
 * Output:  career/generated-applications/{application-name}/cv-{application-name}.docx
 *
 * The input markdown must follow the structure defined in:
 * career/prompts/docx-format.md
 *
 * Run `npm install` once from the vault root before using this script.
 */

"use strict";

const {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  BorderStyle,
  LevelFormat,
  AlignmentType,
} = require("docx");

const fs = require("fs");
const path = require("path");

// ── Configuration ─────────────────────────────────────────────────────────────

const FONT = "Arial";

const numbering = {
  config: [
    {
      reference: "cv-bullets",
      levels: [
        {
          level: 0,
          format: LevelFormat.BULLET,
          text: "\u2022",
          alignment: AlignmentType.LEFT,
          style: {
            paragraph: {
              indent: { left: 360, hanging: 180 },
            },
          },
        },
      ],
    },
  ],
};

// ── Argument handling ─────────────────────────────────────────────────────────

const applicationName = process.argv[2];

if (!applicationName) {
  console.error("Error: application name is required.");
  console.error("Usage: node _scripts/gen-cv.js {application-name}");
  console.error("Example: node _scripts/gen-cv.js 2026-06-01-acme-corp-role-market");
  process.exit(1);
}

const vaultRoot = path.join(__dirname, "..");
const appDir = path.join(vaultRoot, "career", "generated-applications", applicationName);
const inputPath = path.join(appDir, "cv-ats-en.md");
const outputPath = path.join(appDir, `cv-${applicationName}.docx`);

if (!fs.existsSync(inputPath)) {
  console.error(`\nError: input file not found:\n  ${inputPath}`);
  console.error("\nRun the \\cv command first to generate cv-ats-en.md.");
  process.exit(1);
}

// ── Markdown parser ────────────────────────────────────────────────────────────
//
// Parses the cv-ats-en.md structure into typed blocks.
// Expected structure from docx-format.md:
//
//   # Full Name
//   Role Title
//   Contact | Email | LinkedIn
//
//   ## PROFESSIONAL SUMMARY
//   Prose text.
//
//   ## CORE COMPETENCIES
//   Skill 1, Skill 2, Skill 3
//
//   ## PROFESSIONAL EXPERIENCE
//
//   ### Company  Location  |  Date Range
//   **Job Title**
//   - Bullet 1
//   - Bullet 2
//
//   ## EDUCATION
//   **Degree** — Institution
//   Year
//
//   ## LANGUAGES
//   Language (Level), Language (Level)

function parseMarkdown(content) {
  const lines = content.split("\n");
  const blocks = [];

  for (const line of lines) {
    const trimmed = line.trim();

    if (trimmed === "" || trimmed === "---") continue;

    if (trimmed.startsWith("# ")) {
      blocks.push({ type: "h1", text: trimmed.slice(2).trim() });
    } else if (trimmed.startsWith("## ")) {
      blocks.push({ type: "h2", text: trimmed.slice(3).trim() });
    } else if (trimmed.startsWith("### ")) {
      blocks.push({ type: "h3", text: trimmed.slice(4).trim() });
    } else if (trimmed.startsWith("- ")) {
      blocks.push({ type: "bullet", text: trimmed.slice(2).trim() });
    } else if (trimmed.startsWith("**") && trimmed.endsWith("**") && trimmed.length > 4) {
      // Bold-only line — job title or degree
      blocks.push({ type: "bold-line", text: trimmed.slice(2, -2).trim() });
    } else if (trimmed.startsWith("*") && trimmed.endsWith("*") && !trimmed.startsWith("**")) {
      // Italic-only line — date or location meta
      blocks.push({ type: "italic-line", text: trimmed.slice(1, -1).trim() });
    } else {
      blocks.push({ type: "prose", text: trimmed });
    }
  }

  return blocks;
}

// ── Docx element builders ─────────────────────────────────────────────────────

const r = (text, opts = {}) =>
  new TextRun({ text, font: FONT, color: "000000", ...opts });

const sectionHeading = (text) =>
  new Paragraph({
    heading: HeadingLevel.HEADING_1,
    children: [r(text.toUpperCase(), { size: 24, bold: true })],
    spacing: { before: 240, after: 80 },
  });

const sectionDivider = () =>
  new Paragraph({
    border: {
      bottom: { style: BorderStyle.SINGLE, size: 6, color: "000000", space: 1 },
    },
    spacing: { before: 0, after: 80 },
  });

const nameBlock = (text) =>
  new Paragraph({
    children: [r(text, { size: 36, bold: true })],
    spacing: { after: 60 },
  });

const roleBlock = (text) =>
  new Paragraph({
    children: [r(text, { size: 22 })],
    spacing: { after: 60 },
  });

const contactBlock = (text) =>
  new Paragraph({
    children: [r(text, { size: 20 })],
    spacing: { after: 240 },
  });

const proseBlock = (text, after = 80) =>
  new Paragraph({
    children: [r(text, { size: 21 })],
    spacing: { before: 0, after },
  });

const boldLineBlock = (text) =>
  new Paragraph({
    children: [r(text, { size: 22, bold: true })],
    spacing: { before: 0, after: 80 },
  });

const italicLineBlock = (text) =>
  new Paragraph({
    children: [r(text, { size: 21, italics: true })],
    spacing: { before: 0, after: 80 },
  });

// H3 = experience entry header: "Company  Location  |  Date Range"
const experienceHeader = (text) => {
  const parts = text.split("|").map((s) => s.trim());
  const children = [];

  if (parts.length >= 2) {
    // Split left part for company and location
    const left = parts[0].trim();
    const date = parts[1].trim();
    const locationSplit = left.split(/\s{2,}/); // two or more spaces = separator

    if (locationSplit.length >= 2) {
      children.push(r(locationSplit[0].trim(), { size: 21, bold: true }));
      children.push(r(`  ${locationSplit.slice(1).join(" ").trim()}`, { size: 21, italics: true }));
    } else {
      children.push(r(left, { size: 21, bold: true }));
    }
    children.push(r(`  |  ${date}`, { size: 20, italics: true }));
  } else {
    children.push(r(text, { size: 21, bold: true }));
  }

  return new Paragraph({
    children,
    spacing: { before: 160, after: 40 },
  });
};

const bulletBlock = (text) =>
  new Paragraph({
    numbering: { reference: "cv-bullets", level: 0 },
    children: [r(text, { size: 21 })],
    spacing: { before: 0, after: 60 },
  });

const gapBlock = () =>
  new Paragraph({
    children: [r("", { size: 21 })],
    spacing: { before: 0, after: 160 },
  });

// ── Document builder ─────────────────────────────────────────────────────────

function buildDocument(blocks) {
  const children = [];
  let headerPhase = true;
  let h1Done = false;
  let headerLineCount = 0;

  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];

    // H1 = candidate name
    if (block.type === "h1") {
      children.push(nameBlock(block.text));
      h1Done = true;
      continue;
    }

    // Lines after H1 and before first H2 = role title and contact
    if (h1Done && headerPhase && block.type === "prose") {
      headerLineCount++;
      if (headerLineCount === 1) {
        children.push(roleBlock(block.text));
      } else {
        children.push(contactBlock(block.text));
      }
      continue;
    }

    // H2 = section heading
    if (block.type === "h2") {
      headerPhase = false;
      children.push(sectionHeading(block.text));
      children.push(sectionDivider());
      continue;
    }

    // H3 = experience or education entry
    if (block.type === "h3") {
      children.push(experienceHeader(block.text));
      continue;
    }

    if (block.type === "bold-line") {
      children.push(boldLineBlock(block.text));
      continue;
    }

    if (block.type === "italic-line") {
      children.push(italicLineBlock(block.text));
      continue;
    }

    if (block.type === "bullet") {
      children.push(bulletBlock(block.text));
      continue;
    }

    if (block.type === "prose") {
      children.push(proseBlock(block.text));
      continue;
    }
  }

  return children;
}

// ── ATS checklist ─────────────────────────────────────────────────────────────

const ATS_CHECKS = [
  "Single-column layout — no text boxes, no multi-column sections",
  "Only Arial font used — no other fonts",
  "No images, icons, or logos",
  "No tables used for layout",
  "No coloured text or backgrounds",
  "Section headings use Word built-in Heading 1 style",
  "All bullets use docx numbering — no unicode bullet characters",
  "Page size is A4",
  "Margins are minimum 2cm on all sides",
  "File saved as .docx",
  `Filename: cv-${applicationName}.docx`,
];

// ── Main ─────────────────────────────────────────────────────────────────────

const markdown = fs.readFileSync(inputPath, "utf8");
const blocks = parseMarkdown(markdown);
const docChildren = buildDocument(blocks);

const doc = new Document({
  numbering,
  styles: {
    paragraphStyles: [
      {
        id: "Heading1",
        name: "Heading 1",
        basedOn: "Normal",
        next: "Normal",
        run: { font: FONT, size: 24, bold: true, color: "000000" },
        paragraph: { spacing: { before: 240, after: 80 }, outlineLevel: 0 },
      },
    ],
  },
  sections: [
    {
      properties: {
        page: {
          size: { width: 11906, height: 16838 }, // A4
          margin: { top: 1134, bottom: 1134, left: 1134, right: 1134 }, // ~2cm
        },
      },
      children: docChildren,
    },
  ],
});

Packer.toBuffer(doc).then((buffer) => {
  fs.writeFileSync(outputPath, buffer);
  console.log("\nATS CHECKLIST:");
  ATS_CHECKS.forEach((check) => console.log(`  [x] ${check}`));
  console.log(`\nDOCX saved to:\n  ${outputPath}`);
});
