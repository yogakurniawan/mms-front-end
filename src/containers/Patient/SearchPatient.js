import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';
import { Layout } from 'components/Layout';
import PatientCard from 'components/PatientCard';
import { generate } from 'utils/uuid';

class SearchPatient extends React.Component {
  render() {
    const { patients } = this.props;
    return (
      <Layout>
        <Row>
          {
            patients && patients.map((patient) => (
              <Col key={generate()} xs={12} sm={6} md={6} lg={6}>
                <PatientCard patient={patient} />
              </Col>
            ))
          }
        </Row>
      </Layout>
    );
  }
}

SearchPatient.propTypes = {
};

const mapDispatchToProps = {
};

const mapStateToProps = (state) => ({
  patients: state.patient.patients
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPatient);
