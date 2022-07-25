import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { deleteRole, listRole } from '../rest-api/RestAPI'
import { NavLink } from 'react-router-dom'
import { FaTrashAlt, FaPen } from 'react-icons/fa'
import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'
const ViewRole = () => {
  const [rows, setRows] = useState([])

  const [deleteModal, setDeleteModal] = useState({
    visible: false,
    id: '',
  })

  useEffect(() => {
    loadRole()
  }, [])

  const columns = [

    {
      name: 'Name',
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: 'Action',
      cell: (row) => (
        <div>
          <NavLink to={`/roles/edit/${row.id}`}>
            <FaPen />
          </NavLink>
          &nbsp; &nbsp;
          <FaTrashAlt onClick={() => setDeleteModal({ visible: true, id: row.id })} />
        </div>
      ),
    },
  ]

  const handleDelete = (id) => {
    console.log('Deleting roles' + id)
    deleteRole(id)
      .then((res) => {
        console.log('Role deleted successfully')
        window.location.reload(false)
      })
      .catch((error) => {
        console.log('Role deletion failed')
      })
  }
  const loadRole = () => {
    listRole()
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
          Deleted role are lost permanently. <br />
          Are you sure , you want to delete role?
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

export default ViewRole
