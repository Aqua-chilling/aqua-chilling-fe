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
import sand from '@/assets/home/section2/sand.png';
import { PopupViewImage } from './components/popup-view-image';

export const Section2 = ({ setCurrentImg, setIsShowDetailImage }: any) => {
  const refPyramid = useRef<any>(null);
  const refShrine = useRef<any>(null);
  const refGrass = useRef<any>(null);
  const refTxt = useRef<any>(null);
  const ref = useRef<any>(null);
  useEffect(() => {
    // if (window.innerWidth < 768) {
    //   return;
    // }
    if (window.innerWidth <= 720) {
      return;
    }
    const cards = gsap.utils.toArray('.card');
    gsap.from(cards, {
      scrollTrigger: {
        trigger: ref.current,
        start: 'top-=300 center',
        end: 'top+=300 center',
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
        start: 'top+=50 top',
        end: 'top+=300 top',
        scrub: true
      }
    });
    tlStart
      .from(refGrass.current, {
        y: 350
      })
      .from(
        refPyramid.current,
        {
          y: 350
        }
        // '<'
      )
      .from(
        refShrine.current,
        {
          y: 350
        },
        '<'
      );

    // const tlEnd = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ref.current,
    //     start: 'top+=560 top',
    //     end: 'top+=700 top',
    //     scrub: true
    //   }
    // });
    // tlEnd
    //   .to(refTxt.current, {
    //     scale: 0,
    //     y: 100,
    //     opacity: 0
    //   })
    //   .to(cards, {
    //     scale: 0,
    //     y: 100,
    //     opacity: 0
    //   });
  }, []);
  return (
    <Wrapper ref={ref}>
      <div className='sand'>
        <img src={sand} alt='' />
      </div>
      <WrapperContent>
        <div className='section2'>
          <div className='cards'>
            <img
              src={card3}
              alt=''
              className='card card3'
              onClick={() => {
                setCurrentImg(0);
                setIsShowDetailImage(true);
              }}
            />
            <img
              src={card1}
              alt=''
              className='card card2'
              onClick={() => {
                setCurrentImg(1);
                setIsShowDetailImage(true);
              }}
            />
            <img
              src={card2}
              alt=''
              className='card card1'
              onClick={() => {
                setCurrentImg(2);
                setIsShowDetailImage(true);
              }}
            />
          </div>
          <div className='section2-txt' ref={refTxt}>
            <Title>Play for fun & dive deep in the ocean of TON rewards</Title>
            <Description>
              {/* Unveil the Magic Underwater in SOLANA's GameFi Universe. Immerse yourself in a soothing idle adventure
              where you curate and nurture a vibrant array of fish, each thriving in real-time within your bespoke
              aquarium. Elevate your aquascape from a quaint beginner's bowl to an awe-inspiring marine masterpiece,
              bustling with rare and exotic fish. In AQUACHILLING, every sale turns into profit, fueling your journey
              through an ever-evolving underwater oasis. Dive in and discover the joy of creating your own thriving
              aquarium empire! */}
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
