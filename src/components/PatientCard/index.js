import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import SubTitle from './SubTitle';
import Title from './Title';
import Detail from './Detail';
import { patientTypes, bloodTypes, rhesusTypes } from 'dummy/lookups';

const PatientCard = ({ patient, onExpandChange, onClickPatient }) => (
  <Card
    onExpandChange={onExpandChange}
    style={{ marginTop: 10, marginBottom: 10, paddingBottom: 10, paddingTop: 5 }}>
    <CardHeader
      title={<Title onClick={onClickPatient} patient={patient} />}
      subtitle={<SubTitle patient={patient} />}
      actAsExpander={true}
      showExpandableButton={true}
      style={{ padding: '10px 10px 5px 10px' }} />
    <CardText expandable>
      <Detail details={[
        {
          label: 'Patient Type',
          value: patientTypes.find((type) => parseInt(type.value, 10) === patient.type).text
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
          value: bloodTypes.find((type) => parseInt(type.value, 10) === patient.bloodType).text
        },
        {
          label: 'Rhesus Type',
          value: rhesusTypes.find((type) => parseInt(type.value, 10) === patient.rhesusType).text
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
    </CardText>
  </Card >
);

PatientCard.propTypes = {
  patient: PropTypes.object.isRequired,
  onClickPatient: PropTypes.func.isRequired
};

export default PatientCard;
