import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './/style/index.scss'
import App from './components/app/App'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <App/>
    </StrictMode>  
  </BrowserRouter>

)
