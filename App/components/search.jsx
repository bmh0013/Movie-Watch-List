import React from "react";
import { TextField, Grid } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  searchContainer: {
    textAlign: "center",
    marginTop: '7%',
    marginBottom: '7%'
  },
  searchBar: {
    width: "50%"
  }
}));

var Search = (props) => {
  const classes = useStyles();

  return (
    <Grid item className={classes.searchContainer} xs={12}>
      <TextField id="search" variant="outlined" placeholder="Search..." className={classes.searchBar}></TextField>
    </Grid>
  );
}

export default Search;
