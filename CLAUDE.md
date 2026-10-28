# Marci Metzger — Home Page Revamp

Junior Website Builder assignment (Luxury Presence). Revamp **only the Home page** of the reference real estate site as a **single-page, responsive, professional** website, then deploy it to free hosting.

- Reference site: https://marcimetzger.com/ (Home page only)
- Deadline: 3 working days from receipt of the assignment email
- Deliverables: live URL (not a GitHub repo), updated resume with mobile number, brief implementation note (tools/frameworks + one design decision and how it improved the reference)

## Assignment rules (non-negotiable)

- **Single page only.** It revamps the Home page and nothing else.
- **Use ALL content from the reference Home page**, including every image (already downloaded to `src/assets/images` and `src/assets/svg`). Do not drop sections or text. Extra researched content is allowed (e.g. Pahrump area info, FAQs).
- **Every researched fact must be verifiable.** Any claim not taken from the reference site needs an entry in `SOURCES.md` (claim, where it appears, source URL, notes). Never invent stats, awards, reviews or offers.
- **Improve the design.** Do not copy the original layout one-to-one. Re-think hierarchy, spacing, typography and flow.
- **Real estate site:** it must feel simple, elegant, trustworthy and premium.
- **Responsive across mobile, tablet and desktop:** readable text, correctly scaled images, usable nav and buttons, no overlapping content, **no horizontal scrolling**.
- **The owner must understand every line.** The code will be discussed and live-edited in an interview. Prefer clear, conventional code over clever code. No unexplained magic.

## Tech stack

- **Next.js 16 (App Router) + TypeScript (strict)**, statically rendered. APIs differ from older versions: read the relevant guide in `node_modules/next/dist/docs/` before writing Next-specific code (see `AGENTS.md`).
- **Tailwind CSS v4**: design tokens in `@theme` inside `globals.css`
- Custom CSS only where Tailwind is awkward (complex keyframes, masks/clip-paths, scroll-driven effects), placed in `@layer components` in `globals.css`
- `next/image` for every image, using static imports from `src/assets` (automatic dimensions and blur placeholders), `next/font` for fonts
- `lucide-react` (icons), `clsx` + `tailwind-merge` (`cn()` helper)
- Contact form: client-side POST to a free form service (Web3Forms/Formspree). No backend.
- Hosting: Vercel (free tier)
- Package manager: pnpm

Do not add dependencies beyond these without asking first.

## Project structure

```
src/
  app/
    layout.tsx        # fonts, metadata, JSON-LD
    page.tsx          # composes sections only, no markup logic
    globals.css       # Tailwind import, @theme tokens, custom CSS layers
  components/
    layout/           # Header, MobileNav, Footer
    sections/         # Hero, About, Listings, Services, ... (one file per page section)
    ui/               # Button, Container, SectionHeading, Card, ... (reusable primitives)
  content/            # typed content data: site.ts, listings.ts, services.ts, ...
  hooks/              # reusable client hooks (use-*.ts)
  lib/                # utils (cn), constants
  types/              # shared TS types
  assets/
    images/           # all reference-site images, statically imported
    svg/              # social brand icons
public/               # only files needing a fixed URL (OG image, robots.txt, sitemap)
```

## Code conventions

- **Content lives apart from presentation.** All copy, listings, services, links and contact info live in `src/content/*.ts` as typed data. Components receive data and never hard-code copy.
- **Server Components by default.** Add `"use client"` only to leaf components that need state or browser APIs (mobile nav toggle, carousel, form, scroll animations).
- One component per file, named exports, PascalCase filenames. Keep components small. Extract a `ui/` primitive once a pattern repeats.
- Props are typed with `type` aliases. No `any`.
- Compose classes with `cn()`. Never build Tailwind class names through string interpolation.
- Use design tokens (colors, fonts, spacing) from `@theme`. No arbitrary hex values scattered in components.
- **Do not add any comments in the code.** Names and structure carry the meaning.
- Keep the code clean, small and readable. No dead code and no commented-out blocks.

## Design guidelines

- Palette is based on the brand logos (blue and gold variants in `src/assets/images`): a neutral base, a deep brand color and a restrained gold accent.
- Pair one elegant serif for headings with one clean sans for body text.
- Use generous whitespace, a clear visual hierarchy and large photography.
- Mobile-first. Test at roughly 375px, 768px, 1024px and 1440px.
- Animations stay subtle and must respect `prefers-reduced-motion`.

## Quality bar

- **Accessibility:** semantic landmarks, one `h1`, logical heading order, alt text on every image, visible focus states, AA contrast, keyboard-usable nav and menu.
- **SEO:** page metadata, Open Graph, `RealEstateAgent` JSON-LD, descriptive alt text.
- **Performance:** `preload` only on the hero image (`priority` is deprecated in Next 16), `sizes` on every `next/image`, minimal client JS. Target Lighthouse 90+ in every category.
- Run `pnpm lint` and `pnpm build` cleanly before calling any task done.
- Edits to `src/app/globals.css` are not picked up by the running dev server (Turbopack + `@tailwindcss/turbopack`). Restart `pnpm dev` after changing it. If it still serves stale CSS after a restart, stop dev and delete the `.next` folder (Turbopack's persistent cache) before starting again. Tailwind classes in components update live.
- Avoid running `pnpm build` while `pnpm dev` is running. While dev is running, verify with `pnpm lint` and `pnpm exec tsc --noEmit`.

## Workflow

- Discuss the approach before scaffolding or making large changes.
- Build section by section and confirm each one before moving on.
- Explain non-obvious design and code decisions, since the owner must be able to defend them in the interview.
