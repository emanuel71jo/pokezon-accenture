import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { AuthProvider } from './providers/AuthProvider'
import { ShoppingProvider } from './providers/ShoppingProvider'

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <ShoppingProvider>
        <App />
      </ShoppingProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
