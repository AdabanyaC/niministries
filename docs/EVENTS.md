# JSON-driven event pages

Event pages use the route `/event/:slug`. The slug resolves to a public JSON file at `public/data/events/<slug>.json`, so `/event/osm-2026` loads `public/data/events/osm-2026.json`.

To add an event:

1. Copy an existing event JSON file and rename it to the new lowercase, hyphenated slug.
2. Update all copy, dates, venue information, actions, media, registration fields, messages, and SEO inside that file.
3. Set `registration.destinations.api.url` and `registration.destinations.googleAppsScript.url` when the receiving services are ready. Both requests receive the configured visible field values plus `eventSlug` and `eventCode`.
4. Add the public event URL to `public/sitemap.xml` and `public/llms.txt` for discovery.

## Media configuration

Use `heroMedia.type: "image"` with `heroMedia.url` for a photograph. To switch to a hosted video, set `heroMedia.type` to `"video"`, set `heroMedia.url`, and retain a suitable `heroMedia.posterUrl` for fast loading and fallback presentation.

Video playback flags (`autoPlay`, `muted`, `loop`, and `playsInline`) are also data-driven. The event hero uses a 9:16 portrait frame, suppresses native and Picture-in-Picture controls, and exposes only the custom mute toggle. Browsers may block autoplay with sound until the visitor interacts with the page.

## Registration configuration

`registration.form` is passed unchanged to the portable renderer in `src/components/dynamic-form`. It owns all field labels, validation rules, conditional dependencies, defaults, UI messages, and completion outcomes. Fields can depend on other fields at any depth; hidden fields are unregistered and excluded from validation and submission.

Built-in field types are `text`, `email`, `tel`, `textarea`, `select`, `radio`, and `checkbox`. Applications can extend the registry without changing the renderer. Form colors and geometry live in `registration.theme` and are applied as prefixed CSS custom properties.

The host sends both configured requests with `Promise.all`. An API failure is recorded but does not prevent a successful registration when Google Apps Script succeeds. A missing or failed Google Apps Script destination keeps the form visible and shows the configured error message.

## Endpoint safety

Event JSON files are public browser assets. Never put credentials, private API keys, or secret authorization headers in an event file. The receiving endpoint must support requests from the deployed website origin and should perform its own validation, rate limiting, and abuse prevention.
