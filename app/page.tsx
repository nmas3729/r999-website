import ExperienceMotion from "./experience-motion";
import EnquiryForm from "./enquiry-form";
import WebsiteShowcase from "./website-showcase";
import { festiveEnquiryMessage, whatsappLink } from "./whatsapp";
import WhatsAppIcon from "./whatsapp-icon";

function WebsiteMockup() {
  return (
    <div
      className="device-stage reveal"
      role="img"
      aria-label="Illustrative business website concept shown on laptop and smartphone."
    >
      <div className="device-orbit orbit-outer" aria-hidden="true" />
      <div className="device-orbit orbit-inner" aria-hidden="true" />
      <div className="device-spark device-spark-one" aria-hidden="true">✦</div>
      <div className="device-spark device-spark-two" aria-hidden="true">✧</div>
      <div className="laptop">
        <div className="laptop-screen">
          <div className="browser-bar">
            <span />
            <span />
            <span />
            <div className="browser-address">yourbusiness.co.za</div>
          </div>
          <div className="mock-site">
            <div className="mock-nav">
              <span className="mock-logo">YOUR BUSINESS</span>
              <span>HOME&nbsp;&nbsp; ABOUT&nbsp;&nbsp; CONTACT</span>
              <b>LET&apos;S TALK</b>
            </div>
            <div className="mock-hero">
              <span className="mock-label">A WARM WELCOME TO</span>
              <strong>Your business,<br />beautifully online.</strong>
              <span className="mock-copy">A home for what you do best.</span>
              <i>DISCOVER MORE&nbsp; ↗</i>
              <div className="mock-plant" aria-hidden="true">
                <span /><span /><span /><span /><span />
              </div>
              <div className="mock-sun" aria-hidden="true" />
            </div>
            <div className="mock-bottom">
              <span>MADE FOR YOUR BUSINESS</span>
              <span>YOUR LITTLE CORNER OF THE INTERNET</span>
            </div>
          </div>
        </div>
        <div className="laptop-base" />
      </div>
      <div className="phone">
        <div className="phone-speaker" />
        <div className="phone-screen">
          <div className="phone-nav"><span>YOUR BUSINESS</span><i>☰</i></div>
          <div className="phone-site">
            <span className="mock-label">WELCOME TO</span>
            <strong>Your business,<br />beautifully online.</strong>
            <span className="phone-art" aria-hidden="true"><i /><i /><i /></span>
            <span className="phone-button">DISCOVER MORE ↗</span>
          </div>
          <div className="phone-home" />
        </div>
      </div>
      <span className="preview-label">ILLUSTRATIVE WEBSITE PREVIEW</span>
    </div>
  );
}

const benefits = [
  {
    number: "01",
    title: "Help customers discover you",
    copy: "Give people a clear place to find your business beyond the social media feed.",
    icon: "⌕",
  },
  {
    number: "02",
    title: "Let them explore your services",
    copy: "Bring your business and services together in one dedicated, professional place.",
    icon: "⌂",
  },
  {
    number: "03",
    title: "Make it easy to get in touch",
    copy: "Help interested customers learn how to contact you, alongside your social channels.",
    icon: "✧",
  },
];

const steps = [
  {
    number: "01",
    title: "Tell us about your business",
    copy: "Start the conversation on WhatsApp and share what your business is all about.",
  },
  {
    number: "02",
    title: "We build your website",
    copy: "We create a professional website shaped around your business and your brief.",
  },
  {
    number: "03",
    title: "Get online",
    copy: "Review your website with us and get ready to share your business online.",
  },
];

