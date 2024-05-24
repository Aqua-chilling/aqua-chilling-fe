import Card1 from '@/assets/packages/cards/card1.png';
import Card2 from '@/assets/packages/cards/card2.png';
import Card3 from '@/assets/packages/cards/card3.png';
import CardDefault from '@/assets/packages/cards/card3.png';
import { CloseIconSVG } from '@/modules/airdrop/hard';
const cards = [Card1, Card2, Card3];

import { Spin } from 'antd';
import BuyBgs from '@/assets/packages/buy-bgs.png';
import BuyModalBg from '@/assets/packages/buy-modal.png';
import { PackageCard } from './package-card';
import React, { useEffect, useMemo, useState } from 'react';
import { useBuyPack } from '../hooks/use-buy-pack';
import { ENVS } from '@/config';
import { CHAIN, useTonWallet } from '@tonconnect/ui-react';
import { useSelector } from 'react-redux';
import { selectToken } from '@/redux';
import { beginCell, toNano, Address } from '@ton/ton';
import { storeBuyPack } from '@/constants/app-constaints';
import { OnboardingRepository } from '@/repositories/onboarding/onboarding.repository';
import { useTonWalletContext } from '@/contexts/ton-wallet.context';
import ModalBg from '@/assets/packages/buy-modal-bg.png';
import Token from '@/assets/aqua.png';
import { useAccountInfoContext } from '@/contexts/account-info.context';
import Shell from '@/assets/shell.png';
import { createTransaction } from '../utils/create-transaction.util';
import { useStateCallback } from '@/hooks/use-on-off';
import { BuyPopup } from './buy-popup';
import { useQuery } from 'react-query';
import { OauthRepository } from '@/repositories/oauth/oauth.repository';

