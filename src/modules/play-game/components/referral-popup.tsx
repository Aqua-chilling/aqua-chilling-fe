import { Wrapper } from './referral-popup.styled';
import Deposit from '@/assets/deposit.png';
import Withdraw from '@/assets/withdraw.png';
import Swap from '@/assets/swap.png';
import ETH from '@/assets/eth.png';
import Aqua from '@/assets/wallet/aqua.png';
import Gem from '@/assets/wallet/gem.png';
import HeaderBg from '@/assets/wallet/header-bg.png';
import CloseIcon from '@/assets/wallet/close.png';
import Copy from '@/assets/wallet/copy.png';
import React, { useState } from 'react';
import { BuyAqua } from './buy-aqua';
import { useStateCallback } from '@/hooks/use-on-off';
import { useTonAddress } from '@tonconnect/ui-react';
import { useNotification } from '@/contexts/notification.context';
import Logo from '@/assets/airdrop/logo.png';
import TabIcon from '@/assets/airdrop/tab-icon.png';
import { NOTIFICATION_TYPE } from '@/components/notification/notification';
import Back from '@/assets/airdrop/back.png';
import { Task } from './task';
import { Leaderboard } from './leaderboard';
import { Referral } from './referral';
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
                    ? `${window.location.origin}/game?ref=${userProfile?.referral_code}`
                    : '...'}
                </div>
              </div>
              <div
                className='ref-btn'
                onClick={async () => {
                  await navigator?.clipboard?.writeText(
                    `${window.location.origin}/game?ref=${userProfile?.referral_code}` || ''
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
            <div className='link-label'>Your referral code</div>
            <div className='code-value'>
              <span>{userProfile?.referral_code || ''}</span>
              <div
                className='ref-btn'
                onClick={async () => {
                  await navigator?.clipboard?.writeText(userProfile?.referral_code || '');
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
