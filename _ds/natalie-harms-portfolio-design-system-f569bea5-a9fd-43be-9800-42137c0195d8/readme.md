# Natalie Harms — Portfolio Design System

A design system for **Natalie Harms**, an interdisciplinary designer working across
**motion design, graphic design, 3D, branding, and UI**. The brand powers her personal
portfolio website (`portfolio 2026`).

**Aesthetic in one line:** trendy, edgy, *cute-with-an-edge* maximalism — glossy **chrome
3D charms** (crosses, chains, hearts, bows), squishy 3D **mascot characters** (a bunny, a
seal pup, her own avatar), a near-total **black-and-white** palette, and a single **light-pink**
accent. Pixel-degraded romantic serif display meets a whisper-thin grotesque for UI.

> Think: y2k jewelry-store chrome × goth-cute Sanrio × early-web pixel serif.

---

## Sources provided by the user

- `uploads/PORTFOLIO_V1.pdf` — landing-page comp (hero + featured-work grid + contact).
- `uploads/LANDING PAGE_V4@3x.png` — high-res render of the same landing page.
- `uploads/Screenshot 2026-06-28 004150.png` — the official **style guide** (colors + type spec).
- `uploads/1_3D ASSETS/3D PORTRAIT.glb` — the source 3D model of Natalie's avatar (not embedded; reference only).
- `uploads/2_2D ASSETS/*.png` — clean, transparent renders of all chrome charms + characters (the canonical art; copied into `assets/`).

No codebase or Figma file was provided — the system is reconstructed from the comps,
the style guide, and the original PNG/GLB art.

---

## Index / manifest

**Root**
- `styles.css` — global entry point (consumers link this one file). `@import`s only.
- `readme.md` — this file.
- `SKILL.md` — Agent-Skills-compatible entry for downloaded use.

**`tokens/`** — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`

**`assets/`**
- `charms/` — chrome-cross, chrome-heart, chrome-chain-1/2, chrome-chain-horizontal,
  chrome-chain-vertical, bow-white, bow-pink (the y2k jewelry charms).
- `characters/` — bunny (the mascot), seal (the pup), avatar (Natalie's 3D portrait).
- `effects/` — glow-white, glow-pink, glow-dark, glow-pink-checker (radial light blooms).

**`components/`** — reusable React primitives:
- `core/` — **Button** (ghost/primary/accent/chrome capsules), **Tag** (discipline chips),
  **Badge** (counts + status dot), **IconButton** (circular hairline).
- `surfaces/` — **Card** (dark raised surface + portfolio media/work mode).
- _planned:_ brand charms (`Charm`, `Sparkle`), `Avatar`.

**`ui_kits/portfolio/`** — full-screen recreation of the portfolio website.

**`guidelines/`** — foundation specimen cards (Design System tab).

---

## CONTENT FUNDAMENTALS — how the brand writes

The voice is **lowercase, casual, warm, and a little playful** — a designer talking like a
real person, not a studio writing marketing copy.

- **Casing:** almost everything is **lowercase**, including nav and headings
  ("about", "projects", "featured work", "let's talk"). The only Title Case is her **name**
  in the hero. Never ALL CAPS for copy.
- **Person:** first person, intimate. "hi, i'm Natalie Harms", "i'm a designer!",
  "some of my work". Speaks **to** the visitor directly: "scroll to discover", "wanna say hi?".
- **Tone:** friendly, low-pressure, slightly internet. Contractions everywhere
  ("i'm", "let's", "wanna"). Invites collaboration without hard-selling.
- **Punctuation:** sparing. Apostrophes in contractions; the occasional "!" for warmth;
  question marks to open a conversation ("got a project, collab, or just wanna say hi?").
- **Length:** short. Fragments over sentences. Labels are 1–3 words ("motion design",
  "3D design", "ui design", "email", "linkedin", "instagram").
- **Emoji:** **none.** The "cute" energy comes from the 3D charm/character art, not emoji.
- **Examples from the site:**
  - hero: *"hi, i'm Natalie Harms — i'm a designer!"*
  - sub: *"scroll to discover some of my work!"*
  - section: *"featured work"*
  - contact: *"got a project, collab, or just wanna say hi?"* → *"let's talk"*

**Writing checklist:** lowercase · first person · contractions · short fragments ·
no emoji · warm + inviting · let the art carry the edge.

---

## VISUAL FOUNDATIONS

**Color** — A black canvas with white type and one pink accent.
`#0a0a0a` page base, `#1e1e1e` raised surfaces, `#ffffff` text, **`#edbbff`** the light
lilac-pink accent. Pink appears as **glow/light** (radial blooms behind the hero, focus
halos) far more than as fills — it's a *mood*, not a button color. There is **no** secondary
hue; chrome silver is the only other "color," and it's a gradient, not a swatch.

