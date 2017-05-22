import {
  OPEN_NEW_EMPLOYEE_DIALOG,
  CLOSE_NEW_EMPLOYEE_DIALOG,
  RESET_FORM
} from '../constants';

const openNewEmployeeDialog = () => {
  return {
    type: OPEN_NEW_EMPLOYEE_DIALOG
  }
};

const closeNewEmployeeDialog = () => {
  return {
    type: CLOSE_NEW_EMPLOYEE_DIALOG
  }
};

const resetForm = () => {
  return {
    type: RESET_FORM
  }
};


export default {
  openNewEmployeeDialog,
  closeNewEmployeeDialog,
  resetForm
}
