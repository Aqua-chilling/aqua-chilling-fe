import { useSelector } from 'react-redux';
import { Wrapper } from './play-game.styled';
import React, { useEffect, useState } from 'react';
import { selectToken, updateReferral } from '@/redux';
import { PopUpLogin } from './components/popup-login';
import { Modal } from '@/components/modal/modal';
import { usePlayGame } from '@/hooks/use-play-game';
import { COMMUNICATIONFUNCTION } from '@/constants/app-constaints';
import WebApp from '@twa-dev/sdk';
import { BuyModal } from './components/buy-modal';
import { useTonWalletContext } from '@/contexts/ton-wallet.context';
import { useSearchParams } from 'react-router-dom';
import { updateTelegramId } from '@/redux/telegram-id';
import { dispatch } from '@/app/store';
import { UserWallet } from './components/user-wallet';
import { AirdropQuests } from './components/airdrop-quest';
import { BuyPopup } from './components/buy-popup';
import { useStateCallback } from '@/hooks/use-on-off';
import { OauthRepository } from '@/repositories/oauth/oauth.repository';
import { useAccountInfoContext } from '@/contexts/account-info.context';
import { ENVS } from '@/config';
import { useNotification } from '@/contexts/notification.context';
import { NOTIFICATION_TYPE } from '@/components/notification/notification';

function iframe() {
  return {
    __html: `<iframe src=${ENVS.VITE_BASE_GAME_DOMAIN} frameborder="0" id="game-iframeID" frame ></iframe>`
  };
}
export const GamePlay = () => {
  const [isShowPopupLogin, setIsShowPopupLogin] = React.useState(false);
  const [isShowAirdropQuestLogin, setIsShowAirdropQuestLogin] = React.useState(false);
  const [isShowWallet, setIsShowWallet] = React.useState(false);
  const [searchParams] = useSearchParams();
  const typeId = searchParams.get('id');
  const ref = searchParams.get('ref');
  const [isShowBuyModal, setIsShowBuyModal] = React.useState(false);
  const token = useSelector(selectToken);
  const { gameMessage, sendMessage, setGameMessage } = usePlayGame();
  const { signTokenOut, tonConnectUI } = useTonWalletContext();
  const { userProfile } = useAccountInfoContext();
  const { addNotification } = useNotification();
  React.useEffect(() => {
    if (ref && !!token && userProfile?.referral_code_status !== 1) {
      OauthRepository.enterReferralCode(ref).then((rs) => {
        dispatch(
          updateReferral({
            referral_code: ref,
            refreferral_code_status: rs.referral_code_status ?? 1
          })
        );
        addNotification({
          message: 'Submitted referral!',
          type: NOTIFICATION_TYPE.SUCCESS,
          id: new Date().getTime()
        });
      });
    }
  }, [ref, token, userProfile]);
  useEffect(() => {
    console.log('WebApp', WebApp);
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
  useEffect(() => {
    if (gameMessage?.functionName === COMMUNICATIONFUNCTION.LOGIN_REQUEST) {
      if (!token) {
        setIsShowPopupLogin(true);
      } else {
        setIsShowPopupLogin(false);
        sendMessage(COMMUNICATIONFUNCTION.LOGIN_SUCCESS, token);
      }
    }
    if (token && gameMessage?.functionName === COMMUNICATIONFUNCTION.SHOW_QUEST) {
      setIsShowAirdropQuestLogin(true);
    }
    if (token && gameMessage?.functionName === COMMUNICATIONFUNCTION.SHOW_BUY_PACK) {
      setIsShowBuyModal(true);
    }
    if (token && gameMessage?.functionName === COMMUNICATIONFUNCTION.SHOW_WALLET) {
      setIsShowWallet(true);
    }
  }, [gameMessage, token]);
  const [pack, setPack] = useStateCallback<any>(undefined);
  const [isBuy, setIsBuy] = useState(false);
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
            setPack={(pack: any) => setPack(pack)}
            setIsBuy={(isB: boolean) => setIsBuy(isB)}
            onClose={() => {
              setIsShowBuyModal(false);
            }}
          />
        </Modal>
      )}

      <div dangerouslySetInnerHTML={iframe()} className='game-iframe' />
    </Wrapper>
  );
};
