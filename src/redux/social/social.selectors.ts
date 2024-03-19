import { IRootState } from '@/app/store';

export const selectTwitter = (state: IRootState) => state.social?.twitter;
export const selectDiscord = (state: IRootState) => state.social?.discord;
