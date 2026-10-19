// Loads the template's original Webflow runtime (served from public/js) once the page is rendered.
// It drives everything the Webflow export did: IX2 / IX3 interactions (GSAP), navbar, dropdowns, tabs,
// background videos, Lottie animations and current-link highlighting.
import { initCustom } from './custom.js'

const SITE_ID = '698835f37275dde67f6e38ed'

function load(src) {
  return new Promise((resolve, reject) => {
    const s = document.createElement('script')
    s.src = src
    s.async = false
    s.onload = resolve
    s.onerror = () => reject(new Error(`Failed to load ${src}`))
    document.body.appendChild(s)
  })
}

let started = false

export async function initWebflow({ wfPage, chunks, schunk3 }) {
  if (started) return
  started = true
  const html = document.documentElement
  // The runtime picks the page's interactions from these attributes
  html.setAttribute('data-wf-page', wfPage)
  html.setAttribute('data-wf-site', SITE_ID)

  // Same order as the Webflow export: GSAP is loaded first so IX3 finds it when it initialises
  const scripts = [
    '/js/gsap.min.js',
    '/js/ScrollTrigger.min.js',
    '/js/SplitText.min.js',
    '/js/jquery-3.5.1.min.js',
    '/js/webflow.schunk.f2efb3c5440a81cf.js',
    '/js/webflow.schunk.5694805ae25773d1.js',
    ...(schunk3 ? ['/js/webflow.schunk.6af430274fe922d1.js'] : []),
    ...chunks.map((c) => `/js/${c}`),
  ]
  for (const src of scripts) await load(src)
  window.gsap.registerPlugin(window.ScrollTrigger, window.SplitText)
  initCustom()
}
