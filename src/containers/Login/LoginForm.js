import React from 'react';
import { Field, reduxForm } from 'redux-form'
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import { renderTextField } from '../../components/Form';
import './LoginForm.css';

class LoginForm extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  };

  render() {
    const { onSubmit, pristine } = this.props;
    return (
      <div className="LoginForm">
        <div className="LoginForm__Container">
          <div className="LoginForm__HeaderBox">
            <span>Login</span>
          </div>
          <div className="LoginForm__ContentBox">
            <form onSubmit={onSubmit}>
              <div className="LoginForm__RmsInputField">
                <Field  id="rms-username" fullWidth={true} name="username" component={renderTextField} label="Username" />
                <Field id="rms-password" fullWidth={true} name="password" type="password" component={renderTextField} label="Password" />
              </div>
              <div className="LoginForm__RmsLoginButtonWrapper">
                <RaisedButton disabled={pristine} type="submit" className="rmsLoginButton" label="Login" secondary={true} />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form: 'LoginForm',
})(LoginForm);
