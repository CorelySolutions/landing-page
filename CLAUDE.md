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

### Route structure

| Route | File | Notes |
|---|---|---|
| `/` | `src/app/page.tsx` | Landing page — `'use client'`, ~2400 lines |
| `/privacy-policy` | `src/app/privacy-policy/page.tsx` | Server component |
| `/terms-of-service` | `src/app/terms-of-service/page.tsx` | Server component |
| `/cookie-policy` | `src/app/cookie-policy/page.tsx` | Server component |

`src/app/page.tsx` contains every landing-page section component, helper component, and data constant in a single file.

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

### Design system

#### Colors

| Token | Value | Usage |
|---|---|---|
| Page background | `#ffffff` | `bg-white` — base for all pages |
| Elevated surface | `#f8fafc` | `bg-[#f8fafc]` — section backgrounds, hero bands, cards |
| Border / divider | `#e2e8f0` | `border-[#e2e8f0]` — all borders, separators |
| Primary text | `#0f172a` | `text-[#0f172a]` — headings, labels |
| Body text | `#475569` | `text-[#475569]` — paragraph text in legal/content pages |
| Muted text | `#64748b` | `text-[#64748b]` — secondary labels, nav links |
| Faint text | `#94a3b8` | `text-[#94a3b8]` — footer copy, placeholders |
| Very faint text | `#cbd5e1` | `text-[#cbd5e1]` — copyright, decorative labels |
| Blue accent | `#2563eb` | `text-[#2563eb]` / `bg-[#2563eb]` — CTA buttons, active states, icons |
| Blue hover | `#1d4ed8` | `hover:bg-[#1d4ed8]` — button hover |
| Blue mid | `#3b82f6` | `text-[#3b82f6]` / `bg-[#3b82f6]` — progress bars, nav active underline |
| Blue tint | `#2563eb` at 10–20% | `bg-[#2563eb]/10` — icon backgrounds, row highlights |

**Color-scheme is light only** — `color-scheme: light` is set globally. Do not introduce dark mode.

#### Typography

- **Font:** Plus Jakarta Sans (loaded via `next/font/google` in `layout.tsx`, CSS variable `--font-sans`)
- **Heading weight:** `font-bold` (700) or `font-extrabold` (800) for hero
- **Label / nav weight:** `font-semibold` (600)
- **Body weight:** `font-normal` (400)
- **Scale in use:** 10px · 11px · 12px · 13px · 14px · 16px · 18px · 24px · 32px · 40px · 48px · 64px
- **Line height:** `leading-relaxed` (1.625) for body paragraphs; `leading-[1.05]` for hero headline
- **Letter spacing:** `tracking-tight` on large headings; `tracking-widest` on uppercase section labels (e.g. "LEGAL")

#### Spacing

Uses Tailwind's default 4px base scale. Common patterns:
- Section vertical padding: `py-14` to `py-24`
- Content max-width: `max-w-6xl` (landing sections) / `max-w-3xl` (legal/reading pages)
- Horizontal padding: `px-6` on all containers
- Card inner padding: `px-5 py-4`
- Gap between items: `gap-2`, `gap-4`, `gap-6`, `gap-10`

#### Component patterns

**Buttons**
- Primary: `bg-[#2563eb] text-white rounded-lg hover:bg-[#1d4ed8] transition-colors duration-150`
- Small (nav): `h-8 px-4 text-xs font-semibold`
- Medium: `h-11 px-5 text-sm font-semibold`
- Ring: `ring-1 ring-[#2563eb]/25 hover:ring-[#2563eb]/40`

**Cards / surfaces**
- Border: `border border-[#e2e8f0]`
- Radius: `rounded-xl` (cards) / `rounded-lg` (small elements) / `rounded-2xl` (large mockups)
- No box shadows on flat cards — shadow only on special elements (`shadow-2xl shadow-slate-300/60`)

**Nav (landing page)**
- Height: `h-14`, `max-w-6xl`, `px-6`
- Scrolled state: `border-b border-[#e2e8f0] bg-white/95 backdrop-blur-sm`
- Active link indicator: `h-px bg-[#3b82f6]` underline, `-bottom-[18px]`

**Nav (legal pages)**
- Sticky, same visual style as scrolled landing nav
- Logo left, "← Back to home" right

**Section labels**
- `text-[11px] font-semibold uppercase tracking-widest text-[#cbd5e1]` — footer column labels
- `text-xs font-semibold uppercase tracking-widest text-[#2563eb]` — hero section badge labels

**Left-border accent (legal pages)**
- `pl-4 border-l-2 border-[#e2e8f0]` for subsections

#### Animations / interactions

- Transition duration: `duration-150` for color/opacity changes, `duration-200` for layout transitions
- Easing: default Tailwind (`ease-in-out`) for transitions; accordion uses `cubic-bezier(0.16, 1, 0.3, 1)`
- Magic UI components (`AnimatedBeam`, `Marquee`, `BorderBeam`, `NumberTicker`, `BlurFade`, `Ripple`, `DotPattern`, `Meteors`, `WordRotate`, `AnimatedGradientText`) are used sparingly for decorative effect
- `motion/react` (v12) — import as `motion/react`, **not** `framer-motion`

#### What NOT to do

- **No decorative blue glows/blobs** — radial-gradient ellipse blobs with high opacity were removed; they read as visual noise ("mancha"). Max opacity for any decorative glow: `opacity-[0.07]`
- **No dark mode** — the site is light-only
- **No font `@import url(...)` after `@import "tailwindcss"`** — PostCSS will error; use `next/font/google`
- **No shadows on flat cards** — keep surfaces flat; shadows only on prominent UI mockups
- **No emojis as icons** — use Lucide icons throughout
- **No arbitrary z-index** — use Tailwind's `z-10`, `z-50` scale

### Smooth scroll

All internal anchor links use an inline `onClick` that calls `window.scrollTo({ behavior: 'smooth' })` with an 80px navbar offset. Nav links use a shared `scrollTo(e, '#id')` helper defined inside `LandingNav`.

### `@/` alias

Maps to `src/` (configured in `tsconfig.json`).