export const BuyModal = ({
  onClose,
  onBuySuccess,
  setPack,
  setIsBuy
}: {
  onClose: () => void;
  onBuySuccess: () => void;
  setPack: any;
  setIsBuy: (isBuy: boolean) => void;
}) => {
  const [activeTab, setActiveTab] = useState(1);
  const [amount, setAmount] = useState<any>({});
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
  console.log('aquia', packAquasMaps);
  const { userProfile } = useAccountInfoContext();
  const { tonConnectUI } = useTonWalletContext();
  // const [packList, setPackList] = React.useState<any[]>();

  // const total = useMemo(() => {
  //   let _total = 0;
  //   if (!packList) return 0;
  //   packList?.map((card, key) => {
  //     _total += card.pack_cost * (amount?.[`${key}`] ?? 0);
  //   });
  //   return _total;
  // }, [amount]);
  const wallet = useTonWallet();
  console.log('wallet', wallet);
  console.log('ENV', ENVS.VITE_BASE_PACKAGE_TON_CONTRACT);

  // const transaction = useMemo(() => {
  //   if (!wallet?.account) {
  //     return {
  //       validUntil: Date.now() / 1000 + 10000,
  //       network: ENVS?.VITE_ISTESTNET ? CHAIN.TESTNET : CHAIN.MAINNET,
  //       from: wallet?.account?.address || '',
  //       messages: {
  //         address: ENVS.VITE_BASE_PACKAGE_TON_CONTRACT, //CONTRACT
  //         amount: 0.1
  //       }
  //     };
  //   }
  //   if (!packList) return undefined;
  //   let messages = [];
  //   for (let i = 0; i < (packList?.length || 0); i++) {
  //     if (amount?.[`${i}`] && amount?.[`${i}`] !== 0) {
  //       console.log(packList[i]?.set, amount?.[`${i}`]);
  //       let transactionPayload = beginCell()
  //         .storeUint(3850333806, 32)
  //         .storeUint(1, 64)
  //         .storeInt(packList[i]?.set, 257)
  //         .storeAddress(Address.parse(wallet.account.address))
  //         .storeInt(amount?.[`${i}`], 257)
  //         .endCell();
  //       console.log('transactionPayload', transactionPayload);
  //       messages.push({
  //         address: ENVS.VITE_BASE_PACKAGE_TON_CONTRACT, //CONTRACT
  //         amount: '100000000',
  //         payload: transactionPayload.toBoc().toString('base64')
  //       });
  //     }
  //   }
  //   return {
  //     validUntil: Math.floor(Date.now() / 1000) + 60,
  //     // network: ENVS?.VITE_ISTESTNET ? CHAIN.TESTNET : CHAIN.MAINNET,
  //     // from: wallet?.account?.address || '',
  //     messages: messages
  //   };
  // }, [wallet, packList, amount]);
  // const { isLoading, handleBuyPack } = useBuyPack({
  //   transaction,
  //   onBuySuccess
  // });

  // React.useEffect(() => {
  //   console.log('eefec');
  //   OnboardingRepository.RetrieveAllPackages()
  //     .then((rs) => {
  //       console.log(rs, 're');
  //       setPackList(rs);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [token]);
  return (
    <>
      <div className='buy-modal'>
        <img src={BuyModalBg} alt='' className='buy-background' />
        <img src={BuyBgs} alt='' className='buy-background-mb' />
        <div className='px-4 relative z-[1]'>
          <div className='buy-content'>
            {/* <div className='buy-tabs w-full flex items-center gap-[6px] mt-8'>
            <div
              className={`bg-[#285CC4] border-[2px] border-[#143464] flex-1 flex items-center justify-center h-8 rounded-[8px] font-secondary font-medium text-sm text-[#FFFFFF] cursor-pointer ${
                activeTab !== 0 && '!bg-transparent  !text-[#061225]'
              }`}
              onClick={() => {
                setActiveTab(0);
              }}
            >
              Fish Packages
            </div>
            <div
              className={`bg-[#285CC4] border-[2px] border-[#143464] flex-1 flex items-center justify-center h-8 rounded-[8px] font-secondary font-medium text-sm text-[#FFFFFF] cursor-pointer ${
                activeTab !== 1 && '!bg-transparent  !text-[#061225]'
              }`}
              onClick={() => {
                setActiveTab(1);
              }}
            >
              $AQUA package
            </div>
          </div> */}
            <div className='font-secondary text-[#061225] font-medium text-2xl mt-8 -mb-3'>Buy $AQUA</div>
            {/* {activeTab === 0 && (
              <>
                <div className='buy-package'>
                  <div className='package-balance flex items-center w-full gap-2 justify-center -mt-2'>
                    <div className='flex items-center gap-3 balance-card '>
                      <img src={Token} className='w-5' alt='' />
                      <div className='flex flex-col items-center '>
                        <div className='font-medium text-[8px] text-[#FFFFFF] font-secondary'>Your $AQUA</div>
                        <div className='font-semibold text-[10px] text-[#FFFFFF] font-secondary'>
                          {userProfile?.point?.toLocaleString(undefined, {
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 2
                          })}
                        </div>
                      </div>
                    </div>
                    <div className='flex items-center gap-3 balance-card'>
                      <img src={Shell} className='w-5' alt='' />
                      <div className='flex flex-col items-center '>
                        <div className='font-medium text-[8px] text-[#FFFFFF] font-secondary'>Your Shell</div>
                        <div className='font-semibold text-[10px] text-[#FFFFFF] font-secondary'>9,000</div>
                      </div>
                    </div>
                  </div>
                  <div className='package-cards px-2'>
                    {packList?.map((card, key) => {
                      return (
                        <PackageCard
                          thumnail={cards[key] ? cards[key] : CardDefault}
                          title={card.name}
                          price={card.pack_cost}
                          amount={amount?.[`${key}`] ?? 0}
                          setAmount={(amoun) => {
                            const _amount = { ...amount };
                            _amount[`${key}`] = amoun;
                            setAmount(_amount);
                          }}
                          key={key}
                        />
                      );
                    })}
                  </div>
                </div>
                <div className='buy-summary'>
                  <div className='buy-title'>Total</div>
          <div className='summary-info'>
            {packList?.map((card, key) => {
              return (
                <div className='info' key={key}>
                  <div className='info-label'>
                    {amount?.[`${key}`] ?? 0}x {card.name}
                  </div>
                  <div className='info-value'>${(amount?.[`${key}`] ?? 0) * card.pack_cost}</div>
                </div>
              );
            })}
          </div>
                  <div className='info w-full flex items-center justify-between'>
                    <div className='info-label'>Total:</div>
                    <div className='info-value'>${total}</div>
                  </div>
                  <div
                  className={`summary-button w-full ${isLoading && 'summary-loading'}`}
                  onClick={() => {
                    !token ? tonConnectUI.openModal() : handleBuyPack();
                  }}
                >
                  {!token ? 'Connect TON' : isLoading ? <span>Buying</span> : 'Buy now'}
                  {isLoading && (
                    <div className='button-spin'>
                      <Spin />
                    </div>
                  )}
                </div>
                </div>
              </>
            )} */}
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
    </>
  );
};
