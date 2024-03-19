import { IRootState } from '@/app/store';

export const selectDiscord = (state: IRootState) => state.discord?.discord;
