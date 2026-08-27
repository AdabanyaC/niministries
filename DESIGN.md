# Design System: Nelson Iheagwam Ministries
**Project ID:** Local repository `nim@0.1.0`

This is the visual source of truth derived from the rendered website, Tailwind configuration, shared CSS, and component patterns on 2026-08-27.

## 1. Visual Theme & Atmosphere

The site is calm, faith-centered, warm, and editorial. It balances generous pale-blue breathing room with near-black navy anchors, bright white surfaces, and expressive ministry photography. Large, emphatic headings communicate conviction; restrained body copy and spacious layouts keep the tone welcoming rather than institutional.

The design is largely flat and clean. Depth appears selectively through extremely soft shadows, photographic overlays, and two dark glass panels for the vision and mission. Image groups use staggered vertical placement and collage-like arrangements to add energy without introducing decorative clutter.

## 2. Color Palette & Roles

- **Ministry Midnight Navy (`#060640`):** Primary brand color. Use for major headings, primary actions, partnership and footer fields, active segmented controls, and high-emphasis icons.
- **Quiet Ink (`#14142A`):** Softer near-black used for secondary-button text and dark copy that should feel less severe than pure black.
- **Airy Devotional Blue (`#F4FBFF`):** Primary tinted surface for hero regions, page introductions, the newsletter band, and the contact-page field.
- **Pure White (`#FFFFFF`):** Navigation, cards, inputs, secondary actions, and reverse actions on navy fields.
- **Mist Border Blue (`#DBE2FA`):** Fine outline for secondary actions; provides separation without a heavy stroke.
- **Muted Indigo Rule (`#2D295C`):** Occasional divider accent beneath a centered title.
- **Neutral Gray 300 (`#D1D5DB`):** Input strokes and muted pagination surfaces.
- **Neutral Gray 500 (`#6B7280`):** Low-emphasis metadata and “read more” copy.
- **Neutral Gray 900 (`#111827`):** Form-field text when stronger contrast than the default body is needed.
- **Photographic Scrim (`rgba(0, 0, 70, 0.50)` with softer black layers):** Improves white-text contrast over full-bleed ministry photography.

Color usage should remain mostly navy, pale blue, white, and photography. New saturated accent colors should come from meaningful content or platform branding, not general interface chrome.

## 3. Typography Rules

Montserrat is the sole interface family, loaded at weights 400, 500, 700, and 800 with a sans-serif fallback.

- **Hero display:** Extra-bold, compact, and conviction-led. Desktop uses 72px type with a 72px line height; mobile uses 48px with a tight wrap.
- **Page titles:** Bold or extra-bold at roughly 48px on desktop and 30–36px on smaller screens.
- **Section titles:** Extra-bold 36px for major lists; bold 30–36px for content bands and calls to action.
- **Card titles:** Bold 24px.
- **Body copy:** Regular 16px with a 24px line height. Introductory copy may rise to 20px.
- **Labels and metadata:** Bold or semibold 14px; supporting channel prompts may use italic 14px.

Headings use the ministry navy on light surfaces and white on photographic or navy fields. Long ministry descriptions are often justified; concise supporting text stays naturally aligned. Maintain strong weight contrast instead of relying on multiple font families.

## 4. Component Stylings

* **Buttons:** Primary actions are Ministry Midnight Navy with white text, generous horizontal padding (40px desktop), and softly rounded 16px corners. Navigation actions are fully pill-shaped. Secondary actions are white with Quiet Ink text and a fine Mist Border Blue outline. Reverse actions on navy fields are white with navy text. Arrow and chevron icons reinforce direction; keep them visually small and vertically centered.
* **Cards/Containers:** Standard content cards are white with 16px corners and a whisper-soft violet-tinted shadow (`-9.39px 9.39px 28.17px 10.33px rgba(74, 34, 179, 0.05)`). Featured cards and glass panels use more generous 24px corners. The navigation surface uses subtler 6px corners and an almost imperceptible navy shadow (`6px 4px 30px rgba(6, 6, 64, 0.02)`).
* **Inputs/Forms:** Inputs are white with thin Neutral Gray 300 strokes, 16px corners, 14px text, and comfortable 12–20px internal spacing. Search and segmented controls are pill-shaped. Labels are bold 14px and sit closely above fields. Focus treatment should use the ministry navy with an accessible visible ring.
* **Image Treatments:** Hero photography appears in three narrow portrait cards with 12px corners and staggered vertical offsets. Supporting photography is often full-width or assembled into a tight four-image collage. Full-bleed portraits receive a restrained navy-black scrim when white text overlays them.
* **Navigation:** A white, padded horizontal container floats on the pale-blue page field. Desktop navigation centers the primary text links between the logo and pill CTA. Mobile collapses to a menu icon and a separate stacked white panel.
* **Calls to Action:** Partnership and footer regions use full-width navy fields with white copy. Newsletter regions use the pale-blue surface with a large title and horizontally paired email field and action at desktop widths.
* **Status Indicators:** Loading uses a 48px circular spinner with a pale gray track and ministry-navy fill. Success states combine a compact illustration, navy title, and brief supporting copy.

## 5. Layout Principles

The layout is mobile-first and switches to its primary desktop compositions at the Tailwind `lg` breakpoint (1024px). The `md` breakpoint (768px) is used sparingly for imagery and button details.

- Use 16px page gutters on mobile and 112px gutters on large screens.
- Separate major homepage bands with approximately 128px of vertical space.
- Use 48–80px internal padding for prominent desktop bands and 16–48px on mobile.
- Compose most informational sections as balanced two-column layouts with 80px gaps, collapsing into a single column on mobile.
- Keep readable text measures constrained: hero copy occupies roughly three-quarters of its half-column; page introductions cap near 725–892px; cards cap near 420px.
- Use flex wrapping for event and sermon grids rather than dense multi-column tables.
- Favor deliberate asymmetry in image placement while keeping headings and copy aligned to a clear grid.
- Center only page-level statements, compact introductions, and pagination; narrative content remains left-aligned or justified.

When extending the site, preserve its spacious rhythm, strong navy hierarchy, light surfaces, rounded geometry, and photography-first storytelling. Avoid dense dashboards, harsh shadows, tight grids, or decorative gradients unrelated to the existing photographic overlays.

## 6. Motion

Motion should make the site feel composed and responsive without competing with ministry content. Event heroes use a short staggered rise-and-fade, followed by a restrained media entrance. Lower sections reveal once as they enter the viewport. High-priority conversion actions may use a brief, gently repeating pulse with a generous pause. Keep each movement under one second, use smooth deceleration, avoid continuous decorative motion, and disable non-essential animation for `prefers-reduced-motion: reduce`.
