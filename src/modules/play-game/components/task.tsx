import X from '@/assets/X.png';
import { Wrapper } from './task.styled';
import { OnboardingRepository } from '@/repositories/onboarding/onboarding.repository';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectToken } from '@/redux';
import { NOTIFICATION_TYPE } from '@/components/notification/notification';
import { useNotification } from '@/contexts/notification.context';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import WebApp from '@twa-dev/sdk';
import { OauthRepository } from '@/repositories/oauth/oauth.repository';
import Token from '@/assets/wallet/aqua.png';
import { useAccountInfoContext } from '@/contexts/account-info.context';
import { CHAIN, useTonAddress, useTonConnectUI, useTonWallet } from '@tonconnect/ui-react';
import { ENVS } from '@/config';
import { beginCell, Address, toNano, TonClient } from '@ton/ton';
import { storeCheckInDTO, twaRedirects, validUntil } from '@/constants/app-constaints';
import { useQuery } from 'react-query';
import { CopyOutlined, DisconnectOutlined } from '@ant-design/icons';
import { waitForTransaction } from '@/utilities/transaction.utils';
export const Task = ({ setStep, purchaseAqua }: { setStep: (step: number) => void; purchaseAqua: () => void }) => {
  const address = useTonAddress();
  const { userProfile, firstLogin, setFirstLogin } = useAccountInfoContext();
  const token = useSelector(selectToken);
  const [isLoading, setIsLoading] = React.useState(-1);
  const { data: userQuest, refetch: refetchQuest } = useQuery({
    queryKey: ['retrieveUserQuest', token],
    queryFn: () => OnboardingRepository.RetrieveUserQuests(),
    retry: false,
    refetchInterval: 5000,
    enabled: !!token
  });
  const [checkInState, setCheckInState] = useState(0);

  const is_checkin_wallet = userQuest?.[0]?.status;
  const is_logged_in = userQuest?.[1]?.status;
  const is_buy_aqua = userQuest?.[2]?.status;
  const is_daily_invite = userQuest?.[3]?.status;
  const is_visit_aqua_web = userQuest?.[4]?.status;
  const is_telegram_premium = userQuest?.[8]?.status !== 0;
  const isJoinedTelegram = userProfile?.telegramOnboard?.aquachilling;
  const isFollowed = userQuest?.[5]?.status !== 0;
  const isRetweeded = userQuest?.[6]?.status !== 0;
  const [tonConnectUI] = useTonConnectUI();
  const wallet = useTonWallet();
  const { addNotification } = useNotification();
  const ref = WebApp.initDataUnsafe.start_param;
  React.useEffect(() => {
    const ele = document.querySelector('#connect-telegram');
    const script = document.createElement('script');
    script.src = '';
    script.async = true;
    script.setAttribute('src', 'https://telegram.org/js/telegram-widget.js?22');
    script.setAttribute('data-telegram-login', 'aquachilling_verification_bot');
    script.setAttribute('data-size', 'large');
    script.setAttribute('data-userpic', 'false');
    script.setAttribute('data-auth-url', `${ENVS.VITE_BASE_GAME_API}v1/auth/telegram`);
    script.setAttribute('data-request-access', 'write');

    ele?.appendChild(script);
  }, []);

  React.useEffect(
    () =>
      tonConnectUI.onStatusChange(async (w) => {
        const activeChain = ENVS.VITE_ISTESTNET ? CHAIN.TESTNET : CHAIN.MAINNET;
        const activeChainName = ENVS.VITE_ISTESTNET ? 'Testnet' : 'Mainnet';
        if (!!w && w.account?.chain !== activeChain) {
          tonConnectUI.disconnect();
          addNotification({
            message: `Invalid chain. Please switch to TON ${activeChainName}`,
            type: NOTIFICATION_TYPE.ERROR,
            id: new Date().getTime()
          });
          return;
        }
      }),
    [tonConnectUI]
  );

  const callCheckIn = async () => {
    const activeChain = ENVS.VITE_ISTESTNET ? CHAIN.TESTNET : CHAIN.MAINNET;
    const activeChainName = ENVS.VITE_ISTESTNET ? 'Testnet' : 'Mainnet';
    if (tonConnectUI.account?.chain !== activeChain) {
      tonConnectUI.disconnect();
      addNotification({
        message: `Invalid chain. Please switch to TON ${activeChainName}`,
        type: NOTIFICATION_TYPE.ERROR,
        id: new Date().getTime()
      });
      return;
    }
    setIsLoading(1);
    if (tonConnectUI)
      tonConnectUI.uiOptions = {
        actionsConfiguration: {
          returnStrategy: 'back',
          twaReturnUrl: 'https://t.me/aquachillingbot/aquachillingapp?startapp=telegram_wallet_checkin'
        }
      };
    const transactionPayload = beginCell()
      .store(
        storeCheckInDTO({
          $$type: 'CheckInDTO',
          user_id: userProfile?.seq_id
        })
      )
      .endCell();
    const checkinAddress = Address.parse(ENVS.VITE_BASE_CHECKIN_CONTRACT).toString();
    const messages = [
      {
        address: checkinAddress, //CONTRACT
        amount: toNano('0.02')?.toString(),
        payload: transactionPayload.toBoc().toString('base64')
      }
    ];
    const transaction = {
      validUntil: Math.floor(Date.now() / 1000) + validUntil,
      network: ENVS?.VITE_ISTESTNET ? CHAIN.TESTNET : CHAIN.MAINNET,
      from: wallet?.account?.address || '',
      messages: messages
    };

    const res = await tonConnectUI.sendTransaction(transaction);
    if (res.boc) {
      setCheckInState(1);
      const waitOptions = {
        boc: res?.boc,
        address: tonConnectUI.account?.address ?? ''
      };
      const client = new TonClient({
        endpoint: ENVS.VITE_ISTESTNET
          ? 'https://testnet.toncenter.com/api/v2/jsonRPC'
          : 'https://toncenter.com/api/v2/jsonRPC'
      });
      const checkTran = await waitForTransaction(waitOptions, client, () => {
        setCheckInState(2);
      });
      if (!checkTran) {
        setCheckInState(0);
      }
    }
  };
  const checkConnect = useCallback(() => {
    if (!tonConnectUI.connected || !tonConnectUI?.wallet) {
      window.setTimeout(checkConnect, 500);
    } else {
      callCheckIn();
    }
  }, [tonConnectUI]);
  useEffect(() => {
    if (ref === 'telegram_wallet_task' && tonConnectUI?.wallet) {
      if (tonConnectUI)
        tonConnectUI.uiOptions = {
          actionsConfiguration: {
            returnStrategy: 'back',
            twaReturnUrl: 'https://t.me/aquachillingbot/aquachillingapp'
          }
        };
      callCheckIn();
    }
    if (ref === 'telegram_wallet_checkin') {
      if (tonConnectUI)
        tonConnectUI.uiOptions = {
          actionsConfiguration: {
            returnStrategy: 'back',
            twaReturnUrl: 'https://t.me/aquachillingbot/aquachillingapp'
          }
        };
      addNotification({
        message: `Transaction received. Please wait a few seconds for blockchain to proceed`,
        type: NOTIFICATION_TYPE.SUCCESS,
        id: new Date().getTime()
      });
    }
  }, [ref, tonConnectUI]);
  return (
    <Wrapper>
      <div className='table'>
        <div className='table-row'>
          <div className='flex flex-col items-center reward-card'>
            <div className='font-normal text-xs text-[#B8C2D0] font-secondary relative z-[1]'>Reward</div>
            <div className='flex items-center gap-1 relative z-[1]'>
              <span>10</span>
              <img src={Token} alt='' className='w-4' />
            </div>
          </div>
          <div className='flex flex-col items-start'>
            <div className='font-secondary font-medium text-xs text-[#FFFFFF]'>Wallet check-in</div>
            <div className='font-secondary font-normal text-xs text-[#FFFFFF] opacity-70 mt-1'>
              Check-in with Telegram Wallet (minimum transaction)
            </div>
            <div className='w-fit relative task-button-wrapper'>
              <div
                className={`task-button mt-3 bg-[#7AEFFF] px-4 py-[2px] border-[2px] rounded-[8px] border-[#4C99D1] font-secondary text-xs font-semibold text-[#FFFFFF] cursor-pointer ${
                  is_checkin_wallet === 2 &&
                  '!bg-[#3F4958] !border-[#0C2449] !text-[#FFFFFF33] cursor-default               '
                }`}
                onClick={async () => {
                  try {
                    if (checkInState !== 0) {
                      addNotification({
                        message: `Transaction received. Please wait a few minutes for blockchain to proceed`,
                        type: NOTIFICATION_TYPE.SUCCESS,
                        id: new Date().getTime()
                      });
                    }
                    if (is_checkin_wallet === 0) {
                      if (tonConnectUI)
                        tonConnectUI.uiOptions = {
                          actionsConfiguration: {
                            returnStrategy: 'back',
                            twaReturnUrl: 'https://t.me/aquachillingbot/aquachillingapp?startapp=telegram_wallet_task'
                          }
                        };

                      if (firstLogin && !twaRedirects.includes(ref || '')) {
                        try {
                          setFirstLogin(false);
                          await tonConnectUI.disconnect();
                        } catch {}
                      }
                      if (!tonConnectUI.connected || !wallet) {
                        tonConnectUI.openModal();
                      }
                      checkConnect();
                    } else if (is_checkin_wallet === 1) {
                      const res = await OnboardingRepository.ClaimQuest(1);
                      if (res) {
                        addNotification({
                          message: 'Claimed!',
                          type: NOTIFICATION_TYPE.SUCCESS,
                          id: new Date().getTime()
                        });
                      } else {
                        addNotification({
                          message: 'Something went wrong! Try again later',
                          type: NOTIFICATION_TYPE.ERROR,
                          id: new Date().getTime()
                        });
                      }
                      refetchQuest();
                    }
                  } catch (err: any) {
                    addNotification({
                      message: err?.message || 'Something went wrong',
                      type: NOTIFICATION_TYPE.SUCCESS,
                      id: new Date().getTime()
                    });
                  }
                }}
              >
                {is_checkin_wallet === 2
                  ? 'Completed'
                  : is_checkin_wallet === 1
                  ? 'Claim'
                  : checkInState !== 0
                  ? 'In progress...'
                  : 'Start'}
              </div>
            </div>
          </div>
        </div>
        <div className='table-row'>
          <div className='flex flex-col items-center reward-card'>
            <div className='font-normal text-xs text-[#B8C2D0] font-secondary relative z-[1]'>Reward</div>
            <div className='flex items-center gap-1 relative z-[1]'>
              <span>2</span>
              <img src={Token} alt='' className='w-4' />
            </div>
          </div>
          <div className='flex flex-col items-start'>
            <div className='font-secondary font-medium text-xs text-[#FFFFFF]'>Log in to Aquachilling</div>
            <div className='font-secondary font-normal text-xs text-[#FFFFFF] opacity-70 mt-1'>
              Login in to game once
            </div>
            <div
              className={`task-button mt-3 bg-[#7AEFFF] px-4 py-[2px] border-[2px] rounded-[8px] border-[#4C99D1] font-secondary text-xs font-semibold text-[#FFFFFF] cursor-pointer ${
                is_logged_in === 2 && '!bg-[#3F4958] !border-[#0C2449] !text-[#FFFFFF33] cursor-default               '
              }`}
              onClick={async () => {
                if (is_logged_in === 1) {
                  const res = await OnboardingRepository.ClaimQuest(2);
                  if (res) {
                    addNotification({
                      message: 'Claimed!',
                      type: NOTIFICATION_TYPE.SUCCESS,
                      id: new Date().getTime()
                    });
                  } else {
                    addNotification({
                      message: 'Something went wrong! Try again later',
                      type: NOTIFICATION_TYPE.ERROR,
                      id: new Date().getTime()
                    });
                  }
                  refetchQuest();
                }
              }}
            >
              {is_logged_in === 0 ? 'Start' : is_logged_in === 1 ? 'Claim' : 'Completed'}
            </div>
          </div>
        </div>
        <div className='table-row'>
          <div className='flex flex-col items-center reward-card'>
            <div className='font-normal text-xs text-[#B8C2D0] font-secondary relative z-[1]'>Reward</div>
            <div className='flex items-center gap-1 relative z-[1]'>
              <span>100</span>
              <img src={Token} alt='' className='w-4' />
            </div>
          </div>
          <div className='flex flex-col items-start'>
            <div className='font-secondary font-medium text-xs text-[#FFFFFF]'>Daily purchase with TON</div>
            <div className='font-secondary font-normal text-xs text-[#FFFFFF] opacity-70 mt-1'>
              Use TON to buy $AQUA in game
            </div>
            <div
              className={`task-button mt-3 bg-[#7AEFFF] px-4 py-[2px] border-[2px] rounded-[8px] border-[#4C99D1] font-secondary text-xs font-semibold text-[#FFFFFF] cursor-pointer ${
                is_buy_aqua === 2 && '!bg-[#3F4958] !border-[#0C2449] !text-[#FFFFFF33] cursor-default               '
              }`}
              onClick={async () => {
                if (is_buy_aqua === 0) await purchaseAqua();
                else if (is_buy_aqua === 1) {
                  const res = await OnboardingRepository.ClaimQuest(3);
                  if (res) {
                    addNotification({
                      message: 'Claimed!',
                      type: NOTIFICATION_TYPE.SUCCESS,
                      id: new Date().getTime()
                    });
                  } else {
                    addNotification({
                      message: 'Something went wrong! Try again later',
                      type: NOTIFICATION_TYPE.ERROR,
                      id: new Date().getTime()
                    });
                  }
                  refetchQuest();
                }
              }}
            >
              {is_buy_aqua === 0 ? 'Start' : is_buy_aqua === 1 ? 'Claim' : 'Completed'}
            </div>
          </div>
        </div>
        <div className='table-row'>
          <div className='flex flex-col items-center reward-card'>
            <div className='font-normal text-xs text-[#B8C2D0] font-secondary relative z-[1]'>Reward</div>
            <div className='flex items-center gap-1 relative z-[1]'>
              <span>5</span>
              <img src={Token} alt='' className='w-4' />
            </div>
          </div>
          <div className='flex flex-col items-start'>
            <div className='font-secondary font-medium text-xs text-[#FFFFFF]'>Daily invite</div>
            <div className='font-secondary font-normal text-xs text-[#FFFFFF] opacity-70 mt-1'>
              Invite your friend to Aquachilling
            </div>
            <div
              className={`task-button mt-3 bg-[#7AEFFF] px-4 py-[2px] border-[2px] rounded-[8px] border-[#4C99D1] font-secondary text-xs font-semibold text-[#FFFFFF] cursor-pointer ${
                is_daily_invite === 2 &&
                '!bg-[#3F4958] !border-[#0C2449] !text-[#FFFFFF33] cursor-default               '
              }`}
              onClick={async () => {
                if (is_daily_invite === 0) setStep(2);
                else if (is_daily_invite === 1) {
                  const res = await OnboardingRepository.ClaimQuest(4);
                  if (res) {
                    addNotification({
                      message: 'Claimed!',
                      type: NOTIFICATION_TYPE.SUCCESS,
                      id: new Date().getTime()
                    });
                  } else {
                    addNotification({
                      message: 'Something went wrong! Try again later',
                      type: NOTIFICATION_TYPE.ERROR,
                      id: new Date().getTime()
                    });
                  }
                  refetchQuest();
                }
              }}
            >
              {is_daily_invite === 0 ? 'Start' : is_daily_invite === 1 ? 'Claim' : 'Completed'}
            </div>
          </div>
        </div>
        <div className='table-row'>
          <div className='flex flex-col items-center reward-card'>
            <div className='font-normal text-xs text-[#B8C2D0] font-secondary relative z-[1]'>Reward</div>
            <div className='flex items-center gap-1 relative z-[1]'>
              <span>2</span>
              <img src={Token} alt='' className='w-4' />
            </div>
          </div>
          <div className='flex flex-col items-start'>
            <div className='font-secondary font-medium text-xs text-[#FFFFFF]'>Visit Aquachilling website</div>
            <div
              className={`task-button mt-3 bg-[#7AEFFF] px-4 py-[2px] border-[2px] rounded-[8px] border-[#4C99D1] font-secondary text-xs font-semibold text-[#FFFFFF] cursor-pointer ${
                is_visit_aqua_web === 2 &&
                '!bg-[#3F4958] !border-[#0C2449] !text-[#FFFFFF33] cursor-default               '
              }`}
              onClick={async () => {
                if (is_visit_aqua_web === 0) {
                  window.open(window.location.origin, '_blank');
                  const res = await OnboardingRepository.UpdateUserQuests({
                    id: 5
                  });
                  if (res) {
                    addNotification({
                      message: 'Quest done!',
                      type: NOTIFICATION_TYPE.SUCCESS,
                      id: new Date().getTime()
                    });
                  } else {
                    addNotification({
                      message: 'Something went wrong! Try again later',
                      type: NOTIFICATION_TYPE.ERROR,
                      id: new Date().getTime()
                    });
                  }
                  refetchQuest();
                } else if (is_visit_aqua_web === 1) {
                  const res = await OnboardingRepository.ClaimQuest(5);
                  if (res) {
                    addNotification({
                      message: 'Claimed!',
                      type: NOTIFICATION_TYPE.SUCCESS,
                      id: new Date().getTime()
                    });
                  } else {
                    addNotification({
                      message: 'Something went wrong! Try again later',
                      type: NOTIFICATION_TYPE.ERROR,
                      id: new Date().getTime()
                    });
                  }
                  refetchQuest();
                }
              }}
            >
              {is_visit_aqua_web === 0 ? 'Start' : is_visit_aqua_web === 1 ? 'Claim' : 'Completed'}
            </div>
          </div>
        </div>
        <div className='table-row'>
          <div className='flex flex-col items-center reward-card'>
            <div className='font-normal text-xs text-[#B8C2D0] font-secondary relative z-[1]'>Reward</div>
            <div className='flex items-center gap-1 relative z-[1]'>
              <span>20</span>
              <img src={Token} alt='' className='w-4' />
            </div>
          </div>
          <div className='flex flex-col items-start'>
            <div className='font-secondary font-medium text-xs text-[#FFFFFF]'>Follow us on X</div>
            <div
              className={`task-button mt-3 bg-[#7AEFFF] px-4 py-[2px] border-[2px] rounded-[8px] border-[#4C99D1] font-secondary text-xs font-semibold text-[#FFFFFF] cursor-pointer ${
                isFollowed && '!bg-[#3F4958] !border-[#0C2449] !text-[#FFFFFF33] cursor-default               '
              }`}
            >
              {isFollowed ? (
                <div className='flex items-center gap-1'>Completed</div>
              ) : (
                <div
                  className='flex items-center gap-1'
                  onClick={async () => {
                    WebApp.openLink(`https://twitter.com/Aquachilling`, {
                      try_instant_view: true
                    });
                    // window.open(`https://twitter.com/Aquachilling`, '_blank');
                    setTimeout(async () => {
                      const resOnboard = await OnboardingRepository.UpdateUserQuests({
                        id: 6
                      });
                      if (resOnboard) {
                        addNotification({
                          message: 'Quest done!',
                          type: NOTIFICATION_TYPE.SUCCESS,
                          id: new Date().getTime()
                        });
                      } else {
                        addNotification({
                          message: 'Something went wrong! Try again later',
                          type: NOTIFICATION_TYPE.ERROR,
                          id: new Date().getTime()
                        });
                      }
                      refetchQuest();
                    }, 10000);
                  }}
                >
                  <img className='w-5' src={X} alt='' />
                  Follow us on X
                  {/* {isLoading && <Spin indicator={<LoadingOutlined style={{ fontSize: 16 }} spin />} />} */}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className='table-row'>
          <div className='flex flex-col items-center reward-card'>
            <div className='font-normal text-xs text-[#B8C2D0] font-secondary relative z-[1]'>Reward</div>
            <div className='flex items-center gap-1 relative z-[1]'>
              <span>5</span>
              <img src={Token} alt='' className='w-4' />
            </div>
          </div>
          <div className='flex flex-col items-start'>
            <div className='font-secondary font-medium text-xs text-[#FFFFFF]'>Retweet about us</div>
            <div className='font-secondary font-normal text-xs text-[#FFFFFF] opacity-70 mt-1'>
              Retweet 1 post on X (Twitter)
            </div>
            <div
              className={`task-button mt-3 bg-[#7AEFFF] px-4 py-[2px] border-[2px] rounded-[8px] border-[#4C99D1] font-secondary text-xs font-semibold text-[#FFFFFF] cursor-pointer ${
                isRetweeded && '!bg-[#3F4958] !border-[#0C2449] !text-[#FFFFFF33] cursor-default               '
              }`}
            >
              {isRetweeded ? (
                <div className='flex items-center gap-1'>Completed</div>
              ) : (
                <div
                  className='flex items-center gap-1'
                  onClick={() => {
                    WebApp.openLink(`https://x.com/Aquachilling/status/1802696100257948012`, {
                      try_instant_view: true
                    });
                    // window.open(`https://twitter.com/Aquachilling/status/1772973413365141606`, '_blank');
                    setTimeout(async () => {
                      const resOnboard = await OnboardingRepository.UpdateUserQuests({
                        id: 7
                      });
                      if (resOnboard) {
                        addNotification({
                          message: 'Quest done!',
                          type: NOTIFICATION_TYPE.SUCCESS,
                          id: new Date().getTime()
                        });
                      } else {
                        addNotification({
                          message: 'Something went wrong! Try again later',
                          type: NOTIFICATION_TYPE.ERROR,
                          id: new Date().getTime()
                        });
                      }
                      refetchQuest();
                    }, 10000);
                  }}
                >
                  <img className='w-5' src={X} alt='' />
                  Retweet
                  {/* {isLoading && <Spin indicator={<LoadingOutlined style={{ fontSize: 16 }} spin />} />} */}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className='table-row'>
          <div className='flex flex-col items-center reward-card'>
            <div className='font-normal text-xs text-[#B8C2D0] font-secondary relative z-[1]'>Reward</div>
            <div className='flex items-center gap-1 relative z-[1]'>
              <span>20</span>
              <img src={Token} alt='' className='w-4' />
            </div>
          </div>
          <div className='flex flex-col items-start'>
            <div className='font-secondary font-medium text-xs text-[#FFFFFF]'>Join announcement channel</div>
            <div className='font-secondary font-normal text-xs text-[#FFFFFF] opacity-70 mt-1'>
              Join Aquachilling Telegram
            </div>
            <div
              className={`task-button mt-3 bg-[#7AEFFF] px-4 py-[2px] border-[2px] rounded-[8px] border-[#4C99D1] font-secondary text-xs font-semibold text-[#FFFFFF] cursor-pointer ${
                isJoinedTelegram && '!bg-[#3F4958] !border-[#0C2449] !text-[#FFFFFF33]   cursor-default             '
              }`}
            >
              {userProfile?.telegram ? (
                isJoinedTelegram ? (
                  <div className=''>Completed</div>
                ) : (
                  <div
                    className=''
                    onClick={() => {
                      if (!WebApp?.initDataUnsafe?.user) window.open('https://t.me/aquachilling');
                      else {
                        WebApp.openTelegramLink('https://t.me/aquachilling');
                      }
                    }}
                  >
                    Join Telegram Channel
                  </div>
                )
              ) : WebApp?.initDataUnsafe?.user?.id ? (
                <div
                  className=''
                  onClick={() => {
                    const user = WebApp.initDataUnsafe;
                    setIsLoading(11);
                    OauthRepository.linkTelegramAccount({
                      telegram_code: undefined,
                      id: user.user?.id,
                      first_name: user.user?.first_name,
                      last_name: user.user?.last_name,
                      auth_date: user.auth_date,
                      hash: user.hash
                    })
                      .then((rs) => {
                        addNotification({
                          message: 'Link telegram successfull',
                          type: NOTIFICATION_TYPE.SUCCESS,
                          id: new Date().getTime()
                        });
                      })
                      .catch((err) => {
                        addNotification({
                          message: err,
                          type: NOTIFICATION_TYPE.ERROR,
                          id: new Date().getTime()
                        });
                      })
                      .finally(() => {
                        setIsLoading(-1);
                      });
                  }}
                >
                  Link Telegram {isLoading && <Spin indicator={<LoadingOutlined style={{ fontSize: 16 }} spin />} />}
                </div>
              ) : (
                <>
                  <div className='connect-telegram' id='connect-telegram'></div>
                  <div className='connect-telegram-text-tg'>Connect with telegram</div>
                </>
              )}
            </div>
          </div>
        </div>
        <div className='table-row'>
          <div className='flex flex-col items-center reward-card'>
            <div className='font-normal text-xs text-[#B8C2D0] font-secondary relative z-[1]'>Reward</div>
            <div className='flex items-center gap-1 relative z-[1]'>
              <span>100</span>
              <img src={Token} alt='' className='w-4' />
            </div>
          </div>
          <div className='flex flex-col items-start'>
            <div className='font-secondary font-medium text-xs text-[#FFFFFF]'>Telegram premium</div>
            <div className='font-secondary font-normal text-xs text-[#FFFFFF] opacity-70 mt-1'>
              Use Telegram Premium
            </div>
            <div
              className={`task-button mt-3 bg-[#7AEFFF] px-4 py-[2px] border-[2px] rounded-[8px] border-[#4C99D1] font-secondary text-xs font-semibold text-[#FFFFFF] cursor-pointer ${'!bg-[#3F4958] !border-[#0C2449] !text-[#FFFFFF33] cursor-default'}`}
            >
              {' '}
              {is_telegram_premium ? <div className=''>Completed</div> : 'Incompleted'}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
