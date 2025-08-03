import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/libs/sneat/css/core.css'
import '@/libs/sneat/css/demo.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
