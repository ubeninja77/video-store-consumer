import React, { Component } from 'react';

import { Searchbar } from 'react-native-paper';

export default class SearchBox extends Component {
  state = {
    searchQuery: '',
  };

  _onChangeSearch = query => this.setState({ searchQuery: query });

  render() {
    const { searchQuery } = this.state;
    return (
      <Searchbar
        placeholder="Search"
        onChangeText={this._onChangeSearch}
        value={searchQuery}
      />
    );
  }
}

// searchbar from https://callstack.github.io/react-native-paper/searchbar.html