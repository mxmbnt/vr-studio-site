export default function Cta() {
  return (
    <section className="section cta">
      <div className="container cta">
        <div className="cta-layout">
          <div className="cta-left">
            <div className="cta-content-wrap">
              <div className="cta-typography-wrap">
                <div data-w-id="90d6e2cb-c496-59a8-033e-4d999b76b75f" className="cta-label-title-wrap">
                  <div data-wf--label--variant="label-two" className="label-wrap w-variant-c7e566f7-a7da-6486-3a83-8359cf8b1f3a">
                    <div className="label w-variant-c7e566f7-a7da-6486-3a83-8359cf8b1f3a">prêt à vous lancer ?</div>
                  </div>
                  <h2 className="section-title text-white">Faites vivre vos métiers en 360°</h2>
                </div>
                <div data-w-id="90d6e2cb-c496-59a8-033e-4d999b76b764" className="cta-button-text-wrap">
                  <p className="paragraph-regular color-two">Tournage, atelier en classe ou stand sur un forum : parlons de votre projet et de vos métiers à mettre en lumière.</p>
                  <a button="" data-wf--button--variant="base" href="/contact" className="primary-button w-inline-block">
                    <div className="primary-button-mask">
                      <div button-text="" className="button-text">Demander un devis</div>
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
              <div className="cta-video-wrap">
                <div data-poster-url="/media/px-vvr-7547012.jpg" data-video-urls="/media/px-vvr-7547012.mp4" data-autoplay="true" data-loop="true" data-wf-ignore="true" className="cta-video w-background-video w-background-video-atom">
                  <video id="4434ebe5-caa5-3fb7-3af3-d5f284f0e9c4-video" autoPlay loop style={{ backgroundImage: "url(\"/media/px-vvr-7547012.jpg\")" }} muted playsInline data-wf-ignore="true" data-object-fit="cover">
                    <source src="/media/px-vvr-7547012.mp4" data-wf-ignore="true" />
                  </video>
                  <noscript>
                    {"<style>\n  [data-wf-bgvideo-fallback-img] {\n    display: none;\n  }\n  @media (prefers-reduced-motion: reduce) {\n    [data-wf-bgvideo-fallback-img] {\n      position: absolute;\n      z-index: -100;\n      display: inline-block;\n      height: 100%;\n      width: 100%;\n      object-fit: cover;\n    }\n  }</style><img data-wf-bgvideo-fallback-img=\"true\" src=\"/media/px-vvr-7547012.jpg\" alt=\"\"/>"}
                  </noscript>
                  <div aria-live="polite">
                    <button type="button" data-w-bg-video-control="true" aria-controls="4434ebe5-caa5-3fb7-3af3-d5f284f0e9c4-video" className="w-backgroundvideo-backgroundvideoplaypausebutton w-background-video--control">
                      <span>
                        <img src="/img/69968c3ae3b28aa8b475acbd_Pause-Icon.svg" loading="lazy" alt="Mettre la vidéo en pause" className="play-pause-icon" />
                      </span>
                      <span hidden>
                        <img loading="lazy" alt="Lire la vidéo" src="/img/69968c366dca1183fd1fc274_Play-Icon.svg" className="play-pause-icon" />
                      </span>
                    </button>
                  </div>
                </div>
                <div className="cta-overlay" />
              </div>
            </div>
          </div>
          <div data-w-id="90d6e2cb-c496-59a8-033e-4d999b76b769" className="cta-right">
            <div className="cta-image-box">
              <img loading="lazy" src="/img/69907bbc19dfe221e56e155c_Roung.png" alt="Arc décoratif" sizes="(max-width: 1006px) 100vw, 1006px" srcSet="/img/69907bbc19dfe221e56e155c_Roung-p-500.png 500w, /img/69907bbc19dfe221e56e155c_Roung-p-800.png 800w, /img/69907bbc19dfe221e56e155c_Roung.png 1006w" className="cta-bg-image" />
              <img loading="lazy" src="/img/69907cc6aa14223308406eea_Pin.svg" alt="Icon" className="cta-pin-image" />
            </div>
            <div className="cta-image-box">
              <div className="cta-image-wrap one">
                <img width="416" height="324" alt="Collégienne découvrant un métier en casque de réalité virtuelle" src="/media/fit/px-vr-7562429-416x324.jpg" loading="lazy" className="cta-image" />
              </div>
              <div className="cta-image-wrap two">
                <img width="416" height="324" alt="Atelier VR en classe" src="/media/fit/px-vrteen-7869443-416x324.jpg" loading="lazy" className="cta-image" />
              </div>
              <div className="cta-image-wrap three">
                <img width="416" height="324" alt="Participants en immersion dans un métier" src="/media/fit/px-vrclass-5212685-416x324.jpg" loading="lazy" className="cta-image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
