import React from "react";
import { CForm,CFormLabel,CFormInput,CButton, CFormSelect } from "@coreui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addEmployee } from "../rest-api/RestAPI";
import { listDepartment } from "../rest-api/RestAPI";
import { useEffect } from "react";
const AddEmployee = () =>{
  const navigate = useNavigate()

  const departmentDropDown = () => {
    const departmentsOption = department.map(item =>(
      <option key={item} value={JSON.stringify(item)}>
        {item.departmentname}
      </option>
    ))
    return departmentsOption
  }
  const loadDepartments = () => {
    listDepartment()
      .then((res) => res.data)
      .then((rows) => {
        setDepartments(rows)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const [employee, setEmployee] = useState({
    name:'',
    gender:'',
    age:'',
    mobile:'',
    department:'',
    email:'',
    address:'',
    salary:'',
    department:[],

  })
  const [department, setDepartments] = useState([])

  const handleChange = (e) => {
    const { name, value } = e.target
    setEmployee((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }
  const handleDepartment = (e) => {
    const { name, value } = e.target
    console.log(name,value)
    setEmployee((prevState) => ({
      ...prevState,
      [name]:[JSON.parse(value)],
    }))
  }





  const handleSubmit = () => {
    addEmployee(employee)
      .then((data) => {
        console.log('Employee Added Successfully')
        navigate('/dashboard')
      })
      .catch((error) => {
        console.log(error)
        console.log('Error when adding Employee')
      })
  }

useEffect(() => {
  loadDepartments()
}, [])


    return (
       <div>  <CForm>
       <div className="mb-3">
         <CFormLabel >Name</CFormLabel>
         <CFormInput type="text" placeholder="Enter employee's name" name="name" value={employee.name} onChange={handleChange}/>
       </div>

       <div className="mb-3">
         <CFormLabel >Gender</CFormLabel>
         <CFormInput type="text" placeholder="Enter employee's gender" name="gender"  value={employee.gender} onChange={handleChange}/>
       </div>

       <div className="mb-3">
         <CFormLabel >Address</CFormLabel>
         <CFormInput type="text" placeholder="Enter employee's address" name="address"  value={employee.address} onChange={handleChange}/>
       </div>


       <div className="mb-3">
         <CFormLabel >Age</CFormLabel>
         <CFormInput type="text" placeholder="Enter employee's age" name="age" value={employee.age} onChange={handleChange}/>
       </div>

       <div className="mb-3">
         <CFormLabel >Mobile</CFormLabel>
         <CFormInput type="text" placeholder="Enter employee's number" name="mobile" value={employee.mobile} onChange={handleChange}/>
       </div>

       <div>
  <CFormLabel>
    Department
  </CFormLabel>
<CFormSelect name="department" onChange={handleDepartment}>
                <option>Select Department</option>
                {departmentDropDown()}
              </CFormSelect>
</div>

       <div className="mb-3">
         <CFormLabel >Email</CFormLabel>
         <CFormInput type="text" placeholder="Enter employee's Email" name="email" value={employee.email} onChange={handleChange}/>
       </div>


       <div className="mb-3">
         <CFormLabel >Salary</CFormLabel>
         <CFormInput type="text" placeholder="Enter employee's salary" name="salary" value={employee.salary} onChange={handleChange}/>
       </div>



       <CButton color="primary" onClick={handleSubmit} >Submit</CButton>
     </CForm></div>
    )
}

export default AddEmployee
