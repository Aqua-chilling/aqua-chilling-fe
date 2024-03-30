import { useNotification } from '@/contexts/notification.context';
import nft1 from '@/assets/airdrop/triden 1.jpg';
import coin from '@/assets/airdrop-detail/coin.png';
import land from '@/assets/airdrop-detail/land.png';
import { Wrapper } from './airdrop-detail.styled';
import { Modal } from '@/components/modal/modal';
import React from 'react';
import { PrimaryButton } from '@/components/button/button.styled';
import { Task } from './components/task-component/task';
import { useNavigate } from 'react-router';
import { selectToken } from '@/redux';
import { useSelector } from 'react-redux';
import { Received } from './components/popups/received';
import { OnboardingRepository } from '@/repositories/onboarding/onboarding.repository';
import { Leaderboard } from './components/leaderboard-component/leaderboard';
import { Referral } from './components/referral-component/referral';
import { OauthRepository } from '@/repositories/oauth/oauth.repository';

export const AirdropDetail = () => {
  const { addNotification } = useNotification();
  const token = useSelector(selectToken);
  const navigate = useNavigate();

  const [isShowDetail, setIsShowDetail] = React.useState<boolean>(false);
  const [isShowReceived, setIsShowReceived] = React.useState<boolean>(true);
  const [activeTab, setActiveTab] = React.useState<number>(0);

  const [tasks, setTasks] = React.useState<any[]>();
  const [leaderboards, setLeaderboards] = React.useState<any[]>();
  const [referral, setReferral] = React.useState<any>();
  React.useEffect(() => {
    if (!token) {
      // navigate('/airdrop');
    }
  }, [token]);
  React.useEffect(() => {
    OnboardingRepository.RetrieveTaskList()
      .then((rs) => {
        setTasks(rs?.items);
      })
      .catch((err) => {
        console.log(err);
      });

    OnboardingRepository.RetrieveLeaderboardList()
      .then((rs) => {
        setLeaderboards(rs);
      })
      .catch((err) => {
        console.log(err);
      });

    OauthRepository.getProfile()
      .then((rs) => {
        setReferral(rs);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Wrapper>
      <Modal control={isShowReceived} setControl={setIsShowReceived}>
        <Received />
      </Modal>
      {/* --------------------------------------top-bar------------------------------- */}
      <div className='top-bar'>
        <div className='title'>fsdfs</div>
        <div className='tabs'>
          {['Task', 'Leaderboard', 'Referral'].map((item, key) => {
            return (
              <div className={activeTab === key ? 'tab active' : 'tab '} onClick={() => setActiveTab(key)}>
                {item}
              </div>
            );
          })}
        </div>
        <div className='btn-sell'>
          <PrimaryButton w={160}>Connect wallet</PrimaryButton>
        </div>
      </div>
      <img src={land} alt='' className='land' />

      <div className='airdrop-detail-content-container'>
        {/* --------------------------------------left-bar------------------------------- */}
        {activeTab === 0 && (
          <div className='left-bar'>
            <div className='outer-1'>
              <div className='outer-2'>
                <div className='outer-3'>
                  <div className='outer-4'>
                    <div className='outer-5'>
                      <img src={coin} alt='' className='coin' />
                      <div className='your-nft'>
                        <span>Your NFT</span>
                        <img src={nft1} alt='' />
                        <div className='btn-upgrade'>Upgrade NFT</div>
                      </div>
                      <div className='available-points'>
                        <span>Available Points</span>
                        <div className='value'>4000</div>
                      </div>
                      <div className='line'></div>
                      <div className='referral-links'>
                        <div>Refer to earn</div>
                        <span>
                          Invite friends, earn points & share a 20% point bonus after each successful referral.
                        </span>
                        <div className='btn-copy-link'>Copy link</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* --------------------------------------content------------------------------- */}
        <div className={activeTab === 0 ? 'airdrop-detail-content task' : 'airdrop-detail-content'}>
          {activeTab === 0 && <Task data={tasks} />}
          {activeTab === 1 && <Leaderboard data={leaderboards} />}
          {activeTab === 2 && <Referral data={referral} />}
        </div>
      </div>
    </Wrapper>
  );
};
