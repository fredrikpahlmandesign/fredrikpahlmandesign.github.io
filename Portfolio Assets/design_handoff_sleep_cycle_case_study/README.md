# Handoff: Sleep Cycle — Premium & Trial Case Study Page

## Overview
A long-form, scroll-based **portfolio case study page** documenting a Sleep Cycle
subscription/monetisation project (trial-model redesign, onboarding/activation,
paywall & trial-lifecycle messaging, plus motion direction). It lives inside a
personal designer portfolio ("Fredrik Påhlman — Design & Product") and follows
the site's **"Editorial Index"** art direction: warm paper background, a
Newsreader serif for display, a clean grotesque for body, a single terracotta
accent, and alternating light / dark / teal full-bleed bands for rhythm.

## About the Design Files
The files in this bundle are **design references created in HTML** — a prototype
showing the intended look, structure, and behavior. **They are not production
code to ship directly.** The task is to **recreate this design in the target
codebase's existing environment** (e.g. the portfolio's framework — Next.js/React,
Astro, plain HTML/CSS, etc.) using its established components, tokens, and
patterns. If no environment exists yet, pick the most appropriate stack for a
content/portfolio site (a static-site generator or React framework) and implement
there. Reuse the codebase's existing type ramp / color tokens where equivalents
exist rather than hard-coding these values blindly.

## Fidelity
**High-fidelity (hifi).** Final colors, typography, spacing, layout, and the
motion treatment are all specified below and visible in the HTML. Recreate the UI
to match. Two content caveats:
- **Body copy is DRAFT.** It is grounded in the real project (trial models,
  paywall lifecycle, discovery) but the client/owner will replace wording.
- **Metrics are PLACEHOLDERS.** The "In short" tiles render `—` and are marked
  `+ add your number`. Wire them as a small data structure so real figures
  (trial→paid, retention, ARPU, activation) drop in later.

---

## Design Tokens

### Color
| Token | Hex | Use |
|---|---|---|
| `--paper` | `#f4efe6` | Page background (warm off-white) |
| `--paper-2` | `#ece5d8` | Alternate band bg (In short, Outcome, Next/footer) |
| `--ink` | `#211d17` | Primary text |
| `--soft` | `#6d6457` | Secondary text, captions, labels |
| `--line` | `#ddd4c4` | Hairline borders / dividers |
| `--accent` | `#bd5a35` | Terracotta — kickers, links/hover, emphasis, metric outlines |
| `--accent-ink` | `#8f3f22` | Darker terracotta for metric numerals |
| `--dark` | `#13110d` | Dark full-bleed band (Motion section) |
| `--teal` | `#0d2a2e` | Deep-teal full-bleed band (Strategy section) |
| `--teal-2` | `#10353a` | Teal accent (reserved) |

On dark/teal bands: headings `#fff`, body `#c7c0b2` (dark) / `#b7c9c4` (teal),
kicker/accent `#e7a07f`, captions `#8f897c`.

### Typography
Google Fonts: **Newsreader** (serif display, opsz 6–72, wght 400/500/600),
**Hanken Grotesk** (sans body, 400/500/600/700), **Space Mono** (mono labels, 400/700).

| Role | Family | Size | Weight | Line / Tracking |
|---|---|---|---|---|
| H1 (hero) | Newsreader | `clamp(40px, 6.4vw, 82px)` | 500 | 1.02 / -0.015em; `<em>` italic + accent |
| H2 (section) | Newsreader | `clamp(28px, 3.8vw, 46px)` | 500 | 1.08 / -0.01em; max-width 18ch |
| H3 | Newsreader | 24px | 500 | — |
| Hero thesis | Hanken Grotesk | `clamp(19px, 2.1vw, 24px)` | 400 | 1.45; max-width 30ch |
| Lead paragraph (`.lead-p`) | Hanken Grotesk | 21px | 400 | color `#332f27`; max-width 54ch |
| Body | Hanken Grotesk | 18px | 400 | 1.6; max-width 64ch |
| Kicker / labels / captions | Space Mono | 11–12px | 400 | uppercase, letter-spacing .10–.16em |
| Metric numeral | Newsreader | 40px | 500 | color `--accent-ink` |

### Spacing & layout
- Content container `.wrap`: `max-width: 1080px; padding: 0 32px`.
- Wide container `.wrap-wide` (full-bleed figures): `max-width: 1320px; padding: 0 32px`.
- Section vertical padding: `72px`. Hero copy top padding `74px`.
- Meta bar / In-short / Outcome use the band background `--paper-2`.
- Responsive breakpoint: **880px** (multi-col grids collapse to 1 col; sticky
  becomes static; device grid 3→2 col; H1 shrinks to `clamp(36px,10vw,56px)`).

