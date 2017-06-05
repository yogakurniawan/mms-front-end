import React from 'react';
// import Cookie from 'js-cookie';
import { IndexRedirect, Route } from 'react-router';
import App from './containers/App';
import Login from './containers/Login';
import SearchAppointment from 'containers/Appointment/SearchAppointment';
import SearchPatient from 'containers/Patient/SearchPatient';
import Home from './containers/Home';
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
    <Route path="/" component={App}>
      <IndexRedirect to="home" />
      <Route>
        <Route path="login" component={Login} />
      </Route>

      <Route>
        <Route path="home" component={Home} />
        <Route path="create-appointment" component={Home} />
        <Route path="search-appointment" component={SearchAppointment} />
        <Route path="create-appointment-patient" component={Home} />
        <Route path="create-patient" component={Home} />
        <Route path="search-patient" component={SearchPatient} />
      </Route>
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};
