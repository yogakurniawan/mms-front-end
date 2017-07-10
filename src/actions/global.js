import {
  RESET_FORM,
  SET_PAGE_TITLE,
  TOGGLE_SHOW_SNACKBAR
} from 'constants/ActionTypes';

const setPageTitle = payload => ({
  type: SET_PAGE_TITLE,
  payload
});

const resetForm = () => ({
  type: RESET_FORM
});

const toggleShowSnackBar = (payload) => ({
  type: TOGGLE_SHOW_SNACKBAR,
  payload
});

export default {
  resetForm,
  setPageTitle,
  toggleShowSnackBar
};
