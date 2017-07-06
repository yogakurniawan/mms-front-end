import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import PatientSearchBar from 'components/SearchBar/PatientSearchBar';

class SearchBar extends Component {

  componentDidMount() {
    const { reset } = this.props;
    reset();
  }

  render() {
    const { handleKeyPress, addPatient } = this.props;
    return (
      <PatientSearchBar addPatient={addPatient} handleKeyPress={handleKeyPress} />
    );
  }
}

SearchBar.propTypes = {
  handleKeyPress: PropTypes.func,
  addPatient: PropTypes.func
};

export default reduxForm({
  form: 'PatientSearchBar',
  destroyOnUnmount: false
})(SearchBar);