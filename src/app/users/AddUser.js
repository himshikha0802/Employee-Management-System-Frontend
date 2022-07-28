import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CForm, CFormLabel, CFormInput, CButton, CFormSelect } from '@coreui/react'
import { addUser } from '../rest-api/RestAPI'
import listRole from '../rest-api/Role-api'

const AddUser = () => {
  const navigate = useNavigate()

  const roleDropDown = () => {
    const rolesOption = roles.map((item) => (
      <option key={item} value={JSON.stringify(item)}>
        {item.name}
      </option>
    ))
    return rolesOption
  }

  const loadRoles = () => {
    listRole()
      .then((res) => res.data)
      .then((rows) => {
        setRoles(rows)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const [user, setUser] = useState({
    username: '',
    password: '',
    fullName: '',
    address: '',
    age: '',
    roles: [],
  })

  const [roles, setRoles] = useState([])

  const handleChange = (e) => {
    const { name, value } = e.target
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleRole = (e) => {
    const { name, value } = e.target
    console.log(name, value)
    setUser((prevState) => ({
      ...prevState,
      [name]: [JSON.parse(value)],
    }))
  }

  const handleSubmit = () => {
    addUser(user)
      .then((data) => {
        console.log('User Added Successfully')
        navigate('/dashboard')
      })
      .catch((error) => {
        console.log(error)
        console.log('Error when adding user')
      })
  }

  useEffect(() => {
    loadRoles()
  }, [])

  return (
    <div>
      <CForm>
        <div className="mb-3">
          <CFormLabel>UserName</CFormLabel>
          <CFormInput
            type="email"
            placeholder="Enter your username"
            name="username"
            value={user.username}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <CFormLabel>Password</CFormLabel>
          <CFormInput
            type="password"
            placeholder="Enter your password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <CFormLabel>Name</CFormLabel>
          <CFormInput
            type="text"
            placeholder="Enter your name"
            name="fullName"
            value={user.fullName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <CFormLabel>Gender</CFormLabel>
          <CFormInput
            type="text"
            placeholder="Enter your gender"
            name="gender"
            value={user.gender}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <CFormLabel>Address</CFormLabel>
          <CFormInput
            type="text"
            placeholder="Enter your address"
            name="address"
            value={user.address}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <CFormLabel>Age</CFormLabel>
          <CFormInput
            type="number"
            placeholder="Enter your age"
            name="age"
            value={user.age}
            onChange={handleChange}
          />
        </div>

        <div>
          <CFormLabel >
            Role
          </CFormLabel>
          <CFormSelect name="roles" onChange={handleRole}>
            <option>Select Role</option>
            {roleDropDown()}
          </CFormSelect>
        </div>

        <CButton color="primary" onClick={handleSubmit}>
          Submit
        </CButton>
      </CForm>
    </div>
  )
}

export default AddUser
