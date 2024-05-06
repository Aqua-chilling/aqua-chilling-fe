import { useDispatch, useSelector } from 'react-redux';
import close from '@/assets/airdrop-detail/close.png';
import nft1 from '@/assets/airdrop/triden 1.jpg';
import { Wrapper } from './play-game.styled';
import React, { useEffect, useMemo } from 'react';
import { deleteAccount, selectToken, updateDiscordId, updateReferral, updateTwitterId } from '@/redux';
import { PopUpLogin } from './components/popup-login';
import { Modal } from '@/components/modal/modal';
import { usePlayGame } from '@/hooks/use-play-game';
import { COMMUNICATIONFUNCTION } from '@/constants/app-constaints';
import { useNotification } from '@/contexts/notification.context';
import { NOTIFICATION_TYPE } from '@/components/notification/notification';
import WebApp from '@twa-dev/sdk';
import { AirdropDetail } from '../airdrop-detail/airdrop-detail';
import { useTonConnectUI } from '@tonconnect/ui-react';
import { BuyModal } from './components/buy-modal';
import { useQuery } from 'react-query';
import useLocalStorage from 'use-local-storage';
import { OnboardingRepository } from '@/repositories/onboarding/onboarding.repository';
import { PurchaseCard } from './components/purchase-card';
import { CloseIconSVG } from '../airdrop/hard';
import { useTonWalletContext } from '@/contexts/ton-wallet.context';
import { useSearchParams } from 'react-router-dom';

function iframe() {
  return {
    __html: '<iframe src="https://game-test.aquachilling.com/" id="game-iframeID"></iframe>'
  };
}
export const GamePlay = () => {
  const [isShowPopupLogin, setIsShowPopupLogin] = React.useState(false);
  const [isShowAirdropQuestLogin, setIsShowAirdropQuestLogin] = React.useState(false);
  const [searchParams] = useSearchParams();
  const typeId = searchParams.get('id');
  console.log('typeId', typeId);
  const [isShowBuyModal, setIsShowBuyModal] = React.useState(false);
  const token = useSelector(selectToken);
  const { gameMessage, sendMessage, setGameMessage } = usePlayGame();
  const { signTokenOut, tonConnectUI } = useTonWalletContext();
  const { data: userPack } = useQuery({
    queryKey: ['retrieveuserPack', token, gameMessage],
    queryFn: () => OnboardingRepository.RetrieveUserPackages(),
    retry: false,
    refetchInterval: 5000,
    enabled: !!token && gameMessage?.functionName === COMMUNICATIONFUNCTION.SHOW_BUY_PACK
  });
  console.log('userPack', userPack);
  console.log('gameMessage', gameMessage);
  useEffect(() => {
    console.log('disconnect');
    WebApp.expand();
    WebApp.enableClosingConfirmation();
    if (Number(typeId) !== 1) {
      signTokenOut();
    }
    if (Number(typeId) === 1) {
      setIsShowAirdropQuestLogin(true);
    }
  }, [typeId]);

  console.log('tonConnectUI', tonConnectUI);
  useEffect(() => {
    if (gameMessage?.functionName === COMMUNICATIONFUNCTION.LOGIN_REQUEST) {
      if (!token) {
        setIsShowPopupLogin(true);
      } else {
        setIsShowPopupLogin(false);
        console.log('send thsi message', token);
        sendMessage(COMMUNICATIONFUNCTION.LOGIN_SUCCESS, token);
      }
    }
    console.log('pack', userPack?.packs?.length);

    if (token && gameMessage?.functionName === COMMUNICATIONFUNCTION.SHOW_QUEST) {
      console.log('show', isShowAirdropQuestLogin);
      setIsShowAirdropQuestLogin(true);
    }
    if (token && gameMessage?.functionName === COMMUNICATIONFUNCTION.SHOW_BUY_PACK) {
      setIsShowBuyModal(true);
    }
    console.log('chan ');
  }, [gameMessage, token, userPack?.packs?.length]);
  console.log('isShow', isShowBuyModal);
  return (
    <Wrapper>
      {isShowPopupLogin && (
        <Modal
          control={isShowPopupLogin}
          setControl={() => {
            setIsShowPopupLogin;
          }}
        >
          <PopUpLogin />
        </Modal>
      )}
      {isShowAirdropQuestLogin && (
        <Modal control={isShowAirdropQuestLogin} setControl={setIsShowAirdropQuestLogin} isShowClose={false}>
          <div className='airdrop-wrapper'>
            <div className='close-mobile' onClick={() => setIsShowAirdropQuestLogin(false)}>
              <div dangerouslySetInnerHTML={{ __html: CloseIconSVG }}></div>
            </div>
            <AirdropDetail setControl={setIsShowAirdropQuestLogin} />
            <img
              src={close}
              className='close-received'
              alt=''
              onClick={() => {
                setIsShowAirdropQuestLogin(false);
              }}
            />
          </div>
        </Modal>
      )}
      {isShowBuyModal && (
        <Modal control={isShowBuyModal} setControl={setIsShowBuyModal} isShowClose={false}>
          <BuyModal
            onClose={() => {
              console.log('click');
              sendMessage(COMMUNICATIONFUNCTION.BUY_PACK, COMMUNICATIONFUNCTION.FAIL_PARAM);
              setIsShowBuyModal(false);
            }}
            onBuySuccess={() => {
              sendMessage(COMMUNICATIONFUNCTION.BUY_PACK, COMMUNICATIONFUNCTION.SUCCESS_PARAM);
              setIsShowBuyModal(false);
            }}
          />
        </Modal>
      )}

      <div dangerouslySetInnerHTML={iframe()} className='game-iframe' />
    </Wrapper>
  );
};
