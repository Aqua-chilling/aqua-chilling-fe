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
        <div className='quest-content'>
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
