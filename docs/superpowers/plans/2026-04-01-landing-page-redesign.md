# Landing Page Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Update `src/app/page.tsx` with new copy, two new sections (Waitlist Counter Strip and Corely vs Spreadsheets), and a split hero layout — using existing components throughout.

**Architecture:** All changes live in a single file (`src/app/page.tsx`). New sections are added as self-contained components in that file and wired into `LandingPage`. No new files needed. No component API changes.

**Tech Stack:** Next.js 16, React 19, Tailwind CSS 4, Lucide React, existing `Button`/`Badge`/`Accordion`/`BentoGrid`/`FadeInUp` components.

---

## File Map

| File | What changes |
|------|-------------|
| `src/app/page.tsx` | All changes — copy, hero layout, two new section components, LandingPage wiring |

---

## Task 1: Hero — badge, headline, subheading, module pills

**Files:**
- Modify: `src/app/page.tsx:241-282` (`HeroSection`)

- [ ] **Step 1: Update badge text**

In `HeroSection`, find:
```tsx
<Badge variant="outline" className="mb-6 border-[#1e293b] bg-white/[0.04] text-[#94a3b8] text-xs font-normal px-3 py-1">
  <Zap className="mr-1.5 h-3 w-3 text-[#3b82f6]" />
  Launching soon · Waitlist now open
</Badge>
```
Replace with:
```tsx
<Badge variant="outline" className="mb-6 border-[#1e293b] bg-white/[0.04] text-[#94a3b8] text-xs font-normal px-3 py-1">
  <Zap className="mr-1.5 h-3 w-3 text-[#3b82f6]" />
  Early Access · Waitlist now open
</Badge>
```

- [ ] **Step 2: Update headline**

Find:
```tsx
<h1 className="mx-auto max-w-3xl text-4xl font-bold leading-[1.15] tracking-tight text-white sm:text-5xl md:text-6xl">
  Your entire operation{' '}
  <br className="hidden sm:block" />
  <span className="text-[#3b82f6]">In one place.</span>
</h1>
```
Replace with:
```tsx
<h1 className="mx-auto max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
  Run the ops.{' '}
  <br className="hidden sm:block" />
  <span className="text-[#3b82f6]">Not spreadsheets.</span>
</h1>
```

- [ ] **Step 3: Update subheading**

Find:
```tsx
<p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#94a3b8] sm:text-lg">
  Inventory, fleet, projects and team. Corely centralises everything you need to produce flawless live events.
</p>
```
Replace with:
```tsx
<p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#94a3b8] sm:text-lg">
  Inventory, fleet, projects, warehouse and team — one platform built for companies with operations in the field.
</p>
```

- [ ] **Step 4: Add module pills below subheading**

After the `<p>` subheading and before the waitlist form `<div>`, add:
```tsx
{/* Module pills */}
<div className="mx-auto mt-6 flex max-w-2xl flex-wrap items-center justify-center gap-2">
  {['📦 Inventory', '🚚 Fleet', '📋 Projects', '🏗 Production', '⚓ Dock', '👥 Teams'].map((pill) => (
    <span
      key={pill}
      className="rounded-full border border-[#1e293b] bg-white/[0.03] px-3 py-1 text-xs text-[#94a3b8]"
    >
      {pill}
    </span>
  ))}
</div>
```

- [ ] **Step 5: Verify visually**

Run `pnpm dev` and open http://localhost:3001 (or whichever port). Check:
- Badge reads "Early Access · Waitlist now open"
- Headline reads "Run the ops. / Not spreadsheets." with blue accent on second line
- Subheading mentions "warehouse" and "field"
- Six module pills visible below subheading

