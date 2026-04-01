# Corely Landing Page — Redesign Spec

**Date:** 2026-04-01  
**Status:** Approved  
**Scope:** Visual refresh + new sections. Existing components are kept; only copy and colors change where noted.

---

## Context

Corely is a pre-launch B2B SaaS for companies with physical operations (inventory, fleet, warehouse, dock, production, teams). Not limited to live events. The current landing page feels visually generic. Goal: make it feel like a professional, trustworthy startup with its own identity, while increasing waitlist conversions.

---

## Design Direction

- **Color:** Royal blue `#2563eb` as primary (replaces the current blue throughout). Light accent `#3b82f6` kept for text highlights.
- **Background:** Keep `#0a0a0a` deep black.
- **Style:** Minimalist, professional, editorial. No heavy glow or spotlight effects. Subtle radial gradient only in hero.
- **Layout:** Hero becomes a split layout (text left, dashboard right) on desktop.
- **Rule:** Use existing components (`Button`, `Badge`, `Accordion`, `BentoGrid`). Do not rewrite what already works.

---

## Changes by Section

### 1. Hero — Redesign
**Layout:** Two-column grid (text left, dashboard mockup right) on `md+`. Single column on mobile.

**Copy changes:**
- Remove badge "Launching soon · Waitlist now open" → replace with: `Early Access · Waitlist now open`
- Headline: `"Run the ops. Not spreadsheets."` (blue accent on "spreadsheets.")
- Subheading: `"Inventory, fleet, projects, warehouse and team — one platform built for companies with operations in the field."`
- Add module pills row below subheading: `📦 Inventory · 🚚 Fleet · 📋 Projects · 🏗 Production · ⚓ Dock · 👥 Teams`
- Form stays as-is (email + CTA button)
- Benefits: `Free during early access · No credit card required · Cancel anytime`

**Dashboard mockup copy:**
- Update sidebar items to include `Warehouse` and `Dock` (replacing generic items)
- Update project names to broader operations (not just events): `Sudowest Project`, `Lisbon Warehouse`, `North Dock — Loading`
- Greeting: `Good afternoon, Alex · Monday, March 30`

---

### 2. NEW — Waitlist Counter Strip
**Position:** Immediately after Hero, before Solution section.  
**Component:** New inline section, no existing component needed.

**Content:**
- Stat: `127` companies on the waitlist
- Progress bar: `63 / 100` early access spots (63% filled)
- Urgency line: `"First 100 get free access forever"`
- Stat: `Free` during early access

**Layout:** Three columns separated by dividers: [stat] | [progress bar] | [stat]

---

### 3. Solution (Animated Beam) — Copy only
- Title: `"One platform. Full infrastructure control."`
- Subtitle: `"Every part of your operation — inventory, fleet, projects, team — connected and visible in real time."`
- Beam component: no structural changes. Update icon colors to royal blue if hardcoded.

---

### 4. Features Bento Grid — Copy only
Update each card to reflect broader operational scope (not just live events):

| Card | New title | New description |
|------|-----------|-----------------|
| Inventory | Real-time stock control | Scan in, scan out. Conflicts detected automatically before they happen. |
| Fleet | Vehicles, drivers and documents | Routes, assignments and expiry alerts in one place. |
| Projects & Picking | From quote to delivery | Phases, picking lists and automated equipment assignment. |
| Team & Roles | Roles and access | Admin, Warehouse and Commercial — each sees only what they need. |
| Reports | Metrics that matter | Utilisation rates, revenue per project, team trends. |
| Alerts | Conflicts and risks anticipated | Automatic detection of inventory conflicts, expiring documents and at-risk projects. |

Section title: `"Everything your operation needs"`  
Section subtitle: `"Built for companies with physical operations — not a generic ERP."`

---

### 5. How It Works — Copy only
- Title: `"Up and running in less than a day"`
- Step 1: `"Set up your organisation"` — Register your team, define roles and import your existing inventory.
- Step 2: `"Create projects and assign resources"` — Add projects, select equipment, assign drivers.
- Step 3: `"Monitor in real time"` — Dashboard with automatic alerts, team activity and project status.

---

### 6. NEW — Corely vs Spreadsheets
**Position:** After How It Works, before Stats.  
**Component:** New section with a comparison table.

**Content — table rows:**

| Feature | Spreadsheets | Corely |
|---------|-------------|--------|
| Real-time inventory control | Manual, outdated | ✓ Automatic |
| Equipment conflict detection | ✗ Doesn't exist | ✓ Automatic |
| Fleet and driver management | ✗ Separate files | ✓ Integrated |
| Document expiry alerts | ✗ Doesn't exist | ✓ Automatic |
| Project picking lists | ~ Made by hand | ✓ Auto-generated |
| Role-based team access | ✗ Doesn't exist | ✓ Admin / Warehouse / Commercial |
| Reports and analytics | ~ Manual, slow | ✓ Real time |

Section title: `"Leave the files behind."`  
Section subtitle: `"Spreadsheets weren't built to manage live operations. Corely was."`

---

### 7. Stats — Copy only
- `< 2 min` — To set up your first project
- `8` — Core modules at launch
- `3` — Role-based access levels
- `Free` — During early access

---

### 8. Checklist ("Everything Included") — Copy only
This section already exists. Update copy:
- Title: `"No extra modules. No surprises."`
- Subtitle: `"A single subscription with access to every feature. Your team never pays more to grow."`
- Left copy: `"One subscription. Everything included."` + body explaining no per-module pricing
- Checklist items: keep in English (already are)

---

### 9. Pricing — Copy only
Keep in English. Keep prices (€49, €129, Custom). No changes needed.

---

### 10. FAQ — Copy only (use existing Accordion component)
Update questions and answers to reflect broader scope:

1. **Is Corely only for live event companies?** — No. Corely is built for any company with physical operations — production, logistics, warehouse, dock or fleet management.
2. **How does inventory conflict detection work?** — When you assign equipment to a project, Corely automatically checks if that item is already booked for another project in the same period.
3. **Can I control what each team member sees?** — Yes. Three roles: Admin (full access), Warehouse (inventory and picking), Commercial (projects and reports).
4. **What fleet documents does the platform manage?** — Inspections, insurance, tachograph, licences, and any other document you configure. Corely alerts you before they expire.
5. **How long does onboarding take?** — Most teams are operational in less than a day. Our team is available to help with setup at no extra cost.
6. **Is there a trial period?** — During early access, Corely is completely free — no credit card, no time limit. The first 100 users keep free access forever.

---

### 11. CTA Final — Copy only
- Title: `"Ready to organise your operation?"`
- Subtitle: `"Start today. No credit card required. Support team available for onboarding."`
- Benefits: `Free during early access · No credit card required · Cancel anytime`

---

### 12. Footer — No changes

---

## What does NOT change
- Component structure (`Button`, `Badge`, `Accordion`, `BentoGrid`, `AnimatedBeam`)
- Page routing and layout
- API integration (waitlist form)
- Animation hooks (`useFadeInUp`)
- Tailwind config (only class values change in JSX)
- SEO metadata (keep existing)

---

## Files to edit
- `src/app/page.tsx` — all changes live here
- Possibly `src/app/layout.tsx` if metadata copy needs updating

---

## New sections implementation notes
- **Waitlist Counter**: plain JSX in `page.tsx`, no new component file needed
- **Corely vs Spreadsheets**: plain JSX table in `page.tsx`, no new component needed
- Both sections should use `useFadeInUp()` hook for scroll-triggered entrance, consistent with the rest of the page
