# Deploy The Shake Shed (Vite static build)

Production output is **`dist/`** after `npm run build`.

## GitHub Pages (CI included)

1. Create a GitHub repo and push this project (include `.github/workflows/deploy-github-pages.yml`).
2. **Settings → Pages → Build and deployment → Source:** GitHub Actions.
3. Push to **`main`** or **`master`** — the workflow builds with  
   `BASE_URL=/<your-repo-name>/` so assets load under  
   `https://<you>.github.io/<repo>/`.

**Custom domain or user site (`username.github.io`):** use `BASE_URL=/` in the workflow step instead of `/${{ github.event.repository.name }}/`, or change `vite.config.ts` `base` accordingly.

## Netlify

```bash
npm run deploy:netlify
```

First run opens a browser to log in. Or connect the repo in the Netlify UI (`npm run build`, publish **`dist`**); `netlify.toml` is already configured.

## Vercel

```bash
npx vercel
```

Follow the prompts (links the repo or uploads). Vercel detects Vite automatically; leave **`base`** as `/` (default) when the site is served from the domain root.

## Local production check

```bash
npm run build && npm run preview
```

Opens the production build at `http://localhost:4173`.
