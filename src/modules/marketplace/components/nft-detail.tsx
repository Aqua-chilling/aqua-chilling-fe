import { useNotification } from '@/contexts/notification.context';
import { Wrapper } from './nft-detail.styled';
import { NOTIFICATION_TYPE } from '@/components/notification/notification';

export const NftDetail = () => {
  const { addNotification } = useNotification();
  const onPurchase = () => {
    addNotification({ message: 'Purchase successfully', id: new Date().getTime(), type: NOTIFICATION_TYPE.SUCCESS });
  };
  return (
    <Wrapper>
      <div className='nft-info'>
        <div className='left'>
          <img src={new URL(`/src/assets/home/section4/card${1}.png`, import.meta.url).href} alt='' />
        </div>
        <div className='right'>
          <div className='rarity'>Epic</div>
          <div className='name'>Bluefin Travelly with long name goes here</div>
          <div className='name'>Set: Pacific salt water</div>
          <div className='line'></div>
          <div className='exp'>EXP: 1,245</div>
          <div className='price'>
            <div className='per-day'>150XP - $99.00/day</div>
            <div className='value'>
              Price
              <div className='val'>$1,200.00</div>
            </div>
          </div>
        </div>
      </div>
      <div className='nft-trade-history'>
        <div className='table'>
          <div className='table-head'>
            <div className='event'>Event</div>
            <div className='price'>Price</div>
            <div className='from'>From</div>
            <div className='to'>To</div>
            <div className='time'>Time</div>
          </div>
          <div className='table-row'>
            <div className='event'>Listing</div>
            <div className='price'>1,204</div>
            <div className='from'>0x834...c3841</div>
            <div className='to'>0xb6...dfb3 </div>
            <div className='time'>1 hour ago</div>
          </div>
          <div className='table-row'>
            <div className='event'>Listing</div>
            <div className='price'>1,204</div>
            <div className='from'>0x834...c3841</div>
            <div className='to'>0xb6...dfb3 </div>
            <div className='time'>1 hour ago</div>
          </div>
          <div className='table-row'>
            <div className='event'>Listing</div>
            <div className='price'>1,204</div>
            <div className='from'>0x834...c3841</div>
            <div className='to'>0xb6...dfb3 </div>
            <div className='time'>1 hour ago</div>
          </div>
          <div className='table-row'>
            <div className='event'>Listing</div>
            <div className='price'>1,204</div>
            <div className='from'>0x834...c3841</div>
            <div className='to'>0xb6...dfb3 </div>
            <div className='time'>1 hour ago</div>
          </div>
        </div>
      </div>
      <div className='line'></div>
      <div className='nft-actions'>
        <div className='left'>
          <span>Current own by</span>
          <div>taindthuhai</div>
        </div>
        <div className='right'>
          <div className='btn-purchase' onClick={() => onPurchase()}>
            Purchase
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
