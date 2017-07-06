import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import { Col, Grid } from 'react-flexbox-grid';
import { Field } from 'redux-form';
import { tenants } from 'dummy/lookups';
import SelectField from 'components/Form/SelectField';
import { renderTextField } from 'components/Form';
import ContentBox from './ContentBox';
import ContainerBox from './ContainerBox';
import HeaderBox from './HeaderBox';
import ButtonWrapper from './ButtonWrapper';
import LogoWrapper from './Logo';
import Logo from './mms-logo.png';

const styles = {
    floatingLabelStyle: {
        color: "#6200C0",
    },
    underlineStyle: {
        borderColor: "#6200C0",
    },
};

const LoginForm = (props) => (
    <Grid>
        <LogoWrapper center="xs">
            <Col xs={12}>
                <img alt="MMS Logo" src={Logo} />
            </Col>
        </LogoWrapper>
        <ContainerBox>
            <Col xs={12}>
                <HeaderBox>
                    <div>Welcome back!</div>
                    <div>Sign in to continue using MMS</div>
                </HeaderBox>
                <ContentBox onSubmit={props.onSubmit}>
                    <div>
                        <Field
                            floatingLabelStyle={styles.floatingLabelStyle}
                            underlineStyle={styles.underlineStyle}
                            id="rms-username"
                            fullWidth
                            name="username"
                            component={renderTextField}
                            label="Username" />
                        <Field
                            floatingLabelStyle={styles.floatingLabelStyle}
                            underlineStyle={styles.underlineStyle}
                            id="rms-password"
                            fullWidth
                            name="password"
                            type="password"
                            component={renderTextField}
                            label="Password" />
                        <SelectField
                            floatingLabelStyle={styles.floatingLabelStyle}
                            underlineStyle={styles.underlineStyle}
                            id="mms-patient-login-tenant"
                            name="tenant"
                            label="Tenant"
                            fullWidth
                            items={tenants}
                        />
                    </div>
                    <ButtonWrapper>
                        <RaisedButton disabled={props.pristine} primary={true} type="submit" label="Login" fullWidth />
                    </ButtonWrapper>
                </ContentBox>
            </Col>
        </ContainerBox>
    </Grid>
);

LoginForm.propTypes = {
    onSubmit: PropTypes.func,
    pristine: PropTypes.bool
};

export default LoginForm;
