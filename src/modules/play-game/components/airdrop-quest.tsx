import { Wrapper } from './airdrop-quest.styled';
import CloseIcon from '@/assets/wallet/close.png';
import React, { useEffect, useState } from 'react';
import Logo from '@/assets/airdrop/logo.png';
import TabIcon from '@/assets/airdrop/tab-icon.png';
import Back from '@/assets/airdrop/back.png';
import { Task } from './task';
import { Referral } from './referral';
import { useAccountInfoContext } from '@/contexts/account-info.context';
import Aqua from '@/assets/wallet/aqua.png';
import Shell from '@/assets/airdrop/shell.png';
import WebApp from '@twa-dev/sdk';
import LeaderboardIcon from '@/assets/airdrop/lb.png';
import ReferralIcon from '@/assets/airdrop/ref.png';
import { usePlayGame } from '@/hooks/use-play-game';
import { COMMUNICATIONFUNCTION } from '@/constants/app-constaints';
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
  const { sendMessage } = usePlayGame();
  const ref = WebApp.initDataUnsafe.start_param;
  const [step, setStep] = useState(typeId === 1 ? 1 : 0);
  const { userProfileLite } = useAccountInfoContext();
  useEffect(() => {
    if (typeId === 1) {
      setStep(1);
    }
  }, [typeId]);

  useEffect(() => {
    if (ref === 'telegram_wallet_task') setStep(1);
  }, [ref]);
  return (
    <Wrapper>
      <div
        className='overlay'
        onClick={() => {
          onClose();
          setStep(0);
        }}
      ></div>
      <div
        className={`airdrop-content ${step === 0 && 'bg-0'} ${step === 1 && 'bg-1'} ${
          (step === 2 || step === 3) && 'bg-2'
        }`}
      >
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
        <div className={`airdrop-title ${step === 0 && '!mt-4'}`}>{titleList[step]}</div>
        {step === 0 && (
          <div className='airdrop-tabs !mt-[50px]'>
            {/* <div className='tabs-left'>
              <img src={Logo} alt='' />
              <div className='left-label'>You have</div>
              <div className='left-value'>
                {userProfileLite?.point?.toLocaleString(undefined, {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 2
                })}{' '}
                AQUA
              </div>
            </div> */}
            <div className='tabs-right'>
              <div
                className='tabs-tab'
                onClick={() => {
                  // onClose();
                  purchaseAqua();
                }}
              >
                <img src={Aqua} className='' alt='' />
                <div>
                  Earn $AQUA <br /> quest
                </div>
              </div>
              <div
                className='tabs-tab'
                onClick={() => {
                  onClose();
                  sendMessage(COMMUNICATIONFUNCTION.SHOW_SHELL, '');
                }}
              >
                <img src={Shell} className='' alt='' />
                <div>
                  Earn $SHELL
                  <br /> quest
                </div>
              </div>
              <div
                className='tabs-tab'
                onClick={() => {
                  setStep(1);
                }}
              >
                <img src={LeaderboardIcon} alt='' />
                <div>Quest list</div>
              </div>
              <div
                className='tabs-tab'
                onClick={() => {
                  setStep(2);
                }}
              >
                <img src={ReferralIcon} alt='' />
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
