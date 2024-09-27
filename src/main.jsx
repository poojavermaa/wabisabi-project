import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';

createRoot(document.getElementById('root')).render(
  
<Auth0Provider
    domain="dev-glitwgv0r8vy84jc.us.auth0.com"
    clientId="WOrztAb7SQxYskzHZ8WVP3oBpl1QfTyL"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
  
)
