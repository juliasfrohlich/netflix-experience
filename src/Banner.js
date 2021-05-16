import './Banner.css';
import React, { useState, useEffect } from 'react';
import axios from './axios';
import requests from './Requests';

function Banner() {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals)
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length -1)
        ]
      )
    }

    fetchData();

  },[])

  console.log(movie)

  function truncate(string, number) {
    const expectNumber = string?.length > number ? string.substr(0, number - 1) + '...' : string
    return expectNumber
  }

  return (
  <header 
    className="banner" 
    style={{
      backgroundSize: "fixed",
      backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      backgroundPosition: "center center",
  }}>
    <div className="banner_contents">
      <h1 className="banner_title">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <div className="banner_buttons">
        <button className="banner_button">Play</button>
        <button className="banner_button">My list</button>
      </div>
      <h1 className="banner_description">{truncate(movie?.overview, 230)}</h1>
    </div>

    <div className="banner_fadeBottom" /> 

  </header>)
}

export default Banner