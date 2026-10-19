import Navbar from '../sections/shared/Navbar.jsx'
import Hero from '../sections/Home/Hero.jsx'
import Marquee from '../sections/shared/Marquee.jsx'
import About from '../sections/Home/About.jsx'
import Services from '../sections/Home/Services.jsx'
import ChooseUs from '../sections/Home/ChooseUs.jsx'
import Projects from '../sections/Home/Projects.jsx'
import Industries from '../sections/Home/Industries.jsx'
import Testimonials from '../sections/Home/Testimonials.jsx'
import Faq from '../sections/shared/Faq.jsx'
import Blog from '../sections/Home/Blog.jsx'
import Cta from '../sections/shared/Cta.jsx'
import Footer from '../sections/shared/Footer.jsx'

// Initial states of the page interactions (from the Webflow <head>)
const css = "html.w-mod-js:not(.w-mod-ix3) :is(:is([link-box], [link-box]) [link], :is([nav], [nav]) [nav-link], :is([button], [button]) [button-text], :is([button], [button]) .button-arrow-icon.one, :is([button], [button]) .button-arrow-icon.two) {visibility: hidden !important;}"

export default function Home() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <ChooseUs />
      <Projects />
      <Industries />
      <Testimonials />
      <Faq />
      <Blog />
      <Cta />
      <Footer />
    </>
  )
}
