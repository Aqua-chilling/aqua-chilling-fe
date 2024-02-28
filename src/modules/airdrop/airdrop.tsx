import { Wrapper } from './airdrop.styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import nft1 from '@/assets/airdrop/nft1.png';
import nft2 from '@/assets/airdrop/nft2.png';
import nft3 from '@/assets/airdrop/nft3.png';
import btnRight from '@/assets/airdrop/btn-right.png';
import btnLeft from '@/assets/airdrop/btn-left.png';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { PrimaryButton } from '@/components/button/button.styled';

export const AirDrop = () => {
  return (
    <Wrapper>
      <div className='top-airdrop'>Aquachilling Airdrop</div>
      <div className='airdrop'>
        <div className='left'>
          <div className='title'>Join the airdrop</div>
          <ul>
            <li>Claim Trident NFT </li>
            <li>Recieve $AQUA airdrop </li>
            <li>Early access to Genesis Launch</li>
          </ul>
          <div className='joined'>
            43,725 <span> people joined Aqua community</span>
          </div>
        </div>
        <div className='right'>
          <div className='slider-container'>
            <Swiper
              slidesPerView={'auto'}
              centeredSlides={true}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
              }}
              modules={[EffectCoverflow, Pagination, Navigation]}
              className='swiper_container'
            >
              <SwiperSlide>
                <img src={nft1} alt='slide_image' />
              </SwiperSlide>
              <SwiperSlide>
                <img src={nft2} alt='slide_image' />
              </SwiperSlide>
              <SwiperSlide>
                <img src={nft3} alt='slide_image' />
              </SwiperSlide>

              <div className='slider-controler'>
                <div className='swiper-button-prev'>
                  <img src={btnLeft} alt='' className='icon' />
                </div>
                <div className='swiper-button-next'>
                  <img src={btnRight} alt='' className='icon' />
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
      <div className='bottom-airdrop'>
        <div className='timer'>12 : 24 : 32 : 33</div>
        <PrimaryButton w={120}>Join now</PrimaryButton>
      </div>
    </Wrapper>
  );
};
