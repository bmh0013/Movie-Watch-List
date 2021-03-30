import React from "react";
import { TextField, Grid } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  movieListContainer: {
    textAlign: "center",
    border: '1px solid red'
  },
  movieList: {
    height: '100px'
  }
}));

var MovieList = (props) => {
  const classes = useStyles();

  return (
    <Grid item container xs={5} className={classes.movieListContainer}>
      {props.movies.map(movie => <Grid item>Movie</Grid>)}
    </Grid>
  );
}

export default MovieList;
