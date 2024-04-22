import Card1 from '@/assets/packages/cards/card1.png';
import Card2 from '@/assets/packages/cards/card2.png';
import Card3 from '@/assets/packages/cards/card3.png';
import CardDefault from '@/assets/packages/cards/card3.png';
const cards = [Card1, Card2, Card3];

import { Spin } from 'antd';
import BuyBgs from '@/assets/packages/buy-bgs.png';
import BuyModalBg from '@/assets/packages/buy-modal.png';
import { PackageCard } from './package-card';
import React, { useMemo, useState } from 'react';
import { useBuyPack } from '../hooks/use-buy-pack';
import { ENVS } from '@/config';
import { CHAIN, useTonWallet } from '@tonconnect/ui-react';
import { useSelector } from 'react-redux';
import { selectToken } from '@/redux';
import { useLoginWithTon } from '@/hooks/use-login-with-ton';
import { beginCell, toNano, Address } from '@ton/ton';
import { storeBuyPack } from '@/constants/app-constaints';
import { OnboardingRepository } from '@/repositories/onboarding/onboarding.repository';

export const BuyModal = () => {
  const [amount, setAmount] = useState<any>({});
  const token = useSelector(selectToken);
  const { tonConnectUI } = useLoginWithTon();
  const [packList, setPackList] = React.useState<any[]>();
  const total = useMemo(() => {
    let _total = 0;
    if (!packList) return 0;
    packList?.map((card, key) => {
      _total += card.pack_cost * (amount?.[`${key}`] ?? 0);
    });
    return _total;
  }, [amount]);
  const wallet = useTonWallet();
  console.log('wallet', wallet);
  console.log('ENV', ENVS.VITE_BASE_PACKAGE_TON_CONTRACT);
  const transaction = useMemo(() => {
    if (!wallet?.account) {
      return {
        validUntil: Date.now() / 1000 + 10000,
        network: ENVS?.VITE_ISTESTNET ? CHAIN.TESTNET : CHAIN.MAINNET,
        from: wallet?.account?.address || '',
        messages: {
          address: ENVS.VITE_BASE_PACKAGE_TON_CONTRACT, //CONTRACT
          amount: 0.1
        }
      };
    }
    if (!packList) return undefined;
    let messages = [];
    for (let i = 0; i < (packList?.length || 0); i++) {
      if (amount?.[`${i}`] && amount?.[`${i}`] !== 0) {
        console.log(packList[i]?.set, amount?.[`${i}`]);
        let transactionPayload = beginCell()
          .storeUint(3850333806, 32)
          .storeUint(1, 64)
          .storeInt(packList[i]?.set, 257)
          .storeAddress(Address.parse(wallet.account.address))
          .storeInt(amount?.[`${i}`], 257)
          .endCell();
        messages.push({
          address: ENVS.VITE_BASE_PACKAGE_TON_CONTRACT, //CONTRACT
          amount: '100000000',
          payload: transactionPayload.toBoc().toString('base64')
        });
      }
    }
    return {
      // validUntil: Date.now()/1000 + 10000,
      // network: ENVS?.VITE_ISTESTNET ? CHAIN.TESTNET : CHAIN.MAINNET,
      // from: wallet?.account?.address || '',
      messages: messages
    };
  }, [wallet, packList, amount]);
  const { isLoading, handleBuyPack } = useBuyPack({
    transaction
  });

  React.useEffect(() => {
    console.log('eefec');
    OnboardingRepository.RetrieveAllPackages()
      .then((rs) => {
        console.log(rs, 're');
        setPackList(rs);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [token]);

  console.log('packl', packList);

  return (
    <div className='buy-modal'>
      <img src={BuyModalBg} alt='' className='buy-background' />
      <div className='buy-content'>
        <img src={BuyBgs} alt='' className='buy-background-mb' />
        <div className='buy-package'>
          <div className='buy-title'>Fish packages</div>
          <div className='package-cards'>
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
          {/* <div className='buy-title'>Total</div>
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
          </div> */}
          <div className='summary-info-3'>
            <div className='summary-info-2'>
              <div className='summary-info-1'>
                <div className='summary-info-0'>
                  <div className='summary-info'>
                    <div className='info'>
                      <div className='info-label'>Total:</div>
                      <div className='info-value'>${total}</div>
                    </div>
                    <div
                      className={`summary-button ${isLoading && 'summary-loading'}`}
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
