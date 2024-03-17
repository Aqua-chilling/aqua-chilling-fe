import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getAccessToken, getNonceRegistered, getSignature, registerAndGetNonce } from './account.service';
import { ENVS } from '@/config';
import { ERROR_CODE } from '@/constants';

export interface IAccountState {
  email: string;
  name: string;
  token: string;
  address?: string;
  id: string;
}

export interface IResponseWalletStatus {
  registered: boolean;
  nonce: string;
}

export interface IWalletProvider {
  address?: string;
  refferal?: string;
  sdk: any;
  callback?: () => void;
}

const initialState: IAccountState = {
  email: '',
  name: '',
  token: '',
  address: '',
  id: ''
};

export const signInByWallet = createAsyncThunk('account/signinUserByWallet', async (wallet: IWalletProvider) => {
  try {
    // const sdk = useSDK();
    if (!wallet.address) {
      throw new Error('Please connect your wallet');
    }
    const walletStatus: IResponseWalletStatus = await getNonceRegistered(wallet.address);
    const isRegister = walletStatus.registered;
    let nonce = isRegister ? walletStatus.nonce : undefined;
    if (!isRegister) {
      const resRegister: IResponseWalletStatus = await registerAndGetNonce(
        wallet.address,
        parseInt(ENVS.VITE_BASE_CHAIN_ID[0]),
        wallet.refferal
      );
      nonce = resRegister.nonce;
    }
    if (!nonce) {
      throw new Error(ERROR_CODE.Auth_InvalidNonce);
    }
    const signature = await getSignature(nonce, wallet?.sdk);

    if (!signature) {
      throw new Error(ERROR_CODE.Auth_InvalidSignature);
    }
    const account: IAccountState = await getAccessToken(wallet.address, signature);
    return { ...account, address: wallet.address, callback: wallet.callback };
  } catch (err: any) {
    // toast.error(err?.message || err);
  }
});

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    updateAccount(state: IAccountState, action: PayloadAction<IAccountState>) {
      state.token = action.payload.token;
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.id = action.payload.id;
      state.address = action.payload.address;
    },
    deleteAccount(state: IAccountState) {
      (state.token = ''), (state.email = ''), (state.name = ''), (state.id = ''), (state.address = undefined);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(signInByWallet.fulfilled, (state: IAccountState, action: any) => {
      // Add user to the state array
      state.token = action?.payload?.token;
      state.address = action?.payload?.address;
      action.payload.callback && action.payload.callback();
    });
    builder.addCase(signInByWallet.pending, (state: IAccountState) => {});
    builder.addCase(signInByWallet.rejected, (state: IAccountState) => {});
  }
});

export const { updateAccount, deleteAccount } = accountSlice.actions;

export const AccountReducer = accountSlice.reducer;
