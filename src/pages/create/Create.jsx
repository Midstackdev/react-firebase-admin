import { DriveFolderUploadOutlined } from '@mui/icons-material'
import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './create.scss'

const Create = ({ title }) => {
  const [file, setFile] = useState("")
  return (
    <div className="new">
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top">
          <h1>Add New {title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img 
              src={file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} 
              alt="" 
              className="" 
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlined className="icon"/>
                </label>
                <input 
                  type="file" 
                  onChange={e => setFile(e.target.files[0])} 
                  id="file" 
                  style={{ display: "none" }}
                />
              </div>
              <div className="formInput">
                <label htmlFor="">Username</label>
                <input type="text" name="" id="" placeholder="midstacks"/>
              </div>
              <div className="formInput">
                <label htmlFor="">Name</label>
                <input type="text" name="" id="" placeholder="Alfred Smith"/>
              </div>
              <div className="formInput">
                <label htmlFor="">Email</label>
                <input type="email" name="" id="" placeholder="midstacks@gmail.com"/>
              </div>
              <div className="formInput">
                <label htmlFor="">Phone</label>
                <input type="text" name="" id="" placeholder="+233 50712 7431"/>
              </div>
              <div className="formInput">
                <label htmlFor="">Address</label>
                <input type="text" name="" id="" placeholder="Samo St. 456, Ableke Accra"/>
              </div>
              <div className="formInput">
                <label htmlFor="">Country</label>
                <input type="text" name="" id="" placeholder="Ghana"/>
              </div>
              <div className="formInput">
                {/* <label htmlFor="">Country</label>
                <input type="text" name="" id="" placeholder="Ghana"/> */}
              <button>Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Create