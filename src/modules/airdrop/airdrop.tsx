import { Wrapper } from './airdrop.styled';
import { NOTIFICATION_TYPE } from '@/components/notification/notification';
import { useNotification } from '@/contexts/notification.context';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import nft1 from '@/assets/airdrop/triden 1.jpg';
import nft2 from '@/assets/airdrop/triden 2.jpg';
import nft3 from '@/assets/airdrop/triden 3.jpg';
import nft4 from '@/assets/airdrop/triden 4.jpg';
import btnRight from '@/assets/airdrop/btn-right.png';
import btnLeft from '@/assets/airdrop/btn-left.png';
import fish1 from '@/assets/home/fish1.png';
import fish2 from '@/assets/home/fish2.png';
import fish3 from '@/assets/home/fish3.png';
import fish4 from '@/assets/home/fish4.png';
import fish5 from '@/assets/home/fish5.png';
import fish6 from '@/assets/home/fish6.png';
import fish7 from '@/assets/home/fish7.png';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { PrimaryButton } from '@/components/button/button.styled';
import { PopUpQuest } from './components/popup-quest';
import React, { useRef } from 'react';
import { Modal } from '@/components/modal/modal';
import { PopUpLogin } from './components/popup-login';
import { selectAddress, selectToken, updateDiscordId, updateTwitterId } from '@/redux';
import { useSelector } from 'react-redux';
import { OauthRepository } from '@/repositories/oauth/oauth.repository';
import { dispatch } from '@/app/store';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Bubble } from '../home/components/bubbles/bubble';
import { MenuOutlined } from '@ant-design/icons';
import { formatAddressToHuman } from '@/utilities/format.utils';
import { copyICONSVG } from '../airdrop-detail/components/referral-component/referral';
import { useTonWalletContext } from '@/contexts/ton-wallet.context';

