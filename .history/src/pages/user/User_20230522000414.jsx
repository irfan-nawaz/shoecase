import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { StyledAddress, StyledAddressForm } from './StyledUser'
import { v4 as uuid } from 'uuid'
import { useState } from 'react'
import AddAddress from '../../components/addAddress/AddAddress'
import EditAddress from '../../components/editAddress/EditAddress'
import Address from '../../components/address/Address'
const User = () => {
  const { token, setToken, userDetails, setUserDetails } = useAuth()
  const [toggleAddress, setToggleAddress] = useState(false)
  const [toggleEdit, setToggleEdit] = useState({ id: null, state: false })
  //   console.log(JSON.parse(token), 'token from requiresAuth')
  //   const data = JSON.parse(token)
  const navigate = useNavigate()
  return (
    <div
      style={{
        display: 'flex',
        flexFlow: 'column wrap',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'flex-start',
        margin: '0 auto',
      }}
    >
      <div>
        <h2> User Details</h2>
        <p>Email : {userDetails.email}</p>
        <button
          onClick={() => {
            localStorage.clear()
            setToken(null)
            // navigate('/')
          }}
        >
          Log out
        </button>
      </div>
      <div>
        <h2>Address</h2>
        {userDetails.address.map((e) =>
          toggleEdit.state === true && toggleEdit.id === e.id ? (
            <EditAddress currentAddress={e} toggle={setToggleEdit} />
          ) : (
            <StyledAddress key={e.id}>
              <Address user={e} />
              <p onClick={() => setToggleEdit({ id: e.id, state: true })}>
                edit
              </p>
            </StyledAddress>
          ),
        )}
      </div>
      {toggleAddress ? (
        <AddAddress setToggleAddress={setToggleAddress} />
      ) : (
        <button onClick={() => setToggleAddress(true)}>Add New Address</button>
      )}
    </div>
  )
}

export default User
