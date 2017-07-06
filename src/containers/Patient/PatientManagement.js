import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push as pushAction } from 'react-router-redux';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';
import { Tabs, Tab } from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import MediaQuery from 'react-responsive';
import {
  global as globalActions,
  patient as patientActions
} from 'actions';
import { primary } from 'components/Common/Color';
import LoadingMask from 'components/Common/LoadingMask';
import PatientDetails from './PatientDetails';
import EmergencyContact from './EmergencyContact';
import Payment from './Payment';

const styles = {
  inkBarStyle: {
    background: primary
  },
  tabStyle: {
    color: primary
  }
};

class PatientManagement extends Component {

  componentDidMount() {
    this.onStart();
    this.reset();
    this.loadPatient();
  }

  reset() {
    const { setTabValue, disableTab } = this.props;
    setTabValue(0);
    if (!this.isModify()) {
      disableTab('emergencyContact', true);
      disableTab('payment', true);
      disableTab('supportingDocument', true);
    }
  }

  onStart() {
    const { setPageTitle } = this.props;
    setPageTitle(!this.isModify() ? "Create Patient" : "Modify Patient");
  }

  loadPatient() {
    const { patient, getPatient, location } = this.props;
    const query = !!Object.keys(location.query).length;
    if (!patient && query) {
      getPatient(null, location.query.id)
    }
  }

  isModify() {
    const { location } = this.props;
    const isModify = !!Object.keys(location.query).length;
    return isModify;
  }

  componentWillReceiveProps(nextProps) {
    this.onStart();
  }

  handleNav = (value) => {
    const { setTabValue } = this.props;
    setTabValue(value);
  }

  handleCancel = () => {
    const {
      push,
    } = this.props;
    push('/patient/search');
  }

  handleTabClick = (evt) => {
    const { setTabValue } = this.props;
    let value = 0;
    const textContent = evt.currentTarget.textContent;
    if (textContent === 'Emergency Contact') {
      value = 1;
    } else if (textContent === 'Payment') {
      value = 2
    } else {
      value = 0;
    }
    setTabValue(value);
  }

  constructPhoneNumber(details) {
    const phoneNumbers = [];
    if (details.homePhone) {
      phoneNumbers.push({
        type: "HOME",
        number: details.homePhone
      });
    }

    if (details.officePhone) {
      phoneNumbers.push({
        type: "OFFICE",
        number: details.officePhone,
        ext: details.extNo
      });
    }

    if (details.mobilePhone) {
      phoneNumbers.push({
        type: "MOBILE",
        number: details.mobilePhone
      });
    }
    return phoneNumbers;
  }

  constructPatientDetail(details) {
    details['phoneNumbers'] = this.constructPhoneNumber(details);
    return details;
  }

  constructEmergencyContact(details) {
    details['phoneNumbers'] = this.constructPhoneNumber(details);
    return details;
  }

  constructAddress(details) {
    const { addressLine, state, country, postCode, city } = details;
    return {
      line: addressLine,
      state,
      country,
      postCode,
      city
    };
  }

  handleSave = () => {
    const {
      patientDetailsValues,
      emergencyContactValues,
      paymentInfoValues,
      updatePatientDetail,
      addPatientDetail,
      push,
      toggleShowSnackBar,
      location,
      patient
    } = this.props;
    if (this.isModify()) {
      updatePatientDetail(this.isModify(), {
        id: location.query.id,
        patient: {...this.constructPatientDetail(patientDetailsValues), link: patient._links.self.href},
        patientAddress: {
          ...this.constructAddress(patientDetailsValues),
          link: patient && patient.address._links
        },
        emergencyContact: emergencyContactValues && {
          ...this.constructEmergencyContact(emergencyContactValues),
          link: patient && patient.emergencyContact && patient.emergencyContact._links,
          address: patient && patient.emergencyContact && patient.emergencyContact.address
        },
        emergencyContactAddress: emergencyContactValues && {
          ...this.constructAddress(emergencyContactValues),
        },
        paymentInfo: {
          ...paymentInfoValues, link: patient && patient.paymentInfo && patient.paymentInfo._links
        }
      }).then(() => {
        push('patient/search');
        toggleShowSnackBar(`Patient ${patient.firstName} ${patient.lastName} has been modified`);
        this.reset();
      });
    } else {
      addPatientDetail({
        patient: this.constructPatientDetail(patientDetailsValues),
        patientAddress: {
          ...this.constructAddress(patientDetailsValues),
          link: patient && patient.address._links
        },
        emergencyContact: emergencyContactValues && {
          ...this.constructEmergencyContact(emergencyContactValues),
          link: patient && patient.emergencyContact && patient.emergencyContact._links
        },
        emergencyContactAddress: emergencyContactValues && patient && patient.emergencyContact && {
          ...this.constructAddress(emergencyContactValues),
          address: patient && patient.emergencyContact && patient.emergencyContact.address
        },
        paymentInfo: {
          ...paymentInfoValues,
          link: patient && patient.paymentInfo && patient.paymentInfo._links
        }
      }).then(() => {
        push('patient/search');
        toggleShowSnackBar('New patient has been successfully added');
        this.reset();
      });
    }

  }

