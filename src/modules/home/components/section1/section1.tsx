import { PrimaryButton, SecondaryButton } from '@/components/button/button.styled';
import { Wrapper } from './section1.styled';
import txt from '@/assets/home/section1/txt.png';
import React, { useRef } from 'react';
// import gsap from 'gsap';
import { WrapperContent } from '@/components/wrapper-content/wrapper-content.styled';

export const Section1 = () => {
  const ref = useRef<any>(null);
  return (
    <Wrapper>
      <WrapperContent>
        <div className='section1'>
          <div className='logo'>
            <img src={txt} alt='' ref={ref} />
          </div>
          <div className='btns'>
            <SecondaryButton w={220}>Documentation</SecondaryButton>
            <PrimaryButton w={220}>Dive to the deep now!</PrimaryButton>
          </div>
        </div>
      </WrapperContent>
    </Wrapper>
  );
};
