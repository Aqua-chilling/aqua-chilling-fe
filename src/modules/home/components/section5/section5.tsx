import { Wrapper } from './section5.styled';
import React, { useRef } from 'react';
// import gsap from 'gsap';
import { WrapperContent } from '@/components/wrapper-content/wrapper-content.styled';
import sand from '@/assets/home/section4/sand.png';
import adultLeft from '@/assets/home/section4/adult-left.png';
import adultRight from '@/assets/home/section4/adult-right.png';
import { Title } from '@/components/text/text.styled';
import { PrimaryButton } from '@/components/button/button.styled';
import { CARDS, ICard } from './section5.hard';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export const Section5 = () => {
  const adultLeftRef = useRef(null);
  const adultRightRef = useRef(null);
  useGSAP(() => {
    const tlLeft = gsap.timeline({
      repeat: -1
    });
    tlLeft
      .to(adultLeftRef.current, {
        x: 120,
        duration: 10
      })
      .to(adultLeftRef.current, {
        rotateY: 180,
        duration: 0.4
      })
      .to(adultLeftRef.current, {
        x: 0,
        duration: 10
      });
    const tlRight = gsap.timeline({
      repeat: -1
    });
    tlRight
      .to(adultRightRef.current, {
        x: -120,
        duration: 10
      })
      .to(adultRightRef.current, {
        rotateY: 180,
        duration: 0.4
      })
      .to(adultRightRef.current, {
        x: 0,
        duration: 10
      });
  });
  return (
    <Wrapper>
      <div className='sand'>
        <img src={sand} alt='' />
        <img src={adultLeft} alt='' className='adult left' ref={adultLeftRef} />
        <img src={adultRight} alt='' className='adult right' ref={adultRightRef} />
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
