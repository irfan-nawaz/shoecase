import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { StyledAddress, StyledAddressForm } from './StyledUser'
import { v4 as uuid } from 'uuid'
import { useState } from 'react'
import EditAddress from '../../components/EditAddress/EditAddress'
import Address from '../../components/Address/Address'
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
        AddAddress(setUserDetails, userDetails, setToggleAddress)
      ) : (
        <button onClick={() => setToggleAddress(true)}>Add New Address</button>
      )}
    </div>
  )
}

export default User

function AddAddress(setUserDetails, userDetails, setToggleAddress) {
  return (
    <StyledAddressForm
      onSubmit={(e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const userData = {
          name: formData?.get('name') ?? 'john',
          mobile: formData?.get('mobile') ?? '9234567856',
          pin: formData?.get('pin') ?? '500044',
          city: formData?.get('city') ?? 'hyderabad',
          location: formData.get('location') ?? 'Hi-tech City',
          id: uuid(),
        }
        setUserDetails({
          ...userDetails,
          address: [...userDetails.address, userData],
        })
        e.target.reset()
      }}
    >
      <label htmlFor="location">
        location
        <input type="text" name="location" placeholder="location" required />
      </label>
      <label htmlFor="name">
        name
        <input type="text" name="name" placeholder="name" required />
      </label>
      <label htmlFor="mobile">
        phone
        <input type="number" name="mobile" placeholder="phone" required />
      </label>
      <label htmlFor="pin">
        pin
        <input type="number" name="pin" placeholder="pin" required />
      </label>
      <label htmlFor="city">
        city
        <input type="text" name="city" placeholder="city" required />
      </label>

      <button>add address</button>
      <button onClick={() => setToggleAddress(false)}>close</button>
    </StyledAddressForm>
  )
}