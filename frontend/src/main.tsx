import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoute from './AppRoute.tsx'
import { BrowserRouter } from "react-router-dom";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      < AppRoute />
    </BrowserRouter>
  </StrictMode>
)
