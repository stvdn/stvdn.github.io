# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Hiring managers and recruiters evaluating Steven Peñafiel's engineering experience, projects, and fit for a role.

## Product Purpose

Present Steven's work, skills, career history, and ways to contact him in a concise personal portfolio. A visitor should be able to understand his experience and follow links to relevant projects or contact details.

## Operating Context

Visitors browse the portfolio in English or Spanish, review projects and work history, and may open external project, GitHub, or LinkedIn links. The repository also contains a blog route and a contact form.

## Capabilities and Constraints

- The site is a statically exported Next.js application deployed to GitHub Pages.
- English and Spanish content is maintained in locale-specific data and routes.
- The contact form uses a separate Cloudflare Worker and Resend.
- The repository uses pnpm. Git changes must be atomic commits and must not be pushed without asking.

## Brand Commitments

- The portfolio belongs to Steven Peñafiel.
- Keep its minimalism and animation, including the star pointer that the owner prefers.

## Evidence on Hand

- Actual career history, skills, education, projects, company logos, and certifications are in `src/data/portfolio.en.ts`, `src/data/portfolio.es.ts`, and `public/`.
- Project links and contact destinations are in the portfolio data files.

## Product Principles

- Make Steven's experience and work easy to scan.
- Keep project evidence and contact routes easy to find.
- Respect both supported languages and reduced motion preferences.
