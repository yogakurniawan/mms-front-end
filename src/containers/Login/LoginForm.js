import React from 'react';
import { Field, reduxForm } from 'redux-form'
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import { renderTextField } from 'components/Form';
import { Col } from 'react-flexbox-grid';
import SelectField from 'components/Form/SelectField';
import { tenants } from 'dummy/lookups';
import ContentBox from './ContentBox';
import ContainerBox from './ContainerBox';
import HeaderBox from './HeaderBox';
import ButtonWrapper from './ButtonWrapper';
import LogoWrapper from './Logo';
import Logo from './mms-logo.png';

class LoginForm extends React.Component {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired
    };

    render() {
        const { onSubmit, pristine } = this.props;
        return (
            <div>
                <LogoWrapper center="xs">
                    <Col xs="12">
                        <img alt="MMS Logo" src={Logo} />
                    </Col>
                </LogoWrapper>
                <ContainerBox>
                    <Col xs="12">
                        <HeaderBox>
                            <div>Welcome back!</div>
                            <div>Sign in to continue using MMS</div>
                        </HeaderBox>
                        <ContentBox onSubmit={onSubmit}>
                            <div>
                                <Field id="rms-username" fullWidth={true} name="username" component={renderTextField} label="Username" />
                                <Field id="rms-password" fullWidth={true} name="password" type="password" component={renderTextField} label="Password" />
                                <SelectField
                                    id="mms-patient-login-tenant"
                                    name="tenant"
                                    label="Tenant"
                                    fullWidth
                                    items={tenants}
                                />
                            </div>
                            <ButtonWrapper>
                                <RaisedButton disabled={pristine} primary={true} type="submit" label="Login" fullWidth />
                            </ButtonWrapper>
                        </ContentBox>
                    </Col>
                </ContainerBox>
            </div>
        );
    }
}

export default reduxForm({
    form: 'LoginForm',
})(LoginForm);
