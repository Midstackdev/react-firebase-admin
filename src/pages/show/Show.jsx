import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Chart from '../../components/chart/Chart'
import Table from '../../components/table/Table'
import './show.scss'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../firebase'
import { useParams } from 'react-router-dom'

const Show = () => {
  const [data, setData] = useState({})
  const { userId } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDoc(doc(db, "users", userId));
        setData(querySnapshot.data())
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  
  }, [userId])

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar/>
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img 
                src={data.img} 
                alt="" 
                className="itemImg" 
              />
              <div className="details">
                <h1 className="itemTitle">{data?.fullname}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{data?.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">{data?.phone}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">{data?.address}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">{data?.country}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3/1} title="User Spending (Last 6 Months)"/>
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <Table />
        </div>
      </div>
    </div>
  )
}

export default Show