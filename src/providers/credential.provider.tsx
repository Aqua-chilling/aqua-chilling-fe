/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/app/store';
import { selectToken, selectAddress, deleteAccount } from '@/redux';
import { setAccessToken } from '@/utilities';
import { setAccessGameToken } from '@/utilities/http-game.utils';

export const CredentialProvider = ({ children }: { children: any }) => {
  const isFirstTimeRender = useRef(true);
  const dispatch = useAppDispatch();
  const token = useSelector(selectToken);
  const addressSigned = useSelector(selectAddress);
  

  useEffect(() => {
    setAccessToken(token);
    setAccessGameToken(token);
    if (!token  && addressSigned?.toLowerCase() === address?.toLowerCase()) {
      handleOpenAuthenticateModal();
    }
  }, [token]);

  useEffect(() => {
    if ( addressSigned?.toLowerCase() !== address?.toLowerCase()) {
      dispatch(deleteAccount());
      handleOpenAuthenticateModal();
    }
    isFirstTimeRender.current = false;
  }, [address]);

  return children;
};
