# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev       # Start dev server (localhost:3000)
npm run build     # Production build + sitemap generation (next build && next-sitemap)
npm run start     # Start production server
npm run lint      # Run ESLint
```

No test framework is configured.

## Architecture

This is a static-content Next.js site (App Router) for **Country Health and Care**, an Australian NDIS disability services provider.

**Routing:** All pages live under `app/`. Six service pages under `app/services/[service-name]/page.tsx` are standalone files (not dynamic `[slug]` routes). The only API route is `app/api/referral/route.ts`, which sends two emails via [Resend](https://resend.com) on referral form submission — one confirmation to the referrer and one to `admin@countryhealthandcare.com.au`.

**Components:** Reusable components are in `components/`. Client components that need browser APIs are explicitly marked `"use client"` — `Navbar.tsx` (dropdown/hamburger state), `ContactForm.tsx` (form state + submission), and `RevealObserver.tsx` (IntersectionObserver for scroll animations). Everything else is a server component.

**Styling:** No Tailwind. All styles are in `styles/globals.css` (~35KB). Colors are defined as CSS custom properties: `--navy` (#0f1837), `--teal` (#22d3ee), `--orange` (#f97316), `--lime` (#a3e635). Typography uses Google Fonts: Nunito (headings) and Lato (body). All icons are inline SVGs.

**Content:** All page content is hardcoded in components — there is no CMS or database. SEO metadata is set per-page using the Next.js `Metadata` type. JSON-LD LocalBusiness schema is injected in `app/layout.tsx`.

**Environment:** `RESEND_API_KEY` in `.env.local` is required for the referral form API route to send emails.

**Deployment:** Vercel. Build output is `.next`. `next-sitemap` runs after every build and updates `public/sitemap-0.xml`.

## Conventions

- Prettier is configured (`.prettierrc`): 100-char line width, double quotes, semicolons, 2-space indent.
- TypeScript strict mode is on. Path alias `@/*` maps to the repo root.
- `next.config.ts` disables image optimization (`images: { unoptimized: true }`).
