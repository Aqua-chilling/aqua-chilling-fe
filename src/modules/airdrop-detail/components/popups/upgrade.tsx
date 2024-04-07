import { Wrapper } from './upgrade.styled';
import { CloseIconSVG } from '@/modules/marketplace/hard';
import nft2 from '@/assets/airdrop-detail/nft2.png';
import nft3 from '@/assets/airdrop-detail/nft3.png';
import nft4 from '@/assets/airdrop-detail/nft4.png';
import { PrimaryButton } from '@/components/button/button.styled';
import { NOTIFICATION_TYPE } from '@/components/notification/notification';
import { useNotification } from '@/contexts/notification.context';
import React from 'react';

export const Upgrade = ({ setControl, point }: any) => {
  const { addNotification } = useNotification();
  const [activeNft, setActiveNft] = React.useState<number>(point >= 1500 ? 4 : point >= 800 ? 3 : point >= 500 ? 2 : 1);
  return (
    <Wrapper>
      <div className='points'>
        Available Points: <span>{point}</span>
      </div>
      <div className='imgs'>
        <div
          className={point >= 500 ? 'trivent' : 'trivent disabled'}
          onClick={() => {
            setActiveNft(2);
          }}
        >
          <img src={nft2} alt='' />
          <div className='mask'></div>
        </div>
        <div
          className={point >= 800 ? 'trivent' : 'trivent disabled'}
          onClick={() => {
            setActiveNft(3);
          }}
        >
          <img src={nft3} alt='' />
          <div className='mask'></div>
        </div>
        <div
          className={point >= 1500 ? 'trivent' : 'trivent disabled'}
          onClick={() => {
            setActiveNft(4);
          }}
        >
          <img src={nft4} alt='' />
          <div className='mask'></div>
        </div>
      </div>
      <div
        className='custom-close'
        onClick={() => {
          setControl(false);
        }}
      >
        <div dangerouslySetInnerHTML={{ __html: CloseIconSVG }}></div>
      </div>
      <div
        className={point >= 500 ? 'btn' : 'btn disabled'}
        onClick={() => {
          if (activeNft === 4 && point >= 1500) {
            addNotification({
              message: 'Comming soon',
              type: NOTIFICATION_TYPE.SUCCESS,
              id: new Date().getTime()
            });
          } else if (activeNft === 3 && point >= 800) {
            addNotification({
              message: 'Comming soon',
              type: NOTIFICATION_TYPE.SUCCESS,
              id: new Date().getTime()
            });
          } else if (activeNft === 2 && point >= 500) {
            addNotification({
              message: 'Comming soon',
              type: NOTIFICATION_TYPE.SUCCESS,
              id: new Date().getTime()
            });
          } else {
            addNotification({
              message: "You dont't have enough point",
              type: NOTIFICATION_TYPE.INFO,
              id: new Date().getTime()
            });
          }
        }}
      >
        <PrimaryButton w={160}>Upgrade NFT</PrimaryButton>
      </div>
    </Wrapper>
  );
};
