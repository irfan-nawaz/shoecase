import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import axios from 'axios'
import { users } from '../../backend/db/users'
const Login = () => {
  const { token, setToken } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  async function getUser(e) {
    e.preventDefault()
    const res = await axios.post(
      `/api/auth/signup`,
      JSON.stringify({
        email: 'adarshbalika@gmail.com',
        password: 'adarshbalika',
      }),
    )
    console.log(res)
    navigate(location.state.from.pathname, { replace: true })
  }
  return (
    <>
      <h1>This is Login</h1>
      {/* <button
        onClick={() => {
          token ? setToken(false) : setToken(true)
          getUser()
          navigate(location.state.from.pathname, { replace: true })
        }}
      >
        login
      </button> */}
      {/* <form onSubmit={(e) => getUser(e)}>
        <label>
          username
          <input type="email" name="" id="" />
        </label>
        <label htmlFor="">
          password
          <input type="password" />
        </label>
        <button>submit</button>
      </form> */}
    </>
  )
}

export default Login
