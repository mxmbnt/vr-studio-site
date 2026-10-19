// Contenu de chaque article : src/data/articles.js
export default function RelatedPosts({ article }) {
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
