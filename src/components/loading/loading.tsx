// import React, { memo } from 'react';
import { memo } from 'react';
import { Wrapper } from './loading.styled';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import token from '@/constants/style/token.json';
import { Bubble } from '@/modules/home/components/bubbles/bubble';
import { Title } from '../text/text.styled';

const LoadingComponent = () => {
  return (
    <Wrapper id='loading'>
      <div className='loading-content'>
        <Player autoplay loop src={token} style={{ height: '300px', width: '300px' }}>
          <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
          <Title>Loading...</Title>
          <div className='bubbles-token'>
            <Bubble y={500} x={400} style='quick' />
          </div>
        </Player>
      </div>
    </Wrapper>
  );
};

export const Loading = memo(LoadingComponent);
