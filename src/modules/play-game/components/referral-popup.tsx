import { Wrapper } from './referral-popup.styled';
import CloseIcon from '@/assets/wallet/close.png';
import React, { useState } from 'react';
import { useNotification } from '@/contexts/notification.context';
import { NOTIFICATION_TYPE } from '@/components/notification/notification';
import { useAccountInfoContext } from '@/contexts/account-info.context';
const titleList = ['Airdrop quest', 'Quest list', 'Leaderboard', 'Referrals'];
export const ReferralPopup = ({ onClose }: { onClose: () => void }) => {
  const [step, setStep] = useState(0);
  const { addNotification } = useNotification();
  const { userProfile } = useAccountInfoContext();
  return (
    <Wrapper>
      <div
        className='overlay'
        onClick={() => {
          onClose();
        }}
      ></div>
      <div className={`referral-popup-content`}>
        <div
          className='close'
          onClick={() => {
            onClose();
          }}
        >
          <img src={CloseIcon} alt='' />
        </div>
        <div className='ref-title'>Referrals</div>
        <div className='ref-info'>
          <div className='info-title'>Refer friends to get more points.</div>
          <div className='info-wrapper'>
            <div className='ref-link'>
              <div className='link-left'>
                <div className='link-label'>Your referral link</div>
                <div className='link-value'>
                  {!!userProfile?.referral_code
                    ? `https://t.me/aquachillingbot/aquachillingapp?startapp=${userProfile?.referral_code}`
                    : '...'}
                </div>
              </div>
              <div
                className='ref-btn'
                onClick={async () => {
                  await window?.navigator?.clipboard?.writeText(
                    `https://t.me/aquachillingbot/aquachillingapp?startapp=${userProfile?.referral_code}` || ''
                  );
                  addNotification({
                    message: 'Copied!',
                    type: NOTIFICATION_TYPE.SUCCESS,
                    id: new Date().getTime()
                  });
                }}
              >
                Copy
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
