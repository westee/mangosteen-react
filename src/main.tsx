import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './components/ErrorPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello world!</div>,
    errorElement: <ErrorPage></ErrorPage>
  }, {
    path: '/1',
    element: <div>1</div>,
    errorElement: <ErrorPage></ErrorPage>
  },
])

const root = document.getElementById('root') as HTMLElement
const rootDOM = ReactDOM.createRoot(root)
rootDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
