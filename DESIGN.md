# Design Brief — COEP Tech Homepage Redesign

**Purpose**: Premium university homepage redesign inspired by mastersunion.org. Clean, bold, modern institutional aesthetic. White-dominant backgrounds, black text, gold accents. Showcase header ribbon, video hero, announcements ticker, events carousel, news section, impact stats, and footer.

## Color Palette

| Token | Light | Dark | Purpose |
| --- | --- | --- | --- |
| Background | `0.99 0 0` | `0.12 0 0` | Page background, dominant surface |
| Foreground | `0.12 0 0` | `0.95 0 0` | Body text, primary content |
| Card | `1.0 0 0` | `0.165 0 0` | Content containers, panels |
| Primary (Black) | `0.15 0 0` | `0.88 0 0` | Headlines, primary UI, navigation |
| Accent (Gold) | `0.65 0.15 85` | `0.68 0.14 82` | Sparse accents, dividers, hover states |
| Secondary (Grey) | `0.93 0 0` | `0.22 0 0` | Secondary surfaces, inactive states |
| Muted | `0.93 0 0` | `0.22 0 0` | Background tints, footer areas |
| Border | `0.88 0 0` | `0.25 0 0` | Dividers, card edges |
| Destructive | `0.55 0.22 25` | `0.65 0.19 22` | Error/alerts |

**Palette Strategy**: Grayscale foundation (white/black/grey) with gold (#C9A84C ≈ `0.65 0.15 85`) used sparingly for institutional signage, section dividers, hover states, and premium highlights. No purple. Maintains visual clarity and premium institutional feel.

## Typography

| Role | Font | Usage |
| --- | --- | --- |
| Display | DM Sans (700 Bold) | Headlines, section titles, stats numbers |
| Body | DM Sans (400, 500) | Body copy, announcements, descriptions |
| Mono | Geist Mono | Code/technical content (optional) |

**Scale**: 12px → 14px → 16px → 18px → 24px → 32px → 48px → clamp(2.5rem, 8vw, 4rem) for stats. Bold headlines with tight tracking (1.1 line-height), loose body (1.6). Large-scale stats numbers echo mastersunion.org visual hierarchy.

## Structural Zones

| Zone | Treatment | Purpose |
| --- | --- | --- |
| Header/Ribbon | `bg-card` border-b subtle gold | Sticky top ribbon + nav with 8 mega-dropdown categories |
| Hero Video | `bg-secondary` with dark overlay, no video coverage of nav | Aesthetic video section with controlled overlay |
| Announcements | `bg-background` scrolling ticker | Moving announcement marquee |
| Events Carousel | `bg-card` center spotlight + blurred sides | Events with center feature card, small blurred side cards |
| News Section | `bg-background` numbered list (1, 2, 3) + view-more | Vertical numbered news with "View More" |
| Stats Grid | `bg-muted/40` with gold accents | Bold numbers + descriptions, mastersunion.org style |
| Footer | `bg-primary` text-white with gold accents | Standard institutional footer |

## Component Patterns

**Header**: Sticky with gold bottom border (1px accent). Mega-dropdown navigation: 8 categories matching coeptech.ac.in tabs (About Us, Administration, Admissions, Academics, Research, Student Life, Facilities, Placements & Careers).

**Video Hero**: Full-width with subtle dark overlay (rgba 20% opacity), no overlap onto navigation. Below header/ribbon.

**Announcements**: Horizontal scrolling ticker or marquee. Continuous loop of announcement items.

**Events Carousel**: Radix Carousel, 3-visible layout: center card large + spotlight, flanking cards blurred (6px) and scaled (0.92).

**News List**: Numbered items (1, 2, 3) in vertical stack. Gold accent bullets or dividers. "View More" link in gold.

**Stats Section**: Grid of stat blocks. Very large bold numbers (clamp 2.5rem–4rem), light description text below. Gold top border or accent line per stat. Inspired by mastersunion.org "Why" section.

## Motion & Animation

- **Page load**: Sections fade-in-up staggered (0.6s ease-out, 100ms between)
- **Hover**: Cards scale 1.02, shadow elevate (shadow-premium → shadow-premium-hover), gold accent appear/strengthen
- **Carousel**: Active item slides-in (0.4s ease-out), blur/scale transition smooth
- **Ticker**: Continuous scroll loop, pause-on-hover optional
- **Section reveals**: Fade-in-up at 80% viewport trigger

## Spacing & Rhythm

- **Container padding**: 2rem (mobile 1rem)
- **Section gaps**: 4rem between major sections, 2rem between cards
- **Vertical rhythm**: 4px / 8px / 12px / 16px / 24px / 32px increments
- **Card radius**: 10px (0.625rem) throughout
- **Whitespace**: Generous—premium feel over density

## Differentiation

Gold accent system applied sparingly: section dividers, hover states, premium UI highlights. Large-scale stats numbers with generous whitespace echo mastersunion.org luxury. No gradients—clarity through composition. White-dominant layout with black text and gold accent creates distinctive institutional premium aesthetic. Events carousel with center spotlight + blurred sides provides visual rhythm.

## Constraints

- Gold accent max 8-12% of interface (dividers, hovers, highlights only)
- White/grey/black primary palette (no purple, no secondary colors)
- Body text min 14px, stats min 2.5rem (accessibility)
- Mobile-first responsive (sm: 640px, md: 768px, lg: 1024px)
- Light mode primary; dark mode supported with adjusted contrast
- No decorative gradients—focus on composition and typography

