// Contenu de chaque réalisation : src/data/realisations.js
export default function RelatedProjects({ content }) {
  return (
    <section className="section projct-bottom">
      <div className="container">
        <div className="project-details-bottom-layout">
          <div className="project-details-left">
            <div data-w-id="8c084a6d-667a-a6ae-f0dd-42de5f4e4af2" style={{ opacity: "0" }} className="service-details-top-box">
              <div className="service-details-title">Ce que nous avons réalisé :</div>
              <div className="service-list-category">
                {[0, 2, 4].map((i) => (
                  <div className="service-item-wrap" key={i}>
                    {content.tags.slice(i, i + 2).map((tag) => (
                      <div className="service-item-box" key={tag}>
                        <div className="service-item-tag">{tag}</div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div data-w-id="430bde43-5a4a-d026-5014-7e86c883689b" style={{ opacity: "0" }} className="service-details-rich-text">
              <div className="service-details-rich-top w-richtext">
                <h2>Le projet</h2>
                {content.intro.map((t) => (
                  <p key={t}>{t}</p>
                ))}
                <figure className="w-richtext-align-fullwidth w-richtext-figure-type-image">
                  <div>
                    <img alt={content.alt} src={content.figure} loading="lazy" />
                  </div>
                </figure>
                {content.steps.map((step) => (
                  <div key={step.title}>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                ))}
                <h2>{content.focusTitle}</h2>
                <p>{content.focus}</p>
              </div>
              <div className="w-dyn-list">
                <div role="list" className="service-details-list w-dyn-items">
                  {content.gallery.map((src) => (
                    <div role="listitem" className="w-dyn-item w-dyn-repeater-item" key={src}>
                      <img src={src} loading="lazy" alt={content.alt} className="project-image-rich" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="service-details-bottom w-richtext">
                <h2>En résumé</h2>
                <ol role="list">
                  {content.summary.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
                <p>
                  <strong>{content.highlight}</strong>
                </p>
                <ul role="list">
                  {content.uses.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div data-w-id="91ba6095-2b94-f358-9f73-3c61b24068b1" style={{ opacity: "0" }} className="service-details-form">
            <h2 className="service-form-title">{"Parlons de votre projet"}</h2>
            <div className="w-form">
              <form id="email-form" name="email-form" data-name="Email Form" method="get" className="form" data-wf-page-id="69942e8d3027d08bea5f2099" data-wf-element-id="91ba6095-2b94-f358-9f73-3c61b24068b5">
                <div className="title-input-wrap">
                  <label htmlFor="name" className="input-title others">Nom</label>
                  <input className="form-input w-input" maxLength="256" name="name" data-name="Name" placeholder="Votre nom complet" type="text" id="name" required />
                </div>
                <div className="title-input-wrap">
                  <label htmlFor="Email" className="input-title others">Email</label>
                  <input className="form-input w-input" maxLength="256" name="Email" data-name="Email" placeholder="Votre adresse email" type="email" id="Email" required />
                </div>
                <div className="title-input-wrap">
                  <label htmlFor="Phone" className="input-title others">Téléphone</label>
                  <input className="form-input w-input" maxLength="256" name="Phone" data-name="Phone" placeholder="Votre numéro de téléphone" type="tel" id="Phone" required />
                </div>
                <div className="title-input-wrap">
                  <label htmlFor="Text-Field" className="input-title others">Message</label>
                  <textarea id="Text-Field" name="Text-Field" maxLength="5000" data-name="Text Field" placeholder="Décrivez votre projet..." required className="message-box w-input" />
                </div>
                <div button="" className="form-wrap">
                  <input type="submit" data-wait="" className="submit-button w-button" value="" />
                  <a button="" href="#" className="primary-button w-inline-block">
                    <div className="primary-button-mask">
                      <div button-text="" className="button-text">Envoyer un message</div>
                    </div>
                    <div className="button-arrow-wrap">
                      <div className="button-arrow-mask">
                        <img src="/img/69885f803015b25ab017a3b1_Arrow-Icon.svg" loading="lazy" alt="Icon" className="button-arrow-icon one" />
                        <img src="/img/69885f803015b25ab017a3b1_Arrow-Icon.svg" loading="lazy" alt="Icon" className="button-arrow-icon two" />
                      </div>
                    </div>
                  </a>
                </div>
              </form>
              <div className="success-message w-form-done">
                <div className="paragraph-regular text-yellow">Merci ! Votre message a bien été envoyé.</div>
              </div>
              <div className="error-message w-form-fail">
                <div className="paragraph-regular text-yellow">Oups ! Une erreur est survenue, merci de réessayer.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
