import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import { useDispatch } from 'react-redux';
import { AccountReducer } from '@/redux';
import { SocialReducer } from '@/redux';
import { ReferralReducer } from '@/redux';

const accountPersistConfig = {
  key: 'account',
  storage: storage,
  blacklist: ['isLoadingVerifyWallet']
};
const reducers = combineReducers({
  account: persistReducer(accountPersistConfig, AccountReducer),
  social: persistReducer(accountPersistConfig, SocialReducer),
  referral: persistReducer(accountPersistConfig, ReferralReducer)
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
