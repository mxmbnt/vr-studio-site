import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// No StrictMode: the Webflow runtime mutates the DOM once after the first render and must only start once
ReactDOM.createRoot(document.getElementById('root')).render(<App />)
