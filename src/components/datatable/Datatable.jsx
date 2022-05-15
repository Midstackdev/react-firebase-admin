import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import './datatable.scss'
import { userColumns } from '../../dummy';
import { Link } from 'react-router-dom';
import { collection, deleteDoc, doc, getDocs, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';

const Datatable = () => {
    const [data, setData] = useState([])

    useEffect(() => {
      // const fetchData = async () => {
      //   let list = []
      //   try {
      //     const querySnapshot = await getDocs(collection(db, "users"));
      //     querySnapshot.forEach((doc) => {
      //       list.push({id:doc.id, ...doc.data()})
      //     });
      //     setData(list)
      //   } catch (error) {
      //     console.log(error)
      //   }
      // }
      // fetchData()
      const unsub = onSnapshot(collection(db, "users"),
      (snapShot) => {
        let list = []
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() })
        })
        setData(list)
      }, 
      (error) => {
        console.log(error)
      })

      return () => {
        unsub()
      }
    }, [])

    const hadleDelete = async(id) => {
      try {
        await deleteDoc(doc(db, "users", id))
      } catch (error) {
        console.log(error)
      }
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
              <Link to={`/users/${params.row.id}`}>
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