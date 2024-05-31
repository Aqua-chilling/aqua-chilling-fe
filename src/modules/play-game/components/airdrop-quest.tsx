import { Wrapper } from './airdrop-quest.styled';
import CloseIcon from '@/assets/wallet/close.png';
import React, { useEffect, useState } from 'react';
import Logo from '@/assets/airdrop/logo.png';
import TabIcon from '@/assets/airdrop/tab-icon.png';
import Back from '@/assets/airdrop/back.png';
import { Task } from './task';
import { Referral } from './referral';
import { useAccountInfoContext } from '@/contexts/account-info.context';
const titleList = ['Airdrop quest', 'Quest list', 'Referrals'];
export const AirdropQuests = ({
  onClose,
  purchaseAqua,
  typeId
}: {
  onClose: () => void;
  purchaseAqua: () => void;
  typeId: number;
}) => {
  const [step, setStep] = useState(typeId === 1 ? 1 : 0);
  const { userProfileLite } = useAccountInfoContext();
  useEffect(() => {
    if (typeId === 1) {
      setStep(1);
    }
  }, [typeId]);
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
                {userProfileLite?.point?.toLocaleString(undefined, {
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
            <Task setStep={(step) => setStep(step)} purchaseAqua={purchaseAqua} />
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
