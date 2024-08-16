import { Address, beginCell, Cell, storeMessage } from '@ton/core';

export const waitForTransaction = async (options: any, client: any, cb: () => void) => {
  const { boc, refetchInterval = 5000, refetchLimit = 100, address } = options;
  const hash = Cell.fromBase64(boc).hash().toString('base64');
  const walletAddress = Address.parse(address);
  return new Promise((resolve) => {
    let refetches = 0;
    const interval = setInterval(async () => {
      refetches += 1;

      const state = await client.getContractState(walletAddress);
      if (!state || !state.lastTransaction) {
        console.log('1');
        clearInterval(interval);
        resolve(null);
        return;
      }

      const { lt: lastLt, hash: lastHash } = state.lastTransaction;
      const lastTx = await client.getTransaction(walletAddress, lastLt, lastHash);
      if (lastTx && lastTx.inMessage) {
        const msgCell = beginCell().store(storeMessage(lastTx.inMessage)).endCell();
        const inMsgHash = msgCell.hash().toString('base64');

        if (inMsgHash === hash) {
          clearInterval(interval);
          cb();
          resolve(lastTx);
        }
      }

      if (refetchLimit && refetches >= refetchLimit) {
        clearInterval(interval);
        resolve(null);
      }
    }, refetchInterval);
  });
};
