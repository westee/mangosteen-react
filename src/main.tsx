import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const root = document.getElementById('root') as HTMLElement
const rootDOM = ReactDOM.createRoot(root)
rootDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
