import BuyBgs from '@/assets/packages/buy-bgs.png';
import BuyModalBg from '@/assets/packages/buy-modal.png';
import React, { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectToken } from '@/redux';
import { OnboardingRepository } from '@/repositories/onboarding/onboarding.repository';
import Token from '@/assets/wallet/aqua.png';
import Shell from '@/assets/shell.png';
import { useQuery } from 'react-query';
import CloseIcon from '@/assets/wallet/close.png';
import SpecialMark from '@/assets/airdrop/special-mark.png';
import useLocalStorage from 'use-local-storage';
import { useNotification } from '@/contexts/notification.context';
import { NOTIFICATION_TYPE } from '@/components/notification/notification';

export const BuyModal = ({
  setPack,
  setIsBuy,
  onClose
}: {
  setPack: any;
  setIsBuy: (isBuy: boolean) => void;
  onClose: () => void;
}) => {
  const { addNotification } = useNotification();
  const activeTab = 1;
  const token = useSelector(selectToken);
  const [packAquasMaps, setPackAquasMaps] = useState<any>(undefined);
  const { data: packAquas, refetch } = useQuery({
    queryKey: ['retrieveAquaPackage', token],
    queryFn: () => OnboardingRepository.RetrieveAquaPackages(),
    retry: false,
    enabled: !!token,
    refetchInterval: 10000
  });

  useEffect(() => {
    let _specialPack: any = [];
    let _normalPack: any = [];
    packAquas?.map((pack: any) => {
      if (pack?.reward?.length > 1) {
        _specialPack.push(pack);
      } else {
        _normalPack.push(pack);
      }
    });
    const _packAquaMap = {
      special: _specialPack,
      normal: _normalPack
    };
    setPackAquasMaps(_packAquaMap);
  }, [packAquas]);
  const { data: now } = useQuery({
    queryKey: ['getNow'],
    queryFn: () => {
      const _now = new Date()?.getTime();
      return _now;
    },
    retry: false,
    refetchInterval: 10000
  });

  const [isBuySpecial] = useLocalStorage('is-buy-special', 0);
  const checkBuySpecial = useMemo(() => {
    return (now || 0) - isBuySpecial < 1000 * 60 * 5;
  }, [now, isBuySpecial]);

  return (
    <>
      <div className='buy-modal'>
        <img src={BuyModalBg} alt='' className='buy-background' />
        <img src={BuyBgs} alt='' className='buy-background-mb' />
        <div
          className='close-buy-aqua'
          onClick={() => {
            onClose();
          }}
        >
          <img src={CloseIcon} alt='' />
        </div>
        <div className='px-4 relative z-[1]'>
          <div className='buy-content'>
            <div className='font-secondary text-[#061225] font-medium text-2xl mt-8 -mb-3'>Buy $AQUA</div>

            {activeTab === 1 && (
              <div className='buy-package-two'>
                {packAquasMaps?.special?.map((packaqua: any, key: number) => {
                  return (
                    <div className='special-package flex items-center flex-col w-full p-4 relative z-[2] ' key={key}>
                      {checkBuySpecial && (
                        <div
                          className='absolute w-full z-[5] h-full bg-[#bebebebe] cursor-pointer top-0 left-0 rounded-2xl'
                          onClick={() => {
                            addNotification({
                              message: `You've purchased this package... Please wait server minting!`,
                              type: NOTIFICATION_TYPE.INFO,
                              id: new Date().getTime()
                            });
                          }}
                        ></div>
                      )}
                      <img
                        src={SpecialMark}
                        className={`w-[15%] min-w-[80px] absolute right-0 top-0 -translate-y-1/2 ${
                          checkBuySpecial && 'opacity-50'
                        }`}
                        alt=''
                      />
                      <div className='font-secondary font-medium text-2xl text-[#FFFFFF] mb-2'>Starting package</div>
                      <div className='special-card flex items-center gap-1 px-2 py-[10px]'>
                        {packaqua?.reward?.map((reward: any, key1: number) => {
                          return (
                            <>
                              <div className='font-secondary font-medium text-sm text-[#FFFFFF]'>
                                {reward?.value} {reward?.type === 'point' ? '$AQUA' : 'SHELL'}{' '}
                              </div>
                              {reward?.type === 'point' ? (
                                <img className='w-6' src={Token} alt='' />
                              ) : (
                                <img className='w-6' src={Shell} alt='' />
                              )}
                              {key1 < packaqua?.reward?.length - 1 && (
                                <div className='font-secondary font-medium text-sm text-[#FFFFFF]'>+</div>
                              )}
                            </>
                          );
                        })}
                      </div>
                      <div className='font-secondary font-normal text-xs mt-1 text-[#FFFFFF] opacity-70'>
                        Each user can only buy once
                      </div>
                      <div className='w-full flex items-center justify-between mt-[10px]'>
                        <div className='font-secondary font-medium text-base text-[#FFFFFF]'>
                          Price: {packaqua?.pack_cost_ton} TON
                        </div>
                        <div
                          className='buy-btn'
                          onClick={() => {
                            setPack(packaqua, setIsBuy(true));
                          }}
                        >
                          Buy
                        </div>
                      </div>
                    </div>
                  );
                })}
                <div className='aqua-packages w-full px-2 relative z-[2] mt-6'>
                  {packAquasMaps?.normal?.map((packAqua: any, key: number) => {
                    return (
                      <div className='aqua-package w-full px-2 py-[10px] flex flex-col items-center gap-4' key={key}>
                        <div className='aqua-info w-full flex items-center justify-center gap-1'>
                          <div className='font-medium text-sm text-[#FFFFFF] font-secondary'>
                            {packAqua?.reward?.[0]?.value}
                          </div>
                          {packAqua?.reward?.[0]?.type === 'point' ? (
                            <img className='w-6' src={Token} alt='' />
                          ) : (
                            <img className='w-6' src={Shell} alt='' />
                          )}
                        </div>
                        <div className='font-secondary font-medium text-base text-[#FFFFFF]'>
                          Price: {packAqua?.pack_cost_ton} TON
                        </div>
                        <div
                          className='buy-btn'
                          onClick={() => {
                            setPack(packAqua, setIsBuy(true));
                          }}
                        >
                          Buy
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
