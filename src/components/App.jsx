import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const Links = () => (
  <nav>
    <Link to="/home">Home</Link>
    <Link to="/about">About</Link>
  </nav>
);

const Header = ({match}) => (
  <div className="header">
    <Route path="/:page"
      render={({match}) => (
        <h1>{match.params.page} header</h1>
      )} />
  </div>
);

const Content = ({match}) => (
  <div className="content">
    <Route path="/:page"
      render={({match}) => (
        <h1>{match.params.page} content</h1>
      )} />
  </div>
)

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Links />
          <Header />
          <Content />
        </div>
      </Router>
    )
  }
}

export default App;
