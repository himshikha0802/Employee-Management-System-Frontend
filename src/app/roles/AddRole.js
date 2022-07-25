import React from "react";
import { CForm,CFormLabel,CFormInput,CButton } from "@coreui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addRole } from "../rest-api/RestAPI";

const AddRole = () =>{

  const navigate = useNavigate();
  const [role, setRole] = useState({
    name :''
  })

  const handleChange = e => {
    const { name, value } = e.target;
    setRole(prevState => ({
        ...prevState,
        [name]: value
    }));
}
const handleSubmit=()=>{
  // console.log(user.address)
  // console.log(user.fullname)
  // console.log(user.password)
  // console.log(user.username)
  addRole(role).then( data => {
    console.log("role added successfully");
  navigate("/dashboard")
}).catch( error  => {
  console.log(error);
  console.log("Error when adding role");
})
}


    return (
       <div>  <CForm>
       <div className="mb-3">
         <CFormLabel >Name</CFormLabel>
         <CFormInput type="text" placeholder="Enter role name" name="name"  value={role.name} onChange={handleChange}/>
       </div>

       <CButton color="primary" onClick={handleSubmit} >Submit</CButton>
     </CForm></div>
    )
}

export default AddRole
