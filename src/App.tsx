import './App.css'

const categories = [
  {
    title: 'Protein shakes',
    caption: 'Clean macros. Velvet texture.',
    detail: 'Whey and plant-forward blends, calibrated for recovery.',
  },
  {
    title: 'Smoothies',
    caption: 'Whole fruit. No syrup theatrics.',
    detail: 'Bright, layered flavors that feel indulgent — never heavy.',
  },
  {
    title: 'Functional blends',
    caption: 'Collagen. Greens. Adaptogens — on request.',
    detail: 'Menu tiers that mirror how your members actually train.',
  },
  {
    title: 'Protein balls',
    caption: 'Small batch. Big ritual.',
    detail: 'Snackable rounds made to pair with coffee or a second session.',
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
          <a href="#shop">Shop</a>
          <a href="#story">Story</a>
        </nav>
        <a href="#" className="logo">
          The Shake Shed
        </a>
        <nav className="nav nav--right" aria-label="Partner">
          <a href="#partner">Partner</a>
          <a href="#contact" className="nav__cta">
            Inquire
          </a>
        </nav>
      </header>

      <main id="main">
        <section className="hero" aria-labelledby="hero-heading">
          <div className="hero__visual" aria-hidden="true">
            <div className="hero__gradient" />
            <div className="hero__orb hero__orb--1" />
            <div className="hero__orb hero__orb--2" />
          </div>
          <div className="hero__content">
            <p className="eyebrow">For elevated gyms</p>
            <h1 id="hero-heading" className="hero__title">
              Recovery,
              <br />
              refined.
            </h1>
            <p className="hero__lede">
              Shakes, smoothies, and protein bites imagined like skincare — fewer
              ingredients, quieter sweetness, and finish that lingers.
            </p>
            <div className="hero__actions">
              <a href="#shop" className="btn btn--primary">
                View the menu
              </a>
              <a href="#partner" className="btn btn--ghost">
                Partner with us
              </a>
            </div>
          </div>
        </section>

        <section className="marquee" aria-hidden="true">
          <div className="marquee__track">
            <span>Premium cafés inside luxury gyms</span>
            <span aria-hidden="true"> · </span>
            <span>Small-batch protein balls</span>
            <span aria-hidden="true"> · </span>
            <span>Glass-forward smoothies</span>
            <span aria-hidden="true"> · </span>
            <span>White-glove onboarding</span>
            <span aria-hidden="true"> · </span>
            <span>Premium cafés inside luxury gyms</span>
            <span aria-hidden="true"> · </span>
            <span>Small-batch protein balls</span>
            <span aria-hidden="true"> · </span>
            <span>Glass-forward smoothies</span>
            <span aria-hidden="true"> · </span>
            <span>White-glove onboarding</span>
          </div>
        </section>

        <section id="story" className="split split--image-right">
          <div className="split__panel split__panel--copy">
            <p className="eyebrow">The brief</p>
            <h2 className="section-title">
              Built where performance meets polish.
            </h2>
            <p className="body-copy">
              Members pay for atmosphere as much as iron. We design beverage and
              snack programs that match marble benches and cedar saunas — never the
              neon syrup aisle.
            </p>
            <p className="body-copy muted">
              Think Rhode&apos;s restraint with Skims&apos; confidence: generous
              whitespace, tactile finishes, and products that photograph as well as
              they taste.
            </p>
          </div>
          <div className="split__panel split__panel--visual">
            <div className="photo-card photo-card--stone">
              <span className="photo-card__label">Still life · shaker set</span>
            </div>
          </div>
        </section>

        <section id="shop" className="categories">
          <div className="categories__intro">
            <p className="eyebrow">The offering</p>
            <h2 className="section-title section-title--center">
              Everything worth sipping between sets.
            </h2>
          </div>
          <ul className="category-grid">
            {categories.map((item) => (
              <li key={item.title} className="category-card">
                <h3 className="category-card__title">{item.title}</h3>
                <p className="category-card__caption">{item.caption}</p>
                <p className="category-card__detail">{item.detail}</p>
              </li>
            ))}
          </ul>
        </section>

        <blockquote className="pull-quote">
          <p>
            &ldquo;We wanted the shake bar to feel like an extension of the spa —
            quiet luxury, visible ingredients, zero carnival flavors.&rdquo;
          </p>
          <footer>— Creative direction note, hospitality pilot</footer>
        </blockquote>

        <section className="split split--image-left">
          <div className="split__panel split__panel--visual">
            <div className="photo-card photo-card--mist">
              <span className="photo-card__label">Pour · smoothie flight</span>
            </div>
          </div>
          <div className="split__panel split__panel--copy">
            <p className="eyebrow">Operations</p>
            <h2 className="section-title">
              Train your team once. Repeat flawlessly.
            </h2>
            <ul className="checklist">
              <li>Recipe cards scaled for volume — morning rush included.</li>
              <li>Seasonal rotations so your menu never feels stale.</li>
              <li>Nutrition matrices sized for concierge desks and apps.</li>
            </ul>
          </div>
        </section>

        <section id="partner" className="partner">
          <div className="partner__inner">
            <p className="eyebrow partner__eyebrow">Luxury gyms</p>
            <h2 className="partner__title">
              Bring The Shake Shed to your floor plan.
            </h2>
            <p className="partner__copy">
              We collaborate with architects and F&amp;B leads on bar dimensions,
              cold storage, and glassware — then stay close through launch weekend.
            </p>
            <a href="#contact" className="btn btn--inverse">
              Request a deck
            </a>
          </div>
        </section>

        <section id="contact" className="newsletter">
          <div className="newsletter__copy">
            <h2 className="newsletter__title">Stay in the blend.</h2>
            <p className="muted">
              Notes on flavor drops, pilot cities, and gym collaborations — sparse,
              considered.
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
          <span className="logo logo--footer">The Shake Shed</span>
          <p className="footer__tagline muted">
            Premium shakes &amp; bites for discerning gyms.
          </p>
        </div>
        <div className="footer__cols">
          <div>
            <p className="footer__heading">Explore</p>
            <ul className="footer__links">
              <li>
                <a href="#shop">Menu</a>
              </li>
              <li>
                <a href="#story">Story</a>
              </li>
              <li>
                <a href="#partner">Partnerships</a>
              </li>
            </ul>
          </div>
          <div>
            <p className="footer__heading">Care</p>
            <ul className="footer__links">
              <li>
                <a href="#">Allergens</a>
              </li>
              <li>
                <a href="#">Ingredients</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
            </ul>
          </div>
        </div>
        <p className="footer__legal muted">
          © {new Date().getFullYear()} The Shake Shed. Concept landing — replace
          placeholders before launch.
        </p>
      </footer>
    </div>
  )
}
