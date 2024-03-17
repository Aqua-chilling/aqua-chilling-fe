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

export const AirdropDetail = () => {
  const { addNotification } = useNotification();
  const token = useSelector(selectToken);
  const navigate = useNavigate();

  const [isShowDetail, setIsShowDetail] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (!token) {
      navigate('/airdrop');
    }
  }, [token]);
  return (
    <Wrapper>
      <Modal control={isShowDetail} setControl={setIsShowDetail}>
        fsdf
      </Modal>
      {/* --------------------------------------top-bar------------------------------- */}
      <div className='top-bar'>
        <div className='title'>fsdfs</div>
        <div className='tabs'>
          <div className='tab active'>Task</div>
          <div className='tab'>Leaderboard</div>
          <div className='tab'>Referral</div>
        </div>
        <PrimaryButton w={160}>Connect wallet</PrimaryButton>
      </div>
      <img src={land} alt='' className='land' />

      <div className='airdrop-detail-content-container'>
        {/* --------------------------------------left-bar------------------------------- */}
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
                      <span>Invite friends, earn points & share a 20% point bonus after each successful referral.</span>
                      <div className='btn-copy-link'>Copy link</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* --------------------------------------content------------------------------- */}
        <div className='airdrop-detail-content'>{true && <Task />}</div>
      </div>
    </Wrapper>
  );
};
