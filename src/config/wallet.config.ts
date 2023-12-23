export enum WALLET_TYPE_SUPPORTED {
  INJECTED = "injected",
  WALLET_CONNECT = "walletconnect",
}

export interface WalletInfo {
  name: string;
  path: string;
  connector: WALLET_TYPE_SUPPORTED;
  description: string;
}

export const WALLET_SUPPORTED: WalletInfo[] = [
  {
    name: "Metamask",
    path: "metamask.png",
    connector: WALLET_TYPE_SUPPORTED.INJECTED,
    description: "Mobile Wallet and Extension",
  },
  {
    name: "Wallet Connect",
    path: "walletconnect.png",
    connector: WALLET_TYPE_SUPPORTED.WALLET_CONNECT,
    description: "Connector",
  },
];
