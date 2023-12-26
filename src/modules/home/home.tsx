import useLocoScroll from '@/hooks/use-locomotive';
import { Section1 } from './components/section1/section1';
import { Section2 } from './components/section2/section2';
import { Section3 } from './components/section3/section3';
import { Section4 } from './components/section4/section4';
import { Section5 } from './components/section5/section5';
import { Wrapper } from './home.styled';
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
import fish14 from '@/assets/home/section3/fish13.png';
import { Title } from '@/components/text/text.styled';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef } from 'react';
import gsap from 'gsap';

export const Home = () => {
  useLocoScroll(true);
  const ref = useRef<any>(null);
  React.useEffect(() => {
    gsap.from('.fishs', {
      scrollTrigger: {
        trigger: ref.current,
        start: 'top+=500 top',
        pin: true,
        pinSpacing: false,
        scroller: '#home'
      }
    });
    // ScrollTrigger.create({
    //   trigger: ref.current,
    //   start: 'top+=500 top',
    //   pin: true,
    //   pinSpacing: false,
    //   markers: true
    // });
  }, []);

  return (
    <Wrapper data-scroll-container id='home'>
      <Section1 />
      <Section2 />
      {/* <Section3 /> */}
      <div className='section3-wrapper' ref={ref} data-scroll-section>
        <div className='fishs'>
          <div className='row above'>
            <img src={fish1} alt='' />
            <img src={fish2} alt='' />
            <img src={fish3} alt='' />
            <img src={fish4} alt='' />
            <img src={fish5} alt='' />
            <img src={fish6} alt='' />
            <img src={fish7} alt='' />
          </div>
          <div className='row'>
            <img src={fish8} alt='' />
            <img src={fish9} alt='' />
            <img src={fish10} alt='' />
            <img src={fish11} alt='' />
            <img src={fish12} alt='' />
            <img src={fish13} alt='' />
            <img src={fish14} alt='' />
          </div>
        </div>
        <WrapperContent>
          <div className='section3'>
            <Title>Upcoming features</Title>
            <div className='features'>
              <div className='feature'>Ocean Gatling: The Fish Hunter</div>
              <div className='feature'>Fishing Clash</div>
            </div>
          </div>
        </WrapperContent>
      </div>
      <Section4 />
      <Section5 />
    </Wrapper>
  );
};
