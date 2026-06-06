import { getSanityQueryUrl } from './sanity'

export type SiteImage = {
  imageUrl: string
  altText: string
}

export type SiteImages = {
  heroImages: SiteImage[]
  wildShots: SiteImage[]
}

type SanityImageRecord = {
  altText: string
  imageUrl?: string
  sortOrder?: number
}

type SanitySiteImagesRecord = {
  heroImages?: SanityImageRecord[]
  wildShots?: SanityImageRecord[]
}

const SITE_IMAGES_QUERY = `*[_type == "siteImages" && _id == "siteImages"][0] {
  heroImages[] {
    altText,
    "imageUrl": image.asset->url
  },
  wildShots[] | order(sortOrder asc) {
    altText,
    sortOrder,
    "imageUrl": image.asset->url
  }
}`

function mapImage(record: SanityImageRecord | undefined): SiteImage | null {
  if (!record?.imageUrl || !record.altText) return null
  return { imageUrl: record.imageUrl, altText: record.altText }
}

function mapSiteImages(record: SanitySiteImagesRecord | null): SiteImages | null {
  if (!record) return null

  const heroImages = (record.heroImages ?? [])
    .map(mapImage)
    .filter((image): image is SiteImage => image !== null)

  const wildShots = (record.wildShots ?? [])
    .map(mapImage)
    .filter((image): image is SiteImage => image !== null)

  if (heroImages.length === 0 && wildShots.length === 0) return null

  return { heroImages, wildShots }
}

export async function fetchSiteImages(): Promise<SiteImages | null> {
  const queryUrl = getSanityQueryUrl(SITE_IMAGES_QUERY)
  if (!queryUrl) return null

  const response = await fetch(queryUrl)
  if (!response.ok) {
    throw new Error(`Sanity site images query failed (${response.status})`)
  }

  const { result } = (await response.json()) as { result?: SanitySiteImagesRecord | null }
  return mapSiteImages(result ?? null)
}
