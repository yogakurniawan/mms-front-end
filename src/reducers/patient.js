import {
  LOAD_PATIENTS,
  LOAD_PATIENTS_SUCCESS,
  LOAD_PATIENTS_ERROR,
} from 'constants';
import patientList from 'dummy/patients';

const initialState = {
  loading: {
    loadPatients: false,
  },
  error: {
    loadPatients: null,
  },
  patients: patientList,
};

const reducer = (state = initialState, action) => {
  const { payload, error } = action;
  switch (action.type) {
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
        patients: payload,
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
        patients: null,
      };
    default:
      return state;
  }
}

export default reducer;
