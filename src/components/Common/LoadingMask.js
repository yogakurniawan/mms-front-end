import React from 'react';
import styled from 'styled-components';
import Progress from './Progress';

const Mask = styled.div`
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index: 3;
  position: absolute;
  opacity: 0.3;
  background-color: #fff;
`;

const LoadingMask = () => (
  <Mask>
    <Progress size={80} thickness={5} />
  </Mask>
);

export default LoadingMask;
