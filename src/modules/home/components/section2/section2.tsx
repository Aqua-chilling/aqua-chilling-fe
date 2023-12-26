import { Wrapper } from './section2.styled';
import card1 from '@/assets/home/section1/card1.png';
import card2 from '@/assets/home/section1/card2.png';
import card3 from '@/assets/home/section1/card3.png';
import grass from '@/assets/home/grass.png';
import pyramid from '@/assets/home/pyramid.png';
import shrine from '@/assets/home/shrine.png';
import React, { useRef } from 'react';
import gsap from 'gsap';
import { Description, Title } from '@/components/text/text.styled';
import { WrapperContent } from '@/components/wrapper-content/wrapper-content.styled';

export const Section2 = () => {
  const refPyramid = useRef<any>(null);
  const refShrine = useRef<any>(null);
  React.useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: refPyramid.current,
          start: 'top bottom',
          end: 'bottom bottom',
          scrub: true
        }
      });
      tl.from(refPyramid.current, {
        y: 100
      }).from(refShrine.current, {
        y: 100
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <Wrapper data-scroll-section>
      <WrapperContent>
        <div className='section2'>
          <div className='cards'>
            <img src={card3} alt='' className='card3' />
            <img src={card1} alt='' className='card2' />
            <img src={card2} alt='' className='card1' />
          </div>
          <div className='section2-txt'>
            <Title>Introduction</Title>
            <Description>
              Unveil the Magic Underwater in SOLANA's GameFi Universe. Immerse yourself in a soothing idle adventure
              where you curate and nurture a vibrant array of fish, each thriving in real-time within your bespoke
              aquarium. Elevate your aquascape from a quaint beginner's bowl to an awe-inspiring marine masterpiece,
              bustling with rare and exotic fish. In AQUACHILLING, every sale turns into profit, fueling your journey
              through an ever-evolving underwater oasis. Dive in and discover the joy of creating your own thriving
              aquarium empire!
            </Description>
          </div>
          <div className='grass'>
            <img src={grass} className='grass-img' alt='' />
            <img src={pyramid} className='pyramid' alt='' ref={refPyramid} />
            <img src={shrine} className='shrine' alt='' ref={refShrine} />
          </div>
        </div>
      </WrapperContent>
    </Wrapper>
  );
};