### Radius / shadow
- Device frame radius `20px`; figures/images `14px`; metric tile `14px`;
  motion video wrapper `18px`; pill `30px`.
- Floating angled device shadow: `drop-shadow(0 30px 50px rgba(0,0,0,.45))` on
  dark bands; `drop-shadow(0 24px 40px rgba(0,0,0,.22))` on paper.

---

## Screens / Views (sections, top → bottom)

### 0. Sticky top nav
- Flex space-between; bg `--paper` @88% + `backdrop-filter: blur(10px)`; bottom
  hairline `--line`; padding `16px 32px`.
- Left: "← All work" (Space Mono 12px uppercase, `--soft`, hover `--accent`).
- Right: circular monogram "FP" (34px, 1.5px `--ink` border, Newsreader).

### 1. Hero
- `.wrap` copy block: eyebrow (two mono labels — "Sleep Cycle · 2024–25" in
  accent, "Subscription & Growth" in soft), H1 with `<em>Premium</em>`, thesis.
- Full-bleed cover image **below** copy: `height: min(62vh, 620px)`,
  `object-fit: cover; object-position: center 32%`. Asset: `hero-dream.png`.

### 2. Meta bar
- 5-col grid (`repeat(5,1fr)`, gap 24), top+bottom hairlines, padding `30px 0`.
- Cells: Role / Team / Timeline / Platform / My focus. Label = mono 11px;
  value = 16px weight 500.

### 3. In short  *(band `--paper-2`)*
- 2-col grid `1.1fr .9fr`, gap 48.
- Left: kicker "In short", a `.lead-p`, a soft paragraph.
- Right: `.metrics` 2×2 grid of dashed terracotta tiles. Each tile: numeral `—`
  (Newsreader 40px, accent-ink), mono label, mono "+ add your number".
  Below: draft note `▢ Draft copy & placeholder metrics…`.

### 4. 01 — The problem
- `.wrap`: kicker "01 — The problem", H2, lead-p, body.
- `.wrap-wide` full-bleed figure: `ost-board.jpg` (discovery OST photo), radius
  14, mono figcaption.

### 5. 02 — The strategy  *(band `--teal`)*
- `.wrap`: kicker, H2 "Three models, one flexible spine", lead-p.
- `.wrap-wide` full-bleed figure: `growth-models.png` (3-model diagram), figcaption.
- `.two` (2-col): left H3 + body ("From wall to doorway"), right floating device
  `onb-trial-start.png` (`.float-dev`, max-width 380, centered) + caption.

### 6. 03 — Onboarding & activation
- `.sticky` grid `.82fr 1.18fr`, gap 56.
- Left `.pin` (`position: sticky; top: 96px`): kicker, H2, two paragraphs.
- Right `.flowcol` (column, gap 42): three steps, each = mono stepnum +
  `.device` cropped frame + centered mono caption.
  - Step 01 Goals → `onb-goals.png`
  - Step 02 Momentum → `onb-journey.png`
  - Step 03 Honest prime → `att-priming.png`

### 7. Motion band  *(band `--dark`)*
- `.wrap`: pill "▣ Motion · autoplay · loops", kicker "The feel", H2, lead-p.
- `.wrap-wide` figure: `<video>` `sequence.mp4`, `autoplay muted loop playsinline`,
  `poster="motion-texture.png"`, wrapper radius 18, figcaption.

