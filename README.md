# Mohamed Aymane Badia — Portfolio

Personal portfolio (AI & Data Science) built with **Next.js 16 (App Router)**, **TypeScript** and **Tailwind CSS v4**. Fully static, deployed on **Vercel**.

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint
```

## Editing content

All content lives in `data/` — no need to touch components.

| File | What it contains |
|---|---|
| `data/profile.ts` | Name, tagline, email, links, About text, CV link |
| `data/projects.ts` | Featured project + project cards + other repos |
| `data/skills.ts` | Skill groups |
| `data/experience.ts` | Experience, education, certifications (**placeholders to fill**) |

Anything written as `[LIKE_THIS]` is a placeholder. Entries with `placeholder: true` show a "TO COMPLETE" badge — set it to `false` (or remove it) once filled.

**Add your CV:** put `cv.pdf` in `public/` and set `resume: "/cv.pdf"` in `data/profile.ts`.
**Add a screenshot:** put a `.webp` in `public/projects/` and add it to the project's `images` array.

## Structure

```
app/
  layout.tsx            # fonts, global metadata (SEO / Open Graph), theme script
  page.tsx              # section composition + JSON-LD
  opengraph-image.tsx   # generated 1200×630 LinkedIn/Twitter preview
  icon.svg              # favicon
  robots.ts, sitemap.ts
  fonts/                # self-hosted Inter & JetBrains Mono (variable)
components/
  Navbar.tsx, Footer.tsx, ProjectCard.tsx, NeuralNet.tsx
  sections/             # Hero, About, Projects, FeaturedProject, Skills, Experience, GitHub, Contact
  ui/                   # Section, Reveal, Tag, ButtonLink, BrandIcons
data/                   # all editable content
lib/utils.ts            # nav links, helpers
public/projects/        # project screenshots
```

## Deploy on Vercel

1. Push this folder to a new GitHub repository (e.g. `portfolio`).
2. Go to <https://vercel.com/new>, import the repository. Framework is auto-detected as **Next.js** — keep defaults.
3. Add the environment variable `NEXT_PUBLIC_SITE_URL` = your final URL (e.g. `https://aymane-badia.vercel.app`, no trailing slash).
4. Click **Deploy**. Then redeploy once if you changed the URL/domain after the first deploy.
5. Check the LinkedIn preview with <https://www.linkedin.com/post-inspector/>.

### Environment variables

| Name | Required | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Recommended | Absolute URL used for canonical, Open Graph image, sitemap & robots |
