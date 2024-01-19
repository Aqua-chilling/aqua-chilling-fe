import { Wrapper } from './section5.styled';
import React, { useRef } from 'react';
// import gsap from 'gsap';
import { WrapperContent } from '@/components/wrapper-content/wrapper-content.styled';
import sand from '@/assets/home/section4/sand.png';
import adultLeft from '@/assets/home/section4/adult-left.png';
import adultRight from '@/assets/home/section4/adult-right.png';
import { Title } from '@/components/text/text.styled';
import { PrimaryButton } from '@/components/button/button.styled';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export const Section5 = () => {
  const adultLeftRef = useRef(null);
  const adultRightRef = useRef(null);
  const refImg = useRef(null);
  useGSAP(() => {
    const tlLeft = gsap.timeline({
      repeat: -1
    });
    tlLeft
      .to(adultLeftRef.current, {
        x: 120,
        duration: 10
      })
      .to(adultLeftRef.current, {
        rotateY: 180,
        duration: 0.4
      })
      .to(adultLeftRef.current, {
        x: 0,
        duration: 10
      });
    const tlRight = gsap.timeline({
      repeat: -1
    });
    tlRight
      .to(adultRightRef.current, {
        x: -120,
        duration: 10
      })
      .to(adultRightRef.current, {
        rotateY: 180,
        duration: 0.4
      })
      .to(adultRightRef.current, {
        x: 0,
        duration: 10
      });
  });
  const [randomImages, setRandomImages] = React.useState<number[]>(Array.from({ length: 10 }, (_, i) => i + 1));
  function shuffle(array: number[]) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex > 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
  }
  const gennerateListRandomImg = () => {
    const arr = [...randomImages];
    shuffle(arr);
    setRandomImages(arr);
  };
  console.log(randomImages);
  React.useEffect(() => {
    const timer = setInterval(() => {
      gennerateListRandomImg();
      gsap.fromTo(
        '.fishcard',
        {
          opacity: 0.8
        },
        {
          opacity: 1
        }
      );
    }, 700);
    return () => clearInterval(timer);
  }, []);
  return (
    <Wrapper>
      <div className='sand'>
        <img src={sand} alt='' />
        <img src={adultLeft} alt='' className='adult left' ref={adultLeftRef} />
        <img src={adultRight} alt='' className='adult right' ref={adultRightRef} />
      </div>

      <WrapperContent>
        <div className='section5'>
          <div className='section5-txt'>
            <Title>Encyclopedia of Aquachilling</Title>
            <PrimaryButton w={220}>Explore our Wikipedia</PrimaryButton>
          </div>
          <div className='cards'>
            {randomImages?.map((item, key) => {
              return (
                <div className='cardd' key={key}>
                  <img
                    className='fishcard'
                    src={new URL(`/src/assets/home/section4/card${item}.png`, import.meta.url).href}
                    alt=''
                  />
                </div>
              );
            })}
          </div>
        </div>
      </WrapperContent>
    </Wrapper>
  );
};
