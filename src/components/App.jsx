import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

const App = () => (
  <Router>
    <div>
      <Route path="/:page?/:subpage?" render={({match}) => (
        <h1>
          Page: {match.params.page || 'Home'}
          <br />
          Subpage: {match.params.subpage}
        </h1>
      )} />
    </div>
  </Router>
);

export default App;
