import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-flexbox-grid';
import RaisedButton from 'material-ui/RaisedButton';
import { renderTextField } from 'utils/form';
import SelectField from 'components/Form/SelectField';
import {
  titles,
  relationships,
  cities,
  provinces,
  countries
} from 'dummy/lookups';

const onSubmit = (evt) => {
  evt.preventDefault();
}

const EmergencyContact = (props) => (
  <form onSubmit={onSubmit}>
    <div>
      <Row>
        <Col xs={12} sm={6} md={3} lg={3}>
          <SelectField
            id="mms-patient-emergency-contact-title"
            name="title"
            label="Title"
            items={titles}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={6} md={3} lg={3}>
          <Field id="rms-emp-details-firstname" fullWidth={true} name="firstName" component={renderTextField} label="First, Middle Name" />
        </Col>
        <Col xs={12} sm={6} md={3} lg={3}>
          <Field id="rms-emp-details-lastname" fullWidth={true} name="lastName" component={renderTextField} label="Last Name" />
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={6} md={3} lg={3}>
          <SelectField
            id="mms-patient-emergency-contact-relationship"
            name="relation"
            label="Relationship"
            items={relationships}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={6} md={3} lg={3}>
          <Field
            id="mms-patient-emergency-contact-address"
            fullWidth={true}
            name="addressLine"
            multiLine={true}
            rows={2}
            component={renderTextField}
            label="Address Line" />
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={6} md={3} lg={3}>
          <Field
            id="mms-patient-emergency-contact-postcode"
            fullWidth={true}
            name="postCode"
            component={renderTextField}
            label="Post Code" />
        </Col>
        <Col xs={12} sm={6} md={3} lg={3}>
          <SelectField
            id="mms-patient-emergency-contact-city"
            name="city"
            label="City"
            items={cities}
          />
        </Col>
        <Col xs={12} sm={6} md={3} lg={3}>
          <SelectField
            id="mms-patient-emergency-contact-province"
            name="state"
            label="Province"
            items={provinces}
          />
        </Col>
        <Col xs={12} sm={6} md={3} lg={3}>
          <SelectField
            id="mms-patient-emergency-contact-country"
            name="country"
            label="Country"
            items={countries}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={6} md={3} lg={3}>
          <Field
            id="mms-patient-emergency-contact-homephone"
            fullWidth={true}
            name="homePhone"
            component={renderTextField}
            label="Home Phone" />
        </Col>
        <Col xs={12} sm={6} md={3} lg={3}>
          <Field
            id="mms-patient-emergency-contact-mobileno"
            fullWidth={true}
            name="mobilePhone"
            component={renderTextField}
            label="Mobile No." />
        </Col>
        <Col xs={12} sm={6} md={3} lg={3}>
          <Field
            id="mms-patient-emergency-contact-officephone"
            fullWidth={true}
            name="officePhone"
            component={renderTextField}
            label="Office Phone" />
        </Col>
        <Col xs={12} sm={6} md={3} lg={3}>
          <Field
            id="mms-patient-emergency-contact-extno"
            fullWidth={true}
            name="extNo"
            component={renderTextField}
            label="Ext. No." />
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={6} md={3} lg={3}>
          <Field
            id="mms-patient-emergency-contact-emailaddress"
            fullWidth={true}
            name="email"
            component={renderTextField}
            label="Email Address" />
        </Col>
      </Row>
    </div>
    <div style={{ marginTop: 10, marginBottom: 10 }}>
      <Row end="xs">
        <Col xs={12} >
          <RaisedButton onClick={props.onBack} label="BACK" style={{ marginRight: 10 }} />
          <RaisedButton type="submit" onClick={props.onNext} label="NEXT" primary={true} />
        </Col>
      </Row>
    </div>
  </form>
);

EmergencyContact.propTypes = {
  onNext: PropTypes.func,
  onBack: PropTypes.func
};

export default EmergencyContact;
