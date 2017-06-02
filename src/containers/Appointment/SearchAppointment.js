import React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-flexbox-grid'
import PropTypes from 'prop-types';
import { Layout } from 'components/Layout';
import AppointmentListComponent from 'components/Appointment/appointment-list.component';
import SearchBarComponent from 'components/Common/search-bar.component';
import { dummyAppointmentFields } from 'dummy/dummy-appointments';
import {
  appointment as appointmentsActions
} from 'actions';

class SearchAppointment extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.requestGetAllAppointment();
  }

  onChange = () => {
    const { searchBarValues, requestGetAllAppointment } = this.props;
    requestGetAllAppointment(searchBarValues);
  }

  render() {
    return (
      <Layout className="Main">
        <Row>
          <Col xs={12}>
            <SearchBarComponent fields={dummyAppointmentFields} onSearchBarChange={this.onChange} />
          </Col>
          <Col xs={12}>

          </Col>
          <Col xs={12}>
            <AppointmentListComponent appointments={this.props.appointments} />
          </Col>
        </Row>
      </Layout>
    )
  }
}

SearchAppointment.propTypes = {
  appointments: PropTypes.array,
  searchBarValues: PropTypes.object
};

SearchAppointment.defaultProps = {
  appointments: [],
  searchBarValues: {}
};

const mapStateToProps = ({ appointment, form }) => ({
  appointments: appointment && appointment.appointmentList,
  searchBarValues: form.SearchBar && form.SearchBar.values
});

const mapDispatchToProps = {
  requestGetAllAppointment: appointmentsActions.requestGetAllAppointment,
  setAppointmentFilter: appointmentsActions.setAppointmentFilter
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchAppointment);