import { Wrapper } from './leaderboard.styled';

export const Leaderboard = ({ data }: any) => {
  console.log('fdfss', data);
  return (
    <Wrapper>
      <div className='title'>Leaderboard</div>
      <div className='subtitle'>
        Every user will be airdropped based on their earned points share on the total points accumulated by all users
      </div>
      <div className='table'>
        <div className='table-head'>
          <div className='rank'>Rank</div>
          <div className='address'>Address</div>
          <div className='point'>Referral point</div>
          <div className='total-point'>Total point</div>
        </div>
        {data ? (
          data?.map((item: any, key: number) => {
            return (
              <div className='table-row' key={key}>
                <div className='rank'>{item?.rank}</div>
                <div className='address'>{item?.address}</div>
                <div className='point'>{item?.referral_point}</div>
                <div className='total-point'>{item?.point}</div>
              </div>
            );
          })
        ) : (
          <div className='table-row'>
            <div className='address'>No data</div>
          </div>
        )}
      </div>
    </Wrapper>
  );
};
