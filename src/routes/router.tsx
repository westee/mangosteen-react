import { createBrowserRouter } from 'react-router-dom'
import RedirectToWelcome from '../components/RedirectToWelcome'
import { MainLayout } from '../layouts/MainLayout'
import { welcomeRoutes } from './welcomeRoutes'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <RedirectToWelcome />,
    children: [
      welcomeRoutes
    ],
  },
])
