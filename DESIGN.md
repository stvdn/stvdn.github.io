---
name: Steven Peñafiel Portfolio
description: A minimal engineering journal for a software engineer's work and experience.
colors:
  ink-black: "#000000"
  paper-white: "#ffffff"
  muted-copy: "#b9b9b9"
  quiet-copy: "#929292"
  fine-divider: "#3b3b3b"
  soft-divider: "#292929"
typography:
  display:
    fontFamily: "Schibsted Grotesk, sans-serif"
    fontSize: "clamp(3.3rem, 7.7vw, 6rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.04em"
  section:
    fontFamily: "Schibsted Grotesk, sans-serif"
    fontSize: "clamp(1.25rem, 2vw, 1.625rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Schibsted Grotesk, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Schibsted Grotesk, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
components:
  contact-button:
    backgroundColor: "{colors.paper-white}"
    textColor: "{colors.ink-black}"
    padding: "0.75rem 1rem"
  section-heading:
    textColor: "{colors.paper-white}"
    typography: "{typography.section}"
---

# Design System: Steven Peñafiel Portfolio

## Overview

**Creative North Star: "Minimal Engineering Journal"**

An open, dark canvas lets the work, experience, and typography carry the page. The voice is direct and precise. Small motion cues add life to the interface while keeping the content easy to scan.

**Key Characteristics:** black canvas, white type, generous space, fine dividers, and restrained motion.

## Colors

The palette is almost entirely monochrome. Ink Black is the page canvas; Paper White carries high-priority type and primary actions. Muted and Quiet Copy establish reading hierarchy. Fine and Soft Dividers separate content without boxed cards.

**The Monochrome Rule.** Keep the black, white, and gray palette as the dominant visual language.

## Typography

Schibsted Grotesk is used throughout. A large, tightly tracked display introduces Steven; medium-weight section and item titles lead into readable body copy. Small labels identify links and project tags.

**The Scan Rule.** Titles, dates, and descriptions should be readable as distinct levels without decorative type treatments.

## Layout

The page uses a wide centered container with responsive side padding. The desktop portfolio places the bio and contacts in a narrow sticky column beside the main content. Entries use two-column grids; at 900px the sidebar stacks, and at 600px entries become one column. Large vertical gaps mark major sections.

## Elevation & Depth

Main content stays flat. Fine horizontal rules, type contrast, and spacing provide separation. The contact modal and floating scroll control use shadow only where an overlay or floating affordance needs depth.

## Shapes

Most portfolio content is square edged and unboxed. Fine rules anchor sections and entries. The star cursor is a small four-point silhouette; it should read as a precise accent rather than a large decoration.

## Components

### Navigation

Small muted links brighten to white on hover or keyboard focus. The wordmark uses a quieter period, and the language control sits with the links.

### Project and Experience Entries

Two-column rows pair the title and metadata with descriptions. Thin top borders separate subsequent entries; project links shift subtly on hover.

### Contact Controls

Contact rows use full-width fine borders and spacious targets. The modal uses dark fields, white text, and a white primary submit button.

### Star Pointer

A small white four-point star follows the mouse within the header and main content. Sparse trailing stars drift and fade quickly. Hide the effect for reduced motion and touch input.

## Do's and Don'ts

### Do:

- **Do** keep content hierarchy clear with spacing, typography, and fine rules.
- **Do** keep interactions brief and respect reduced motion.

### Don't:

- **Don't** add decorative color that competes with the portfolio content.
- **Don't** turn portfolio entries into heavy raised cards.