export default function Home() {
  const whatsappHref = whatsappLink(festiveEnquiryMessage);

  return (
    <>
      <ExperienceMotion />
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="announcement">
        <span aria-hidden="true">✦</span>
        <span>SIHLEB DIGITAL STUDIO</span>
        <span className="announcement-divider" aria-hidden="true">✳</span>
        <span>Festive Website Special</span>
        <span aria-hidden="true">✦</span>
      </div>

      <header className="site-header">
        <a className="brand" href="#home" aria-label="SihleB Digital Studio home">
          <span className="brand-mark">S<span>B</span></span>
          <span className="brand-name">SihleB<span>DIGITAL STUDIO</span></span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#why-website">Why a website</a>
          <a href="#websites">Our websites</a>
          <a href="#process">How it works</a>
          <a href="#enquiry">Enquire</a>
        </nav>
        <a className="header-cta" href={whatsappHref} target="_blank" rel="noreferrer">
          <WhatsAppIcon />
          <span>Enquire about R999.99</span>
          <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main id="main-content">
        <section className="hero" id="home">
          <div className="particle-field" aria-hidden="true">
            {Array.from({ length: 16 }, (_, index) => (
              <span key={index} />
            ))}
          </div>
          <div className="hero-garland" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /></div>
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow"><span /> FESTIVE WEBSITE SPECIAL <span /></p>
            <h1><span>A professional</span><span>5-page website</span><em>for your business.</em></h1>
            <div className="hero-price reveal reveal-delay-1">
              <span className="price-currency">R</span>
              <span className="price-main">999</span>
              <span className="price-cents">.99</span>
              <span className="price-label">ONCE-OFF WEBSITE<br />DEVELOPMENT</span>
            </div>
            <p className="offer-expiry-badge">OFFER ENDS 15 DECEMBER 2026</p>
            <p className="offer-scope-note">
              The R999.99 price covers website development only; hosting and
              domain registration are separate and quoted separately. We&apos;ll
              explain all additional costs before you accept a quotation.
            </p>
            <p className="offer-expiry-badge offer-expiry-cta">OFFER ENDS 15 DECEMBER 2026</p>
            <div className="hero-actions reveal reveal-delay-3">
              <a className="button button-red" href={whatsappHref} target="_blank" rel="noreferrer">
                <WhatsAppIcon />
                ENQUIRE ABOUT THE R999.99 WEBSITE OFFER
                <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link" href="#process">See how it works <span>↓</span></a>
            </div>
            <div className="hero-trust reveal reveal-delay-3">
              <span className="trust-star" aria-hidden="true">✦</span>
              <span>Professional websites<br /><b>for South African businesses.</b></span>
            </div>
          </div>
          <WebsiteMockup />
          <div className="hero-bottom">
            <span>YOUR BUSINESS DESERVES A HOME ONLINE</span>
            <a href="#why-website">SCROLL TO EXPLORE <span aria-hidden="true">↓</span></a>
            <span>MADE IN SOUTH AFRICA <b aria-hidden="true">✦</b></span>
          </div>
        </section>

        <section className="benefits-section" id="why-website">
          <div className="section-heading reveal">
            <span className="section-index">02 <i /> WHY A WEBSITE</span>
            <p className="eyebrow dark-eyebrow"><span /> Your business, with its own address <span /></p>
            <h2>YOUR BUSINESS DESERVES ITS OWN WEBSITE.</h2>
            <p className="section-intro">
              A professional website complements social media. It gives
              customers a dedicated place to discover your business, explore
              your services and make contact.
            </p>
          </div>
          <div className="benefit-grid reveal reveal-delay-1">
            {benefits.map((benefit) => (
              <article className="benefit-card" key={benefit.number}>
                <div className="benefit-card-top">
                  <span className="benefit-number">{benefit.number}</span>
                  <span className="benefit-icon" aria-hidden="true">{benefit.icon}</span>
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.copy}</p>
                <span className="benefit-rule" aria-hidden="true" />
              </article>
            ))}
          </div>
          <a className="inline-cta" href={whatsappHref} target="_blank" rel="noreferrer">
            ENQUIRE ABOUT THE R999.99 WEBSITE OFFER <span aria-hidden="true">↗</span>
          </a>
        </section>

        <section className="websites-section" id="websites">
          <div className="website-showcase-layout">
          <div className="section-heading website-heading reveal">
            <p className="eyebrow dark-eyebrow"><span /> SihleB Digital Studio <span /></p>
            <span className="section-index">03 <i /> WEBSITE SHOWCASE</span>
            <h2>SEE WHAT YOUR BUSINESS WEBSITE COULD LOOK LIKE.</h2>
            <p className="section-intro">
              A professional business website, thoughtfully designed to work
              beautifully on desktop and mobile.
            </p>
            <div className="showcase-proof reveal reveal-delay-1">
              <span className="proof-star" aria-hidden="true">✦</span>
              <p>One clear, confident home<br />for your business online.</p>
              <span>DESIGNED TO FEEL LIKE YOUR BUSINESS</span>
            </div>
            <a
              className="studio-site-link"
              href="https://sihleb.co.za"
              target="_blank"
              rel="noreferrer"
            >
              <span>SIHLEB&apos;S WEBSITE</span>
              <strong>Visit SihleB Digital Studio</strong>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="showcase-reveal reveal"><WebsiteShowcase /></div>
          </div>
        </section>

        <section className="process-section" id="process">
          <div className="process-lights" aria-hidden="true"><i /><i /><i /><i /><i /></div>
          <div className="process-heading reveal">
            <span className="section-index">04 <i /> THE PROCESS</span>
            <p className="eyebrow light-eyebrow"><span /> A simple way to get online <span /></p>
            <h2>THREE SIMPLE STEPS TO YOUR NEW BUSINESS WEBSITE.</h2>
            <p className="process-intro">We keep the process clear from the first hello.</p>
          </div>
          <div className="process-steps reveal reveal-delay-1">
            {steps.map((step, index) => (
              <article className="process-step" key={step.number}>
                <span className="step-number">{step.number}</span>
                <span className="step-icon" aria-hidden="true">{index === 0 ? "↗" : index === 1 ? "⌘" : "✦"}</span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </article>
            ))}
          </div>
          <a className="button button-cream" href={whatsappHref} target="_blank" rel="noreferrer">
            ENQUIRE ABOUT THE R999.99 WEBSITE OFFER <span aria-hidden="true">↗</span>
          </a>
        </section>

        <section className="enquiry-section" id="enquiry">
          <div className="enquiry-copy reveal">
            <span className="section-index">05 <i /> YOUR ENQUIRY</span>
            <p className="eyebrow dark-eyebrow"><span /> Festive Website Special <span /></p>
            <h2>LET&apos;S TALK ABOUT YOUR BUSINESS WEBSITE.</h2>
            <p>
              Tell us a little about your business. We&apos;ll open a pre-filled
              message in WhatsApp so you can review it and choose whether to
              send it.
            </p>
            <div className="enquiry-price-note">
              <span aria-hidden="true">✦</span>
              <span>Festive Website Special<br /><b>R999.99 — once-off website development</b></span>
            </div>
            <p className="enquiry-scope-note">
              Hosting and domain registration are not included in the R999.99
              website development price and will be quoted separately. We&apos;ll
              explain all additional costs before you accept a quotation.
            </p>
          </div>
          <div className="reveal reveal-delay-1"><EnquiryForm /></div>
        </section>

        <section className="final-cta">
          <div className="final-cta-garland" aria-hidden="true"><i /><i /><i /><i /><i /></div>
          <div className="final-cta-inner reveal">
          <span className="section-index">06 <i /> FESTIVE WEBSITE SPECIAL</span>
          <p className="eyebrow light-eyebrow"><span /> This festive season <span /></p>
          <h2>READY TO GET YOUR BUSINESS ONLINE?</h2>
          <p>R999.99 — Once-off website development.</p>
          <p className="offer-expiry-badge offer-expiry-final">OFFER ENDS 15 DECEMBER 2026</p>
          <a className="button button-red" href={whatsappHref} target="_blank" rel="noreferrer">
            <WhatsAppIcon />
            ENQUIRE ABOUT THE R999.99 WEBSITE OFFER
            <span aria-hidden="true">↗</span>
          </a>
          </div>
          <span className="final-decoration final-decoration-one" aria-hidden="true">✦</span>
          <span className="final-decoration final-decoration-two" aria-hidden="true">✳</span>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main">
          <a className="brand footer-brand" href="#home" aria-label="SihleB Digital Studio home">
            <span className="brand-mark">S<span>B</span></span>
            <span className="brand-name">SihleB<span>DIGITAL STUDIO</span></span>
          </a>
          <p>
            Professional websites<br />for South African businesses.
            <br />
            An exclusive festive website promotion by{" "}
            <a href="https://sihleb.co.za/" target="_blank" rel="noreferrer">
              SihleB Digital Studio
            </a>
            .
          </p>
          <a className="footer-cta" href={whatsappHref} target="_blank" rel="noreferrer">
            <WhatsAppIcon /> Enquire about the offer <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="footer-bottom">
          <span>© 2026 SIHLEB DIGITAL STUDIO</span>
          <span>FESTIVE WEBSITE SPECIAL <b>·</b> R999.99 ONCE-OFF WEBSITE DEVELOPMENT</span>
          <a href="#home">BACK TO THE TOP ↑</a>
        </div>
      </footer>
      <a className="mobile-sticky-cta" href={whatsappHref} target="_blank" rel="noreferrer">
        <WhatsAppIcon /> Enquire about the offer <span aria-hidden="true">↗</span>
      </a>
    </>
  );
}
