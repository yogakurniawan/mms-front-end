import 'whatwg-fetch';
import {
  ADD_PATIENT,
  ADD_PATIENT_SUCCESS,
  ADD_PATIENT_ERROR,
  SET_TAB_VALUE,
  DISABLE_TAB,
  LOAD_PATIENTS,
  LOAD_PATIENTS_SUCCESS,
  LOAD_PATIENTS_ERROR,
  LOAD_PATIENT,
  LOAD_PATIENT_SUCCESS,
  LOAD_PATIENT_ERROR,
  BASE_API_URL,
  SET_PATIENT_PAGE,
  DEFAULT_PAGE_SIZE,
} from 'constants';
import { get, post, put } from 'utils/fetch';

const PATIENT_API_URL = `${BASE_API_URL}patients`;
const RSQL_PATIENT_API = `${PATIENT_API_URL}/search/rsql`;
const PAYMENT_INFO_API_URL = `${BASE_API_URL}paymentInfoes`;
const INSURANCE_PAYMENT_INFO_API_URL = `${BASE_API_URL}insurancePaymentInfoes`;
const PATIENT_ADDRESS_API_URL = `${BASE_API_URL}patientAddresses`;
const EMERGENCY_CONTACT_API_URL = `${BASE_API_URL}emergencyContacts`;
const EMERGENCY_CONTACT_ADDRESS_API_URL = `${BASE_API_URL}emergencyContactAddresses`;

const addPatient = () => {
  return {
    type: ADD_PATIENT
  }
}

const setPatientPage = (payload) => {
  return {
    type: SET_PATIENT_PAGE,
    payload
  }
}

const addPatientSuccess = (payload) => {
  return {
    type: ADD_PATIENT_SUCCESS,
    payload
  }
};

const addPatientError = (error) => {
  return {
    type: ADD_PATIENT_ERROR,
    error
  }
};

const loadPatients = () => {
  return {
    type: LOAD_PATIENTS
  }
};

const loadPatientsSuccess = (payload) => {
  return {
    type: LOAD_PATIENTS_SUCCESS,
    payload
  }
};

const loadPatientsError = (error) => {
  return {
    type: LOAD_PATIENTS_ERROR,
    error
  }
};

const loadPatient = () => {
  return {
    type: LOAD_PATIENT
  }
};

const loadPatientSuccess = (payload) => {
  return {
    type: LOAD_PATIENT_SUCCESS,
    payload
  }
};

const loadPatientError = (error) => {
  return {
    type: LOAD_PATIENT_ERROR,
    error
  }
};

const setTabValue = (payload) => {
  return {
    type: SET_TAB_VALUE,
    payload
  }
};

const disableTab = (tab, value) => {
  return {
    type: DISABLE_TAB,
    payload: {
      tab,
      value
    }
  }
};

const getPatients = (page, id) => {
  return (dispatch) => {
    dispatch(loadPatients());
    let url = PATIENT_API_URL;
    const queryParams = {
      page,
      sort: "firstName",
      size: DEFAULT_PAGE_SIZE
    };
    let config = {
      queryParams
    };

    if (id) {
      url = `${PATIENT_API_URL}/${id}`;
      config = null;
    }

    return get(url, config).then((response) => {
      return response.json();
    }).then((json) => {
      let patients = null;
      if (json._embedded) {
        patients = { patients: json._embedded.patients, page: json.page };
      } else {
        patients = { patients: [json], page: { totalElements: 1 } };
      }
      dispatch(loadPatientsSuccess(patients));
    }).catch((error) => {
      dispatch(loadPatientsError(error.response));
    });
  };
};

const getJson = (response) => {
  if (response.status === 404) {
    return;
  }
  return response.json();
};

const constructPatient = (patient, dispatch) => {
  const { _links } = patient;
  const patientAddresses = get(_links.address.href).then(getJson);
  const emergencyContact = get(_links.emergencyContact.href).then(getJson);
  const paymentInfo = get(_links.paymentInfo.href).then(getJson);
  return Promise.all([
    patientAddresses,
    emergencyContact,
    paymentInfo]).then(([patientAddresses, emergencyContact, paymentInfo]) => {
      if (patientAddresses) {
        patient.address = patientAddresses;
      }

      if (paymentInfo) {
        patient.paymentInfo = paymentInfo;
      }

      if (emergencyContact) {
        const { _links } = emergencyContact;
        get(_links.address.href)
          .then(getJson)
          .then((address) => {
            emergencyContact.address = address;
            patient.emergencyContact = emergencyContact;
            dispatch(loadPatientSuccess(patient));
          });
      }
    });
}

