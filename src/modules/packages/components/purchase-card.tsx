import Card1 from '@/assets/packages/cards/card1.png';
import Card2 from '@/assets/packages/cards/card2.png';
export const PurchaseCard = () => {
  return (
    <div className='purchase-cards'>
      <div className='purchase-card'>
        <div className='card-amount'>2x Package 1</div>
        <img src={Card1} alt='' />
      </div>
      <div className='purchase-card'>
        <div className='card-amount'>2x Package 1</div>
        <img src={Card2} alt='' />
      </div>
      <div className='purchase-card'>
        <div className='card-amount'>2x Package 1</div>
        <img src={Card2} alt='' />
      </div>
    </div>
  );
};
