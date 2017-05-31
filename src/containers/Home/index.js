import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';
import {
  auth as authActions,
} from 'actions'
import { loadItem } from 'utils/localStorage';
import { Layout } from 'components/Layout';

class Main extends React.Component {
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
          <Col xs={12} style={{ paddingRight: 0 }}>
            <p>Hello World!!</p>
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
