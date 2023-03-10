import { Navigate } from 'react-router-dom'

export const Root = () => {
  const hasRead = localStorage.getItem('hasReadWelcomes')
  if (hasRead === 'yes') {
    return <Navigate to="/home" />
  } else {
    return <Navigate to="/welcome/1" />
  }
}
