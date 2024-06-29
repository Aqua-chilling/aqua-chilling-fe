import { ENVS } from '@/config';
import { Address, Builder } from '@ton/core';

export enum COMMUNICATIONTYPE {
  TOAPP = 'jsbridgeGAME2APP',
  TOGAME = 'jsbridgeAPP2GAME'
}

export const gasFee = 0.02;
export const validUntil = 120 * 1000;
const s = 0;

export enum COMMUNICATIONFUNCTION {
  LOGIN_REQUEST = 'CallLoginWallet',
  LOGIN_SUCCESS = 'LoginSuccessCallback',
  SHOW_QUEST = 'CallShowQuest',
  SHOW_BUY_PACK = 'CallShowBuyPack',
  BUY_PACK = 'BuyPackCallback',
  SUCCESS_PARAM = 'success',
  FAIL_PARAM = 'fail',
  SHOW_WALLET = 'CallShowWallet',
  LOADED_ALL = ''
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
export const TWITTER_CLIENT_ID = !ENVS.VITE_ISTESTNET
  ? 'RWItdVY4cFFrOGxqTjJzdXk3ajM6MTpjaQ'
  : 'bE5QRkpOY3IwM3A1dlowcXBlQmY6MTpjaQ';
export const getDiscordOauthUrl = () => {
  return 'https://discord.com/api/oauth2/authorize?client_id=1217116791646584852&redirect_uri=https%3A%2F%2Fapi-game-test.aquachilling.com%2Fv1%2Fauth%2Fdiscord&response_type=code&scope=identify%20email';
};

export const getTwitterOauthUrl = () => {
  const rootUrl = 'https://twitter.com/i/oauth2/authorize';
  const options = {
    redirect_uri: `${ENVS.VITE_BASE_GAME_API}v1/auth/twitter`,
    client_id: TWITTER_CLIENT_ID,
    state: 'state',
    response_type: 'code',
    code_challenge: 'nIEo9xKfSvb49Refywo6XT_DGZDATVw2SZzX8cX0iYQ',
    code_challenge_method: 'S256',
    scope: ['users.read', 'tweet.read', 'follows.read', 'follows.write'].join(' ')
  };
  const qs = new URLSearchParams(options).toString();
  return `${rootUrl}?${qs}`;
};

export const twaRedirects = [
  'telegram_wallet_task',
  'telegram_wallet_buy',
  'telegram_wallet_connect',
  'telegram_wallet_checkin',
  'telegram_wallet_buy_success'
];
