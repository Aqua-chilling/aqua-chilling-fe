import http from '@/utilities/http.utils';
import httpGame from '@/utilities/http-game.utils';
import { ILoginPayload, ILoginResponse } from './oauth.entity';
export class OauthRepository {
  static oauthGoogle(): Promise<any> {
    return http.get(`/api/oauth/google`);
  }
  static login(body: ILoginPayload): Promise<ILoginResponse> {
    return httpGame.post(`/auth/login`, body);
  }
  static loginByGoogle(code: string): Promise<any> {
    return httpGame.post(`/auth/login-google`, code);
  }
}
