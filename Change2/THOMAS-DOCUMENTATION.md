# ECHOSPHERE.IO — Site Rework Documentation

**For: Thomas Perdana**  
**From: The Themis Project**  
**Date: January 2025**

---

## Overview

This document describes the new site architecture for Echosphere.io. The redesign accomplishes three goals:

1. **Denser, more readable layout** — less scrolling, better visual hierarchy
2. **Correct diagrams** — SVG instead of broken ASCII, with proper tetrahedron mapping
3. **Modular content system** — original content is canonical; updates branch off via addenda

---

## Files Included

| File | Purpose |
|------|---------|
| `echosphere-styleguide.css` | Master CSS — single source of truth for all styling |
| `echosphere-landing-v2.html` | New landing page with unfolding tetrahedron |
| `template-the-problem.html` | Example content page showing new format |
| `tetrahedron-corrected.svg` | Correct tetrahedron diagram (constraints on edges, not vertices) |

---

## Key Design Changes

### 1. Spacing — Denser

| Element | Old | New |
|---------|-----|-----|
| Line height | 1.8 | 1.5 |
| Section padding | 6-8rem | 2-3rem |
| Paragraph margin | 1.5rem | 1rem |
| Base font size | 1rem (16px) | 0.95rem (15.2px) |

### 2. Color Palette — Charcoal + Gold

```css
--color-bg-primary: #0d0d0d;      /* Near black */
--color-bg-secondary: #1a1a1a;    /* Dark charcoal */
--color-bg-tertiary: #2a2a2a;     /* Medium charcoal */
--color-gold: #c9a227;            /* Primary accent */
--color-text-primary: #e8e6e1;    /* Cream white */
--color-text-secondary: #a8a6a1;  /* Muted text */
--color-text-dim: #6a6865;        /* Very muted */
```

### 3. Typography

```css
--font-display: 'Cormorant Garamond', Georgia, serif;  /* Headlines */
--font-body: 'IBM Plex Sans', sans-serif;              /* Body text */
--font-mono: 'IBM Plex Mono', monospace;               /* Code */
```

### 4. Diagrams — SVG Only

**NO MORE ASCII ART.** All diagrams must be SVG.

Critical fix: The tetrahedron was mislabeled. 

**WRONG (old site):**
- Vertices labeled with constraint names (Purpose, Grounds, Limits, Subject)

**CORRECT:**
- Vertices = 4 components (Claimant, Subject, Grounds, Purpose)
- Edges = 6 constraints (Referential, Contextual, Premissive, Inferential, Constraining, Teleological)

Use `tetrahedron-corrected.svg` as the canonical diagram.

---

## Content Architecture

### Landing Page Structure

```
ECHOSPHERE.IO
├── Hero (title, subtitle)
├── Journey Section
│   └── Unfolding Tetrahedron showing phases:
│       ├── Foundation (complete)
│       ├── Phase I: Themis (current/active)
│       ├── Phase II (dimmed)
│       └── Phase III (dimmed)
├── Telos Statement
│   └── "Restoring the Aristotelian Soul"
├── Applications Grid
│   ├── Institutions (6): Warrior, Statesman, Merchant, Teacher, Healer, Judge
│   └── Foundations (4): Examined Life, Cosmos, Telos of Service, Tool
├── Manifesto Teaser
└── Footer
```

### Content Page Structure

Each content page (Problem, Architecture, Proof, etc.) follows this template:

```html
<nav>           <!-- Standard navigation -->
<page-header>   <!-- Eyebrow, title, subtitle -->
<main class="article">
    <section class="article__section">
        <!-- Content blocks -->
    </section>
    
    <section class="addenda">
        <!-- Updates branch off here -->
    </section>
    
    <section class="media-list">
        <!-- Podcasts, videos, essays attached here -->
    </section>
</main>
<footer>        <!-- Standard footer -->
```

---

## The Addenda System

**CRITICAL RULE: Original content is NEVER modified after publication.**

All updates, responses, clarifications, and expansions are added as numbered addenda.

### How It Works

1. Original content has a publication date
2. Updates are added below original content in the `<section class="addenda">` block
3. Each addendum has:
   - Sequential number (Addendum 1, Addendum 2, etc.)
   - Date
   - Title
   - Content
