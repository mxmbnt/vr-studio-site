import Navbar from '../sections/shared/Navbar.jsx'
import ServiceList from '../sections/Services/ServiceList.jsx'
import Cta from '../sections/shared/Cta.jsx'
import Footer from '../sections/shared/Footer.jsx'

// Initial states of the page interactions (from the Webflow <head>)
const css = "html.w-mod-js:not(.w-mod-ix3) :is(:is([link-box], [link-box]) [link], :is([nav], [nav]) [nav-link], :is([button], [button]) [button-text], :is([button], [button]) .button-arrow-icon.one, :is([button], [button]) .button-arrow-icon.two) {visibility: hidden !important;}"

export default function Services() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <Navbar />
      <ServiceList />
      <Cta />
      <Footer />
    </>
  )
}
