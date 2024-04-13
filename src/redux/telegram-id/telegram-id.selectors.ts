import { IRootState } from '@/app/store';

export const selectTelegram = (state: IRootState) => state.telegram?.telegram;
