import './App.css'

import imgHydrate from './assets/hydrate.png'
import imgBananaBread from './assets/bananabread.png'
import imgPBChocolate from './assets/PBChocolate.png'
import imgPower from './assets/power.png'
import imgBerryBlast from './assets/berryblast.png'
import imgDefense from './assets/defense.png'
import imgHero from './assets/hero.png'
import imgStack from './assets/stack.png'
import imgModel from './assets/model.png'
import imgModel2 from './assets/model2.png'
import imgModel3 from './assets/model3.png'
import imgModel4 from './assets/model4.png'

/** Official Instagram — orders & updates */
const INSTAGRAM_URL = 'https://www.instagram.com/theshakeshed_____/'

const STOCKISTS = [
  {
    label: '@ruralhealthandfitness',
    href: 'https://www.instagram.com/ruralhealthandfitness/',
  },
  {
    label: '@thestackshed',
    href: 'https://www.instagram.com/thestackshed/',
  },
] as const

function productSlug(title: string): string {
  if (title.startsWith('Defence')) return 'defence'
  if (title.startsWith('Hydrate')) return 'hydrate'
  if (title.includes('Chocolate PB')) return 'chocolate pb'
  if (title.includes('Banana bread')) return 'banana bread'
  if (title.startsWith('Berry')) return 'berry blast'
  if (title.startsWith('Power')) return 'power'
  return title.toLowerCase()
}

const menuItems = [
  {
    title: 'Hydrate juice',
    caption: 'Fresh, crisp and seriously refreshing.',
    detail:
      'Packed with natural electrolytes to leave you refreshed, recharged and wanting more with every sip.',
    image: imgHydrate,
  },
  {
    title: 'Banana bread protein ball',
    caption: 'The perfect grab-and-go breakfast snack.',
    detail:
      'Packed with nourishing ingredients to keep you fuelled throughout your day — all the flavour of banana bread in one bite.',
    image: imgBananaBread,
  },
  {
    title: 'Chocolate PB protein ball',
    caption: 'Need an afternoon sweet treat without the crash? We got you.',
    detail:
      'The perfect pick-me-up, packed with feel-good ingredients and all the flavour of a chocolate peanut butter treat — peanut butter, crisped rice, honey, dates, chocolate, protein, coconut oil & sea salt.',
    image: imgPBChocolate,
  },
  {
    title: 'Power protein shake',
    caption: 'Creamy, rich and packed with goodness.',
    detail:
      'Chocolate, peanut butter and high-quality ingredients blended to support recovery, gut health and everyday energy.',
    image: imgPower,
  },
  {
    title: 'Berry Blast protein shake',
    caption: 'Strawberries, banana & vanilla protein.',
    detail:
      'Blended with kefir, coconut milk and raspberry lemon compote — the ultimate refreshing shake.',
    image: imgBerryBlast,
  },
  {
    title: 'Defence juice',
    caption: 'Your go-to when you need a fresh start.',
    detail:
      'Made with powerful, feel-good ingredients to refresh and defend your body naturally — ideal when you’re under the weather or resetting your morning.',
    image: imgDefense,
  },
] as const

const SHOWCASE_PRIMARY = ['Defence juice', 'Hydrate juice', 'Banana bread protein ball'] as const
const SHOWCASE_SECONDARY = [
  'Power protein shake',
  'Berry Blast protein shake',
  'Chocolate PB protein ball',
] as const

