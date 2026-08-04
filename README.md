# Stafyin — Corporate Website

Premium AI-first IT staffing agency website — React + Vite + Tailwind CSS +
React Router + Framer Motion + Lenis smooth scroll.

## Pages
- Home (`/`) — full-viewport cover hero with Ken Burns zoom + stagger headline
- About (`/about`)
- IT Consulting (`/it-consulting`)
- Staffing Solutions (`/staffing-solutions`)
- Industries We Serve (`/industries`)
- Company (`/company`) — corporate overview built from the pitch deck: mission &
  stats, founder/leadership profile (real photo), delivery methodology, tech
  domain matrix, MSP partner logos, recruitment process flow, and contact info.
  Uses 3D mouse-tracking tilt panels (same technique as `TiltCard3D`, generalized
  as `TiltPanel` for non-image content).
- Learning Solutions (`/learning-solutions`) — placeholder, content pending from client
- Testimonials (`/testimonials`)
- Careers (`/careers`) — placeholder roles, pending real openings from client
- Contact (`/contact`) — form UI ready (wire to email/backend as needed)

## Design system
- **Theme**: White / Beige / Deep Green / Blue — `tailwind.config.js` → `colors`
- **Fonts**: Sora (display/headings), Inter (body), JetBrains Mono (tags/data labels)
- **Motion**: Framer Motion for stagger reveals, scroll-triggered fade-ups, animated
  counters; Lenis for buttery smooth scrolling; CSS Ken Burns zoom on hero images
- **Glassmorphism**: `.glass` / `.glass-light` utility classes in `src/index.css`,
  used on navbar (on scroll), hero CTA buttons, CTA banner button
- **Scroll progress bar**: thin green→blue gradient bar fixed at top of viewport

## Key reusable components (`src/components/`)
- `PageHero.jsx` — full-bleed cover hero used on every interior page (image, Ken
  Burns, gradient overlay, stagger headline, optional CTA buttons, scroll indicator)
- `StaggerHeadline.jsx` — splits a heading into words and fades them in with stagger
- `ScrollReveal.jsx` — wraps any block to fade-up when scrolled into view
- `AnimatedCounter.jsx` — animates a number up when its section enters the viewport
- `ScrollProgress.jsx` — top progress bar tied to page scroll position
- `SmoothScroll.jsx` — initializes Lenis smooth scrolling for the whole app
- `CTABanner.jsx`, `SectionHeading.jsx`, `MatchTag.jsx` — shared section building blocks
- `TiltCard3D.jsx` — premium 3D mouse-tracking tilt card for image + text pairs
  (perspective rotateX/rotateY + cursor-following glare/sheen overlay)
- `TiltPanel.jsx` — same 3D tilt/glare technique generalized for any content
  (used for stat cards and methodology cards on the Company page)

## Setup
```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview production build
```

## SEO
- **Per-page meta tags**: every page sets its own `<title>`, meta description, canonical URL,
  Open Graph, and Twitter Card tags via the `<SEO />` component (`src/components/SEO.jsx`),
  powered by `react-helmet-async`.
- **Structured data**: sitewide `Organization` + `WebSite` JSON-LD schema injected in
  `Layout.jsx`.
