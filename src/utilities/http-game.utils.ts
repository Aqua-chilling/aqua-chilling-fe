import axios, { AxiosError } from 'axios';
import { ENVS } from '@/config/env.config';
import { ERROR_CODE } from '@/constants';
import { deleteAccount } from '@/redux';
import { dispatch } from '@/app/store';
import { camelCaseKeys } from './string.utils';
import { useWalletContext } from '@/contexts/wallet.context';
const TIMEOUT = 20000;
const instance = axios.create({
  timeout: TIMEOUT
});

const HEADERS = { 'Content-Type': 'application/json' };

export let accessToken = '';

instance.interceptors.request.use(
  (req: any) => {
    req.baseURL = `${ENVS.VITE_BASE_GAME_API}v1/`;
    let authen = {};
    if (accessToken) {
      authen = { Authorization: `Bearer ${accessToken}` };
    }

    req.headers = {
      ...HEADERS,
      ...req.headers,
      ...authen
    };
    return req;
  },
  (error) => {
    Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (res: any) => {
    const result = res?.data;
    const error = !res?.data?.success && !result;
    if (error) {
      return Promise.reject(camelCaseKeys(result.message));
    }
    return Promise.resolve(result?.data || result);
  },
  (axiosError: AxiosError) => {
    const dataError = axiosError.response?.data;
    if (axiosError && !axiosError?.response) {
      throw new Error('Send request API failed');
    }
    if (
      ((dataError as any).data.message === ERROR_CODE.Guard_MalformedJWT ||
        (dataError as any).data.message === 'jwt expired') &&
      accessToken
    ) {
      dispatch(deleteAccount());
    }
    const messge = (dataError as any).data?.message;

    return Promise.reject(camelCaseKeys(messge || axiosError));
  }
);

export const setAccessToken = (token: string) => {
  accessToken = token;
};

export default instance;
