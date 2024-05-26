import http from '@/utilities/http.utils';
import httpGame from '@/utilities/http-game.utils';
export class OnboardingRepository {
  static RetrieveTaskOfTwitter(id: string): Promise<any> {
    return http.get(`/v1/onboarding/twitter/${id}`);
  }
  static RetrieveTaskOfDiscord(id: string): Promise<any> {
    return http.get(`/v1/onboarding/discord/${id}`);
  }
  static RetrieveTaskOfTelegram(body: any): Promise<any> {
    return http.post(`/v1/telegram/check`, body);
  }
  static RetrieveTaskList(): Promise<any> {
    return http.get(`/v1/onboarding/tasks`);
  }
  static RetrieveLeaderboardList(): Promise<any> {
    return httpGame.post(`/bc/leaderboard`, {
      page: 0,
      limit: 10
    });
  }
  static RetrieveReferralsHistory(): Promise<any> {
    return httpGame.post(`/bc/referral-info`);
  }
  static RetrieveAllPackages(): Promise<any> {
    return httpGame.get(`/bc/shop-pack`);
  }
  static RetrieveUserPackages(): Promise<any> {
    return httpGame.post(`/game/get_owned_pack`);
  }
  static RetrieveAquaPackages(): Promise<any> {
    return httpGame.get(`/bc/shop-currency`);
  }
  static RetrieveUserQuests(): Promise<any> {
    return httpGame.get(`/bc/bc-quest`);
  }
  static UpdateUserQuests(updateForm: any): Promise<any> {
    return httpGame.post(`/bc/bc-update-quest`, updateForm);
  }
}
