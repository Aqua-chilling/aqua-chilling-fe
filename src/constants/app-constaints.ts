import { Address, Builder } from '@ton/core';

export enum COMMUNICATIONTYPE {
  TOAPP = 'jsbridgeGAME2APP',
  TOGAME = 'jsbridgeAPP2GAME'
}

export enum COMMUNICATIONFUNCTION {
  LOGIN_REQUEST = 'CallLoginWallet',
  LOGIN_SUCCESS = 'LoginSuccessCallback',
  SHOW_QUEST = 'CallShowQuest',
  SHOW_BUY_PACK = 'CallShowBuyPack',
  BUY_PACK = 'BuyPackCallback',
  SUCCESS_PARAM = 'success',
  FAIL_PARAM = 'fail',
  SHOW_WALLET = 'CallShowWallet'
}

export type BuyPack = {
  $$type: 'BuyPack';
  queryId: bigint;
  packId: bigint;
  response_destination: Address | null;
  amount: bigint;
};

export function storeBuyPack(src: BuyPack) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(3850333806, 32);
    b_0.storeUint(src.queryId, 64);
    b_0.storeInt(src.packId, 257);
    b_0.storeAddress(src.response_destination);
    b_0.storeInt(src.amount, 257);
  };
}
