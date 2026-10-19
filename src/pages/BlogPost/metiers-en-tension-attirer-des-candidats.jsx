import Navbar from '../../sections/shared/Navbar.jsx'
import Cta from '../../sections/shared/Cta.jsx'
import Footer from '../../sections/shared/Footer.jsx'
import { articles } from '../../data/articles.js'
import { titles } from '../../data/titles.js'

const article = articles['metiers-en-tension-attirer-des-candidats']

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
                <a href="/blog/metiers-en-tension-attirer-des-candidats" className="label-link active">{titles['metiers-en-tension-attirer-des-candidats']}</a>
              </div>
              <div className="blog-details-title-wrap">
                <h1 className="inner-page-title">Métiers en tension : attirer des candidats grâce à l’immersion</h1>
              </div>
            </div>
            <div className="blog-details-info-box">
              <div className="blog-short-text">{article.lead}</div>
              <div className="blog-label-list">
                <div className="blog-label-item">
                  <div className="blog-label">Recrutement</div>
                  <div className="blog-label">Recrutement</div>
                </div>
              </div>
            </div>
          </div>
          <div data-w-id="2d31e3ea-a3b8-3867-10cc-96dbee8ccdf0" style={{ opacity: "0" }} className="blog-details-wrap">
            <img src={article.banner} loading="lazy" width="1880" height="682" alt={titles['metiers-en-tension-attirer-des-candidats']} className="blog-banner-image" />
          </div>
        </div>
      </div>
    </section>
  )
}

function RelatedPosts() {
  return (
    <section className="section blog-details-bottom">
      <div className="container">
        <div className="blog-bottom-layout">
          <div className="blog-author-box">
            <div data-w-id="48ad2dac-31f3-6e67-458e-41d0aac3c491" style={{ opacity: "0" }} className="blog-author-info-wrap">
              <div className="blog-info-item-wrap">
                <div>Auteur</div>
                <div className="blog-author-info-box">
                  <img width="50" height="50" alt="" src="/media/fit/vr-studio-logo-50x50.jpg" loading="lazy" className="author-icon-image" />
                  <div className="author-text">L’équipe VR STUDIO</div>
                </div>
              </div>
              <div className="blog-info-item-wrap">
                <div>Catégorie</div>
                <div className="blog-author-info-box">
                  <div className="author-text">{article.category}</div>
                </div>
              </div>
              <div className="blog-info-item-wrap">
                <div>Date</div>
                <div className="blog-author-info-box">
                  <div className="author-text">{article.date}</div>
                </div>
              </div>
              <div className="blog-info-item-wrap social">
                <div>Partager</div>
              </div>
              <div className="blog-author-info-box social">
                <div className="social-link-wrap">
                  <a href="https://Instagram.com" target="_blank" className="social-link-box w-inline-block">
                    <img loading="lazy" src="/img/69918fec842a57fe33c1bc72_Instagram-Icon.svg" alt="Icon" className="social-link" />
                  </a>
                  <a href="https://x.com" target="_blank" className="social-link-box w-inline-block">
                    <img loading="lazy" src="/img/69919006889d6924cb78502a_X-Icon.svg" alt="Icon" className="social-link" />
                  </a>
                  <a href="https://LinkedIn.com" target="_blank" className="social-link-box w-inline-block">
                    <img loading="lazy" src="/img/6991900c57a1fd8ca8b4f2f4_LinkedIn-Icon.svg" alt="Icon" className="social-link" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div data-w-id="a42638ee-ccfe-c9a5-20bc-9baa3c7bd7d1" style={{ opacity: "0" }} className="blog-details-text-wrap">
            <div className="blog-details-top-box">
              <div className="blog-details-short-text">{article.lead}</div>
            </div>
            <div className="blog-details-rich-text w-richtext">
              {article.blocks.map((b, i) => {
                if (b.type === 'img')
                  return (
                    <figure key={i} className="w-richtext-align-fullwidth w-richtext-figure-type-image">
                      <div>
                        <img alt="" src={b.src} loading="lazy" />
                      </div>
                    </figure>
                  )
                if (b.type === 'quote') return <blockquote key={i}>{b.text}</blockquote>
                const Tag = b.type
                return <Tag key={i}>{b.text}</Tag>
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function MetiersEnTensionAttirerDesCandidats() {
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
