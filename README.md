# Valantai

Production platform for the Valantai institution. An operating institution for ambitious companies. Built by operators. Accelerated by AI.

---

## Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | Next.js 14 App Router | Server components by default; zero-config Vercel deploy |
| Language | TypeScript (strict) | Content types enforced; component contracts explicit |
| Styles | Tailwind CSS + globals.css utilities | Tokens in tailwind.config.ts; complex clamp() in @layer utilities |
| Animation | Framer Motion (restrained) | Scroll-triggered arrivals; V-mark hover; engagement rotation |
| Scroll | Lenis | Smooth wheel scroll; respects prefers-reduced-motion |
| Fonts | next/font/google (upgrade path to Klim) | Zero layout shift; documented swap path |
| Deploy | Vercel | Zero config; Edge Network; env var management |

---

## Setup

```bash
# 1. Install dependencies
npm install

# 2. Set environment variables
cp .env.example .env.local
# Edit .env.local — no values required for basic local dev

# 3. Run dev server
npm run dev
# → http://localhost:3000

# 4. Type check
npm run type-check

# 5. Production build
npm run build && npm run start
```

Node 18.17+ required.

---

## Project structure

```
app/                        Next.js App Router pages
  layout.tsx                Root — fonts, Lenis, Header, Footer, GridLines
  page.tsx                  Homepage — composes all zones
  globals.css               Tailwind directives + fluid typography utilities
  fonts.ts                  next/font registration + commercial swap path
  engage/
    page.tsx                Engage page (server)
    EngageForm.tsx          Form + filed state (client)
  intelligence/
    page.tsx                Dossier index
    [slug]/page.tsx         Individual dossier
  operators/
    [slug]/page.tsx         Operator profile
  platform/risk/
    page.tsx                Risk Engine page
  solutions/
    page.tsx                Solutions index

components/
  system/                   Layout infrastructure (server unless noted)
    Header.tsx
    Footer.tsx (client)
    GridLines.tsx
    LenisProvider.tsx (client)
    PrimaryNav.tsx (client)
    StatusNode.tsx (client)
  primitives/               Reusable building blocks
    ArrivalWrapper.tsx (client) ← wraps any element for scroll reveal
    EngagementBlock.tsx     Universal page close
    MetadataBlock.tsx       Definition list for institutional proof
    PageHero.tsx (client)   Interior page hero with live doc reference
    SectionHead.tsx         Universal section opener
    StatusTag.tsx           Engagement status with colour hierarchy
  solutions/
    VMarks.tsx              Six architectural V-mark SVGs
  zones/                    Homepage section components
    OpeningZone.tsx (client)
    ThesisZone.tsx
    EngagementsZone.tsx (client) ← live rotation
    SolutionsZone.tsx
    IntelligenceZone.tsx
    PartnersZone.tsx
  risk/
    RiskEngineForm.tsx (client) ← full diagnostic instrument

content/                    Typed data — the CMS layer
  engagements.ts            Ledger pool + initial 6 rows
  solutions.ts              Six solutions with long-form copy
  operators.ts              Three founding partners with bios
  intelligence.ts           Four intelligence systems
  riskDomains.ts            Twelve domains + full intake questionnaire
  dossiers/index.ts         Published intelligence dossiers

lib/
  motion.ts                 ALL Framer Motion variants (single source of truth)
  scoring.ts                Risk Engine scoring — pure functions, no UI
  utils.ts                  cn(), gmtTime(), generateDocRef(), etc.
```

---

## Design system

### Colour tokens (tailwind.config.ts)

| Token | Hex | Usage |
|---|---|---|
| `bg` | #0A0A09 | Page background |
| `bg-2` | #0E0E0C | Raised surfaces, hover backgrounds |
| `ink` | #F2EEE6 | Primary text — headlines, strong content |
| `ink-strong` | #ADADA0 | Confident body — nav, metadata values, italic fragments |
| `ink-2` | #8A8A82 | Secondary text — descriptions, table cells |
| `ink-3` | #5A5A52 | Tertiary — metadata labels, quiet annotations |
| `ink-4` | #3A3A35 | Whispered — decorative codes, dividers |
| `hairline` | #1A1A18 | Section borders, table rules |
| `hairline-2` | #25241F | Fine dividers, input underlines |
| `accent` | #8A7352 | Oxidised gold — 4 uses: deployed status, active nav mark, radar dot, selection |

### Typography (app/globals.css @layer utilities)

Use the typography utility classes:

```tsx
// Headlines
<h1 className="t-manifesto text-ink">...</h1>   // hero — clamp 2.3→9.3rem
<h1 className="t-display text-ink">...</h1>     // interior hero
<h1 className="t-display-profile">...</h1>      // sentence case profile pages

// Editorial
<p className="t-lead text-ink">...</p>           // serif body — main prose
<p className="t-prose-fluid text-ink">...</p>    // same, more fluid
<p className="t-keyline text-ink">...</p>        // bold sans statement

// Mono system labels
<span className="t-label text-ink-3">SECTION A</span>   // eyebrow
<span className="t-caption text-ink">SUBMIT →</span>    // button labels
<span className="t-micro text-ink-4">VLT/2026/05</span> // footer marks
```

### Upgrading to commercial fonts

