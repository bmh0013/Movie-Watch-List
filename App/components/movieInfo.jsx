import React, { useEffect, useState } from "react";
import $ from 'jquery';
import { genreList } from '../src/genreList.js';
const moment = require('moment');

const MovieInfo = ({ currentMovie, setMovies, movies }) => {
  let [updateMovieBtn, setUpdateMovieBtn] = useState('Add Movie +');

  let backdrop = `https://image.tmdb.org/t/p/original${currentMovie.backdrop_path}`;
  let photoURL = `https://image.tmdb.org/t/p/w500${currentMovie.poster_path}`;
  let date = moment(currentMovie.release_date, 'YYYY-MM-DD').format('MMMM D, YYYY');
  let genres = '';

  for (let i = 0; i < currentMovie.genre_ids.length; i++) {
    genres += genreList[ currentMovie.genre_ids[i] ];
    if ( currentMovie.genre_ids[i+1] ) {
      genres += ', '
    }
  }

  useEffect(() => {
    $('body').css({
      'background-image': `url(${backdrop})`,
      'background-repeat': 'no-repeat',
      'background-size': 'cover',
    })
    if (movies[currentMovie.id]) {
      setUpdateMovieBtn('Remove Movie -')
    } else {
      setUpdateMovieBtn('Add Movie +')
    }
  }, [currentMovie])

  function handleClick(e) {
    if (e.target.innerHTML === 'Add Movie +') {
      setUpdateMovieBtn('Remove Movie -')
      setMovies({...movies, [currentMovie.id]: currentMovie});
    } else {
      setUpdateMovieBtn('Add Movie +')
      let movieState = {...movies};
      delete movieState[currentMovie.id];
      setMovies({...movieState});
    }
  }

  return (
    <div className="movieInfoComponent">
      <div className="movieInfoContainer">
        <div className="moviePoster">
          <img src={photoURL} />
        </div>

        <div>
          <div className="movieDetails">
            <h3>{currentMovie.original_title}</h3>
            <p>Release Date: {date}</p>
            <p>Rating: {currentMovie.vote_average} / 10</p>
            <p>Genre(s): {genres}</p>
          </div>

          <div className="movieDetails">
            {currentMovie.overview}
          </div>

          <div className="updateMovieBtn">
            {/* <input type='button' onClick={handleClick} value={updateMovieBtn} /> */}
            <button className="addMovie" onClick={handleClick}>{updateMovieBtn}</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default MovieInfo;
