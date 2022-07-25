import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { deleteDepartment, listDepartment} from '../rest-api/RestAPI'
import { NavLink } from 'react-router-dom'
import { FaTrashAlt, FaPen } from 'react-icons/fa'
import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'
const ViewDepartment = () => {
  const [rows, setRows] = useState([])

  const [deleteModal, setDeleteModal] = useState({
    visible: false,
    id: '',
  })

  useEffect(() => {
    loadDepartment()
  }, [])

  const columns = [
    {
      name: 'departmentname',
      selector: (row) => row.departmentname,
      sortable: true,
    },
    {
      name: 'location',
      selector: (row) => row.location,
      sortable: true,
    },
    {
      name: 'description',
      selector: (row) => row.description,
      sortable: true,
    },
    {
      name: 'Action',
      cell: (row) => (
        <div>
          <NavLink to={`/departments/edit/${row.id}`}>
            <FaPen />
          </NavLink>
          &nbsp; &nbsp;
          <FaTrashAlt onClick={() => setDeleteModal({ visible: true, id: row.id })} />
        </div>
      ),
    },
  ]

  const handleDelete = (id) => {
    console.log('Deleting departments ' + id)
    deleteDepartment(id)
      .then((res) => {
        console.log('Departments deleted successfully')
        window.location.reload(false)
      })
      .catch((error) => {
        console.log('Department deletion failed')
      })
  }
  const loadDepartment = () => {
    listDepartment()
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
          Deleted department are lost permanently. <br />
          Are you sure , you want to delete department ?
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

export default ViewDepartment
