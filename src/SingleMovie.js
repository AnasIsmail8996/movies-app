import { NavLink, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Api_My } from './Context';

const SingleMovie = () => {
  const { id } = useParams();

  const [isLoading, setIsLoading, setIsError] = useState(true);
  const [movie, setMovie] = useState('');

  const getMovies = async (url) => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log('API Response:', data); // Debugging line
      if (data.Response === 'True') {
        setIsLoading(false);
        setMovie(data);
      }
    } catch (error) {
      console.log(error, 'something wrong');
    }
  };

  useEffect(() => {
    let timerOut = setTimeout(() => {
      getMovies(`${Api_My}&i=${id}`);
    }, 1000);
    return () => clearTimeout(timerOut);
  }, [id]);

  if (isLoading) {
    return (
      <div className=''>
        <div className='loading'>Loading...</div>
      </div>
    );
  }

  console.log('Movie Data:', movie); // Debugging line

  return (
    <section className='movie-section'>
      <div className='movie-card'>
        <figure>
          <img src={movie.Poster} alt='Movie-Picture' />
        </figure>

        <div className='card-content'>
       
          <p className='title'>{movie.Title}</p>
          <p className='card-text'>{movie.Released}</p>
          <p className='card-text'>{movie.Genre}</p>
          <p className='card-text'>{movie.imdbRating}/10</p>
          <p className='card-text'>{movie.country}</p>
          <NavLink to='/' className='back-btn'>
            Go Back
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default SingleMovie;
