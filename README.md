[English](./README.md) | [Español](./README.es.md)

---

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-149eca?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Cloudflare Workers](https://img.shields.io/badge/Cloudflare_Workers-edge-F38020?logo=cloudflare&logoColor=white)](https://workers.cloudflare.com)
[![Resend](https://img.shields.io/badge/Resend-email-000000?logo=resend&logoColor=white)](https://resend.com)
[![pnpm](https://img.shields.io/badge/pnpm-10-F69220?logo=pnpm&logoColor=white)](https://pnpm.io)

# stvdn.github.io

Personal portfolio and blog of **Steven Peñafiel** — bilingual (English / Spanish),
fully static, deployable to GitHub Pages, with a serverless contact-form backend
running on Cloudflare Workers and Resend.

> Live site: **https://stvdn.github.io**

<!-- TODO: drop a screenshot here, e.g. <p align="center"><img src="./docs/screenshot.png" alt="screenshot" width="600" /></p> -->

## Tech Stack

| | |
|---|---|
| [**Next.js 16**](https://nextjs.org) | App Router with `output: "export"` for a 100% static build, plus a `[locale]` dynamic segment for i18n routing. |
| [**Cloudflare Workers**](https://workers.cloudflare.com) | A separate workspace package (`worker/`) handles contact-form submissions at the edge — no server or container to manage. |
| [**Resend**](https://resend.com) | Transactional email delivery from the Worker. Inline HTML emails with optional file attachments. |
| [**Tailwind CSS v4**](https://tailwindcss.com) | Design tokens (_From Figma_) defined once in `src/app/globals.css` via `@theme inline` — color, typography, and spacing all flow from a single source of truth. |
| [**TypeScript**](https://www.typescriptlang.org) | Everything is typed end-to-end, including the Worker `Env` bindings and dictionary strings. |
| [**i18n routing**](./src/i18n) | Lightweight, custom-built: typed locale config (`en` / `es`), per-locale dictionaries, and localized portfolio data — no heavy i18n framework needed. |
| [**Motion**](https://motion.dev) | Scroll-reveal, staggered header entrance, a particle mouse-follower, and animated modal transitions. |
| [**pnpm Workspace**](https://pnpm.io) | Frontend and Worker share a single monorepo (`pnpm-workspace.yaml`) with a unified lockfile. |

## Getting Started

### Prerequisites

- **Node.js 22+**
- **pnpm 10+** — `npm i -g pnpm` if you don't have it.

### Install

```bash
git clone https://github.com/stvdn/stvdn.github.io.git
cd stvdn.github.io
pnpm install
```

### Environment

Copy the example env file and point it at your Worker:

```bash
cp .env.example .env.local
```

```env
NEXT_PUBLIC_CONTACT_API_URL=https://portfolio-contact.your-subdomain.workers.dev
```

### Run the site

```bash
pnpm dev
```

Open <http://localhost:3000> — you'll be redirected to `/en` by default.

### Run the contact Worker (optional, for the contact form)

The Worker lives in its own workspace package and uses Wrangler for local dev.
Create a `worker/.dev.vars` file with your secret:

```dotenv
RESEND_API_KEY=re_xxxxxxxxxxxx
```

Then in a second terminal:

```bash
pnpm --filter portfolio-contact-worker dev
```

This serves the Worker locally (default <http://localhost:8787>). Update
`.env.local`'s `NEXT_PUBLIC_CONTACT_API_URL` to match.

### Build

```bash
pnpm build      # static export → ./out
pnpm lint       # eslint
```

## Project Structure

```
stvdn.github.io/
├─ .github/
│  └─ workflows/deploy.yml       # CI: build → GitHub Pages
├─ src/
│  ├─ app/
│  │  ├─ page.tsx                # root → redirects to /<defaultLocale>
│  │  ├─ layout.tsx              # root layout (no html/body here)
│  │  ├─ globals.css             # Tailwind v4 + Figma design tokens
│  │  └─ [locale]/
│  │     ├─ layout.tsx           # html, body, fonts, SEO metadata
│  │     ├─ page.tsx             # portfolio: experience, projects, skills, education
│  │     └─ blog/page.tsx        # blog index with empty state
│  ├─ components/                # Header, Sidebar, ContactModal, MouseFollower, ...
│  ├─ data/
│  │  ├─ portfolio.ts            # locale router for portfolio data
│  │  ├─ portfolio.en.ts         # English portfolio content
│  │  ├─ portfolio.es.ts        # Spanish portfolio content
│  │  ├─ portfolio.types.ts     # content type definitions
│  │  └─ blog.ts                # blog posts (content + metadata)
│  └─ i18n/
│     ├─ config.ts              # locales: ["en", "es"], helpers
│     ├─ dictionaries.ts        # Dictionary type + getDictionary()
│     └─ dictionaries/
│        ├─ en.ts               # UI strings (English)
│        └─ es.ts               # UI strings (Spanish)
└─ worker/                       # pnpm workspace package
   ├─ src/index.ts              # Cloudflare Worker: contact API + Resend
   ├─ wrangler.jsonc           # Worker config & env vars (non-secret)
   └─ package.json              # wrangler dev/deploy scripts
```

## Deployment

This repo deploys **two things independently**:

### 1. Static site → GitHub Pages

Pushing to `main` triggers `.github/workflows/deploy.yml`, which:

1. Installs with `pnpm install --frozen-lockfile`.
2. Builds the static export (`pnpm build`) into `./out`.
3. Uploads the artifact and deploys to GitHub Pages via `actions/deploy-pages`.

**Required repo secrets:**

| Secret | Description |
|---|---|
| `NEXT_PUBLIC_CONTACT_API_URL` | The deployed Worker URL (see step 2). |

Make sure the repo's Pages source is set to **GitHub Actions** (Settings → Pages → Source).

### 2. Contact Worker → Cloudflare Workers

From the repo root:

```bash
pnpm --filter portfolio-contact-worker deploy
```

The non-secret vars (`CONTACT_TO_EMAIL`, `FROM_EMAIL`, `ALLOWED_ORIGIN`) live in
`worker/wrangler.jsonc`. Create the `RESEND_API_KEY` as a Worker secret:

```bash
cd worker
wrangler secret put RESEND_API_KEY
```

Paste your Resend API key when prompted.

## Contributing

This repo is primarily a portfolio and a reference implementation, but fixes and
improvements are welcome. A few conventions:

- **Use pnpm** — never `npm` or `yarn`.
- **Atomic commits** — one logical change per commit, Conventional Commits style
  (`feat:`, `fix:`, `refactor:`, `docs:`, ...). See `git log` for examples.
- **Never push** without explicit review — see [`AGENTS.md`](./AGENTS.md).

## License

[MIT](./LICENSE) © Steven Peñafiel