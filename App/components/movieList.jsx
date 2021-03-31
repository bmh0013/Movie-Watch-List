import React from "react";
import { TextField, Grid } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  movieListContainer: {
    textAlign: "center",
    border: '1px solid red',
    backgroundColor: 'white'
  },
  movieList: {
    height: '100px'
  }
}));

var MovieList = ( { movies } ) => {
  const classes = useStyles();

  return (
    <Grid item container xs={5} className={classes.movieListContainer}>
      {movies.map(movie => <Grid item key={movie.id}>{movie.original_title}</Grid>)}
    </Grid>
  );
}

export default MovieList;
