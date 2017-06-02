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

const requestGetAllAppointment = (filters) => {
  return (dispatch) => {
    dispatch(loadAppointment());
    setTimeout(function () {
      let filteredAppointments;
      if (filters) {
        filteredAppointments = dummyAppointments.filter((item) => {
          return (`${item.patient.firstName} ${item.patient.lastName}`).includes(filters.patientName) ||
                  item.mrNo.toString().includes(filters.mrNo) ||
                  item.status.includes(filters.status);
        });
      }
      dispatch(loadAppointmentSuccess(filteredAppointments && filteredAppointments.length > 0 ? filteredAppointments : dummyAppointments));
      Promise.resolve();
    }, 1000);
    return Promise
  };
};

export default {
  requestGetAllAppointment
}
