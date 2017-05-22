import axios from 'axios';
import Cookie from 'js-cookie';
import {
  ADD_EMPLOYEE,
  ADD_EMPLOYEE_SUCCESS,
  ADD_EMPLOYEE_ERROR,
  // DELETE_EMPLOYEE,
  // DELETE_EMPLOYEE_SUCCESS,
  // DELETE_EMPLOYEE_ERROR,
  // UPDATE_EMPLOYEE,
  // UPDATE_EMPLOYEE_SUCCESS,
  // UPDATE_EMPLOYEE_ERROR,
  OPEN_NEW_EMPLOYEE_DIALOG,
  CLOSE_NEW_EMPLOYEE_DIALOG,
  LOAD_EMPLOYEES,
  LOAD_EMPLOYEES_SUCCESS,
  LOAD_EMPLOYEES_ERROR,
  BASE_URL,
  ADD_EMPLOYMENT_HISTORY,
  DELETE_EMPLOYMENT_HISTORY,
  CLEAR_EMPLOYMENT_HISTORIES
} from '../constants';
import { generate as generateGuid } from '../utils/uuid';

const EMPLOYEE_API_URL = `${BASE_URL}/api/employee`;
const EMPLOYMENT_HISTORY_API_URL = `${BASE_URL}/api/history`;
const ALL_EMPLOYEE_URL = `${EMPLOYEE_API_URL}/all`;
// const EMPLOYEE_BY_NAME = `${EMPLOYEE_API_URL}/search/name`;

const addEmployee = () => {
  return {
    type: ADD_EMPLOYEE
  }
}

const addEmployeeSuccess = (payload) => {
  return {
    type: ADD_EMPLOYEE_SUCCESS,
    payload
  }
};

const addEmployeeError = (error) => {
  return {
    type: ADD_EMPLOYEE_ERROR,
    error
  }
};

const addEmploymentHistory = (payload) => {
  return {
    type: ADD_EMPLOYMENT_HISTORY,
    payload: {
      ...payload,
      id: generateGuid()
    }
  }
};

const deleteEmploymentHistory = (id) => {
  return {
    type: DELETE_EMPLOYMENT_HISTORY,
    id
  }
};

const clearEmploymentHistories = (id) => {
  return {
    type: CLEAR_EMPLOYMENT_HISTORIES
  }
};

// const deleteEmployee = (index) => {
//   return {
//     type: DELETE_EMPLOYEE,
//     index
//   }
// }

// const updateEmployee = (employee, index) => {
//   return {
//     type: UPDATE_EMPLOYEE,
//     employee,
//     index,
//   }
// }

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

const loadEmployee = () => {
  return {
    type: LOAD_EMPLOYEES
  }
};

const loadEmployeeSuccess = (payload) => {
  return {
    type: LOAD_EMPLOYEES_SUCCESS,
    payload
  }
};

const loadEmployeeError = (error) => {
  return {
    type: LOAD_EMPLOYEES_ERROR,
    error
  }
};

const requestGetAllEmployees = () => {
  return (dispatch) => {
    dispatch(loadEmployee());
    return axios.get(ALL_EMPLOYEE_URL, {
      headers: {
        'Authorization': `Bearer ${Cookie.get('token')}`
      }
    }).then((response) => {
      dispatch(loadEmployeeSuccess(response.data));
    }).catch((error) => {
      dispatch(loadEmployeeError(error.response));
    });
  };
};

// const requestGetEmployeeByName = (name) => {
//   return (dispatch) => {
//     return axios.get(`${EMPLOYEE_BY_NAME}/name`)
//       .then(response => {
//         dispatch(fetchEmployee(response.data));
//       }).catch(error => {
//         console.log(error.response);
//       });
//   };
// };

const requestCreateEmploymentHistory = (employmentHistory) => {
  const config = {
    method: 'POST',
    url: EMPLOYMENT_HISTORY_API_URL,
    headers: {
      'Authorization': `Bearer ${Cookie.get('token')}`
    },
    data: employmentHistory
  }
  return axios(config);
};

const requestCreateEmployee = ({ employee, employmentHistories }) => {
  return (dispatch) => {
    dispatch(addEmployee());
    const config = {
      method: 'POST',
      url: EMPLOYEE_API_URL,
      headers: {
        'Authorization': `Bearer ${Cookie.get('token')}`
      },
      data: employee
    }
    return axios(config).then((response) => {
      const savedEmployee = response.data;
      const post = [];
      for (const history of employmentHistories) {
        history.employeeId = savedEmployee.id;
        post.push(requestCreateEmploymentHistory(history));
      }
      return Promise.all(post)
        .then(() => dispatch(addEmployeeSuccess(savedEmployee)))
        .catch((error) => dispatch(addEmployeeError(error.response)));
    }).catch((error) => {
      dispatch(addEmployeeError(error.response));
      return Promise.reject(error.response);
    });
  };
};

// const requestUpdateEmployee = (employee, index) => {
//   return (dispatch) => {
//     return axios.put(`${EMPLOYEE_API_URL}/${employee.id}`, employee)
//       .then(response => {
//         dispatch(updateEmployee(response.data, index));
//       }).catch(error => {
//         console.log(error.response);
//       });
//   };
// }

// const requestDeleteEmployee = (employee, index) => {
//   return (dispatch) => {
//     return axios.delete(`${EMPLOYEE_API_URL}/${employee.id}`)
//       .then(response => {
//         dispatch(deleteEmployee(index));
//       }).catch(error => {
//         console.log(error.response);
//       });
//   };
// }

export default {
  requestGetAllEmployees,
  openNewEmployeeDialog,
  closeNewEmployeeDialog,
  // requestGetEmployeeByName,
  requestCreateEmployee,
  addEmploymentHistory,
  deleteEmploymentHistory,
  clearEmploymentHistories
  // requestUpdateEmployee,
  // requestDeleteEmployee
}
