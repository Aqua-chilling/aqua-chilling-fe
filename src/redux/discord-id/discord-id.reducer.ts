import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface IDiscordIdState {
  discord?: string;
}

const initialState: IDiscordIdState = {
  discord: ''
};

const discordSlice = createSlice({
  name: 'discord',
  initialState,
  reducers: {
    updateDiscordId(state: IDiscordIdState, action: PayloadAction<IDiscordIdState>) {
      state.discord = action.payload.discord;
    }
  }
});

export const { updateDiscordId } = discordSlice.actions;

export const DiscordIdReducer = discordSlice.reducer;
