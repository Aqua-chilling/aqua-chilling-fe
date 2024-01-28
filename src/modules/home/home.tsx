import useLocoScroll from '@/hooks/use-locomotive';
import { Section1 } from './components/section1/section1';
import { Section2 } from './components/section2/section2';
import { Section3 } from './components/section3/section3';
import { Section5 } from './components/section5/section5';
import { Section6 } from './components/section6/section6';
import { Wrapper } from './home.styled';
import { Section4 } from './components/section4/section4';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Footer } from '@/components';
import { Magnifier } from './components/section1/components/magnifier';
import React from 'react';
import { PopupViewImage } from './components/section2/components/popup-view-image';
export const Home = () => {
  useLocoScroll();
  const app = useRef<any>(null);
  const [isShowDetailImage, setIsShowDetailImage] = React.useState(false);
  const [currentImg, setCurrentImg] = React.useState(0);
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: '.section2',
      start: 'bottom-=200px center',
      pin: true,
      pinSpacing: false
    });
    ScrollTrigger.create({
      trigger: '.section4',
      start: 'top+=50px top',
      pin: true,
      pinSpacing: false
    });
  });
  return (
    <>
      {isShowDetailImage && <PopupViewImage imgIndex={currentImg} setVisibility={setIsShowDetailImage} />}
      <Wrapper id='home' ref={app}>
        <Section1 />
        <div className='section2'>
          <Section2 setCurrentImg={setCurrentImg} setIsShowDetailImage={setIsShowDetailImage} />
        </div>
        <Section3 />
        <div className='section4'>
          <Section4 />
        </div>
        <Section5 />
        <Section6 />
        <Footer />
      </Wrapper>
    </>
  );
};
