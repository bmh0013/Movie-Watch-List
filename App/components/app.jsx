import React, { useEffect, useState } from "react";
import useLocalStorageState from 'use-local-storage-state';
import Search from "./search.jsx"
import MovieList from "./movieList.jsx"
import MovieInfo from "./movieInfo.jsx"
import { Grid, Box } from '@material-ui/core'

var App = () => {
  const [movies, setMovies, isPersistent] = useLocalStorageState('movies', {});
  const [currentMovie, setCurrentMovie] = useState(null);
  const [searchList, setSearchList] = useState([]);

  function updateMovies(action) {
    if (action === 'Add Movie +') {
      setMovies({...movies, [currentMovie.id]: currentMovie});
    } else {
      let movieState = {...movies};
      delete movieState[currentMovie.id];
      setMovies({...movieState});
    }
  }

  return (
    <div>
      <Box elevation={2}>
        <Grid container>
          <Search
            searchList={searchList}
            setSearchList={setSearchList}
            setCurrentMovie={setCurrentMovie}
          />
          <Grid item xs={1}></Grid>
          <MovieList movies={Object.values(movies)} />
          {currentMovie &&
            <MovieInfo
              currentMovie={currentMovie}
              updateMovies={updateMovies}
              movies={movies}
            />
          }
          <Grid item xs={1}></Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
