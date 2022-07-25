import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { deleteProject, listProject } from '../rest-api/RestAPI'
import { NavLink } from 'react-router-dom'
import { FaTrashAlt, FaPen } from 'react-icons/fa'
import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'
const ViewProject = () => {
  const [rows, setRows] = useState([])

  const [deleteModal, setDeleteModal] = useState({
    visible: false,
    id: '',
  })

  useEffect(() => {
    loadProject()
  }, [])

  const columns = [
     {
       name: 'pname',
       selector: (row) => row.pname
     },
     {
       name: 'description',
       selector: (row) => row.description,
       sortable: true
     },
     {
         name: 'phr',
         selector: (row) => row.phr,
         sortable: true
       },
       {
         name: 'tmembers',
         selector: (row) => row.tmembers,
         sortable: true
       },

       {
         name: 'pamount',
         selector: (row) => row.pamount,
         sortable: true
       },

    {
      name: 'Action',
      cell: (row) => (
        <div>
          <NavLink to={`/projects/edit/${row.id}`}>
            <FaPen />
          </NavLink>
          &nbsp; &nbsp;
          <FaTrashAlt onClick={() => setDeleteModal({ visible: true, id: row.id })} />
        </div>
      ),
    },
  ]
  const handleDelete = (id) => {
    console.log('Deleting Projects ' + id)
    deleteProject(id)
      .then((res) => {
        console.log('Projects deleted successfully')
        window.location.reload(false)
      })
      .catch((error) => {
        console.log('Projects deletion failed')
      })
  }


  const loadProject = () => {
    listProject()
      .then((res) => res.data)
      .then((rows) => {
        setRows(rows)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div>
      <DataTable striped columns={columns} data={rows} pagination />

      <CModal visible={deleteModal.visible} onClose={() => setDeleteModal({ visible: false })}>
        <CModalHeader>
          <CModalTitle>Deletion Confirmation</CModalTitle>
        </CModalHeader>
        <CModalBody>
          Deleted project are lost permanently. <br />
          Are you sure , you want to delete project ?
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setDeleteModal({ visible: false })}>
            Cancle
          </CButton>
          <CButton
            color="primary"
            onClick={() => {
              setDeleteModal({ visible: false })
              handleDelete(deleteModal.id)
            }}
          >
            Delete
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  )
}

export default ViewProject