- **`public/robots.txt`** and **`public/sitemap.xml`** — static files listing all 9 routes.
- **⚠️ Important limitation**: this is a client-side rendered (CSR) React SPA, not
  server-rendered. Google's crawler executes JavaScript and will see the per-page titles/
  descriptions fine. However, most **social share crawlers** (Facebook, LinkedIn, X/Twitter,
  WhatsApp link previews) do **not** execute JavaScript — they only read the static
  `index.html`. That means every page will currently show the **same** Open Graph preview
  (the homepage's) when shared on social media, not page-specific previews.
  - This doesn't hurt Google search ranking, only social-share preview cards.
  - To fix properly later: add static prerendering (e.g. `vite-plugin-ssg` /
    `vite-plugin-prerender`) or migrate to a framework with SSR/SSG (Next.js, Astro).
- **Before going live**, update these placeholders:
  - `SITE_URL` in `src/components/SEO.jsx` and `src/components/Layout.jsx` (currently
    `https://www.stafyin.com`) → real production domain
  - Add a real `og-image.jpg` (1200×630) to `public/` — referenced in `index.html` and `SEO.jsx`
  - Add real social profile URLs to the `sameAs` array in `Layout.jsx`'s Organization schema
  - Add a real `public/logo.png`
  - Update `sitemap.xml` domain if it changes


- No admin panel — all content lives in the page files under `src/pages/`.
- Images are hotlinked from Unsplash — replace with client's own photography/logo
  when available (just swap the `image` prop on each `<PageHero />` and other
  `<img src="...">` tags).
- Contact form currently only shows a success state client-side; connect it to an
  email service (e.g. Nodemailer + your VPS backend, or a form service) to actually
  receive submissions.
- Colors: edit `tailwind.config.js` → `colors.void / panel / ink / green / blue`.
  A few hex values are duplicated in `src/index.css` (selection, focus outline,
  eyebrow color) — keep those in sync manually if you change the palette.
- Card/button rounding, shadows, and hover-lift are controlled by the `.card-lift`
  utility class and `rounded-2xl` / `rounded-3xl` Tailwind classes throughout.

## Final QA Pass (latest)

- **`public/og-image.jpg`** generated (1200×630, branded with the real logo) —
  this was referenced in meta tags but the file didn't exist yet, so social
  share previews were silently broken. Fixed.
- **Broken/dead link audit**: every internal `<Link to="...">` across all
  pages and nav components cross-checked against `App.jsx` routes — all
  valid, nothing points at a removed page.
- **Alt text audit**: all 7 `<img>` tags in the codebase confirmed to have
  `alt` attributes (decorative logo icon correctly uses `alt=""` since the
  "STAFYIN" wordmark sits right next to it).
- **Horizontal overflow**: added `overflow-x: hidden` on `html`/`body` as a
  defensive safety net; confirmed the one large decorative blur element
  (in `CTABanner`) sits inside an `overflow-hidden` parent.
- **WebP images**: all Unsplash-hosted images now request `fm=webp` for
  smaller payloads (Unsplash's CDN supports on-the-fly format conversion).
- **Keyboard/interaction accessibility**: confirmed no `onClick` handlers
  exist on non-interactive elements (`<div>`, `<span>`) anywhere — every
  click handler is on a real `<button>` or `<Link>`, so keyboard and
  screen-reader users get correct semantics for free.

## Production-Readiness Pass (earlier)

This round of changes focused on performance, SEO completeness, accessibility,
and code cleanliness for a production deploy:

- **Logo**: real brand mark now in place (`public/images/logo-mark.png`,
  `public/logo.png`, favicons) — replaces the earlier placeholder icon.
  Rendered via `src/components/Logo.jsx`.
- **Code splitting**: every route except Home is lazy-loaded
  (`React.lazy` + `Suspense` in `App.jsx`), so first-load JS is much smaller.
- **404 page**: `src/pages/NotFound.jsx`, wired as the catch-all route.
- **Core Web Vitals**:
  - Hero images marked `fetchpriority="high"` + `loading="eager"` (they're
    the LCP element on every page); homepage hero is also preloaded in
    `index.html`.
  - All below-the-fold images use `loading="lazy"` + `decoding="async"`.
  - Vendor code (`react`, `react-router-dom`, `framer-motion`) split into
    separate cacheable chunks in `vite.config.js`.
  - Leadership photo optimized from a 1.6MB PNG down to a ~97KB JPEG.
- **SEO**: `Breadcrumbs.jsx` adds a visible trail + `BreadcrumbList` JSON-LD
  on every interior page, on top of the per-page meta tags already in place.
- **Analytics / Search Console**: both are now driven by environment
  variables instead of hardcoded IDs — see `.env.example`. Analytics only
  loads if `VITE_GA_MEASUREMENT_ID` is set, so nothing fires until you add
  a real ID.
- **Contact form accessibility**: every input now has a properly associated
  `<label htmlFor>`, `autoComplete` attributes, and a hidden honeypot field
  for basic bot-spam protection (real protection still needs a backend/
  reCAPTCHA once the form is wired to send mail).
- **Cleanup**: removed orphaned/unused files (`Showcase.jsx`, `TiltCard3D.jsx`,
  default Vite starter assets, an unrelated icon sprite) and fixed a stray
  `<a href>` on the Careers page that was forcing full page reloads instead
  of client-side navigation.

### Known limitations (things a static SPA can't fully cover)
- **No SSR/prerendering**: social share crawlers (LinkedIn, WhatsApp, X) still
  see one generic preview card since they don't execute JS — see the SEO
  section above for the fix path (prerendering or SSR framework).
- **Lighthouse/Core Web Vitals numbers** can only be truly measured once this
  is deployed to a real domain — everything above is implemented correctly
  in code, but hasn't been scored against a live URL.
- **Contact form** doesn't send email yet — needs a backend endpoint.

## Pending from client
1. Learning Solutions — full content
2. Careers — real open roles
3. Testimonials — actual client quotes, names, logos
4. Brand logo file, exact brand colors/fonts (if any beyond this direction)
