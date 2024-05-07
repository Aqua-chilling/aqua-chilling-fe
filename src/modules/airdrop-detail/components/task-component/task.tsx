import { PrimaryButton } from '@/components/button/button.styled';
import X from '@/assets/X.png';
import telegram_icon from '@/assets/telegram-icon.svg';
import nft1 from '@/assets/airdrop-detail/nft1.png';
import nft2 from '@/assets/airdrop-detail/nft2.png';
import nft3 from '@/assets/airdrop-detail/nft3.png';
import nft4 from '@/assets/airdrop-detail/nft4.png';
import { Wrapper } from './task.styled';
import { OnboardingRepository } from '@/repositories/onboarding/onboarding.repository';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectDiscord, selectReferralCode, selectTwitter } from '@/redux';
import { NOTIFICATION_TYPE } from '@/components/notification/notification';
import { useNotification } from '@/contexts/notification.context';
import { copyICONSVG } from '../referral-component/referral';
import { Modal } from '@/components/modal/modal';
import { Upgrade } from '../popups/upgrade';
import { selectTelegram } from '@/redux/telegram-id';
import { CompletedIconSVG, getTwitterOauthUrl } from '@/modules/airdrop/hard';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import WebApp from '@twa-dev/sdk';
import { useNavigate } from 'react-router';
export const Task = ({ data, profile }: any) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState(false);
  const [isJoinedTelegram, setIsJoinedTelegram] = React.useState(false);
  const [isShowPopupUpgrade, setIsShowPopupUpgrade] = React.useState(false);
  const [isFollowed, setIsFollowed] = React.useState<boolean>(false);

  const referral_code = useSelector(selectReferralCode);
  const telegram = useSelector(selectTelegram);
  const twitter = useSelector(selectTwitter);
  const { addNotification } = useNotification();
  React.useEffect(() => {
    telegram && fetchTelegramTaskStatus();
    twitter && fetchTaskTwitterStatus();
  }, [telegram, twitter]);

  const fetchTelegramTaskStatus = () => {
    setIsLoading(true);
    OnboardingRepository.RetrieveTaskOfTelegram({ telegram_id: telegram, channel_id: '1002106405894' })
      .then((rs) => {
        setIsLoading(false);
        setIsJoinedTelegram(rs?.joined);
      })
      .catch((err) => {
        setIsLoading(false);
        addNotification({
          message: err,
          type: NOTIFICATION_TYPE.INFO,
          id: new Date().getTime()
        });
      });
  };
  const fetchTaskTwitterStatus = () => {
    setIsLoading(true);
    OnboardingRepository.RetrieveTaskOfTwitter(twitter || ' ')
      .then((rs) => {
        setIsFollowed(rs.follows.Aquachilling);
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
  };
  const copy = () => {
    addNotification({
      message: 'Copied',
      type: NOTIFICATION_TYPE.SUCCESS,
      id: new Date().getTime()
    });
    navigator.clipboard.writeText(referral_code || '');
  };
  React.useEffect(() => {
    const ele = document.querySelector('#connect-telegram');
    const script = document.createElement('script');
    script.src = '';
    script.async = true;
    script.setAttribute('src', 'https://telegram.org/js/telegram-widget.js?22');
    script.setAttribute('data-telegram-login', 'aquachilling_bot');
    script.setAttribute('data-size', 'large');
    script.setAttribute('data-userpic', 'false');
    script.setAttribute('data-auth-url', 'https://api-game-test.aquachilling.com/v1/auth/telegram');
    script.setAttribute('data-request-access', 'write');

    ele?.appendChild(script);
  }, []);
  return (
    <Wrapper>
      <Modal control={isShowPopupUpgrade} setControl={setIsShowPopupUpgrade} isShowClose={false}>
        <Upgrade point={profile?.point} />
      </Modal>
      <div className='titles'>
        <span>Airdrop quests</span>
        <p>
          Your point: <div className='point'>{profile?.point}</div>
        </p>
      </div>
      <div className='table'>
        <div className='table-row'>
          <div className='quest-name'>Follow us on X</div>
          <div className='quest-point'>100 Points</div>
          <div className='quest-status'>
            {twitter ? (
              isFollowed ? (
                <div className='status-1'>
                  <div className='ic' dangerouslySetInnerHTML={{ __html: CompletedIconSVG }}></div>
                  Followed us on X
                </div>
              ) : (
                <div
                  className='status-0'
                  onClick={() => {
                    window.open(`https://twitter.com/Aquachilling`, '_blank');
                  }}
                >
                  <img src={X} alt='' />
                  Follow us on X {isLoading && <Spin indicator={<LoadingOutlined style={{ fontSize: 16 }} spin />} />}
                </div>
              )
            ) : (
              <div
                className='status-0'
                onClick={() => {
                  window.open(getTwitterOauthUrl(), '_blank', '');
                }}
              >
                Link X Account
              </div>
            )}
          </div>
        </div>
        <div className='table-row'>
          <div className='quest-name'>Join Telegram Channel</div>
          <div className='quest-point'>100 Points</div>
          <div className='quest-status'>
            {telegram ? (
              isJoinedTelegram ? (
                <div className='status-1'>Joined</div>
              ) : (
                <div
                  className='status-0'
                  onClick={() => {
                    if (!WebApp?.version) window.open('https://t.me/aquachilling');
                    else {
                      WebApp.openTelegramLink('https://t.me/aquachilling');
                    }
                  }}
                >
                  Join Telegram Channel
                </div>
              )
            ) : (
              <div className='connect-telegram' id='connect-telegram'></div>
            )}
          </div>
        </div>
        <div className='table-row'>
          <div className='quest-name'>Refer your friends</div>
          <div className='quest-point'>100 Points</div>
          <div className='quest-status'>
            <div className='status-0' onClick={() => copy()}>
              {referral_code}
              <div className='ic' dangerouslySetInnerHTML={{ __html: copyICONSVG }}></div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
