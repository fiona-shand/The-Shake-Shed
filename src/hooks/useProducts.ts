import { useEffect, useState } from 'react'
import { fetchProducts, productsByShowcase, type Product } from '../lib/products'
import { isSanityConfigured } from '../lib/sanity'

export type ProductsSource = 'sanity' | 'missing'

type UseProductsResult = {
  products: Product[]
  primaryFeatured: Product[]
  secondaryFeatured: Product[]
  loading: boolean
  source: ProductsSource
}

export function useProducts(): UseProductsResult {
  const [products, setProducts] = useState<Product[]>([])
  const [source, setSource] = useState<ProductsSource>('missing')
  const [loading, setLoading] = useState(isSanityConfigured)

  useEffect(() => {
    if (!isSanityConfigured) return

    let cancelled = false

    async function load() {
      setLoading(true)
      try {
        const fromSanity = await fetchProducts()
        if (cancelled) return

        if (fromSanity.length > 0) {
          setProducts(fromSanity)
          setSource('sanity')
          if (import.meta.env.DEV) {
            console.info('[menu] Loaded from Sanity:', fromSanity.length, 'products')
          }
        } else {
          setProducts([])
          setSource('missing')
          if (import.meta.env.DEV) {
            console.warn('[menu] Sanity returned 0 products.')
          }
        }
      } catch (error) {
        setProducts([])
        setSource('missing')
        console.warn('Sanity fetch failed.', error)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    void load()

    function reloadOnFocus() {
      if (document.visibilityState === 'visible') void load()
    }

    window.addEventListener('focus', reloadOnFocus)
    document.addEventListener('visibilitychange', reloadOnFocus)

    return () => {
      cancelled = true
      window.removeEventListener('focus', reloadOnFocus)
      document.removeEventListener('visibilitychange', reloadOnFocus)
    }
  }, [])

  return {
    products,
    primaryFeatured: productsByShowcase(products, 'primary'),
    secondaryFeatured: productsByShowcase(products, 'secondary'),
    loading,
    source,
  }
}
