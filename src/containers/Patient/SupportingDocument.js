import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { default as SupportingDocumentComponent } from 'components/PatientForm/SupportingDocument';

class SupportingDocument extends Component {

  componentDidMount() {
    const { reset } = this.props;
    reset();
  }

  render() {
    const { handleSave, handleNav } = this.props;
    return (
      <SupportingDocumentComponent onBack={() => handleNav(2)} onButtonSaveClick={handleSave} />
    );
  }
}

SupportingDocument.propTypes = {
  handleSave: PropTypes.func,
  handleNav: PropTypes.func
};

const mapDispatchToProps = {
};

const mapStateToProps = (state) => ({
});

const supportingDocumentReduxForm = reduxForm({
  form: 'SupportingDocumentForm',
  destroyOnUnmount: false
})(SupportingDocument);

export default connect(mapStateToProps, mapDispatchToProps)(supportingDocumentReduxForm);