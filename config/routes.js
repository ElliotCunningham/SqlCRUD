import React from 'react';
import Main from '../app/components/Main';
import Home from '../app/components/Home';
import ConfigContainer from '../app/components/config/ConfigContainer';

import { IndexRoute, Router, Route, browserHistory } from 'react-router';

export default (
  <Router history={browserHistory}>
    <Route name="app" path="/" component={Main}>
    	<IndexRoute name="home" component={Home}/>
    	<Route name="config" path="/config" component={ConfigContainer}/>
    </Route>
  </Router>
);