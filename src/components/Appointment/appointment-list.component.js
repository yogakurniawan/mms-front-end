import React from 'react';
import ReactDOM from 'react-dom';

//import col/row bootstrap
import { Row } from 'react-flexbox-grid'

//other components
import Appointment from './appointment-list-item.component';

const AppointmentListComponent = (props) => (
    <Row>
        {props.appointments && props.appointments.length > 0 ?
            props.appointments.map((appointment, i) =>
                <Appointment key={i}
                    appointment={appointment} />
            )
            : (
                <div className="no-record">
                    <span>No Record Found</span>
                </div>
            )
        }
    </Row>
);

export default AppointmentListComponent;