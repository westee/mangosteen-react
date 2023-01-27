import React from 'react'
import ReactDOM from 'react-dom/client'
import { NavLink, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import RedirectToWelcome from './components/RedirectToWelcome'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Outlet></Outlet>,
    errorElement: <RedirectToWelcome></RedirectToWelcome>,
    children: [
      {
        index: true,
        element: <div>index</div>,
      }, {
        path: 'welcome/',
        element: <Outlet />,
        children: [
          {
            path: '1',
            element: <div>1 <NavLink to="/welcome/2">下一页</NavLink>   </div>,
          },
          {
            path: '2',
            element: <div>1 <NavLink to="/welcome/3">下一页</NavLink>   </div>,
          },
          {
            path: '3',
            element: <div>1 <NavLink to="/welcome/4">下一页</NavLink>   </div>,
          },
          {
            path: '4',
            element: <div>1 <NavLink to="/xxx">下一页</NavLink>   </div>,
          }
        ]

      },
    ],
  },
])

const root = document.getElementById('root') as HTMLElement
const rootDOM = ReactDOM.createRoot(root)
rootDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
