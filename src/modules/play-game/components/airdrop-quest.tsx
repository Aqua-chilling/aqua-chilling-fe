import { Wrapper } from './airdrop-quest.styled';
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
const titleList = ['Airdrop quest', 'Quest list', 'Referrals'];
export const AirdropQuests = ({ onClose }: { onClose: () => void }) => {
  const [step, setStep] = useState(0);
  const { addNotification } = useNotification();
  const userAddress = useTonAddress();
  const { userProfile } = useAccountInfoContext();
  console.log('userAddress', userAddress);
  return (
    <Wrapper>
      <div
        className='overlay'
        onClick={() => {
          onClose();
          setStep(0);
        }}
      ></div>
      <div className={`airdrop-content ${step === 1 && 'bg-1'} ${(step === 2 || step === 3) && 'bg-2'}`}>
        {step !== 0 && (
          <div
            className='btn-back'
            onClick={() => {
              setStep(0);
            }}
          >
            <img src={Back} alt='' />
          </div>
        )}
        <div
          className='close'
          onClick={() => {
            onClose();
            setStep(0);
          }}
        >
          <img src={CloseIcon} alt='' />
        </div>
        <div className='airdrop-title'>{titleList[step]}</div>
        {step === 0 && (
          <div className='airdrop-tabs'>
            <div className='tabs-left'>
              <img src={Logo} alt='' />
              <div className='left-label'>You have</div>
              <div className='left-value'>
                {userProfile?.point?.toLocaleString(undefined, {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 2
                })}{' '}
                AQUA
              </div>
            </div>
            <div className='tabs-right'>
              <div
                className='tabs-tab'
                onClick={() => {
                  setStep(1);
                }}
              >
                <img src={TabIcon} alt='' />
                <div>Quest list</div>
              </div>
              <div
                className='tabs-tab'
                onClick={() => {
                  setStep(2);
                }}
              >
                <img src={TabIcon} alt='' />
                <div>Referral</div>
              </div>
            </div>
          </div>
        )}
        {step === 1 && (
          <div className='airdrop-quest'>
            <Task setStep={(step) => setStep(step)} />
          </div>
        )}
        {step === 2 && (
          <div className='airdrop-referral'>
            <Referral />
          </div>
        )}
      </div>
    </Wrapper>
  );
};
