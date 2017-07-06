import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import { DatePicker } from 'redux-form-material-ui';
import { Col, Row } from 'react-flexbox-grid';
import RaisedButton from 'material-ui/RaisedButton';
import { renderTextField, renderCheckbox } from 'components/Form';
import SelectField from 'components/Form/SelectField';
import {
  titles,
  genders,
  patientTypes,
  occupations,
  maritalStatuses,
  religions,
  nationalities,
  bloodTypes,
  rhesusTypes,
  cities,
  provinces,
  countries
} from 'dummy/lookups';

const styles = {
  floatingLabelStyle: {
    color: "#6200C0",
  },
  underlineStyle: {
    borderColor: "#6200C0",
  },
};

const onSubmit = (evt) => {
  evt.preventDefault();
}

const PatientDetails = (props) => (
  <form onSubmit={onSubmit}>
    <div>
      <Row>
        <Col xs={12} sm={6} md={3} lg={3}>
          <SelectField
            fullWidth={true}
            id="mms-patient-details-title"
            name="title"
            label="Title"
            items={titles}
          />
        </Col>
        <Col xs={12} sm={6} md={3} lg={3}>
          <Field
            id="rms-emp-details-firstname"
            fullWidth={true}
            name="firstName"
            component={renderTextField}
            label="First, Middle Name *"
            underlineStyle={styles.underlineStyle}
            floatingLabelStyle={styles.floatingLabelStyle}
          />
        </Col>
        <Col xs={12} sm={6} md={3} lg={3}>
          <Field
            id="rms-emp-details-lastname"
            fullWidth={true}
            name="lastName"
            component={renderTextField}
            label="Last Name *"
            underlineStyle={styles.underlineStyle}
            floatingLabelStyle={styles.floatingLabelStyle}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={6} md={3} lg={3}>
          <Field
            id="mms-patient-details-placeofbirth"
            fullWidth={true}
            name="pob"
            component={renderTextField}
            label="Place of Birth *"
            underlineStyle={styles.underlineStyle}
            floatingLabelStyle={styles.floatingLabelStyle}
          />
        </Col>
        <Col xs={12} sm={6} md={3} lg={3}>
          <Field
            id="mms-patient-details-dateofbirth"
            fullWidth={true}
            name="dob"
            component={DatePicker}
            format={null}
            hintText="Date of Birth"
            floatingLabelText="Date of Birth *"
            floatingLabelFixed={true}
            underlineStyle={styles.underlineStyle}
            floatingLabelStyle={styles.floatingLabelStyle}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={6} md={3} lg={3}>
          <SelectField
            id="mms-patient-details-gender"
            name="gender"
            label="Gender *"
            items={genders}
            fullWidth
            underlineStyle={styles.underlineStyle}
            floatingLabelStyle={styles.floatingLabelStyle}
          />
        </Col>
        <Col xs={12} sm={6} md={3} lg={3}>
          <SelectField
            id="mms-patient-details-patient-type"
            name="type"
            label="Patient Type *"
            items={patientTypes}
            fullWidth
            underlineStyle={styles.underlineStyle}
            floatingLabelStyle={styles.floatingLabelStyle}
          />
        </Col>
        <Col xs={12} sm={6} md={3} lg={3}>
          <SelectField
            id="mms-patient-details-occupation"
            name="occupation"
            label="Occupation"
            fullWidth
            items={occupations}
          />
        </Col>
        <Col xs={12} sm={6} md={3} lg={3}>
          <SelectField
            id="mms-patient-details-maritalstatus"
            name="maritalStatus"
            label="Marital Status"
            fullWidth
            items={maritalStatuses}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={6} md={3} lg={3}>
          <SelectField
            id="mms-patient-details-religion"
            name="religion"
            label="Religion"
            fullWidth
            items={religions}
          />
        </Col>
        <Col xs={12} sm={6} md={3} lg={3}>
          <SelectField
            id="mms-patient-details-nationality"
            name="nationality"
            label="Nationality *"
            items={nationalities}
            fullWidth
            underlineStyle={styles.underlineStyle}
            floatingLabelStyle={styles.floatingLabelStyle}
          />
        </Col>
        <Col xs={12} sm={6} md={3} lg={3}>
          <SelectField
            id="mms-patient-details-bloodtype"
            name="bloodType"
            label="Blood Type"
            fullWidth
            items={bloodTypes}
          />
        </Col>
        <Col xs={12} sm={6} md={3} lg={3}>
          <SelectField
            id="mms-patient-details-rhesustype"
            name="rhesusType"
            label="Rhesus Type"
            fullWidth
            items={rhesusTypes}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={6} md={3} lg={3}>
          <Field
            id="mms-patient-details-allergy"
            fullWidth={true}
            name="allergy"
            multiLine={true}
            rows={2}
            component={renderTextField}
            label="Allergy" />
        </Col>
        <Col xs={12} sm={6} md={3} lg={3}>
          <Field
            id="mms-patient-details-disabilitynotes"
            fullWidth={true}
            name="disabilityNote"
            multiLine={true}
            rows={2}
            component={renderTextField}
            label="Disability Notes" />
        </Col>
        <Col xs={12} sm={6} md={3} lg={3}>
          <Field
            id="mms-patient-details-othernotes"
            fullWidth={true}
            name="otherNotes"
            multiLine={true}
            rows={2}
            component={renderTextField}
            label="Other Notes" />
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={6} md={3} lg={3}>
          <Field
            id="mms-patient-details-address"
            fullWidth={true}
            name="addressLine"
            multiLine={true}
            rows={2}
            component={renderTextField}
            underlineStyle={styles.underlineStyle}
            floatingLabelStyle={styles.floatingLabelStyle}
            label="Address Line *" />
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={6} md={3} lg={3}>
          <Field
            id="mms-patient-details-postcode"
            fullWidth={true}
            name="postCode"
            component={renderTextField}
            label="Post Code" />
        </Col>
        <Col xs={12} sm={6} md={3} lg={3}>
          <SelectField
            id="mms-patient-details-city"
            name="city"
            fullWidth
            label="City"
            items={cities}
          />
        </Col>
        <Col xs={12} sm={6} md={3} lg={3}>
          <SelectField
            id="mms-patient-details-state"
            name="state"
            label="State *"
            fullWidth
            underlineStyle={styles.underlineStyle}
            floatingLabelStyle={styles.floatingLabelStyle}
            items={provinces}
          />
        </Col>
        <Col xs={12} sm={6} md={3} lg={3}>
          <SelectField
            id="mms-patient-details-country"
            name="country"
            label="Country *"
            underlineStyle={styles.underlineStyle}
            floatingLabelStyle={styles.floatingLabelStyle}
            items={countries}
            fullWidth
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={6} md={3} lg={3}>
          <Field
            id="mms-patient-details-homephone"
            fullWidth={true}
            name="homePhone"
            component={renderTextField}
            label="Home Phone" />
        </Col>
        <Col xs={12} sm={6} md={3} lg={3}>
          <Field
            id="mms-patient-details-mobileno"
            fullWidth={true}
            name="mobilePhone"
            component={renderTextField}
            label="Mobile No." />
        </Col>
        <Col xs={12} sm={6} md={3} lg={3}>
          <Field
            id="mms-patient-details-officephone"
            fullWidth={true}
            name="officePhone"
            component={renderTextField}
            label="Office Phone" />
        </Col>
        <Col xs={12} sm={6} md={3} lg={3}>
          <Field
            id="mms-patient-details-extno"
            fullWidth={true}
            name="extNo"
            component={renderTextField}
            label="Ext. No." />
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={6} md={3} lg={3}>
          <Field
            id="mms-patient-details-emailaddress"
            fullWidth={true}
            name="email"
            component={renderTextField}
            label="Email Address" />
        </Col>
        <Col xs={12} sm={6} md={3} lg={3} style={{ paddingTop: 30 }}>
          <Field
            id="mms-patient-details-outsidepatient"
            name="outsidePatient"
            component={renderCheckbox}
            label="Outside Patient" />
        </Col>
        <Col xs={12} sm={6} md={6} lg={6} style={{ paddingTop: 30 }}>
          <Field
            id="mms-patient-details-patienthasdied"
            name="patientHasDied"
            component={renderCheckbox}
            label="Patient has Died" />
        </Col>
      </Row>
    </div>
    <div style={{ marginTop: 10, marginBottom: 10 }}>
      <Row end="xs">
        <Col xs={12} >
          <RaisedButton onClick={props.onCancel} label="CANCEL" style={{ marginRight: 10 }} />
          <RaisedButton
            onClick={props.onNext}
            disabled={props.buttonNextDisabled}
            label="NEXT"
            type="submit"
            primary={true} />
        </Col>
      </Row>
    </div>
  </form>
);

PatientDetails.propTypes = {
  buttonNextDisabled: PropTypes.bool,
  onNext: PropTypes.func,
  onCancel: PropTypes.func
};

export default PatientDetails;
