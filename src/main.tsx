import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'
import 'virtual:uno.css'
import './global.css'
const root = document.getElementById('root') as HTMLElement
const rootDOM = ReactDOM.createRoot(root)
rootDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
