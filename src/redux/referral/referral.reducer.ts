import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface IReferralState {
  refreferral_code_status: number;
  referral_code: string;
}

const initialState: IReferralState = {
  refreferral_code_status: 0,
  referral_code: ''
};

const referralSlice = createSlice({
  name: 'social',
  initialState,
  reducers: {
    updateReferral(state: IReferralState, action: PayloadAction<IReferralState>) {
      state.refreferral_code_status = action.payload.refreferral_code_status;
      state.referral_code = action.payload.referral_code;
    }
  }
});

export const { updateReferral } = referralSlice.actions;

export const ReferralReducer = referralSlice.reducer;
