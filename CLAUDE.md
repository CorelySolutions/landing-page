# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build
npm run lint     # ESLint (Next.js config)
```

No test suite is configured.

## Architecture

This is a **single-page marketing site** for Corely — a B2B SaaS for live event production companies managing AV inventory, fleet, projects, and teams.

### Everything lives in one file

`src/app/page.tsx` (~2400 lines) contains every section component, helper component, and data constant. It is marked `'use client'` at the top. There is no routing beyond the root `/` page.

Section render order in `LandingPage` (bottom of file):
`LandingNav → HeroSection → LogoStripSection → ProblemSection → SolutionSection → FeaturesSection → HowItWorksSection → VSSpreadsheets → CostSavingsSection → StatsSection → TestimonialsSection → ChecklistSection → PricingSection → FAQSection → CTASection → Footer`

### Tailwind v4

Uses `@import "tailwindcss"` in `globals.css` (not a config file — Tailwind v4 is CSS-first). Custom animations and utilities are declared with `@keyframes` and `@utility` directly in `globals.css`. **Do not add `@import url(...)` for fonts after `@import "tailwindcss"`** — PostCSS inlines the entire Tailwind library at that point and any following `@import` will error. Fonts must use `next/font/google`.

### Font loading

Plus Jakarta Sans is loaded in `src/app/layout.tsx` via `next/font/google` with `variable: '--font-sans'`. The CSS variable is applied to `<html>` and consumed in `globals.css` as `font-family: var(--font-sans, ...)`.

### Magic UI components

Custom animation components live in `src/registry/magicui/`. They are client components and use `motion/react` (v12 — imported as `motion/react`, not `framer-motion`). The accordion open/close animations are defined in `globals.css` as `animate-accordion-down` / `animate-accordion-up` using Radix's `--radix-accordion-content-height` CSS variable.

### shadcn/ui components

`src/components/ui/` contains lightly modified shadcn components (`accordion`, `badge`, `button`). The `AccordionItem` base class includes `last:border-b-0` — override it in call sites with `last:border-b` when a full border on every item is needed.

### Design tokens (inline in code)

The comment block at the top of `page.tsx` documents the color system:
- Background: `bg-white` / `bg-[#f8fafc]` (elevated sections)
- Border: `border-[#e2e8f0]`
- Primary text: `text-[#0f172a]`
- Muted text: `text-[#64748b]`
- Blue accent: `text-[#2563eb]` / `bg-[#2563eb]`

### Smooth scroll

All internal anchor links use an inline `onClick` that calls `window.scrollTo({ behavior: 'smooth' })` with an 80px navbar offset. Nav links use a shared `scrollTo(e, '#id')` helper defined inside `LandingNav`.

### `@/` alias

Maps to `src/` (configured in `tsconfig.json`).
