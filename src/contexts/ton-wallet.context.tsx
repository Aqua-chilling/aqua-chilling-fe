import { INotification, NOTIFICATION_TYPE, NotificationComponent } from '@/components/notification/notification';
import useInterval from '@/hooks/use-interval';
import { CHAIN, useIsConnectionRestored, useTonConnectUI, useTonWallet } from '@tonconnect/ui-react';
import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { OauthRepository } from '@/repositories/oauth/oauth.repository';
import { useDispatch } from 'react-redux';
import { deleteAccount, updateAccount, updateDiscordId, updateReferral, updateTwitterId } from '@/redux';
import { ENVS } from '@/config';
import { setAccessGameToken } from '@/utilities/http-game.utils';
import { setAccessToken } from '@/utilities';
import { updateTelegramId } from '@/redux/telegram-id';
import { useNotification } from './notification.context';
export interface IDefaultNotificationContext {
  tonConnectUI: any;
  signIn: any;
  signOut: any;
  signTokenOut: any;
  isLoading: boolean;
}
const TonWalletContext = createContext<IDefaultNotificationContext | undefined>(undefined);

const refreshIntervalMs = 60 * 60 * 1000;
export const TonWalletContextProvider = ({ children }: { children: any }) => {
  const firstProofLoading = useRef<boolean>(true);
  const [tonConnectUI] = useTonConnectUI();
  const isConnectionRestored = useIsConnectionRestored();
  const wallet = useTonWallet();
  const dispatch = useDispatch();
  const { addNotification } = useNotification();
  const [isLoading, setIsLoading] = useState(false);
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
        const activeChain = ENVS.VITE_ISTESTNET ? CHAIN.TESTNET : CHAIN.MAINNET;
        const activeChainName = ENVS.VITE_ISTESTNET ? 'Testnet' : 'Mainnet';
        console.log('activeChian', activeChainName, activeChain);
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
          setIsLoading(true);
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
                setAccessGameToken(tonOauthResponse?.token);
                setAccessToken(tonOauthResponse?.token);
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
                dispatch(
                  updateTelegramId({
                    telegram: tonOauthResponse?.telegram
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
            })
            .finally(() => {
              setIsLoading(false);
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
          tonConnectUI.disconnect();
        }
      }),
    [tonConnectUI, isConnectionRestored]
  );

  const signIn = useCallback(async () => {
    if (!wallet) {
      console.log('!w');
      dispatch(deleteAccount());
      return;
    }
    if (wallet.connectItems?.tonProof && 'proof' in wallet.connectItems.tonProof) {
      const account = wallet.account;
      const proof = wallet.connectItems.tonProof.proof;
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
            setAccessGameToken(tonOauthResponse?.token);
            setAccessToken(tonOauthResponse?.token);
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
            dispatch(
              updateTelegramId({
                telegram: tonOauthResponse?.telegram
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
      tonConnectUI.disconnect();
    }
  }, [wallet]);

  const signOut = useCallback(async () => {
    console.log('ton', tonConnectUI.connected);
    if (tonConnectUI.connected) {
      await tonConnectUI.disconnect();
    }

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
  }, [tonConnectUI, dispatch]);

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
  return (
    <TonWalletContext.Provider value={{ tonConnectUI, signIn, signOut, signTokenOut, isLoading }}>
      {children}
    </TonWalletContext.Provider>
  );
};
export const useTonWalletContext = () => {
  const context = useContext(TonWalletContext);
  if (!context) {
    throw new Error('Ton Wallet Context not found');
  }
  return context;
};
