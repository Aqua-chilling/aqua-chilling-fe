import { IRootState } from '@/app/store';

export const selectTwitter = (state: IRootState) => state.twitter?.twitter;
