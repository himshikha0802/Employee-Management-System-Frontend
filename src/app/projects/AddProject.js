import React from "react";
import { CForm,CFormLabel,CFormInput,CButton } from "@coreui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addProject } from "../rest-api/RestAPI";

const AddProject = () =>{

  const navigate = useNavigate();
  const [project, setProject] = useState({
     pname:'',
    description:'',
     phr:'',
   tmembers:'',
     pamount:''
  })

  const handleChange = e => {
    const { name, value } = e.target;
    setProject(prevState => ({
        ...prevState,
        [name]: value
    }));
}
const handleSubmit=()=>{
  // console.log(user.address)
  // console.log(user.fullname)
  // console.log(user.password)
  // console.log(user.username)
  addProject(project).then( data => {
    console.log("Project added successfully");
  navigate("/dashboard")
}).catch( error  => {
  console.log(error);
  console.log("Error when adding project");
})
}


    return (
       <div>  <CForm>
       <div className="mb-3">
         <CFormLabel >Project Name</CFormLabel>
         <CFormInput type="text" placeholder="Enter project name" name="pname" value={project.pname} onChange={handleChange}/>
       </div>

       <div className="mb-3">
         <CFormLabel >Description</CFormLabel>
         <CFormInput type="text" placeholder="Enter description" name="description"  value={project.description} onChange={handleChange}/>
       </div>


       <div className="mb-3">
         <CFormLabel >Project hour</CFormLabel>
         <CFormInput type="text" placeholder="Enter project hour" name="phr" value={project.phr} onChange={handleChange}/>
       </div>
       <div className="mb-3">
         <CFormLabel >Total members</CFormLabel>
         <CFormInput type="text" placeholder="Enter total members" name="tmembers" value={project.tmembers} onChange={handleChange}/>
       </div>
       <div className="mb-3">
         <CFormLabel >Project Amount</CFormLabel>
         <CFormInput type="text" placeholder="Enter project amount" name="pamount" value={project.pamount} onChange={handleChange}/>
       </div>

       <CButton color="primary" onClick={handleSubmit} >Submit</CButton>
     </CForm></div>
    )
}

export default AddProject