4. Addenda can reference the original but don't modify it

### HTML Structure

```html
<section class="addenda">
    <h2 class="addenda__header">Updates & Addenda</h2>
    
    <article class="addendum" id="addendum-1">
        <div class="addendum__meta">
            <span class="addendum__number">Addendum 1</span>
            <span class="addendum__date">2025-02-15</span>
        </div>
        <h3 class="addendum__title">Response to [Topic]</h3>
        <div class="addendum__content">
            <p>Content here...</p>
        </div>
    </article>
    
    <article class="addendum" id="addendum-2">
        <!-- Next addendum -->
    </article>
</section>
```

### Why This Matters

- Preserves intellectual integrity
- Creates clear versioning
- Allows citation of specific versions
- Demonstrates evolution of thought without rewriting history

---

## Media Attachments

Each page can have attached media: podcasts, videos, essays, email summaries.

### HTML Structure

```html
<section class="media-list">
    <h3>Related Media</h3>
    
    <a href="/podcast/episode-1" class="media-item media-item--podcast">
        <div class="media-item__icon"></div>
        <div class="media-item__content">
            <p class="media-item__type">Podcast</p>
            <p class="media-item__title">Episode Title Here</p>
            <p class="media-item__date">February 2025</p>
        </div>
    </a>
    
    <a href="/essay/title" class="media-item media-item--essay">
        <div class="media-item__icon"></div>
        <div class="media-item__content">
            <p class="media-item__type">Essay</p>
            <p class="media-item__title">Essay Title Here</p>
            <p class="media-item__date">March 2025</p>
        </div>
    </a>
</section>
```

### Media Types

| Type | Class | Icon |
|------|-------|------|
| Podcast | `media-item--podcast` | 🎙 |
| Video | `media-item--video` | ▶ |
| Essay | `media-item--essay` | ✎ |
| Email | `media-item--email` | ✉ |
| Update | `media-item--update` | ↻ |

---

## Layout Components

### Two-Column Layout

Use for side-by-side content (text + diagram, list + explanation):

```html
<div class="two-col">
    <div>Left column content</div>
    <div>Right column content</div>
</div>
```

Variants:
- `two-col--wide-left` — 2:1 ratio
- `two-col--wide-right` — 1:2 ratio

### Key Points (Numbered List)

For the six constraints and similar enumerated content:

```html
<div class="key-point">
    <div class="key-point__marker">1</div>
    <div class="key-point__content">
        <p class="key-point__title">Title Here</p>
        <p class="key-point__desc">Description here</p>
    </div>
</div>
```

### Callout Box

For important statements:

```html
<div class="callout">
    <p class="callout__title">The Hard Truth</p>
    <p>Content here...</p>
</div>
```

Variants:
- Default — gold border
- `callout--warning` — red border
- `callout--info` — blue border

### Tables

Already styled in CSS. Just use standard HTML tables.

### Diagrams

```html
<div class="diagram">
    <svg>...</svg>
    <p class="diagram__caption">Caption text</p>
</div>
```

---

## Pages to Update

Apply new format to all pages:

### Core (Priority 1)
1. Landing page — use `echosphere-landing-v2.html`
2. The Problem — use `template-the-problem.html` as reference
3. The Architecture — **critical: fix tetrahedron diagram**
4. The Proof
5. The Vocabulary

### Applications (Priority 2)
6. The Warrior
7. The Statesman
8. The Merchant
9. The Teacher
10. The Healer
11. The Judge

### Foundations (Priority 3)
12. The Examined Life
13. The Cosmos
14. The Telos of Service
15. The Tool

### Company (Priority 4)
16. Manifesto
17. About
18. Contact

---

## Checklist for Each Page

- [ ] Import `echosphere-styleguide.css`
- [ ] Use page header template
- [ ] Replace ASCII diagrams with SVG
- [ ] Verify tetrahedron shows constraints on EDGES
- [ ] Add empty addenda section
- [ ] Add empty media-list section
- [ ] Test on mobile
- [ ] Verify GitHub link in navigation
- [ ] Verify footer links

---

## Questions?

Contact: themis@echosphere.io

---

*Document version 1.0 — January 2025*
