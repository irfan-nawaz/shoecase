import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { StyledAddress } from './StyledUser'
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

import AddAddress from '../../components/forms/addAddress/AddAddress'
import EditAddress from '../../components/forms/editAddress/EditAddress'
import Address from '../../components/address/Address'

const notify = () => toast('Here is your toast.')

const User = () => {
  const { setToken, userDetails } = useAuth()
  const [toggleAddress, setToggleAddress] = useState(false)
  const [toggleEdit, setToggleEdit] = useState({ id: null, state: false })
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
            navigate('/')
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
        <div>
          <AddAddress setToggleAddress={setToggleAddress} />
        </div>
      ) : (
        <>
          <button onClick={(notify, () => setToggleAddress(true))}>
            Add New Address
          </button>
          <Toaster />
        </>
      )}
    </div>
  )
}

export default User
