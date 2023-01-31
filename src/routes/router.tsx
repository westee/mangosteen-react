import { createBrowserRouter } from 'react-router-dom'
import NotFundPage from '../pages/NotFundPage'
import { MainLayout } from '../layouts/MainLayout'
import { welcomeRoutes } from './welcomeRoutes'

export const router = createBrowserRouter([
  {
    path: '/home',
    element: <div>home</div>,
    errorElement: <NotFundPage />,
  },
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFundPage />,
    children: [
      welcomeRoutes
    ],
  },
])
