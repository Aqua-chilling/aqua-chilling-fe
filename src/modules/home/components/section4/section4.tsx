import { Wrapper } from './section4.styled';
import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';
import { WrapperContent } from '@/components/wrapper-content/wrapper-content.styled';
import fish1 from '@/assets/home/section3/fish1.png';
import fish2 from '@/assets/home/section3/fish2.png';
import fish3 from '@/assets/home/section3/fish3.png';
import fish4 from '@/assets/home/section3/fish4.png';
import fish5 from '@/assets/home/section3/fish5.png';
import fish6 from '@/assets/home/section3/fish6.png';
import fish7 from '@/assets/home/section3/fish7.png';
import fish8 from '@/assets/home/section3/fish8.png';
import fish9 from '@/assets/home/section3/fish9.png';
import fish10 from '@/assets/home/section3/fish10.png';
import fish11 from '@/assets/home/section3/fish11.png';
import fish12 from '@/assets/home/section3/fish12.png';
import fish13 from '@/assets/home/section3/fish13.png';
import fish14 from '@/assets/home/section3/fish14.png';
import zksync from '@/assets/home/section3/zksync.png';
import ton from '@/assets/ton.png';
import orbiter from '@/assets/home/section3/orbiter.png';
import chainlink from '@/assets/home/section3/chainlink.png';
import galxe from '@/assets/home/section3/galxe.png';
import { Title } from '@/components/text/text.styled';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
// import { useGSAP } from '@gsap/react';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const Section4 = () => {
  const ref = useRef<any>(null);
  const refBg = useRef<any>(null);
  useEffect(() => {
    if (window.innerWidth <= 780) {
      return;
    }
    gsap.to(refBg.current, {
      scrollTrigger: {
        trigger: ref.current,
        start: 'top+=200 center',
        end: 'top+=300 center',
        scrub: 1
      },
      opacity: 0
    });
    const fishbelow = gsap.utils.toArray('.fishrowbelow');
    fishbelow.forEach((fish: any) => {
      return gsap.to(fish, {
        scrollTrigger: {
          trigger: ref.current,
          start: 'top+=200 center',
          scrub: 1
        },
        y: Math.random() * 700 - 50,
        scale: Math.random() * 1 + 0.3,
        duration: Math.random() * 5
      });
    });
    const fishrow = gsap.utils.toArray('.fishrow');
    fishrow.forEach((fish: any) => {
      return gsap.to(fish, {
        scrollTrigger: {
          trigger: ref.current,
          start: 'top+=250 center',
          scrub: 1
        },
        y: Math.random() * 300 - 150,
        scale: Math.random() * 1 + 0.3,
        duration: Math.random() * 5
      });
    });
  }, []);

  return (
    <Wrapper ref={ref}>
      <div className='fishs'>
        <div className='bg' ref={refBg}></div>
        <div className='row'>
          <img src={fish1} alt='' className='fishrow' />
          <img src={fish2} alt='' className='fishrow' />
          <img src={fish3} alt='' className='fishrow' />
          <img src={fish4} alt='' className='fishrow' />
          <img src={fish5} alt='' className='fishrow' />
          <img src={fish6} alt='' className='fishrow' />
          <img src={fish7} alt='' className='fishrow' />

          <img src={fish1} alt='' className='fishrow' />
          <img src={fish2} alt='' className='fishrow' />
          <img src={fish3} alt='' className='fishrow' />
          <img src={fish4} alt='' className='fishrow' />
          <img src={fish5} alt='' className='fishrow' />
          <img src={fish6} alt='' className='fishrow' />
          <img src={fish7} alt='' className='fishrow' />
          <img src={fish1} alt='' className='fishrow' />
          <img src={fish2} alt='' className='fishrow' />
          <img src={fish3} alt='' className='fishrow' />
          <img src={fish4} alt='' className='fishrow' />
          <img src={fish5} alt='' className='fishrow' />
          <img src={fish6} alt='' className='fishrow' />
          <img src={fish7} alt='' className='fishrow' />
          <img src={fish1} alt='' className='fishrow' />
          <img src={fish2} alt='' className='fishrow' />
          <img src={fish3} alt='' className='fishrow' />
          <img src={fish4} alt='' className='fishrow' />
          <img src={fish5} alt='' className='fishrow' />
          <img src={fish6} alt='' className='fishrow' />
          <img src={fish7} alt='' className='fishrow' />
        </div>
        <div className='row below'>
          <img src={fish8} alt='' className='fishrowbelow' />
          <img src={fish9} alt='' className='fishrowbelow' />
          <img src={fish10} alt='' className='fishrowbelow' />
          <img src={fish11} alt='' className='fishrowbelow' />
          <img src={fish12} alt='' className='fishrowbelow' />
          <img src={fish13} alt='' className='fishrowbelow' />
          <img src={fish14} alt='' className='fishrowbelow' />

          <img src={fish8} alt='' className='fishrowbelow' />
          <img src={fish9} alt='' className='fishrowbelow' />
          <img src={fish10} alt='' className='fishrowbelow' />
          <img src={fish11} alt='' className='fishrowbelow' />
          <img src={fish12} alt='' className='fishrowbelow' />
          <img src={fish13} alt='' className='fishrowbelow' />
          <img src={fish14} alt='' className='fishrowbelow' />

          <img src={fish8} alt='' className='fishrowbelow' />
          <img src={fish9} alt='' className='fishrowbelow' />
          <img src={fish10} alt='' className='fishrowbelow' />
          <img src={fish11} alt='' className='fishrowbelow' />
          <img src={fish12} alt='' className='fishrowbelow' />
          <img src={fish13} alt='' className='fishrowbelow' />
          <img src={fish14} alt='' className='fishrowbelow' />

          <img src={fish8} alt='' className='fishrowbelow' />
          <img src={fish9} alt='' className='fishrowbelow' />
          <img src={fish10} alt='' className='fishrowbelow' />
          <img src={fish11} alt='' className='fishrowbelow' />
          <img src={fish12} alt='' className='fishrowbelow' />
          <img src={fish13} alt='' className='fishrowbelow' />
          <img src={fish14} alt='' className='fishrowbelow' />
        </div>
      </div>
      <WrapperContent>
        <div className='section4'>
          <Title>Our Partners</Title>
          <div className='partners'>
            <img src={ton} alt='' />
            <img src={orbiter} alt='' />
            <img src={chainlink} alt='' />
            <img src={galxe} alt='' />
          </div>
        </div>
      </WrapperContent>
    </Wrapper>
  );
};
