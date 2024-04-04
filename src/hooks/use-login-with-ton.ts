import { ENVS } from '@/config';
import { OauthRepository } from '@/repositories/oauth/oauth.repository';
import {
  CHAIN,
  useIsConnectionRestored,
  useTonConnectModal,
  useTonConnectUI,
  useTonWallet
} from '@tonconnect/ui-react';
import { useEffect, useState, useRef, useCallback } from 'react';
import { useNotification } from '@/contexts/notification.context';
import { NOTIFICATION_TYPE } from '@/components/notification/notification';
import { dispatch } from '@/app/store';
import { deleteAccount, updateAccount, updateDiscordId, updateTwitterId } from '@/redux';
import { updateReferral } from '@/redux/referral';
import useInterval from './use-interval';
const refreshIntervalMs = 60 * 60 * 1000;
export const useLoginWithTon = () => {
  const firstProofLoading = useRef<boolean>(true);
  const [tonConnectUI] = useTonConnectUI();
  const isConnectionRestored = useIsConnectionRestored();
  const wallet = useTonWallet();
  const { addNotification } = useNotification();
  const { open } = useTonConnectModal();
  const recreateProofPayload = useCallback(async () => {
    if (firstProofLoading.current) {
      tonConnectUI.setConnectRequestParameters({ state: 'loading' });
      firstProofLoading.current = false;
    }
    console.log('debug1');

    const payload = await OauthRepository.generateTonPayload();
    console.log('payload', payload);
    if (payload) {
      console.log('update ton');
      tonConnectUI.setConnectRequestParameters({
        state: 'ready',
        value: {
          tonProof: payload?.payload
        }
      });
    } else {
      tonConnectUI.setConnectRequestParameters(null);
    }
  }, [tonConnectUI, firstProofLoading]);
  useInterval(recreateProofPayload, refreshIntervalMs);
  if (firstProofLoading.current) {
    recreateProofPayload();
  }

  useEffect(
    () =>
      tonConnectUI.onStatusChange(async (w) => {
        console.log('hi', w);
        const activeChain = !ENVS.VITE_ISTESTNET ? CHAIN.TESTNET : CHAIN.MAINNET;
        const activeChainName = ENVS.VITE_ISTESTNET ? 'Testnet' : 'Mainnet';
        if (!isConnectionRestored) {
          console.log('!isConnectionRestored');
          return;
        }
        if (!w) {
          console.log('!w');
          dispatch(deleteAccount());
          return;
        }
        // if (w.account?.chain !== activeChain) {
        //   console.log('invalid chain', activeChain, w.account?.chain);
        //   dispatch(deleteAccount());
        //   tonConnectUI.disconnect();
        //   addNotification({
        //     message: `Invalid chain. Please switch to TON ${activeChainName}`,
        //     type: NOTIFICATION_TYPE.ERROR,
        //     id: new Date().getTime()
        //   });
        //   return;
        // }

        if (w.connectItems?.tonProof && 'proof' in w.connectItems.tonProof) {
          const account = w.account;
          const proof = w.connectItems.tonProof.proof;
          const tonProof = {
            address: account.address,
            network: account.chain,
            proof: {
              ...proof,
              state_init: account.walletStateInit
            }
          };

          console.log('tonProof', tonProof);
          OauthRepository.oauthTon(tonProof)
            .then((tonOauthResponse) => {
              if (tonOauthResponse?.token) {
                addNotification({
                  message: 'Sign with TON successfully',
                  type: NOTIFICATION_TYPE.SUCCESS,
                  id: new Date().getTime()
                });
                dispatch(
                  updateAccount({
                    email: tonOauthResponse?.email,
                    address: tonOauthResponse?.address,
                    token: tonOauthResponse?.token,
                    id: tonOauthResponse?.id,
                    name: tonOauthResponse?.name
                  })
                );
                dispatch(
                  updateDiscordId({
                    discord: tonOauthResponse?.discord
                  })
                );
                dispatch(
                  updateTwitterId({
                    twitter: tonOauthResponse?.twitter
                  })
                );
                dispatch(
                  updateReferral({
                    referral_code: tonOauthResponse?.referral_code,
                    refreferral_code_status: tonOauthResponse?.referral_code_status
                  })
                );
              } else {
                addNotification({
                  message: 'Something went wrong! Try another wallet or try again later!',
                  type: NOTIFICATION_TYPE.ERROR,
                  id: new Date().getTime()
                });
                tonConnectUI.disconnect();
              }
            })
            .catch(() => {
              addNotification({
                message: `Something went wrong! Try another wallet or try again later!`,
                type: NOTIFICATION_TYPE.ERROR,
                id: new Date().getTime()
              });
              tonConnectUI.disconnect();
            });
        } else {
          console.log('invalid proof');
          addNotification({
            message: 'Sign with TON failed',
            type: NOTIFICATION_TYPE.ERROR,
            id: new Date().getTime()
          });
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
            updateReferral({
              referral_code: '',
              refreferral_code_status: 0
            })
          );
          tonConnectUI.disconnect();
        }
      }),
    [tonConnectUI, isConnectionRestored]
  );

  const signOut = useCallback(()=>{
    tonConnectUI.disconnect();
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
      updateReferral({
        referral_code: '',
        refreferral_code_status: 0
      })
    );
  }, [tonConnectUI,dispatch])
  return {
    open,
    signOut
  };
};
