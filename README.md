# Milan Kumar — Portfolio

A production-ready developer portfolio built with Next.js 15 (App Router),
TypeScript, Tailwind CSS, Framer Motion, and shadcn/ui-style components.

## Getting started

Requires Node.js 18.18+ (Node 20 LTS recommended).

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Before you deploy

1. **Resume** — drop your real PDF at `public/resume.pdf` (the Hero and
   command palette both link to this path).
2. **Photo** — the hero currently uses a code-card in place of a headshot.
   To add a photo, place an image in `public/` (e.g. `public/photo.jpg`)
   and swap it into `components/sections/hero.tsx` using `next/image`.
3. **Domain** — replace `https://milankumar.dev` in `app/layout.tsx`,
   `app/sitemap.ts`, and `app/robots.ts` with your real domain once you
   have one, for correct SEO/OG behavior.
4. **Live demo links** — `lib/data.ts` has a `demo` field per project;
   add a URL once each project has a deployed instance.
5. **Contact form** — currently opens the visitor's email client via a
   `mailto:` link (no backend required). To wire up a real backend
   (e.g. Resend, Formspree, or an API route), edit
   `components/sections/contact.tsx`.

## Structure

```
app/                 Routes, layout, global styles, SEO files
components/          Navbar, footer, command palette, cursor, etc.
components/sections/ Hero, About, Skills, Projects, Achievements,
                      Certifications, Contact
components/ui/       Shared primitives (Button, Card)
lib/data.ts          All resume content — edit this file to update
                      copy anywhere on the site
```

## Notable features

- Ctrl/Cmd + K command palette for quick navigation
- Dark mode by default with a light mode toggle (persisted via next-themes)
- Scroll progress bar, magnetic buttons, tilt-hover project cards
- Terminal-style hero boot sequence and page loading screen
- Custom 404 page and error boundary
- `sitemap.xml` and `robots.txt` generated automatically
- Respects `prefers-reduced-motion`

## Deploying

The fastest path is [Vercel](https://vercel.com/new) — connect this repo
and it will detect the Next.js config automatically. No environment
variables are required for the base site.
