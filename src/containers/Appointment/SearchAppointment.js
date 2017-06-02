import React from 'react';
import { connect } from 'react-redux';
import {Row, Col} from 'react-flexbox-grid'
import PropTypes from 'prop-types';
import AppointmentListComponent from '../../components/Appointment/appointment-list.component';
import SearchBarComponent from '../../components/Common/search-bar.component';
import { dummyAppointmentFields } from '../../dummy/dummy-appointments';
import {
  appointment as appointmentsActions
} from '../../actions';

class SearchAppointment extends React.Component {

  constructor(props) {
      super(props)
  }

  componentDidMount() {
        this.props.requestGetAllAppointment(this.props.appointmentFilter);
  }


  render() {
    return (
          <Row>
              <Col xs={12}>
                <SearchBarComponent fields={dummyAppointmentFields} onChange={this.props.setAppointmentFilter}/>
              </Col>
              <Col xs={12}>
              
              </Col>
              <Col xs={12}>
                    <AppointmentListComponent appointments={this.props.appointments}/>
              </Col>
          </Row>
    )
  }
}

SearchAppointment.propTypes = {
  appointments: PropTypes.array.isRequired
};

const mapStateToProps = ({ appointment }) => ({
  appointments: appointment && appointment.appointmentList,
  appointmentFilter: appointment && appointment.appointmentFilter
});

const mapDispatchToProps = {
  requestGetAllAppointment: appointmentsActions.requestGetAllAppointment,
  setAppointmentFilter: appointmentsActions.setAppointmentFilter
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchAppointment);