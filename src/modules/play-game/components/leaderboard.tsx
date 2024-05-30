import { Wrapper } from './leaderboard-styled';
import Gem from '@/assets/airdrop/gem.png';
import Invite1 from '@/assets/airdrop/invite-1.png';
import Invite2 from '@/assets/airdrop/invite-2.png';
import Graphic from '@/assets/airdrop/graphic.png';
export const Leaderboard = ({ data }: any) => {
  console.log('fdfss', data);
  return (
    <Wrapper>
      <div className='leaderboard-info'>
        <div className='graphic'>
          <img src={Graphic} alt='' />
        </div>
        <div className='graphic-content'>
          <div className='info-title'>Invite more friends, get bonus</div>
          <div className='info-wrapper'>
            <div className='info-card'>
              <img src={Invite1} alt='' />
              <div className='info-invite'>
                <span>Invite friens</span>
                <div>
                  <img src={Gem} alt='' />
                  <span>+3 for you and fren</span>
                </div>
              </div>
            </div>
            <div className='info-border'></div>
            <div className='info-card'>
              <img src={Invite2} alt='' />
              <div className='info-invite'>
                <span>Frens with Telegram Premium</span>
                <div>
                  <img src={Gem} alt='' />
                  <span>+30 for you and fren</span>
                </div>
              </div>
            </div>
          </div>
          <div className='info-button'>Invite frens</div>
        </div>
      </div>
      <div className='table'>
        {data ? (
          data?.map((item: any, key: number) => {
            return (
              <div className='table-row' key={key}>
                <div className='rank'>{item?.rank}</div>
                <div className='table-info'>
                  <div className='address'>{item?.address}</div>
                  <div className='info-point'>
                    <div className='point'>{item?.referral_point}</div>
                    <div className='total-point'>{item?.point}</div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className='no-data'>
            <div>No data</div>
          </div>
        )}
      </div>
    </Wrapper>
  );
};
