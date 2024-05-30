import * as React from 'react';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { selectToken } from '@/redux';
import { ENVS } from '@/config';
import { OauthRepository } from '@/repositories/oauth/oauth.repository';
export interface IAccountInfoContext {
  userProfile: any;
}

const AccountInfoContext = React.createContext<IAccountInfoContext | null>(null);
export const AccountInfoContextProvider = ({ children }: React.PropsWithChildren) => {
  const token = useSelector(selectToken);
  const { data: userProfile } = useQuery({
    queryKey: ['retrieveProfile', token],
    queryFn: () => OauthRepository.getProfile(),
    retry: false,
    enabled: !!token
  });

  const value = {
    userProfile
  };

  return <AccountInfoContext.Provider value={value}>{children}</AccountInfoContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAccountInfoContext = (): IAccountInfoContext => {
  const context = React.useContext(AccountInfoContext);
  if (context === undefined) {
    throw new Error('useAccountInfoContext Error');
  }
  return context as IAccountInfoContext;
};
