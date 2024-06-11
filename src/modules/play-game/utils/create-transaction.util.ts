import { ENVS } from '@/config';
import { gasFee, validUntil } from '@/constants/app-constaints';
import { beginCell, toNano, Address } from '@ton/ton';
import { CHAIN } from '@tonconnect/ui-react';

export const createTransaction = (wallet: any, packID: number, amount: number, price: number, userId: string) => {
  if (!wallet?.account || !packID) {
    return undefined;
  }
  const transactionPayload = beginCell().storeUint(0, 32).storeStringTail(`${userId}-${packID}-${amount}`).endCell();
  console.log('packId', packID, price, amount);
  const _amount = toNano(amount * price)?.toString();
  const messages = [
    {
      address: ENVS.VITE_BASE_PACKAGE_TON_CONTRACT,
      amount: _amount,
      payload: transactionPayload.toBoc().toString('base64')
    }
  ];
  return {
    validUntil: Math.floor(Date.now() / 1000) + validUntil,
    network: ENVS?.VITE_ISTESTNET ? CHAIN.TESTNET : CHAIN.MAINNET,
    from: wallet?.account?.address || '',
    messages: messages
  };
};
