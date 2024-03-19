import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface ITwitterIdState {
  twitter?: string;
}

const initialState: ITwitterIdState = {
  twitter: ''
};

const twitterSlice = createSlice({
  name: 'twitter',
  initialState,
  reducers: {
    updateTwitterId(state: ITwitterIdState, action: PayloadAction<ITwitterIdState>) {
      state.twitter = action.payload.twitter;
    }
  }
});

export const { updateTwitterId } = twitterSlice.actions;

export const TwitterIdReducer = twitterSlice.reducer;
