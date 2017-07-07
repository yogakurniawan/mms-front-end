import React from 'react';
import styled from 'styled-components';
import Progress from './Progress';
import Mask from './Mask';

const LoadingMask = () => (
  <Mask>
    <Progress size={80} thickness={5} />
  </Mask>
);

export default LoadingMask;
