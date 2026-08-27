# Nelson Iheagwam Ministries Website

The public website for Nelson Iheagwam Ministries. It presents the ministry and its lead, publishes events and sermons from a remote content API, and provides contact and booking forms.

## Stack

- React 18 and React Router 6
- Create React App (`react-scripts` 5)
- Tailwind CSS 3 and shared CSS
- Axios for content and form requests

## Local setup

```bash
npm ci
npm start
```

The development site is served at `http://localhost:3000` unless that port is occupied.

## Commands

```bash
npm start
npm run build
npm test -- --watchAll=false
```

## Project documentation

- `AGENTS.md` — repository conventions and Codex guidance
- `docs/PROJECT_CONTEXT.md` — architecture, routes, integrations, and known technical debt
- `DESIGN.md` — visual language, tokens, components, and layout rules
