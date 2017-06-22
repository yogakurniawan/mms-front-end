import React from 'react';
import Flexbox from 'flexbox-react';
import styled from 'styled-components';
import { grey800, lightBlueA700 } from 'material-ui/styles/colors';

const PatientName = styled(Flexbox) `
  color: ${props => props.color};
  font-size: 20px;
  font-weight: lighter;
  @media (max-width: 480px) {
    font-size: 16px;
  }
  &:hover {
    text-decoration: underline;
    color: ${lightBlueA700};
  }
`;

const Title = ({ patient, onClick }) => (
  <Flexbox flexDirection="row" style={{ marginBottom: 5 }}>
    <PatientName onClick={onClick} color={grey800}>{`${patient.firstName} ${patient.lastName}`}</PatientName>
  </Flexbox>
);

export default Title;