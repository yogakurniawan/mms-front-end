import Cookie from 'js-cookie';
import moment from 'moment';
import { auth } from '../actions';

function oauth({ dispatch, getState }) {
  return (next) => (action) => {
    // only worry about expiring token for async actions
    if (!/@@/.test(action.type)) {
      const tokenExpiration = Cookie.get('token_expiration_date');
      const dateNow = moment().format('x');
      if (tokenExpiration && dateNow >= tokenExpiration - 30) {
        console.log('token is being refreshed');
        return auth.refreshToken().then((token) => {
          next(action);
        });
      }
    }
    return next(action);
  };
}

export default oauth;