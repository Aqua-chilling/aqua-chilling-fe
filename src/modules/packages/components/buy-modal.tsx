import Card1 from '@/assets/packages/cards/card1.png';
import Card2 from '@/assets/packages/cards/card2.png';
import Card3 from '@/assets/packages/cards/card3.png';
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

import BuyModalBg from '@/assets/packages/buy-modal.png';
import { PackageCard } from './package-card';
import { useMemo, useState } from 'react';
export const BuyModal = () => {
  const [amount, setAmount] = useState<any>({});
  const total = useMemo(() => {
    let _total = 0;
    cards.map((card, key) => {
      _total += card.price * (amount?.[`${key}`] ?? 0);
    });
    return _total;
  }, [amount]);
  return (
    <div className='buy-modal'>
      <img src={BuyModalBg} alt='' className='buy-background' />
      <div className='buy-content'>
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
          <div className='summary-button'>Buy now</div>
        </div>
      </div>
    </div>
  );
};
