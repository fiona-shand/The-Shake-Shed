import { chromium } from 'playwright'

const baseUrl = process.env.TEST_URL ?? 'http://localhost:5173'

const browser = await chromium.launch()
const page = await browser.newPage()

const logs = []
page.on('console', (msg) => logs.push(`[${msg.type()}] ${msg.text()}`))
page.on('pageerror', (err) => logs.push(`[pageerror] ${err.message}`))
page.on('requestfailed', (req) =>
  logs.push(`[requestfailed] ${req.url()} — ${req.failure()?.errorText}`),
)

await page.goto(baseUrl, { waitUntil: 'networkidle', timeout: 30000 })
await page.waitForTimeout(2000)

const envCheck = await page.evaluate(() => {
  const badge = document.querySelector('.sanity-dev-badge:not(.sanity-dev-badge--warn)')
  const warn = document.querySelector('.sanity-dev-badge--warn')
  return {
    sanityBadge: badge?.textContent?.trim() ?? null,
    fallbackWarn: warn?.textContent?.trim() ?? null,
  }
})

const fullMenuText = await page.locator('#full-menu').innerText()
const chocolateCardCaption = await page
  .locator('.wf-showcase--secondary .wf-card')
  .filter({ hasText: 'chocolate pb' })
  .locator('.wf-card__caption')
  .innerText()
  .catch(() => 'NOT FOUND')

const sanityImages = await page.locator('img[src*="cdn.sanity.io"]').count()
const localAssetImages = await page.locator('img[src*="/assets/"]').count()
const heroSanityImages = await page.locator('.wf-hero img[src*="cdn.sanity.io"]').count()
const wildSanityImages = await page.locator('.wf-social img[src*="cdn.sanity.io"]').count()
const menuSanityImages = await page.locator('.wf-card img[src*="cdn.sanity.io"]').count()

console.log('--- Browser test ---')
console.log('Env in browser:', envCheck)
console.log('All console logs:', logs.join('\n  '))
console.log('Sanity CDN images (total):', sanityImages)
console.log('  Hero:', heroSanityImages, '| Menu cards:', menuSanityImages, '| Wild grid:', wildSanityImages)
console.log('Local /assets/ images (should be 0):', localAssetImages)
console.log('Chocolate PB card caption:', chocolateCardCaption)
console.log('Full menu includes "!!!!":', fullMenuText.includes('!!!!'))
console.log('Full menu snippet:', fullMenuText.slice(0, 200).replace(/\n/g, ' | '))

const ok =
  logs.some((l) => l.includes('[menu] Loaded from Sanity')) &&
  logs.some((l) => l.includes('[site images] Loaded from Sanity')) &&
  menuSanityImages === 6 &&
  heroSanityImages === 2 &&
  wildSanityImages === 4 &&
  localAssetImages === 0 &&
  fullMenuText.includes('!!!!')

console.log('RESULT:', ok ? 'PASS — Sanity is driving the site' : 'FAIL — still on fallback or stale data')

await browser.close()
process.exit(ok ? 0 : 1)
