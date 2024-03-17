import http from '@/utilities/http.utils';
import httpGame from '@/utilities/http-game.utils';
import { ILoginPayload, ILoginResponse, IOauthLoginResponse } from './oauth.entity';
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
}
