import React from "react";
import { setState } from "react";
import axios from "axios";
import { TextField, Grid } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  searchContainer: {
    textAlign: 'center',
    marginTop: '7%',
    marginBottom: '3%'
  },
  searchBar: {
    width: "50%"
  },
  searchResults: {
    border: '1px solid rebeccapurple',
    textAlign: 'center',
    marginBottom: '4%'
  }
}));

var Search = ({ searchList, updateSearch }) => {
  const classes = useStyles();
  console.log('search:', searchList);

  function searchMovie(e) {
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/search/movie',
      params: {
        api_key: '229e6548181338d528cc84ecf84d7db9',
        language: 'en-US',
        query: e.target.value,
        page: '1',
        include_adult: false,
      }
    };

    axios.request(options)
      .then(function (response) {
        updateSearch( response.data.results.slice(0, 5) )
        console.log(response.data)
      })
      .catch(function (error) {
        console.error(error);
      });
  }


  // const searchResults = (
  //   <div className="thumbnail-container">
  //     {searchList.map((movie, index) =>
  //       <Grid item>{movie.original_title}</Grid>
  //     )}
  //   </div>
  // );

  return (
    <Grid item container>

      <Grid item className={classes.searchContainer} xs={12}>
        <TextField
          id="search"
          variant="outlined"
          placeholder="Search..."
          onChange={searchMovie}
          className={classes.searchBar}>
        </TextField>
      </Grid>

      <Grid item xs={3}></Grid>

      <Grid item container className={classes.searchResults} xs={6}>
        {searchList.map((movie, index) => {
          let photoURL = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
          return (
            <Grid item container xs={12} key={movie.id} index={index} style={{justifyContent: 'center', alignItems: 'center'}}>
              <Grid item xs={2}>
                <img src={photoURL} height='50px'/>
              </Grid>
              <Grid item xs={6}>
                {movie.original_title}
              </Grid>
              <Grid item xs={2}>
                {movie.release_date}
              </Grid>
            </Grid>
          )
        }
        )}
      </Grid>

      <Grid item xs={3}></Grid>

    </Grid>
  );
}


export default Search;
