import { createClient, type SanityClient } from '@sanity/client'

export const projectId = import.meta.env.VITE_SANITY_PROJECT_ID as string | undefined
export const dataset = import.meta.env.VITE_SANITY_DATASET ?? 'production'
export const apiVersion = import.meta.env.VITE_SANITY_API_VERSION ?? '2024-01-01'

export const isSanityConfigured = Boolean(projectId)

/** Same-origin proxy — avoids Sanity CORS (dev: Vite proxy, prod: vercel.json rewrite). */
export function getSanityQueryUrl(query: string): string | null {
  if (!projectId) return null

  const params = new URLSearchParams({ query })
  return `/sanity-api/v${apiVersion}/data/query/${dataset}?${params}`
}

export function getSanityClient(): SanityClient | null {
  if (!projectId) return null

  return createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
  })
}
