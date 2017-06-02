import React from 'react';
import ReactDOM from 'react-dom';

//import col/row bootstrap
import { Row } from 'react-flexbox-grid'

//other components
import Appointment from './appointment-list-item.component';

class AppointmentListComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <Row>
                {this.props.appointments && this.props.appointments.length > 0 ?
                    this.props.appointments.map((appointment, i) =>
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
        )
    }
}

export default AppointmentListComponent;