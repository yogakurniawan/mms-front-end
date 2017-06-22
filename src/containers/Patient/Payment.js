import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { numberValidation } from 'utils/validation';
import { default as PaymentComponent } from 'components/PatientForm/Payment';

class Payment extends Component {

  componentDidMount() {
    const { reset, isModify, initialize } = this.props;
    reset();
    isModify && this.constructPaymentInfo(this.props);
    !isModify && initialize({
      maxCoverage: 0,
      maxCoverageBalance: 0,
      coverageBalance: 0,
      type: 'Cash'
    });
  }

  constructPaymentInfo(props) {
    const { initialize, patient } = props;
    if (patient && patient.paymentInfo) {
      initialize({
        ...patient.paymentInfo,
        eligibilityDate: new Date(patient.paymentInfo.eligibilityDate),
        verificationDate: new Date(patient.paymentInfo.verificationDate)
      });
    }
  }

  render() {
    const { handleNav, handleSave, adding, isModify, valid, formValues, patient } = this.props;
    let isInsurance = false;
    if (patient && isModify) {
      const { paymentInfo } = patient;
      if (paymentInfo) {
        if (formValues && formValues.hasOwnProperty("type") && formValues.type !== paymentInfo.type) {
          isInsurance = formValues.type === 'Health Benefits / Insurance';
        } else {
          isInsurance = paymentInfo.type === 'Health Benefits / Insurance';
        }
      }
    }

    if (formValues) {
      isInsurance = formValues.type === 'Health Benefits / Insurance';
    }

    return (
      <PaymentComponent
        isInsurance={isInsurance}
        saveButtonDisabled={!valid}
        showLoading={adding}
        onBack={() => handleNav(1)}
        onSave={handleSave} />
    );
  }
}

Payment.propTypes = {
  handleNav: PropTypes.func,
  adding: PropTypes.bool,
  formValues: PropTypes.object,
  isModify: PropTypes.bool,
  handleSave: PropTypes.func,
  patient: PropTypes.object
};

const mapDispatchToProps = {
};

const mapStateToProps = ({ patient: { loading }, form }) => ({
  adding: loading.addPatient,
  formValues: form.PaymentForm && form.PaymentForm.values
});

const validate = values => {
  const errors = {};
  const fields = [
    'maxCoverage',
    'maxCoverageBalance',
    'coverageBalance'
  ];

  return { ...numberValidation(values, fields), ...errors };
}

const paymentReduxForm = reduxForm({
  form: 'PaymentForm',
  destroyOnUnmount: false,
  validate
})(Payment);

export default connect(mapStateToProps, mapDispatchToProps)(paymentReduxForm);