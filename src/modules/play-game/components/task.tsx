import X from '@/assets/X.png';
import { Wrapper } from './task.styled';
import { OnboardingRepository } from '@/repositories/onboarding/onboarding.repository';
import React from 'react';
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
import { beginCell, Address, toNano } from '@ton/ton';
import { gasFee, getTwitterOauthUrl, validUntil } from '@/constants/app-constaints';
import { useQuery } from 'react-query';
import { CopyOutlined, DisconnectOutlined } from '@ant-design/icons';
export const Task = ({ setStep, purchaseAqua }: { setStep: (step: number) => void; purchaseAqua: () => void }) => {
  const address = useTonAddress();
  const { userProfile } = useAccountInfoContext();
  const token = useSelector(selectToken);
  const [isLoading, setIsLoading] = React.useState(-1);
  const { data: userQuest, refetch: refetchQuest } = useQuery({
    queryKey: ['retrieveUserQuest', token],
    queryFn: () => OnboardingRepository.RetrieveUserQuests(),
    retry: false,
    refetchInterval: 5000,
    enabled: !!token
  });
  const is_checkin_wallet = userQuest?.[0]?.status !== 0;
  const is_logged_in = userQuest?.[1]?.status !== 0;
  const is_buy_aqua = userQuest?.[2]?.status !== 0;
  const is_daily_invite = userQuest?.[3]?.status !== 0;
  const is_visit_aqua_web = userQuest?.[4]?.status !== 0;
  const is_telegram_premium = userQuest?.[8]?.status !== 0;
  const isJoinedTelegram = userProfile?.telegramOnboard?.aquachilling;
  const isFollowed = userQuest?.[5]?.status !== 0;
  const isRetweeded = userQuest?.[6]?.status !== 0;
  console.log('quesst', userQuest);
  const [tonConnectUI] = useTonConnectUI();
  const wallet = useTonWallet();
  const { addNotification } = useNotification();
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
                  is_checkin_wallet && '!bg-[#3F4958] !border-[#0C2449] !text-[#FFFFFF33] cursor-default               '
                }`}
                onClick={async () => {
                  try {
                    if (!tonConnectUI.connected || !wallet) {
                      tonConnectUI.openModal();
                      return;
                    }
                    setIsLoading(1);
                    const transactionPayload = beginCell()
                      .storeUint(0, 32)
                      .storeStringTail(`${userProfile?.id}-${0}-${0}`)
                      .endCell();
                    const messages = [
                      {
                        address: ENVS.VITE_BASE_PACKAGE_TON_CONTRACT, //CONTRACT
                        amount: toNano(gasFee)?.toString(),
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
                    console.log('res', res);
                    if (res) {
                      const resOnboard = await OnboardingRepository.UpdateUserQuests({
                        id: 1
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
                {is_checkin_wallet ? 'Completed' : !!wallet ? 'Start' : 'Connect TON Wallet'}
              </div>
              {!!wallet && (
                <div className='absolute connected-account opacity-0 min-w-[200px] rounded-xl'>
                  <div
                    className='w-full flex items-center justify-start gap-2 cursor-pointer p-2'
                    onClick={() => {
                      navigator.clipboard.writeText(address);
                      addNotification({
                        message: 'Copied!',
                        type: NOTIFICATION_TYPE.SUCCESS,
                        id: new Date().getTime()
                      });
                    }}
                  >
                    <CopyOutlined
                      style={{
                        fontSize: '16px',
                        color: 'white',
                        strokeWidth: '30', // --> higher value === more thickness the filled area
                        stroke: 'white'
                      }}
                    />
                    <span className='text-[white] font-semibold'>Copy Address</span>
                  </div>
                  <div
                    className='w-full flex items-center justify-start gap-2 cursor-pointer p-2'
                    onClick={async () => {
                      try {
                        await tonConnectUI.disconnect();
                      } catch (err) {
                        console.log('err', err);
                        addNotification({
                          message: 'Something went wrong!',
                          type: NOTIFICATION_TYPE.ERROR,
                          id: new Date().getTime()
                        });
                      }
                    }}
                  >
                    <DisconnectOutlined
                      style={{
                        fontSize: '16px',
                        color: 'white',
                        strokeWidth: '30', // --> higher value === more thickness the filled area
                        stroke: 'white'
                      }}
                    />
                    <span className='text-[white] font-semibold'>Disconnect</span>
                  </div>
                </div>
              )}
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
                is_logged_in && '!bg-[#3F4958] !border-[#0C2449] !text-[#FFFFFF33] cursor-default               '
              }`}
            >
              {!is_logged_in ? 'Start' : 'Completed'}
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
                is_buy_aqua && '!bg-[#3F4958] !border-[#0C2449] !text-[#FFFFFF33] cursor-default               '
              }`}
              onClick={purchaseAqua}
            >
              {!is_buy_aqua ? 'Start' : 'Completed'}
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
                is_daily_invite && '!bg-[#3F4958] !border-[#0C2449] !text-[#FFFFFF33] cursor-default               '
              }`}
              onClick={() => {
                setStep(2);
              }}
            >
              {!is_daily_invite ? 'Start' : 'Completed'}
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
                is_visit_aqua_web && '!bg-[#3F4958] !border-[#0C2449] !text-[#FFFFFF33] cursor-default               '
              }`}
              onClick={async () => {
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
              }}
            >
              {!is_visit_aqua_web ? 'Start' : 'Completed'}
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
                    window.open(`https://twitter.com/Aquachilling`, '_blank');
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
                    window.open(`https://twitter.com/Aquachilling/status/1772973413365141606`, '_blank');
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
                      console.log('webApp', WebApp?.version);
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
