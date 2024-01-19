import React from 'react';
import btnLeft from '@/assets/home/section2/btnLeft.png';
import btnRight from '@/assets/home/section2/btnRight.png';
import { Wrapper } from './popup-view-image.styled';
export const PopupViewImage = ({ imgIndex, setVisibility }: { imgIndex: number; setVisibility: any }) => {
  const [currentImg, setCurrentImg] = React.useState<number>(imgIndex ? imgIndex : 0);

  return (
    <Wrapper>
      <div className='view-wrapper'>
        <div className='view-img'>
          <img
            src={btnLeft}
            alt=''
            className='btn-left'
            onClick={() => {
              if (currentImg === 0) {
                return;
              }
              setCurrentImg(currentImg - 1);
            }}
          />
          <div className='main-view'>
            <img src={new URL(`/src/assets/home/section2/img${currentImg + 1}.png`, import.meta.url).href} alt='' />
          </div>
          <img
            src={btnRight}
            alt=''
            className='btn-right'
            onClick={() => {
              if (currentImg === 2) {
                return;
              }
              setCurrentImg(currentImg + 1);
            }}
          />
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
