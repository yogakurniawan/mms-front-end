import React from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import { Col } from 'react-flexbox-grid';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import SubTitle from './SubTitle';
import Title from './Title';
import Detail from './Detail';
import { patientTypes, bloodTypes, rhesusTypes } from 'dummy/lookups';

const PatientCard = ({ patient, onExpandChange, onClickPatient }) => {
  const patientType = patientTypes.find((type) => parseInt(type.value, 10) === patient.type);
  const bloodType = bloodTypes.find((type) => parseInt(type.value, 10) === patient.bloodType);
  const rhesusType = rhesusTypes.find((type) => parseInt(type.value, 10) === patient.rhesusType);
  return (
    <Card
      onExpandChange={onExpandChange}
      style={{ marginTop: 5, marginBottom: 10, paddingBottom: 5, paddingTop: 5 }}>
      <CardTitle
        title={<Title onClick={onClickPatient} patient={patient} />}
        style={{ padding: '0 10px 0 10px' }} />
      <CardTitle
        subtitle={<SubTitle patient={patient} />}
        actAsExpander={true}
        showExpandableButton={true}
        style={{ padding: '0 10px 0 10px' }} />
      <CardText expandable>
        <Detail details={[
          {
            label: 'Patient Type',
            value: patientType ? patientType.text : ""
          },
          {
            label: 'Email',
            value: patient.email
          },
          {
            label: 'Occupation',
            value: patient.occupation
          },
          {
            label: 'Blood Type',
            value: bloodType ? bloodType.text : ""
          },
          {
            label: 'Rhesus Type',
            value: rhesusType ? rhesusType.text : ""
          },
          {
            label: 'Marital Status',
            value: patient.maritalStatus
          },
          {
            label: 'Allergy',
            value: patient.allergy
          },
          {
            label: 'Disability Note',
            value: patient.disabilityNote
          },
          {
            label: 'Other Note',
            value: patient.otherNotes
          }
        ]} />
        <Detail details={[
          {
            label: 'Religion',
            value: patient.religion
          },
          {
            label: 'Nationality',
            value: patient.nationality
          }
        ]} />
        <Col xs={12}>
          <FlatButton fullWidth primary label="modify" onClick={onClickPatient} icon={<EditorModeEdit />} />
        </Col>
      </CardText>
    </Card >
  );
};

PatientCard.propTypes = {
  patient: PropTypes.object.isRequired,
  onClickPatient: PropTypes.func.isRequired
};

export default PatientCard;
