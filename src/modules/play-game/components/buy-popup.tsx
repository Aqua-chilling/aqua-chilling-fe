import { Wrapper } from './buy-popup-styled';
import Deposit from '@/assets/deposit.png';
import Withdraw from '@/assets/withdraw.png';
import Swap from '@/assets/swap.png';
import ETH from '@/assets/eth.png';
import Aqua from '@/assets/wallet/aqua.png';
import Gem from '@/assets/wallet/gem.png';
import HeaderBg from '@/assets/wallet/header-bg.png';
import CloseIcon from '@/assets/wallet/close.png';
import Copy from '@/assets/wallet/copy.png';
import React, { useMemo, useState } from 'react';
import { BuyAqua } from './buy-aqua';
import { useStateCallback } from '@/hooks/use-on-off';
import { useTonAddress, useTonWallet } from '@tonconnect/ui-react';
import { useNotification } from '@/contexts/notification.context';
import Logo from '@/assets/airdrop/logo.png';
import TabIcon from '@/assets/airdrop/tab-icon.png';
import { NOTIFICATION_TYPE } from '@/components/notification/notification';
import Back from '@/assets/airdrop/back.png';
import { Task } from './task';
import { Leaderboard } from './leaderboard';
import { Referral } from './referral';
import { createTransaction } from '../utils/create-transaction.util';
import { useBuyAqua } from '../hooks/use-buy-aqua';
import Token from '@/assets/airdrop/token.png';
import { Spin } from 'antd';
export const BuyPopup = ({ onClose, pack }: { onClose: () => void; pack: any }) => {
  const wallet = useTonWallet();
  const transaction = useMemo(() => {
    return createTransaction(wallet, pack?.packId, pack?.amount);
  }, [wallet, pack]);
  const { isLoading, handleBuyAqua } = useBuyAqua({
    transaction,
    onBuySuccess: () => {
      setStep(1);
    }
  });
  console.log('pack', pack);
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
      <div className={`buy-popup-content flex flex-col items-center`}>
        <div
          className='close'
          onClick={() => {
            onClose();
          }}
        >
          <img src={CloseIcon} alt='' />
        </div>
        <div className='font-bold text-2xl text-[#FFFFFF]'>Confirm purchase</div>
        <div className='purchase-price w-full max-w-[222px] flex items-center justify-center gap-1'>
          <div className='font-medium text-sm text-[#FFFFFF] font-secondary'>300</div>
          <img src={Token} className='w-4' alt='' />
        </div>
        <div className='secondary-font text-base font-medium text-[#FFFFFF]'>Price: 20TON</div>
        <div
          className={`purchase-btn !w-full mt-[43px] flex items-center justify-center ${
            isLoading && '!opacity-70 !cursor-default'
          }`}
          onClick={() => {
            if (isLoading) return;
            handleBuyAqua();
          }}
        >
          Purchase{' '}
          {isLoading && (
            <div className='button-spin'>
              <Spin />
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
};
