import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {
  auth as authActions,
  employee as employeeActions,
  global as globalActions
} from '../../actions'
import { loadItem } from '../../utils/localStorage';
import { Layout } from '../../components/Layout';
import Tabs from '../../components/Tabs';
import EmployeeList from '../../components/EmployeeList';
import NewEmployee from '../../containers/NewEmployee';
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
    const employeeListProps = {
      list: employeeList
    };
    const layoutProps = {
      logout: this.handleLogout,
      userInfo
    };
    return (
      <Layout className="Main" {...layoutProps}>
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-5 col-lg-4" style={{ paddingRight: 0 }}>
            <EmployeeList {...employeeListProps} />
            <FloatingActionButton onClick={openDialog} className="Main__AddEmployeeIcon" secondary={true}>
              <ContentAdd />
            </FloatingActionButton>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-7 col-lg-8" style={{ paddingLeft: 0, paddingRight: 0 }}>
            <Tabs />
          </div>
        </div>
        <NewEmployee />
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
