import React, { useState, useEffect } from 'react'

import { CForm, CFormInput, CFormLabel, CButton } from '@coreui/react'

import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { editDepartment, getDepartment } from '../rest-api/RestAPI'

const EditDepartment = () => {
  let { id } = useParams()//fetch id

  const navigate = useNavigate()
  const [department, setDepartment] = useState({})

  useEffect(() => {
    loadDepartment(id)
  }, [])
  const loadDepartment = (id) => {
    getDepartment(id)
      .then((res) => res.data)
      .then((rows) => {
        setDepartment(rows)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setDepartment((prevState) => ({
      ...prevState,
      [name]: value,
    }))
    console.log(department.email)
  }

  const handleSubmit = () => {
    //user.role=null
    editDepartment(department)
      .then((data) => {
        console.log('Department added successfully')
        navigate('/departments')
      })
      .catch((error) => {})
  }

  return (
    <div>
      <CForm>
        <div div className="w-50 p-3">
          <CFormLabel>DepartmentName</CFormLabel>
          <CFormInput
            type="text"
            name="departmentname"
            value={department.departmentname}
            onChange={handleChange}
            placeholder="..."
          />
          <CFormLabel>Location</CFormLabel>
          <CFormInput
            type="text"
            name="location"
            value={department.location}
            onChange={handleChange}
            placeholder=".."
          />
          <CFormLabel>Description</CFormLabel>
          <CFormInput
            type="text"
            name="description"
            value={department.description}
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

export default EditDepartment
