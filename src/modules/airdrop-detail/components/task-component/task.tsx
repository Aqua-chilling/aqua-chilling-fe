import { PrimaryButton } from '@/components/button/button.styled';
import nft from '@/assets/airdrop-detail/nft.png';
import { Wrapper } from './task.styled';
import { OnboardingRepository } from '@/repositories/onboarding/onboarding.repository';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectDiscord, selectReferralCode } from '@/redux';
import { NOTIFICATION_TYPE } from '@/components/notification/notification';
import { useNotification } from '@/contexts/notification.context';
import { copyICONSVG } from '../referral-component/referral';
import { Modal } from '@/components/modal/modal';
import { Upgrade } from '../popups/upgrade';

export const Task = ({ data, profile }: any) => {
  const [isSayGM, setIsSayGM] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isShowPopupUpgrade, setIsShowPopupUpgrade] = React.useState(false);

  const discord = useSelector(selectDiscord);
  const referral_code = useSelector(selectReferralCode);
  const { addNotification } = useNotification();

  const fetchDiscordTaskStatus = () => {
    setIsLoading(true);
    OnboardingRepository.RetrieveTaskOfDiscord(discord || ' ')
      .then((rs) => {
        setIsSayGM(rs.today_gm);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        addNotification({
          message: err,
          type: NOTIFICATION_TYPE.INFO,
          id: new Date().getTime()
        });
      });
  };
  const copy = () => {
    addNotification({
      message: 'Copied',
      type: NOTIFICATION_TYPE.SUCCESS,
      id: new Date().getTime()
    });
    navigator.clipboard.writeText(referral_code || '');
  };
  return (
    <Wrapper>
      <Modal control={isShowPopupUpgrade} setControl={setIsShowPopupUpgrade} isShowClose={false}>
        <Upgrade point={profile?.point} />
      </Modal>
      <div className='title'>What is Aquachilling airdrop?</div>
      <div className='subtitle'>
        The more point you accumulate from the quest, the more token will be dropped to your wallet address on TGE.
      </div>
      <div className='nft'>
        <div className='left'>
          <img src={nft} alt='' />
          <div className='flex flex-col align-start flex-1'>
            <div>
              {profile?.point >= 800 ? '1500' : profile?.point >= 500 ? '800' : profile?.point >= 300 ? '500' : 'error'}{' '}
              points
            </div>
            <span>
              {profile?.point >= 800
                ? 'Trident Lv. 4'
                : profile?.point >= 500
                ? 'Trident Lv. 3'
                : profile?.point >= 300
                ? 'Trident Lv.2'
                : 'error'}
            </span>
            <div
              className='upgrade-btn'
              onClick={() => {
                setIsShowPopupUpgrade(true);
              }}
              style={{ display: 'none' }}
            >
              <PrimaryButton w={160}>Upgrade NFT</PrimaryButton>
            </div>
          </div>
        </div>
        <div
          className='upgrade-btn-below'
          onClick={() => {
            setIsShowPopupUpgrade(true);
          }}
        >
          <PrimaryButton w={160}>Upgrade NFT</PrimaryButton>
        </div>
      </div>
      <p>Complete tasks below to upgrade your NFT</p>
      <div className='table'>
        <div className='table-head'>
          <div className='quest-name'>Quest</div>
          <div className='quest-point'>Points</div>
          <div className='quest-status'>Status</div>
        </div>
        {data?.map((item: any, key: number) => {
          return (
            <div className='table-row' key={key}>
              <div className='quest-name'>{item?.desc}</div>
              <div className='quest-point'>{item?.point}</div>
              <div className='quest-status'>
                {item?.type === 'twitter_follow' && <div className='status-1'>Followed</div>}
                {item?.type === 'retweet' && <div className='status-1'>Retweeted</div>}
                {item?.type === 'discord_join' && <div className='status-1'>Joined</div>}
                {item?.type === 'discord_gm' &&
                  (isSayGM ? (
                    <div className='status-1'>Said GM Today</div>
                  ) : (
                    <div
                      className='status-0'
                      onClick={() => {
                        if (item?.type === 'discord_gm') {
                          window.open(item?.data?.link, '_blank');
                          fetchDiscordTaskStatus();
                        }
                      }}
                    >
                      Start task
                    </div>
                  ))}
                {item?.type === 'referal' && (
                  <div className='status-0' onClick={() => copy()}>
                    {referral_code}
                    <div className='ic' dangerouslySetInnerHTML={{ __html: copyICONSVG }} onClick={() => copy()}></div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};
