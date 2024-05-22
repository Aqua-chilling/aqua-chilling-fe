import { PrimaryButton } from '@/components/button/button.styled';
import X from '@/assets/X.png';
import telegram_icon from '@/assets/telegram-icon.svg';
import nft1 from '@/assets/airdrop-detail/nft1.png';
import nft2 from '@/assets/airdrop-detail/nft2.png';
import nft3 from '@/assets/airdrop-detail/nft3.png';
import nft4 from '@/assets/airdrop-detail/nft4.png';
import { Wrapper } from './task.styled';
import { OnboardingRepository } from '@/repositories/onboarding/onboarding.repository';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectDiscord, selectReferralCode, selectTwitter } from '@/redux';
import { NOTIFICATION_TYPE } from '@/components/notification/notification';
import { useNotification } from '@/contexts/notification.context';
import { Modal } from '@/components/modal/modal';
import { selectTelegram } from '@/redux/telegram-id';
import { CompletedIconSVG, getTwitterOauthUrl } from '@/modules/airdrop/hard';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import WebApp from '@twa-dev/sdk';
import { useNavigate } from 'react-router';
import { OauthRepository } from '@/repositories/oauth/oauth.repository';
import { copyICONSVG } from '@/modules/airdrop-detail/components/referral-component/referral';
import Token from '@/assets/airdrop/token.png';
import { useAccountInfoContext } from '@/contexts/account-info.context';
import { useTonConnectUI, useTonWallet } from '@tonconnect/ui-react';
import { ENVS } from '@/config';
import { beginCell, toNano, Address } from '@ton/ton';
export const Task = ({ setStep }: { setStep: (step: number) => void }) => {
  const { userProfile } = useAccountInfoContext();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState(-1);
  console.log('user', userProfile);
  const referral_code = useSelector(selectReferralCode);
  const isJoinedTelegram = userProfile?.telegramOnboard?.aquachilling;
  const isFollowed = userProfile?.twitterOnboard?.follows?.length > 0;
  const [tonConnectUI, setOptions] = useTonConnectUI();
  const wallet = useTonWallet();
  const { addNotification } = useNotification();
  const copy = () => {
    addNotification({
      message: 'Copied',
      type: NOTIFICATION_TYPE.SUCCESS,
      id: new Date().getTime()
    });
    navigator.clipboard.writeText(referral_code || '');
  };
  React.useEffect(() => {
    const ele = document.querySelector('#connect-telegram');
    const script = document.createElement('script');
    script.src = '';
    script.async = true;
    script.setAttribute('src', 'https://telegram.org/js/telegram-widget.js?22');
    script.setAttribute('data-telegram-login', 'aquachilling_bot');
    script.setAttribute('data-size', 'large');
    script.setAttribute('data-userpic', 'false');
    script.setAttribute('data-auth-url', 'https://api-game-test.aquachilling.com/v1/auth/telegram');
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
            <div
              className={`task-button mt-3 bg-[#7AEFFF] px-4 py-[2px] border-[2px] rounded-[8px] border-[#4C99D1] font-secondary text-xs font-semibold text-[#FFFFFF] cursor-pointer ${
                false && '!bg-[#3F4958] !border-[#0C2449] !text-[#FFFFFF33]                '
              }`}
              onClick={async () => {
                if (!wallet) return;
                setIsLoading(1);
                const transactionPayload = beginCell()
                  .storeUint(3850333806, 32)
                  .storeUint(1, 64)
                  .storeInt(0, 257)
                  .storeAddress(Address.parse(wallet.account.address))
                  .storeInt(1, 257)
                  .endCell();
                const messages = [
                  {
                    address: ENVS.VITE_BASE_PACKAGE_TON_CONTRACT, //CONTRACT
                    amount: '0',
                    payload: transactionPayload.toBoc().toString('base64')
                  }
                ];
                const transaction = {
                  validUntil: Math.floor(Date.now() / 1000) + 60,
                  // network: ENVS?.VITE_ISTESTNET ? CHAIN.TESTNET : CHAIN.MAINNET,
                  // from: wallet?.account?.address || '',
                  messages: messages
                };
                const res = await tonConnectUI.sendTransaction(transaction);
                console.log('res', res);
                if (res) {
                  addNotification({
                    message: 'Bought Packages successfully!',
                    type: NOTIFICATION_TYPE.SUCCESS,
                    id: new Date().getTime()
                  });
                }
              }}
            >
              {true ? 'Start' : 'Completed'}
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
                false && '!bg-[#3F4958] !border-[#0C2449] !text-[#FFFFFF33]                '
              }`}
            >
              {true ? 'Start' : 'Completed'}
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
                true && '!bg-[#3F4958] !border-[#0C2449] !text-[#FFFFFF33]                '
              }`}
            >
              {false ? 'Start' : 'Completed'}
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
                false && '!bg-[#3F4958] !border-[#0C2449] !text-[#FFFFFF33]                '
              }`}
              onClick={() => {
                setStep(2);
              }}
            >
              {true ? 'Start' : 'Completed'}
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
                false && '!bg-[#3F4958] !border-[#0C2449] !text-[#FFFFFF33]                '
              }`}
            >
              {true ? 'Start' : 'Completed'}
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
                isFollowed && '!bg-[#3F4958] !border-[#0C2449] !text-[#FFFFFF33]                '
              }`}
            >
              {userProfile?.twitter ? (
                isFollowed ? (
                  <div className='flex items-center gap-1'>Completed</div>
                ) : (
                  <div
                    className='flex items-center gap-1'
                    onClick={() => {
                      window.open(`https://twitter.com/Aquachilling`, '_blank');
                    }}
                  >
                    <img className='w-5' src={X} alt='' />
                    Follow us on X
                    {/* {isLoading && <Spin indicator={<LoadingOutlined style={{ fontSize: 16 }} spin />} />} */}
                  </div>
                )
              ) : (
                <div
                  className='flex items-center gap-1'
                  onClick={() => {
                    window.open(getTwitterOauthUrl(), '_blank', '');
                  }}
                >
                  Link X Account
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
                true && '!bg-[#3F4958] !border-[#0C2449] !text-[#FFFFFF33]                '
              }`}
            >
              {/* {userProfile?.telegram ? (
                isJoinedTelegram ? (
                  <div className='status-1'>Success</div>
                ) : (
                  <div
                    className='status-0'
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
                  className='status-1'
                  onClick={() => {
                    const user = WebApp.initDataUnsafe;
                    setIsLoading(10);
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
                <div className='connect-telegram' id='connect-telegram'></div>
              )} */}
              {userProfile?.twitter ? (
                isFollowed ? (
                  <div className='flex items-center gap-1'>Completed</div>
                ) : (
                  <div
                    className='flex items-center gap-1'
                    onClick={() => {
                      window.open(`https://twitter.com/Aquachilling/status/1772973413365141606`, '_blank');
                    }}
                  >
                    <img className='w-5' src={X} alt='' />
                    Retweet
                    {/* {isLoading && <Spin indicator={<LoadingOutlined style={{ fontSize: 16 }} spin />} />} */}
                  </div>
                )
              ) : (
                <div
                  className='flex items-center gap-1'
                  onClick={() => {
                    window.open(getTwitterOauthUrl(), '_blank', '');
                  }}
                >
                  Link X Account
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
                isJoinedTelegram && '!bg-[#3F4958] !border-[#0C2449] !text-[#FFFFFF33]                '
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
                <div className='connect-telegram' id='connect-telegram'></div>
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
              className={`task-button mt-3 bg-[#7AEFFF] px-4 py-[2px] border-[2px] rounded-[8px] border-[#4C99D1] font-secondary text-xs font-semibold text-[#FFFFFF] cursor-pointer ${
                false && '!bg-[#3F4958] !border-[#0C2449] !text-[#FFFFFF33]                '
              }`}
            >
              {true ? 'Start' : 'Completed'}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
