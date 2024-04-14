import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface ITelegramIdState {
  telegram?: string;
}

const initialState: ITelegramIdState = {
  telegram: ''
};

const telegramSlice = createSlice({
  name: 'telegram',
  initialState,
  reducers: {
    updateTelegramId(state: ITelegramIdState, action: PayloadAction<ITelegramIdState>) {
      state.telegram = action.payload.telegram;
    }
  }
});

export const { updateTelegramId } = telegramSlice.actions;

export const TelegramIdReducer = telegramSlice.reducer;
