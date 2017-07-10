import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push as pushAction } from 'react-router-redux';
import PropTypes from 'prop-types';
import Snackbar from 'material-ui/Snackbar';
import { Row, Col } from 'react-flexbox-grid';
import PatientCard from 'components/PatientCard';
import Pagination from 'components/Pagination';
import LoadingMask from 'components/Common/LoadingMask';
import {
  global as globalActions,
  patient as patientActions
} from 'actions';
import { DEFAULT_PAGE_SIZE } from 'constants';
import SearchBar from './SearchBar';

class SearchPatient extends Component {

  componentDidMount() {
    const { setPageTitle, setPatientPage, getPatients } = this.props;
    setPageTitle("Search Patient");
    setPatientPage(0);
    getPatients(0);
  }

  closeSnackBar = () => {
    const { toggleShowSnackBar } = this.props;
    toggleShowSnackBar();
  };

  setPage(page) {
    const { getPatients, setPatientPage, currentPage, searchValues, getPatientsByKeyword } = this.props;
    const newPage = page - 1;

    if (currentPage !== newPage) {
      setPatientPage(parseInt(newPage, 10));
      if (searchValues) {
        const { search } = searchValues;
        getPatientsByKeyword(newPage, search);
      } else {
        getPatients(newPage);
      }
    }
  }

  onSearch(genderValue) {
    const { searchValues, getPatients, getPatientsByKeyword } = this.props;
    if (searchValues) {
      const { mrNo, search } = searchValues;
      if (mrNo) {
        getPatients(0, mrNo);
      } else {
        getPatientsByKeyword(0, search);
      }
    } else {
      this.refresh();
    }
  }

  refresh() {
    const { getPatients, setPatientPage } = this.props;
    getPatients(0);
    setPatientPage(0);
  }

  onClickPatient(patient) {
    const { getPatient, push } = this.props;
    getPatient(patient);
    push(`patient/edit?id=${patient.id}`);
  }

  addPatient() {
    const { push } = this.props;
    push('patient/create');
  }

  render() {
    const { patients, snackBarOpen, page, currentPage, loading, snackBarMessage } = this.props;
    return (
      <div>
        <Row center="xs">
          <Col xs={12} sm={12} md={12} lg={11}>
            <SearchBar addPatient={() => this.addPatient()} handleKeyPress={() => this.onSearch()} />
          </Col>
          <Col xs={12} sm={12} md={12} lg={11}>
            {loading && <LoadingMask />}
            <div style={{ marginTop: 10, minHeight: '60vh' }}>
              <Row start="xs">
                {
                  patients && patients.map((patient) => (
                    <Col key={patient.id} xs={12} sm={12} md={6} lg={6}>
                      <PatientCard onClickPatient={() => this.onClickPatient(patient)} patient={patient} />
                    </Col>
                  ))
                }
              </Row>
            </div>
            <Row>
              <Col xs={12}>
                <Pagination
                  refresh={() => this.refresh()}
                  page={(currentPage + 1)}
                  perPage={DEFAULT_PAGE_SIZE}
                  total={page ? page.totalElements : DEFAULT_PAGE_SIZE}
                  setPage={(page) => this.setPage(page)}
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <Snackbar
          open={snackBarOpen}
          message={snackBarMessage || ''}
          autoHideDuration={4000}
          onRequestClose={this.closeSnackBar}
        />
      </div>
    );
  }
}

SearchPatient.propTypes = {
  setPageTitle: PropTypes.func,
  toggleShowSnackBar: PropTypes.func,
  getPatients: PropTypes.func,
  getPatient: PropTypes.func,
  getPatientsByKeyword: PropTypes.func,
  snackBarOpen: PropTypes.bool,
  loading: PropTypes.bool,
  push: PropTypes.func,
  page: PropTypes.object,
  searchValues: PropTypes.object,
  currentPage: PropTypes.number,
  snackBarMessage: PropTypes.string,
};

const mapDispatchToProps = {
  setPageTitle: globalActions.setPageTitle,
  toggleShowSnackBar: globalActions.toggleShowSnackBar,
  push: pushAction,
  getPatients: patientActions.getPatients,
  getPatient: patientActions.getPatient,
  getPatientsByKeyword: patientActions.getPatientsByKeyword,
  setPatientPage: patientActions.setPatientPage
};

const mapStateToProps = ({ form, patient: { success, page, loading }, global }) => ({
  snackBarOpen: global.snackBarOpen,
  snackBarMessage: global.snackBarMessage,
  patients: success.loadPatients && success.loadPatients.patients,
  page: success.loadPatients && success.loadPatients.page,
  loading: loading.loadPatients && loading.loadPatients,
  currentPage: page,
  searchValues: form.PatientSearchBar && form.PatientSearchBar.values
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPatient);
