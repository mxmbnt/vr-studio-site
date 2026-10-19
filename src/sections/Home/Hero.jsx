export default function Hero() {
  return (
    <section className="section herro">
      <div className="container hero">
        <div className="home-hero-wrap">
          <div className="home-hero-content-wrap">
            <div className="home-hero-top-wrap">
              <h1 className="hero-title">Les métiers au plus près de la réalité.</h1>
              <div className="hero-text-button-wrap">
                <p className="hero-title-details">
                  Nous filmons les métiers en 360° et les faisons vivre en casque de réalité virtuelle aux élèves, aux demandeurs d’emploi et à vos futurs talents.
                </p>
                <div className="hero-button-wrap">
                  <div className="hero-button">
                    <a button="" data-wf--button--variant="base" href="/contact" className="primary-button w-inline-block">
                      <div className="primary-button-mask">
                        <div button-text="" className="button-text">Demander une démo</div>
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
            </div>
            <div className="home-hero-bottom-wrap">
              <div className="count-box">
                <div data-offset="100%" className="count-text counter">360°</div>
                <p className="count-details-text" style={{ color: "var(--_color---white)" }}>d’immersion dans le métier</p>
              </div>
              <div data-wf--review-box--variant="base" className="review-box-wrap">
                <div className="image-box-wrap">
                  <div className="image-box one">
                    <img loading="lazy" src="/media/li-atelier-college-2.jpg" alt="Élève en casque de réalité virtuelle" className="reviewer-image" />
                  </div>
                  <div className="image-box two">
                    <img loading="lazy" src="/media/li-atelier-insertion.jpg" alt="Participante découvrant un métier en VR" className="reviewer-image" />
                  </div>
                  <div className="image-box three">
                    <img loading="lazy" src="/media/li-atelier-college-3.jpg" alt="Collégien en atelier découverte métiers" className="reviewer-image" />
                  </div>
                  <div className="image-box four">
                    <img loading="lazy" src="/media/px-vrteen-7241509.jpg" alt="Jeune en immersion 360°" className="reviewer-image" />
                  </div>
                </div>
                <div className="rate-wrap">
                  <div className="rate">VR</div>
                  <img loading="lazy" src="/media/vr-studio-logo.jpg" alt="VR STUDIO" className="star-icon" style={{ width: "22px", height: "22px", borderRadius: "6px" }} />
                </div>
              </div>
            </div>
          </div>
          <div className="home-hero-video-wrap">
            <div data-poster-url="/media/px-vvr-7942933.jpg" data-video-urls="/media/px-vvr-7942933.mp4" data-autoplay="true" data-loop="true" data-wf-ignore="true" className="hero-video w-background-video w-background-video-atom">
              <video id="500ad786-2807-701a-e802-4430beabf509-video" autoPlay loop style={{ backgroundImage: "url(\"/media/px-vvr-7942933.jpg\")" }} muted playsInline data-wf-ignore="true" data-object-fit="cover">
                <source src="/media/px-vvr-7942933.mp4" data-wf-ignore="true" />
              </video>
              <noscript>
                {"<style>\n  [data-wf-bgvideo-fallback-img] {\n    display: none;\n  }\n  @media (prefers-reduced-motion: reduce) {\n    [data-wf-bgvideo-fallback-img] {\n      position: absolute;\n      z-index: -100;\n      display: inline-block;\n      height: 100%;\n      width: 100%;\n      object-fit: cover;\n    }\n  }</style><img data-wf-bgvideo-fallback-img=\"true\" src=\"/media/px-vvr-7942933.jpg\" alt=\"\"/>"}
              </noscript>
              <div aria-live="polite">
                <button type="button" data-w-bg-video-control="true" aria-controls="500ad786-2807-701a-e802-4430beabf509-video" className="w-backgroundvideo-backgroundvideoplaypausebutton w-background-video--control">
                  <span>
                    <img src="/img/69968c3ae3b28aa8b475acbd_Pause-Icon.svg" loading="lazy" alt="Mettre la vidéo en pause" className="play-pause-icon" />
                  </span>
                  <span hidden>
                    <img loading="lazy" alt="Lire la vidéo" src="/img/69968c366dca1183fd1fc274_Play-Icon.svg" className="play-pause-icon" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
