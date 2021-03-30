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
      searchList: [],
      movies: []
    }
  }

  updateSearch(searchList) {
    this.setState({
      searchList: searchList
    })
  }


  render() {
    const { classes } = this.props;
    return (
      <div>
        <Box elevation={2}>
          <Grid container>
            <Search searchList={this.state.searchList} updateSearch={this.updateSearch.bind(this)}/>
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
