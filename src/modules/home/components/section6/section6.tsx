import { Wrapper } from './section6.styled';
import React from 'react';
// import gsap from 'gsap';
import { WrapperContent } from '@/components/wrapper-content/wrapper-content.styled';
import grass2 from '@/assets/home/grass.png';
import token from '@/assets/home/section5/token.png';
import { Description, Title } from '@/components/text/text.styled';

export const Section6 = () => {
  React.useEffect(() => {}, []);
  return (
    <Wrapper>
      <WrapperContent>
        <div className='section6'>
          <div className='section6-left'>
            <Title style={{ textAlign: 'center' }}>Aquachilling Token</Title>
            <img src={token} alt='' />
          </div>
          <div className='section6-right'>
            <div className='stats'>
              <div className='stat'>
                <div className='label'>Token name</div>
                <div className='value'>Aquachilling token</div>
              </div>
              <div className='stat'>
                <div className='label'>Token symbol</div>
                <div className='value'>AQAT</div>
              </div>
              <div className='stat'>
                <div className='label'>Chain</div>
                <div className='value'>Binance Smart chain</div>
              </div>
              <div className='stat'>
                <div className='label'>Total Supply</div>
                <div className='value'>200,000,000</div>
              </div>
              <div className='stat'>
                <div className='label'>Initial circulating supply</div>
                <div className='value'>15,000</div>
              </div>
              <div className='stat'>
                <div className='label'>Whitelist</div>
                <div className='value'>Yes</div>
              </div>
            </div>
            <Description style={{ textAlign: 'left' }}>
              Native token of Bitcoin Cats Gaming Ecosystem. It is originally inscribed on Bitcoin and part of it is
              bridged / wrapped to Ethereum to benefit from the well developed DeFi and GameFi infrastructure. $1CAT is
              the Utility token with the BitcoinCats gaming ecosystem, which can be used to buy & upgrade in-game assets
              including the avatars, pets, equipments, farmlands and so forth
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
