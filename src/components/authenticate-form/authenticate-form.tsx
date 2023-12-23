import React, { useMemo } from 'react';
// import { ButtonCancel, Wrapper } from './authenticate-form.styled';
// import { ButtonConfirm } from './authenticate-form.styled';
import { useSelector } from 'react-redux';
import { selectIsLoadingVerifyWallet } from '@/redux';
import { Wrapper } from './authenticate-form.styled';

interface IAuthenticateFormProps {
  open: boolean;
  close: () => void;
  verify: () => void;
}

const AuthenticateFormComponent = ({ open, close, verify }: IAuthenticateFormProps) => {
  const isLoading = useSelector(selectIsLoadingVerifyWallet);
  const actions = useMemo(
    () => (
      <div className='actions'>
        {/* <ButtonCancel onClick={close}>Cancel</ButtonCancel>
        <ButtonConfirm loading={isLoading} onClick={verify}>
          Verify Now
        </ButtonConfirm> */}
      </div>
    ),
    [close, isLoading, verify]
  );

  return (
    <Wrapper keyboard footer={actions} open={open} onCancel={close}>
      <div className='title'>Verification Request</div>
      <div className='message'>
        <span className='message-detail'>
          For some of our features, we need to verify that it’s really you operating this account.
        </span>
        <span className='message-detail'>
          We do this by requesting a transaction signature that you can sign in your wallet.
        </span>
        <span className='message-detail'>
          This transaction isn’t submitted to the blockchain, it is sent to our servers to verify your signature and is
          completely free.
        </span>
      </div>
    </Wrapper>
  );
};

export const AuthenticateForm = React.memo(AuthenticateFormComponent);
