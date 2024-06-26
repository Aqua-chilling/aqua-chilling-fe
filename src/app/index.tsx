import { Provider as ProviderRedux } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { store } from './store';
import { QueryClientProvider } from 'react-query';
import { QueryClient } from 'react-query';

import { RouterProvider } from '@/providers/router.provider';
import { ENVS } from '@/config';
// import { LoadingProvider } from '@/providers/loading.provider';
import { FixedGlobalStyle } from '@/providers/theme.provider';
// import { CustomCurSor } from '@/components/custom-cursor/custom-cursor';
import '@/constants/style/locomotive-scroll.css';
import { LoadingProvider } from '@/providers/loading.provider';
import { NotificationProvider } from '@/contexts/notification.context';
import { THEME, TonConnectUIProvider, TonConnectUIContext } from '@tonconnect/ui-react';
import { CredentialProvider } from '@/providers/credential.provider';
import { AccountInfoContextProvider } from '@/contexts/account-info.context';
const queryClient = new QueryClient();
let persistor = persistStore(store);

export const App = () => {
  return (
    <ProviderRedux store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <CredentialProvider>
          <QueryClientProvider client={queryClient}>
            <TonConnectUIProvider
              manifestUrl={`${window.location.origin}/tonconnect${
                !ENVS.VITE_ISTESTNET ? '-mainnet' : ''
              }-manifest.json`}
              uiPreferences={{ theme: THEME.DARK }}
              walletsListConfiguration={{
                includeWallets: [
                  {
                    appName: 'safepalwallet',
                    name: 'SafePal',
                    imageUrl: 'https://s.pvcliping.com/web/public_image/SafePal_x288.png',
                    aboutUrl: 'https://www.safepal.com/download',
                    jsBridgeKey: 'safepalwallet',
                    platforms: ['ios', 'android', 'chrome', 'firefox']
                  },
                  {
                    appName: 'tonwallet',
                    name: 'TON Wallet',
                    imageUrl: 'https://wallet.ton.org/assets/ui/qr-logo.png',
                    aboutUrl: 'https://chrome.google.com/webstore/detail/ton-wallet/nphplpgoakhhjchkkhmiggakijnkhfnd',
                    universalLink: 'https://wallet.ton.org/ton-connect',
                    jsBridgeKey: 'tonwallet',
                    bridgeUrl: 'https://bridge.tonapi.io/bridge',
                    platforms: ['chrome', 'android']
                  }
                ]
              }}
              actionsConfiguration={{
                returnStrategy: 'back',
                twaReturnUrl: 'https://t.me/aquachillingbot/aquachillingapp'
              }}
            >
              <FixedGlobalStyle />
              {/* {window.innerWidth > 780 && <CustomCurSor />} */}
              <NotificationProvider>
                <AccountInfoContextProvider>
                  <RouterProvider>{<LoadingProvider />}</RouterProvider>
                </AccountInfoContextProvider>
              </NotificationProvider>
            </TonConnectUIProvider>
          </QueryClientProvider>
        </CredentialProvider>
      </PersistGate>
    </ProviderRedux>
  );
};
