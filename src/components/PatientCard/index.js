import React from 'react';
import PropTypes from 'prop-types';
import Flexbox from 'flexbox-react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import {
  Avatar,
} from 'material-ui';
import { grey500 } from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import FaCircle from 'react-icons/lib/fa/circle';
import { Grid, Col, Row } from 'react-flexbox-grid';

const subTitle = (patient) => {
  return (
    <Flexbox flexDirection="column">
      <Flexbox flexDirection="row" alignItems="center">
        <Flexbox>{patient.mrNo}</Flexbox>
        <Flexbox style={{ marginLeft: 5, marginRight: 5 }}><FaCircle size={5} /></Flexbox>
        <Flexbox>{patient.profileStatus ? 'Active' : 'Inactive'}</Flexbox>
      </Flexbox>
      <Flexbox>{patient.address}</Flexbox>
    </Flexbox>
  );
}

const PatientCard = (props) => (
  <Card style={{ marginTop: 10, marginBottom: 10, paddingBottom: 10, paddingTop: 5 }}>
    <Flexbox alignItems="center" flexDirection="row">
      <Flexbox flexBasis={'10%'}>
        <Avatar
          size={60}
          style={{ marginLeft: 10 }}
        >
          A
        </Avatar>
      </Flexbox>
      <Flexbox flexBasis={'50%'} style={{ marginRight: 10 }}>
        <CardTitle title={`${props.patient.firstName} ${props.patient.lastName}`} subtitle={subTitle(props.patient)} style={{ padding: '0 0 0 10px' }} />
      </Flexbox>
      <Flexbox flexBasis={'40%'}>
        <Flexbox flexDirection="row" alignItems="flex-end" style={{ fontSize: 14 }}>
          <Flexbox flexDirection="column" style={{ marginRight: 10, fontWeight: 'bold', color: 'rgba(0, 0, 0, 0.54)' }}>
            <Flexbox alignItems="center" flexDirection="row">
              <Flexbox>Active MR No.</Flexbox>
            </Flexbox>
            <Flexbox alignItems="center" flexDirection="row">
              <Flexbox>Date of Birth</Flexbox>
            </Flexbox>
            <Flexbox alignItems="center" flexDirection="row">
              <Flexbox>Payment Type</Flexbox>
            </Flexbox>
          </Flexbox>
          <Flexbox flexDirection="column">
            <Flexbox alignItems="center" flexDirection="row">
              <Flexbox style={{ marginLeft: 5 }}>12671717216216261</Flexbox>
            </Flexbox>
            <Flexbox alignItems="center" flexDirection="row">
              <Flexbox style={{ marginLeft: 5 }}>12/05/1990</Flexbox>
            </Flexbox>
            <Flexbox alignItems="center" flexDirection="row">
              <Flexbox style={{ marginLeft: 5 }}>Cash</Flexbox>
            </Flexbox>
          </Flexbox>
        </Flexbox>
      </Flexbox>
    </Flexbox>
  </Card >
);

PatientCard.propTypes = {
  patient: PropTypes.object.isRequired
};

export default PatientCard;
