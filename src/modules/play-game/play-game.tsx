import { useDispatch, useSelector } from 'react-redux';
import close from '@/assets/airdrop-detail/close.png';
import nft1 from '@/assets/airdrop/triden 1.jpg';
import { Wrapper } from './play-game.styled';
import React, { useEffect, useMemo, useState } from 'react';
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
import { updateTelegramId } from '@/redux/telegram-id';
import { dispatch } from '@/app/store';
import { WalletEarn } from './components/wallet-earn';
import { UserWallet } from './components/user-wallet';
import { AirdropQuests } from './components/airdrop-quest';
import { BuyPopup } from './components/buy-popup';
import { useStateCallback } from '@/hooks/use-on-off';
import { OauthRepository } from '@/repositories/oauth/oauth.repository';
import { useAccountInfoContext } from '@/contexts/account-info.context';

function iframe() {
  return {
    __html: '<iframe src="https://game-test.aquachilling.com/" frameborder="0" id="game-iframeID" frame ></iframe>'
  };
}
export const GamePlay = () => {
  const [isShowPopupLogin, setIsShowPopupLogin] = React.useState(false);
  const [isShowAirdropQuestLogin, setIsShowAirdropQuestLogin] = React.useState(false);
  const [isShowWallet, setIsShowWallet] = React.useState(false);
  const [searchParams] = useSearchParams();
  const typeId = searchParams.get('id');
  const ref = searchParams.get('ref');
  console.log('typeId', typeId);
  const [isShowBuyModal, setIsShowBuyModal] = React.useState(false);
  const token = useSelector(selectToken);
  const { gameMessage, sendMessage, setGameMessage } = usePlayGame();
  const { signTokenOut, tonConnectUI } = useTonWalletContext();
  const { userProfile } = useAccountInfoContext();
  const { data: userPack } = useQuery({
    queryKey: ['retrieveuserPack', token, gameMessage],
    queryFn: () => OnboardingRepository.RetrieveUserPackages(),
    retry: false,
    refetchInterval: 5000,
    enabled: !!token && gameMessage?.functionName === COMMUNICATIONFUNCTION.SHOW_BUY_PACK
  });
  console.log('user', userProfile);
  React.useEffect(() => {
    if (ref && !!token && userProfile?.referral_code_status !== 1) {
      OauthRepository.enterReferralCode(ref).then((rs) => {
        console.log('GIANG', rs);
        dispatch(
          updateReferral({
            referral_code: ref,
            refreferral_code_status: rs.referral_code_status ?? 1
          })
        );
      });
    }
  }, [ref, token, userProfile]);
  console.log('userPack', userPack);
  console.log('gameMessage', gameMessage);
  useEffect(() => {
    console.log('disconnect');
    WebApp.expand();
    WebApp.enableClosingConfirmation();
    if (WebApp.initDataUnsafe?.user?.id) {
      dispatch(updateTelegramId({ telegram: WebApp.initDataUnsafe?.user?.id.toString() }));
    }
    if (Number(typeId) !== 1) {
      signTokenOut();
    }
    if (Number(typeId) === 1) {
      setIsShowAirdropQuestLogin(true);
    }
  }, [typeId]);

  console.log('tonConnectUI', tonConnectUI);
  console.log('gameMes', gameMessage);
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
    if (token && gameMessage?.functionName === COMMUNICATIONFUNCTION.SHOW_WALLET) {
      setIsShowWallet(true);
    }
    console.log('chan ');
  }, [gameMessage, token, userPack?.packs?.length]);
  console.log('isShow', isShowBuyModal);
  const [pack, setPack] = useStateCallback<any>(undefined);
  const [isBuy, setIsBuy] = useState(false);
  console.log('isBuy', isBuy);
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
        <AirdropQuests
          onClose={() => {
            setIsShowAirdropQuestLogin(false);
          }}
          purchaseAqua={() => {
            setIsShowBuyModal(true);
          }}
          typeId={Number(typeId || 0)}
        />
      )}
      {/* {isShowAirdropQuestLogin && (
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
      )} */}
      {isBuy && <BuyPopup pack={pack} onClose={() => setIsBuy(false)} />}
      {isShowWallet && (
        <UserWallet
          onClose={() => setIsShowWallet(false)}
          purchaseAqua={() => {
            setIsShowBuyModal(true);
          }}
        />
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
            setPack={(pack: any) => setPack(pack)}
            setIsBuy={(isB: boolean) => setIsBuy(isB)}
          />
        </Modal>
      )}

      <div dangerouslySetInnerHTML={iframe()} className='game-iframe' />
    </Wrapper>
  );
};
