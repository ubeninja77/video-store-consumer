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
  
  // TODO list movies

  render() {
    return (
      <section>
        <SearchBox 
        submitSearchQueryCallback={this.searchMovies}
        />
      </section>
    )
  }


};

export default Search;