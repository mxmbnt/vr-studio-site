// Contenu de chaque offre : src/data/offres.js
export default function ServiceDetails({ content }) {
  return (
    <section className="section service-details">
      <div className="container">
        <div className="service-bottom-layout">
          <div data-w-id="260bb713-e2ed-8b8c-eb14-923565c150ec" style={{ opacity: "0" }} className="service-details-box">
            <div className="service-top w-richtext">
              <h2>{content.title}</h2>
              {content.intro.map((t) => (
                <p key={t}>{t}</p>
              ))}
            </div>
            <div className="w-dyn-list">
              <div role="list" className="service-details-image w-dyn-items">
                {content.images.map((src) => (
                  <div role="listitem" className="w-dyn-item w-dyn-repeater-item" key={src}>
                    <div className="service-image-wrap">
                      <img src={src} loading="lazy" width="480" height="500" alt={content.title} className="service-image" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="service-image-next w-richtext">
              {content.steps.map((step) => (
                <div key={step.title}>
                  <h2>{step.title}</h2>
                  <p>{step.text}</p>
                </div>
              ))}
              <h2>En bref</h2>
              <p>{content.overview}</p>
              <figure className="w-richtext-align-floatleft w-richtext-figure-type-image">
                <div>
                  <img alt={content.title} src={content.figure} loading="lazy" />
                </div>
              </figure>
              <p>{content.overview2}</p>
            </div>
            <div className="service-bottom-text w-richtext">
              <h2>Ce qui est inclus</h2>
              <p>{content.included}</p>
              <p>
                <strong>{content.highlight}</strong>
              </p>
              <ul role="list">
                {content.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div data-w-id="b4824d4c-8d60-1201-7a5c-7ff510154c22" style={{ opacity: "0" }} className="service-details-form">
            <h2 className="service-form-title">{"Parlons de votre projet"}</h2>
            <div className="w-form">
              <form id="email-form" name="email-form" data-name="Email Form" method="get" className="form" data-wf-page-id="6989c10c81ed13231b204e79" data-wf-element-id="b4824d4c-8d60-1201-7a5c-7ff510154c26">
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
