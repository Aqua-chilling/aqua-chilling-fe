import { Provider as ProviderRedux } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { store } from './store';
import { QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';
import { ThirdwebProvider } from '@thirdweb-dev/react';
import { QueryClient } from 'react-query';
import { CredentialProvider } from '@/providers/credential.provider';
import { RouterProvider } from '@/providers/router.provider';
import { ENVS } from '@/config';
import { LoadingProvider } from '@/providers/loading.provider';
import { SUPPORTED_NETWORKS } from '@/config/network.config';
import { WalletContextProvider } from '@/contexts/wallet.context';
import { FixedGlobalStyle } from '@/providers/theme.provider';
import { CustomCurSor } from '@/components/custom-cursor/custom-cursor';
import { Header } from '@/components/header/header';
import { ScrollProvider } from '@/providers/scroll.provider';

const queryClient = new QueryClient();
const persistor = persistStore(store);

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
                <CustomCurSor />
                <ScrollProvider />
                <RouterProvider>
                  <Header />
                  <LoadingProvider />
                </RouterProvider>
                <ToastContainer
                  position='bottom-right'
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  pauseOnFocusLoss
                  pauseOnHover
                />
              </CredentialProvider>
            </WalletContextProvider>
          </ThirdwebProvider>
        </QueryClientProvider>
      </PersistGate>
    </ProviderRedux>
  );
};
