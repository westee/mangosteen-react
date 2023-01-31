import { createBrowserRouter } from 'react-router-dom'
import NotFundPage from '../pages/NotFundPage'
import { MainLayout } from '../layouts/MainLayout'
import { Root } from '../components/Root'
import { Home } from '../pages/Home'
import { welcomeRoutes } from './welcomeRoutes'

export const router = createBrowserRouter([
  {
    path: '/root',
    element: <Root />
  },
  {
    path: '/home',
    element: <Home />,
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
