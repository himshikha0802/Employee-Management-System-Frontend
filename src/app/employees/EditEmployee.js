import React, { useState, useEffect } from 'react'

import { CForm, CFormInput, CFormLabel, CButton } from '@coreui/react'

import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { editEmployee, getEmployee } from '../rest-api/RestAPI'

const EditEmployee = () => {
  let { id } = useParams()//fetch id

  const navigate = useNavigate()
  const [employee, setEmployee] = useState({})

  useEffect(() => {
    loadEmployee(id)
  }, [])
  const loadEmployee = (id) => {
    getEmployee(id)
      .then((res) => res.data)
      .then((rows) => {
        setEmployee(rows)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setEmployee((prevState) => ({
      ...prevState,
      [name]: value,
    }))
    console.log(employee.email)
  }

  const handleSubmit = () => {
    //user.role=null
    editEmployee(employee)
      .then((data) => {
        console.log('Employee added successfully')
        navigate('/employees')
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
            value={employee.name}
            onChange={handleChange}
            placeholder=".."
          />
          <CFormLabel>Gender</CFormLabel>
          <CFormInput
            type="text"
            name="gender"
            value={employee.gender}
            onChange={handleChange}
          />
          <CFormLabel>Age</CFormLabel>
          <CFormInput
            type="text"
            name="age"
            value={employee.age}
            onChange={handleChange}
            placeholder=".."
          />
           <CFormLabel>Mobile</CFormLabel>
          <CFormInput
            type="text"
            name="mobile"
            value={employee.mobile}
            onChange={handleChange}
            placeholder="..."
          />

           <CFormLabel>Email</CFormLabel>
          <CFormInput
            type="text"
            name="email"
            value={employee.email}
            onChange={handleChange}
            placeholder=".."
          />
           <CFormLabel>Address</CFormLabel>
          <CFormInput
            type="text"
            name="address"
            value={employee.address}
            onChange={handleChange}
            placeholder="..."
          />

           <CFormLabel>Salary</CFormLabel>
          <CFormInput
            type="text"
            name="salary"
            value={employee.salary}
            onChange={handleChange}
            placeholder="..."
          />
        </div>
      </CForm>
      <CButton color="primary" onClick={handleSubmit}>
        Add
      </CButton>
    </div>
  )
}

export default EditEmployee
