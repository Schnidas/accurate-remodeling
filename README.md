# Accurate Remodeling + Design

Marketing site for **Accurate Remodeling + Design** — a design-build general
contractor in Eugene, Oregon (owner Nathan Blackley, est. 1999, CCB #157871).

A single-page, conversion-focused redesign built around an architectural
drafting system: warm modern-rustic photography measured by dimension lines,
with the firm's own blueprint driving the Design + Build section. _“Designed for life.”_

## Stack

- **Vite** + **React 19** + **TypeScript**
- **Tailwind CSS v4** (design tokens in `src/index.css` via `@theme`)
- **Motion** (`motion/react`) for scroll reveals and the page-load sequence
- Type: **Fraunces** (display) · **Hanken Grotesk** (body) · **IBM Plex Mono** (specs)

## Local development

```bash
npm install
npm run dev      # http://localhost:5183
npm run build    # type-check + production build to /dist
npm run preview  # preview the production build
```

## Contact form

The contact form (`src/components/Contact.tsx`) posts JSON to the endpoint in
`VITE_FORM_ENDPOINT`. Set it in Vercel → Project → Settings → Environment
Variables (works with Formspree, Basin, Web3Forms, or any JSON form handler):

```
VITE_FORM_ENDPOINT=https://formspree.io/f/xxxxxxx
```

If unset, the form falls back to opening the visitor's mail client to
`nathanblackley@gmail.com`, so it works out of the box.

## Content

All copy, photography, and the logo are the client's own. Project content lives
in `src/data.ts`; images in `public/assets/`.

---

Crafted by [Apex Business Services](https://apex-business-services.vercel.app).
