import styled from 'styled-components';
import { Row } from 'react-flexbox-grid';

const ContainerBox = styled(Row)`
  margin: 0 auto;
  margin-top: 5vh;
  background: #fff;
  max-width: 400px;
  box-shadow: 0px 0px 30px 1px rgba(0, 0, 0, 0.4);
  transform: perspective(1px) translateZ(0);
  transition-duration: 0.8s;
  transition-property: color, background-color;
`;

export default ContainerBox;