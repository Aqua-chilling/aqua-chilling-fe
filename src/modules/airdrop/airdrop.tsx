import { Wrapper } from './airdrop.styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import nft1 from '@/assets/airdrop/triden 1.jpg';
import nft2 from '@/assets/airdrop/triden 2.jpg';
import nft3 from '@/assets/airdrop/triden 3.jpg';
import nft4 from '@/assets/airdrop/triden 4.jpg';
import btnRight from '@/assets/airdrop/btn-right.png';
import btnLeft from '@/assets/airdrop/btn-left.png';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { PrimaryButton } from '@/components/button/button.styled';
import { PopUpQuest } from './components/popup-quest';
import React from 'react';
import { Modal } from '@/components/modal/modal';
import { PopUpLogin } from './components/popup-login';
import { IRootState, dispatch } from '@/app/store';
import { selectToken } from '@/redux';
import { useSelector } from 'react-redux';

export const AirDrop = () => {
  const [isShowPopupQuest, setIsShowPopupQuest] = React.useState(false);
  const [isShowPopupLogin, setIsShowPopupLogin] = React.useState(false);
  const token = useSelector(selectToken);

  React.useEffect(() => {
    console.log('changed');
    if (token) {
      setIsShowPopupLogin(false);
      setIsShowPopupQuest(true);
    }
  }, [token]);
  console.log(token);

  return (
    <Wrapper>
      {isShowPopupQuest && <PopUpQuest setVisibility={setIsShowPopupQuest} />}
      {isShowPopupLogin && (
        <Modal control={isShowPopupLogin} setControl={setIsShowPopupLogin}>
          <PopUpLogin />
        </Modal>
      )}
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
              loop
              autoplay
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
                <img src={nft1} alt='' className='icon' />
                <span>Trident Lv.1 </span>
              </SwiperSlide>
              <SwiperSlide>
                <img src={nft2} alt='' className='icon' />
                <span>Trident Lv.2 </span>
              </SwiperSlide>
              <SwiperSlide>
                <img src={nft3} alt='' className='icon' />
                <span>Trident Lv.3 </span>
              </SwiperSlide>
              <SwiperSlide>
                <img src={nft4} alt='' className='icon' />
                <span>Trident Lv.4 </span>
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
        <PrimaryButton w={120}>
          <div
            onClick={() => {
              if (token) {
                setIsShowPopupQuest(true);
              } else {
                setIsShowPopupLogin(true);
              }
            }}
          >
            Join now
          </div>
        </PrimaryButton>
      </div>
    </Wrapper>
  );
};
