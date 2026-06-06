import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineCliConfig } from 'sanity/cli'

const studioDir = path.dirname(fileURLToPath(import.meta.url))

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID || process.env.VITE_SANITY_PROJECT_ID || '',
    dataset: process.env.SANITY_STUDIO_DATASET || process.env.VITE_SANITY_DATASET || 'production',
  },
  /** Hosted Studio URL: https://theshakeshed.sanity.studio */
  studioHost: 'theshakeshed',
  vite: {
    // Load env from repo root (.env) and studio (.env) — browser-safe, no node:fs in config
    envDir: path.resolve(studioDir, '..'),
    envPrefix: ['SANITY_STUDIO_', 'VITE_'],
  },
})
