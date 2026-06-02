import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { getSanityClient, getSanityQueryUrl } from './sanity'

export type ProductShowcase = 'primary' | 'secondary' | 'none'

export type Product = {
  id: string
  title: string
  caption: string
  detail: string
  ingredients?: string[]
  imageUrl: string
  showcase: ProductShowcase
  sortOrder: number
}

type SanityProductRecord = {
  _id: string
  title: string
  caption: string
  detail: string
  ingredients?: string[]
  image?: SanityImageSource
  imageUrl?: string
  showcase: ProductShowcase
  sortOrder: number
}

const PRODUCTS_QUERY = `*[_type == "product"] | order(sortOrder asc) {
  _id,
  title,
  caption,
  detail,
  ingredients,
  showcase,
  sortOrder,
  image,
  "imageUrl": image.asset->url
}`

function buildImageUrl(image: SanityImageSource | undefined): string | null {
  const client = getSanityClient()
  if (!client || !image) return null

  return imageUrlBuilder(client).image(image).width(900).quality(85).auto('format').url()
}

function mapSanityProduct(record: SanityProductRecord): Product | null {
  const imageUrl = record.imageUrl ?? buildImageUrl(record.image)
  if (!imageUrl) return null

  return {
    id: record._id,
    title: record.title,
    caption: record.caption,
    detail: record.detail,
    ingredients: record.ingredients?.length ? record.ingredients : undefined,
    imageUrl,
    showcase: record.showcase,
    sortOrder: record.sortOrder ?? 0,
  }
}

export async function fetchProducts(): Promise<Product[]> {
  const queryUrl = getSanityQueryUrl(PRODUCTS_QUERY)
  if (!queryUrl) return []

  const response = await fetch(queryUrl)
  if (!response.ok) {
    throw new Error(`Sanity query failed (${response.status})`)
  }

  const { result } = (await response.json()) as { result?: SanityProductRecord[] }
  const records = result ?? []

  return records
    .map(mapSanityProduct)
    .filter((product): product is Product => product !== null)
}

export function productSlug(title: string): string {
  if (title.startsWith('Defence')) return 'defence'
  if (title.startsWith('Hydrate')) return 'hydrate'
  if (title.includes('Chocolate PB')) return 'chocolate pb'
  if (title.includes('Banana bread')) return 'banana bread'
  if (title.startsWith('Berry')) return 'berry blast'
  if (title.startsWith('Power')) return 'power'
  return title.toLowerCase()
}

export function productsByShowcase(products: Product[], showcase: ProductShowcase): Product[] {
  return products
    .filter((p) => p.showcase === showcase)
    .sort((a, b) => a.sortOrder - b.sortOrder)
}
