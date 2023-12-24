import { PrimaryButton, SecondaryButton } from '@/components/button/button.styled';
import { Wrapper } from './section1.styled';
import txt from '@/assets/home/section1/txt.png';
import React, { useRef } from 'react';
import gsap from 'gsap';

export const Section1 = () => {
  const ref = useRef<any>(null);
  React.useLayoutEffect(() => {
    gsap.fromTo(
      ref.current,
      {
        x: -100
      },
      {
        x: 0,
        duration: 8
      }
    );
  }, []);
  return (
    <Wrapper>
      <div className='content'>
        <img src={txt} alt='' ref={ref} className='logo' />
        <div className='btns'>
          <SecondaryButton w={220}>Documentation</SecondaryButton>
          <PrimaryButton w={220}>Dive to the deep now!</PrimaryButton>
        </div>
      </div>
    </Wrapper>
  );
};
