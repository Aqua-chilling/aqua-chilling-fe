import http from '@/utilities/http.utils';
import httpGame from '@/utilities/http-game.utils';
import { ILoginPayload, ILoginResponse, IOauthLoginResponse } from './oauth.entity';
import { Address, TonClient, TupleBuilder } from '@ton/ton';
import { ENVS } from '@/config';
export class OauthRepository {
  static oauthGoogle(): Promise<any> {
    return http.get(`/api/oauth/google`);
  }
  static login(body: ILoginPayload): Promise<ILoginResponse> {
    return httpGame.post(`/auth/login`, body);
  }
  static loginByGoogle(code: string): Promise<IOauthLoginResponse> {
    return httpGame.post(`/auth/login-google`, { code: code });
  }
  static loginByX(code: string): Promise<IOauthLoginResponse> {
    return httpGame.post(`/auth/login-twitter`, { code: code });
  }
  static loginByDiscord(code: string): Promise<IOauthLoginResponse> {
    return httpGame.post(`/auth/login-discord`, { code: code });
  }
  static getProfile(): Promise<ILoginResponse> {
    return httpGame.get(`/auth/profile`);
  }
  static getProfileLite(): Promise<ILoginResponse> {
    return httpGame.get(`/auth/profile-lite`);
  }
  static linkXAccount(code: string): Promise<any> {
    return httpGame.post(`/bc/link-twitter`, { code: code });
  }
  static linkDiscordAccount(code: string): Promise<any> {
    return httpGame.post(`/bc/link-discord`, { code: code });
  }
  static linkTelegramAccount(body: any): Promise<any> {
    return httpGame.post(`/bc/link-telegram`, body);
  }
  static enterReferralCode(code: string): Promise<any> {
    return httpGame.post(`/bc/enter-referral-code`, { referral_code: code });
  }
  static oauthTon(tonProof: any): Promise<any> {
    return httpGame.post(`/auth/login-ton`, tonProof);
  }
  static generateTonPayload(): Promise<any> {
    return httpGame.post(`/auth/ton-generate-payload`);
  }
  static loginWithTelegram(initData: string): Promise<any> {
    return httpGame.post(`/auth/login-telegram`, {
      initData
    });
  }

  static checkIsCheckin(user_id: number): Promise<any> {
    const client = new TonClient({
      endpoint: ENVS.VITE_ISTESTNET
        ? 'https://testnet.toncenter.com/api/v2/jsonRPC'
        : 'https://toncenter.com/api/v2/jsonRPC'
    });
    const builder = new TupleBuilder();
    builder.writeNumber(user_id);
    return client
      .runMethod(Address.parse(ENVS.VITE_BASE_CHECKIN_CONTRACT), 'getLastCheckedInDate', builder.build())
      .then(function (response1) {
        const res = response1.stack.readNumber();
        return res;
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
