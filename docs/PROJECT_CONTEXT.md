# Nelson Iheagwam Ministries: Project Context

This document is the durable technical overview for maintainers and coding agents. It describes the repository as inspected on 2026-08-27. Update it when routes, integrations, architecture, or core workflows change.

## Product purpose

The site is the public web presence for Nelson Iheagwam Ministries (NIM). It introduces the ministry and its lead, promotes events and sermons, accepts contact and booking requests, and directs visitors to giving and media platforms.

## Technology

- React 18 rendered from `src/index.js`.
- Create React App / `react-scripts` 5 for development, testing, and production builds.
- React Router 6 for client-side routing.
- React Hook Form and Zod for configuration-derived form state and runtime validation.
- GSAP for event-page entrance and scroll-reveal motion.
- Tailwind CSS 3 plus a small set of shared rules in `src/index.css`.
- Axios for browser-side HTTP requests.
- Jest and React Testing Library through Create React App.
- Static photography, SVG compositions, icons, and illustrations under `src/assets`.
- Node.js `24.x` is declared in `package.json` for local tooling and Vercel builds.

The tracked dependency lock is `package-lock.json`, so npm is the canonical package manager.

## Runtime shape


`src/index.js` mounts `App` in React strict mode. `src/App.js` wraps the application in `BrowserRouter` and selects one route-level container. Containers compose reusable components; API-backed components load normalized public content through `src/services/contentApi.js` in `useEffect` hooks.

There is no application-wide state store, authentication layer, server-side rendering, or local backend in this repository. State is local to each component.

## Routes

| Route | Container | Responsibility |
| --- | --- | --- |
| `/` | `Home` | Hero, events, vision and mission, sermons, partnership, newsletter, and footer |
| `/about-us` | `AboutUs` | Ministry statement, identity, lead profile, partnership, newsletter, and footer |
| `/resources` | `Resources` | Latest sermon, sermon listing, search shell, pagination shell, and media links |
| `/meet-pni` | `MeetPNI` | Full-bleed lead profile hero, social links, biography, and booking CTA |
| `/contact-us` | `ContactUs` | Toggle between general contact and ministry booking forms |
| `/event/:slug` | `EventPage` | JSON-driven event landing page, details, media, and configurable registration form |

`Navbar` and `Footer` are composed into pages rather than supplied by a shared route layout.

## Main component groups

- Navigation and framing: `Navbar`, `Footer`.
- Homepage presentation: `Hero`, `Events`, `About`, `GetEdified`.
- About presentation: `WhoWeAre`, `AboutOurLead`.
- Reusable content UI: `Card`, `Caption`, `CaptionAlt`, `LatestSermonCard`, `Buttons`, `AsyncState`.
- Conversion sections: `PartnershipCTA`, `NewsletterCTA`.
- Contact workflow: `ContactInformation`, `ContactForm`, `BookPNI`.
- Resource controls: `SearchInput`, `Pagination`.
- Event workflow: `EventPage`, modular hero/details/media components under `src/components/event`, `EventRegistrationForm`, the portable renderer under `src/components/dynamic-form`, and Shadcn UI primitives under `src/components/ui`.

## External services and data flow

The browser calls two Render-hosted services directly:

- Content API: `https://nim-backend-zwlf.onrender.com/api`
  - `/events?sort=publishedAt:desc`
  - `/sermons?sort=createdAt:DESC&pagination[...]`
  - `/about-the-lead`
- Mailing API: `https://nim-mailing-service.onrender.com/api/v1/email`
  - `POST /contact-us`
  - `POST /book-pni`

Other outbound destinations include the Flutterwave giving short link, podcast and video platform URLs returned by the content API, ministry social profiles, and a `mailto:` contact link.

`src/services/contentApi.js` centralizes these content endpoints and normalizes both legacy Strapi records with an `attributes` object and the current flattened record shape. API-backed views provide loading, empty, and error states. Forms send JSON directly from component state and replace the form with a success message when the response contains a truthy `status`.

Event pages load at runtime from `public/data/events/<slug>.json` through `src/services/eventService.ts`. Event copy, date and venue, media, playback flags, calls to action, registration fields and messages, both submission destinations, form theme, and page-specific SEO are defined in the event JSON.

`EventRegistrationForm` is a thin host adapter around the reusable TypeScript `FormRenderer`. React Hook Form owns field state and unregistration, while a visibility-aware Zod schema validates only mounted fields. `src/services/eventRegistrationService.ts` submits the same event-enriched payload to the optional API and required Google Apps Script destination concurrently. Google Apps Script success is the registration success condition; an API failure is returned as a non-blocking result. Endpoint headers must not contain secrets because this configuration is public and delivered to the browser.

## Styling and assets

Tailwind scans `src/**/*.{js,jsx,ts,tsx}`. The custom Tailwind theme defines the core ministry navy as `blue` and the main dark text as `blackalt`. `src/index.css` sets Montserrat globally and contains four shared effects: dark glass panels, card shadow, navigation shadow, and the split contact-page background.

The detailed visual language and reuse rules are in the repository-root `DESIGN.md`. New event UI uses locally owned Shadcn components configured by `components.json` and customized with the ministry color and geometry tokens. Event motion is scoped to the event page, reveals content progressively, and is disabled when the visitor requests reduced motion.

## Search and crawler discovery

The canonical production origin is `https://www.niministries.org`. Static crawler assets live in `public/`: `sitemap.xml` lists every public route, `robots.txt` advertises the sitemap, and `llms.txt` describes the site and its key pages for LLM-oriented discovery.

`public/index.html` contains the crawl-safe default description, canonical URL, Open Graph, X/Twitter card, and Organization structured data. `src/components/Seo.jsx` updates titles, descriptions, canonical URLs, and social metadata when the SPA route changes. The shared social image is the optimized JPEG `public/og-image.jpg` (1200 × 630). Because the site is a client-rendered SPA, non-JavaScript social crawlers receive the default site-wide preview on every route; route-specific previews for those crawlers would require deployment-level prerendering or server rendering.

## Current behavior gaps and technical debt

These are baseline observations, not changes made by this context setup:

- Resource search is presentational only.
- Pagination number clicks refetch sermon pages; Prev and Next still have no handlers.
- Newsletter subscription is presentational only.
- Some source SVGs are very large and slow Babel processing during development.
- The app has no catch-all route or explicit not-found page.

## Safe maintenance workflow

1. Read `AGENTS.md`, this file, and `DESIGN.md` for the area being changed.
2. Use `npm ci` when a clean dependency install is needed.
3. Run locally with `npm start` and exercise affected routes at mobile and desktop widths.
4. Run `npm run build` and relevant tests.
5. Update this context when the resulting system no longer matches the overview above.
