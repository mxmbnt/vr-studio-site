import Navbar from '../sections/shared/Navbar.jsx'
import UtilityPageWrap from '../sections/NotFound/UtilityPageWrap.jsx'
import Footer from '../sections/shared/Footer.jsx'

// Initial states of the page interactions (from the Webflow <head>)
const css = "html.w-mod-js:not(.w-mod-ix3) :is([link], [nav-link], [button-text], .button-arrow-icon.one, .button-arrow-icon.two) {visibility: hidden !important;}"

export default function NotFound() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <Navbar />
      <UtilityPageWrap />
      <Footer />
    </>
  )
}
