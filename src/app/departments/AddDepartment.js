import React from "react";
import { CForm,CFormLabel,CFormInput,CButton } from "@coreui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addDepartment } from "../rest-api/RestAPI";

const AddDepartment = () =>{

  const navigate = useNavigate();
  const [department, setDepartment] = useState({
    departmentname:'',
    location:'',
    description:''
  })

  const handleChange = e => {
    const { name, value } = e.target;
    setDepartment(prevState => ({
        ...prevState,
        [name]: value
    }));
}
const handleSubmit=()=>{
  // console.log(user.address)
  // console.log(user.fullname)
  // console.log(user.password)
  // console.log(user.username)
  addDepartment(department).then( data => {
    console.log("Department added successfully");
  navigate("/dashboard")
}).catch( error  => {
  console.log(error);
  console.log("Error when adding department");
})
}


    return (
       <div>  <CForm>
       <div className="mb-3">
         <CFormLabel >DepartmentName</CFormLabel>
         <CFormInput type="text" placeholder="Enter department name" name="departmentname" value={department.departmentname} onChange={handleChange}/>
       </div>

       <div className="mb-3">
         <CFormLabel >location</CFormLabel>
         <CFormInput type="text" placeholder="Enter location" name="location"  value={department.location} onChange={handleChange}/>
       </div>


       <div className="mb-3">
         <CFormLabel >Description</CFormLabel>
         <CFormInput type="text" placeholder="Enter description" name="description" value={department.description} onChange={handleChange}/>
       </div>

       <CButton color="primary" onClick={handleSubmit} >Submit</CButton>
     </CForm></div>
    )
}

export default AddDepartment
