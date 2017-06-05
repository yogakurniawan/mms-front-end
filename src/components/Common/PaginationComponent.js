import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';

const PaginationComponent = (props) => (
    <Row>
        <Col xs={12}>{props.pagination.pageStart} - {props.pagination.pageEnd} of {props.pagination.total}</Col>
    </Row>
);

export default PaginationComponent;