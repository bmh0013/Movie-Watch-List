import React, { useEffect } from "react";
import Search from "./search.jsx"
import MovieList from "./movieList.jsx"
import MovieInfo from "./movieInfo.jsx"
import { Grid, Box } from '@material-ui/core'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentMovie: null,
      searchList: [],
      movies: {}
    }
  }

  updateSearch(searchList) {
    this.setState({
      searchList: searchList
    });
  }

  setCurrentMovie(movie) {
    this.setState({
      currentMovie: movie
    });
  }

  updateMovies(action) {
    if (action === 'Add Movie +') {
      this.setState({
        movies: {...this.state.movies, [this.state.currentMovie.id]: this.state.currentMovie}
      });
    } else {
      let movieState = {...this.state.movies};
      delete movieState[this.state.currentMovie.id];
      this.setState({
        movies: movieState
      });
    }
  }

  render() {
    const { classes } = this.props;
    console.log('state:', this.state.movies)
    return (
      <div>
        <Box elevation={2}>
          <Grid container>
            <Search
              searchList={this.state.searchList}
              updateSearch={this.updateSearch.bind(this)}
              setCurrentMovie={this.setCurrentMovie.bind(this)}
            />
            <Grid item xs={1}></Grid>
            <MovieList movies={Object.values(this.state.movies)} />
            {this.state.currentMovie &&
              <MovieInfo
                currentMovie={this.state.currentMovie}
                updateMovies={this.updateMovies.bind(this)}
                movies={this.state.movies}
              />
            }
            <Grid item xs={1}></Grid>
          </Grid>
        </Box>
      </div>
    );
  }
}

export default App;
