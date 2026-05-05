#!/usr/bin/env node
/**
 * gen-cover.js — Cover Letter DOCX Generator for Agent-Ready Knowledge Brain
 *
 * Usage:   node _scripts/gen-cover.js {application-name}
 * Example: node _scripts/gen-cover.js 2026-06-01-acme-corp-product-manager-berlin
 *
 * Input:   career/generated-applications/{application-name}/cover-letter-en.md
 * Output:  career/generated-applications/{application-name}/cover-letter-{application-name}.docx
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
} = require("docx");

const fs = require("fs");
const path = require("path");

// ── Configuration ─────────────────────────────────────────────────────────────

const FONT = "Arial";

// ── Argument handling ─────────────────────────────────────────────────────────

const applicationName = process.argv[2];

if (!applicationName) {
  console.error("Error: application name is required.");
  console.error("Usage: node _scripts/gen-cover.js {application-name}");
  console.error("Example: node _scripts/gen-cover.js 2026-06-01-acme-corp-role-market");
  process.exit(1);
}

const vaultRoot = path.join(__dirname, "..");
const appDir = path.join(vaultRoot, "career", "generated-applications", applicationName);
const inputPath = path.join(appDir, "cover-letter-en.md");
const outputPath = path.join(appDir, `cover-letter-${applicationName}.docx`);

if (!fs.existsSync(inputPath)) {
  console.error(`\nError: input file not found:\n  ${inputPath}`);
  console.error("\nRun the \\cover command first to generate cover-letter-en.md.");
  process.exit(1);
}

// ── Markdown parser ────────────────────────────────────────────────────────────
//
// Parses the cover-letter-en.md structure into typed blocks.
// Expected structure from docx-format.md:
//
//   # Full Name
//   Role Title
//   Contact | Email | LinkedIn
//
//   Date (e.g. "1 June 2026")
//   Hiring Manager or "Hiring Team"
//   Company Name
//   City
//
//   Re: Role Title — Company Name
//
//   Dear Hiring Team,
//
//   Paragraph 1.
//
//   Paragraph 2.
//
//   Paragraph 3.
//
//   Paragraph 4.
//
//   Kind regards,
//
//   Full Name
//   Role Title

function parseMarkdown(content) {
  const lines = content.split("\n");
  const blocks = [];

  for (const line of lines) {
    const trimmed = line.trim();

    if (trimmed === "" || trimmed === "---") continue;

    if (trimmed.startsWith("# ")) {
      blocks.push({ type: "h1", text: trimmed.slice(2).trim() });
    } else if (trimmed.startsWith("**") && trimmed.endsWith("**") && trimmed.length > 4) {
      blocks.push({ type: "bold-line", text: trimmed.slice(2, -2).trim() });
    } else if (trimmed.startsWith("Re:")) {
      blocks.push({ type: "subject", text: trimmed });
    } else {
      blocks.push({ type: "prose", text: trimmed });
    }
  }

  return blocks;
}

// ── Docx element builders ─────────────────────────────────────────────────────

const r = (text, opts = {}) =>
  new TextRun({ text, font: FONT, color: "000000", ...opts });

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

const metaBlock = (text) =>
  new Paragraph({
    children: [r(text, { size: 21 })],
    spacing: { after: 60 },
  });

const subjectBlock = (text) =>
  new Paragraph({
    children: [r(text, { size: 21, bold: true })],
    spacing: { before: 160, after: 160 },
  });

const bodyBlock = (text, after = 160) =>
  new Paragraph({
    children: [r(text, { size: 21 })],
    spacing: { before: 0, after },
  });

const boldLineBlock = (text) =>
  new Paragraph({
    children: [r(text, { size: 21, bold: true })],
    spacing: { after: 60 },
  });

const spacer = () =>
  new Paragraph({
    children: [r("", { size: 21 })],
    spacing: { after: 160 },
  });

// ── Document builder ─────────────────────────────────────────────────────────
//
// State machine: header phase → meta phase → body phase
//
// header: H1 = name, next prose = role, next prose = contact
// meta: prose lines before "Re:" = date/recipient/company/city
// subject: "Re:" line
// body: everything after subject

function buildDocument(blocks) {
  const children = [];

  let phase = "header";
  let headerLineCount = 0;
  let h1Done = false;

  for (const block of blocks) {

    if (block.type === "h1") {
      children.push(nameBlock(block.text));
      h1Done = true;
      continue;
    }

    if (h1Done && phase === "header" && block.type === "prose") {
      headerLineCount++;
      if (headerLineCount === 1) {
        children.push(roleBlock(block.text));
      } else {
        children.push(contactBlock(block.text));
        phase = "meta"; // Switch after contact line
      }
      continue;
    }

    if (phase === "meta" && block.type === "prose") {
      children.push(metaBlock(block.text));
      continue;
    }

    if (block.type === "subject") {
      children.push(subjectBlock(block.text));
      phase = "body";
      continue;
    }

    if (phase === "body") {
      if (block.type === "bold-line") {
        children.push(boldLineBlock(block.text));
      } else {
        // Detect closing lines (Kind regards, Yours sincerely)
        const isClosing = /^(kind regards|yours sincerely)/i.test(block.text);
        if (isClosing) {
          children.push(spacer());
          children.push(bodyBlock(block.text, 60));
        } else {
          children.push(bodyBlock(block.text));
        }
      }
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
  "No headers or footers",
  "Page size is A4",
  "Margins are minimum 2cm on all sides",
  "File saved as .docx",
  `Filename: cover-letter-${applicationName}.docx`,
];

// ── Main ─────────────────────────────────────────────────────────────────────

const markdown = fs.readFileSync(inputPath, "utf8");
const blocks = parseMarkdown(markdown);
const docChildren = buildDocument(blocks);

const doc = new Document({
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
