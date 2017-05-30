import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { Row, Col } from 'react-flexbox-grid';
import {
  auth as authActions,
  employee as employeeActions,
  global as globalActions
} from '../../actions'
import { loadItem } from '../../utils/localStorage';
import { Layout } from '../../components/Layout';
import Tabs from '../../components/Tabs';
import './Main.css';

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
    const { employeeList, openDialog } = this.props;
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
  employeeList: PropTypes.array,
  logout: PropTypes.func,
  openDialog: PropTypes.func,
  getAllEmployees: PropTypes.func
};

const mapDispatchToProps = {
  logout: authActions.logout,
  openDialog: globalActions.openNewEmployeeDialog,
  getAllEmployees: employeeActions.requestGetAllEmployees
};

const mapStateToProps = (state) => ({
  employeeList: state.employee.employeeList
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
