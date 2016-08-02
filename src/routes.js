import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/app';

export default (
  <Router history={ browserHistory }>
    <Route path="/" component={ App } />
  </Router>
);

/* valid routes

path      								component
/         								App

*/
