import React from "react";
import { TextField, Grid } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  movieListContainer: {
    textAlign: "center",
    border: '1px solid red',
    backgroundColor: 'white',
    overflow: 'scroll',
    height: '500px',
    alignContent: 'flex-start'
  },
  movie: {
    maxHeight: '90px',
    padding: '10px'
  }
}));

var MovieList = ( { movies } ) => {
  const classes = useStyles();

  return (
    <Grid item container xs={5} spacing={0} className={classes.movieListContainer}>
      {movies.map(movie => {
        let photoURL = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        let year;
        if (movie.release_date) {
          year = movie.release_date.split('-')[0];
        } else {
          year = 'N/A'
        }
        return (
          <Grid item container xs={12} key={movie.id} className={classes.movie}>
            <Grid item xs={2}><img src={photoURL} height="50px"/></Grid>
            <Grid item key={movie.id} xs={6}>{movie.original_title}</Grid>
            <Grid item xs={2}>{movie.vote_average} / 10</Grid>
            <Grid item xs={2}>( {year} )</Grid>
          </Grid>
          )
      })}
    </Grid>
  );
}

export default MovieList;
