import styled from 'styled-components';
import CircularProgress from 'material-ui/CircularProgress';

const Progress = styled(CircularProgress) `
  top: 40vh;
  z-index: 2;
  width: 100%;
  height: 100%;
  position: absolute;
`;

export default Progress;