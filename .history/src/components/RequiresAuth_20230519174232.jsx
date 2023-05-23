import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function RequiresAuth({ children }) {
  use
  const { token } = useAuth()
  console.log(token, 'token from requiresAuth')
  const location = useLocation()
  return token ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  )
}
