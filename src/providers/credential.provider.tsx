/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectToken } from '@/redux';
import { setAccessToken } from '@/utilities';
import { setAccessGameToken } from '@/utilities/http-game.utils';
export const CredentialProvider = ({ children }: { children: any }) => {
  const token = useSelector(selectToken);
  useEffect(() => {
    setAccessToken(token);
    setAccessGameToken(token);
  }, [token]);

  return children;
};
