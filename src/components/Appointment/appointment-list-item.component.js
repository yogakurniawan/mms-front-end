import React from 'react';
import ReactDOM from 'react-dom';
//import momentjs
import moment from 'moment';

//import material ui
import ProfilePicture  from 'material-ui/svg-icons/action/account-circle'

//import col/row bootstrap
import {Col, Row, Visible} from 'react-flexbox-grid'

//other components
import Appointment from './appointment-list-item.component';
import './appointment-list-item.component.css';

class AppointmentListItemComponent extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
        
		return (    
            <Col xs={12} sm={12} md={12} lg={6} className='list-item'>
               <Row>
                    <Col xs={12} md={5} lg={5} className='row-item-inline'>   
                        <div className='row-container'>
                            <ProfilePicture className='profile-pict'/>
                        </div>
                        <div className='row-item-flex'>
                            <div>{this.props.appointment.mrNo}</div>
                            <div className='patient-name'>{this.props.appointment.patient && this.props.appointment.patient.firstName + " " + this.props.appointment.patient.lastName}</div>
                            <div>{this.props.appointment.patient.address}</div>
                            <div>{this.props.appointment.purpose}</div>
                        </div>
                    </Col>
                    <Col xs={12} md={7} lg={3} className='row-item-flex'>
                        <div className='row-container custom-xs-left-margin'>
                            <div>Service : {this.props.appointment.activity[0].service}</div>
                            <div>Doctor  : {this.props.appointment.activity[0].doctorName}</div>
                        </div>
                    </Col>  
                    <Col xs={12} md={0} lg={4} className='row-item-flex'>
                        <div className='row-container custom-xs-left-margin'>
                            <div>Activity Date : {moment(this.props.appointment.activity[0].activityDate).format("DD-MM-YYYY")}</div>
                            <div>Appointment Date : {moment(this.props.appointment.activity[0].appointmentDate).format("DD-MM-YYYY")}</div>
                            <div>Status : {this.props.appointment.status}</div>
                        </div>
                    </Col>
               </Row>
            </Col> 
            
            /*<article style={styles.card}>
                <p>{this.props.appointment.purpose}</p>
            </article>*/
                            
                        
		)
	}
}

export default AppointmentListItemComponent;
