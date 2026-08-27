# Repository guidance for Codex

## Purpose and sources of truth

- This repository contains the Nelson Iheagwam Ministries public website.
- Read `docs/PROJECT_CONTEXT.md` before making architectural, routing, data-flow, or integration changes.
- Read `DESIGN.md` before changing layout, styles, components, typography, colors, or imagery.
- Keep those documents current when a change makes their description inaccurate.

## Toolchain and setup

- Use Node.js with npm. `package-lock.json` is the tracked lockfile and is authoritative.
- Install reproducibly with `npm ci`.
- Run the local site with `npm start`.
- Run the production build with `npm run build`.
- Run non-interactive tests with `npm test -- --watchAll=false`.
- Do not run `npm run eject`; it is destructive and intentionally unsupported.

## Code conventions

- Keep route-level pages in `src/containers` and reusable UI in `src/components`.
- Define top-level routes in `src/App.js` with React Router v6.
- Prefer Tailwind utility classes for component styling. Put only genuinely shared or non-utility rules in `src/index.css`.
- Reuse the semantic colors and component patterns documented in `DESIGN.md`; avoid introducing one-off colors or geometry without updating the design system.
- Use React JSX attributes (`className`, `htmlFor`, camel-cased SVG attributes) rather than raw HTML attributes.
- Preserve the existing responsive approach: mobile-first base styles with `md:` and `lg:` enhancements.
- Keep external service URLs centralized or configurable when adding new integrations. Never commit credentials or secrets.

## Change discipline

- Preserve user changes and keep edits scoped to the request.
- Avoid adding dependencies when the platform or existing dependencies already cover the need.
- When changing API-backed views, account for loading, success, empty, and error states.
- When changing shared UI, verify at both mobile and desktop widths.

## Validation

- For application changes, run `npm run build` and the most relevant tests.
- Keep the non-interactive test suite passing and report any compiler warnings separately from test failures.
