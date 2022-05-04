import { ChatBubbleOutline, DarkModeOutlined, FullscreenExit, LanguageOutlined, LightMode, ListOutlined, NotificationsNoneOutlined, SearchOutlined } from '@mui/icons-material'
import React, { useContext } from 'react'
import { DarkModeContext } from '../../context/darkModeContext';
import './navbar.scss'

const Navbar = () => {
  const { dispatch, darkMode } = useContext(DarkModeContext);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlined />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlined className="icon" />
            English
          </div>
          <div className="item" onClick={() => dispatch({ type: "TOGGLE" })}>
           {!darkMode ? <DarkModeOutlined className="icon" /> :  <LightMode className="icon" />}
          </div>
          <div className="item">
            <FullscreenExit className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneOutlined className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutline className="icon" />
            <div className="counter">6</div>
          </div>
          <div className="item">
            <ListOutlined className="icon" />
          </div>
          <div className="item">
            <img 
              src="https://images.pexels.com/photos/6568189/pexels-photo-6568189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="" 
              className="avatar" 
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar