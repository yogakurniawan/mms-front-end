import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOAD_USER,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL
} from '../constants';

const initialState = {
  loadingUser: false,
  loadUserError: null,
  loggingIn: false,
  loginInfo: null,
  userInfo: null,
  loginError: null,
  loggingOut: false,
  logoutError: null
};

export default function reducer(state = initialState, action = {}) {
  const { payload, error } = action;
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loggingIn: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        loginInfo: payload
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loggingIn: false,
        loginInfo: null,
        loginError: error
      };
    case LOAD_USER:
      return {
        ...state,
        loadingUser: true
      };
    case LOAD_USER_SUCCESS:
      return {
        ...state,
        loadingUser: false,
        userInfo: payload,
      };
    case LOAD_USER_FAIL:
      return {
        ...state,
        loadingUser: false,
        userInfo: null,
        loadUserError: error
      };
    case LOGOUT:
      return {
        ...state,
        loggingOut: true
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loggingOut: false,
        userInfo: null,
        loginInfo: null
      };
    case LOGOUT_FAIL:
      return {
        ...state,
        loggingOut: false,
        logoutError: error
      };
    default:
      return state;
  }
}