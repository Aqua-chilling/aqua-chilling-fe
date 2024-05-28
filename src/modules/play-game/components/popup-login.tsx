import TonSymbol from '@/assets/wallet/ton_symbol.svg';
import { Wrapper } from './popup-login.styled';
import React from 'react';
import { selectToken } from '@/redux';
import { useSelector } from 'react-redux';
import { useTonWalletContext } from '@/contexts/ton-wallet.context';
import { TonConnectButton, useTonWallet } from '@tonconnect/ui-react';

export const PopUpLogin = () => {
  const { tonConnectUI, isLoading } = useTonWalletContext();
  
  return (
    <Wrapper>
      <div className='login-content'>
        <div className='steps'>
          <div className='title'>Login</div>
          <div className='subtitle'>
            {isLoading ? 'Signing... Please wait' : 'Connect your TON wallet to start playing game.'}{' '}
          </div>
          {!isLoading && (
            <div className='step st'>
              <div className='btns'>
                <div
                  className='btn'
                  onClick={async () => {
                    if (tonConnectUI.connected) {
                      await tonConnectUI.disconnect();
                    }
                    tonConnectUI.openModal();
                  }}
                >
                  <img src={TonSymbol} alt='' />
                  Sign in with TON
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
};
