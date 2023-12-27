import { Wrapper } from './section5.styled';
import React from 'react';
// import gsap from 'gsap';
import { WrapperContent } from '@/components/wrapper-content/wrapper-content.styled';
import sand from '@/assets/home/section4/sand.png';
import { Title } from '@/components/text/text.styled';
import { PrimaryButton } from '@/components/button/button.styled';
import { CARDS, ICard } from './section5.hard';

export const Section5 = () => {
  React.useEffect(() => {}, []);
  return (
    <Wrapper>
      <div className='sand'>
        <img src={sand} alt='' />
      </div>

      <WrapperContent>
        <div className='section5'>
          <div className='section5-txt'>
            <Title>Encyclopedia of Aquachilling</Title>
            <PrimaryButton w={220}>Explore our Wikipedia</PrimaryButton>
          </div>
          <div className='cards'>
            {CARDS.map((item: ICard, key) => {
              return (
                <div className='cardd' key={key}>
                  <img src={new URL(`/src/assets/home/section4/${item.img}.png`, import.meta.url).href} alt='' />
                </div>
              );
            })}
          </div>
        </div>
      </WrapperContent>
    </Wrapper>
  );
};
