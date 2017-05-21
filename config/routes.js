import React from 'react';
import Home from '../app/components/Home';

import { IndexRoute, Router, Route, browserHistory } from 'react-router';

export default (
  <Router history={browserHistory}>
    <Route name="app" path="/" component={Home}>
    </Route>
  </Router>
);