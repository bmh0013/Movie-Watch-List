import React, { setState, useEffect } from "react";
import $ from 'jquery';
import axios from "axios";

var Search = ({ searchResults, setSearchResults, setCurrentMovie }) => {
  useEffect(() => {
    if (searchResults.length) {
      $('.searchResults').css('display', 'flex')
    }
  }, [searchResults])

  function searchMovie() {
    let query = $(".searchInput").val();
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/search/movie',
      params: {
        api_key: '229e6548181338d528cc84ecf84d7db9',
        language: 'en-US',
        query: query,
        page: '1',
        include_adult: false,
      }
    };

    axios.request(options)
      .then(function (response) {
        setSearchResults( response.data.results.slice(0, 5) )
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  function showMovieDetails(e) {
    setCurrentMovie(searchResults[e.currentTarget.getAttribute('index')]);
  }

  const searchResultItem = function(searchObj, index) {
    let photoURL, year;

    if (searchObj.poster_path) {
      photoURL = `https://image.tmdb.org/t/p/original${searchObj.poster_path}`;
    } else {
      photoURL = 'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie-1-3.jpg'
    }

    if (searchObj.release_date) {
      year = searchObj.release_date.split('-')[0];
    } else {
      year = 'N/A'
    }

    return (
      <div className="searchItem" key={searchObj.id} index={index} onClick={showMovieDetails}>
        <img src={photoURL} height='50px'/>
        <h3>{searchObj.original_title} | ( {year} )</h3>
      </div>
    )
  }

  return (
    <div className='searchComponent'>

      <div className="searchBar">
        <input className="searchInput" type="text" name="search" placeholder="Search..." />
        <button className="searchButton" onClick={searchMovie}>
            <i className="material-icons">search</i>
        </button>
      </div>

      <div className="searchResults container">
        {searchResults.map((movie, index) => searchResultItem(movie, index))}
      </div>

    </div>
  );
}


export default Search;
