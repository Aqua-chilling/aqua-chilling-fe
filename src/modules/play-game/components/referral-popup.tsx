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
const titleList = ['Airdrop quest', 'Quest list', 'Leaderboard', 'Referrals'];
export const ReferralPopup = ({ onClose }: { onClose: () => void }) => {
  const [step, setStep] = useState(0);
  const { addNotification } = useNotification();
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
                <div className='link-value'>https://aquachilling.io/en/activity/referral/ref=aqc1234</div>
              </div>
              <div className='ref-btn'>Copy</div>
            </div>
            <div className='link-label'>Your referral link</div>
            <div className='code-value'>
              <span>XA12345</span>
              <div className='ref-btn'>Copy</div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};