**Type** — Two voices. **Redaction 35** (a pixel-degraded romantic serif) carries all display
and nav, **always set in italic**. On the hero name the initial caps (N, H) are oversized
**Edwardian-style script swash capitals** (`--font-script`) followed by Redaction — the
signature flourish. **Hanken Grotesk** (sub for
*Univers Next Pro Thin*) handles UI + body at **Thin/Light** weights, lowercase, with wide
tracking on small labels. The contrast — ornate glitchy serif vs. clinical thin grotesque —
*is* the brand.

**Backgrounds** — Full-bleed near-black, never flat: a soft **radial gradient** lifts the
center (`glow-dark` / `glow-pink`), so the page feels like a dim room with a spotlight.
3D charm PNGs are **scattered** around hero/contact zones like stickers. No photography,
no repeating patterns except an occasional faint pink checker bloom (`glow-pink-checker`).

**Charms & characters** — The maximalist payload. Glossy **chrome** crosses/chains/hearts
and squishy matte **3D characters** float around headlines at playful rotations, casting
soft black drop-shadows (`--shadow-charm`). They overlap text and bleed off edges. Use them
generously but keep type legible.

**Imagery vibe** — Cool, high-gloss, studio-lit on black. Chrome = mirror-silver with pink/
white highlights. Characters = soft matte white with big glossy anime eyes. Everything reads
**cool-toned, crisp, no grain**.

**Corner radii** — Friendly but not bubbly. Pills/buttons are **full-capsule** (`999px`).
Cards use **16–22px**. Inputs ~10–12px.

**Cards** — Dark raised surface (`#1e1e1e`), **1px hairline white border** at 12% opacity,
generous radius, soft black drop-shadow; **no** colored left-border accents. Media/work
cards are large rounded rectangles, mostly image with a thin frame.

**Borders** — Hairline **white at 8–18% opacity** is the workhorse divider/outline. Accent
borders (pink) only on focus or selected state.

**Shadows & glow** — Two systems: (1) soft **black** drop-shadows for depth on cards/charms;
(2) soft **pink glow** for focus rings, hover halos, and hero lighting. Glow is the "color."

**Hover** — Lighten surface (`#1e1e1e`→`#262626`), brighten border to pink, add a soft pink
glow. Text links go white→pink. Subtle **scale-up (1.02)** with a cute spring ease on
interactive charms/cards.

**Press** — Quick **scale-down (0.97)**, surface darkens, glow tightens.

**Transparency & blur** — Glassmorphism is used sparingly: sticky nav and overlays use
`backdrop-filter: blur(14px)` over a translucent dark fill. Most surfaces are solid.

**Motion** — Smooth and a little springy. Default ease `cubic-bezier(0.16,1,0.3,1)`; cute
interactions use a slight overshoot spring. Entrances **fade + rise**. Charms can drift/float
on a slow loop. Nothing harsh or linear. Respect `prefers-reduced-motion`.

**Layout** — Centered, max ~1320px, generous gutters. Fixed translucent top nav. The hero is
a centered character with display words flanking it; sections stack with lots of breathing
room. Maximalist *decoration*, minimalist *structure*.

---

## ICONOGRAPHY

The brand's "icons" are its **3D chrome charms and character renders**, not a conventional
UI icon set. Approach:

- **Decorative iconography = the PNG charm library** in `assets/charms/` + `assets/characters/`.
  These are real rendered 3D assets (chrome cross, chains, hearts, bows; bunny, seal, avatar).
  **Always copy and place these PNGs** — never redraw them as SVG.
- **Sparkles / stars** — small **4-point sparkles** and 8-point stars appear as accents around
  charms. These are simple geometric shapes; recreate with the `Sparkle` CSS shape / inline
  shapes (acceptable since they're primitive decoration, not brand art).
- **Functional UI icons** (arrows, social, close, menu) — the comps use a **thin line** arrow
  ("scroll" chevron) consistent with the thin grotesque. For UI chrome, use
  **[Lucide](https://lucide.dev)** via CDN at ~1.5px stroke (closest match to the hairline
  aesthetic). *Substitution flagged — no first-party icon font was provided.*
- **Emoji:** not used anywhere.
- **Logo / mascot:** the **bunny head** (`assets/characters/bunny.png`) is used as the
  favicon-scale brand mark in the nav (see landing comp). Pair it with the lowercase wordmark
  "portfolio 2026".

---

## Font substitutions (please confirm / replace)

- **Univers Next Pro Thin → Hanken Grotesk** (Thin/Light). Univers is a commercial Linotype
  family; Hanken Grotesk is the nearest free neutral grotesque with real thin weights.
  *Provide the licensed Univers webfonts to swap in 1:1.*
- **Redaction** is OFL and served from Fontsource CDN. We use grade **35 italic** for all
  display + nav (the refined, legible cut — the brand default). Grade 50 stays available as
  `--font-pixel` for the occasional heavy-glitch moment, but is not the default.
- **Edwardian Script ITC → Mr De Haviland.** The hero name's swash capitals (N, H) use
  Edwardian Script ITC, a commercial Monotype face; **Mr De Haviland** (Google Fonts) is the
  nearest free copperplate-script match. *Send the licensed Edwardian Script ITC webfont to
  swap 1:1.*
