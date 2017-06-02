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
  SET_APPOINTMENT_FILTER,
  LOAD_MORE_APPOINTMENT,
  LOAD_MORE_APPOINTMENT_SUCCESS,
  LOAD_MORE_APPOINTMENT_ERROR
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

const loadMoreAppointment = (payload) => {
  return {
    type: LOAD_MORE_APPOINTMENT,
    payload
  }
};


const loadMoreAppointmentSuccess = (payload) => {
  return {
    type: LOAD_MORE_APPOINTMENT_SUCCESS,
    payload
  }
};

const loadMoreAppointmentError = (payload) => {
  return {
    type: LOAD_MORE_APPOINTMENT_ERROR,
    payload
  }
};


const requestGetAllAppointment = (paging, filters) => {
  return (dispatch) => {
    dispatch(loadAppointment());
    setTimeout(function () {
      let filteredAppointments;
      if (filters) {
        filteredAppointments = dummyAppointments.filter((item) => {
          return ((`${item.patient.firstName} ${item.patient.lastName}`).toLowerCase()).includes((filters.patientName && filters.patientName.toLowerCase()));
        });
      }
      dispatch(loadAppointmentSuccess(filteredAppointments && filteredAppointments.length > 0 ? doPaging(filteredAppointments, paging) : doPaging(dummyAppointments, paging)));
      Promise.resolve();
    }, 1000);
    return Promise
  };
};

const loadMore = (paging, filters) => {
  return (dispatch) => {
    dispatch(loadMoreAppointment());
    setTimeout(function () {
      let filteredAppointments;
      if (filters) {
        filteredAppointments = dummyAppointments.filter((item) => {
          return ((`${item.patient.firstName} ${item.patient.lastName}`).toLowerCase()).includes((filters.patientName && filters.patientName.toLowerCase()));
        });
      }
      dispatch(loadMoreAppointmentSuccess(filteredAppointments && filteredAppointments.length > 0 ? doPaging(filteredAppointments, paging) : doPaging(dummyAppointments, paging)));
      Promise.resolve();
    }, 1000);
    return Promise
  };
};

const doPaging = (appoinmentList, paging) => {
  debugger;
    let pageNumber = 0 ;
    let start = 0
    let end = 0
    let appointmentList = [];
    pageNumber = paging.pageNumber - 1;
    start = pageNumber  * paging.pageSize
    end = ((pageNumber + 1) * paging.pageSize) > appoinmentList.length ? appoinmentList.length : ((pageNumber + 1) * paging.pageSize);

    return appoinmentList.slice(start, end);
}
 
export default {
  requestGetAllAppointment,
  loadMore
}
