import React from 'react';
import Progress from './Progress';
import Mask from './Mask';

const LoadingMask = () => (
  <Mask>
    <Progress size={80} thickness={5} />
  </Mask>
);

export default LoadingMask;
