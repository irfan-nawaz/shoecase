import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { makeServer } from './server'
import App from './App'

import { AuthProvider } from './context/AuthContext'

// Call make Server
makeServer()

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
    <App />
    {/* </AuthProvider> */}
  </BrowserRouter>,
)
