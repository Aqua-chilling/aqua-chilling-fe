import { PrimaryButton, SecondaryButton } from '@/components/button/button.styled';
import { Wrapper } from './section1.styled';
import txt from '@/assets/home/section1/txt.png';
import React, { useRef } from 'react';
// import gsap from 'gsap';
import { WrapperContent } from '@/components/wrapper-content/wrapper-content.styled';

export const Section1 = () => {
  const ref = useRef<any>(null);
  React.useLayoutEffect(() => {
    // gsap.from(ref.current, {
    //   scrollTrigger: {
    //     trigger: ref.current,
    //     start: 'top-=100px top',
    //     end: 'top top',
    //     scrub: true
    //   },
    //   x: -100,
    //   duration: 4
    // });
  }, []);
  return (
    <Wrapper data-scroll-section>
      <WrapperContent>
        <div className='section1'>
          <img src={txt} alt='' ref={ref} className='logo' />
          <div className='btns'>
            <SecondaryButton w={220}>Documentation</SecondaryButton>
            <PrimaryButton w={220}>Dive to the deep now!</PrimaryButton>
          </div>
        </div>
      </WrapperContent>
    </Wrapper>
  );
};
