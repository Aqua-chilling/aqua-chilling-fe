import { useOnOff } from "@/hooks/use-on-off";
import {
  NATIVE_TOKEN_ADDRESS,
  ThirdwebSDK,
  useAddress,
  useBalance,
  useChain,
  useConnectionStatus,
  useDisconnect,
  useMetamask,
  useNetwork,
  useNetworkMismatch,
  useSDK,
  useWalletConnect,
} from "@thirdweb-dev/react";
import { isMobile } from "react-device-detect";
import * as React from "react";
import { AuthenticateForm, ConnectForm } from "@/components";
import { WALLET_TYPE_SUPPORTED } from "@/config/wallet.config";
import { ENVS } from "@/config";
import { useDispatch } from "react-redux";
import { deleteAccount, signInByWallet } from "@/redux";
import { Chain } from "@thirdweb-dev/chains";
import { getMetamaskDeepLink } from "@/utilities/wallet.utils";

export enum ConnectionStatus {
  UNKNOWN = "unknown",
  CONNECTED = "connected",
  DISCONNECTED = "disconnected",
  CONNECTING = "connecting",
}
export interface IWalletContext {
  address?: string;
  status: ConnectionStatus;
  chainInfo?: Chain;
  isOpenConnectModal: boolean;
  handleCloseConnectModal: () => void;
  handleOpenConnectModal: () => void;
  handleCloseAuthenticateModal: () => void;
  handleOpenAuthenticateModal: () => void;
  sdk?: ThirdwebSDK;
  balance: any;
  disconnect: () => void;
}

const WalletContext = React.createContext<IWalletContext | null>(null);

export const WalletContextProvider = ({
  children,
}: React.PropsWithChildren) => {
  const dispatch = useDispatch();
  const sdk = useSDK();
  const { data: balance } = useBalance(NATIVE_TOKEN_ADDRESS);
  const {
    isOn: isOpenConnectModal,
    turnOn: handleOpenConnectModal,
    turnOff: handleCloseConnectModal,
  } = useOnOff(false);

  const {
    isOn: isOpenAuthenticateModal,
    turnOn: handleOpenAuthenticateModal,
    turnOff: handleCloseAuthenticateModal,
  } = useOnOff(false);

  // Thirdweb SDKS hooks
  const connectMetamask = useMetamask();
  const connectWalletConnect = useWalletConnect();
  const address = useAddress();
  const isNetworkMismatch = useNetworkMismatch();
  const [, switchNetwork] = useNetwork();
  const status: ConnectionStatus = useConnectionStatus() as ConnectionStatus;
  const chainInfo = useChain();
  const disconnectWallet = useDisconnect();

  const disconnect = React.useCallback(() => {
    disconnectWallet();
    dispatch(deleteAccount());
  }, [disconnectWallet, dispatch]);

  const value: IWalletContext = React.useMemo(() => {
    return {
      isOpenConnectModal,
      handleCloseConnectModal,
      handleOpenConnectModal,
      connectMetamask,
      connectWalletConnect,
      address,
      balance,
      isNetworkMismatch,
      handleOpenAuthenticateModal,
      handleCloseAuthenticateModal,
      status,
      chainInfo,
      disconnect,
      sdk,
    };
  }, [
    address,
    connectMetamask,
    balance,
    chainInfo,
    sdk,
    connectWalletConnect,
    handleCloseAuthenticateModal,
    handleCloseConnectModal,
    handleOpenAuthenticateModal,
    handleOpenConnectModal,
    isNetworkMismatch,
    isOpenConnectModal,
    disconnect,
    status,
  ]);

  const connect = React.useCallback(
    async (wallet: WALLET_TYPE_SUPPORTED) => {
      switch (wallet) {
        case WALLET_TYPE_SUPPORTED.INJECTED: {
          if (!window?.ethereum) {
            const deepLink = getMetamaskDeepLink(window.location.host);
            return window.open(deepLink, "_blank");
          }
          return await connectMetamask();
        }
        case WALLET_TYPE_SUPPORTED.WALLET_CONNECT: {
          const response = await connectWalletConnect({
            projectId: ENVS.VITE_WC_PROJECT_ID,
            chainId: parseInt(ENVS.VITE_BASE_CHAIN_ID[0]),
            qrModalOptions: { themeVariables: { "--wcm-z-index": "1000000" } },
          });

          return response;
        }
        default: {
          return await connectMetamask({
            chainId: parseInt(ENVS.VITE_BASE_CHAIN_ID[0]),
          });
        }
      }
    },
    [connectMetamask, connectWalletConnect]
  );

  const verify = React.useCallback(() => {
    dispatch(
      signInByWallet({
        address,
        sdk,
        callback: handleCloseAuthenticateModal,
      }) as any
    );
  }, [address, dispatch, handleCloseAuthenticateModal, sdk]);

  React.useEffect(() => {
    // Handle connect with browser of wallet
    if (isMobile && window?.ethereum) {
      connectMetamask();
    }
  }, []);

  React.useEffect(() => {
    if (address && isNetworkMismatch) {
      switchNetwork?.(parseInt(ENVS.VITE_BASE_CHAIN_ID[0]));
    }
  }, [address, isNetworkMismatch]);

  return (
    <WalletContext.Provider value={value}>
      <ConnectForm
        open={isOpenConnectModal}
        connect={connect}
        close={handleCloseConnectModal}
      />
      <AuthenticateForm
        verify={verify}
        open={isOpenAuthenticateModal}
        close={handleCloseAuthenticateModal}
      />
      {children}
    </WalletContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useWalletContext = (): IWalletContext => {
  const context = React.useContext(WalletContext);
  if (context === undefined) {
    throw new Error(
      "useWalletContext must be used within a WalletContextProvider"
    );
  }
  return context as IWalletContext;
};
