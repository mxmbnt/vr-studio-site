import { useEffect } from 'react'
import { resolve } from './router.js'
import { initWebflow } from './lib/webflow-runtime.js'

const route = resolve(window.location.pathname)
const { Page, title, wrapper } = route

export default function App() {
  useEffect(() => {
    document.title = title === 'VR STUDIO' ? 'VR STUDIO | Les métiers au plus près de la réalité' : `${title} | VR STUDIO`
    initWebflow(route)
  }, [])

  return (
    <div className={wrapper}>
      <Page />
    </div>
  )
}
