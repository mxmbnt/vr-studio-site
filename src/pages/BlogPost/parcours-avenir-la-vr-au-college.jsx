import Navbar from '../../sections/shared/Navbar.jsx'
import RelatedPosts from '../../sections/BlogPost/RelatedPosts.jsx'
import Cta from '../../sections/shared/Cta.jsx'
import Footer from '../../sections/shared/Footer.jsx'
import { articles } from '../../data/articles.js'
import { titles } from '../../data/titles.js'

const article = articles['parcours-avenir-la-vr-au-college']

// Initial states of the page interactions (from the Webflow <head>)
const css = "html.w-mod-js:not(.w-mod-ix3) :is(:is([link-box], [link-box]) [link], :is([nav], [nav]) [nav-link], :is([button], [button]) [button-text], :is([button], [button]) .button-arrow-icon.one, :is([button], [button]) .button-arrow-icon.two) {visibility: hidden !important;}"
function BlogDetails() {
  return (
    <section className="section blog-details">
      <div className="container no-gap">
        <div className="blog-details-layout">
          <div data-w-id="43ef3c8d-58ba-a772-22d0-3bcf481ecb81" style={{ opacity: "0" }} className="blog-details-top-wrap">
            <div className="blog-details-left-wrap">
              <div data-wf--link-label--variant="base" className="blog-link-box">
                <a href="/" className="label-link">Accueil</a>
                <div className="label-link version-two">/</div>
                <a href="/blog" className="label-link version-two">Blog</a>
                <div className="label-link active">/</div>
                <a href="/blog/parcours-avenir-la-vr-au-college" className="label-link active">{titles['parcours-avenir-la-vr-au-college']}</a>
              </div>
              <div className="blog-details-title-wrap">
                <h1 className="inner-page-title">Parcours Avenir : la réalité virtuelle au collège</h1>
              </div>
            </div>
            <div className="blog-details-info-box">
              <div className="blog-short-text">{article.lead}</div>
              <div className="blog-label-list">
                <div className="blog-label-item">
                  <div className="blog-label">Éducation</div>
                  <div className="blog-label">Éducation</div>
                </div>
              </div>
            </div>
          </div>
          <div data-w-id="2d31e3ea-a3b8-3867-10cc-96dbee8ccdf0" style={{ opacity: "0" }} className="blog-details-wrap">
            <img src={article.banner} loading="lazy" width="1880" height="682" alt={titles['parcours-avenir-la-vr-au-college']} className="blog-banner-image" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default function ParcoursAvenirLaVrAuCollege() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <Navbar />
      <BlogDetails />
      <RelatedPosts article={article} />
      <Cta />
      <Footer />
    </>
  )
}
