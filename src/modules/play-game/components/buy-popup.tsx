import { Wrapper } from './buy-popup-styled';
import CloseIcon from '@/assets/wallet/close.png';
import React, { useMemo, useState } from 'react';
import { createTransaction } from '../utils/create-transaction.util';
import { useBuyAqua } from '../hooks/use-buy-aqua';
import Token from '@/assets/wallet/aqua.png';
import Shell from '@/assets/shell.png';
import { Spin } from 'antd';
import { useTonWallet } from '@tonconnect/ui-react';
export const BuyPopup = ({ onClose, pack }: { onClose: () => void; pack: any }) => {
  const wallet = useTonWallet();
  const [amount, setAmount] = useState(1);
  const transaction = useMemo(() => {
    return createTransaction(wallet, pack?.id, amount, pack?.pack_cost_ton || 0);
  }, [wallet, pack, amount, pack]);
  const { isLoading, handleBuyAqua } = useBuyAqua({
    transaction,
    onBuySuccess: () => {
      onClose();
    }
  });

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
        <div className='purchase-price px-4 min-w-[222px] flex items-center justify-center gap-1'>
          {/* <div className='font-medium text-sm text-[#FFFFFF] font-secondary'>300</div>
          <img src={Token} className='w-4' alt='' /> */}

          {pack?.reward?.map((reward: any, key1: number) => {
            return (
              <>
                <div className='font-secondary font-medium text-sm text-[#FFFFFF]'>
                  {reward?.value} {reward?.type === 'point' ? '$AQUA' : 'SHELL'}{' '}
                </div>
                {reward?.type === 'point' ? (
                  <img className='w-4' src={Token} alt='' />
                ) : (
                  <img className='w-4' src={Shell} alt='' />
                )}
                {key1 < pack?.reward?.length - 1 && (
                  <div className='font-secondary font-medium text-sm text-[#FFFFFF]'>+</div>
                )}
              </>
            );
          })}
        </div>
        {pack?.reward?.length < 2 && (
          <div className='popup-amount mt-4 mb-1'>
            <div
              className='amount-btn'
              onClick={() => {
                if (amount <= 1) return;
                setAmount(amount - 1);
              }}
            >
              -
            </div>
            <div className='amount'>{amount}</div>
            <div
              className='amount-btn'
              onClick={() => {
                setAmount(amount + 1);
              }}
            >
              +
            </div>
          </div>
        )}
        <div className='secondary-font text-base font-medium text-[#FFFFFF]'>
          Total:{' '}
          {(amount * pack?.pack_cost_ton)?.toLocaleString(undefined, {
            minimumFractionDigits: 0,
            maximumFractionDigits: 2
          })}{' '}
          TON
        </div>
        {pack?.reward?.length === 1 && (
          <div className='secondary-font text-base font-medium text-[#FFFFFF]'>
            Recieve:{' '}
            {(amount * pack?.reward?.[0]?.value)?.toLocaleString(undefined, {
              minimumFractionDigits: 0,
              maximumFractionDigits: 2
            })}{' '}
            {pack?.reward?.[0]?.type === 'point' ? 'AQUA' : 'SHELL'}
          </div>
        )}
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