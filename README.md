# Nistha Thapa — Portfolio

Next.js (App Router) + TypeScript + Tailwind CSS. Content lives in `lib/data.ts`.

## Run locally

```bash
npm install
npm run dev
```

## Placeholders to fill in before launch

- **Headshot** — replace the "Add headshot" box in the hero (`app/page.tsx`) with a real `<Image>`/photo.
- **Case study screenshots** — each project page (`app/work/[slug]/page.tsx`) renders a gallery of "Add project screenshot" placeholders. Replace with real images (3–6 per project).
- **LinkedIn URL** — `lib/data.ts` → `profile.linkedin` currently points to a guessed URL; update it.
- **Resume PDF** — add the real file at `public/resume.pdf` (the header/footer already link to `/resume.pdf`).
- **Process / outcome copy** — every case study has sections marked `[DRAFT — replace with real detail]` in `lib/data.ts`. These are plausible placeholder narratives, not verified facts — edit before publishing.
- **Live product links** — `project.liveUrl` is unset for all five projects; add a URL per project if the product is public, otherwise the page shows "[Add link to live product, if public]".
- **Site domain** — `app/layout.tsx` sets a placeholder `siteUrl` (used for OG/metadata resolution). Update it once the real domain is connected.

## Deploying to Vercel

1. Push this project to a git repo (GitHub/GitLab/Bitbucket).
2. Import the repo in Vercel — it will auto-detect Next.js, no config needed.
3. After the first deploy, connect your custom domain in the Vercel project's **Settings → Domains**.
