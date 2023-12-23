// import React, { memo } from 'react';
import { memo } from 'react';
import { Wrapper } from './loading.styled';
// import Lottie from 'lottie-react';
// import loadingJSON from '@/constants/loading-animation.json';

const LoadingComponent = () => {
  return <Wrapper id='loading'>{/* <Lottie animationData={loadingJSON} className='loading-content' /> */}</Wrapper>;
};

export const Loading = memo(LoadingComponent);
