import {
  OPEN_NEW_EMPLOYEE_DIALOG,
  CLOSE_NEW_EMPLOYEE_DIALOG,
  RESET_FORM
} from '../constants'

const initialState = {
  newEmployeeDialogOpen: false,
  formReset: false
};

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_NEW_EMPLOYEE_DIALOG:
      return {
        ...state,
        newEmployeeDialogOpen: true
      };
    case CLOSE_NEW_EMPLOYEE_DIALOG:
      return {
        ...state,
        newEmployeeDialogOpen: false
      };
    case RESET_FORM:
      return {
        ...state,
        formReset: !state.formReset
      };
    default:
      return state;
  }
}

export default globalReducer;
