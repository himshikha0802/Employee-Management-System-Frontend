import axios from "axios"
import { getToken } from "../auth/AuthUtil"

const login =(loginDto) => {
    return axios({
        url  : "http://localhost:8080/login",
        method :"POST",
        data : loginDto
    })
}

const addUser =(userDto) => {
    return axios({
        url  : "http://localhost:8080/users",
        method :"POST",
        data : userDto
    })
}
const editUser =(userDto) => {
  return axios({
      url  : "http://localhost:8080/users",
      method :"PUT",
      data : userDto,
      headers:{
          Authorization:getToken()
      }

  })
}
const getUser =(id) => {
  return axios({
      url  : "http://localhost:8080/users/"+id,
      method :"GET",
      headers:{
          Authorization:getToken()
      }

  })
}
const addDepartment =(departmentDto) => {
  return axios({
      url  : "http://localhost:8080/departments",
      method :"POST",
      data : departmentDto,
      headers:{
        Authorization:getToken()
    }
  })
}
const listDepartment =() => {
  return axios({
      url  : "http://localhost:8080/departments",
      method :"GET",
      headers:{
          Authorization:getToken()
      }

  })
}
const editDepartment =(departmentDto) => {
  return axios({
      url  : "http://localhost:8080/departments",
      method :"PUT",
      data : departmentDto,
      headers:{
          Authorization:getToken()
      }

  })
}
const getDepartment =(id) => {
  return axios({
      url  : "http://localhost:8080/departments/"+id,
      method :"GET",
      headers:{
          Authorization:getToken()
      }

  })
}
const deleteDepartment =(id) => {
  return axios({
      url  : "http://localhost:8080/departments/"+id,
      method :"DELETE",
      headers :{
          Authorization: getToken()
      }
  })
}
const addEmployee =(employeeDto) => {
  return axios({
      url  : "http://localhost:8080/employees",
      method :"POST",
      data : employeeDto,
      headers:{
        Authorization:getToken()
    }
  })
}
const listEmployee =() => {
  return axios({
      url  : "http://localhost:8080/employees",
      method :"GET",
      headers:{
          Authorization:getToken()
      }

  })
}
const editEmployee =(employeeDto) => {
  return axios({
      url  : "http://localhost:8080/employees",
      method :"PUT",
      data : employeeDto,
      headers:{
          Authorization:getToken()
      }

  })
}
const getEmployee =(id) => {
  return axios({
      url  : "http://localhost:8080/employees/"+id,
      method :"GET",
      headers:{
          Authorization:getToken()
      }

  })
}
const deleteEmployee =(id) => {
  return axios({
      url  : "http://localhost:8080/employees/"+id,
      method :"DELETE",
      headers :{
          Authorization: getToken()
      }
  })
}
const addRole =(roleDto) => {
  return axios({
      url  : "http://localhost:8080/roles",
      method :"POST",
      data :roleDto,
      headers:{
        Authorization:getToken()
    }
  })
}
const editRole =(roleDto) => {
  return axios({
      url  : "http://localhost:8080/roles",
      method :"PUT",
      data : roleDto,
      headers:{
          Authorization:getToken()
      }

  })
}
const getRole =(id) => {
  return axios({
      url  : "http://localhost:8080/roles/"+id,
      method :"GET",
      headers:{
          Authorization:getToken()
      }

  })
}
const listUser =() => {
  return axios({
      url  : "http://localhost:8080/users",
      method :"GET",
      headers:{
          Authorization:getToken()
      }

  })
}
const listRole =() => {
  return axios({
      url  : "http://localhost:8080/roles",
      method :"GET",
      headers:{
          Authorization:getToken()
      }

  })
}
const deleteRole =(id) => {
  return axios({
      url  : "http://localhost:8080/roles/"+id,
      method :"DELETE",
      headers :{
          Authorization: getToken()
      }
  })
}
const deleteUser =(id) => {
  return axios({
      url  : "http://localhost:8080/users/"+id,
      method :"DELETE",
      headers :{
          Authorization: getToken()
      }
  })
}
const addProject =(projectDto) => {
  return axios({
      url  : "http://localhost:8080/projects",
      method :"POST",
      data : projectDto,
      headers:{
        Authorization:getToken()
    }
  })
}
const listProject =() => {
  return axios({
      url  : "http://localhost:8080/projects",
      method :"GET",
      headers:{
          Authorization:getToken()
      }

  })
}
const editProject =(projectDto) => {
  return axios({
      url  : "http://localhost:8080/projects",
      method :"PUT",
      data : projectDto,
      headers:{
          Authorization:getToken()
      }

  })
}
const getProject =(id) => {
  return axios({
      url  : "http://localhost:8080/projects/"+id,
      method :"GET",
      headers:{
          Authorization:getToken()
      }

  })
}
const deleteProject =(id) => {
  return axios({
      url  : "http://localhost:8080/projects/"+id,
      method :"DELETE",
      headers :{
          Authorization: getToken()
      }
  })
}

export default login;
export {addUser,listUser,editUser,getUser,deleteUser}
export {addRole,listRole,editRole,getRole,deleteRole}
export {addEmployee,listEmployee,editEmployee,getEmployee,deleteEmployee}
export {addDepartment,listDepartment,editDepartment,getDepartment,deleteDepartment}
export {addProject,listProject,editProject,getProject,deleteProject}
