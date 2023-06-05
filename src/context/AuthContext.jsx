import { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios'
import { login, signup } from '../api/auth'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const localStorageToken = JSON.parse(localStorage.getItem('token'))
  const navigate = useNavigate()
  const location = useLocation()
  const [token, setToken] = useState(localStorageToken?.token)
  const [userDetails, setUserDetails] = useState(localStorageToken?.user)

  async function getUser({ email, password }) {
    console.log(email, password)
    try {
      const {
        data: { foundUser, encodedToken },
      } = await login({ email, password })
      console.log(encodedToken, 'ec')
      localStorage.setItem(
        'token',
        JSON.stringify({ token: encodedToken, user: foundUser }),
      )
      setToken(encodedToken)
      setUserDetails(foundUser)
      navigate(location?.state?.from?.pathname ?? '/', { replace: true })
    } catch {
      console.error('invalid Credentials')
    }
  }

  async function setUser({ email, password }, e) {
    try {
      e.preventDefault()
      const {
        data: { createdUser, encodedToken },
      } = await signup({ email, password })
      localStorage.setItem(
        'token',
        JSON.stringify({ token: encodedToken, user: createdUser }),
      )
      setToken(encodedToken)
      setUserDetails(createdUser)
      navigate('/')
    } catch {
      console.error('invalid signup')
    }
  }
  return (
    <AuthContext.Provider
      value={{ getUser, setUser, token, setToken, userDetails, setUserDetails }}
    >
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => useContext(AuthContext)

export { AuthProvider, useAuth }
