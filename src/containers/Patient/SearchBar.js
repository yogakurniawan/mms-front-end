import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import PatientSearchBar from 'components/SearchBar/PatientSearchBar';

class SearchBar extends Component {

  render() {
    const { handleKeyPress } = this.props;
    return (
      <PatientSearchBar handleKeyPress={handleKeyPress} />
    );
  }
}

SearchBar.propTypes = {
  handleKeyPress: PropTypes.func
};

export default reduxForm({
  form: 'PatientSearchBar',
  destroyOnUnmount: false
})(SearchBar);