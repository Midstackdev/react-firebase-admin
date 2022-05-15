import { DriveFolderUploadOutlined } from '@mui/icons-material'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, serverTimestamp, setDoc } from 'firebase/firestore'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import { auth, db, storage } from '../../firebase'
import './create.scss'

const Create = ({ title, inputs }) => {
  const [file, setFile] = useState("")
  const [data, setData] = useState({})
  const [percentage, setPercentage] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const uploadFile = () => {
      const name = `${new Date().getTime()}_${file.name}`

      const storageRef = ref(storage, name)

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on('state_changed', 
        (snapshot) => {

          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          setPercentage(progress)
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
            default:
              break;
          }
        }, 
        (error) => {
         console.log(error)
        }, 
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ ...prev, img:downloadURL }))
          });
        }
      );
    }

    file && uploadFile()
  }, [file])
  

  const handleInput = (e) => {
    const id = e.target.id
    const value = e.target.value

    setData({ ...data, [id]:value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await createUserWithEmailAndPassword(auth, data.email, data.password)
      await setDoc(doc(db, "users", res.user.uid), {
        ...data,
        timeStamp: serverTimestamp()
      })
      navigate(-1)
      
    } catch (error) {
      console.log(error)
      
    }

  }
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
            <form onSubmit={handleSubmit}>
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
              {
                inputs.map((input) => (
                  <div className="formInput" key={input.id}>
                    <label htmlFor="">{input.label}</label>
                    <input 
                      id={input.id}
                      type={input.type} 
                      placeholder={input.placeholder} 
                      onChange={handleInput}
                    />
                  </div>
                  
                ))
              }
              <div className="formInput">
                <button disabled={percentage !== null && percentage < 100} type="submit">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Create