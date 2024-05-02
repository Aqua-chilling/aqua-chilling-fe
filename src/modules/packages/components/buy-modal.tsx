import Card1 from '@/assets/packages/cards/card1.png';
import Card2 from '@/assets/packages/cards/card2.png';
import Card3 from '@/assets/packages/cards/card3.png';
import { CloseIconSVG } from '@/modules/airdrop/hard';
const cards = [
  {
    thumnail: Card1,
    title: 'Package 1',
    price: 30
  },
  {
    thumnail: Card2,
    title: 'Package 2',
    price: 40
  },
  {
    thumnail: Card3,
    title: 'Package 3',
    price: 50
  }
];

import { Spin } from 'antd';
import BuyBgs from '@/assets/packages/buy-bgs.png';
import BuyModalBg from '@/assets/packages/buy-modal.png';
import { PackageCard } from './package-card';
import { useMemo, useState } from 'react';
import { useBuyPack } from '../hooks/use-buy-pack';
import { ENVS } from '@/config';
import { CHAIN, useTonWallet } from '@tonconnect/ui-react';
import { useSelector } from 'react-redux';
import { selectToken } from '@/redux';
import { beginCell, toNano, Address } from '@ton/ton';
import { storeBuyPack } from '@/constants/app-constaints';
import { useTonWalletContext } from '@/contexts/ton-wallet.context';

export const BuyModal = () => {
  const [amount, setAmount] = useState<any>({});
  const token = useSelector(selectToken);
  const { tonConnectUI } = useTonWalletContext();
  const total = useMemo(() => {
    let _total = 0;
    cards.map((card, key) => {
      _total += card.price * (amount?.[`${key}`] ?? 0);
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
    const transactionPayload = beginCell()
      .storeUint(3850333806, 32)
      .storeUint(1, 64)
      .storeInt(2, 257)
      .storeAddress(Address.parse(wallet.account.address))
      .storeInt(3, 257)
      .endCell();

    console.log('transactionPayload', transactionPayload);
    return {
      // validUntil: Date.now()/1000 + 10000,
      // network: ENVS?.VITE_ISTESTNET ? CHAIN.TESTNET : CHAIN.MAINNET,
      // from: wallet?.account?.address || '',
      messages: [
        {
          address: ENVS.VITE_BASE_PACKAGE_TON_CONTRACT, //CONTRACT
          amount: '100000000',
          payload: transactionPayload.toBoc().toString('base64')
        }
      ]
    };
  }, [wallet]);
  const { isLoading, handleBuyPack } = useBuyPack({
    transaction
  });

  return (
    <div className='buy-modal'>
      <div className='close' onClick={() => {}}>
        <div dangerouslySetInnerHTML={{ __html: CloseIconSVG }}></div>
      </div>
      <img src={BuyModalBg} alt='' className='buy-background' />
      <div className='buy-content'>
        <img src={BuyBgs} alt='' className='buy-background-mb' />
        <div className='buy-package'>
          <div className='buy-title'>Fish packages</div>
          <div className='package-cards'>
            {cards.map((card, key) => {
              return (
                <PackageCard
                  thumnail={card.thumnail}
                  title={card.title}
                  price={card.price}
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
            {cards.map((card, key) => {
              return (
                <div className='info' key={key}>
                  <div className='info-label'>
                    {amount?.[`${key}`] ?? 0}x {card.title}
                  </div>
                  <div className='info-value'>${(amount?.[`${key}`] ?? 0) * card.price}</div>
                </div>
              );
            })}
          </div>
          <div className='summary-border'></div>
          <div className='summary-info'>
            <div className='info'>
              <div className='info-label'>Total</div>
              <div className='info-value'>${total}</div>
            </div>
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
  );
};