### 8. 04 — Paywall & trial lifecycle
- `.wrap`: kicker, H2, lead-p.
- `.feature-lead` 2-col `.95fr 1.05fr`: left floating device `paywall-hero.png`
  (max-width 420), right two H3+body blocks ("Lead with the outcome", "Then show
  the substance").
- `.devgrid3` (3-col cropped devices): `paywall-features.png`, `trial-halfway.png`,
  `trial-ends.png`, each with caption.
- `.two`: left floating device `downgrade-free.png` (max-width 360), right H3+body
  ("Even the downgrade is a moment").

### 9. 05 — Outcome & reflection  *(band `--paper-2`)*
- Kicker, H2, lead-p, soft paragraph with `▢ Replace with real results` note.

### 10. Next / footer  *(band `--paper-2`)*
- `.nextrow` space-between: "Next project" label + big Newsreader link
  "[ Project Two ] →"; mono "← All work".
- `.site-foot`: name left, "LinkedIn · Read.cv · Email" right (mono 11px uppercase).

---

## Interactions & Behavior
- **Smooth scroll** (`html { scroll-behavior: smooth }`).
- **Nav back link** hover → color transitions to `--accent` (.2s).
- **Sticky narrative**: the onboarding left column pins (`top: 96px`) while the
  device column scrolls; collapses to static below 880px.
- **Motion video**: muted autoplay loop, `playsinline`; poster image is the
  reduced-motion / load fallback. Honor `prefers-reduced-motion` by pausing/
  showing the poster if you add JS.
- **Device cropping**: source phone mockups are transparent PNGs with large empty
  margins. `.device` crops them to a phone aspect via
  `aspect-ratio: 48/100; overflow:hidden; img { object-fit:cover; object-position:center }`.
  Angled mockups use `.float-dev` (uncropped, drop-shadow) instead.
- **Responsive**: single breakpoint at 880px (see tokens).

## State Management
Essentially static content. Only dynamic piece to plan for:
- **Metrics**: model the In-short tiles as `{ value, label }[]` so real numbers
  replace the `—` placeholders. Everything else is presentational.

## Assets
All in `assets/` (copied here). Original upload names in parentheses.

| File | Original | Used in |
|---|---|---|
| `hero-dream.jpg` | pillow 4.png | Hero cover (optimised, 1500×2250 JPEG) |
| `ost-board-opt.jpg` | OST apr 14.JPG | Problem — discovery photo (optimised, 1700×1133) |
| `growth-models.png` | Growth models.png | Strategy diagram, transparent (2770×1236) |
| `onb-trial-start.png` | mockrocket-capture 0.png | Strategy — reverse-trial device (angled) |
| `onb-goals.png` | mockrocket-capture1.png | Onboarding step 1 (straight) |
| `onb-journey.png` | mockrocket-capture 1.png | Onboarding step 2 (straight) |
| `att-priming.png` | mockrocket-capture2.png | Onboarding step 3 (straight) |
| `sequence.mp4` | Sequence 01_2.mp4 | Motion band video |
| `motion-texture.png` | Animation 36.png | Motion band poster |
| `paywall-hero.png` | mockrocket-capture paywall.png | Paywall feature lead (angled) |
| `paywall-features.png` | mockrocket-capture3.png | Paywall grid (straight) |
| `trial-halfway.png` | mockrocket-capture 7.png | Lifecycle grid (straight) |
| `trial-ends.png` | mockrocket-capture.png | Lifecycle grid (angled) |
| `downgrade-free.png` | mockrocket-capture 14.png | Downgrade (angled) |
| `campaign.png` | AE Campaign 5 toes.png | Spare brand image (not placed) |
| `bed-window.png` | paywall image bed and window.png | Spare brand image (not placed) |

> Several mockups are still heavy phone PNGs. **Optimise before production**
> (the hero & OST photos are already downscaled; do the same for the phone
> mockups — serve WebP/AVIF, `loading="lazy"` is already set on below-fold
> images). The phone mockups should ideally be re-exported tightly cropped so
> the `.device` crop hack is no longer needed.

## Files
- `Sleep Cycle Case Study.html` — the complete hi-fi prototype (single file, all
  CSS inline). This is the source of truth for layout, tokens, and copy.
- `assets/` — all images + the motion video.
- `screenshots/` — rendered reference of every section (see below).

## Screenshots (reference renders)
In `screenshots/`, one per section, top → bottom:

| File | Section |
|---|---|
| `01-section.png` | Hero |
| `02-section.png` | In short (outcome-first metrics) |
| `03-section.png` | 01 — The problem |
| `04-section.png` | 02 — The strategy (teal band, 3-model diagram) |
| `05-section.png` | 03 — Onboarding & activation (sticky narrative) |
| `06-section.png` | Motion band (dark) |
| `07-section.png` | 04 — Paywall & trial lifecycle |
| `08-section.png` | 05 — Outcome & reflection |

## Broader context (optional)
This page is one screen of a larger portfolio redesign. Two low-fi wireframe
documents define the surrounding direction if useful:
- `Portfolio Wireframes.html` — 3 site directions; **Direction A "Editorial
  Index"** is the chosen one (this case page is built in its language).
- `Case Study Wireframes.html` — the reusable case-study template + "many-screen"
  and "motion" content-block patterns this page instantiates.
They are references for intent only, not for implementation.
