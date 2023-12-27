import { Wrapper } from './section5.styled';
import React from 'react';
// import gsap from 'gsap';
import { WrapperContent } from '@/components/wrapper-content/wrapper-content.styled';
import sand from '@/assets/home/section4/sand.png';
import { Title } from '@/components/text/text.styled';
import { PrimaryButton } from '@/components/button/button.styled';
import { CARDS, ICard } from './section5.hard';

export const Section5 = () => {
  React.useEffect(() => {
    // const ctx = gsap.context(() => {
    //   const tl = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: '',
    //       start: 'top bottom',
    //       end: 'bottom bottom',
    //       scrub: true
    //     }
    //   });
    //   tl.from(null, {
    //     y: 100
    //   }).from(null, {
    //     y: 100
    //   });
    // }, []);
    // return () => ctx.revert();
  }, []);
  return (
    <Wrapper>
      <div className='sand'>
        <img src={sand} alt='' />
      </div>
      {/* <div className='sand2'>
        <img src={sand2} alt='' />
      </div> */}
      <WrapperContent>
        <div className='section5'>
          <div className='section5-txt'>
            <Title>Encyclopedia of Aquachilling</Title>
            <PrimaryButton w={220}>Explore our Wikipedia</PrimaryButton>
          </div>
          <div className='cards'>
            {CARDS.map((item: ICard, key) => {
              return (
                <div className='card' key={key}>
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