1. License Söhne and Tiempos Text from [klim.co.nz](https://klim.co.nz)
2. Place files in `/public/fonts/`
3. Edit `app/fonts.ts` — swap `next/font/google` for `next/font/local`
4. Keep variable names `--font-sans`, `--font-serif`, `--font-mono`
5. Nothing else changes

---

## Motion system

All variants live in `lib/motion.ts`. **Do not define animations in components.**

```tsx
// Standard scroll-triggered arrival (use for any section)
<ArrivalWrapper>
  <SectionHead ... />
</ArrivalWrapper>

// With delay (for staggered elements within a section)
<ArrivalWrapper delay={0.2}>
  <MetadataBlock ... />
</ArrivalWrapper>

// Opacity-only (no vertical movement)
<ArrivalWrapper variant="fade">
  <p>...</p>
</ArrivalWrapper>
```

Three classes of motion — do not introduce others:
- **Arrival** — `fadeUp` / `fadeIn` / `manifestoLine` — scroll-triggered, once, 760ms
- **Reactive** — hover states via Tailwind `transition-colors duration-reactive`
- **Ambient** — radar pulse on the homepage hero only

---

## Content management

All page content is in `/content/` as typed TypeScript modules. Edit the data to update the page — no component changes required.

| File | Controls |
|---|---|
| `content/engagements.ts` | Ledger pool + the 10-entry rotation set. `TOTAL_ACTIVE_MANDATES` drives the header counter. |
| `content/solutions.ts` | Six solutions — names, descriptions, long copy, V-mark variant |
| `content/operators.ts` | Three founding partners — bios, metadata, past engagements |
| `content/intelligence.ts` | Four intelligence systems — names, copy, metadata |
| `content/riskDomains.ts` | Twelve risk domains + all 13 intake questions + scoring weights |
| `content/dossiers/index.ts` | Published dossiers — add a new object to publish |

### Migrating to a headless CMS

The content layer is structurally decoupled — swap the TypeScript imports for API calls without touching components.

**Recommended: Sanity**
- Best structural match for this content model
- Portable Text for dossier body copy
- Real-time preview works with Next.js App Router

**Migration path:**
1. Create Sanity schemas matching the TypeScript interfaces
2. Add `NEXT_PUBLIC_SANITY_PROJECT_ID` and `SANITY_API_TOKEN` to `.env.local`
3. Replace `import { solutions } from '@/content/solutions'` with a Sanity query
4. Components stay identical

---

## Adding pages

All interior pages follow the same pattern:

```tsx
// 1. Add metadata
export const metadata: Metadata = { title: 'Page title' };

// 2. Start with PageHero
<PageHero index="..." title="..." subtitle="..." refPrefix="VLT · XXX" />

// 3. Compose content sections with ArrivalWrapper
<ArrivalWrapper as="section" className="zone-pad">
  <SectionHead title="..." counter="..." />
  {/* content */}
</ArrivalWrapper>

// 4. Close with EngagementBlock
<EngagementBlock />
```

---

## Deployment

### Vercel (recommended)

```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Deploy
vercel

# 3. Production deploy
vercel --prod
```

Environment variables set in Vercel dashboard → Settings → Environment Variables.

No `vercel.json` required for standard Next.js App Router deployment.

### Manual (Docker or Node server)

```bash
npm run build
npm run start
# Runs on :3000
```

---

## Future: imagery integration

The layout has three natural integration points for commissioned documentary photography:

**1. Spatial pacing zone (homepage, between Engagements and Solutions)**
- Insert a `<figure>` with `next/image` — full viewport width, fixed height ~40vh
- Image should feel: architectural, infrastructural, operational
- Not: glossy, staged, stock

**2. Intelligence Systems (between I/03 and I/04)**
- A narrow full-width band — logistics, port, or enterprise environment imagery
- `object-position: center 30%` for most operational photography

**3. Operator profile pages**
- Portrait placeholder already in place — `aspect-ratio: 4/5`, replace with `<Image />`
- FT Weekend / Avedon register: monochrome, editorial, high contrast

When adding:
```tsx
import Image from 'next/image';

// In your zone:
<div className="relative h-[40vh] w-full overflow-hidden">
  <Image
    src="/images/infrastructure-01.jpg"
    alt="[descriptive alt]"
    fill
    className="object-cover object-center"
    priority={false}
  />
</div>
```

Add CDN domain to `next.config.js` `remotePatterns` when images are served from a CDN.

---

## Performance

Current architecture is optimised for Lighthouse scores out of the box:

- **Server components by default** — only interactive components are client
- **next/font** — zero layout shift for typography
- **Static generation** — all pages with `generateStaticParams` are pre-rendered at build time
- **No runtime CSS** — Tailwind purges unused classes at build
- **Lenis respects prefers-reduced-motion** — no animation overhead for accessibility users
- **Engagement rotation interval** — 22s; skipped entirely with reduced motion

For further optimisation when scale demands:
- Enable Next.js Image optimization for commissioned photography
- Add `<link rel="preconnect">` for any third-party origins
- Consider Partial Prerendering (PPR) when Next.js 15 is stable

---

## The institution

This codebase should feel like the institution it serves.

Every page is another document inside the same operating institution. If a page looks like a startup landing page, a SaaS dashboard, or an agency brochure — it has failed. If it feels calm, operational, expensive, and real — it has succeeded.

`hello@valantai.com`