export const AirDrop = () => {
  const { addNotification } = useNotification();
  const fish1Ref = useRef<any>(null);
  const fish2Ref = useRef<any>(null);
  const fish3Ref = useRef<any>(null);
  const fish4Ref = useRef<any>(null);
  const fish5Ref = useRef<any>(null);
  const fish6Ref = useRef<any>(null);
  const fish7Ref = useRef<any>(null);
  useGSAP(() => {
    const animFish1 = () => {
      const tl = gsap.timeline({ delay: 0 });
      tl.to(fish1Ref.current, {
        x: Math.random() * 1000 + 200,
        y: Math.random() * 500 - 250,
        duration: 15
      })
        .to(fish1Ref.current, {
          rotateY: 180,
          duration: 0.3
        })
        .to(fish1Ref.current, {
          x: -Math.random() * 500,
          y: Math.random() * 500 - 250,
          duration: 17
        })
        .to(fish1Ref.current, {
          rotateY: 0,
          duration: 0.3
        });
    };
    animFish1();
    const timer1 = setInterval(() => {
      animFish1();
    }, 32600);
    const animFish2 = () => {
      const tl = gsap.timeline({ delay: 0 });
      tl.to(fish2Ref.current, {
        x: Math.random() * 700 + 400,
        y: Math.random() * 500 - 250,
        duration: 18
      })
        .to(fish2Ref.current, {
          rotateY: 180,
          duration: 0.4
        })
        .to(fish2Ref.current, {
          x: -Math.random() * 500,
          y: Math.random() * 500 - 250,
          duration: 10
        })
        .to(fish2Ref.current, {
          rotateY: 0,
          duration: 0.2
        });
    };
    animFish2();
    const timer2 = setInterval(() => {
      animFish2();
    }, 28600);
    const animFish3 = () => {
      const tl = gsap.timeline({ delay: 0 });
      tl.to(fish3Ref.current, {
        x: Math.random() * 700 + 100,
        y: Math.random() * 700 - 250,
        duration: 30
      })
        .to(fish3Ref.current, {
          rotateY: 180,
          duration: 0.4
        })
        .to(fish3Ref.current, {
          x: -Math.random() * 500,
          y: Math.random() * 500 - 250,
          duration: 30
        })
        .to(fish3Ref.current, {
          rotateY: 0,
          duration: 0.2
        });
    };
    animFish3();
    const timer3 = setInterval(() => {
      animFish3();
    }, 60600);
    const animFish4 = () => {
      const tl = gsap.timeline({ delay: 0 });
      tl.to(fish4Ref.current, {
        x: Math.random() * 500 + 100,
        y: Math.random() * 100 - 50,
        duration: 17
      })
        .to(fish4Ref.current, {
          rotateY: 180,
          duration: 0.4
        })
        .to(fish4Ref.current, {
          x: -Math.random() * 400,
          y: Math.random() * 500 - 250,
          duration: 16
        })
        .to(fish4Ref.current, {
          rotateY: 0,
          duration: 0.2
        });
    };
    animFish4();
    const timer4 = setInterval(() => {
      animFish4();
    }, 33600);
    const animFish5 = () => {
      const tl = gsap.timeline({ delay: 0 });
      tl.to(fish5Ref.current, {
        x: Math.random() * 100 - 250,
        y: Math.random() * 300 - 450,
        duration: 13
      })
        .to(fish5Ref.current, {
          rotateY: 180,
          duration: 0.4
        })
        .to(fish5Ref.current, {
          x: Math.random() * 500,
          y: Math.random() * 900 - 250,
          duration: 15
        })
        .to(fish5Ref.current, {
          rotateY: 0,
          duration: 0.2
        });
    };
    animFish5();
    const timer5 = setInterval(() => {
      animFish5();
    }, 28600);
    const animFish6 = () => {
      const tl = gsap.timeline({ delay: 0 });
      tl.to(fish6Ref.current, {
        x: Math.random() - 500,
        y: Math.random() * 100 - 300,
        duration: 14
      })
        .to(fish6Ref.current, {
          rotateY: 180,
          duration: 0.4
        })
        .to(fish6Ref.current, {
          x: Math.random() * 500,
          y: Math.random() * 1200 - 250,
          duration: 24
        })
        .to(fish6Ref.current, {
          rotateY: 0,
          duration: 0.2
        });
    };
    animFish6();
    const timer6 = setInterval(() => {
      animFish6();
    }, 36600);
    const animFish7 = () => {
      const tl = gsap.timeline({ delay: 0 });
      tl.to(fish7Ref.current, {
        x: Math.random() - 800,
        y: Math.random() * 900 - 450,
        duration: 22
      })
        .to(fish7Ref.current, {
          rotateY: 180,
          duration: 0.4
        })
        .to(fish7Ref.current, {
          x: Math.random() * 500,
          y: Math.random() * 900 - 250,
          duration: 12
        })
        .to(fish7Ref.current, {
          rotateY: 0,
          duration: 0.2
        });
    };
    animFish7();
    const timer7 = setInterval(() => {
      animFish7();
    }, 34600);
    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
      clearInterval(timer3);
      clearInterval(timer4);
      clearInterval(timer5);
      clearInterval(timer6);
      clearInterval(timer7);
    };
  });
  const [isShowPopupQuest, setIsShowPopupQuest] = React.useState(false);
  const [isShowPopupLogin, setIsShowPopupLogin] = React.useState(false);
  const token = useSelector(selectToken);
  const address = useSelector(selectAddress);
  const { signOut } = useTonWalletContext();
  React.useEffect(() => {
    if (token) {
      setIsShowPopupLogin(false);
      setIsShowPopupQuest(true);
      OauthRepository.getProfile().then((rs) => {
        dispatch(
          updateDiscordId({
            discord: rs.discord
          })
        );
        dispatch(
          updateTwitterId({
            twitter: rs.twitter
          })
        );
      });
    }
  }, [token]);

  const copy = () => {
    addNotification({
      message: 'Copied',
      type: NOTIFICATION_TYPE.SUCCESS,
      id: new Date().getTime()
    });
    navigator.clipboard.writeText(address || '');
  };
  return (
    <Wrapper>
      {' '}
      <img src={fish1} ref={fish1Ref} alt='' className='fish a' />
      <img src={fish2} ref={fish2Ref} alt='' className='fish b' />
      <img src={fish3} ref={fish3Ref} alt='' className='fish c' />
      <img src={fish4} ref={fish4Ref} alt='' className='fish d' />
      <img src={fish5} ref={fish5Ref} key={5} alt='' className='fish e' />
      <img src={fish6} ref={fish6Ref} key={5} alt='' className='fish f' />
      <img src={fish7} ref={fish7Ref} key={5} alt='' className='fish g' />
      <div className='bubbles-section1 left'>
        <Bubble />
      </div>
      <div className='bubbles-section1 right'>
        <Bubble />
      </div>
      {isShowPopupQuest && <PopUpQuest setVisibility={setIsShowPopupQuest} />}
      {isShowPopupLogin && (
        <Modal control={isShowPopupLogin} setControl={setIsShowPopupLogin}>
          <PopUpLogin />
        </Modal>
      )}
      <div className='top-airdrop'>
        <div className='hole'>aaaa</div>
        <span>Aquachilling Airdrop</span>
        {token ? (
          <div className='btn-sell'>
            <div
              onClick={() => {
                const ele = document.querySelector('#sign-out') as HTMLElement;
                ele && ele.classList.add('show');
              }}
              className='toogle'
            >
              <div className='btn'>
                <PrimaryButton w={160}>{token ? 'Sign out' : 'Connect wallet'}</PrimaryButton>
              </div>
              <MenuOutlined
                className='btn-mobile'
                onClick={() => {
                  const ele = document.querySelector('#sign-out') as HTMLElement;
                  ele && ele.classList.add('show');
                }}
              />
            </div>
            <div className='sign-out' id='sign-out'>
              <div
                className='overlay'
                onClick={() => {
                  const ele = document.querySelector('#sign-out') as HTMLElement;
                  ele && ele.classList.remove('show');
                }}
              ></div>
              <div className='outer-1'>
                <div className='outer-2'>
                  <div className='outer-3'>
                    <div className='outer-4'>
                      <div className='outer-5 signout'>
                        <div className='signout-content'>
                          <div>Wallet address</div>
                          <div className='value' onClick={() => copy()}>
                            <span>{formatAddressToHuman(address, 8)}</span>
                            <div className='ic' dangerouslySetInnerHTML={{ __html: copyICONSVG }}></div>
                          </div>
                          <div onClick={() => signOut()}>
                            <PrimaryButton w={160}>{'Sign out'}</PrimaryButton>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className='hole'></div>
        )}
      </div>
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

        <div
          onClick={() => {
            if (token) {
              setIsShowPopupQuest(true);
            } else {
              setIsShowPopupLogin(true);
            }
          }}
        >
          <PrimaryButton w={120}>Join now</PrimaryButton>
        </div>
      </div>
    </Wrapper>
  );
};
