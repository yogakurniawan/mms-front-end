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
    const userInfo = loadItem('userInfo')
    const layoutProps = {
      logout: this.handleLogout,
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
  employeeList: state.employee.employeeList
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
