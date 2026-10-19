import Navbar from '../../sections/shared/Navbar.jsx'
import ServiceDetails from '../../sections/ServiceDetail/ServiceDetails.jsx'
import { offres } from '../../data/offres.js'
import { titles } from '../../data/titles.js'
import Cta from '../../sections/shared/Cta.jsx'
import Footer from '../../sections/shared/Footer.jsx'

// Initial states of the page interactions (from the Webflow <head>)
const css = "html.w-mod-js:not(.w-mod-ix3) :is(:is([link-box], [link-box]) [link], :is([nav], [nav]) [nav-link], :is([button], [button]) [button-text], :is([button], [button]) .button-arrow-icon.one, :is([button], [button]) .button-arrow-icon.two) {visibility: hidden !important;}"
function Hero() {
  return (
    <section className="section">
      <div className="container no-gap">
        <div className="service-details-layout">
          <div data-w-id="4605b474-5a3b-860f-8960-5624484eca85" style={{ opacity: "0" }} className="service-details-top">
            <div className="service-link-title-wrap">
              <div data-wf--link-label--variant="base" className="blog-link-box">
                <a href="/" className="label-link">Accueil</a>
                <div className="label-link version-two">/</div>
                <a href="/offres" className="label-link version-two">Offres</a>
                <div className="label-link active">/</div>
                <a href="/offres/ateliers-decouverte-metiers" className="label-link active">{titles['ateliers-decouverte-metiers']}</a>
              </div>
              <h1 className="inner-page-title">Ateliers découverte métiers</h1>
            </div>
            <div className="service-text-tag-wrap">
              <p>Des ateliers en casque VR pour les collèges et lycées, en lien avec le Parcours Avenir.</p>
              <div className="service-label-box">
                <div className="service-label-item">
                  <div className="service-label-text">Collèges & lycées</div>
                </div>
                <div className="service-label-item">
                  <div className="service-label-text">Parcours Avenir</div>
                </div>
              </div>
            </div>
          </div>
          <div data-w-id="d32608c6-1e24-4717-a99b-596405912d6d" style={{ opacity: "0" }} className="service-details-banner-wrap">
            <img src="/media/fit/px-vrclass-8457428-1880x682.jpg" loading="lazy" width="1880" height="682" alt={titles['ateliers-decouverte-metiers']} className="service-details-banner-image" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default function AteliersDecouverteMetiers() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <Navbar />
      <Hero />
      <ServiceDetails content={offres['ateliers-decouverte-metiers']} />
      <Cta />
      <Footer />
    </>
  )
}
