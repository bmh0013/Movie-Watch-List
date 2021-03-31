import React, { useEffect, useState } from "react";
import $ from 'jquery';
import { TextField, Grid, Button} from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";
var moment = require('moment');

const useStyles = makeStyles((theme) => ({
  movieInfoContainer: {
    textAlign: "center",
    border: '1px solid blue',
    color: 'white',
    textShadow: '1px 1px black',
    padding: '10px',
  },
  movieTitle: {
    fontFamily: 'Roboto',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  movieDescription: {
    fontFamily: 'Roboto',
    textAlign: 'justify',
    textJustify: 'auto'
  },
  movieInfo: {
    fontFamily: 'Roboto',
    textAlign: 'left',
    marginLeft: '10px'
  },
  movieProperty: {
    fontFamily: 'Roboto',
    textAlign: 'right',
  },
  image: {
    maxWidth: '100%',
    maxHeight: '100%'
  },
  button: {
    justifyContent: 'center',
  }
}));

const genreList = {
  12: "Adventure",
  14: "Fantasy",
  16: "Animation",
  18: "Drama",
  27: "Horror",
  28: "Action",
  36: "History",
  35: "Comedy",
  37: "Western",
  53: "Thriller",
  80: "Crime",
  99: "Documentary",
  878: "Science Fiction",
  9648: "Mystery",
  10402: "Music",
  10749: "Romance",
  10751: "Family",
  10770: "TV Movie",
  10752: "War"
}

var MovieInfo = ({ currentMovie, updateMovies, movies }) => {
  const classes = useStyles();
  let [updateMovieBtn, setUpdateMovieBtn] = useState('Add Movie +');
  let backdrop = `https://image.tmdb.org/t/p/w500${currentMovie.backdrop_path}`;
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
    console.log(e.target.innerHTML)
    if (e.target.innerHTML === 'Add Movie +') {
      setUpdateMovieBtn('Remove Movie -')
    } else {
      setUpdateMovieBtn('Add Movie +')
    }
    updateMovies(e.target.innerHTML);
  }

  return (
    <Grid item container xs={5} className={classes.movieInfoContainer}>

      <Grid item xs={3}>
        <img src={photoURL} className={classes.image}/>
      </Grid>

      <Grid item container xs={9}>
        <Grid item xs={11} className={classes.movieTitle} >
          {currentMovie.original_title}
        </Grid>
        <Grid item xs={5} className={classes.movieProperty} >
          Release Date:
        </Grid>
        <Grid item xs={5} className={classes.movieInfo} >
          {date}
        </Grid>
        <Grid item xs={5} className={classes.movieProperty} >
          Rating:
        </Grid>
        <Grid item xs={5} className={classes.movieInfo} >
          {currentMovie.vote_average} / 10
        </Grid>
        <Grid item xs={5} className={classes.movieProperty} >
          Genre(s):
        </Grid>
        <Grid item xs={5} className={classes.movieInfo} >
          {genres}
        </Grid>
      </Grid>

      <Grid item xs={12} className={classes.movieDescription} >
          {currentMovie.overview}
      </Grid>

      <Grid item xs={12} className={classes.button} >
          <Button color='secondary' variant='outlined' onClick={handleClick}>{updateMovieBtn}</Button>
      </Grid>

    </Grid>
  );
}

export default MovieInfo;
