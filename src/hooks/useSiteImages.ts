import { useEffect, useState } from 'react'
import { fetchSiteImages, type SiteImages } from '../lib/siteImages'
import { isSanityConfigured } from '../lib/sanity'

export type SiteImagesSource = 'sanity' | 'missing'

const emptySiteImages: SiteImages = {
  heroImages: [],
  wildShots: [],
}

type UseSiteImagesResult = SiteImages & {
  loading: boolean
  source: SiteImagesSource
}

export function useSiteImages(): UseSiteImagesResult {
  const [images, setImages] = useState<SiteImages>(emptySiteImages)
  const [source, setSource] = useState<SiteImagesSource>('missing')
  const [loading, setLoading] = useState(isSanityConfigured)

  useEffect(() => {
    if (!isSanityConfigured) return

    let cancelled = false

    async function load() {
      setLoading(true)
      try {
        const fromSanity = await fetchSiteImages()
        if (cancelled) return

        if (fromSanity) {
          setImages(fromSanity)
          setSource('sanity')
          if (import.meta.env.DEV) {
            console.info('[site images] Loaded from Sanity')
          }
        } else {
          setImages(emptySiteImages)
          setSource('missing')
          if (import.meta.env.DEV) {
            console.warn('[site images] Sanity site images document is missing or incomplete.')
          }
        }
      } catch (error) {
        setImages(emptySiteImages)
        setSource('missing')
        console.warn('Sanity site images fetch failed.', error)
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
    ...images,
    loading,
    source,
  }
}
