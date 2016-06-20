import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';
import App from '../components/App';

const Routes = ({ history }) =>
  <Router history={history}>
    <Route path="/" component={App} />
    <Route path="/collect" component={App} />
    <Route path="/basket" component={App} />
    <Route path="/chemical" component={App} />
    <Route path="/pickaxe" component={App} />
    <Route path="/sence" component={App} />
  </Router>;

Routes.propTypes = {
  history: PropTypes.any,
};

export default Routes;
