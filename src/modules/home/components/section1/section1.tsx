import { PrimaryButton, SecondaryButton } from '@/components/button/button.styled';
import { Wrapper } from './section1.styled';
import txt from '@/assets/home/section1/txt.png';
import React, { useRef } from 'react';
// import gsap from 'gsap';
import { WrapperContent } from '@/components/wrapper-content/wrapper-content.styled';
import { Bubble } from '../bubbles/bubble';
import { Magnifier } from './components/magnifier';
import fish1 from '@/assets/home/fish1.png';
import fish2 from '@/assets/home/fish2.png';
import fish3 from '@/assets/home/fish3.png';
import fish4 from '@/assets/home/fish4.png';
import fish5 from '@/assets/home/fish5.png';
import fish6 from '@/assets/home/fish6.png';
import fish7 from '@/assets/home/fish7.png';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export const Section1 = () => {
  const ref = useRef<any>(null);
  useGSAP(() => {
    const fishs = gsap.utils.toArray('.fish');
    const anim = () =>
      fishs.forEach((f: any, i) => {
        const tl = gsap.timeline({ delay: 0 });
        tl.from(f, {
          left: '50%',
          top: '50%',
          duration: 1,
          rotateY: -180
        })
          .to(f, {})
          .to(
            f,
            {
              opacity: 1,
              x: i <= 3 ? Math.random() * 500 : Math.random() * -500,
              y: Math.random() * 500 - 250,
              duration: 10
            },
            '<'
          )
          .to(f, {
            rotateY: 180,
            duration: 0.3
          })
          .to(f, {
            x: i <= 3 ? Math.random() * -500 : Math.random() * 500,
            y: Math.random() * 500 - 250,
            duration: 5
          });
      });
    anim();
    const timer = setInterval(() => {
      anim();
    }, 17300);
    return () => {
      clearInterval(timer);
    };
  });

  return (
    <Wrapper>
      <img src={fish1} alt='' className='fish a' />
      <img src={fish2} alt='' className='fish b' />
      <img src={fish3} alt='' className='fish c' />
      <img src={fish4} alt='' className='fish d' />
      <img src={fish5} key={5} alt='' className='fish e' />
      <img src={fish6} key={5} alt='' className='fish f' />
      <img src={fish7} key={5} alt='' className='fish g' />
      <div className='bubbles-section1 left'>
        <Bubble />
      </div>
      <div className='bubbles-section1 right'>
        <Bubble />
      </div>
      <WrapperContent>
        <div className='section1'>
          <div className='logo' id='logo-section1'>
            <img src={txt} alt='' ref={ref} />
          </div>
          <div className='btns'>
            <Magnifier />
            <SecondaryButton w={220}>Documentation</SecondaryButton>
            <PrimaryButton w={220}>Dive to the deep now!</PrimaryButton>
          </div>
        </div>
      </WrapperContent>
    </Wrapper>
  );
};
