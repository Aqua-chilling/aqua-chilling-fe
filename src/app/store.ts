import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import { useDispatch } from 'react-redux';
import { AccountReducer, DiscordIdReducer, ReferralReducer, TwitterIdReducer } from '@/redux';
import { TelegramIdReducer } from '@/redux/telegram-id';

const accountPersistConfig = {
  key: 'account',
  storage: storage,
  blacklist: ['isLoadingVerifyWallet']
};
const reducers = combineReducers({
  account: persistReducer(accountPersistConfig, AccountReducer),
  discord: persistReducer(accountPersistConfig, DiscordIdReducer),
  twitter: persistReducer(accountPersistConfig, TwitterIdReducer),
  referral: persistReducer(accountPersistConfig, ReferralReducer),
  telegram: persistReducer(accountPersistConfig, TelegramIdReducer)
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['account']
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store: any = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
});

export type IRootState = ReturnType<typeof store.getState>;
export type IAppDispatch = typeof store.dispatch;
export const dispatch = store.dispatch;
export const useAppDispatch = () => useDispatch<IAppDispatch>();
