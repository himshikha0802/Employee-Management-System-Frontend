import React, { useState, useEffect } from 'react'

import { CForm, CFormInput, CFormLabel, CButton } from '@coreui/react'

import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { editRole, getRole } from '../rest-api/RestAPI'

const EditRole = () => {
  let { id } = useParams()//fetch id

  const navigate = useNavigate()
  const [role, setRole] = useState({})

  useEffect(() => {
    loadRole(id)
  }, [])
  const loadRole = (id) => {
    getRole(id)
      .then((res) => res.data)
      .then((rows) => {
        setRole(rows)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setRole((prevState) => ({
      ...prevState,
      [name]: value,
    }))
    console.log(role.email)
  }

  const handleSubmit = () => {
    //user.role=null
    editRole(role)
      .then((data) => {
        console.log('Role added successfully')
        navigate('/roles')
      })
      .catch((error) => {})
  }

  return (
    <div>
      <CForm>
        <div div className="w-50 p-3">
          <CFormLabel>Name</CFormLabel>
          <CFormInput
            type="text"
            name="name"
            value={role.name}
            onChange={handleChange}
            placeholder="John"
          />
        </div>
      </CForm>
      <CButton color="primary" onClick={handleSubmit}>
        Add
      </CButton>
    </div>
  )
}

export default EditRole
