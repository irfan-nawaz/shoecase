import { Navigate } from 'react-router-dom'
import { useAuth } from '../assets/context/AuthContext'

export default function RequiresAuth({ children }) {
  const { token } = useAuth()
  console.log(token)
  return token ? children : <Navigate to="/login" replace />
}
