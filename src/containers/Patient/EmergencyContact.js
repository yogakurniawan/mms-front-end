import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { default as EmergencyContactComponent } from 'components/PatientForm/EmergencyContact';
import {
  titles
} from 'dummy/lookups';
import { getValue, getPhoneNumber } from 'utils/misc';

class EmergencyContact extends Component {

  componentDidMount() {
    const { reset, isModify, initialize } = this.props;
    reset();
    isModify && this.constructEmergencyContact(this.props);
    !isModify && initialize({});
  }

  constructEmergencyContact(props) {
    const { isModify, initialize, patient } = props;
    if (isModify && patient && patient.emergencyContact) {
      const {
        emergencyContact: {
          firstName,
          lastName,
          title,
          email,
          relation,
          address: {
            country,
            city,
            line,
            postCode,
            state
          },
          phoneNumbers
        }
      } = patient;

      initialize({
        firstName,
        lastName,
        relation,
        title: getValue(titles, title),
        country,
        city,
        addressLine: line,
        postCode,
        email,
        state,
        homePhone: getPhoneNumber(phoneNumbers, "HOME").number,
        mobilePhone: getPhoneNumber(phoneNumbers, "MOBILE").number,
        officePhone: getPhoneNumber(phoneNumbers, "OFFICE").number,
        extNo: getPhoneNumber(phoneNumbers, "OFFICE").ext
      });
    }
  }

  render() {
    const { handleNav } = this.props;
    return (
      <EmergencyContactComponent onBack={() => handleNav(0)} onNext={() => handleNav(2)} />
    );
  }
}

EmergencyContact.propTypes = {
  handleNav: PropTypes.func,
  isModify: PropTypes.bool,
  patient: PropTypes.object
};

const mapDispatchToProps = {
};

const mapStateToProps = () => ({
});

const emergencyContactReduxForm = reduxForm({
  form: 'EmergencyContactForm',
  destroyOnUnmount: false
})(EmergencyContact);

export default connect(mapStateToProps, mapDispatchToProps)(emergencyContactReduxForm);