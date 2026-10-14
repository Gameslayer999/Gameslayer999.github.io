# Gameslayer999.github.io

My personal site, built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Editing

- **Your details** (name, tagline, bio, links): `src/site.ts`
- **Add a project:** create `src/content/projects/<name>.md` (copy an existing one). Put images in `public/projects/`.
- **Résumé:** drop `resume.pdf` into `public/` and set `resume: '/resume.pdf'` in `src/site.ts`.

```bash
npm install
npm run dev      # preview at http://localhost:4321
```

Pushing to `main` builds and deploys automatically (`.github/workflows/deploy.yml`).

## Adding a custom domain later

1. Buy the domain (e.g. Cloudflare or Porkbun).
2. Add DNS records at the registrar:
   - Apex (`example.com`): four `A` records → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `www`: a `CNAME` record → `gameslayer999.github.io`
3. Create `public/CNAME` containing just the domain (e.g. `example.com`).
4. Change `site` in `astro.config.mjs` to `https://example.com`.
5. Push, then in the repo's **Settings → Pages**, confirm the domain and tick **Enforce HTTPS**.
