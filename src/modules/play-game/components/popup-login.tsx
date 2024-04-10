import TonSymbol from '@/assets/wallet/ton_symbol.svg';
import { Wrapper } from './popup-login.styled';
import React from 'react';
import { selectToken } from '@/redux';
import { useLoginWithTon } from '@/hooks/use-login-with-ton';
import { useSelector } from 'react-redux';
import { TonConnectButton, useTonWallet } from '@tonconnect/ui-react';

export const PopUpLogin = () => {
  const token = useSelector(selectToken);
  const wallet = useTonWallet();
  const { tonConnectUI } = useLoginWithTon();
  
  return (
    <Wrapper>
      <div className='login-content'>
        <div className='steps'>
          <div className='title'>Login</div>
          <div className='subtitle'>Connect your TON wallet to start playing game.</div>
          <div className='step st'>
              <div className='btns'>
                <div
                  className='btn'
                  onClick={() => {
                    tonConnectUI.openModal();
                  }}
                >
                  <img src={TonSymbol} alt='' />
                  Sign in with TON
                </div>
              </div>
            </div>
            <div className='step st'>
              <TonConnectButton/>
            </div>
        </div>
      </div>
    </Wrapper>
  );
};
