import { Wrapper } from './popup-quest.styled';
import { useNotification } from '@/contexts/notification.context';
import { NOTIFICATION_TYPE } from '@/components/notification/notification';
import X from '@/assets/X.png';
import Discord from '@/assets/Discord.png';
import nft1 from '@/assets/airdrop/triden 1.jpg';
import { PrimaryButton } from '@/components/button/button.styled';
import { useLocation, useNavigate } from 'react-router';
import { CloseIconSVG, CompletedIconSVG, getDiscordOauthUrl, getTwitterOauthUrl } from '../hard';
import { ENVS } from '@/config';
import React from 'react';
import { OnboardingRepository } from '@/repositories/onboarding/onboarding.repository';
import { useSelector } from 'react-redux';
import { selectDiscord, selectId, selectTwitter } from '@/redux';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { selectReferralCode, selectReferralCodeStatus, updateReferral } from '@/redux/referral';
import { OauthRepository } from '@/repositories/oauth/oauth.repository';
import { dispatch } from '@/app/store';

export const PopUpQuest = ({ setVisibility }: { setVisibility: (arg0: boolean) => void }) => {
  const navigate = useNavigate();
  const { addNotification } = useNotification();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const ref = searchParams.get('ref');
  React.useEffect(() => {
    if (ref) {
      OauthRepository.enterReferralCode(ref).then((rs) => {
        dispatch(
          updateReferral({
            referral_code: ref,
            refreferral_code_status: rs.referral_code_status ?? 1
          })
        );
      });
    }
  }, [ref]);

  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isFollowed, setIsFollowed] = React.useState<boolean>(false);
  const [isRetweeted, setIsRetweeted] = React.useState<boolean>(false);
  const [isJoinedDiscord, setIsJoinedDiscord] = React.useState<boolean>(false);
  const [inputReferralCode, setInputReferralCode] = React.useState<string>('');

  const twitter = useSelector(selectTwitter);
  const discord = useSelector(selectDiscord);
  const referral_code_status = useSelector(selectReferralCodeStatus);
  const referral_code = useSelector(selectReferralCode);

  React.useEffect(() => {
    if (twitter) {
      setIsLoading(true);
      OnboardingRepository.RetrieveTaskOfTwitter(twitter || ' ')
        .then((rs) => {
          setIsFollowed(rs.follows.Aquachilling);
          setIsRetweeted(rs.retweets['1772973413365141606']);
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
          addNotification({
            message: err,
            type: NOTIFICATION_TYPE.INFO,
            id: new Date().getTime()
          });
        });
    }
    if (discord) {
      setIsLoading(true);
      OnboardingRepository.RetrieveTaskOfDiscord(discord || ' ')
        .then((rs) => {
          setIsJoinedDiscord(rs.joined);
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
          addNotification({
            message: err,
            type: NOTIFICATION_TYPE.INFO,
            id: new Date().getTime()
          });
        });
    }
  }, [twitter, discord]);

  React.useEffect(() => {
    const ele = document.querySelector('#quest-content');
    const script = document.createElement('script');
    script.src = '';
    script.async = true;
    script.setAttribute('src', 'https://telegram.org/js/telegram-widget.js?22');
    script.setAttribute('data-telegram-login', 'aquachilling_bot');
    script.setAttribute('data-size', 'large');
    script.setAttribute('data-userpic', 'false');
    script.setAttribute('data-auth-url', 'https://test.aquachilling.com/oauth/telegram/success');
    script.setAttribute('data-request-access', 'write');

    ele?.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Wrapper>
      <div
        className='overlay'
        onClick={() => {
          setVisibility(false);
        }}
      ></div>
      <div className='popup-quest'>
        <div
          className='close'
          onClick={() => {
            setVisibility(false);
          }}
        >
          <div dangerouslySetInnerHTML={{ __html: CloseIconSVG }}></div>
        </div>
        <div className='quest-content' id='quest-content'>
          <div className='steps'>
            <div className='title'>Claim your first Aquachilling NFT now</div>
            <div className='step st'>
              <div className='label'>Step 1</div>
              <div className='btns'>
                {isFollowed ? (
                  <div className='btn completed'>
                    <div className='ic' dangerouslySetInnerHTML={{ __html: CompletedIconSVG }}></div>
                    Followed us on X
                  </div>
                ) : (
                  <div
                    className={twitter ? 'btn' : 'btn disabled'}
                    onClick={() => {
                      window.open(`https://twitter.com/Aquachilling`, '_blank');
                    }}
                  >
                    <img src={X} alt='' />
                    Follow us on X {isLoading && <Spin indicator={<LoadingOutlined style={{ fontSize: 16 }} spin />} />}
                  </div>
                )}
              </div>
              {!twitter && (
                <div
                  className='tooltip'
                  onClick={() => {
                    window.open(getTwitterOauthUrl(), '_blank');
                  }}
                >
                  <span>Link your X account </span>first for complete this task
                </div>
              )}
            </div>
            <div className='step nd'>
              <div className='label'>Step 2</div>
              <div className='btns'>
                {isJoinedDiscord ? (
                  <div className='btn completed'>
                    <div className='ic' dangerouslySetInnerHTML={{ __html: CompletedIconSVG }}></div>
                    Joined Discord
                  </div>
                ) : (
                  <div
                    className={discord ? 'btn' : 'btn disabled'}
                    onClick={() => {
                      window.open('https://discord.gg/fhNSPtEpzg');
                    }}
                  >
                    <img src={Discord} alt='' />
                    Join Discord {isLoading && <Spin indicator={<LoadingOutlined style={{ fontSize: 16 }} spin />} />}
                  </div>
                )}
              </div>
              {!discord && (
                <div
                  className='tooltip'
                  onClick={() => {
                    window.open(getDiscordOauthUrl(), '_blank');
                  }}
                >
                  <span>Link your Discord account </span>first for complete this task
                </div>
              )}
            </div>
            <div className='step rd'>
              <div className='label'>Step 3</div>
              <div className='btns'>
                {!ref ? (
                  referral_code_status === 1 && referral_code ? (
                    <div className='btn completed'>Invitation code: {referral_code ?? '...'}</div>
                  ) : (
                    <>
                      <input
                        type='text'
                        placeholder='Enter invitation code'
                        onChange={(e) => {
                          setInputReferralCode(e.target.value);
                        }}
                      />
                      <div
                        className='btn'
                        onClick={() => {
                          if (!inputReferralCode) {
                            addNotification({
                              message: 'Please enter referral code',
                              type: NOTIFICATION_TYPE.ERROR,
                              id: new Date().getTime()
                            });
                            return;
                          }
                          OauthRepository.enterReferralCode(inputReferralCode).then((rs) => {
                            dispatch(
                              updateReferral({
                                referral_code: inputReferralCode,
                                refreferral_code_status: rs.referral_code_status ?? 1
                              })
                            );
                          });
                        }}
                      >
                        Submit
                      </div>
                    </>
                  )
                ) : (
                  <div className='btn completed'>Invitation code: {ref ?? '...'}</div>
                )}
              </div>
              {!referral_code && !referral_code_status && <span>Join Discord to receive your invitation code</span>}
            </div>
            <div className='step completed th'>
              <div className='label'>Step 4</div>
              <div className='btns'>
                {isRetweeted ? (
                  <div className='btn completed'>
                    <div className='ic' dangerouslySetInnerHTML={{ __html: CompletedIconSVG }}></div>
                    Shared a tweet
                  </div>
                ) : (
                  <div
                    className={twitter ? 'btn' : 'btn disabled'}
                    onClick={() => {
                      window.open(`https://twitter.com/Aquachilling/status/1772973413365141606`, '_blank');
                    }}
                  >
                    Share a tweet {isLoading && <Spin indicator={<LoadingOutlined style={{ fontSize: 16 }} spin />} />}
                  </div>
                )}
              </div>
            </div>

            <div
              className='btn-refresh'
              onClick={() => {
                if (twitter) {
                  setIsLoading(true);
                  OnboardingRepository.RetrieveTaskOfTwitter(twitter || ' ')
                    .then((rs) => {
                      setIsFollowed(rs.follows.Aquachilling);
                      setIsRetweeted(rs.retweets['1772973413365141606']);
                      setIsLoading(false);
                    })
                    .catch((err) => {
                      setIsLoading(false);
                      addNotification({
                        message: err,
                        type: NOTIFICATION_TYPE.INFO,
                        id: new Date().getTime()
                      });
                    });
                }
                if (discord) {
                  setIsLoading(true);
                  OnboardingRepository.RetrieveTaskOfDiscord(discord || ' ')
                    .then((rs) => {
                      setIsJoinedDiscord(rs.joined);
                      setIsLoading(false);
                    })
                    .catch((err) => {
                      setIsLoading(false);
                      addNotification({
                        message: err,
                        type: NOTIFICATION_TYPE.INFO,
                        id: new Date().getTime()
                      });
                    });
                }
              }}
            >
              <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'>
                <g clip-path='url(#clip0_2169_29226)'>
                  <path
                    d='M2.34041 5.99921C2.67859 5.04355 3.25335 4.18912 4.01105 3.51567C4.76876 2.84221 5.68471 2.37167 6.67346 2.14796C7.6622 1.92424 8.6915 1.95464 9.66532 2.23632C10.6391 2.518 11.5257 3.04177 12.2424 3.75877L15.3363 6.66601M0.666748 9.3332L3.76069 12.2404C4.47733 12.9574 5.36392 13.4812 6.33774 13.7629C7.31156 14.0446 8.34086 14.075 9.3296 13.8513C10.3183 13.6275 11.2343 13.157 11.992 12.4835C12.7497 11.8101 13.3245 10.9557 13.6626 10'
                    stroke='#F2DE29'
                    stroke-width='1.3336'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M15.3362 2.66797V6.66797H11.3354'
                    stroke='#F2DE29'
                    stroke-width='1.3336'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M0.666748 13.334V9.33398H4.66754'
                    stroke='#F2DE29'
                    stroke-width='1.3336'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_2169_29226'>
                    <rect width='16.0032' height='16' fill='white' />
                  </clipPath>
                </defs>
              </svg>
              <span>Get latest task status</span>
            </div>
          </div>
          <div className='nft'>
            <div className='title'>Claim your first Aquachilling NFT now</div>
            <div className='nft-img'>
              {/* <img src={new URL(`/src/assets/home/section4/card${1}.png`, import.meta.url).href} alt='' /> */}
              <img src={nft1} alt='' />
              <span>Trident Lv.1 </span>
            </div>
            {isFollowed && isRetweeted && isJoinedDiscord && referral_code && referral_code_status ? (
              <div
                className='btn-claim'
                onClick={() => {
                  navigate('/airdrop/detail');
                }}
              >
                <PrimaryButton w={240}>Claim your NFT</PrimaryButton>
              </div>
            ) : (
              <span className='finish'>Finish all task to receive this NFT</span>
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
