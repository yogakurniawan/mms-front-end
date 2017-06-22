import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-flexbox-grid';
import RaisedButton from 'material-ui/RaisedButton';

const SupportingDocument = (props) => (
  <div>
    <div>
      <Row>
        <Col xs={12} sm={6} md={3} lg={3}>
          <h3>Supporting Document</h3>
        </Col>
      </Row>
    </div>
    <div style={{ marginTop: 10, marginBottom: 10 }}>
      <Row end="xs">
        <Col xs={12} >
          <RaisedButton onClick={props.onBack} label="BACK" style={{ marginRight: 10 }} />
          <RaisedButton onClick={props.onSave} label="SAVE" primary={true} />
        </Col>
      </Row>
    </div>
  </div>
);

SupportingDocument.propTypes = {
  onBack: PropTypes.func,
  onSave: PropTypes.func
};

export default SupportingDocument;
