import React from 'react';
import { reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import LoginFormComponent from 'components/Login';

class LoginForm extends React.Component {
    render() {
        const { onSubmit, pristine } = this.props;
        return (
            <LoginFormComponent onSubmit={onSubmit} pristine={pristine} />
        );
    }
}

LoginForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
};

export default reduxForm({
    form: 'LoginForm',
})(LoginForm);
