export default function Hero() {
  return (
    <section className="section">
      <div className="container hero">
        <div className="about-hero-layout">
          <div className="about-hero-video">
            <div data-poster-url="/media/px-vvr-855770.jpg" data-video-urls="/media/px-vvr-855770.mp4" data-autoplay="true" data-loop="true" data-wf-ignore="true" className="about-hero w-background-video w-background-video-atom">
              <video id="213fe7a1-41ec-d0aa-4a77-f3bb93f85f77-video" autoPlay loop style={{ backgroundImage: "url(\"/media/px-vvr-855770.jpg\")" }} muted playsInline data-wf-ignore="true" data-object-fit="cover">
                <source src="/media/px-vvr-855770.mp4" data-wf-ignore="true" />
              </video>
              <noscript>
                {"<style>\n  [data-wf-bgvideo-fallback-img] {\n    display: none;\n  }\n  @media (prefers-reduced-motion: reduce) {\n    [data-wf-bgvideo-fallback-img] {\n      position: absolute;\n      z-index: -100;\n      display: inline-block;\n      height: 100%;\n      width: 100%;\n      object-fit: cover;\n    }\n  }</style><img data-wf-bgvideo-fallback-img=\"true\" src=\"/media/px-vvr-855770.jpg\" alt=\"\"/>"}
              </noscript>
              <div aria-live="polite">
                <button type="button" data-w-bg-video-control="true" aria-controls="213fe7a1-41ec-d0aa-4a77-f3bb93f85f77-video" className="w-backgroundvideo-backgroundvideoplaypausebutton play-pause-button w-background-video--control">
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
          <div className="about-hero-overlay" />
          <div data-w-id="55366818-cd65-d2be-6f01-057b8f41c7be" style={{ opacity: "0" }} className="about-hero-content-wrap">
            <div className="about-hero-left-box-wrap">
              <div data-wf--label--variant="base" className="label-wrap">
                <div className="label">à propos</div>
              </div>
              <div className="about-hero-title-review-wrap">
                <h1 className="page-title text-white about">Filmer le travail pour mieux choisir son avenir.</h1>
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
            <div className="about-video-card-wrap">
              <div className="about-card-text">Captation 360°</div>
              <div className="about-video-card">
                <div data-poster-url="/media/px-vvr-5239022.jpg" data-video-urls="/media/px-vvr-5239022.mp4" data-autoplay="true" data-loop="true" data-wf-ignore="true" className="about-card-video w-background-video w-background-video-atom">
                  <video id="bae3c428-1c28-3f74-fab0-6ae293f0e935-video" autoPlay loop style={{ backgroundImage: "url(\"/media/px-vvr-5239022.jpg\")" }} muted playsInline data-wf-ignore="true" data-object-fit="cover">
                    <source src="/media/px-vvr-5239022.mp4" data-wf-ignore="true" />
                  </video>
                  <noscript>
                    {"<style>\n  [data-wf-bgvideo-fallback-img] {\n    display: none;\n  }\n  @media (prefers-reduced-motion: reduce) {\n    [data-wf-bgvideo-fallback-img] {\n      position: absolute;\n      z-index: -100;\n      display: inline-block;\n      height: 100%;\n      width: 100%;\n      object-fit: cover;\n    }\n  }</style><img data-wf-bgvideo-fallback-img=\"true\" src=\"/media/px-vvr-5239022.jpg\" alt=\"\"/>"}
                  </noscript>
                  <div aria-live="polite">
                    <button type="button" data-w-bg-video-control="true" aria-controls="bae3c428-1c28-3f74-fab0-6ae293f0e935-video" className="w-backgroundvideo-backgroundvideoplaypausebutton play-pause-button-icon w-background-video--control">
                      <span>
                        <img src="/img/69968c3ae3b28aa8b475acbd_Pause-Icon.svg" loading="lazy" alt="Mettre la vidéo en pause" className="play-pause-icon" />
                      </span>
                      <span hidden>
                        <img loading="lazy" alt="Lire la vidéo" src="/img/69968c366dca1183fd1fc274_Play-Icon.svg" className="play-pause-icon" />
                      </span>
                    </button>
                  </div>
                </div>
                <div className="about-card-overlay" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
