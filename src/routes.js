import React from 'react';
import Cookie from 'js-cookie';
import { IndexRedirect, Route } from 'react-router';
import App from './containers/App';
import Login from './containers/Login';
import Main from './containers/Main';
import NotFound from './components/NotFound';

export default () => {
  const requireLogin = (nextState, replace, cb) => {
    const token = Cookie.get('token');
    if (!token) {
      replace('/');
    }
    cb();
  };

  const isLoggedIn = (nextState, replace, cb) => {
    const token = Cookie.get('token');
    if (token) {
      replace('/main');
    }
    cb();
  };

  /**
   * Please keep routes in alphabetical order
   */
  return (
    <Route path="/" component={App}>
      <IndexRedirect to="login" />
      <Route onEnter={isLoggedIn}>
        <Route path="login" component={Login} />
      </Route>

      <Route onEnter={requireLogin}>
        <Route path="main" component={Main} />
      </Route>
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};
