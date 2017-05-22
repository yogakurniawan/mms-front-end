import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import Avatar from 'material-ui/Avatar';
import MenuItem from 'material-ui/MenuItem';
import { DatePicker } from 'redux-form-material-ui';
import {
  global as globalActions
} from '../../actions';
import { renderTextField, renderSelectField } from '../../components/Form';

class EmployeeDetails extends React.Component {

  componentDidMount() {
    const { formReset, resetForm, reset } = this.props;
    if (formReset) {
      reset();
      resetForm();
    }
  }

  render() {
    return (
      <div>
        <h2>Employee Details</h2>
        <div className="row">
          <div className="col-xs-10">
            <div className="row">
              <div className="col-xs-6">
                <Field id="rms-emp-details-firstname" fullWidth={true} name="firstName" component={renderTextField} label="First Name" />
              </div>
              <div className="col-xs-6">
                <Field id="rms-emp-details-lastname" fullWidth={true} name="lastName" component={renderTextField} label="Last Name" />
              </div>
            </div>
            <div className="row">
              <div className="col-xs-6">
                <Field id="rms-emp-details-dob" fullWidth={true} name="dob" component={DatePicker} format={null} hintText="Date of Birth" />
              </div>
            </div>
            <div className="row">
              <div className="col-xs-6">
                <Field
                  id="rms-emp-details-gender"
                  name="gender"
                  component={renderSelectField}
                  label="Gender"
                  fullWidth={true}
                >
                  <MenuItem value="Male" primaryText="Male" />
                  <MenuItem value="Female" primaryText="Female" />
                </Field>
              </div>
              <div className="col-xs-6">
                <Field
                  id="rms-emp-details-marital-status"
                  name="maritalStatus"
                  component={renderSelectField}
                  label="Marital Status"
                  fullWidth={true}
                >
                  <MenuItem value="Single" primaryText="Single" />
                  <MenuItem value="Married" primaryText="Married" />
                  <MenuItem value="Defacto" primaryText="Defacto" />
                  <MenuItem value="Separated" primaryText="Separated" />
                  <MenuItem value="Divorced" primaryText="Divorced" />
                  <MenuItem value="Widowed" primaryText="Widowed" />
                </Field>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-6">
                <Field
                  id="rms-emp-details-nationality"
                  name="nationality"
                  component={renderSelectField}
                  label="Nationality"
                  fullWidth={true}
                >
                  <MenuItem value="Australia" primaryText="Australia" />
                  <MenuItem value="Indonesia" primaryText="Indonesia" />
                  <MenuItem value="Vietnam" primaryText="Vietnam" />
                </Field>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-6">
                <Field id="rms-emp-details-email" fullWidth={true} name="email" component={renderTextField} label="Email" />
              </div>
              <div className="col-xs-6">
                <Field id="rms-emp-details-phone-number" fullWidth={true} name="phone" component={renderTextField} label="Phone No." />
              </div>
            </div>
            <div className="row">
              <div className="col-xs-6">
                <Field
                  id="rms-emp-details-grade"
                  name="grade"
                  component={renderSelectField}
                  label="Grade"
                  fullWidth={true}
                >
                  <MenuItem value="JP" primaryText="JP" />
                  <MenuItem value="PG" primaryText="PG" />
                  <MenuItem value="AP" primaryText="AP" />
                  <MenuItem value="AN" primaryText="AN" />
                </Field>
              </div>
              <div className="col-xs-6">
                <Field
                  id="rms-emp-details-status"
                  name="status"
                  component={renderSelectField}
                  label="Status"
                  fullWidth={true}
                >
                  <MenuItem value="Permanent" primaryText="Permanent" />
                  <MenuItem value="Contract" primaryText="Contract" />
                </Field>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-6">
                <Field id="rms-emp-details-hire-date" fullWidth={true} name="hireDate" component={DatePicker} format={null} hintText="Hire Date" />
              </div>
            </div>
            <div className="row">
              <div className="col-xs-6">
                <Field
                  id="rms-emp-details-division"
                  name="division"
                  component={renderSelectField}
                  label="Division"
                  fullWidth={true}
                >
                  <MenuItem value="CDC" primaryText="CDC" />
                  <MenuItem value="SWD Red" primaryText="SWD Red" />
                  <MenuItem value="SWD Blue" primaryText="SWD Blue" />
                  <MenuItem value="SWD Purple" primaryText="SWD Purple" />
                </Field>
              </div>
              <div className="col-xs-6">
                <Field
                  id="rms-emp-details-office"
                  name="office"
                  component={renderSelectField}
                  label="Office"
                  fullWidth={true}
                >
                  <MenuItem value="Bali" primaryText="Bali" />
                  <MenuItem value="Bandung" primaryText="Bandung" />
                  <MenuItem value="Jakarta" primaryText="Jakarta" />
                  <MenuItem value="Yogyakarta" primaryText="Yogyakarta" />
                  <MenuItem value="Hanoi" primaryText="Hanoi" />
                </Field>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-6">
                <Field id="rms-emp-details-sub-division" fullWidth={true} name="subDivision" component={renderTextField} label="Sub Division" />
              </div>
            </div>
          </div>
          <div className="center-xs col-xs-2">
            <Avatar size={100}>Y</Avatar>
          </div>
        </div>
      </div>
    );
  }
}

EmployeeDetails.propTypes = {
  formReset: PropTypes.bool.isRequired
};

const mapStateToProps = ({ global }) => ({
  formReset: global && global.formReset
});

const mapDispatchToProps = {
  resetForm: globalActions.resetForm
};

const WiredUpEmployeeDetails = reduxForm({
  form: 'EmployeeDetailsForm',
  destroyOnUnmount: false
})(EmployeeDetails);

export default connect(mapStateToProps, mapDispatchToProps)(WiredUpEmployeeDetails);