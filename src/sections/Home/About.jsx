export default function About() {
  return (
    <section className="section about">
      <div className="container">
        <div className="about-layout">
          <div className="about-top-wrap">
            <div data-w-id="00eb508e-a309-3823-b2cd-f34dc2b07d25" className="about-statistics-wrap">
              <div data-wf--label--variant="base" className="label-wrap">
                <div className="label">à propos</div>
              </div>
              <div className="about-count-box">
                <div className="count-text-wrap">
                  <div data-offset="80%" className="about-count-text counter">2023</div>
                  <p className="paragraph-regular">Année de création</p>
                </div>
                <div className="count-text-wrap two">
                  <div data-offset="80%" className="about-count-text counter">8+</div>
                  <p className="paragraph-regular">Structures accompagnées</p>
                </div>
                <img loading="lazy" src="/img/6989afb4c2d98286a8f75220_Icon-Design.svg" alt="Icon" className="icon-box" />
              </div>
            </div>
            <div className="line" />
            <div className="about-typography-wrap">
              <div className="about-text-button-wrap">
                <div data-w-id="00eb508e-a309-3823-b2cd-f34dc2b07d36" className="about-title-details-wrap">
                  <h2 className="about-title-text">Une équipe qui filme le travail tel qu’il se vit, pour que chacun puisse s’y projeter.</h2>
                  <p className="paragraph-regular">
                    VR STUDIO est spécialisée dans la création de contenus immersifs en 360°. Nous filmons les professionnels dans leur environnement réel, puis faisons vivre ces métiers en casque de réalité virtuelle aux collégiens, lycéens, demandeurs d’emploi et candidats. Une façon dynamique et concrète de découvrir un métier avant de s’y engager.
                  </p>
                </div>
                <div data-w-id="00eb508e-a309-3823-b2cd-f34dc2b07d3b" className="about-button-box">
                  <a button="" data-wf--button--variant="base" href="/a-propos" className="primary-button w-inline-block">
                    <div className="primary-button-mask">
                      <div button-text="" className="button-text">Découvrir VR STUDIO</div>
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
          <div className="about-content-wrap">
            <div data-w-id="00eb508e-a309-3823-b2cd-f34dc2b07d3f" className="about-image-wrap">
              <img width="540" height="452" alt="Collégiens découvrant des métiers en casque de réalité virtuelle" src="/media/fit/li-atelier-college-1-540x452.jpg" loading="eager" className="about-image" />
            </div>
            <div data-w-id="00eb508e-a309-3823-b2cd-f34dc2b07d41" className="about-lottie-wrap">
              <div data-w-id="27299230-a6b2-a89f-61a0-c60cfe39e8d5" data-animation-type="lottie" data-src="/lottie/69930d14fb5e6c8adea83899_animaton-1.lottie" data-loop="1" data-direction="1" data-autoplay="1" data-is-ix2-target="0" data-renderer="svg" data-default-duration="0" data-duration="2.0166666666666666" data-loading="eager" />
            </div>
            <div data-w-id="00eb508e-a309-3823-b2cd-f34dc2b07d43" className="about-video-wrap">
              <div data-poster-url="/media/px-vvr-8762827.jpg" data-video-urls="/media/px-vvr-8762827.mp4" data-autoplay="true" data-loop="true" data-wf-ignore="true" className="about-video w-background-video w-background-video-atom">
                <video id="b8f1c3e7-7310-1d2c-82d5-325a3ba39ce6-video" autoPlay loop style={{ backgroundImage: "url(\"/media/px-vvr-8762827.jpg\")" }} muted playsInline data-wf-ignore="true" data-object-fit="cover">
                  <source src="/media/px-vvr-8762827.mp4" data-wf-ignore="true" />
                </video>
                <noscript>
                  {"<style>\n  [data-wf-bgvideo-fallback-img] {\n    display: none;\n  }\n  @media (prefers-reduced-motion: reduce) {\n    [data-wf-bgvideo-fallback-img] {\n      position: absolute;\n      z-index: -100;\n      display: inline-block;\n      height: 100%;\n      width: 100%;\n      object-fit: cover;\n    }\n  }</style><img data-wf-bgvideo-fallback-img=\"true\" src=\"/media/px-vvr-8762827.jpg\" alt=\"\"/>"}
                </noscript>
                <div aria-live="polite">
                  <button type="button" data-w-bg-video-control="true" aria-controls="b8f1c3e7-7310-1d2c-82d5-325a3ba39ce6-video" className="w-backgroundvideo-backgroundvideoplaypausebutton w-background-video--control">
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
      </div>
    </section>
  )
}
