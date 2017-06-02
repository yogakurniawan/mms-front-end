import React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-flexbox-grid'
import PropTypes from 'prop-types';
import { Layout } from 'components/Layout';
import { loadItem } from 'utils/localStorage';
import AppointmentListComponent from 'components/Appointment/appointment-list.component';
import SearchBarComponent from 'components/Common/search-bar.component';
import { dummyAppointmentFields } from 'dummy/dummy-appointments';
import {
  appointment as appointmentsActions
} from 'actions';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';

class SearchAppointment extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { searchBarValues, requestGetAllAppointment, pagination } = this.props;
    requestGetAllAppointment(pagination, searchBarValues);
  }

  onChange = () => {
    const { searchBarValues, requestGetAllAppointment, pagination } = this.props;
    requestGetAllAppointment(pagination, searchBarValues);
  }

  loadMore = () => {
    const { searchBarValues, loadMore, pagination } = this.props;
    pagination.pageNumber = pagination.pageNumber + 1;
    loadMore(pagination, searchBarValues);
  }

  render() {
    const userInfo = loadItem('userInfo');
    const layoutProps = {
      userInfo
    };
    return (
      <Layout className="Main" {...layoutProps}>
        <Row>
          <Col xs={12}>
            <SearchBarComponent fields={dummyAppointmentFields} onSearchBarChange={this.onChange} />
          </Col>
          <Col xs={12}>

          </Col>
          <Col xs={12} >
            <AppointmentListComponent appointments={this.props.appointments} />
          </Col>
        </Row>
        <Row center="xs">
          <Col xs={12}>
            {this.props.loader ? (
              <CircularProgress />
            )
              : (
                <RaisedButton
                  label="Load More"
                  labelPosition="before"
                  containerElement="label"
                  onClick={this.loadMore} />
              )
            }

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
  searchBarValues: form.SearchBar && form.SearchBar.values,
  pagination: appointment && appointment.appointmentPagination,
  loader: appointment && appointment.loadingMoreAppointment
});

const mapDispatchToProps = {
  requestGetAllAppointment: appointmentsActions.requestGetAllAppointment,
  loadMore: appointmentsActions.loadMore,
  setAppointmentFilter: appointmentsActions.setAppointmentFilter
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchAppointment);