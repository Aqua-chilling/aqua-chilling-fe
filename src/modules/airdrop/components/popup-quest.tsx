import { Wrapper } from './popup-quest.styled';
import { useNotification } from '@/contexts/notification.context';
import { NOTIFICATION_TYPE } from '@/components/notification/notification';
import X from '@/assets/X.png';
import Discord from '@/assets/Discord.png';
import nft1 from '@/assets/airdrop/triden 1.jpg';
import { PrimaryButton } from '@/components/button/button.styled';
import { useNavigate } from 'react-router';
import { CloseIconSVG, CompletedIconSVG } from '../hard';
import { ENVS } from '@/config';
import React from 'react';
import { OnboardingRepository } from '@/repositories/onboarding/onboarding.repository';
import { useSelector } from 'react-redux';
import { selectDiscord, selectId, selectTwitter } from '@/redux';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

export const PopUpQuest = ({ setVisibility }: { setVisibility: (arg0: boolean) => void }) => {
  const navigate = useNavigate();
  const { addNotification } = useNotification();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isFollowed, setIsFollowed] = React.useState<boolean>(false);
  const [isRetweeted, setIsRetweeted] = React.useState<boolean>(false);
  const [isJoinedDiscord, setIsJoinedDiscord] = React.useState<boolean>(false);

  const userId = useSelector(selectId);
  const twitter = useSelector(selectTwitter);
  const discord = useSelector(selectDiscord);
  React.useEffect(() => {
    if (twitter && discord) {
      setIsLoading(true);
      OnboardingRepository.RetrieveTaskOfTwitter(twitter || ' ')
        .then((rs) => {
          setIsFollowed(rs.follows.Aquachilling);
          setIsRetweeted(rs.retweets['1752366812929605836']);
          setIsLoading(false);
        })
        .catch((err) => {
          addNotification({
            message: err,
            type: NOTIFICATION_TYPE.INFO,
            id: new Date().getTime()
          });
        });
      OnboardingRepository.RetrieveTaskOfDiscord(discord || ' ')
        .then((rs) => {
          setIsJoinedDiscord(rs.joined);
          setIsLoading(false);
        })
        .catch((err) => {
          addNotification({
            message: err,
            type: NOTIFICATION_TYPE.INFO,
            id: new Date().getTime()
          });
        });
    }
  }, []);
  console.log(twitter);
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
                    window.open(
                      `https://twitter.com/i/oauth2/authorize?response_type=code&redirect_uri=https://api-game-test.aquachilling.com/v1/auth/twitter&scope=tweet.read%20users.read%20offline.access&code_challenge=IcB6It09qpnH6Dd3nh02c5dvlARYEcExEUrvR7aWFGo&code_challenge_method=S256&state=2yV3QZAYTrWu7gcjGi2wRxfs&client_id=eEJrbnBGcHVFUU56MlN5THVJWHY6MTpjaQ`,
                      '_blank'
                    );
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
                    className='btn'
                    onClick={() => {
                      window.open('https://discord.com/channels/1186953047457398824');
                    }}
                  >
                    <img src={Discord} alt='' />
                    Join Discord {isLoading && <Spin indicator={<LoadingOutlined style={{ fontSize: 16 }} spin />} />}
                  </div>
                )}
              </div>
            </div>
            <div className='step rd'>
              <div className='label'>Step 3</div>
              <div className='btns'>
                <input type='text' placeholder='Enter invitation code' />
                <div className='btn'>Submit</div>
              </div>
              <span>Join Discord to receive your invitation code</span>
            </div>
            <div className='step completed th'>
              <div className='label'>Step 4</div>
              <div className='btns'>
                {isFollowed ? (
                  <div className='btn completed'>
                    <div className='ic' dangerouslySetInnerHTML={{ __html: CompletedIconSVG }}></div>
                    Shared a tweet
                  </div>
                ) : (
                  <div
                    className='btn'
                    onClick={() => {
                      window.open(`https://twitter.com/Aquachilling/status/1752366812929605836`, '_blank');
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
            {isFollowed && isRetweeted && isJoinedDiscord ? (
              <div
                className='btn-claim'
                onClick={() => {
                  navigate('/airdrop/detail');
                }}
              >
                <PrimaryButton w={240}>Claim your NFT</PrimaryButton>
              </div>
            ) : (
              <p>Finish all task to receive this NFT</p>
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
