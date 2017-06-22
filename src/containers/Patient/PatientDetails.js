import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import {
  patient as patientActions
} from 'actions';
import { requiredValidation } from 'utils/validation';
import { default as PatientDetailsComponent } from 'components/PatientForm/PatientDetails';
import {
  titles,
  genders,
  occupations,
  maritalStatuses,
  religions
} from 'dummy/lookups';
import { getValue, getPhoneNumber } from 'utils/misc';

class PatientDetails extends Component {

  componentWillMount() {
    const { reset, isModify, initialize } = this.props;
    reset();
    isModify && this.constructPatientDetail(this.props);
    if (!isModify) {
      initialize({
        dob: new Date('1990-05-30')
      });
    }
  }

  constructPatientDetail(props) {
    const { initialize, patient } = props;
    if (patient) {
      const {
      firstName,
        lastName,
        gender,
        allergy,
        bloodType,
        disabilityNote,
        dob,
        email,
        maritalStatus,
        nationality,
        occupation,
        otherNotes,
        outsidePatient,
        patientHasDied,
        pob,
        religion,
        rhesusType,
        title,
        type,
        address: {
        country,
          city,
          line,
          postCode,
          state
      },
        phoneNumbers
    } = patient;

      initialize({
        firstName,
        lastName,
        gender: getValue(genders, gender),
        allergy,
        bloodType,
        disabilityNote,
        dob: new Date(dob),
        email,
        maritalStatus: getValue(maritalStatuses, maritalStatus),
        nationality,
        occupation: getValue(occupations, occupation),
        otherNotes,
        outsidePatient,
        patientHasDied,
        pob,
        religion: getValue(religions, religion),
        rhesusType,
        title: getValue(titles, title),
        type,
        country,
        city,
        addressLine: line,
        postCode,
        state,
        homePhone: getPhoneNumber(phoneNumbers, "HOME").number,
        mobilePhone: getPhoneNumber(phoneNumbers, "MOBILE").number,
        officePhone: getPhoneNumber(phoneNumbers, "OFFICE").number,
        extNo: getPhoneNumber(phoneNumbers, "OFFICE").ext
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    const {
      valid,
      disableTab,
      dirty,
    } = nextProps;
    if (valid && dirty) {
      disableTab('emergencyContact', false);
      disableTab('payment', false);
      disableTab('supportingDocument', false);
    }

    if (!valid && dirty) {
      disableTab('emergencyContact', true);
      disableTab('payment', true);
      disableTab('supportingDocument', true);
    }
  }

  render() {
    const { valid, dirty, handleCancel, handleNav } = this.props;
    return (
      <PatientDetailsComponent
        onCancel={handleCancel}
        onNext={() => handleNav(1)}
        buttonNextDisabled={!(valid && dirty)} />
    );
  }
}

PatientDetails.propTypes = {
  disableTabsAfterDetails: PropTypes.func,
  disableTab: PropTypes.func,
  isModify: PropTypes.bool,
  setTabValue: PropTypes.func,
  handleCancel: PropTypes.func,
  patient: PropTypes.object,
  handleNav: PropTypes.func
};

const mapDispatchToProps = {
  disableTab: patientActions.disableTab,
  setTabValue: patientActions.setTabValue
};

const mapStateToProps = () => ({
});

const validate = values => {
  const errors = {}
  const fields = [
    'firstName',
    'lastName',
    'pob',
    'dob',
    'gender',
    'type',
    'nationality',
    'addressLine',
    'state',
    'country'
  ];

  return { ...requiredValidation(values, fields), ...errors };
}

const patientDetailsReduxForm = reduxForm({
  form: 'PatientDetailsForm',
  destroyOnUnmount: false,
  validate,
  initialValues: { dob: new Date('1990-05-30') }
})(PatientDetails);

export default connect(mapStateToProps, mapDispatchToProps)(patientDetailsReduxForm);