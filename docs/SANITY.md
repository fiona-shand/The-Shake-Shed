# Sanity CMS — The Shake Shed

Content editors manage **Menu product** documents here. The public site reads from the same Sanity project when env vars are set.

## One-time setup

1. Create a free project at [sanity.io/manage](https://www.sanity.io/manage).
2. Copy `.env.example` → `.env` and set **`VITE_SANITY_PROJECT_ID`** (and the same value as **`SANITY_STUDIO_PROJECT_ID`**).
3. Copy `studio/.env.example` → `studio/.env` with the **same project ID**, **or** rely on the root `.env` (the studio loads both).
4. Install dependencies:

   ```bash
   npm install
   npm install --prefix studio
   ```

5. Start the editor:

   ```bash
   npm run studio
   ```

   Open the URL shown (usually `http://localhost:3333`).

6. Add **Menu product** entries — upload a photo, fill caption/description/ingredients, and set **Where it appears** (top row, second row, or full menu only).

7. Start the site with Sanity connected:

   ```bash
   npm run dev
   ```

Without `VITE_SANITY_PROJECT_ID`, the site uses the built-in fallback menu in `src/data/fallbackProducts.ts`.

## Publishing to the live site

When a product is **Published** in Sanity, the site needs to fetch fresh data:

- **Today:** redeploy on Vercel (or hard refresh — menu loads from Sanity on each visit).
- **Next step:** add a Vercel deploy hook in Sanity webhooks so Publish triggers a rebuild automatically.

## Product fields

| Field | Used for |
|-------|----------|
| Title | Full menu name + image alt text |
| Caption | Short line under showcase cards |
| Description | Full menu paragraph |
| Ingredients | Listed under description |
| Product photo | Showcase + full menu |
| Where it appears | Top row / second row / full menu only |
| Sort order | Order within each row (lower = first) |
