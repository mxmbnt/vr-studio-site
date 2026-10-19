export default function Contact() {
  return (
    <section className="section contact">
      <div className="container no-gap">
        <div className="contact-us-layout">
          <div className="contact-top-box">
            <div data-w-id="bddbd5d0-f219-1374-bd72-5e9826e506de" style={{ opacity: "0" }} className="contact-top-wrap">
              <div data-wf--link-label--variant="version-2" className="blog-link-box">
                <a href="/" className="label-link w-variant-6ba2a014-dc03-21fa-c588-97454bce2f37">Accueil</a>
                <div className="label-link w-variant-6ba2a014-dc03-21fa-c588-97454bce2f37 version-two">/</div>
                <a href="/contact" aria-current="page" className="label-link w-variant-6ba2a014-dc03-21fa-c588-97454bce2f37 version-two w--current">Contact</a>
                <div className="label-link w-variant-6ba2a014-dc03-21fa-c588-97454bce2f37 active">/</div>
                <a href="#" className="label-link w-variant-6ba2a014-dc03-21fa-c588-97454bce2f37 active">Nous écrire</a>
              </div>
              <div className="contact-title-text-wrap">
                <h1 className="inner-page-title">Parlons de vos métiers</h1>
                <p className="paragraph-regular">Un tournage, un atelier en classe, un stand sur un forum ? Décrivez-nous votre projet, nous revenons vers vous rapidement.</p>
              </div>
            </div>
            <div data-w-id="ae817149-d949-a614-343f-dee0bf18c329" style={{ opacity: "0" }} className="contact-card-wrap">
              <div className="contact-card-box">
                <div className="contact-card">
                  <img loading="lazy" src="/img/69945558ef47fc282804548e_Call.svg" alt="" className="contact-card-icon" />
                  <div className="contact-card-info">
                    <h2 className="contact-card-title">Téléphone</h2>
                    <p className="contact-text">06 00 00 00 00</p>
                  </div>
                </div>
              </div>
              <div className="contact-card-box">
                <div className="contact-card">
                  <img loading="lazy" src="/img/699457462c025e8c67a4a296_Email.svg" alt="" className="contact-card-icon" />
                  <div className="contact-card-info">
                    <h2 className="contact-card-title">Email</h2>
                    <p className="contact-text">contact@vrstudio.fr</p>
                  </div>
                </div>
              </div>
              <div className="contact-card-box">
                <div className="contact-card">
                  <img loading="lazy" src="/img/699457461c7b6415714e908c_Placeholder.svg" alt="" className="contact-card-icon" />
                  <div className="contact-card-info">
                    <h2 className="contact-card-title">Zone d’intervention</h2>
                    <p className="contact-text">Ain et Auvergne-Rhône-Alpes</p>
                  </div>
                </div>
              </div>
              <div className="contact-card-box">
                <div className="contact-card">
                  <img loading="lazy" src="/img/699457467086e11ff13d2b0c_Time.svg" alt="" className="contact-card-icon" />
                  <div className="contact-card-info">
                    <h2 className="contact-card-title">Disponibilités</h2>
                    <p className="contact-text">Du lundi au vendredi, de 9h à 18h</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-w-id="d0757baf-230b-d236-2b1d-399ee67f34a0" style={{ opacity: "0" }} className="contact-banner-image-wrap">
            <img src="/media/fit/px-vrclass-8457443-1880x682.jpg" loading="lazy" width="1880" height="682" alt="Atelier découverte métiers en casques de réalité virtuelle" className="contact-banner-image" />
          </div>
          <div data-w-id="4a0a3613-ca29-ce81-f290-c974bfcfc003" style={{ opacity: "0" }} className="contact-form-box">
            <div className="contact-form-wrap w-form">
              <form id="email-form" name="email-form" data-name="Email Form" method="get" className="contact-box" data-wf-page-id="6988389e8a397a610608613f" data-wf-element-id="1fc878a1-84b3-b480-936c-5ffe16f45171">
                <div className="contact-from-box">
                  <div className="contact-form-item">
                    <label htmlFor="name" className="input-title">Nom complet *</label>
                    <input className="input-field w-input" maxLength="256" name="name" data-name="Name" placeholder="Prénom Nom" type="text" id="name" required />
                  </div>
                  <div className="contact-form-item">
                    <label htmlFor="email" className="input-title">Adresse email *</label>
                    <input className="input-field w-input" maxLength="256" name="email" data-name="Email" placeholder="vous@exemple.fr" type="email" id="email" required />
                  </div>
                </div>
                <div className="contact-from-box">
                  <div className="contact-form-item">
                    <label htmlFor="Number" className="input-title">Téléphone (facultatif)</label>
                    <input className="input-field w-input" maxLength="256" name="Number" data-name="Number" placeholder="06 00 00 00 00" type="tel" id="Number" required />
                  </div>
                  <div className="contact-form-item">
                    <label htmlFor="Subject" className="input-title">Votre projet *</label>
                    <select id="Subject" name="Subject" data-name="Subject" className="input-field select w-select">
                      <option value="">Choisissez...</option>
                      <option value="First">Captation 360° de métiers</option>
                      <option value="Second">Atelier découverte métiers</option>
                      <option value="Third">Salon, forum ou autre projet</option>
                    </select>
                  </div>
                </div>
                <div className="contact-from-box message">
                  <label htmlFor="Message" className="input-title">Message</label>
                  <textarea required placeholder="Votre structure, le public visé, vos dates..." maxLength="5000" id="Message" name="Message" data-name="Message" className="input-field message w-node-afcf17d9-b42e-e0a7-cf73-66e7c8ddbe55-0608613f w-input" />
                </div>
                <div className="contact-button-box">
                  <div button="" className="contact-button-wrap">
                    <input type="submit" data-wait="" className="submit-button-contact w-button" value="" />
                    <div className="contact-hover-box">
                      <a button="" data-wf--button--variant="base" href="#" className="primary-button w-inline-block">
                        <div className="primary-button-mask">
                          <div button-text="" className="button-text">Envoyer un message</div>
                        </div>
                        <div className="button-arrow-wrap">
                          <div className="button-arrow-mask">
                            <img loading="lazy" src="/img/69885f803015b25ab017a3b1_Arrow-Icon.svg" alt="Icon" className="button-arrow-icon one" />
                            <img loading="lazy" src="/img/69885f803015b25ab017a3b1_Arrow-Icon.svg" alt="Icon" className="button-arrow-icon two" />
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
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
