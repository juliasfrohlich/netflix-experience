import React, { useState, useEffect } from 'react';
import './Nav.css';

function Nav() {
const [show, handleShow] = useState(false);

const transitionNavBar = () => {
  if (window.scrollY > 100) {
    handleShow(true)
  } else {
    handleShow(false)
  }
}

useEffect(() => {
  window.addEventListener("scroll", transitionNavBar)
  return () => window.removeEventListener("scroll", transitionNavBar)
}, [])

  return (
      <div className={`nav ${show && "nav_black"}`}>
        <div className="nav_contents">
          <img className="nav_logo" 
            src ="https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png" 
            alt="" 
          />

          <img className="nav_avatar" 
            src="https://i.pinimg.com/originals/34/62/d2/3462d27440aa255b1c314ff16f4032b4.png" 
            alt="" 
          />
        </div>
      </div>
  )
}

export default Nav