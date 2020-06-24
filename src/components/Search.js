import React, { Component } from 'react';
import axios from 'axios';
import SearchBox from './SearchBox';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      foundMovies: [],
    }
  }

  resetState = () => {
    this.setState({
      foundMovies: [],
    });
  }

  searchMovies = (query) => {
    if (query!== null) {
      axios.get('http://localhost:4000/movies/', {
        params: {
          query: query,
        }
      })
      .then((response) => {
        if (response.data !== undefined) {
          this.setState({
            foundMovies: response.data
          });
        };
      })  
      .catch((error) => {
        this.setState({
          error: error.errors,
          foundMovies: [],
        });
      })
    }
  }

  // TODO add movie to library
  
  listMovies = () => {
    return(
      this.state.foundMovies.map((movie, i) => {
        return (
          <div className="movie" key={i}>
              <h3>{movie.title}</h3>
              <img src={movie.image_url} alt={movie.title} />
              <p>{movie.overview}</p>
            </div>
        )
      })
    )
  }

  render() {
    return (
      <section>
        <h2>Find Movies to Add to Rental Library</h2>
        <SearchBox 
        submitSearchQueryCallback={this.searchMovies}
        />
      </section>
    )
  }
};



export default Search;