import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Set BASE_URL when hosting under a subpath (e.g. GitHub Pages project sites).
// Example: BASE_URL=/theshakeshed/ npm run build
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const projectId = env.VITE_SANITY_PROJECT_ID ?? 'tpzpnz81'
  const sanityCdn = `https://${projectId}.apicdn.sanity.io`

  const sanityProxy = {
    '/sanity-api': {
      target: sanityCdn,
      changeOrigin: true,
      rewrite: (path: string) => path.replace(/^\/sanity-api/, ''),
    },
  }

  return {
    plugins: [react()],
    base: process.env.BASE_URL ?? '/',
    server: { proxy: sanityProxy },
    preview: { proxy: sanityProxy },
  }
})
