import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Library from './components/Library';
import Search from './components/Search';

// TODO commented this out because you define Home below
// import Home from './components/Home';


class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search">Add Movies</Link>
            </li>
            <li>
              <Link to="/library">Library</Link>
            </li>
            <li>
              <Link to="/customers">Customers</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/customers">
            <Customers />
          </Route>
          <Route path="/library">
            <Library />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }
}

function Home() {
  return <h1>Homepage</h1>;
}

// function Search() {
//   return <h1>Customer List</h1>;
// }

// TODO delete

// function Library() {
//   return <h1>Video Library</h1>;
// }

function Customers() {
  return <h1>Search for a Video</h1>;
}

export default App;
