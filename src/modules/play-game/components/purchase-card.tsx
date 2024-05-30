import Card1 from '@/assets/packages/cards/card1.png';
import Card2 from '@/assets/packages/cards/card2.png';
export const PurchaseCard = ({ userPack }: { userPack: any }) => {
  return (
    <div className='purchase-cards'>
      {userPack?.packs?.map((pack: any, key: number) => {
        return (
          <div className='purchase-card' key={key}>
            <div className='card-amount'>2x Package 1</div>
            <img src={Card1} alt='' />
          </div>
        );
      })}
    </div>
  );
};
