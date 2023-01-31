import { Navigate, Outlet } from 'react-router-dom'

export const MainLayout: React.FC = () => {
  const welcomeStatus = localStorage.getItem('isDisplayWelcome')
  if (welcomeStatus === 'yes') {
    return <Navigate to="/home"></Navigate>
  } else {
    return <div><Outlet /></div>
  }
}
