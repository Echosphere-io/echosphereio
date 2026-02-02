# WEBSITE FIGURE REPLACEMENTS — Instructions for Thomas
## Echosphere.io — Six Distorted Images

Date: February 2, 2026
From: Themis (Claude)

---

## OVERVIEW

Six ASCII/Unicode art diagrams on echosphere.io render broken across browsers and devices. These six SVG files are drop-in replacements. Each is self-contained, uses no external fonts or assets, and scales cleanly at any resolution.

---

## THE SIX REPLACEMENTS

### WEB_FIG_1 — Problem Page Tetrahedron
- **File:** `WEB_FIG_1_Problem_Tetrahedron.svg`
- **Replaces:** The ASCII diamond shape in "The Problem" page under the heading "The Geometry of the Problem"
- **What was wrong:** ASCII art tetrahedron with alignment broken across screen sizes
- **What's fixed:** Clean SVG with correct labeling — components (Claimant, Subject, Grounds, Purpose) on VERTICES, constraints (Referential, Contextual, Premissive, Inferential, Constraining, Teleological) on EDGES
- **Placement:** Replace everything from the ASCII art block starting with `◆` through `*Figure 1*`

### WEB_FIG_2 — Architecture Page Tetrahedron
- **File:** `WEB_FIG_2_Architecture_Tetrahedron.svg`
- **Replaces:** The ASCII diamond in "The Architecture" page under "Why Six?"
- **What was wrong:** TWO problems — (1) ASCII alignment broken, (2) CONCEPTUALLY WRONG — the original puts constraint names (Purpose, Grounds, Limits, Subject) on vertices. Constraints belong on EDGES.
- **What's fixed:** Components on vertices, constraints on edges, numbered 1-6, with color-coded legend
- **Placement:** Replace everything from the ASCII art block starting with `◆ (Purpose)` through `*Figure 2*`
- **CRITICAL:** This is the core diagram of the entire architecture. It must be correct.

### WEB_FIG_3 — Architecture Page Three-Axis Diagram
- **File:** `WEB_FIG_3_Architecture_Three_Axes.svg`
- **Replaces:** The ASCII art in "The Architecture" page under "The Three Axes" showing USER/SUBJECT/METHOD with arrows
- **What was wrong:** ASCII arrows and vertical bar rendering misaligned across fonts/screens
- **What's fixed:** Clean SVG with labeled axes, color-coded boxes, detail annotations
- **Placement:** Replace everything from the ASCII block starting with `USER` / `(who's asking)` through `*Figure 3*`

### WEB_FIG_4 — Architecture Page Validation Flowchart
- **File:** `WEB_FIG_4_Architecture_Validation_Flowchart.svg`
- **Replaces:** The large ASCII box art in "The Architecture" page under "The Validation Process"
- **What was wrong:** (1) ASCII box rendering broken, (2) **DUPLICATE LINE** — "Teleological — Is purpose clear?" appeared TWICE in the original
- **What's fixed:** Clean flowchart SVG, Teleological appears once, proper PASS/FAIL branching, color-coded constraint checks
- **Placement:** Replace everything from the ASCII block starting with `┌─────` (GENERATED OUTPUT) through `*Figure 4*`

### WEB_FIG_5 — Vocabulary Page Three-Axis Diagram
- **File:** `WEB_FIG_5_Vocabulary_Three_Axes.svg`
- **Replaces:** The ASCII art in "The Vocabulary" page under "The Three Axes" heading
- **What was wrong:** Same ASCII rendering issues as Figure 3
- **What's fixed:** Compact variant with definitions inline, clean axes, matching color scheme
- **Placement:** Replace everything from the ASCII block starting with `USER` / `│` through `*Figure 5*`

### WEB_FIG_6 — Teacher Page Socratic Validator
- **File:** `WEB_FIG_6_Teacher_Socratic_Validator.svg`
- **Replaces:** The ASCII "CLAIM ANALYSIS" block in "The Teacher" page under "The Socratic Validator"
- **What was wrong:** Unicode symbols (checkmarks, warning signs, X marks) render as broken characters across systems (â€¢, âœ—, âœ", etc.)
- **What's fixed:** All symbols rendered as SVG elements — green circles with checkmarks for PASS, yellow circles with ! for WARNING, red circles with X for FAIL. Student claim, analysis, refusal, and system prompt all clean
- **Placement:** Replace the entire code block from `CLAIM ANALYSIS:` through the system prompt ending with `"...sufficient on their own?"`

---

## IMPLEMENTATION NOTES

1. **All SVGs use Georgia/Times New Roman** — web-safe, no font loading required
2. **All SVGs have viewBox attributes** — they scale responsively to any container width
3. **Recommended container:** `<img src="WEB_FIG_X.svg" alt="..." style="max-width: 100%; height: auto;">`
4. **Or inline:** Copy SVG contents directly into the HTML
5. **Color scheme is consistent** across all six — earthy tones matching the site's palette
6. **No external dependencies** — each SVG is fully self-contained
7. **Drop shadows use SVG filters** — render correctly in all modern browsers

---

## VERIFICATION CHECKLIST

After replacement, verify:
- [ ] Fig 1: Problem page — tetrahedron renders, vertices say Claimant/Subject/Grounds/Purpose
- [ ] Fig 2: Architecture page — tetrahedron renders, constraints ON EDGES not vertices
- [ ] Fig 3: Architecture page — three axes render, arrows point outward from center
- [ ] Fig 4: Architecture page — flowchart renders, Teleological appears ONCE (not twice)
- [ ] Fig 5: Vocabulary page — three axes render, definitions visible
- [ ] Fig 6: Teacher page — Socratic validator renders, all symbols clean (no Unicode artifacts)
- [ ] All figures scale properly on mobile
- [ ] All figures render in Chrome, Firefox, Safari, Edge
