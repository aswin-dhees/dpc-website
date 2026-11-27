# Dhee's Pet Company — Website

Marketing site for [Dhee's Pet Company](https://dhees.com), a fresh pet food delivery service for cats and dogs in Chennai.

Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com), deployed to [Cloudflare Pages](https://pages.cloudflare.com) at `dhees.com` and `www.dhees.com`.

## Tech stack

- **Astro 6** with the `@astrojs/cloudflare` adapter (Cloudflare image service)
- **Tailwind CSS 4** via `@tailwindcss/vite`
- **@astrojs/sitemap** for `sitemap-index.xml`
- **Wrangler** for local Cloudflare preview and deployment
- **Google Analytics** (gtag), enabled only when a measurement ID is set

## Getting started

Requires Node.js `>= 22.12.0`.

```bash
npm install
cp .env.example .env
npm run dev
```

The dev server runs at `http://localhost:4321`.

### Environment variables

| Variable                      | Purpose                                                              |
| :---------------------------- | :------------------------------------------------------------------- |
| `PUBLIC_GOOGLE_ANALYTICS_ID`  | GA4 measurement ID. Leave unset to disable the analytics script.     |

## Commands

| Command                | Action                                                        |
| :--------------------- | :------------------------------------------------------------ |
| `npm run dev`          | Start the local dev server                                    |
| `npm run build`        | Build the production site to `./dist/`                        |
| `npm run preview`      | Build, then serve `./dist/` locally with `wrangler pages dev` |
| `npm run deploy`       | Build and deploy to Cloudflare Pages                          |
| `npm run cf-typegen`   | Regenerate `worker-configuration.d.ts` from `wrangler.jsonc`  |
| `npm run astro ...`    | Run Astro CLI commands (`astro check`, `astro add`, …)        |

## Project structure

```text
/
├── public/                 # Static assets: favicons, manifest, robots.txt, images/
├── src/
│   ├── components/         # Page sections (Hero, Products, Testimonials, Contact, …)
│   ├── data/site.ts        # Business info, SEO defaults, service areas — single source of truth
│   ├── layouts/
│   │   └── BaseLayout.astro  # <head>, meta/OG tags, JSON-LD, analytics
│   ├── pages/index.astro   # The single landing page
│   └── styles/global.css   # Tailwind entry and theme
├── astro.config.mjs
└── wrangler.jsonc          # Cloudflare Pages config and custom domains
```

## Editing content

- **Business details, SEO and service areas** — edit `src/data/site.ts`. Name, phone, email, meta description and the list of Chennai neighbourhoods all live here and feed both the page and the structured data.
- **Page sections** — each section of the landing page is a component in `src/components/`; their order is set in `src/pages/index.astro`.
- **Images** — add to `public/images/` and reference as `/images/<file>`.

The contact form doesn't post to a backend: it builds a pre-filled WhatsApp message and opens `wa.me` in a new tab.

## Deployment

```bash
npm run deploy
```

This builds the site and uploads `./dist/` with `wrangler pages deploy`. You need to be logged in to the Cloudflare account that owns the `dpc-website` project (`npx wrangler login`). Set `PUBLIC_GOOGLE_ANALYTICS_ID` in your `.env` before deploying, since it's inlined at build time.
