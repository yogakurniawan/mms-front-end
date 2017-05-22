import axios from 'axios';
import Cookie from 'js-cookie';
import moment from 'moment';
import qs from 'qs';
import { saveItem, removeItem } from '../utils/localStorage';
import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOAD_USER,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  BASE_URL,
  LOGOUT,
  LOGOUT_SUCCESS
} from '../constants';

const LOGIN_URL = `${BASE_URL}/oauth/token`;
const GET_USER_LOGIN_URL = `${BASE_URL}/api/employee/get-login-user`;

function loadUser() {
  return {
    type: LOAD_USER
  }
}

function loadUserSuccess(payload) {
  return {
    type: LOAD_USER_SUCCESS,
    payload
  }
}

function loadUserFail(error) {
  return {
    type: LOAD_USER_FAIL,
    error
  }
}

function doLogin() {
  return {
    type: LOGIN
  }
}

function loginSuccess(payload) {
  return {
    type: LOGIN_SUCCESS,
    payload
  }
}

function loginFail(error) {
  return {
    type: LOGIN_FAIL,
    error
  }
}

const getLoggedInUserInfo = () => {
  const config = {
    method: 'GET',
    url: GET_USER_LOGIN_URL,
    headers: {
      'Authorization': `Bearer ${Cookie.get('token')}`
    }
  }
  return (dispatch) => {
    dispatch(loadUser());
    return axios(config).then(({ data }) => {
      if (data.error) {
        dispatch(loadUserFail(data));
      } else {
        dispatch(loadUserSuccess(data));
        saveItem('userInfo', data);
      }
    }).catch(({ response }) => {
      dispatch(loadUserFail(response.data));
    });
  };
}

const login = (username, password) => {
  const config = {
    method: 'POST',
    url: LOGIN_URL,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic Y2xpZW50OnNlY3JldA=='
    },
    data: qs.stringify({
      grant_type: 'password',
      username,
      password
    })
  }
  return (dispatch) => {
    dispatch(doLogin());
    return axios(config).then(({ data }) => {
      if (data.error) {
        dispatch(loginFail(data));
        return Promise.reject(data);
      } else {
        dispatch(loginSuccess(data));
        Cookie.set('token', data.access_token);
        Cookie.set('refresh_token', data.refresh_token);
        Cookie.set('token_expiration_date', moment().add(data.expires_in, 'seconds').format('x'));
        return Promise.resolve(data);
      }
    }).catch(({ response }) => {
      dispatch(loginFail(response.data));
      return Promise.reject(response.data);
    });
  };
};

const refreshToken = (refresh_token) => {
  const config = {
    method: 'POST',
    url: LOGIN_URL,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic Y2xpZW50OnNlY3JldA=='
    },
    data: qs.stringify({
      grant_type: 'refresh_token',
      refresh_token: Cookie.get('refresh_token')
    })
  }
  return axios(config).then(({ data }) => {
    if (data.error) {
      console.log(data.error);
    } else {
      Cookie.set('token', data.access_token);
      Cookie.set('refresh_token', data.refresh_token);
      Cookie.set('token_expiration_date', moment().add(data.expires_in, 'seconds').format('x'));
      return Promise.resolve(data.access_token);
    }
  }).catch(({ response }) => {
    console.log(response.data);
  });
};

function doLogout() {
  return {
    type: LOGOUT
  }
}

function logoutSuccess() {
  return {
    type: LOGOUT_SUCCESS
  }
}

const logout = () => {
  return (dispatch) => {
    dispatch(doLogout());
    Cookie.remove('token');
    removeItem('userInfo');
    dispatch(logoutSuccess());
    window.location.replace('/');
  };
};

export default {
  login,
  getLoggedInUserInfo,
  logout,
  refreshToken
}
