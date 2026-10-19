export default function Projects() {
  return (
    <section className="section project">
      <div className="container projcet">
        <div className="project-layout">
          <div className="porject-box">
            <div data-current="Tab 2" data-easing="ease-out-back" data-duration-in="177" data-duration-out="167" className="project-list-wrap w-tabs">
              <div className="project-list w-tab-menu">
                <a data-w-tab="Tab 1" data-w-id="500ad786-2807-701a-e802-4430beabf542" style={{ opacity: "0" }} className="project-item w-inline-block w-tab-link">
                  <img src="/media/fit/li-video-kinesitherapeute-177x167.jpg" loading="lazy" width="177" height="167" alt="Captation du métier de kinésithérapeute" className="tab-image" />
                </a>
                <a data-w-tab="Tab 2" data-w-id="500ad786-2807-701a-e802-4430beabf544" style={{ opacity: "0" }} className="project-item w-inline-block w-tab-link w--current">
                  <img src="/media/fit/li-video-teleassistance-serenite-177x167.jpg" loading="lazy" width="177" height="167" alt="Vidéo 360° pour Téléassistance Sérénité" className="tab-image" />
                </a>
                <a data-w-tab="Tab 3" data-w-id="500ad786-2807-701a-e802-4430beabf546" style={{ opacity: "0" }} className="project-item w-inline-block w-tab-link">
                  <img src="/media/fit/li-atelier-college-1-177x167.jpg" loading="lazy" width="177" height="167" alt="Atelier découverte métiers au collège" className="tab-image" />
                </a>
              </div>
              <div className="tabs-content w-tab-content">
                <div data-w-tab="Tab 1" className="tab-pane w-tab-pane">
                  <div className="w-dyn-list">
                    <div role="list" className="w-dyn-items">
                      <div role="listitem" className="w-dyn-item">
                        <a aria-label="Link" href="/realisations/kinesitherapeute-en-360" className="project-image-wrap w-inline-block">
                          <img src="/media/fit/li-video-kinesitherapeute-885x830.jpg" loading="lazy" width="885" height="830" alt="Réalisation VR STUDIO" className="project-image" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-w-tab="Tab 2" className="tab-pane w-tab-pane w--tab-active">
                  <div className="w-dyn-list">
                    <div role="list" className="w-dyn-items">
                      <div role="listitem" className="w-dyn-item">
                        <a aria-label="Link" href="/realisations/teleassistance-serenite" className="project-image-wrap w-inline-block">
                          <img src="/media/fit/li-video-teleassistance-serenite-885x830.jpg" loading="lazy" width="885" height="830" alt="Réalisation VR STUDIO" className="project-image" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-w-tab="Tab 3" className="tab-pane w-tab-pane">
                  <div className="w-dyn-list">
                    <div role="list" className="w-dyn-items">
                      <div role="listitem" className="w-dyn-item">
                        <a aria-label="Link" href="/realisations/college-saint-exupery-parcours-avenir" className="project-image-wrap w-inline-block">
                          <img src="/media/fit/li-atelier-college-1-885x830.jpg" loading="lazy" width="885" height="830" alt="Réalisation VR STUDIO" className="project-image" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-info-tab-wrap">
              <div data-w-id="500ad786-2807-701a-e802-4430beabf565" style={{ opacity: "0" }} className="project-info-wrap">
                <div data-wf--label--variant="base" className="label-wrap">
                  <div className="label">réalisations</div>
                </div>
                <div className="project-typography-wrap">
                  <h2 className="project-title home-one">Nos dernières réalisations</h2>
                  <p className="paragraph-regular">Des métiers filmés sur le terrain, avec et pour nos partenaires.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="snack-box">
          <div className="svg-path w-embed">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 486" preserveAspectRatio="xMidYMid slice">
              {" "}
              <defs>
                {" "}
                <path id="curve-path" d="M-110 347.775C-110 347.775 72.4815 114.757 262.115 138.15C420.511 157.69 357.971 327.748 516.22 347.775C706.723 371.885 697.86 135.168 891.952 138.15C1080.9 141.054 1062.01 335.534 1250.05 347.775C1462.7 361.619 1477.97 120.773 1689.99 138.15C1872.35 153.097 2030 347.775 2030 347.775" />
                {" "}
              </defs>
              {" "}
              {" "}
              <use href="#curve-path" stroke="#FF6000" strokeWidth="81" fill="none" />
              {" "}
              {" "}
              <text fontSize="50" fontWeight="700" letter-spcaeing="0.04em" fill="#252525" dominantBaseline="middle">
                {" "}
                <textPath id="curved-text" href="#curve-path" startOffset="50%" textAnchor="middle">
                  {" "}
                </textPath>
                {" "}
              </text>
              {" "}
            </svg>
          </div>
          <div className="svg-code w-embed w-script">
          </div>
          <div data-curve-text-source="cta-text" className="cta-text-source">Les métiers au plus près de la réalité. Filmés en 360°. Vécus en casque VR.</div>
        </div>
      </div>
    </section>
  )
}
