import { ENVS } from '@/config';
import { beginCell, toNano, Address } from '@ton/ton';
import { CHAIN } from '@tonconnect/ui-react';

export const createTransaction = (wallet: any, packID: number, amount: number) => {
  if (!wallet?.account || !packID) {
    return undefined;
  }
  const transactionPayload = beginCell()
    .storeUint(3850333806, 32)
    .storeUint(1, 64)
    .storeInt(2, 257)
    .storeAddress(Address.parse(wallet.account.address))
    .storeInt(1, 257)
    .endCell();
  const messages = [
    {
      address: ENVS.VITE_BASE_PACKAGE_TON_CONTRACT, //CONTRACT
      amount: '1900000000',
      payload: transactionPayload.toBoc().toString('base64')
    }
  ];
  return {
    // validUntil: Math.floor(Date.now() / 1000) + 60,
    // network: ENVS?.VITE_ISTESTNET ? CHAIN.TESTNET : CHAIN.MAINNET,
    // from: wallet?.account?.address || '',
    messages: messages
  };
};
