import { Wrapper } from './user-wallet.styled';
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
import { NOTIFICATION_TYPE } from '@/components/notification/notification';
export const UserWallet = ({ onClose }: { onClose: () => void }) => {
  const [isBuy, setIsBuy] = React.useState(false);
  const [buyInfo, setBuyInfo] = useStateCallback({
    type: 0,
    step: 0
  });
  const { addNotification } = useNotification();
  const userAddress = useTonAddress();
  console.log('userAddress', userAddress);
  return (
    <Wrapper>
      {isBuy && (
        <BuyAqua
          onClose={() => {
            setIsBuy(false);
            setBuyInfo({
              type: 10,
              step: 10
            });
          }}
          type={buyInfo.type}
          step={buyInfo.step}
        />
      )}
      <div
        className='overlay'
        onClick={() => {
          onClose();
        }}
      ></div>
      <div className='wallet-content'>
        <div className='header-bg'>
          <img src={HeaderBg} alt='' />
        </div>
        <div
          className='close'
          onClick={() => {
            onClose();
          }}
        >
          <img src={CloseIcon} alt='' />
        </div>
        <div className='wallet-info'>
          <div className='wallet-title'>Wallet address</div>
          <div className='wallet-address'>
            <div>{userAddress}</div>
            <img
              src={Copy}
              alt=''
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(userAddress);
                  addNotification({
                    message: 'Copied',
                    type: NOTIFICATION_TYPE.SUCCESS,
                    id: new Date().getTime()
                  });
                } catch {
                  (err: any) => {
                    addNotification({
                      message: 'Something went wrong!',
                      type: NOTIFICATION_TYPE.ERROR,
                      id: new Date().getTime()
                    });
                  };
                }
              }}
            />
          </div>
          <div className='wallet-cards'>
            <div className='wallet-card'>
              <img src={Gem} alt='' />
              <div className='wallet-subtitle'>GEM balance</div>
              <div className='wallet-value'>
                <div>25,000</div>
                <span>GEM</span>
              </div>
              <div className='wallet-button'>Earn more gem</div>
              <div className='wallet-border'></div>
              <div
                className='wallet-subbutton'
                onClick={() => {
                  setBuyInfo(
                    {
                      type: 0,
                      step: 0
                    },
                    () => setIsBuy(true)
                  );
                }}
              >
                What is GEM?
              </div>
            </div>
            <div className='wallet-card'>
              <img src={Aqua} alt='' />
              <div className='wallet-subtitle'>AQUA balance</div>
              <div className='wallet-value'>
                <div>25,000</div>
                <span>GEM</span>
              </div>
              <div
                className='wallet-button'
                onClick={() => {
                  setBuyInfo(
                    {
                      type: 1,
                      step: 1
                    },
                    () => setIsBuy(true)
                  );
                }}
              >
                Buy AQUA token
              </div>
              <div className='wallet-border'></div>
              <div
                className='wallet-subbutton'
                onClick={() => {
                  setBuyInfo(
                    {
                      type: 1,
                      step: 0
                    },
                    () => setIsBuy(true)
                  );
                }}
              >
                What is AQUA Token?
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
