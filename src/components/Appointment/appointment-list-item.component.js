import React from 'react';
import ReactDOM from 'react-dom';
//import momentjs
import moment from 'moment';

//import material ui
import ProfilePicture from 'material-ui/svg-icons/action/account-circle'

//import col/row bootstrap
import { Col, Row, Visible } from 'react-flexbox-grid'

//other components
import Appointment from './appointment-list-item.component';
import './appointment-list-item.component.css';

import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
const AppointmentListItemComponent = (props) => (
        <Col xs={12} sm={12} md={12} lg={6}>
            <Card style={{ marginTop: 10, marginBottom: 10 }}>
                <Row>
                    <Col xs={12} md={5} lg={5} className='row-item-inline'>
                        <div className='row-container'>
                            <ProfilePicture className='profile-pict' />
                        </div>
                        <div className='row-item-flex'>
                            <div>{props.appointment.mrNo}</div>
                            <div className='patient-name'>{props.appointment.patient && props.appointment.patient.firstName + " " + props.appointment.patient.lastName}</div>
                            <div>{props.appointment.patient.address}</div>
                            <div>{props.appointment.purpose}</div>
                        </div>
                    </Col>
                    <Col xs={12} md={7} lg={3} className='row-item-flex'>
                        <div className='row-container custom-xs-left-margin'>
                            <div>Service : {props.appointment.activity[0].service}</div>
                            <div>Doctor  : {props.appointment.activity[0].doctorName}</div>
                        </div>
                    </Col>
                    <Col xs={12} md={0} lg={4} className='row-item-flex'>
                        <div className='row-container custom-xs-left-margin'>
                            <div>Activity Date : {moment(props.appointment.activity[0].activityDate).format("DD-MM-YYYY")}</div>
                            <div>Appointment Date : {moment(props.appointment.activity[0].appointmentDate).format("DD-MM-YYYY")}</div>
                            <div>Status : {props.appointment.status}</div>
                        </div>
                    </Col>
                </Row>
            </Card>
        </Col>
);

export default AppointmentListItemComponent;
