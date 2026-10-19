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
                <a href="/offres/insertion-et-emploi" className="label-link active">{titles['insertion-et-emploi']}</a>
              </div>
              <h1 className="inner-page-title">{"Insertion & emploi"}</h1>
            </div>
            <div className="service-text-tag-wrap">
              <p>Des sessions immersives pour France Travail, les Missions Locales et les structures d’insertion.</p>
              <div className="service-label-box">
                <div className="service-label-item">
                  <div className="service-label-text">Demandeurs d’emploi</div>
                </div>
                <div className="service-label-item">
                  <div className="service-label-text">Orientation</div>
                </div>
              </div>
            </div>
          </div>
          <div data-w-id="d32608c6-1e24-4717-a99b-596405912d6d" style={{ opacity: "0" }} className="service-details-banner-wrap">
            <img src="/media/fit/px-youth-7495112-1880x682.jpg" loading="lazy" width="1880" height="682" alt={titles['insertion-et-emploi']} className="service-details-banner-image" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default function InsertionEtEmploi() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <Navbar />
      <Hero />
      <ServiceDetails content={offres['insertion-et-emploi']} />
      <Cta />
      <Footer />
    </>
  )
}
