# The Shake Shed

A website for **The Shake Shed** — fresh juices, protein shakes, and protein balls — with a built-in content editor so you can update the menu, photos, and descriptions **without touching code**.

Live site (example): [theshakeshed.vercel.app](https://theshakeshed.vercel.app)

---

## What is this?

This project is two things that work together:

| Part | What it is | Who uses it |
|------|------------|-------------|
| **The website** | What customers see in their browser | Everyone |
| **Sanity Studio** | A friendly admin panel for editing content | You / Emma |

Think of **Sanity** as the website’s database. All menu items, product photos, hero images, and lifestyle photos live there. The website simply reads that data and displays it.

**You do not need to add “cells” or rows in the code.** When you add or remove items in Studio, the site updates automatically.

---

## For content editors (Emma)

**→ See [docs/EMMA.md](docs/EMMA.md) — a short guide written just for Emma.**

### Emma’s editor (online, from anywhere)

**https://theshakeshed.sanity.studio**

Bookmark this. Emma logs in, edits menu and photos, clicks **Publish**, then refreshes the live site. No code on her laptop.

Live website to check changes: **https://theshakeshed.vercel.app**

### One-time setup (Fiona / developer only)

Hosted Studio must be deployed once, and Emma must be invited to the Sanity project.

**Step 1 — Log in to Sanity CLI** (browser opens):

```bash
cd studio && npx sanity login
```

**Step 2 — Deploy Studio:**

```bash
npm run studio:deploy
```

When it finishes, Studio is live at **https://theshakeshed.sanity.studio**.

**Step 3 — Invite Emma:**

1. Go to [sanity.io/manage](https://www.sanity.io/manage)
2. Open project **tpzpnz81** (The Shake Shed)
3. **Members** → **Invite member**
4. Enter Emma’s email → role **Editor** (can edit and publish, not delete the project)
5. Send her **https://theshakeshed.sanity.studio** and [docs/EMMA.md](docs/EMMA.md)

Re-run `npm run studio:deploy` only when the Studio *schema* or editor UI changes — not for everyday menu edits.

### Local Studio (developers only)

For building the site on your machine:

```bash
npm run studio   # http://localhost:3333
npm run dev      # http://localhost:5173 — preview the website
```

### The golden rule: Publish

After you make changes, click **Publish** (green button, top right). Until you publish, the live site will not show your updates.

Then **refresh the website** in your browser to see the changes.

---

### Editing menu products

In Studio, click **Menu product** in the sidebar.

Each product is one item on the menu (e.g. Hydrate smoothie, Chocolate PB protein ball).

| Field | What it does on the website |
|-------|----------------------------|
| **Title** | Full product name in the menu list |
| **Slug** | Internal URL-friendly name (click “Generate” from the title) |
| **Short caption** | One line under the product photo on showcase cards |
| **Description** | Longer paragraph in the “Full menu” section |
| **Ingredients** | Listed under the description (one ingredient per line) |
| **Product photo** | The product image |
| **Where it appears** | Controls which part of the page shows this product (see below) |
| **Sort order** | Order within a section — lower numbers appear first (e.g. 1 before 2) |

#### Where it appears

- **Top showcase row** — large photo card in the first row of menu highlights  
- **Second showcase row** — photo card in the second row  
- **Full menu only (no card)** — listed in the full menu text section, but no photo card  

You can have as many products as you like. Extra cards wrap onto new rows automatically.

#### Adding a new product

1. Click **Menu product** → **Create new**
2. Fill in all fields (title, caption, description, photo, etc.)
3. Set **Where it appears** and **Sort order**
4. Click **Publish**
5. Refresh the website

#### Removing a product

Either **unpublish** or **delete** the product in Studio, then refresh the website. It disappears everywhere.

---

### Editing site images

In Studio, click **Site images** in the sidebar. This is a single page with two sections:

#### Hero images

Large photos at the very top of the homepage.

- Add, remove, or drag to reorder
- Each image needs **Alt text** (a short description, e.g. “holding smoothie”)

#### In the wild

Lifestyle photos in the “the shake shed in the wild” grid further down the page.

- Add, remove, or reorder with **Sort order** (lower = further left)
- Each photo needs **Alt text**

There is no fixed number of images — add as many as you like. The grid adjusts automatically.

Click **Publish** when done, then refresh the website.

---

### What is *not* editable in Studio (yet)

Some text on the page is still written in the website code, not in Sanity:

- The hero intro paragraph (“We make all of our products…”)
- The scrolling ticker (marquee)
- The “Find us” / stockists section
- Footer text

If you need these editable too, ask your developer — they can be moved into Sanity.

---

## For developers

### What’s in the repo

```
theshakeshed/
├── src/                 # The public website (React + Vite)
│   ├── App.tsx          # Page layout
│   ├── hooks/           # Fetches menu + images from Sanity
│   └── lib/             # Sanity API helpers
├── studio/              # Sanity Studio (the content editor)
│   └── schemaTypes/     # Defines “Menu product” and “Site images” fields
├── public/              # Favicon and static files
├── .env                 # Secret config (not committed to git)
└── vercel.json          # Proxies Sanity API in production (fixes CORS)
```

### Prerequisites

- [Node.js](https://nodejs.org/) 18+ (20+ recommended)
- A [Sanity](https://www.sanity.io/) account and project
- npm (comes with Node)

### First-time setup

1. **Clone the repo** and open the folder in your terminal.

2. **Install dependencies:**

   ```bash
   npm install
   npm install --prefix studio
   ```

3. **Create a Sanity project** at [sanity.io/manage](https://www.sanity.io/manage) if you don’t have one.

4. **Set up environment variables:**

   ```bash
   cp .env.example .env
   ```

   Edit `.env` and fill in your Sanity project ID:

   ```env
   VITE_SANITY_PROJECT_ID=your_project_id_here
   VITE_SANITY_DATASET=production
   VITE_SANITY_API_VERSION=2024-01-01

   SANITY_STUDIO_PROJECT_ID=your_project_id_here
   SANITY_STUDIO_DATASET=production
   ```

   Use the **same project ID** for both `VITE_SANITY_PROJECT_ID` and `SANITY_STUDIO_PROJECT_ID`.

5. **Start both servers** (use two terminal tabs):

   ```bash
   # Tab 1 — the website
   npm run dev
   ```

   ```bash
   # Tab 2 — the content editor
   npm run studio
   ```

   - Website: **http://localhost:5173**
   - Studio: **http://localhost:3333**

### How the website talks to Sanity

The site fetches menu and images from Sanity when the page loads. No hardcoded product or photo data — everything comes from the CMS.

Because browsers block direct requests to Sanity’s API (CORS), requests go through a same-origin proxy:

- **Local dev:** Vite proxies `/sanity-api` → Sanity CDN (see `vite.config.ts`)
- **Production:** Vercel rewrites `/sanity-api` → Sanity CDN (see `vercel.json`)

### Useful commands

| Command | What it does |
|---------|--------------|
| `npm run dev` | Start the website locally |
| `npm run studio` | Start Sanity Studio locally |
| `npm run build` | Build the website for production |
| `npm run preview` | Preview the production build locally |
| `npm run studio:deploy` | Deploy Studio to `*.sanity.studio` (hosted editor) |
| `npm run test:sanity` | Browser test — checks Sanity content loads correctly |

### Deploying the website (Vercel)

1. Push the repo to GitHub.
2. Import the project in [Vercel](https://vercel.com).
3. Add these **Environment Variables** in Vercel → Settings → Environment Variables:

   | Name | Value |
   |------|-------|
   | `VITE_SANITY_PROJECT_ID` | Your Sanity project ID |
   | `VITE_SANITY_DATASET` | `production` |
   | `VITE_SANITY_API_VERSION` | `2024-01-01` |

4. Deploy. `vercel.json` is already configured for the Sanity proxy.

Content changes in Sanity appear on the live site after visitors refresh — **no redeploy needed** for menu or image updates.

### Deploying Studio (so Emma can edit online)

Host Studio on Sanity’s servers so Emma doesn’t need the project on her laptop:

```bash
npm run studio:deploy
```

This gives you a URL like `https://your-project.sanity.studio` where she can log in and edit from anywhere.

---

## Troubleshooting

### Website is empty or missing menu/images

- Check `.env` has the correct `VITE_SANITY_PROJECT_ID`
- Restart `npm run dev` after changing `.env`
- Confirm products and **Site images** are **Published** in Studio
- Hard-refresh the browser (Cmd+Shift+R on Mac)

### Studio won’t start — “Port 3333 is already in use”

Another Studio instance is already running. Close that terminal or stop the other process, then try again.

### I ran `npm run studio` but the website doesn’t work

Studio and the website are **separate**. Studio does not start the website.

You need `npm run dev` running separately for **http://localhost:5173**.

### Changes in Studio don’t show on the site

1. Did you click **Publish**?
2. Did you refresh the website?
3. Is `npm run dev` running (for local preview)?

### Production site broken but local works

Check Vercel has the `VITE_SANITY_*` environment variables set and redeploy after adding them.

---

## Quick reference

| URL | What it is |
|-----|------------|
| http://localhost:5173 | Local website (dev) |
| http://localhost:3333 | Local Sanity Studio (editor) |
| https://theshakeshed.vercel.app | Production website (example) |
| https://www.sanity.io/manage | Sanity project dashboard |

---

## Need help?

- **Content questions** (how to add a product, change a photo): use Studio — it’s designed for non-developers.
- **Technical questions** (deploy, env vars, domain): talk to your developer.
- **Sanity docs:** [sanity.io/docs](https://www.sanity.io/docs)
