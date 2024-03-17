import http from '@/utilities/http.utils';
export class OnboardingRepository {
  static RetrieveTaskOfTwitter(id: string): Promise<any> {
    return http.get(`/v1/onboarding/twitter/${id}`);
  }
}
