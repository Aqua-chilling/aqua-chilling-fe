import { useNotification } from '@/contexts/notification.context';
import nft2 from '@/assets/airdrop/triden 2.jpg';
import nft3 from '@/assets/airdrop/triden 3.jpg';
import nft4 from '@/assets/airdrop/triden 4.jpg';
import coin from '@/assets/airdrop-detail/coin.png';
import ton from '@/assets/ton-icon.png';
import land from '@/assets/airdrop-detail/land.png';
import { Wrapper } from './wallet-earn.styled';
import { Modal } from '@/components/modal/modal';
import React, { useRef } from 'react';
import { PrimaryButton } from '@/components/button/button.styled';
import { useNavigate } from 'react-router';
import { deleteAccount, selectToken } from '@/redux';
import { useSelector } from 'react-redux';
import { OnboardingRepository } from '@/repositories/onboarding/onboarding.repository';
import { OauthRepository } from '@/repositories/oauth/oauth.repository';
import { NOTIFICATION_TYPE } from '@/components/notification/notification';
import { dispatch } from '@/app/store';
import { MenuOutlined } from '@ant-design/icons';
import { useTonWalletContext } from '@/contexts/ton-wallet.context';
import QuestIcon from '@/assets/airdrop-detail/Quest.png';
import LeaderboardIcon from '@/assets/airdrop-detail/Leaderboard.png';
import ReferralIcon from '@/assets/airdrop-detail/Share.png';
import { Wallet } from './wallet';
import { Earn } from './earn';

const iconList = [QuestIcon, LeaderboardIcon, ReferralIcon];

export const WalletEarn = ({ setControl }: any) => {
  const { addNotification } = useNotification();
  const token = useSelector(selectToken);
  const navigate = useNavigate();
  const { signOut } = useTonWalletContext();

  const [isShowSignout, setIsShowSignout] = React.useState<boolean>(false);
  const [activeTab, setActiveTab] = React.useState<number>(0);

  const [tasks, setTasks] = React.useState<any[]>();
  const [leaderboards, setLeaderboards] = React.useState<any[]>();
  const [referral, setReferral] = React.useState<any>();
  return (
    <Wrapper>
      {/* --------------------------------------top-bar------------------------------- */}
      <div className='left-bar'>
        <div className='tabs'>
          {['Wallet', 'Earning'].map((item, key) => {
            return (
              <div className={activeTab === key ? 'tab active' : 'tab '} onClick={() => setActiveTab(key)}>
                <span>{item}</span>
              </div>
            );
          })}
        </div>
      </div>
      {activeTab === 1 && <img src={land} alt='' className='land' />}

      <div className='airdrop-detail-content-container'>
        {/* --------------------------------------content------------------------------- */}
        <div className={activeTab === 0 ? 'airdrop-detail-content task' : 'airdrop-detail-content'}>
          {' '}
          {activeTab === 0 && <Wallet />}
          {activeTab === 1 && <Earn />}
        </div>
      </div>
    </Wrapper>
  );
};
