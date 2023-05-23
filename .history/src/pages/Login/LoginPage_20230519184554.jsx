import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
const Login = () => {
  const { getUser } = useAuth()
  return (
    <>
      <h1>This is Login</h1>
      <button
        onClick={() =>
          getUser({ email: 'balika@gmail.com', password: 'balika' })
        }
      >
        Login With Test Credentials
      </button>

      <form
        onSubmit={(e) => {
          const formData = new FormData(e.target)
          const userData = {
            email: formData.get('email') ?? 'wobalika@gmail.com',
            password: formData.get('password') ?? 'wobalika',
          }
          getUser(e, userData)
        }}
      >
        <label htmlFor="email">
          <input type="email" name="email" />
        </label>
        <label htmlFor="password">
          <input type="text" name="password" />
        </label>
        <button>Signup</button>
      </form>

      {/* <form onSubmit={(e) => getUser(e, {})}>
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

      {/* <button
        onClick={() => {
          token ? setToken(false) : setToken(true)
          getUser()
          navigate(location.state.from.pathname, { replace: true })
        }}
      >
        login
      </button> */}
    </>
  )
}

export default Login
