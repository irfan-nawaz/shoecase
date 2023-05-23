import { createContext, useContext, useState } from 'react'
import axios from 'axios'
import { users } from '../../backend/db/users'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(false)
  async function getUser() {
    const res = await axios.post(
      `/api/auth/login`,
      JSON.stringify({
        email: 'adarshbalika@gmail.com',
        password: 'adarshbalika',
      }),
    )
    console.log(res.data)
    navigate(location.state.from.pathname, { replace: true })
  }
  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => useContext(AuthContext)

export { AuthProvider, useAuth }
