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
    req.baseURL = `${ENVS.VITE_BASE_BC_API}/api/`;
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
    const { response: { data } = {} } = axiosError;
    if (axiosError && !axiosError?.response) {
      throw new Error('Send request API failed');
    }
    if (
      ((data as any).message === ERROR_CODE.Guard_MalformedJWT || (data as any).message === 'jwt expired') &&
      accessToken
    ) {
      dispatch(deleteAccount());
    }

    const { message } = (data as any) || {};
    return Promise.reject(camelCaseKeys(message || axiosError));
  }
);

export const setAccessToken = (token: string) => {
  accessToken = token;
};

export default instance;
