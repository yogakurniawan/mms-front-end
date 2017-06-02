import { combineReducers } from 'redux';
import { LOCATION_CHANGE } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import globalReducer from './global';
import patient from './patient';
import auth from './auth';
import appointment from './appointment';

const routeInitialState = {
  locationBeforeTransitions: null,
};

function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case LOCATION_CHANGE:
      return {
        ...state,
        locationBeforeTransitions: action.payload
      };
    default:
      return state;
  }
}

export default combineReducers({
  route: routeReducer,
  global: globalReducer,
  form: formReducer,
  patient,
  appointment,
  auth
});
