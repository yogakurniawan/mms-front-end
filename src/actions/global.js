import {
  OPEN_NEW_EMPLOYEE_DIALOG,
  CLOSE_NEW_EMPLOYEE_DIALOG,
  RESET_FORM,
  SET_PAGE_TITLE,
  TOGGLE_SHOW_SNACKBAR
} from 'constants';

const openNewEmployeeDialog = () => ({
  type: OPEN_NEW_EMPLOYEE_DIALOG
});

const setPageTitle = payload => ({
  type: SET_PAGE_TITLE,
  payload
});

const closeNewEmployeeDialog = () => ({
  type: CLOSE_NEW_EMPLOYEE_DIALOG
});

const resetForm = () => ({
  type: RESET_FORM
});

const toggleShowSnackBar = (payload) => ({
  type: TOGGLE_SHOW_SNACKBAR,
  payload
});

export default {
  openNewEmployeeDialog,
  closeNewEmployeeDialog,
  resetForm,
  setPageTitle,
  toggleShowSnackBar
};