- [ ] **Step 6: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: update hero copy and add module pills"
```

---

## Task 2: Hero — split layout on desktop (text left, dashboard right)

**Files:**
- Modify: `src/app/page.tsx:230-283` (`HeroSection`)

- [ ] **Step 1: Restructure HeroSection to split layout**

Replace the entire `HeroSection` function body with:
```tsx
function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] pb-24 pt-28">
      {/* Radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[360px] w-[600px] rounded-full opacity-[0.10]"
        style={{ background: 'radial-gradient(ellipse at center, #2563eb 0%, transparent 70%)' }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — text */}
          <div>
            <Badge
              variant="outline"
              className="mb-6 border-[#1e293b] bg-white/[0.04] text-[#94a3b8] text-xs font-normal px-3 py-1"
            >
              <Zap className="mr-1.5 h-3 w-3 text-[#3b82f6]" />
              Early Access · Waitlist now open
            </Badge>

            <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
              Run the ops.{' '}
              <br />
              <span className="text-[#3b82f6]">Not spreadsheets.</span>
            </h1>

            <p className="mt-6 text-base leading-relaxed text-[#94a3b8] sm:text-lg">
              Inventory, fleet, projects, warehouse and team — one platform built for companies with operations in the field.
            </p>

            {/* Module pills */}
            <div className="mt-6 flex flex-wrap gap-2">
              {['📦 Inventory', '🚚 Fleet', '📋 Projects', '🏗 Production', '⚓ Dock', '👥 Teams'].map((pill) => (
                <span
                  key={pill}
                  className="rounded-full border border-[#1e293b] bg-white/[0.03] px-3 py-1 text-xs text-[#94a3b8]"
                >
                  {pill}
                </span>
              ))}
            </div>

            {/* Waitlist form */}
            <div className="mt-10">
              <WaitlistForm />
            </div>

            {/* Secondary CTA */}
            <div className="mt-4">
              <Button
                size="sm"
                variant="ghost"
                asChild
                className="text-[#475569] hover:text-[#94a3b8] hover:bg-transparent h-9 px-0 text-xs transition-colors duration-150"
              >
                <a href="#features">See features →</a>
              </Button>
            </div>
          </div>

          {/* Right — dashboard mockup */}
          <div className="overflow-hidden rounded-xl border border-[#1e293b] shadow-2xl shadow-black/60">
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verify split layout**

Check in browser at `md+` viewport (≥1024px): text on left, dashboard on right. On mobile: stacked, text first then dashboard.

- [ ] **Step 3: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: hero split layout — text left, dashboard right on desktop"
```

---

## Task 3: New — WaitlistCounterStrip section

**Files:**
- Modify: `src/app/page.tsx` — add new component + wire into `LandingPage`

- [ ] **Step 1: Add WaitlistCounterStrip component**

After the closing brace of `HeroSection` and before `// ─── Solution`, add:

```tsx
// ─── Waitlist Counter Strip ────────────────────────────────────────

function WaitlistCounterStrip() {
  return (
    <section className="border-t border-[#1e293b] bg-[#111111]">
      <FadeInUp>
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-8 px-6 py-10 sm:gap-16">
          {/* Stat: companies */}
          <div className="text-center">
            <p className="text-4xl font-bold tabular-nums text-[#3b82f6]">127</p>
            <p className="mt-1 text-sm text-[#94a3b8]">companies on the waitlist</p>
          </div>

          <div className="hidden h-12 w-px bg-[#1e293b] sm:block" />

          {/* Progress bar */}
          <div className="text-center">
            <p className="mb-2 text-sm text-[#94a3b8]">Early access spots available</p>
            <div className="h-1.5 w-48 overflow-hidden rounded-full bg-[#1e293b]">
              <div className="h-full w-[63%] rounded-full bg-[#2563eb]" />
            </div>
            <p className="mt-2 text-xs text-[#475569]">
              <span className="font-semibold text-[#3b82f6]">63 spots remaining</span> of 100 · First 100 get free access forever
            </p>
          </div>

          <div className="hidden h-12 w-px bg-[#1e293b] sm:block" />

          {/* Stat: free */}
          <div className="text-center">
            <p className="text-4xl font-bold text-[#3b82f6]">Free</p>
            <p className="mt-1 text-sm text-[#94a3b8]">during early access</p>
          </div>
        </div>
      </FadeInUp>
    </section>
  )
}
```

- [ ] **Step 2: Wire into LandingPage**

Find in `LandingPage`:
```tsx
<HeroSection />
<SolutionSection />
```
Replace with:
```tsx
<HeroSection />
<WaitlistCounterStrip />
<SolutionSection />
```

- [ ] **Step 3: Verify in browser**

The strip should appear immediately below the hero: three items (127 / progress bar / Free) separated by vertical lines on desktop, stacked on mobile.

