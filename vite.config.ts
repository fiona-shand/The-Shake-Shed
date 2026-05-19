import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Set BASE_URL when hosting under a subpath (e.g. GitHub Pages project sites).
// Example: BASE_URL=/theshakeshed/ npm run build
export default defineConfig({
  plugins: [react()],
  base: process.env.BASE_URL ?? '/',
})
