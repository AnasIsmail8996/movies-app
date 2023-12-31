import React, { useState } from 'react'
import './App.css'
import { GlobalContext } from './Context';
import { NavLink } from 'react-router-dom';

const Movies = () => {
  const {movie ,isLoading}= GlobalContext()
  if(isLoading){
    return (
      <div className=''>
<div className='loading'>Loading...</div>
      </div>
    )
}

  return (
    
    <section className=''>
      <div className='container grid grid-4-col'>  {movie.map((curMovie)=>{
        const {imdbID, Title, Poster }= curMovie;
        const movieName = Title.substring(0, 15);
        
        return(<NavLink to={`movie/${imdbID}`} key={imdbID}>
         <div className='card'>
          <div className=''>
            {/* <h2>{Title}</h2> */}
           <h2>{movieName.length >= 15 ? `${movieName}...` : movieName}</h2>
           <img src={Poster} alt={imdbID} />
          </div>
         </div>


          </NavLink>

         
          )
      })} </div>
    </section>
  
    
  )
}

export default Movies;