- [ ] **Step 4: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: add waitlist counter strip section"
```

---

## Task 4: Features section — copy updates

**Files:**
- Modify: `src/app/page.tsx:842-908` (`FeaturesSection`)

- [ ] **Step 1: Update section heading and subtitle**

Find:
```tsx
<h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
  Everything your production needs
</h2>
<p className="mt-4 text-base text-[#94a3b8]">
  Built specifically for live event companies — not a generic ERP.
</p>
```
Replace with:
```tsx
<h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
  Everything your operation needs
</h2>
<p className="mt-4 text-base text-[#94a3b8]">
  Built for companies with physical operations — not a generic ERP.
</p>
```

- [ ] **Step 2: Update BentoCard descriptions**

Find and replace each `description` prop:

**AV Inventory card** — find:
```tsx
description="Real-time stock tracking for all AV equipment. Scan in, scan out, no spreadsheets."
```
Replace with:
```tsx
description="Real-time stock control. Scan in, scan out. Conflicts detected automatically before they happen."
```

**Fleet Management card** — find:
```tsx
description="Track vehicles, assign drivers and monitor routes — all in one place."
```
Replace with:
```tsx
description="Vehicles, drivers and documents. Routes, assignments and expiry alerts in one place."
```

**Projects & Picking card** — find:
```tsx
description="From quote to delivery — manage phases, assign gear and generate picking lists."
```
Replace with:
```tsx
description="From quote to delivery — phases, picking lists and automated equipment assignment."
```

**Team & Roles card** — find:
```tsx
description="Role-based access for Admin, Warehouse and Commercial. Everyone sees what they need."
```
Replace with:
```tsx
description="Admin, Warehouse and Commercial — each sees only what they need."
```

**Reports & Analytics card** — find:
```tsx
description="Utilisation rates, revenue per project and team trends. Decide on real data."
```
Replace with:
```tsx
description="Utilisation rates, revenue per project and team trends. Metrics that matter."
```

**Alerts & Conflicts card** — find:
```tsx
description="Proactive alerts for inventory conflicts, expiring documents and at-risk projects."
```
Replace with:
```tsx
description="Automatic detection of inventory conflicts, expiring documents and at-risk projects."
```

- [ ] **Step 3: Verify in browser**

Features section heading should say "Everything your operation needs". Check each card description.

- [ ] **Step 4: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: update features section copy for broader operational scope"
```

---

## Task 5: New — Corely vs Spreadsheets section

**Files:**
- Modify: `src/app/page.tsx` — add new component + wire into `LandingPage`

- [ ] **Step 1: Add VSSpreadsheets component**

After the closing brace of `HowItWorksSection` and before `// ─── Stats`, add:

