// import { IconButton } from '@mui/material';
import { memo, useCallback, useState } from 'react';
import { Wrapper } from './connect-form.styled';
import { WALLET_SUPPORTED, WALLET_TYPE_SUPPORTED, WalletInfo } from '@/config/wallet.config';
import MetamaskImage from '@/assets/wallet/metamask.png';
import WalletConnectImage from '@/assets/wallet/walletconnect.png';
import { Button } from 'antd';
import { formatErrorMessageWallet } from '@/utilities/format.utils';

interface IConnectFormProps {
  connect: (wallet: WALLET_TYPE_SUPPORTED) => void;
  open: boolean;
  close: () => void;
}
const ConnectFormComponent = ({ connect, open, close }: IConnectFormProps) => {
  const [activeWallet, setActiveWallet] = useState(0);
  const [isLoading, setIsLoading] = useState({
    [WALLET_TYPE_SUPPORTED.INJECTED]: false,
    [WALLET_TYPE_SUPPORTED.WALLET_CONNECT]: false
  });

  const onConnectWallet = useCallback(
    async (wallet: WalletInfo, index: number) => {
      setActiveWallet(index);
      setIsLoading({ ...isLoading, [wallet.connector]: true });
      try {
        await connect(wallet.connector);
        close();
      } catch (err: any) {
        const formattedMessage = formatErrorMessageWallet(err.message);
        // toast.error(formattedMessage?.message || err?.message);
      } finally {
        setIsLoading({ ...isLoading, [wallet.connector]: false });
      }
    },
    [close, connect, isLoading]
  );

  return (
    <Wrapper keyboard footer={null} open={open} onCancel={close}>
      <div className='form'>
        <span className='title'>Connect to ArtStock</span>
        <span className='subtitle'>Connect a wallet</span>
        <div className='connectors'>
          {WALLET_SUPPORTED.map((wallet, index) => (
            <Button
              key={index}
              loading={!!isLoading?.[wallet.connector]}
              className={`connector  ${activeWallet === index && 'active'}`}
              onClick={() => onConnectWallet(wallet, index)}
            >
              <img
                className='wallet-image'
                src={wallet.connector === WALLET_TYPE_SUPPORTED.INJECTED ? MetamaskImage : WalletConnectImage}
                alt={wallet.name}
              />
              <div className='connect'>
                <span className=''>{wallet.name}</span>
              </div>
            </Button>
          ))}
        </div>
        <div className='line'></div>
        <div className='label'>
          By connecting to ArtStock, you agree to the Terms of Service, Privacy Statement, and API & SDK License
          Agreement.
        </div>
      </div>
    </Wrapper>
  );
};

export const ConnectForm = memo(ConnectFormComponent);
export default ConnectForm;
