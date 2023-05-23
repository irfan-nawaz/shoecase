import { createContext, useContext, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [token, setToken] = useState(null)
  async function getUser({
    email = 'adarshbalika@gmail.com',
    password = 'adarshbalika',
  }) {
    console.log(email, password)
    const res = await axios.post(
      `/api/auth/login`,
      JSON.stringify({
        email,
        password,
      }),
    )

    setToken(res.data.encodedToken)
    localStorage.setItem('token', token)
    navigate(location.state.from.pathname, { replace: true })
  }
  async function setUser(e, { email, password }) {
    e.pre
    const res = await axios.post(`/api/auth/signup`, {
      email,
      password,
    })
    console.log(res.data)
    setToken(res.data.encodedToken)
    localStorage.setItem('token', token)
    navigate(location.state.from.pathname, { replace: true })
  }
  return (
    <AuthContext.Provider value={{ getUser, setUser, token }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => useContext(AuthContext)

export { AuthProvider, useAuth }
