import {
  ADD_APPOINTMENT,
  ADD_APPOINTMENT_SUCCESS,
  ADD_APPOINTMENT_ERROR,
  // DELETE_APPOINTMENT,
  // DELETE_APPOINTMENT_SUCCESS,
  // DELETE_APPOINTMENT_ERROR,
  // UPDATE_APPOINTMENT,
  // UPDATE_APPOINTMENT_SUCCESS,
  // UPDATE_APPOINTMENT_ERROR,
  LOAD_APPOINTMENT,
  LOAD_APPOINTMENT_SUCCESS,
  LOAD_APPOINTMENT_ERROR,
  SET_APPOINTMENT_FILTER
} from '../constants';
import { generate as generateGuid } from '../utils/uuid';
import { dummyAppointments } from '../dummy/dummy-appointments'

//const ADD_APPOINTMENT_API_URL = `${BASE_URL}/api/employee`;
//const ALL_APPOINTMENT_URL = `${EMPLOYEE_API_URL}/all`;

const addAppointment = () => {
  return {
    type: ADD_APPOINTMENT
  }
}

const addAppointmentSuccess = (payload) => {
  return {
    type: ADD_APPOINTMENT_SUCCESS,
    payload
  }
};

const addAppointmentError = (error) => {
  return {
    type: ADD_APPOINTMENT_ERROR,
    error
  }
};

const loadAppointment = () => {
  return {
    type: LOAD_APPOINTMENT
  }
};

const loadAppointmentSuccess = (payload) => {
  console.log(payload);
  return {
    type: LOAD_APPOINTMENT_SUCCESS,
    payload
  }
};

const loadAppointmentError = (error) => {
  return {
    type: LOAD_APPOINTMENT_ERROR,
    error
  }
};

const setAppointmentFilter = (payload) => {
  return {
    type: SET_APPOINTMENT_FILTER,
    payload
  }
};

const test = (payload) => {
  setAppointmentFilter()
  requestGetAllAppointment()
}

const requestGetAllAppointment = (filter) => {
  return (dispatch) => {
    dispatch(loadAppointment());
    console.log("filter ->" + filter);

    setTimeout(function(){
        dispatch(loadAppointmentSuccess(dummyAppointments));
        Promise.resolve();
    }, 3000);
    return Promise 
  };
};

export default {
  requestGetAllAppointment,
  setAppointmentFilter
}
