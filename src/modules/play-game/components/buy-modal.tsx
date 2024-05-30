import BuyBgs from '@/assets/packages/buy-bgs.png';
import BuyModalBg from '@/assets/packages/buy-modal.png';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectToken } from '@/redux';
import { OnboardingRepository } from '@/repositories/onboarding/onboarding.repository';
import Token from '@/assets/wallet/aqua.png';
import Shell from '@/assets/shell.png';
import { useQuery } from 'react-query';

export const BuyModal = ({ setPack, setIsBuy }: { setPack: any; setIsBuy: (isBuy: boolean) => void }) => {
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

  return (
    <div className='buy-modal'>
      <div className='buy-modal-bg'>
        <img src={ModalBg} alt='' />
      </div>
      <div className='close' onClick={onClose}>
        <div dangerouslySetInnerHTML={{ __html: CloseIconSVG }}></div>
      </div>
      <img src={BuyModalBg} alt='' className='buy-background' />
      <div className='buy-content'>
        <img src={BuyBgs} alt='' className='buy-background-mb' />
        <div className='px-4 relative z-[1]'>
          <div className='buy-content'>
            <div className='font-secondary text-[#061225] font-medium text-2xl mt-8 -mb-3'>Buy $AQUA</div>

            {activeTab === 1 && (
              <>
                {packAquasMaps?.special?.map((packaqua: any, key: number) => {
                  return (
                    <div className='special-package flex items-center flex-col w-full p-4 ' key={key}>
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
                <div className='aqua-packages w-full px-2'>
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
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
