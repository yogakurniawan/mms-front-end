import React from 'react';
// import Cookie from 'js-cookie';
import { IndexRedirect, Route } from 'react-router';
import Layout from './containers/Layout';
import Login from './containers/Login';
import SearchPatient from 'containers/Patient/SearchPatient';
import Home from './containers/Home';
import { EditPatient, CreatePatient } from 'containers/Patient';
import NotFound from './components/NotFound';

export default () => {
  // const requireLogin = (nextState, replace, cb) => {
  //   const token = Cookie.get('token');
  //   if (!token) {
  //     replace('/');
  //   }
  //   cb();
  // };

  // const isLoggedIn = (nextState, replace, cb) => {
  //   const token = Cookie.get('token');
  //   if (token) {
  //     replace('/main');
  //   }
  //   cb();
  // };

  /**
   * Please keep routes in alphabetical order
   */
  return (
    <Route path="/">
      <IndexRedirect to="home" />
      <Route>
        <Route path="login" component={Login} />
      </Route>

      <Route component={Layout}>
        <Route path="home" component={Home} />
        <Route path="patient">
          <Route path="create" component={EditPatient} />
          <Route path="edit" component={CreatePatient} />
          <Route path="search" component={SearchPatient} />
        </Route>
      </Route>
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};
