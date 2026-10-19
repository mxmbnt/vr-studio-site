import Navbar from '../sections/shared/Navbar.jsx'
import Hero from '../sections/AboutUs/Hero.jsx'
import Marquee from '../sections/shared/Marquee.jsx'
import About from '../sections/AboutUs/About.jsx'
import Vision from '../sections/AboutUs/Vision.jsx'
import Team from '../sections/AboutUs/Team.jsx'
import Faq from '../sections/AboutUs/Faq.jsx'
import Cta from '../sections/shared/Cta.jsx'
import Footer from '../sections/shared/Footer.jsx'

// Initial states of the page interactions (from the Webflow <head>)
const css = "html.w-mod-js:not(.w-mod-ix3) :is(:is([link-box], [link-box]) [link], :is([nav], [nav]) [nav-link], :is([button], [button]) [button-text], :is([button], [button]) .button-arrow-icon.one, :is([button], [button]) .button-arrow-icon.two) {visibility: hidden !important;}"

export default function AboutUs() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Vision />
      <Team />
      <Faq />
      <Cta />
      <Footer />
    </>
  )
}
