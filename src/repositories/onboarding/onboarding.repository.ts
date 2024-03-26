import http from '@/utilities/http.utils';
import httpGame from '@/utilities/http-game.utils';
export class OnboardingRepository {
  static RetrieveTaskOfTwitter(id: string): Promise<any> {
    return http.get(`/v1/onboarding/twitter/${id}`);
  }
  static RetrieveTaskOfDiscord(id: string): Promise<any> {
    return http.get(`/v1/onboarding/discord/${id}`);
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
}
