import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { DatePicker } from 'redux-form-material-ui'
import RaisedButton from 'material-ui/RaisedButton';
import { renderTextField } from '../../components/Form';
import {
  employee as employeeActions
} from '../../actions';

class EmploymentHistory extends React.Component {

  handleSubmit = (evt) => {
    const { employmentHistory, addEmploymentHistory, reset } = this.props;
    evt.preventDefault();
    addEmploymentHistory(employmentHistory);
    reset();
  }

  render() {
    return (
      <div>
        <h2>Employment History</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-xs-12">
              <div className="row">
                <div className="col-xs-6">
                  <Field id="rms-emp-details-start-date" fullWidth={true} name="startDate" component={DatePicker} format={null} hintText="Start Date" />
                </div>
                <div className="col-xs-6">
                  <Field id="rms-emp-details-end-date" fullWidth={true} name="endDate" component={DatePicker} format={null} hintText="End Date" />
                </div>
              </div>
              <div className="row">
                <div className="col-xs-6">
                  <Field id="rms-emp-details-project-name" fullWidth={true} name="projectName" component={renderTextField} label="Project Name" />
                </div>
                <div className="col-xs-6">
                  <Field id="rms-emp-details-project-role" fullWidth={true} name="projectRole" component={renderTextField} label="Role" />
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12">
                  <Field
                    id="rms-emp-details-project-job-description"
                    fullWidth={true}
                    name="jobDescription"
                    component={renderTextField}
                    multiLine={true}
                    rows={3}
                    label="Job Description" />
                </div>
              </div>
              <div className="row end-xs" style={{ paddingTop: 15 }}>
                <div className="col-xs-6">
                  <RaisedButton type="submit" primary={true} label="Add" />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

EmploymentHistory.propTypes = {
  addEmploymentHistory: PropTypes.func.isRequired,
  employmentHistory: PropTypes.object
};

const mapStateToProps = ({ form }) => ({
  employmentHistory: form.EmploymentHistoryForm && form.EmploymentHistoryForm.values
});

const mapDispatchToProps = {
  addEmploymentHistory: employeeActions.addEmploymentHistory
};

const WiredUpEmploymentHistory = reduxForm({
  form: 'EmploymentHistoryForm',
  destroyOnUnmount: false
})(EmploymentHistory);

export default connect(mapStateToProps, mapDispatchToProps)(WiredUpEmploymentHistory);