  renderLabel(label, icon) {
    return (
      <div>
        <MediaQuery query='(min-device-width: 676px)'>
          {label}
        </MediaQuery>
        <MediaQuery query='(max-device-width: 675px)'>
          <FontIcon color={'deepPurpleA700'} className="material-icons">{icon}</FontIcon>
        </MediaQuery>
      </div>
    );
  }

  render() {
    const { tabValue, tabDisabledProperty, location, loading, patient } = this.props;
    const isModify = !!Object.keys(location.query).length;
    const basicTabProps = {
      isModify,
      handleNav: this.handleNav,
      patient,
      id: isModify ? location.query.id : null
    };
    return (
      <Row center="xs" style={{ paddingTop: 20, paddingBottom: 20 }}>
        {loading && <LoadingMask />}
        {!loading && <Col xs={10} style={{ padding: 20, background: 'white' }}>
          <Tabs
            value={tabValue}
            inkBarStyle={styles.inkBarStyle}
            tabItemContainerStyle={{ backgroundColor: 'transparent' }}
          >
            <Tab
              onClick={this.handleTabClick}
              value={0}
              label={this.renderLabel("Patient Detail", "account_box")}
              style={styles.tabStyle}
              disabled={tabDisabledProperty.patientDetail}>
              <div>
                <PatientDetails {...basicTabProps} handleCancel={this.handleCancel} />
              </div>
            </Tab>
            <Tab
              onClick={this.handleTabClick}
              value={1}
              style={styles.tabStyle}
              label={this.renderLabel("Emergency Contact", "contacts")}
              disabled={tabDisabledProperty.emergencyContact}>
              <div>
                <EmergencyContact {...basicTabProps} />
              </div>
            </Tab>
            <Tab
              onClick={this.handleTabClick}
              value={2}
              style={styles.tabStyle}
              label={this.renderLabel("Payment", "payment")}
              disabled={tabDisabledProperty.payment}>
              <div>
                <Payment {...basicTabProps} handleSave={this.handleSave} />
              </div>
            </Tab>
          </Tabs>
        </Col>}
      </Row>
    );
  }
}

PatientManagement.propTypes = {
  setPageTitle: PropTypes.func,
  getPatient: PropTypes.func,
  setTabValue: PropTypes.func,
  disableTab: PropTypes.func,
  toggleShowSnackBar: PropTypes.func,
  addPatientDetail: PropTypes.func,
  updatePatientDetail: PropTypes.func,
  push: PropTypes.func,
  loading: PropTypes.bool,
  patientDetailsValues: PropTypes.object,
  emergencyContactValues: PropTypes.object,
  patient: PropTypes.object
};

const mapDispatchToProps = {
  setPageTitle: globalActions.setPageTitle,
  toggleShowSnackBar: globalActions.toggleShowSnackBar,
  setTabValue: patientActions.setTabValue,
  disableTab: patientActions.disableTab,
  addPatientDetail: patientActions.addPatientDetail,
  updatePatientDetail: patientActions.updatePatientDetail,
  push: pushAction,
  getPatient: patientActions.getPatient
};

const mapStateToProps = ({ form, patient: { loading, success, tabValue, tabDisabledProperty } }) => ({
  patientDetailsValues: form.PatientDetailsForm && form.PatientDetailsForm.values,
  emergencyContactValues: form.EmergencyContactForm && form.EmergencyContactForm.values,
  paymentInfoValues: form.PaymentForm && form.PaymentForm.values,
  tabValue: tabValue,
  tabDisabledProperty: tabDisabledProperty,
  loading: loading.loadPatient,
  patient: success.loadPatient && success.loadPatient
});

export default connect(mapStateToProps, mapDispatchToProps)(PatientManagement);
