import {
  LOAD_APPOINTMENT,
  LOAD_APPOINTMENT_SUCCESS,
  LOAD_APPOINTMENT_ERROR,
  ADD_APPOINTMENT,
  ADD_APPOINTMENT_SUCCESS,
  ADD_APPOINTMENT_ERROR,
  SET_APPOINTMENT_FILTER
} from 'constants';

const initialState = {
  addingNewAppointment: false,
  addNewAppointmentError: null,
  addedAppointment: null,
  loadingAppointment: false,
  loadAppointmentError: null,
  appointmentList: [],
};

const reducer = (state = initialState, action) => {
  const { payload, error, id } = action;
  switch (action.type) {
    case LOAD_APPOINTMENT:
      return {
        ...state,
        loadingAppointment: true
      };
    case LOAD_APPOINTMENT_SUCCESS:
      return {
        ...state,
        loadingAppointment: false,
        loadAppointmentError: null,
        appointmentList: payload
      };
    case LOAD_APPOINTMENT_ERROR:
      return {
        ...state,
        loadingAppointment: false,
        appointmentList: null,
        loadAppointmentError: error
      };
    case ADD_APPOINTMENT:
      return {
        ...state,
        addingNewAppointment: true
      };
    case ADD_APPOINTMENT_SUCCESS:
      return {
        ...state,
        addingNewAppointment: false,
        addNewAppointmentError: null,
        addedAppointment: payload
      };
    case ADD_APPOINTMENT_ERROR:
      return {
        ...state,
        addingNewAppointment: false,
        addedAppointment: null,
        addNewAppointmentError: error
      };
    default:
      return state;
  }
}

export default reducer;
