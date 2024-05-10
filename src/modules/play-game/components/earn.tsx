import { Wrapper } from './earn.styled';
import Aqua from '@/assets/aqua.png';
import ArrowDown from '@/assets/arrow-down.png';
export const Earn = () => {
  return (
    <Wrapper>
      <div className='earn-wrapper'>
        <div>
          <div className='earn'>
            <div className='earn-top'>
              <img src={Aqua} alt='' />
              <div className=''>
                <span className='earn-top-label'>Total token balance</span>
                <div className='earn-top-value'>124,500,999</div>
              </div>
            </div>
            <div className='earn-border'></div>
            <div className='earn-top'>
              <img src={Aqua} alt='' />
              <div className=''>
                <span className='earn-top-label'>Total token balance</span>
                <div className='earn-top-value'>124,500,999</div>
              </div>
            </div>
            <div className='earn-top'>
              <div className='img-placeholder'></div>
              <div className='btn-earn'>Claim</div>
            </div>
          </div>
        </div>
      </div>
      <div className='leaderboard-wrapper'>
        <div className='leaderboard-top'>
          <div className='leaderboard-value'>History</div>
          <div className='leaderboard-filter'>
            <span>Filter by date</span>
            <img src={ArrowDown} alt='' />
          </div>
        </div>
        <div className='leaderboard-talbe'>
          <div className='table-row'>
            <div className='leaderboard-label text-left'>Transaction</div>
            <div className='leaderboard-label text-right'>Amount</div>
            <div className='leaderboard-label text-right'>Date</div>
          </div>
          <div className='table-border'></div>
          <div className='table-data'>
            {[
              {
                transaction: 'Received from Metamask',
                amount: '+ 1,000 AQUA',
                data: '4:32PM - 24/02/2024'
              },
              {
                transaction: 'Send to Binance wallet',
                amount: '+ 1,000 AQUA',
                data: '4:32PM - 24/02/2024'
              },
              {
                transaction: 'Fish sale',
                amount: '- 500 AQUA',
                data: '4:32PM - 24/02/2024'
              },
              {
                transaction: 'Claim earning balance',
                amount: '- 500 AQUA',
                data: '4:32PM - 24/02/2024'
              },
              {
                transaction: 'Received from Metamask',
                amount: '+ 1,000 AQUA',
                data: '4:32PM - 24/02/2024'
              },
              {
                transaction: 'Send to Binance wallet',
                amount: '+ 1,000 AQUA',
                data: '4:32PM - 24/02/2024'
              },
              {
                transaction: 'Fish sale',
                amount: '- 500 AQUA',
                data: '4:32PM - 24/02/2024'
              },
              {
                transaction: 'Claim earning balance',
                amount: '- 500 AQUA',
                data: '4:32PM - 24/02/2024'
              },
              {
                transaction: 'Received from Metamask',
                amount: '+ 1,000 AQUA',
                data: '4:32PM - 24/02/2024'
              },
              {
                transaction: 'Send to Binance wallet',
                amount: '+ 1,000 AQUA',
                data: '4:32PM - 24/02/2024'
              },
              {
                transaction: 'Fish sale',
                amount: '- 500 AQUA',
                data: '4:32PM - 24/02/2024'
              },
              {
                transaction: 'Claim earning balance',
                amount: '- 500 AQUA',
                data: '4:32PM - 24/02/2024'
              }
            ].map((item, key) => {
              return (
                <div className='table-row' key={key}>
                  <div className='leaderboard-value text-left'>{item.transaction}</div>
                  <div className='leaderboard-value text-right'>{item.amount}</div>
                  <div className='leaderboard-value text-right'>{item.data}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
