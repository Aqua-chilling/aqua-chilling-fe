import { useNotification } from '@/contexts/notification.context';
import nft1 from '@/assets/airdrop/triden 1.jpg';
import nft2 from '@/assets/airdrop/triden 2.jpg';
import nft3 from '@/assets/airdrop/triden 3.jpg';
import nft4 from '@/assets/airdrop/triden 4.jpg';
import coin from '@/assets/airdrop-detail/coin.png';
import land from '@/assets/airdrop-detail/land.png';
import { Wrapper } from './airdrop-detail.styled';
import { Modal } from '@/components/modal/modal';
import React from 'react';
import { PrimaryButton } from '@/components/button/button.styled';
import { Task } from './components/task-component/task';
import { useNavigate } from 'react-router';
import { deleteAccount, selectToken } from '@/redux';
import { useSelector } from 'react-redux';
import { Received } from './components/popups/received';
import { OnboardingRepository } from '@/repositories/onboarding/onboarding.repository';
import { Leaderboard } from './components/leaderboard-component/leaderboard';
import { Referral } from './components/referral-component/referral';
import { OauthRepository } from '@/repositories/oauth/oauth.repository';
import { NOTIFICATION_TYPE } from '@/components/notification/notification';
import { dispatch } from '@/app/store';

export const AirdropDetail = () => {
  const { addNotification } = useNotification();
  const token = useSelector(selectToken);
  const navigate = useNavigate();

  const [isShowDetail, setIsShowDetail] = React.useState<boolean>(false);
  const [isShowReceived, setIsShowReceived] = React.useState<boolean>(
    localStorage.getItem('received') === 'true' ? false : true
  );
  const [activeTab, setActiveTab] = React.useState<number>(0);

  const [tasks, setTasks] = React.useState<any[]>();
  const [leaderboards, setLeaderboards] = React.useState<any[]>();
  const [referral, setReferral] = React.useState<any>();

  const copyLink = () => {
    addNotification({
      message: 'Copied',
      type: NOTIFICATION_TYPE.SUCCESS,
      id: new Date().getTime()
    });
    navigator.clipboard.writeText(`https://test.aquachilling.com/airdrop?ref=${referral?.referral_code}` || '');
  };
  React.useEffect(() => {
    if (!token) {
      navigate('/airdrop');
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
        <div
          className='btn-sell'
          onClick={() => {
            if (token) {
              localStorage.clear();
              dispatch(deleteAccount());
            }
          }}
        >
          <PrimaryButton w={160}>{token ? 'Sign out' : 'Connect wallet'}</PrimaryButton>
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
                        <img
                          src={
                            referral?.point >= 1500
                              ? nft4
                              : referral?.point >= 800
                              ? nft3
                              : referral?.point >= 500
                              ? nft2
                              : referral?.point >= 300
                              ? nft1
                              : undefined
                          }
                          alt=''
                        />
                        <div className='btn-upgrade'>Upgrade NFT</div>
                      </div>
                      <div className='available-points'>
                        <span>Available Points</span>
                        <div className='value'>{referral?.point}</div>
                      </div>
                      <div className='line'></div>
                      <div className='referral-links'>
                        <div>Refer to earn</div>
                        <span>
                          Invite friends, earn points & share a 20% point bonus after each successful referral.
                        </span>
                        <div className='btn-copy-link' onClick={() => copyLink()}>
                          Copy link
                        </div>
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
          {activeTab === 0 && <Task data={tasks} profile={referral} />}
          {activeTab === 1 && <Leaderboard data={leaderboards} />}
          {activeTab === 2 && <Referral data={referral} />}
        </div>
      </div>
    </Wrapper>
  );
};
