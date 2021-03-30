import React from "react";
import { TextField, Grid } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  movieInfoContainer: {
    textAlign: "center",
    border: '1px solid blue'
  },
  movieInfo: {
  }
}));

var MovieInfo = (props) => {
  const classes = useStyles();

  return (
    <Grid item container xs={5} className={classes.movieInfoContainer}>
      <Grid item xs={12} className={classes.movieInfo}>
        Movie Information and details
      </Grid>
    </Grid>
  );
}

export default MovieInfo;
