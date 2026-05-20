import './App.css'

import imgHydrate from './assets/hydrate.png'
import imgBananaBread from './assets/bananabread.png'
import imgPower from './assets/power.png'
import imgBerryBlast from './assets/berryblast.png'
import imgDefense from './assets/defense.png'
import imgShakes from './assets/shakes.png'
import imgProteinBalls from './assets/proteinballs.png'

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
      'Packed with nourishing ingredients to keep you fuelled throughout the day — all the flavour of banana bread in one bite.',
    image: imgBananaBread,
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
]

export default function App() {
  return (
    <div className="page">
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <header className="site-header">
        <nav className="nav nav--left" aria-label="Primary">
          <a href="#menu">menu</a>
          <a href="#story">story</a>
        </nav>
        <a href="#" className="logo">
          the shake shed
        </a>
        <nav className="nav nav--right" aria-label="Order & stockists">
          <a href="#stockists">stockists</a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
            instagram
          </a>
        </nav>
      </header>

      <main id="main">
        <section className="hero" aria-labelledby="hero-heading">
          <div className="hero__ambient" aria-hidden="true">
            <div className="hero__blob hero__blob--a" />
            <div className="hero__blob hero__blob--b" />
          </div>
          <div className="hero__layout">
            <div className="hero__content">
              <p className="eyebrow eyebrow--hero">
                <span className="eyebrow__dot" aria-hidden="true" />
                Fresh juices · Protein shakes · Protein balls
              </p>
              <h1 id="hero-heading" className="hero__title">
                Built for gym mornings, busy afternoons{' '}
                <span className="hero__gradient-word">and everything in between.</span>
              </h1>
              <p className="hero__lede">
                We make all of our products with high-quality ingredients that taste amazing and leave you feeling your best.
                Now available for local delivery — DM us on{' '}
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="link-instagram">
                  Instagram
                </a>{' '}
                to order.
              </p>
              <div className="hero__actions">
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
            </div>
            <div className="hero__rail">
              <figure className="hero__figure">
                <img
                  src={imgShakes}
                  alt="The Shake Shed protein shakes"
                  className="hero__figure-img hero__figure-img--main"
                  width={720}
                  height={900}
                  decoding="async"
                  fetchPriority="high"
                />
                <img
                  src={imgProteinBalls}
                  alt=""
                  className="hero__figure-img hero__figure-img--accent"
                  width={360}
                  height={360}
                  decoding="async"
                  aria-hidden={true}
                />
              </figure>
              <aside className="hero__aside" aria-label="Where to find us">
                <p className="hero__aside-label">Available now</p>
                <p className="hero__aside-text">
                  Pick up alongside our friends at{' '}
                  <a
                    href={STOCKISTS[0].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero__aside-link"
                  >
                    {STOCKISTS[0].label}
                  </a>{' '}
                  and{' '}
                  <a
                    href={STOCKISTS[1].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero__aside-link"
                  >
                    {STOCKISTS[1].label}
                  </a>
                  .
                </p>
                <div className="hero__aside-line" aria-hidden="true" />
              </aside>
            </div>
          </div>
        </section>

        <section className="marquee" aria-hidden="true">
          <div className="marquee__fade marquee__fade--left" />
          <div className="marquee__fade marquee__fade--right" />
          <div className="marquee__track">
            <span>Fresh juices · Protein shakes · Protein balls</span>
            <span aria-hidden="true"> · </span>
            <span>Local delivery · juices &amp; protein balls</span>
            <span aria-hidden="true"> · </span>
            <span>DM for orders</span>
            <span aria-hidden="true"> · </span>
            <span>Available @ruralhealthandfitness</span>
            <span aria-hidden="true"> · </span>
            <span>Available @thestackshed</span>
            <span aria-hidden="true"> · </span>
            <span>Fresh juices · Protein shakes · Protein balls</span>
            <span aria-hidden="true"> · </span>
            <span>Local delivery · juices &amp; protein balls</span>
            <span aria-hidden="true"> · </span>
            <span>DM for orders</span>
            <span aria-hidden="true"> · </span>
            <span>Available @ruralhealthandfitness</span>
            <span aria-hidden="true"> · </span>
            <span>Available @thestackshed</span>
          </div>
        </section>

        <section id="story" className="split split--image-right">
          <div className="split__panel split__panel--copy">
            <span className="split__index" aria-hidden="true">
              01
            </span>
            <p className="eyebrow">The vibe</p>
            <h2 className="section-title">
              Discover the ingredients and wellness behind every Shake Shed product.
            </h2>
            <p className="body-copy">
              From fresh juices to protein shakes and protein balls, everything is designed to give you a quick, refreshing and energising refuel throughout your day.
            </p>
            <p className="body-copy muted">
              Local delivery is available for juices and protein balls.
              Members of{' '}
              <a href={STOCKISTS[0].href} target="_blank" rel="noopener noreferrer" className="inline-link">
                {STOCKISTS[0].label}
              </a>{' '}
              can grab yours at{' '}
              <a href={STOCKISTS[1].href} target="_blank" rel="noopener noreferrer" className="inline-link">
                {STOCKISTS[1].label}
              </a>{' '}
              or order via DM on{' '}
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="link-instagram">
                Instagram
              </a>
              .
            </p>
          </div>
          <div className="split__panel split__panel--visual">
            <div className="photo-card photo-card--photo photo-card--tilt-right">
              <img
                src={imgHydrate}
                alt="Hydrate juice by The Shake Shed"
                className="photo-card__img"
                width={720}
                height={900}
                loading="lazy"
                decoding="async"
              />
              <div className="photo-card__scrim" aria-hidden="true" />
              <span className="photo-card__shine" aria-hidden="true" />
              <span className="photo-card__label">Hydrate juice</span>
            </div>
          </div>
        </section>

        <section id="menu" className="categories">
          <div className="categories__intro">
            <span className="categories__index" aria-hidden="true">
              02
            </span>
            <p className="eyebrow">On the menu</p>
            <h2 className="section-title section-title--center">
              Juices, shakes &amp; bites — made to taste amazing.
            </h2>
          </div>
          <ul className="category-grid">
            {menuItems.map((item, i) => (
              <li key={item.title} className="category-card">
                <div className="category-card__media">
                  <img
                    src={item.image}
                    alt={`${item.title} — The Shake Shed`}
                    width={960}
                    height={660}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="category-card__body">
                  <span className="category-card__num" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="category-card__title">{item.title}</h3>
                  <p className="category-card__caption">{item.caption}</p>
                  <p className="category-card__detail">{item.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <blockquote className="pull-quote">
          <span className="pull-quote__mark" aria-hidden="true">
            ”
          </span>
          <p>
            &ldquo;High-quality ingredients that taste amazing — and leave you feeling your best.&rdquo;
          </p>
          <footer>— The Shake Shed</footer>
        </blockquote>

        <section className="split split--image-left">
          <div className="split__panel split__panel--visual">
            <div className="photo-card photo-card--photo photo-card--tilt-left">
              <img
                src={imgDefense}
                alt="Defence juice by The Shake Shed"
                className="photo-card__img"
                width={720}
                height={900}
                loading="lazy"
                decoding="async"
              />
              <div className="photo-card__scrim" aria-hidden="true" />
              <span className="photo-card__shine" aria-hidden="true" />
              <span className="photo-card__label">Defence juice</span>
            </div>
          </div>
          <div className="split__panel split__panel--copy">
            <span className="split__index" aria-hidden="true">
              03
            </span>
            <p className="eyebrow">Orders</p>
            <h2 className="section-title">
              DM us — we&apos;ll handle the rest.
            </h2>
            <ul className="checklist">
              <li>Message{' '}
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="link-instagram">
                  @theshakeshed_____
                </a>{' '}
                on Instagram to place an order.</li>
              <li>Local delivery available on juices and protein balls.</li>
              <li>Grab yours in person at our stockists below.</li>
            </ul>
          </div>
        </section>

        <section id="stockists" className="partner">
          <div className="partner__inner">
            <span className="partner__index" aria-hidden="true">
              04
            </span>
            <p className="eyebrow partner__eyebrow">Find us</p>
            <h2 className="partner__title">
              Available now — tap in with our partners.
            </h2>
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
            <a href={INSTAGRAM_URL} className="btn btn--primary" target="_blank" rel="noopener noreferrer">
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

      <footer className="site-footer">
        <div className="footer__brand">
          <a href="#" className="logo logo--footer">
            the shake shed
          </a>
          <p className="footer__tagline muted">
            Fresh juices · Protein shakes · Protein balls · Local delivery · DM for orders
          </p>
        </div>
        <div className="footer__cols">
          <div>
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
          <div>
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
        </div>
        <p className="footer__legal muted">
          © {new Date().getFullYear()} The Shake Shed.
        </p>
      </footer>
    </div>
  )
}
