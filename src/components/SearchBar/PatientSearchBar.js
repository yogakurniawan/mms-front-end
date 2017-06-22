import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { Field } from 'redux-form';
import { renderTextField } from 'components/Form';
const styles = {
  floatingLabelStyle: {
    color: "rgb(0, 130, 203)",
  },
  underlineStyle: {
    borderColor: "rgb(0, 130, 203)",
  },
};

class PatientSearchBar extends Component {

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.props.handleKeyPress();
    }
  }

  render() {
    return (
      <Row end="xs">
        <Col xs={6} sm={4} md={3} lg={3}>
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
        <Col xs={6} sm={4} md={3} lg={3}>
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
    )
  }
}

export default PatientSearchBar;