export default function App() {
  const primaryFeatured = SHOWCASE_PRIMARY.map((t) => menuItems.find((m) => m.title === t)!)
  const secondaryFeatured = SHOWCASE_SECONDARY.map((t) => menuItems.find((m) => m.title === t)!)

  const wildShots = [
    { src: imgModel, alt: 'The Shake Shed — out in the wild' },
    { src: imgModel3, alt: 'The Shake Shed lifestyle' },
    { src: imgModel2, alt: 'The Shake Shed in everyday moments' },
    { src: imgModel4, alt: 'Sharing The Shake Shed' },
  ] as const

  return (
    <div className="page">
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <div className="header-stack">
        <div className="top-bar" aria-hidden="true">
          <svg className="top-bar__icon" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <rect x="0" y="0" width="6" height="6" rx="1" fill="currentColor" />
            <rect x="8" y="0" width="6" height="6" rx="1" fill="currentColor" />
            <rect x="0" y="8" width="6" height="6" rx="1" fill="currentColor" />
            <rect x="8" y="8" width="6" height="6" rx="1" fill="currentColor" />
          </svg>
        </div>

        <header className="site-header">
          <nav className="nav nav--left" aria-label="Primary">
            <a href="#menu">menu</a>
            <a href="#story">story</a>
          </nav>
          <a href="#" className="logo logo--mark">
            the shake shed
          </a>
          <nav className="nav nav--right" aria-label="Order & stockists">
            <a href="#stockists">stockists</a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
              instagram
            </a>
          </nav>
        </header>
      </div>

      <main id="main">
        {/* Wireframe hero: dual lifestyle images + centred intro */}
        <section className="wf-hero" aria-labelledby="wf-intro-heading">
          <div className="wf-hero__dual">
            <figure className="wf-hero__figure">
              <img
                src={imgHero}
                alt="The Shake Shed"
                className="wf-hero__img"
                width={900}
                height={1125}
                decoding="async"
                fetchPriority="high"
              />
            </figure>
            <figure className="wf-hero__figure">
              <img
                src={imgStack}
                alt="The Shake Shed — The Stack Shed & stockists"
                className="wf-hero__img"
                width={900}
                height={1125}
                decoding="async"
                fetchPriority="high"
              />
            </figure>
          </div>
          <div className="wf-hero__below">
            <h1 id="wf-intro-heading" className="visually-hidden">
              The Shake Shed — fresh juices, shakes & protein balls
            </h1>
            <p className="wf-hero__intro">
              We make all of our products with high-quality ingredients that taste amazing and leave you feeling your best.
              Now available for local delivery — DM us on{' '}
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="link-instagram">
                Instagram
              </a>{' '}
              to order.
            </p>
            <div className="wf-hero__actions">
              <a
                href={INSTAGRAM_URL}
                className="btn btn--primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                DM to order
              </a>
              <a href="#menu" className="btn btn--ghost">
                See the menu
              </a>
            </div>
            <div id="story" className="wf-balance">
              <p className="wf-balance__lead">Helping you get the balance right.</p>
              <p className="wf-balance__sub">Protein balls that taste like a treat.</p>
              <p className="wf-balance__body">
                Juices that drive your routine and spice up your Friday night. Shake it up… put your own twist on them.
              </p>
            </div>
          </div>
        </section>

        <section className="marquee marquee--wired" aria-hidden="true">
          <div className="marquee__fade marquee__fade--left" />
          <div className="marquee__fade marquee__fade--right" />
          <div className="marquee__track">
            <span>Juices &amp; protein balls</span>
            <span aria-hidden="true"> · </span>
            <span>DM for orders</span>
            <span aria-hidden="true"> · </span>
            <span>Available @ruralhealthandfitness</span>
            <span aria-hidden="true"> · </span>
            <span>Available @thestackshed</span>
            <span aria-hidden="true"> · </span>
            <span>Local delivery</span>
            <span aria-hidden="true"> · </span>
            <span>Juices &amp; protein balls</span>
            <span aria-hidden="true"> · </span>
            <span>DM for orders</span>
            <span aria-hidden="true"> · </span>
            <span>Available @ruralhealthandfitness</span>
            <span aria-hidden="true"> · </span>
            <span>Available @thestackshed</span>
            <span aria-hidden="true"> · </span>
            <span>Local delivery</span>
          </div>
        </section>

        {/* Featured product row (wireframe trio) */}
        <section id="menu" className="wf-menu" aria-labelledby="menu-heading">
          <h2 id="menu-heading" className="visually-hidden">
            Menu highlights
          </h2>
          <div className="wf-showcase">
            {primaryFeatured.map((item) => (
              <article key={item.title} className="wf-card">
                <div className="wf-card__media">
                  <img src={item.image} alt={`${item.title}`} width={640} height={720} loading="lazy" decoding="async" />
                </div>
                <header className="wf-card__head">
                  <h3 className="wf-card__title">{productSlug(item.title)}</h3>
                </header>
                <p className="wf-card__caption">{item.caption}</p>
              </article>
            ))}
          </div>
          <div className="wf-showcase wf-showcase--secondary">
            {secondaryFeatured.map((item) => (
              <article key={item.title} className="wf-card wf-card--compact">
                <div
                  className={`wf-card__media${item.title.startsWith('Power') ? ' wf-card__media--power' : ''}${item.title.startsWith('Berry') ? ' wf-card__media--anchor-bottom' : ''}`}
                >
                  <img src={item.image} alt={`${item.title}`} width={640} height={720} loading="lazy" decoding="async" />
                </div>
                <header className="wf-card__head">
                  <h3 className="wf-card__title">{productSlug(item.title)}</h3>
                </header>
                <p className="wf-card__caption">{item.caption}</p>
              </article>
            ))}
          </div>
          <div className="wf-menu__cta">
            <a href={INSTAGRAM_URL} className="btn btn--primary" target="_blank" rel="noopener noreferrer">
              DM to order
            </a>
            <a href="#full-menu" className="btn btn--ghost">
              See the menu
            </a>
          </div>
          <div id="full-menu" className="wf-menu-all">
            <h3 className="wf-menu-all__heading">Full menu</h3>
            <ul className="wf-menu-all__list">
              {menuItems.map((item) => (
                <li key={item.title}>
                  <span className="wf-menu-all__name">{item.title}</span>
                  <span className="wf-menu-all__sep" aria-hidden="true">
                    —
                  </span>
                  <span className="wf-menu-all__detail">{item.detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="wf-social" aria-labelledby="social-heading">
          <div className="wf-social__top">
            <h2 id="social-heading" className="wf-social__heading">
              the shake shed in the wild
            </h2>
            <a href={INSTAGRAM_URL} className="btn btn--wired-outline" target="_blank" rel="noopener noreferrer">
              Find us on social
            </a>
          </div>
          <ul className="wf-social__grid">
            {wildShots.map((shot) => (
              <li key={shot.alt} className="wf-social__cell">
                <img src={shot.src} alt={shot.alt} width={560} height={560} loading="lazy" decoding="async" />
              </li>
            ))}
          </ul>
        </section>

        <section id="stockists" className="partner">
          <div className="partner__inner">
            <p className="eyebrow partner__eyebrow">Find us</p>
            <h2 className="partner__title">Available now — tap in with our partners.</h2>
            <p className="partner__copy">
              Proudly launched inside The Stack Shed — our first stockist, with many more to come. Follow{' '}
              <a href={STOCKISTS[1].href} target="_blank" rel="noopener noreferrer" className="partner__inline-link">
                {STOCKISTS[1].label}
              </a>{' '}
              and us on Instagram for drops and the journey ahead.
            </p>
            <ul className="stockists-list">
              {STOCKISTS.map((s) => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="stockists-list__link">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
            <a href={INSTAGRAM_URL} className="partner__follow" target="_blank" rel="noopener noreferrer">
              Follow The Shake Shed
            </a>
          </div>
        </section>

        <section id="contact" className="newsletter">
          <div className="newsletter__copy">
            <h2 className="newsletter__title">Stay close.</h2>
            <p className="muted">
              Drop your email for occasional drops — or skip the inbox and{' '}
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="link-instagram">
                DM us on Instagram
              </a>{' '}
              anytime.
            </p>
          </div>
          <form
            className="newsletter__form"
            onSubmit={(e) => {
              e.preventDefault()
            }}
          >
            <label htmlFor="email" className="visually-hidden">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Email address"
              className="newsletter__input"
            />
            <button type="submit" className="btn btn--primary">
              Notify me
            </button>
          </form>
        </section>
      </main>

      <footer className="site-footer site-footer--wired">
        <div className="footer__brand">
          <a href="#" className="logo logo--footer logo--mark logo--footer-mark">
            the shake shed
          </a>
          <p className="footer__tagline muted">
            Fresh juices · Protein shakes · Protein balls · Local delivery · DM for orders
          </p>
          <p className="footer__legal muted">&copy; {new Date().getFullYear()} The Shake Shed.</p>
        </div>
        <div className="footer__col footer__explore">
          <p className="footer__heading">Explore</p>
          <ul className="footer__links">
            <li>
              <a href="#menu">menu</a>
            </li>
            <li>
              <a href="#story">story</a>
            </li>
            <li>
              <a href="#stockists">stockists</a>
            </li>
          </ul>
        </div>
        <div className="footer__col footer__ig">
          <p className="footer__heading">Instagram</p>
          <ul className="footer__links">
            <li>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                @theshakeshed_____
              </a>
            </li>
            <li>
              <a href={STOCKISTS[0].href} target="_blank" rel="noopener noreferrer">
                {STOCKISTS[0].label}
              </a>
            </li>
            <li>
              <a href={STOCKISTS[1].href} target="_blank" rel="noopener noreferrer">
                {STOCKISTS[1].label}
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  )
}
