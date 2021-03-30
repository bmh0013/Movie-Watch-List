import React from "react";
import Search from "./search.jsx"
import MovieList from "./movieList.jsx"
import MovieInfo from "./movieInfo.jsx"
import { Grid, Box } from '@material-ui/core'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentMovie: null,
      movies: []
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Box elevation={2}>
          <Grid container>
            <Search />
            <Grid item xs={1}></Grid>
            <MovieList movies={this.state.movies}/>
            <MovieInfo />
            <Grid item xs={1}></Grid>
          </Grid>
        </Box>
      </div>
    );
  }
}

export default App;
