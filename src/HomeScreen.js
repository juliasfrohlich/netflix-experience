import React from 'react';
import Banner from './Banner'
import './HomeScreen.css';
import Nav from './Nav'
import requests from './Requests'
import Row from './Row'

function HomeScreen() {
  return (
      <div className='homeScreen'>
        <Nav />
  
    
        <Banner />

        <Row 
          title='Originais da Netflix'
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow
        />
        <Row 
          title='Em alta'
          fetchUrl={requests.fetchTrending}
        />
        <Row 
          title='Top 10 no Brasil hoje'
          fetchUrl={requests.fetchTopRated}
        />
        
        <Row 
          title='Filmes de Ação'
          fetchUrl={requests.fetchActionMovies}
        />
        <Row 
          title='Filmes de Comédia'
          fetchUrl={requests.fetchComedyMovies}
        />
        <Row 
          title='Filmes de Terror'
          fetchUrl={requests.fetchHorrorMovies}
        />
        <Row 
          title='Filmes de Romance'
          fetchUrl={requests.fetchRomanceMovies}
        />
        <Row 
          title='Documentários'
          fetchUrl={requests.fetchDocumentaries}
        />
      </div>
  )
}

export default HomeScreen