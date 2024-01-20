import React, { useRef } from 'react';
import btnLeft from '@/assets/home/section2/btnLeft.png';
import btnRight from '@/assets/home/section2/btnRight.png';
import { Wrapper } from './popup-view-image.styled';
import gsap from 'gsap';
export const PopupViewImage = ({ imgIndex, setVisibility }: { imgIndex: number; setVisibility: any }) => {
  const [currentImg, setCurrentImg] = React.useState<number>(imgIndex ? imgIndex : 0);
  const refPrevImg = useRef<any>(null);
  const refMainImg = useRef<any>(null);
  const refNextImg = useRef<any>(null);
  console.log(currentImg);

  return (
    <Wrapper>
      <div className='view-wrapper'>
        <div className='view-img'>
          {currentImg > 0 && (
            <img
              src={btnLeft}
              alt=''
              className='btn-left'
              onClick={() => {
                if (currentImg === 0) {
                  return;
                }
                gsap
                  .timeline()
                  .from(refMainImg.current, {
                    x: '-100%'
                  })
                  .fromTo(
                    refNextImg.current,
                    {
                      x: '0'
                    },
                    {
                      x: '100%'
                    },
                    '<'
                  );
                setCurrentImg(currentImg - 1);
              }}
            />
          )}
          <div className='main-view'>
            {currentImg - 1 >= 0 ? (
              <img
                ref={refPrevImg}
                src={new URL(`/src/assets/home/section2/img${currentImg}.png`, import.meta.url).href}
                alt=''
                className='prev'
              />
            ) : (
              <img ref={refPrevImg} src='' alt='' className='prev' />
            )}
            <img
              ref={refMainImg}
              src={new URL(`/src/assets/home/section2/img${currentImg + 1}.png`, import.meta.url).href}
              alt=''
              className='middle'
            />
            {currentImg + 1 <= 2 ? (
              <img
                ref={refNextImg}
                src={new URL(`/src/assets/home/section2/img${currentImg + 2}.png`, import.meta.url).href}
                alt=''
                className='next'
              />
            ) : (
              <img ref={refNextImg} src='' alt='' className='next' />
            )}
          </div>
          {currentImg < 2 && (
            <img
              src={btnRight}
              alt=''
              className='btn-right'
              onClick={() => {
                if (currentImg === 2) {
                  return;
                }
                gsap
                  .timeline()
                  .from(refMainImg.current, {
                    x: '100%'
                  })
                  .fromTo(
                    refPrevImg.current,
                    {
                      x: '0'
                    },
                    {
                      x: '-100%'
                    },
                    '<'
                  );
                setCurrentImg(currentImg + 1);
              }}
            />
          )}
        </div>
        <div
          className='cancle'
          onClick={() => {
            setVisibility(false);
          }}
        >
          Close
        </div>
      </div>
    </Wrapper>
  );
};
