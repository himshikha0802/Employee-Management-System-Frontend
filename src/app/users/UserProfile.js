import React, { useState, useEffect } from 'react'

import { CForm, CFormInput, CFormLabel, CButton } from '@coreui/react'

import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { editUser, getUser } from '../rest-api/RestAPI'

const Userprofile = () => {
    let { id } = useParams()

    const [user, setUser] = useState({})
    const [file, setFile] = useState()

    useEffect(() => {
      loadUser(id)
    }, [])

    const loadUser = (id) => {
        getUser(id)
          .then((res) => res.data)
          .then((rows) => {
            setUser(rows)
          })
          .catch((error) => {
            console.log(error)
          })
      }

      const handleChange = (event) => {
        setFile(event.target.files[0]);
      }

      const handleSubmit = () => {
       const formData = new FormData();
       formData.append("File", file)
      }


 return (
    <div>
      <CForm>
        <div div className="mb-3">
          <CFormLabel>Name</CFormLabel>
          <CFormInput
            type="text"
            name="fullName"
            value={user.fullName}
            onChange={handleChange}
            placeholder="Martin"
            disabled
          />
        </div>
        <div className="mb-3">
          <CFormLabel>Address</CFormLabel>
          <CFormInput
            type="text"
            placeholder="Kathmandu"
            name="address"
            value={user.address}
            onChange={handleChange}
            disabled
          />
        </div>

        <div className="mb-3">
          <CFormLabel>Age</CFormLabel>
          <CFormInput
            type="number"
            placeholder="Kathmandu"
            name="age"
            value={user.age}
            onChange={handleChange}
            disabled
          />
        </div>
      </CForm>
      <CFormLabel>File</CFormLabel>
      <CFormInput type="file" id="formFile" onChange ={handleChange} />
      <CButton onClick={handleSubmit} color ="primary">
        Upload
      </CButton>

    </div>
  )
}

export default Userprofile
