import {
  LOAD_APPOINTMENT,
  LOAD_APPOINTMENT_SUCCESS,
  LOAD_APPOINTMENT_ERROR,
  ADD_APPOINTMENT,
  ADD_APPOINTMENT_SUCCESS,
  ADD_APPOINTMENT_ERROR,
  SET_APPOINTMENT_PAGE,
  LOAD_MORE_APPOINTMENT,
  LOAD_MORE_APPOINTMENT_SUCCESS,
  LOAD_MORE_APPOINTMENT_ERROR,
  SET_TOTAL_APPOINTMENT
} from 'constants';

const initialState = {
  addingNewAppointment: false,
  addNewAppointmentError: null,
  addedAppointment: null,
  loadingAppointment: false,
  loadAppointmentError: null,
  loadingMoreAppointment: false,
  loadingMoreAppointmentError: false,
  appointmentList: [],
  appointmentPagination:{ pageNumber: 1, pageSize: 10, total: 0, pageStart: 0, pageEnd: 0}
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
    case LOAD_MORE_APPOINTMENT:
      return {
        ...state,
        loadingMoreAppointment: true
      };
    case LOAD_MORE_APPOINTMENT_SUCCESS:
      return {
        ...state,
        loadingMoreAppointment: false,
        loadingMoreAppointmentError: null,
        appointmentList: [...state.appointmentList, ...payload]
      };
    case LOAD_MORE_APPOINTMENT_ERROR:
      return {
        ...state,
        loadingMoreAppointment: false,
        appointmentList: null,
        loadingMoreAppointmentError: error
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
    case SET_APPOINTMENT_PAGE:
      return {
        ...state,
        addingNewAppointment: false,
        appointmentPagination: payload,
        addNewAppointmentError: error
      };
    default:
      return state;
  }
}

export default reducer;
