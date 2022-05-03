import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import './datatable.scss'
import { userColumns, userRows } from '../../dummy';
import { Link } from 'react-router-dom';

const Datatable = () => {

    const actionColumn = [
        {
            field: 'action',
            headerName: 'Action',
            width: 200,
            renderCell: () => {
              return (
                <div className="cellAction">
                  <Link to="/users/2344">
                    <div className="viewButton">View</div>
                  </Link>
                  <div className="deleteButton">Delete</div>
                </div>
              )
            }
          },
    ]
  return (
    <div className="datatable">
      <div className="datatableTitle">
        List of Users
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable