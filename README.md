# NEWOOD MILLWORK INC — Website

## Quick Start
```bash
npm i
npm run dev
```

- Drop your optimized images into `public/portfolio/` (use the provided WebP files or run `npm run convert:heic ./raw`).
- Edit copy in `components` and `app` as needed.

## Deploy on Vercel (recommended)
1. Create a GitHub repo and push this folder.
2. Go to https://vercel.com → New Project → Import the repo.
3. Framework Preset: **Next.js**. Build command: `next build` (auto). Output: `.next` (auto).
4. Once deployed, add your custom domain in Vercel: **Domains → Add** your domain.
5. Update DNS at your domain registrar: set the A/ALIAS or CNAME per Vercel's instructions. It usually propagates quickly.

## Domain (example)
- Domain: `newoodmillwork.com`
- Point it to Vercel by adding a CNAME for `www` to `cname.vercel-dns.com` and set an A/ALIAS or redirect root to `www` (Vercel provides exact records).

## SEO
- Edit metadata in `app/layout.tsx`.
- Add an OG image at `public/og.jpg` (1200x630).
- `public/robots.txt` is included; add an `app/sitemap.ts` if you'd like dynamic sitemap.

## Image Optimization
- Next.js serves `/public/portfolio/*.webp` efficiently.
- Use `scripts/convert-heic.mjs` to convert raw HEIC/JPG files into responsive WebP sizes.

## Tailwind
- Global styles in `app/globals.css`.
