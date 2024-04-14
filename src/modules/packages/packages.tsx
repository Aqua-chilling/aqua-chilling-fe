import { Wrapper } from './packages.styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import nft1 from '@/assets/airdrop/triden 1.jpg';
import nft2 from '@/assets/airdrop/triden 2.jpg';
import nft3 from '@/assets/airdrop/triden 3.jpg';
import nft4 from '@/assets/airdrop/triden 4.jpg';
import btnRight from '@/assets/airdrop/btn-right.png';
import btnLeft from '@/assets/airdrop/btn-left.png';

import { PrimaryButton } from '@/components/button/button.styled';
import React from 'react';
import { Modal } from '@/components/modal/modal';
import { deleteAccount, selectToken, updateAccount, updateDiscordId, updateTwitterId } from '@/redux';
import { useSelector } from 'react-redux';
import { OauthRepository } from '@/repositories/oauth/oauth.repository';
import { dispatch } from '@/app/store';
import { useWriteTransaction } from '@/hooks/use-write-transaction';
import { PackageNav } from './components/package-nav';
import { PopUpLogin } from '../airdrop/components/popup-login';
import { BuyModal } from './components/buy-modal';
import { PurchaseCard } from './components/purchase-card';

export const Packages = () => {
  const [isShowPopupLogin, setIsShowPopupLogin] = React.useState(false);
  const [isShowBuyModal, setIsShowBuyModal] = React.useState(true);
  const [isPurchaseSuccess, setPurchaseSuccess] = React.useState(true);
  const token = useSelector(selectToken);
  React.useEffect(() => {
    if (!token) {
      setIsShowPopupLogin(true);
    } else {
      setIsShowPopupLogin(false);
    }
  }, [token]);
  return (
    <Wrapper>
      <PackageNav />
      {isShowPopupLogin && (
        <Modal control={isShowPopupLogin} setControl={setIsShowPopupLogin}>
          <PopUpLogin />
        </Modal>
      )}
      {isShowBuyModal && <BuyModal />}
      {
        !isPurchaseSuccess &&<div className='purchase-result'>
        <div className='purchase-success'>Purchase successful</div>
        <PurchaseCard />
        <div className='card-btn'>Open all</div>
       </div>
      }
     
    </Wrapper>
  );
};
