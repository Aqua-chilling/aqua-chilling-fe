import { IRootState } from '@/app/store';

export const selectAddress = (state: IRootState) => state.account.address;
export const selectToken = (state: IRootState) => state.account?.token;
export const selectEmail = (state: IRootState) => state.account?.email;
export const selectName = (state: IRootState) => state.account?.name;
export const selectId = (state: IRootState) => state.account?.id;
