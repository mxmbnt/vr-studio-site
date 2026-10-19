import Navbar from '../../sections/shared/Navbar.jsx'
import RelatedProjects from '../../sections/ProjectDetail/RelatedProjects.jsx'
import { realisations } from '../../data/realisations.js'
import { titles } from '../../data/titles.js'
import Cta from '../../sections/shared/Cta.jsx'
import Footer from '../../sections/shared/Footer.jsx'

// Initial states of the page interactions (from the Webflow <head>)
const css = "html.w-mod-js:not(.w-mod-ix3) :is(:is([link-box], [link-box]) [link], :is([nav], [nav]) [nav-link], :is([button], [button]) [button-text], :is([button], [button]) .button-arrow-icon.one, :is([button], [button]) .button-arrow-icon.two) {visibility: hidden !important;}"
function ProjectDetails() {
  return (
    <section className="section project-details">
      <div className="container hero">
        <div className="project-details-layout">
          <div className="project-details-hero-wrap">
            <div data-w-id="3b6469b3-f63a-489f-61c5-44dd9ddaa4fc" style={{ opacity: "0" }} className="project-page-typography-wrap">
              <div className="project-page-label-title-wrap">
                <div data-wf--link-label--variant="base" className="blog-link-box">
                  <a href="/" className="label-link">Accueil</a>
                  <div className="label-link version-two">/</div>
                  <a href="/realisations" className="label-link version-two">Réalisations</a>
                  <div className="label-link active">/</div>
                  <a href="/realisations/kinesitherapeute-en-360" className="label-link active">{titles['kinesitherapeute-en-360']}</a>
                </div>
                <h1 className="inner-page-title">Kinésithérapeute en 360°</h1>
              </div>
              <div className="project-page-short-text-wrap">
                <p className="project-page-short-text">Tournage au cabinet pour faire découvrir le métier de kinésithérapeute.</p>
              </div>
            </div>
            <div data-w-id="a337f02b-3208-77ea-57c6-7eb4505a95df" style={{ opacity: "0" }} className="project-label-box-wrap">
              <div className="label-box">
                <div className="label-title">Date</div>
                <div className="label-info">{realisations['kinesitherapeute-en-360'].facts.date}</div>
              </div>
              <div className="label-box">
                <div className="label-title">Format</div>
                <div className="label-info">{realisations['kinesitherapeute-en-360'].facts.format}</div>
              </div>
              <div className="label-box">
                <div className="label-title">Lieu</div>
                <div className="label-info">{realisations['kinesitherapeute-en-360'].facts.lieu}</div>
              </div>
              <div className="label-box">
                <div className="label-title">Client</div>
                <div className="label-info">{realisations['kinesitherapeute-en-360'].facts.client}</div>
              </div>
              <div className="label-box">
                <div className="label-title">Secteur</div>
                <div className="label-info">{realisations['kinesitherapeute-en-360'].facts.secteur}</div>
              </div>
            </div>
          </div>
          <div data-w-id="b49f67ec-45ce-c85b-6834-b89abde74a9b" style={{ opacity: "0" }} className="project-banner-wrap">
            <img src={realisations['kinesitherapeute-en-360'].hero} loading="lazy" width="1880" height="682" alt={realisations['kinesitherapeute-en-360'].alt} className="project-banner-image" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default function KinesitherapeuteEn360() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <Navbar />
      <ProjectDetails />
      <RelatedProjects content={realisations['kinesitherapeute-en-360']} />
      <Cta />
      <Footer />
    </>
  )
}
