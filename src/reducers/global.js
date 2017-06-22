import {
  OPEN_NEW_EMPLOYEE_DIALOG,
  CLOSE_NEW_EMPLOYEE_DIALOG,
  RESET_FORM,
  SET_PAGE_TITLE,
  TOGGLE_SHOW_SNACKBAR,
} from 'constants';

const initialState = {
  newEmployeeDialogOpen: false,
  formReset: false,
  pageTitle: null,
  snackBarOpen: false,
  snackBarMessage: null
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
    case SET_PAGE_TITLE:
      return {
        ...state,
        pageTitle: action.payload
      };
    case TOGGLE_SHOW_SNACKBAR:
      return {
        ...state,
        snackBarOpen: !state.snackBarOpen,
        snackBarMessage: action.payload
      };
    default:
      return state;
  }
};

export default globalReducer;
