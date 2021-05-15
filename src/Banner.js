import './Banner.css';
import React from 'react';;

function Banner() {
  return (
  <header 
    className="banner" 
    style={{
      backgroundSize: "cover",
      backgroundImage: `url("https://wallpapercave.com/wp/wp8741252.png")`,
      backgroundPosition: "center center",
  }}>
    <div className="banner_contents">
      <h1 className="banner_title">Movie Name</h1>
      <div className="banner_buttons">
        <button className="banner_button">Play</button>
        <button className="banner_button">My list</button>
      </div>
      <h1 className="banner_description">This is a description</h1>
    </div>

    <div className="banner_fadeBottom" /> 

  </header>)
}

export default Banner