const getPatient = (patient, id) => {
  return (dispatch) => {
    dispatch(loadPatient());
    if (patient) {
      constructPatient(patient, dispatch)
        .catch((error) => dispatch(loadPatientError(error)));
    } else {
      get(`${PATIENT_API_URL}/${id}`)
        .then(getJson)
        .then((result) => {
          constructPatient(result, dispatch);
        })
        .catch((error) => dispatch(loadPatientError(error)));
    }
  };
};

const getPatientsByKeyword = (page, keyword) => {
  return (dispatch) => {
    dispatch(loadPatients());
    dispatch(setPatientPage(page));
    let query = `lastName==*${keyword}*,firstName==*${keyword}*,pob==*${keyword}*,religion==*${keyword}*,nationality==*${keyword}*,email==*${keyword}*`;

    const queryParams = {
      q: query,
      page,
      size: DEFAULT_PAGE_SIZE
    };

    return get(RSQL_PATIENT_API, {
      queryParams
    }).then((response) => {
      return response.json();
    }).then((json) => {
      const patients = { patients: json._embedded ? json._embedded.patients : [], page: json.page };
      dispatch(loadPatientsSuccess(patients));
    }).catch((error) => {
      dispatch(loadPatientsError(error.response));
    });
  };
};

const addPatientDetail = ({ patient, patientAddress, emergencyContact, emergencyContactAddress, paymentInfo }) => {
  return (dispatch) => {
    dispatch(addPatient());
    return post({
      url: PATIENT_API_URL,
      data: patient
    }).then((response) => {
      return response.json();
    }).then((json) => {
      const request = [];
      const link = json._links;
      request.push(post({
        url: PATIENT_ADDRESS_API_URL,
        data: { ...patientAddress, patient: link.patient.href }
      }));
      request.push(
        post({
          url: EMERGENCY_CONTACT_API_URL,
          data: { ...emergencyContact, patient: link.patient.href }
        })
          .then(response => response.json())
          .then(json => {
            const link = json._links;
            post({
              url: EMERGENCY_CONTACT_ADDRESS_API_URL,
              data: { ...emergencyContactAddress, emergencyContact: link.emergencyContact.href }
            })
          })
      );

      paymentInfo.memberNumber = "0";
      paymentInfo.providerName = " ";
      paymentInfo.policyHolderName = " ";
      paymentInfo.benefitPlan = " ";

      if (paymentInfo.type === "Cash") {
        request.push(post({
          url: PAYMENT_INFO_API_URL,
          data: { ...paymentInfo, patient: link.patient.href }
        }));
      } else {
        request.push(post({
          url: INSURANCE_PAYMENT_INFO_API_URL,
          data: { ...paymentInfo, patient: link.patient.href }
        }));
      }

      return Promise.all(request)
        .then(() => dispatch(addPatientSuccess()))
        .catch((error) => dispatch(addPatientError(error.response)));
    }).catch((error) => {
      dispatch(addPatientError(error.response));
      return Promise.reject(error.response);
    });
  };
};

const updatePatientDetail = (isUpdate, { id, patient, patientAddress, emergencyContact, emergencyContactAddress, paymentInfo }) => {
  return (dispatch) => {
    dispatch(addPatient());
    return put({
      url: `${PATIENT_API_URL}/${id}`,
      data: patient
    }).then((response) => {
      return response.json();
    }).then((json) => {
      const request = [];
      request.push(put({
        url: patientAddress.link.patientAddress.href,
        data: patientAddress
      }));

      if (emergencyContact) {
        request.push(
          put({
            url: emergencyContact.link.emergencyContact.href,
            data: emergencyContact
          })
        );
        emergencyContact.address && request.push(
          put({
            url: emergencyContact.address._links.emergencyContactAddress.href,
            data: emergencyContactAddress
          })
        );
      }

      request.push(
        put({
          url: paymentInfo.link.insurancePaymentInfo.href,
          data: paymentInfo
        })
      );

      return Promise.all(request)
        .then(() => dispatch(addPatientSuccess()))
        .catch((error) => dispatch(addPatientError(error.response)));
    }).catch((error) => {
      dispatch(addPatientError(error.response));
      return Promise.reject(error.response);
    });
  };
};

export default {
  setTabValue,
  disableTab,
  addPatientDetail,
  updatePatientDetail,
  getPatients,
  setPatientPage,
  getPatientsByKeyword,
  getPatient
}
