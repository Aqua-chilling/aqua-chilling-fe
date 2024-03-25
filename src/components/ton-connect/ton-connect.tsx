import { memo } from 'react';
import { Wrapper } from './ton-connect.styled';
import { TonConnectButton } from '@tonconnect/ui-react';

const ConnectButtonComponent = () => {
  return (
    <Wrapper>
      <TonConnectButton />
    </Wrapper>
  );
};

export const ConnectButton = memo(ConnectButtonComponent);
export default ConnectButton;
