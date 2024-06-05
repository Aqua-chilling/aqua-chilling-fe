import { Wrapper } from './section6.styled';
import React from 'react';
// import gsap from 'gsap';
import { WrapperContent } from '@/components/wrapper-content/wrapper-content.styled';
import grass2 from '@/assets/home/grass2.png';
import token from '@/constants/style/token.json';
import { Description, Title } from '@/components/text/text.styled';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { Bubble } from '../bubbles/bubble';
export const Section6 = () => {
  React.useEffect(() => {}, []);
  return (
    <Wrapper>
      <WrapperContent>
        <div className='section6'>
          <div className='section6-left'>
            <Title style={{ textAlign: 'center' }}>Aquachilling Token</Title>
            {/* <img src={token} alt='' /> */}
            <Player autoplay loop src={token} style={{ height: '300px', width: '300px' }}>
              <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
              <div className='bubbles-token'>
                <Bubble y={500} x={400} style='quick' />
              </div>
            </Player>
          </div>
          <div className='section6-right'>
            <div className='stats'>
              <div className='stat'>
                <div className='label'>Token name</div>
                <div className='value'>Aquachilling token</div>
              </div>
              <div className='stat'>
                <div className='label'>Token symbol</div>
                <div className='value'>AQUA</div>
              </div>
              <div className='stat'>
                <div className='label'>Chain</div>
                <div className='value'>TON </div>
              </div>
              <div className='stat'>
                <div className='label'>Total Supply</div>
                <div className='value'>1,000,000,000</div>
              </div>
            </div>
            <Description style={{ textAlign: 'left' }}>
              $AQUA is a native token of AquaChilling Gaming Ecosystem. $AQUA is also the main Utility token which can
              be used to buy & upgrade in-game assets including fishes, items, decorations, equipments, and so forth.
            </Description>
          </div>
        </div>
      </WrapperContent>
      <div className='sand'>
        <img src={grass2} alt='' />
      </div>
    </Wrapper>
  );
};
