import { useSelector } from 'react-redux';
import { Wrapper } from './play-game.styled';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { deleteAccount, selectToken, updateDiscordId, updateReferral, updateTwitterId } from '@/redux';
import { Modal } from '@/components/modal/modal';
import { usePlayGame } from '@/hooks/use-play-game';
import { COMMUNICATIONFUNCTION, twaRedirects } from '@/constants/app-constaints';
import WebApp from '@twa-dev/sdk';
import { BuyModal } from './components/buy-modal';
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
import { useLoginWithTelegram } from '@/hooks/uselogin-telegram';
import { useTonConnectUI } from '@tonconnect/ui-react';
import { Loading } from './components/game-loading';
import { OnboardingRepository } from '@/repositories/onboarding/onboarding.repository';
import { useQuery } from 'react-query';

function iframe() {
  return {
    __html: `<iframe src=${ENVS.VITE_BASE_GAME_DOMAIN} frameborder="0" id="game-iframeID" frame ></iframe>`
  };
}
export const GamePlay = () => {
  const [isShowAirdropQuestLogin, setIsShowAirdropQuestLogin] = React.useState(false);
  const [isShowWallet, setIsShowWallet] = React.useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const typeId = searchParams.get('id');
  const ref = WebApp.initDataUnsafe.start_param;
  const [isShowBuyModal, setIsShowBuyModal] = React.useState(false);
  const token = useSelector(selectToken);
  const { gameMessage, sendMessage, setGameMessage } = usePlayGame();

  const signTokenOut = useCallback(() => {
    dispatch(deleteAccount());
    dispatch(
      updateDiscordId({
        discord: undefined
      })
    );
    dispatch(
      updateTwitterId({
        twitter: undefined
      })
    );
    dispatch(
      updateTelegramId({
        telegram: undefined
      })
    );
    dispatch(
      updateReferral({
        referral_code: '',
        refreferral_code_status: 0
      })
    );
  }, [dispatch]);
  const { userProfile } = useAccountInfoContext();
  const { addNotification } = useNotification();
  const { handleLogin } = useLoginWithTelegram();
  const { data: latestCheckinDate } = useQuery({
    queryKey: ['retrieveLatestCheckinDate', token],
    queryFn: () => OauthRepository.checkIsCheckin(userProfile?.seq_id),
    retry: false,
    refetchInterval: 5000,
    enabled: !!token && !!userProfile?.seq_id
  });

  const isCheckIn = useMemo(() => {
    if (!latestCheckinDate) return false;
    const now = new Date();
    const _startOfDay = now.setUTCHours(0, 0, 0, 0) / 1000;
    return latestCheckinDate >= _startOfDay;
  }, [latestCheckinDate]);
  React.useEffect(() => {
    if (ref && !twaRedirects.includes(ref || '') && !!token && userProfile?.referral_code_status !== 1) {
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
    WebApp.expand();
    WebApp.enableClosingConfirmation();
    if (WebApp.initDataUnsafe?.user?.id) {
      dispatch(updateTelegramId({ telegram: WebApp.initDataUnsafe?.user?.id.toString() }));
    }
    if (!twaRedirects.includes(ref || '')) {
      signTokenOut();
    }
    if (Number(typeId) === 1) {
      setIsShowAirdropQuestLogin(true);
    }
    if (ref === 'telegram_wallet_task') {
      setIsShowAirdropQuestLogin(true);
    }
    if (ref === 'telegram_wallet_buy') {
      setIsShowBuyModal(true);
    }
    if (ref === 'telegram_wallet_connect') {
      setIsShowWallet(true);
    }
  }, [ref]);
  useEffect(() => {
    if (!token) {
      handleLogin();
    } else {
      if (gameMessage?.functionName === COMMUNICATIONFUNCTION.LOGIN_REQUEST) {
        sendMessage(COMMUNICATIONFUNCTION.LOGIN_SUCCESS, token);
      }
    }

    if (token && gameMessage?.functionName === COMMUNICATIONFUNCTION.LOADED_ALL) {
      setIsLoading(false);
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
    if (token && gameMessage?.functionName === COMMUNICATIONFUNCTION.SHOW_INVITE) {
      setIsShowAirdropQuestLogin(true);
    }
  }, [gameMessage, token]);

  const walletCheckin = useCallback(async () => {
    const resOnboard = await OnboardingRepository.UpdateUserQuests({
      id: 1
    });
  }, []);

  useEffect(() => {
    if (isCheckIn) {
      walletCheckin();
    }
  }, [isCheckIn]);
  const [pack, setPack] = useStateCallback<any>(undefined);
  const [isBuy, setIsBuy] = useState(false);

  return (
    <Wrapper>
      {isLoading && <Loading />}
      {isShowAirdropQuestLogin && (
        <AirdropQuests
          onClose={() => {
            setIsShowAirdropQuestLogin(false);
          }}
          purchaseAqua={() => {
            setIsShowBuyModal(true);
          }}
          typeId={Number(typeId || 0)}
          functionName={gameMessage?.functionName}
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
