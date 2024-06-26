import { Wrapper } from './user-wallet.styled';
import Deposit from '@/assets/deposit.png';
import Withdraw from '@/assets/withdraw.png';
import Swap from '@/assets/swap.png';
import ETH from '@/assets/eth.png';
import Aqua from '@/assets/wallet/aqua.png';
import Gem from '@/assets/shell.png';
import HeaderBg from '@/assets/wallet/header-bg.png';
import CloseIcon from '@/assets/wallet/close.png';
import Copy from '@/assets/wallet/copy.png';
import React, { useState } from 'react';
import { BuyAqua } from './buy-aqua';
import { useStateCallback } from '@/hooks/use-on-off';
import { TonConnectUI, useTonAddress, useTonConnectUI, useTonWallet } from '@tonconnect/ui-react';
import { useNotification } from '@/contexts/notification.context';
import { NOTIFICATION_TYPE } from '@/components/notification/notification';
import { useAccountInfoContext } from '@/contexts/account-info.context';
import { CopyOutlined, DisconnectOutlined } from '@ant-design/icons';
export const UserWallet = ({ onClose, purchaseAqua }: { onClose: () => void; purchaseAqua: () => void }) => {
  const [isBuy, setIsBuy] = React.useState(false);
  const [buyInfo, setBuyInfo] = useStateCallback({
    type: 0,
    step: 0
  });
  const { addNotification } = useNotification();
  const { userProfileLite } = useAccountInfoContext();
  const [tonConnectUI] = useTonConnectUI();
  const wallet = useTonWallet();
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
          purchaseAqua={purchaseAqua}
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
        <div className='wallet-info flex flex-col'>
          {!!wallet ? (
            <>
              <div className='wallet-title'>Wallet address</div>
              <div className='wallet-address !mb-2'>
                <div>{wallet?.account?.address}</div>
                <div
                  className='p-2 cursor-pointer'
                  onClick={async () => {
                    try {
                      await window.navigator.clipboard.writeText(wallet?.account?.address);
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
                >
                  {' '}
                  <img src={Copy} alt='' className='!w-5' />
                </div>
              </div>
              <div
                className='wallet-button flex items-center justify-start gap-2 cursor-pointer p-2 !mt-0 self-end mb-4'
                onClick={async () => {
                  try {
                    await tonConnectUI.disconnect();
                  } catch (err) {
                    console.log('err', err);
                    addNotification({
                      message: 'Something went wrong!',
                      type: NOTIFICATION_TYPE.ERROR,
                      id: new Date().getTime()
                    });
                  }
                }}
              >
                <DisconnectOutlined
                  style={{
                    fontSize: '16px',
                    color: 'white',
                    strokeWidth: '30', // --> higher value === more thickness the filled area
                    stroke: 'white'
                  }}
                />
                <span className='text-[white] font-semibold'>Disconnect</span>
              </div>
            </>
          ) : (
            <div
              className='wallet-button !mt-0 self-center mb-4'
              onClick={async () => {
                tonConnectUI.uiOptions = {
                  actionsConfiguration: {
                    returnStrategy: 'back',
                    twaReturnUrl: 'https://t.me/aquachillingbot/aquachillingapp?startapp=telegram_wallet_connect'
                  }
                };
                tonConnectUI.openModal();
              }}
            >
              Connect TON Wallet
            </div>
          )}
          <div className='wallet-cards'>
            <div className='wallet-card'>
              <img src={Gem} alt='' />
              <div className='wallet-subtitle'>SHELL balance</div>
              <div className='wallet-value'>
                <div>
                  {userProfileLite?.money?.toLocaleString(undefined, {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 2
                  })}
                </div>
                <span>SHELL</span>
              </div>
              <div className='w-full flex items-center justify-between gap-4'>
                {' '}
                <div className='wallet-button' onClick={purchaseAqua}>
                  Earn more SHELL
                </div>
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
                  What is SHELL?
                </div>
              </div>
            </div>
            <div className='wallet-card'>
              <img src={Aqua} alt='' />
              <div className='wallet-subtitle'>AQUA balance</div>
              <div className='wallet-value'>
                <div>
                  {' '}
                  {userProfileLite?.point?.toLocaleString(undefined, {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 2
                  })}
                </div>
                <span>AQUA</span>
              </div>
              <div className='w-full flex items-center justify-between gap-4'>
                <div className='wallet-button' onClick={purchaseAqua}>
                  Buy AQUA token
                </div>
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
      </div>
    </Wrapper>
  );
};
