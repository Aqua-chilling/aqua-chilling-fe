import { PrimaryButton } from '@/components/button/button.styled';
import telegram_icon from '@/assets/telegram-icon.svg';
import nft1 from '@/assets/airdrop-detail/nft1.png';
import nft2 from '@/assets/airdrop-detail/nft2.png';
import nft3 from '@/assets/airdrop-detail/nft3.png';
import nft4 from '@/assets/airdrop-detail/nft4.png';
import { Wrapper } from './task.styled';
import { OnboardingRepository } from '@/repositories/onboarding/onboarding.repository';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectDiscord, selectReferralCode } from '@/redux';
import { NOTIFICATION_TYPE } from '@/components/notification/notification';
import { useNotification } from '@/contexts/notification.context';
import { copyICONSVG } from '../referral-component/referral';
import { Modal } from '@/components/modal/modal';
import { Upgrade } from '../popups/upgrade';
import { selectTelegram } from '@/redux/telegram-id';

export const Task = ({ data, profile }: any) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isJoinedTelegram, setIsJoinedTelegram] = React.useState(false);
  const [isShowPopupUpgrade, setIsShowPopupUpgrade] = React.useState(false);

  const referral_code = useSelector(selectReferralCode);
  const telegram = useSelector(selectTelegram);
  const { addNotification } = useNotification();

  const fetchTelegramTaskStatus = () => {
    setIsLoading(true);
    OnboardingRepository.RetrieveTaskOfTelegram()
      .then((rs) => {
        setIsLoading(false);
        setIsJoinedTelegram(true);
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
    script.setAttribute('data-auth-url', 'https://api-game-test.aquachilling.com/v1/bc/link-telegram');
    script.setAttribute('data-request-access', 'write');

    ele?.appendChild(script);
  }, []);
  const generateTelegramOauthLink = () => {
    // return `https://oauth.telegram.org/auth?bot_id=7025473920&origin=https%3A%2F%2Ftest.aquachilling.com&embed=1&request_access=write&return_to=https%3A%2F%2Fapi-game-test.aquachilling.com%2Fv1%2Fbc%2Flink-telegram`;
    return `https://oauth.telegram.org/auth?bot_id=7025473920&origin=https%3A%2F%2Ftest.aquachilling.com&embed=1&request_access=write&return_to=https%3A%2F%2Ftest.aquachilling.com`;
  };
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
            <div className='status-0' onClick={() => copy()}>
              {referral_code}
              <div className='ic' dangerouslySetInnerHTML={{ __html: copyICONSVG }} onClick={() => copy()}></div>
            </div>
          </div>
        </div>
        <div className='table-row'>
          <div className='quest-name'>Join Telegram Channle</div>
          <div className='quest-point'>100 Points</div>
          <div className='quest-status'>
            {telegram ? (
              'Fdsf'
            ) : isJoinedTelegram ? (
              'joined'
            ) : (
              <div
                className='connect-telegram'
                id='connect-telegram'
                // onClick={() => window.open(generateTelegramOauthLink())}
              >
                {/* <img src={telegram_icon} alt='' /> Connect telegram */}
              </div>
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
