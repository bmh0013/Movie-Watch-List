import React, { useEffect, useState } from "react";
import useLocalStorageState from 'use-local-storage-state';
import Search from "./search.jsx"
import MovieList from "./movieList.jsx"
import MovieInfo from "./movieInfo.jsx"

var App = () => {
  const [movies, setMovies, isPersistent] = useLocalStorageState('movies', {});
  const [currentMovie, setCurrentMovie] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className='app container'>
      <Search searchResults={searchResults} setSearchResults={setSearchResults} setCurrentMovie={setCurrentMovie} />
      <div className="lowerHalf">
        {!!Object.values(movies).length && <MovieList movies={movies} setCurrentMovie={setCurrentMovie} />}
        {currentMovie && <MovieInfo currentMovie={currentMovie} setMovies={setMovies} movies={movies} />}
      </div>
    </div>
  );
}

export default App;
