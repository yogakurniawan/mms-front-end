import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { push } from 'react-router-redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { auth as authActions } from '../../actions'
import { LoginLayout } from '../../components/Layout';
import LoginForm from './LoginForm';

const customContentStyle = {
  width: '30%'
};

class Login extends React.Component {
  state = {
    open: false,
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleSubmit = (evt) => {
    const { login, loginDetails, pushState, getLoggedInUserInfo } = this.props;
    const { username, password } = loginDetails;
    evt.preventDefault();
    login(username, password).then((response) => {
      getLoggedInUserInfo().then(() => pushState('/main'));
    }).catch(() => {
      this.handleOpen();
    });
  }

  render() {
    const actions = [
      <FlatButton
        label="OK"
        primary={true}
        onTouchTap={this.handleClose}
      />
    ];
    
    return (
      <LoginLayout>
        <Dialog
          actions={actions}
          modal={false}
          open={this.state.open}
          contentStyle={customContentStyle}
          onRequestClose={this.handleClose}
        >
          Wrong username or password
        </Dialog>
        <LoginForm onSubmit={this.handleSubmit} />
      </LoginLayout>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func,
  loginDetails: PropTypes.object,
  getLoggedInUserInfo: PropTypes.func,
  loginError: PropTypes.object,
  pushState: PropTypes.func,
};

const mapDispatchToProps = {
  login: authActions.login,
  getLoggedInUserInfo: authActions.getLoggedInUserInfo,
  pushState: push
};

const mapStateToProps = ({ form, auth }) => ({
  loginDetails: form.LoginForm && form.LoginForm.values,
  loginError: auth.loginError
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
