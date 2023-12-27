import { Wrapper } from './section2.styled';
import card1 from '@/assets/home/section1/card1.png';
import card2 from '@/assets/home/section1/card2.png';
import card3 from '@/assets/home/section1/card3.png';
import grass from '@/assets/home/grass.png';
import pyramid from '@/assets/home/pyramid.png';
import shrine from '@/assets/home/shrine.png';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Description, Title } from '@/components/text/text.styled';
import { WrapperContent } from '@/components/wrapper-content/wrapper-content.styled';

export const Section2 = () => {
  const refPyramid = useRef<any>(null);
  const refShrine = useRef<any>(null);
  const refGrass = useRef<any>(null);
  const refTxt = useRef<any>(null);
  const ref = useRef<any>(null);
  useEffect(() => {
    const cards = gsap.utils.toArray('.card');
    gsap.from(cards, {
      scrollTrigger: {
        trigger: ref.current,
        start: 'top-=300 center',
        end: 'top+=900 center',
        scrub: 1
      },
      stagger: 0.5,
      x: '-100%',
      opacity: 0,
      rotateY: 180
    });
    const tlStart = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: 'top+=200 center',
        end: 'top+=500 center',
        scrub: true
      }
    });
    tlStart
      .from(refGrass.current, {
        y: 200
      })
      .from(refPyramid.current, {
        y: 200
      })
      .from(
        refShrine.current,
        {
          y: 200
        },
        '<'
      );

    const tlEnd = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: 'top+=160 top',
        end: 'top+=500 top',
        scrub: true
      }
    });
    tlEnd
      .to(refPyramid.current, {
        y: 200,
        opacity: 0
      })
      .to(
        refShrine.current,
        {
          y: 200,
          opacity: 0
        },
        '<'
      )
      .to(
        refGrass.current,
        {
          y: 200,
          opacity: 0
        },
        '<'
      )
      .to(refTxt.current, {
        scale: 0,
        y: 100,
        opacity: 0
      })
      .to(cards, {
        scale: 0,
        y: 100,
        opacity: 0
      });
  }, []);
  return (
    <Wrapper ref={ref}>
      <WrapperContent>
        <div className='section2'>
          <div className='cards'>
            <img src={card3} alt='' className='card card3' />
            <img src={card1} alt='' className='card card2' />
            <img src={card2} alt='' className='card card1' />
          </div>
          <div className='section2-txt' ref={refTxt}>
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
        </div>
      </WrapperContent>

      <div className='grass'>
        <img src={grass} className='grass-img' alt='' ref={refGrass} />
        <img src={pyramid} className='pyramid' alt='' ref={refPyramid} />
        <img src={shrine} className='shrine' alt='' ref={refShrine} />
      </div>
    </Wrapper>
  );
};
