import { Provider as ProviderRedux } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { store } from './store';
import { QueryClientProvider } from 'react-query';
import { ThirdwebProvider } from '@thirdweb-dev/react';
import { QueryClient } from 'react-query';
import { CredentialProvider } from '@/providers/credential.provider';
import { RouterProvider } from '@/providers/router.provider';
import { ENVS } from '@/config';
// import { LoadingProvider } from '@/providers/loading.provider';
import { SUPPORTED_NETWORKS } from '@/config/network.config';
import { WalletContextProvider } from '@/contexts/wallet.context';
import { FixedGlobalStyle } from '@/providers/theme.provider';
import { CustomCurSor } from '@/components/custom-cursor/custom-cursor';
import '@/constants/style/locomotive-scroll.css';
import { LoadingProvider } from '@/providers/loading.provider';
import { NotificationProvider } from '@/contexts/notification.context';

const queryClient = new QueryClient();
let persistor = persistStore(store);

export const App = () => {
  return (
    <ProviderRedux store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <ThirdwebProvider
            activeChain={
              (SUPPORTED_NETWORKS[parseInt(import.meta.env.REACT_APP_BASE_CHAIN_ID?.[0] || '1')] as any) || 'binance'
            }
            autoConnect={true}
            clientId={ENVS.VITE_THIRD_WEB_CLIENT_ID}
          >
            <WalletContextProvider>
              <CredentialProvider>
                <FixedGlobalStyle />
                {window.innerWidth > 780 && <CustomCurSor />}
                <NotificationProvider>
                  <RouterProvider>{<LoadingProvider />}</RouterProvider>
                </NotificationProvider>
              </CredentialProvider>
            </WalletContextProvider>
          </ThirdwebProvider>
        </QueryClientProvider>
      </PersistGate>
    </ProviderRedux>
  );
};
