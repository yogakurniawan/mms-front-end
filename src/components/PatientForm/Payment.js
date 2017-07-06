import React, { Component } from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import { DatePicker } from 'redux-form-material-ui';
import { Col, Row } from 'react-flexbox-grid';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import CircularProgress from 'material-ui/CircularProgress';
import { renderTextField } from 'components/Form';
import SelectField from 'components/Form/SelectField';
import SubTitle from './SubTitle';
import {
  relationships,
  paymentTypes,
  occupations
} from 'dummy/lookups';

class Payment extends Component {

  onSubmit = (evt) => {
    evt.preventDefault();
  }

  renderSponsor = (
    <div>
      <SubTitle>SPONSOR</SubTitle>
      <Divider style={{ backgroundColor: '#6200C0' }} />
      <Row>
        <Col xs={12} sm={6} md={3} lg={3}>
          <Field id="rms-emp-details-sponsor-firstname" fullWidth={true} name="sponsorFirstName" component={renderTextField} label="First, Middle Name" />
        </Col>
        <Col xs={12} sm={6} md={3} lg={3}>
          <Field id="rms-emp-details-sponsor-lastname" fullWidth={true} name="sponsorLastName" component={renderTextField} label="Last Name" />
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={6} md={3} lg={3}>
          <Field
            id="mms-patient-payment-sponsor-address"
            fullWidth={true}
            name="sponsorAddressLine"
            multiLine={true}
            rows={2}
            component={renderTextField}
            label="Address Line" />
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={6} md={3} lg={3}>
          <SelectField
            id="mms-patient-payment-sponsor-occupation"
            name="sponsorOccupation"
            label="Occupation"
            items={occupations}
          />
        </Col>
        <Col xs={12} sm={6} md={3} lg={3}>
          <SelectField
            id="mms-patient-payment-sponsor-relation"
            name="sponsorRelation"
            label="Sponsor Relations"
            items={relationships}
          />
        </Col>
        <Col xs={12} sm={6} md={3} lg={3}>
          <Field
            id="mms-patient-payment-sponsor-idcard"
            fullWidth={true}
            name="sponsorIdCard"
            component={renderTextField}
            label="ID Card" />
        </Col>
      </Row>
    </div>
  );

  renderInsuranceDetails = (
    <div>
      <SubTitle>DETAILS</SubTitle>
      <Divider style={{ backgroundColor: '#6200C0' }} />
      <Row>
        <Col xs={12} sm={6} md={3} lg={3}>
          <Field
            id="mms-patient-payment-benefitstype"
            fullWidth={true}
            name="benefitType"
            component={renderTextField}
            label="Benefits Type" />
        </Col>
        <Col xs={12} sm={6} md={3} lg={3}>
          <Field
            id="mms-patient-payment-benefitsplan"
            fullWidth={true}
            name="benefitPlan"
            component={renderTextField}
            label="Benefits Plan" />
        </Col>
        <Col xs={12} sm={6} md={3} lg={3}>
          <Field
            id="mms-patient-payment-providername"
            fullWidth={true}
            name="providerName"
            component={renderTextField}
            label="Provider" />
        </Col>
        <Col xs={12} sm={6} md={3} lg={3}>
          <Field
            id="mms-patient-payment-verificationdate"
            fullWidth={true}
            name="verificationDate"
            component={DatePicker}
            format={null}
            floatingLabelText="Verification Date"
            floatingLabelFixed={true} />
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={6} md={3} lg={3}>
          <Field
            id="mms-patient-payment-maxcoverage"
            fullWidth={true}
            name="maxCoverage"
            type="number"
            component={renderTextField}
            label="Max. Coverage" />
        </Col>
        <Col xs={12} sm={6} md={3} lg={3}>
          <Field
            id="mms-patient-payment-maxcoveragetreatment"
            fullWidth={true}
            type="number"
            name="maxCoverageBalance"
            component={renderTextField}
            label="Max. Coverage Treatment" />
        </Col>
        <Col xs={12} sm={6} md={3} lg={3}>
          <Field
            id="mms-patient-payment-coveragebalance"
            fullWidth={true}
            type="number"
            name="coverageBalance"
            component={renderTextField}
            label="Coverage Balance" />
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={6} md={3} lg={3}>
          <Field
            id="mms-patient-payment-eligibilitystatus"
            fullWidth={true}
            name="eligibilityStatus"
            component={renderTextField}
            label="Eligibility Status" />
        </Col>
        <Col xs={12} sm={6} md={3} lg={3}>
          <Field
            id="mms-patient-payment-eligibilitydate"
            fullWidth={true}
            name="eligibilityDate"
            component={DatePicker}
            format={null}
            floatingLabelText="Eligibility Date"
            floatingLabelFixed={true} />
        </Col>
        <Col xs={12} sm={6} md={3} lg={3}>
          <Field
            id="mms-patient-payment-guaranteenumber"
            fullWidth={true}
            name="guaranteeNumber"
            component={renderTextField}
            label="Guarantee Number" />
        </Col>
        <Col xs={12} sm={6} md={3} lg={3}>
          <Field
            id="mms-patient-payment-companyname"
            fullWidth={true}
            name="companyName"
            component={renderTextField}
            label="Company Name" />
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={6} md={3} lg={3}>
          <Field
            id="mms-patient-payment-policynumber"
            fullWidth={true}
            name="policyNumber"
            component={renderTextField}
            label="Policy Number" />
        </Col>
        <Col xs={12} sm={6} md={3} lg={3}>
          <Field
            id="mms-patient-payment-policyholdername"
            fullWidth={true}
            name="policyHolderName"
            component={renderTextField}
            label="Policy Holder Name" />
        </Col>
        <Col xs={12} sm={6} md={3} lg={3}>
          <Field
            id="mms-patient-payment-membernumber"
            fullWidth={true}
            name="memberNumber"
            component={renderTextField}
            label="Member Number" />
        </Col>
        <Col xs={12} sm={6} md={3} lg={3}>
          <Field
            id="mms-patient-payment-department"
            fullWidth={true}
            name="department"
            component={renderTextField}
            label="Department" />
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={6} md={3} lg={3}>
          <Field
            id="mms-patient-payment-note"
            fullWidth={true}
            name="note"
            multiLine={true}
            rows={2}
            component={renderTextField}
            label="Note" />
        </Col>
      </Row>
    </div>
  );

  render() {
    const { isInsurance, onBack, onSave, showLoading, saveButtonDisabled } = this.props;
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <Row>
            <Col xs={12} sm={6} md={3} lg={3}>
              <SelectField
                id="mms-patient-payment-payment"
                onChange={this.onChange}
                name="type"
                label="Payment"
                items={paymentTypes}
              />
            </Col>
          </Row>
          {this.renderSponsor}
          {isInsurance === true && this.renderInsuranceDetails}
        </div>
        <div style={{ marginTop: 10, marginBottom: 10 }}>
          <Row end="xs">
            <Col xs={12} >
              <RaisedButton onClick={onBack} label="BACK" style={{ marginRight: 10 }} />
              {
                showLoading && <CircularProgress />
              }
              {
                !showLoading && <RaisedButton type="submit" disabled={saveButtonDisabled} onClick={onSave} label="SAVE" primary={true} />
              }
            </Col>
          </Row>
        </div>
      </form>
    );
  }
}

Payment.propTypes = {
  onSave: PropTypes.func,
  onBack: PropTypes.func,
  showLoading: PropTypes.bool,
  isInsurance: PropTypes.bool,
  saveButtonDisabled: PropTypes.bool
};

export default Payment;
