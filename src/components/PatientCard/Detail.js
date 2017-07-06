import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-flexbox-grid';
import styled from 'styled-components';
import { grey600 } from 'material-ui/styles/colors';
import { generate } from 'utils/uuid';
import { checkNull } from 'utils/misc';

const Text = styled.div`
  color: ${props => props.color};
  font-weight: ${props => props.fontWeight};
  font-size: 12px;
  margin-bottom: 3px;
  word-break: break-all;
`;

const Div = styled(Col)`
  margin-bottom: 10px;
`;

const Detail = props => (
  <Row>
    {
      props.details && props.details.map((detail) =>
        <Div key={generate()} xs={12} sm={6} md={4} lg={4}>
          <Text fontWeight="normal" color="#6200C0">{detail.label}</Text>
          <Text fontWeight="lighter" color={grey600}>{checkNull(detail.value, "-")}</Text>
        </Div>
      )
    }
  </Row>
);

Detail.propTypes = {
  details: PropTypes.arrayOf(PropTypes.object)
};

export default Detail;