```tsx
// ─── VS Spreadsheets ──────────────────────────────────────────────

const vsRows = [
  { feature: 'Real-time inventory control',      sheets: 'Manual, outdated',      corely: 'Automatic' },
  { feature: 'Equipment conflict detection',      sheets: "Doesn't exist",         corely: 'Automatic' },
  { feature: 'Fleet and driver management',       sheets: 'Separate files',        corely: 'Integrated' },
  { feature: 'Document expiry alerts',            sheets: "Doesn't exist",         corely: 'Automatic' },
  { feature: 'Project picking lists',             sheets: 'Made by hand',          corely: 'Auto-generated', sheetsPartial: true },
  { feature: 'Role-based team access',            sheets: "Doesn't exist",         corely: 'Admin / Warehouse / Commercial' },
  { feature: 'Reports and analytics',             sheets: 'Manual, slow',          corely: 'Real time', sheetsPartial: true },
] as const

function VSSpreadsheets() {
  return (
    <section className="border-t border-[#1e293b] bg-[#0a0a0a] py-24">
      <div className="mx-auto max-w-4xl px-6">
        <FadeInUp className="mb-12 text-center">
          <p className="text-sm font-medium text-[#3b82f6]">Corely vs Spreadsheets</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Leave the files behind.
          </h2>
          <p className="mt-4 text-base text-[#94a3b8]">
            Spreadsheets weren&apos;t built to manage live operations. Corely was.
          </p>
        </FadeInUp>

        <div className="overflow-hidden rounded-xl border border-[#1e293b]">
          {/* Header */}
          <div className="grid grid-cols-[2fr_1fr_1fr] border-b border-[#1e293b] bg-[#111111]">
            <div className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#475569]">Feature</div>
            <div className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#475569]">Spreadsheets</div>
            <div className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#3b82f6]">Corely</div>
          </div>

          {/* Rows */}
          {vsRows.map((row, i) => (
            <div
              key={row.feature}
              className={cn(
                'grid grid-cols-[2fr_1fr_1fr] border-b border-[#1e293b] last:border-0',
                i % 2 === 0 ? 'bg-[#0a0a0a]' : 'bg-[#111111]/40',
              )}
            >
              <div className="px-5 py-3.5 text-sm text-[#94a3b8]">{row.feature}</div>
              <div className={cn('px-5 py-3.5 text-sm', 'sheetsPartial' in row && row.sheetsPartial ? 'text-[#f97316]' : 'text-[#475569]')}>
                {'sheetsPartial' in row && row.sheetsPartial ? `~ ${row.sheets}` : `✗ ${row.sheets}`}
              </div>
              <div className="px-5 py-3.5 text-sm font-medium text-emerald-400">
                ✓ {row.corely}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Wire into LandingPage**

Find:
```tsx
<HowItWorksSection />
<StatsSection />
```
Replace with:
```tsx
<HowItWorksSection />
<VSSpreadsheets />
<StatsSection />
```

- [ ] **Step 3: Verify in browser**

Section appears after "How it works". Table has 7 rows, alternating row backgrounds, green checkmarks in Corely column, red/orange X in Spreadsheets column.

- [ ] **Step 4: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: add Corely vs Spreadsheets comparison section"
```

---

## Task 6: FAQ — update first question for broader scope

**Files:**
- Modify: `src/app/page.tsx:1170-1195` (`faqs` array)

- [ ] **Step 1: Update first FAQ item**

Find:
```tsx
{
  q: 'Is Corely built specifically for live events?',
  a: 'Yes. Corely was designed from the ground up for AV production and live event companies. It handles the specific workflows you deal with daily — equipment allocation, fleet logistics, project phases and team roles — without the overhead of a generic ERP.',
},
```
Replace with:
```tsx
{
  q: 'Is Corely only for live event companies?',
  a: 'No. Corely is built for any company with physical operations — production, logistics, warehouse, dock or fleet management. If you manage equipment, vehicles and teams in the field, Corely is for you.',
},
```

- [ ] **Step 2: Update sixth FAQ item (trial)**

Find:
```tsx
{
  q: 'Is there a trial?',
  a: 'Yes — you can start for free with no credit card required. The plan includes full access to all features so you can evaluate Corely with real data before committing.',
},
```
Replace with:
```tsx
{
  q: 'Is there a trial period?',
  a: 'During early access, Corely is completely free — no credit card, no time limit. The first 100 users keep free access forever.',
},
```

- [ ] **Step 3: Verify in browser**

Open FAQ section, expand first and last items to confirm updated copy.

- [ ] **Step 4: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: update FAQ for broader operational scope"
```

---

## Task 7: Final check and cleanup

- [ ] **Step 1: Full visual walkthrough**

With `pnpm dev` running, scroll through the entire page and verify:
- [ ] Hero: split layout on desktop, stacked on mobile, correct copy
- [ ] Waitlist Counter Strip: appears below hero with 127 / progress bar / Free
- [ ] Solution section: unchanged
- [ ] Features: "Everything your operation needs" heading, updated card descriptions
- [ ] How it works: unchanged
- [ ] VS Spreadsheets: table with 7 rows, correct columns
- [ ] Stats: unchanged (already correct)
- [ ] Checklist: unchanged (already "No extra modules. No surprises.")
- [ ] Pricing: unchanged
- [ ] FAQ: first question updated, accordion still works
- [ ] CTA: unchanged (already correct)
- [ ] Footer: unchanged
- [ ] No TypeScript errors in terminal

- [ ] **Step 2: Check for TS errors**

```bash
pnpm tsc --noEmit
```
Expected: no errors.

- [ ] **Step 3: Final commit**

```bash
git add src/app/page.tsx
git commit -m "feat: landing page redesign — hero, two new sections, copy updates"
```
