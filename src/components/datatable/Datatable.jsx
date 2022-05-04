import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import './datatable.scss'
import { userColumns, userRows } from '../../dummy';
import { Link } from 'react-router-dom';

const Datatable = () => {
    const [data, setData] = useState(userRows)

    const hadleDelete = (id) => {
      setData(data.filter(item => item.id !== id))
    }

    const actionColumn = [
        {
            field: 'action',
            headerName: 'Action',
            width: 200,
            renderCell: (params) => {
              return (
                <div className="cellAction">
                  <Link to="/users/2344">
                    <div className="viewButton">View</div>
                  </Link>
                  <div className="deleteButton" onClick={() => hadleDelete(params.row.id)}>Delete</div>
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
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable