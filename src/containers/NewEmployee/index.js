import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Snackbar from 'material-ui/Snackbar';
import CircularProgress from 'material-ui/CircularProgress';
import DialogForm from '../../components/DialogForm';
import EmployeeDetails from './EmployeeDetails';
import EmploymentHistory from './EmploymentHistory';
import EmploymentHistoryTable from './EmploymentHistoryTable';
import {
  employee as employeeActions,
  global as globalActions
} from '../../actions';

const innerStyle = {
  left: '50%',
  top: '50%',
  position: 'absolute'
};

class NewEmployee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notificationOpen: false
    };
  }

  handleOpenNotification = () => {
    this.setState({
      notificationOpen: true
    });
  };

  handleCloseNotification = () => {
    this.setState({
      notificationOpen: false
    });
  };

  saveEmployeeDetails = () => {
    const {
      saveEmployeeDetails,
      employeeDetailsPayload,
      getAllEmployees,
      closeDialog,
      employmentHistories
    } = this.props;
    closeDialog();
    return saveEmployeeDetails({
      employee: employeeDetailsPayload,
      employmentHistories: employmentHistories
    }).then(this.handleOpenNotification)
      .then(getAllEmployees)
      .then(this.resetForm(this.props));
  }

  resetForm = (props) => () =>{
    const { clearEmploymentHistories, resetForm } = props;
    resetForm();
    clearEmploymentHistories();
  }

  handleClose = () => {
    const { closeDialog } = this.props;
    // this.resetForm(this.props)();
    closeDialog();
  }

  render() {
    const { dialogOpen, addingNewEmployee } = this.props;
    const dialogFormProps = {
      components: {
        EmployeeDetails,
        EmploymentHistory,
        EmploymentHistoryTable
      },
      saveEmployeeDetails: this.saveEmployeeDetails,
      handleClose: this.handleClose,
      open: dialogOpen
    }

    return (
      <div>
        {addingNewEmployee && <CircularProgress style={innerStyle} size={80} thickness={5} />}
        <Snackbar
          open={this.state.notificationOpen}
          message="New Employee has been successfully added"
          autoHideDuration={4000}
          onRequestClose={this.handleCloseNotification}
        />
        <DialogForm {...dialogFormProps} />
      </div>
    );
  }
}

NewEmployee.propTypes = {
  dialogOpen: PropTypes.bool.isRequired,
  addingNewEmployee: PropTypes.bool.isRequired,
  closeDialog: PropTypes.func.isRequired,
  saveEmployeeDetails: PropTypes.func.isRequired,
  getAllEmployees: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  employeeDetailsPayload: PropTypes.object,
  employmentHistories: PropTypes.array.isRequired
};

const mapDispatchToProps = {
  closeDialog: globalActions.closeNewEmployeeDialog,
  resetForm: globalActions.resetForm,
  saveEmployeeDetails: employeeActions.requestCreateEmployee,
  getAllEmployees: employeeActions.requestGetAllEmployees,
  clearEmploymentHistories: employeeActions.clearEmploymentHistories
};

const mapStateToProps = ({ employee, form, global }) => ({
  dialogOpen: global && global.newEmployeeDialogOpen,
  employeeDetailsPayload: form.EmployeeDetailsForm && form.EmployeeDetailsForm.values,
  addingNewEmployee: employee && employee.addingNewEmployee,
  employmentHistories: employee && employee.employmentHistoryList
});

export default connect(mapStateToProps, mapDispatchToProps)(NewEmployee);
