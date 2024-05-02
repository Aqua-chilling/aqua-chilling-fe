import { useNotification } from '@/contexts/notification.context';
import nft2 from '@/assets/airdrop/triden 2.jpg';
import nft3 from '@/assets/airdrop/triden 3.jpg';
import nft4 from '@/assets/airdrop/triden 4.jpg';
import coin from '@/assets/airdrop-detail/coin.png';
import ton from '@/assets/ton-icon.png';
import land from '@/assets/airdrop-detail/land.png';
import { Wrapper } from './airdrop-detail.styled';
import { Modal } from '@/components/modal/modal';
import React, { useRef } from 'react';
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
import { MenuOutlined } from '@ant-design/icons';
import { useTonWalletContext } from '@/contexts/ton-wallet.context';

export const AirdropDetail = ({ setControl }: any) => {
  const { addNotification } = useNotification();
  const token = useSelector(selectToken);
  const navigate = useNavigate();
  const { signOut } = useTonWalletContext();

  const [isShowSignout, setIsShowSignout] = React.useState<boolean>(false);
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
      {/* --------------------------------------top-bar------------------------------- */}
      <div className='left-bar'>
        <div className='tabs'>
          {['Airdrop quests', 'Leaderboard', 'Referral'].map((item, key) => {
            return (
              <div className={activeTab === key ? 'tab active' : 'tab '} onClick={() => setActiveTab(key)}>
                {item}
              </div>
            );
          })}
        </div>
      </div>
      <img src={land} alt='' className='land' />

      <div className='airdrop-detail-content-container'>
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
