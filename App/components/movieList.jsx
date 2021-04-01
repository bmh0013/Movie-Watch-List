import React from "react";

var MovieList = ( { movies, setCurrentMovie } ) => {

  const renderMovie = function(movie) {
    let photoURL, year;

    if (movie.poster_path) {
      photoURL = `https://image.tmdb.org/t/p/original${movie.poster_path}`;
    } else {
      photoURL = 'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie-1-3.jpg'
    }

    if (movie.release_date) {
      year = movie.release_date.split('-')[0];
    } else {
      year = 'N/A'
    }

    function handleClick(e) {
      setCurrentMovie(movies[e.currentTarget.getAttribute('id')]);
    }

    return (
      <div key={movie.id} id={movie.id} className="movie" onClick={handleClick}>
        <div className="moviePosterContainer">
          <img src={photoURL} />
        </div>
        <div className="movieListDetails">
          <h3>{movie.original_title} &nbsp; | &nbsp; {movie.vote_average} / 10 &nbsp; | &nbsp; ( {year} )</h3>
        </div>
      </div>
    )
  }

  return (
    <div className="movieListComponent">
      <div className="movieListContainer">
       {Object.values(movies).map(movie => renderMovie(movie))}
      </div>
    </div>
  );
}

export default MovieList;
