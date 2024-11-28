import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoute from './AppRoute.tsx'
import { BrowserRouter } from "react-router-dom";
import Auth0ProviderWithNavigate from './auth/Auth0ProviderWithNavigate.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      < Auth0ProviderWithNavigate>
        < AppRoute />
      </ Auth0ProviderWithNavigate >
    </BrowserRouter>
  </StrictMode>
)
