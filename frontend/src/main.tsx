import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoute from './AppRoute.tsx'
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query"
import Auth0ProviderWithNavigate from './auth/Auth0ProviderWithNavigate.tsx';


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        < Auth0ProviderWithNavigate>
          < AppRoute />
        </ Auth0ProviderWithNavigate >
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
)
