import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';
import {
  auth as authActions,
  global as globalActions
} from 'actions';

class Main extends Component {
  componentDidMount() {
    const { setPageTitle } = this.props;
    setPageTitle("Home");
  }

  handleSubmit = (evt, values) => {
    evt.preventDefault();
  }

  handleLogout = () => {
    const { logout } = this.props;
    logout();
  }

  render() {
    return (
      <Row>
        <Col xs={12}>
        </Col>
      </Row>
    );
  }
}

Main.propTypes = {
  logout: PropTypes.func,
  setPageTitle: PropTypes.func
};

const mapDispatchToProps = {
  logout: authActions.logout,
  setPageTitle: globalActions.setPageTitle
};

const mapStateToProps = (state) => ({
  patients: state.patient.patients
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
