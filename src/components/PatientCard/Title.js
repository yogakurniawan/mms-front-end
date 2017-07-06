import React from 'react';
import Flexbox from 'flexbox-react';
import styled from 'styled-components';
// import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import { grey800 } from 'material-ui/styles/colors';

const PatientName = styled(Flexbox) `
  color: ${props => props.color};
  font-size: 20px;
  font-weight: lighter;
  @media (max-width: 480px) {
    font-size: 16px;
  }
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: #6200C0;
  }
`;

// const EditSection = ({ onClick }) => (
//   <Flexbox style={{ marginLeft: 10, paddingTop: 3 }}>
//     <EditorModeEdit onClick={onClick} color={'#6200C0'} style={{
//       width: 18,
//       height: 18
//     }} />
//   </Flexbox>
// );

const Title = ({ patient, onClick }) => (
  <Flexbox flexDirection="row" style={{ marginBottom: 5 }}>
    <PatientName onClick={onClick} color={grey800}>{`${patient.firstName} ${patient.lastName}`}</PatientName>
  </Flexbox >
);

export default Title;