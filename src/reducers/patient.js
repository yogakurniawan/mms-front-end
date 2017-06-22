import {
  LOAD_PATIENTS,
  LOAD_PATIENTS_SUCCESS,
  LOAD_PATIENTS_ERROR,
  LOAD_PATIENT,
  LOAD_PATIENT_SUCCESS,
  LOAD_PATIENT_ERROR,
  ADD_PATIENT,
  ADD_PATIENT_SUCCESS,
  ADD_PATIENT_ERROR,
  SET_TAB_VALUE,
  DISABLE_TAB,
  SET_PATIENT_PAGE
} from 'constants';

const initialState = {
  loading: {
    addPatient: false,
    loadPatients: false,
    loadPatient: false
  },
  error: {
    addPatient: null,
    loadPatients: null,
    loadPatient: null
  },
  success: {
    addPatient: null,
    loadPatients: null,
    loadPatient: null
  },
  tabValue: 0,
  tabDisabledProperty: {
    patientDetail: false,
    emergencyContact: true,
    payment: true,
    supportingDocument: true
  },
  page: 0
};

const reducer = (state = initialState, action) => {
  const { payload, error } = action;
  switch (action.type) {
    case ADD_PATIENT:
      return {
        ...state,
        loading: {
          ...state.loading,
          addPatient: true,
        }
      };
    case ADD_PATIENT_SUCCESS:
      return {
        ...state,
        loading: {
          ...state.loading,
          addPatient: false,
        },
        error: {
          ...state.error,
          addPatient: null,
        },
        success: {
          ...state.success,
          addPatient: payload,
        }
      };
    case ADD_PATIENT_ERROR:
      return {
        ...state,
        loading: {
          ...state.loading,
          addPatient: false,
        },
        error: {
          ...state.error,
          addPatient: error,
        },
        success: {
          ...state.success,
          addPatient: null,
        }
      };
    case LOAD_PATIENTS:
      return {
        ...state,
        loading: {
          ...state.loading,
          loadPatients: true,
        }
      };
    case LOAD_PATIENTS_SUCCESS:
      return {
        ...state,
        loading: {
          ...state.loading,
          loadPatients: false,
        },
        error: {
          ...state.error,
          loadPatients: null,
        },
        success: {
          ...state.success,
          loadPatients: payload,
        }
      };
    case LOAD_PATIENTS_ERROR:
      return {
        ...state,
        loading: {
          ...state.loading,
          loadPatients: false,
        },
        error: {
          ...state.error,
          loadPatients: error,
        },
        success: {
          ...state.success,
          loadPatients: null,
        }
      };
    case LOAD_PATIENT:
      return {
        ...state,
        loading: {
          ...state.loading,
          loadPatient: true,
        }
      };
    case LOAD_PATIENT_SUCCESS:
      return {
        ...state,
        loading: {
          ...state.loading,
          loadPatient: false,
        },
        error: {
          ...state.error,
          loadPatient: null,
        },
        success: {
          ...state.success,
          loadPatient: payload,
        }
      };
    case LOAD_PATIENT_ERROR:
      return {
        ...state,
        loading: {
          ...state.loading,
          loadPatient: false,
        },
        error: {
          ...state.error,
          loadPatient: error,
        },
        success: {
          ...state.success,
          loadPatient: null,
        }
      };
    case SET_TAB_VALUE:
      return {
        ...state,
        tabValue: payload
      };
    case SET_PATIENT_PAGE:
      return {
        ...state,
        page: payload
      };
    case DISABLE_TAB:
      return {
        ...state,
        tabDisabledProperty: {
          ...state.tabDisabledProperty,
          [payload.tab]: payload.value
        }
      };
    default:
      return state;
  }
}

export default reducer;
