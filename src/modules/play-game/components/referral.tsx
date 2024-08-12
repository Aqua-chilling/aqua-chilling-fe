import { Wrapper } from './referral.styled';
import Gem from '@/assets/airdrop/gem.png';
import Invite1 from '@/assets/airdrop/invite-1.png';
import Invite2 from '@/assets/airdrop/invite-2.png';
import Graphic from '@/assets/airdrop/graphic.png';
import { useState } from 'react';
import { ReferralPopup } from './referral-popup';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { selectToken } from '@/redux';
import { OnboardingRepository } from '@/repositories/onboarding/onboarding.repository';
import AquaToken from '@/assets/wallet/aqua.png';
export const Referral = ({ data }: any) => {
  const [isShowRef, setIsShowRef] = useState(false);
  const token = useSelector(selectToken);
  const { data: leaderboard, refetch } = useQuery({
    queryKey: ['retrieveLeaderboard', token],
    queryFn: () => OnboardingRepository.RetrieveLeaderboardList(),
    retry: false,
    refetchInterval: 5000,
    enabled: !!token
  });
  return (
    <Wrapper>
      {isShowRef && <ReferralPopup onClose={() => setIsShowRef(false)} />}
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
                  <img src={AquaToken} alt='' />
                  <span>+3 $AQUA for you and fren</span>
                </div>
              </div>
            </div>
            <div className='info-border'></div>
            <div className='info-card'>
              <img src={AquaToken} alt='' />
              <div className='info-invite'>
                <span>Frens with Telegram Premium</span>
                <div>
                  <img src={AquaToken} alt='' />
                  <span>+30 $AQUA for you and fren</span>
                </div>
              </div>
            </div>
          </div>
          <div
            className='info-button'
            onClick={() => {
              setIsShowRef(true);
            }}
          >
            Invite frens
          </div>
        </div>
      </div>
      <div className='table'>
        {leaderboard?.length > 0 ? (
          leaderboard?.map((item: any, key: number) => {
            return (
              <div className='table-row' key={key}>
                <div className={`rank rank-${item.rank}`}>
                  <div>{item?.rank}</div>
                </div>
                <div className='table-info'>
                  <div className='address'>{item?.email || item?.address || '...'}</div>
                  <div className='info-point flex items-center gap-1'>
                    <div className=''>+{item?.referral_point} pts</div>
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
