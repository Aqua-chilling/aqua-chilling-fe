import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface ISocialState {
  discord?: string;
  twitter?: string;
}

const initialState: ISocialState = {
  discord: '',
  twitter: ''
};

const socialSlice = createSlice({
  name: 'social',
  initialState,
  reducers: {
    updateSocial(state: ISocialState, action: PayloadAction<ISocialState>) {
      state.discord = action.payload.discord;
      state.twitter = action.payload.twitter;
    }
  }
});

export const { updateSocial } = socialSlice.actions;

export const SocialReducer = socialSlice.reducer;
