import { IRootState } from '@/app/store';

export const selectReferralCodeStatus = (state: IRootState) => state.referral?.refreferral_code_status;
export const selectReferralCode = (state: IRootState) => state.referral?.referral_code;
