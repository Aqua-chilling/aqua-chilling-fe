import * as React from 'react';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { selectToken } from '@/redux';
import { ENVS } from '@/config';
import { OauthRepository } from '@/repositories/oauth/oauth.repository';
export interface IAccountInfoContext {
  userProfile: any;
  refetchProfile: () => void;
  userProfileLite: any;
  refetchProfileLite: () => void;
  setInterval: (time: number) => void;
  firstLogin: boolean;
  setFirstLogin: (isFirst: boolean) => void;
}

const AccountInfoContext = React.createContext<IAccountInfoContext | null>(null);
export const AccountInfoContextProvider = ({ children }: React.PropsWithChildren) => {
  const [firstLogin, setFirstLogin] = React.useState(true);
  const [interval, setInterval] = React.useState(15000);
  const token = useSelector(selectToken);
  const { data: userProfile, refetch: refetchProfile } = useQuery({
    queryKey: ['retrieveProfile', token],
    queryFn: () => OauthRepository.getProfile(),
    retry: false,
    enabled: !!token,
    refetchInterval: 50000
  });

  const { data: userProfileLite, refetch: refetchProfileLite } = useQuery({
    queryKey: ['retrieveProfileLite', token],
    queryFn: () => OauthRepository.getProfileLite(),
    retry: false,
    enabled: !!token,
    refetchInterval: interval
  });

  const value = {
    userProfile,
    refetchProfile,
    userProfileLite,
    refetchProfileLite,
    setInterval,
    firstLogin,
    setFirstLogin
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
