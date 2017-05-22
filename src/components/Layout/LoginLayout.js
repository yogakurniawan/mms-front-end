import React from 'react';
import PropTypes from 'prop-types';
import logoUrl from './rms-logo.png';
import './LoginLayout.css';
import { Row, Col } from 'react-flexbox-grid';

function LoginLayout({ children }) {
  return (
    <div>
      <div className="LoginLayout">
        <Row center="xs">
          <Col xs={12}>
            <span><img src={logoUrl} alt="RMS" /></span>
          </Col>
        </Row>
      </div>
      { children }
    </div>
  );
}

LoginLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LoginLayout;

