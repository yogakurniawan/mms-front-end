import * as types from 'constants/ActionTypes'
import * as actions from '../auth';

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

describe('actions', () => {
  it('user >> should create an action to load a user data', () => {
    const expectedAction = {
      type: types.LOAD_USER
    };
    expect(actions.loadUser()).toEqual(expectedAction);
  });

  it('login >> should create an action to do login', () => {
    const expectedAction = {
      type: types.LOGIN
    };
    expect(actions.doLogin()).toEqual(expectedAction);
  });

  it('user >> should create an action to accept user data payload', () => {
    const payload = {
      firstName: "John",
      lastName: "Dalton"
    };
    const expectedAction = {
      type: types.LOAD_USER_SUCCESS,
      payload
    };
    expect(actions.loadUserSuccess(payload)).toEqual(expectedAction);
  });

  it('user >> should create an action to accept error payload', () => {
    const payload = {
      error_code: 404,
      error_message: "Server Error"
    };
    const expectedAction = {
      type: types.LOAD_USER_FAIL,
      payload
    };
    expect(actions.loadUserFail(payload)).toEqual(expectedAction);
  });
})