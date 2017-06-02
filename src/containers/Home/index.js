import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';
import {
  auth as authActions,
} from 'actions';
import { loadItem } from 'utils/localStorage';
import { Layout } from 'components/Layout';
import PatientCard from 'components/PatientCard';
import SearchAppointment from 'containers/Appointment/SearchAppointment';

class Main extends React.Component {
  componentDidMount() {
    this.props.getAllEmployees();
  }

  handleSubmit = (evt, values) => {
    evt.preventDefault();
    console.log(values);
  }

  handleLogout = () => {
    const { logout } = this.props;
    logout();
  }

  render() {
    const { patients } = this.props;
    const userInfo = loadItem('userInfo');
    console.log(patients);
    const layoutProps = {
      userInfo
    };
    return (
      <Layout className="Main" {...layoutProps}>
        <Row>
          <Col xs={12} sm={6} md={6} lg={6}>
            <PatientCard />
          </Col>
          <Col xs={12} sm={6} md={6} lg={6}>
            <PatientCard />
          </Col>
          <Col xs={12} sm={6} md={6} lg={6}>
            <PatientCard />
          </Col>
          <Col xs={12} sm={6} md={6} lg={6}>
            <PatientCard />
          </Col>
        </Row>
      </Layout>
    );
  }
}

Main.propTypes = {
  logout: PropTypes.func,
};

const mapDispatchToProps = {
  logout: authActions.logout,
};

const mapStateToProps = (state) => ({
  patients: state.patient.patients
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
