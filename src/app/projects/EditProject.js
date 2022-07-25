import React, { useState, useEffect } from 'react'

import { CForm, CFormInput, CFormLabel, CButton } from '@coreui/react'

import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { editProject, getProject } from '../rest-api/RestAPI'

const EditProject = () => {
  let { id } = useParams()//fetch id

  const navigate = useNavigate()
  const [project, setProject] = useState({})

  useEffect(() => {
    loadProject(id)
  }, [])
  const loadProject = (id) => {
    getProject(id)
      .then((res) => res.data)
      .then((rows) => {
        setProject(rows)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setProject((prevState) => ({
      ...prevState,
      [name]: value,
    }))
    console.log(project.email)
  }

  const handleSubmit = () => {
    //user.role=null
    editProject(project)
      .then((data) => {
        console.log('Project added successfully')
        navigate('/projects')
      })
      .catch((error) => {})
  }

  return (
    <div>
      <CForm>
        <div div className="w-50 p-3">
          <CFormLabel>Project name</CFormLabel>
          <CFormInput
            type="text"
            name="pname"
            value={project.pname}
            onChange={handleChange}
            placeholder=".."
          />
          <CFormLabel>Description</CFormLabel>
          <CFormInput
            type="text"
            name="description"
            value={project.description}
            onChange={handleChange}
          />
          <CFormLabel>Project hour</CFormLabel>
          <CFormInput
            type="text"
            name="phr"
            value={project.phr}
            onChange={handleChange}
            placeholder=".."
          />
           <CFormLabel>Total members</CFormLabel>
          <CFormInput
            type="text"
            name="tmembers"
            value={project.tmembers}
            onChange={handleChange}
            placeholder="..."
          />
           <CFormLabel>Project amount</CFormLabel>
          <CFormInput
            type="text"
            name="pamount"
            value={project.pamount}
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

export default EditProject
