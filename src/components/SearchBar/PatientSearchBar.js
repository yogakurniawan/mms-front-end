import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { Field } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { renderTextField } from 'components/Form';
const styles = {
  floatingLabelStyle: {
    color: "#6200C0",
  },
  underlineStyle: {
    borderColor: "#6200C0",
  },
};

class PatientSearchBar extends Component {

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.props.handleKeyPress();
    }
  }

  render() {
    const { addPatient } = this.props;
    return (
      <Row>
        <Col xs={12} sm={6} md={6} lg={6} style={{ paddingTop: 30 }}>
          <Row>
            <Col xs={12} sm={6} md={4} lg={4}>
              <RaisedButton
                primary
                label="Add Patient"
                fullWidth
                onClick={addPatient}
                icon={<ContentAdd />}
              />
            </Col>
          </Row>
        </Col>
        <Col xs={12} sm={6} md={6} lg={6}>
          <Row end="xs">
            <Col xs={6} sm={6} md={6} lg={5}>
              <Field
                id="mms-search-patient-mrno"
                fullWidth={true}
                onKeyPress={this.handleKeyPress}
                name="mrNo"
                underlineStyle={styles.underlineStyle}
                floatingLabelStyle={styles.floatingLabelStyle}
                component={renderTextField}
                floatingLabelText="MR No."
                floatingLabelFixed={true} />
            </Col>
            <Col xs={6} sm={6} md={6} lg={5}>
              <Field
                id="mms-search-patient-other-search"
                fullWidth={true}
                onKeyPress={this.handleKeyPress}
                underlineStyle={styles.underlineStyle}
                floatingLabelStyle={styles.floatingLabelStyle}
                name="search"
                component={renderTextField}
                floatingLabelText="Search"
                floatingLabelFixed={true} />
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }
}

export default PatientSearchBar;