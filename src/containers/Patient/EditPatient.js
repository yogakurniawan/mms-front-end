import React, { Component } from 'react';
import PatientManagement from './PatientManagement';

class EditPatient extends Component {
  render() {
    const { location } = this.props;
    return (
      <PatientManagement location={location} />
    );
  }
}

export default EditPatient;
